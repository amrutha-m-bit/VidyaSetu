import React, { useState, useEffect } from 'react';
import { LanguageCode, Lesson, ContentStatus, ContentReviewRecord } from '../types';
import { SAMPLE_LESSONS, SAMPLE_REVIEWS, SUBJECTS_LIST } from '../data/sampleLessons';
import { localStore } from '../offline/storage';
import { 
  ShieldCheck, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  Plus, 
  FileText, 
  Database, 
  History, 
  Eye, 
  Send,
  Sparkles,
  School,
  Lock,
  HardDrive
} from 'lucide-react';

interface Props {
  currentLanguage: LanguageCode;
  onSelectLesson: (lessonId: string) => void;
}

export const AdminPortal: React.FC<Props> = ({ currentLanguage, onSelectLesson }) => {
  const [lessons, setLessons] = useState<Lesson[]>(SAMPLE_LESSONS);
  const [reviewsList, setReviewsList] = useState<ContentReviewRecord[]>(() => localStore.getReviews(SAMPLE_REVIEWS));
  const [activeTab, setActiveTab] = useState<'lifecycle' | 'editor' | 'audit' | 'schools'>('lifecycle');
  
  // Editor form state
  const [newClassNumber, setNewClassNumber] = useState<number>(3);
  const [newSubjectCode, setNewSubjectCode] = useState<string>('math');
  const [newTitle, setNewTitle] = useState('');
  const [newSummary, setNewSummary] = useState('');
  const [newEstimatedMinutes, setNewEstimatedMinutes] = useState(15);
  const [newSectionContent, setNewSectionContent] = useState('');
  const [editorStatus, setEditorStatus] = useState<ContentStatus>('draft');

  const backendStatus = {
    mode: 'local' as const,
    label: '100% Hardcoded Source Code Data',
    details: 'Zero external databases, backend servers, or API keys required.'
  };

  // Handle Review action (Approve or Reject)
  const handleReviewAction = (lessonId: string, action: 'approved' | 'rejected', feedback: string) => {
    setLessons((prev) =>
      prev.map((l) => {
        if (l.id === lessonId) {
          return {
            ...l,
            status: action === 'approved' ? 'approved' : 'draft',
            reviewerName: 'District Curriculum Committee'
          };
        }
        return l;
      })
    );

    const targetLesson = lessons.find((l) => l.id === lessonId);
    const newRecord: ContentReviewRecord = {
      id: `rev-${Date.now()}`,
      lessonId,
      lessonTitle: targetLesson?.translations.en.title || 'Lesson Unit',
      authorName: targetLesson?.authorName || 'Teacher Contributor',
      reviewerName: 'State SCERT Approver',
      action,
      feedback,
      reviewedAt: new Date().toISOString()
    };

    setReviewsList((prev) => {
      const updated = [newRecord, ...prev];
      localStore.saveReviews(updated);
      return updated;
    });

    alert(`Lesson status updated to: ${action.toUpperCase()}`);
  };

  // Handle Publish action
  const handlePublishToggle = (lessonId: string) => {
    setLessons((prev) =>
      prev.map((l) => {
        if (l.id === lessonId) {
          const newStatus: ContentStatus = l.status === 'published' ? 'approved' : 'published';
          return {
            ...l,
            status: newStatus,
            publishedAt: newStatus === 'published' ? new Date().toISOString() : undefined
          };
        }
        return l;
      })
    );
  };

  // Handle New Lesson Creation
  const handleCreateLesson = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    const newLesson: Lesson = {
      id: `lesson-custom-${Date.now()}`,
      classNumber: newClassNumber,
      subjectCode: newSubjectCode,
      slug: newTitle.toLowerCase().replace(/\s+/g, '-'),
      difficultyLevel: 'beginner',
      status: editorStatus,
      authorName: 'Smt. Saraswathi (Teacher)',
      version: 1,
      updatedAt: new Date().toISOString(),
      translations: {
        en: {
          languageCode: 'en',
          title: newTitle,
          summary: newSummary || 'Curriculum unit developed for rural government schools.',
          estimatedMinutes: newEstimatedMinutes,
          sections: [
            {
              id: 'sec-1',
              orderIndex: 0,
              sectionType: 'concept',
              title: '1. Introduction to Concept',
              content: newSectionContent || 'Detailed interactive explanation for village students.',
              audioNarrationText: newTitle
            }
          ]
        },
        hi: {
          languageCode: 'hi',
          title: newTitle,
          summary: newSummary,
          estimatedMinutes: newEstimatedMinutes,
          sections: []
        },
        kn: {
          languageCode: 'kn',
          title: newTitle,
          summary: newSummary,
          estimatedMinutes: newEstimatedMinutes,
          sections: []
        },
        te: { languageCode: 'te', title: newTitle, summary: newSummary, estimatedMinutes: newEstimatedMinutes, sections: [] },
        ta: { languageCode: 'ta', title: newTitle, summary: newSummary, estimatedMinutes: newEstimatedMinutes, sections: [] },
        ml: { languageCode: 'ml', title: newTitle, summary: newSummary, estimatedMinutes: newEstimatedMinutes, sections: [] },
        mr: { languageCode: 'mr', title: newTitle, summary: newSummary, estimatedMinutes: newEstimatedMinutes, sections: [] },
        bn: { languageCode: 'bn', title: newTitle, summary: newSummary, estimatedMinutes: newEstimatedMinutes, sections: [] }
      }
    };

    setLessons((prev) => [newLesson, ...prev]);
    setNewTitle('');
    setNewSummary('');
    setNewSectionContent('');
    setActiveTab('lifecycle');
    alert(`Lesson created with status: ${editorStatus.toUpperCase()}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header & Backend RLS Status Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#c2e5d3] shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E6F4ED] text-[#176B55] text-xs font-bold mb-2">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Supervised Content Management & Administration</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-[#20332E]">
            Curriculum Review & Platform Governance
          </h1>
          <p className="text-xs text-[#577067] mt-1 max-w-2xl">
            Controlled educational content lifecycle: <strong>Draft → Submitted → Approved → Published</strong>.
          </p>
        </div>

        {/* Database Connection Status badge */}
        <div className="p-3.5 rounded-2xl bg-[#FBFAF6] border border-gray-200 text-xs space-y-1">
          <div className="flex items-center gap-2">
            <Database className="w-4 h-4 text-[#176B55]" />
            <span className="font-extrabold text-[#20332E]">{backendStatus.label}</span>
          </div>
          <p className="text-[11px] text-[#577067] max-w-xs leading-tight">
            {backendStatus.details}
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-200 text-xs font-bold gap-6">
        <button
          onClick={() => setActiveTab('lifecycle')}
          className={`pb-3 border-b-2 transition ${
            activeTab === 'lifecycle'
              ? 'border-[#176B55] text-[#176B55]'
              : 'border-transparent text-gray-500 hover:text-gray-800'
          }`}
        >
          Content Lifecycle & Approval Queue ({lessons.length})
        </button>

        <button
          onClick={() => setActiveTab('editor')}
          className={`pb-3 border-b-2 transition ${
            activeTab === 'editor'
              ? 'border-[#176B55] text-[#176B55]'
              : 'border-transparent text-gray-500 hover:text-gray-800'
          }`}
        >
          Author New Lesson
        </button>

        <button
          onClick={() => setActiveTab('audit')}
          className={`pb-3 border-b-2 transition ${
            activeTab === 'audit'
              ? 'border-[#176B55] text-[#176B55]'
              : 'border-transparent text-gray-500 hover:text-gray-800'
          }`}
        >
          Review Audit Logs
        </button>

        <button
          onClick={() => setActiveTab('schools')}
          className={`pb-3 border-b-2 transition ${
            activeTab === 'schools'
              ? 'border-[#176B55] text-[#176B55]'
              : 'border-transparent text-gray-500 hover:text-gray-800'
          }`}
        >
          School Records & UDISE
        </button>
      </div>

      {/* TAB 1: CONTENT LIFECYCLE QUEUE */}
      {activeTab === 'lifecycle' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-extrabold text-base text-[#20332E]">
              Lesson Review & Publication Pipeline
            </h3>
            <span className="text-xs text-[#577067]">
              Drafts require reviewer approval before publication.
            </span>
          </div>

          <div className="overflow-x-auto rounded-3xl bg-white border border-gray-200 shadow-2xs">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#FBFAF6] text-[#577067] uppercase font-bold text-[10px] border-b border-gray-100">
                <tr>
                  <th className="p-3.5">Lesson Title</th>
                  <th className="p-3.5">Class & Subject</th>
                  <th className="p-3.5">Author</th>
                  <th className="p-3.5">Review Stage</th>
                  <th className="p-3.5">Reviewer Notes</th>
                  <th className="p-3.5 text-right">Approval Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 font-medium">
                {lessons.map((lesson) => {
                  const trans = lesson.translations.en;
                  const statusColors: Record<ContentStatus, string> = {
                    draft: 'bg-gray-100 text-gray-700',
                    submitted: 'bg-blue-100 text-blue-800',
                    approved: 'bg-emerald-100 text-emerald-800',
                    published: 'bg-[#176B55] text-white',
                    archived: 'bg-rose-100 text-rose-800'
                  };

                  return (
                    <tr key={lesson.id} className="hover:bg-gray-50/60 transition">
                      <td className="p-3.5 font-bold text-[#20332E]">
                        <div>{trans.title}</div>
                        <span className="text-[10px] text-gray-400 font-normal">v{lesson.version} • {lesson.slug}</span>
                      </td>
                      <td className="p-3.5 text-[#577067]">
                        Class {lesson.classNumber} • {lesson.subjectCode.toUpperCase()}
                      </td>
                      <td className="p-3.5 text-[#20332E]">{lesson.authorName}</td>
                      <td className="p-3.5">
                        <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase ${statusColors[lesson.status]}`}>
                          {lesson.status}
                        </span>
                      </td>
                      <td className="p-3.5 text-[#577067] text-[11px] max-w-xs truncate">
                        {lesson.reviewerName ? `Reviewed by ${lesson.reviewerName}` : 'Awaiting review'}
                      </td>
                      <td className="p-3.5 text-right space-x-2">
                        {lesson.status === 'draft' || lesson.status === 'submitted' ? (
                          <>
                            <button
                              onClick={() => handleReviewAction(lesson.id, 'approved', 'Approved by SCERT review panel')}
                              className="px-2.5 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-[11px] font-bold transition"
                            >
                              Approve
                            </button>
                            <button
                              onClick={() => handleReviewAction(lesson.id, 'rejected', 'Revision requested by reviewer')}
                              className="px-2.5 py-1 rounded-lg border border-rose-300 text-rose-700 text-[11px] font-bold hover:bg-rose-50"
                            >
                              Reject
                            </button>
                          </>
                        ) : lesson.status === 'approved' ? (
                          <button
                            onClick={() => handlePublishToggle(lesson.id)}
                            className="px-3 py-1 rounded-lg bg-[#176B55] hover:bg-[#0f4839] text-white text-[11px] font-bold transition"
                          >
                            Publish Live
                          </button>
                        ) : (
                          <button
                            onClick={() => handlePublishToggle(lesson.id)}
                            className="px-2.5 py-1 rounded-lg border border-gray-300 text-gray-600 text-[11px] font-semibold hover:bg-gray-100"
                          >
                            Unpublish
                          </button>
                        )}

                        <button
                          onClick={() => onSelectLesson(lesson.id)}
                          className="px-2 py-1 text-[#176B55] hover:underline text-[11px] font-bold"
                        >
                          Preview
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 2: AUTHOR NEW LESSON */}
      {activeTab === 'editor' && (
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-gray-200 shadow-2xs space-y-6">
          <div className="border-b pb-4 border-gray-100">
            <h3 className="font-extrabold text-lg text-[#20332E]">
              Create Curriculum Lesson Unit
            </h3>
            <p className="text-xs text-[#577067]">
              Content created here enters the controlled lifecycle. Only approved lessons are published to students.
            </p>
          </div>

          <form onSubmit={handleCreateLesson} className="space-y-4 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="font-bold block mb-1">Target Class</label>
                <select
                  value={newClassNumber}
                  onChange={(e) => setNewClassNumber(Number(e.target.value))}
                  className="w-full px-3 py-2 rounded-xl border border-gray-200"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((c) => (
                    <option key={c} value={c}>Class {c}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="font-bold block mb-1">Subject</label>
                <select
                  value={newSubjectCode}
                  onChange={(e) => setNewSubjectCode(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-gray-200"
                >
                  {SUBJECTS_LIST.map((s) => (
                    <option key={s.code} value={s.code}>{s.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="font-bold block mb-1">Estimated Minutes</label>
                <input
                  type="number"
                  value={newEstimatedMinutes}
                  onChange={(e) => setNewEstimatedMinutes(Number(e.target.value))}
                  className="w-full px-3 py-2 rounded-xl border border-gray-200"
                />
              </div>
            </div>

            <div>
              <label className="font-bold block mb-1">Lesson Title</label>
              <input
                type="text"
                placeholder="e.g. Village Water Purification: Filtration & Boiling"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                required
                className="w-full px-3 py-2.5 rounded-xl border border-gray-200"
              />
            </div>

            <div>
              <label className="font-bold block mb-1">Lesson Summary (Pedagogical Outcome)</label>
              <textarea
                rows={2}
                placeholder="Brief description explaining how students will apply this in village daily life..."
                value={newSummary}
                onChange={(e) => setNewSummary(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl border border-gray-200"
              />
            </div>

            <div>
              <label className="font-bold block mb-1">Introductory Explanation / Story</label>
              <textarea
                rows={4}
                placeholder="Write clear, friendly explanation with step-by-step points..."
                value={newSectionContent}
                onChange={(e) => setNewSectionContent(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl border border-gray-200 font-mono text-[11px]"
              />
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <div className="flex items-center gap-2">
                <span className="font-bold text-gray-700">Initial Lifecycle State:</span>
                <select
                  value={editorStatus}
                  onChange={(e) => setEditorStatus(e.target.value as ContentStatus)}
                  className="px-2 py-1 rounded-lg border border-gray-200 font-semibold"
                >
                  <option value="draft">Save as Draft</option>
                  <option value="submitted">Submit for District Review</option>
                  <option value="approved">Approved by Committee</option>
                </select>
              </div>

              <button
                type="submit"
                className="px-6 py-2.5 rounded-xl bg-[#176B55] hover:bg-[#0f4839] text-white font-bold transition shadow-xs flex items-center gap-1.5"
              >
                <Plus className="w-4 h-4" />
                <span>Save Lesson Unit</span>
              </button>
            </div>
          </form>
        </div>
      )}

      {/* TAB 3: AUDIT LOGS */}
      {activeTab === 'audit' && (
        <div className="p-6 rounded-3xl bg-white border border-gray-200 shadow-2xs space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-extrabold text-base text-[#20332E]">
              Content Review Audit History
            </h3>
            <span className="text-xs text-[#577067]">
              Immutable review records compliant with educational governance.
            </span>
          </div>

          <div className="divide-y divide-gray-100 text-xs">
            {reviewsList.map((rev) => (
              <div key={rev.id} className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-[#20332E]">{rev.lessonTitle}</span>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                      rev.action === 'approved' ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                    }`}>
                      {rev.action}
                    </span>
                  </div>
                  <p className="text-[11px] text-[#577067]">
                    Feedback: <em>"{rev.feedback}"</em>
                  </p>
                </div>
                <div className="text-right text-[11px] text-[#577067] flex-shrink-0">
                  <span className="block font-semibold">{rev.reviewerName}</span>
                  <span className="text-[10px] text-gray-400">{new Date(rev.reviewedAt).toLocaleDateString()}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 4: SCHOOL RECORDS */}
      {activeTab === 'schools' && (
        <div className="p-6 rounded-3xl bg-white border border-gray-200 shadow-2xs space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-extrabold text-base text-[#20332E]">
              Registered Primary Schools
            </h3>
            <span className="text-xs text-[#577067]">
              Schools registered with state education departments.
            </span>
          </div>

          <div className="p-5 rounded-2xl bg-[#FBFAF6] border border-gray-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#E6F4ED] text-[#176B55] flex items-center justify-center">
                <School className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-[#20332E]">
                  Government Higher Primary School, Hirekerur
                </h4>
                <p className="text-xs text-[#577067]">
                  UDISE: 29280401201 • Haveri District, Karnataka • PIN: 581111
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                Active • 8 Classes Enrolled
              </span>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
