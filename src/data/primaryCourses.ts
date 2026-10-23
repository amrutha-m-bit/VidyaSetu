import { Lesson } from '../types';
import { buildCourse, CourseDef } from './lessonCurriculumHelper';

export const PRIMARY_COURSES: Lesson[] = [
  // ==========================================
  // CLASS 1
  // ==========================================

  // Class 1 - EVS
  buildCourse({
    id: 'lesson-evs-c1',
    classNumber: 1,
    subjectCode: 'evs',
    slug: 'our-living-world-c1',
    difficultyLevel: 'beginner',
    authorName: 'Anandi Bai',
    estimatedMinutes: 10,
    en: {
      title: 'Our Living World: Plants, Birds & Little Creatures',
      summary: 'Take a fun morning walk through the village to discover living things that breathe and grow, versus non-living objects.',
      storyTitle: '1. Morning Walk with Aja',
      storyContent: 'Little Meena held her grandfather’s warm hand as they walked along the village path. She saw a calf drinking milk, a green sapling swaying in the breeze, and smooth river stones. "Aja," she asked, "why does the puppy run, but the stone stays still?"',
      storyNarration: 'Little Meena took a morning walk with her grandfather. She wondered why the puppy runs, but the stone stays still.',
      conceptTitle: '2. Living vs. Non-Living Things',
      conceptContent: 'Living things breathe air, eat food, drink water, and grow bigger over time! Examples include cows, mango trees, sparrows, and children. Non-living things, like pebbles, clay pots, and wooden carts, do not eat or grow on their own.',
      conceptNarration: 'Living things need water, food, and air to grow. Non-living things do not eat or grow.',
      illustratedSvg: 'living-nonliving',
      activityTitle: '3. Village Discovery Sorting',
      activityInstructions: 'Match each item to whether it is a Living Friend or a Non-Living Object.',
      activityType: 'matching',
      activityData: [
        { id: 'p1', question: 'Brown Cow', answer: 'Living Being' },
        { id: 'p2', question: 'Clay Water Pot', answer: 'Non-Living Object' },
        { id: 'p3', question: 'Green Neem Tree', answer: 'Living Being' },
        { id: 'p4', question: 'Wooden School Slate', answer: 'Non-Living Object' }
      ],
      quizTitle: '4. Living World Quiz',
      questions: [
        {
          text: 'Which of these needs food and water to grow?',
          options: [
            { text: 'A baby goat', isCorrect: true },
            { text: 'A river pebble', isCorrect: false },
            { text: 'A plastic ball', isCorrect: false }
          ],
          hint: 'Think about who drinks water every morning!',
          explanation: 'Animals like baby goats are living beings that need food and water to grow.'
        },
        {
          text: 'Can a wooden chair grow taller by itself?',
          options: [
            { text: 'Yes, if you water it', isCorrect: false },
            { text: 'No, because it is non-living', isCorrect: true }
          ],
          hint: 'Chairs are made by carpenters from wood and do not grow.',
          explanation: 'Non-living things like chairs do not grow.'
        }
      ]
    },
    hi: {
      title: 'हमारी सजीव दुनिया: पौधे, पक्षी और जीव-जंतु',
      summary: 'गाँव की पगडंडी पर टहलते हुए जानें कि सजीव और निर्जीव वस्तुओं में क्या अंतर है।'
    },
    kn: {
      title: 'ನಮ್ಮ ಜೀವಂತ ಜಗತ್ತು: ಸಸ್ಯಗಳು, ಪಕ್ಷಿಗಳು ಮತ್ತು ಜೀವಿಗಳು',
      summary: 'ಹಳ್ಳಿಯ ಹಾದಿಯಲ್ಲಿ ಜೀವಂತ ಮತ್ತು ನಿರ್ಜೀವ ವಸ್ತುಗಳ ವ್ಯತ್ಯಾಸವನ್ನು ಸರಳವಾಗಿ ತಿಳಿಯಿರಿ.'
    },
    te: {
      title: 'మన జీవ ప్రపంచం: మొక్కలు, పక్షులు మరియు జంతువులు',
      summary: 'గ్రామంలో నడుస్తూ ప్రాణం ఉన్న జీవులు మరియు ప్రాణం లేని వస్తువుల తేడాను తెలుసుకోండి.'
    },
    ta: {
      title: 'நமது உயிருள்ள உலகம்: தாவரங்கள், பறவைகள் மற்றும் விலங்குகள்',
      summary: 'கிராமத்துச் சூழலில் உயிருள்ள மற்றும் உயிரற்ற பொருட்களை எளிதாகக் கற்றுக் கொள்ளுங்கள்.'
    },
    ml: {
      title: 'നമ്മുടെ ജീവലോകം: സസ്യങ്ങളും പക്ഷികളും ജീവികളും',
      summary: 'ഗ്രാമീണ പരിസരത്തിലൂടെ ജീവനുള്ളവയും ജീവനില്ലാത്തവയും തമ്മിലുള്ള വ്യത്യാസം അറിയുക.'
    },
    mr: {
      title: 'आपले सजीव जग: वनस्पती, पक्षी आणि प्राणी',
      summary: 'सजीव आणि निर्जीव वस्तूंमधील फरक सोप्या पद्धतीने ओळखा.'
    },
    bn: {
      title: 'আমাদের জীবন্ত প্রকৃতি: গাছপালা, পাখি ও জীবজন্তু',
      summary: 'গ্রামের মেঠোপথ ধরে জেনে নিন সজীব ও নির্জীব বস্তুর সহজ পার্থক্য।'
    }
  }),

  // Class 1 - Science
  buildCourse({
    id: 'lesson-sci-c1',
    classNumber: 1,
    subjectCode: 'sci',
    slug: 'my-five-senses-c1',
    difficultyLevel: 'beginner',
    authorName: 'Dr. Sunita Rao',
    estimatedMinutes: 10,
    en: {
      title: 'My Five Wonder Senses: Seeing, Hearing & Feeling Nature',
      summary: 'Discover your five senses and how your eyes, ears, nose, tongue, and skin help you explore the village world.',
      storyTitle: '1. Meena’s Senses Game',
      storyContent: 'Grandmother tied a soft cotton scarf around Meena’s eyes. "Now guess what I put before you!" Meena heard a temple bell ring (Ears!), smelled sweet ripe guavas (Nose!), felt soft warm wool (Skin!), and tasted a drop of sweet honey (Tongue!).',
      storyNarration: 'Meena played a blindfold guessing game using her ears, nose, tongue, and hands.',
      conceptTitle: '2. The Five Sense Organs',
      conceptContent: 'We have 5 wonderful senses: Eyes to see colors and shapes; Ears to hear birds and music; Nose to smell fresh flowers and rain; Tongue to taste sweet, salty, and sour foods; and Skin to feel hot, cold, soft, and rough textures.',
      conceptNarration: 'Eyes see, ears hear, nose smells, tongue tastes, and skin feels. Together they are our five senses.',
      illustratedSvg: 'five-senses',
      activityTitle: '3. Sense Match-Up Challenge',
      activityInstructions: 'Match each sense organ to its superpower!',
      activityType: 'matching',
      activityData: [
        { id: 'p1', question: 'Eyes 👀', answer: 'Seeing colourful rainbow' },
        { id: 'p2', question: 'Ears 👂', answer: 'Hearing school bell' },
        { id: 'p3', question: 'Nose 👃', answer: 'Smelling jasmine flowers' },
        { id: 'p4', question: 'Tongue 👅', answer: 'Tasting sweet mango' }
      ],
      quizTitle: '4. Five Senses Quiz',
      questions: [
        {
          text: 'Which body part helps you listen to a chirping sparrow?',
          options: [
            { text: 'Ears', isCorrect: true },
            { text: 'Eyes', isCorrect: false },
            { text: 'Nose', isCorrect: false }
          ],
          hint: 'They are on both sides of your head!',
          explanation: 'Our ears collect sounds from all around us.'
        },
        {
          text: 'How do you know that warm milk is sweet?',
          options: [
            { text: 'By looking at it', isCorrect: false },
            { text: 'By tasting with your tongue', isCorrect: true }
          ],
          hint: 'Your taste buds tell you the flavor.',
          explanation: 'The tongue detects sweet, salty, sour, and bitter tastes.'
        }
      ]
    },
    hi: {
      title: 'हमारी पांच ज्ञानेंद्रियां: देखना, सुनना और महसूस करना',
      summary: 'आंख, कान, नाक, जीभ और त्वचा की मदद से प्रकृति को महसूस करने का जादुई अनुभव।'
    },
    kn: {
      title: 'ನಮ್ಮ ಪಂಚೇಂದ್ರಿಯಗಳು: ನೋಟ, ಶ್ರವಣ ಮತ್ತು ಸ್ಪರ್ಶ',
      summary: 'ಕಣ್ಣು, ಕಿವಿ, ಮೂಗು, ನಾಲಿಗೆ ಮತ್ತು ಚರ್ಮದ ಅದ್ಭುತ ಶಕ್ತಿಯನ್ನು ಅರಿಯಿರಿ.'
    },
    te: {
      title: 'మన ఐదు జ్ఞానేంద్రియాలు: చూడటం, వినడం మరియు స్పర్శ',
      summary: 'కళ్ళు, చెవులు, ముక్కు, నాలుక మరియు చర్మం ద్వారా ప్రపంచాన్ని తెలుసుకోండి.'
    },
    ta: {
      title: 'நமது ஐந்து புலன்கள்: பார்த்தல், கேட்டல் மற்றும் உணர்தல்',
      summary: 'கண், காது, மூக்கு, நாக்கு மற்றும் தோல் ஆகியவற்றின் முக்கியத்துவத்தை அறியுங்கள்.'
    },
    ml: {
      title: 'നമ്മുടെ പഞ്ചേന്ദ്രിയങ്ങൾ: കാണലും കേൾക്കലും സ്പർശനവും',
      summary: 'കണ്ണ്, കാത്, മൂക്ക്, നാവ്, തൊലി എന്നിവയുടെ പ്രവർത്തനങ്ങൾ പഠിക്കുക.'
    },
    mr: {
      title: 'आपल्या पाच ज्ञानेंद्रिये: पाहणे, ऐकणे आणि अनुभवणे',
      summary: 'डोळे, कान, नाक, जीभ आणि त्वचा यांच्या साहाय्याने सृष्टीचा अनुभव घ्या.'
    },
    bn: {
      title: 'আমাদের পঞ্চেন্দ্রিয়: দেখা, শোনা ও স্পর্শের জাদু',
      summary: 'চোখ, কান, নাক, জিভ ও ত্বকের সাহায্যে আশেপাশের জগতকে চিনে নিন।'
    }
  }),

  // Class 1 - English Learning
  buildCourse({
    id: 'lesson-eng-c1',
    classNumber: 1,
    subjectCode: 'eng',
    slug: 'alphabet-animals-phonics-c1',
    difficultyLevel: 'beginner',
    authorName: 'Mary Fernandez',
    estimatedMinutes: 10,
    en: {
      title: 'Fun Alphabet & Phonics: Animal Sounds A to Z',
      summary: 'Learn letter sounds and simple English words through cheerful village animals.',
      storyTitle: '1. The Village Animal Band',
      storyContent: 'Early in the morning, the village animals start their concert! Ant says /a/, /a/, Ant! Bee says /b/, /b/, Bee! Cat says /c/, /c/, Cat! Duck says /d/, /d/, Duck! Let us sing along with their happy sounds.',
      storyNarration: 'The village animals sing together: Ant says a, Bee says b, Cat says c, Duck says d!',
      conceptTitle: '2. Letters and Letter Sounds',
      conceptContent: 'Every English letter has a name and a special sound. Letter A makes the sound /æ/ as in Apple and Ant. Letter B makes the sound /b/ as in Bird and Ball. Letter C makes the sound /k/ as in Cow and Cat.',
      conceptNarration: 'Letter A makes the sound as in Apple. Letter B makes sound as in Ball. Letter C makes sound as in Cat.',
      illustratedSvg: 'alphabet-animals',
      activityTitle: '3. Phonics Animal Match',
      activityInstructions: 'Match each capital letter with the correct animal friend!',
      activityType: 'matching',
      activityData: [
        { id: 'p1', question: 'Letter A', answer: 'Ant' },
        { id: 'p2', question: 'Letter B', answer: 'Buffalo' },
        { id: 'p3', question: 'Letter C', answer: 'Cow' },
        { id: 'p4', question: 'Letter D', answer: 'Duck' }
      ],
      quizTitle: '4. Phonics Fun Quiz',
      questions: [
        {
          text: 'Which letter starts the word "Cat"?',
          options: [
            { text: 'Letter C', isCorrect: true },
            { text: 'Letter B', isCorrect: false },
            { text: 'Letter M', isCorrect: false }
          ],
          hint: 'The sound is /k/!',
          explanation: '"Cat" begins with the letter C.'
        },
        {
          text: 'What sound does Letter B make in "Ball"?',
          options: [
            { text: '/b/ sound', isCorrect: true },
            { text: '/s/ sound', isCorrect: false }
          ],
          hint: 'Bounce the ball: /b/, /b/, ball!',
          explanation: 'Letter B makes the /b/ sound.'
        }
      ]
    },
    hi: {
      title: 'अंग्रेज़ी वर्णमाला और ध्वनियाँ: A से Z तक',
      summary: 'गाँव के पशु-पक्षियों के साथ अक्षरों की आवाज़ और सरल अंग्रेज़ी शब्द सीखें।'
    },
    kn: {
      title: 'ಇಂಗ್ಲಿಷ್ ವರ್ಣಮಾಲೆ ಮತ್ತು ಧ್ವನಿಗಳು: A ಇಂದ Z ವರೆಗೆ',
      summary: 'ಪ್ರಾಣಿಗಳ ಧ್ವನಿಯೊಂದಿಗೆ ಇಂಗ್ಲಿಷ್ ಅಕ್ಷರಗಳನ್ನು ಸುಲಭವಾಗಿ ಕಲಿಯಿರಿ.'
    },
    te: {
      title: 'సరదా ఇంగ్లీష్ అక్షరాలు మరియు శబ్దాలు (Phonics)',
      summary: 'జంతువుల పేర్లతో ఇంగ్లీష్ అక్షరాల శబ్దాలను సులభంగా నేర్చుకోండి.'
    },
    ta: {
      title: 'ஆங்கில எழுத்துக்கள் மற்றும் ஒலிகள் (Phonics)',
      summary: 'விலங்குகளின் பெயர்களைக் கொண்டு ஆங்கில எழுத்துக்களைக் கற்றுக்கொள்ளுங்கள்.'
    },
    ml: {
      title: 'ഇംഗ്ലീഷ് അക്ഷരങ്ങളും ശബ്ദങ്ങളും (Phonics)',
      summary: 'ലളിതമായ വാക്കുകളിലൂടെയും മൃഗങ്ങളുടെ പേരുകളിലൂടെയും ഇംഗ്ലീഷ് പഠിക്കാം.'
    },
    mr: {
      title: 'इंग्रजी मुळाक्षरे आणि उच्चार: A ते Z',
      summary: 'प्राणी आणि सोप्या शब्दांच्या मदतीने इंग्रजी अक्षरे उच्चारण्यास शिका.'
    },
    bn: {
      title: 'মজার ইংরেজি বর্ণমালা ও উচ্চারণ (A to Z)',
      summary: 'সহজ ছবি ও পশুপাখির শব্দের সাথে ইংরেজি অক্ষরের ফনিক্স শিখুন।'
    }
  }),

  // Class 1 - Regional Language
  buildCourse({
    id: 'lesson-lang-c1',
    classNumber: 1,
    subjectCode: 'lang',
    slug: 'varnamala-swar-c1',
    difficultyLevel: 'beginner',
    authorName: 'Shankaracharya K.',
    estimatedMinutes: 10,
    en: {
      title: 'Varnamala: My First Vowels & Village Songs',
      summary: 'Learn the primary vowel sounds (Swar / ಸ್ವರಗಳು) of your mother tongue through traditional rhymes and joyful singing.',
      storyTitle: '1. The Singing Parrot of the Temple Tree',
      storyContent: 'Under the shade of the old village temple tree, children gathered to hear the green parrot sing sweet sounds. The teacher smiled: "Each letter is a musical note from our mother tongue. Let us repeat after the parrot!"',
      storyNarration: 'Children gathered under the temple tree to practice the first sweet vowels of their mother tongue.',
      conceptTitle: '2. The Vowel Sounds (Swar)',
      conceptContent: 'In Indian regional scripts (Kannada, Hindi, Telugu, Tamil, Marathi, Bengali, Malayalam), vowels are the heart of words. The first sounds are A (ಅ / अ), Aa (ಆ / आ), I (ಇ / इ), Ee (ಈ / ई). They flow smoothly without touching the tongue to the teeth.',
      conceptNarration: 'Vowels are independent sounds that give life to words in our mother tongue.',
      illustratedSvg: 'varnamala-script',
      activityTitle: '3. First Letter Match',
      activityInstructions: 'Match the sound to the common village object it begins with!',
      activityType: 'matching',
      activityData: [
        { id: 'p1', question: 'Sound "A" (अ / ಅ)', answer: 'Anar / Amma (Mother)' },
        { id: 'p2', question: 'Sound "Aa" (आ / ಆ)', answer: 'Aam / Aata (Play)' },
        { id: 'p3', question: 'Sound "I" (इ / ಇ)', answer: 'Imli / Illu (Home)' },
        { id: 'p4', question: 'Sound "Ee" (ई / ಈ)', answer: 'Eekh / Eeshwara' }
      ],
      quizTitle: '4. Vowel Harmony Quiz',
      questions: [
        {
          text: 'What is the very first letter of the Indian varnamala (alphabet)?',
          options: [
            { text: 'A (ಅ / अ)', isCorrect: true },
            { text: 'Ka (ಕ / क)', isCorrect: false },
            { text: 'Ma (ಮ / म)', isCorrect: false }
          ],
          hint: 'It is the first short vowel.',
          explanation: 'The letter "A" is the very first vowel sound in Indian alphabets.'
        },
        {
          text: 'Are vowels (Swar) pronounced independently without another letter?',
          options: [
            { text: 'Yes, vowels have their own voice', isCorrect: true },
            { text: 'No, they always need help', isCorrect: false }
          ],
          hint: 'Think about singing "Aaaa" or "Eeee".',
          explanation: 'Vowels are independent sounds that can be spoken clearly on their own.'
        }
      ]
    },
    hi: {
      title: 'वर्णमाला: हमारे पहले स्वर और बालगीत',
      summary: 'अ, आ, इ, ई जैसे प्राथमिक स्वरों की पहचान और सरल बालगीत सीखें।'
    },
    kn: {
      title: 'ವರ್ಣಮಾಲೆ: ಮೊದಲ ಸ್ವರಗಳು ಮತ್ತು ಜನಪದ ಹಾಡುಗಳು',
      summary: 'ಅ, ಆ, ಇ, ಈ ಸ್ವರಗಳನ್ನು ಸ್ಪಷ್ಟವಾಗಿ ಉಚ್ಚರಿಸಲು ಮತ್ತು ಗುರುತಿಸಲು ಕಲಿಯಿರಿ.'
    },
    te: {
      title: 'వర్ణమాల: మొదటి అచ్చులు మరియు పాటలు',
      summary: 'అ, ఆ, ఇ, ఈ అచ్చులను స్పష్టంగా పలకడం మరియు గుర్తించడం నేర్చుకోండి.'
    },
    ta: {
      title: 'உயிர் எழுத்துக்கள்: அ, ஆ, இ, ஈ கற்றல்',
      summary: 'தமிழ் உயிர் எழுத்துக்களின் அழகையும் உச்சரிப்பையும் பாடல்கள் மூலம் கற்போம்.'
    },
    ml: {
      title: 'വർണ്ണമാല: സ്വരാക്ഷരങ്ങളും ലളിത ഗാനങ്ങളും',
      summary: 'അ, ആ, ഇ, ഈ തുടങ്ങിയ സ്വരാക്ഷരങ്ങളെ ലളിതമായി മനസ്സിലാക്കാം.'
    },
    mr: {
      title: 'वर्णमाला: आपले पहिले स्वर आणि बालगीते',
      summary: 'अ, आ, इ, ई स्वरांची ओळख आणि वाचनाची गोडी निर्माण करा.'
    },
    bn: {
      title: 'বর্ণমালা: প্রথম স্বরবর্ণ ও ছড়ার আনন্দ',
      summary: 'অ, আ, ই, ঈ স্বরবর্ণের সঠিক উচ্চারণ ও চেনার সহজ পাঠ।'
    }
  }),

  // Class 1 - Social Studies
  buildCourse({
    id: 'lesson-soc-c1',
    classNumber: 1,
    subjectCode: 'soc',
    slug: 'my-family-village-home-c1',
    difficultyLevel: 'beginner',
    authorName: 'Girija Devi',
    estimatedMinutes: 10,
    en: {
      title: 'My Family & Village Home: Caring and Sharing',
      summary: 'Explore family roles, helping at home, and living harmoniously with village neighbors.',
      storyTitle: '1. Evening at Somu’s Courtyard',
      storyContent: 'In the evening, Somu’s family sat together in the open courtyard under twinkling stars. Somu helped grandmother wind yarn, while elder sister poured warm herbal tea for their father back from the paddy fields. "When we help each other," grandfather smiled, "our home is filled with joy."',
      storyNarration: 'Somu helped his family in the evening courtyard. Helping each other makes a home happy.',
      conceptTitle: '2. Family and Community Living',
      conceptContent: 'A family is made of people who love and support one another: parents, grandparents, brothers, and sisters. In a village community, neighbors also help during festivals, harvest time, and when someone needs support.',
      conceptNarration: 'A family cares for one another. Sharing work and respecting elders brings peace.',
      illustratedSvg: 'village-home',
      activityTitle: '3. Helping Hands at Home',
      activityInstructions: 'Match each family helper with their caring act!',
      activityType: 'matching',
      activityData: [
        { id: 'p1', question: 'Grandmother', answer: 'Telling bedtime moral stories' },
        { id: 'p2', question: 'Father & Mother', answer: 'Farming and caring for children' },
        { id: 'p3', question: 'Children', answer: 'Putting toys away & watering garden' },
        { id: 'p4', question: 'Neighbors', answer: 'Celebrating festivals together' }
      ],
      quizTitle: '4. Family & Home Quiz',
      questions: [
        {
          text: 'How can small children help their family at home?',
          options: [
            { text: 'By putting away their books and shoes neatly', isCorrect: true },
            { text: 'By throwing litter on the floor', isCorrect: false },
            { text: 'By arguing with siblings', isCorrect: false }
          ],
          hint: 'Doing neat small chores helps everyone.',
          explanation: 'Keeping school slates, books, and shoes tidy is a great way to help family members.'
        },
        {
          text: 'What makes a village community strong and peaceful?',
          options: [
            { text: 'Helping each other and sharing festivals', isCorrect: true },
            { text: 'Never talking to neighbors', isCorrect: false }
          ],
          hint: 'Think of sharing festive sweets and helping in times of need.',
          explanation: 'Mutual care, sharing, and kindness bind a village community together.'
        }
      ]
    },
    hi: {
      title: 'मेरा परिवार और प्यारा गाँव: सहयोग और अपनत्व',
      summary: 'परिवार में एक-दूसरे की मदद करने और गाँव के पड़ोसियों के साथ प्रेम से रहने की सीख।'
    },
    kn: {
      title: 'ನನ್ನ ಕುಟುಂಬ ಮತ್ತು ಸುಂದರ ಹಳ್ಳಿ: ಪ್ರೀತಿ ಮತ್ತು ಸಹಕಾರ',
      summary: 'ಕುಟುಂಬದಲ್ಲಿ ಹಿರಿಯರನ್ನು ಗೌರವಿಸುವುದು ಮತ್ತು ಗ್ರಾಮಸ್ಥರೊಂದಿಗೆ ಹೊಂದಾಣಿಕೆಯಿಂದ ಬಾಳುವುದು.'
    },
    te: {
      title: 'నా కుటుంబం మరియు గ్రామం: ప్రేమ మరియు సహాయం',
      summary: 'కుటుంబ సభ్యులకు సహాయం చేయడం మరియు గ్రామస్తులతో కలిసిమెలిసి జీవించడం.'
    },
    ta: {
      title: 'எனது குடும்பமும் கிராமமும்: அன்பும் பகிர்தலும்',
      summary: 'குடும்பத்தில் ஒருவருக்கொருவர் உதவுவதும் கிராமத்து ஒற்றுமையும்.'
    },
    ml: {
      title: 'എന്റെ കുടുംബവും ഗ്രാമവും: സ്നേഹവും സഹകരണവും',
      summary: 'കുടുംബാംഗങ്ങളെ സഹായിക്കുന്നതിലൂടെയും അയൽവാസികളുമായി സ്നേഹത്തിൽ കഴിയുന്നതിലൂടെയും ലഭിക്കുന്ന സന്തോഷം.'
    },
    mr: {
      title: 'माझे कुटुंब आणि गाव: प्रेम आणि सहकार्य',
      summary: 'घरातील कामात मदत करणे आणि गावातील शेजाऱ्यांशी सलोख्याने राहणे.'
    },
    bn: {
      title: 'আমার পরিবার ও গাঁয়ের বাড়ি: ভালোবাসা ও সহযোগিতার পাঠ',
      summary: 'পরিবারের গুরুজনদের সম্মান করা এবং পাড়া-প্রতিবেশীর সাথে মিলেমিশে থাকার সুন্দর শিক্ষা।'
    }
  }),

  // ==========================================
  // CLASS 2
  // ==========================================

  // Class 2 - EVS
  buildCourse({
    id: 'lesson-evs-c2',
    classNumber: 2,
    subjectCode: 'evs',
    slug: 'water-in-our-village-c2',
    difficultyLevel: 'beginner',
    authorName: 'Venkatesh Murthy',
    estimatedMinutes: 12,
    en: {
      title: 'Water Around Us: Wells, Ponds & Clean Drinking Habits',
      summary: 'Discover the water journey from monsoon clouds to village wells, and how to keep drinking water clean and safe.',
      storyTitle: '1. The Village Step-Well',
      storyContent: 'Early every morning, villagers gather at the stone step-well. Raju watched the copper bucket splash down and return filled with crystal-clear water. His mother reminded him: "Water is liquid gold for our fields and bodies. We must always keep it pure!"',
      storyNarration: 'Raju watched water drawn from the village well. Keeping water clean protects everyone’s health.',
      conceptTitle: '2. Sources and Care of Water',
      conceptContent: 'Water comes from rain, rivers, ponds, and underground springs through wells and borewells. To stay healthy, drinking water must always be boiled or filtered, kept in a covered clay pot with a ladle, and never touched with dirty fingers.',
      conceptNarration: 'Water comes from rain, ponds, and wells. Always keep drinking water covered and clean.',
      illustratedSvg: 'water-well',
      activityTitle: '3. Water Habit Checker',
      activityInstructions: 'Match each water practice with whether it is Healthy or Wasteful.',
      activityType: 'matching',
      activityData: [
        { id: 'p1', question: 'Covering the drinking water pot', answer: 'Healthy Habit' },
        { id: 'p2', question: 'Leaving the public tap running', answer: 'Wasteful Habit' },
        { id: 'p3', question: 'Using a clean ladle to take water', answer: 'Healthy Habit' },
        { id: 'p4', question: 'Washing buffaloes in the drinking pond', answer: 'Polluting Habit' }
      ],
      quizTitle: '4. Clean Water Quiz',
      questions: [
        {
          text: 'Why should drinking water pots always have a clean cover on top?',
          options: [
            { text: 'To keep out dust, flies, and germs', isCorrect: true },
            { text: 'To make the water change color', isCorrect: false },
            { text: 'It is not necessary', isCorrect: false }
          ],
          hint: 'Dust and insects can carry illnesses.',
          explanation: 'Covering drinking vessels keeps dust, flies, and harmful germs out.'
        },
        {
          text: 'What is the main natural source of fresh water on Earth?',
          options: [
            { text: 'Rain from clouds', isCorrect: true },
            { text: 'Plastic bottles', isCorrect: false }
          ],
          hint: 'It falls from the monsoon sky.',
          explanation: 'Rainwater fills our rivers, lakes, ponds, and recharges underground wells.'
        }
      ]
    },
    hi: {
      title: 'हमारे गाँव का जल: कुएँ, तालाब और स्वच्छता',
      summary: 'बारिश से लेकर कुएँ तक पानी के सफर और सुरक्षित पेयजल की आदतों को समझें।'
    },
    kn: {
      title: 'ನಮ್ಮ ಹಳ್ಳಿಯ ನೀರು: ಬಾವಿಗಳು, ಕೆರೆಗಳು ಮತ್ತು ಸ್ವಚ್ಛ ಕುಡಿಯುವ ಪದ್ಧತಿ',
      summary: 'ಮಳೆಯಿಂದ ಬಾವಿಯವರೆಗೆ ನೀರಿನ ಮೂಲಗಳು ಮತ್ತು ಶುದ್ಧ ನೀರಿನ ಮಹತ್ವ ತಿಳಿಯಿರಿ.'
    },
    te: {
      title: 'మన గ్రామంలో నీరు: బావులు, చెరువులు మరియు పరిశుభ్రత',
      summary: 'వర్షం నుండి బావుల వరకు నీటి ప్రయాణం మరియు సురక్షిత తాగునీటి అలవాట్లు.'
    },
    ta: {
      title: 'நம் கிராமத்து நீர்: கிணறுகள், குளங்கள் மற்றும் தூய குடிநீர்',
      summary: 'நீர் நிலைகளைப் பாதுகாப்பது மற்றும் தூய குடிநீரின் அவசியத்தை அறிவோம்.'
    },
    ml: {
      title: 'നമ്മുടെ ജലസ്രോതസ്സുകൾ: കിണറുകളും കുളങ്ങളും ശുദ്ധജലവും',
      summary: 'മഴവെള്ളം സംരക്ഷിക്കേണ്ടതിന്റെയും കുടിവെള്ളം ശുദ്ധമായി സൂക്ഷിക്കേണ്ടതിന്റെയും പ്രാധാന്യം.'
    },
    mr: {
      title: 'आपल्या गावातील पाणी: विहिरी, तलाव आणि स्वच्छ सवयी',
      summary: 'पिण्याचे पाणी स्वच्छ ठेवणे आणि जलस्रोतांचे जतन करणे शिका.'
    },
    bn: {
      title: 'আমাদের গাঁয়ের জল: কুয়ো, পুকুর ও নিরাপদ পানীয় জলের পাঠ',
      summary: 'বৃষ্টির জল সংরক্ষণ এবং পরিষ্কার পানীয় জল ব্যবহারের গুরুত্ব জানুন।'
    }
  }),

  // Class 2 - Science
  buildCourse({
    id: 'lesson-sci-c2',
    classNumber: 2,
    subjectCode: 'sci',
    slug: 'animal-habitats-homes-c2',
    difficultyLevel: 'beginner',
    authorName: 'Ramesh Patel',
    estimatedMinutes: 12,
    en: {
      title: 'Animal Habitats: Where Creatures Sleep & Grow',
      summary: 'Explore nests, burrows, ponds, and shelters built by animals, birds, and insects in rural surroundings.',
      storyTitle: '1. The Weaver Bird’s Marvel',
      storyContent: 'Sitting under the tamarind tree, Chetan watched a tiny yellow weaver bird weave dried grass blades into an upside-down hanging bottle nest. "How clever!" he gasped. His teacher said, "Every creature builds or finds a safe home to protect its young from rain and predators."',
      storyNarration: 'Chetan saw a weaver bird building its grass nest. Every animal builds a shelter to stay safe.',
      conceptTitle: '2. Animal Homes and Habitats',
      conceptContent: 'Just like people live in houses, animals need shelters. Birds build woven nests in trees, rabbits dig underground burrows, honeybees build wax honeycombs, and domestic cows rest safely in farm cow-sheds.',
      conceptNarration: 'Animals live in nests, burrows, hives, and sheds to stay safe from cold, heat, and rain.',
      illustratedSvg: 'animal-habitats',
      activityTitle: '3. Animal Home Match',
      activityInstructions: 'Match each creature to its cozy shelter!',
      activityType: 'matching',
      activityData: [
        { id: 'p1', question: 'Weaver Bird', answer: 'Grass Nest in Tree' },
        { id: 'p2', question: 'Honeybee', answer: 'Honeycomb Hive' },
        { id: 'p3', question: 'Rabbit', answer: 'Underground Burrow' },
        { id: 'p4', question: 'Dairy Cow', answer: 'Farm Cow-Shed (Goshala)' }
      ],
      quizTitle: '4. Animal Shelters Quiz',
      questions: [
        {
          text: 'Where does a honeybee colony store honey and rear its young?',
          options: [
            { text: 'In a wax honeycomb hive', isCorrect: true },
            { text: 'Under river pebbles', isCorrect: false },
            { text: 'In an open field', isCorrect: false }
          ],
          hint: 'Bees build six-sided hexagonal cells from wax.',
          explanation: 'Honeybees construct hives with thousands of wax cells to store honey and raise larvae.'
        },
        {
          text: 'Why do birds build nests high in trees or hedges?',
          options: [
            { text: 'To lay eggs safely away from ground predators', isCorrect: true },
            { text: 'To catch falling rain drops', isCorrect: false }
          ],
          hint: 'Eggs need warmth and protection from snakes and cats.',
          explanation: 'Nests provide safety and warmth for hatching eggs and feeding chicks.'
        }
      ]
    },
    hi: {
      title: 'जीव-जंतुओं के घर: घोंसले, बिल और आश्रय',
      summary: 'पक्षी घोंसले क्यों बनाते हैं और विभिन्न प्राणी कहाँ रहते हैं, इसे विस्तार से जानें।'
    },
    kn: {
      title: 'ಪ್ರಾಣಿಗಳ ಆಶ್ರಯಗಳು: ಗೂಡುಗಳು, ಬಿಲಗಳು ಮತ್ತು ನೆಲೆಗಳು',
      summary: 'ಹಕ್ಕಿಗಳು ಗೂಡು ಕಟ್ಟುವುದು ಮತ್ತು ಪ್ರಾಣಿಗಳು ತಮ್ಮ ಆಶ್ರಯವನ್ನು ಹೇಗೆ ಕಂಡುಕೊಳ್ಳುತ್ತವೆ ಎಂಬುದನ್ನು ತಿಳಿಯಿರಿ.'
    },
    te: {
      title: 'జంతువుల ఆవాసాలు: గూళ్ళు, బొరియలు మరియు నివాసాలు',
      summary: 'పక్షులు, జంతువులు తమ రక్షణ కోసం ఎలాంటి ఇళ్ళను నిర్మించుకుంటాయో తెలుసుకోండి.'
    },
    ta: {
      title: 'விலங்குகளின் வசிப்பிடங்கள்: கூடுகள் மற்றும் பொந்துகள்',
      summary: 'பறவைகள் கூடுகட்டுவதும் விலங்குகள் தங்கும் இடங்களும் பற்றி அறிவோம்.'
    },
    ml: {
      title: 'മൃഗങ്ങളുടെ ആവാസവ്യവസ്ഥ: കൂടുകളും മാളങ്ങളും',
      summary: 'പക്ഷികളും മൃഗങ്ങളും തങ്ങളുടെ കുഞ്ഞുങ്ങൾക്ക് സുരക്ഷിതമായ കൂട് ഉണ്ടാക്കുന്നത് എങ്ങനെ?'
    },
    mr: {
      title: 'प्राण्यांचे निवारे: घरटी, बिळे आणि सुरक्षित जागा',
      summary: 'पक्षी आणि प्राणी स्वतःचे संरक्षण करण्यासाठी कशी घरे बांधतात ते शिका.'
    },
    bn: {
      title: 'পশুপাখির বাসস্থান: বাসা, গর্ত ও প্রাকৃতিক আশ্রয়',
      summary: 'বাবুই পাখির বাসা ও নানা প্রাণীর থাকার জায়গা সম্পর্কে জানার রোমাঞ্চকর পাঠ।'
    }
  }),

  // Class 2 - English Learning
  buildCourse({
    id: 'lesson-eng-c2',
    classNumber: 2,
    subjectCode: 'eng',
    slug: 'action-words-greetings-c2',
    difficultyLevel: 'beginner',
    authorName: 'Sister Teresa',
    estimatedMinutes: 12,
    en: {
      title: 'Everyday Action Words: Jump, Run, Sing & Greet',
      summary: 'Learn lively verbs (action words) and everyday polite English phrases for school and play.',
      storyTitle: '1. Recess at the Village School',
      storyContent: 'The school gong rang: Tonnggg! "Recess time!" shouted the children. Amar runs across the field. Leela skips with a rope. Teacher Anita smiles and says: "Good morning! Please wash your hands before eating your mid-day meal."',
      storyNarration: 'During recess, children run, jump, and play. The teacher shares polite greetings.',
      conceptTitle: '2. Doing Words (Verbs) and Courtesies',
      conceptContent: 'Action words tell what someone is doing: run, walk, jump, write, drink, eat, read. Polite phrases make friends: "Good morning!", "Thank you!", "Please help me!", and "May I come in?"',
      conceptNarration: 'Action words show what we do: run, jump, read. Polite words show respect: Please and Thank You.',
      illustratedSvg: 'action-words',
      activityTitle: '3. Action Word Match',
      activityInstructions: 'Match the action verb with the picture activity!',
      activityType: 'matching',
      activityData: [
        { id: 'p1', question: 'Running 🏃', answer: 'Racing on the field' },
        { id: 'p2', question: 'Reading 📖', answer: 'Looking at story book' },
        { id: 'p3', question: 'Singing 🎵', answer: 'Singing school anthem' },
        { id: 'p4', question: 'Drinking 🥛', answer: 'Sipping fresh water' }
      ],
      quizTitle: '4. Action Words Quiz',
      questions: [
        {
          text: 'Which of the following is an action word (verb)?',
          options: [
            { text: 'Jump', isCorrect: true },
            { text: 'Green', isCorrect: false },
            { text: 'Pencil', isCorrect: false }
          ],
          hint: 'It is something your legs can do!',
          explanation: '"Jump" describes an action you perform with your body.'
        },
        {
          text: 'What polite phrase should you say when someone gives you a book?',
          options: [
            { text: 'Thank you!', isCorrect: true },
            { text: 'Run away!', isCorrect: false }
          ],
          hint: 'It shows gratitude and respect.',
          explanation: 'Saying "Thank you!" expresses appreciation and good manners.'
        }
      ]
    },
    hi: {
      title: 'क्रिया शब्द और शिष्टाचार: दौड़ना, कूदना और नमस्ते',
      summary: 'खेल-कूद के माध्यम से अंग्रेज़ी क्रियाएँ (Verbs) और विनम्र अभिवादन सीखें।'
    },
    kn: {
      title: 'ಕ್ರಿಯಾಪದಗಳು ಮತ್ತು ವಿನಮ್ರ ಮಾತುಗಳು: ಓಡು, ಹಾರು, ಹಾಡು',
      summary: 'ಕ್ರಿಯೆಯನ್ನು ಸೂಚಿಸುವ ಇಂಗ್ಲಿಷ್ ಪದಗಳು ಮತ್ತು ದಿನನಿತ್ಯದ ಶುಭಾಶಯಗಳನ್ನು ಕಲಿಯಿರಿ.'
    },
    te: {
      title: 'క్రియా పదాలు మరియు మర్యాదలు (Action Words & Greetings)',
      summary: 'పనులను తెలిపే ఇంగ్లీష్ పదాలు మరియు రోజువారీ మర్యాద పూర్వక మాటలు.'
    },
    ta: {
      title: 'செயல் சொற்கள் மற்றும் நல்வணக்கம் (Action Words & Greetings)',
      summary: 'தினசரி செயல்பாடுகளை ஆங்கிலத்தில் கூறவும் நல்ல பழக்கங்களை வளர்க்கவும் கற்கலாம்.'
    },
    ml: {
      title: 'ക്രിയാപദങ്ങളും അഭിവാദനങ്ങളും (Action Words & Greetings)',
      summary: 'ഓടുക, ചാടുക തുടങ്ങിയ ക്രിയകളും വിനയപൂർവ്വമായ സംഭാഷണങ്ങളും ഇംഗ്ലീഷിൽ പഠിക്കുക.'
    },
    mr: {
      title: 'क्रिया दर्शवणारे शब्द आणि संभाषण शिष्टाचार',
      summary: 'धावणे, खेळणे यांसारखे इंग्रजी क्रियापद आणि नम्र संभाषण कौशल्ये शिका.'
    },
    bn: {
      title: 'কাজের শব্দ ও ভদ্র সম্ভাষণ (Action Words & Greetings)',
      summary: 'দৌড়ানো, পড়া, গান গাওয়া ইত্যাদি ইংরেজি ভার্ব এবং বিনম্র কথার সহজ অনুশীলন।'
    }
  }),

  // Class 2 - Regional Language
  buildCourse({
    id: 'lesson-lang-c2',
    classNumber: 2,
    subjectCode: 'lang',
    slug: 'matras-guninthalu-c2',
    difficultyLevel: 'beginner',
    authorName: 'Pandit Narayana',
    estimatedMinutes: 12,
    en: {
      title: 'Guninthalu & Matras: Forming Sweet Two-Letter Words',
      summary: 'Master vowel signs (Matras / ಗುಣಿತಾಕ್ಷರಗಳು) and discover how combining consonants with signs creates musical words.',
      storyTitle: '1. The Potter’s Magic Wheel of Letters',
      storyContent: 'The village potter takes wet clay and shapes it into cups, jars, and lamps. In the same way, when the consonant "K" meets the vowel sign "aa", it becomes "Kaa"! With "i", it becomes "Ki"! The teacher smiled: "Just like clay takes shape, our letters take flight with vowel signs."',
      storyNarration: 'Consonants take new musical sounds when joined with vowel signs, creating complete words.',
      conceptTitle: '2. Consonant and Vowel Combinations',
      conceptContent: 'A consonant alone is a half-sound (K / ಕ್ / क). Adding vowel signs (Matras / Guninthalu) forms whole syllables: Ka, Kaa, Ki, Kee, Ku, Koo, Ke, Kai, Ko, Kau. Combining these syllables forms familiar everyday words like "Maa", "Pani", "Mane", "Phool".',
      conceptNarration: 'Vowel signs give full voice to consonants to write words like house, flower, and water.',
      illustratedSvg: 'matras-script',
      activityTitle: '3. Word Builder Activity',
      activityInstructions: 'Match the syllable combinations with the real word they build!',
      activityType: 'matching',
      activityData: [
        { id: 'p1', question: 'M + Aa (मा / ಮಾ)', answer: 'Maa (Mother)' },
        { id: 'p2', question: 'P + aa + n + ee', answer: 'Paani (Water)' },
        { id: 'p3', question: 'M + a + n + e', answer: 'Mane (Home)' },
        { id: 'p4', question: 'Ph + oo + l', answer: 'Phool (Flower)' }
      ],
      quizTitle: '4. Matra Word Quiz',
      questions: [
        {
          text: 'What happens when you add the "Aa" sign to the consonant "K"?',
          options: [
            { text: 'It sounds like "Kaa" (का / ಕಾ)', isCorrect: true },
            { text: 'It disappears', isCorrect: false },
            { text: 'It turns into "P"', isCorrect: false }
          ],
          hint: 'The mouth opens wide for the long "Aa" sound.',
          explanation: 'Adding the "Aa" matra to "K" produces the prolonged syllable "Kaa".'
        },
        {
          text: 'Can a consonant form a complete spoken word without any vowel sound?',
          options: [
            { text: 'No, every Indian syllable needs a vowel sound', isCorrect: true },
            { text: 'Yes, vowels are never needed', isCorrect: false }
          ],
          hint: 'Vowels give the musical voice to speech.',
          explanation: 'In Indian phonetic scripts, consonants require vowel sounds to be spoken and written as syllables.'
        }
      ]
    },
    hi: {
      title: 'मात्राएँ और शब्द रचना: दो और तीन अक्षरों के शब्द',
      summary: 'व्यंजनों के साथ मात्राओं का जोड़ और उनसे बनने वाले सुंदर दैनिक शब्दों का अभ्यास।'
    },
    kn: {
      title: 'ಗುಣಿತಾಕ್ಷರಗಳು ಮತ್ತು ಮಾತ್ರೆಗಳು: ಹೊಸ ಪದಗಳ ರಚನೆ',
      summary: 'ವ್ಯಂಜನಗಳಿಗೆ ಸ್ವರ ಚಿಹ್ನೆಗಳನ್ನು ಸೇರಿಸಿ ಅರ್ಥಪೂರ್ಣ ಕನ್ನಡ ಪದಗಳನ್ನು ರಚಿಸುವುದು.'
    },
    te: {
      title: 'గుణింతాలు మరియు మాత్రలు: తియ్యని పదాల కలయిక',
      summary: 'హల్లులకు గుణింతపు గుర్తులు చేర్చి అందమైన తెలుగు పదాలను రాయడం నేర్చుకోండి.'
    },
    ta: {
      title: 'மெய் எழுத்துக்களும் உயிர்மெய் எழுத்துக்களும்',
      summary: 'உயிர் எழுத்துக்களும் மெய் எழுத்துக்களும் இணைந்து உயிர்மெய் தோன்றும் அழகு.'
    },
    ml: {
      title: 'ചിഹ്നങ്ങളും വാക്കുകളും: ലളിതമായ അക്ഷരക്കൂട്ടുകൾ',
      summary: 'വ്യഞ്ജനങ്ങളോട് സ്വരചിഹ്നങ്ങൾ ചേർത്ത് പുതിയ വാക്കുകൾ ഉണ്ടാക്കാൻ പഠിക്കാം.'
    },
    mr: {
      title: 'बाराखडी आणि मात्रा: गोड शब्दांची गुंफण',
      summary: 'व्यंजनांना मात्रा जोडून अर्थपूर्ण शब्द कसे तयार होतात ते समजून घ्या.'
    },
    bn: {
      title: 'কারচিহ্ন ও বর্ণযোজনা: সহজ শব্দ গঠনের জাদু',
      summary: 'আ-কার, ই-কার ইত্যাদির মাধ্যমে সুন্দর শব্দ গঠনের সহজ নিয়ম।'
    }
  }),

  // Class 2 - Social Studies
  buildCourse({
    id: 'lesson-soc-c2',
    classNumber: 2,
    subjectCode: 'soc',
    slug: 'community-helpers-c2',
    difficultyLevel: 'beginner',
    authorName: 'Bhagyalakshmi S.',
    estimatedMinutes: 12,
    en: {
      title: 'Our Village Community Helpers: Dignity of Labor',
      summary: 'Meet the hardworking farmers, weavers, potters, carpenters, teachers, and health nurses who keep the village thriving.',
      storyTitle: '1. A Walk Down the Artisan Lane',
      storyContent: 'Walking through the village lane, Anand heard the rhythmic "clack-clack" of the handloom weaver. Next door, the blacksmith was shaping an iron sickle for the sugarcane harvest. Down the street, the village nurse was measuring a baby’s weight. "Every person’s work is valuable," Anand realized.',
      storyNarration: 'Anand met the weaver, blacksmith, farmer, and nurse. Each helper performs crucial work for the village.',
      conceptTitle: '2. Community Helpers and Their Tools',
      conceptContent: 'A village functions because people specialize in different helpful professions. The Farmer grows grains; the Potter shapes earthen vessels; the Weaver weaves cotton clothes; the Carpenter crafts wooden doors and ploughs; the Doctor/Nurse treats sickness; and the Teacher educates children.',
      conceptNarration: 'Every occupation deserves respect. Community helpers make our daily life safe and comfortable.',
      illustratedSvg: 'community-helpers',
      activityTitle: '3. Helper and Tool Match',
      activityInstructions: 'Match each community hero to the special tool of their trade!',
      activityType: 'matching',
      activityData: [
        { id: 'p1', question: 'Farmer 🌾', answer: 'Plough & Sickle' },
        { id: 'p2', question: 'Potter 🏺', answer: 'Rotating Clay Wheel' },
        { id: 'p3', question: 'Tailor 🧵', answer: 'Needle & Measuring Tape' },
        { id: 'p4', question: 'Village Nurse 🩺', answer: 'Stethoscope & First-aid Kit' }
      ],
      quizTitle: '4. Village Helpers Quiz',
      questions: [
        {
          text: 'Who prepares the soil, sows the seeds, and grows wheat and rice for us to eat?',
          options: [
            { text: 'The Farmer', isCorrect: true },
            { text: 'The Postman', isCorrect: false },
            { text: 'The Barber', isCorrect: false }
          ],
          hint: 'They work in the green fields under the open sun.',
          explanation: 'Farmers nurture crops through the seasons to feed our communities.'
        },
        {
          text: 'Should we respect all kinds of honest work equally?',
          options: [
            { text: 'Yes, every honest job has dignity and importance', isCorrect: true },
            { text: 'No, only some jobs matter', isCorrect: false }
          ],
          hint: 'Without each helper, society cannot function smoothly.',
          explanation: 'Dignity of labor teaches us to honor and respect all honest workers.'
        }
      ]
    },
    hi: {
      title: 'हमारे गाँव के मददगार: श्रम की गरिमा',
      summary: 'किसान, कुम्हार, बढ़ई, बुनकर और स्वास्थ्य कर्मियों के अमूल्य योगदान को पहचानें।'
    },
    kn: {
      title: 'ನಮ್ಮ ಹಳ್ಳಿಯ ಸಹಾಯಕರು: ಶ್ರಮದ ಗೌರವ',
      summary: 'ರೈತ, ಕುಂಬಾರ, ನೇಕಾರ ಮತ್ತು ಶಿಕ್ಷಕರ ಮಹತ್ವದ ಸೇವೆಗಳನ್ನು ಗೌರವಿಸುವುದು.'
    },
    te: {
      title: 'మన గ్రామీణ సహాయకులు: శ్రమ గౌరవం',
      summary: 'రైతులు, కుమ్మరి, వడ్రంగి మరియు ఉపాధ్యాయుల సేవలను గౌరవించడం.'
    },
    ta: {
      title: 'நமது சமூக உதவியாளர்கள்: உழைப்பின் பெருமை',
      summary: 'உழவர், நெசவாளர், மருத்துவர் உள்ளிட்ட பலரின் உன்னத உழைப்பை அறிவோம்.'
    },
    ml: {
      title: 'നമ്മുടെ സഹായികൾ: തൊഴിലിന്റെ മഹത്വം',
      summary: 'കർഷകനും നെയ്ത്തുകാരനും ആരോഗ്യപ്രവർത്തകരും നാടിനായി ചെയ്യുന്ന സേവനങ്ങൾ.'
    },
    mr: {
      title: 'आपल्या गावातील मदतनीस: श्रमाची प्रतिष्ठा',
      summary: 'शेतकरी, कुंभार, सुतार व शिक्षकांचे समाजातील योगदान जाणून घ्या.'
    },
    bn: {
      title: 'আমাদের গাঁয়ের সেবক ও কারিগর: শ্রমের মর্যাদা',
      summary: 'চাষি, তাঁতি, কুমার ও চিকিৎসকদের মেহনত এবং সমাজ গঠনে তাঁদের ভূমিকার পাঠ।'
    }
  }),

  // ==========================================
  // CLASS 3
  // ==========================================

  // Class 3 - EVS
  buildCourse({
    id: 'lesson-evs-c3',
    classNumber: 3,
    subjectCode: 'evs',
    slug: 'leaves-herbal-plants-c3',
    difficultyLevel: 'beginner',
    authorName: 'Dr. Vaidya Prabhakar',
    estimatedMinutes: 12,
    en: {
      title: 'Leaves & Herbal Plants: Neem, Tulsi & Green Gardens',
      summary: 'Explore leaf patterns, aromas, and traditional herbal remedies passed down through village elders.',
      storyTitle: '1. Grandma’s Herbal Garden',
      storyContent: 'When Ravi had a slight cough, his grandmother did not run to the clinic right away. She walked to the earthen pot by the porch, plucked fresh green Tulsi leaves, crushed them with ginger and wild honey. Within hours, Ravi felt soothing relief. "Nature is our first doctor," she smiled.',
      storyNarration: 'Grandmother prepared soothing herbal tea from Tulsi and ginger. Traditional plants protect health.',
      conceptTitle: '2. Diversity of Leaves and Herbal Traditions',
      conceptContent: 'Leaves have different shapes (oval, needle, heart, round), textures (smooth, rough, waxy), and margins (toothed, smooth). Many village plants have proven healing powers: Neem repels insects and heals skin; Tulsi calms colds; Mint aids digestion; and Aloe Vera cools burns.',
      conceptNarration: 'Leaves have unique shapes and smells. Plants like Neem and Tulsi are natural healers.',
      illustratedSvg: 'plant-diagram',
      activityTitle: '3. Plant Healing Matcher',
      activityInstructions: 'Match each medicinal leaf with its traditional healing power!',
      activityType: 'matching',
      activityData: [
        { id: 'p1', question: 'Neem Leaf 🍃', answer: 'Bitter tonic & natural insect defender' },
        { id: 'p2', question: 'Tulsi (Holy Basil) 🌱', answer: 'Soothing tea for cough and immunity' },
        { id: 'p3', question: 'Aloe Vera 🌵', answer: 'Cooling gel for skin burns' },
        { id: 'p4', question: 'Banana Leaf 🍌', answer: 'Traditional biodegradable dining plate' }
      ],
      quizTitle: '4. Herbal Plants Quiz',
      questions: [
        {
          text: 'Which tree leaf is famously known for its bitter taste and powerful insect-repelling properties?',
          options: [
            { text: 'Neem Tree', isCorrect: true },
            { text: 'Mango Tree', isCorrect: false },
            { text: 'Rose Bush', isCorrect: false }
          ],
          hint: 'Villagers place its dried leaves in grain storage bins.',
          explanation: 'Neem has antimicrobial and insecticidal qualities used in traditional Indian medicine.'
        },
        {
          text: 'What are the tiny openings on the underside of green leaves that breathe in air?',
          options: [
            { text: 'Stomata', isCorrect: true },
            { text: 'Root caps', isCorrect: false }
          ],
          hint: 'They act like microscopic leaf nostrils.',
          explanation: 'Stomata allow gas exchange: taking in carbon dioxide and releasing oxygen and water vapor.'
        }
      ]
    },
    hi: {
      title: 'पत्तियाँ और औषधीय पौधे: नीम, तुलसी और घरेलू नुस्खे',
      summary: 'विभिन्न प्रकार की पत्तियों की पहचान और पारंपरिक भारतीय जड़ी-बूटियों का वैज्ञानिक ज्ञान।'
    },
    kn: {
      title: 'ಎಲೆಗಳು ಮತ್ತು ಗಿಡಮೂಲಿಕೆಗಳು: ಬೇವು, ತುಳಸಿ ಮತ್ತು ಆಯುರ್ವೇದ',
      summary: 'ವಿವಿಧ ಆಕಾರದ ಎಲೆಗಳು ಮತ್ತು ಸಾಂಪ್ರದಾಯಿಕ ಔಷಧೀಯ ಸಸ್ಯಗಳ ಗುಣಗಳನ್ನು ತಿಳಿಯಿರಿ.'
    },
    te: {
      title: 'ఆకులు మరియు ఔషధ మొక్కలు: వేప, తులసి ప్రాముఖ్యత',
      summary: 'వివిధ రకాల ఆకులు మరియు సాంప్రదాయ ఔషధ మొక్కల ఔన్నత్యాన్ని తెలుసుకోండి.'
    },
    ta: {
      title: 'இலைகளும் மூலிகைகளும்: வேம்பு, துளசி மருத்துவ குணங்கள்',
      summary: 'கிராமத்து மூலிகைகள் மற்றும் இயற்கை மருத்துவத்தின் சிறப்புகளை கற்போம்.'
    },
    ml: {
      title: 'ഇലകളും ഔഷധസസ്യങ്ങളും: തുളസിയും വേപ്പും',
      summary: 'പരമ്പരാഗത നാട്ടറിവുകളും ഔഷധസസ്യങ്ങളുടെ ഉപയോഗങ്ങളും പഠിക്കുക.'
    },
    mr: {
      title: 'पाने आणि औषधी वनस्पती: कडुलिंब, तुळस व घरगुती उपाय',
      summary: 'विविध पानांचे प्रकार आणि पारंपरिक आयुर्वेदाचे घरगुती महत्त्व जाणून घ्या.'
    },
    bn: {
      title: 'পাতা ও ভেষজ উদ্ভিদ: নিম, তুলসী ও ভেষজ গুণাবলি',
      summary: 'গাছের পাতার নানা রূপ এবং রোগ নিরাময়ে ভেষজ উদ্ভিদের সনাতন ব্যবহার।'
    }
  }),

  // Class 3 - Science
  buildCourse({
    id: 'lesson-sci-c3',
    classNumber: 3,
    subjectCode: 'sci',
    slug: 'what-animals-eat-c3',
    difficultyLevel: 'beginner',
    authorName: 'Prof. K. Swaminathan',
    estimatedMinutes: 12,
    en: {
      title: 'What Animals Eat: Herbivores, Carnivores & Food Chains',
      summary: 'Classify animals according to their food habits and understand how the sun sustains all life.',
      storyTitle: '1. The Meadow at Sunset',
      storyContent: 'Standing near the edge of the village pasture, children saw a herd of cows chewing tender green grass. Above them, a hawk soared, hunting for field mice. In the pond, ducks nibbled water weeds and tiny snails. "Look," the teacher said, "nature has a place for every appetite!"',
      storyNarration: 'Animals eat different foods: cows graze grass, hawks hunt, and ducks eat both plants and snails.',
      conceptTitle: '2. Diets and the Food Chain',
      conceptContent: 'Animals are grouped by what they eat: Herbivores eat only plants (cows, deer, goats, rabbits); Carnivores eat only other animals (lions, leopards, eagles, snakes); Omnivores eat both plants and meat (crows, bears, dogs, humans). All energy starts from the Sun!',
      conceptNarration: 'Herbivores eat plants, carnivores eat meat, and omnivores eat both. The sun gives energy to all.',
      illustratedSvg: 'food-chain',
      activityTitle: '3. Diet Sorter Challenge',
      activityInstructions: 'Sort each creature into its scientific dietary category!',
      activityType: 'matching',
      activityData: [
        { id: 'p1', question: 'Dairy Cow 🐄', answer: 'Herbivore (Plants only)' },
        { id: 'p2', question: 'Forest Leopard 🐆', answer: 'Carnivore (Meat only)' },
        { id: 'p3', question: 'Common Crow 🐦', answer: 'Omnivore (Grains & Insects)' },
        { id: 'p4', question: 'Green Grasshopper 🦗', answer: 'Herbivore (Leaves & Grass)' }
      ],
      quizTitle: '4. Animal Diets Quiz',
      questions: [
        {
          text: 'Which category best describes a village goat that grazes on shrubs, grass, and leaves?',
          options: [
            { text: 'Herbivore', isCorrect: true },
            { text: 'Carnivore', isCorrect: false },
            { text: 'Decomposer', isCorrect: false }
          ],
          hint: 'Goats only eat plant matter.',
          explanation: 'Herbivores are plant-eating animals with flat teeth designed for grinding fibers.'
        },
        {
          text: 'Where does the primary energy in every food chain originally come from?',
          options: [
            { text: 'The Sun (Sunlight)', isCorrect: true },
            { text: 'Underground coal', isCorrect: false }
          ],
          hint: 'It shines down from the sky and helps green plants grow.',
          explanation: 'Sunlight is captured by green plants through photosynthesis, starting the food chain.'
        }
      ]
    },
    hi: {
      title: 'जीव-जंतुओं का भोजन: शाकाहारी, मांसाहारी और खाद्य श्रृंखला',
      summary: 'पेड़-पौधे और मांस खाने वाले प्राणियों का वर्गीकरण और सूर्य की ऊर्जा का महत्व।'
    },
    kn: {
      title: 'ಪ್ರಾಣಿಗಳ ಆಹಾರ ಪದ್ಧತಿ: ಸಸ್ಯಹಾರಿ, ಮಾಂಸಾಹಾರಿ ಮತ್ತು ಆಹಾರ ಸರಪಳಿ',
      summary: 'ಪ್ರಾಣಿಗಳನ್ನು ಅವುಗಳ ಆಹಾರಕ್ಕೆ ತಕ್ಕಂತೆ ವರ್ಗೀಕರಿಸುವುದು ಮತ್ತು ಪರಿಸರ ಸಮತೋಲನ ತಿಳಿಯುವುದು.'
    },
    te: {
      title: 'జంతువుల ఆహారపు అలవాట్లు: శాకాహారులు, మాంసాహారులు',
      summary: 'జంతువులు తినే ఆహారాన్ని బట్టి వర్గీకరణ మరియు ఆహార గొలుసు పరిచయం.'
    },
    ta: {
      title: 'விலங்குகளின் உணவு முறைகள்: தாவர உண்ணிகள், ஊன் உண்ணிகள்',
      summary: 'விலங்குகள் உண்ணும் உணவின் அடிப்படையில் வகைப்படுத்தலும் உணவுச் சங்கிலியும்.'
    },
    ml: {
      title: 'ജീവികളുടെ ആഹാരരീതികൾ: സസ്യഭുക്കുകളും മാംസഭുക്കുകളും',
      summary: 'ഭക്ഷണ ശീലങ്ങളുടെ അടിസ്ഥാനത്തിൽ ജീവികളെ തരംതിരിക്കലും ആഹാരശൃംഖലയും.'
    },
    mr: {
      title: 'प्राण्यांचे अन्न: शाकाहारी, मांसाहारी आणि अन्नसाखळी',
      summary: 'प्राण्यांच्या खाण्याच्या सवयींवरून त्यांचे वर्गीकरण आणि अन्नसाखळीची माहिती.'
    },
    bn: {
      title: 'প্রাণীদের খাদ্যাভ্যাস: তৃণভোজী, মাংসাশী ও খাদ্যশৃঙ্খল',
      summary: 'কে কী খায় তার বৈজ্ঞানিক শ্রেণিবিন্যাস এবং সূর্যের শক্তিপ্রবাহের ধারণা।'
    }
  }),

  // Class 3 - English Learning
  buildCourse({
    id: 'lesson-eng-c3',
    classNumber: 3,
    subjectCode: 'eng',
    slug: 'describing-words-adjectives-c3',
    difficultyLevel: 'beginner',
    authorName: 'John Rozario',
    estimatedMinutes: 12,
    en: {
      title: 'Describing Our Village: Learning Adjectives',
      summary: 'Use colourful describing words (adjectives) to talk about sizes, colours, textures, and tastes.',
      storyTitle: '1. A Postcard from Chandanpur',
      storyContent: 'Pooja wrote a letter to her city friend: "Our village has a huge banyan tree. The green parrots fly over golden mustard fields. In the morning, sweet sugarcane juice is pressed at the wooden mill. Come visit soon!" Her teacher smiled: "Huge, green, golden, sweet — notice how these words paint a picture!"',
      storyNarration: 'Pooja described her village using words like huge, green, golden, and sweet. These are adjectives.',
      conceptTitle: '2. What are Adjectives?',
      conceptContent: 'Adjectives are words that describe nouns (people, places, animals, or things). They tell: What color? (blue sky, white cow); What size? (tall palm, tiny ant); How many? (three apples); or How does it feel or taste? (sweet mango, cold river water).',
      conceptNarration: 'Adjectives tell us more about nouns: their color, size, taste, and feelings.',
      illustratedSvg: 'hero-kids',
      activityTitle: '3. Adjective Finder Match',
      activityInstructions: 'Match each noun with its most fitting describing adjective!',
      activityType: 'matching',
      activityData: [
        { id: 'p1', question: 'Ripe Guava', answer: 'Sweet & Crunchy' },
        { id: 'p2', question: 'Banyan Tree', answer: 'Ancient & Huge' },
        { id: 'p3', question: 'Monsoon Stream', answer: 'Swift & Cold' },
        { id: 'p4', question: 'Clay Pottery', answer: 'Smooth & Round' }
      ],
      quizTitle: '4. Adjectives Mastery Quiz',
      questions: [
        {
          text: 'In the sentence "Ravi wore a bright yellow shirt", which word is an adjective describing the shirt?',
          options: [
            { text: 'bright yellow', isCorrect: true },
            { text: 'wore', isCorrect: false },
            { text: 'shirt', isCorrect: false }
          ],
          hint: 'It tells what color the shirt is.',
          explanation: '"Bright yellow" describes the appearance of the noun "shirt".'
        },
        {
          text: 'Which adjective best describes fresh green chillies from the farm garden?',
          options: [
            { text: 'Spicy', isCorrect: true },
            { text: 'Sweet', isCorrect: false }
          ],
          hint: 'Think about how chillies taste when you bite them!',
          explanation: '"Spicy" describes the pungent taste of fresh green chillies.'
        }
      ]
    },
    hi: {
      title: 'गाँव का वर्णन: विशेषण (Adjectives) की पहचान',
      summary: 'रंग, रूप, आकार और स्वाद बताने वाले विशेषण शब्दों का सरल एवं रोचक अभ्यास।'
    },
    kn: {
      title: 'ಹಳ್ಳಿಯ ಸೌಂದರ್ಯ: ನಾಮವಿಶೇಷಣಗಳ (Adjectives) ಬಳಕೆ',
      summary: 'ಬಣ್ಣ, ಗಾತ್ರ, ರುಚಿ ಮತ್ತು ಗುಣಗಳನ್ನು ವಿವರಿಸುವ ಇಂಗ್ಲಿಷ್ ವಿಶೇಷಣಗಳನ್ನು ಕಲಿಯಿರಿ.'
    },
    te: {
      title: 'వర్ణనాత్మక పదాలు (Adjectives) నేర్చుకుందాం',
      summary: 'రంగులు, పరిమాణాలు, రుచులను తెలిపే ఇంగ్లీష్ విశేషణాల పరిచయం.'
    },
    ta: {
      title: 'விவரிக்கும் சொற்கள்: பெயரடை (Adjectives) கற்றல்',
      summary: 'நிறம், வடிவம், சுவை ஆகியவற்றைக் குறிக்கும் ஆங்கில விவரிப்புச் சொற்கள்.'
    },
    ml: {
      title: 'വിശേഷണ പദങ്ങൾ (Adjectives) എളുപ്പത്തിൽ പഠിക്കാം',
      summary: 'നിറം, വലിപ്പം, സ്വഭാവം എന്നിവ വ്യക്തമാക്കുന്ന ഇംഗ്ലീഷ് വാക്കുകൾ.'
    },
    mr: {
      title: 'आपले गाव आणि विशेषणे (Adjectives) ची गंमत',
      summary: 'रंग, आकार, चव दर्शवणारे इंग्रजी विशेषण शब्द वापरायला शिका.'
    },
    bn: {
      title: 'গাঁয়ের রূপ ও ইংরেজি বিশেষণ (Adjectives)',
      summary: 'রং, রূপ, স্বাদ ও আকার বর্ণনাকারী ইংরেজি শব্দ চেনার সহজ পাঠ।'
    }
  }),

  // Class 3 - Regional Language
  buildCourse({
    id: 'lesson-lang-c3',
    classNumber: 3,
    subjectCode: 'lang',
    slug: 'panchatantra-tales-c3',
    difficultyLevel: 'beginner',
    authorName: 'Pandit Vishnu Sharma Edition',
    estimatedMinutes: 12,
    en: {
      title: 'Panchatantra Wisdom: The Thirsty Crow & Moral Tales',
      summary: 'Build reading fluency and learn timeless ethical values through classic Indian fables.',
      storyTitle: '1. The Clever Crow and the Pitcher',
      storyContent: 'On a blazing summer afternoon, a thirsty crow searched the village for water. He found a tall clay pitcher with water deep at the bottom, beyond his beak’s reach. Instead of giving up, he picked pebbles one by one in his beak and dropped them into the pitcher. Slowly, the water rose to the brim!',
      storyNarration: 'The thirsty crow dropped pebbles into the pitcher until the water rose. Wisdom and patience win.',
      conceptTitle: '2. Story Structure and Moral Lessons',
      conceptContent: 'Every fable has three parts: Beginning (introducing characters and setting), Middle (the problem or challenge), and Ending (the clever resolution and moral lesson). Reading aloud with clear pauses strengthens pronunciation and expression in your mother tongue.',
      conceptNarration: 'Stories have a beginning, a problem, and a wise solution. Reading aloud builds confidence.',
      illustratedSvg: 'panchayat-tree',
      activityTitle: '3. Story Sequence Puzzle',
      activityInstructions: 'Put the story steps in their correct chronological order!',
      activityType: 'sorting',
      activityData: [
        { id: 's1', step: '1. The crow is thirsty in hot summer' },
        { id: 's2', step: '2. Finds a pitcher with water too low to reach' },
        { id: 's3', step: '3. Patiently drops small stones into the pitcher' },
        { id: 's4', step: '4. Water rises to top; crow drinks happily' }
      ],
      quizTitle: '4. Fable Comprehension Quiz',
      questions: [
        {
          text: 'What moral lesson does the story of the clever crow teach us?',
          options: [
            { text: 'Where there is a will and patience, there is a way', isCorrect: true },
            { text: 'Patience is a waste of time', isCorrect: false },
            { text: 'Always rely on others to help', isCorrect: false }
          ],
          hint: 'The crow did not give up and used his brain!',
          explanation: 'Using intelligent thought, calmness, and perseverance overcomes tough challenges.'
        },
        {
          text: 'Why did the water level rise inside the pitcher?',
          options: [
            { text: 'The heavy pebbles took up space at the bottom', isCorrect: true },
            { text: 'It started raining inside the pitcher', isCorrect: false }
          ],
          hint: 'Think of water displacement.',
          explanation: 'Dropping solid stones displaces the water volume upwards.'
        }
      ]
    },
    hi: {
      title: 'पंचतंत्र की ज्ञानवर्धक कहानियाँ: चतुर कौआ और नीति पाठ',
      summary: 'कहानियों के माध्यम से भाषा प्रवाह, शुद्ध वाचन और जीवन मूल्यों की समझ।'
    },
    kn: {
      title: 'ಪಂಚತಂತ್ರದ ನೀತಿಕಥೆಗಳು: ಜಾಣ ಕಾಗೆ ಮತ್ತು ಬದುಕಿನ ಪಾಠ',
      summary: 'ಕಥೆಗಳ ಮೂಲಕ ಓದುವ ವೇಗ, ಸ್ಪಷ್ಟ ಉಚ್ಚಾರಣೆ ಮತ್ತು ನೈತಿಕ ಮೌಲ್ಯಗಳನ್ನು ಕಲಿಯಿರಿ.'
    },
    te: {
      title: 'పంచతంత్ర కథలు: తెలివైన కాకి మరియు నీతి వాక్యాలు',
      summary: 'కథలను స్పష్టంగా చదవడం మరియు సమస్యలను ఉపాయంతో పరిష్కరించుకోవడం.'
    },
    ta: {
      title: 'பஞ்சதந்திரக் கதைகள்: புத்திசாலி காகமும் நீதி போதனைகளும்',
      summary: 'கதைகள் வழியே சரளமாக வாசிக்கவும் நற்பண்புகளை வளர்க்கவும் பயிலுங்கள்.'
    },
    ml: {
      title: 'പഞ്ചതന്ത്രം കഥകൾ: ബുദ്ധിമാനായ കാക്കയും സാരോപദേശവും',
      summary: 'വായനാശീലം വളർത്താനും വിവേകത്തോടെ പ്രശ്നങ്ങൾ പരിഹരിക്കാനും പഠിക്കാം.'
    },
    mr: {
      title: 'पंचतंत्रातील बोधकथा: हुशार कावळा आणि नीतीमूल्ये',
      summary: 'कथा वाचनातून भाषा समृद्धी आणि समस्या निवारणाची युक्ती शिका.'
    },
    bn: {
      title: 'পঞ্চতন্ত্রের নীতিগল্প: চালাক কাকের উপাখ্যান',
      summary: 'গল্প পাঠের মাধ্যমে মাতৃভাষার সাবলীল চর্চা ও জীবনের অমূল্য শিক্ষার পাঠ।'
    }
  }),

  // Class 3 - Social Studies
  buildCourse({
    id: 'lesson-soc-c3',
    classNumber: 3,
    subjectCode: 'soc',
    slug: 'village-transport-roads-c3',
    difficultyLevel: 'beginner',
    authorName: 'Sanjay Deshmukh',
    estimatedMinutes: 12,
    en: {
      title: 'Village Travel, Transport & Community Roads',
      summary: 'Explore bullock carts, bicycles, tractors, and buses that connect rural homes to weekly markets and towns.',
      storyTitle: '1. Journey to the Weekly Market',
      storyContent: 'On Tuesday dawn, Farmer Basappa hitched his bullocks to the wooden cart laden with sweet golden jaggery. Beside them on the paved road, a green state transport bus zoomed by, honking cheerfully as it carried college students to town. "Roads are the veins of our village," grandfather remarked.',
      storyNarration: 'Farmers use bullock carts, bicycles, and buses to travel and transport farm harvest to markets.',
      conceptTitle: '2. Modes of Transport and Road Safety',
      conceptContent: 'Rural transportation includes traditional modes (walking, bullock carts) and modern vehicles (bicycles, motorbikes, tractors, tempo vans, and state buses). Paved roads connect villages to hospitals, schools, and markets. Always walk on the safe side facing oncoming traffic!',
      conceptNarration: 'Buses, tractors, and carts connect villages to markets. Road safety protects every traveler.',
      illustratedSvg: 'village-transport',
      activityTitle: '3. Transport Mode Classifier',
      activityInstructions: 'Match each vehicle to its primary rural transport use!',
      activityType: 'matching',
      activityData: [
        { id: 'p1', question: 'Bullock Cart 🐂', answer: 'Carrying heavy grain sacks to local godown' },
        { id: 'p2', question: 'State Transport Bus 🚌', answer: 'Traveling between village and town hospital' },
        { id: 'p3', question: 'Tractor with Trolley 🚜', answer: 'Plowing fields & hauling sugarcane harvest' },
        { id: 'p4', question: 'Bicycle 🚲', answer: 'Quick, zero-pollution commute for students' }
      ],
      quizTitle: '4. Village Travel Quiz',
      questions: [
        {
          text: 'Which eco-friendly vehicle produces zero smoke and helps children stay healthy while commuting to school?',
          options: [
            { text: 'Bicycle', isCorrect: true },
            { text: 'Diesel truck', isCorrect: false },
            { text: 'Motorbike', isCorrect: false }
          ],
          hint: 'You pedal with your feet!',
          explanation: 'Bicycles provide clean, zero-emission transportation while offering great physical exercise.'
        },
        {
          text: 'Why are all-weather paved roads (Pradhan Mantri Gram Sadak) vital for rural villages?',
          options: [
            { text: 'They allow ambulances, buses, and farm produce to travel easily in all seasons', isCorrect: true },
            { text: 'They are only meant for racing', isCorrect: false }
          ],
          hint: 'Think about monsoons when muddy paths get blocked.',
          explanation: 'All-weather roads ensure uninterrupted access to healthcare, education, and wholesale agricultural markets.'
        }
      ]
    },
    hi: {
      title: 'गाँव का आवागमन: बैलगाड़ी से लेकर सरकारी बस तक',
      summary: 'ग्रामीण परिवहन के साधन, सड़कों का महत्व और सड़क सुरक्षा के बुनियादी नियम।'
    },
    kn: {
      title: 'ಹಳ್ಳಿಯ ಸಂಚಾರ: ಎತ್ತಿನ ಬಂಡಿಯಿಂದ ಸರಕಾರಿ ಬಸ್ಸಿನವರೆಗೆ',
      summary: 'ಗ್ರಾಮೀಣ ಸಾರಿಗೆಯ ವಿಧಾನಗಳು, ರಸ್ತೆಗಳ ಮಹತ್ವ ಮತ್ತು ಸಂಚಾರ ಸುರಕ್ಷತೆ ತಿಳಿಯಿರಿ.'
    },
    te: {
      title: 'గ్రామీణ రవాణా: ఎడ్ల బండి నుండి ఆర్టీసీ బస్సు వరకు',
      summary: 'రవాణా సాధనాలు, మార్కెట్లకు అనుసంధానం మరియు రోడ్డు భద్రతా నియమాలు.'
    },
    ta: {
      title: 'கிராமத்து போக்குவரத்து: மாட்டு வண்டி முதல் பேருந்து வரை',
      summary: 'கிராமப்புறப் போக்குவரத்தும் சாலைப் பாதுகாப்பும் பற்றிய எளிய விளக்கம்.'
    },
    ml: {
      title: 'ഗ്രാമീണ ഗതാഗതം: കാളവണ്ടി മുതൽ ബസ്സുകൾ വരെ',
      summary: 'ഗതാഗത മാർഗ്ഗങ്ങളും റോഡ് സുരക്ഷയും എങ്ങനെ കൃഷിയെയും വിദ്യാലയങ്ങളെയും സഹായിക്കുന്നു.'
    },
    mr: {
      title: 'गावातील वाहतूक व्यवस्था: बैलगाडी ते एसटी बस',
      summary: 'वाहतुकीची विविध साधने आणि ग्रामीण रस्त्यांचे महत्त्व जाणून घ्या.'
    },
    bn: {
      title: 'গাঁয়ের পথঘাট ও যোগাযোগ: গোরুর গাড়ি থেকে সরকারি বাস',
      summary: 'গ্রামীণ যাতায়াত ব্যবস্থা, হাটের যোগাযোগ এবং পথ নিরাপত্তার নিয়মাবলী।'
    }
  }),

  // ==========================================
  // CLASS 4
  // ==========================================

  // Class 4 - Mathematics
  buildCourse({
    id: 'lesson-math-c4',
    classNumber: 4,
    subjectCode: 'math',
    slug: 'measurements-litres-metres-c4',
    difficultyLevel: 'intermediate',
    authorName: 'Prof. Ramanujan Academy',
    estimatedMinutes: 14,
    en: {
      title: 'Everyday Measurements: Litres of Milk, Metres & Grams',
      summary: 'Measure volume, length, and mass using standard units like litres, millilitres, metres, and kilograms.',
      storyTitle: '1. Market Day with Shambu',
      storyContent: 'At the village dairy cooperative, Shambu watched milk poured into a shiny 1-litre metal jug. Next, his sister bought 3 metres of colourful ribbon from the cloth merchant. Finally, they bought 500 grams of yellow lentils. "Everything we buy has a standard measurement," Shambu realized.',
      storyNarration: 'Shambu measured milk in litres, ribbon in metres, and lentils in grams at the market.',
      conceptTitle: '2. Metric Units of Measurement',
      conceptContent: 'We measure different physical quantities using standard metric units: Length is measured in Metres (m) and Centimetres (cm) where 1 m = 100 cm; Volume of liquids is measured in Litres (L) and Millilitres (mL) where 1 L = 1000 mL; Mass/Weight is measured in Kilograms (kg) and Grams (g) where 1 kg = 1000 g.',
      conceptNarration: '1 Metre is 100 Centimetres. 1 Litre is 1000 Millilitres. 1 Kilogram is 1000 Grams.',
      illustratedSvg: 'measurement-tools',
      activityTitle: '3. Metric Unit Matching',
      activityInstructions: 'Match each item to its correct standard measurement unit!',
      activityType: 'matching',
      activityData: [
        { id: 'p1', question: 'Fresh cow milk from dairy', answer: 'Litres (L) / Millilitres (mL)' },
        { id: 'p2', question: 'Rope for village well bucket', answer: 'Metres (m)' },
        { id: 'p3', question: 'Sack of harvested basmati rice', answer: 'Kilograms (kg)' },
        { id: 'p4', question: 'Length of classroom blackboard eraser', answer: 'Centimetres (cm)' }
      ],
      quizTitle: '4. Measurements Quiz',
      questions: [
        {
          text: 'How many millilitres (mL) make one full litre of milk?',
          options: [
            { text: '1,000 mL', isCorrect: true },
            { text: '100 mL', isCorrect: false },
            { text: '10 mL', isCorrect: false }
          ],
          hint: 'The prefix "milli" means one-thousandth.',
          explanation: 'There are exactly 1,000 millilitres in 1 litre (1 L = 1000 mL).'
        },
        {
          text: 'If a bag of potatoes weighs 2 kilograms, how many grams is that?',
          options: [
            { text: '2,000 grams', isCorrect: true },
            { text: '200 grams', isCorrect: false }
          ],
          hint: 'Since 1 kg = 1000 g, multiply 2 by 1000.',
          explanation: '2 kg = 2 × 1,000 g = 2,000 grams.'
        }
      ]
    },
    hi: {
      title: 'दैनिक जीवन में मापन: लीटर, मीटर और किलोग्राम',
      summary: 'दूध की धार से लेकर कपड़े की नाप तक, मानक इकाइयों का सरल गणितीय अभ्यास।'
    },
    kn: {
      title: 'ದೈನಂದಿನ ಅಳತೆಗಳು: ಲೀಟರ್, ಮೀಟರ್ ಮತ್ತು ಕಿಲೋಗ್ರಾಂ',
      summary: 'ಹಾಲು, ಬಟ್ಟೆ ಮತ್ತು ಧಾನ್ಯಗಳನ್ನು ನಿಖರವಾಗಿ ಅಳೆಯುವ ಮೆಟ್ರಿಕ್ ಪದ್ಧತಿಯನ್ನು ಕಲಿಯಿರಿ.'
    },
    te: {
      title: 'నిత్యజీవితంలో కొలతలు: లీటర్లు, మీటర్లు మరియు కిలోగ్రాములు',
      summary: 'ద్రవాలు, పొడవు మరియు బరువులను కొలిచే ప్రామాణిక కొలత పద్ధతులు.'
    },
    ta: {
      title: 'அளவீடுகள்: லிட்டர், மீட்டர் மற்றும் கிலோகிராம்',
      summary: 'நீளம், நிறை மற்றும் கொள்ளளவை அளக்கும் முறைகளை அறிவோம்.'
    },
    ml: {
      title: 'അളവുകൾ: ലിറ്റർ, മീറ്റർ, കിലോഗ്രാം',
      summary: 'പാലും തുണിയും ധാന്യങ്ങളും ശരിയായി അളക്കുന്ന അന്താരാഷ്ട്ര സമ്പ്രദായം.'
    },
    mr: {
      title: 'दैनंदिन मापन पद्धती: लिटर, मीटर आणि किलोग्रॅम',
      summary: 'दूध, कापड आणि धान्याचे अचूक वजन आणि मापन करणे शिका.'
    },
    bn: {
      title: 'প্রতিদিনের পরিমাপ: লিটার, মিটার ও কিলোগ্রাম',
      summary: 'দুধ, কাপড় ও শস্যের সঠিক মাপজোখের আন্তর্জাতিক মেট্রিক পদ্ধতি।'
    }
  }),

  // Class 4 - Science
  buildCourse({
    id: 'lesson-sci-c4',
    classNumber: 4,
    subjectCode: 'sci',
    slug: 'plant-food-kitchen-photosynthesis-c4',
    difficultyLevel: 'intermediate',
    authorName: 'Dr. C. V. Raman Science Forum',
    estimatedMinutes: 14,
    en: {
      title: 'The Plant Food Kitchen: Leaves, Sunlight & Chlorophyll',
      summary: 'Discover how green leaves act as solar kitchens, combining sunlight, water, and carbon dioxide to make food and oxygen.',
      storyTitle: '1. The Secret of Green Leaves',
      storyContent: 'Sitting in the school garden, Ananya held up a peepal leaf to the sun. Tiny delicate veins networked through the translucent green leaf. "Teacher," she asked, "animals eat food from outside, but where does a tree get its breakfast?" Her teacher smiled: "Leaves cook food using sunlight!"',
      storyNarration: 'Ananya discovered that green leaves use sunlight and water to make food for the whole tree.',
      conceptTitle: '2. How Photosynthesis Works',
      conceptContent: 'Photosynthesis is the process where green plants make their food: 1. Roots absorb water and minerals from soil; 2. Stomata on leaves take in carbon dioxide from air; 3. Green pigment called Chlorophyll traps sunlight; 4. The plant produces glucose (food) and releases fresh Oxygen for us to breathe!',
      conceptNarration: 'Plants take water from soil, carbon dioxide from air, and sunlight with chlorophyll to make food and oxygen.',
      illustratedSvg: 'plant-kitchen',
      activityTitle: '3. Plant Kitchen Recipe Match',
      activityInstructions: 'Match each raw ingredient of photosynthesis to its crucial role!',
      activityType: 'matching',
      activityData: [
        { id: 'p1', question: 'Sunlight ☀️', answer: 'Solar energy powerhouse' },
        { id: 'p2', question: 'Chlorophyll 🌿', answer: 'Green trap that captures light rays' },
        { id: 'p3', question: 'Water & Minerals 💧', answer: 'Absorbed by underground root hairs' },
        { id: 'p4', question: 'Oxygen Output 💨', answer: 'Life-giving gas released into atmosphere' }
      ],
      quizTitle: '4. Photosynthesis Quiz',
      questions: [
        {
          text: 'What is the green pigment in plant leaves that absorbs solar energy called?',
          options: [
            { text: 'Chlorophyll', isCorrect: true },
            { text: 'Hemoglobin', isCorrect: false },
            { text: 'Melanin', isCorrect: false }
          ],
          hint: 'It gives leaves their vibrant green color.',
          explanation: 'Chlorophyll absorbs sunlight needed to power the chemical reaction of photosynthesis.'
        },
        {
          text: 'What essential gas do plants release into the air as a byproduct of making their food?',
          options: [
            { text: 'Oxygen', isCorrect: true },
            { text: 'Carbon dioxide', isCorrect: false }
          ],
          hint: 'It is the gas all animals and humans breathe to survive.',
          explanation: 'Plants release oxygen gas into the atmosphere during photosynthesis.'
        }
      ]
    },
    hi: {
      title: 'पौधों की रसोई: पत्तियाँ, सूर्य का प्रकाश और क्लोरोफिल',
      summary: 'प्रकाश संश्लेषण (Photosynthesis) की जादुई प्रक्रिया और ऑक्सीजन निर्माण का वैज्ञानिक पाठ।'
    },
    kn: {
      title: 'ಸಸ್ಯಗಳ ಅಡುಗೆಮನೆ: ಎಲೆಗಳು, ಸೂರ್ಯನ ಬೆಳಕು ಮತ್ತು ದ್ಯುತಿಸಂಶ್ಲೇಷಣೆ',
      summary: 'ಹಸಿರು ಎಲೆಗಳು ಸೂರ್ಯನ ಬೆಳಕಿನಿಂದ ಆಹಾರ ತಯಾರಿಸುವ ದ್ಯುತಿಸಂಶ್ಲೇಷಣಾ ಕ್ರಿಯೆಯನ್ನು ತಿಳಿಯಿರಿ.'
    },
    te: {
      title: 'మొక్కల వంటగది: కిరణజన్య సంయోగక్రియ (Photosynthesis)',
      summary: 'ఆకులు సూర్యరశ్మి మరియు నీటితో ఆహారాన్ని ఎలా తయారు చేసుకుంటాయో తెలుసుకోండి.'
    },
    ta: {
      title: 'தாவரங்களின் சமையலறை: ஒளிச்சேர்க்கை (Photosynthesis)',
      summary: 'பச்சை இலைகள் சூரிய ஒளியைக் கொண்டு உணவு தயாரிக்கும் அதிசய நிகழ்வு.'
    },
    ml: {
      title: 'സസ്യങ്ങളുടെ അടുക്കള: പ്രകാശസംശ്ലേഷണം (Photosynthesis)',
      summary: 'സൂര്യപ്രകാശവും ഹരിതകവും ഉപയോഗിച്ച് സസ്യങ്ങൾ ഭക്ഷണം ഉണ്ടാക്കുന്നത് എങ്ങനെ.'
    },
    mr: {
      title: 'वनस्पतींचे स्वयंपाकघर: प्रकाशसंश्लेषण आणि ऑक्सिजन निर्मिती',
      summary: 'पाने सूर्यप्रकाश आणि क्लोरोफिलच्या मदतीने अन्न कसे तयार करतात ते शिका.'
    },
    bn: {
      title: 'গাছের রান্নাঘর: সালোকসংশ্লেষ ও প্রাণের অক্সিজেন',
      summary: 'সূর্যালোক, জল ও ক্লোরোফিলের সাহায্যে খাদ্য তৈরির অপূর্ব প্রাকৃতিক প্রক্রিয়া।'
    }
  }),

  // Class 4 - English Learning
  buildCourse({
    id: 'lesson-eng-c4',
    classNumber: 4,
    subjectCode: 'eng',
    slug: 'verb-tenses-daily-life-c4',
    difficultyLevel: 'intermediate',
    authorName: 'Evelyn D’Souza',
    estimatedMinutes: 14,
    en: {
      title: 'Time in Sentences: Past, Present & Simple Future',
      summary: 'Master verb tenses to clearly express what happened yesterday, what is happening today, and what will happen tomorrow.',
      storyTitle: '1. A Farmer’s Seasons of Time',
      storyContent: 'Grandfather sat with his grandchildren on the veranda: "Yesterday, the dark monsoon clouds brought heavy showers (Past). Today, we plant green paddy seedlings in the wet soil (Present). Tomorrow, the golden crop will ripen in the warm sun (Future)!" The children realized: verbs travel through time!',
      storyNarration: 'Grandfather explained: Yesterday it rained, today we plant, and tomorrow the crop will ripen.',
      conceptTitle: '2. Past, Present, and Future Tenses',
      conceptContent: 'Verb tenses show when an action happens: 1. Past Tense tells what already happened (walked, played, ate, sang); 2. Present Tense tells what happens regularly or right now (walks, plays, eats, sings); 3. Future Tense tells what will happen later (will walk, will play, will eat).',
      conceptNarration: 'Past tense tells what happened. Present tense tells what happens now. Future tense tells what will happen.',
      illustratedSvg: 'hero-kids',
      activityTitle: '3. Tense Time-Machine Match',
      activityInstructions: 'Match each sentence with its correct time tense!',
      activityType: 'matching',
      activityData: [
        { id: 'p1', question: 'Raju played kabaddi yesterday.', answer: 'Past Tense (Happened)' },
        { id: 'p2', question: 'Meena reads her English lesson now.', answer: 'Present Tense (Happening)' },
        { id: 'p3', question: 'We will visit the taluk fair tomorrow.', answer: 'Future Tense (Will happen)' },
        { id: 'p4', question: 'The farmer sowed wheat seeds last week.', answer: 'Past Tense (Happened)' }
      ],
      quizTitle: '4. Tense Mastery Quiz',
      questions: [
        {
          text: 'Which sentence is in the Simple Future tense?',
          options: [
            { text: 'We will plant five mango saplings tomorrow.', isCorrect: true },
            { text: 'We planted five mango saplings yesterday.', isCorrect: false },
            { text: 'We are planting saplings now.', isCorrect: false }
          ],
          hint: 'Look for the helping word "will"!',
          explanation: '"Will plant" indicates an action planned to take place in the future.'
        },
        {
          text: 'What is the past tense of the action word "eat"?',
          options: [
            { text: 'ate', isCorrect: true },
            { text: 'eated', isCorrect: false },
            { text: 'eating', isCorrect: false }
          ],
          hint: 'It is an irregular past verb.',
          explanation: 'The past tense of "eat" is "ate".'
        }
      ]
    },
    hi: {
      title: 'काल की पहचान: भूतकाल, वर्तमानकाल और भविष्यकाल',
      summary: 'अंग्रेज़ी वाक्यों में समय की पहचान: कल क्या हुआ, आज क्या हो रहा है, और कल क्या होगा।'
    },
    kn: {
      title: 'ಕ್ರಿಯಾಪದಗಳ ಕಾಲಗಳು: ಭೂತ, ವರ್ತಮಾನ ಮತ್ತು ಭವಿಷ್ಯತ್ ಕಾಲ',
      summary: 'ಇಂಗ್ಲಿಷ್ ವಾಕ್ಯಗಳಲ್ಲಿ ಸಮಯವನ್ನು ನಿಖರವಾಗಿ ವ್ಯಕ್ತಪಡಿಸುವ ಸೂತ್ರಗಳನ್ನು ಕಲಿಯಿರಿ.'
    },
    te: {
      title: 'కాలాల పరిచయం: భూత, వర్తమాన మరియు భవిష్యత్ కాలాలు',
      summary: 'నిన్న జరిగింది, నేడు జరుగుతున్నది, రేపు జరగబోయేది ఇంగ్లీష్‌లో చెప్పడం.'
    },
    ta: {
      title: 'காலங்கள்: இறந்த காலம், நிகழ்காலம், எதிர்காலம்',
      summary: 'ஆங்கில வாக்கியங்களில் காலங்களைச் சரியாகப் பயன்படுத்தும் முறை.'
    },
    ml: {
      title: 'കാലങ്ങൾ: ഭൂതകാലം, വർത്തമാനകാലം, ഭാവികാലം',
      summary: 'ഇംഗ്ലീഷിൽ സമയം സൂചിപ്പിക്കുന്ന ക്രിയാരൂപങ്ങൾ എളുപ്പത്തിൽ പഠിക്കാം.'
    },
    mr: {
      title: 'काळ आणि त्याचे प्रकार: भूतकाळ, वर्तमानकाळ व भविष्यकाळ',
      summary: 'इंग्रजीत वाक्य तयार करताना योग्य काळाचा वापर कसा करावा ते शिका.'
    },
    bn: {
      title: 'কালের পাঠ: অতীত, বর্তমান ও ভবিষ্যৎ কাল (Tenses)',
      summary: 'গতকাল, আজ ও আগামীকালের কাজের ইংরেজি বাক্যের সহজ বিন্যাস।'
    }
  }),

  // Class 4 - Regional Language
  buildCourse({
    id: 'lesson-lang-c4',
    classNumber: 4,
    subjectCode: 'lang',
    slug: 'poetry-rhymes-comprehension-c4',
    difficultyLevel: 'intermediate',
    authorName: 'Prof. K. S. Narasimhaswamy Forum',
    estimatedMinutes: 14,
    en: {
      title: 'Poetic Rhythms: Verses on Rain and Harvest',
      summary: 'Appreciate regional poetry, rhyming verses, metaphors, and develop deep reading comprehension.',
      storyTitle: '1. Reciting the Monsoon Rhyme',
      storyContent: 'As raindrops drummed on the classroom tin roof, the teacher chanted a traditional rain verse: "Cool breeze dances through swaying palm fronds, dancing peacock spreads emerald feathers!" The whole class chanted in rhythm, clapping in sync with the thunder.',
      storyNarration: 'Children recited traditional monsoon verses, learning rhythm, metaphors, and expression.',
      conceptTitle: '2. Poetic Elements: Rhythm, Rhyme, and Imagery',
      conceptContent: 'Poetry uses musical language to evoke vivid pictures in our minds. Key elements include: Rhyme (words with similar ending sounds like Neeru-Seeru); Rhythm (the steady beat of syllables); and Metaphor/Simile (comparing things poetically, e.g., "The pond sparkled like a polished silver mirror").',
      conceptNarration: 'Poetry uses rhythm, rhyme, and visual imagery to express deep feelings and love for nature.',
      illustratedSvg: 'water-cycle',
      activityTitle: '3. Rhyming Word Matcher',
      activityInstructions: 'Match each poetic line with its natural rhyming counterpart!',
      activityType: 'matching',
      activityData: [
        { id: 'p1', question: 'When clouds gather dark and deep', answer: 'The sleeping seeds awake from sleep' },
        { id: 'p2', question: 'The river flows with crystal song', answer: 'Carrying boats all summer long' },
        { id: 'p3', question: 'Golden paddy greets the dawn', answer: 'Across the dew-kissed village lawn' },
        { id: 'p4', question: 'Underneath the banyan shade', answer: 'Memories of childhood made' }
      ],
      quizTitle: '4. Poetry Comprehension Quiz',
      questions: [
        {
          text: 'What do we call words that end with the exact same phonetic sound at the end of poetic lines?',
          options: [
            { text: 'Rhyming words (Prasa)', isCorrect: true },
            { text: 'Silent letters', isCorrect: false },
            { text: 'Numbers', isCorrect: false }
          ],
          hint: 'Like "deep" and "sleep", or "song" and "long".',
          explanation: 'Rhyming words create the musical harmony and cadence in poetic verses.'
        },
        {
          text: 'In the phrase "The rain drops fell like silver pearls", what literary device compares raindrops to pearls?',
          options: [
            { text: 'Simile (Upama)', isCorrect: true },
            { text: 'Addition', isCorrect: false }
          ],
          hint: 'It uses the word "like" to make a poetic comparison.',
          explanation: 'A simile compares two different things using words like "like" or "as" to create vivid imagery.'
        }
      ]
    },
    hi: {
      title: 'काव्य धारा: वर्षा और प्रकृति पर आधारित कविताएँ',
      summary: 'तुकबंदी (Rhyme), लय और भावार्थ की समझ से मातृभाषा में पठन कौशल को निखारें।'
    },
    kn: {
      title: 'ಕಾವ್ಯ ರಸಧಾರೆ: ಮಳೆ ಮತ್ತು ಸುಗ್ಗಿಯ ಕವನಗಳು',
      summary: 'ಪ್ರಾಸಪದಗಳು, ರೂಪಕಗಳು ಮತ್ತು ಭಾವಾರ್ಥವನ್ನು ಗ್ರಹಿಸುವ ಕಾವ್ಯ ವಾಚನ ಕಲೆ.'
    },
    te: {
      title: 'కవితా సౌరభం: వర్షం మరియు ప్రకృతి గేయాలు',
      summary: 'ప్రాస పదాలు, లయ మరియు కవితా భావాన్ని అర్థం చేసుకునే అధ్యయనం.'
    },
    ta: {
      title: 'கவிதை நயம்: மழையும் அறுவடையும் போற்றும் பாடல்கள்',
      summary: 'எதுகை, மோனை மற்றும் கவிதை நயங்களை உணர்ந்து வாசிக்கும் கலை.'
    },
    ml: {
      title: 'കവിതാ മാധുര്യം: മഴയും വിളവെടുപ്പും',
      summary: 'പ്രാസവും താളവും അർത്ഥതലങ്ങളും മനസ്സിലാക്കി കവിതകൾ ആസ്വദിക്കാം.'
    },
    mr: {
      title: 'काव्याची गोडी: पाऊस आणि निसर्गावर आधारित कविता',
      summary: 'यमक, लय आणि भावानुभव समजून घेऊन कविता वाचनाचा आनंद घ्या.'
    },
    bn: {
      title: 'কাব্যের ছন্দ: বৃষ্টি ও ফসলের রূপময় পদ্যপাঠ',
      summary: 'অন্ত্যমিল, ছন্দ ও উপমার অপূর্ব সমন্বয়ে কবিতার ভাবার্থ অনুধাবন।'
    }
  }),

  // Class 4 - Social Studies
  buildCourse({
    id: 'lesson-soc-c4',
    classNumber: 4,
    subjectCode: 'soc',
    slug: 'maps-directions-district-c4',
    difficultyLevel: 'intermediate',
    authorName: 'Prof. B. L. Grover Geography Cell',
    estimatedMinutes: 14,
    en: {
      title: 'Directions & Maps: Reading Our Village & District',
      summary: 'Use the sun and compass to master North, South, East, and West, and read maps of your district, rivers, and hills.',
      storyTitle: '1. Finding the Lost Calf',
      storyContent: 'At sunset, Chetan noticed a brown calf had wandered away from the pasture. Grandfather asked: "In which direction did it trot?" Chetan pointed: "Towards the setting sun in the West, past the river bend!" Using direction landmarks, they found the calf resting safely by the river grove within ten minutes.',
      storyNarration: 'Chetan used cardinal directions to find the lost calf. Maps and directions help us navigate anywhere.',
      conceptTitle: '2. Cardinal Directions and Map Symbols',
      conceptContent: 'There are 4 main Cardinal Directions: 1. East is where the sun rises; 2. West is where the sun sets; 3. When facing East, your left is North and your right is South. On maps: Top is North, Bottom is South, Right is East, Left is West. Symbols represent rivers (blue lines), roads (brown tracks), and schools (flags).',
      conceptNarration: 'The sun rises in East and sets in West. On a map, North is at top and South is at bottom.',
      illustratedSvg: 'map-compass',
      activityTitle: '3. Direction and Landmark Match',
      activityInstructions: 'Match each directional cue with its correct geographic term!',
      activityType: 'matching',
      activityData: [
        { id: 'p1', question: 'Morning Sunrise Position 🌅', answer: 'East (Purva)' },
        { id: 'p2', question: 'Evening Sunset Position 🌇', answer: 'West (Pashchima)' },
        { id: 'p3', question: 'Top edge of a printed wall map', answer: 'North (Uttara)' },
        { id: 'p4', question: 'Bottom edge of a printed wall map', answer: 'South (Dakshina)' }
      ],
      quizTitle: '4. Maps & Directions Quiz',
      questions: [
        {
          text: 'If you stand early in the morning facing directly towards the rising sun, which direction is towards your back?',
          options: [
            { text: 'West', isCorrect: true },
            { text: 'North', isCorrect: false },
            { text: 'South', isCorrect: false }
          ],
          hint: 'The sun sets in this direction in the evening.',
          explanation: 'When facing East (sunrise), your back points directly towards the West (sunset).'
        },
        {
          text: 'What do wavy blue lines conventionally indicate on a geographical district map?',
          options: [
            { text: 'Rivers, streams, and irrigation canals', isCorrect: true },
            { text: 'Railway tracks', isCorrect: false }
          ],
          hint: 'Blue is the international color for water bodies.',
          explanation: 'Blue lines and shapes symbolize rivers, streams, lakes, and reservoirs on maps.'
        }
      ]
    },
    hi: {
      title: 'दिशाएँ और मानचित्र: गाँव और जिले का भूगोल',
      summary: 'सूर्य और कम्पास की मदद से पूरब, पश्चिम, उत्तर, दक्षिण और नक्शा पढ़ने की समझ।'
    },
    kn: {
      title: 'ದಿಕ್ಕುಗಳು ಮತ್ತು ನಕ್ಷೆಗಳು: ನಮ್ಮ ಹಳ್ಳಿ ಮತ್ತು ಜಿಲ್ಲೆಯ ಭೂಗೋಳ',
      summary: 'ಸೂರ್ಯನ ಉದಯ-ಅಸ್ತಮಾನದ ಮೂಲಕ ದಿಕ್ಕುಗಳನ್ನು ಗುರುತಿಸುವುದು ಮತ್ತು ನಕ್ಷೆ ಓದುವ ಕಲೆ.'
    },
    te: {
      title: 'దిక్కులు మరియు పటాలు (Maps): మన గ్రామం & జిల్లా',
      summary: 'తూర్పు, పడమర, ఉత్తరం, దక్షిణం దిక్కులను గుర్తించడం మరియు మ్యాప్ పఠనం.'
    },
    ta: {
      title: 'திசைகளும் வரைபடங்களும்: நமது கிராமமும் மாவட்டமும்',
      summary: 'சூரியனின் வழியே திசைகளை அறிதலும் வரைபட குறியீடுகளைப் புரிந்துகொள்ளுதலும்.'
    },
    ml: {
      title: 'ദിക്കുകളും ഭൂപടങ്ങളും: നമ്മുടെ നാടിന്റെ ഭൂമിശാസ്ത്രം',
      summary: 'കിഴക്ക്, പടിഞ്ഞാറ്, വടക്ക്, തെക്ക് ദിശകളും മാപ്പ് വായനയും ലളിതമായി മനസ്സിലാക്കാം.'
    },
    mr: {
      title: 'दिशा आणि नकाशे: आपले गाव आणि जिल्ह्याचा भूगोल',
      summary: 'पूर्व, पश्चिम, उत्तर, दक्षिण दिशांची ओळख आणि नकाशा वाचनाचे कौशल्य.'
    },
    bn: {
      title: 'দিকনির্ণয় ও মানচিত্র পাঠ: আমাদের গ্রাম ও জেলার ভূগোল',
      summary: 'সূর্য ও কম্পাসের সাহায্যে পূর্ব, পশ্চিম, উত্তর, দক্ষিণ ও ম্যাপ চেনার পাঠ।'
    }
  })
];
