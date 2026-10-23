import { Lesson, Subject } from '../types';
import { PRIMARY_COURSES } from './primaryCourses';
import { MIDDLE_COURSES } from './middleCourses';

export const SUBJECTS_LIST: Subject[] = [
  { id: 'math', code: 'math', name: 'Mathematics', iconName: 'Calculator', colorCode: '#176B55' },
  { id: 'evs', code: 'evs', name: 'Environmental Studies', iconName: 'Trees', colorCode: '#2E7D32' },
  { id: 'sci', code: 'sci', name: 'Science', iconName: 'Atom', colorCode: '#0288D1' },
  { id: 'eng', code: 'eng', name: 'English Learning', iconName: 'BookOpen', colorCode: '#E65100' },
  { id: 'lang', code: 'lang', name: 'Regional Language', iconName: 'Languages', colorCode: '#7B1FA2' },
  { id: 'soc', code: 'soc', name: 'Social Studies', iconName: 'Globe2', colorCode: '#C2185B' },
];

const ORIGINAL_SAMPLE_LESSONS: Lesson[] = [
  // LESSON 1: Class 3 - Mathematics - Fractions in the Village
  {
    id: 'lesson-math-c3-01',
    classNumber: 3,
    subjectCode: 'math',
    slug: 'fractions-sharing-roti',
    difficultyLevel: 'beginner',
    status: 'published',
    authorName: 'Savitri Bai',
    reviewerName: 'District Curriculum Board',
    version: 1,
    updatedAt: '2026-10-15T10:00:00Z',
    translations: {
      en: {
        languageCode: 'en',
        title: 'Sharing Rotis: Discovering Fractions',
        summary: 'Learn what halves (1/2) and quarters (1/4) mean by sharing delicious warm rotis and chapatis with friends in the village.',
        estimatedMinutes: 12,
        sections: [
          {
            id: 'sec-1',
            orderIndex: 0,
            sectionType: 'story',
            title: '1. Two Hungry Friends',
            content: 'Ravi and Ananya returned from school feeling very hungry. Their grandmother gave them one fresh, round chapati. How can they share it fairly so both get the exact same amount?',
            audioNarrationText: 'Ravi and Ananya returned from school feeling very hungry. Their grandmother gave them one fresh round chapati. How can they share it fairly?'
          },
          {
            id: 'sec-2',
            orderIndex: 1,
            sectionType: 'illustrated_card',
            title: '2. What is One Half (1/2)?',
            content: 'When we divide one whole object into 2 equal parts, each part is called one half, written as 1/2. The top number (1) shows parts we have. The bottom number (2) shows total equal parts.',
            audioNarrationText: 'When we cut a whole into two equal parts, each part is called one half. In fractions, we write it as 1 over 2.',
            illustratedSvg: 'fraction-half'
          },
          {
            id: 'sec-3',
            orderIndex: 2,
            sectionType: 'worked_example',
            title: '3. What if 4 friends arrive? (1/4)',
            content: 'Now two more friends join Ravi and Ananya! If we fold the chapati once more down the middle, we get 4 equal pieces. Each piece is called one quarter or one fourth, written as 1/4.',
            audioNarrationText: 'When four friends share equally, the chapati is divided into four equal pieces. Each slice is one-fourth.',
            illustratedSvg: 'fraction-quarter'
          },
          {
            id: 'sec-4',
            orderIndex: 3,
            sectionType: 'activity',
            title: '4. Interactive Fraction Matcher',
            content: 'Click on the correct fraction that describes the shaded portion of the circle!',
            activity: {
              id: 'act-1',
              type: 'matching',
              title: 'Fraction Matching Challenge',
              instructions: 'Match the picture with the correct fraction fraction name!',
              data: [
                { id: 'p1', question: 'Half of a circle', answer: '1/2' },
                { id: 'p2', question: 'One quarter of a cake', answer: '1/4' },
                { id: 'p3', question: 'Three quarters of a farm field', answer: '3/4' },
                { id: 'p4', question: 'The entire complete chapati', answer: '1 (Whole)' }
              ]
            }
          },
          {
            id: 'sec-5',
            orderIndex: 4,
            sectionType: 'quiz',
            title: '5. Quick Mastery Quiz',
            content: 'Test your understanding to earn your Village Math Star!',
            questions: [
              {
                id: 'q1',
                text: 'If you divide an apple into 2 equal pieces and eat 1 piece, what fraction did you eat?',
                type: 'mcq',
                options: [
                  { id: 'o1', text: '1/4 (One fourth)', isCorrect: false },
                  { id: 'o2', text: '1/2 (One half)', isCorrect: true },
                  { id: 'o3', text: '2/1 (Two wholes)', isCorrect: false }
                ],
                hint: 'You divided it into 2 equal parts and took 1.',
                explanation: '1 part out of 2 equal parts is written as 1/2.'
              },
              {
                id: 'q2',
                text: 'How many quarters (1/4) make one whole roti?',
                type: 'mcq',
                options: [
                  { id: 'o4', text: '2 quarters', isCorrect: false },
                  { id: 'o5', text: '4 quarters', isCorrect: true },
                  { id: 'o6', text: '3 quarters', isCorrect: false }
                ],
                hint: 'Remember: 1/4 + 1/4 + 1/4 + 1/4 = 4/4 = 1.',
                explanation: 'Four 1/4 pieces join together to recreate the whole circle.'
              }
            ]
          }
        ]
      },
      hi: {
        languageCode: 'hi',
        title: 'रोटी का बंटवारा: भिन्न की पहचान',
        summary: 'स्वादिष्ट गर्म रोटी को बराबर बांटकर आधा (1/2) और चौथाई (1/4) भिन्न को आसानी से समझें।',
        estimatedMinutes: 12,
        sections: [
          {
            id: 'sec-1',
            orderIndex: 0,
            sectionType: 'story',
            title: '१. दो भूखे दोस्त',
            content: 'रवि और अनन्या स्कूल से लौटे तो उन्हें बहुत भूख लगी थी। दादी ने उन्हें एक गरमा-गरम गोल रोटी दी। दोनों बराबर कैसे बांटें ताकि दोनों को समान हिस्सा मिले?',
            audioNarrationText: 'रवि और अनन्या स्कूल से लौटे। दादी ने उन्हें एक गोल रोटी दी। दोनों बराबर कैसे बांटें?'
          },
          {
            id: 'sec-2',
            orderIndex: 1,
            sectionType: 'illustrated_card',
            title: '२. आधा (१/२) क्या होता है?',
            content: 'जब हम किसी पूरी वस्तु को २ बराबर भागों में बांटते हैं, तो प्रत्येक भाग को आधा (१/२) कहते हैं। ऊपर की संख्या बताती है कि हमारे पास कितने हिस्से हैं, नीचे की संख्या कुल बराबर भागों को दर्शाती है।',
            audioNarrationText: 'जब किसी वस्तु को दो बराबर भागों में बांटा जाता है, तो हर भाग आधा यानी एक बटा दो कहलाता है।',
            illustratedSvg: 'fraction-half'
          },
          {
            id: 'sec-3',
            orderIndex: 2,
            sectionType: 'worked_example',
            title: '३. जब चार दोस्त हों (१/४)',
            content: 'अब दो और दोस्त आ गए! अगर हम रोटी को बीच से एक बार और मोड़ें, तो चार बराबर टुकड़े बनेंगे। हर टुकड़े को एक-चौथाई (१/४) कहा जाता है।',
            audioNarrationText: 'चार बराबर हिस्सों में से प्रत्येक हिस्से को एक चौथाई कहते हैं।',
            illustratedSvg: 'fraction-quarter'
          },
          {
            id: 'sec-4',
            orderIndex: 3,
            sectionType: 'activity',
            title: '४. भिन्न मिलान गतिविधि',
            content: 'सही भिन्न को उसके नाम से मिलाएं!',
            activity: {
              id: 'act-1-hi',
              type: 'matching',
              title: 'भिन्न मिलान खेल',
              instructions: 'सही जोड़े को क्लिक करें!',
              data: [
                { id: 'p1', question: 'रोटी का आधा भाग', answer: '१/२' },
                { id: 'p2', question: 'रोटी का चौथाई भाग', answer: '१/४' },
                { id: 'p3', question: 'तीन चौथाई हिस्सा', answer: '३/४' },
                { id: 'p4', question: 'पूरी गोल रोटी', answer: '१ (पूर्ण)' }
              ]
            }
          },
          {
            id: 'sec-5',
            orderIndex: 4,
            sectionType: 'quiz',
            title: '५. समझ परख क्विज़',
            content: 'गणित सितारा जीतने के लिए सही उत्तर चुनें!',
            questions: [
              {
                id: 'q1-hi',
                text: 'यदि आप एक अमरूद को २ बराबर टुकड़ों में काटकर १ टुकड़ा खाते हैं, तो आपने कितना खाया?',
                type: 'mcq',
                options: [
                  { id: 'o1', text: '१/४ (चौथाई)', isCorrect: false },
                  { id: 'o2', text: '१/२ (आधा)', isCorrect: true },
                  { id: 'o3', text: '२ पूरे', isCorrect: false }
                ],
                hint: 'कुल २ टुकड़े थे, आपने १ लिया।',
                explanation: '२ में से १ भाग को १/२ लिखते हैं।'
              },
              {
                id: 'q2-hi',
                text: 'एक पूरी रोटी बनाने के लिए कितने चौथाई (१/४) टुकड़ों की जरूरत होगी?',
                type: 'mcq',
                options: [
                  { id: 'o4', text: '२ टुकड़े', isCorrect: false },
                  { id: 'o5', text: '४ टुकड़े', isCorrect: true },
                  { id: 'o6', text: '३ टुकड़े', isCorrect: false }
                ],
                hint: 'चार चौथाई मिलकर एक पूरा बनता है।',
                explanation: 'चार १/४ टुकड़े मिलकर पूरी रोटी बनाते हैं।'
              }
            ]
          }
        ]
      },
      kn: {
        languageCode: 'kn',
        title: 'ರೊಟ್ಟಿ ಹಂಚಿಕೆ: ಭಿನ್ನರಾಶಿಗಳ ಅರಿವು',
        summary: 'ರುಚಿಕರವಾದ ರೊಟ್ಟಿಯನ್ನು ಸ್ನೇಹಿತರೊಂದಿಗೆ ಸಮನಾಗಿ ಹಂಚಿಕೊಳ್ಳುವ ಮೂಲಕ ಅರ್ಧ (1/2) ಮತ್ತು ಕಾಲು (1/4) ಭಿನ್ನರಾಶಿಗಳನ್ನು ಕಲಿಯಿರಿ.',
        estimatedMinutes: 12,
        sections: [
          {
            id: 'sec-1',
            orderIndex: 0,
            sectionType: 'story',
            title: '೧. ಇಬ್ಬರು ಸ್ನೇಹಿತರ ಹಸಿವು',
            content: 'ರವಿ ಮತ್ತು ಅನನ್ಯಾ ಶಾಲೆಯಿಂದ ಹಿಂತಿರುಗಿದಾಗ ಅಜ್ಜಿಯು ಅವರಿಗೆ ಒಂದು ದುಂಡನೆಯ ರೊಟ್ಟಿಯನ್ನು ನೀಡಿದರು. ಇಬ್ಬರೂ ಸಮನಾಗಿ ಹಂಚಿಕೊಳ್ಳುವುದು ಹೇಗೆ?',
            audioNarrationText: 'ರವಿ ಮತ್ತು ಅನನ್ಯಾಗೆ ಅಜ್ಜಿ ರೊಟ್ಟಿ ನೀಡಿದರು. ಇಬ್ಬರಿಗೂ ಸಮನಾದ ಭಾಗ ಸಿಗಲು ಹೇಗೆ ಹಂಚಬೇಕು?'
          },
          {
            id: 'sec-2',
            orderIndex: 1,
            sectionType: 'illustrated_card',
            title: '೨. ಅರ್ಧ (೧/೨) ಎಂದರೇನು?',
            content: 'ಒಂದು ಪೂರ್ಣ ವಸ್ತುವನ್ನು ೨ ಸಮಾನ ಭಾಗಗಳಾಗಿ ಮಾಡಿದಾಗ, ಪ್ರತಿಯೊಂದು ಭಾಗವನ್ನು ಅರ್ಧ (೧/೨) ಎನ್ನುತ್ತೇವೆ.',
            audioNarrationText: 'ಒಂದು ವಸ್ತುವನ್ನು ಎರಡು ಸಮಭಾಗ ಮಾಡಿದಾಗ ಪ್ರತಿ ಭಾಗವನ್ನು ಅರ್ಧ ಎನ್ನುತ್ತೇವೆ.',
            illustratedSvg: 'fraction-half'
          },
          {
            id: 'sec-3',
            orderIndex: 2,
            sectionType: 'worked_example',
            title: '೩. ನಾಲ್ಕು ಜನ ಸ್ನೇಹಿತರಾದರೆ? (೧/೪)',
            content: 'ಮತ್ತಿಬ್ಬರು ಸ್ನೇಹಿತರು ಸೇರಿದಾಗ ರೊಟ್ಟಿಯನ್ನು ನಾಲ್ಕು ಸಮಭಾಗಗಳನ್ನಾಗಿ ಮಾಡುತ್ತೇವೆ. ಪ್ರತಿ ಭಾಗವನ್ನು ಕಾಲು (೧/೪) ಎನ್ನಲಾಗುತ್ತದೆ.',
            audioNarrationText: 'ನಾಲ್ಕು ಸಮಭಾಗಗಳಲ್ಲಿ ಪ್ರತಿಯೊಂದನ್ನು ಕಾಲು ಭಾಗ ಅಥವಾ ೧/೪ ಎನ್ನಲಾಗುತ್ತದೆ.',
            illustratedSvg: 'fraction-quarter'
          },
          {
            id: 'sec-4',
            orderIndex: 3,
            sectionType: 'activity',
            title: '೪. ಭಿನ್ನರಾಶಿ ಹೊಂದಾಣಿಕೆ',
            content: 'ಸರಿಯಾದ ಭಿನ್ನರಾಶಿಯನ್ನು ಜೋಡಿಸಿ!',
            activity: {
              id: 'act-1-kn',
              type: 'matching',
              title: 'ಹೊಂದಿಸಿ ಬರೆಯಿರಿ',
              instructions: 'ಸರಿಯಾದ ಉತ್ತರವನ್ನು ಆರಿಸಿ!',
              data: [
                { id: 'p1', question: 'ವೃತ್ತದ ಅರ್ಧ ಭಾಗ', answer: '೧/೨' },
                { id: 'p2', question: 'ವೃತ್ತದ ಕಾಲು ಭಾಗ', answer: '೧/೪' },
                { id: 'p3', question: 'ಮುಕ್ಕಾಲು ಭಾಗ', answer: '೩/೪' },
                { id: 'p4', question: 'ಸಂಪೂರ್ಣ ರೊಟ್ಟಿ', answer: '೧ (ಪೂರ್ಣ)' }
              ]
            }
          },
          {
            id: 'sec-5',
            orderIndex: 4,
            sectionType: 'quiz',
            title: '೫. ರಸಪ್ರಶ್ನೆ',
            content: 'ನಿಮ್ಮ ಜ್ಞಾನವನ್ನು ಪರೀಕ್ಷಿಸಿ ನಕ್ಷತ್ರ ಪಡೆಯಿರಿ!',
            questions: [
              {
                id: 'q1-kn',
                text: 'ಸೇಬನ್ನು ೨ ಸಮಭಾಗ ಮಾಡಿ ೧ ಭಾಗವನ್ನು ತಿಂದರೆ ಎಷ್ಟು ಭಾಗ ತಿಂದಂತೆ?',
                type: 'mcq',
                options: [
                  { id: 'o1', text: '೧/೪ (ಕಾಲು ಭಾಗ)', isCorrect: false },
                  { id: 'o2', text: '೧/೨ (ಅರ್ಧ ಭಾಗ)', isCorrect: true },
                  { id: 'o3', text: '೨ ಭಾಗ', isCorrect: false }
                ],
                hint: '೨ ಸಮಭಾಗಗಳಲ್ಲಿ ೧ ಭಾಗ.',
                explanation: 'ಎರಡರಲ್ಲಿ ಒಂದು ಭಾಗವನ್ನು ೧/೨ ಎನ್ನುತ್ತೇವೆ.'
              }
            ]
          }
        ]
      },
      te: {
        languageCode: 'te',
        title: 'రొట్టె పంపకం: భిన్నాల పరిచయం',
        summary: 'రుచికరమైన రొట్టెను సమంగా పంచుకోవడం ద్వారా సగం (1/2), పావు (1/4) భిన్నాలను తెలుసుకోండి.',
        estimatedMinutes: 12,
        sections: [
          {
            id: 'sec-1',
            orderIndex: 0,
            sectionType: 'story',
            title: '1. ఇద్దరు స్నేహితులు',
            content: 'రవి, అనన్య ఆకలితో ఇంటికి రాగానే అమ్మమ్మ ఒక గుండ్రటి రొట్టె ఇచ్చింది. ఇద్దరికీ సమానంగా పంచడం ఎలా?',
            audioNarrationText: 'రవి మరియు అనన్య ఇద్దరూ రొట్టెను సమానంగా ఎలా పంచుకోవాలి?'
          },
          {
            id: 'sec-2',
            orderIndex: 1,
            sectionType: 'illustrated_card',
            title: '2. సగం (1/2) అంటే ఏమిటి?',
            content: 'ఒక వస్తువును 2 సమాన భాగాలుగా విభజిస్తే, ప్రతి భాగాన్ని సగం లేదా 1/2 అంటారు.',
            audioNarrationText: 'ఒక వస్తువును రెండు సమాన భాగాలుగా చేస్తే ప్రతి భాగం సగం అవుతుంది.',
            illustratedSvg: 'fraction-half'
          },
          {
            id: 'sec-3',
            orderIndex: 2,
            sectionType: 'quiz',
            title: '3. క్విజ్',
            content: 'సరైన సమాధానం ఎంచుకోండి!',
            questions: [
              {
                id: 'q1-te',
                text: '2 సమాన భాగాలలో 1 భాగం అంటే ఏమిటి?',
                type: 'mcq',
                options: [
                  { id: 'o1', text: '1/4', isCorrect: false },
                  { id: 'o2', text: '1/2', isCorrect: true },
                  { id: 'o3', text: '3/4', isCorrect: false }
                ],
                explanation: '2 భాగాలలో 1 భాగాన్ని 1/2 అంటారు.'
              }
            ]
          }
        ]
      },
      ta: {
        languageCode: 'ta',
        title: 'ரொட்டிப் பகிர்வு: பின்னங்களின் அறிமுகம்',
        summary: 'நண்பர்களுடன் ரொட்டியைப் பகிர்ந்து கொள்வதன் மூலம் அரை (1/2), கால் (1/4) பின்னங்களைக் கற்றுக்கொள்ளுங்கள்.',
        estimatedMinutes: 12,
        sections: [
          {
            id: 'sec-1',
            orderIndex: 0,
            sectionType: 'story',
            title: '1. இரு நண்பர்கள்',
            content: 'ரவியும் அனன்யாவும் பள்ளி முடிந்து வந்தபோது பாட்டி ஒரு வட்ட ரொட்டியைக் கொடுத்தார். இருவரும் சமமாகப் பிரிப்பது எப்படி?',
            audioNarrationText: 'ரவியும் அனன்யாவும் ரொட்டியைச் சமமாகப் பிரிப்பது எப்படி?'
          },
          {
            id: 'sec-2',
            orderIndex: 1,
            sectionType: 'illustrated_card',
            title: '2. அரை (1/2) என்றால் என்ன?',
            content: 'ஒரு முழுப் பொருளை 2 சம பகுதிகளாகப் பிரித்தால், ஒவ்வொரு பகுதியும் அரை (1/2) எனப்படும்.',
            illustratedSvg: 'fraction-half'
          },
          {
            id: 'sec-3',
            orderIndex: 2,
            sectionType: 'quiz',
            title: '3. பயிற்சி வினா',
            content: 'சரியான விடையைத் தேர்ந்தெடுக்கவும்!',
            questions: [
              {
                id: 'q1-ta',
                text: '2 சம பாகங்களில் 1 பங்கு என்பது எது?',
                type: 'mcq',
                options: [
                  { id: 'o1', text: '1/4 (கால்)', isCorrect: false },
                  { id: 'o2', text: '1/2 (அரை)', isCorrect: true }
                ],
                explanation: '2 சம பங்குகளில் 1 பங்கு 1/2 ஆகும்.'
              }
            ]
          }
        ]
      },
      ml: {
        languageCode: 'ml',
        title: 'റൊട്ടി പങ്കിടൽ: ഭിന്നസംഖ്യകൾ',
        summary: 'സ്നേഹത്തോടെ റൊട്ടി പങ്കിട്ടുകൊണ്ട് പകുതി (1/2), കാൽ (1/4) എന്നിവ മനസ്സിലാക്കാം.',
        estimatedMinutes: 12,
        sections: [
          {
            id: 'sec-1',
            orderIndex: 0,
            sectionType: 'story',
            title: '1. രണ്ട് കൂട്ടുകാർ',
            content: 'രവിക്കും അനന്യക്കും മുത്തശ്ശി ഒരു റൊട്ടി നൽകി. രണ്ടുപേർക്കും തുല്യമായി എങ്ങനെ ഭാഗിക്കാം?',
            audioNarrationText: 'റൊട്ടി തുല്യമായി എങ്ങനെ പങ്കിടാം എന്ന് നോക്കാം.'
          },
          {
            id: 'sec-2',
            orderIndex: 1,
            sectionType: 'illustrated_card',
            title: '2. പകുതി (1/2) എന്നാൽ എന്താണ്?',
            content: 'ഒരു വസ്തുവിനെ 2 തുല്യ ഭാഗങ്ങളാക്കുമ്പോൾ ഓരോ ഭാഗത്തെയും പകുതി (1/2) എന്ന് വിളിക്കുന്നു.',
            illustratedSvg: 'fraction-half'
          },
          {
            id: 'sec-3',
            orderIndex: 2,
            sectionType: 'quiz',
            title: '3. ചോദ്യോത്തരം',
            content: 'ശരിയായ ഉത്തരം കണ്ടെത്തൂ!',
            questions: [
              {
                id: 'q1-ml',
                text: '2 തുല്യ ഭാഗങ്ങളിൽ 1 ഭാഗം എത്രയാണ്?',
                type: 'mcq',
                options: [
                  { id: 'o1', text: '1/4', isCorrect: false },
                  { id: 'o2', text: '1/2', isCorrect: true }
                ],
                explanation: '2-ൽ 1 ഭാഗം എന്നാൽ 1/2.'
              }
            ]
          }
        ]
      },
      mr: {
        languageCode: 'mr',
        title: 'भाकरीचे वाटप: अपूर्णांकांची ओळख',
        summary: 'गरमागरम भाकरी समान वाटून अर्धा (१/२) आणि पाव (१/४) अपूर्णांक समजून घ्या.',
        estimatedMinutes: 12,
        sections: [
          {
            id: 'sec-1',
            orderIndex: 0,
            sectionType: 'story',
            title: '१. दोन भुकेले मित्र',
            content: 'रवी आणि अनन्या शाळेतून आले. आजीने त्यांना एक गोल गरमागरम भाकरी दिली. दोघांनी समान कशी वाटावी?',
            audioNarrationText: 'रवी आणि अनन्याने भाकरी समान कशी वाटावी?'
          },
          {
            id: 'sec-2',
            orderIndex: 1,
            sectionType: 'illustrated_card',
            title: '२. अर्धा (१/२) म्हणजे काय?',
            content: 'जेव्हा आपण एका वस्तूचे २ समान भाग करतो, तेव्हा प्रत्येक भागाला अर्धा (१/२) म्हणतात.',
            illustratedSvg: 'fraction-half'
          },
          {
            id: 'sec-3',
            orderIndex: 2,
            sectionType: 'quiz',
            title: '३. स्वाध्याय',
            content: 'योग्य पर्याय निवडा!',
            questions: [
              {
                id: 'q1-mr',
                text: '२ समान भागांपैकी १ भाग म्हणजे काय?',
                type: 'mcq',
                options: [
                  { id: 'o1', text: '१/४', isCorrect: false },
                  { id: 'o2', text: '१/२', isCorrect: true }
                ],
                explanation: '२ समान भागांपैकी १ भाग म्हणजेच १/२.'
              }
            ]
          }
        ]
      },
      bn: {
        languageCode: 'bn',
        title: 'রুটি ভাগাভাগি: ভগ্নাংশের সহজ পাঠ',
        summary: 'গরম রুটি সমান ভাগে ভাগ করে আধা (১/২) ও এক-চতুর্থাংশ (১/৪) সহজে শিখুন।',
        estimatedMinutes: 12,
        sections: [
          {
            id: 'sec-1',
            orderIndex: 0,
            sectionType: 'story',
            title: '১. দুই ক্ষুধার্ত বন্ধু',
            content: 'রবি ও অনন্যা স্কুল থেকে ফিরে খুব ক্ষুধার্ত ছিল। দিদিমা তাদের একটি গোল রুটি দিলেন। দুজনে কীভাবে সমান ভাগে ভাগ করবে?',
            audioNarrationText: 'রবি ও অনন্যা কীভাবে রুটিটি সমান ভাগে ভাগ করবে?'
          },
          {
            id: 'sec-2',
            orderIndex: 1,
            sectionType: 'illustrated_card',
            title: '২. অর্ধেক (১/২) কী?',
            content: 'যখন একটি পুরো জিনিসকে ২ টি সমান ভাগে ভাগ করা হয়, প্রতিটি ভাগকে অর্ধেক বা ১/২ বলে।',
            illustratedSvg: 'fraction-half'
          },
          {
            id: 'sec-3',
            orderIndex: 2,
            sectionType: 'quiz',
            title: '৩. কুইজ',
            content: 'সঠিক উত্তর নির্বাচন করুন!',
            questions: [
              {
                id: 'q1-bn',
                text: '২টি সমান ভাগের মধ্যে ১টি ভাগকে কী বলা হয়?',
                type: 'mcq',
                options: [
                  { id: 'o1', text: '১/৪', isCorrect: false },
                  { id: 'o2', text: '১/२', isCorrect: true }
                ],
                explanation: '২টির মধ্যে ১টি ভাগ হলো ১/২।'
              }
            ]
          }
        ]
      }
    }
  },

  // LESSON 2: Class 4 - Environmental Studies - The Wonderful Parts of a Plant
  {
    id: 'lesson-evs-c4-02',
    classNumber: 4,
    subjectCode: 'evs',
    slug: 'parts-of-a-plant',
    difficultyLevel: 'beginner',
    status: 'published',
    authorName: 'Ramesh Gowda',
    reviewerName: 'State SCERT Review Team',
    version: 1,
    updatedAt: '2026-10-18T14:30:00Z',
    translations: {
      en: {
        languageCode: 'en',
        title: 'Our Green Friends: The Parts of a Plant',
        summary: 'Explore roots, stems, leaves, flowers, and fruits right in your school garden or village farm!',
        estimatedMinutes: 15,
        sections: [
          {
            id: 'sec-p1',
            orderIndex: 0,
            sectionType: 'story',
            title: '1. The Wonder in the Soil',
            content: 'Have you ever pulled out a small weed and wondered how it stands firm even during strong monsoon winds? The plant has a hidden superpower buried right underneath the ground!',
            audioNarrationText: 'Have you ever wondered how plants stand firm in strong winds? Plants have hidden roots buried under the ground.'
          },
          {
            id: 'sec-p2',
            orderIndex: 1,
            sectionType: 'illustrated_card',
            title: '2. Roots: The Strong Anchors',
            content: 'Roots anchor the plant firmly in the soil. They drink water and mineral nutrients from the wet earth and send them upward like natural drinking straws.',
            audioNarrationText: 'Roots anchor the plant in the soil and absorb water and minerals.',
            illustratedSvg: 'plant-diagram'
          },
          {
            id: 'sec-p3',
            orderIndex: 2,
            sectionType: 'worked_example',
            title: '3. Leaves: The Solar Kitchen',
            content: 'Leaves are known as the kitchen of the plant! Using sunlight, water, and air, green leaves make sweet food for the whole tree through a process called Photosynthesis.',
            audioNarrationText: 'Leaves use sunlight, water, and air to cook food for the plant through photosynthesis.'
          },
          {
            id: 'sec-p4',
            orderIndex: 3,
            sectionType: 'activity',
            title: '4. Plant Parts Sorter',
            content: 'Match the plant part to its essential job!',
            activity: {
              id: 'act-plant-1',
              type: 'matching',
              title: 'Plant Helper Match',
              instructions: 'Match each plant part to what it does!',
              data: [
                { id: 'pl1', question: 'Roots', answer: 'Absorbs water and minerals' },
                { id: 'pl2', question: 'Stem', answer: 'Carries water like a pipeline' },
                { id: 'pl3', question: 'Leaves', answer: 'Kitchen making food with sunlight' },
                { id: 'pl4', question: 'Flower', answer: 'Attracts butterflies and makes seeds' }
              ]
            }
          },
          {
            id: 'sec-p5',
            orderIndex: 4,
            sectionType: 'quiz',
            title: '5. Green Guardian Quiz',
            content: 'Check your plant knowledge and earn your Eco Badge!',
            questions: [
              {
                id: 'pq1',
                text: 'Which part of the plant absorbs water from deep in the soil?',
                type: 'mcq',
                options: [
                  { id: 'po1', text: 'Flowers', isCorrect: false },
                  { id: 'po2', text: 'Roots', isCorrect: true },
                  { id: 'po3', text: 'Fruit', isCorrect: false }
                ],
                hint: 'It grows downwards below the soil.',
                explanation: 'Roots absorb water and nutrients from the soil.'
              },
              {
                id: 'pq2',
                text: 'Why are leaves called the "Kitchen of the Plant"?',
                type: 'mcq',
                options: [
                  { id: 'po4', text: 'They prepare food using sunlight and water', isCorrect: true },
                  { id: 'po5', text: 'They store water like a bucket', isCorrect: false },
                  { id: 'po6', text: 'They make sounds when wind blows', isCorrect: false }
                ],
                hint: 'Think about cooking food with sunlight.',
                explanation: 'Leaves perform photosynthesis to synthesize sugars for the plant.'
              }
            ]
          }
        ]
      },
      hi: {
        languageCode: 'hi',
        title: 'हमारे हरे मित्र: पौधे के विभिन्न भाग',
        summary: 'अपनी पाठशाला के बगीचे में जड़, तना, पत्ती, फूल और फल के अनोखे कार्यों को समझें!',
        estimatedMinutes: 15,
        sections: [
          {
            id: 'sec-p1',
            orderIndex: 0,
            sectionType: 'story',
            title: '१. मिट्टी में छुपा राज',
            content: 'क्या आपने कभी सोचा है कि तेज आंधी में भी पेड़ कैसे डटे रहते हैं? जमीन के नीचे पौधों की जड़ें उन्हें मजबूती से थामे रखती हैं।',
            audioNarrationText: 'पौधों की जड़ें जमीन में गहराई तक जाकर उन्हें मजबूती से थामे रखती हैं।'
          },
          {
            id: 'sec-p2',
            orderIndex: 1,
            sectionType: 'illustrated_card',
            title: '२. जड़ें: मजबूत आधार',
            content: 'जड़ें मिट्टी से जल और खनिज लवण सोखती हैं और पौधे को सीधा खड़ा रखती हैं।',
            illustratedSvg: 'plant-diagram'
          },
          {
            id: 'sec-p3',
            orderIndex: 2,
            sectionType: 'worked_example',
            title: '३. पत्तियां: पौधे की रसोई',
            content: 'पत्तियां सूर्य के प्रकाश, पानी और हवा की मदद से पौधे के लिए भोजन बनाती हैं। इस क्रिया को प्रकाश-संश्लेषण कहते हैं।',
            audioNarrationText: 'पत्तियां सूरज की रोशनी से भोजन बनाती हैं।'
          },
          {
            id: 'sec-p4',
            orderIndex: 3,
            sectionType: 'quiz',
            title: '४. ज्ञान परख क्विज़',
            content: 'सही उत्तर चुनकर प्रकृति रक्षक बैज पाएं!',
            questions: [
              {
                id: 'pq1-hi',
                text: 'पौधे का कौन सा भाग मिट्टी से पानी सोखता है?',
                type: 'mcq',
                options: [
                  { id: 'po1', text: 'फूल', isCorrect: false },
                  { id: 'po2', text: 'जड़ (Roots)', isCorrect: true },
                  { id: 'po3', text: 'फल', isCorrect: false }
                ],
                hint: 'यह जमीन के नीचे रहता है।',
                explanation: 'जड़ें मिट्टी से पानी और पोषक तत्व अवशोषित करती हैं।'
              }
            ]
          }
        ]
      },
      kn: {
        languageCode: 'kn',
        title: 'ನಮ್ಮ ಹಸಿರು ಗೆಳೆಯರು: ಸಸ್ಯದ ಭಾಗಗಳು',
        summary: 'ಶಾಲಾ ತೋಟದಲ್ಲಿ ಬೇರು, ಕಾಂಡ, ಎಲೆ, ಹೂವು ಮತ್ತು ಹಣ್ಣುಗಳ ಅದ್ಭುತ ಕಾರ್ಯಗಳನ್ನು ಕಲಿಯಿರಿ!',
        estimatedMinutes: 15,
        sections: [
          {
            id: 'sec-p1',
            orderIndex: 0,
            sectionType: 'story',
            title: '೧. ಮಣ್ಣಿನಲ್ಲಿರುವ ರಹಸ್ಯ',
            content: 'ಗಾಳಿ ಬೀಸಿದಾಗಲೂ ಸಸ್ಯಗಳು ಹೇಗೆ ಸ್ಥಿರವಾಗಿ ನಿಲ್ಲುತ್ತವೆ? ಭೂಮಿಯ ಕೆಳಗಿರುವ ಬೇರುಗಳು ಸಸ್ಯವನ್ನು ಭದ್ರವಾಗಿ ಹಿಡಿದಿಟ್ಟುಕೊಳ್ಳುತ್ತವೆ.',
            audioNarrationText: 'ಬೇರುಗಳು ಮಣ್ಣಿನಲ್ಲಿ ಸಸ್ಯವನ್ನು ಗಟ್ಟಿಯಾಗಿ ಹಿಡಿದಿಟ್ಟುಕೊಳ್ಳುತ್ತವೆ.'
          },
          {
            id: 'sec-p2',
            orderIndex: 1,
            sectionType: 'illustrated_card',
            title: '೨. ಬೇರುಗಳು: ಮುಖ್ಯ ಆಧಾರ',
            content: 'ಬೇರುಗಳು ಮಣ್ಣಿನಿಂದ ನೀರು ಮತ್ತು ಖನಿಜಗಳನ್ನು ಹೀರಿಕೊಂಡು ಸಸ್ಯಕ್ಕೆ ಒದಗಿಸುತ್ತವೆ.',
            illustratedSvg: 'plant-diagram'
          },
          {
            id: 'sec-p3',
            orderIndex: 2,
            sectionType: 'quiz',
            title: '೩. ಪರಿಸರ ರಸಪ್ರಶ್ನೆ',
            content: 'ಸರಿಯಾದ ಉತ್ತರವನ್ನು ಆರಿಸಿ!',
            questions: [
              {
                id: 'pq1-kn',
                text: 'ಸಸ್ಯದ ಯಾವ ಭಾಗವು ಮಣ್ಣಿನಿಂದ ನೀರನ್ನು ಹೀರಿಕೊಳ್ಳುತ್ತದೆ?',
                type: 'mcq',
                options: [
                  { id: 'po1', text: 'ಹೂವು', isCorrect: false },
                  { id: 'po2', text: 'ಬೇರು', isCorrect: true }
                ],
                explanation: 'ಬೇರುಗಳು ಮಣ್ಣಿನಿಂದ ನೀರು ಮತ್ತು ಪೋಷಕಾಂಶಗಳನ್ನು ಹೀರುತ್ತವೆ.'
              }
            ]
          }
        ]
      },
      te: {
        languageCode: 'te',
        title: 'మొక్కల భాగాలు - వాటి పనులు',
        summary: 'మొక్కలలో వేర్లు, కాండం, ఆకులు, పువ్వులు ఎలా పనిచేస్తాయో తెలుసుకోండి.',
        estimatedMinutes: 15,
        sections: [
          {
            id: 'sec-p1',
            orderIndex: 0,
            sectionType: 'story',
            title: '1. మొక్కల అద్భుతం',
            content: 'వేర్లు మట్టిలోని నీటిని పీల్చుకుని మొక్కకు బలాన్ని ఇస్తాయి.',
            illustratedSvg: 'plant-diagram'
          },
          {
            id: 'sec-p2',
            orderIndex: 1,
            sectionType: 'quiz',
            title: '2. క్విజ్',
            content: 'సమాధానం సరిచూడండి!',
            questions: [
              {
                id: 'pq1-te',
                text: 'మట్టి నుండి నీటిని పీల్చేది ఏది?',
                type: 'mcq',
                options: [
                  { id: 'po1', text: 'పువ్వు', isCorrect: false },
                  { id: 'po2', text: 'వేరు', isCorrect: true }
                ],
                explanation: 'వేర్లు నీటిని గ్రహిస్తాయి.'
              }
            ]
          }
        ]
      },
      ta: {
        languageCode: 'ta',
        title: 'தாவரத்தின் பாகங்கள்',
        summary: 'வேர், தண்டு, இலை, பூ ஆகியவற்றின் செயல்பாடுகளைக் கற்போம்.',
        estimatedMinutes: 15,
        sections: [
          {
            id: 'sec-p1',
            orderIndex: 0,
            sectionType: 'story',
            title: '1. தாவரத்தின் வேர்கள்',
            content: 'வேர்கள் மண்ணிலிருந்து நீரையும் சத்துக்களையும் உறிஞ்சி தாவரத்தை நிலைநிறுத்துகின்றன.',
            illustratedSvg: 'plant-diagram'
          },
          {
            id: 'sec-p2',
            orderIndex: 1,
            sectionType: 'quiz',
            title: '2. வினாடி வினா',
            content: 'பதில் சொல்லுங்கள்!',
            questions: [
              {
                id: 'pq1-ta',
                text: 'மண்ணிலிருந்து நீரை உறிஞ்சுவது எது?',
                type: 'mcq',
                options: [
                  { id: 'po1', text: 'பூ', isCorrect: false },
                  { id: 'po2', text: 'வேர்', isCorrect: true }
                ],
                explanation: 'வேர்கள் நீரை உறிஞ்சுகின்றன.'
              }
            ]
          }
        ]
      },
      ml: {
        languageCode: 'ml',
        title: 'സസ്യങ്ങളുടെ ഭാഗങ്ങൾ',
        summary: 'വേര്, തണ്ട്, ഇല, പൂവ് എന്നിവയുടെ ധർമ്മങ്ങൾ മനസ്സിലാക്കാം.',
        estimatedMinutes: 15,
        sections: [
          {
            id: 'sec-p1',
            orderIndex: 0,
            sectionType: 'story',
            title: '1. വേരുകളുടെ പ്രാധാന്യം',
            content: 'വേരുകൾ മണ്ണിൽ നിന്ന് വെള്ളവും പോഷകങ്ങളും വലിച്ചെടുക്കുന്നു.',
            illustratedSvg: 'plant-diagram'
          },
          {
            id: 'sec-p2',
            orderIndex: 1,
            sectionType: 'quiz',
            title: '2. ക്വിസ്',
            content: 'ശരിയായ ഉത്തരം കണ്ടെത്തൂ!',
            questions: [
              {
                id: 'pq1-ml',
                text: 'മണ്ണിൽ നിന്ന് വെള്ളം വലിച്ചെടുക്കുന്നത് ഏത് ഭാഗമാണ്?',
                type: 'mcq',
                options: [
                  { id: 'po1', text: 'പൂവ്', isCorrect: false },
                  { id: 'po2', text: 'വേര്', isCorrect: true }
                ],
                explanation: 'വേരുകൾ വെള്ളം വലിച്ചെടുക്കുന്നു.'
              }
            ]
          }
        ]
      },
      mr: {
        languageCode: 'mr',
        title: 'आपले हिरवे मित्र: वनस्पतींचे अवयव',
        summary: 'मूळ, खोड, पाने, फुले व फळे यांचे कार्य समजून घ्या.',
        estimatedMinutes: 15,
        sections: [
          {
            id: 'sec-p1',
            orderIndex: 0,
            sectionType: 'story',
            title: '१. मुळांचे कार्य',
            content: 'मुळे मातीतून पाणी आणि क्षार शोषून घेतात आणि वनस्पतीला आधार देतात.',
            illustratedSvg: 'plant-diagram'
          },
          {
            id: 'sec-p2',
            orderIndex: 1,
            sectionType: 'quiz',
            title: '२. प्रश्नमंजुषा',
            content: 'योग्य उत्तर निवडा!',
            questions: [
              {
                id: 'pq1-mr',
                text: 'मातीतून पाणी कोण शोषून घेते?',
                type: 'mcq',
                options: [
                  { id: 'po1', text: 'फूल', isCorrect: false },
                  { id: 'po2', text: 'मूळ', isCorrect: true }
                ],
                explanation: 'मुळे मातीतून पाणी शोषून घेतात.'
              }
            ]
          }
        ]
      },
      bn: {
        languageCode: 'bn',
        title: 'আমাদের সবুজ বন্ধু: উদ্ভিদের বিভিন্ন অংশ',
        summary: 'গাছের শিকড়, কাণ্ড, পাতা ও ফুলের কাজ সহজ ভাষায় জানুন।',
        estimatedMinutes: 15,
        sections: [
          {
            id: 'sec-p1',
            orderIndex: 0,
            sectionType: 'story',
            title: '১. শিকড়ের ক্ষমতা',
            content: 'শিকড় মাটিকে শক্ত করে ধরে রাখে এবং মাটি থেকে জল ও খনিজ লবণ শোষণ করে।',
            illustratedSvg: 'plant-diagram'
          },
          {
            id: 'sec-p2',
            orderIndex: 1,
            sectionType: 'quiz',
            title: '২. কুইজ',
            content: 'সঠিক উত্তর নির্বাচন করুন!',
            questions: [
              {
                id: 'pq1-bn',
                text: 'মাটি থেকে জল শোষণ করে গাছের কোন অংশ?',
                type: 'mcq',
                options: [
                  { id: 'po1', text: 'ফুল', isCorrect: false },
                  { id: 'po2', text: 'শিকড়', isCorrect: true }
                ],
                explanation: 'শিকড় মাটি থেকে জল শোষণ করে।'
              }
            ]
          }
        ]
      }
    }
  },

  // LESSON 3: Class 1 - Mathematics - Counting Village Animals & Mangoes
  {
    id: 'lesson-math-c1-03',
    classNumber: 1,
    subjectCode: 'math',
    slug: 'counting-numbers-1-to-10',
    difficultyLevel: 'beginner',
    status: 'published',
    authorName: 'Aishwarya D.',
    reviewerName: 'State SCERT Review Team',
    version: 1,
    updatedAt: '2026-10-20T09:00:00Z',
    translations: {
      en: {
        languageCode: 'en',
        title: 'Counting Safari: Numbers 1 to 10',
        summary: 'Count cheerful cows, parrots, bicycles, and juicy sweet mangoes around our village.',
        estimatedMinutes: 10,
        sections: [
          {
            id: 'sec-c1',
            orderIndex: 0,
            sectionType: 'story',
            title: '1. Morning in the Village',
            content: 'The sun is rising over the coconut trees! Let us count the animals and birds waking up for school.',
            audioNarrationText: 'The sun is rising! Let us count the friendly animals waking up in our village.'
          },
          {
            id: 'sec-c2',
            orderIndex: 1,
            sectionType: 'illustrated_card',
            title: '2. Count the Mangoes 🥭',
            content: '1 Mango, 2 Mangoes, 3 Mangoes! Each number tells us "how many" things we have in total.',
            illustratedSvg: 'counting-objects'
          },
          {
            id: 'sec-c3',
            orderIndex: 2,
            sectionType: 'activity',
            title: '3. Tap to Count',
            content: 'How many cows are in the field?',
            activity: {
              id: 'act-count-1',
              type: 'counting',
              title: 'Count the Cows',
              instructions: 'Count the cows you see and choose the right number!',
              data: { count: 3, objectName: 'Cow', emoji: '🐄' }
            }
          },
          {
            id: 'sec-c4',
            orderIndex: 3,
            sectionType: 'quiz',
            title: '4. Number Star Quiz',
            content: 'Can you pick the right number?',
            questions: [
              {
                id: 'cq1',
                text: 'How many wheels does a bicycle have? 🚲',
                type: 'mcq',
                options: [
                  { id: 'co1', text: '1 wheel', isCorrect: false },
                  { id: 'co2', text: '2 wheels', isCorrect: true },
                  { id: 'co3', text: '4 wheels', isCorrect: false }
                ],
                hint: 'Look at the front and back of the bicycle!',
                explanation: 'A bicycle has 2 wheels.'
              }
            ]
          }
        ]
      },
      hi: {
        languageCode: 'hi',
        title: 'गिनती की सैर: १ से १० तक अंक',
        summary: 'गाँव में गायों, मोरों, साइकिलों और रसीले आमों को गिनना सीखें।',
        estimatedMinutes: 10,
        sections: [
          {
            id: 'sec-c1',
            orderIndex: 0,
            sectionType: 'story',
            title: '१. गाँव में सुबह',
            content: 'सूरज निकल आया है! आइए गाँव में पशु-पक्षियों की गिनती शुरू करें।',
            audioNarrationText: 'गाँव में सुबह हो गई है, चलिए गिनती शुरू करते हैं।'
          },
          {
            id: 'sec-c2',
            orderIndex: 1,
            sectionType: 'illustrated_card',
            title: '२. आम गिनें 🥭',
            content: '१ आम, २ आम, ३ आम! संख्या हमें बताती है कि कुल कितनी चीजें हैं।',
            illustratedSvg: 'counting-objects'
          },
          {
            id: 'sec-c3',
            orderIndex: 2,
            sectionType: 'quiz',
            title: '३. नंबर क्विज़',
            content: 'सही संख्या चुनें!',
            questions: [
              {
                id: 'cq1-hi',
                text: 'एक साइकिल में कितने पहिए होते हैं? 🚲',
                type: 'mcq',
                options: [
                  { id: 'co1', text: '१ पहिया', isCorrect: false },
                  { id: 'co2', text: '२ पहिए', isCorrect: true },
                  { id: 'co3', text: '४ पहिए', isCorrect: false }
                ],
                explanation: 'साइकिल में २ पहिए होते हैं।'
              }
            ]
          }
        ]
      },
      kn: {
        languageCode: 'kn',
        title: 'ಎಣಿಕೆ ಸವಾರಿ: ೧ ರಿಂದ ೧೦ ರವರೆಗೆ',
        summary: 'ನಮ್ಮ ಹಳ್ಳಿಯ ಹಸುಗಳು, ಗಿಳಿಗಳು, ಸೈಕಲ್‌ಗಳು ಮತ್ತು ಸಿಹಿ ಮಾವಿನ ಹಣ್ಣುಗಳನ್ನು ಎಣಿಸೋಣ.',
        estimatedMinutes: 10,
        sections: [
          {
            id: 'sec-c1',
            orderIndex: 0,
            sectionType: 'story',
            title: '೧. ಹಳ್ಳಿಯ ಮುಂಜಾನೆ',
            content: 'ಸೂರ್ಯ ಮೂಡಿದ್ದಾನೆ! ಬನ್ನಿ, ನಮ್ಮ ಗ್ರಾಮದ ಪ್ರಾಣಿ-ಪಕ್ಷಿಗಳನ್ನು ಎಣಿಸೋಣ.',
            audioNarrationText: 'ಬನ್ನಿ ನಮ್ಮ ಊರಿನ ಪ್ರಾಣಿಗಳನ್ನು ಎಣಿಸೋಣ.'
          },
          {
            id: 'sec-c2',
            orderIndex: 1,
            sectionType: 'illustrated_card',
            title: '೨. ಮಾವಿನ ಹಣ್ಣುಗಳ ಎಣಿಕೆ 🥭',
            content: '೧ ಮಾವು, ೨ ಮಾವು, ೩ ಮಾವಿನ ಹಣ್ಣುಗಳು!',
            illustratedSvg: 'counting-objects'
          },
          {
            id: 'sec-c3',
            orderIndex: 2,
            sectionType: 'quiz',
            title: '೩. ಎಣಿಕೆ ರಸಪ್ರಶ್ನೆ',
            content: 'ಸರಿಯಾದ ಸಂಖ್ಯೆಯನ್ನು ಆರಿಸಿ!',
            questions: [
              {
                id: 'cq1-kn',
                text: 'ಸೈಕಲ್‌ಗೆ ಎಷ್ಟು ಚಕ್ರಗಳಿರುತ್ತವೆ? 🚲',
                type: 'mcq',
                options: [
                  { id: 'co1', text: '೧ ಚಕ್ರ', isCorrect: false },
                  { id: 'co2', text: '೨ ಚಕ್ರಗಳು', isCorrect: true }
                ],
                explanation: 'ಸೈಕಲ್‌ಗೆ ೨ ಚಕ್ರಗಳಿರುತ್ತವೆ.'
              }
            ]
          }
        ]
      },
      te: {
        languageCode: 'te',
        title: 'లెక్కించడం నేర్చుకుందాం: 1 నుండి 10',
        summary: 'మన పల్లెటూరిలోని ఆవులు, పక్షులు, మామిడి పండ్లను లెక్కిద్దాం.',
        estimatedMinutes: 10,
        sections: [
          {
            id: 'sec-c1',
            orderIndex: 0,
            sectionType: 'story',
            title: '1. పల్లెలో ఉదయం',
            content: 'రండి అందరం కలిసి 1 నుండి 10 వరకు లెక్కిద్దాం!',
            illustratedSvg: 'counting-objects'
          },
          {
            id: 'sec-c2',
            orderIndex: 1,
            sectionType: 'quiz',
            title: '2. క్విజ్',
            content: 'సరైన సంఖ్యను ఎంచుకోండి!',
            questions: [
              {
                id: 'cq1-te',
                text: 'సైకిల్‌కు ఎన్ని చక్రాలు ఉంటాయి? 🚲',
                type: 'mcq',
                options: [
                  { id: 'co1', text: '1', isCorrect: false },
                  { id: 'co2', text: '2', isCorrect: true }
                ],
                explanation: 'సైకిల్‌కు 2 చక్రాలు ఉంటాయి.'
              }
            ]
          }
        ]
      },
      ta: {
        languageCode: 'ta',
        title: 'எண்ணிக்கை கற்போம்: 1 முதல் 10 வரை',
        summary: 'கிராமத்தில் உள்ள மாடுகள், கிளிகள் மற்றும் மாம்பழங்களை எண்ணுவோம்.',
        estimatedMinutes: 10,
        sections: [
          {
            id: 'sec-c1',
            orderIndex: 0,
            sectionType: 'story',
            title: '1. காலை வணக்கம்',
            content: '1 முதல் 10 வரை உள்ள எண்களை மகிழ்ச்சியாக எண்ணுவோம்!',
            illustratedSvg: 'counting-objects'
          },
          {
            id: 'sec-c2',
            orderIndex: 1,
            sectionType: 'quiz',
            title: '2. வினாடி வினா',
            content: 'சரியான விடை எது?',
            questions: [
              {
                id: 'cq1-ta',
                text: 'மிதிவண்டிக்கு (சைக்கிள்) எத்தனை சக்கரங்கள் உள்ளன? 🚲',
                type: 'mcq',
                options: [
                  { id: 'co1', text: '1', isCorrect: false },
                  { id: 'co2', text: '2', isCorrect: true }
                ],
                explanation: 'மிதிவண்டிக்கு 2 சக்கரங்கள் உள்ளன.'
              }
            ]
          }
        ]
      },
      ml: {
        languageCode: 'ml',
        title: 'എണ്ണാൻ പഠിക്കാം: 1 മുതൽ 10 വരെ',
        summary: 'ഗ്രാമത്തിലെ പശുക്കളെയും മാമ്പഴങ്ങളെയും നമുക്ക് എണ്ണാം.',
        estimatedMinutes: 10,
        sections: [
          {
            id: 'sec-c1',
            orderIndex: 0,
            sectionType: 'story',
            title: '1. ഗ്രാമത്തിലെ പ്രഭാതം',
            content: 'നമുക്ക് സന്തോഷത്തോടെ 1 മുതൽ 10 വരെ എണ്ണാം!',
            illustratedSvg: 'counting-objects'
          },
          {
            id: 'sec-c2',
            orderIndex: 1,
            sectionType: 'quiz',
            title: '2. ക്വിസ്',
            content: 'ശരിയായ സംഖ്യ കണ്ടെത്തൂ!',
            questions: [
              {
                id: 'cq1-ml',
                text: 'സൈക്കിളിന് എത്ര ചക്രങ്ങളുണ്ട്? 🚲',
                type: 'mcq',
                options: [
                  { id: 'co1', text: '1', isCorrect: false },
                  { id: 'co2', text: '2', isCorrect: true }
                ],
                explanation: 'സൈക്കിളിന് 2 ചക്രങ്ങളുണ്ട്.'
              }
            ]
          }
        ]
      },
      mr: {
        languageCode: 'mr',
        title: 'मजेदार मोजणी: १ ते १० अंक',
        summary: 'गावातील गाई, पोपट आणि गोड आंबे मोजायला शिका.',
        estimatedMinutes: 10,
        sections: [
          {
            id: 'sec-c1',
            orderIndex: 0,
            sectionType: 'story',
            title: '१. गावात सकाळ झाली',
            content: 'चला १ ते १० पर्यंत मोजणी शिकूया!',
            illustratedSvg: 'counting-objects'
          },
          {
            id: 'sec-c2',
            orderIndex: 1,
            sectionType: 'quiz',
            title: '२. प्रश्नमंजुषा',
            content: 'योग्य संख्या निवडा!',
            questions: [
              {
                id: 'cq1-mr',
                text: 'सायकलला किती चाके असतात? 🚲',
                type: 'mcq',
                options: [
                  { id: 'co1', text: '१ चाक', isCorrect: false },
                  { id: 'co2', text: '२ चाके', isCorrect: true }
                ],
                explanation: 'सायकलला २ चाके असतात.'
              }
            ]
          }
        ]
      },
      bn: {
        languageCode: 'bn',
        title: 'মজার গণনা: ১ থেকে ১০',
        summary: 'আমাদের গ্রামের গরু, পাখি ও সুস্বাদু আম গণনা করা শিখুন।',
        estimatedMinutes: 10,
        sections: [
          {
            id: 'sec-c1',
            orderIndex: 0,
            sectionType: 'story',
            title: '১. গ্রামে সকাল',
            content: 'এসো আনন্দের সাথে ১ থেকে ১০ পর্যন্ত সংখ্যা গণনা করি!',
            illustratedSvg: 'counting-objects'
          },
          {
            id: 'sec-c2',
            orderIndex: 1,
            sectionType: 'quiz',
            title: '২. কুইজ',
            content: 'সঠিক সংখ্যা বেছে নিন!',
            questions: [
              {
                id: 'cq1-bn',
                text: 'একটি সাইকেলে কয়টি চাকা থাকে? 🚲',
                type: 'mcq',
                options: [
                  { id: 'co1', text: '১টি', isCorrect: false },
                  { id: 'co2', text: '২টি', isCorrect: true }
                ],
                explanation: 'সাইকেলে ২টি চাকা থাকে।'
              }
            ]
          }
        ]
      }
    }
  },

  // LESSON 4: Class 5 - Science - The Water Cycle & Rain in our Village
  {
    id: 'lesson-sci-c5-04',
    classNumber: 5,
    subjectCode: 'sci',
    slug: 'water-cycle-clouds-and-rain',
    difficultyLevel: 'intermediate',
    status: 'published',
    authorName: 'Dr. K. Srinivas',
    reviewerName: 'State SCERT Review Team',
    version: 1,
    updatedAt: '2026-10-19T11:00:00Z',
    translations: {
      en: {
        languageCode: 'en',
        title: 'The Journey of Rain: The Water Cycle',
        summary: 'Discover how lake water turns into steam, creates fluffy clouds, and returns as life-giving monsoon rain.',
        estimatedMinutes: 14,
        sections: [
          {
            id: 'sec-w1',
            orderIndex: 0,
            sectionType: 'story',
            title: '1. Where Does Rain Come From?',
            content: 'During hot summer days, the village pond water slowly disappears. Where does it go? Water never vanishes; it simply takes on a magical journey through the sky!',
            audioNarrationText: 'Where does rain come from? Water evaporates from ponds, forms clouds, and returns as rain.'
          },
          {
            id: 'sec-w2',
            orderIndex: 1,
            sectionType: 'illustrated_card',
            title: '2. Evaporation & Condensation',
            content: '1. **Evaporation**: Sun heats water into invisible water vapor.\n2. **Condensation**: High in cold skies, vapor cools and gathers as clouds.\n3. **Precipitation**: When clouds grow heavy, raindrops fall back to Earth.',
            illustratedSvg: 'water-cycle'
          },
          {
            id: 'sec-w3',
            orderIndex: 2,
            sectionType: 'quiz',
            title: '3. Water Cycle Quiz',
            content: 'Test your understanding of the rain cycle!',
            questions: [
              {
                id: 'wq1',
                text: 'What is the process called when liquid water turns into vapor by heat?',
                type: 'mcq',
                options: [
                  { id: 'wo1', text: 'Condensation', isCorrect: false },
                  { id: 'wo2', text: 'Evaporation', isCorrect: true },
                  { id: 'wo3', text: 'Precipitation', isCorrect: false }
                ],
                hint: 'Think of water boiling in a kettle with steam rising.',
                explanation: 'Evaporation is the phase change of water into vapor driven by heat.'
              }
            ]
          }
        ]
      },
      hi: {
        languageCode: 'hi',
        title: 'बारिश का सफर: जल चक्र',
        summary: 'जानिए कैसे तालाब का पानी भाप बनकर बादलों में बदलता है और अमृत बनकर बरसता है।',
        estimatedMinutes: 14,
        sections: [
          {
            id: 'sec-w1',
            orderIndex: 0,
            sectionType: 'story',
            title: '१. बारिश कहाँ से आती है?',
            content: 'गर्मियों में तालाब का पानी धीरे-धीरे कम होता है। यह भाप बनकर आसमान में उड़ जाता है और बादल बन जाता है।',
            audioNarrationText: 'तालाब का पानी वाष्प बनकर आसमान में बादल बनता है और वर्षा होती है।'
          },
          {
            id: 'sec-w2',
            orderIndex: 1,
            sectionType: 'illustrated_card',
            title: '२. जल चक्र के तीन चरण',
            content: 'वाष्पीकरण (भाप बनना), संघनन (बादल बनना) और वर्षण (बारिश होना)।',
            illustratedSvg: 'water-cycle'
          },
          {
            id: 'sec-w3',
            orderIndex: 2,
            sectionType: 'quiz',
            title: '३. जल चक्र क्विज़',
            content: 'सही उत्तर बताएं!',
            questions: [
              {
                id: 'wq1-hi',
                text: 'पानी का गर्म होकर भाप बनना क्या कहलाता है?',
                type: 'mcq',
                options: [
                  { id: 'wo1', text: 'संघनन', isCorrect: false },
                  { id: 'wo2', text: 'वाष्पीकरण (Evaporation)', isCorrect: true }
                ],
                explanation: 'तापमान बढ़ने पर पानी का भाप बनना वाष्पीकरण है।'
              }
            ]
          }
        ]
      },
      kn: {
        languageCode: 'kn',
        title: 'ಮಳೆಯ ಪಯಣ: ಜಲಚಕ್ರ',
        summary: 'ಕೆರೆಯ ನೀರು ಆವಿಯಾಗಿ ಮೋಡವಾಗಿ ಮಳೆಯಾಗಿ ಹೇಗೆ ಸುರಿಯುತ್ತದೆ ಎಂಬುದನ್ನು ತಿಳಿಯಿರಿ.',
        estimatedMinutes: 14,
        sections: [
          {
            id: 'sec-w1',
            orderIndex: 0,
            sectionType: 'story',
            title: '೧. ಮಳೆ ಹೇಗೆ ಬರುತ್ತದೆ?',
            content: 'ಕೆರೆ-ತೊರೆಗಳ ನೀರು ಬಿಸಿಲಿಗೆ ಆವಿಯಾಗಿ ಮೇಲಕ್ಕೇರಿ ತಂಪಾಗಿ ಮೋಡವಾಗಿ ಮಳೆಯಾಗಿ ಧರೆಗಿಳಿಯುತ್ತದೆ.',
            audioNarrationText: 'ನೀರು ಆವಿಯಾಗಿ ಮೋಡವಾಗಿ ಮಳೆಯಾಗಿ ಬೀಳುವ ಪ್ರಕ್ರಿಯೆಯೇ ಜಲಚಕ್ರ.'
          },
          {
            id: 'sec-w2',
            orderIndex: 1,
            sectionType: 'illustrated_card',
            title: '೨. ಜಲಚಕ್ರದ ಹಂತಗಳು',
            content: 'ಆವೀಕರಣ, ಸಾಂದ್ರೀಕರಣ ಮತ್ತು ಮಳೆ (ಅವಕ್ಷೇಪನ).',
            illustratedSvg: 'water-cycle'
          },
          {
            id: 'sec-w3',
            orderIndex: 2,
            sectionType: 'quiz',
            title: '೩. ಜಲ ರಸಪ್ರಶ್ನೆ',
            content: 'ಉತ್ತರಿಸಿ!',
            questions: [
              {
                id: 'wq1-kn',
                text: 'ಶಾಖದಿಂದ ನೀರು ಆವಿಯಾಗುವ ಕ್ರಿಯೆಗೆ ಏನೆನ್ನುತ್ತಾರೆ?',
                type: 'mcq',
                options: [
                  { id: 'wo1', text: 'ಸಾಂದ್ರೀಕರಣ', isCorrect: false },
                  { id: 'wo2', text: 'ಆವೀಕರಣ (Evaporation)', isCorrect: true }
                ],
                explanation: 'ಶಾಖಕ್ಕೆ ನೀರು ಆವಿಯಾಗುವುದು ಆವೀಕರಣ.'
              }
            ]
          }
        ]
      },
      te: {
        languageCode: 'te',
        title: 'వర్షం ప్రయాణం: జల చక్రం',
        summary: 'చెరువు నీరు ఆవిరై మేఘాలుగా మారి వర్షం ఎలా కురుస్తుందో నేర్చుకోండి.',
        estimatedMinutes: 14,
        sections: [
          {
            id: 'sec-w1',
            orderIndex: 0,
            sectionType: 'story',
            title: '1. వర్షం ఎలా వస్తుంది?',
            content: 'ఎండ వేడికి నీరు ఆవిరై ఆకాశంలో మేఘాలుగా మారి చల్లబడి వర్షం కురుస్తుంది.',
            illustratedSvg: 'water-cycle'
          },
          {
            id: 'sec-w2',
            orderIndex: 1,
            sectionType: 'quiz',
            title: '2. క్విజ్',
            content: 'సరైన సమాధానం ఎంచుకోండి!',
            questions: [
              {
                id: 'wq1-te',
                text: 'నీరు ఆవిరిగా మారడాన్ని ఏమంటారు?',
                type: 'mcq',
                options: [
                  { id: 'wo1', text: 'సాంద్రీకరణం', isCorrect: false },
                  { id: 'wo2', text: 'భాష్పీభవనం (Evaporation)', isCorrect: true }
                ],
                explanation: 'నీరు ఆవిరి కావడాన్ని భాష్పీభవనం అంటారు.'
              }
            ]
          }
        ]
      },
      ta: {
        languageCode: 'ta',
        title: 'மழையின் பயணம்: நீர்ச் சுழற்சி',
        summary: 'நீர் ஆவியாகி, மேகமாகி, மழையாகப் பொழியும் நீர்ச் சுழற்சியைக் கற்போம்.',
        estimatedMinutes: 14,
        sections: [
          {
            id: 'sec-w1',
            orderIndex: 0,
            sectionType: 'story',
            title: '1. மழை எவ்வாறு உருவாகிறது?',
            content: 'சூரிய வெப்பத்தால் நீர் ஆவியாகி வானில் மேகங்களாகக் குளிர்ந்து மழையாகப் பொழிகிறது.',
            illustratedSvg: 'water-cycle'
          },
          {
            id: 'sec-w2',
            orderIndex: 1,
            sectionType: 'quiz',
            title: '2. வினாடி வினா',
            content: 'விடையளியுங்கள்!',
            questions: [
              {
                id: 'wq1-ta',
                text: 'நீர் வெப்பத்தால் நீராவியாவது என்ன?',
                type: 'mcq',
                options: [
                  { id: 'wo1', text: 'குளிர்வடைதல்', isCorrect: false },
                  { id: 'wo2', text: 'ஆவியாதல் (Evaporation)', isCorrect: true }
                ],
                explanation: 'நீர் வெப்பத்தால் நீராவியாவது ஆவியாதல் எனப்படும்.'
              }
            ]
          }
        ]
      },
      ml: {
        languageCode: 'ml',
        title: 'മഴയുടെ വഴി: ജലചക്രം',
        summary: 'വെള്ളം ആവിയായി മേഘമായി മഴയായി പെയ്യുന്ന പ്രക്രിയ മനസ്സിലാക്കാം.',
        estimatedMinutes: 14,
        sections: [
          {
            id: 'sec-w1',
            orderIndex: 0,
            sectionType: 'story',
            title: '1. മഴ എങ്ങനെ ഉണ്ടാകുന്നു?',
            content: 'സൂര്യന്റെ ചൂടിൽ ജലം നീരാവിയായി ഉയർന്നു തണുത്ത് മേഘങ്ങളായി മഴയായി പെയ്യുന്നു.',
            illustratedSvg: 'water-cycle'
          },
          {
            id: 'sec-w2',
            orderIndex: 1,
            sectionType: 'quiz',
            title: '2. ക്വിസ്',
            content: 'ശരിയായ ഉത്തരം തിരഞ്ഞെടുക്കൂ!',
            questions: [
              {
                id: 'wq1-ml',
                text: 'വെള്ളം നീരാവിയാകുന്ന പ്രക്രിയ എന്താണ്?',
                type: 'mcq',
                options: [
                  { id: 'wo1', text: 'സാന്ദ്രീകരണം', isCorrect: false },
                  { id: 'wo2', text: 'ബാഷ്പീകരണം (Evaporation)', isCorrect: true }
                ],
                explanation: 'വെള്ളം ചൂടായി നീരാവിയാകുന്നത് ബാഷ്പീകരണം.'
              }
            ]
          }
        ]
      },
      mr: {
        languageCode: 'mr',
        title: 'पावसाचा प्रवास: जलचक्र',
        summary: 'तलावाचे पाणी वाफ होऊन ढग कसे बनतात आणि पाऊस कसा पडतो ते शिका.',
        estimatedMinutes: 14,
        sections: [
          {
            id: 'sec-w1',
            orderIndex: 0,
            sectionType: 'story',
            title: '१. पाऊस कसा पडतो?',
            content: 'उन्हाने पाणी तापून वाफ होते आणि आकाशात जाऊन ढग बनतात व पाऊस पडतो.',
            illustratedSvg: 'water-cycle'
          },
          {
            id: 'sec-w2',
            orderIndex: 1,
            sectionType: 'quiz',
            title: '२. प्रश्नमंजुषा',
            content: 'योग्य पर्याय निवडा!',
            questions: [
              {
                id: 'wq1-mr',
                text: 'पाणी तापून वाफ होण्याची क्रिया कोणती?',
                type: 'mcq',
                options: [
                  { id: 'wo1', text: 'संघननीकरण', isCorrect: false },
                  { id: 'wo2', text: 'बाष्पीभवन (Evaporation)', isCorrect: true }
                ],
                explanation: 'पाण्याची वाफ होणे म्हणजे बाष्पीभवन.'
              }
            ]
          }
        ]
      },
      bn: {
        languageCode: 'bn',
        title: 'বৃষ্টির সফর: জলচক্রের রহস্য',
        summary: 'পুকুরের জল বাষ্প হয়ে কীভাবে মেঘ হয় ও বৃষ্টি হয়ে ঝরে পড়ে জানুন।',
        estimatedMinutes: 14,
        sections: [
          {
            id: 'sec-w1',
            orderIndex: 0,
            sectionType: 'story',
            title: '১. বৃষ্টি কীভাবে হয়?',
            content: 'সূর্যের তাপে জল বাষ্প হয়ে আকাশে ওঠে ও ঠান্ডা হয়ে মেঘের সৃষ্টি করে বৃষ্টি হয়ে নেমে আসে।',
            illustratedSvg: 'water-cycle'
          },
          {
            id: 'sec-w2',
            orderIndex: 1,
            sectionType: 'quiz',
            title: '২. কুইজ',
            content: 'সঠিক উত্তর দিন!',
            questions: [
              {
                id: 'wq1-bn',
                text: 'জল তাপে বাষ্পে পরিণত হওয়ার প্রক্রিয়াকে কী বলে?',
                type: 'mcq',
                options: [
                  { id: 'wo1', text: 'ঘনীভবন', isCorrect: false },
                  { id: 'wo2', text: 'বাষ্পীভবন (Evaporation)', isCorrect: true }
                ],
                explanation: 'জল বাষ্পে পরিণত হওয়াকে বাষ্পীভবন বলে।'
              }
            ]
          }
        ]
      }
    }
  },

  // LESSON 5: Class 6 - Social Studies - Our Gram Panchayat: How Villages Work Together
  {
    id: 'lesson-soc-c6-05',
    classNumber: 6,
    subjectCode: 'soc',
    slug: 'gram-panchayat-village-governance',
    difficultyLevel: 'intermediate',
    status: 'published',
    authorName: 'Mallikarjun Hiremath',
    reviewerName: 'State SCERT Review Team',
    version: 1,
    updatedAt: '2026-10-21T15:00:00Z',
    translations: {
      en: {
        languageCode: 'en',
        title: 'Our Gram Panchayat: Village Community & Governance',
        summary: 'Learn how village elders, women leaders, and citizens gather at the Gram Sabha to build clean water wells, roads, and schools.',
        estimatedMinutes: 16,
        sections: [
          {
            id: 'sec-gp1',
            orderIndex: 0,
            sectionType: 'story',
            title: '1. The Meeting under the Banyan Tree',
            content: 'In our village, all adult citizens aged 18 and older gather together for the Gram Sabha. Together, they discuss clean drinking water, school repairs, and street lamps.',
            audioNarrationText: 'The Gram Sabha is where all village adults meet to solve village problems together.'
          },
          {
            id: 'sec-gp2',
            orderIndex: 1,
            sectionType: 'illustrated_card',
            title: '2. The Structure of the Panchayat',
            content: 'The Panchayat is headed by the Sarpanch or Gram Pradhan. Ward members (Panchs) are elected by villagers. At least one-third of seats are reserved for women leaders!',
            illustratedSvg: 'panchayat-tree'
          },
          {
            id: 'sec-gp3',
            orderIndex: 2,
            sectionType: 'quiz',
            title: '3. Democracy in Action Quiz',
            content: 'Demonstrate your knowledge of village self-governance!',
            questions: [
              {
                id: 'gpq1',
                text: 'Who is eligible to participate and vote in the Gram Sabha meeting?',
                type: 'mcq',
                options: [
                  { id: 'gpo1', text: 'Only landowners', isCorrect: false },
                  { id: 'gpo2', text: 'All adults aged 18 and above in the village', isCorrect: true },
                  { id: 'gpo3', text: 'Only government officers', isCorrect: false }
                ],
                explanation: 'Every adult in the village aged 18 and above is a member of the Gram Sabha.'
              }
            ]
          }
        ]
      },
      hi: {
        languageCode: 'hi',
        title: 'हमारी ग्राम पंचायत: गाँव की सरकार',
        summary: 'जानिए कैसे ग्राम सभा में मिलकर सड़क, पानी और स्कूल की समस्याओं को सुलझाया जाता है।',
        estimatedMinutes: 16,
        sections: [
          {
            id: 'sec-gp1',
            orderIndex: 0,
            sectionType: 'story',
            title: '१. बरगद के पेड़ के नीचे सभा',
            content: 'गाँव में १८ वर्ष और उससे अधिक उम्र के सभी नागरिक ग्राम सभा में भाग लेते हैं।',
            audioNarrationText: 'ग्राम सभा गाँव की समस्याओं को मिलकर सुलझाने का मंच है।'
          },
          {
            id: 'sec-gp2',
            orderIndex: 1,
            sectionType: 'illustrated_card',
            title: '२. पंचायत की संरचना',
            content: 'पंचायत के मुखिया को सरपंच कहा जाता है। वार्ड सदस्यों को पंच कहते हैं।',
            illustratedSvg: 'panchayat-tree'
          },
          {
            id: 'sec-gp3',
            orderIndex: 2,
            sectionType: 'quiz',
            title: '३. ग्राम पंचायत क्विज़',
            content: 'सही उत्तर दें!',
            questions: [
              {
                id: 'gpq1-hi',
                text: 'ग्राम सभा की बैठक में कौन भाग ले सकता है?',
                type: 'mcq',
                options: [
                  { id: 'gpo1', text: 'केवल बड़े किसान', isCorrect: false },
                  { id: 'gpo2', text: 'गाँव के सभी १८ वर्ष या उससे अधिक उम्र के नागरिक', isCorrect: true }
                ],
                explanation: '१८ वर्ष से ऊपर का प्रत्येक मतदाता ग्राम सभा का सदस्य होता है।'
              }
            ]
          }
        ]
      },
      kn: {
        languageCode: 'kn',
        title: 'ನಮ್ಮ ಗ್ರಾಮ ಪಂಚಾಯಿತಿ: ಹಳ್ಳಿಯ ಆಡಳಿತ',
        summary: 'ಗ್ರಾಮಸ್ಥರೆಲ್ಲರೂ ಒಗ್ಗೂಡಿ ಶಾಲೆ, ನೀರು ಮತ್ತು ರಸ್ತೆಗಳ ಅಭಿವೃದ್ಧಿಗೆ ಹೇಗೆ ತೀರ್ಮಾನಿಸುತ್ತಾರೆ ಎಂದು ತಿಳಿಯಿರಿ.',
        estimatedMinutes: 16,
        sections: [
          {
            id: 'sec-gp1',
            orderIndex: 0,
            sectionType: 'story',
            title: '೧. ಗ್ರಾಮ ಸಭೆಯ ಮಹತ್ವ',
            content: '೧೮ ವರ್ಷ ಮೇಲ್ಪಟ್ಟ ಎಲ್ಲಾ ಹಳ್ಳಿಯ ನಾಗರಿಕರು ಗ್ರಾಮ ಸಭೆಯಲ್ಲಿ ಭಾಗವಹಿಸಿ ಹಳ್ಳಿಯ ಸಮಸ್ಯೆಗಳನ್ನು ಚರ್ಚಿಸುತ್ತಾರೆ.',
            audioNarrationText: 'ಗ್ರಾಮ ಸಭೆಯು ಹಳ್ಳಿಯ ಪ್ರಜಾಪ್ರಭುತ್ವದ ಮುಖ್ಯ ಅಡಿಪಾಯ.'
          },
          {
            id: 'sec-gp2',
            orderIndex: 1,
            sectionType: 'illustrated_card',
            title: '೨. ಪಂಚಾಯಿತಿ ರಚನೆ',
            content: 'ಪಂಚಾಯಿತಿಯ ಅಧ್ಯಕ್ಷರು, ಉಪಾಧ್ಯಕ್ಷರು ಮತ್ತು ವಾರ್ಡ್ ಸದಸ್ಯರು ಜನರಿಂದ ಆಯ್ಕೆಯಾಗುತ್ತಾರೆ.',
            illustratedSvg: 'panchayat-tree'
          },
          {
            id: 'sec-gp3',
            orderIndex: 2,
            sectionType: 'quiz',
            title: '೩. ಪಂಚಾಯಿತಿ ರಸಪ್ರಶ್ನೆ',
            content: 'ಸರಿಯಾದ ಉತ್ತರ ನೀಡಿ!',
            questions: [
              {
                id: 'gpq1-kn',
                text: 'ಗ್ರಾಮ ಸಭೆಯಲ್ಲಿ ಯಾರು ಭಾಗವಹಿಸಬಹುದು?',
                type: 'mcq',
                options: [
                  { id: 'gpo1', text: 'ಕೇವಲ ಶ್ರೀಮಂತರು', isCorrect: false },
                  { id: 'gpo2', text: '೧೮ ವರ್ಷ ಮೇಲ್ಪಟ್ಟ ಊರಿನ ಎಲ್ಲಾ ಮತದಾರರು', isCorrect: true }
                ],
                explanation: '೧೮ ವರ್ಷ ತುಂಬಿದ ಗ್ರಾಮದ ಪ್ರತಿಯೊಬ್ಬ ವ್ಯಕ್ತಿಯೂ ಗ್ರಾಮ ಸಭೆಯ ಸದಸ್ಯ.'
              }
            ]
          }
        ]
      },
      te: {
        languageCode: 'te',
        title: 'మన గ్రామ పంచాయతీ - పాలన',
        summary: 'గ్రామ సభలో అందరూ కలిసి ఊరి సమస్యలను ఎలా పరిష్కరించుకుంటారో నేర్చుకోండి.',
        estimatedMinutes: 16,
        sections: [
          {
            id: 'sec-gp1',
            orderIndex: 0,
            sectionType: 'story',
            title: '1. గ్రామ సభ',
            content: '18 ఏళ్లు నిండిన ప్రతి ఒక్కరూ గ్రామ సభలో పాల్గొని తమ గ్రామాన్ని అభివృద్ధి చేసుకుంటారు.',
            illustratedSvg: 'panchayat-tree'
          },
          {
            id: 'sec-gp2',
            orderIndex: 1,
            sectionType: 'quiz',
            title: '2. క్విజ్',
            content: 'సరైన సమాధానం ఎంచుకోండి!',
            questions: [
              {
                id: 'gpq1-te',
                text: 'గ్రామ సభలో ఎవరు పాల్గొనవచ్చు?',
                type: 'mcq',
                options: [
                  { id: 'gpo1', text: '18 సంవత్సరాలు నిండిన గ్రామస్తులందరూ', isCorrect: true },
                  { id: 'gpo2', text: 'కొంతమంది మాత్రమే', isCorrect: false }
                ],
                explanation: '18 ఏళ్లు నిండిన అందరూ సభ్యులే.'
              }
            ]
          }
        ]
      },
      ta: {
        languageCode: 'ta',
        title: 'நமது கிராம ஊராட்சி மன்றம்',
        summary: 'கிராம சபை மூலம் மக்கள் எவ்வாறு கிராமத்தின் தேவைகளை நிறைவேற்றுகின்றனர் என அறிவோம்.',
        estimatedMinutes: 16,
        sections: [
          {
            id: 'sec-gp1',
            orderIndex: 0,
            sectionType: 'story',
            title: '1. கிராம சபை கூட்டம்',
            content: '18 வயது பூர்த்தியான அனைத்து கிராம மக்களும் கிராம சபையில் பங்கேற்று முடிவெடுக்கலாம்.',
            illustratedSvg: 'panchayat-tree'
          },
          {
            id: 'sec-gp2',
            orderIndex: 1,
            sectionType: 'quiz',
            title: '2. வினாடி வினா',
            content: 'விடையளியுங்கள்!',
            questions: [
              {
                id: 'gpq1-ta',
                text: 'கிராம சபையில் யார் பங்கேற்கலாம்?',
                type: 'mcq',
                options: [
                  { id: 'gpo1', text: '18 வயது நிரம்பிய அனைத்து கிராம மக்களும்', isCorrect: true },
                  { id: 'gpo2', text: 'அதிகாரிகள் மட்டும்', isCorrect: false }
                ],
                explanation: '18 வயது நிரம்பிய அனைவரும் கிராம சபை உறுப்பினர்கள்.'
              }
            ]
          }
        ]
      },
      ml: {
        languageCode: 'ml',
        title: 'നമ്മുടെ ഗ്രാമപഞ്ചായത്ത്',
        summary: 'ഗ്രാമസഭയിലൂടെ ഗ്രാമവികസനം എങ്ങനെ സാധ്യമാക്കുന്നു എന്ന് മനസ്സിലാക്കാം.',
        estimatedMinutes: 16,
        sections: [
          {
            id: 'sec-gp1',
            orderIndex: 0,
            sectionType: 'story',
            title: '1. ഗ്രാമസഭ',
            content: '18 വയസ്സ് തികഞ്ഞ എല്ലാ വോട്ടർമാർക്കും ഗ്രാമസഭയിൽ പങ്കെടുത്ത് അഭിപ്രായം പറയാം.',
            illustratedSvg: 'panchayat-tree'
          },
          {
            id: 'sec-gp2',
            orderIndex: 1,
            sectionType: 'quiz',
            title: '2. ക്വിസ്',
            content: 'ശരിയായ ഉത്തരം പറയൂ!',
            questions: [
              {
                id: 'gpq1-ml',
                text: 'ഗ്രാമസഭയിൽ ആർക്കൊക്കെ പങ്കെടുക്കാം?',
                type: 'mcq',
                options: [
                  { id: 'gpo1', text: '18 വയസ്സുള്ള എല്ലാ വോട്ടർമാർക്കും', isCorrect: true },
                  { id: 'gpo2', text: 'പ്രത്യേകം ആളുകൾക്ക് മാത്രം', isCorrect: false }
                ],
                explanation: '18 വയസ്സുള്ള എല്ലാ വോട്ടർമാരും ഗ്രാമസഭ അംഗങ്ങളാണ്.'
              }
            ]
          }
        ]
      },
      mr: {
        languageCode: 'mr',
        title: 'आपली ग्रामपंचायत: गावचा कारभार',
        summary: 'ग्रामसभेच्या माध्यमातून गावाचा विकास कसा होतो ते समजून घ्या.',
        estimatedMinutes: 16,
        sections: [
          {
            id: 'sec-gp1',
            orderIndex: 0,
            sectionType: 'story',
            title: '१. ग्रामसभा',
            content: '१८ वर्षे पूर्ण असलेले सर्व नागरिक ग्रामसभेत सहभागी होऊन गावाच्या समस्या सोडवतात.',
            illustratedSvg: 'panchayat-tree'
          },
          {
            id: 'sec-gp2',
            orderIndex: 1,
            sectionType: 'quiz',
            title: '२. प्रश्नमंजुषा',
            content: 'योग्य पर्याय निवडा!',
            questions: [
              {
                id: 'gpq1-mr',
                text: 'ग्रामसभेत कोण भाग घेऊ शकते?',
                type: 'mcq',
                options: [
                  { id: 'gpo1', text: '१८ वर्षे पूर्ण असलेले सर्व गावकरी', isCorrect: true },
                  { id: 'gpo2', text: 'फक्त अधिकारी', isCorrect: false }
                ],
                explanation: '१८ वर्षे पूर्ण असलेला प्रत्येक नागरिक ग्रामसभेचा सदस्य असतो.'
              }
            ]
          }
        ]
      },
      bn: {
        languageCode: 'bn',
        title: 'আমাদের গ্রাম পঞ্চায়েত ও স্বশাসন',
        summary: 'গ্রামসভার মাধ্যমে গ্রামের মানুষ কীভাবে একসাথে রাস্তা, জল ও স্কুলের উন্নয়ন করে তা জানুন।',
        estimatedMinutes: 16,
        sections: [
          {
            id: 'sec-gp1',
            orderIndex: 0,
            sectionType: 'story',
            title: '১. গ্রামসভা',
            content: '১৮ বছর বা তার বেশি বয়সের সকল নাগরিক গ্রামসভায় অংশ নিয়ে গ্রামের সমস্যার সমাধান করেন।',
            illustratedSvg: 'panchayat-tree'
          },
          {
            id: 'sec-gp2',
            orderIndex: 1,
            sectionType: 'quiz',
            title: '২. কুইজ',
            content: 'সঠিক উত্তর দিন!',
            questions: [
              {
                id: 'gpq1-bn',
                text: 'গ্রামসভায় কারা অংশ নিতে পারেন?',
                type: 'mcq',
                options: [
                  { id: 'gpo1', text: '১৮ বছর বা তার বেশি বয়সের সব ভোটার', isCorrect: true },
                  { id: 'gpo2', text: 'শুধু সরকারি অফিসাররা', isCorrect: false }
                ],
                explanation: '১৮ বছরের ঊর্ধ্বে প্রতিটি নাগরিক গ্রামসভার সদস্য।'
              }
            ]
          }
        ]
      }
    }
  },

  // LESSON 6: Class 7 - Science - Light, Shadows, and Solar Eclipses
  {
    id: 'lesson-sci-c7-06',
    classNumber: 7,
    subjectCode: 'sci',
    slug: 'light-shadows-and-eclipses',
    difficultyLevel: 'advanced',
    status: 'published',
    authorName: 'Prof. Anupama Sen',
    reviewerName: 'State SCERT Review Team',
    version: 1,
    updatedAt: '2026-10-22T08:00:00Z',
    translations: {
      en: {
        languageCode: 'en',
        title: 'Light, Shadows & Cosmic Dances',
        summary: 'Understand rectilinear propagation of light, how shadows form during school playtime, and what creates solar and lunar eclipses.',
        estimatedMinutes: 18,
        sections: [
          {
            id: 'sec-ls1',
            orderIndex: 0,
            sectionType: 'story',
            title: '1. Why Does Your Shadow Follow You?',
            content: 'Light travels in straight lines! When an opaque body blocks this straight path, a dark region called a shadow appears behind it.',
            audioNarrationText: 'Light always travels in straight lines. When blocked by an object, a shadow is formed.'
          },
          {
            id: 'sec-ls2',
            orderIndex: 1,
            sectionType: 'illustrated_card',
            title: '2. Pinhole Camera & Eclipses',
            content: 'During a Solar Eclipse, the Moon passes directly between the Sun and the Earth, casting its shadow upon our village!',
            illustratedSvg: 'eclipse-diagram'
          },
          {
            id: 'sec-ls3',
            orderIndex: 2,
            sectionType: 'quiz',
            title: '3. Optics Master Quiz',
            content: 'Test your understanding of light and shadow!',
            questions: [
              {
                id: 'lsq1',
                text: 'What property of light explains the formation of sharp shadows?',
                type: 'mcq',
                options: [
                  { id: 'lso1', text: 'Light bends around any corner easily', isCorrect: false },
                  { id: 'lso2', text: 'Light travels in straight lines (Rectilinear propagation)', isCorrect: true },
                  { id: 'lso3', text: 'Light reflects only on water', isCorrect: false }
                ],
                explanation: 'Rectilinear propagation means light travels in straight lines, creating shadows when blocked.'
              }
            ]
          }
        ]
      },
      hi: {
        languageCode: 'hi',
        title: 'प्रकाश, छाया और ग्रहण',
        summary: 'प्रकाश के सीधी रेखा में चलने, छाया बनने और सूर्य ग्रहण के वैज्ञानिक कारणों को समझें।',
        estimatedMinutes: 18,
        sections: [
          {
            id: 'sec-ls1',
            orderIndex: 0,
            sectionType: 'story',
            title: '१. प्रकाश हमेशा सीधी रेखा में चलता है',
            content: 'प्रकाश की सीधी किरण के रास्ते में जब कोई अपारदर्शी वस्तु आती है, तो पीछे छाया बनती है।',
            audioNarrationText: 'प्रकाश सीधी रेखा में गमन करता है।'
          },
          {
            id: 'sec-ls2',
            orderIndex: 1,
            sectionType: 'quiz',
            title: '२. प्रकाश क्विज़',
            content: 'सही उत्तर बताएं!',
            questions: [
              {
                id: 'lsq1-hi',
                text: 'छाया बनने का मुख्य कारण क्या है?',
                type: 'mcq',
                options: [
                  { id: 'lso1', text: 'प्रकाश का सीधी रेखा में चलना', isCorrect: true },
                  { id: 'lso2', text: 'प्रकाश का मुड़ना', isCorrect: false }
                ],
                explanation: 'प्रकाश ऋजुरेखीय (सीधी रेखा) गति करता है।'
              }
            ]
          }
        ]
      },
      kn: {
        languageCode: 'kn',
        title: 'ಬೆಳಕು, ನೆರಳು ಮತ್ತು ಗ್ರಹಣಗಳು',
        summary: 'ಬೆಳಕಿನ ಸರಳರೇಖಾ ಚಲನೆ, ನೆರಳು ಉಂಟಾಗುವುದು ಮತ್ತು ಗ್ರಹಣಗಳ ವೈಜ್ಞಾನಿಕ ಹಿನ್ನೆಲೆ ತಿಳಿಯಿರಿ.',
        estimatedMinutes: 18,
        sections: [
          {
            id: 'sec-ls1',
            orderIndex: 0,
            sectionType: 'story',
            title: '೧. ಬೆಳಕು ಸರಳ ರೇಖೆಯಲ್ಲಿ ಚಲಿಸುತ್ತದೆ',
            content: 'ಬೆಳಕಿನ ಹಾದಿಗೆ ಅಪಾರದರ್ಶಕ ವಸ್ತು ಅಡ್ಡಬಂದಾಗ ನೆರಳು ಉಂಟಾಗುತ್ತದೆ.',
            audioNarrationText: 'ಬೆಳಕು ಯಾವಾಗಲೂ ಸರಳರೇಖೆಯಲ್ಲಿ ಚಲಿಸುತ್ತದೆ.'
          },
          {
            id: 'sec-ls2',
            orderIndex: 1,
            sectionType: 'quiz',
            title: '೨. ವಿಜ್ಞಾನ ರಸಪ್ರಶ್ನೆ',
            content: 'ಉತ್ತರಿಸಿ!',
            questions: [
              {
                id: 'lsq1-kn',
                text: 'ನೆರಳು ಉಂಟಾಗಲು ಬೆಳಕಿನ ಯಾವ ಗುಣ ಕಾರಣ?',
                type: 'mcq',
                options: [
                  { id: 'lso1', text: 'ಬೆಳಕಿನ ಸರಳರೇಖಾ ಚಲನೆ', isCorrect: true },
                  { id: 'lso2', text: 'ಬೆಳಕು ಬಾಗುವುದು', isCorrect: false }
                ],
                explanation: 'ಬೆಳಕು ನೇರವಾಗಿ ಚಲಿಸುವುದರಿಂದ ಅಡ್ಡಬಂದ ವಸ್ತುವಿನ ಹಿಂದೆ ನೆರಳು ಬೀಳುತ್ತದೆ.'
              }
            ]
          }
        ]
      },
      te: {
        languageCode: 'te',
        title: 'కాంతి, నీడలు మరియు గ్రహణాలు',
        summary: 'కాంతి రుజు మార్గంలో ప్రయాణించడం, నీడలు ఏర్పడటం మరియు గ్రహణాల గురించి తెలుసుకోండి.',
        estimatedMinutes: 18,
        sections: [
          {
            id: 'sec-ls1',
            orderIndex: 0,
            sectionType: 'story',
            title: '1. కాంతి రుజు మార్గం',
            content: 'కాంతి ఎల్లప్పుడూ సరళ రేఖలో ప్రయాణిస్తుంది. వస్తువు అడ్డొచ్చినప్పుడు నీడ ఏర్పడుతుంది.',
            illustratedSvg: 'eclipse-diagram'
          },
          {
            id: 'sec-ls2',
            orderIndex: 1,
            sectionType: 'quiz',
            title: '2. క్విజ్',
            content: 'సరైన సమాధానం ఎంచుకోండి!',
            questions: [
              {
                id: 'lsq1-te',
                text: 'నీడలు ఏర్పడటానికి కాంతి యొక్క ఏ లక్షణం కారణం?',
                type: 'mcq',
                options: [
                  { id: 'lso1', text: 'సరళ రేఖా ప్రయాణం', isCorrect: true },
                  { id: 'lso2', text: 'వంపు తిరగడం', isCorrect: false }
                ],
                explanation: 'కాంతి సరళరేఖలో ప్రయాణించడం వల్ల నీడ ఏర్పడుతుంది.'
              }
            ]
          }
        ]
      },
      ta: {
        languageCode: 'ta',
        title: 'ஒளி, நிழல்கள் மற்றும் கிரகணங்கள்',
        summary: 'ஒளியின் நேர்கோட்டுப் பயணம் மற்றும் நிழல் உருவாகும் அறிவியலைக் கற்போம்.',
        estimatedMinutes: 18,
        sections: [
          {
            id: 'sec-ls1',
            orderIndex: 0,
            sectionType: 'story',
            title: '1. ஒளியின் நேர்கோட்டுப் பண்பு',
            content: 'ஒளி எப்போதும் நேர்கோட்டில் செல்லும். ஒளி புகாத பொருள் குறுக்கே வரும்போது நிழல் தோன்றுகிறது.',
            illustratedSvg: 'eclipse-diagram'
          },
          {
            id: 'sec-ls2',
            orderIndex: 1,
            sectionType: 'quiz',
            title: '2. வினாடி வினா',
            content: 'சரியான விடை எது?',
            questions: [
              {
                id: 'lsq1-ta',
                text: 'நிழல் உருவாகக் காரணம் என்ன?',
                type: 'mcq',
                options: [
                  { id: 'lso1', text: 'ஒளி நேர்கோட்டில் செல்வது', isCorrect: true },
                  { id: 'lso2', text: 'ஒளி வளைந்து செல்வது', isCorrect: false }
                ],
                explanation: 'ஒளி நேர்கோட்டில் செல்வதால் நிழல் உண்டாகிறது.'
              }
            ]
          }
        ]
      },
      ml: {
        languageCode: 'ml',
        title: 'പ്രകാശം, നിഴലുകൾ, ഗ്രഹണങ്ങൾ',
        summary: 'പ്രകാശത്തിന്റെ നേർരേഖാ സഞ്ചാരവും നിഴലുകളും മനസ്സിലാക്കാം.',
        estimatedMinutes: 18,
        sections: [
          {
            id: 'sec-ls1',
            orderIndex: 0,
            sectionType: 'story',
            title: '1. പ്രകാശത്തിന്റെ സഞ്ചാരം',
            content: 'പ്രകാശം എപ്പോഴും നേർരേഖയിലാണ് സഞ്ചരിക്കുന്നത്. അതുകൊണ്ട് തടസ്സമുണ്ടാകുമ്പോൾ നിഴൽ ഉണ്ടാകുന്നു.',
            illustratedSvg: 'eclipse-diagram'
          },
          {
            id: 'sec-ls2',
            orderIndex: 1,
            sectionType: 'quiz',
            title: '2. ക്വിസ്',
            content: 'ഉത്തരം കണ്ടെത്തൂ!',
            questions: [
              {
                id: 'lsq1-ml',
                text: 'നിഴൽ ഉണ്ടാകാൻ കാരണം എന്താണ്?',
                type: 'mcq',
                options: [
                  { id: 'lso1', text: 'പ്രകാശത്തിന്റെ നേർരേഖാ സഞ്ചാരം', isCorrect: true },
                  { id: 'lso2', text: 'പ്രകാശത്തിന്റെ വളവ്', isCorrect: false }
                ],
                explanation: 'പ്രകാശം നേർരേഖയിൽ സഞ്ചരിക്കുന്നതിനാലാണ് നിഴലുണ്ടാകുന്നത്.'
              }
            ]
          }
        ]
      },
      mr: {
        languageCode: 'mr',
        title: 'प्रकाश, सावली आणि ग्रहणे',
        summary: 'प्रकाशाचे सरळ रेषेत जाणे आणि सावली निर्मितीचा अभ्यास करा.',
        estimatedMinutes: 18,
        sections: [
          {
            id: 'sec-ls1',
            orderIndex: 0,
            sectionType: 'story',
            title: '१. प्रकाशाचा मार्ग',
            content: 'प्रकाश नेहमी सरळ रेषेत प्रवास करतो. त्यामुळे अपारदर्शक वस्तू आडवी आल्यास सावली पडते.',
            illustratedSvg: 'eclipse-diagram'
          },
          {
            id: 'sec-ls2',
            orderIndex: 1,
            sectionType: 'quiz',
            title: '२. प्रश्नमंजुषा',
            content: 'उत्तर निवडा!',
            questions: [
              {
                id: 'lsq1-mr',
                text: 'सावली कशामुळे पडते?',
                type: 'mcq',
                options: [
                  { id: 'lso1', text: 'प्रकाश सरळ रेषेत जात असल्याने', isCorrect: true },
                  { id: 'lso2', text: 'प्रकाश वाकडा जात असल्याने', isCorrect: false }
                ],
                explanation: 'प्रकाशाच्या रेषीय प्रसारामुळे सावली तयार होते.'
              }
            ]
          }
        ]
      },
      bn: {
        languageCode: 'bn',
        title: 'আলো, ছায়া ও গ্রহণ বিজ্ঞান',
        summary: 'আলোর সরলরৈখিক গতি ও ছায়া সৃষ্টির কারণ জানুন।',
        estimatedMinutes: 18,
        sections: [
          {
            id: 'sec-ls1',
            orderIndex: 0,
            sectionType: 'story',
            title: '১. আলোর সরলরৈখিক গতি',
            content: 'আলো সবসময় সরলরেখায় চলাচল করে। আলোকের পথে অস্বচ্ছ বস্তু এলে তার পেছনে ছায়া তৈরি হয়।',
            illustratedSvg: 'eclipse-diagram'
          },
          {
            id: 'sec-ls2',
            orderIndex: 1,
            sectionType: 'quiz',
            title: '২. কুইজ',
            content: 'সঠিক উত্তর দিন!',
            questions: [
              {
                id: 'lsq1-bn',
                text: 'ছায়া সৃষ্টির কারণ কী?',
                type: 'mcq',
                options: [
                  { id: 'lso1', text: 'আলোর সরলরেখায় গমন', isCorrect: true },
                  { id: 'lso2', text: 'আলোর বাঁক নেওয়া', isCorrect: false }
                ],
                explanation: 'আলো সরলরেখায় চলার কারণে ছায়া গঠিত হয়।'
              }
            ]
          }
        ]
      }
    }
  },

  // LESSON 7: Class 2 - Mathematics - Shapes & Rangoli Patterns Around Our Village
  {
    id: 'lesson-math-c2-07',
    classNumber: 2,
    subjectCode: 'math',
    slug: 'shapes-and-rangoli-patterns',
    difficultyLevel: 'beginner',
    status: 'published',
    authorName: 'Saraswathi Teacher',
    reviewerName: 'State SCERT Review Team',
    version: 1,
    updatedAt: '2026-10-22T10:00:00Z',
    translations: {
      en: {
        languageCode: 'en',
        title: 'Shapes & Rangoli Patterns in Our Village',
        summary: 'Spot circles, triangles, rectangles, and repeating patterns in morning Rangoli and village pottery.',
        estimatedMinutes: 12,
        sections: [
          {
            id: 'sec-sh1',
            orderIndex: 0,
            sectionType: 'story',
            title: '1. Morning Rangoli at the Doorstep',
            content: 'Every morning, mothers and elders draw beautiful Rangoli (Kolam) in front of village homes using rice flour. Can you see how circles, triangles, and lines dance together?',
            audioNarrationText: 'Every morning, beautiful Rangoli patterns are drawn using simple circles, triangles, and squares.'
          },
          {
            id: 'sec-sh2',
            orderIndex: 1,
            sectionType: 'illustrated_card',
            title: '2. Meeting the Shapes',
            content: '1. **Circle (ವೃತ್ತ)**: Round with no corners, like a bullock cart wheel or chapati.\n2. **Triangle (ತ್ರಿಕೋನ)**: Has 3 straight sides and 3 corners, like a samosa.\n3. **Square (ಚೌಕ)**: Has 4 equal sides and 4 corners, like a carrom board.',
            audioNarrationText: 'Circles have no corners. Triangles have three corners. Squares have four equal sides.'
          },
          {
            id: 'sec-sh3',
            orderIndex: 2,
            sectionType: 'quiz',
            title: '3. Village Shapes Quiz',
            content: 'Select the right shape!',
            questions: [
              {
                id: 'shq1',
                text: 'How many corners does a triangle have? 🔺',
                type: 'mcq',
                options: [
                  { id: 'sho1', text: '3 corners', isCorrect: true },
                  { id: 'sho2', text: '4 corners', isCorrect: false },
                  { id: 'sho3', text: '0 corners', isCorrect: false }
                ],
                hint: 'Count the sharp points of the triangle.',
                explanation: 'A triangle always has 3 sides and 3 corners.'
              },
              {
                id: 'shq2',
                text: 'Which of these village objects is shaped like a circle? ⭕',
                type: 'mcq',
                options: [
                  { id: 'sho4', text: 'A bullock cart wooden wheel', isCorrect: true },
                  { id: 'sho5', text: 'A school textbook', isCorrect: false },
                  { id: 'sho6', text: 'A chalkboard', isCorrect: false }
                ],
                hint: 'It rolls smoothly on the village road.',
                explanation: 'A wheel is round like a circle so it can roll easily.'
              }
            ]
          }
        ]
      },
      hi: {
        languageCode: 'hi',
        title: 'गाँव में आकृतियाँ और रंगोली',
        summary: 'रंगोली, बैलगाड़ी के पहिए और समोसे में वृत्त, त्रिभुज और वर्ग की पहचान करें।',
        estimatedMinutes: 12,
        sections: [
          {
            id: 'sec-sh1',
            orderIndex: 0,
            sectionType: 'story',
            title: '१. सुबह की रंगोली',
            content: 'हर सुबह घरों के आगे चावल के आटे से सुंदर रंगोली बनाई जाती है जिसमें सुंदर आकृतियाँ छिपी होती हैं।',
            audioNarrationText: 'रंगोली में गोल वृत्त, त्रिभुज और चौकोर वर्ग होते हैं।'
          },
          {
            id: 'sec-sh2',
            orderIndex: 1,
            sectionType: 'quiz',
            title: '२. आकृति क्विज़',
            content: 'सही उत्तर बताएं!',
            questions: [
              {
                id: 'shq1-hi',
                text: 'एक त्रिभुज (Triangle) में कितने कोने होते हैं? 🔺',
                type: 'mcq',
                options: [
                  { id: 'sho1', text: '३ कोने', isCorrect: true },
                  { id: 'sho2', text: '४ कोने', isCorrect: false }
                ],
                explanation: 'त्रिभुज में ३ भुजाएं और ३ कोने होते हैं।'
              }
            ]
          }
        ]
      },
      kn: {
        languageCode: 'kn',
        title: 'ನಮ್ಮ ಹಳ್ಳಿಯ ಆಕಾರಗಳು ಮತ್ತು ರಂಗೋಲಿ',
        summary: 'ಮನೆಯಂಗಳದ ರಂಗೋಲಿ, ಎತ್ತಿನ ಬಂಡಿ ಚಕ್ರದಲ್ಲಿ ವೃತ್ತ, ತ್ರಿಕೋನ ಮತ್ತು ಚೌಕಗಳನ್ನು ಗುರುತಿಸಿ.',
        estimatedMinutes: 12,
        sections: [
          {
            id: 'sec-sh1',
            orderIndex: 0,
            sectionType: 'story',
            title: '೧. ಮುಂಜಾನೆಯ ರಂಗೋಲಿ',
            content: 'ಪ್ರತಿದಿನ ಬೆಳಿಗ್ಗೆ ಅಂಗಳದಲ್ಲಿ ರಂಗೋಲಿ ಹಾಕುವಾಗ ವೃತ್ತ, ತ್ರಿಕೋನ ಮತ್ತು ಚೌಕಗಳು ಸುಂದರವಾಗಿ ಮೂಡಿಬರುತ್ತವೆ.',
            audioNarrationText: 'ರಂಗೋಲಿಯಲ್ಲಿ ವೃತ್ತ, ತ್ರಿಕೋನ ಮತ್ತು ಚೌಕಗಳು ಇರುತ್ತವೆ.'
          },
          {
            id: 'sec-sh2',
            orderIndex: 1,
            sectionType: 'quiz',
            title: '೨. ಆಕಾರಗಳ ರಸಪ್ರಶ್ನೆ',
            content: 'ಸರಿಯಾದ ಉತ್ತರ ಆರಿಸಿ!',
            questions: [
              {
                id: 'shq1-kn',
                text: 'ತ್ರಿಕೋನಕ್ಕೆ ಎಷ್ಟು ಮೂಲೆಗಳಿರುತ್ತವೆ? 🔺',
                type: 'mcq',
                options: [
                  { id: 'sho1', text: '೩ ಮೂಲೆಗಳು', isCorrect: true },
                  { id: 'sho2', text: '೪ ಮೂಲೆಗಳು', isCorrect: false }
                ],
                explanation: 'ತ್ರಿಕೋನಕ್ಕೆ ೩ ಬಾಹುಗಳು ಮತ್ತು ೩ ಮೂಲೆಗಳು ಇರುತ್ತವೆ.'
              }
            ]
          }
        ]
      },
      te: {
        languageCode: 'te',
        title: 'మన పల్లెలో ఆకారాలు - ముగ్గులు',
        summary: 'ముగ్గులు, ఎద్దుల బండి చక్రాలలో వృత్తం, త్రిభుజం, చతురస్రాలను గుర్తించండి.',
        estimatedMinutes: 12,
        sections: [
          {
            id: 'sec-sh1',
            orderIndex: 0,
            sectionType: 'story',
            title: '1. అందమైన ముగ్గులు',
            content: 'ముగ్గులలో వృత్తాలు, త్రిభుజాలు ఎంతో అందంగా ఉంటాయి.',
            audioNarrationText: 'ముగ్గులలో దాగి ఉన్న ఆకారాలను తెలుసుకుందాం.'
          },
          {
            id: 'sec-sh2',
            orderIndex: 1,
            sectionType: 'quiz',
            title: '2. క్విజ్',
            content: 'సరైన ఆకారాన్ని ఎంచుకోండి!',
            questions: [
              {
                id: 'shq1-te',
                text: 'త్రిభుజానికి ఎన్ని మూలలు ఉంటాయి? 🔺',
                type: 'mcq',
                options: [
                  { id: 'sho1', text: '3 మూలలు', isCorrect: true },
                  { id: 'sho2', text: '4 మూలలు', isCorrect: false }
                ],
                explanation: 'త్రిభుజానికి 3 మూలలు ఉంటాయి.'
              }
            ]
          }
        ]
      },
      ta: {
        languageCode: 'ta',
        title: 'வடிவங்களும் கோலங்களும்',
        summary: 'கோலங்கள், வண்டிச் சக்கரத்தில் வட்டம், முக்கோணம், சதுரத்தைக் கற்போம்.',
        estimatedMinutes: 12,
        sections: [
          {
            id: 'sec-sh1',
            orderIndex: 0,
            sectionType: 'story',
            title: '1. வீட்டு வாசல் கோலம்',
            content: 'அழகிய கோலங்களில் வட்டம், முக்கோணம் போன்ற வடிவங்கள் அமைந்துள்ளன.',
            audioNarrationText: 'கோலங்களில் வடிவங்களைக் காண்போம்.'
          },
          {
            id: 'sec-sh2',
            orderIndex: 1,
            sectionType: 'quiz',
            title: '2. வினாடி வினா',
            content: 'விடையளியுங்கள்!',
            questions: [
              {
                id: 'shq1-ta',
                text: 'முக்கோணத்திற்கு எத்தனை மூலைகள் உள்ளன? 🔺',
                type: 'mcq',
                options: [
                  { id: 'sho1', text: '3 மூலைகள்', isCorrect: true },
                  { id: 'sho2', text: '4 மூலைகள்', isCorrect: false }
                ],
                explanation: 'முக்கோணத்திற்கு 3 மூலைகள் உள்ளன.'
              }
            ]
          }
        ]
      },
      ml: {
        languageCode: 'ml',
        title: 'രൂപങ്ങളും കളങ്ങളും',
        summary: 'വട്ടവും ത്രികോണവും ചതുരവും ഗ്രാമജീവിതത്തിൽ കണ്ടെത്താം.',
        estimatedMinutes: 12,
        sections: [
          {
            id: 'sec-sh1',
            orderIndex: 0,
            sectionType: 'story',
            title: '1. മനോഹര രൂപങ്ങൾ',
            content: 'വണ്ടിച്ചക്രത്തിലും കളങ്ങളിലും വിവിധ രൂപങ്ങൾ നമുക്ക് കാണാം.',
            audioNarrationText: 'ത്രികോണത്തിനും വട്ടത്തിനും ഉള്ള പ്രത്യേകതകൾ അറിയാം.'
          },
          {
            id: 'sec-sh2',
            orderIndex: 1,
            sectionType: 'quiz',
            title: '2. ക്വിസ്',
            content: 'ഉത്തരം കണ്ടെത്തൂ!',
            questions: [
              {
                id: 'shq1-ml',
                text: 'ത്രികോണത്തിന് എത്ര മൂലകളുണ്ട്? 🔺',
                type: 'mcq',
                options: [
                  { id: 'sho1', text: '3 മൂലകൾ', isCorrect: true },
                  { id: 'sho2', text: '4 മൂലകൾ', isCorrect: false }
                ],
                explanation: 'ത്രികോണത്തിന് 3 മൂലകളുണ്ട്.'
              }
            ]
          }
        ]
      },
      mr: {
        languageCode: 'mr',
        title: 'रांगोळी आणि भौमितिक आकार',
        summary: 'रांगोळी आणि बैलगाडीच्या चाकात गोल, त्रिकोण आणि चौकोन ओळखा.',
        estimatedMinutes: 12,
        sections: [
          {
            id: 'sec-sh1',
            orderIndex: 0,
            sectionType: 'story',
            title: '१. अंगणातील रांगोळी',
            content: 'रांगोळीमध्ये अनेक भौमितिक आकार दडलेले असतात.',
            audioNarrationText: 'रांगोळीतील आकार ओळखूया.'
          },
          {
            id: 'sec-sh2',
            orderIndex: 1,
            sectionType: 'quiz',
            title: '२. प्रश्नमंजुषा',
            content: 'योग्य उत्तर निवडा!',
            questions: [
              {
                id: 'shq1-mr',
                text: 'त्रिकोणाला किती कोपरे असतात? 🔺',
                type: 'mcq',
                options: [
                  { id: 'sho1', text: '३ कोपरे', isCorrect: true },
                  { id: 'sho2', text: '४ कोपरे', isCorrect: false }
                ],
                explanation: 'त्रिकोणाला ३ कोपरे असतात.'
              }
            ]
          }
        ]
      },
      bn: {
        languageCode: 'bn',
        title: 'গ্রামের আলপনা ও জ্যামিতিক আকার',
        summary: 'আলপনা ও গরুর গাড়ির চাকায় গোল, ত্রিভুজ ও চতুর্ভুজ চিনে নিন।',
        estimatedMinutes: 12,
        sections: [
          {
            id: 'sec-sh1',
            orderIndex: 0,
            sectionType: 'story',
            title: '১. সকালের আলপনা',
            content: 'আলপনায় বৃত্ত ও ত্রিভুজের অপূর্ব মেলবন্ধন দেখা যায়।',
            audioNarrationText: 'আলপনার সুন্দর আকারের সাথে পরিচয় ঘটুক।'
          },
          {
            id: 'sec-sh2',
            orderIndex: 1,
            sectionType: 'quiz',
            title: '২. কুইজ',
            content: 'সঠিক উত্তর দিন!',
            questions: [
              {
                id: 'shq1-bn',
                text: 'একটি ত্রিভুজে কয়টি কোণা থাকে? 🔺',
                type: 'mcq',
                options: [
                  { id: 'sho1', text: '৩টি কোণা', isCorrect: true },
                  { id: 'sho2', text: '৪টি কোণা', isCorrect: false }
                ],
                explanation: 'ত্রিভুজে ৩টি বাহু ও ৩টি কোণা থাকে।'
              }
            ]
          }
        ]
      }
    }
  },

  // LESSON 8: Class 8 - Science - Microorganisms: Friends & Foes in Agriculture
  {
    id: 'lesson-sci-c8-08',
    classNumber: 8,
    subjectCode: 'sci',
    slug: 'microorganisms-friends-and-foes',
    difficultyLevel: 'advanced',
    status: 'published',
    authorName: 'Dr. Srinivas Rao',
    reviewerName: 'State SCERT Review Team',
    version: 1,
    updatedAt: '2026-10-22T14:00:00Z',
    translations: {
      en: {
        languageCode: 'en',
        title: 'Microorganisms: Tiny Friends & Foes in Agriculture',
        summary: 'Explore how microscopic organisms turn milk into curd, ferment idli batter, and fix nitrogen in village crop fields.',
        estimatedMinutes: 16,
        sections: [
          {
            id: 'sec-m1',
            orderIndex: 0,
            sectionType: 'story',
            title: '1. The Invisible World Around Us',
            content: 'Billions of tiny living beings exist all around our village — in soil, water, air, and even our food. They are so small they can only be seen through a microscope, which is why we call them Microorganisms.',
            audioNarrationText: 'Microorganisms are tiny living beings that can only be seen through a microscope.'
          },
          {
            id: 'sec-m2',
            orderIndex: 1,
            sectionType: 'illustrated_card',
            title: '2. Friendly Microbes in Daily Village Life',
            content: '1. **Lactobacillus**: A helpful bacterium that converts warm milk into thick, delicious curd.\n2. **Yeast (Fungus)**: Ferments idli and dosa batter, making them fluffy and nutritious.\n3. **Rhizobium**: Lives in the root nodules of leguminous plants (like gram and groundnut) and fixes atmospheric nitrogen to naturally fertilize village soil!',
            audioNarrationText: 'Lactobacillus makes curd, yeast ferments idli batter, and Rhizobium enriches farm soil with nitrogen.'
          },
          {
            id: 'sec-m3',
            orderIndex: 2,
            sectionType: 'quiz',
            title: '3. Microbiology Mastery Quiz',
            content: 'Test your understanding of friendly and harmful microbes!',
            questions: [
              {
                id: 'mq1',
                text: 'Which bacterium is responsible for converting milk into curd?',
                type: 'mcq',
                options: [
                  { id: 'mo1', text: 'Lactobacillus', isCorrect: true },
                  { id: 'mo2', text: 'Rhizobium', isCorrect: false },
                  { id: 'mo3', text: 'Amoeba', isCorrect: false }
                ],
                hint: 'It promotes lactic acid fermentation.',
                explanation: 'Lactobacillus bacteria multiply in milk and convert lactose into lactic acid, forming curd.'
              },
              {
                id: 'mq2',
                text: 'How does Rhizobium bacteria help village farmers?',
                type: 'mcq',
                options: [
                  { id: 'mo4', text: 'It fixes atmospheric nitrogen in the soil naturally', isCorrect: true },
                  { id: 'mo5', text: 'It keeps rainwater from evaporating', isCorrect: false },
                  { id: 'mo6', text: 'It acts as scarecrow for birds', isCorrect: false }
                ],
                hint: 'Plants need nitrogen nutrients to grow healthy grains.',
                explanation: 'Rhizobium lives in root nodules and fixes atmospheric nitrogen into nitrates, enriching soil fertility.'
              }
            ]
          }
        ]
      },
      hi: {
        languageCode: 'hi',
        title: 'सूक्ष्मजीव: मित्र और शत्रु',
        summary: 'जानिए कैसे लैक्टोबैसिलस दूध से दही बनाता है और राइजोबियम मिट्टी को उपजाऊ बनाता है।',
        estimatedMinutes: 16,
        sections: [
          {
            id: 'sec-m1',
            orderIndex: 0,
            sectionType: 'story',
            title: '१. अनदेखी दुनिया',
            content: 'हमारे आसपास मिट्टी और पानी में अरबों सूक्ष्मजीव रहते हैं जो बिना सूक्ष्मदर्शी के दिखाई नहीं देते।',
            audioNarrationText: 'सूक्ष्मजीव प्रकृति में बहुत महत्वपूर्ण भूमिका निभाते हैं।'
          },
          {
            id: 'sec-m2',
            orderIndex: 1,
            sectionType: 'quiz',
            title: '२. सूक्ष्मजीव क्विज़',
            content: 'सही उत्तर बताएं!',
            questions: [
              {
                id: 'mq1-hi',
                text: 'दूध को दही में बदलने वाला जीवाणु कौन सा है?',
                type: 'mcq',
                options: [
                  { id: 'mo1', text: 'लैक्टोबैसिलस (Lactobacillus)', isCorrect: true },
                  { id: 'mo2', text: 'अमीबा', isCorrect: false }
                ],
                explanation: 'लैक्टोबैसिलस जीवाणु दूध को दही में बदलता है।'
              }
            ]
          }
        ]
      },
      kn: {
        languageCode: 'kn',
        title: 'ಸೂಕ್ಷ್ಮಜೀವಿಗಳು: ಮಿತ್ರ ಮತ್ತು ಶತ್ರು',
        summary: 'ಹಾಲು ಮೊಸರಾಗಲು ಲ್ಯಾಕ್ಟೋಬ್ಯಾಸಿಲಸ್ ಮತ್ತು ಕೃಷಿ ಮಣ್ಣಿನ ಫಲವತ್ತತೆಗೆ ರೈಸೋಬಿಯಂ ಹೇಗೆ ನೆರವಾಗುತ್ತವೆ ಎಂದು ತಿಳಿಯಿರಿ.',
        estimatedMinutes: 16,
        sections: [
          {
            id: 'sec-m1',
            orderIndex: 0,
            sectionType: 'story',
            title: '೧. ಅದೃಶ್ಯ ಸೂಕ್ಷ್ಮ ಜಗತ್ತು',
            content: 'ಕಣ್ಣಿಗೆ ಕಾಣದ ಸೂಕ್ಷ್ಮಾಣುಜೀವಿಗಳು ನಮ್ಮ ಆಹಾರ, ಮಣ್ಣು ಮತ್ತು ಪರಿಸರದಲ್ಲಿ ಅದ್ಭುತ ಕಾರ್ಯಗಳನ್ನು ನಿರ್ವಹಿಸುತ್ತವೆ.',
            audioNarrationText: 'ಸೂಕ್ಷ್ಮಜೀವಿಗಳು ಕೃಷಿ ಮತ್ತು ದೈನಂದಿನ ಆಹಾರ ತಯಾರಿಕೆಯಲ್ಲಿ ನೆರವಾಗುತ್ತವೆ.'
          },
          {
            id: 'sec-m2',
            orderIndex: 1,
            sectionType: 'quiz',
            title: '೨. ಸೂಕ್ಷ್ಮಜೀವಿ ರಸಪ್ರಶ್ನೆ',
            content: 'ಸರಿಯಾದ ಉತ್ತರ ಆರಿಸಿ!',
            questions: [
              {
                id: 'mq1-kn',
                text: 'ಹಾಲನ್ನು ಮೊಸರನ್ನಾಗಿ ಪರಿವರ್ತಿಸುವ ಬ್ಯಾಕ್ಟೀರಿಯಾ ಯಾವುದು?',
                type: 'mcq',
                options: [
                  { id: 'mo1', text: 'ಲ್ಯಾಕ್ಟೋಬ್ಯಾಸಿಲಸ್ (Lactobacillus)', isCorrect: true },
                  { id: 'mo2', text: 'ಅಮೀಬಾ', isCorrect: false }
                ],
                explanation: 'ಲ್ಯಾಕ್ಟೋಬ್ಯಾಸಿಲಸ್ ಹಾಲಿನಲ್ಲಿ ಬೆಳೆದು ಮೊಸರಾಗುವಂತೆ ಮಾಡುತ್ತದೆ.'
              }
            ]
          }
        ]
      },
      te: {
        languageCode: 'te',
        title: 'సూక్ష్మజీవులు: మిత్రులు - శత్రువులు',
        summary: 'పాలు పెరుగుగా మారడం, నేల సారాన్ని పెంచడంలో బ్యాక్టీరియా ఎలా సహాయపడుతుందో తెలుసుకోండి.',
        estimatedMinutes: 16,
        sections: [
          {
            id: 'sec-m1',
            orderIndex: 0,
            sectionType: 'story',
            title: '1. సూక్ష్మ ప్రపంచం',
            content: 'కంటికి కనిపించని సూక్ష్మజీవులు పాలు పెరుగుగా మారడానికి సహాయపడతాయి.',
            audioNarrationText: 'సూక్ష్మజీవుల ప్రాముఖ్యతను తెలుసుకుందాం.'
          },
          {
            id: 'sec-m2',
            orderIndex: 1,
            sectionType: 'quiz',
            title: '2. క్విజ్',
            content: 'సరైన సమాధానం ఎంచుకోండి!',
            questions: [
              {
                id: 'mq1-te',
                text: 'పాలను పెరుగుగా మార్చే బ్యాక్టీరియా ఏది?',
                type: 'mcq',
                options: [
                  { id: 'mo1', text: 'లాక్టోబాసిల్లస్ (Lactobacillus)', isCorrect: true },
                  { id: 'mo2', text: 'అమీబా', isCorrect: false }
                ],
                explanation: 'లాక్టోబాసిల్లస్ పాలను పెరుగుగా మారుస్తుంది.'
              }
            ]
          }
        ]
      },
      ta: {
        languageCode: 'ta',
        title: 'நுண்ணுயிரிகள்: நண்பனும் எதிரியும்',
        summary: 'பால் தயிராக மாறுவதற்கும், நில வளம் பெருகுவதற்கும் நுண்ணுயிரிகள் எவ்வாறு உதவுகின்றன என அறிவோம்.',
        estimatedMinutes: 16,
        sections: [
          {
            id: 'sec-m1',
            orderIndex: 0,
            sectionType: 'story',
            title: '1. கண்ணுக்குத் தெரியாத உலகம்',
            content: 'நுண்ணுயிரிகள் விவசாயத்திற்கும் உணவிற்கும் பெரும் நன்மை புரிகின்றன.',
            audioNarrationText: 'நுண்ணுயிரிகளின் நன்மைகளைக் கற்போம்.'
          },
          {
            id: 'sec-m2',
            orderIndex: 1,
            sectionType: 'quiz',
            title: '2. வினாடி வினா',
            content: 'விடையளியுங்கள்!',
            questions: [
              {
                id: 'mq1-ta',
                text: 'பாலைத் தயிராக மாற்றும் பாக்டீரியா எது?',
                type: 'mcq',
                options: [
                  { id: 'mo1', text: 'லாக்டோபாக்டீரியா (Lactobacillus)', isCorrect: true },
                  { id: 'mo2', text: 'அமீபா', isCorrect: false }
                ],
                explanation: 'லாக்டோபாக்டீரியா பாலைத் தயிராக மாற்றுகிறது.'
              }
            ]
          }
        ]
      },
      ml: {
        languageCode: 'ml',
        title: 'സൂക്ഷ്മജീവികൾ: മിത്രങ്ങളും ശത്രുക്കളും',
        summary: 'പാൽ തൈരാകുന്നതിലും കൃഷിയിലും സൂക്ഷ്മജീവികളുടെ പങ്ക് മനസ്സിലാക്കാം.',
        estimatedMinutes: 16,
        sections: [
          {
            id: 'sec-m1',
            orderIndex: 0,
            sectionType: 'story',
            title: '1. സൂക്ഷ്മലോകം',
            content: 'മണ്ണിലും ഭക്ഷണത്തിലും സൂക്ഷ്മജീവികൾ നന്മയും തിന്മയും ചെയ്യുന്നു.',
            audioNarrationText: 'സൂക്ഷ്മജീവികളെക്കുറിച്ച് പഠിക്കാം.'
          },
          {
            id: 'sec-m2',
            orderIndex: 1,
            sectionType: 'quiz',
            title: '2. ക്വിസ്',
            content: 'ശരിയായ ഉത്തരം പറയൂ!',
            questions: [
              {
                id: 'mq1-ml',
                text: 'പാലിനെ തൈരാക്കി മാറ്റുന്ന ബാക്ടീരിയ ഏതാണ്?',
                type: 'mcq',
                options: [
                  { id: 'mo1', text: 'ലാക്ടോബാസിലസ് (Lactobacillus)', isCorrect: true },
                  { id: 'mo2', text: 'അമീബ', isCorrect: false }
                ],
                explanation: 'ലാക്ടോബാസിലസ് പാലിനെ തൈരാക്കുന്നു.'
              }
            ]
          }
        ]
      },
      mr: {
        languageCode: 'mr',
        title: 'सूक्ष्मजीव: मित्र आणि शत्रू',
        summary: 'दूध दही बनवण्यात लॅक्टोबॅसिलस आणि शेतीमध्ये रायझोबियमचे महत्त्व शिका.',
        estimatedMinutes: 16,
        sections: [
          {
            id: 'sec-m1',
            orderIndex: 0,
            sectionType: 'story',
            title: '१. सूक्ष्मजीव सृष्टी',
            content: 'सूक्ष्मजीव आपल्याला साध्या डोळ्यांनी दिसत नाहीत पण ते शेतीसाठी खूप उपयुक्त आहेत.',
            audioNarrationText: 'सूक्ष्मजीवांची ओळख करून घेऊया.'
          },
          {
            id: 'sec-m2',
            orderIndex: 1,
            sectionType: 'quiz',
            title: '२. प्रश्नमंजुषा',
            content: 'योग्य पर्याय निवडा!',
            questions: [
              {
                id: 'mq1-mr',
                text: 'दुधाचे दही बनवणारा जिवाणू कोणता?',
                type: 'mcq',
                options: [
                  { id: 'mo1', text: 'लॅक्टोबॅसिलस (Lactobacillus)', isCorrect: true },
                  { id: 'mo2', text: 'अमीबा', isCorrect: false }
                ],
                explanation: 'लॅक्टोबॅसिलस जिवाणूमुळे दूध घट्ट दही बनते.'
              }
            ]
          }
        ]
      },
      bn: {
        languageCode: 'bn',
        title: 'অণুজীব: আমাদের বন্ধু ও শত্রু',
        summary: 'দুধ থেকে দই তৈরিতে ল্যাকটোব্যাসিলাস ও কৃষিজমিতে রাইজোবিয়ামের ভূমিকা জানুন।',
        estimatedMinutes: 16,
        sections: [
          {
            id: 'sec-m1',
            orderIndex: 0,
            sectionType: 'story',
            title: '১. অণুজীবের জগত',
            content: 'অণুজীব খালি চোখে দেখা যায় না কিন্তু চাষাবাদ ও খাদ্য প্রক্রিয়ায় এরা অত্যন্ত উপকারী।',
            audioNarrationText: 'অণুজীবের জগত সম্পর্কে জানুন।'
          },
          {
            id: 'sec-m2',
            orderIndex: 1,
            sectionType: 'quiz',
            title: '২. কুইজ',
            content: 'সঠিক উত্তর নির্বাচন করুন!',
            questions: [
              {
                id: 'mq1-bn',
                text: 'দুধকে দইয়ে পরিণত করে কোন ব্যাকটেরিয়া?',
                type: 'mcq',
                options: [
                  { id: 'mo1', text: 'ল্যাকটোব্যাসিলাস (Lactobacillus)', isCorrect: true },
                  { id: 'mo2', text: 'অ্যামিবা', isCorrect: false }
                ],
                explanation: 'ল্যাকটোব্যাসিলাস ব্যাকটেরিয়া দুধকে দইয়ে রূপান্তর করে।'
              }
            ]
          }
        ]
      }
    }
  }
];

