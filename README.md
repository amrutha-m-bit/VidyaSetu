# VidyaSetu — Bridging Villages Through Learning
## Multilingual Digital Learning Platform for Rural Government Schools (Classes 1–8)

> **Frontend-Only, Zero-Database Architecture with Hardcoded Source Data & Browser LocalStorage**

VidyaSetu is an accessible, offline-first educational web application built specifically for students in **Classes 1 through 8** attending rural and small-village government schools across India.

---

## 🌟 Key Architecture Highlights

1. **100% Hardcoded Source Code Data**
   - **Zero Databases**: No Firebase, Supabase, PostgreSQL, MongoDB, or MySQL required.
   - **Zero Backend / External APIs**: No server backend, API keys, or secrets required.
   - All curriculum subjects, lessons, sections, worked examples, activities, quizzes, multiple-choice questions, answer keys, explanations, and sample student/teacher records are written directly in modular JavaScript/TypeScript files in `src/data/sampleLessons.ts`.

2. **Full Classes 1–8 Coverage**
   Every single class from Class 1 to Class 8 features interactive lessons with quizzes:
   - **Class 1 (Math)**: Counting Safari (Numbers 1 to 10 with farm animals & fruits)
   - **Class 2 (Math)**: Shapes & Rangoli Patterns (Circles, triangles, squares, and village patterns)
   - **Class 3 (Math)**: Sharing Rotis & Discovering Fractions (Halves, quarters, and whole chapati)
   - **Class 4 (EVS)**: Our Green Friends: The Parts of a Plant (Roots, stems, leaves, flowers)
   - **Class 5 (Science)**: The Journey of Rain: The Water Cycle (Evaporation, condensation, precipitation)
   - **Class 6 (Social Studies)**: Our Gram Panchayat (Village democracy, Gram Sabha, and community governance)
   - **Class 7 (Science)**: Light, Shadows & Solar Eclipses (Rectilinear light propagation and cosmic dances)
   - **Class 8 (Science)**: Microorganisms: Tiny Friends & Foes in Agriculture (Curd bacteria, yeast, and nitrogen fixation)

3. **8 Indian Regional Languages with Hardcoded Translations**
   - **Kannada (ಕನ್ನಡ)**, **Hindi (हिन्दी)**, **Telugu (తెలుగు)**, **Tamil (தமிழ்)**, **Malayalam (മലയാളം)**, **Marathi (मराठी)**, **Bengali (বাংলা)**, and **English**.
   - Complete dictionary translations in `src/i18n/index.ts`.
   - Built-in Text-to-Speech audio reader using regional BCP-47 language codes for students who are still learning to read.

4. **Browser LocalStorage Persistence**
   All user progress is saved directly in the browser’s `localStorage`:
   - `vidyasetu_lesson_progress`: Completed and in-progress lessons, section milestones, and percentage scores.
   - `vidyasetu_quiz_attempts`: Detailed quiz logs, correct answers, and weak topics to revise.
   - `vidyasetu_stars`: Cumulative star rewards.
   - `vidyasetu_downloaded_lessons`: 1-click offline lesson packs.
   - `vidyasetu_bookmarks`: Bookmarked topics for easy revision.
   - `vidyasetu_students`: Teacher classroom roster with supervised student enrollments.
   - `vidyasetu_assignments`: Classroom assignments with deadlines.
   - `vidyasetu_reviews`: Content review audit trail.

5. **Play-Based Educational Games Hub**
   - **Number Safari**: Foundational counting and animal gathering.
   - **Village Shapes**: Geometry matching village objects (temple towers, cart wheels, blackboards).
   - **Multilingual Word Matcher**: Cross-language vocabulary building across regional scripts.
   - **Eco-Warrior**: Compost, recycling, and safe disposal sorting for village soil health.

6. **Teacher & Classroom Portal**
   - Enrolled student roster with average quiz scores and lessons completed.
   - Automated curriculum diagnostic alerts (identifying concepts where students need revision).
   - Assignment creator with completion deadlines.
   - One-click CSV export of classroom progress reports.
   - **Classroom Projector Mode**: Large touch controls for single-computer village classrooms.

7. **Supervised Content Management & Admin Portal**
   - Controlled content lifecycle: **Draft → Submitted for Review → Approved → Published**.
   - Lesson authoring editor for class, subject, language, sections, and questions.
   - Committee review queue with approval/rejection feedback and audit logs.
   - Registered primary school records with UDISE code tracking.

8. **PWA & Offline Support**
   - Progressive Web App manifest (`public/manifest.json`) and service worker (`public/service-worker.js`) caching the application shell.
   - In-app install button (`PWAInstallButton`) with step-by-step iOS Safari guidance.

---

## 📁 Source File Organization

```
vidyasetu/
├── public/
│   ├── icons/
│   │   └── logo.svg                 # Open book bridge & rising sun brand logo
│   ├── manifest.json                # PWA manifest
│   └── service-worker.js            # App-shell offline caching
├── src/
│   ├── data/
│   │   └── sampleLessons.ts         # Hardcoded Classes 1–8 curriculum, quizzes & questions
│   ├── i18n/
│   │   └── index.ts                 # Hardcoded translations for 8 Indian regional languages
│   ├── offline/
│   │   ├── storage.ts               # LocalStorage persistence engine
│   │   ├── database.ts              # LocalStorage wrapper
│   │   └── sync-manager.ts          # Offline status listener
│   ├── components/
│   │   ├── Navbar.tsx               # Header with language picker, class badge & PWA install
│   │   ├── Footer.tsx               # Footer with child privacy policy modal
│   │   ├── AudioNarrator.tsx        # Multilingual SpeechSynthesis reader
│   │   ├── EducationalIllustration.tsx # SVG diagrams for fractions, plants, water cycle
│   │   ├── OfflineIndicator.tsx     # Floating offline storage status indicator
│   │   ├── PWAInstallButton.tsx     # In-app install prompt with iOS instructions
│   │   └── PrivacyPolicyModal.tsx   # Child privacy notice
│   ├── pages/
│   │   ├── HomePage.tsx             # Public landing page with curriculum highlights
│   │   ├── StudentDashboard.tsx     # Class 1–8 dashboard with progress, stars & badges
│   │   ├── LessonLibrary.tsx        # Search, filters by class/subject, bookmarks & downloads
│   │   ├── LessonPlayer.tsx         # Interactive player, activities, quiz & confetti feedback
│   │   ├── GamesHub.tsx             # 4 play-based educational games
│   │   ├── TeacherDashboard.tsx     # Roster, CSV export, assignments & projector mode
│   │   └── AdminPortal.tsx          # Supervised content lifecycle & audit logs
│   ├── tests/
│   │   └── vidyasetu.test.ts        # Automated unit tests running on app startup
│   ├── App.tsx                      # Main app component & state management
│   ├── main.tsx                     # Entry point & test runner execution
│   └── index.css                    # Tailwind CSS custom design tokens
├── package.json
└── README.md
```

---

## 🚀 Running the Project Locally

No database setup, no Supabase configuration, and no API keys are required.

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your web browser.

3. **Verify type check & tests:**
   ```bash
   npm run lint
   ```
   Automated unit tests run automatically in the browser console on startup.

4. **Production Build:**
   ```bash
   npm run build
   ```
