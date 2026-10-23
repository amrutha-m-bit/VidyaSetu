import { Lesson, QuizAttempt, LessonProgress, OfflineSyncEvent } from '../types';
import { localStore } from './storage';

class VidyaSetuOfflineDB {
  async saveDownloadedLesson(lesson: Lesson): Promise<void> {
    localStore.saveDownloadedLesson(lesson);
  }

  async removeDownloadedLesson(lessonId: string): Promise<void> {
    localStore.removeDownloadedLesson(lessonId);
  }

  async getDownloadedLessons(): Promise<Lesson[]> {
    return localStore.getDownloadedLessons();
  }

  async isLessonDownloaded(lessonId: string): Promise<boolean> {
    return localStore.isLessonDownloaded(lessonId);
  }

  async saveQuizAttempt(attempt: QuizAttempt): Promise<void> {
    localStore.saveQuizAttempt(attempt);
  }

  async getQuizAttempts(): Promise<QuizAttempt[]> {
    return localStore.getQuizAttempts();
  }

  async saveProgress(progress: LessonProgress): Promise<void> {
    localStore.saveProgress(progress);
  }

  async getProgress(lessonId: string): Promise<LessonProgress | null> {
    return localStore.getProgress(lessonId);
  }

  async getAllProgress(): Promise<LessonProgress[]> {
    return localStore.getAllProgress();
  }

  async toggleBookmark(lessonId: string): Promise<boolean> {
    return localStore.toggleBookmark(lessonId);
  }

  async getBookmarkedIds(): Promise<string[]> {
    return localStore.getBookmarkedIds();
  }

  // Queue event mock for frontend-only
  async queueSyncEvent(_event: OfflineSyncEvent): Promise<void> {
    // Frontend-only: all data is already immediately stored in localStorage
  }

  async getPendingSyncEvents(): Promise<OfflineSyncEvent[]> {
    return [];
  }

  async markSyncEventSuccess(_id: string): Promise<void> {}

  async markSyncEventFailed(_id: string, _error: string): Promise<void> {}
}

export const offlineDB = new VidyaSetuOfflineDB();
