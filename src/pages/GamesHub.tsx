import React, { useState } from 'react';
import { LanguageCode } from '../types';
import { t } from '../i18n';
import confetti from 'canvas-confetti';
import { 
  Gamepad2, 
  Sparkles, 
  Star, 
  RotateCcw, 
  CheckCircle2, 
  ArrowRight,
  HelpCircle,
  Trophy,
  Trees,
  Shapes,
  Calculator,
  Languages
} from 'lucide-react';

interface Props {
  currentLanguage: LanguageCode;
  onAwardStars: (amount: number) => void;
}

export const GamesHub: React.FC<Props> = ({ currentLanguage, onAwardStars }) => {
  const [activeGame, setActiveGame] = useState<'safari' | 'shapes' | 'words' | 'eco'>('safari');

  // GAME 1: Number Safari State
  const [safariCount, setSafariCount] = useState<number>(0);
  const [safariTarget, setSafariTarget] = useState<number>(5);
  const [safariAnimal, setSafariAnimal] = useState<{ emoji: string; name: string }>({ emoji: '🦚', name: 'Peacock' });
  const [safariSuccess, setSafariSuccess] = useState(false);

  // GAME 2: Shape Matcher State
  const [shapeScore, setShapeScore] = useState<number>(0);
  const [shapeMatched, setShapeMatched] = useState<Record<string, boolean>>({});

  // GAME 3: Word Matcher State
  const [wordScore, setWordScore] = useState<number>(0);
  const [selectedWord, setSelectedWord] = useState<string | null>(null);
  const [completedWordPairs, setCompletedWordPairs] = useState<Set<string>>(new Set());

  // GAME 4: Eco Warrior State
  const [ecoItems, setEcoItems] = useState([
    { id: '1', name: 'Banana Peel', emoji: '🍌', type: 'compost' },
    { id: '2', name: 'Old Notebook Paper', emoji: '📄', type: 'recycle' },
    { id: '3', name: 'Fallen Neem Leaves', emoji: '🍂', type: 'compost' },
    { id: '4', name: 'Broken Plastic Pen', emoji: '🖊️', type: 'waste' }
  ]);
  const [ecoScore, setEcoScore] = useState<number>(0);
  const [ecoFeedback, setEcoFeedback] = useState<string | null>(null);

  // Reset Safari
  const newSafariRound = () => {
    const animals = [
      { emoji: '🦚', name: 'Peacock' },
      { emoji: '🐄', name: 'Cow' },
      { emoji: '🐘', name: 'Elephant' },
      { emoji: '🦜', name: 'Parrot' },
      { emoji: '🦌', name: 'Deer' }
    ];
    const chosen = animals[Math.floor(Math.random() * animals.length)];
    const target = Math.floor(Math.random() * 6) + 3; // 3 to 8
    setSafariAnimal(chosen);
    setSafariTarget(target);
    setSafariCount(0);
    setSafariSuccess(false);
  };

  const handleSafariIncrement = () => {
    if (safariCount + 1 === safariTarget) {
      setSafariCount(safariTarget);
      setSafariSuccess(true);
      onAwardStars(10);
      try {
        confetti({ particleCount: 50, spread: 60, origin: { y: 0.7 } });
      } catch {}
    } else if (safariCount + 1 < safariTarget) {
      setSafariCount((prev) => prev + 1);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#fef5e7] text-[#d99726] text-xs font-bold">
          <Gamepad2 className="w-3.5 h-3.5" />
          <span>Interactive Play-Based Learning</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-[#20332E]">
          {t('games', currentLanguage)}
        </h1>
        <p className="text-xs sm:text-sm text-[#577067] max-w-2xl">
          Strengthen your foundational counting, shape reasoning, multilingual vocabulary, and eco-awareness with positive stars.
        </p>
      </div>

      {/* Game Selector Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <button
          onClick={() => setActiveGame('safari')}
          className={`p-4 rounded-2xl border text-left transition flex items-center gap-3 ${
            activeGame === 'safari'
              ? 'bg-[#176B55] text-white border-[#176B55] shadow-md'
              : 'bg-white text-[#20332E] border-gray-200 hover:bg-gray-50'
          }`}
        >
          <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-xl">
            🦁
          </div>
          <div>
            <h3 className="font-bold text-xs sm:text-sm">Number Safari</h3>
            <span className="text-[10px] opacity-80 block">Counting & Math</span>
          </div>
        </button>

        <button
          onClick={() => setActiveGame('shapes')}
          className={`p-4 rounded-2xl border text-left transition flex items-center gap-3 ${
            activeGame === 'shapes'
              ? 'bg-[#176B55] text-white border-[#176B55] shadow-md'
              : 'bg-white text-[#20332E] border-gray-200 hover:bg-gray-50'
          }`}
        >
          <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-xl">
            🔺
          </div>
          <div>
            <h3 className="font-bold text-xs sm:text-sm">Village Shapes</h3>
            <span className="text-[10px] opacity-80 block">Visual Geometry</span>
          </div>
        </button>

        <button
          onClick={() => setActiveGame('words')}
          className={`p-4 rounded-2xl border text-left transition flex items-center gap-3 ${
            activeGame === 'words'
              ? 'bg-[#176B55] text-white border-[#176B55] shadow-md'
              : 'bg-white text-[#20332E] border-gray-200 hover:bg-gray-50'
          }`}
        >
          <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-xl">
            🗣️
          </div>
          <div>
            <h3 className="font-bold text-xs sm:text-sm">Word Matcher</h3>
            <span className="text-[10px] opacity-80 block">Multilingual Vocab</span>
          </div>
        </button>

        <button
          onClick={() => setActiveGame('eco')}
          className={`p-4 rounded-2xl border text-left transition flex items-center gap-3 ${
            activeGame === 'eco'
              ? 'bg-[#176B55] text-white border-[#176B55] shadow-md'
              : 'bg-white text-[#20332E] border-gray-200 hover:bg-gray-50'
          }`}
        >
          <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-xl">
            🌱
          </div>
          <div>
            <h3 className="font-bold text-xs sm:text-sm">Eco Warrior</h3>
            <span className="text-[10px] opacity-80 block">Clean Village Sorting</span>
          </div>
        </button>
      </div>

      {/* GAME 1: NUMBER SAFARI */}
      {activeGame === 'safari' && (
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#c2e5d3] shadow-md space-y-6">
          <div className="flex items-center justify-between border-b pb-4 border-gray-100">
            <div>
              <h3 className="text-xl font-black text-[#176B55] flex items-center gap-2">
                <span>Number Safari: Count the {safariAnimal.name}s!</span>
              </h3>
              <p className="text-xs text-[#577067] mt-0.5">
                Tap the button to gather exactly <strong>{safariTarget} {safariAnimal.name}s</strong> into the sanctuary!
              </p>
            </div>
            <button
              onClick={newSafariRound}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-gray-200 text-xs font-semibold text-gray-600 hover:bg-gray-50"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>New Target</span>
            </button>
          </div>

          <div className="p-8 rounded-2xl bg-[#E6F4ED]/50 border border-[#c2e5d3] text-center space-y-4">
            <div className="text-xs font-bold text-[#176B55] uppercase tracking-wider">
              Target: {safariTarget} | Gathered: {safariCount}
            </div>

            {/* Display animals */}
            <div className="flex flex-wrap items-center justify-center gap-3 min-h-[90px] py-2">
              {Array.from({ length: safariCount }).map((_, i) => (
                <span
                  key={i}
                  className="text-4xl sm:text-5xl animate-in zoom-in-50 transition transform hover:scale-125"
                >
                  {safariAnimal.emoji}
                </span>
              ))}
              {safariCount === 0 && (
                <span className="text-xs text-gray-400 italic">Tap "Add 1 {safariAnimal.name}" to start counting!</span>
              )}
            </div>

            {safariSuccess ? (
              <div className="p-4 rounded-xl bg-emerald-100 border border-emerald-300 text-emerald-900 font-bold text-sm space-y-1">
                <p>🎉 Wonderful! You counted exactly {safariTarget} {safariAnimal.name}s!</p>
                <p className="text-xs text-emerald-800 font-medium">+10 Stars added to your profile.</p>
                <button
                  onClick={newSafariRound}
                  className="mt-2 px-4 py-2 rounded-xl bg-[#176B55] text-white text-xs font-bold"
                >
                  Next Safari Challenge →
                </button>
              </div>
            ) : (
              <div className="flex justify-center gap-3 pt-2">
                <button
                  onClick={handleSafariIncrement}
                  className="px-6 py-3 rounded-2xl bg-[#176B55] hover:bg-[#0f4839] text-white font-black text-sm shadow-md transition transform hover:scale-105"
                >
                  + Add 1 {safariAnimal.name} ({safariCount}/{safariTarget})
                </button>
                <button
                  onClick={() => setSafariCount(0)}
                  className="px-4 py-3 rounded-2xl border border-gray-200 text-xs font-bold text-gray-600 hover:bg-gray-100"
                >
                  Reset Count
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* GAME 2: VILLAGE SHAPES */}
      {activeGame === 'shapes' && (
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#c2e5d3] shadow-md space-y-6">
          <div className="border-b pb-4 border-gray-100">
            <h3 className="text-xl font-black text-[#176B55]">
              Village Shape Explorer
            </h3>
            <p className="text-xs text-[#577067] mt-0.5">
              Identify real-life geometric shapes found all around our village!
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { id: 's1', item: 'Village Temple Tower Roof', shape: 'Triangle 🔺', desc: '3 sides and 3 angles' },
              { id: 's2', item: 'Panchayat Well Ring', shape: 'Circle ⭕', desc: 'No corners, round curved boundary' },
              { id: 's3', item: 'School Classroom Blackboard', shape: 'Rectangle ▭', desc: 'Opposite sides equal with 4 right angles' },
              { id: 's4', item: 'Grain Storage Silo', shape: 'Cylinder 🥫', desc: 'Circular top and curved body' }
            ].map((s) => {
              const matched = shapeMatched[s.id];
              return (
                <div key={s.id} className="p-5 rounded-2xl bg-[#FBFAF6] border border-gray-200 space-y-2">
                  <span className="text-[10px] font-bold text-[#577067] uppercase">Object in Village:</span>
                  <h4 className="font-extrabold text-sm text-[#20332E]">{s.item}</h4>
                  <p className="text-xs text-[#577067]">{s.desc}</p>
                  <button
                    onClick={() => {
                      setShapeMatched((prev) => ({ ...prev, [s.id]: true }));
                      onAwardStars(5);
                    }}
                    className={`w-full mt-2 py-2 rounded-xl text-xs font-bold transition ${
                      matched
                        ? 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                        : 'bg-[#176B55] text-white hover:bg-[#0f4839]'
                    }`}
                  >
                    {matched ? `Identified: ${s.shape} ✓` : 'Click to Identify Shape'}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* GAME 3: WORD MATCHER */}
      {activeGame === 'words' && (
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#c2e5d3] shadow-md space-y-6">
          <div className="border-b pb-4 border-gray-100">
            <h3 className="text-xl font-black text-[#176B55]">
              Multilingual Vocabulary Matcher
            </h3>
            <p className="text-xs text-[#577067] mt-0.5">
              Learn words across regional languages (English, Kannada, Hindi).
            </p>
          </div>

          <div className="space-y-3">
            {[
              { id: 'w1', en: 'Water', hi: 'जल / पानी', kn: 'ನೀರು (Neeru)', meaning: 'Life-giving liquid' },
              { id: 'w2', en: 'Tree', hi: 'पेड़ (Ped)', kn: 'ಮರ (Mara)', meaning: 'Green oxygen giver' },
              { id: 'w3', en: 'Book', hi: 'किताब (Kitaab)', kn: 'ಪುಸ್ತಕ (Pustaka)', meaning: 'Source of knowledge' },
              { id: 'w4', en: 'Sun', hi: 'सूरज (Sooraj)', kn: 'ಸೂರ್ಯ (Soorya)', meaning: 'Warm shining star' }
            ].map((item) => {
              const completed = completedWordPairs.has(item.id);
              return (
                <div
                  key={item.id}
                  className="p-4 rounded-2xl bg-[#FBFAF6] border border-gray-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
                >
                  <div>
                    <span className="font-extrabold text-sm text-[#20332E]">{item.en}</span>
                    <span className="text-[#577067] block text-[11px] mt-0.5">{item.meaning}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-lg bg-[#E6F4ED] text-[#176B55] font-bold">
                      {item.hi}
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-[#fef5e7] text-[#d99726] font-bold">
                      {item.kn}
                    </span>
                    <button
                      onClick={() => {
                        setCompletedWordPairs((prev) => new Set(prev).add(item.id));
                        onAwardStars(5);
                      }}
                      className={`px-3 py-1.5 rounded-lg font-bold transition ${
                        completed
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-[#176B55] text-white hover:bg-[#0f4839]'
                      }`}
                    >
                      {completed ? 'Learned ✓' : 'Practice Word'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* GAME 4: ECO WARRIOR */}
      {activeGame === 'eco' && (
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#c2e5d3] shadow-md space-y-6">
          <div className="border-b pb-4 border-gray-100">
            <h3 className="text-xl font-black text-[#176B55]">
              Eco Warrior: Keep Our Village Clean!
            </h3>
            <p className="text-xs text-[#577067] mt-0.5">
              Sort items into Organic Compost (Green), Paper Recycling (Blue), or Safe Disposal (Gray).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {ecoItems.map((item) => (
              <div key={item.id} className="p-4 rounded-2xl bg-[#FBFAF6] border border-gray-200 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{item.emoji}</span>
                  <div>
                    <h4 className="font-extrabold text-sm text-[#20332E]">{item.name}</h4>
                    <span className="text-[11px] text-[#577067]">Where does this belong?</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => {
                      if (item.type === 'compost') {
                        setEcoFeedback(`✅ Correct! ${item.name} is organic and enriches village soil as compost.`);
                        onAwardStars(5);
                      } else {
                        setEcoFeedback(`❌ Not quite! Think if ${item.name} decomposes naturally.`);
                      }
                    }}
                    className="py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-[11px] font-bold border border-emerald-200"
                  >
                    🌱 Compost
                  </button>
                  <button
                    onClick={() => {
                      if (item.type === 'recycle') {
                        setEcoFeedback(`✅ Correct! ${item.name} can be recycled into fresh paper.`);
                        onAwardStars(5);
                      } else {
                        setEcoFeedback(`❌ Try again! Can this be remade in a recycling plant?`);
                      }
                    }}
                    className="py-1.5 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-800 text-[11px] font-bold border border-blue-200"
                  >
                    ♻️ Recycle
                  </button>
                  <button
                    onClick={() => {
                      if (item.type === 'waste') {
                        setEcoFeedback(`✅ Correct! ${item.name} must be safely disposed of to keep farm soil healthy.`);
                        onAwardStars(5);
                      } else {
                        setEcoFeedback(`❌ Check if this item is natural or recyclable!`);
                      }
                    }}
                    className="py-1.5 rounded-lg bg-gray-50 hover:bg-gray-100 text-gray-800 text-[11px] font-bold border border-gray-200"
                  >
                    🗑️ Disposal
                  </button>
                </div>
              </div>
            ))}
          </div>

          {ecoFeedback && (
            <div className="p-3.5 rounded-xl bg-[#E6F4ED] border border-[#c2e5d3] text-xs font-bold text-[#176B55]">
              {ecoFeedback}
            </div>
          )}
        </div>
      )}

    </div>
  );
};
