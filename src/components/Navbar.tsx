import React, { useState } from 'react';
import { LanguageCode, UserRole } from '../types';
import { SUPPORTED_LANGUAGES, t } from '../i18n';
import { PWAInstallButton } from './PWAInstallButton';
import { 
  BookOpen, 
  Sparkles, 
  GraduationCap, 
  Gamepad2, 
  Users, 
  ShieldCheck, 
  Languages, 
  Menu, 
  X,
  ChevronDown,
  SunMedium
} from 'lucide-react';

interface Props {
  currentTab: string;
  onSelectTab: (tab: string) => void;
  currentLanguage: LanguageCode;
  onLanguageChange: (lang: LanguageCode) => void;
  currentUserRole: UserRole;
  onRoleChange: (role: UserRole) => void;
  starsCount: number;
}

export const Navbar: React.FC<Props> = ({
  currentTab,
  onSelectTab,
  currentLanguage,
  onLanguageChange,
  currentUserRole,
  onRoleChange,
  starsCount
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [roleDropdownOpen, setRoleDropdownOpen] = useState(false);

  const currentLangObj = SUPPORTED_LANGUAGES.find((l) => l.code === currentLanguage) || SUPPORTED_LANGUAGES[0];

  const handleNavClick = (tab: string) => {
    onSelectTab(tab);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FBFAF6]/95 backdrop-blur-md border-b border-[#e5e2d6] shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          
          {/* Logo & Brand Identity */}
          <div 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-11 h-11 rounded-xl bg-[#176B55] p-1.5 shadow-md flex items-center justify-center transition transform group-hover:scale-105">
              <img src="/icons/logo.svg" alt="VidyaSetu Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-extrabold tracking-tight text-[#176B55]">
                  {t('brand_name', currentLanguage)}
                </span>
                <span className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-bold tracking-wider uppercase rounded bg-[#F2B84B] text-[#20332E]">
                  Classes 1–8
                </span>
              </div>
              <p className="text-[11px] font-medium text-[#577067] tracking-tight hidden sm:block">
                {t('tagline', currentLanguage)}
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            <button
              onClick={() => handleNavClick('home')}
              className={`px-3 py-2 rounded-xl text-sm font-semibold transition ${
                currentTab === 'home'
                  ? 'bg-[#E6F4ED] text-[#176B55]'
                  : 'text-[#20332E] hover:bg-[#f1efe7]'
              }`}
            >
              Home
            </button>

            <button
              onClick={() => handleNavClick('student')}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-semibold transition ${
                currentTab === 'student'
                  ? 'bg-[#E6F4ED] text-[#176B55]'
                  : 'text-[#20332E] hover:bg-[#f1efe7]'
              }`}
            >
              <GraduationCap className="w-4 h-4 text-[#176B55]" />
              <span>{t('student_portal', currentLanguage)}</span>
            </button>

            <button
              onClick={() => handleNavClick('library')}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-semibold transition ${
                currentTab === 'library'
                  ? 'bg-[#E6F4ED] text-[#176B55]'
                  : 'text-[#20332E] hover:bg-[#f1efe7]'
              }`}
            >
              <BookOpen className="w-4 h-4 text-[#176B55]" />
              <span>{t('explore_lessons', currentLanguage)}</span>
            </button>

            <button
              onClick={() => handleNavClick('games')}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-semibold transition ${
                currentTab === 'games'
                  ? 'bg-[#E6F4ED] text-[#176B55]'
                  : 'text-[#20332E] hover:bg-[#f1efe7]'
              }`}
            >
              <Gamepad2 className="w-4 h-4 text-[#d99726]" />
              <span>{t('games', currentLanguage)}</span>
            </button>

            <button
              onClick={() => handleNavClick('teacher')}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-semibold transition ${
                currentTab === 'teacher'
                  ? 'bg-[#E6F4ED] text-[#176B55]'
                  : 'text-[#20332E] hover:bg-[#f1efe7]'
              }`}
            >
              <Users className="w-4 h-4 text-[#176B55]" />
              <span>{t('teacher_portal', currentLanguage)}</span>
            </button>

            <button
              onClick={() => handleNavClick('admin')}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-semibold transition ${
                currentTab === 'admin'
                  ? 'bg-[#E6F4ED] text-[#176B55]'
                  : 'text-[#20332E] hover:bg-[#f1efe7]'
              }`}
            >
              <ShieldCheck className="w-4 h-4 text-[#176B55]" />
              <span>{t('admin_portal', currentLanguage)}</span>
            </button>
          </nav>

          {/* Right Controls: Stars, Language Selector, Role Switcher, PWA Install */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Stars Counter */}
            <div 
              title="Stars earned across lessons & games"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#fef5e7] border border-[#f3d9a2] text-[#20332E] shadow-2xs"
            >
              <Sparkles className="w-4 h-4 text-[#F2B84B] fill-[#F2B84B]" />
              <span className="font-extrabold text-xs sm:text-sm text-[#a46e12]">{starsCount}</span>
            </div>

            {/* Language Selector Dropdown */}
            <div className="relative">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl border border-[#c2e5d3] bg-[#E6F4ED] hover:bg-[#d5eedf] text-[#176B55] text-xs font-bold transition"
                aria-label="Select Language"
              >
                <Languages className="w-4 h-4" />
                <span>{currentLangObj.nativeName}</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-70" />
              </button>

              {langDropdownOpen && (
                <div 
                  className="absolute right-0 mt-2 w-48 rounded-2xl bg-white shadow-xl border border-gray-100 py-2 z-50 animate-in fade-in slide-in-from-top-2"
                >
                  <div className="px-3 py-1.5 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                    Select Language / ಭಾಷೆ
                  </div>
                  {SUPPORTED_LANGUAGES.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        onLanguageChange(lang.code);
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3.5 py-2 text-xs flex items-center justify-between hover:bg-[#E6F4ED] transition ${
                        currentLanguage === lang.code
                          ? 'font-bold text-[#176B55] bg-[#E6F4ED]/60'
                          : 'text-[#20332E]'
                      }`}
                    >
                      <span className="font-medium">{lang.nativeName}</span>
                      <span className="text-[11px] text-gray-400 font-normal">{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Role Switcher (Student / Teacher / Admin) */}
            <div className="relative hidden md:block">
              <button
                onClick={() => setRoleDropdownOpen(!roleDropdownOpen)}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 text-[#20332E] text-xs font-semibold shadow-2xs transition"
              >
                <span className="text-gray-500 capitalize">{currentUserRole}:</span>
                <span className="text-[#176B55] font-bold">
                  {currentUserRole === 'student' ? 'Student' : currentUserRole === 'teacher' ? 'Teacher' : 'Reviewer'}
                </span>
                <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
              </button>

              {roleDropdownOpen && (
                <div className="absolute right-0 mt-2 w-44 rounded-2xl bg-white shadow-xl border border-gray-100 py-1.5 z-50">
                  <div className="px-3 py-1 text-[10px] font-bold text-gray-400 uppercase">
                    Test Role
                  </div>
                  {(['student', 'teacher', 'admin'] as UserRole[]).map((r) => (
                    <button
                      key={r}
                      onClick={() => {
                        onRoleChange(r);
                        setRoleDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3.5 py-2 text-xs hover:bg-[#E6F4ED] transition capitalize ${
                        currentUserRole === r ? 'font-bold text-[#176B55] bg-[#E6F4ED]/50' : 'text-[#20332E]'
                      }`}
                    >
                      {r === 'student' ? 'Student (Pooja)' : r === 'teacher' ? 'Teacher (Ramesh)' : 'Admin / Reviewer'}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* PWA Install Button */}
            <PWAInstallButton variant="nav" />

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-[#20332E] hover:bg-[#f1efe7] transition"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#e5e2d6] bg-[#FBFAF6] px-4 pt-3 pb-6 space-y-2">
          <button
            onClick={() => handleNavClick('home')}
            className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold transition ${
              currentTab === 'home' ? 'bg-[#E6F4ED] text-[#176B55]' : 'text-[#20332E]'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick('student')}
            className={`w-full text-left flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold transition ${
              currentTab === 'student' ? 'bg-[#E6F4ED] text-[#176B55]' : 'text-[#20332E]'
            }`}
          >
            <GraduationCap className="w-5 h-5 text-[#176B55]" />
            <span>{t('student_portal', currentLanguage)}</span>
          </button>
          <button
            onClick={() => handleNavClick('library')}
            className={`w-full text-left flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold transition ${
              currentTab === 'library' ? 'bg-[#E6F4ED] text-[#176B55]' : 'text-[#20332E]'
            }`}
          >
            <BookOpen className="w-5 h-5 text-[#176B55]" />
            <span>{t('explore_lessons', currentLanguage)}</span>
          </button>
          <button
            onClick={() => handleNavClick('games')}
            className={`w-full text-left flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold transition ${
              currentTab === 'games' ? 'bg-[#E6F4ED] text-[#176B55]' : 'text-[#20332E]'
            }`}
          >
            <Gamepad2 className="w-5 h-5 text-[#d99726]" />
            <span>{t('games', currentLanguage)}</span>
          </button>
          <button
            onClick={() => handleNavClick('teacher')}
            className={`w-full text-left flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold transition ${
              currentTab === 'teacher' ? 'bg-[#E6F4ED] text-[#176B55]' : 'text-[#20332E]'
            }`}
          >
            <Users className="w-5 h-5 text-[#176B55]" />
            <span>{t('teacher_portal', currentLanguage)}</span>
          </button>
          <button
            onClick={() => handleNavClick('admin')}
            className={`w-full text-left flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold transition ${
              currentTab === 'admin' ? 'bg-[#E6F4ED] text-[#176B55]' : 'text-[#20332E]'
            }`}
          >
            <ShieldCheck className="w-5 h-5 text-[#176B55]" />
            <span>{t('admin_portal', currentLanguage)}</span>
          </button>

          <div className="pt-3 border-t border-gray-200">
            <span className="text-xs text-gray-500 font-semibold block mb-2">Switch Active View:</span>
            <div className="grid grid-cols-3 gap-2">
              {(['student', 'teacher', 'admin'] as UserRole[]).map((r) => (
                <button
                  key={r}
                  onClick={() => {
                    onRoleChange(r);
                    setMobileMenuOpen(false);
                  }}
                  className={`py-2 px-2 text-xs rounded-lg font-bold border transition capitalize ${
                    currentUserRole === r
                      ? 'bg-[#176B55] text-white border-[#176B55]'
                      : 'bg-white text-gray-700 border-gray-200'
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
