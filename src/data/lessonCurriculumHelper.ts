import { LanguageCode, Lesson, LessonSection, LessonTranslation, Question, InteractiveActivity } from '../types';

export interface CourseDef {
  id: string;
  classNumber: number;
  subjectCode: string;
  slug: string;
  difficultyLevel: 'beginner' | 'intermediate' | 'advanced';
  authorName?: string;
  estimatedMinutes?: number;
  en: {
    title: string;
    summary: string;
    storyTitle: string;
    storyContent: string;
    storyNarration: string;
    conceptTitle: string;
    conceptContent: string;
    conceptNarration: string;
    illustratedSvg?: string;
    activityTitle: string;
    activityInstructions: string;
    activityType?: 'matching' | 'counting' | 'sorting' | 'true_false' | 'puzzle';
    activityData: any;
    quizTitle: string;
    questions: {
      text: string;
      options: { text: string; isCorrect: boolean }[];
      hint?: string;
      explanation: string;
    }[];
  };
  hi?: {
    title: string;
    summary: string;
    storyTitle?: string;
    storyContent?: string;
    conceptTitle?: string;
    conceptContent?: string;
  };
  kn?: {
    title: string;
    summary: string;
    storyTitle?: string;
    storyContent?: string;
    conceptTitle?: string;
    conceptContent?: string;
  };
  te?: {
    title: string;
    summary: string;
  };
  ta?: {
    title: string;
    summary: string;
  };
  ml?: {
    title: string;
    summary: string;
  };
  mr?: {
    title: string;
    summary: string;
  };
  bn?: {
    title: string;
    summary: string;
  };
}

export function buildCourse(def: CourseDef): Lesson {
  const estMins = def.estimatedMinutes || 12;

  const enSections: LessonSection[] = [
    {
      id: `${def.id}-sec-1`,
      orderIndex: 0,
      sectionType: 'story',
      title: def.en.storyTitle,
      content: def.en.storyContent,
      audioNarrationText: def.en.storyNarration,
    },
    {
      id: `${def.id}-sec-2`,
      orderIndex: 1,
      sectionType: 'illustrated_card',
      title: def.en.conceptTitle,
      content: def.en.conceptContent,
      audioNarrationText: def.en.conceptNarration,
      illustratedSvg: def.en.illustratedSvg,
    },
    {
      id: `${def.id}-sec-3`,
      orderIndex: 2,
      sectionType: 'activity',
      title: def.en.activityTitle,
      content: def.en.activityInstructions,
      activity: {
        id: `${def.id}-act`,
        type: def.en.activityType || 'matching',
        title: def.en.activityTitle,
        instructions: def.en.activityInstructions,
        data: def.en.activityData,
      },
    },
    {
      id: `${def.id}-sec-4`,
      orderIndex: 3,
      sectionType: 'quiz',
      title: def.en.quizTitle,
      content: 'Answer the questions correctly to earn your Village Learning Star badge!',
      questions: def.en.questions.map((q, idx) => ({
        id: `${def.id}-q${idx + 1}`,
        text: q.text,
        type: 'mcq' as const,
        options: q.options.map((opt, oIdx) => ({
          id: `${def.id}-q${idx + 1}-opt${oIdx + 1}`,
          text: opt.text,
          isCorrect: opt.isCorrect,
        })),
        hint: q.hint,
        explanation: q.explanation,
      })),
    },
  ];

  const buildTranslation = (
    lang: LanguageCode,
    title: string,
    summary: string,
    storyTitle?: string,
    storyContent?: string,
    conceptTitle?: string,
    conceptContent?: string
  ): LessonTranslation => {
    if (lang === 'en') {
      return {
        languageCode: 'en',
        title: def.en.title,
        summary: def.en.summary,
        estimatedMinutes: estMins,
        sections: enSections,
      };
    }

    const sections: LessonSection[] = [
      {
        id: `${def.id}-sec-1-${lang}`,
        orderIndex: 0,
        sectionType: 'story',
        title: storyTitle || def.en.storyTitle,
        content: storyContent || def.en.storyContent,
        audioNarrationText: storyContent || def.en.storyNarration,
      },
      {
        id: `${def.id}-sec-2-${lang}`,
        orderIndex: 1,
        sectionType: 'illustrated_card',
        title: conceptTitle || def.en.conceptTitle,
        content: conceptContent || def.en.conceptContent,
        audioNarrationText: conceptContent || def.en.conceptNarration,
        illustratedSvg: def.en.illustratedSvg,
      },
      {
        id: `${def.id}-sec-3-${lang}`,
        orderIndex: 2,
        sectionType: 'activity',
        title: def.en.activityTitle,
        content: def.en.activityInstructions,
        activity: {
          id: `${def.id}-act-${lang}`,
          type: def.en.activityType || 'matching',
          title: def.en.activityTitle,
          instructions: def.en.activityInstructions,
          data: def.en.activityData,
        },
      },
      {
        id: `${def.id}-sec-4-${lang}`,
        orderIndex: 3,
        sectionType: 'quiz',
        title: def.en.quizTitle,
        content: 'Test your understanding and earn stars!',
        questions: enSections[3].questions,
      },
    ];

    return {
      languageCode: lang,
      title: title || def.en.title,
      summary: summary || def.en.summary,
      estimatedMinutes: estMins,
      sections,
    };
  };

  const translations: Record<LanguageCode, LessonTranslation> = {
    en: buildTranslation('en', def.en.title, def.en.summary),
    hi: buildTranslation(
      'hi',
      def.hi?.title || def.en.title,
      def.hi?.summary || def.en.summary,
      def.hi?.storyTitle,
      def.hi?.storyContent,
      def.hi?.conceptTitle,
      def.hi?.conceptContent
    ),
    kn: buildTranslation(
      'kn',
      def.kn?.title || def.en.title,
      def.kn?.summary || def.en.summary,
      def.kn?.storyTitle,
      def.kn?.storyContent,
      def.kn?.conceptTitle,
      def.kn?.conceptContent
    ),
    te: buildTranslation('te', def.te?.title || def.en.title, def.te?.summary || def.en.summary),
    ta: buildTranslation('ta', def.ta?.title || def.en.title, def.ta?.summary || def.en.summary),
    ml: buildTranslation('ml', def.ml?.title || def.en.title, def.ml?.summary || def.en.summary),
    mr: buildTranslation('mr', def.mr?.title || def.en.title, def.mr?.summary || def.en.summary),
    bn: buildTranslation('bn', def.bn?.title || def.en.title, def.bn?.summary || def.en.summary),
  };

  return {
    id: def.id,
    classNumber: def.classNumber,
    subjectCode: def.subjectCode,
    slug: def.slug,
    difficultyLevel: def.difficultyLevel,
    status: 'published',
    authorName: def.authorName || 'SCERT Rural Curriculum Cell',
    reviewerName: 'State SCERT Board',
    version: 1,
    updatedAt: '2026-10-20T10:00:00Z',
    translations,
  };
}
