export interface UserProgress {
  ritualsCompleted: number;
  prayersRecited: number;
  daysActive: number;
  devotionLevel: 'Iniciante' | 'Devoto' | 'Mestre' | 'Supremo';
  lastVisit: string;
  achievements: string[];
}

const KEYS = {
  USER_PROGRESS: 'userProgress',
  HAS_SEEN_INTRO: 'hasSeenIntro',
  LAST_RITUAL: 'lastRitual',
  PRAYER_COUNT: 'prayerCount',
  DEVOTION_STREAK: 'devotionStreak',
};

export const StorageService = {
  // User Progress
  async saveUserProgress(progress: UserProgress): Promise<void> {
    try {
      localStorage.setItem(KEYS.USER_PROGRESS, JSON.stringify(progress));
    } catch (error) {
      console.error('Error saving user progress:', error);
    }
  },

  async getUserProgress(): Promise<UserProgress | null> {
    try {
      const data = localStorage.getItem(KEYS.USER_PROGRESS);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error('Error getting user progress:', error);
      return null;
    }
  },

  // Intro Status
  async setIntroSeen(): Promise<void> {
    try {
      localStorage.setItem(KEYS.HAS_SEEN_INTRO, 'true');
    } catch (error) {
      console.error('Error setting intro seen:', error);
    }
  },

  async hasSeenIntro(): Promise<boolean> {
    try {
      const seen = localStorage.getItem(KEYS.HAS_SEEN_INTRO);
      return seen === 'true';
    } catch (error) {
      console.error('Error checking intro status:', error);
      return false;
    }
  },

  // Statistics
  async incrementRitualCount(): Promise<void> {
    try {
      const progress = await this.getUserProgress();
      if (progress) {
        progress.ritualsCompleted += 1;
        progress.lastVisit = new Date().toISOString();
        await this.saveUserProgress(progress);
      }
    } catch (error) {
      console.error('Error incrementing ritual count:', error);
    }
  },

  async incrementPrayerCount(): Promise<void> {
    try {
      const progress = await this.getUserProgress();
      if (progress) {
        progress.prayersRecited += 1;
        progress.lastVisit = new Date().toISOString();
        await this.saveUserProgress(progress);
      }
    } catch (error) {
      console.error('Error incrementing prayer count:', error);
    }
  },

  async updateDaysActive(): Promise<void> {
    try {
      const progress = await this.getUserProgress();
      if (progress) {
        const lastVisit = new Date(progress.lastVisit);
        const today = new Date();
        const daysDiff = Math.floor((today.getTime() - lastVisit.getTime()) / (1000 * 60 * 60 * 24));
        
        if (daysDiff >= 1) {
          progress.daysActive += 1;
          progress.lastVisit = today.toISOString();
          await this.saveUserProgress(progress);
        }
      }
    } catch (error) {
      console.error('Error updating days active:', error);
    }
  },

  // Achievements
  async unlockAchievement(achievementId: string): Promise<void> {
    try {
      const progress = await this.getUserProgress();
      if (progress && !progress.achievements.includes(achievementId)) {
        progress.achievements.push(achievementId);
        await this.saveUserProgress(progress);
      }
    } catch (error) {
      console.error('Error unlocking achievement:', error);
    }
  },

  // Clear All Data
  async clearAllData(): Promise<void> {
    try {
      localStorage.removeItem(KEYS.USER_PROGRESS);
      localStorage.removeItem(KEYS.HAS_SEEN_INTRO);
      localStorage.removeItem(KEYS.LAST_RITUAL);
      localStorage.removeItem(KEYS.PRAYER_COUNT);
      localStorage.removeItem(KEYS.DEVOTION_STREAK);
      localStorage.removeItem('prayerReminder');
    } catch (error) {
      console.error('Error clearing data:', error);
    }
  },
};