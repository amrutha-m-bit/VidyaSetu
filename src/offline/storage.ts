import { Lesson, QuizAttempt, LessonProgress, Achievement, ClassroomStudent, ContentReviewRecord } from '../types';

const STORAGE_KEYS = {
  DOWNLOADED: 'vidyasetu_downloaded_lessons',
  QUIZ_ATTEMPTS: 'vidyasetu_quiz_attempts',
  PROGRESS: 'vidyasetu_lesson_progress',
  BOOKMARKS: 'vidyasetu_bookmarks',
  STUDENTS: 'vidyasetu_students',
  ASSIGNMENTS: 'vidyasetu_assignments',
  REVIEWS: 'vidyasetu_reviews',
  STARS: 'vidyasetu_stars',
};

class LocalStorageEngine {
  // Downloaded Lessons
  getDownloadedLessons(): Lesson[] {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.DOWNLOADED);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  }

  saveDownloadedLesson(lesson: Lesson): void {
    try {
      const current = this.getDownloadedLessons().filter((l) => l.id !== lesson.id);
      current.push(lesson);
      localStorage.setItem(STORAGE_KEYS.DOWNLOADED, JSON.stringify(current));
    } catch (e) {
      console.warn('LocalStorage save error:', e);
    }
  }

  removeDownloadedLesson(lessonId: string): void {
    try {
      const updated = this.getDownloadedLessons().filter((l) => l.id !== lessonId);
      localStorage.setItem(STORAGE_KEYS.DOWNLOADED, JSON.stringify(updated));
    } catch (e) {
      console.warn('LocalStorage delete error:', e);
    }
  }

  isLessonDownloaded(lessonId: string): boolean {
    return this.getDownloadedLessons().some((l) => l.id === lessonId);
  }

  // Quiz Attempts
  getQuizAttempts(): QuizAttempt[] {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.QUIZ_ATTEMPTS);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  }

  saveQuizAttempt(attempt: QuizAttempt): void {
    try {
      const attempts = this.getQuizAttempts();
      attempts.unshift(attempt);
      localStorage.setItem(STORAGE_KEYS.QUIZ_ATTEMPTS, JSON.stringify(attempts));
    } catch (e) {
      console.warn('LocalStorage save quiz error:', e);
    }
  }

  // Lesson Progress
  getAllProgress(): LessonProgress[] {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.PROGRESS);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  }

  getProgress(lessonId: string): LessonProgress | null {
    const all = this.getAllProgress();
    return all.find((p) => p.lessonId === lessonId) || null;
  }

  saveProgress(progress: LessonProgress): void {
    try {
      const all = this.getAllProgress().filter((p) => p.lessonId !== progress.lessonId);
      all.push(progress);
      localStorage.setItem(STORAGE_KEYS.PROGRESS, JSON.stringify(all));
    } catch (e) {
      console.warn('LocalStorage save progress error:', e);
    }
  }

  // Bookmarks
  getBookmarkedIds(): string[] {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.BOOKMARKS);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  }

  toggleBookmark(lessonId: string): boolean {
    try {
      let bms = this.getBookmarkedIds();
      let isBookmarked = false;
      if (bms.includes(lessonId)) {
        bms = bms.filter((id) => id !== lessonId);
        isBookmarked = false;
      } else {
        bms.push(lessonId);
        isBookmarked = true;
      }
      localStorage.setItem(STORAGE_KEYS.BOOKMARKS, JSON.stringify(bms));
      return isBookmarked;
    } catch {
      return false;
    }
  }

  // Students (for Teacher Portal)
  getStudents(defaultStudents: ClassroomStudent[]): ClassroomStudent[] {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.STUDENTS);
      return data ? JSON.parse(data) : defaultStudents;
    } catch {
      return defaultStudents;
    }
  }

  saveStudents(students: ClassroomStudent[]): void {
    try {
      localStorage.setItem(STORAGE_KEYS.STUDENTS, JSON.stringify(students));
    } catch (e) {
      console.warn('LocalStorage save students error:', e);
    }
  }

  // Assignments
  getAssignments(defaultAssignments: any[]): any[] {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.ASSIGNMENTS);
      return data ? JSON.parse(data) : defaultAssignments;
    } catch {
      return defaultAssignments;
    }
  }

  saveAssignments(assignments: any[]): void {
    try {
      localStorage.setItem(STORAGE_KEYS.ASSIGNMENTS, JSON.stringify(assignments));
    } catch (e) {
      console.warn('LocalStorage save assignments error:', e);
    }
  }

  // Reviews
  getReviews(defaultReviews: ContentReviewRecord[]): ContentReviewRecord[] {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.REVIEWS);
      return data ? JSON.parse(data) : defaultReviews;
    } catch {
      return defaultReviews;
    }
  }

  saveReviews(reviews: ContentReviewRecord[]): void {
    try {
      localStorage.setItem(STORAGE_KEYS.REVIEWS, JSON.stringify(reviews));
    } catch (e) {
      console.warn('LocalStorage save reviews error:', e);
    }
  }
}

export const localStore = new LocalStorageEngine();
