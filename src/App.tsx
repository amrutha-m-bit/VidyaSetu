import React, { useState, useEffect } from 'react';
import { LanguageCode, UserRole } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { OfflineIndicator } from './components/OfflineIndicator';
import { HomePage } from './pages/HomePage';
import { StudentDashboard } from './pages/StudentDashboard';
import { LessonLibrary } from './pages/LessonLibrary';
import { LessonPlayer } from './pages/LessonPlayer';
import { GamesHub } from './pages/GamesHub';
import { TeacherDashboard } from './pages/TeacherDashboard';
import { AdminPortal } from './pages/AdminPortal';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [currentLanguage, setCurrentLanguage] = useState<LanguageCode>('en');
  const [selectedClass, setSelectedClass] = useState<number>(3);
  const [currentUserRole, setCurrentUserRole] = useState<UserRole>('student');
  const [selectedLessonId, setSelectedLessonId] = useState<string | null>(null);
  const [initialLibrarySubject, setInitialLibrarySubject] = useState<string>('all');
  const [starsCount, setStarsCount] = useState<number>(140);

  // Register Service Worker for offline PWA caching
  useEffect(() => {
    if ('serviceWorker' in navigator && process.env.NODE_ENV !== 'test') {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').catch((err) => {
          console.log('[PWA] ServiceWorker info:', err);
        });
      });
    }

    // Load saved stars and language from localStorage
    try {
      const savedLang = localStorage.getItem('vidyasetu_lang');
      if (savedLang) setCurrentLanguage(savedLang as LanguageCode);

      const savedStars = localStorage.getItem('vidyasetu_stars');
      if (savedStars) setStarsCount(Number(savedStars));

      const savedClass = localStorage.getItem('vidyasetu_class');
      if (savedClass) setSelectedClass(Number(savedClass));
    } catch {}
  }, []);

  const handleLanguageChange = (lang: LanguageCode) => {
    setCurrentLanguage(lang);
    try {
      localStorage.setItem('vidyasetu_lang', lang);
    } catch {}
  };

  const handleClassChange = (c: number) => {
    setSelectedClass(c);
    try {
      localStorage.setItem('vidyasetu_class', String(c));
    } catch {}
  };

  const handleAwardStars = (amount: number) => {
    setStarsCount((prev) => {
      const updated = prev + amount;
      try {
        localStorage.setItem('vidyasetu_stars', String(updated));
      } catch {}
      return updated;
    });
  };

  const handleNavigate = (tab: string, params?: any) => {
    if (params?.subject) {
      setInitialLibrarySubject(params.subject);
    }
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectLesson = (lessonId: string) => {
    setSelectedLessonId(lessonId);
    setCurrentTab('player');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFAF6] text-[#20332E]">
      {/* Global Navigation Header */}
      <Navbar
        currentTab={currentTab}
        onSelectTab={(tab) => handleNavigate(tab)}
        currentLanguage={currentLanguage}
        onLanguageChange={handleLanguageChange}
        currentUserRole={currentUserRole}
        onRoleChange={(role) => {
          setCurrentUserRole(role);
          if (role === 'teacher') handleNavigate('teacher');
          else if (role === 'admin') handleNavigate('admin');
          else handleNavigate('student');
        }}
        starsCount={starsCount}
      />

      {/* Main Page Routing Container */}
      <main className="flex-1">
        {currentTab === 'home' && (
          <HomePage
            currentLanguage={currentLanguage}
            onNavigate={handleNavigate}
            onSelectLesson={handleSelectLesson}
          />
        )}

        {currentTab === 'student' && (
          <StudentDashboard
            currentLanguage={currentLanguage}
            selectedClass={selectedClass}
            onClassChange={handleClassChange}
            onSelectLesson={handleSelectLesson}
            starsCount={starsCount}
          />
        )}

        {currentTab === 'library' && (
          <LessonLibrary
            currentLanguage={currentLanguage}
            onSelectLesson={handleSelectLesson}
            initialSubject={initialLibrarySubject}
          />
        )}

        {currentTab === 'player' && selectedLessonId && (
          <LessonPlayer
            lessonId={selectedLessonId}
            currentLanguage={currentLanguage}
            onBack={() => handleNavigate('student')}
            onNextLesson={(nextId) => handleSelectLesson(nextId)}
            onAwardStars={handleAwardStars}
          />
        )}

        {currentTab === 'games' && (
          <GamesHub
            currentLanguage={currentLanguage}
            onAwardStars={handleAwardStars}
          />
        )}

        {currentTab === 'teacher' && (
          <TeacherDashboard
            currentLanguage={currentLanguage}
            onSelectLesson={handleSelectLesson}
          />
        )}

        {currentTab === 'admin' && (
          <AdminPortal
            currentLanguage={currentLanguage}
            onSelectLesson={handleSelectLesson}
          />
        )}
      </main>

      {/* Floating Offline & Sync Indicator */}
      <OfflineIndicator />

      {/* Global Footer */}
      <Footer
        currentLanguage={currentLanguage}
        onNavigate={handleNavigate}
      />
    </div>
  );
}
