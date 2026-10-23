import React, { useState } from 'react';
import { LanguageCode, ClassroomStudent } from '../types';
import { t } from '../i18n';
import { SAMPLE_STUDENTS, SAMPLE_LESSONS } from '../data/sampleLessons';
import { 
  Users, 
  BookOpen, 
  Award, 
  Download, 
  FileSpreadsheet, 
  Monitor, 
  AlertTriangle, 
  CheckCircle2, 
  Plus, 
  Calendar,
  Sparkles,
  BarChart3,
  Clock,
  Printer
} from 'lucide-react';
import { localStore } from '../offline/storage';

interface Props {
  currentLanguage: LanguageCode;
  onSelectLesson: (lessonId: string) => void;
}

const DEFAULT_ASSIGNMENTS = [
  {
    id: 'asg-1',
    title: 'Practice Fractions with Warm Rotis',
    lessonTitle: 'Sharing Rotis: Discovering Fractions',
    dueDate: '2026-10-28',
    completionCount: 18,
    totalCount: 28
  },
  {
    id: 'asg-2',
    title: 'School Garden Plant Parts Observation',
    lessonTitle: 'Our Green Friends: The Parts of a Plant',
    dueDate: '2026-11-02',
    completionCount: 24,
    totalCount: 28
  }
];

