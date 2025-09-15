import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, ChevronDown, ChevronUp, Check } from 'lucide-react';

const languages = [
  { code: 'pt', name: 'Português', flag: '🇧🇷' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' },
  { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' },
  { code: 'pl', name: 'Polski', flag: '🇵🇱' },
  { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
  { code: 'nl', name: 'Nederlands', flag: '🇳🇱' },
  { code: 'sv', name: 'Svenska', flag: '🇸🇪' }
];

interface LanguageSelectorProps {
  showInHeader?: boolean;
}

export default function LanguageSelector({ showInHeader = false }: LanguageSelectorProps) {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  
  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const changeLanguage = (langCode: string) => {
    i18n.changeLanguage(langCode);
    setIsOpen(false);
  };

  if (showInHeader) {
    return (
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 bg-obsidian-400/80 backdrop-blur-sm px-3 py-2 rounded-full text-gold-300 hover:text-gold-400 transition-all duration-300 sacred-border hover:scale-105"
        >
          <Globe size={18} />
          <span className="text-lg">{currentLanguage.flag}</span>
          <span className="font-bold text-sm hidden sm:block">{currentLanguage.name}</span>
          {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>

        {isOpen && (
          <div className="absolute top-full mt-2 right-0 bg-obsidian-500/95 backdrop-blur-lg rounded-2xl p-2 shadow-mystical border border-gold-500/30 z-50 min-w-48 max-h-80 overflow-y-auto">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-300 text-left hover:bg-gold-400/10 ${
                  lang.code === i18n.language ? 'bg-gold-400/20 text-gold-400' : 'text-gold-200 hover:text-gold-400'
                }`}
              >
                <span className="text-lg">{lang.flag}</span>
                <span className="font-semibold flex-1">{lang.name}</span>
                {lang.code === i18n.language && <Check size={16} className="text-gold-400" />}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="temple-section rounded-3xl p-6 md:p-8 shadow-sacred">
      <div className="flex items-center gap-4 mb-6">
        <Globe className="text-gold-400" size={32} />
        <h3 className="sacred-text text-xl md:text-2xl font-black text-gold-400">
          Escolher Idioma / Select Language
        </h3>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            className={`flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-300 hover:scale-105 ${
              lang.code === i18n.language 
                ? 'bg-gold-400/20 text-gold-400 border-2 border-gold-400/50 shadow-divine' 
                : 'bg-gold-500/10 text-gold-200 border border-gold-500/30 hover:bg-gold-400/10 hover:text-gold-400'
            }`}
          >
            <span className="text-2xl">{lang.flag}</span>
            <div className="flex-1 text-left">
              <div className="font-bold">{lang.name}</div>
              {lang.code === i18n.language && (
                <div className="text-xs opacity-80">✓ Selecionado</div>
              )}
            </div>
          </button>
        ))}
      </div>

      <div className="mt-6 bg-gold-500/10 rounded-2xl p-4 border border-gold-500/30">
        <p className="text-gold-200 text-sm md:text-base text-center leading-relaxed">
          🌍 São Cipriano fala todos os idiomas do mundo e atende devotos de todas as nações com igual amor e poder supremo! 
          Escolha seu idioma para uma experiência completamente personalizada.
        </p>
      </div>
    </div>
  );
}
