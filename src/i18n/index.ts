import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import all translations
import pt from './locales/pt.json';
import en from './locales/en.json';
import es from './locales/es.json';
import fr from './locales/fr.json';
import it from './locales/it.json';
import de from './locales/de.json';
import ru from './locales/ru.json';
import zh from './locales/zh.json';
import ja from './locales/ja.json';
import ar from './locales/ar.json';
import hi from './locales/hi.json';
import ko from './locales/ko.json';
import nl from './locales/nl.json';
import sv from './locales/sv.json';
import no from './locales/no.json';

const resources = {
  pt: { translation: pt },
  en: { translation: en },
  es: { translation: es },
  fr: { translation: fr },
  it: { translation: it },
  de: { translation: de },
  ru: { translation: ru },
  zh: { translation: zh },
  ja: { translation: ja },
  ar: { translation: ar },
  hi: { translation: hi },
  ko: { translation: ko },
  nl: { translation: nl },
  sv: { translation: sv },
  no: { translation: no }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'pt',
    debug: false,
    
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;