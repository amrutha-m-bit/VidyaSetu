import React, { useState } from 'react';
import { usePWAInstall } from '../hooks/usePWAInstall';
import { Download, Share2, X } from 'lucide-react';

export const PWAInstallButton: React.FC<{ variant?: 'nav' | 'hero' }> = ({ variant = 'nav' }) => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showIOSGuide, setShowIOSGuide] = useState(false);

  // If already installed, hide
  if (isInstalled) return null;

  const handleInstallClick = async () => {
    if (isInstallable) {
      await install();
    } else if (isIOS) {
      setShowIOSGuide(true);
    }
  };

  // If not installable and not iOS, render standard offline-ready notice or small icon
  if (!isInstallable && !isIOS) {
    return null;
  }

  return (
    <>
      <button
        onClick={handleInstallClick}
        aria-label="Install VidyaSetu App for Offline Learning"
        className={
          variant === 'hero'
            ? 'flex items-center gap-2 px-5 py-3 rounded-xl bg-[#F2B84B] hover:bg-[#d99726] text-[#20332E] font-semibold shadow-sm transition transform hover:-translate-y-0.5'
            : 'flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#E6F4ED] hover:bg-[#c2e5d3] text-[#176B55] text-xs font-semibold border border-[#c2e5d3] transition'
        }
      >
        <Download className="w-4 h-4 text-[#176B55]" />
        <span>Install App</span>
      </button>

      {showIOSGuide && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs">
          <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-2xl border border-gray-100 text-[#20332E]">
            <div className="flex items-center justify-between border-b pb-3 border-gray-100">
              <h3 className="text-base font-bold text-[#176B55] flex items-center gap-2">
                <Share2 className="w-4 h-4 text-[#F2B84B]" />
                Install on iPhone or iPad
              </h3>
              <button
                onClick={() => setShowIOSGuide(false)}
                className="p-1 text-gray-400 hover:text-gray-600 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="mt-4 space-y-3 text-sm text-[#577067]">
              <p className="flex items-start gap-2">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#E6F4ED] text-[#176B55] font-bold text-xs flex items-center justify-center">1</span>
                Tap the <strong className="text-[#20332E]">Share button</strong> (square with arrow) in the Safari toolbar.
              </p>
              <p className="flex items-start gap-2">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#E6F4ED] text-[#176B55] font-bold text-xs flex items-center justify-center">2</span>
                Scroll down and select <strong className="text-[#20332E]">Add to Home Screen</strong>.
              </p>
              <p className="flex items-start gap-2">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#E6F4ED] text-[#176B55] font-bold text-xs flex items-center justify-center">3</span>
                Tap <strong className="text-[#20332E]">Add</strong> in the top-right corner to learn offline anytime!
              </p>
            </div>
            <button
              onClick={() => setShowIOSGuide(false)}
              className="mt-5 w-full rounded-xl bg-[#176B55] py-2.5 text-sm font-semibold text-white hover:bg-[#0f4839] transition"
            >
              Got it
            </button>
          </div>
        </div>
      )}
    </>
  );
};