export const SAMPLE_LESSONS: Lesson[] = [
  ...ORIGINAL_SAMPLE_LESSONS,
  ...PRIMARY_COURSES,
  ...MIDDLE_COURSES
];

export const SAMPLE_REVIEWS = [
  {
    id: 'rev-01',
    lessonId: 'lesson-math-c3-01',
    lessonTitle: 'Sharing Rotis: Discovering Fractions',
    authorName: 'Savitri Bai',
    reviewerName: 'State SCERT Review Team',
    action: 'approved' as const,
    feedback: 'Excellent contextualization using local roti examples. Interactive fraction visuals are clear and accessible.',
    reviewedAt: '2026-10-15T12:00:00Z'
  },
  {
    id: 'rev-02',
    lessonId: 'lesson-evs-c4-02',
    lessonTitle: 'Our Green Friends: The Parts of a Plant',
    authorName: 'Ramesh Gowda',
    reviewerName: 'District Curriculum Board',
    action: 'approved' as const,
    feedback: 'Approved for government school Classes 3-5. Plant diagram is well rendered.',
    reviewedAt: '2026-10-18T16:00:00Z'
  }
];

export const SAMPLE_STUDENTS = [
  {
    id: 'stud-1',
    name: 'Pooja Patil',
    classNumber: 4,
    lessonsCompleted: 8,
    averageScore: 92,
    starsEarned: 140,
    lastActive: 'Today, 10:15 AM',
    needsHelpTopics: []
  },
  {
    id: 'stud-2',
    name: 'Basavaraj Hiremath',
    classNumber: 4,
    lessonsCompleted: 6,
    averageScore: 78,
    starsEarned: 95,
    lastActive: 'Yesterday, 3:30 PM',
    needsHelpTopics: ['Fraction matching']
  },
  {
    id: 'stud-3',
    name: 'Fatima Sheikh',
    classNumber: 4,
    lessonsCompleted: 9,
    averageScore: 96,
    starsEarned: 165,
    lastActive: 'Today, 9:00 AM',
    needsHelpTopics: []
  },
  {
    id: 'stud-4',
    name: 'Kiran Kumar',
    classNumber: 4,
    lessonsCompleted: 4,
    averageScore: 65,
    starsEarned: 50,
    lastActive: '2 days ago',
    needsHelpTopics: ['Photosynthesis vocabulary', 'Two-digit addition']
  }
];
