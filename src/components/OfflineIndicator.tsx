import React, { useEffect, useState } from 'react';
import { syncManager, SyncState } from '../offline/sync-manager';
import { Wifi, WifiOff, HardDrive, CheckCircle2 } from 'lucide-react';

export const OfflineIndicator: React.FC = () => {
  const [syncState, setSyncState] = useState<SyncState>('online');

  useEffect(() => {
    const unsubscribe = syncManager.subscribe((state) => {
      setSyncState(state);
    });
    return unsubscribe;
  }, []);

  const isOffline = syncState === 'offline';

  return (
    <div className="fixed bottom-4 right-4 z-40 max-w-sm transition-all duration-300">
      <div
        className={`flex items-center gap-3 px-4 py-2.5 rounded-2xl shadow-lg border backdrop-blur-md ${
          isOffline
            ? 'bg-amber-900/90 text-amber-100 border-amber-700'
            : 'bg-white/95 text-[#20332E] border-emerald-100'
        }`}
      >
        {isOffline ? (
          <div className="flex items-center gap-2">
            <WifiOff className="w-4 h-4 text-amber-300" />
            <div className="text-xs">
              <span className="font-semibold block">Offline Mode Active</span>
              <span className="text-[10px] text-amber-200">
                All lessons & quiz scores saved in browser storage
              </span>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <HardDrive className="w-4 h-4 text-[#176B55]" />
            <div className="text-xs">
              <span className="font-semibold block text-[#176B55]">Frontend-Only Storage</span>
              <span className="text-[10px] text-[#577067]">
                Zero database dependency • Local & offline ready
              </span>
            </div>
            <CheckCircle2 className="w-3.5 h-3.5 text-[#176B55] ml-1" />
          </div>
        )}
      </div>
    </div>
  );
};
