import React from 'react';
import { X, ShieldCheck, Lock, HeartHandshake, EyeOff } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyPolicyModal: React.FC<Props> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs overflow-y-auto">
      <div className="w-full max-w-2xl rounded-3xl bg-white p-6 sm:p-8 shadow-2xl border border-gray-100 my-8">
        <div className="flex items-center justify-between border-b pb-4 border-gray-100">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-[#E6F4ED] text-[#176B55]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#176B55]">Child Privacy & Data Protection Policy</h2>
              <p className="text-xs text-[#577067]">VidyaSetu Rural Primary Education Trust</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-gray-400 hover:text-gray-600 hover:bg-gray-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-5 space-y-4 text-sm text-[#20332E] max-h-[60vh] overflow-y-auto pr-2">
          <div className="p-4 rounded-2xl bg-[#E6F4ED]/60 border border-[#c2e5d3] flex items-start gap-3">
            <EyeOff className="w-5 h-5 text-[#176B55] flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-[#176B55] text-sm">Minimal Data Collection by Design</h4>
              <p className="text-xs text-[#335046] mt-0.5">
                VidyaSetu never collects birth dates, mobile phone numbers, student home addresses, precise GPS coordinates, or photographs of children.
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-base text-[#176B55] flex items-center gap-2">
              <Lock className="w-4 h-4 text-[#F2B84B]" />
              1. Teacher-Supervised Enrollment
            </h3>
            <p className="text-xs text-[#577067] mt-1 leading-relaxed">
              Student accounts are managed through school teachers and headmasters. No public open self-registration is allowed that could compromise child identity.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-base text-[#176B55] flex items-center gap-2">
              <HeartHandshake className="w-4 h-4 text-[#F2B84B]" />
              2. Zero Commercial Advertising & No Third-Party Trackers
            </h3>
            <p className="text-xs text-[#577067] mt-1 leading-relaxed">
              VidyaSetu is built strictly for public education. We do not use commercial ad trackers, pixel beacons, or data broker analytics.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-base text-[#176B55] flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#F2B84B]" />
              3. Offline Data & On-Device Security
            </h3>
            <p className="text-xs text-[#577067] mt-1 leading-relaxed">
              Lesson downloads and quiz results are stored locally inside the browser's protected IndexedDB database. Synced records sent to Supabase PostgreSQL are strictly protected with Row Level Security (RLS).
            </p>
          </div>

          <div>
            <h3 className="font-bold text-base text-[#176B55] flex items-center gap-2">
              <Lock className="w-4 h-4 text-[#F2B84B]" />
              4. Data Correction and Right to Forget
            </h3>
            <p className="text-xs text-[#577067] mt-1 leading-relaxed">
              School authorities may request full deletion or correction of classroom student progress records at any time.
            </p>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-gray-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-[#176B55] text-white text-sm font-semibold hover:bg-[#0f4839] transition"
          >
            I Understand & Accept
          </button>
        </div>
      </div>
    </div>
  );
};
