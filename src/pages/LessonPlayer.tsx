import React, { useState, useEffect } from 'react';
import { LanguageCode, Lesson, LessonSection, Question } from '../types';
import { t } from '../i18n';
import { SAMPLE_LESSONS } from '../data/sampleLessons';
import { AudioNarrator } from '../components/AudioNarrator';
import { EducationalIllustration } from '../components/EducationalIllustration';
import { offlineDB } from '../offline/database';
import { syncManager } from '../offline/sync-manager';
import confetti from 'canvas-confetti';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  HelpCircle, 
  RotateCcw, 
  Sparkles, 
  Star, 
  Trophy, 
  Volume2, 
  Lightbulb, 
  AlertCircle,
  Clock,
  Compass
} from 'lucide-react';

interface Props {
  lessonId: string;
  currentLanguage: LanguageCode;
  onBack: () => void;
  onNextLesson: (nextId: string) => void;
  onAwardStars: (amount: number) => void;
}

export const LessonPlayer: React.FC<Props> = ({
  lessonId,
  currentLanguage,
  onBack,
  onNextLesson,
  onAwardStars
}) => {
  const lesson = SAMPLE_LESSONS.find((l) => l.id === lessonId) || SAMPLE_LESSONS[0];
  const translation = lesson.translations[currentLanguage] || lesson.translations.en;
  const sections = translation.sections || [];

  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [questionFeedback, setQuestionFeedback] = useState<Record<string, { isCorrect: boolean; showHint: boolean }>>({});
  const [matchedPairs, setMatchedPairs] = useState<Record<string, string>>({});
  const [selectedActivityPair, setSelectedActivityPair] = useState<string | null>(null);
  const [isLessonCompleted, setIsLessonCompleted] = useState(false);
  const [quizScore, setQuizScore] = useState<{ score: number; total: number; percentage: number } | null>(null);
  const [weakTopics, setWeakTopics] = useState<string[]>([]);

  // Load existing progress from IndexedDB
  useEffect(() => {
    const loadProg = async () => {
      try {
        const prog = await offlineDB.getProgress(lesson.id);
        if (prog && prog.currentSectionIndex > 0 && prog.status !== 'completed') {
          setCurrentSectionIndex(prog.currentSectionIndex);
        }
      } catch (err) {
        console.warn('Error loading progress:', err);
      }
    };
    loadProg();
  }, [lesson.id]);

  const currentSection: LessonSection | undefined = sections[currentSectionIndex];

  // Save progress step
  const saveStepProgress = async (completed = false, finalScore = 0) => {
    const progressData = {
      lessonId: lesson.id,
      studentId: 'stud-pooja-01',
      status: completed ? ('completed' as const) : ('in_progress' as const),
      currentSectionIndex: Math.min(currentSectionIndex, sections.length - 1),
      starsEarned: completed ? 20 : 5,
      scorePercentage: finalScore,
      completedAt: completed ? new Date().toISOString() : undefined,
      lastUpdated: new Date().toISOString()
    };

    try {
      await offlineDB.saveProgress(progressData);
      // Enqueue sync event
      await syncManager.enqueueEvent('UPDATE_PROGRESS', progressData.studentId, progressData);
    } catch (err) {
      console.warn('Failed saving progress:', err);
    }
  };

  // Handle Question Answer Choice
  const handleSelectOption = (question: Question, optionId: string) => {
    setSelectedAnswers((prev) => ({ ...prev, [question.id]: optionId }));
    const chosen = question.options.find((o) => o.id === optionId);
    const isCorrect = Boolean(chosen?.isCorrect);

    setQuestionFeedback((prev) => ({
      ...prev,
      [question.id]: { isCorrect, showHint: !isCorrect }
    }));
  };

  // Handle Matching Activity click
  const handleActivityMatch = (itemA: string, itemB: string) => {
    setMatchedPairs((prev) => ({ ...prev, [itemA]: itemB }));
  };

  // Section Navigation
  const handleNextSection = () => {
    if (currentSectionIndex < sections.length - 1) {
      const nextIdx = currentSectionIndex + 1;
      setCurrentSectionIndex(nextIdx);
      saveStepProgress(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Completed last section (Quiz)
      calculateFinalResults();
    }
  };

  const handlePrevSection = () => {
    if (currentSectionIndex > 0) {
      setCurrentSectionIndex((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Calculate final Quiz Results & award stars
  const calculateFinalResults = async () => {
    let score = 0;
    let total = 0;
    const weakList: string[] = [];

    sections.forEach((sec) => {
      if (sec.questions) {
        sec.questions.forEach((q) => {
          total += 1;
          const chosenId = selectedAnswers[q.id];
          const chosenOpt = q.options.find((o) => o.id === chosenId);
          if (chosenOpt?.isCorrect) {
            score += 1;
          } else {
            weakList.push(q.text);
          }
        });
      }
    });

    const percentage = total > 0 ? Math.round((score / total) * 100) : 100;
    setQuizScore({ score, total, percentage });
    setWeakTopics(weakList);
    setIsLessonCompleted(true);

    const starsToAward = percentage >= 80 ? 25 : 15;
    onAwardStars(starsToAward);
    await saveStepProgress(true, percentage);

    // Record quiz attempt in IndexedDB & sync
    const attemptData = {
      id: `attempt_${Date.now()}`,
      clientOperationId: `quiz_op_${Date.now()}`,
      studentId: 'stud-pooja-01',
      lessonId: lesson.id,
      score,
      totalQuestions: total,
      percentage,
      isPassed: percentage >= 50,
      completedAt: new Date().toISOString(),
      weakTopics: weakList
    };

    try {
      await offlineDB.saveQuizAttempt(attemptData);
      await syncManager.enqueueEvent('SUBMIT_QUIZ', attemptData.studentId, attemptData);
    } catch (e) {
      console.warn('Offline quiz save error:', e);
    }

    // Trigger celebratory confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#176B55', '#F2B84B', '#4ea5d9']
      });
    } catch {}
  };

  // Find next lesson recommendation
  const nextLessonIndex = SAMPLE_LESSONS.findIndex((l) => l.id === lesson.id) + 1;
  const recommendedNextLesson = SAMPLE_LESSONS[nextLessonIndex] || SAMPLE_LESSONS[0];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 space-y-6">
      
      {/* Top Bar with back button and progress indicator */}
      <div className="flex items-center justify-between pb-3 border-b border-gray-200">
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 text-xs font-bold text-[#176B55] hover:text-[#0f4839] px-2.5 py-1.5 rounded-lg hover:bg-[#E6F4ED] transition"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{t('back_to_dashboard', currentLanguage)}</span>
        </button>

        {/* Step indicator */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-[#577067]">
            Step {currentSectionIndex + 1} of {sections.length}
          </span>
          <div className="w-24 sm:w-36 h-2 rounded-full bg-gray-200 overflow-hidden">
            <div
              className="h-full bg-[#176B55] transition-all duration-300"
              style={{ width: `${((currentSectionIndex + 1) / sections.length) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Main Content Card or Completion View */}
      {!isLessonCompleted ? (
        currentSection && (
          <div className="rounded-3xl bg-white border border-gray-200 shadow-md overflow-hidden">
            
            {/* Section Header */}
            <div className="p-6 sm:p-8 bg-gradient-to-r from-[#E6F4ED]/50 via-white to-white border-b border-gray-100 flex flex-wrap items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-[#176B55] text-white">
                    Class {lesson.classNumber}
                  </span>
                  <span className="text-[11px] font-semibold text-[#577067] uppercase">
                    {currentSection.sectionType.replace('_', ' ')}
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#20332E]">
                  {currentSection.title}
                </h2>
              </div>

              {/* Audio Narrator Button */}
              {currentSection.audioNarrationText && (
                <AudioNarrator
                  text={currentSection.audioNarrationText}
                  lang={currentLanguage}
                  label={t('listen_audio', currentLanguage)}
                />
              )}
            </div>

            {/* Section Body */}
            <div className="p-6 sm:p-8 space-y-6">
              
              {/* Rich text / explanation */}
              <div className="text-sm sm:text-base text-[#20332E] leading-relaxed whitespace-pre-line font-medium">
                {currentSection.content}
              </div>

              {/* Illustrated Diagram if present */}
              {currentSection.illustratedSvg && (
                <div className="my-6 p-4 rounded-2xl bg-[#FBFAF6] border border-[#e2dfd2] flex justify-center">
                  <EducationalIllustration
                    name={currentSection.illustratedSvg}
                    className="max-w-md w-full h-auto"
                  />
                </div>
              )}

              {/* Interactive Activity if present */}
              {currentSection.activity && (
                <div className="p-6 rounded-2xl bg-[#fef5e7] border border-[#f3d9a2] space-y-4">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-[#d99726]" />
                    <h3 className="font-bold text-sm text-[#20332E]">
                      {currentSection.activity.title}
                    </h3>
                  </div>
                  <p className="text-xs text-[#577067]">
                    {currentSection.activity.instructions}
                  </p>

                  {/* Matching Activity Interface */}
                  {currentSection.activity.type === 'matching' && Array.isArray(currentSection.activity.data) && (
                    <div className="space-y-3 pt-2">
                      {currentSection.activity.data.map((pair: any) => {
                        const isAnswered = Boolean(matchedPairs[pair.question]);
                        return (
                          <div
                            key={pair.id}
                            className="p-3 rounded-xl bg-white border border-[#ebdcc7] flex items-center justify-between gap-3 text-xs"
                          >
                            <span className="font-semibold text-[#20332E]">
                              {pair.question}
                            </span>
                            <button
                              onClick={() => handleActivityMatch(pair.question, pair.answer)}
                              className={`px-3 py-1.5 rounded-lg font-bold transition ${
                                isAnswered
                                  ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                                  : 'bg-[#176B55] text-white hover:bg-[#0f4839]'
                              }`}
                            >
                              {isAnswered ? `Matched: ${pair.answer} ✓` : `Reveal Match`}
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* Counting Activity Interface */}
                  {currentSection.activity.type === 'counting' && (() => {
                    const actData = currentSection.activity?.data || {};
                    const count = actData.count || 3;
                    const emoji = actData.emoji || '🥭';

                    return (
                      <div className="p-4 rounded-xl bg-white border border-[#ebdcc7] text-center space-y-3">
                        <div className="flex justify-center gap-3 text-4xl py-2">
                          {Array.from({ length: count }).map((_, i) => (
                            <span key={i} className="animate-bounce" style={{ animationDelay: `${i * 150}ms` }}>
                              {emoji}
                            </span>
                          ))}
                        </div>
                        <div className="flex justify-center gap-3">
                          {[1, 2, 3, 4, 5].map((num) => {
                            const isCorrect = num === count;
                            return (
                              <button
                                key={num}
                                onClick={() => {
                                  if (isCorrect) {
                                    alert(`🎉 Correct! ${count} items counted.`);
                                  } else {
                                    alert('Count one by one carefully! Let’s count again.');
                                  }
                                }}
                                className="w-10 h-10 rounded-xl font-black text-sm bg-[#E6F4ED] hover:bg-[#176B55] hover:text-white text-[#176B55] transition border border-[#c2e5d3]"
                              >
                                {num}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })()}
                </div>
              )}

              {/* Questions / Quiz if present in section */}
              {currentSection.questions && currentSection.questions.length > 0 && (
                <div className="space-y-6 pt-4 border-t border-gray-100">
                  {currentSection.questions.map((q, qIndex) => {
                    const chosenOptionId = selectedAnswers[q.id];
                    const feedback = questionFeedback[q.id];

                    return (
                      <div key={q.id} className="p-5 sm:p-6 rounded-2xl bg-[#FBFAF6] border border-gray-200 space-y-4">
                        <div className="flex items-start justify-between gap-3">
                          <h4 className="font-bold text-sm sm:text-base text-[#20332E] leading-snug">
                            Q{qIndex + 1}. {q.text}
                          </h4>
                          {q.hint && (
                            <button
                              onClick={() => {
                                setQuestionFeedback((prev) => ({
                                  ...prev,
                                  [q.id]: { isCorrect: prev[q.id]?.isCorrect || false, showHint: true }
                                }));
                              }}
                              className="text-xs font-semibold text-[#d99726] flex items-center gap-1 hover:underline flex-shrink-0"
                            >
                              <Lightbulb className="w-4 h-4" />
                              <span>{t('hint', currentLanguage)}</span>
                            </button>
                          )}
                        </div>

                        {/* Options */}
                        <div className="space-y-2">
                          {q.options.map((opt) => {
                            const isSelected = chosenOptionId === opt.id;
                            let btnStyle = 'bg-white border-gray-200 text-[#20332E] hover:border-[#176B55]';

                            if (isSelected) {
                              if (opt.isCorrect) {
                                btnStyle = 'bg-emerald-50 border-emerald-500 text-emerald-900 font-bold';
                              } else {
                                btnStyle = 'bg-rose-50 border-rose-500 text-rose-900 font-bold';
                              }
                            }

                            return (
                              <button
                                key={opt.id}
                                onClick={() => handleSelectOption(q, opt.id)}
                                className={`w-full text-left p-3.5 rounded-xl border text-xs sm:text-sm font-medium transition flex items-center justify-between ${btnStyle}`}
                              >
                                <span>{opt.text}</span>
                                {isSelected && opt.isCorrect && (
                                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                                )}
                              </button>
                            );
                          })}
                        </div>

                        {/* Immediate Encouraging Feedback */}
                        {feedback && (
                          <div
                            className={`p-3.5 rounded-xl text-xs font-medium space-y-1 ${
                              feedback.isCorrect
                                ? 'bg-emerald-100/70 border border-emerald-300 text-emerald-900'
                                : 'bg-amber-100/80 border border-amber-300 text-amber-900'
                            }`}
                          >
                            <div className="flex items-center gap-1.5 font-bold">
                              {feedback.isCorrect ? (
                                <>
                                  <Sparkles className="w-4 h-4 text-emerald-700" />
                                  <span>{t('well_done', currentLanguage)}</span>
                                </>
                              ) : (
                                <>
                                  <AlertCircle className="w-4 h-4 text-amber-700" />
                                  <span>{t('not_quite', currentLanguage)}</span>
                                </>
                              )}
                            </div>
                            <p className="text-[11px] leading-relaxed">
                              {q.explanation}
                            </p>
                          </div>
                        )}

                        {/* Hint box if triggered */}
                        {feedback?.showHint && q.hint && !feedback.isCorrect && (
                          <div className="p-3 rounded-xl bg-[#fef5e7] border border-[#f3d9a2] text-xs text-[#785116] flex items-start gap-2">
                            <Lightbulb className="w-4 h-4 text-[#d99726] flex-shrink-0 mt-0.5" />
                            <span><strong>Hint:</strong> {q.hint}</span>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}

            </div>

            {/* Bottom Section Controls */}
            <div className="p-6 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
              <button
                onClick={handlePrevSection}
                disabled={currentSectionIndex === 0}
                className="px-4 py-2.5 rounded-xl border border-gray-200 text-xs font-semibold text-gray-600 hover:bg-gray-100 disabled:opacity-30 disabled:pointer-events-none transition"
              >
                Previous Step
              </button>

              <button
                onClick={handleNextSection}
                className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#176B55] hover:bg-[#0f4839] text-white text-xs sm:text-sm font-bold shadow-md transition"
              >
                <span>{currentSectionIndex === sections.length - 1 ? 'Finish Lesson & Review' : 'Next Step'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )
      ) : (
        /* LESSON COMPLETION SCREEN */
        <div className="p-8 sm:p-10 rounded-3xl bg-white border-2 border-[#176B55] shadow-xl text-center space-y-6 animate-in fade-in">
          <div className="w-20 h-20 mx-auto rounded-3xl bg-[#E6F4ED] text-[#176B55] flex items-center justify-center shadow-inner">
            <Trophy className="w-10 h-10 text-[#F2B84B]" />
          </div>

          <div className="space-y-2">
            <span className="px-3.5 py-1 rounded-full bg-[#E6F4ED] text-[#176B55] font-bold text-xs uppercase tracking-wider">
              {t('lesson_complete', currentLanguage)}
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#20332E]">
              Congratulations on Mastering This Lesson!
            </h2>
            <p className="text-xs sm:text-sm text-[#577067] max-w-lg mx-auto">
              Your results have been securely recorded. Progress is stored offline on your device and queued for cloud synchronization.
            </p>
          </div>

          {/* Results Summary Box */}
          <div className="max-w-md mx-auto grid grid-cols-3 gap-3">
            <div className="p-4 rounded-2xl bg-[#E6F4ED] text-center">
              <span className="text-2xl font-black text-[#176B55]">
                {quizScore ? `${quizScore.score}/${quizScore.total}` : '100%'}
              </span>
              <span className="text-[11px] text-[#335046] font-semibold block">{t('score', currentLanguage)}</span>
            </div>

            <div className="p-4 rounded-2xl bg-[#fef5e7] text-center">
              <div className="flex items-center justify-center gap-1 text-2xl font-black text-[#d99726]">
                <Star className="w-5 h-5 fill-[#F2B84B]" />
                <span>+25</span>
              </div>
              <span className="text-[11px] text-[#785116] font-semibold block">{t('stars_earned', currentLanguage)}</span>
            </div>

            <div className="p-4 rounded-2xl bg-[#e8f4f8] text-center">
              <span className="text-2xl font-black text-[#0288D1]">100%</span>
              <span className="text-[11px] text-[#0288D1] font-semibold block">Saved Offline</span>
            </div>
          </div>

          {/* Concepts to Revise if any incorrect */}
          {weakTopics.length > 0 && (
            <div className="max-w-md mx-auto p-4 rounded-2xl bg-amber-50 border border-amber-200 text-left space-y-2">
              <h4 className="font-bold text-xs text-amber-900 flex items-center gap-1.5">
                <Lightbulb className="w-4 h-4 text-amber-600" />
                <span>{t('concepts_to_revise', currentLanguage)}:</span>
              </h4>
              <ul className="text-[11px] text-amber-800 space-y-1 list-disc pl-4">
                {weakTopics.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Actions */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => {
                setIsLessonCompleted(false);
                setCurrentSectionIndex(0);
                setSelectedAnswers({});
                setQuestionFeedback({});
              }}
              className="px-5 py-2.5 rounded-xl border border-gray-200 text-xs font-bold text-gray-700 hover:bg-gray-50 flex items-center gap-1.5"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Review Lesson Again</span>
            </button>

            {recommendedNextLesson && (
              <button
                onClick={() => onNextLesson(recommendedNextLesson.id)}
                className="px-6 py-2.5 rounded-xl bg-[#176B55] hover:bg-[#0f4839] text-white text-xs sm:text-sm font-bold shadow-md transition flex items-center gap-2"
              >
                <span>{t('next_recommended', currentLanguage)}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}

            <button
              onClick={onBack}
              className="px-5 py-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-[#20332E] text-xs font-bold"
            >
              {t('back_to_dashboard', currentLanguage)}
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
