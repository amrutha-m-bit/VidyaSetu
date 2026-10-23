import React, { useState } from 'react';
import { Volume2, VolumeX, Sparkles } from 'lucide-react';
import { speakText, stopSpeaking, t } from '../i18n';
import { LanguageCode } from '../types';

interface Props {
  text: string;
  lang: LanguageCode;
  label?: string;
  className?: string;
}

export const AudioNarrator: React.FC<Props> = ({ text, lang, label, className = '' }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleToggle = () => {
    if (isPlaying) {
      stopSpeaking();
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
      speakText(text, lang, () => {
        setIsPlaying(false);
      });
    }
  };

  return (
    <button
      onClick={handleToggle}
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border transition-all text-xs font-semibold ${
        isPlaying
          ? 'bg-[#176B55] text-white border-[#176B55] animate-pulse-soft shadow-sm'
          : 'bg-[#E6F4ED] hover:bg-[#c2e5d3] text-[#176B55] border-[#c2e5d3]'
      } ${className}`}
      title={isPlaying ? 'Stop listening' : 'Listen to audio explanation'}
    >
      {isPlaying ? (
        <>
          <VolumeX className="w-4 h-4 text-[#F2B84B]" />
          <span>{t('speaking', lang)}</span>
        </>
      ) : (
        <>
          <Volume2 className="w-4 h-4 text-[#176B55]" />
          <span>{label || t('listen_audio', lang)}</span>
        </>
      )}
    </button>
  );
};
