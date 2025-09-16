export interface UserProgress {
  ritualsCompleted: number;
  prayersRecited: number;
  daysActive: number;
  devotionLevel: 'Iniciante' | 'Devoto' | 'Mestre' | 'Supremo' | 'Beginner' | 'Devout' | 'Master' | 'Supreme' | 'Principiante' | 'Devoté' | 'Maître' | 'Suprême' | 'Anfänger' | 'Andächtig' | 'Meister' | 'Supremat' | 'Principiante' | 'Devoto' | 'Maestro' | 'Supremo' | 'Начинающий' | 'Преданный' | 'Мастер' | 'Высший' | '初学者' | '虔诚者' | '大师' | '至高' | '初心者' | '信心者' | 'マスター' | '至高者' | 'مبتدئ' | 'مخلص' | 'سيد' | 'أعلى' | 'शुरुआती' | 'समर्पित' | 'गुरु' | 'सर्वोच्च' | '초보자' | '헌신자' | '마스터' | '최고' | 'Beginner' | 'Toegewijd' | 'Meester' | 'Opperste' | 'Nybörjare' | 'Hängiven' | 'Mästare' | 'Suprema';
  lastVisit: string;
  achievements: string[];
  firstVisit: string;
  lastPrayerDate: string;
  lastRitualDate: string;
  totalPoints: number;
}