export const TeacherDashboard: React.FC<Props> = ({ currentLanguage, onSelectLesson }) => {
  const [selectedClass, setSelectedClass] = useState<number>(4);
  const [students, setStudents] = useState<ClassroomStudent[]>(() => localStore.getStudents(SAMPLE_STUDENTS));
  const [activeTab, setActiveTab] = useState<'roster' | 'assignments' | 'analytics' | 'projector'>('roster');
  const [newAssignmentTitle, setNewAssignmentTitle] = useState('');
  const [newAssignmentLessonId, setNewAssignmentLessonId] = useState(SAMPLE_LESSONS[0].id);
  const [newAssignmentDueDate, setNewAssignmentDueDate] = useState('2026-10-30');
  const [assignmentsList, setAssignmentsList] = useState(() => localStore.getAssignments(DEFAULT_ASSIGNMENTS));
  const [showAddStudentModal, setShowAddStudentModal] = useState(false);
  const [newStudentName, setNewStudentName] = useState('');

  // Handle Export CSV
  const handleExportCSV = () => {
    const headers = 'ID,Student Name,Class,Lessons Completed,Average Score,Stars,Needs Revision\n';
    const rows = students
      .map(
        (s) =>
          `"${s.id}","${s.name}",${s.classNumber},${s.lessonsCompleted},${s.averageScore}%,${s.starsEarned},"${s.needsHelpTopics.join('; ')}"`
      )
      .join('\n');
    const blob = new Blob([headers + rows], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `Class_${selectedClass}_VidyaSetu_Report.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Handle add assignment
  const handleCreateAssignment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAssignmentTitle.trim()) return;
    const lesson = SAMPLE_LESSONS.find((l) => l.id === newAssignmentLessonId);
    const trans = lesson ? (lesson.translations[currentLanguage] || lesson.translations.en) : null;

    const newAssignment = {
      id: `asg-${Date.now()}`,
      title: newAssignmentTitle,
      lessonTitle: trans?.title || 'Interactive Lesson',
      dueDate: newAssignmentDueDate,
      completionCount: 0,
      totalCount: students.length
    };

    setAssignmentsList((prev) => {
      const updated = [...prev, newAssignment];
      localStore.saveAssignments(updated);
      return updated;
    });
    setNewAssignmentTitle('');
    alert('Assignment published to Class 4 students!');
  };

  // Handle Add Student (Supervised enrollment)
  const handleAddStudent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newStudentName.trim()) return;
    const newStudent: ClassroomStudent = {
      id: `stud-${Date.now()}`,
      name: newStudentName,
      classNumber: selectedClass,
      lessonsCompleted: 0,
      averageScore: 0,
      starsEarned: 10,
      lastActive: 'Just enrolled',
      needsHelpTopics: []
    };
    setStudents((prev) => {
      const updated = [...prev, newStudent];
      localStore.saveStudents(updated);
      return updated;
    });
    setNewStudentName('');
    setShowAddStudentModal(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Teacher Profile Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#c2e5d3] shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-[#176B55] text-white flex items-center justify-center font-black text-xl shadow-md">
            RG
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl sm:text-2xl font-black text-[#20332E]">
                Ramesh Gowda
              </h1>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                Verified Government Teacher
              </span>
            </div>
            <p className="text-xs text-[#577067] mt-0.5">
              Government Higher Primary School, Hirekerur • UDISE: 29280401201
            </p>
          </div>
        </div>

        {/* Quick action controls */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={handleExportCSV}
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-gray-200 text-xs font-bold text-[#20332E] hover:bg-gray-50 transition shadow-2xs"
          >
            <FileSpreadsheet className="w-4 h-4 text-[#176B55]" />
            <span>Export Roster CSV</span>
          </button>

          <button
            onClick={() => setActiveTab('projector')}
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#176B55] hover:bg-[#0f4839] text-white text-xs font-bold transition shadow-xs"
          >
            <Monitor className="w-4 h-4 text-[#F2B84B]" />
            <span>Classroom Projector Mode</span>
          </button>
        </div>
      </div>

      {/* KPI Overview */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl bg-white border border-gray-100 shadow-2xs space-y-1">
          <span className="text-xs text-[#577067] font-semibold">Enrolled Students</span>
          <span className="text-2xl font-black text-[#176B55] block">{students.length}</span>
          <span className="text-[10px] text-emerald-600 font-medium">Class {selectedClass} Active</span>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-gray-100 shadow-2xs space-y-1">
          <span className="text-xs text-[#577067] font-semibold">Active Assignments</span>
          <span className="text-2xl font-black text-[#d99726] block">{assignmentsList.length}</span>
          <span className="text-[10px] text-[#577067]">Due within 7 days</span>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-gray-100 shadow-2xs space-y-1">
          <span className="text-xs text-[#577067] font-semibold">Average Quiz Score</span>
          <span className="text-2xl font-black text-[#176B55] block">82.8%</span>
          <span className="text-[10px] text-emerald-600 font-medium">+4.2% this month</span>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-gray-100 shadow-2xs space-y-1">
          <span className="text-xs text-[#577067] font-semibold">Needs Revision Help</span>
          <span className="text-2xl font-black text-rose-600 block">2</span>
          <span className="text-[10px] text-rose-500">Flagged topics</span>
        </div>
      </div>

      {/* Common Difficulties Diagnostic Alert */}
      <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200 flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
        <div className="space-y-1">
          <h4 className="font-bold text-xs sm:text-sm text-amber-900">
            Automated Curriculum Diagnostic Alert:
          </h4>
          <p className="text-xs text-amber-800 leading-relaxed">
            Students <strong>Basavaraj H.</strong> and <strong>Kiran K.</strong> struggled with "Fraction Sharing (1/4 quarters)" during offline quiz attempts. Recommended pedagogical action: Conduct hands-on paper folding activity or assign the interactive roti-sharing lesson.
          </p>
        </div>
      </div>

      {/* Tabs Bar */}
      <div className="flex border-b border-gray-200 text-xs font-bold gap-6">
        <button
          onClick={() => setActiveTab('roster')}
          className={`pb-3 border-b-2 transition ${
            activeTab === 'roster'
              ? 'border-[#176B55] text-[#176B55]'
              : 'border-transparent text-gray-500 hover:text-gray-800'
          }`}
        >
          Student Roster & Progress ({students.length})
        </button>

        <button
          onClick={() => setActiveTab('assignments')}
          className={`pb-3 border-b-2 transition ${
            activeTab === 'assignments'
              ? 'border-[#176B55] text-[#176B55]'
              : 'border-transparent text-gray-500 hover:text-gray-800'
          }`}
        >
          Assignments & Deadlines ({assignmentsList.length})
        </button>

        <button
          onClick={() => setActiveTab('projector')}
          className={`pb-3 border-b-2 transition ${
            activeTab === 'projector'
              ? 'border-[#176B55] text-[#176B55]'
              : 'border-transparent text-gray-500 hover:text-gray-800'
          }`}
        >
          Classroom Projector Mode
        </button>
      </div>

      {/* TAB 1: STUDENT ROSTER */}
      {activeTab === 'roster' && (
        <div className="p-6 rounded-3xl bg-white border border-gray-200 shadow-2xs space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-extrabold text-base text-[#20332E]">
              Class {selectedClass} Students
            </h3>
            <button
              onClick={() => setShowAddStudentModal(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#176B55] text-white text-xs font-bold hover:bg-[#0f4839] transition"
            >
              <Plus className="w-4 h-4" />
              <span>Enroll Student</span>
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#FBFAF6] text-[#577067] uppercase font-bold text-[10px] border-b border-gray-100">
                <tr>
                  <th className="p-3">Student Name</th>
                  <th className="p-3">Class</th>
                  <th className="p-3">Lessons Done</th>
                  <th className="p-3">Avg Quiz Score</th>
                  <th className="p-3">Stars Earned</th>
                  <th className="p-3">Needs Help Topics</th>
                  <th className="p-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 font-medium">
                {students.map((st) => (
                  <tr key={st.id} className="hover:bg-gray-50/70 transition">
                    <td className="p-3 font-bold text-[#20332E]">{st.name}</td>
                    <td className="p-3 text-[#577067]">Class {st.classNumber}</td>
                    <td className="p-3">
                      <span className="px-2 py-0.5 rounded-md bg-[#E6F4ED] text-[#176B55] font-bold">
                        {st.lessonsCompleted}
                      </span>
                    </td>
                    <td className="p-3 font-bold">
                      <span className={st.averageScore >= 80 ? 'text-emerald-700' : 'text-amber-700'}>
                        {st.averageScore}%
                      </span>
                    </td>
                    <td className="p-3 text-[#d99726] font-bold">⭐ {st.starsEarned}</td>
                    <td className="p-3">
                      {st.needsHelpTopics.length > 0 ? (
                        <span className="text-rose-700 font-semibold bg-rose-50 px-2 py-0.5 rounded text-[11px]">
                          {st.needsHelpTopics.join(', ')}
                        </span>
                      ) : (
                        <span className="text-emerald-600 text-[11px] font-semibold">On Track ✓</span>
                      )}
                    </td>
                    <td className="p-3 text-right">
                      <button
                        onClick={() => alert(`Reviewing confidential student record for ${st.name}`)}
                        className="text-[#176B55] font-bold hover:underline text-xs"
                      >
                        View Report
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 2: ASSIGNMENTS & DEADLINES */}
      {activeTab === 'assignments' && (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Create Assignment Form */}
          <div className="md:col-span-5 p-6 rounded-3xl bg-white border border-gray-200 shadow-2xs space-y-4">
            <h3 className="font-extrabold text-base text-[#20332E]">
              Create New Assignment
            </h3>
            <form onSubmit={handleCreateAssignment} className="space-y-3 text-xs">
              <div>
                <label className="font-bold text-gray-700 block mb-1">Assignment Title</label>
                <input
                  type="text"
                  placeholder="e.g. Master Plant Roots & Soil"
                  value={newAssignmentTitle}
                  onChange={(e) => setNewAssignmentTitle(e.target.value)}
                  required
                  className="w-full px-3 py-2 rounded-xl border border-gray-200 text-xs"
                />
              </div>

              <div>
                <label className="font-bold text-gray-700 block mb-1">Select Interactive Lesson</label>
                <select
                  value={newAssignmentLessonId}
                  onChange={(e) => setNewAssignmentLessonId(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-gray-200 text-xs"
                >
                  {SAMPLE_LESSONS.map((l) => (
                    <option key={l.id} value={l.id}>
                      Class {l.classNumber}: {l.translations.en.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="font-bold text-gray-700 block mb-1">Completion Deadline</label>
                <input
                  type="date"
                  value={newAssignmentDueDate}
                  onChange={(e) => setNewAssignmentDueDate(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-gray-200 text-xs"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-[#176B55] text-white font-bold text-xs hover:bg-[#0f4839] transition shadow-xs"
              >
                Assign to Class 4
              </button>
            </form>
          </div>

          {/* Active Assignments List */}
          <div className="md:col-span-7 space-y-3">
            <h3 className="font-extrabold text-base text-[#20332E]">
              Active Classroom Tasks
            </h3>
            {assignmentsList.map((asg) => (
              <div key={asg.id} className="p-5 rounded-2xl bg-white border border-gray-100 shadow-2xs space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-sm text-[#20332E]">{asg.title}</h4>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#fef5e7] text-[#d99726]">
                    Due: {asg.dueDate}
                  </span>
                </div>
                <p className="text-xs text-[#577067]">
                  Lesson: <strong>{asg.lessonTitle}</strong>
                </p>
                <div className="flex items-center justify-between text-xs pt-1 border-t border-gray-50">
                  <span className="text-[#577067]">
                    Completion: <strong>{asg.completionCount}</strong> / {asg.totalCount} Students
                  </span>
                  <div className="w-28 h-2 rounded-full bg-gray-100 overflow-hidden">
                    <div
                      className="h-full bg-[#176B55]"
                      style={{ width: `${(asg.completionCount / asg.totalCount) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      )}

      {/* TAB 3: CLASSROOM PROJECTOR / BIG SCREEN MODE */}
      {activeTab === 'projector' && (
        <div className="p-8 sm:p-12 rounded-3xl bg-[#176B55] text-white shadow-xl space-y-6 text-center">
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="px-3.5 py-1 rounded-full bg-white/20 text-[#F2B84B] font-black text-xs uppercase tracking-wider">
              Classroom Screen Presentation Mode
            </span>
            <h2 className="text-2xl sm:text-4xl font-black">
              Shared Screen Interactive Teaching
            </h2>
            <p className="text-xs sm:text-base text-[#E6F4ED] leading-relaxed">
              Designed for government schools with one computer or smart TV in the common room. Large touch targets, high contrast diagrams, and whole-class participation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left max-w-3xl mx-auto">
            {SAMPLE_LESSONS.slice(0, 3).map((l) => (
              <div key={l.id} className="p-5 rounded-2xl bg-white text-[#20332E] shadow-md space-y-3">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#E6F4ED] text-[#176B55]">
                  Class {l.classNumber} • {l.subjectCode.toUpperCase()}
                </span>
                <h4 className="font-extrabold text-sm text-[#20332E]">
                  {l.translations[currentLanguage]?.title || l.translations.en.title}
                </h4>
                <button
                  onClick={() => onSelectLesson(l.id)}
                  className="w-full py-2.5 rounded-xl bg-[#176B55] hover:bg-[#0f4839] text-white text-xs font-bold transition flex items-center justify-center gap-1.5"
                >
                  <Monitor className="w-4 h-4 text-[#F2B84B]" />
                  <span>Launch on Screen</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Supervised Enrollment Modal */}
      {showAddStudentModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-2xl space-y-4">
            <h3 className="font-bold text-base text-[#176B55]">
              Enroll Student in Class {selectedClass}
            </h3>
            <p className="text-xs text-[#577067]">
              Teacher-managed enrollment ensures zero collection of child telephone numbers or private data.
            </p>
            <form onSubmit={handleAddStudent} className="space-y-3 text-xs">
              <div>
                <label className="font-bold block mb-1">Student Full Name</label>
                <input
                  type="text"
                  placeholder="e.g. Suresh Pujar"
                  value={newStudentName}
                  onChange={(e) => setNewStudentName(e.target.value)}
                  required
                  className="w-full px-3 py-2 rounded-xl border border-gray-200"
                />
              </div>
              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddStudentModal(false)}
                  className="px-4 py-2 rounded-xl border border-gray-200 text-gray-600"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-[#176B55] text-white font-bold"
                >
                  Confirm Enrollment
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
