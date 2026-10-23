export type SyncState = 'online' | 'offline' | 'synced';

class SyncManager {
  private syncState: SyncState = typeof navigator !== 'undefined' && navigator.onLine ? 'online' : 'offline';
  private listeners: Set<(state: SyncState, pendingCount: number) => void> = new Set();

  constructor() {
    if (typeof window !== 'undefined') {
      window.addEventListener('online', () => {
        this.updateState('online');
      });

      window.addEventListener('offline', () => {
        this.updateState('offline');
      });
    }
  }

  public subscribe(callback: (state: SyncState, pendingCount: number) => void) {
    this.listeners.add(callback);
    callback(this.syncState, 0);
    return () => {
      this.listeners.delete(callback);
    };
  }

  private updateState(newState: SyncState) {
    this.syncState = newState;
    this.notify();
  }

  private notify() {
    this.listeners.forEach((cb) => cb(this.syncState, 0));
  }

  public async enqueueEvent(
    _eventType: string,
    _userId: string,
    _payload: any
  ): Promise<string> {
    // Frontend-only: data is already saved in localStorage
    return `local_${Date.now()}`;
  }

  public async processQueue(): Promise<void> {
    this.updateState('synced');
  }

  public getState() {
    return {
      state: this.syncState,
      pendingCount: 0
    };
  }
}

export const syncManager = new SyncManager();