const translations = {
  pt: {
    devotionLevels: {
      beginner: "Iniciante",
      devout: "Devoto", 
      master: "Mestre",
      supreme: "Supremo"
    },
    
    achievements: {
      'first-prayer': "Primeira Oração",
      'first-ritual': "Primeiro Ritual", 
      'dedicated-devotee': "Devoto Dedicado",
      'weekly-faithful': "Fiel Semanal",
      'ritual-master': "Mestre dos Rituais",
      'prayer-warrior': "Guerreiro da Oração",
      'sacred-month': "Mês Sagrado",
      'grand-master': "Grão-Mestre"
    }
  },
  
  en: {
    devotionLevels: {
      beginner: "Beginner",
      devout: "Devout",
      master: "Master", 
      supreme: "Supreme"
    },
    
    achievements: {
      'first-prayer': "First Prayer",
      'first-ritual': "First Ritual",
      'dedicated-devotee': "Dedicated Devotee", 
      'weekly-faithful': "Weekly Faithful",
      'ritual-master': "Ritual Master",
      'prayer-warrior': "Prayer Warrior",
      'sacred-month': "Sacred Month",
      'grand-master': "Grand Master"
    }
  },
  
  es: {
    devotionLevels: {
      beginner: "Principiante",
      devout: "Devoto",
      master: "Maestro",
      supreme: "Supremo"
    },
    
    achievements: {
      'first-prayer': "Primera Oración", 
      'first-ritual': "Primer Ritual",
      'dedicated-devotee': "Devoto Dedicado",
      'weekly-faithful': "Fiel Semanal",
      'ritual-master': "Maestro de Rituales",
      'prayer-warrior': "Guerrero de Oración", 
      'sacred-month': "Mes Sagrado",
      'grand-master': "Gran Maestro"
    }
  },
  
  fr: {
    devotionLevels: {
      beginner: "Débutant",
      devout: "Dévoué",
      master: "Maître",
      supreme: "Suprême"
    },
    
    achievements: {
      'first-prayer': "Première Prière",
      'first-ritual': "Premier Rituel",
      'dedicated-devotee': "Dévot Dévoué",
      'weekly-faithful': "Fidèle Hebdomadaire",
      'ritual-master': "Maître des Rituels",
      'prayer-warrior': "Guerrier de Prière",
      'sacred-month': "Mois Sacré",
      'grand-master': "Grand Maître"
    }
  },
  
  de: {
    devotionLevels: {
      beginner: "Anfänger",
      devout: "Andächtig", 
      master: "Meister",
      supreme: "Supremat"
    },
    
    achievements: {
      'first-prayer': "Erstes Gebet",
      'first-ritual': "Erstes Ritual",
      'dedicated-devotee': "Hingegebener Anhänger",
      'weekly-faithful': "Wöchentlich Treuer",
      'ritual-master': "Ritual-Meister",
      'prayer-warrior': "Gebets-Krieger",
      'sacred-month': "Heiliger Monat",
      'grand-master': "Großmeister"
    }
  },
  
  it: {
    devotionLevels: {
      beginner: "Principiante",
      devout: "Devoto",
      master: "Maestro", 
      supreme: "Supremo"
    },
    
    achievements: {
      'first-prayer': "Prima Preghiera",
      'first-ritual': "Primo Rituale",
      'dedicated-devotee': "Devoto Dedicato",
      'weekly-faithful': "Fedele Settimanale",
      'ritual-master': "Maestro dei Rituali",
      'prayer-warrior': "Guerriero della Preghiera",
      'sacred-month': "Mese Sacro",
      'grand-master': "Gran Maestro"
    }
  },
  
  ru: {
    devotionLevels: {
      beginner: "Начинающий",
      devout: "Преданный",
      master: "Мастер",
      supreme: "Высший"
    },
    
    achievements: {
      'first-prayer': "Первая Молитва",
      'first-ritual': "Первый Ритуал", 
      'dedicated-devotee': "Преданный Последователь",
      'weekly-faithful': "Еженедельно Верный",
      'ritual-master': "Мастер Ритуалов",
      'prayer-warrior': "Молитвенный Воин",
      'sacred-month': "Священный Месяц",
      'grand-master': "Гранд Мастер"
    }
  },
  
  zh: {
    devotionLevels: {
      beginner: "初学者",
      devout: "虔诚者",
      master: "大师",
      supreme: "至高"
    },
    
    achievements: {
      'first-prayer': "第一次祈祷",
      'first-ritual': "第一次仪式",
      'dedicated-devotee': "专心奉献者",
      'weekly-faithful': "每周忠实者",
      'ritual-master': "仪式大师",
      'prayer-warrior': "祈祷战士",
      'sacred-month': "神圣月份",
      'grand-master': "大宗师"
    }
  },
  
  ja: {
    devotionLevels: {
      beginner: "初心者",
      devout: "信心者",
      master: "マスター",
      supreme: "至高者"
    },
    
    achievements: {
      'first-prayer': "初回祈り",
      'first-ritual': "初回儀式",
      'dedicated-devotee': "献身的信者",
      'weekly-faithful': "週次忠実者",
      'ritual-master': "儀式マスター",
      'prayer-warrior': "祈り戦士",
      'sacred-month': "神聖な月",
      'grand-master': "グランドマスター"
    }
  },
  
  ar: {
    devotionLevels: {
      beginner: "مبتدئ",
      devout: "مخلص",
      master: "سيد",
      supreme: "أعلى"
    },
    
    achievements: {
      'first-prayer': "الصلاة الأولى",
      'first-ritual': "الطقوس الأولى",
      'dedicated-devotee': "متفاني مخلص",
      'weekly-faithful': "مخلص أسبوعي",
      'ritual-master': "سيد الطقوس",
      'prayer-warrior': "محارب الصلاة",
      'sacred-month': "الشهر المقدس",
      'grand-master': "السيد الأعظم"
    }
  },
  
  hi: {
    devotionLevels: {
      beginner: "शुरुआती",
      devout: "समर्पित",
      master: "गुरु",
      supreme: "सर्वोच्च"
    },
    
    achievements: {
      'first-prayer': "पहली प्रार्थना",
      'first-ritual': "पहला अनुष्ठान",
      'dedicated-devotee': "समर्पित भक्त",
      'weekly-faithful': "साप्ताहिक निष्ठावान",
      'ritual-master': "अनुष्ठान गुरु",
      'prayer-warrior': "प्रार्थना योद्धा",
      'sacred-month': "पवित्र महीना",
      'grand-master': "महान गुरु"
    }
  },
  
  ko: {
    devotionLevels: {
      beginner: "초보자",
      devout: "헌신자",
      master: "마스터",
      supreme: "최고"
    },
    
    achievements: {
      'first-prayer': "첫 기도",
      'first-ritual': "첫 의식",
      'dedicated-devotee': "헌신적 신자",
      'weekly-faithful': "주간 충실자",
      'ritual-master': "의식 마스터",
      'prayer-warrior': "기도 전사",
      'sacred-month': "신성한 달",
      'grand-master': "그랜드 마스터"
    }
  },
  
  nl: {
    devotionLevels: {
      beginner: "Beginner",
      devout: "Toegewijd",
      master: "Meester",
      supreme: "Opperste"
    },
    
    achievements: {
      'first-prayer': "Eerste Gebed",
      'first-ritual': "Eerste Ritueel",
      'dedicated-devotee': "Toegewijde Volgeling",
      'weekly-faithful': "Wekelijks Trouw",
      'ritual-master': "Ritueel Meester",
      'prayer-warrior': "Gebed Strijder",
      'sacred-month': "Heilige Maand",
      'grand-master': "Groot Meester"
    }
  },
  
  sv: {
    devotionLevels: {
      beginner: "Nybörjare",
      devout: "Hängiven",
      master: "Mästare",
      supreme: "Suprema"
    },
    
    achievements: {
      'first-prayer': "Första Bön",
      'first-ritual': "Första Ritual",
      'dedicated-devotee': "Hängiven Följare",
      'weekly-faithful': "Veckovis Trogen",
      'ritual-master': "Ritual Mästare",
      'prayer-warrior': "Bön Krigare",
      'sacred-month': "Helig Månad", 
      'grand-master': "Stor Mästare"
    }
  }
};

