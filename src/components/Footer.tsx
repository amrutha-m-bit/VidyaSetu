import React, { useState } from 'react';
import { LanguageCode } from '../types';
import { t } from '../i18n';
import { PrivacyPolicyModal } from './PrivacyPolicyModal';
import { Shield, Heart, Globe, WifiOff, FileText } from 'lucide-react';

interface Props {
  currentLanguage: LanguageCode;
  onNavigate: (tab: string) => void;
}

export const Footer: React.FC<Props> = ({ currentLanguage, onNavigate }) => {
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);

  return (
    <>
      <footer className="bg-[#176B55] text-white pt-14 pb-10 border-t border-[#0f4839]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-[#20876c]">
            
            {/* Brand column */}
            <div className="md:col-span-2 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white p-1.5 shadow-md flex items-center justify-center">
                  <img src="/icons/logo.svg" alt="VidyaSetu Logo" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h3 className="text-xl font-bold tracking-tight text-white">
                    {t('brand_name', currentLanguage)}
                  </h3>
                  <p className="text-xs text-[#E6F4ED] opacity-90">
                    {t('tagline', currentLanguage)}
                  </p>
                </div>
              </div>
              <p className="text-xs text-[#E6F4ED]/80 leading-relaxed max-w-md">
                Empowering government primary school children in Classes 1–8 with curriculum-aligned, interactive learning in Indian regional languages. Designed to thrive on low-cost devices and intermittent village connectivity.
              </p>
              <div className="flex items-center gap-3 text-xs text-[#F2B84B] font-semibold">
                <span className="flex items-center gap-1">
                  <WifiOff className="w-3.5 h-3.5" />
                  Full Offline PWA
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Globe className="w-3.5 h-3.5" />
                  8 Indian Languages
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Shield className="w-3.5 h-3.5" />
                  Child Privacy Safe
                </span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-[#F2B84B] mb-3">
                Learning Paths
              </h4>
              <ul className="space-y-2 text-xs text-[#E6F4ED]">
                <li>
                  <button onClick={() => onNavigate('student')} className="hover:text-white transition">
                    Class 1 to 8 Dashboard
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('library')} className="hover:text-white transition">
                    Lesson Library & Topics
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('games')} className="hover:text-white transition">
                    Educational Games
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('teacher')} className="hover:text-white transition">
                    Teacher Classroom Portal
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('admin')} className="hover:text-white transition">
                    Content Review Workflow
                  </button>
                </li>
              </ul>
            </div>

            {/* Governance & Privacy */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-[#F2B84B] mb-3">
                Trust & Standards
              </h4>
              <ul className="space-y-2 text-xs text-[#E6F4ED]">
                <li>
                  <button 
                    onClick={() => setPrivacyModalOpen(true)}
                    className="flex items-center gap-1.5 hover:text-white transition font-medium"
                  >
                    <FileText className="w-3.5 h-3.5 text-[#F2B84B]" />
                    Child Privacy & Protection Policy
                  </button>
                </li>
                <li className="text-[11px] text-[#E6F4ED]/70 leading-relaxed">
                  Aligned with state SCERT primary curriculum guidelines.
                </li>
                <li className="text-[11px] text-[#E6F4ED]/70 leading-relaxed">
                  Open source offline-first architecture with PostgreSQL Row Level Security.
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#E6F4ED]/70 gap-3">
            <p>© 2026 VidyaSetu Foundation. Dedicated to Rural Government Primary Education.</p>
            <div className="flex items-center gap-2">
              <span>Made with care for every village child</span>
              <Heart className="w-3.5 h-3.5 text-[#F2B84B] fill-[#F2B84B]" />
            </div>
          </div>
        </div>
      </footer>

      <PrivacyPolicyModal
        isOpen={privacyModalOpen}
        onClose={() => setPrivacyModalOpen(false)}
      />
    </>
  );
};
