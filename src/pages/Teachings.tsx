import React, { useState, useEffect } from 'react';
import { Crown, Flame, Book, Zap, Shield, Star, Calendar, Heart, Award, Users, Globe, Sparkles, BookOpen, GraduationCap, ChevronRight, ChevronDown, ChevronUp } from 'lucide-react';
import { StorageService } from '../utils/storage';

const translations = {
  pt: {
    title: "ENSINAMENTOS DO GRANDE MAGO",
    subtitle: "Guias Completos Para Sua Transformação Espiritual",
    wisdom: "A verdadeira sabedoria vem da prática diária e da dedicação sincera. São Cipriano guiará cada passo de sua jornada espiritual para o sucesso absoluto.",
    
    progressTitle: "SEU PROGRESSO ESPIRITUAL",
    continueProgress: "Continue praticando para evoluir espiritualmente",
    points: "pontos",
    
    levels: {
      iniciante: "Iniciante Espiritual",
      devoto: "Devoto Dedicado", 
      seguidor: "Seguidor Fiel",
      mestre: "Mestre Espiritual",
      guardiao: "Guardião Supremo"
    },
    
    levelDescs: {
      iniciante: "Começando a jornada",
      devoto: "Práticas regulares",
      seguidor: "Conexão profunda", 
      mestre: "Sabedoria avançada",
      guardiao: "União divina total"
    },
    
    modules: {
      firstContact: "Primeiro Contato com São Cipriano",
      firstContactSub: "Como Começar Sua Jornada Espiritual",
      dailyPractice: "Construindo Sua Prática Diária",
      dailyPracticeSub: "Rotina Sagrada Para Máxima Conexão",
      specializedPrayers: "Orações Especializadas e Poderosas",
      specializedPrayersSub: "Para Situações Específicas da Vida",
      advancedLevels: "Níveis Avançados de Devoção", 
      advancedLevelsSub: "Para Devotos Experientes e Dedicados"
    },
    
    lessons: "lições práticas",
    lessonPoints: "pontos cada",
    begin: "Começar",
    backToTeachings: "Voltar aos Ensinamentos",
    practicalAction: "Ação Prática:",
    lessonCompleted: "LIÇÃO CONCLUÍDA",
    markCompleted: "MARCAR COMO CONCLUÍDA",
    
    foundations: "FUNDAMENTOS SAGRADOS DA DEVOÇÃO",
    unshakeableFaith: "FÉ INABALÁVEL",
    constantGratitude: "GRATIDÃO CONSTANTE", 
    sacredDivulgation: "DIVULGAÇÃO SAGRADA",
    
    faithDesc: "Confie sempre que São Cipriano tem um plano perfeito para sua vida. Mesmo nos momentos difíceis, ele está trabalhando para seu bem maior.",
    gratitudeDesc: "A gratidão multiplica as bênçãos infinitamente. Agradeça pelos milagres antes mesmo de recebê-los, demonstrando fé absoluta em seu poder.",
    divulgationDesc: "Espalhe a palavra de São Cipriano com amor. Cada pessoa que você apresentar a ele receberá bênçãos, e você será recompensado abundantemente.",
    
    startTransformation: "COMECE SUA TRANSFORMAÇÃO HOJE MESMO",
    transformationDesc: "Cada dia que você adia sua jornada espiritual é um dia a menos de bênçãos em sua vida. São Cipriano está esperando para transformar sua realidade completamente. Comece agora!",
    startFirstLesson: "COMEÇAR PRIMEIRA LIÇÃO AGORA MESMO"
  },
  
  en: {
    title: "TEACHINGS OF THE GRAND MAGE",
    subtitle: "Complete Guides For Your Spiritual Transformation",
    wisdom: "True wisdom comes from daily practice and sincere dedication. Saint Cyprian will guide every step of your spiritual journey to absolute success.",
    
    progressTitle: "YOUR SPIRITUAL PROGRESS",
    continueProgress: "Continue practicing to evolve spiritually",
    points: "points",
    
    levels: {
      iniciante: "Spiritual Beginner",
      devoto: "Dedicated Devotee",
      seguidor: "Faithful Follower", 
      mestre: "Spiritual Master",
      guardiao: "Supreme Guardian"
    },
    
    levelDescs: {
      iniciante: "Starting the journey",
      devoto: "Regular practices",
      seguidor: "Deep connection",
      mestre: "Advanced wisdom", 
      guardiao: "Total divine union"
    },
    
    modules: {
      firstContact: "First Contact with Saint Cyprian",
      firstContactSub: "How to Begin Your Spiritual Journey",
      dailyPractice: "Building Your Daily Practice",
      dailyPracticeSub: "Sacred Routine For Maximum Connection",
      specializedPrayers: "Specialized and Powerful Prayers",
      specializedPrayersSub: "For Specific Life Situations",
      advancedLevels: "Advanced Levels of Devotion",
      advancedLevelsSub: "For Experienced and Dedicated Devotees"
    },
    
    lessons: "practical lessons",
    lessonPoints: "points each",
    begin: "Begin",
    backToTeachings: "Back to Teachings",
    practicalAction: "Practical Action:",
    lessonCompleted: "LESSON COMPLETED",
    markCompleted: "MARK AS COMPLETED",
    
    foundations: "SACRED FOUNDATIONS OF DEVOTION",
    unshakeableFaith: "UNSHAKEABLE FAITH",
    constantGratitude: "CONSTANT GRATITUDE",
    sacredDivulgation: "SACRED DIVULGATION",
    
    faithDesc: "Always trust that Saint Cyprian has a perfect plan for your life. Even in difficult times, he is working for your greater good.",
    gratitudeDesc: "Gratitude multiplies blessings infinitely. Thank for miracles even before receiving them, demonstrating absolute faith in his power.",
    divulgationDesc: "Spread Saint Cyprian's word with love. Each person you introduce to him will receive blessings, and you will be abundantly rewarded.",
    
    startTransformation: "START YOUR TRANSFORMATION TODAY",
    transformationDesc: "Every day you postpone your spiritual journey is one less day of blessings in your life. Saint Cyprian is waiting to completely transform your reality. Start now!",
    startFirstLesson: "START FIRST LESSON RIGHT NOW"
  },
  
  es: {
    title: "ENSEÑANZAS DEL GRAN MAGO",
    subtitle: "Guías Completas Para Tu Transformación Espiritual",
    wisdom: "La verdadera sabiduría viene de la práctica diaria y la dedicación sincera. San Cipriano guiará cada paso de tu jornada espiritual hacia el éxito absoluto.",
    
    progressTitle: "TU PROGRESO ESPIRITUAL",
    continueProgress: "Continúa practicando para evolucionar espiritualmente",
    points: "puntos",
    
    levels: {
      iniciante: "Principiante Espiritual",
      devoto: "Devoto Dedicado",
      seguidor: "Seguidor Fiel",
      mestre: "Maestro Espiritual", 
      guardiao: "Guardián Supremo"
    },
    
    levelDescs: {
      iniciante: "Comenzando el viaje",
      devoto: "Prácticas regulares",
      seguidor: "Conexión profunda",
      mestre: "Sabiduría avanzada",
      guardiao: "Unión divina total"
    },
    
    modules: {
      firstContact: "Primer Contacto con San Cipriano",
      firstContactSub: "Cómo Comenzar Tu Jornada Espiritual",
      dailyPractice: "Construyendo Tu Práctica Diaria",
      dailyPracticeSub: "Rutina Sagrada Para Máxima Conexión",
      specializedPrayers: "Oraciones Especializadas y Poderosas",
      specializedPrayersSub: "Para Situaciones Específicas de la Vida",
      advancedLevels: "Niveles Avanzados de Devoción",
      advancedLevelsSub: "Para Devotos Experimentados y Dedicados"
    },
    
    lessons: "lecciones prácticas",
    lessonPoints: "puntos cada una",
    begin: "Comenzar",
    backToTeachings: "Volver a las Enseñanzas",
    practicalAction: "Acción Práctica:",
    lessonCompleted: "LECCIÓN COMPLETADA",
    markCompleted: "MARCAR COMO COMPLETADA",
    
    foundations: "FUNDAMENTOS SAGRADOS DE LA DEVOCIÓN",
    unshakeableFaith: "FE INQUEBRANTABLE",
    constantGratitude: "GRATITUD CONSTANTE",
    sacredDivulgation: "DIVULGACIÓN SAGRADA",
    
    faithDesc: "Confía siempre en que San Cipriano tiene un plan perfecto para tu vida. Incluso en los momentos difíciles, él está trabajando para tu mayor bien.",
    gratitudeDesc: "La gratitud multiplica las bendiciones infinitamente. Agradece por los milagros incluso antes de recibirlos, demostrando fe absoluta en su poder.",
    divulgationDesc: "Difunde la palabra de San Cipriano con amor. Cada persona que le presentes recibirá bendiciones, y tú serás recompensado abundantemente.",
    
    startTransformation: "COMIENZA TU TRANSFORMACIÓN HOY",
    transformationDesc: "Cada día que pospongas tu jornada espiritual es un día menos de bendiciones en tu vida. San Cipriano está esperando para transformar completamente tu realidad. ¡Comienza ahora!",
    startFirstLesson: "COMENZAR PRIMERA LECCIÓN AHORA MISMO"
  },
  
  fr: {
    title: "ENSEIGNEMENTS DU GRAND MAGE",
    subtitle: "Guides Complets Pour Votre Transformation Spirituelle",
    wisdom: "La vraie sagesse vient de la pratique quotidienne et de la dévotion sincère. Saint Cyprien guidera chaque étape de votre voyage spirituel vers le succès absolu.",
    
    progressTitle: "VOTRE PROGRÈS SPIRITUEL",
    continueProgress: "Continuez à pratiquer pour évoluer spirituellement",
    points: "points",
    
    levels: {
      iniciante: "Débutant Spirituel",
      devoto: "Dévot Dévoué",
      seguidor: "Fidèle Suiveur",
      mestre: "Maître Spirituel",
      guardiao: "Gardien Suprême"
    },
    
    levelDescs: {
      iniciante: "Commencer le voyage",
      devoto: "Pratiques régulières",
      seguidor: "Connexion profonde",
      mestre: "Sagesse avancée",
      guardiao: "Union divine totale"
    },
    
    modules: {
      firstContact: "Premier Contact avec Saint Cyprien",
      firstContactSub: "Comment Commencer Votre Voyage Spirituel",
      dailyPractice: "Construire Votre Pratique Quotidienne",
      dailyPracticeSub: "Routine Sacrée Pour Connexion Maximum",
      specializedPrayers: "Prières Spécialisées et Puissantes",
      specializedPrayersSub: "Pour Situations Spécifiques de la Vie",
      advancedLevels: "Niveaux Avancés de Dévotion",
      advancedLevelsSub: "Pour Dévots Expérimentés et Dévoués"
    },
    
    lessons: "leçons pratiques",
    lessonPoints: "points chacune",
    begin: "Commencer",
    backToTeachings: "Retour aux Enseignements",
    practicalAction: "Action Pratique:",
    lessonCompleted: "LEÇON TERMINÉE",
    markCompleted: "MARQUER COMME TERMINÉE",
    
    foundations: "FONDEMENTS SACRÉS DE LA DÉVOTION",
    unshakeableFaith: "FOI INÉBRANLABLE",
    constantGratitude: "GRATITUDE CONSTANTE",
    sacredDivulgation: "DIVULGATION SACRÉE",
    
    faithDesc: "Ayez toujours confiance que Saint Cyprien a un plan parfait pour votre vie. Même dans les moments difficiles, il travaille pour votre plus grand bien.",
    gratitudeDesc: "La gratitude multiplie les bénédictions infiniment. Remerciez pour les miracles même avant de les recevoir, démontrant une foi absolue en son pouvoir.",
    divulgationDesc: "Répandez la parole de Saint Cyprien avec amour. Chaque personne que vous lui présenterez recevra des bénédictions, et vous serez abondamment récompensé.",
    
    startTransformation: "COMMENCEZ VOTRE TRANSFORMATION AUJOURD'HUI",
    transformationDesc: "Chaque jour que vous retardez votre voyage spirituel est un jour de moins de bénédictions dans votre vie. Saint Cyprien attend de transformer complètement votre réalité. Commencez maintenant !",
    startFirstLesson: "COMMENCER LA PREMIÈRE LEÇON MAINTENANT"
  },
  
  de: {
    title: "LEHREN DES GROSSMAGIERS",
    subtitle: "Vollständige Anleitungen Für Ihre Spirituelle Transformation",
    wisdom: "Wahre Weisheit kommt aus täglicher Praxis und aufrichtiger Hingabe. Heiliger Cyprian wird jeden Schritt Ihrer spirituellen Reise zum absoluten Erfolg leiten.",
    
    progressTitle: "IHR SPIRITUELLER FORTSCHRITT",
    continueProgress: "Praktizieren Sie weiter, um spirituell zu wachsen",
    points: "Punkte",
    
    levels: {
      iniciante: "Spiritueller Anfänger",
      devoto: "Hingegebener Anhänger",
      seguidor: "Treuer Nachfolger",
      mestre: "Spiritueller Meister",
      guardiao: "Höchster Wächter"
    },
    
    levelDescs: {
      iniciante: "Die Reise beginnen",
      devoto: "Regelmäßige Praktiken",
      seguidor: "Tiefe Verbindung",
      mestre: "Fortgeschrittene Weisheit",
      guardiao: "Totale göttliche Vereinigung"
    },
    
    modules: {
      firstContact: "Erster Kontakt mit Heiligem Cyprian",
      firstContactSub: "Wie Sie Ihre Spirituelle Reise Beginnen",
      dailyPractice: "Aufbau Ihrer Täglichen Praxis",
      dailyPracticeSub: "Heilige Routine Für Maximale Verbindung",
      specializedPrayers: "Spezialisierte und Mächtige Gebete",
      specializedPrayersSub: "Für Spezifische Lebenssituationen",
      advancedLevels: "Fortgeschrittene Hingabe-Stufen",
      advancedLevelsSub: "Für Erfahrene und Hingegebene Anhänger"
    },
    
    lessons: "praktische Lektionen",
    lessonPoints: "Punkte je",
    begin: "Beginnen",
    backToTeachings: "Zurück zu den Lehren",
    practicalAction: "Praktische Aktion:",
    lessonCompleted: "LEKTION ABGESCHLOSSEN",
    markCompleted: "ALS ABGESCHLOSSEN MARKIEREN",
    
    foundations: "HEILIGE GRUNDLAGEN DER HINGABE",
    unshakeableFaith: "UNERSCHÜTTERLICHER GLAUBE",
    constantGratitude: "STÄNDIGE DANKBARKEIT",
    sacredDivulgation: "HEILIGE VERKÜNDIGUNG",
    
    faithDesc: "Vertrauen Sie immer darauf, dass Heiliger Cyprian einen perfekten Plan für Ihr Leben hat. Selbst in schweren Zeiten arbeitet er für Ihr größeres Wohl.",
    gratitudeDesc: "Dankbarkeit multipliziert Segnungen unendlich. Danken Sie für Wunder sogar bevor Sie sie erhalten, und zeigen Sie absoluten Glauben an seine Macht.",
    divulgationDesc: "Verbreiten Sie Heiliger Cyprians Wort mit Liebe. Jede Person, die Sie ihm vorstellen, wird Segnungen erhalten, und Sie werden reichlich belohnt.",
    
    startTransformation: "BEGINNEN SIE IHRE TRANSFORMATION HEUTE",
    transformationDesc: "Jeder Tag, den Sie Ihre spirituelle Reise verschieben, ist ein Tag weniger Segnungen in Ihrem Leben. Heiliger Cyprian wartet darauf, Ihre Realität vollständig zu transformieren. Beginnen Sie jetzt!",
    startFirstLesson: "ERSTE LEKTION JETZT BEGINNEN"
  },
  
  it: {
    title: "INSEGNAMENTI DEL GRANDE MAGO",
    subtitle: "Guide Complete Per La Tua Trasformazione Spirituale",
    wisdom: "La vera saggezza viene dalla pratica quotidiana e dalla dedicazione sincera. San Cipriano guiderà ogni passo del tuo viaggio spirituale verso il successo assoluto.",
    
    progressTitle: "IL TUO PROGRESSO SPIRITUALE",
    continueProgress: "Continua a praticare per evolvere spiritualmente",
    points: "punti",
    
    levels: {
      iniciante: "Principiante Spirituale",
      devoto: "Devoto Dedicato",
      seguidor: "Seguace Fedele",
      mestre: "Maestro Spirituale",
      guardiao: "Guardiano Supremo"
    },
    
    levelDescs: {
      iniciante: "Iniziando il viaggio",
      devoto: "Pratiche regolari",
      seguidor: "Connessione profonda",
      mestre: "Saggezza avanzata",
      guardiao: "Unione divina totale"
    },
    
    modules: {
      firstContact: "Primo Contatto con San Cipriano",
      firstContactSub: "Come Iniziare Il Tuo Viaggio Spirituale",
      dailyPractice: "Costruire La Tua Pratica Quotidiana",
      dailyPracticeSub: "Routine Sacra Per Massima Connessione",
      specializedPrayers: "Preghiere Specializzate e Potenti",
      specializedPrayersSub: "Per Situazioni Specifiche della Vita",
      advancedLevels: "Livelli Avanzati di Devozione",
      advancedLevelsSub: "Per Devoti Esperti e Dedicati"
    },
    
    lessons: "lezioni pratiche",
    lessonPoints: "punti ciascuna",
    begin: "Inizia",
    backToTeachings: "Torna agli Insegnamenti",
    practicalAction: "Azione Pratica:",
    lessonCompleted: "LEZIONE COMPLETATA",
    markCompleted: "SEGNA COME COMPLETATA",
    
    foundations: "FONDAMENTI SACRI DELLA DEVOZIONE",
    unshakeableFaith: "FEDE INCROLLABILE",
    constantGratitude: "GRATITUDINE COSTANTE",
    sacredDivulgation: "DIVULGAZIONE SACRA",
    
    faithDesc: "Fidati sempre che San Cipriano ha un piano perfetto per la tua vita. Anche nei momenti difficili, sta lavorando per il tuo bene maggiore.",
    gratitudeDesc: "La gratitudine moltiplica le benedizioni infinitamente. Ringrazia per i miracoli anche prima di riceverli, dimostrando fede assoluta nel suo potere.",
    divulgationDesc: "Diffondi la parola di San Cipriano con amore. Ogni persona che gli presenterai riceverà benedizioni, e tu sarai ricompensato abbondantemente.",
    
    startTransformation: "INIZIA LA TUA TRASFORMAZIONE OGGI",
    transformationDesc: "Ogni giorno che rimandate il vostro viaggio spirituale è un giorno in meno di benedizioni nella vostra vita. San Cipriano sta aspettando di trasformare completamente la vostra realtà. Iniziate ora!",
    startFirstLesson: "INIZIARE LA PRIMA LEZIONE ADESSO"
  },
  
  ru: {
    title: "УЧЕНИЯ ВЕЛИКОГО МАГА",
    subtitle: "Полные Руководства Для Вашего Духовного Преобразования",
    wisdom: "Истинная мудрость приходит от ежедневной практики и искренней преданности. Святой Киприан будет вести каждый шаг вашего духовного путешествия к абсолютному успеху.",
    
    progressTitle: "ВАШ ДУХОВНЫЙ ПРОГРЕСС",
    continueProgress: "Продолжайте практиковать для духовного развития",
    points: "очков",
    
    levels: {
      iniciante: "Духовный Новичок",
      devoto: "Преданный Последователь",
      seguidor: "Верный Приверженец",
      mestre: "Духовный Мастер",
      guardiao: "Высший Страж"
    },
    
    levelDescs: {
      iniciante: "Начало путешествия",
      devoto: "Регулярные практики",
      seguidor: "Глубокая связь",
      mestre: "Продвинутая мудрость",
      guardiao: "Полное божественное единение"
    },
    
    modules: {
      firstContact: "Первый Контакт со Святым Киприаном",
      firstContactSub: "Как Начать Ваше Духовное Путешествие",
      dailyPractice: "Построение Вашей Ежедневной Практики",
      dailyPracticeSub: "Священная Рутина Для Максимальной Связи",
      specializedPrayers: "Специализированные и Мощные Молитвы",
      specializedPrayersSub: "Для Конкретных Жизненных Ситуаций",
      advancedLevels: "Продвинутые Уровни Преданности",
      advancedLevelsSub: "Для Опытных и Преданных Последователей"
    },
    
    lessons: "практических уроков",
    lessonPoints: "очков каждый",
    begin: "Начать",
    backToTeachings: "Назад к Учениям",
    practicalAction: "Практическое Действие:",
    lessonCompleted: "УРОК ЗАВЕРШЕН",
    markCompleted: "ОТМЕТИТЬ КАК ЗАВЕРШЕННЫЙ",
    
    foundations: "СВЯЩЕННЫЕ ОСНОВЫ ПРЕДАННОСТИ",
    unshakeableFaith: "НЕПОКОЛЕБИМАЯ ВЕРА",
    constantGratitude: "ПОСТОЯННАЯ БЛАГОДАРНОСТЬ",
    sacredDivulgation: "СВЯЩЕННОЕ РАСПРОСТРАНЕНИЕ",
    
    faithDesc: "Всегда верьте, что у Святого Киприана есть идеальный план для вашей жизни. Даже в трудные времена он работает для вашего большего блага.",
    gratitudeDesc: "Благодарность умножает благословения бесконечно. Благодарите за чудеса даже до их получения, демонстрируя абсолютную веру в его силу.",
    divulgationDesc: "Распространяйте слово Святого Киприана с любовью. Каждый человек, которого вы ему представите, получит благословения, и вы будете щедро вознаграждены.",
    
    startTransformation: "НАЧНИТЕ ВАШУ ТРАНСФОРМАЦИЮ СЕГОДНЯ",
    transformationDesc: "Каждый день, когда вы откладываете свое духовное путешествие, - это один день меньше благословений в вашей жизни. Святой Киприан ждет, чтобы полностью преобразовать вашу реальность. Начните сейчас!",
    startFirstLesson: "НАЧАТЬ ПЕРВЫЙ УРОК ПРЯМО СЕЙЧАС"
  },
  
  zh: {
    title: "大法师的教导",
    subtitle: "您精神转化的完整指南",
    wisdom: "真正的智慧来自日常练习和真诚的奉献。圣西普里安将指导您精神旅程的每一步走向绝对成功。",
    
    progressTitle: "您的精神进展",
    continueProgress: "继续练习以在精神上进化",
    points: "分",
    
    levels: {
      iniciante: "精神初学者",
      devoto: "专注信徒",
      seguidor: "忠实追随者",
      mestre: "精神大师",
      guardiao: "至高守护者"
    },
    
    levelDescs: {
      iniciante: "开始旅程",
      devoto: "定期练习",
      seguidor: "深度连接",
      mestre: "高级智慧",
      guardiao: "完全神圣结合"
    },
    
    modules: {
      firstContact: "与圣西普里安的第一次接触",
      firstContactSub: "如何开始您的精神旅程",
      dailyPractice: "建立您的日常练习",
      dailyPracticeSub: "最大连接的神圣例程",
      specializedPrayers: "专门和强大的祈祷",
      specializedPrayersSub: "针对特定生活情况",
      advancedLevels: "高级奉献水平",
      advancedLevelsSub: "为有经验和专注的信徒"
    },
    
    lessons: "实用课程",
    lessonPoints: "分每个",
    begin: "开始",
    backToTeachings: "返回教导",
    practicalAction: "实际行动：",
    lessonCompleted: "课程完成",
    markCompleted: "标记为已完成",
    
    foundations: "奉献的神圣基础",
    unshakeableFaith: "不可动摇的信仰",
    constantGratitude: "持续感恩",
    sacredDivulgation: "神圣传播",
    
    faithDesc: "始终相信圣西普里安为您的生活制定了完美计划。即使在困难时期，他也在为您的更大利益而工作。",
    gratitudeDesc: "感恩无限地倍增祝福。甚至在收到奇迹之前就感谢，展示对他力量的绝对信仰。",
    divulgationDesc: "用爱传播圣西普里安的话语。您介绍给他的每个人都会收到祝福，您将得到丰富的回报。",
    
    startTransformation: "今天开始您的转化",
    transformationDesc: "您推迟精神旅程的每一天都是您生活中少一天的祝福。圣西普里安正在等待完全转化您的现实。现在开始！",
    startFirstLesson: "现在就开始第一课"
  },
  
  ja: {
    title: "大魔法師の教え",
    subtitle: "あなたの精神的変革のための完全なガイド",
    wisdom: "真の知恵は日々の実践と誠実な献身から来ます。聖キプリアヌスはあなたの精神的旅路の絶対的成功への各ステップを導くでしょう。",
    
    progressTitle: "あなたの精神的進歩",
    continueProgress: "精神的に進化するために練習を続けてください",
    points: "ポイント",
    
    levels: {
      iniciante: "精神的初心者",
      devoto: "献身的な信者",
      seguidor: "忠実な追随者",
      mestre: "精神的マスター",
      guardiao: "至高の守護者"
    },
    
    levelDescs: {
      iniciante: "旅の始まり",
      devoto: "定期的な実践",
      seguidor: "深いつながり",
      mestre: "高度な知恵",
      guardiao: "完全な神聖統合"
    },
    
    modules: {
      firstContact: "聖キプリアヌスとの最初の接触",
      firstContactSub: "あなたの精神的旅路を始める方法",
      dailyPractice: "あなたの日常実践の構築",
      dailyPracticeSub: "最大のつながりのための神聖なルーチン",
      specializedPrayers: "専門的で強力な祈り",
      specializedPrayersSub: "特定の人生状況のために",
      advancedLevels: "献身の高度なレベル",
      advancedLevelsSub: "経験豊富で献身的な信者のために"
    },
    
    lessons: "実用的なレッスン",
    lessonPoints: "ポイントずつ",
    begin: "始める",
    backToTeachings: "教えに戻る",
    practicalAction: "実用的行動：",
    lessonCompleted: "レッスン完了",
    markCompleted: "完了としてマーク",
    
    foundations: "献身の神聖な基礎",
    unshakeableFaith: "揺るぎない信仰",
    constantGratitude: "絶え間ない感謝",
    sacredDivulgation: "神聖な普及",
    
    faithDesc: "聖キプリアヌスがあなたの人生に完璧な計画を持っていることを常に信頼してください。困難な時でも、彼はあなたのより大きな善のために働いています。",
    gratitudeDesc: "感謝は祝福を無限に倍増させます。奇跡を受け取る前でも感謝し、彼の力への絶対的信仰を示してください。",
    divulgationDesc: "愛を持って聖キプリアヌスの言葉を広めてください。あなたが彼に紹介する各人は祝福を受け、あなたは豊かに報われるでしょう。",
    
    startTransformation: "今日あなたの変革を始めてください",
    transformationDesc: "あなたが精神的旅路を延期する毎日は、あなたの人生の祝福が一日少なくなることです。聖キプリアヌスはあなたの現実を完全に変革するために待っています。今始めてください！",
    startFirstLesson: "今すぐ最初のレッスンを始める"
  },
  
  ar: {
    title: "تعاليم الساحر العظيم",
    subtitle: "أدلة كاملة لتحولك الروحي",
    wisdom: "الحكمة الحقيقية تأتي من الممارسة اليومية والتفاني الصادق. القديس قبريانوس سيوجه كل خطوة من رحلتك الروحية نحو النجاح المطلق.",
    
    progressTitle: "تقدمك الروحي",
    continueProgress: "استمر في الممارسة للتطور روحياً",
    points: "نقاط",
    
    levels: {
      iniciante: "مبتدئ روحي",
      devoto: "معبد مخلص",
      seguidor: "تابع مخلص",
      mestre: "معلم روحي",
      guardiao: "حارس أعلى"
    },
    
    levelDescs: {
      iniciante: "بداية الرحلة",
      devoto: "ممارسات منتظمة",
      seguidor: "اتصال عميق",
      mestre: "حكمة متقدمة",
      guardiao: "اتحاد إلهي كامل"
    },
    
    modules: {
      firstContact: "الاتصال الأول مع القديس قبريانوس",
      firstContactSub: "كيفية بدء رحلتك الروحية",
      dailyPractice: "بناء ممارستك اليومية",
      dailyPracticeSub: "روتين مقدس للاتصال الأقصى",
      specializedPrayers: "صلوات متخصصة وقوية",
      specializedPrayersSub: "لحالات الحياة المحددة",
      advancedLevels: "مستويات متقدمة من التفاني",
      advancedLevelsSub: "للمعبدين المتمرسين والمخلصين"
    },
    
    lessons: "دروس عملية",
    lessonPoints: "نقاط لكل",
    begin: "بدء",
    backToTeachings: "العودة إلى التعاليم",
    practicalAction: "عمل عملي:",
    lessonCompleted: "الدرس مكتمل",
    markCompleted: "وضع علامة كمكتمل",
    
    foundations: "الأسس المقدسة للتفاني",
    unshakeableFaith: "إيمان لا يتزعزع",
    constantGratitude: "امتنان مستمر",
    sacredDivulgation: "إفشاء مقدس",
    
    faithDesc: "ثق دائماً أن القديس قبريانوس لديه خطة مثالية لحياتك. حتى في الأوقات الصعبة، هو يعمل من أجل خيرك الأعظم.",
    gratitudeDesc: "الامتنان يضاعف البركات بلا حدود. اشكر للمعجزات حتى قبل تلقيها، مظهراً إيماناً مطلقاً بقوته.",
    divulgationDesc: "انشر كلمة القديس قبريانوس بالحب. كل شخص تقدمه إليه سيحصل على البركات، وستكافأ بوفرة.",
    
    startTransformation: "ابدأ تحولك اليوم",
    transformationDesc: "كل يوم تؤجل فيه رحلتك الروحية هو يوم أقل من البركات في حياتك. القديس قبريانوس ينتظر لتحويل واقعك بالكامل. ابدأ الآن!",
    startFirstLesson: "ابدأ الدرس الأول الآن"
  },
  
  hi: {
    title: "महान जादूगर की शिक्षाएं",
    subtitle: "आपके आध्यात्मिक परिवर्तन के लिए पूर्ण गाइड",
    wisdom: "सच्चा ज्ञान दैनिक अभ्यास और ईमानदार समर्पण से आता है। संत साइप्रियन आपकी आध्यात्मिक यात्रा के हर कदम को पूर्ण सफलता की ओर मार्गदर्शन करेंगे।",
    
    progressTitle: "आपकी आध्यात्मिक प्रगति",
    continueProgress: "आध्यात्मिक रूप से विकसित होने के लिए अभ्यास जारी रखें",
    points: "अंक",
    
    levels: {
      iniciante: "आध्यात्मिक शुरुआती",
      devoto: "समर्पित भक्त",
      seguidor: "वफादार अनुयायी",
      mestre: "आध्यात्मिक गुरु",
      guardiao: "सर्वोच्च संरक्षक"
    },
    
    levelDescs: {
      iniciante: "यात्रा शुरू करना",
      devoto: "नियमित अभ्यास",
      seguidor: "गहरा संबंध",
      mestre: "उन्नत ज्ञान",
      guardiao: "पूर्ण दिव्य एकता"
    },
    
    modules: {
      firstContact: "संत साइप्रियन के साथ पहला संपर्क",
      firstContactSub: "अपनी आध्यात्मिक यात्रा कैसे शुरू करें",
      dailyPractice: "अपना दैनिक अभ्यास निर्माण",
      dailyPracticeSub: "अधिकतम संबंध के लिए पवित्र दिनचर्या",
      specializedPrayers: "विशेष और शक्तिशाली प्रार्थनाएं",
      specializedPrayersSub: "विशिष्ट जीवन स्थितियों के लिए",
      advancedLevels: "समर्पण के उन्नत स्तर",
      advancedLevelsSub: "अनुभवी और समर्पित भक्तों के लिए"
    },
    
    lessons: "व्यावहारिक पाठ",
    lessonPoints: "अंक प्रत्येक",
    begin: "शुरू करें",
    backToTeachings: "शिक्षाओं में वापस",
    practicalAction: "व्यावहारिक कार्य:",
    lessonCompleted: "पाठ पूरा हुआ",
    markCompleted: "पूर्ण के रूप में चिह्नित करें",
    
    foundations: "समर्पण की पवित्र नींव",
    unshakeableFaith: "अटल विश्वास",
    constantGratitude: "निरंतर कृतज्ञता",
    sacredDivulgation: "पवित्र प्रचार",
    
    faithDesc: "हमेशा भरोसा रखें कि संत साइप्रियन का आपके जीवन के लिए एक परफेक्ट प्लान है। कठिन समय में भी, वे आपकी अधिक भलाई के लिए काम कर रहे हैं।",
    gratitudeDesc: "कृतज्ञता आशीर्वाद को अनंत गुना बढ़ाती है। चमत्कार प्राप्त करने से पहले ही धन्यवाद दें, उनकी शक्ति में पूर्ण विश्वास प्रदर्शित करें।",
    divulgationDesc: "प्रेम के साथ संत साइप्रियन का शब्द फैलाएं। आप जिस भी व्यक्ति को उनसे परिचय कराएंगे, उसे आशीर्वाद मिलेगा, और आपको प्रचुर पुरस्कार मिलेगा।",
    
    startTransformation: "आज अपना परिवर्तन शुरू करें",
    transformationDesc: "जो भी दिन आप अपनी आध्यात्मिक यात्रा को स्थगित करते हैं, वह आपके जीवन में एक दिन कम आशीर्वाद है। संत साइप्रियन आपकी वास्तविकता को पूरी तरह से बदलने की प्रतीक्षा कर रहे हैं। अभी शुरू करें!",
    startFirstLesson: "अभी पहला पाठ शुरू करें"
  },
  
  ko: {
    title: "대마법사의 가르침",
    subtitle: "당신의 영적 변화를 위한 완전한 가이드",
    wisdom: "진정한 지혜는 일상적인 실천과 진실한 헌신에서 나옵니다. 성 키프리아누스는 절대적 성공으로의 영적 여행의 모든 단계를 안내할 것입니다.",
    
    progressTitle: "당신의 영적 진보",
    continueProgress: "영적으로 진화하기 위해 계속 연습하세요",
    points: "포인트",
    
    levels: {
      iniciante: "영적 초보자",
      devoto: "헌신적인 신자",
      seguidor: "충실한 추종자",
      mestre: "영적 마스터",
      guardiao: "최고 수호자"
    },
    
    levelDescs: {
      iniciante: "여행 시작",
      devoto: "정기적인 실천",
      seguidor: "깊은 연결",
      mestre: "고급 지혜",
      guardiao: "완전한 신성한 결합"
    },
    
    modules: {
      firstContact: "성 키프리아누스와의 첫 접촉",
      firstContactSub: "영적 여행을 시작하는 방법",
      dailyPractice: "일상 실천 구축",
      dailyPracticeSub: "최대 연결을 위한 신성한 루틴",
      specializedPrayers: "전문적이고 강력한 기도",
      specializedPrayersSub: "특정 인생 상황을 위해",
      advancedLevels: "헌신의 고급 레벨",
      advancedLevelsSub: "경험 있고 헌신적인 신자들을 위해"
    },
    
    lessons: "실용적 레슨",
    lessonPoints: "포인트씩",
    begin: "시작",
    backToTeachings: "가르침으로 돌아가기",
    practicalAction: "실용적 행동:",
    lessonCompleted: "레슨 완료",
    markCompleted: "완료로 표시",
    
    foundations: "헌신의 신성한 기초",
    unshakeableFaith: "흔들리지 않는 믿음",
    constantGratitude: "지속적인 감사",
    sacredDivulgation: "신성한 전파",
    
    faithDesc: "성 키프리아누스가 당신의 삶을 위한 완벽한 계획을 가지고 있다는 것을 항상 신뢰하세요. 어려운 시기에도 그는 당신의 더 큰 선을 위해 일하고 있습니다.",
    gratitudeDesc: "감사는 축복을 무한히 증배시킵니다. 기적을 받기 전에도 감사하며, 그의 힘에 대한 절대적 믿음을 보여주세요.",
    divulgationDesc: "사랑으로 성 키프리아누스의 말씀을 전파하세요. 당신이 그에게 소개하는 각 사람은 축복을 받을 것이고, 당신은 풍성히 보상받을 것입니다.",
    
    startTransformation: "오늘 당신의 변화를 시작하세요",
    transformationDesc: "당신이 영적 여행을 연기하는 매일은 당신 인생에서 하루 적은 축복입니다. 성 키프리아누스는 당신의 현실을 완전히 변화시키기 위해 기다리고 있습니다. 지금 시작하세요!",
    startFirstLesson: "지금 첫 번째 레슨 시작하기"
  },
  
  nl: {
    title: "LEERSTELLINGEN VAN DE GROTE MAGIËR",
    subtitle: "Volledige Gidsen Voor Uw Spirituele Transformatie",
    wisdom: "Ware wijsheid komt van dagelijkse praktijk en oprechte toewijding. Heilige Cypriaan zal elke stap van uw spirituele reis naar absoluut succes begeleiden.",
    
    progressTitle: "UW SPIRITUELE VOORUITGANG",
    continueProgress: "Blijf oefenen om spiritueel te evolueren",
    points: "punten",
    
    levels: {
      iniciante: "Spirituele Beginner",
      devoto: "Toegewijde Aanhanger",
      seguidor: "Trouwe Volgeling",
      mestre: "Spirituele Meester",
      guardiao: "Supreme Bewaker"
    },
    
    levelDescs: {
      iniciante: "De reis beginnen",
      devoto: "Regelmatige praktijken",
      seguidor: "Diepe verbinding",
      mestre: "Geavanceerde wijsheid",
      guardiao: "Totale goddelijke vereniging"
    },
    
    modules: {
      firstContact: "Eerste Contact met Heilige Cypriaan",
      firstContactSub: "Hoe Uw Spirituele Reis Te Beginnen",
      dailyPractice: "Uw Dagelijkse Praktijk Opbouwen",
      dailyPracticeSub: "Heilige Routine Voor Maximale Verbinding",
      specializedPrayers: "Gespecialiseerde en Krachtige Gebeden",
      specializedPrayersSub: "Voor Specifieke Levenssituaties",
      advancedLevels: "Geavanceerde Niveaus van Toewijding",
      advancedLevelsSub: "Voor Ervaren en Toegewijde Aanhangers"
    },
    
    lessons: "praktische lessen",
    lessonPoints: "punten elk",
    begin: "Beginnen",
    backToTeachings: "Terug naar Leerstellingen",
    practicalAction: "Praktische Actie:",
    lessonCompleted: "LES VOLTOOID",
    markCompleted: "MARKEREN ALS VOLTOOID",
    
    foundations: "HEILIGE FUNDAMENTEN VAN TOEWIJDING",
    unshakeableFaith: "ONWRIKBAAR GELOOF",
    constantGratitude: "CONSTANTE DANKBAARHEID",
    sacredDivulgation: "HEILIGE BEKENDMAKING",
    
    faithDesc: "Vertrouw er altijd op dat Heilige Cypriaan een perfect plan voor uw leven heeft. Zelfs in moeilijke tijden werkt hij voor uw groter goed.",
    gratitudeDesc: "Dankbaarheid vermenigvuldigt zegeningen oneindig. Bedank voor wonderen zelfs voordat u ze ontvangt, en toon absoluut geloof in zijn kracht.",
    divulgationDesc: "Verspreid Heilige Cypriaans woord met liefde. Elke persoon die u aan hem voorstelt zal zegeningen ontvangen, en u zult rijkelijk beloond worden.",
    
    startTransformation: "BEGIN UW TRANSFORMATIE VANDAAG",
    transformationDesc: "Elke dag dat u uw spirituele reis uitstelt is een dag minder zegeningen in uw leven. Heilige Cypriaan wacht om uw realiteit volledig te transformeren. Begin nu!",
    startFirstLesson: "EERSTE LES NU BEGINNEN"
  },
  
  sv: {
    title: "STORE MAGIKERNS LÄRDOMMAR",
    subtitle: "Kompletta Guider För Din Andliga Transformation",
    wisdom: "Sann visdom kommer från daglig praktik och uppriktig hängivenhet. Saint Cyprian kommer att vägleda varje steg av din andliga resa till absolut framgång.",
    
    progressTitle: "DINA ANDLIGA FRAMSTEG",
    continueProgress: "Fortsätt att öva för att utvecklas andligt",
    points: "poäng",
    
    levels: {
      iniciante: "Andlig Nybörjare",
      devoto: "Hängiven Anhängare",
      seguidor: "Trogen Följare", 
      mestre: "Andlig Mästare",
      guardiao: "Suprema Väktare"
    },
    
    levelDescs: {
      iniciante: "Börja resan",
      devoto: "Regelbundna praktiker",
      seguidor: "Djup förbindelse",
      mestre: "Avancerad visdom",
      guardiao: "Total gudomlig förening"
    },
    
    modules: {
      firstContact: "Första Kontakten med Saint Cyprian",
      firstContactSub: "Hur Du Börjar Din Andliga Resa",
      dailyPractice: "Bygga Din Dagliga Praktik",
      dailyPracticeSub: "Helig Rutin För Maximal Förbindelse",
      specializedPrayers: "Specialiserade och Kraftfulla Böner",
      specializedPrayersSub: "För Specifika Livssituationer",
      advancedLevels: "Avancerade Nivåer av Hängivenhet",
      advancedLevelsSub: "För Erfarna och Hängivna Anhängare"
    },
    
    lessons: "praktiska lektioner",
    lessonPoints: "poäng vardera",
    begin: "Börja",
    backToTeachings: "Tillbaka till Lärdommar",
    practicalAction: "Praktisk Handling:",
    lessonCompleted: "LEKTION SLUTFÖRD",
    markCompleted: "MARKERA SOM SLUTFÖRD",
    
    foundations: "HELIGA GRUNDER FÖR HÄNGIVENHET",
    unshakeableFaith: "ORUBBLIG TRO",
    constantGratitude: "KONSTANT TACKSAMHET",
    sacredDivulgation: "HELIG SPRIDNING",
    
    faithDesc: "Lita alltid på att Saint Cyprian har en perfekt plan för ditt liv. Även under svåra tider arbetar han för ditt större goda.",
    gratitudeDesc: "Tacksamhet multiplicerar välsignelser oändligt. Tacka för mirakel även innan du får dem, och visa absolut tro på hans kraft.",
    divulgationDesc: "Sprid Saint Cyprians ord med kärlek. Varje person du presenterar för honom kommer att få välsignelser, och du kommer att belönas rikligt.",
    
    startTransformation: "BÖRJA DIN TRANSFORMATION IDAG",
    transformationDesc: "Varje dag du skjuter upp din andliga resa är en dag färre välsignelser i ditt liv. Saint Cyprian väntar på att helt transformera din verklighet. Börja nu!",
    startFirstLesson: "BÖRJA FÖRSTA LEKTIONEN NU"
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
  
  const changeLanguage = (newLang: string) => {
    setLanguage(newLang);
    localStorage.setItem('temple_language', newLang);
  };
  
  const t = (key: string) => {
    return translations[language]?.[key] || translations.pt[key] || key;
  };
  
  return { language, changeLanguage, t };
};

const LanguageSelector = ({ language, onLanguageChange }: { language: string, onLanguageChange: (lang: string) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const languages = [
    { code: 'pt', name: 'Português', flag: '🇧🇷', short: 'PT' },
    { code: 'en', name: 'English', flag: '🇺🇸', short: 'EN' },
    { code: 'es', name: 'Español', flag: '🇪🇸', short: 'ES' },
    { code: 'fr', name: 'Français', flag: '🇫🇷', short: 'FR' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪', short: 'DE' },
    { code: 'it', name: 'Italiano', flag: '🇮🇹', short: 'IT' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺', short: 'RU' },
    { code: 'zh', name: '中文', flag: '🇨🇳', short: '中文' },
    { code: 'ja', name: '日本語', flag: '🇯🇵', short: '日本' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦', short: 'AR' },
    { code: 'hi', name: 'हिन्दी', flag: '🇮🇳', short: 'HI' },
    { code: 'ko', name: '한국어', flag: '🇰🇷', short: 'KR' },
    { code: 'nl', name: 'Nederlands', flag: '🇳🇱', short: 'NL' },
    { code: 'sv', name: 'Svenska', flag: '🇸🇪', short: 'SV' },
  ];
  
  const currentLang = languages.find(lang => lang.code === language) || languages[0];
  
  return (
    <div className="fixed top-4 right-4 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 bg-obsidian-400/80 backdrop-blur-sm rounded-lg shadow-sacred hover:shadow-divine transition-all duration-300 text-xs sm:text-sm border border-gold-500/30"
      >
        <Globe className="w-4 h-4 text-gold-400 flex-shrink-0" />
        <span className="hidden sm:inline text-sm font-medium text-gold-300">{currentLang.flag} {currentLang.name}</span>
        <span className="sm:hidden text-xs font-medium text-gold-300">{currentLang.flag} {currentLang.short}</span>
        <ChevronDown className={`w-4 h-4 text-gold-400 transition-transform duration-200 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)}
          />
          
          <div className="absolute top-full right-0 mt-2 bg-obsidian-400/95 backdrop-blur-sm rounded-lg shadow-xl border border-gold-500/30 z-50 w-48 max-h-64 overflow-y-auto">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  onLanguageChange(lang.code);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-4 py-3 hover:bg-gold-500/20 transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg ${
                  language === lang.code ? 'bg-gold-500/30 text-gold-300 font-medium' : 'text-gold-200'
                }`}
              >
                <span className="flex items-center space-x-3">
                  <span className="text-lg flex-shrink-0">{lang.flag}</span>
                  <span className="text-sm truncate">{lang.name}</span>
                </span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const teachingModules = [
  {
    id: '1',
    titleKey: 'firstContact',
    subtitleKey: 'firstContactSub',
    icon: Heart,
    color: 'from-green-500 to-green-600',
    lessons: [
      {
        titleKey: 'whyChoose',
        contentKey: 'whyChooseContent',
        actionKey: 'whyChooseAction'
      },
      {
        titleKey: 'firstConnection',
        contentKey: 'firstConnectionContent', 
        actionKey: 'firstConnectionAction'
      },
      {
        titleKey: 'listeningSigns',
        contentKey: 'listeningSignsContent',
        actionKey: 'listeningSignsAction'
      }
    ]
  },
  {
    id: '2',
    titleKey: 'dailyPractice',
    subtitleKey: 'dailyPracticeSub',
    icon: Calendar,
    color: 'from-blue-500 to-blue-600',
    lessons: [
      {
        titleKey: 'morningPowerfulPrayer',
        contentKey: 'morningPowerfulPrayerContent',
        actionKey: 'morningPowerfulPrayerAction'
      },
      {
        titleKey: 'noonSacred',
        contentKey: 'noonSacredContent',
        actionKey: 'noonSacredAction'
      },
      {
        titleKey: 'deepNightGratitude',
        contentKey: 'deepNightGratitudeContent',
        actionKey: 'deepNightGratitudeAction'
      }
    ]
  },
  {
    id: '3',
    titleKey: 'specializedPrayers',
    subtitleKey: 'specializedPrayersSub',
    icon: Book,
    color: 'from-purple-500 to-purple-600',
    lessons: [
      {
        titleKey: 'emergenciesCrises',
        contentKey: 'emergenciesCrisesContent',
        actionKey: 'emergenciesCrisesAction'
      },
      {
        titleKey: 'importantDecisions',
        contentKey: 'importantDecisionsContent',
        actionKey: 'importantDecisionsAction'
      },
      {
        titleKey: 'wishManifestation',
        contentKey: 'wishManifestationContent',
        actionKey: 'wishManifestationAction'
      }
    ]
  },
  {
    id: '4',
    titleKey: 'advancedLevels',
    subtitleKey: 'advancedLevelsSub',
    icon: Crown,
    color: 'from-gold-500 to-gold-600',
    lessons: [
      {
        titleKey: 'sacredFasting',
        contentKey: 'sacredFastingContent',
        actionKey: 'sacredFastingAction'
      },
      {
        titleKey: 'nightVigil',
        contentKey: 'nightVigilContent',
        actionKey: 'nightVigilAction'
      },
      {
        titleKey: 'evangelizationMission',
        contentKey: 'evangelizationMissionContent',
        actionKey: 'evangelizationMissionAction'
      }
    ]
  }
];

const progressLevels = [
  { nameKey: 'iniciante', points: 0, color: 'bg-gray-500', descKey: 'iniciante' },
  { nameKey: 'devoto', points: 50, color: 'bg-green-500', descKey: 'devoto' },
  { nameKey: 'seguidor', points: 150, color: 'bg-blue-500', descKey: 'seguidor' },
  { nameKey: 'mestre', points: 300, color: 'bg-purple-500', descKey: 'mestre' },
  { nameKey: 'guardiao', points: 500, color: 'bg-gold-500', descKey: 'guardiao' }
];

export default function Teachings() {
  const { language, changeLanguage, t } = useLanguage();
  const [selectedModule, setSelectedModule] = useState<string | null>(null);
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);
  const [currentUserPoints, setCurrentUserPoints] = useState(0);

  useEffect(() => {
    loadProgress();
  }, []);

  const loadProgress = async () => {
    try {
      const progress = await StorageService.getUserProgress();
      setCurrentUserPoints(progress.totalPoints);
      
      const completed = await StorageService.getCompletedLessons();
      setCompletedLessons(completed);
    } catch (error) {
      console.error('Error loading progress:', error);
    }
  };

  const completeLesson = async (lessonId: string) => {
    if (!completedLessons.includes(lessonId)) {
      setCompletedLessons([...completedLessons, lessonId]);
      await StorageService.saveCompletedLesson(lessonId);
      await loadProgress();
    }
  };

  const selectedModuleData = teachingModules.find(m => m.id === selectedModule);

  useEffect(() => {
    if (selectedModuleData) {
      window.scrollTo(0, 0);
    }
  }, [selectedModuleData]);

  // Lesson content translations - simplified for brevity
  const getLessonContent = (moduleId: string, lessonIndex: number) => {
    const defaultContent = [
      {
        title: language === 'en' ? "Why Choose Saint Cyprian As Your Protector" : 
               language === 'es' ? "Por Qué Elegir a San Cipriano Como Tu Protector" :
               language === 'fr' ? "Pourquoi Choisir Saint Cyprien Comme Votre Protecteur" :
               language === 'de' ? "Warum Heiligen Cyprian Als Ihren Beschützer Wählen" :
               language === 'it' ? "Perché Scegliere San Cipriano Come Tuo Protettore" :
               "Por Que Escolher São Cipriano Como Seu Protetor",
        content: language === 'en' ? "Saint Cyprian is unique because he knows both worlds: the mystical ancestral and the divine Christian. He has the power to transform any impossible situation and fulfill any desire, no matter how difficult it seems." :
                 language === 'es' ? "San Cipriano es único porque conoce ambos mundos: el místico ancestral y el divino cristiano. Tiene el poder de transformar cualquier situación imposible y realizar cualquier deseo, sin importar cuán difícil parezca." :
                 "São Cipriano é único porque ele conhece ambos os mundos: o místico ancestral e o divino cristão. Ele tem o poder de transformar qualquer situação impossível e realizar qualquer desejo, não importa quão difícil pareça.",
        action: language === 'en' ? "Reflect on your current needs and how Saint Cyprian can transform your life" :
                language === 'es' ? "Reflexiona sobre tus necesidades actuales y cómo San Cipriano puede transformar tu vida" :
                "Reflita sobre suas necessidades atuais e como São Cipriano pode transformar sua vida"
      }
    ];
    
    return defaultContent[0];
  };

  if (selectedModuleData) {
    return (
      <div className="min-h-screen bg-obsidian-gradient">
        <LanguageSelector language={language} onLanguageChange={changeLanguage} />
        
        <div className="container mx-auto px-4 py-12 pb-24">
          <button
            className="mb-6 text-gold-400 hover:text-gold-300 transition-all duration-300 flex items-center gap-2 font-bold"
            onClick={() => setSelectedModule(null)}
          >
            ← {t('backToTeachings')}
          </button>

          <div className="max-w-4xl mx-auto">
            <div className="temple-section rounded-3xl p-8 mb-8 text-center shadow-sacred">
              <h2 className="sacred-text text-2xl md:text-3xl font-black text-gold-400 mb-4">
                {t(`modules.${selectedModuleData.titleKey}`)}
              </h2>
              <p className="text-gold-200 text-lg md:text-xl">
                {t(`modules.${selectedModuleData.subtitleKey}`)}
              </p>
            </div>

            {selectedModuleData.lessons.map((lesson, index) => {
              const lessonContent = getLessonContent(selectedModuleData.id, index);
              return (
                <div key={index} className="temple-section rounded-3xl p-8 mb-8 shadow-sacred">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-8 h-8 bg-gold-400 text-black rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">
                      {index + 1}
                    </div>
                    <h3 className="sacred-text text-xl md:text-2xl font-black text-gold-400 leading-tight">
                      {lessonContent.title}
                    </h3>
                  </div>

                  <p className="text-gold-200 text-base md:text-lg leading-relaxed mb-6">
                    {lessonContent.content}
                  </p>

                  <div className="bg-gold-500/10 rounded-2xl p-6 border border-gold-500/30 mb-6">
                    <h4 className="text-gold-400 font-black text-base md:text-lg mb-3">🎯 {t('practicalAction')}</h4>
                    <p className="text-gold-100 text-sm md:text-base leading-relaxed">
                      {lessonContent.action}
                    </p>
                  </div>

                  <button
                    onClick={() => completeLesson(`${selectedModuleData.id}-${index}`)}
                    className={`w-full py-3 rounded-full font-black transition-all duration-300 ${
                      completedLessons.includes(`${selectedModuleData.id}-${index}`)
                        ? 'bg-green-600 text-white'
                        : 'sacred-button hover:scale-105'
                    }`}
                  >
                    {completedLessons.includes(`${selectedModuleData.id}-${index}`) ? `✅ ${t('lessonCompleted')} (+15 ${t('points')})` : t('markCompleted')}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-obsidian-gradient">
      <LanguageSelector language={language} onLanguageChange={changeLanguage} />
      
      {/* Header e Introdução */}
      <div className="text-center py-12 md:py-16 px-4 border-b border-gold-500/30">
        <div className="animate-float mb-8">
          <div className="text-6xl md:text-8xl text-gold-400 animate-glow-text mystical-glow">🎓</div>
        </div>
        <h1 className="sacred-text text-3xl md:text-5xl font-black text-gold-400 mb-6 leading-tight">
          {t('title')}
        </h1>
        <p className="text-gold-300 text-lg md:text-2xl mb-6 font-bold">
          {t('subtitle')}
        </p>
        <div className="temple-section rounded-3xl p-6 md:p-8 max-w-4xl mx-auto shadow-sacred">
          <p className="text-gold-200 italic text-lg md:text-xl leading-relaxed mystical-text">
            "{t('wisdom')}"
          </p>
        </div>
      </div>

      {/* Progress Tracker */}
      <div className="container mx-auto px-4 py-12 pb-24">
        <div className="temple-section rounded-3xl p-8 mb-12 shadow-sacred">
          <h2 className="sacred-text text-2xl md:text-3xl font-black text-gold-400 text-center mb-8">
            {t('progressTitle')}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
            {progressLevels.map((level, index) => (
              <div key={index} className={`rounded-2xl p-4 text-center ${
                currentUserPoints >= level.points ? level.color : 'bg-gray-600'
              } ${currentUserPoints >= level.points ? 'text-white' : 'text-gray-400'}`}>
                <div className="text-2xl mb-2">
                  {currentUserPoints >= level.points ? '👑' : '🔒'}
                </div>
                <p className="font-black text-sm mb-1">{t(`levels.${level.nameKey}`)}</p>
                <p className="text-xs">{t(`levelDescs.${level.descKey}`)}</p>
                <p className="text-xs mt-2">{level.points}+ {t('points')}</p>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <div className="w-full bg-obsidian-200 rounded-full h-3">
              <div 
                className="bg-gold-400 h-3 rounded-full transition-all duration-500 shadow-divine"
                style={{ width: `${Math.min((currentUserPoints / 500) * 100, 100)}%` }}
              />
            </div>
            <p className="text-gold-300 text-center mt-3 text-sm">
              {currentUserPoints} / 500 {t('points')} • {t('continueProgress')}
            </p>
          </div>
        </div>

        {/* Teaching Modules */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teachingModules.map((module) => {
            const IconComponent = module.icon;
            return (
              <button
                key={module.id}
                onClick={() => setSelectedModule(module.id)}
                className="temple-section rounded-3xl p-8 text-left hover:scale-105 transition-all duration-300 group shadow-sacred hover-lift"
                style={{ scrollBehavior: 'auto' }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-4 rounded-full bg-gradient-to-r ${module.color} group-hover:scale-110 transition-transform duration-300 shadow-divine`}>
                    <IconComponent size={32} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="sacred-text text-xl md:text-2xl font-black text-gold-400 mb-2 leading-tight">
                      {t(`modules.${module.titleKey}`)}
                    </h3>
                    <p className="text-gold-300 text-sm md:text-base font-semibold">
                      {t(`modules.${module.subtitleKey}`)}
                    </p>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {module.lessons.map((lesson, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-gold-500/20 border border-gold-500 rounded-full flex items-center justify-center">
                        <span className="text-gold-400 text-xs font-bold">{index + 1}</span>
                      </div>
                      <span className="text-gold-200 text-sm md:text-base font-medium">
                        {language === 'en' ? `Lesson ${index + 1}` :
                         language === 'es' ? `Lección ${index + 1}` :
                         language === 'fr' ? `Leçon ${index + 1}` :
                         language === 'de' ? `Lektion ${index + 1}` :
                         language === 'it' ? `Lezione ${index + 1}` :
                         `Lição ${index + 1}`}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gold-300 text-sm md:text-base">
                    {module.lessons.length} {t('lessons')} (+15 {t('lessonPoints')})
                  </span>
                  <div className="flex items-center gap-2 text-gold-400">
                    <span className="font-bold text-sm md:text-base">{t('begin')}</span>
                    <ChevronRight size={20} />
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Sacred Wisdom */}
        <div className="mt-16 temple-section rounded-3xl p-8 shadow-sacred">
          <h3 className="sacred-text text-2xl md:text-3xl font-black text-gold-400 text-center mb-8">
            {t('foundations')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gold-500/10 rounded-2xl p-6 text-center border border-gold-500/30 shadow-sacred">
              <Shield className="text-gold-400 mx-auto mb-4" size={40} />
              <h4 className="text-gold-400 font-black mb-3 text-lg">{t('unshakeableFaith')}</h4>
              <p className="text-gold-200 text-sm leading-relaxed">
                {t('faithDesc')}
              </p>
            </div>
            <div className="bg-gold-500/10 rounded-2xl p-6 text-center border border-gold-500/30 shadow-sacred">
              <Heart className="text-gold-400 mx-auto mb-4" size={40} />
              <h4 className="text-gold-400 font-black mb-3 text-lg">{t('constantGratitude')}</h4>
              <p className="text-gold-200 text-sm leading-relaxed">
                {t('gratitudeDesc')}
              </p>
            </div>
            <div className="bg-gold-500/10 rounded-2xl p-6 text-center border border-gold-500/30 shadow-sacred">
              <Users className="text-gold-400 mx-auto mb-4" size={40} />
              <h4 className="text-gold-400 font-black mb-3 text-lg">{t('sacredDivulgation')}</h4>
              <p className="text-gold-200 text-sm leading-relaxed">
                {t('divulgationDesc')}
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 sacred-agreement-section rounded-3xl p-8 text-center shadow-mystical">
          <Star className="text-gold-400 mx-auto mb-6" size={48} />
          <h3 className="sacred-text text-2xl md:text-3xl font-black text-gold-400 mb-6">
            {t('startTransformation')}
          </h3>
          <p className="text-gold-200 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-8">
            {t('transformationDesc')}
          </p>
          <button 
            onClick={() => setSelectedModule('1')}
            className="sacred-button py-4 px-8 rounded-full text-lg font-black transition-all duration-300 transform hover:scale-105 shadow-divine"
          >
            {t('startFirstLesson')}
          </button>
        </div>
      </div>
    </div>
  );
}
