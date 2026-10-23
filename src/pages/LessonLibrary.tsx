import React, { useState, useEffect } from 'react';
import { LanguageCode, Lesson } from '../types';
import { t } from '../i18n';
import { SAMPLE_LESSONS, SUBJECTS_LIST } from '../data/sampleLessons';
import { offlineDB } from '../offline/database';
import { 
  Search, 
  Filter, 
  Bookmark, 
  BookmarkCheck, 
  Download, 
  Trash2, 
  Clock, 
  CheckCircle2, 
  Sparkles,
  BookOpen,
  ArrowRight
} from 'lucide-react';

interface Props {
  currentLanguage: LanguageCode;
  onSelectLesson: (lessonId: string) => void;
  initialSubject?: string;
}

export const LessonLibrary: React.FC<Props> = ({
  currentLanguage,
  onSelectLesson,
  initialSubject = 'all'
}) => {
  const [selectedClass, setSelectedClass] = useState<number | 'all'>('all');
  const [selectedSubject, setSelectedSubject] = useState<string>(initialSubject);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [bookmarkedIds, setBookmarkedIds] = useState<Set<string>>(new Set());
  const [downloadedIds, setDownloadedIds] = useState<Set<string>>(new Set());
  const [filterDownloadedOnly, setFilterDownloadedOnly] = useState(false);

  useEffect(() => {
    const loadState = async () => {
      try {
        const bms = await offlineDB.getBookmarkedIds();
        setBookmarkedIds(new Set(bms));

        const downs = await offlineDB.getDownloadedLessons();
        setDownloadedIds(new Set(downs.map((d) => d.id)));
      } catch (err) {
        console.warn('Library loadState error:', err);
      }
    };
    loadState();
  }, []);

  const handleBookmarkToggle = async (lessonId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const isBookmarked = await offlineDB.toggleBookmark(lessonId);
    setBookmarkedIds((prev) => {
      const next = new Set(prev);
      if (isBookmarked) next.add(lessonId);
      else next.delete(lessonId);
      return next;
    });
  };

  const handleDownloadToggle = async (lesson: Lesson, e: React.MouseEvent) => {
    e.stopPropagation();
    if (downloadedIds.has(lesson.id)) {
      await offlineDB.removeDownloadedLesson(lesson.id);
      setDownloadedIds((prev) => {
        const next = new Set(prev);
        next.delete(lesson.id);
        return next;
      });
    } else {
      await offlineDB.saveDownloadedLesson(lesson);
      setDownloadedIds((prev) => {
        const next = new Set(prev);
        next.add(lesson.id);
        return next;
      });
    }
  };

  // Filter lessons
  const filteredLessons = SAMPLE_LESSONS.filter((lesson) => {
    if (selectedClass !== 'all' && lesson.classNumber !== selectedClass) return false;
    if (selectedSubject !== 'all' && lesson.subjectCode !== selectedSubject) return false;
    if (selectedDifficulty !== 'all' && lesson.difficultyLevel !== selectedDifficulty) return false;
    if (filterDownloadedOnly && !downloadedIds.has(lesson.id)) return false;

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const trans = lesson.translations[currentLanguage] || lesson.translations.en;
      const matchTitle = trans.title.toLowerCase().includes(q);
      const matchSummary = trans.summary.toLowerCase().includes(q);
      const matchSlug = lesson.slug.toLowerCase().includes(q);
      return matchTitle || matchSummary || matchSlug;
    }

    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E6F4ED] text-[#176B55] text-xs font-bold">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Curriculum Repository (Classes 1–8)</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-[#20332E]">
          {t('explore_lessons', currentLanguage)}
        </h1>
        <p className="text-xs sm:text-sm text-[#577067] max-w-2xl">
          Search, filter by class or subject, and bookmark or download lessons for offline village learning.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="p-6 rounded-3xl bg-white border border-gray-200 shadow-2xs space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
          
          {/* Search Input */}
          <div className="md:col-span-5 relative">
            <Search className="w-4 h-4 absolute left-3.5 top-3.5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by topic (e.g. fractions, plant, rain, counting)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 text-xs text-[#20332E] focus:border-[#176B55] focus:ring-1 focus:ring-[#176B55] transition"
            />
          </div>

          {/* Class Filter */}
          <div className="md:col-span-3">
            <select
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value === 'all' ? 'all' : Number(e.target.value))}
              className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-xs text-[#20332E] font-medium"
            >
              <option value="all">All Classes (1 to 8)</option>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((cls) => (
                <option key={cls} value={cls}>Class {cls}</option>
              ))}
            </select>
          </div>

          {/* Subject Filter */}
          <div className="md:col-span-2">
            <select
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-xs text-[#20332E] font-medium"
            >
              <option value="all">All Subjects</option>
              {SUBJECTS_LIST.map((sub) => (
                <option key={sub.code} value={sub.code}>{sub.name}</option>
              ))}
            </select>
          </div>

          {/* Difficulty Filter */}
          <div className="md:col-span-2">
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-xs text-[#20332E] font-medium"
            >
              <option value="all">All Levels</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>
        </div>

        {/* Quick toggles */}
        <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-gray-100 text-xs">
          <label className="flex items-center gap-2 cursor-pointer font-medium text-[#20332E]">
            <input
              type="checkbox"
              checked={filterDownloadedOnly}
              onChange={(e) => setFilterDownloadedOnly(e.target.checked)}
              className="rounded text-[#176B55] focus:ring-[#176B55]"
            />
            <span>Show only downloaded offline lessons ({downloadedIds.size})</span>
          </label>

          <span className="text-gray-300">|</span>

          <span className="text-[#577067]">
            Showing <strong>{filteredLessons.length}</strong> matching lessons
          </span>
        </div>
      </div>

      {/* Results Grid */}
      {filteredLessons.length === 0 ? (
        <div className="p-12 text-center rounded-3xl bg-white border border-gray-200 space-y-3">
          <BookOpen className="w-10 h-10 mx-auto text-gray-300" />
          <h3 className="font-bold text-base text-[#20332E]">No lessons match your filters</h3>
          <p className="text-xs text-[#577067]">
            Try clearing filters or search terms to see available curriculum units.
          </p>
          <button
            onClick={() => {
              setSelectedClass('all');
              setSelectedSubject('all');
              setSelectedDifficulty('all');
              setSearchQuery('');
              setFilterDownloadedOnly(false);
            }}
            className="px-4 py-2 rounded-xl bg-[#176B55] text-white text-xs font-bold"
          >
            Reset All Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLessons.map((lesson) => {
            const trans = lesson.translations[currentLanguage] || lesson.translations.en;
            const isDownloaded = downloadedIds.has(lesson.id);
            const isBookmarked = bookmarkedIds.has(lesson.id);

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
                      <button
                        onClick={(e) => handleBookmarkToggle(lesson.id, e)}
                        className={`p-1.5 rounded-lg transition ${
                          isBookmarked ? 'text-[#F2B84B] bg-[#fef5e7]' : 'text-gray-400 hover:text-gray-600'
                        }`}
                        title={isBookmarked ? 'Remove bookmark' : 'Bookmark lesson'}
                      >
                        {isBookmarked ? (
                          <BookmarkCheck className="w-4 h-4 fill-[#F2B84B]" />
                        ) : (
                          <Bookmark className="w-4 h-4" />
                        )}
                      </button>
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
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-gray-100 text-gray-700 capitalize">
                      {lesson.difficultyLevel}
                    </span>
                    {isDownloaded && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-[#176B55]" />
                        Offline
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={(e) => handleDownloadToggle(lesson, e)}
                      className={`p-2 rounded-xl text-xs font-semibold border transition ${
                        isDownloaded
                          ? 'bg-rose-50 text-rose-600 border-rose-200 hover:bg-rose-100'
                          : 'bg-[#E6F4ED] text-[#176B55] border-[#c2e5d3] hover:bg-[#d5eedf]'
                      }`}
                      title={isDownloaded ? 'Remove from device storage' : 'Download for offline learning'}
                    >
                      {isDownloaded ? <Trash2 className="w-4 h-4" /> : <Download className="w-4 h-4" />}
                    </button>

                    <button
                      onClick={() => onSelectLesson(lesson.id)}
                      className="px-4 py-2 rounded-xl bg-[#176B55] text-white text-xs font-bold group-hover:bg-[#0f4839] transition shadow-xs flex items-center gap-1"
                    >
                      <span>Study</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

    </div>
  );
};
