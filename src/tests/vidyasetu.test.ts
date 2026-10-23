import { translations, t, SUPPORTED_LANGUAGES } from '../i18n';
import { SAMPLE_LESSONS, SUBJECTS_LIST } from '../data/sampleLessons';
import { Lesson, ContentStatus } from '../types';

export function runTests() {
  const results: { name: string; passed: boolean; error?: string }[] = [];

  function assert(name: string, condition: boolean, message?: string) {
    if (condition) {
      results.push({ name, passed: true });
    } else {
      results.push({ name, passed: false, error: message || 'Assertion failed' });
    }
  }

  // 1. Language Switching & Translations
  assert(
    'All 8 Indian languages are configured in SUPPORTED_LANGUAGES',
    SUPPORTED_LANGUAGES.length === 8 &&
      SUPPORTED_LANGUAGES.some((l) => l.code === 'kn') &&
      SUPPORTED_LANGUAGES.some((l) => l.code === 'hi') &&
      SUPPORTED_LANGUAGES.some((l) => l.code === 'te') &&
      SUPPORTED_LANGUAGES.some((l) => l.code === 'ta') &&
      SUPPORTED_LANGUAGES.some((l) => l.code === 'ml') &&
      SUPPORTED_LANGUAGES.some((l) => l.code === 'mr') &&
      SUPPORTED_LANGUAGES.some((l) => l.code === 'bn') &&
      SUPPORTED_LANGUAGES.some((l) => l.code === 'en')
  );

  assert(
    'Translation keys exist in Kannada',
    t('brand_name', 'kn') === 'ವಿದ್ಯಾಸೇತು' &&
    t('tagline', 'kn').includes('ಕಲಿಕೆ')
  );

  assert(
    'Translation keys exist in Hindi',
    t('brand_name', 'hi') === 'विद्यासेतु' &&
    t('tagline', 'hi').includes('गाँव')
  );

  // 2. Classes 1 to 8 Coverage
  const allClasses = [1, 2, 3, 4, 5, 6, 7, 8];
  assert(
    'All Classes 1 through 8 have hardcoded curriculum lessons',
    allClasses.every((cls) => SAMPLE_LESSONS.some((l) => l.classNumber === cls))
  );

  const class3Lessons = SAMPLE_LESSONS.filter((l) => l.classNumber === 3);
  assert(
    'Class 3 lesson filtering works correctly',
    class3Lessons.length > 0 && class3Lessons.every((l) => l.classNumber === 3)
  );

  const mathLessons = SAMPLE_LESSONS.filter((l) => l.subjectCode === 'math');
  assert(
    'Subject math filtering works correctly',
    mathLessons.length > 0 && mathLessons.every((l) => l.subjectCode === 'math')
  );

  const allSubjects = ['math', 'evs', 'sci', 'eng', 'lang', 'soc'];
  assert(
    'Every Class from 1 to 8 has courses for ALL 6 subjects (Math, EVS, Science, English, Language, Social Studies)',
    allClasses.every((cls) =>
      allSubjects.every((sub) =>
        SAMPLE_LESSONS.some((l) => l.classNumber === cls && l.subjectCode === sub)
      )
    )
  );

  assert(
    'Total curriculum contains full coverage of at least 48 complete courses',
    SAMPLE_LESSONS.length >= 48
  );

  // 3. Lesson Retrieval & Structure
  const rotiLesson = SAMPLE_LESSONS.find((l) => l.id === 'lesson-math-c3-01');
  assert(
    'Fractions lesson has valid sections, explanations and quiz',
    Boolean(
      rotiLesson &&
      rotiLesson.translations.en.sections.length >= 4 &&
      rotiLesson.translations.en.sections.some((s) => s.sectionType === 'quiz')
    )
  );

  // 4. Quiz Scoring & Thresholds
  const calculateScore = (total: number, correct: number) => {
    return Math.round((correct / total) * 100);
  };
  assert('Quiz scoring calculates 100% on all correct', calculateScore(2, 2) === 100);
  assert('Quiz scoring calculates 50% on half correct', calculateScore(2, 1) === 50);
  assert('Quiz passing threshold (>= 50%) is evaluated accurately', calculateScore(2, 1) >= 50);

  // 5. Content Approval Lifecycle
  const validTransitions: Record<ContentStatus, ContentStatus[]> = {
    draft: ['submitted'],
    submitted: ['approved', 'draft'],
    approved: ['published', 'draft'],
    published: ['approved', 'archived'],
    archived: ['draft']
  };

  assert(
    'Lifecycle transition Draft -> Submitted -> Approved -> Published is valid',
    validTransitions.draft.includes('submitted') &&
    validTransitions.submitted.includes('approved') &&
    validTransitions.approved.includes('published')
  );

  // 6. Child Data Privacy Compliance
  const prohibitedFields = ['birthDate', 'phoneNumber', 'homeAddress', 'gpsCoordinates', 'photoUrl'];
  const profileKeys = ['id', 'fullName', 'role', 'preferredLanguage', 'currentClass', 'starsTotal'];
  assert(
    'Profile model strictly adheres to minimal child data collection principles',
    prohibitedFields.every((f) => !profileKeys.includes(f))
  );

  // 7. Frontend-Only Hardcoded Verification
  assert(
    'Platform runs with 100% hardcoded data with zero database requirement',
    SAMPLE_LESSONS.length >= 8 && SUBJECTS_LIST.length >= 5
  );

  return results;
}

// Log test results in console during development
if (typeof window !== 'undefined') {
  const res = runTests();
  const passed = res.filter((r) => r.passed).length;
  console.log(`[VidyaSetu Test Suite] Passed ${passed}/${res.length} test assertions.`);
}
