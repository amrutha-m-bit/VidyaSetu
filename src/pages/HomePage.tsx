import React from 'react';
import { LanguageCode } from '../types';
import { t } from '../i18n';
import { SUBJECTS_LIST, SAMPLE_LESSONS } from '../data/sampleLessons';
import { EducationalIllustration } from '../components/EducationalIllustration';
import { PWAInstallButton } from '../components/PWAInstallButton';
import { 
  Sparkles, 
  ArrowRight, 
  WifiOff, 
  Languages, 
  Gamepad2, 
  GraduationCap, 
  ShieldCheck, 
  Download, 
  CheckCircle2, 
  BookOpen, 
  Lightbulb, 
  Cpu, 
  Volume2,
  Users
} from 'lucide-react';

interface Props {
  currentLanguage: LanguageCode;
  onNavigate: (tab: string, params?: any) => void;
  onSelectLesson: (lessonId: string) => void;
}

export const HomePage: React.FC<Props> = ({ currentLanguage, onNavigate, onSelectLesson }) => {
  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-8 pb-12 sm:pt-14 sm:pb-20 border-b border-[#e5e2d6] bg-gradient-to-b from-[#f2faf6]/80 via-[#FBFAF6] to-[#FBFAF6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E6F4ED] border border-[#c2e5d3] text-xs font-bold text-[#176B55]">
                <Sparkles className="w-4 h-4 text-[#F2B84B] fill-[#F2B84B]" />
                <span>Multilingual Digital Learning for Classes 1–8</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#20332E] leading-tight">
                {t('hero_headline', currentLanguage)}
              </h1>

              <p className="text-base sm:text-lg text-[#577067] leading-relaxed max-w-xl">
                {t('hero_subtitle', currentLanguage)}
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => onNavigate('student')}
                  className="flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-[#176B55] hover:bg-[#0f4839] text-white font-bold text-sm sm:text-base shadow-md transition transform hover:-translate-y-0.5"
                >
                  <GraduationCap className="w-5 h-5" />
                  <span>{t('start_learning', currentLanguage)}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigate('library')}
                  className="flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-white hover:bg-[#f5f4ed] text-[#20332E] font-bold text-sm sm:text-base border border-gray-200 shadow-2xs transition"
                >
                  <BookOpen className="w-5 h-5 text-[#176B55]" />
                  <span>{t('explore_lessons', currentLanguage)}</span>
                </button>

                <PWAInstallButton variant="hero" />
              </div>

              {/* Trust Badges for Rural Schools */}
              <div className="pt-4 grid grid-cols-3 gap-2 sm:gap-4 border-t border-[#e2dfd2] max-w-lg">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-[#E6F4ED] text-[#176B55]">
                    <WifiOff className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="font-bold text-xs text-[#20332E]">100% Offline</h5>
                    <p className="text-[10px] text-[#577067]">Runs without WiFi</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-[#E6F4ED] text-[#176B55]">
                    <Languages className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="font-bold text-xs text-[#20332E]">8 Languages</h5>
                    <p className="text-[10px] text-[#577067]">Mother-tongue first</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-[#E6F4ED] text-[#176B55]">
                    <ShieldCheck className="w-4 h-4 text-[#2E7D32]" />
                  </div>
                  <div>
                    <h5 className="font-bold text-xs text-[#20332E]">Child Safe</h5>
                    <p className="text-[10px] text-[#577067]">Zero trackers</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Hero Illustration */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-lg p-2 rounded-3xl bg-white/70 shadow-xl border border-[#c2e5d3] backdrop-blur-xs">
                <EducationalIllustration name="hero-kids" className="w-full h-auto rounded-2xl" />
                <div className="absolute -bottom-3 -left-3 bg-white px-3.5 py-2 rounded-2xl shadow-lg border border-gray-100 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#176B55] animate-ping" />
                  <span className="text-xs font-bold text-[#176B55]">Audio Read-Aloud in 8 Regional Scripts</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FEATURED LEARNING SUBJECTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
          <span className="px-3 py-1 rounded-full bg-[#E6F4ED] text-[#176B55] font-bold text-xs uppercase tracking-wider">
            Curriculum Aligned
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#20332E]">
            Subjects Made Fun & Interactive
          </h2>
          <p className="text-sm text-[#577067]">
            Carefully crafted according to government primary school syllabi, with real-life village examples.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {SUBJECTS_LIST.map((sub) => (
            <div
              key={sub.code}
              onClick={() => onNavigate('library', { subject: sub.code })}
              className="p-5 rounded-3xl bg-white border border-gray-100 shadow-2xs hover:shadow-md hover:border-[#c2e5d3] cursor-pointer transition-all transform hover:-translate-y-1 text-center group"
            >
              <div 
                className="w-14 h-14 mx-auto rounded-2xl flex items-center justify-center mb-3 transition group-hover:scale-110"
                style={{ backgroundColor: `${sub.colorCode}18`, color: sub.colorCode }}
              >
                <BookOpen className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-sm text-[#20332E] group-hover:text-[#176B55]">
                {sub.name}
              </h3>
              <p className="text-[11px] text-[#577067] mt-1">
                Classes 1–8
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. HOW VIDYASETU WORKS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#E6F4ED]/70 border border-[#c2e5d3]">
          <div className="text-center max-w-xl mx-auto space-y-2 mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#176B55]">
              {t('how_it_works', currentLanguage)}
            </h2>
            <p className="text-xs sm:text-sm text-[#335046]">
              Simple, friendly steps designed for children learning in rural classrooms or on shared family phones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-5 rounded-2xl bg-white shadow-2xs space-y-2 border border-[#c2e5d3]/50">
              <span className="w-8 h-8 rounded-full bg-[#176B55] text-white font-black text-sm flex items-center justify-center">1</span>
              <h4 className="font-bold text-sm text-[#20332E]">Pick Your Class & Language</h4>
              <p className="text-xs text-[#577067]">Choose from Class 1 to Class 8 and switch anytime to Kannada, Hindi, Telugu, Tamil, Malayalam, Marathi, Bengali, or English.</p>
            </div>

            <div className="p-5 rounded-2xl bg-white shadow-2xs space-y-2 border border-[#c2e5d3]/50">
              <span className="w-8 h-8 rounded-full bg-[#176B55] text-white font-black text-sm flex items-center justify-center">2</span>
              <h4 className="font-bold text-sm text-[#20332E]">Explore Village Stories</h4>
              <p className="text-xs text-[#577067]">Read and listen to audio narration about dividing warm rotis, planting neem trees, and measuring school fields.</p>
            </div>

            <div className="p-5 rounded-2xl bg-white shadow-2xs space-y-2 border border-[#c2e5d3]/50">
              <span className="w-8 h-8 rounded-full bg-[#176B55] text-white font-black text-sm flex items-center justify-center">3</span>
              <h4 className="font-bold text-sm text-[#20332E]">Interactive Activities & Quizzes</h4>
              <p className="text-xs text-[#577067]">Drag-and-match pairs, count farm animals, and solve quizzes with instant encouraging hints and explanations.</p>
            </div>

            <div className="p-5 rounded-2xl bg-white shadow-2xs space-y-2 border border-[#c2e5d3]/50">
              <span className="w-8 h-8 rounded-full bg-[#F2B84B] text-[#20332E] font-black text-sm flex items-center justify-center">4</span>
              <h4 className="font-bold text-sm text-[#20332E]">Download Once, Learn Anywhere</h4>
              <p className="text-xs text-[#577067]">Click "Download for Offline" to save lessons on low-cost devices. Take quizzes without internet; scores sync automatically when back online!</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SAMPLE LESSONS SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-bold text-[#176B55] uppercase tracking-wider">
              Handcrafted for Rural Minds
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#20332E] mt-1">
              Popular Interactive Lessons
            </h2>
          </div>
          <button
            onClick={() => onNavigate('library')}
            className="flex items-center gap-1.5 text-xs font-bold text-[#176B55] hover:underline"
          >
            <span>View All Lessons (Classes 1–8)</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SAMPLE_LESSONS.slice(0, 3).map((lesson) => {
            const trans = lesson.translations[currentLanguage] || lesson.translations.en;
            return (
              <div
                key={lesson.id}
                className="rounded-3xl bg-white border border-gray-100 shadow-2xs hover:shadow-md transition-all overflow-hidden flex flex-col justify-between"
              >
                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="px-2.5 py-1 rounded-full bg-[#E6F4ED] text-[#176B55] font-bold">
                      Class {lesson.classNumber}
                    </span>
                    <span className="text-[#577067] font-medium flex items-center gap-1">
                      <Volume2 className="w-3.5 h-3.5 text-[#176B55]" />
                      {trans.estimatedMinutes} mins
                    </span>
                  </div>

                  <h3 className="font-extrabold text-base text-[#20332E] leading-snug">
                    {trans.title}
                  </h3>

                  <p className="text-xs text-[#577067] line-clamp-3 leading-relaxed">
                    {trans.summary}
                  </p>
                </div>

                <div className="p-6 pt-0 flex items-center justify-between border-t border-gray-50 mt-2">
                  <span className="text-[11px] font-semibold text-[#176B55] bg-[#E6F4ED] px-2 py-0.5 rounded-md">
                    {lesson.subjectCode.toUpperCase()}
                  </span>
                  <button
                    onClick={() => onSelectLesson(lesson.id)}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#176B55] hover:bg-[#0f4839] text-white text-xs font-bold transition shadow-xs"
                  >
                    <span>Start Lesson</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. DEDICATED GAMES PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#176B55] to-[#20876c] text-white shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-[#F2B84B] text-xs font-bold">
                <Gamepad2 className="w-4 h-4" />
                <span>Play-Based Learning Corner</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black">
                Learning Games with Real Interactions
              </h2>
              <p className="text-xs sm:text-sm text-[#E6F4ED] leading-relaxed max-w-xl">
                Children retain concepts best when they play. Enjoy Number Safari, Village Shape Matcher, Multilingual Vocabulary Pairs, and Eco-Warrior Waste Sorting — with stars and zero public shaming.
              </p>
              <button
                onClick={() => onNavigate('games')}
                className="px-6 py-3 rounded-2xl bg-[#F2B84B] hover:bg-[#d99726] text-[#20332E] font-bold text-sm shadow-md transition transform hover:-translate-y-0.5"
              >
                Play Learning Games Now
              </button>
            </div>

            <div className="lg:col-span-4 grid grid-cols-2 gap-3 text-[#20332E]">
              <div className="p-3.5 rounded-2xl bg-white shadow-md text-center">
                <span className="text-2xl block mb-1">🦁</span>
                <span className="font-bold text-xs block text-[#176B55]">Number Safari</span>
                <span className="text-[10px] text-[#577067]">Count & Add</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white shadow-md text-center">
                <span className="text-2xl block mb-1">🔺</span>
                <span className="font-bold text-xs block text-[#176B55]">Shape Match</span>
                <span className="text-[10px] text-[#577067]">Geometry Fun</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white shadow-md text-center">
                <span className="text-2xl block mb-1">🌱</span>
                <span className="font-bold text-xs block text-[#176B55]">Eco Warrior</span>
                <span className="text-[10px] text-[#577067]">Earth Care</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white shadow-md text-center">
                <span className="text-2xl block mb-1">🔤</span>
                <span className="font-bold text-xs block text-[#176B55]">Word Match</span>
                <span className="text-[10px] text-[#577067]">Vocabulary</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. TEACHER & CLASSROOM BENEFITS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <span className="px-3 py-1 rounded-full bg-[#E6F4ED] text-[#176B55] font-bold text-xs uppercase tracking-wider">
              Empowering Rural Educators
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#20332E]">
              Built to Support Teachers in Multi-Grade Classrooms
            </h2>
            <p className="text-xs sm:text-sm text-[#577067] leading-relaxed">
              In many rural government schools, a single teacher teaches multiple classes simultaneously. VidyaSetu gives teachers superpowers:
            </p>
            <ul className="space-y-2.5 text-xs text-[#20332E]">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#176B55] flex-shrink-0 mt-0.5" />
                <span><strong>Classroom Teaching Mode:</strong> High contrast, large touch controls for shared classroom smart TVs or low-cost projectors.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#176B55] flex-shrink-0 mt-0.5" />
                <span><strong>Instant Difficulty Diagnostics:</strong> Quickly spot concepts where students need revision (e.g. fractions or plant photosynthesis).</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#176B55] flex-shrink-0 mt-0.5" />
                <span><strong>Offline Resource Packs:</strong> Download complete class units onto a pen-drive or phone for the entire term.</span>
              </li>
            </ul>
            <button
              onClick={() => onNavigate('teacher')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#176B55] text-white font-bold text-xs hover:bg-[#0f4839] transition"
            >
              <Users className="w-4 h-4" />
              <span>Explore Teacher Classroom Portal</span>
            </button>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-[#c2e5d3] shadow-md space-y-4">
            <div className="flex items-center justify-between border-b pb-3 border-gray-100">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#E6F4ED] text-[#176B55] font-bold text-xs flex items-center justify-center">
                  RG
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#20332E]">Ramesh Gowda, Teacher</h4>
                  <p className="text-[10px] text-[#577067]">Govt. Primary School, Hirekerur</p>
                </div>
              </div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">Class 4 Active</span>
            </div>

            <div className="p-3 rounded-2xl bg-[#FBFAF6] border border-gray-100 space-y-1">
              <span className="text-[10px] font-bold text-[#577067] uppercase">Diagnostic Insight:</span>
              <p className="text-xs text-[#20332E] font-medium">
                4 students need revision on: <strong>Fractions (sharing chapati)</strong>. VidyaSetu recommends small-group hands-on paper folding activity.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="p-2.5 rounded-xl bg-[#E6F4ED]/60">
                <span className="text-lg font-black text-[#176B55]">28</span>
                <span className="text-[10px] text-[#577067] block">Students</span>
              </div>
              <div className="p-2.5 rounded-xl bg-[#fef5e7]">
                <span className="text-lg font-black text-[#d99726]">84%</span>
                <span className="text-[10px] text-[#577067] block">Avg Quiz Score</span>
              </div>
              <div className="p-2.5 rounded-xl bg-[#E6F4ED]/60">
                <span className="text-lg font-black text-[#176B55]">100%</span>
                <span className="text-[10px] text-[#577067] block">Offline Ready</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FINAL CALL TO ACTION */}
      <section className="max-w-4xl mx-auto px-4 text-center">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#FBFAF6] border-2 border-[#176B55]/30 shadow-lg space-y-5">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#20332E]">
            Empower Every Village Child Today
          </h2>
          <p className="text-xs sm:text-base text-[#577067] max-w-xl mx-auto">
            Ready to explore? Choose your class, pick your mother tongue, and start learning interactively on any phone, tablet, or classroom screen.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => onNavigate('student')}
              className="px-8 py-3.5 rounded-2xl bg-[#176B55] hover:bg-[#0f4839] text-white font-bold text-sm shadow-md transition transform hover:-translate-y-0.5"
            >
              Open Student Portal
            </button>
            <button
              onClick={() => onNavigate('games')}
              className="px-6 py-3.5 rounded-2xl bg-[#F2B84B] hover:bg-[#d99726] text-[#20332E] font-bold text-sm shadow-md transition"
            >
              Play Games
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