const useLanguage = () => {
  const [language, setLanguage] = useState('pt');
  
  useEffect(() => {
    const savedLanguage = localStorage.getItem('temple_language');
    if (savedLanguage && translations[savedLanguage]) {
      setLanguage(savedLanguage);
      return;
    }
    
    const browserLang = navigator.language.toLowerCase();
    let detectedLang = 'pt'; 
    
    if (browserLang.includes('en')) detectedLang = 'en';
    else if (browserLang.includes('es')) detectedLang = 'es';
    else if (browserLang.includes('fr')) detectedLang = 'fr';
    else if (browserLang.includes('de')) detectedLang = 'de';
    else if (browserLang.includes('it')) detectedLang = 'it';
    else if (browserLang.includes('ru')) detectedLang = 'ru';
    else if (browserLang.includes('zh') || browserLang.includes('cn')) detectedLang = 'zh';
    else if (browserLang.includes('ja')) detectedLang = 'ja';
    else if (browserLang.includes('ar')) detectedLang = 'ar';
    else if (browserLang.includes('hi')) detectedLang = 'hi';
    else if (browserLang.includes('ko')) detectedLang = 'ko';
    else if (browserLang.includes('nl')) detectedLang = 'nl';
    else if (browserLang.includes('sv')) detectedLang = 'sv';
    else if (browserLang.includes('pt')) detectedLang = 'pt';
    
    setLanguage(detectedLang);
    localStorage.setItem('temple_language', detectedLang);
  }, []);
  
  const getDevotion = (key: string) => {
    return translations[language]?.devotionLevels?.[key] || translations.pt.devotionLevels[key] || key;
  };
  
  const getAchievement = (key: string) => {
    return translations[language]?.achievements?.[key] || translations.pt.achievements[key] || key;
  };
  
  return { language, getDevotion, getAchievement };
};

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

const calculateDevotionLevel = (totalPoints: number): any => {
  const { getDevotion } = useLanguage();
  
  if (totalPoints >= 500) return getDevotion('supreme');
  if (totalPoints >= 300) return getDevotion('master');
  if (totalPoints >= 150) return getDevotion('devout');
  return getDevotion('beginner');
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

  // Translation helpers
  getLocalizedDevotionLevel: (level: string): string => {
    const { getDevotion } = useLanguage();
    const levelMap = {
      'Iniciante': 'beginner',
      'Devoto': 'devout', 
      'Mestre': 'master',
      'Supremo': 'supreme'
    };
    return getDevotion(levelMap[level] || 'beginner');
  },

  getLocalizedAchievement: (achievementId: string): string => {
    const { getAchievement } = useLanguage();
    return getAchievement(achievementId);
  }
};
