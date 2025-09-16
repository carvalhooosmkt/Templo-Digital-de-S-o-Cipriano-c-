import { NavLink } from 'react-router-dom';
import { Home, Flame, Book, Scroll, User } from 'lucide-react';
import { useState, useEffect } from 'react';

const translations = {
  pt: {
    nav: {
      temple: "Templo",
      rituals: "Rituais", 
      prayers: "Orações",
      history: "História",
      profile: "Perfil"
    }
  },
  
  en: {
    nav: {
      temple: "Temple",
      rituals: "Rituals",
      prayers: "Prayers", 
      history: "History",
      profile: "Profile"
    }
  },
  
  es: {
    nav: {
      temple: "Templo",
      rituals: "Rituales",
      prayers: "Oraciones",
      history: "Historia", 
      profile: "Perfil"
    }
  },
  
  fr: {
    nav: {
      temple: "Temple",
      rituals: "Rituels",
      prayers: "Prières",
      history: "Histoire",
      profile: "Profil"
    }
  },
  
  de: {
    nav: {
      temple: "Tempel",
      rituals: "Rituale",
      prayers: "Gebete",
      history: "Geschichte",
      profile: "Profil"
    }
  },
  
  it: {
    nav: {
      temple: "Tempio",
      rituals: "Rituali",
      prayers: "Preghiere",
      history: "Storia",
      profile: "Profilo"
    }
  },
  
  ru: {
    nav: {
      temple: "Храм",
      rituals: "Ритуалы",
      prayers: "Молитвы",
      history: "История",
      profile: "Профиль"
    }
  },
  
  zh: {
    nav: {
      temple: "神殿",
      rituals: "仪式",
      prayers: "祈祷",
      history: "历史",
      profile: "个人资料"
    }
  },
  
  ja: {
    nav: {
      temple: "神殿",
      rituals: "儀式",
      prayers: "祈り",
      history: "歴史",
      profile: "プロフィール"
    }
  },
  
  ar: {
    nav: {
      temple: "المعبد",
      rituals: "الطقوس",
      prayers: "الصلوات",
      history: "التاريخ",
      profile: "الملف الشخصي"
    }
  },
  
  hi: {
    nav: {
      temple: "मंदिर",
      rituals: "अनुष्ठान",
      prayers: "प्रार्थनाएं",
      history: "इतिहास",
      profile: "प्रोफाइल"
    }
  },
  
  ko: {
    nav: {
      temple: "성전",
      rituals: "의식",
      prayers: "기도",
      history: "역사",
      profile: "프로필"
    }
  },
  
  nl: {
    nav: {
      temple: "Tempel",
      rituals: "Rituelen",
      prayers: "Gebeden",
      history: "Geschiedenis",
      profile: "Profiel"
    }
  },
  
  sv: {
    nav: {
      temple: "Tempel",
      rituals: "Ritualer",
      prayers: "Böner",
      history: "Historia",
      profile: "Profil"
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
  
  const t = (key: string) => {
    return translations[language]?.nav?.[key] || translations.pt.nav[key] || key;
  };
  
  return { language, t };
};

export default function Navigation() {
  const { language, t } = useLanguage();

  const navItems = [
    { to: '/app', icon: Home, label: t('temple') },
    { to: '/app/rituals', icon: Flame, label: t('rituals') },
    { to: '/app/prayers', icon: Book, label: t('prayers') },
    { to: '/app/history', icon: Scroll, label: t('history') },
    { to: '/app/profile', icon: User, label: t('profile') },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-obsidian-500/95 border-t border-gold-500/30 backdrop-blur-lg z-50">
      <div className="flex justify-around items-center py-2 px-2 max-w-2xl mx-auto">
        {navItems.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/app'}
            className={({ isActive }) => 
              `flex flex-col items-center py-2 px-2 rounded-lg transition-all duration-300 ${
                isActive 
                  ? 'text-gold-400 bg-gold-400/10 scale-110 mystical-glow' 
                  : 'text-gold-200 hover:text-gold-400 hover:bg-gold-400/5'
              }`
            }
          >
            <Icon size={22} />
            <span className="text-xs font-bold mt-1 sacred-text">{label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
