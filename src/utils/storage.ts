export interface UserProgress {
  ritualsCompleted: number;
  prayersRecited: number;
  daysActive: number;
  devotionLevel: 'Iniciante' | 'Devoto' | 'Mestre' | 'Supremo';
  lastVisit: string;
  achievements: string[];
  firstVisit: string;
  lastPrayerDate: string;
  lastRitualDate: string;
  totalPoints: number;
}

const KEYS = {
  USER_PROGRESS: 'userProgress',
  HAS_SEEN_INTRO: 'hasSeenIntro',
  LAST_RITUAL: 'lastRitual',
  PRAYER_COUNT: 'prayerCount',
  DEVOTION_STREAK: 'devotionStreak',
};

const getInitialProgress = (): UserProgress => ({
  ritualsCompleted: 0,
  prayersRecited: 0,
  daysActive: 1,
  devotionLevel: 'Iniciante',
  lastVisit: new Date().toISOString(),
  achievements: [],
  firstVisit: new Date().toISOString(),
  lastPrayerDate: '',
  lastRitualDate: '',
  totalPoints: 0
});

const calculateDaysActive = (firstVisit: string, lastVisit: string): number => {
  const first = new Date(firstVisit);
  const last = new Date(lastVisit);
  const diffTime = Math.abs(last.getTime() - first.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return Math.max(1, diffDays);
};

const calculateDevotionLevel = (totalPoints: number): 'Iniciante' | 'Devoto' | 'Mestre' | 'Supremo' => {
  if (totalPoints >= 500) return 'Supremo';
  if (totalPoints >= 300) return 'Mestre';
  if (totalPoints >= 150) return 'Devoto';
  return 'Iniciante';
};

const checkAndUnlockAchievements = (progress: UserProgress): string[] => {
  const achievements = [...progress.achievements];
  
  // Achievement logic
  if (progress.prayersRecited >= 1 && !achievements.includes('first-prayer')) {
    achievements.push('first-prayer');
  }
  if (progress.ritualsCompleted >= 1 && !achievements.includes('first-ritual')) {
    achievements.push('first-ritual');
  }
  if (progress.prayersRecited >= 5 && !achievements.includes('dedicated-devotee')) {
    achievements.push('dedicated-devotee');
  }
  if (progress.daysActive >= 7 && !achievements.includes('weekly-faithful')) {
    achievements.push('weekly-faithful');
  }
  if (progress.ritualsCompleted >= 10 && !achievements.includes('ritual-master')) {
    achievements.push('ritual-master');
  }
  if (progress.prayersRecited >= 25 && !achievements.includes('prayer-warrior')) {
    achievements.push('prayer-warrior');
  }
  if (progress.daysActive >= 30 && !achievements.includes('sacred-month')) {
    achievements.push('sacred-month');
  }
  if (progress.totalPoints >= 500 && !achievements.includes('grand-master')) {
    achievements.push('grand-master');
  }
  
  return achievements;
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

  async getUserProgress(): Promise<UserProgress> {
    try {
      const data = localStorage.getItem(KEYS.USER_PROGRESS);
      if (data) {
        const parsed = JSON.parse(data);
        // Calculate current days active
        const currentDaysActive = calculateDaysActive(parsed.firstVisit, new Date().toISOString());
        
        // Update progress with current calculations
        const updated = {
          ...parsed,
          daysActive: currentDaysActive,
          totalPoints: parsed.ritualsCompleted * 10 + parsed.prayersRecited * 5 + currentDaysActive * 2,
        };
        updated.devotionLevel = calculateDevotionLevel(updated.totalPoints);
        updated.achievements = checkAndUnlockAchievements(updated);
        
        // Save updated progress
        await this.saveUserProgress(updated);
        return updated;
      } else {
        const initial = getInitialProgress();
        await this.saveUserProgress(initial);
        return initial;
      }
    } catch (error) {
      console.error('Error getting user progress:', error);
      const initial = getInitialProgress();
      await this.saveUserProgress(initial);
      return initial;
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

  // Activities
  async incrementRitualCount(): Promise<void> {
    try {
      const progress = await this.getUserProgress();
      const today = new Date().toDateString();
      
      // Only increment if not done today
      if (progress.lastRitualDate !== today) {
        progress.ritualsCompleted += 1;
        progress.lastRitualDate = today;
        progress.lastVisit = new Date().toISOString();
        progress.totalPoints = progress.ritualsCompleted * 10 + progress.prayersRecited * 5 + progress.daysActive * 2;
        progress.devotionLevel = calculateDevotionLevel(progress.totalPoints);
        progress.achievements = checkAndUnlockAchievements(progress);
        await this.saveUserProgress(progress);
      }
    } catch (error) {
      console.error('Error incrementing ritual count:', error);
    }
  },

  async incrementPrayerCount(): Promise<void> {
    try {
      const progress = await this.getUserProgress();
      const today = new Date().toDateString();
      
      // Allow multiple prayers per day
      progress.prayersRecited += 1;
      progress.lastPrayerDate = today;
      progress.lastVisit = new Date().toISOString();
      progress.totalPoints = progress.ritualsCompleted * 10 + progress.prayersRecited * 5 + progress.daysActive * 2;
      progress.devotionLevel = calculateDevotionLevel(progress.totalPoints);
      progress.achievements = checkAndUnlockAchievements(progress);
      await this.saveUserProgress(progress);
    } catch (error) {
      console.error('Error incrementing prayer count:', error);
    }
  },

  async updateDaysActive(): Promise<void> {
    try {
      const progress = await this.getUserProgress();
      progress.lastVisit = new Date().toISOString();
      await this.saveUserProgress(progress);
    } catch (error) {
      console.error('Error updating days active:', error);
    }
  },

  // Achievements
  async unlockAchievement(achievementId: string): Promise<void> {
    try {
      const progress = await this.getUserProgress();
      if (!progress.achievements.includes(achievementId)) {
        progress.achievements.push(achievementId);
        await this.saveUserProgress(progress);
      }
    } catch (error) {
      console.error('Error unlocking achievement:', error);
    }
  },

  // Teaching Progress
  async saveCompletedLesson(lessonId: string): Promise<void> {
    try {
      const key = 'completedLessons';
      const existing = localStorage.getItem(key);
      const completed = existing ? JSON.parse(existing) : [];
      
      if (!completed.includes(lessonId)) {
        completed.push(lessonId);
        localStorage.setItem(key, JSON.stringify(completed));
        
        // Award points for completing lesson
        const progress = await this.getUserProgress();
        progress.totalPoints += 15; // 15 points per lesson
        progress.devotionLevel = calculateDevotionLevel(progress.totalPoints);
        progress.achievements = checkAndUnlockAchievements(progress);
        await this.saveUserProgress(progress);
      }
    } catch (error) {
      console.error('Error saving completed lesson:', error);
    }
  },

  async getCompletedLessons(): Promise<string[]> {
    try {
      const key = 'completedLessons';
      const existing = localStorage.getItem(key);
      return existing ? JSON.parse(existing) : [];
    } catch (error) {
      console.error('Error getting completed lessons:', error);
      return [];
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
      localStorage.removeItem('completedLessons');
    } catch (error) {
      console.error('Error clearing data:', error);
    }
  },
};
