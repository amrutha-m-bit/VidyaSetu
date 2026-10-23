export type LanguageCode = 'en' | 'hi' | 'kn' | 'te' | 'ta' | 'ml' | 'mr' | 'bn';

export interface Language {
  code: LanguageCode;
  name: string;
  nativeName: string;
  script: string;
}

export type UserRole = 'student' | 'teacher' | 'content_editor' | 'admin';

export interface UserProfile {
  id: string;
  fullName: string;
  role: UserRole;
  preferredLanguage: LanguageCode;
  currentClass: number; // 1 to 8
  schoolName?: string;
  starsTotal: number;
}

export interface Subject {
  id: string;
  code: string;
  name: string;
  nameLocalized?: Record<LanguageCode, string>;
  iconName: string;
  colorCode: string;
}

export type ContentStatus = 'draft' | 'submitted' | 'approved' | 'published' | 'archived';

export interface QuestionOption {
  id: string;
  text: string;
  isCorrect: boolean;
  imageUrl?: string;
}

export interface Question {
  id: string;
  text: string;
  type: 'mcq' | 'picture_mcq' | 'true_false' | 'fill_blank';
  options: QuestionOption[];
  hint?: string;
  explanation: string;
  imageUrl?: string;
}

export interface InteractiveActivity {
  id: string;
  type: 'counting' | 'matching' | 'puzzle' | 'sorting' | 'true_false';
  title: string;
  instructions: string;
  data: any;
}

export interface LessonSection {
  id: string;
  orderIndex: number;
  sectionType: 'story' | 'concept' | 'illustrated_card' | 'worked_example' | 'activity' | 'quiz';
  title: string;
  content: string; // Markdown or rich text
  illustratedSvg?: string;
  audioNarrationText?: string;
  activity?: InteractiveActivity;
  questions?: Question[];
}

export interface LessonTranslation {
  languageCode: LanguageCode;
  title: string;
  summary: string;
  estimatedMinutes: number;
  sections: LessonSection[];
}

export interface Lesson {
  id: string;
  classNumber: number; // 1 - 8
  subjectCode: string;
  slug: string;
  difficultyLevel: 'beginner' | 'intermediate' | 'advanced';
  status: ContentStatus;
  authorName: string;
  authorId?: string;
  reviewerName?: string;
  publishedAt?: string;
  updatedAt: string;
  version: number;
  translations: Record<LanguageCode, LessonTranslation>;
  isOfflineAvailable?: boolean;
}

export interface QuizAttempt {
  id: string;
  clientOperationId: string;
  studentId: string;
  lessonId: string;
  score: number;
  totalQuestions: number;
  percentage: number;
  isPassed: boolean;
  completedAt: string;
  weakTopics?: string[];
}

export interface LessonProgress {
  lessonId: string;
  studentId: string;
  status: 'not_started' | 'in_progress' | 'completed';
  currentSectionIndex: number;
  starsEarned: number;
  scorePercentage?: number;
  completedAt?: string;
  lastUpdated: string;
}

export interface Achievement {
  id: string;
  code: string;
  title: string;
  description: string;
  badgeIcon: string;
  starsReward: number;
  unlockedAt?: string;
}

export interface OfflineSyncEvent {
  id: string;
  clientOperationId: string;
  userId: string;
  eventType: 'SUBMIT_QUIZ' | 'UPDATE_PROGRESS' | 'BOOKMARK_LESSON' | 'SUBMIT_REVIEW';
  payload: any;
  status: 'pending' | 'synced' | 'failed';
  errorMessage?: string;
  createdAt: string;
  retryCount: number;
}

export interface ContentReviewRecord {
  id: string;
  lessonId: string;
  lessonTitle: string;
  authorName: string;
  reviewerName: string;
  action: 'submitted' | 'approved' | 'rejected';
  feedback: string;
  reviewedAt: string;
}

export interface ClassroomStudent {
  id: string;
  name: string;
  classNumber: number;
  lessonsCompleted: number;
  averageScore: number;
  starsEarned: number;
  lastActive: string;
  needsHelpTopics: string[];
}
