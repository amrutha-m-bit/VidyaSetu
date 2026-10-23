import React, { useState, useEffect } from 'react';
import { LanguageCode, Lesson, LessonProgress } from '../types';
import { t } from '../i18n';
import { SAMPLE_LESSONS, SUBJECTS_LIST } from '../data/sampleLessons';
import { offlineDB } from '../offline/database';
import { 
  Sparkles, 
  GraduationCap, 
  BookOpen, 
  CheckCircle2, 
  Download, 
  Trash2, 
  Flame, 
  Trophy, 
  ArrowRight, 
  Filter,
  Wifi,
  WifiOff,
  Star,
  PlayCircle,
  Clock
} from 'lucide-react';

interface Props {
  currentLanguage: LanguageCode;
  selectedClass: number;
  onClassChange: (c: number) => void;
  onSelectLesson: (lessonId: string) => void;
  starsCount: number;
}

export const StudentDashboard: React.FC<Props> = ({
  currentLanguage,
  selectedClass,
  onClassChange,
  onSelectLesson,
  starsCount
}) => {
  const [selectedSubject, setSelectedSubject] = useState<string>('all');
  const [downloadedIds, setDownloadedIds] = useState<Set<string>>(new Set());
  const [progressMap, setProgressMap] = useState<Record<string, LessonProgress>>({});
  const [downloadLoading, setDownloadLoading] = useState<string | null>(null);

  // Load progress and downloaded lessons from IndexedDB
  const refreshLocalData = async () => {
    try {
      const downloaded = await offlineDB.getDownloadedLessons();
      setDownloadedIds(new Set(downloaded.map((l) => l.id)));

      const progressList = await offlineDB.getAllProgress();
      const pMap: Record<string, LessonProgress> = {};
      progressList.forEach((p) => {
        pMap[p.lessonId] = p;
      });
      setProgressMap(pMap);
    } catch (err) {
      console.warn('Error reading IndexedDB in dashboard:', err);
    }
  };

  useEffect(() => {
    refreshLocalData();
  }, []);

  const handleDownloadToggle = async (lesson: Lesson, e: React.MouseEvent) => {
    e.stopPropagation();
    setDownloadLoading(lesson.id);
    try {
      if (downloadedIds.has(lesson.id)) {
        await offlineDB.removeDownloadedLesson(lesson.id);
      } else {
        await offlineDB.saveDownloadedLesson(lesson);
      }
      await refreshLocalData();
    } catch (err) {
      console.error('Failed to toggle download:', err);
    } finally {
      setDownloadLoading(null);
    }
  };

  // Filter lessons by selected class and subject
  const classLessons = SAMPLE_LESSONS.filter((l) => l.classNumber === selectedClass);
  const filteredLessons = classLessons.filter((l) => 
    selectedSubject === 'all' ? true : l.subjectCode === selectedSubject
  );

  // Find Continue Learning candidate
  const continueLesson = classLessons.find((l) => {
    const prog = progressMap[l.id];
    return prog && prog.status === 'in_progress';
  }) || classLessons[0];

  const continueTrans = continueLesson 
    ? (continueLesson.translations[currentLanguage] || continueLesson.translations.en) 
    : null;

  // Completed count
  const completedCount = Object.values(progressMap).filter(
    (p) => p.status === 'completed'
  ).length;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* 1. PERSONALIZED GREETING & HERO BANNER */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#176B55] to-[#20876c] text-white shadow-md relative overflow-hidden">
        <div className="relative z-10 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-[#F2B84B] text-xs font-bold mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Govt Primary School Student Portal</span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-black">
                Namaskara, Pooja! 👋
              </h1>
              <p className="text-xs sm:text-sm text-[#E6F4ED] mt-1">
                Class {selectedClass} • Happy learning today! You have earned {starsCount} stars so far.
              </p>
            </div>

            {/* Class Switcher Bar (Classes 1–8) */}
            <div className="bg-white/10 p-2 rounded-2xl backdrop-blur-xs border border-white/20">
              <span className="text-[10px] uppercase tracking-wider font-bold text-[#E6F4ED] block mb-1.5 px-1">
                {t('select_class', currentLanguage)}:
              </span>
              <div className="flex items-center gap-1.5">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((cls) => (
                  <button
                    key={cls}
                    onClick={() => onClassChange(cls)}
                    className={`w-8 h-8 rounded-xl font-bold text-xs flex items-center justify-center transition ${
                      selectedClass === cls
                        ? 'bg-[#F2B84B] text-[#20332E] shadow-sm scale-105'
                        : 'bg-white/10 hover:bg-white/20 text-white'
                    }`}
                  >
                    {cls}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. STATS OVERVIEW CARDS */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="p-4 rounded-2xl bg-white border border-gray-100 shadow-2xs flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#fef5e7] text-[#d99726] flex items-center justify-center">
            <Star className="w-5 h-5 fill-[#F2B84B] text-[#F2B84B]" />
          </div>
          <div>
            <span className="text-xl font-black text-[#20332E]">{starsCount}</span>
            <span className="text-[11px] text-[#577067] block">{t('earned_stars', currentLanguage)}</span>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-white border border-gray-100 shadow-2xs flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#E6F4ED] text-[#176B55] flex items-center justify-center">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xl font-black text-[#20332E]">{completedCount}</span>
            <span className="text-[11px] text-[#577067] block">{t('completed_lessons', currentLanguage)}</span>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-white border border-gray-100 shadow-2xs flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#e8f4f8] text-[#0288D1] flex items-center justify-center">
            <Download className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xl font-black text-[#20332E]">{downloadedIds.size}</span>
            <span className="text-[11px] text-[#577067] block">Offline Lesson Packs</span>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-white border border-gray-100 shadow-2xs flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#fff3e0] text-[#E65100] flex items-center justify-center">
            <Flame className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xl font-black text-[#20332E]">4 Days</span>
            <span className="text-[11px] text-[#577067] block">{t('daily_streak', currentLanguage)}</span>
          </div>
        </div>
      </div>

      {/* 3. CONTINUE LEARNING SPOTLIGHT CARD */}
      {continueLesson && continueTrans && (
        <div className="p-6 sm:p-7 rounded-3xl bg-white border-2 border-[#176B55]/30 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-full bg-[#E6F4ED] text-[#176B55] font-bold text-xs uppercase">
                {t('continue_learning', currentLanguage)}
              </span>
              <span className="text-xs text-[#577067] font-semibold">
                Class {continueLesson.classNumber} • {continueLesson.subjectCode.toUpperCase()}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#20332E]">
              {continueTrans.title}
            </h3>
            <p className="text-xs text-[#577067] max-w-2xl leading-relaxed">
              {continueTrans.summary}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onSelectLesson(continueLesson.id)}
              className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#176B55] hover:bg-[#0f4839] text-white font-bold text-sm shadow-md transition"
            >
              <PlayCircle className="w-5 h-5" />
              <span>Resume Lesson</span>
            </button>

            <button
              onClick={(e) => handleDownloadToggle(continueLesson, e)}
              className={`p-3 rounded-2xl border transition ${
                downloadedIds.has(continueLesson.id)
                  ? 'bg-[#E6F4ED] border-[#c2e5d3] text-[#176B55]'
                  : 'bg-white border-gray-200 text-gray-500 hover:bg-gray-50'
              }`}
              title={downloadedIds.has(continueLesson.id) ? 'Remove from offline' : 'Download for offline'}
            >
              <Download className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      {/* 4. SUBJECT SELECTOR FILTER TABS */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#20332E]">
            Class {selectedClass} Curriculum
          </h2>
          <span className="text-xs text-[#577067] font-semibold">
            {filteredLessons.length} Lesson(s) Available
          </span>
        </div>

        {/* Filter buttons */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
          <button
            onClick={() => setSelectedSubject('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition flex-shrink-0 ${
              selectedSubject === 'all'
                ? 'bg-[#176B55] text-white shadow-xs'
                : 'bg-white text-[#20332E] border border-gray-200 hover:bg-gray-50'
            }`}
          >
            {t('all_subjects', currentLanguage)}
          </button>
          {SUBJECTS_LIST.map((sub) => (
            <button
              key={sub.code}
              onClick={() => setSelectedSubject(sub.code)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition flex-shrink-0 ${
                selectedSubject === sub.code
                  ? 'bg-[#176B55] text-white shadow-xs'
                  : 'bg-white text-[#20332E] border border-gray-200 hover:bg-gray-50'
              }`}
            >
              {sub.name}
            </button>
          ))}
        </div>
      </div>

      {/* 5. LESSONS GRID */}
      {filteredLessons.length === 0 ? (
        <div className="p-12 text-center rounded-3xl bg-white border border-gray-200 space-y-3">
          <BookOpen className="w-10 h-10 mx-auto text-gray-300" />
          <h3 className="font-bold text-base text-[#20332E]">No lessons in this subject yet</h3>
          <p className="text-xs text-[#577067]">
            Content for Class {selectedClass} in this subject is in review by the curriculum board.
          </p>
          <button
            onClick={() => setSelectedSubject('all')}
            className="px-4 py-2 rounded-xl bg-[#E6F4ED] text-[#176B55] font-bold text-xs"
          >
            Show All Class {selectedClass} Lessons
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLessons.map((lesson) => {
            const trans = lesson.translations[currentLanguage] || lesson.translations.en;
            const isDownloaded = downloadedIds.has(lesson.id);
            const progress = progressMap[lesson.id];
            const isCompleted = progress?.status === 'completed';

            return (
              <div
                key={lesson.id}
                onClick={() => onSelectLesson(lesson.id)}
                className="rounded-3xl bg-white border border-gray-100 shadow-2xs hover:shadow-md hover:border-[#c2e5d3] cursor-pointer transition-all flex flex-col justify-between group"
              >
                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="px-2.5 py-1 rounded-full bg-[#E6F4ED] text-[#176B55] font-bold">
                      Class {lesson.classNumber}
                    </span>
                    <div className="flex items-center gap-2">
                      {isDownloaded && (
                        <span className="flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                          <CheckCircle2 className="w-3 h-3 text-[#176B55]" />
                          Downloaded
                        </span>
                      )}
                      <span className="text-[#577067] text-[11px] font-medium flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {trans.estimatedMinutes}m
                      </span>
                    </div>
                  </div>

                  <h3 className="font-extrabold text-base text-[#20332E] group-hover:text-[#176B55] leading-snug">
                    {trans.title}
                  </h3>

                  <p className="text-xs text-[#577067] line-clamp-3 leading-relaxed">
                    {trans.summary}
                  </p>
                </div>

                <div className="p-5 pt-0 flex items-center justify-between border-t border-gray-50 mt-3">
                  <div className="flex items-center gap-1.5">
                    {isCompleted ? (
                      <span className="flex items-center gap-1 text-xs font-bold text-emerald-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        Mastered
                      </span>
                    ) : progress ? (
                      <span className="text-xs font-bold text-[#d99726]">
                        In Progress
                      </span>
                    ) : (
                      <span className="text-xs font-medium text-gray-400">
                        Not Started
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={(e) => handleDownloadToggle(lesson, e)}
                      disabled={downloadLoading === lesson.id}
                      className={`p-2 rounded-xl text-xs font-semibold border transition ${
                        isDownloaded
                          ? 'bg-rose-50 text-rose-600 border-rose-200 hover:bg-rose-100'
                          : 'bg-[#E6F4ED] text-[#176B55] border-[#c2e5d3] hover:bg-[#d5eedf]'
                      }`}
                      title={isDownloaded ? 'Remove from device storage' : 'Download for offline learning'}
                    >
                      {downloadLoading === lesson.id ? (
                        <span className="text-[10px]">Saving...</span>
                      ) : isDownloaded ? (
                        <Trash2 className="w-4 h-4" />
                      ) : (
                        <Download className="w-4 h-4" />
                      )}
                    </button>

                    <button
                      onClick={() => onSelectLesson(lesson.id)}
                      className="px-4 py-2 rounded-xl bg-[#176B55] text-white text-xs font-bold group-hover:bg-[#0f4839] transition shadow-xs flex items-center gap-1"
                    >
                      <span>Start</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* 6. ACHIEVEMENTS & BADGES UNLOCKED */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 shadow-2xs space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-extrabold text-lg text-[#20332E]">
              My Learning Badges
            </h3>
            <p className="text-xs text-[#577067]">
              Earn badges by completing lessons, scoring high on quizzes, and learning offline.
            </p>
          </div>
          <span className="text-xs font-bold text-[#176B55] px-3 py-1 rounded-full bg-[#E6F4ED]">
            2 of 5 Unlocked
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          <div className="p-4 rounded-2xl bg-[#E6F4ED] border border-[#c2e5d3] text-center space-y-1">
            <span className="text-2xl block">🌟</span>
            <h4 className="font-bold text-xs text-[#176B55]">First Steps</h4>
            <p className="text-[10px] text-[#335046]">First lesson completed</p>
          </div>
          <div className="p-4 rounded-2xl bg-[#fef5e7] border border-[#f3d9a2] text-center space-y-1">
            <span className="text-2xl block">🏆</span>
            <h4 className="font-bold text-xs text-[#d99726]">Math Whiz</h4>
            <p className="text-[10px] text-[#785116]">100% on Math Quiz</p>
          </div>
          <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200 text-center space-y-1 opacity-60">
            <span className="text-2xl block">🌱</span>
            <h4 className="font-bold text-xs text-gray-600">Earth Friend</h4>
            <p className="text-[10px] text-gray-500">Master EVS lesson</p>
          </div>
          <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200 text-center space-y-1 opacity-60">
            <span className="text-2xl block">📶</span>
            <h4 className="font-bold text-xs text-gray-600">Offline Pro</h4>
            <p className="text-[10px] text-gray-500">Study 3 offline packs</p>
          </div>
          <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200 text-center space-y-1 opacity-60">
            <span className="text-2xl block">🗣️</span>
            <h4 className="font-bold text-xs text-gray-600">Polyglot</h4>
            <p className="text-[10px] text-gray-500">Study in 2 languages</p>
          </div>
        </div>
      </div>

    </div>
  );
};
