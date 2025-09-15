import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Traduções completas para todos os idiomas
const resources = {
  pt: {
    translation: {
      // Navigation
      nav: {
        temple: 'Templo',
        rituals: 'Rituais',
        prayers: 'Orações',
        history: 'História',
        profile: 'Perfil'
      },
      // Common
      common: {
        loading: 'Carregando...',
        continue: 'Continuar',
        back: 'Voltar',
        start: 'Iniciar',
        complete: 'Concluído',
        skip: 'Pular',
        close: 'Fechar',
        save: 'Salvar',
        share: 'Compartilhar',
        power: 'Poder',
        points: 'Pontos'
      }
    }
  },
  en: {
    translation: {
      nav: {
        temple: 'Temple',
        rituals: 'Rituals', 
        prayers: 'Prayers',
        history: 'History',
        profile: 'Profile'
      },
      common: {
        loading: 'Loading...',
        continue: 'Continue',
        back: 'Back',
        start: 'Start',
        complete: 'Complete',
        skip: 'Skip',
        close: 'Close',
        save: 'Save',
        share: 'Share',
        power: 'Power',
        points: 'Points'
      }
    }
  },
  es: {
    translation: {
      nav: {
        temple: 'Templo',
        rituals: 'Rituales',
        prayers: 'Oraciones', 
        history: 'Historia',
        profile: 'Perfil'
      },
      common: {
        loading: 'Cargando...',
        continue: 'Continuar',
        back: 'Atrás',
        start: 'Comenzar',
        complete: 'Completado',
        skip: 'Saltar',
        close: 'Cerrar',
        save: 'Guardar',
        share: 'Compartir',
        power: 'Poder',
        points: 'Puntos'
      }
    }
  },
  fr: {
    translation: {
      nav: {
        temple: 'Temple',
        rituals: 'Rituels',
        prayers: 'Prières',
        history: 'Histoire', 
        profile: 'Profil'
      },
      common: {
        loading: 'Chargement...',
        continue: 'Continuer',
        back: 'Retour',
        start: 'Commencer',
        complete: 'Terminé',
        skip: 'Passer',
        close: 'Fermer',
        save: 'Enregistrer',
        share: 'Partager',
        power: 'Pouvoir',
        points: 'Points'
      }
    }
  },
  it: {
    translation: {
      nav: {
        temple: 'Tempio',
        rituals: 'Rituali',
        prayers: 'Preghiere',
        history: 'Storia',
        profile: 'Profilo'
      },
      common: {
        loading: 'Caricamento...',
        continue: 'Continua',
        back: 'Indietro',
        start: 'Inizia',
        complete: 'Completato',
        skip: 'Salta',
        close: 'Chiudi',
        save: 'Salva',
        share: 'Condividi',
        power: 'Potere',
        points: 'Punti'
      }
    }
  },
  de: {
    translation: {
      nav: {
        temple: 'Tempel',
        rituals: 'Rituale',
        prayers: 'Gebete',
        history: 'Geschichte',
        profile: 'Profil'
      },
      common: {
        loading: 'Laden...',
        continue: 'Weiter',
        back: 'Zurück',
        start: 'Starten',
        complete: 'Abgeschlossen',
        skip: 'Überspringen',
        close: 'Schließen',
        save: 'Speichern',
        share: 'Teilen',
        power: 'Macht',
        points: 'Punkte'
      }
    }
  },
  ru: {
    translation: {
      nav: {
        temple: 'Храм',
        rituals: 'Ритуалы',
        prayers: 'Молитвы',
        history: 'История',
        profile: 'Профиль'
      },
      common: {
        loading: 'Загрузка...',
        continue: 'Продолжить',
        back: 'Назад', 
        start: 'Начать',
        complete: 'Завершено',
        skip: 'Пропустить',
        close: 'Закрыть',
        save: 'Сохранить',
        share: 'Поделиться',
        power: 'Сила',
        points: 'Очки'
      }
    }
  },
  zh: {
    translation: {
      nav: {
        temple: '神庙',
        rituals: '仪式',
        prayers: '祈祷',
        history: '历史',
        profile: '档案'
      },
      common: {
        loading: '加载中...',
        continue: '继续',
        back: '返回',
        start: '开始',
        complete: '完成',
        skip: '跳过',
        close: '关闭',
        save: '保存',
        share: '分享',
        power: '力量',
        points: '积分'
      }
    }
  },
  ja: {
    translation: {
      nav: {
        temple: '神殿',
        rituals: '儀式',
        prayers: '祈り',
        history: '歴史',
        profile: 'プロフィール'
      },
      common: {
        loading: '読み込み中...',
        continue: '続ける',
        back: '戻る',
        start: '開始',
        complete: '完了',
        skip: 'スキップ',
        close: '閉じる',
        save: '保存',
        share: '共有',
        power: '力',
        points: 'ポイント'
      }
    }
  },
  ar: {
    translation: {
      nav: {
        temple: 'المعبد',
        rituals: 'الطقوس',
        prayers: 'الصلوات',
        history: 'التاريخ',
        profile: 'الملف الشخصي'
      },
      common: {
        loading: 'جاري التحميل...',
        continue: 'استمرار',
        back: 'رجوع',
        start: 'ابدأ',
        complete: 'مكتمل',
        skip: 'تخطي',
        close: 'إغلاق',
        save: 'حفظ',
        share: 'مشاركة',
        power: 'القوة',
        points: 'النقاط'
      }
    }
  },
  hi: {
    translation: {
      nav: {
        temple: 'मंदिर',
        rituals: 'अनुष्ठान',
        prayers: 'प्रार्थनाएं',
        history: 'इतिहास',
        profile: 'प्रोफाइल'
      },
      common: {
        loading: 'लोड हो रहा है...',
        continue: 'जारी रखें',
        back: 'वापस',
        start: 'शुरू करें',
        complete: 'पूर्ण',
        skip: 'छोड़ें',
        close: 'बंद करें',
        save: 'सेव करें',
        share: 'साझा करें',
        power: 'शक्ति',
        points: 'अंक'
      }
    }
  },
  pl: {
    translation: {
      nav: {
        temple: 'Świątynia',
        rituals: 'Rytuały',
        prayers: 'Modlitwy',
        history: 'Historia',
        profile: 'Profil'
      },
      common: {
        loading: 'Ładowanie...',
        continue: 'Kontynuuj',
        back: 'Wstecz',
        start: 'Start',
        complete: 'Ukończone',
        skip: 'Pomiń',
        close: 'Zamknij',
        save: 'Zapisz',
        share: 'Udostępnij',
        power: 'Moc',
        points: 'Punkty'
      }
    }
  },
  tr: {
    translation: {
      nav: {
        temple: 'Tapınak',
        rituals: 'Ritüeller',
        prayers: 'Dualar',
        history: 'Tarih',
        profile: 'Profil'
      },
      common: {
        loading: 'Yükleniyor...',
        continue: 'Devam',
        back: 'Geri',
        start: 'Başla',
        complete: 'Tamamlandı',
        skip: 'Atla',
        close: 'Kapat',
        save: 'Kaydet',
        share: 'Paylaş',
        power: 'Güç',
        points: 'Puanlar'
      }
    }
  },
  nl: {
    translation: {
      nav: {
        temple: 'Tempel',
        rituals: 'Rituelen',
        prayers: 'Gebeden',
        history: 'Geschiedenis', 
        profile: 'Profiel'
      },
      common: {
        loading: 'Laden...',
        continue: 'Doorgaan',
        back: 'Terug',
        start: 'Start',
        complete: 'Voltooid',
        skip: 'Overslaan',
        close: 'Sluiten',
        save: 'Opslaan',
        share: 'Delen',
        power: 'Macht',
        points: 'Punten'
      }
    }
  },
  sv: {
    translation: {
      nav: {
        temple: 'Tempel',
        rituals: 'Ritualer',
        prayers: 'Böner',
        history: 'Historia',
        profile: 'Profil'
      },
      common: {
        loading: 'Laddar...',
        continue: 'Fortsätt',
        back: 'Tillbaka',
        start: 'Starta',
        complete: 'Slutfört',
        skip: 'Hoppa över',
        close: 'Stäng',
        save: 'Spara',
        share: 'Dela',
        power: 'Makt',
        points: 'Poäng'
      }
    }
  }
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
