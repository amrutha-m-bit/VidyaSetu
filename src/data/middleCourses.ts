import { Lesson } from '../types';
import { buildCourse } from './lessonCurriculumHelper';

export const MIDDLE_COURSES: Lesson[] = [
  // ==========================================
  // CLASS 5
  // ==========================================

  // Class 5 - Mathematics
  buildCourse({
    id: 'lesson-math-c5',
    classNumber: 5,
    subjectCode: 'math',
    slug: 'decimals-money-budgeting-c5',
    difficultyLevel: 'intermediate',
    authorName: 'Prof. K. Srinivasa Rao',
    estimatedMinutes: 15,
    en: {
      title: 'Haat Bazaar Decimals & Practical Money Calculations',
      summary: 'Master decimals as tenths and hundredths, and calculate rupees and paise for weekly village farm trade.',
      storyTitle: '1. Ramesh at the Grain Mandi',
      storyContent: 'At the Friday agricultural mandi, Ramesh helped his uncle weigh 12.5 kilograms of yellow lentils. The price was ₹84.50 per kg. Uncle showed him the digital scale: "Look at the decimal dot! The digits to the right show parts of a whole rupee and parts of a kilogram."',
      storyNarration: 'Ramesh learned how decimal numbers represent fractional parts of rupees, kilograms, and litres.',
      conceptTitle: '2. Decimals: Tenths, Hundredths and Money',
      conceptContent: 'A decimal point separates whole numbers from fractional parts: 1. Tenths (0.1) mean 1 part out of 10 equal parts; 2. Hundredths (0.01) mean 1 part out of 100 equal parts. In Indian currency, 1 Rupee = 100 Paise. Therefore, 50 paise is written as ₹0.50, and 75 paise is ₹0.75.',
      conceptNarration: 'Decimals show fractions in place value. 1 Rupee equals 100 Paise, written with a decimal point.',
      illustratedSvg: 'haat-market',
      activityTitle: '3. Decimal Currency Matcher',
      activityInstructions: 'Match each fractional currency value with its correct decimal notation!',
      activityType: 'matching',
      activityData: [
        { id: 'p1', question: 'Fifty Paise (50p)', answer: '₹0.50 (Half a rupee)' },
        { id: 'p2', question: 'Seventy-Five Paise (75p)', answer: '₹0.75 (Three-quarters rupee)' },
        { id: 'p3', question: 'Five Rupees and 25 Paise', answer: '₹5.25' },
        { id: 'p4', question: 'Ten Rupees and 5 Paise', answer: '₹10.05' }
      ],
      quizTitle: '4. Decimals in Practice Quiz',
      questions: [
        {
          text: 'If a farmer sells vegetables for ₹45.50 and fruits for ₹32.25, what is the total earnings?',
          options: [
            { text: '₹77.75', isCorrect: true },
            { text: '₹77.25', isCorrect: false },
            { text: '₹80.00', isCorrect: false }
          ],
          hint: 'Align the decimal dots: 45.50 + 32.25.',
          explanation: 'Adding ₹45.50 and ₹32.25 gives ₹77.75.'
        },
        {
          text: 'What fraction of one rupee does 0.25 represent?',
          options: [
            { text: 'One-quarter (1/4)', isCorrect: true },
            { text: 'One-half (1/2)', isCorrect: false },
            { text: 'One-tenth (1/10)', isCorrect: false }
          ],
          hint: '25 paise out of 100 paise.',
          explanation: '25/100 simplifies to 1/4 (one quarter).'
        }
      ]
    },
    hi: {
      title: 'हाट बाज़ार और दशमलव: रुपयों-पैसों का व्यावहारिक हिसाब',
      summary: 'दशमलव, दशांश, शतांश और दैनिक खरीदारी में मुद्रा गणना की सरल समझ।'
    },
    kn: {
      title: 'ಸಂತೆ ವ್ಯಾಪಾರ ಮತ್ತು ದಶಮಾಂಶಗಳು: ಹಣದ ಲೆಕ್ಕಾಚಾರ',
      summary: 'ದಶಮಾಂಶ ಪದ್ಧತಿ, ರೂಪಾಯಿ-ಪೈಸೆಗಳ ಕೂಡುವಿಕೆ ಮತ್ತು ಪ್ರಾಯೋಗಿಕ ಮಾರುಕಟ್ಟೆ ಗಣಿತ.'
    },
    te: {
      title: 'దశాంశాలు మరియు డబ్బు లెక్కలు (Decimals & Money)',
      summary: 'గ్రామీణ మార్కెట్లో దశాంశ పద్ధతి ద్వారా రూపాయలు-పైసల లెక్కలు చేయడం.'
    },
    ta: {
      title: 'சந்தை கணக்குகளும் தசம எண்களும் (Decimals & Money)',
      summary: 'தசம எண்கள் மற்றும் ரூபாய்-பைசா கணக்குகளைச் சுலபமாகக் கற்கும் முறை.'
    },
    ml: {
      title: 'ദശാംശ സംഖ്യകളും പണമിടപാടുകളും (Decimals)',
      summary: 'ദശാംശങ്ങൾ ഉപയോഗിച്ച് രൂപയും പൈസയും കൃത്യമായി കണക്കുകൂട്ടാൻ പഠിക്കുക.'
    },
    mr: {
      title: 'दशांश अपूर्णांक आणि पैशांचे हिशोब',
      summary: 'बाजारातील खरेदी-विक्रीमध्ये दशांश पद्धतीचा अचूक वापर कसा करावा ते शिका.'
    },
    bn: {
      title: 'দশমিক ও মুদ্রার হিসাব: গ্রামীণ হাটের ব্যবহারিক অঙ্ক',
      summary: 'টাকা-পয়সার নির্ভুল হিসাব ও দশমিক সংখ্যার বাস্তব প্রয়োগের পাঠ।'
    }
  }),

  // Class 5 - EVS
  buildCourse({
    id: 'lesson-evs-c5',
    classNumber: 5,
    subjectCode: 'evs',
    slug: 'forest-ecosystems-water-harvesting-c5',
    difficultyLevel: 'intermediate',
    authorName: 'Dr. Madhav Gadgil Forum',
    estimatedMinutes: 15,
    en: {
      title: 'Forest Ecosystems & Traditional Water Harvesting',
      summary: 'Discover how dense banyan groves protect groundwater, prevent soil erosion, and how historical check-dams sustain agriculture.',
      storyTitle: '1. The Secret of the Sacred Grove',
      storyContent: 'High up near the ridge, villagers have preserved a dense patch of native forest called the Devarakadu (Sacred Grove) for four hundred years. Even in the peak of dry summer, a sweet freshwater spring bubbles up from its roots, feeding the village irrigation tank. "The forest is our water sponge," the elders teach.',
      storyNarration: 'The community sacred forest acts as a natural water sponge, feeding village springs all year.',
      conceptTitle: '2. Forests as Water Regulators and Soil Guardians',
      conceptContent: 'Tree root networks hold soil firmly, preventing fertile topsoil from being washed away during torrential monsoon storms. Forest canopies soften the blow of falling rain, allowing moisture to seep deep into underground aquifers. Traditional rainwater structures like step-wells (baoris) and check-dams recharge village wells.',
      conceptNarration: 'Tree roots hold soil and recharge groundwater. Check-dams capture monsoon runoff for dry months.',
      illustratedSvg: 'forest-wildlife',
      activityTitle: '3. Conservation Technique Matcher',
      activityInstructions: 'Match each conservation method with its ecological benefit!',
      activityType: 'matching',
      activityData: [
        { id: 'p1', question: 'Check-dam on village stream', answer: 'Slows down rainwater runoff to recharge open wells' },
        { id: 'p2', question: 'Planting Vetiver / Khus grass', answer: 'Binds soil along field boundaries against erosion' },
        { id: 'p3', question: 'Composting fallen dry leaves', answer: 'Creates rich organic humus without burning' },
        { id: 'p4', question: 'Rooftop rainwater harvesting', answer: 'Directs clean terrace rain into storage cisterns' }
      ],
      quizTitle: '4. Forest Ecology Quiz',
      questions: [
        {
          text: 'Why does fertile topsoil get washed away in barren areas where all trees have been cut down?',
          options: [
            { text: 'There are no tree root networks to grip and anchor the soil particles', isCorrect: true },
            { text: 'The soil becomes too heavy', isCorrect: false },
            { text: 'Rain refuses to fall on barren land', isCorrect: false }
          ],
          hint: 'Roots act like nature’s biological anchors.',
          explanation: 'Tree and shrub root networks anchor soil particles together, stopping wind and water erosion.'
        },
        {
          text: 'What do we call the underground layer of rock and sand that stores groundwater?',
          options: [
            { text: 'An aquifer', isCorrect: true },
            { text: 'A crater', isCorrect: false }
          ],
          hint: 'Wells draw water from this underground reservoir.',
          explanation: 'An aquifer is an underground geological formation that contains and yields usable fresh groundwater.'
        }
      ]
    },
    hi: {
      title: 'वन पारिस्थितिकी और पारंपरिक जल संरक्षण',
      summary: 'जंगलों की रक्षा, भूजल पुनर्भरण, और पारंपरिक चेक-डैम की वैज्ञानिक भूमिका।'
    },
    kn: {
      title: 'ಅರಣ್ಯ ಪರಿಸರ ಮತ್ತು ಸಾಂಪ್ರದಾಯಿಕ ಜಲ ಸಂರಕ್ಷಣೆ',
      summary: 'ದೇವರಕಾಡುಗಳ ಮಹತ್ವ, ಮಣ್ಣಿನ ಸವೆತ ತಡೆಗಟ್ಟುವಿಕೆ ಮತ್ತು ಚೆಕ್ ಡ್ಯಾಂಗಳ ನಿರ್ಮಾಣ.'
    },
    te: {
      title: 'అటవీ పర్యావరణ వ్యవస్థ మరియు నీటి సంరక్షణ',
      summary: 'అడవుల ప్రాముఖ్యత, భూగర్భ జలాల రీఛార్జ్ మరియు సాంప్రదాయ చెక్ డ్యాములు.'
    },
    ta: {
      title: 'காட்டு சூழலியல் மற்றும் பாரம்பரிய நீர் சேகரிப்பு',
      summary: 'காடுகளின் அவசியம், நிலத்தடி நீர் பெருக்கம் மற்றும் பாரம்பரிய தடுப்பணைகள்.'
    },
    ml: {
      title: 'വന പരിസ്ഥിതിയും പരമ്പരാഗത ജലസംരക്ഷണവും',
      summary: 'കാടുകളുടെ പ്രാധാന്യം, ഭൂഗർഭജലം റീചാർജ് ചെയ്യൽ, മഴവെള്ള സംഭരണം.'
    },
    mr: {
      title: 'जंगल परिसंस्था आणि पारंपरिक जलसंधारण',
      summary: 'देवरायांचे महत्त्व, जमिनीची धूप रोखणे आणि बंधाऱ्यांद्वारे पाणी अडवणे.'
    },
    bn: {
      title: 'বনাঞ্চল বাস্তুসংস্থান ও সনাতন জল সংরক্ষণ পদ্ধতি',
      summary: 'পবিত্র বনের মহিমা, ভূমিক্ষয় রোধ এবং বাঁধ দিয়ে বৃষ্টির জল ধরে রাখার গুরুত্ব।'
    }
  }),

  // Class 5 - English Learning
  buildCourse({
    id: 'lesson-eng-c5',
    classNumber: 5,
    subjectCode: 'eng',
    slug: 'letter-writing-comprehension-c5',
    difficultyLevel: 'intermediate',
    authorName: 'Sister Rose Mary',
    estimatedMinutes: 15,
    en: {
      title: 'Writing Friendly Letters & Reading Passages',
      summary: 'Learn the parts of an informal letter and practice reading comprehension with interesting stories.',
      storyTitle: '1. A Letter from the Mango Orchard',
      storyContent: 'Vikas sat under the porch with ink pen and postal inland letter: "Chandanpur Village, 18th Oct 2026. Dear Cousin Arun, Hope you are well. Our village harvest festival is next week. Uncle has set up a giant wooden swing under the tamarind tree. Please come with auntie! Your loving cousin, Vikas." The postman stamped it with pride.',
      storyNarration: 'Vikas wrote a friendly letter to his cousin inviting him to the village harvest festival.',
      conceptTitle: '2. Structure of an Informal Letter',
      conceptContent: 'A friendly (informal) letter has 5 key parts: 1. Heading (Sender address and Date at top right or left); 2. Salutation / Greeting ("Dear friend / cousin"); 3. Body (The main message sharing news and feelings); 4. Complimentary Close ("Yours lovingly", "Your friend"); and 5. Signature / Name.',
      conceptNarration: 'An informal letter includes your address, date, friendly greeting, message body, and loving sign-off.',
      illustratedSvg: 'hero-kids',
      activityTitle: '3. Letter Structure Sequencer',
      activityInstructions: 'Arrange the letter components in their proper standard order!',
      activityType: 'sorting',
      activityData: [
        { id: 'l1', step: '1. Sender Address & Date (Village & Date)' },
        { id: 'l2', step: '2. Warm Salutation ("Dear Grandfather,")' },
        { id: 'l3', step: '3. Body Paragraphs (Sharing school and festival news)' },
        { id: 'l4', step: '4. Sign-off & Name ("With lots of love, Kavya")' }
      ],
      quizTitle: '4. Letter Writing Quiz',
      questions: [
        {
          text: 'Which greeting is most appropriate when writing an informal letter to your cousin?',
          options: [
            { text: 'Dear Arun,', isCorrect: true },
            { text: 'Respected Sir,', isCorrect: false },
            { text: 'To Whom It May Concern,', isCorrect: false }
          ],
          hint: 'It is a friendly, warm salutation.',
          explanation: '"Dear [Name]," is the standard warm salutation for friends and relatives.'
        },
        {
          text: 'Where is the date usually written on a traditional personal letter?',
          options: [
            { text: 'At the top of the letter with the sender’s location', isCorrect: true },
            { text: 'Hidden inside the envelope', isCorrect: false }
          ],
          hint: 'It tells the recipient when the letter was written.',
          explanation: 'The date belongs at the head of the letter so the reader knows when it was dispatched.'
        }
      ]
    },
    hi: {
      title: 'अनौपचारिक पत्र लेखन और गद्यांश बोध',
      summary: 'मित्रों और रिश्तेदारों को पत्र लिखने का प्रारूप और समझ के साथ पढ़ने का अभ्यास।'
    },
    kn: {
      title: 'ಆಪ್ತ ಪತ್ರ ಲೇಖನ ಮತ್ತು ವಾಚನ ಗ್ರಹಿಕೆ',
      summary: 'ಸ್ನೇಹಿತರು ಮತ್ತು ಸಂಬಂಧಿಕರಿಗೆ ಪತ್ರ ಬರೆಯುವ ವಿಧಿವಿಧಾನ ಹಾಗೂ ಗದ್ಯ ಭಾಗದ ಗ್ರಹಿಕೆ.'
    },
    te: {
      title: 'లేఖా రచన (Letter Writing) మరియు పఠన అవగాహన',
      summary: 'స్నేహితులకు లేఖలు రాయడం మరియు ఇంగ్లీష్ కథలను అర్థం చేసుకునే పద్ధతులు.'
    },
    ta: {
      title: 'கடிதம் எழுதுதல் மற்றும் வாசித்துப் புரிந்துகொள்ளுதல்',
      summary: 'நண்பர்கள் மற்றும் உறவினர்களுக்குக் கடிதம் எழுதும் முறைகளும் வாசிப்புத் திறனும்.'
    },
    ml: {
      title: 'കത്തെഴുത്തും വായനയും (Letter Writing & Reading)',
      summary: 'സുഹൃത്തുക്കൾക്കും ബന്ധുക്കൾക്കും കത്തുകൾ എഴുതുന്ന രീതിയും വായനാശേഷിയും.'
    },
    mr: {
      title: 'अनौपचारिक पत्रलेखन आणि उतारा आकलन',
      summary: 'नातेवाईक व मित्रांना पत्र लिहिण्याची पद्धत आणि वाचन कौशल्य वाढवणे.'
    },
    bn: {
      title: 'ব্যক্তিগত চিঠি লিখন ও অনুচ্ছেদ বোধন (Comprehension)',
      summary: 'বন্ধু ও আত্মীয়দের ইংরেজি চিঠি লেখার নিয়ম ও পাঠ্য অনুচ্ছেদ বোঝার অনুশীলন।'
    }
  }),

  // Class 5 - Regional Language
  buildCourse({
    id: 'lesson-lang-c5',
    classNumber: 5,
    subjectCode: 'lang',
    slug: 'proverbs-idioms-wisdom-c5',
    difficultyLevel: 'intermediate',
    authorName: 'Dr. Betageri Krishna Sharma Cell',
    estimatedMinutes: 15,
    en: {
      title: 'Wise Village Proverbs (Gaadhegalu / Kahavatein)',
      summary: 'Discover witty regional proverbs and idioms that pack centuries of rural wisdom into short sayings.',
      storyTitle: '1. The Panchayat Under the Neem Tree',
      storyContent: 'During a heated dispute about water sharing between two farm plots, the elderly village sarpanch stood up and said calmly: "Hani hani koodidare halla; thene thene koodidare rashi" (Drop by drop builds a stream; ear by ear of grain builds a harvest heap). Hearing this timeless truth, both farmers smiled and agreed to share equally.',
      storyNarration: 'The sarpanch resolved the dispute using a wise proverb. Proverbs contain centuries of experience.',
      conceptTitle: '2. The Power of Proverbs and Idioms',
      conceptContent: 'Proverbs (Gaadhegalu / Kahavatein / Lokoktiyan) are short, popular sayings that express a common sense truth or moral rule: e.g., "A stitch in time saves nine", "As you sow, so shall you reap". Idioms use figurative words where the meaning is deeper than the literal words.',
      conceptNarration: 'Proverbs condense big life lessons into memorable phrases passed down by ancestors.',
      illustratedSvg: 'panchayat-tree',
      activityTitle: '3. Proverb and Meaning Match',
      activityInstructions: 'Match each popular proverb with its true ethical meaning!',
      activityType: 'matching',
      activityData: [
        { id: 'p1', question: 'Drop by drop builds a mighty stream', answer: 'Small consistent efforts lead to great achievements' },
        { id: 'p2', question: 'As you sow, so shall you reap', answer: 'Your good and bad actions determine your future' },
        { id: 'p3', question: 'Barking dogs seldom bite', answer: 'People who shout loudly rarely take real action' },
        { id: 'p4', question: 'Unity is supreme strength', answer: 'Standing together makes a community invincible' }
      ],
      quizTitle: '4. Proverbs Wisdom Quiz',
      questions: [
        {
          text: 'What is the primary purpose of proverbs in Indian regional literature?',
          options: [
            { text: 'To communicate profound life wisdom and practical ethics in simple words', isCorrect: true },
            { text: 'To confuse young children', isCorrect: false },
            { text: 'To count farm animals', isCorrect: false }
          ],
          hint: 'Elders use them to guide behavior.',
          explanation: 'Proverbs preserve ancestral common sense and moral values in concise, memorable metaphors.'
        },
        {
          text: 'What does the proverb "Where there is unity, there is victory" encourage?',
          options: [
            { text: 'Cooperation and teamwork among community members', isCorrect: true },
            { text: 'Fighting among neighbors', isCorrect: false }
          ],
          hint: 'Think about a bundle of sticks that cannot be broken when tied together.',
          explanation: 'Collective solidarity and unity empower a village or nation to solve difficult problems.'
        }
      ]
    },
    hi: {
      title: 'लोकोक्तियाँ और मुहावरे: सदियों की सीख और बुद्धिमानी',
      summary: 'कहावतों (Kahavatein) का अर्थ, उनका वाक्यों में सुंदर प्रयोग और जीवन की सीख।'
    },
    kn: {
      title: 'ಗಾದೆಮಾತುಗಳು ಮತ್ತು ನಾಣ್ಣುಡಿಗಳು: ಹಿರಿಯರ ಅನುಭವದ ಮಾತು',
      summary: 'ಗಾದೆಗಳು ವೇದಗಳಿಗೆ ಸಮಾನ; ಜನಪದ ಗಾದೆಗಳ ಆಳವಾದ ಅರ್ಥ ಮತ್ತು ಭಾಷಾ ಸೊಗಸು.'
    },
    te: {
      title: 'సామెతలు మరియు జాతీయాలు: పెద్దల అనుభవ పాఠాలు',
      summary: 'తెలుగు సామెతల వెనుక దాగి ఉన్న నీతి మరియు వాక్యాలలో వాటి సద్వినియోగం.'
    },
    ta: {
      title: 'பழமொழிகளும் மரபுத் தொடர்களும்: முன்னோரின் அறிவுரை',
      summary: 'காலத்தால் அழியாத தமிழ் பழமொழிகளின் ஆழமான பொருளை உணர்தல்.'
    },
    ml: {
      title: 'പഴഞ്ചൊല്ലുകളും ശൈലികളും: നാടൻ ജ്ഞാനം',
      summary: 'ജീവിതാനുഭവങ്ങളിൽ നിന്ന് രൂപപ്പെട്ട പഴഞ്ചൊല്ലുകളുടെ ആഴത്തിലുള്ള അർത്ഥം.'
    },
    mr: {
      title: 'म्हणी आणि वाक्प्रचार: पूर्वजांचे शहाणपण आणि भाषेचे सौंदर्य',
      summary: 'मराठी भाषेतील प्रसिद्ध म्हणींचा अर्थ आणि त्यांचा योग्य वापर.'
    },
    bn: {
      title: 'প্রবাদ-প্রবচন ও বাগধারা: লোকজ্ঞানের চিরন্তন ধারা',
      summary: 'গ্রামবাংলার প্রাচীন প্রবাদমালার গভীর নীতিশিক্ষা ও ভাষার সমৃদ্ধির পাঠ।'
    }
  }),

  // Class 5 - Social Studies
  buildCourse({
    id: 'lesson-soc-c5',
    classNumber: 5,
    subjectCode: 'soc',
    slug: 'freedom-movement-national-symbols-c5',
    difficultyLevel: 'intermediate',
    authorName: 'Dr. Tara Chand History Forum',
    estimatedMinutes: 15,
    en: {
      title: 'India’s Freedom Movement & Our National Symbols',
      summary: 'Honor brave freedom fighters who won India’s independence and discover the deep meaning behind the Tiranga and Ashoka Pillar.',
      storyTitle: '1. The Independence Day Bell',
      storyContent: 'At 8:00 AM on August 15th, the village primary school flagpost was decorated with marigold garlands. The headmaster hoisted the tricolour Tiranga as petals showered down. Village elder freedom fighter Shivaramaiah saluted with tears of joy: "Children, protect this freedom with honesty, unity, and hard study!"',
      storyNarration: 'The school hoisted the national tricolour flag on Independence Day to honor our freedom fighters.',
      conceptTitle: '2. The National Tricolour and Sacred Symbols',
      conceptContent: 'Our National Flag (Tiranga) has three horizontal bands: Saffron represents courage and sacrifice; White stands for peace and truth with the 24-spoke navy blue Ashoka Chakra of progress; Green signifies fertility and prosperity. Our National Emblem is the Lion Capital of Ashoka with the motto "Satyameva Jayate" (Truth Alone Triumphs).',
      conceptNarration: 'Saffron for courage, White for truth, Green for prosperity. The Ashoka Chakra represents continuous duty and progress.',
      illustratedSvg: 'indian-constitution',
      activityTitle: '3. National Symbols Matcher',
      activityInstructions: 'Match each sacred national symbol with what it officially represents!',
      activityType: 'matching',
      activityData: [
        { id: 'p1', question: 'Saffron Stripe of Tiranga', answer: 'Courage, strength, and sacrifice' },
        { id: 'p2', question: 'White Stripe with Ashoka Chakra', answer: 'Peace, truth, and the wheel of righteous law' },
        { id: 'p3', question: 'Green Stripe of Tiranga', answer: 'Prosperity, agriculture, and green earth' },
        { id: 'p4', question: 'Motto "Satyameva Jayate"', answer: '"Truth Alone Triumphs"' }
      ],
      quizTitle: '4. Freedom Heritage Quiz',
      questions: [
        {
          text: 'How many spokes are there inside the navy blue Ashoka Chakra on India’s national flag?',
          options: [
            { text: '24 spokes', isCorrect: true },
            { text: '12 spokes', isCorrect: false },
            { text: '36 spokes', isCorrect: false }
          ],
          hint: 'It symbolizes the 24 hours of continuous progress.',
          explanation: 'The Ashoka Chakra at the center of the white band has 24 spokes symbolizing relentless righteous action.'
        },
        {
          text: 'What sacred national motto is engraved at the base of the Lion Capital National Emblem?',
          options: [
            { text: 'Satyameva Jayate', isCorrect: true },
            { text: 'Vande Mataram', isCorrect: false }
          ],
          hint: 'It comes from the Mundaka Upanishad and means "Truth Alone Triumphs".',
          explanation: '"Satyameva Jayate" proclaims the victory of truth and moral righteousness.'
        }
      ]
    },
    hi: {
      title: 'भारत का स्वतंत्रता संग्राम और हमारे राष्ट्रीय प्रतीक',
      summary: 'तिरंगे के रंगों का अर्थ, अशोक चक्र और स्वतंत्रता सेनानियों के बलिदान की गौरव गाथा।'
    },
    kn: {
      title: 'ಭಾರತದ ಸ್ವಾತಂತ್ರ್ಯ ಸಂಗ್ರಾಮ ಮತ್ತು ರಾಷ್ಟ್ರೀಯ ಲಾಂಛನಗಳು',
      summary: 'ತ್ರಿವರ್ಣ ಧ್ವಜ, ಅಶೋಕ ಚಕ್ರ, ಸತ್ಯಮೇವ ಜಯತೆ ಮತ್ತು ಸ್ವಾತಂತ್ರ್ಯ ಯೋಧರ ತ್ಯಾಗದ ಚರಿತ್ರೆ.'
    },
    te: {
      title: 'భారత స్వాతంత్ర్య సమరం మరియు జాతీయ చిహ్నాలు',
      summary: 'త్రివర్ణ పతాకం, అశోక చక్రం మరియు స్వాతంత్ర్య సమరయోధుల త్యాగాలు.'
    },
    ta: {
      title: 'இந்திய விடுதலைப் போராட்டமும் தேசியச் சின்னங்களும்',
      summary: 'மூவர்ணக் கொடியின் பெருமை, அசோக சக்கரம் மற்றும் தியாகிகளின் வரலாறு.'
    },
    ml: {
      title: 'ഇന്ത്യൻ സ്വാതന്ത്ര്യസമരവും ദേശീയ ചിഹ്നങ്ങളും',
      summary: 'ദേശീയ പതാകയുടെ അർത്ഥം, അശോകസ്തംഭം, സ്വാതന്ത്ര്യസമര സേനാനികളുടെ ത്യാഗം.'
    },
    mr: {
      title: 'भारताचा स्वातंत्र्यलढा आणि आपली राष्ट्रीय प्रतीके',
      summary: 'तिरंग्याचे रंग, अशोक चक्र आणि क्रांतिकारक हुतात्म्यांची शौर्यगाथा.'
    },
    bn: {
      title: 'ভারতের স্বাধীনতা সংগ্রাম ও আমাদের জাতীয় প্রতীকসমূহ',
      summary: 'ত্রিবর্ণ রঞ্জিত জাতীয় পতাকা, অশোক চক্র ও মুক্তি সংগ্রামীদের অমর ত্যাগের পাঠ।'
    }
  }),

  // ==========================================
  // CLASS 6
  // ==========================================

  // Class 6 - Mathematics
  buildCourse({
    id: 'lesson-math-c6',
    classNumber: 6,
    subjectCode: 'math',
    slug: 'integers-number-line-c6',
    difficultyLevel: 'intermediate',
    authorName: 'Prof. Aryabhata Mathematics Cell',
    estimatedMinutes: 16,
    en: {
      title: 'Integers & The Number Line: Positive, Zero & Negative',
      summary: 'Understand integers beyond natural numbers, comparing elevations, winter temperatures, and financial debts using the number line.',
      storyTitle: '1. The Village Hill Well and the Mountain',
      storyContent: 'The geography teacher drew a picture on the blackboard: Ground level is 0 metres. The village temple hill is +150 metres above ground. The bottom of the deep stone step-well is -15 metres below ground. "Integers give us a way to count in both directions: above zero and below zero!"',
      storyNarration: 'Integers include positive numbers, zero, and negative numbers to describe above and below zero.',
      conceptTitle: '2. The Integer Number Line',
      conceptContent: 'Integers are the set of whole numbers and their negatives: {... -3, -2, -1, 0, +1, +2, +3 ...}. On a horizontal number line: Moving right increases the value; moving left decreases the value. Therefore, -1 is greater than -5 (-1 > -5), because -1 is further to the right.',
      conceptNarration: 'Zero sits at the center. Numbers to the right are positive; numbers to the left are negative.',
      illustratedSvg: 'measurement-tools',
      activityTitle: '3. Number Line Positioning',
      activityInstructions: 'Match each real-world situation with its correct integer representation!',
      activityType: 'matching',
      activityData: [
        { id: 'p1', question: 'A deep borewell 40 metres underground', answer: '-40 m' },
        { id: 'p2', question: 'A village solar pole 8 metres high', answer: '+8 m' },
        { id: 'p3', question: 'Freezing temperature 3 degrees below zero', answer: '-3°C' },
        { id: 'p4', question: 'Ground sea level base', answer: '0' }
      ],
      quizTitle: '4. Integers Quiz',
      questions: [
        {
          text: 'Which integer is larger: -2 or -8?',
          options: [
            { text: '-2', isCorrect: true },
            { text: '-8', isCorrect: false }
          ],
          hint: 'Think about who is closer to zero and further to the right on the number line.',
          explanation: '-2 is to the right of -8 on the number line, so -2 is greater than -8 (-2 > -8).'
        },
        {
          text: 'What is the sum of (+5) and (-5)?',
          options: [
            { text: '0', isCorrect: true },
            { text: '+10', isCorrect: false },
            { text: '-10', isCorrect: false }
          ],
          hint: 'Moving 5 steps right, then 5 steps back left.',
          explanation: '+5 and -5 are additive inverses. Their sum equals 0.'
        }
      ]
    },
    hi: {
      title: 'पूर्णांक और संख्या रेखा: धनात्मक, शून्य और ऋणात्मक संख्याएँ',
      summary: 'शून्य से ऊपर और शून्य से नीचे की संख्याओं की पहचान और संख्या रेखा पर तुलना।'
    },
    kn: {
      title: 'ಪೂರ್ಣಾಂಕಗಳು ಮತ್ತು ಸಂಖ್ಯಾ ರೇಖೆ: ಧನ, ಶೂನ್ಯ ಮತ್ತು ಋಣ ಸಂಖ್ಯೆಗಳು',
      summary: 'ಸಂಖ್ಯಾ ರೇಖೆಯ ಮೇಲೆ ಪೂರ್ಣಾಂಕಗಳ ಸ್ಥಾನ, ಹೋಲಿಕೆ ಮತ್ತು ದಿನನಿತ್ಯದ ಅನ್ವಯಗಳು.'
    },
    te: {
      title: 'పూర్ణ సంఖ్యలు (Integers) మరియు సంఖ్యా రేఖ',
      summary: 'ధన, ఋణ మరియు శూన్య సంఖ్యల స్వభావం మరియు సంఖ్యా రేఖపై కూడికలు.'
    },
    ta: {
      title: 'முழுக்கள் (Integers) மற்றும் எண் கோடு',
      summary: 'மிகை எண்கள், குறை எண்கள் மற்றும் பூஜ்ஜியத்தின் பண்புகளை அறிதல்.'
    },
    ml: {
      title: 'പൂർണ്ണസംഖ്യകളും സംഖ്യാരേഖയും (Integers)',
      summary: 'നെഗറ്റീവ് സംഖ്യകളും പോസിറ്റീവ് സംഖ്യകളും സംഖ്യാരേഖയിൽ മനസ്സിലാക്കാം.'
    },
    mr: {
      title: 'पूर्णांक संख्या आणि संख्यारेषा: धन, ऋण व शून्य',
      summary: 'संख्यारेषेवर धन आणि ऋण संख्यांची मांडणी आणि त्यांची तुलना कशी करावी ते शिका.'
    },
    bn: {
      title: 'পূর্ণসংখ্যা ও সংখ্যারেখা: ধনাত্মক, ঋণাত্মক ও শূন্যের ধারণা',
      summary: 'সংখ্যারেখার সাহায্যে পূর্ণসংখ্যার তুলনা ও বাস্তব জীবনের বিভিন্ন ক্ষেত্রে তার ব্যবহার।'
    }
  }),

  // Class 6 - EVS
  buildCourse({
    id: 'lesson-evs-c6',
    classNumber: 6,
    subjectCode: 'evs',
    slug: 'waste-segregation-composting-c6',
    difficultyLevel: 'intermediate',
    authorName: 'Swachh Bharat Rural Mission Cell',
    estimatedMinutes: 16,
    en: {
      title: 'Waste Segregation, Composting & Village Cleanliness',
      summary: 'Learn scientific waste separation into green and blue bins, vermicomposting for organic agriculture, and plastic pollution control.',
      storyTitle: '1. The Zero-Waste Village Initiative',
      storyContent: 'The youth club of Shantinagar placed two bins in every lane: a Green Bin for wet kitchen peels and a Blue Bin for dry paper and clean plastics. Instead of burning garbage in heaps, wet waste was layered into an earthworm compost pit. Three months later, dark, crumbly "black gold" compost was distributed to school orchards!',
      storyNarration: 'The village segregated wet kitchen waste for composting and recycled dry paper and plastic.',
      conceptTitle: '2. Biodegradable vs Non-Biodegradable Waste',
      conceptContent: 'Waste is classified into two main types: 1. Biodegradable (Wet waste: vegetable scraps, cow dung, fallen leaves) rots naturally through microorganisms and earthworms into nutritious organic compost; 2. Non-Biodegradable (Dry waste: polythene bags, glass, metal cans) does not decay for hundreds of years and must be reduced and recycled.',
      conceptNarration: 'Green bin takes wet organic waste for composting. Blue bin takes dry recyclable plastic and glass.',
      illustratedSvg: 'water-cycle',
      activityTitle: '3. Waste Bin Sorter',
      activityInstructions: 'Sort each item into its correct collection bin or processing pit!',
      activityType: 'matching',
      activityData: [
        { id: 'p1', question: 'Banana peels and tomato scraps', answer: 'Green Bin (Wet / Organic Compost)' },
        { id: 'p2', question: 'Discarded plastic wrapper', answer: 'Blue Bin (Dry / Recyclables)' },
        { id: 'p3', question: 'Cattle dung and chopped straw', answer: 'Biogas or Vermicompost Pit' },
        { id: 'p4', question: 'Broken glass jar piece', answer: 'Safe Dry Glass Storage' }
      ],
      quizTitle: '4. Waste Management Quiz',
      questions: [
        {
          text: 'Why should villagers NEVER burn plastic bags and tyres in open community heaps?',
          options: [
            { text: 'Burning plastics releases toxic cancer-causing dioxin fumes that harm lungs', isCorrect: true },
            { text: 'It creates too much rain', isCorrect: false },
            { text: 'It turns plastics into gold', isCorrect: false }
          ],
          hint: 'Plastics are made from petrochemicals that emit poisonous smoke.',
          explanation: 'Open burning of synthetic plastics releases hazardous pollutants that poison the air and water table.'
        },
        {
          text: 'What do red earthworms produce when fed biodegradable vegetable scraps and farm cow dung?',
          options: [
            { text: 'Nutrient-rich organic vermicompost for crops', isCorrect: true },
            { text: 'Plastic bags', isCorrect: false }
          ],
          hint: 'It is called "Black Gold" by farmers.',
          explanation: 'Vermicomposting uses earthworms to convert organic waste into high-quality biological fertilizer.'
        }
      ]
    },
    hi: {
      title: 'कचरा पृथक्करण, कम्पोस्टिंग और स्वच्छ गाँव अभियान',
      summary: 'गीले और सूखे कचरे का अलग-अलग प्रबंधन, केंचुआ खाद (वर्मीकम्पोस्ट) और प्लास्टिक मुक्ति।'
    },
    kn: {
      title: 'ಕಸ ವಿಂಗಡಣೆ, ಎರೆಹುಳು ಗೊಬ್ಬರ ಮತ್ತು ಸ್ವಚ್ಛ ಗ್ರಾಮ',
      summary: 'ಹಸಿ ಕಸ ಮತ್ತು ಒಣ ಕಸದ ವೈಜ್ಞಾನಿಕ ನಿರ್ವಹಣೆ ಮತ್ತು ಸಾವಯವ ಕೃಷಿಗೆ ಎರೆಗೊಬ್ಬರ ತಯಾರಿಕೆ.'
    },
    te: {
      title: 'వ్యర్థాల వర్గీకరణ మరియు కంపోస్టింగ్ పద్ధతులు',
      summary: 'తడి మరియు పొడి చెత్త విభజన, వర్మీ కంపోస్ట్ తయారీ మరియు ప్లాస్టిక్ నివారణ.'
    },
    ta: {
      title: 'திடக்கழிவு மேலாண்மையும் மண்புழு உரமும்',
      summary: 'மக்கும் குப்பை மற்றும் மக்காத குப்பையை தரம் பிரித்தல் மற்றும் இயற்கை உரம் தயாரிப்பு.'
    },
    ml: {
      title: 'മാലിന്യ സംസ്കരണവും കമ്പോസ്റ്റിംഗും',
      summary: 'ജൈവ അജൈവ മാലിന്യങ്ങൾ വേർതിരിക്കലും മണ്ണിര കമ്പോസ്റ്റ് നിർമ്മാണവും.'
    },
    mr: {
      title: 'कचरा वर्गीकरण, गांडूळ खत आणि निर्मल ग्राम',
      summary: 'ओला व सुका कचरा व्यवस्थापन आणि सेंद्रिय शेतीसाठी सेंद्रिय खताची निर्मिती.'
    },
    bn: {
      title: 'বর্জ্য পৃথকীকরণ, কেঁচো সার ও নির্মল গ্রাম পরিকল্পনা',
      summary: 'পচনশীল ও অপচনশীল বর্জ্যের বিজ্ঞানসম্মত ব্যবস্থাপনা এবং জৈব চাষের সার তৈরি।'
    }
  }),

  // Class 6 - Science
  buildCourse({
    id: 'lesson-sci-c6',
    classNumber: 6,
    subjectCode: 'sci',
    slug: 'electric-circuits-cells-lighting-c6',
    difficultyLevel: 'intermediate',
    authorName: 'National Science Talent Board',
    estimatedMinutes: 16,
    en: {
      title: 'Electric Circuits: Cells, Switches & Village Solar Bulbs',
      summary: 'Build working electrical circuits with dry cells, switches, copper wires, and discover conductors versus insulators.',
      storyTitle: '1. Lighting the Study Corner',
      storyContent: 'When power lines went down during a storm, Class 6 students assembled a study lantern. Using a 3-volt dry battery cell, two insulated copper wires, a safety-pin switch, and a small LED torch bulb, they completed the circuit. Click! The little bulb beamed bright yellow light. "We created a closed loop for electrical current!" they cheered.',
      storyNarration: 'Students created an electric circuit using a battery, wires, a switch, and an LED bulb.',
      conceptTitle: '2. Components of an Electric Circuit',
      conceptContent: 'An electric circuit is a continuous path along which electric charges flow: 1. Power Source (Chemical Cell / Battery) pushes electrons; 2. Conductors (Copper and aluminium wires) allow electricity to pass easily; 3. Insulators (Rubber, plastic coating) block current for safety; 4. Switch opens (breaks) or closes (completes) the flow.',
      conceptNarration: 'Current flows only in a closed circuit. Conductors carry electricity; insulators protect us from shocks.',
      illustratedSvg: 'electric-circuit',
      activityTitle: '3. Conductor vs Insulator Classifier',
      activityInstructions: 'Match each everyday material with whether it allows electricity to flow!',
      activityType: 'matching',
      activityData: [
        { id: 'p1', question: 'Copper wire & Iron nail', answer: 'Conductor (Allows electricity)' },
        { id: 'p2', question: 'Rubber slipper & Plastic ruler', answer: 'Insulator (Blocks electricity)' },
        { id: 'p3', question: 'Dry wood stick', answer: 'Insulator (Blocks electricity)' },
        { id: 'p4', question: 'Wet salty water', answer: 'Conductor (Allows electricity)' }
      ],
      quizTitle: '4. Electric Circuits Quiz',
      questions: [
        {
          text: 'What happens to a light bulb in a circuit when the switch is set to "OPEN"?',
          options: [
            { text: 'The bulb turns off because the electrical circuit loop is broken', isCorrect: true },
            { text: 'The bulb glows twice as bright', isCorrect: false },
            { text: 'The battery catches fire', isCorrect: false }
          ],
          hint: 'Opening a switch disconnects the continuous path.',
          explanation: 'Electricity requires an unbroken, closed loop to flow. An open switch breaks the pathway.'
        },
        {
          text: 'Why are household electrical screwdrivers and wire pliers coated with thick rubber or plastic handles?',
          options: [
            { text: 'Rubber and plastic are insulators that shield electricians from electric shocks', isCorrect: true },
            { text: 'To make the tools look colorful', isCorrect: false }
          ],
          hint: 'Insulators do not conduct electricity.',
          explanation: 'Rubber and plastics prevent current from travelling into the human hand, ensuring safety.'
        }
      ]
    },
    hi: {
      title: 'विद्युत परिपथ: सेल, स्विच और गाँव की सौर लाइट',
      summary: 'विद्युत के चालक और कुचालक पदार्थ, सरल परिपथ निर्माण और सुरक्षा के नियम।'
    },
    kn: {
      title: 'ವಿದ್ಯುತ್ ಮಂಡಲಗಳು: ಕೋಶಗಳು, ಸ್ವಿಚ್ ಮತ್ತು ಸೌರ ದೀಪಗಳು',
      summary: 'ವಿದ್ಯುತ್ ವಾಹಕಗಳು ಮತ್ತು ಅವಾಹಕಗಳು, ಮಂಡಲ ಜೋಡಣೆ ಮತ್ತು ಸುರಕ್ಷತಾ ಕ್ರಮಗಳು.'
    },
    te: {
      title: 'విద్యుత్ వలయాలు: బ్యాటరీలు, స్విచ్‌లు మరియు వాహకాలు',
      summary: 'విద్యుత్ ప్రవాహం, మూసిన వలయం మరియు విద్యుత్ వాహకాలు-బంధకాల పరిచయం.'
    },
    ta: {
      title: 'மின்சுற்றுகள்: மின்கலம், சுவிட்ச் மற்றும் மின் கடத்திகள்',
      summary: 'மின்சுற்று அமைத்தல், மின் கடத்திகள் மற்றும் மின்காப்பிகள் பற்றிய செய்முறை அறிவு.'
    },
    ml: {
      title: 'വൈദ്യുത സർക്യൂട്ടുകൾ: ബാറ്ററിയും സ്വിച്ചും',
      summary: 'വൈദ്യുതി കടത്തിവിടുന്നതും കടത്തിവിടാത്തതുമായ വസ്തുക്കളും സർക്യൂട്ട് നിർമ്മാണവും.'
    },
    mr: {
      title: 'विद्युत परिपथ: सेल, कळ (स्विच) आणि सौर दिवे',
      summary: 'सुवाहक व दुर्वाहक पदार्थांची ओळख आणि साधा विद्युत परिपथ तयार करणे शिका.'
    },
    bn: {
      title: 'তড়িৎ বর্তনী: ব্যাটারি, সুইচ ও সৌর আলোর সহজ বিজ্ঞান',
      summary: 'সুপরিবাহী ও অপরিবাহী পদার্থ, সম্পূর্ণ বর্তনী গঠন ও বিদ্যুৎ নিরাপত্তার পাঠ।'
    }
  }),

  // Class 6 - English Learning
  buildCourse({
    id: 'lesson-eng-c6',
    classNumber: 6,
    subjectCode: 'eng',
    slug: 'parts-of-speech-prepositions-c6',
    difficultyLevel: 'intermediate',
    authorName: 'Margaret Alva English Institute',
    estimatedMinutes: 16,
    en: {
      title: 'Mastering Parts of Speech: Prepositions & Conjunctions',
      summary: 'Connect thoughts fluently using prepositions of place and time, and join clauses using coordinating conjunctions.',
      storyTitle: '1. The Boat Across the River',
      storyContent: 'The wooden ferry glided gently across the river. Raju sat under the awning because the midday sun was intense. The boat passed between two rocky islands and docked at the stone jetty. "Notice how under, across, between, and because connect places and reasons," the teacher pointed out.',
      storyNarration: 'Raju observed words that show position and connect ideas: under, between, across, and because.',
      conceptTitle: '2. Prepositions and Conjunctions in Action',
      conceptContent: 'Prepositions show relationship in space, direction, or time: on the table, under the tree, into the well, across the field. Conjunctions are linking words that join words or complete sentences: "and" (addition), "but" (contrast), "because" (reason), "or" (choice).',
      conceptNarration: 'Prepositions show position (under, across). Conjunctions join clauses (and, but, because).',
      illustratedSvg: 'hero-kids',
      activityTitle: '3. Connecting Words Matcher',
      activityInstructions: 'Match each incomplete sentence with its correct preposition or conjunction!',
      activityType: 'matching',
      activityData: [
        { id: 'p1', question: 'The sparrows nested ___ the thatched roof eaves.', answer: 'under (Preposition)' },
        { id: 'p2', question: 'Sita wanted to go to the fair, ___ she was feeling feverish.', answer: 'but (Conjunction of contrast)' },
        { id: 'p3', question: 'The farmer woke up early ___ he had to irrigate the crops.', answer: 'because (Conjunction of reason)' },
        { id: 'p4', question: 'The bullock cart travelled ___ the muddy stream.', answer: 'across (Preposition of motion)' }
      ],
      quizTitle: '4. Grammar Connectors Quiz',
      questions: [
        {
          text: 'Which preposition best completes: "The river flows ______ the two green hills"?',
          options: [
            { text: 'between', isCorrect: true },
            { text: 'inside', isCorrect: false },
            { text: 'during', isCorrect: false }
          ],
          hint: 'It describes position located in the middle of two distinct objects.',
          explanation: '"Between" is used when referring to space separating two entities.'
        },
        {
          text: 'Which conjunction shows a cause or reason: "He drank cool water ______ he was thirsty"?',
          options: [
            { text: 'because', isCorrect: true },
            { text: 'although', isCorrect: false },
            { text: 'or', isCorrect: false }
          ],
          hint: 'It explains WHY he drank water.',
          explanation: '"Because" links an action with its underlying cause or motivation.'
        }
      ]
    },
    hi: {
      title: 'व्याकरण के अंग: संबंधबोधक (Prepositions) और समुच्चयबोधक (Conjunctions)',
      summary: 'वाक्यों को जोड़ने वाले शब्द (और, लेकिन, क्योंकि) और स्थान दर्शाने वाले पदों का अभ्यास।'
    },
    kn: {
      title: 'ವ್ಯಾಕರಣದ ಕೊಂಡಿಗಳು: ವಿಭಕ್ತಿ ಪ್ರತ್ಯಯಗಳು ಮತ್ತು ಸಂಯೋಜಕಗಳು',
      summary: 'ವಾಕ್ಯಗಳನ್ನು ಅರ್ಥಪೂರ್ಣವಾಗಿ ಜೋಡಿಸುವ ಇಂಗ್ಲಿಷ್ Prepositions ಮತ್ತು Conjunctions ಬಳಕೆ.'
    },
    te: {
      title: 'భాషా భాగాలు: ప్రిపోజిషన్లు మరియు కంజంక్షన్లు',
      summary: 'వాక్యాలను అందంగా కలిపే సంధాన పదాలు మరియు స్థానాన్ని తెలిపే ఇంగ్లీష్ పదాలు.'
    },
    ta: {
      title: 'இலக்கணக் கூறுகள்: முன்னிடைச் சொற்கள் மற்றும் இணைப்புச் சொற்கள்',
      summary: 'ஆங்கில வாக்கியங்களை இணைக்கும் இணைப்பிடைச் சொற்கள் மற்றும் இடஞ்சுட்டுச் சொற்கள்.'
    },
    ml: {
      title: 'വ്യാകരണ ഘടകങ്ങൾ: പ്രിപ്പോസിഷനുകളും കൺജങ്ഷനുകളും',
      summary: 'വാക്യങ്ങളെ കൂട്ടിച്ചേർക്കാനും സ്ഥാനങ്ങൾ വ്യക്തമാക്കാനും സഹായിക്കുന്ന വാക്കുകൾ.'
    },
    mr: {
      title: 'शब्दांच्या जाती: शब्दयोगी अव्यये व उभयान्वयी अव्यये',
      summary: 'इंग्रजीत वाक्ये जोडणारे आणि दिशा/स्थान दर्शवणारे शब्द योग्य प्रकारे वापरणे.'
    },
    bn: {
      title: 'ব্যাকরণের সংযোগকারী পদ: Prepositions ও Conjunctions',
      summary: 'বাক্যের ভাব সুস্পষ্ট করতে সংযোজক ও অবস্থানসূচক ইংরেজি শব্দের সঠিক ব্যবহার।'
    }
  }),

  // Class 6 - Regional Language
  buildCourse({
    id: 'lesson-lang-c6',
    classNumber: 6,
    subjectCode: 'lang',
    slug: 'sandhi-compound-words-c6',
    difficultyLevel: 'intermediate',
    authorName: 'Pandit Gundappa Shastri',
    estimatedMinutes: 16,
    en: {
      title: 'Sandhi & Word Formations in Classical Tales',
      summary: 'Master the phonetic joining and splitting of compound words (Sandhi / ಸಂಧಿಗಳು) to read and compose literature with poise.',
      storyTitle: '1. The Master Scribe of the Palm-Leaf Scrolls',
      storyContent: 'In the ancient village library, the scholar showed students a palm-leaf inscription: "Devaalaya" (Temple) is made of "Deva" + "Aalaya" (House of God). Two vowel sounds seamlessly merge into one grand sustained vowel. "When sounds flow naturally without a hitch," the master explained, "we call it Sandhi!"',
      storyNarration: 'The scholar showed how Deva + Aalaya merge smoothly into Devaalaya through Sandhi.',
      conceptTitle: '2. Understanding Sandhi (Sound Fusion)',
      conceptContent: 'In Indian regional languages, Sandhi is the euphonic combination of two letters when two words join together: 1. Lopa Sandhi (one vowel sound drops away); 2. Aadesha Sandhi (one consonant changes into another soft sound); 3. Savarnadeergha / Guna Sandhi (two similar vowels merge into a single prolonged vowel sound).',
      conceptNarration: 'Sandhi joins two words seamlessly into one melodious compound word.',
      illustratedSvg: 'varnamala-script',
      activityTitle: '3. Sandhi Word Splitter',
      activityInstructions: 'Match each compound word with its correct underlying root split!',
      activityType: 'matching',
      activityData: [
        { id: 'p1', question: 'Devaalaya (ದೇವಾಲಯ / देवालय)', answer: 'Deva + Aalaya' },
        { id: 'p2', question: 'Sooryodaya (ಸೂರ್ಯೋದಯ / सूर्योदय)', answer: 'Soorya + Udaya' },
        { id: 'p3', question: 'Vidyarthi (ವಿದ್ಯಾರ್ಥಿ / विद्यार्थी)', answer: 'Vidya + Arthi' },
        { id: 'p4', question: 'Maharshi (ಮಹರ್ಷಿ / महर्षि)', answer: 'Maha + Rishi' }
      ],
      quizTitle: '4. Sandhi Mastery Quiz',
      questions: [
        {
          text: 'What do we call the linguistic process where two adjacent sounds merge into a single compound word?',
          options: [
            { text: 'Sandhi', isCorrect: true },
            { text: 'Multiplication', isCorrect: false },
            { text: 'Punctuation', isCorrect: false }
          ],
          hint: 'It comes from Sanskrit and regional grammar roots.',
          explanation: 'Sandhi refers to the euphonic junction of phonemes at word or morpheme boundaries.'
        },
        {
          text: 'When "Vidya" (knowledge) joins with "Aalaya" (abode), what compound word is created?',
          options: [
            { text: 'Vidyalaya (School / Temple of Learning)', isCorrect: true },
            { text: 'Vidyapatha', isCorrect: false }
          ],
          hint: 'The two "a" sounds lengthen into one single "aa".',
          explanation: 'Vidya + Aalaya combines through Savarnadeergha Sandhi into Vidyalaya.'
        }
      ]
    },
    hi: {
      title: 'संधि और शब्द रचना: स्वरों और व्यंजनों का मेल',
      summary: 'दीर्घ, गुण और वृद्धि संधि के नियम और शब्दों को विच्छेद करने का अभ्यास।'
    },
    kn: {
      title: 'ಸಂಧಿಗಳು ಮತ್ತು ಪದ ಸಂಯೋಜನೆ: ಕನ್ನಡ ಮತ್ತು ಸಂಸ್ಕೃತ ಸಂಧಿಗಳು',
      summary: 'ಲೋಪ, ಆಗಮ, ಆದೇಶ ಮತ್ತು ಸವರ್ಣದೀರ್ಘ ಸಂಧಿಗಳ ನಿಯಮಗಳು ಮತ್ತು ಉದಾಹರಣೆಗಳು.'
    },
    te: {
      title: 'సంధులు మరియు పదాల కూర్పు (Telugu Sandhulu)',
      summary: 'అత్వ, ఇత్వ, ఉత్వ మరియు సవర్ణదీర్ఘ సంధుల సూత్రాలు మరియు ఉదాహరణలు.'
    },
    ta: {
      title: 'புணர்ச்சி விதிகள்: சொற்கள் இணையும் அழகு',
      summary: 'நிலைமொழியும் வருமொழியும் இணையும் புணர்ச்சி நெறிமுறைகளைக் கற்போம்.'
    },
    ml: {
      title: 'സന്ധികളും പദനിർമ്മിതിയും (Sandhi in Malayalam)',
      summary: 'അക്ഷരങ്ങൾ തമ്മിൽ ചേരുമ്പോൾ ഉണ്ടാകുന്ന സ്വരവ്യതിയാനങ്ങളും സന്ധിനിയമങ്ങളും.'
    },
    mr: {
      title: 'संधी आणि शब्दरचना: स्वरसंधी व व्यंजनसंधी',
      summary: 'मराठी व्याकरणातील संधीचे प्रकार आणि सामासिक शब्दांची फोड करणे शिका.'
    },
    bn: {
      title: 'সন্ধি ও শব্দগঠন: স্বরসন্ধি ও ব্যঞ্জনসন্ধির নিয়ম',
      summary: 'ধ্বনি পরিবর্তন ও দুটি বর্ণের মিলনে নতুন শব্দ সৃষ্টির ব্যাকরণগত পাঠ।'
    }
  }),

  // ==========================================
  // CLASS 7
  // ==========================================

  // Class 7 - Mathematics
  buildCourse({
    id: 'lesson-math-c7',
    classNumber: 7,
    subjectCode: 'math',
    slug: 'ratios-proportions-farm-area-c7',
    difficultyLevel: 'advanced',
    authorName: 'Prof. Bhaskara Mathematics Cell',
    estimatedMinutes: 18,
    en: {
      title: 'Ratios, Proportions & Calculating Farm Land Areas',
      summary: 'Calculate proportional sharing of canal irrigation, crop fertilizer mixing, and compute rectangular and triangular land areas.',
      storyTitle: '1. Partitioning the Village Orchard',
      storyContent: 'Brothers Basappa and Mallappa decided to divide their 5-acre rectangular mango orchard in the ratio 3:2 according to their shared canal water shares. Basappa asked: "How many acres will each of us cultivate, and what will the fence perimeter be?" With chalk in hand, they calculated the exact proportions.',
      storyNarration: 'Farmers used ratios and proportions to divide canal water and calculate crop field land areas.',
      conceptTitle: '2. Ratios, Unitary Method, and Land Area',
      conceptContent: '1. A Ratio compares two quantities using division (written as a:b); 2. Proportion states that two ratios are equal (a:b = c:d); 3. The Unitary Method finds the value of 1 unit first to calculate many units; 4. Rectangular Area = Length × Breadth (m² or hectares); 5. Triangular Area = 1/2 × Base × Height.',
      conceptNarration: 'Ratios compare quantities. Land area is calculated by multiplying length and breadth.',
      illustratedSvg: 'ratios-field',
      activityTitle: '3. Farm Ratio Solver',
      activityInstructions: 'Match each agricultural ratio problem with its calculated answer!',
      activityType: 'matching',
      activityData: [
        { id: 'p1', question: 'Sharing 50 bags of organic manure in ratio 3:2', answer: '30 bags and 20 bags' },
        { id: 'p2', question: 'Area of a rectangular paddy field 40m long and 25m wide', answer: '1,000 m² (0.1 Hectare)' },
        { id: 'p3', question: 'If 4 kg of wheat seed costs ₹120, cost of 10 kg', answer: '₹300 (Unit price = ₹30/kg)' },
        { id: 'p4', question: 'Perimeter of rectangular fence (40m + 25m)', answer: '130 metres [2 × (L + B)]' }
      ],
      quizTitle: '4. Ratios and Area Quiz',
      questions: [
        {
          text: 'If a farmer mixes neem cake and compost in the ratio 1:4, how much neem cake is needed for 20 kg of total mixture?',
          options: [
            { text: '4 kg', isCorrect: true },
            { text: '5 kg', isCorrect: false },
            { text: '10 kg', isCorrect: false }
          ],
          hint: 'Total parts = 1 + 4 = 5 parts. 20 kg ÷ 5 = 4 kg per part.',
          explanation: 'With 1 part out of 5 total parts, Neem cake = (1/5) × 20 kg = 4 kg.'
        },
        {
          text: 'What is the mathematical formula for the area of a rectangular crop field with length L and breadth B?',
          options: [
            { text: 'Area = Length × Breadth', isCorrect: true },
            { text: 'Area = Length + Breadth', isCorrect: false },
            { text: 'Area = 2 × (Length + Breadth)', isCorrect: false }
          ],
          hint: 'Perimeter is 2(L + B), but area is the surface space.',
          explanation: 'The surface area of a rectangle is computed by multiplying its length by its breadth.'
        }
      ]
    },
    hi: {
      title: 'अनुपात, समानुपात और खेतों का क्षेत्रफल मापन',
      summary: 'नहर के पानी के बंटवारे से लेकर खेत के रकबे (Area) तक व्यावहारिक गणितीय गणनाएँ।'
    },
    kn: {
      title: 'ಅನುಪಾತ, ಸಮಾನುಪಾತ ಮತ್ತು ಕೃಷಿ ಜಮೀನಿನ ವಿಸ್ತೀರ್ಣ',
      summary: 'ನೀರಿನ ಹಂಚಿಕೆ, ಏಕಮಾನ ಪದ್ಧತಿ ಮತ್ತು ಆಯತಾಕಾರದ ಹೊಲಗಳ ವಿಸ್ತೀರ್ಣ ಲೆಕ್ಕಾಚಾರ.'
    },
    te: {
      title: 'నిష్పత్తి, అనుపాతం మరియు పొలాల వైశాల్యం',
      summary: 'నీటి పంపకాలు, ఎరువుల కలయిక మరియు భూమి వైశాల్య గణనలు.'
    },
    ta: {
      title: 'விகிதம், விகிதசமம் மற்றும் நிலப் பரப்பளவு கணக்கீடு',
      summary: 'நீர் பங்கீடு மற்றும் செவ்வக நிலத்தின் பரப்பளவைக் கணக்கிடும் எளிய வழிகள்.'
    },
    ml: {
      title: 'അംശബന്ധവും അനുപാതവും കൃഷിഭൂമിയുടെ വിസ്തീർണ്ണവും',
      summary: 'പാടങ്ങളുടെ വിസ്തീർണ്ണവും വളം ചേർക്കലും കണക്കുകൂട്ടുന്ന പ്രായോഗിക ഗണിതം.'
    },
    mr: {
      title: 'गुणोत्तर, प्रमाण आणि शेतजमिनीचे क्षेत्रफळ',
      summary: 'पाणी वाटप, खतांचे प्रमाण आणि आयताकृती शेताचे क्षेत्रफळ काढणे शिका.'
    },
    bn: {
      title: 'অনুপাত, সমানুপাত ও কৃষিজমির ক্ষেত্রফল পরিমাপ',
      summary: 'জলবণ্টন, সারের মিশ্রণ এবং আয়তাকার ফসলের জমির ক্ষেত্রফলের বাস্তব হিসাব।'
    }
  }),

  // Class 7 - EVS
  buildCourse({
    id: 'lesson-evs-c7',
    classNumber: 7,
    subjectCode: 'evs',
    slug: 'monsoon-winds-climate-kharif-rabi-c7',
    difficultyLevel: 'advanced',
    authorName: 'Indian Meteorological Society Education Wing',
    estimatedMinutes: 18,
    en: {
      title: 'Monsoon Winds, Climate & Kharif-Rabi Crop Cycles',
      summary: 'Explore Southwest and Northeast monsoons, agricultural seasons (Kharif, Rabi, Zaid), and climate adaptation in rural India.',
      storyTitle: '1. Waiting for the Southwest Monsoon',
      storyContent: 'In early June, the humid sea breeze from the Arabian Sea pushed towering cumulonimbus clouds across the Western Ghats. The earthy petrichor (smell of first rain on dry soil) swept across the village. Farmer Somanna loaded the tractor with paddy seed: "The Southwest monsoon has arrived! It is time for our Kharif sowing!"',
      storyNarration: 'The arrival of the Southwest monsoon in June marks the beginning of India’s main agricultural sowing.',
      conceptTitle: '2. Monsoon Mechanisms and Agricultural Seasons',
      conceptContent: '1. Southwest Monsoon (June–Sept) brings 75% of India’s rainfall; 2. Northeast Retreating Monsoon (Oct–Dec) waters southern peninsular states; 3. Kharif Crops (Paddy, Maize, Cotton, Soybean) are sown with monsoon rains; 4. Rabi Crops (Wheat, Mustard, Gram, Barley) are sown in winter and harvested in spring; 5. Zaid Crops (Watermelon, Cucumber) grow during brief summer.',
      conceptNarration: 'Kharif crops grow in monsoon rains (paddy, maize). Rabi crops grow in cool winter (wheat, mustard).',
      illustratedSvg: 'monsoon-climate',
      activityTitle: '3. Crop Season Classifier',
      activityInstructions: 'Match each Indian agricultural crop with its correct growing season!',
      activityType: 'matching',
      activityData: [
        { id: 'p1', question: 'Paddy Rice & Cotton 🌾', answer: 'Kharif Season (Sown June monsoon)' },
        { id: 'p2', question: 'Wheat & Mustard Seed 🌾', answer: 'Rabi Season (Sown Oct–Nov winter)' },
        { id: 'p3', question: 'Watermelon & Cucumber 🍉', answer: 'Zaid Season (March–May summer)' },
        { id: 'p4', question: 'Southwest Monsoon Winds', answer: 'Blows from Indian Ocean in June' }
      ],
      quizTitle: '4. Monsoon and Climate Quiz',
      questions: [
        {
          text: 'Which crop season begins with the onset of the Southwest monsoon rains in June–July?',
          options: [
            { text: 'Kharif Season', isCorrect: true },
            { text: 'Rabi Season', isCorrect: false },
            { text: 'Zaid Season', isCorrect: false }
          ],
          hint: 'Paddy, maize, and groundnut are classic examples.',
          explanation: 'Kharif crops depend directly on the high moisture and rainfall of the summer monsoon.'
        },
        {
          text: 'Why do farmers sow wheat and mustard during the Rabi season (winter months)?',
          options: [
            { text: 'These temperate crops require cool temperatures and moderate moisture to mature', isCorrect: true },
            { text: 'Wheat plants drown in light rain', isCorrect: false }
          ],
          hint: 'Wheat thrives in cool, dry northern winter sunshine.',
          explanation: 'Rabi crops require cooler growing conditions and bright sunshine during ripening.'
        }
      ]
    },
    hi: {
      title: 'मानसून की हवाएँ, जलवायु और खरीफ-रबी की फसलें',
      summary: 'दक्षिण-पश्चिम मानसून, फसलों के मौसम (खरीफ, रबी, जायद) और ग्रामीण कृषि चक्र।'
    },
    kn: {
      title: 'ಮುಂಗಾರು ಮಳೆಗಳು, ವಾಯುಗುಣ ಮತ್ತು ಖಾರಿಫ್-ರಬಿ ಬೆಳೆಗಳು',
      summary: 'ನೈಋತ್ಯ ಮುಂಗಾರು, ಈಶಾನ್ಯ ಹಿಂಗಾರು ಮತ್ತು ಭಾರತೀಯ ರೈತರ ಋತುಮಾನ ಆಧಾರಿತ ಕೃಷಿ.'
    },
    te: {
      title: 'రుతుపవనాలు, శీతోష్ణస్థితి మరియు ఖరీఫ్-రబీ పంటలు',
      summary: 'నైరుతి రుతుపవనాలు, వర్షపాతం మరియు వివిధ కాలాల్లో పండించే పంటల పరిచయం.'
    },
    ta: {
      title: 'பருவக் காற்றுகள், காலநிலை மற்றும் காரிஃப்-ராபி பயிர்கள்',
      summary: 'தென்மேற்கு மற்றும் வடகிழக்கு பருவமழை மற்றும் வேளாண் பயிர் சுழற்சி.'
    },
    ml: {
      title: 'കാലവർഷവും കാലാവസ്ഥയും ഖാരിഫ്-റബീ വിളകളും',
      summary: 'കാലവർഷക്കാറ്റുകളും കൃഷിരീതികളും ഇന്ത്യൻ കാർഷിക കലണ്ടറും.'
    },
    mr: {
      title: 'मान्सूनचे वारे, हवामान आणि खरीप-रब्बी पिके',
      summary: 'नैऋत्य मान्सून, हवामानाचे चक्र आणि मोसमानुसार पिकांची निवड.'
    },
    bn: {
      title: 'মৌসুমি বায়ু, আবহাওয়া ও খরিফ-রবি ফসলের চক্র',
      summary: 'দক্ষিণ-পশ্চিম মৌসুমি বৃষ্টি, ঋতুভিত্তিক চাষাবাদ ও ভারতীয় কৃষির নিবিড় পাঠ।'
    }
  }),

  // Class 7 - English Learning
  buildCourse({
    id: 'lesson-eng-c7',
    classNumber: 7,
    subjectCode: 'eng',
    slug: 'active-passive-voice-c7',
    difficultyLevel: 'advanced',
    authorName: 'Central Institute of English Forum',
    estimatedMinutes: 18,
    en: {
      title: 'Voice in Storytelling: Active and Passive Sentences',
      summary: 'Transform sentences between active and passive voice to write engaging news reports and formal school announcements.',
      storyTitle: '1. The School Wall Magazine Reporter',
      storyContent: 'The Class 7 editorial team was publishing the village school bulletin: "The student eco-club planted one hundred saplings (Active Voice)." Teacher Rekha suggested: "In newspaper reporting, we often highlight the action or result: ‘One hundred saplings were planted by the student eco-club’ (Passive Voice)!"',
      storyNarration: 'Students learned to switch between active voice and passive voice when writing reports.',
      conceptTitle: '2. Active Voice vs. Passive Voice',
      conceptContent: '1. In Active Voice, the Subject performs the action: "Farmer Basappa harvested the sugarcane" (Subject + Verb + Object); 2. In Passive Voice, the Object becomes the focus and receives the action: "The sugarcane was harvested by Farmer Basappa" (Object + Past Participle + by + Subject). Use passive voice in lab experiments, news reports, and formal notices.',
      conceptNarration: 'Active voice emphasizes the doer. Passive voice emphasizes the receiver of the action.',
      illustratedSvg: 'hero-kids',
      activityTitle: '3. Voice Transformation Matcher',
      activityInstructions: 'Match each Active Voice sentence with its correct Passive Voice transformation!',
      activityType: 'matching',
      activityData: [
        { id: 'p1', question: 'Active: The carpenter built a sturdy wooden bench.', answer: 'Passive: A sturdy wooden bench was built by the carpenter.' },
        { id: 'p2', question: 'Active: Meena painted the classroom mural.', answer: 'Passive: The classroom mural was painted by Meena.' },
        { id: 'p3', question: 'Active: Grandfather waters the garden every evening.', answer: 'Passive: The garden is watered by grandfather every evening.' },
        { id: 'p4', question: 'Active: The headmaster rang the brass bell.', answer: 'Passive: The brass bell was rung by the headmaster.' }
      ],
      quizTitle: '4. Active & Passive Voice Quiz',
      questions: [
        {
          text: 'Which sentence is written in the Passive Voice?',
          options: [
            { text: 'A new solar water pump was installed in the village by engineers.', isCorrect: true },
            { text: 'Engineers installed a new solar water pump in the village.', isCorrect: false }
          ],
          hint: 'Look for "was installed by...".',
          explanation: 'The subject receives the action ("was installed by engineers"), indicating passive construction.'
        },
        {
          text: 'What is the passive form of: "The children played cricket in the field"?',
          options: [
            { text: 'Cricket was played by the children in the field.', isCorrect: true },
            { text: 'Cricket is playing by the children.', isCorrect: false }
          ],
          hint: 'The tense is Simple Past, so use "was played".',
          explanation: '"Cricket was played by the children" correctly transforms the past action into passive form.'
        }
      ]
    },
    hi: {
      title: 'वाच्य परिवर्तन: कर्तृवाच्य और कर्मवाच्य (Active & Passive Voice)',
      summary: 'अंग्रेज़ी में कर्तृवाच्य से कर्मवाच्य में बदलने के नियम और समाचार लेखन में इनका महत्व।'
    },
    kn: {
      title: 'ವಾಕ್ಯ ಪ್ರಯೋಗ: ಕರ್ತರಿ ಮತ್ತು ಕರ್ಮಣಿ ಪ್ರಯೋಗ (Active & Passive Voice)',
      summary: 'ಕರ್ತೃ ಮತ್ತು ಕರ್ಮ ಪ್ರಧಾನ ವಾಕ್ಯಗಳ ರಚನೆ ಹಾಗೂ ಇಂಗ್ಲಿಷ್ ವರದಿಗಾರಿಕೆಯಲ್ಲಿ ಅವುಗಳ ಬಳಕೆ.'
    },
    te: {
      title: 'యాక్టివ్ & పాసివ్ వాయిస్ (Active & Passive Voice)',
      summary: 'కర్తరి మరియు కర్మణి వాక్యాల నిర్మాణం మరియు నివేదికలు రాయడంలో వాటి ప్రాధాన్యత.'
    },
    ta: {
      title: 'செய்வினை மற்றும் செயப்பாட்டு வினை (Active & Passive Voice)',
      summary: 'ஆங்கிலத்தில் செய்வினையை செயப்பாட்டு வினையாக மாற்றும் எளிய விதிமுறைகள்.'
    },
    ml: {
      title: 'ആക്ടീവ് വോയിസും പാസ്സീവ് വോയിസും (Active & Passive Voice)',
      summary: 'വാക്യങ്ങളിലെ കർതൃ-കർമ്മ പ്രയോഗങ്ങളും റിപ്പോർട്ടുകൾ തയ്യാറാക്കുന്ന രീതിയും.'
    },
    mr: {
      title: 'कर्तरी व कर्मणी प्रयोग (Active & Passive Voice)',
      summary: 'वाक्यरचनेत कर्ता आणि कर्माचे स्थान बदलून प्रभावी इंग्रजी लेखन करणे.'
    },
    bn: {
      title: 'বাচ্য পরিবর্তন: Active Voice থেকে Passive Voice',
      summary: 'কর্তৃবাচ্য ও কর্মবাচ্যের রূপান্তর এবং সংবাদ প্রতিবেদন রচনার সহজ নিয়মাবলী।'
    }
  }),

  // Class 7 - Regional Language
  buildCourse({
    id: 'lesson-lang-c7',
    classNumber: 7,
    subjectCode: 'lang',
    slug: 'bhakti-poetry-vachana-c7',
    difficultyLevel: 'advanced',
    authorName: 'Basava Samithi & Bhakti Literature Trust',
    estimatedMinutes: 18,
    en: {
      title: 'Literary Metaphors & Medieval Bhakti Poetry',
      summary: 'Explore Vachana literature, Kabir’s Dohas, and regional saint poetry celebrating universal brotherhood and social harmony.',
      storyTitle: '1. The Weaver Saint’s Loom',
      storyContent: 'The Kannada teacher recited Basaveshwara’s Vachana: "Kayakaave Kailasa" (Honest physical labor is the heavenly abode itself). He explained: "Saint poets like Basavanna, Akka Mahadevi, Kabir, and Thiruvalluvar used humble village metaphors — spinning wheels, flowing rivers, and clay vessels — to teach profound spiritual equality and casteless brotherhood."',
      storyNarration: 'Medieval saint poets used simple rural metaphors like spinning wheels to preach social equality.',
      conceptTitle: '2. The Vachana and Doha Tradition',
      conceptContent: 'Medieval Bhakti poets rejected rigid ritualism and wrote in the everyday spoken language of working people. Key poetic devices include: Metaphors (Upamana/Upameya where the human mind is compared to a restless monkey), Epigrams, and philosophical couplets that inspire social reform and compassion for all living beings.',
      conceptNarration: 'Bhakti poetry brought literature from royal palaces to ordinary people in simple, honest mother tongue.',
      illustratedSvg: 'panchayat-tree',
      activityTitle: '3. Saint Poet and Message Matcher',
      activityInstructions: 'Match each famous Indian saint poet with their timeless social philosophy!',
      activityType: 'matching',
      activityData: [
        { id: 'p1', question: 'Basaveshwara (12th Century Karnataka)', answer: '"Kayakave Kailasa" (Work is worship & social equality)' },
        { id: 'p2', question: 'Sant Kabir (Bhakti Saint)', answer: 'Dohas teaching religious harmony and inner humility' },
        { id: 'p3', question: 'Thiruvalluvar (Ancient Tamil Sage)', answer: 'Thirukkural couplets on ethics, virtue, and truth' },
        { id: 'p4', question: 'Sant Tukaram (Maharashtra Varkari)', answer: 'Abhangas celebrating divine love in the heart of farmers' }
      ],
      quizTitle: '4. Bhakti Literature Quiz',
      questions: [
        {
          text: 'What was the revolutionary linguistic breakthrough of the medieval Bhakti movement poets?',
          options: [
            { text: 'They composed poetry in the simple everyday mother tongue of common rural folk', isCorrect: true },
            { text: 'They wrote only in foreign languages', isCorrect: false },
            { text: 'They kept their poems secret', isCorrect: false }
          ],
          hint: 'They rejected elite exclusivity so that everyone could understand.',
          explanation: 'Bhakti poets democratized literature by using living spoken languages of weavers, farmers, and artisans.'
        },
        {
          text: 'What does the famous principle "Kayakave Kailasa" proclaim?',
          options: [
            { text: 'Dedicated, honest labor in service of society is divine worship itself', isCorrect: true },
            { text: 'Only royalty should work', isCorrect: false }
          ],
          hint: 'It elevated the dignity of everyday manual labor.',
          explanation: 'Basavanna declared that honest physical labor done with clean heart and mind is equivalent to heaven.'
        }
      ]
    },
    hi: {
      title: 'मध्यकालीन भक्ति काव्य: कबीर, तुलसी और सामाजिक समरसता',
      summary: 'दोहों और पदों के माध्यम से नैतिक मूल्यों, समानता और भक्ति काल के साहित्य का अध्ययन।'
    },
    kn: {
      title: 'ವಚನ ಸಾಹಿತ್ಯ ಮತ್ತು ಭಕ್ತಿ ಕಾವ್ಯ: ಕಾಯಕವೇ ಕೈಲಾಸ',
      summary: 'ಬಸವಣ್ಣ, ಅಕ್ಕಮಹಾದೇವಿ ಮತ್ತು ದಾಸ ಸಾಹಿತ್ಯದ ಸರಳ ಜನಪದ ರೂಪಕಗಳು ಮತ್ತು ಸಾಮಾಜಿಕ ಸಮಾನತೆ.'
    },
    te: {
      title: 'భక్తి సాహిత్యం: వేమన శతకాలు మరియు అన్నమయ్య కీర్తనలు',
      summary: 'సామాజిక సమానత్వం, నైతిక విలువలు మరియు భక్తి కవుల భావాల అధ్యయనం.'
    },
    ta: {
      title: 'பக்தி இலக்கியமும் திருக்குறளும்: அறநெறிப் பாடல்கள்',
      summary: 'திருவள்ளுவர் மற்றும் ஆழ்வார்-நாயன்மார்களின் சமத்துவ சிந்தனைகள்.'
    },
    ml: {
      title: 'ഭക്തിപ്രസ്ഥാനവും കാവ്യപാരമ്പര്യവും: തുഞ്ചത്തെഴുത്തച്ഛൻ',
      summary: 'ഭക്തികാവ്യങ്ങളിലെ സദാചാരമൂല്യങ്ങളും സാഹിത്യ സൗന്ദര്യവും.'
    },
    mr: {
      title: 'संतकाव्य आणि अभंगवाणी: ज्ञानेश्वर, तुकाराम व सामाजिक समता',
      summary: 'वारकरी संतांचे विचार, अभंगांचा भावार्थ आणि सर्वधर्मसमभावाची शिकवण.'
    },
    bn: {
      title: 'মধ্যযুগের ভক্তিসাহিত্য: চণ্ডীদাস, চৈতন্য ও লালন সাঁই',
      summary: 'মানবপ্রেম, সামাজিক সাম্য ও লোকগানের মরমী দর্শনের অনুপম পাঠ।'
    }
  }),

  // Class 7 - Social Studies
  buildCourse({
    id: 'lesson-soc-c7',
    classNumber: 7,
    subjectCode: 'soc',
    slug: 'medieval-india-architecture-guilds-c7',
    difficultyLevel: 'advanced',
    authorName: 'Archaeological Survey of India Heritage Cell',
    estimatedMinutes: 18,
    en: {
      title: 'Medieval India: Architecture, Rural Guilds & Forts',
      summary: 'Discover magnificent temple architecture (Hampi, Cholas), stepped-wells, medieval craft guilds, and hill-fort defense engineering.',
      storyTitle: '1. The Stone Chariot of Vijayanagara',
      storyContent: 'During the school study tour to Hampi, Class 7 students stood in awe before the monolithic Stone Chariot of the Vittala temple complex. "Look at the musical stone pillars and the advanced tank irrigation aqueducts," the history teacher said. "Medieval Indian kingdoms built massive public stone step-wells and irrigation canals that powered prosperous village markets!"',
      storyNarration: 'Students explored the marvels of medieval Indian architecture, craft guilds, and stone carvings.',
      conceptTitle: '2. Medieval Guilds, Architecture, and Irrigation',
      conceptContent: 'Medieval Indian dynasties (Cholas, Chalukyas, Vijayanagara, Mughals) excelled in stone architecture (Dravidian gopurams, Indo-Islamic domes and arches). Craft guilds (Shrenis) protected weavers and bronze casters. Rulers invested heavily in massive community rainwater tanks (Kalyanis and Eris) to safeguard agriculture from drought.',
      conceptNarration: 'Guilds supported artisans, while rulers constructed grand temple monuments and irrigation tanks.',
      illustratedSvg: 'ancient-architecture',
      activityTitle: '3. Medieval Heritage Matcher',
      activityInstructions: 'Match each historic monument or institution with its architectural hallmark!',
      activityType: 'matching',
      activityData: [
        { id: 'p1', question: 'Brihadisvara Temple (Thanjavur Chola)', answer: 'Towering granite Vimana built without mortar' },
        { id: 'p2', question: 'Hampi Vijayanagara Capital', answer: 'Stone Chariot, musical pillars, and aqueduct networks' },
        { id: 'p3', question: 'Medieval Artisan Guilds (Shrenis)', answer: 'Organized trade bodies for weavers, potters, and metalworkers' },
        { id: 'p4', question: 'Eri & Kalyani Water Reservoirs', answer: 'Interconnected rainwater tanks recharging rural wells' }
      ],
      quizTitle: '4. Medieval Architecture Quiz',
      questions: [
        {
          text: 'What major public utility did medieval South Indian kings systematically construct to prevent agricultural droughts in villages?',
          options: [
            { text: 'Interconnected community rainwater tanks (Eris and Kalyanis)', isCorrect: true },
            { text: 'Swimming pools for royals only', isCorrect: false }
          ],
          hint: 'They collected monsoon runoff across the undulating Deccan landscape.',
          explanation: 'The historical tank cascade systems collected monsoon rainfall, recharging aquifers across thousands of villages.'
        },
        {
          text: 'What was the function of medieval merchant and artisan guilds called Shrenis?',
          options: [
            { text: 'They trained apprentices, regulated product quality, and managed trade routes', isCorrect: true },
            { text: 'They demolished buildings', isCorrect: false }
          ],
          hint: 'Similar to modern trade associations and cooperatives.',
          explanation: 'Guilds maintained craft standards, supported widows and orphans, and financed community public works.'
        }
      ]
    },
    hi: {
      title: 'मध्यकालीन भारत: स्थापत्य कला, शिल्पकला और जल संरचनाएँ',
      summary: 'हम्पी, तंजாவूर के मंदिर, बावड़ियाँ और मध्यकालीन व्यापारिक श्रेणियों का इतिहास।'
    },
    kn: {
      title: 'ಮಧ್ಯಕಾಲೀನ ಭಾರತ: ವಾಸ್ತುಶಿಲ್ಪ, ಕರಕುಶಲ ಸಂಘಗಳು ಮತ್ತು ಕೋಟೆಗಳು',
      summary: 'ಹಂಪಿಯ ಕಲ್ಲಿನ ರಥ, ಬೃಹದೀಶ್ವರ ದೇವಾಲಯ, ಕಲ್ಯಾಣಿಗಳು ಮತ್ತು ಶ್ರೇಣಿಗಳ ಇತಿಹಾಸ.'
    },
    te: {
      title: 'మధ్యయుగ భారతదేశం: శిల్పకళ, కోటలు మరియు చెరువుల వ్యవస్థ',
      summary: 'విజయనగర సామ్రాజ్యం, హంపి శిల్పకళ మరియు ప్రాచీన నీటిపారుదల చెరువులు.'
    },
    ta: {
      title: 'இடைக்கால இந்தியா: சோழர் கட்டிடக்கலை மற்றும் ஏரி பாசனம்',
      summary: 'தஞ்சைப் பெரிய கோயில், மாமல்லபுரம் சிற்பங்கள் மற்றும் கிராமப்புற ஏரி அமைப்பு.'
    },
    ml: {
      title: 'മധ്യകാല ഇന്ത്യ: വാസ്തുവിദ്യയും ജലസംഭരണികളും',
      summary: 'ക്ഷേത്ര വാസ്തുവിദ്യ, കോട്ടകൾ, പരമ്പരാഗത ജലസംഭരണികളുടെ ചരിത്രം.'
    },
    mr: {
      title: 'मध्ययुगीन भारत: वास्तुकला, गडकिल्ले आणि जलव्यवस्थापन',
      summary: 'महाराष्ट्रातील जलदुर्ग व गडकिल्ले, मंदिरे आणि तत्कालीन बाजारपेठांची माहिती.'
    },
    bn: {
      title: 'মধ্যযুগীয় ভারত: স্থাপত্য, ঐতিহাসিক দুর্গ ও কারিগর সমিতি',
      summary: 'টেরাকোটা মন্দির, দুর্গ নির্মাণ শৈলী এবং গ্রামীণ জলসেচ কাঠামোর বৈজ্ঞানিক ঐতিহ্য।'
    }
  }),

  // ==========================================
  // CLASS 8
  // ==========================================

  // Class 8 - Mathematics
  buildCourse({
    id: 'lesson-math-c8',
    classNumber: 8,
    subjectCode: 'math',
    slug: 'linear-equations-profit-loss-c8',
    difficultyLevel: 'advanced',
    authorName: 'National Mathematics Council Cell',
    estimatedMinutes: 20,
    en: {
      title: 'Linear Equations & Agricultural Profit and Loss',
      summary: 'Formulate single-variable linear equations (ax + b = c) and solve agricultural accounting problems involving Cost Price, Selling Price, and Profit%.',
      storyTitle: '1. The Cooperative Dairy Audit',
      storyContent: 'The village milk cooperative had an audit meeting. The president wrote on the board: "We bought milk from farmers for ₹1,20,000 (Cost Price). We chilled and pasteurized it at a cost of ₹15,000. We sold it to the district cooperative for ₹1,62,000 (Selling Price). Let us calculate our cooperative net profit and profit percentage!"',
      storyNarration: 'Students calculated the net profit and profit percentage for the village cooperative dairy.',
      conceptTitle: '2. Linear Equations and Financial Formulas',
      conceptContent: '1. Linear Equation: An algebraic equality with highest power 1: ax + b = c (e.g., 2x + 10 = 50 => 2x = 40 => x = 20); 2. Cost Price (CP) = Total purchase + overhead expenses; 3. Selling Price (SP) = Revenue from sales; 4. If SP > CP, Profit = SP - CP; 5. Profit % = (Profit / CP) × 100; 6. If CP > SP, Loss = CP - SP.',
      conceptNarration: 'Linear equations solve unknown values. Profit is calculated as Selling Price minus Cost Price.',
      illustratedSvg: 'haat-market',
      activityTitle: '3. Algebraic Business Solver',
      activityInstructions: 'Match each real-world farming finance equation with its solved value!',
      activityType: 'matching',
      activityData: [
        { id: 'p1', question: 'Equation: 3x + 15 = 60 (Cost of 3 seed bags plus transport)', answer: 'x = 15 (Each seed bag is ₹15)' },
        { id: 'p2', question: 'Total CP = ₹800, SP = ₹1,000. Net Profit', answer: '₹200 Net Profit' },
        { id: 'p3', question: 'Profit Percentage for CP = ₹800, Profit = ₹200', answer: '25% Profit [(200/800) × 100]' },
        { id: 'p4', question: 'Equation: 5y - 20 = 80', answer: 'y = 20 [5y = 100 => y = 20]' }
      ],
      quizTitle: '4. Algebra & Profit-Loss Quiz',
      questions: [
        {
          text: 'If a farmer spends ₹4,000 cultivating a plot of sunflower and sells the harvest for ₹5,000, what is the Profit Percentage?',
          options: [
            { text: '25%', isCorrect: true },
            { text: '20%', isCorrect: false },
            { text: '10%', isCorrect: false }
          ],
          hint: 'Profit = ₹1,000. Profit% = (1000 / 4000) × 100.',
          explanation: 'Profit = ₹5,000 - ₹4,000 = ₹1,000. Profit% = (1,000 / 4,000) × 100 = 25%.'
        },
        {
          text: 'In the linear equation 2x + 6 = 24, what is the value of variable x?',
          options: [
            { text: 'x = 9', isCorrect: true },
            { text: 'x = 12', isCorrect: false },
            { text: 'x = 18', isCorrect: false }
          ],
          hint: 'Subtract 6 from both sides: 2x = 18. Then divide by 2.',
          explanation: '2x = 24 - 6 = 18. Therefore, x = 18 / 2 = 9.'
        }
      ]
    },
    hi: {
      title: 'रैखिक समीकरण और लाभ-हानि: कृषि अर्थशास्त्र का गणित',
      summary: 'एक चर वाले रैखिक समीकरण (Linear Equations) और क्रय मूल्य, विक्रय मूल्य व लाभ% की गणना।'
    },
    kn: {
      title: 'ಸರಳ ರೇಖಾತ್ಮಕ ಸಮೀಕರಣಗಳು ಮತ್ತು ಲಾಭ-ನಷ್ಟದ ಲೆಕ್ಕಾಚಾರ',
      summary: 'ಏಕ ಚರಾಕ್ಷರದ ಸಮೀಕರಣಗಳು, ಕೃಷಿ ಉತ್ಪಾದನಾ ವೆಚ್ಚ ಮತ್ತು ಶೇಕಡಾ ಲಾಭ-ನಷ್ಟದ ಸೂತ್ರಗಳು.'
    },
    te: {
      title: 'సరళ సమీకరణాలు మరియు లాభ-నష్టాలు (Linear Equations)',
      summary: 'ఒక చరరాశి సమీకరణాలు మరియు వ్యవసాయ ఆదాయ-వ్యయాల లాభ నష్టాల గణనలు.'
    },
    ta: {
      title: 'ஒருபடிச் சமன்பாடுகள் மற்றும் இலாப-நட்டக் கணக்குகள்',
      summary: 'நேரியல் சமன்பாடுகள் மற்றும் விவசாய இலாப சதவீதத்தைக் கணக்கிடுதல்.'
    },
    ml: {
      title: 'സമവാക്യങ്ങളും ലാഭ-നഷ്ട കണക്കുകളും (Linear Equations)',
      summary: 'ഒറ്റ ചരമുള്ള സമവാക്യങ്ങളും കർഷകരുടെ ലാഭനഷ്ട ശതമാനവും.'
    },
    mr: {
      title: 'रेषीय समीकरणे आणि नफा-तोटा: शेतीचा हिशोब',
      summary: 'एका चलातील रेषीय समीकरणे आणि खरेदी-विक्रीतून नफ्याची टक्केवारी काढणे.'
    },
    bn: {
      title: 'একঘাত সমীকরণ ও লাভ-ক্ষতির হিসাব: কৃষিজীবনের গণিত',
      summary: 'এক চলরাশি বিশিষ্ট সমীকরণ সমাধান এবং ক্রয়মূল্য, বিক্রয়মূল্য ও শতকরা লাভের পাঠ।'
    }
  }),

  // Class 8 - EVS
  buildCourse({
    id: 'lesson-evs-c8',
    classNumber: 8,
    subjectCode: 'evs',
    slug: 'renewable-energy-biogas-solar-c8',
    difficultyLevel: 'advanced',
    authorName: 'Ministry of New & Renewable Energy Rural Cell',
    estimatedMinutes: 20,
    en: {
      title: 'Renewable Energy: Biogas, Solar Pumps & Clean Power',
      summary: 'Understand anaerobic biogas digestion, rooftop solar photovoltaic panels, and micro-grid energy independence for rural schools.',
      storyTitle: '1. The Solar-Powered Village of Odanthurai',
      storyContent: 'The Class 8 science club visited the village panchayat building. On the roof, forty dark blue solar panels glimmered silently, powering the village drinking water pump, streetlights, and primary school computers. Nearby, a community biogas digester processed cattle waste into smokeless cooking gas. "We generate our own green power!" the sarpanch said proudly.',
      storyNarration: 'The village uses rooftop solar panels and cattle-dung biogas to generate clean, renewable power.',
      conceptTitle: '2. Science of Solar and Biogas Energy',
      conceptContent: '1. Solar Photovoltaic (PV) cells convert photons from sunlight directly into DC electricity using semiconductor silicon wafers; 2. Biogas Digester uses anaerobic methanogenic bacteria to decompose cow dung and farm waste in the absence of oxygen, producing clean methane gas (65%) for cooking and rich organic nitrogen slurry for crops.',
      conceptNarration: 'Solar panels turn sunlight into electricity. Biogas digesters turn cattle dung into cooking gas and slurry fertilizer.',
      illustratedSvg: 'solar-energy',
      activityTitle: '3. Clean Tech Input-Output Matcher',
      activityInstructions: 'Match each renewable technology with its raw input and clean energy output!',
      activityType: 'matching',
      activityData: [
        { id: 'p1', question: 'Solar PV Panels ☀️', answer: 'Sunlight photons -> Clean electricity for water pump' },
        { id: 'p2', question: 'Biogas Digester 🐄', answer: 'Cattle dung slurry -> Methane gas (cooking) + Bio-fertilizer' },
        { id: 'p3', question: 'Wind Turbine on Village Ridge 💨', answer: 'Wind kinetic energy -> Mechanical generator electricity' },
        { id: 'p4', question: 'Solar Water Heater 🚿', answer: 'Solar thermal rays -> Hot water for community hostel' }
      ],
      quizTitle: '4. Renewable Energy Quiz',
      questions: [
        {
          text: 'What clean fuel gas is primarily produced by anaerobic bacteria inside a village biogas plant?',
          options: [
            { text: 'Methane (CH₄)', isCorrect: true },
            { text: 'Chlorine', isCorrect: false },
            { text: 'Carbon monoxide', isCorrect: false }
          ],
          hint: 'It burns with a clean, smokeless blue flame.',
          explanation: 'Biogas consists of about 55–70% methane gas, which burns cleanly for cooking without indoor smoke.'
        },
        {
          text: 'Why are solar water pumps superior to diesel water pumps for small rural farmers?',
          options: [
            { text: 'They use free sunlight, produce zero carbon smoke, and require minimal recurring fuel costs', isCorrect: true },
            { text: 'They only operate at midnight', isCorrect: false }
          ],
          hint: 'No expensive diesel cans needed.',
          explanation: 'Solar pumps eliminate costly fossil fuel purchases and provide reliable daytime irrigation.'
        }
      ]
    },
    hi: {
      title: 'नवीकरणीय ऊर्जा: बायो-गैस, सौर पम्प और हरित भविष्य',
      summary: 'गोबर गैस प्लांट की वैज्ञानिक प्रक्रिया, सोलर पैनल और ग्रामीण ऊर्जा आत्मनिर्भरता।'
    },
    kn: {
      title: 'ನವೀಕರಿಸಬಹುದಾದ ಇಂಧನ: ಜೈವಿಕ ಅನಿಲ, ಸೌರ ಪಂಪ್ ಮತ್ತು ಶುದ್ಧ ಶಕ್ತಿ',
      summary: 'ಬಯೋಗ್ಯಾಸ್ ಸ್ಥಾವರ, ಸೌರ ಫಲಕಗಳ ಕಾರ್ಯವಿಧಾನ ಮತ್ತು ಹಳ್ಳಿಯ ಸ್ವಾವಲಂಬಿ ವಿದ್ಯುತ್ ಶಕ್ತಿ.'
    },
    te: {
      title: 'పునరుత్పాదక ఇంధనం: బయోగ్యాస్ మరియు సౌర శక్తి',
      summary: 'గోబర్ గ్యాస్ ప్లాంట్ పనితీరు, సోలార్ పంపులు మరియు స్వయం సమృద్ధి గ్రామీణ ఇంధనం.'
    },
    ta: {
      title: 'புதுப்பிக்கத்தக்க ஆற்றல்: உயிரி எரிவாயு மற்றும் சூரிய ஒளி சக்தி',
      summary: 'சாண எரிவாயு ஆலை, சூரிய மின்தகடுகள் மற்றும் தூய பசுமை ஆற்றல்.'
    },
    ml: {
      title: 'പുനരുപയോഗ ഊർജ്ജം: ബയോഗ്യാസും സൗരോർജ്ജവും',
      summary: 'ബയോഗ്യാസ് പ്ലാന്റിന്റെ ശാസ്ത്രവും സൗരോർജ്ജ പമ്പുകളുടെ പ്രാധാന്യവും.'
    },
    mr: {
      title: 'अपारंपरिक ऊर्जा: बायोगॅस, सौर पंप आणि हरित ऊर्जा',
      summary: 'गोबर गॅस प्रकल्प, सौर ऊर्जेची निर्मिती आणि ग्रामीण भागातील ऊर्जा स्वयंपूर्णता.'
    },
    bn: {
      title: 'পুনর্নবীকরণযোগ্য শক্তি: বায়োগ্যাস, সৌর পাম্প ও পরিচ্ছন্ন শক্তি',
      summary: 'গোবর গ্যাস প্লান্টের বিজ্ঞান, সোলার প্যানেল ও স্বনির্ভর গ্রামীণ বিদ্যুতায়ন।'
    }
  }),

  // Class 8 - English Learning
  buildCourse({
    id: 'lesson-eng-c8',
    classNumber: 8,
    subjectCode: 'eng',
    slug: 'formal-letter-writing-debates-c8',
    difficultyLevel: 'advanced',
    authorName: 'Board of Secondary Education English Cell',
    estimatedMinutes: 20,
    en: {
      title: 'Formal Letter Writing, Public Debates & Critical Essays',
      summary: 'Draft formal applications to public authorities, structure reasoned arguments for classroom debates, and write analytical essays.',
      storyTitle: '1. The Petition for a Village Library',
      storyContent: 'The Class 8 student council drafted an official petition to the Taluk Panchayat Executive Officer: "Subject: Request for establishing a community solar digital library at Govt High School." The letter contained clear headings, polite formal phrasing, justification, and student signatures. Two weeks later, official sanction arrived!',
      storyNarration: 'Students drafted a formal petition requesting a digital library. Polite, reasoned letters get action.',
      conceptTitle: '2. Formal Letters vs Informal Letters',
      conceptContent: 'A Formal Letter is written to officials, editors, or employers. It must be concise, objective, and follow standard protocol: 1. Sender address and Date; 2. Designation and Address of Recipient (To: The Taluk Officer...); 3. Clear Subject Line; 4. Formal Salutation ("Respected Sir/Madam,"); 5. Structured Body; 6. Courteous Subscription ("Yours faithfully / sincerely").',
      conceptNarration: 'Formal letters require an official address, concise subject line, structured body, and formal closing.',
      illustratedSvg: 'hero-kids',
      activityTitle: '3. Formal Application Sequencer',
      activityInstructions: 'Arrange the components of an official formal letter in exact protocol order!',
      activityType: 'sorting',
      activityData: [
        { id: 'f1', step: '1. Sender Address & Date at the top' },
        { id: 'f2', step: '2. Official Designation & Office Address of Recipient' },
        { id: 'f3', step: '3. Concise Subject Line ("Subject: Request for...")' },
        { id: 'f4', step: '4. Formal Body & Closing ("Yours faithfully, Student Council")' }
      ],
      quizTitle: '4. Formal Writing Quiz',
      questions: [
        {
          text: 'Which closing sign-off is standard and appropriate when writing a formal application to a government officer or school principal?',
          options: [
            { text: 'Yours faithfully / Yours obediently', isCorrect: true },
            { text: 'Lots of love and kisses', isCorrect: false },
            { text: 'See you tomorrow friend', isCorrect: false }
          ],
          hint: 'It reflects professional respect and courtesy.',
          explanation: '"Yours faithfully" or "Yours sincerely" is the universally accepted formal closing.'
        },
        {
          text: 'What is the purpose of the "Subject:" line in an official formal letter?',
          options: [
            { text: 'To state the exact purpose of the letter in one concise line so the officer understands immediately', isCorrect: true },
            { text: 'To list favorite cricket players', isCorrect: false }
          ],
          hint: 'It allows busy officers to grasp the core issue at a single glance.',
          explanation: 'The Subject line summarizes the core objective of the communication clearly.'
        }
      ]
    },
    hi: {
      title: 'औपचारिक पत्र लेखन, वाद-विवाद और निबंध कला',
      summary: 'अधिकारियों को प्रार्थना पत्र लिखना, तार्किक वाद-विवाद कौशल और गंभीर विषयों पर निबंध रचना।'
    },
    kn: {
      title: 'ಅಧಿಕೃತ ಪತ್ರ ಲೇಖನ, ಚರ್ಚಾಸ್ಪರ್ಧೆ ಮತ್ತು ಪ್ರಬಂಧ ರಚನೆ',
      summary: 'ಅಧಿಕಾರಿಗಳಿಗೆ ಮನವಿ ಪತ್ರ ಬರೆಯುವ ರೀತಿ, ತಾರ್ಕಿಕ ವಾದ ಮಂಡನೆ ಮತ್ತು ಪ್ರಬಂಧ ಲೇಖನ ಕಲೆ.'
    },
    te: {
      title: 'అధికారిక లేఖా రచన (Formal Letters) మరియు వ్యాసాలు',
      summary: 'అధికారులకు దరఖాస్తులు రాయడం, చర్చా వేదికల్లో మాట్లాడటం మరియు వ్యాస రచన.'
    },
    ta: {
      title: 'விண்ணப்பக் கடிதம், விவாதம் மற்றும் கட்டுரை வரைதல்',
      summary: 'அலுவலகக் கடிதம் எழுதும் முறை மற்றும் தர்க்கரீதியான விவாதத் திறன்கள்.'
    },
    ml: {
      title: 'ഔദ്യോഗിക കത്തെഴുത്തും ഉപന്യാസ രചനയും',
      summary: 'അധികാരികൾക്ക് അപേക്ഷ നൽകുന്ന രീതിയും ഉപന്യാസ രചനാ പാടവവും.'
    },
    mr: {
      title: 'अधिकृत पत्रलेखन, वादविवाद आणि निबंध लेखन कौशल्ये',
      summary: 'शासकीय अधिकाऱ्यांना अर्ज लिहिणे, प्रभावी युक्तिवाद आणि विचारप्रवर्तक निबंध.'
    },
    bn: {
      title: 'আনুষ্ঠানিক পত্র লিখন, বিতর্ক ও প্রবন্ধ রচনা',
      summary: 'প্রশাসনিক আধিকারিকদের আবেদনপত্র লেখার নিয়ম, বিতর্কের যুক্তি ও প্রবন্ধ চর্চা।'
    }
  }),

  // Class 8 - Regional Language
  buildCourse({
    id: 'lesson-lang-c8',
    classNumber: 8,
    subjectCode: 'lang',
    slug: 'modern-literature-national-poets-c8',
    difficultyLevel: 'advanced',
    authorName: 'National Academy of Letters (Sahitya Akademi) Wing',
    estimatedMinutes: 20,
    en: {
      title: 'Modern Regional Literature & Inspiring National Poets',
      summary: 'Analyze works of visionary Indian writers and poets (Kuvempu, Premchand, Tagore, Subramania Bharati) championing universal humanism.',
      storyTitle: '1. The Universal Man (Vishwa Manava)',
      storyContent: 'The language teacher shared Rashtrakavi Kuvempu’s timeless message: "Every child is born as a Universal Human (Vishwa Manava), but as we grow up, society divides us into castes, creeds, and boundaries. True education must break all barriers to return us to being Universal Citizens!" The students stood up and took the pledge.',
      storyNarration: 'National poets like Kuvempu, Premchand, and Tagore taught universal brotherhood and compassion.',
      conceptTitle: '2. Universal Humanism in Indian Literature',
      conceptContent: 'Modern Indian regional literature blends patriotic awakening with global humanism. Writers like Munshi Premchand exposed rural poverty and empathy through realism; Rabindranath Tagore sang of freedom of the mind without narrow domestic walls; Subramania Bharati championed women’s liberation and fearlessness.',
      conceptNarration: 'Great Indian writers used their mother tongue to awaken the nation and spread equality and freedom.',
      illustratedSvg: 'hero-kids',
      activityTitle: '3. Literary Pioneer Matcher',
      activityInstructions: 'Match each visionary Indian writer with their core humanitarian contribution!',
      activityType: 'matching',
      activityData: [
        { id: 'p1', question: 'Kuvempu (Karnataka Rashtrakavi)', answer: 'The philosophy of "Vishwa Manava" (The Universal Human)' },
        { id: 'p2', question: 'Munshi Premchand (Hindi Realist Master)', answer: 'Classic rural empathy tales ("Godan", "Idgah")' },
        { id: 'p3', question: 'Rabindranath Tagore (Nobel Laureate)', answer: '"Where the mind is without fear" & Gitanjali' },
        { id: 'p4', question: 'Subramania Bharati (Tamil Visionary Poet)', answer: 'Fierce verses on women empowerment & freedom' }
      ],
      quizTitle: '4. National Literature Quiz',
      questions: [
        {
          text: 'What does the concept of "Vishwa Manava" (Universal Human) propounded by Kuvempu emphasize?',
          options: [
            { text: 'Rising above caste, creed, religion, and narrow borders to embrace all humanity', isCorrect: true },
            { text: 'Living only inside one village', isCorrect: false },
            { text: 'Avoiding education', isCorrect: false }
          ],
          hint: 'It views the entire world as one loving human family.',
          explanation: 'Kuvempu envisioned that education must free children from narrow identities into universal humanist consciousness.'
        },
        {
          text: 'Which acclaimed realist author wrote poignant stories of Indian rural peasantry like "Idgah" and "Godan"?',
          options: [
            { text: 'Munshi Premchand', isCorrect: true },
            { text: 'A bank manager', isCorrect: false }
          ],
          hint: 'He is revered as Upanyas Samrat.',
          explanation: 'Munshi Premchand captured the soul, compassion, and struggles of Indian rural society with unmatched realism.'
        }
      ]
    },
    hi: {
      title: 'आधुनिक साहित्य और राष्ट्रकवि: मुंशी प्रेमचंद और विश्व मानवता',
      summary: 'प्रेमचंद, रवींद्रनाथ टैगोर और मैथिलीशरण गुप्त की रचनाओं से मानवीय मूल्यों और सामाजिक चेतना का विकास।'
    },
    kn: {
      title: 'ಆಧುನಿಕ ಸಾಹಿತ್ಯ ಮತ್ತು ವಿಶ್ವಮಾನವ ಸಂದೇಶ: ಕುವೆಂಪು ಹಾಗೂ ನವೋದಯ',
      summary: 'ರಾಷ್ಟ್ರಕವಿ ಕುವೆಂಪು ಅವರ "ವಿಶ್ವಮಾನವ ಗೀತೆ", ಬೇಂದ್ರೆ, ಕಾರಂತರ ಸಾಹಿತ್ಯ ಮತ್ತು ವೈಚಾರಿಕ ಪ್ರಜ್ಞೆ.'
    },
    te: {
      title: 'ఆధునిక సాహిత్యం మరియు జాతీయ కవులు: గురజాడ మరియు శ్రీశ్రీ',
      summary: 'దేశభక్తి, సామాజిక సంస్కరణలు మరియు ఆధునిక తెలుగు కవితా వైభవం.'
    },
    ta: {
      title: 'நவீன இலக்கியமும் பாரதியாரின் புரட்சிப் பாடல்களும்',
      summary: 'சுப்பிரமணிய பாரதியார், பாரதிதாசன் கவிதைகளில் பெண் விடுதலையும் தேசிய எழுச்சியும்.'
    },
    ml: {
      title: 'ആധുനിക സാഹിത്യവും ആശാൻ, വള്ളത്തോൾ കവിതകളും',
      summary: 'സാമൂഹിക നവോത്ഥാനവും മാനവികതാ മൂല്യങ്ങളും ഉയർത്തിപ്പിടിച്ച കവികൾ.'
    },
    mr: {
      title: 'आधुनिक मराठी साहित्य आणि राष्ट्रसंत: कुसुमाग्रज व साने गुरुजी',
      summary: 'स्वातंत्र्यप्रेरणा, मानवतावादी विचार आणि उत्कृष्ट मराठी गद्य-पद्य अभिवाचन.'
    },
    bn: {
      title: 'আধুনিক বাংলা সাহিত্য: রবীন্দ্রনাথ, নজরুল ও বিশ্বমানবতার বার্তা',
      summary: 'গীতাঞ্জলির অমর বাণী, বিদ্রোহের সুর ও মুক্তচিন্তার সাহিত্যধারা পাঠ।'
    }
  }),

  // Class 8 - Social Studies
  buildCourse({
    id: 'lesson-soc-c8',
    classNumber: 8,
    subjectCode: 'soc',
    slug: 'indian-constitution-rights-duties-c8',
    difficultyLevel: 'advanced',
    authorName: 'Dr. B. R. Ambedkar Constitutional Heritage Cell',
    estimatedMinutes: 20,
    en: {
      title: 'The Constitution of India: Preamble, Rights & Civic Duties',
      summary: 'Master the supreme law of the land, drafted under Dr. B. R. Ambedkar, guaranteeing Justice, Liberty, Equality, and Fundamental Duties.',
      storyTitle: '1. Mock Youth Parliament in the Village Hall',
      storyContent: 'The village community hall became the Parliament of India for an afternoon. Class 8 students held miniature copies of the Constitution. Student President Pooja read the Preamble: "WE, THE PEOPLE OF INDIA...". A lively debate took place on Right to Education and protecting community water tanks. "The Constitution protects the dignity of every citizen," the headmaster said.',
      storyNarration: 'Students held a mock youth parliament, reciting the Preamble and discussing Fundamental Rights.',
      conceptTitle: '2. The Preamble and Fundamental Rights',
      conceptContent: 'The Constitution of India, drafted under the chairmanship of Dr. B. R. Ambedkar, is the supreme legal framework: 1. Preamble establishes India as a Sovereign, Socialist, Secular, Democratic Republic guaranteeing Justice, Liberty, Equality, and Fraternity; 2. Six Fundamental Rights (Right to Equality, Freedom, Against Exploitation, Freedom of Religion, Cultural & Educational Rights, Constitutional Remedies); 3. Fundamental Duties (Protect environment, honor national flag, promote harmony).',
      conceptNarration: 'The Constitution guarantees Fundamental Rights to all citizens and urges everyone to perform Fundamental Duties.',
      illustratedSvg: 'indian-constitution',
      activityTitle: '3. Fundamental Rights Defender Matcher',
      activityInstructions: 'Match each real-life scenario with the Fundamental Right that protects it!',
      activityType: 'matching',
      activityData: [
        { id: 'p1', question: 'Free and compulsory schooling for all children aged 6 to 14', answer: 'Right to Education (Article 21A)' },
        { id: 'p2', question: 'No discrimination based on religion, race, or caste at public wells', answer: 'Right to Equality (Article 15)' },
        { id: 'p3', question: 'Banning child labor in hazardous factories and brick kilns', answer: 'Right against Exploitation (Article 24)' },
        { id: 'p4', question: 'Duty to protect lakes, forests, and show compassion for animals', answer: 'Fundamental Duty (Article 51A-g)' }
      ],
      quizTitle: '4. Constitution & Democracy Quiz',
      questions: [
        {
          text: 'Who was the revered Chairman of the Drafting Committee of the Indian Constitution?',
          options: [
            { text: 'Dr. B. R. Ambedkar', isCorrect: true },
            { text: 'Lord Mountbatten', isCorrect: false },
            { text: 'A colonial governor', isCorrect: false }
          ],
          hint: 'He is hailed as the Chief Architect of the Indian Constitution.',
          explanation: 'Dr. Bhimrao Ramji Ambedkar chaired the committee that drafted India’s comprehensive democratic constitution.'
        },
        {
          text: 'Which words begin the sacred Preamble of the Constitution of India?',
          options: [
            { text: '"WE, THE PEOPLE OF INDIA..."', isCorrect: true },
            { text: '"By order of the kings..."', isCorrect: false }
          ],
          hint: 'It signifies that democratic power originates from the citizens themselves.',
          explanation: '"WE, THE PEOPLE OF INDIA" emphasizes that ultimate sovereign authority resides in the people of India.'
        }
      ]
    },
    hi: {
      title: 'भारत का संविधान: प्रस्तावना, मौलिक अधिकार और कर्तव्य',
      summary: 'डॉ. बी. आर. अम्बेडकर की दूरदृष्टि, न्याय, स्वतंत्रता, समानता और नागरिकों के संवैधानिक कर्तव्य।'
    },
    kn: {
      title: 'ಭಾರತದ ಸಂವಿಧಾನ: ಪ್ರಸ್ತಾವನೆ, ಮೂಲಭೂತ ಹಕ್ಕುಗಳು ಮತ್ತು ಕರ್ತವ್ಯಗಳು',
      summary: 'ಡಾ. ಬಿ. ಆರ್. ಅಂಬೇಡ್ಕರ್ ಅವರ ನಾಯಕತ್ವದಲ್ಲಿ ರಚನೆಯಾದ ಸಂವಿಧಾನ, ಪೀಠಿಕೆ ಮತ್ತು ನಾಗರಿಕ ಜವಾಬ್ದಾರಿಗಳು.'
    },
    te: {
      title: 'భారత రాజ్యాంగం: పీఠిక, ప్రాథమిక హక్కులు మరియు విధులు',
      summary: 'డా. బి. ఆర్. అంబేద్కర్ నేతృత్వంలో రాజ్యాంగ రచన, సమానత్వం మరియు పౌర విధులు.'
    },
    ta: {
      title: 'இந்திய அரசியலமைப்பு: முகப்புரை, அடிப்படை உரிமைகள் மற்றும் கடமைகள்',
      summary: 'டாக்டர் பி. ஆர். அம்பேத்கர் வகுத்த சமத்துவச் சட்டம் மற்றும் குடிமக்கள் கடமைகள்.'
    },
    ml: {
      title: 'ഇന്ത്യൻ ഭരണഘടന: ആമുഖം, മൗലികാവകാശങ്ങളും കടമകളും',
      summary: 'ഡോ. ബി. ആർ. അംബേദ്കറും ഭരണഘടനാ നിർമ്മാണവും പൗരന്മാരുടെ അവകാശങ്ങളും.'
    },
    mr: {
      title: 'भारताचे संविधान: उद्देशिका, मूलभूत हक्क आणि कर्तव्ये',
      summary: 'डॉ. बाबासाहेब आंबेडकरांचे विचार, संविधानाची सरनामा आणि लोकशाही मूल्यांचे रक्षण.'
    },
    bn: {
      title: 'ভারতের সংবিধান: প্রস্তাবনা, মৌলিক অধিকার ও নাগরিক কর্তব্য',
      summary: 'ড. বি. আর. আম্বেদকরের নেতৃত্বে রচিত সংবিধান, সাম্য, স্বাধীনতা ও নাগরিকের পবিত্র কর্তব্যের পাঠ।'
    }
  })
];
