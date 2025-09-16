import { useState, useEffect } from 'react';
import { ArrowLeft, Play, Pause, CheckCircle, Shield, Diamond, Zap, Heart, Crown, Star, Globe, ChevronDown } from 'lucide-react';
import { StorageService } from '../utils/storage';

const translations = {
  pt: {
    title: "RITUAIS SAGRADOS SUPREMOS",
    subtitle: "DESPERTE SEU PODER INFINITO",
    channelPower: "CANALIZE O PODER SUPREMO",
    transformMessage: "TRANSFORME SUA VIDA AGORA MESMO",
    transformDesc: "Estes rituais sagrados já transformaram milhões de vidas pelo mundo inteiro. Escolha o seu e prepare-se para milagres extraordinários e impossíveis!",
    touchToStart: "Toque para iniciar ritual sagrado",
    start: "INICIAR",
    candles: "vela(s)",
    keepCandles: "Mantenha as {count} vela(s) acesas durante todo o ritual sagrado",
    step: "Passo",
    of: "de",
    finishRitual: "FINALIZAR RITUAL SAGRADO",
    nextStep: "PRÓXIMO PASSO SAGRADO",
    ritualComplete: "Seu ritual está completo! Os milagres de São Cipriano já começaram!",
    reciteAloud: "RECITE EM VOZ ALTA:",
    importantGuidance: "Orientação Importante:",
    guaranteedResult: "RESULTADO GARANTIDO:",
    difficulty: {
      iniciante: "Iniciante",
      intermediario: "Intermediário",
      avancado: "Avançado"
    },
    rememberAgreement: "LEMBRE-SE DO SEU ACORDO SAGRADO",
    agreementDesc: "Após cada ritual, mantenha sua devoção diária a São Cipriano e espalhe sua palavra sagrada. Quanto mais você honrar o acordo, mais poderosos e rápidos serão os resultados extraordinários!",
    prayDaily: "Ore diariamente com devoção",
    lightCandles: "Acenda velas sagradas",
    spreadWord: "Divulgue São Cipriano",
    ritualProtection: {
      name: "Ritual de Proteção Suprema",
      description: "Invoque a proteção mais poderosa de São Cipriano contra todas as energias negativas, inveja, olho gordo e adversidades. Crie um escudo impenetrável ao seu redor.",
      benefits: ["Proteção absoluta garantida", "Afasta todas as energias negativas", "Escudo espiritual permanente"],
      results: "Proteção imediata e duradoura contra todos os males conhecidos e desconhecidos",
      steps: {
        preparation: "Preparação do Espaço Sagrado",
        invocation: "Invocação do Grande Mago",
        visualization: "Visualização do Escudo Protetor",
        commitment: "Compromisso Sagrado de Devoção",
        sealing: "Agradecimento e Selamento"
      }
    },
    ritualProsperity: {
      name: "Ritual da Prosperidade Infinita",
      description: "Abra todos os caminhos para riqueza extrema e abundância sem limites em sua vida. Transforme sua situação financeira radicalmente.",
      benefits: ["Riqueza infinita garantida", "Oportunidades de ouro constantes", "Abundância em todas as áreas"],
      results: "Transformação financeira radical e definitiva em poucos dias"
    },
    ritualPower: {
      name: "Ritual do Poder Supremo",
      description: "Canalize o poder máximo de São Cipriano para transformações extraordinárias e realização de desejos impossíveis.",
      benefits: ["Poder absoluto sobre situações", "Manifestação instantânea", "Autoridade pessoal suprema"],
      results: "Poder pessoal extremo e realização de desejos impossíveis"
    }
  },
  
  en: {
    title: "SUPREME SACRED RITUALS",
    subtitle: "AWAKEN YOUR INFINITE POWER",
    channelPower: "CHANNEL THE SUPREME POWER",
    transformMessage: "TRANSFORM YOUR LIFE RIGHT NOW",
    transformDesc: "These sacred rituals have already transformed millions of lives worldwide. Choose yours and prepare for extraordinary and impossible miracles!",
    touchToStart: "Touch to start sacred ritual",
    start: "START",
    candles: "candle(s)",
    keepCandles: "Keep the {count} candle(s) lit throughout the sacred ritual",
    step: "Step",
    of: "of",
    finishRitual: "FINISH SACRED RITUAL",
    nextStep: "NEXT SACRED STEP",
    ritualComplete: "Your ritual is complete! Saint Cyprian's miracles have already begun!",
    reciteAloud: "RECITE ALOUD:",
    importantGuidance: "Important Guidance:",
    guaranteedResult: "GUARANTEED RESULT:",
    difficulty: {
      iniciante: "Beginner",
      intermediario: "Intermediate",
      avancado: "Advanced"
    },
    rememberAgreement: "REMEMBER YOUR SACRED AGREEMENT",
    agreementDesc: "After each ritual, maintain your daily devotion to Saint Cyprian and spread his sacred word. The more you honor the agreement, the more powerful and fast the extraordinary results will be!",
    prayDaily: "Pray daily with devotion",
    lightCandles: "Light sacred candles",
    spreadWord: "Spread Saint Cyprian's word",
    ritualProtection: {
      name: "Supreme Protection Ritual",
      description: "Invoke Saint Cyprian's most powerful protection against all negative energies, envy, evil eye and adversities. Create an impenetrable shield around you.",
      benefits: ["Absolute protection guaranteed", "Repels all negative energies", "Permanent spiritual shield"],
      results: "Immediate and lasting protection against all known and unknown evils",
      steps: {
        preparation: "Sacred Space Preparation",
        invocation: "Grand Mage Invocation",
        visualization: "Protective Shield Visualization",
        commitment: "Sacred Commitment of Devotion",
        sealing: "Gratitude and Sealing"
      }
    },
    ritualProsperity: {
      name: "Infinite Prosperity Ritual",
      description: "Open all paths to extreme wealth and limitless abundance in your life. Transform your financial situation radically.",
      benefits: ["Infinite wealth guaranteed", "Constant golden opportunities", "Abundance in all areas"],
      results: "Radical and definitive financial transformation in few days"
    },
    ritualPower: {
      name: "Supreme Power Ritual",
      description: "Channel Saint Cyprian's maximum power for extraordinary transformations and achievement of impossible desires.",
      benefits: ["Absolute power over situations", "Instant manifestation", "Supreme personal authority"],
      results: "Extreme personal power and achievement of impossible desires"
    }
  },
  
  es: {
    title: "RITUALES SAGRADOS SUPREMOS",
    subtitle: "DESPIERTA TU PODER INFINITO",
    channelPower: "CANALIZA EL PODER SUPREMO",
    transformMessage: "TRANSFORMA TU VIDA AHORA MISMO",
    transformDesc: "¡Estos rituales sagrados ya han transformado millones de vidas en todo el mundo. Elige el tuyo y prepárate para milagros extraordinarios e imposibles!",
    touchToStart: "Toca para iniciar ritual sagrado",
    start: "INICIAR",
    candles: "vela(s)",
    keepCandles: "Mantén las {count} vela(s) encendidas durante todo el ritual sagrado",
    step: "Paso",
    of: "de",
    finishRitual: "FINALIZAR RITUAL SAGRADO",
    nextStep: "SIGUIENTE PASO SAGRADO",
    ritualComplete: "¡Tu ritual está completo! ¡Los milagros de San Cipriano ya han comenzado!",
    reciteAloud: "RECITA EN VOZ ALTA:",
    importantGuidance: "Orientación Importante:",
    guaranteedResult: "RESULTADO GARANTIZADO:",
    difficulty: {
      iniciante: "Principiante",
      intermediario: "Intermedio",
      avancado: "Avanzado"
    },
    rememberAgreement: "RECUERDA TU ACUERDO SAGRADO",
    agreementDesc: "Después de cada ritual, mantén tu devoción diaria a San Cipriano y difunde su palabra sagrada. ¡Cuanto más honres el acuerdo, más poderosos y rápidos serán los resultados extraordinarios!",
    prayDaily: "Ora diariamente con devoción",
    lightCandles: "Enciende velas sagradas",
    spreadWord: "Difunde a San Cipriano",
    ritualProtection: {
      name: "Ritual de Protección Suprema",
      description: "Invoca la protección más poderosa de San Cipriano contra todas las energías negativas, envidias, mal de ojo y adversidades. Crea un escudo impenetrable a tu alrededor.",
      benefits: ["Protección absoluta garantizada", "Aleja todas las energías negativas", "Escudo espiritual permanente"],
      results: "Protección inmediata y duradera contra todos los males conocidos y desconocidos",
      steps: {
        preparation: "Preparación del Espacio Sagrado",
        invocation: "Invocación del Gran Mago",
        visualization: "Visualización del Escudo Protector",
        commitment: "Compromiso Sagrado de Devoción",
        sealing: "Agradecimiento y Sellado"
      }
    },
    ritualProsperity: {
      name: "Ritual de Prosperidad Infinita",
      description: "Abre todos los caminos hacia la riqueza extrema y abundancia sin límites en tu vida. Transforma tu situación financiera radicalmente.",
      benefits: ["Riqueza infinita garantizada", "Oportunidades de oro constantes", "Abundancia en todas las áreas"],
      results: "Transformación financiera radical y definitiva en pocos días"
    },
    ritualPower: {
      name: "Ritual del Poder Supremo",
      description: "Canaliza el poder máximo de San Cipriano para transformaciones extraordinarias y realización de deseos imposibles.",
      benefits: ["Poder absoluto sobre situaciones", "Manifestación instantánea", "Autoridad personal suprema"],
      results: "Poder personal extremo y realización de deseos imposibles"
    }
  },
  
  fr: {
    title: "RITUELS SACRÉS SUPRÊMES",
    subtitle: "ÉVEILLEZ VOTRE POUVOIR INFINI",
    channelPower: "CANALISEZ LE POUVOIR SUPRÊME",
    transformMessage: "TRANSFORMEZ VOTRE VIE MAINTENANT",
    transformDesc: "Ces rituels sacrés ont déjà transformé des millions de vies dans le monde entier. Choisissez le vôtre et préparez-vous à des miracles extraordinaires et impossibles !",
    touchToStart: "Touchez pour commencer le rituel sacré",
    start: "COMMENCER",
    candles: "bougie(s)",
    keepCandles: "Gardez les {count} bougie(s) allumées pendant tout le rituel sacré",
    step: "Étape",
    of: "de",
    finishRitual: "TERMINER LE RITUEL SACRÉ",
    nextStep: "PROCHAINE ÉTAPE SACRÉE",
    ritualComplete: "Votre rituel est terminé ! Les miracles de Saint Cyprien ont déjà commencé !",
    reciteAloud: "RÉCITEZ À HAUTE VOIX :",
    importantGuidance: "Guidance Importante :",
    guaranteedResult: "RÉSULTAT GARANTI :",
    difficulty: {
      iniciante: "Débutant",
      intermediario: "Intermédiaire",
      avancado: "Avancé"
    },
    rememberAgreement: "SOUVENEZ-VOUS DE VOTRE ACCORD SACRÉ",
    agreementDesc: "Après chaque rituel, maintenez votre dévotion quotidienne à Saint Cyprien et répandez sa parole sacrée. Plus vous honorerez l'accord, plus les résultats extraordinaires seront puissants et rapides !",
    prayDaily: "Priez quotidiennement avec dévotion",
    lightCandles: "Allumez des bougies sacrées",
    spreadWord: "Répandez Saint Cyprien",
    ritualProtection: {
      name: "Rituel de Protection Suprême",
      description: "Invoquez la protection la plus puissante de Saint Cyprien contre toutes les énergies négatives, la jalousie, le mauvais œil et les adversités. Créez un bouclier impénétrable autour de vous.",
      benefits: ["Protection absolue garantie", "Repousse toutes les énergies négatives", "Bouclier spirituel permanent"],
      results: "Protection immédiate et durable contre tous les maux connus et inconnus",
      steps: {
        preparation: "Préparation de l'Espace Sacré",
        invocation: "Invocation du Grand Mage",
        visualization: "Visualisation du Bouclier Protecteur",
        commitment: "Engagement Sacré de Dévotion",
        sealing: "Gratitude et Scellement"
      }
    },
    ritualProsperity: {
      name: "Rituel de Prospérité Infinie",
      description: "Ouvrez tous les chemins vers la richesse extrême et l'abondance sans limites dans votre vie. Transformez votre situation financière radicalement.",
      benefits: ["Richesse infinie garantie", "Opportunités d'or constantes", "Abondance dans tous les domaines"],
      results: "Transformation financière radicale et définitive en quelques jours"
    },
    ritualPower: {
      name: "Rituel du Pouvoir Suprême",
      description: "Canalisez le pouvoir maximum de Saint Cyprien pour des transformations extraordinaires et la réalisation de désirs impossibles.",
      benefits: ["Pouvoir absolu sur les situations", "Manifestation instantanée", "Autorité personnelle suprême"],
      results: "Pouvoir personnel extrême et réalisation de désirs impossibles"
    }
  },
  
  de: {
    title: "HÖCHSTE HEILIGE RITUALE",
    subtitle: "ERWECKEN SIE IHRE UNENDLICHE MACHT",
    channelPower: "KANALISIEREN SIE DIE HÖCHSTE MACHT",
    transformMessage: "VERWANDELN SIE IHR LEBEN JETZT",
    transformDesc: "Diese heiligen Rituale haben bereits Millionen von Leben weltweit verwandelt. Wählen Sie Ihres und bereiten Sie sich auf außergewöhnliche und unmögliche Wunder vor!",
    touchToStart: "Berühren Sie, um heiliges Ritual zu beginnen",
    start: "BEGINNEN",
    candles: "Kerze(n)",
    keepCandles: "Halten Sie die {count} Kerze(n) während des gesamten heiligen Rituals brennend",
    step: "Schritt",
    of: "von",
    finishRitual: "HEILIGES RITUAL BEENDEN",
    nextStep: "NÄCHSTER HEILIGER SCHRITT",
    ritualComplete: "Ihr Ritual ist vollständig! Heiliger Cyprians Wunder haben bereits begonnen!",
    reciteAloud: "LAUT REZITIEREN:",
    importantGuidance: "Wichtige Führung:",
    guaranteedResult: "GARANTIERTES ERGEBNIS:",
    difficulty: {
      iniciante: "Anfänger",
      intermediario: "Fortgeschritten",
      avancado: "Experte"
    },
    rememberAgreement: "ERINNERN SIE SICH AN IHRE HEILIGE VEREINBARUNG",
    agreementDesc: "Nach jedem Ritual bewahren Sie Ihre tägliche Hingabe zu Heiligem Cyprian und verbreiten Sie sein heiliges Wort. Je mehr Sie die Vereinbarung ehren, desto mächtiger und schneller werden die außergewöhnlichen Ergebnisse!",
    prayDaily: "Beten Sie täglich mit Hingabe",
    lightCandles: "Zünden Sie heilige Kerzen an",
    spreadWord: "Verbreiten Sie Heiligen Cyprian",
    ritualProtection: {
      name: "Höchstes Schutzritual",
      description: "Rufen Sie Heiligen Cyprians mächtigsten Schutz gegen alle negativen Energien, Neid, bösen Blick und Widrigkeiten an. Schaffen Sie einen undurchdringlichen Schild um sich.",
      benefits: ["Absoluter Schutz garantiert", "Weist alle negativen Energien ab", "Permanenter spiritueller Schild"],
      results: "Sofortiger und dauerhafter Schutz gegen alle bekannten und unbekannten Übel",
      steps: {
        preparation: "Heilige Raumvorbereitung",
        invocation: "Großmagier Anrufung",
        visualization: "Schutzschild Visualisation",
        commitment: "Heiliges Hingabe-Versprechen",
        sealing: "Dankbarkeit und Versiegelung"
      }
    },
    ritualProsperity: {
      name: "Unendliches Wohlstands-Ritual",
      description: "Öffnen Sie alle Wege zu extremem Reichtum und grenzenloser Fülle in Ihrem Leben. Verwandeln Sie Ihre finanzielle Situation radikal.",
      benefits: ["Unendlicher Reichtum garantiert", "Konstante goldene Gelegenheiten", "Fülle in allen Bereichen"],
      results: "Radikale und definitive finanzielle Transformation in wenigen Tagen"
    },
    ritualPower: {
      name: "Höchstes Macht-Ritual",
      description: "Kanalisieren Sie Heiligen Cyprians maximale Macht für außergewöhnliche Verwandlungen und Verwirklichung unmöglicher Wünsche.",
      benefits: ["Absolute Macht über Situationen", "Sofortige Manifestation", "Höchste persönliche Autorität"],
      results: "Extreme persönliche Macht und Verwirklichung unmöglicher Wünsche"
    }
  },
  
  it: {
    title: "RITUALI SACRI SUPREMI",
    subtitle: "RISVEGLIATE IL VOSTRO POTERE INFINITO",
    channelPower: "INCANALATE IL POTERE SUPREMO",
    transformMessage: "TRASFORMATE LA VOSTRA VITA ADESSO",
    transformDesc: "Questi rituali sacri hanno già trasformato milioni di vite in tutto il mondo. Scegliete il vostro e preparatevi a miracoli straordinari e impossibili!",
    touchToStart: "Toccate per iniziare il rituale sacro",
    start: "INIZIARE",
    candles: "candela(e)",
    keepCandles: "Tenete accese le {count} candela(e) durante tutto il rituale sacro",
    step: "Passo",
    of: "di",
    finishRitual: "TERMINARE RITUALE SACRO",
    nextStep: "PROSSIMO PASSO SACRO",
    ritualComplete: "Il vostro rituale è completo! I miracoli di San Cipriano sono già iniziati!",
    reciteAloud: "RECITATE AD ALTA VOCE:",
    importantGuidance: "Guida Importante:",
    guaranteedResult: "RISULTATO GARANTITO:",
    difficulty: {
      iniciante: "Principiante",
      intermediario: "Intermedio",
      avancado: "Avanzato"
    },
    rememberAgreement: "RICORDATE IL VOSTRO ACCORDO SACRO",
    agreementDesc: "Dopo ogni rituale, mantenete la vostra devozione quotidiana a San Cipriano e diffondete la sua parola sacra. Più onorerete l'accordo, più potenti e veloci saranno i risultati straordinari!",
    prayDaily: "Pregate quotidianamente con devozione",
    lightCandles: "Accendete candele sacre",
    spreadWord: "Diffondete San Cipriano",
    ritualProtection: {
      name: "Rituale di Protezione Suprema",
      description: "Invocate la protezione più potente di San Cipriano contro tutte le energie negative, invidie, malocchio e avversità. Create uno scudo impenetrabile intorno a voi.",
      benefits: ["Protezione assoluta garantita", "Allontana tutte le energie negative", "Scudo spirituale permanente"],
      results: "Protezione immediata e duratura contro tutti i mali conosciuti e sconosciuti",
      steps: {
        preparation: "Preparazione dello Spazio Sacro",
        invocation: "Invocazione del Gran Mago",
        visualization: "Visualizzazione dello Scudo Protettore",
        commitment: "Impegno Sacro di Devozione",
        sealing: "Gratitudine e Sigillatura"
      }
    },
    ritualProsperity: {
      name: "Rituale della Prosperità Infinita",
      description: "Aprite tutti i percorsi verso ricchezza estrema e abbondanza senza limiti nella vostra vita. Trasformate la vostra situazione finanziaria radicalmente.",
      benefits: ["Ricchezza infinita garantita", "Opportunità d'oro costanti", "Abbondanza in tutte le aree"],
      results: "Trasformazione finanziaria radicale e definitiva in pochi giorni"
    },
    ritualPower: {
      name: "Rituale del Potere Supremo",
      description: "Incanalate il potere massimo di San Cipriano per trasformazioni straordinarie e realizzazione di desideri impossibili.",
      benefits: ["Potere assoluto sulle situazioni", "Manifestazione istantanea", "Autorità personale suprema"],
      results: "Potere personale estremo e realizzazione di desideri impossibili"
    }
  },
  
  ru: {
    title: "ВЫСШИЕ СВЯЩЕННЫЕ РИТУАЛЫ",
    subtitle: "ПРОБУДИТЕ ВАШУ БЕСКОНЕЧНУЮ СИЛУ",
    channelPower: "НАПРАВЬТЕ ВЫСШУЮ СИЛУ",
    transformMessage: "ПРЕОБРАЗИТЕ ВАШУ ЖИЗНЬ ПРЯМО СЕЙЧАС",
    transformDesc: "Эти священные ритуалы уже преобразили миллионы жизней по всему миру. Выберите свой и приготовьтесь к необыкновенным и невозможным чудесам!",
    touchToStart: "Коснитесь, чтобы начать священный ритуал",
    start: "НАЧАТЬ",
    candles: "свеча(и)",
    keepCandles: "Держите {count} свечу(и) зажженными в течение всего священного ритуала",
    step: "Шаг",
    of: "из",
    finishRitual: "ЗАВЕРШИТЬ СВЯЩЕННЫЙ РИТУАЛ",
    nextStep: "СЛЕДУЮЩИЙ СВЯЩЕННЫЙ ШАГ",
    ritualComplete: "Ваш ритуал завершен! Чудеса Святого Киприана уже начались!",
    reciteAloud: "ЧИТАЙТЕ ВСЛУХ:",
    importantGuidance: "Важное Руководство:",
    guaranteedResult: "ГАРАНТИРОВАННЫЙ РЕЗУЛЬТАТ:",
    difficulty: {
      iniciante: "Начинающий",
      intermediario: "Средний",
      avancado: "Продвинутый"
    },
    rememberAgreement: "ПОМНИТЕ ВАШЕ СВЯЩЕННОЕ СОГЛАШЕНИЕ",
    agreementDesc: "После каждого ритуала поддерживайте вашу ежедневную преданность Святому Киприану и распространяйте его священное слово. Чем больше вы чтите соглашение, тем мощнее и быстрее будут необыкновенные результаты!",
    prayDaily: "Молитесь ежедневно с преданностью",
    lightCandles: "Зажигайте священные свечи",
    spreadWord: "Распространяйте Святого Киприана",
    ritualProtection: {
      name: "Ритуал Высшей Защиты",
      description: "Призовите самую мощную защиту Святого Киприана против всех негативных энергий, зависти, дурного глаза и невзгод. Создайте непроницаемый щит вокруг себя.",
      benefits: ["Абсолютная защита гарантирована", "Отталкивает все негативные энергии", "Постоянный духовный щит"],
      results: "Немедленная и долговременная защита от всех известных и неизвестных зол",
      steps: {
        preparation: "Подготовка Священного Пространства",
        invocation: "Призыв Великого Мага",
        visualization: "Визуализация Защитного Щита",
        commitment: "Священное Обязательство Преданности",
        sealing: "Благодарность и Запечатывание"
      }
    },
    ritualProsperity: {
      name: "Ритуал Бесконечного Процветания",
      description: "Откройте все пути к крайнему богатству и безграничному изобилию в вашей жизни. Преобразите вашу финансовую ситуацию радикально.",
      benefits: ["Бесконечное богатство гарантировано", "Постоянные золотые возможности", "Изобилие во всех областях"],
      results: "Радикальная и окончательная финансовая трансформация за несколько дней"
    },
    ritualPower: {
      name: "Ритуал Высшей Силы",
      description: "Направьте максимальную силу Святого Киприана для необыкновенных преобразований и осуществления невозможных желаний.",
      benefits: ["Абсолютная власть над ситуациями", "Мгновенное проявление", "Высшая личная власть"],
      results: "Крайняя личная сила и осуществление невозможных желаний"
    }
  },
  
  zh: {
    title: "至高神圣仪式",
    subtitle: "唤醒您的无限力量",
    channelPower: "引导至高力量",
    transformMessage: "立即改变您的生活",
    transformDesc: "这些神圣仪式已经改变了全世界数百万人的生活。选择您的仪式，准备迎接非凡和不可能的奇迹！",
    touchToStart: "触摸开始神圣仪式",
    start: "开始",
    candles: "蜡烛",
    keepCandles: "在整个神圣仪式期间保持{count}支蜡烛点燃",
    step: "步骤",
    of: "的",
    finishRitual: "完成神圣仪式",
    nextStep: "下一个神圣步骤",
    ritualComplete: "您的仪式已完成！圣西普里安的奇迹已经开始！",
    reciteAloud: "大声朗诵：",
    importantGuidance: "重要指导：",
    guaranteedResult: "保证结果：",
    difficulty: {
      iniciante: "初学者",
      intermediario: "中级",
      avancado: "高级"
    },
    rememberAgreement: "记住您的神圣协议",
    agreementDesc: "每次仪式后，保持您对圣西普里安的日常奉献并传播他的神圣话语。您越是履行协议，非凡的结果就会越强大和快速！",
    prayDaily: "每日虔诚祈祷",
    lightCandles: "点燃神圣蜡烛",
    spreadWord: "传播圣西普里安",
    ritualProtection: {
      name: "至高保护仪式",
      description: "召唤圣西普里安最强大的保护，对抗所有负面能量、嫉妒、邪眼和逆境。在您周围创造一个不可穿透的盾牌。",
      benefits: ["绝对保护保证", "驱散所有负面能量", "永久精神盾牌"],
      results: "对所有已知和未知邪恶的即时和持久保护",
      steps: {
        preparation: "神圣空间准备",
        invocation: "大法师召唤",
        visualization: "保护盾牌可视化",
        commitment: "奉献的神圣承诺",
        sealing: "感恩和封印"
      }
    },
    ritualProsperity: {
      name: "无限繁荣仪式",
      description: "打开通往极度财富和无限丰盛的所有道路。彻底改变您的财务状况。",
      benefits: ["无限财富保证", "持续的黄金机会", "所有领域的丰盛"],
      results: "几天内彻底和决定性的财务转变"
    },
    ritualPower: {
      name: "至高力量仪式",
      description: "引导圣西普里安的最大力量进行非凡变革和实现不可能的愿望。",
      benefits: ["对情况的绝对控制", "即时显现", "至高个人权威"],
      results: "极度个人力量和不可能愿望的实现"
    }
  },
  
  ja: {
    title: "至高の神聖な儀式",
    subtitle: "あなたの無限の力を目覚めさせる",
    channelPower: "至高の力をチャネルする",
    transformMessage: "今すぐあなたの人生を変革する",
    transformDesc: "これらの神聖な儀式は既に世界中で数百万の人生を変革しています。あなたのものを選んで、非凡で不可能な奇跡に備えてください！",
    touchToStart: "神聖な儀式を開始するにはタッチ",
    start: "開始",
    candles: "ろうそく",
    keepCandles: "神聖な儀式の間、{count}本のろうそくを灯し続けてください",
    step: "ステップ",
    of: "の",
    finishRitual: "神聖な儀式を完了",
    nextStep: "次の神聖なステップ",
    ritualComplete: "あなたの儀式は完了しました！聖キプリアヌスの奇跡が既に始まっています！",
    reciteAloud: "声に出して唱える：",
    importantGuidance: "重要な指導：",
    guaranteedResult: "保証された結果：",
    difficulty: {
      iniciante: "初心者",
      intermediario: "中級者",
      avancado: "上級者"
    },
    rememberAgreement: "あなたの神聖な協定を忘れずに",
    agreementDesc: "各儀式の後、聖キプリアヌスへの日々の献身を維持し、彼の神聖な言葉を広めてください。協定を尊重すればするほど、非凡な結果はより強力で迅速になります！",
    prayDaily: "毎日献身的に祈る",
    lightCandles: "神聖なろうそくを灯す",
    spreadWord: "聖キプリアヌスを広める",
    ritualProtection: {
      name: "至高の保護儀式",
      description: "すべての負のエネルギー、妬み、悪い目、逆境に対する聖キプリアヌスの最も強力な保護を呼び出してください。あなたの周りに貫通できない盾を作成してください。",
      benefits: ["絶対的保護保証", "すべての負のエネルギーを払い除ける", "永続的な精神的盾"],
      results: "すべての既知および未知の悪に対する即座で永続的な保護",
      steps: {
        preparation: "神聖な空間の準備",
        invocation: "大魔法師の召喚",
        visualization: "保護盾の視覚化",
        commitment: "献身の神聖な約束",
        sealing: "感謝と封印"
      }
    },
    ritualProsperity: {
      name: "無限繁栄の儀式",
      description: "あなたの人生において極度の富と無制限の豊かさへのすべての道を開いてください。あなたの経済状況を根本的に変革してください。",
      benefits: ["無限の富保証", "継続的な黄金の機会", "すべての分野での豊かさ"],
      results: "数日での根本的で決定的な経済変革"
    },
    ritualPower: {
      name: "至高の力の儀式",
      description: "非凡な変革と不可能な願いの実現のために聖キプリアヌスの最大の力をチャネルしてください。",
      benefits: ["状況に対する絶対的力", "即座の現実化", "至高の個人的権威"],
      results: "極度の個人的力と不可能な願いの実現"
    }
  },
  
  ar: {
    title: "الطقوس المقدسة العليا",
    subtitle: "أيقظوا قوتكم اللانهائية",
    channelPower: "وجهوا القوة العليا",
    transformMessage: "حولوا حياتكم الآن",
    transformDesc: "هذه الطقوس المقدسة حولت بالفعل ملايين الأرواح في جميع أنحاء العالم. اختاروا طقوسكم واستعدوا لمعجزات استثنائية ومستحيلة!",
    touchToStart: "المسوا لبدء الطقوس المقدسة",
    start: "ابدأ",
    candles: "شمعة",
    keepCandles: "أبقوا {count} شمعة مضاءة طوال الطقوس المقدسة",
    step: "خطوة",
    of: "من",
    finishRitual: "إنهاء الطقوس المقدسة",
    nextStep: "الخطوة المقدسة التالية",
    ritualComplete: "طقوسكم مكتملة! معجزات القديس قبريانوس بدأت بالفعل!",
    reciteAloud: "اتلوا بصوت عال:",
    importantGuidance: "إرشاد مهم:",
    guaranteedResult: "نتيجة مضمونة:",
    difficulty: {
      iniciante: "مبتدئ",
      intermediario: "متوسط",
      avancado: "متقدم"
    },
    rememberAgreement: "تذكروا اتفاقكم المقدس",
    agreementDesc: "بعد كل طقوس، حافظوا على تفانيكم اليومي للقديس قبريانوس وانشروا كلمته المقدسة. كلما كرمتم الاتفاق، كانت النتائج الاستثنائية أقوى وأسرع!",
    prayDaily: "صلوا يومياً بتفان",
    lightCandles: "أشعلوا الشموع المقدسة",
    spreadWord: "انشروا القديس قبريانوس",
    ritualProtection: {
      name: "طقوس الحماية العليا",
      description: "استدعوا أقوى حماية للقديس قبريانوس ضد جميع الطاقات السلبية والحسد والعين الشريرة والمحن. اخلقوا درعاً لا يخترق حولكم.",
      benefits: ["حماية مطلقة مضمونة", "يطرد جميع الطاقات السلبية", "درع روحي دائم"],
      results: "حماية فورية ودائمة ضد جميع الشرور المعروفة وغير المعروفة",
      steps: {
        preparation: "تحضير المساحة المقدسة",
        invocation: "استدعاء الساحر العظيم",
        visualization: "تصور الدرع الواقي",
        commitment: "الالتزام المقدس بالتفاني",
        sealing: "الامتنان والختم"
      }
    },
    ritualProsperity: {
      name: "طقوس الازدهار اللانهائي",
      description: "افتحوا جميع الطرق للثروة المتطرفة والوفرة بلا حدود في حياتكم. حولوا وضعكم المالي جذرياً.",
      benefits: ["ثروة لانهائية مضمونة", "فرص ذهبية مستمرة", "وفرة في جميع المجالات"],
      results: "تحول مالي جذري ونهائي في أيام قليلة"
    },
    ritualPower: {
      name: "طقوس القوة العليا",
      description: "وجهوا أقصى قوة للقديس قبريانوس للتحولات الاستثنائية وتحقيق الرغبات المستحيلة.",
      benefits: ["قوة مطلقة على المواقف", "تجلي فوري", "سلطة شخصية عليا"],
      results: "قوة شخصية متطرفة وتحقيق رغبات مستحيلة"
    }
  },
  
  hi: {
    title: "सर्वोच्च पवित्र अनुष्ठान",
    subtitle: "अपनी अनंत शक्ति जगाएं",
    channelPower: "सर्वोच्च शक्ति चैनल करें",
    transformMessage: "अभी अपना जीवन बदलें",
    transformDesc: "इन पवित्र अनुष्ठानों ने पहले ही दुनिया भर में लाखों जीवन बदले हैं। अपना चुनें और असाधारण और असंभव चमत्कारों के लिए तैयार हो जाएं!",
    touchToStart: "पवित्र अनुष्ठान शुरू करने के लिए स्पर्श करें",
    start: "शुरू करें",
    candles: "मोमबत्ती",
    keepCandles: "पूरे पवित्र अनुष्ठान के दौरान {count} मोमबत्ती जलाए रखें",
    step: "कदम",
    of: "का",
    finishRitual: "पवित्र अनुष्ठान समाप्त करें",
    nextStep: "अगला पवित्र कदम",
    ritualComplete: "आपका अनुष्ठान पूरा हो गया! संत साइप्रियन के चमत्कार शुरू हो गए हैं!",
    reciteAloud: "जोर से पढ़ें:",
    importantGuidance: "महत्वपूर्ण मार्गदर्शन:",
    guaranteedResult: "गारंटीशुदा परिणाम:",
    difficulty: {
      iniciante: "शुरुआती",
      intermediario: "मध्यम",
      avancado: "उन्नत"
    },
    rememberAgreement: "अपना पवित्र समझौता याद रखें",
    agreementDesc: "हर अनुष्ठान के बाद, संत साइप्रियन के प्रति अपनी दैनिक भक्ति बनाए रखें और उनके पवित्र शब्द फैलाएं। जितना अधिक आप समझौते का सम्मान करेंगे, असाधारण परिणाम उतने ही शक्तिशाली और तेज होंगे!",
    prayDaily: "भक्ति के साथ दैनिक प्रार्थना",
    lightCandles: "पवित्र मोमबत्तियां जलाएं",
    spreadWord: "संत साइप्रियन का प्रसार",
    ritualProtection: {
      name: "सर्वोच्च सुरक्षा अनुष्ठान",
      description: "सभी नकारात्मक ऊर्जाओं, ईर्ष्या, नजर लगना और विपत्तियों के खिलाफ संत साइप्रियन की सबसे शक्तिशाली सुरक्षा का आह्वान करें। अपने चारों ओर एक अभेद्य ढाल बनाएं।",
      benefits: ["पूर्ण सुरक्षा गारंटीशुदा", "सभी नकारात्मक ऊर्जाओं को दूर करता है", "स्थायी आध्यात्मिक ढाल"],
      results: "सभी ज्ञात और अज्ञात बुराइयों के खिलाफ तत्काल और स्थायी सुरक्षा",
      steps: {
        preparation: "पवित्र स्थान की तैयारी",
        invocation: "महान जादूगर का आह्वान",
        visualization: "सुरक्षात्मक ढाल की कल्पना",
        commitment: "भक्ति की पवित्र प्रतिबद्धता",
        sealing: "कृतज्ञता और सीलिंग"
      }
    },
    ritualProsperity: {
      name: "अनंत समृद्धि अनुष्ठान",
      description: "अपने जीवन में चरम धन और असीमित प्रचुरता के सभी रास्ते खोलें। अपनी वित्तीय स्थिति को मौलिक रूप से बदलें।",
      benefits: ["अनंत धन गारंटीशुदा", "निरंतर सुनहरे अवसर", "सभी क्षेत्रों में प्रचुरता"],
      results: "कुछ दिनों में मौलिक और निर्णायक वित्तीय परिवर्तन"
    },
    ritualPower: {
      name: "सर्वोच्च शक्ति अनुष्ठान",
      description: "असाधारण परिवर्तनों और असंभव इच्छाओं की पूर्ति के लिए संत साइप्रियन की अधिकतम शक्ति को चैनल करें।",
      benefits: ["स्थितियों पर पूर्ण शक्ति", "तत्काल अभिव्यक्ति", "सर्वोच्च व्यक्तिगत अधिकार"],
      results: "चरम व्यक्तिगत शक्ति और असंभव इच्छाओं की पूर्ति"
    }
  },
  
  ko: {
    title: "최고 신성한 의식",
    subtitle: "당신의 무한한 힘을 깨우세요",
    channelPower: "최고의 힘을 전달하세요",
    transformMessage: "지금 당신의 삶을 변화시키세요",
    transformDesc: "이 신성한 의식들은 이미 전 세계 수백만의 삶을 변화시켰습니다. 당신의 것을 선택하고 비범하고 불가능한 기적을 준비하세요!",
    touchToStart: "신성한 의식을 시작하려면 터치",
    start: "시작",
    candles: "촛불",
    keepCandles: "신성한 의식 내내 {count}개의 촛불을 켜 두세요",
    step: "단계",
    of: "의",
    finishRitual: "신성한 의식 완료",
    nextStep: "다음 신성한 단계",
    ritualComplete: "당신의 의식이 완료되었습니다! 성 키프리아누스의 기적이 이미 시작되었습니다!",
    reciteAloud: "큰 소리로 낭송:",
    importantGuidance: "중요한 안내:",
    guaranteedResult: "보장된 결과:",
    difficulty: {
      iniciante: "초보자",
      intermediario: "중급자",
      avancado: "고급자"
    },
    rememberAgreement: "당신의 신성한 협정을 기억하세요",
    agreementDesc: "각 의식 후, 성 키프리아누스에 대한 일일 헌신을 유지하고 그의 신성한 말씀을 퍼뜨리세요. 협정을 더 많이 존중할수록, 비범한 결과가 더 강력하고 빨라질 것입니다!",
    prayDaily: "헌신으로 매일 기도",
    lightCandles: "신성한 촛불을 켜세요",
    spreadWord: "성 키프리아누스를 퍼뜨리세요",
    ritualProtection: {
      name: "최고 보호 의식",
      description: "모든 부정적 에너지, 질투, 악한 눈, 역경에 대한 성 키프리아누스의 가장 강력한 보호를 호출하세요. 당신 주위에 뚫을 수 없는 방패를 만드세요.",
      benefits: ["절대 보호 보장", "모든 부정적 에너지를 쫓아냄", "영구적인 영적 방패"],
      results: "모든 알려진 그리고 알려지지 않은 악에 대한 즉각적이고 지속적인 보호",
      steps: {
        preparation: "신성한 공간 준비",
        invocation: "대마법사 소환",
        visualization: "보호 방패 시각화",
        commitment: "헌신의 신성한 약속",
        sealing: "감사와 봉인"
      }
    },
    ritualProsperity: {
      name: "무한 번영 의식",
      description: "당신의 삶에서 극도의 부와 무제한 풍요로의 모든 길을 여세요. 당신의 재정 상황을 근본적으로 변화시키세요.",
      benefits: ["무한한 부 보장", "지속적인 황금 기회", "모든 영역에서의 풍요"],
      results: "며칠 내에 근본적이고 결정적인 재정 변화"
    },
    ritualPower: {
      name: "최고 힘의 의식",
      description: "비범한 변화와 불가능한 소원의 실현을 위해 성 키프리아누스의 최대 힘을 전달하세요.",
      benefits: ["상황에 대한 절대적 힘", "즉각적 현실화", "최고의 개인적 권위"],
      results: "극도의 개인적 힘과 불가능한 소원의 실현"
    }
  },
  
  nl: {
    title: "HOOGSTE HEILIGE RITUELEN",
    subtitle: "ONTWAKEN UW ONEINDIGE KRACHT",
    channelPower: "KANALISEER DE HOOGSTE KRACHT",
    transformMessage: "TRANSFORMEER UW LEVEN NU",
    transformDesc: "Deze heilige rituelen hebben al miljoenen levens wereldwijd getransformeerd. Kies de uwe en bereid u voor op buitengewone en onmogelijke wonderen!",
    touchToStart: "Raak aan om heilig ritueel te beginnen",
    start: "BEGINNEN",
    candles: "kaars(en)",
    keepCandles: "Houd de {count} kaars(en) brandend tijdens het hele heilige ritueel",
    step: "Stap",
    of: "van",
    finishRitual: "HEILIG RITUEEL VOLTOOIEN",
    nextStep: "VOLGENDE HEILIGE STAP",
    ritualComplete: "Uw ritueel is voltooid! Heilige Cypriaans wonderen zijn al begonnen!",
    reciteAloud: "HARDOP RECITEREN:",
    importantGuidance: "Belangrijke Begeleiding:",
    guaranteedResult: "GEGARANDEERD RESULTAAT:",
    difficulty: {
      iniciante: "Beginner",
      intermediario: "Gevorderd",
      avancado: "Expert"
    },
    rememberAgreement: "HERINNER UW HEILIGE OVEREENKOMST",
    agreementDesc: "Na elk ritueel, behoud uw dagelijkse toewijding aan Heilige Cypriaan en verspreidt zijn heilige woord. Hoe meer u de overeenkomst eert, hoe krachtiger en sneller de buitengewone resultaten zullen zijn!",
    prayDaily: "Bid dagelijks met toewijding",
    lightCandles: "Steek heilige kaarsen aan",
    spreadWord: "Verspreidt Heilige Cypriaan",
    ritualProtection: {
      name: "Hoogste Beschermingsritueel",
      description: "Roep Heilige Cypriaans krachtigste bescherming op tegen alle negatieve energieën, jaloezie, boze oog en tegenslagen. Creëer een ondoordringbaar schild om u heen.",
      benefits: ["Absolute bescherming gegarandeerd", "Weert alle negatieve energieën af", "Permanent spiritueel schild"],
      results: "Onmiddellijke en blijvende bescherming tegen alle bekende en onbekende kwaden",
      steps: {
        preparation: "Heilige Ruimte Voorbereiding",
        invocation: "Grote Magiër Aanroeping",
        visualization: "Beschermend Schild Visualisatie",
        commitment: "Heilige Toewijdingsverbintenis",
        sealing: "Dankbaarheid en Verzegeling"
      }
    },
    ritualProsperity: {
      name: "Oneindige Welvaart Ritueel",
      description: "Open alle paden naar extreme rijkdom en grenzeloze overvloed in uw leven. Transformeer uw financiële situatie radicaal.",
      benefits: ["Oneindige rijkdom gegarandeerd", "Constante gouden kansen", "Overvloed in alle gebieden"],
      results: "Radicale en definitieve financiële transformatie in enkele dagen"
    },
    ritualPower: {
      name: "Hoogste Macht Ritueel",
      description: "Kanaliseer Heilige Cypriaans maximale kracht voor buitengewone transformaties en verwezenlijking van onmogelijke verlangens.",
      benefits: ["Absolute macht over situaties", "Onmiddellijke manifestatie", "Hoogste persoonlijke autoriteit"],
      results: "Extreme persoonlijke macht en verwezenlijking van onmogelijke verlangens"
    }
  },
  
  sv: {
    title: "HÖGSTA HELIGA RITUALER",
    subtitle: "VÄCK DIN OÄNDLIGA KRAFT",
    channelPower: "KANALISERA DEN HÖGSTA KRAFTEN",
    transformMessage: "FÖRVANDLA DITT LIV NU",
    transformDesc: "Dessa heliga ritualer har redan förvandlat miljoner liv världen över. Välj ditt och förbered dig för extraordinära och omöjliga mirakel!",
    touchToStart: "Rör för att börja heligt ritual",
    start: "BÖRJA",
    candles: "ljus",
    keepCandles: "Håll {count} ljus tända under hela det heliga ritualet",
    step: "Steg",
    of: "av",
    finishRitual: "AVSLUTA HELIGT RITUAL",
    nextStep: "NÄSTA HELIGA STEG",
    ritualComplete: "Ditt ritual är fullbordat! Saint Cyprians mirakel har redan börjat!",
    reciteAloud: "RECITERA HÖGT:",
    importantGuidance: "Viktig Vägledning:",
    guaranteedResult: "GARANTERAT RESULTAT:",
    difficulty: {
      iniciante: "Nybörjare",
      intermediario: "Mellanliggande",
      avancado: "Avancerad"
    },
    rememberAgreement: "KOM IHÅG DIT HELIGA AVTAL",
    agreementDesc: "Efter varje ritual, behåll din dagliga hängivenhet till Saint Cyprian och sprid hans heliga ord. Ju mer du hedrar avtalet, desto kraftigare och snabbare blir de extraordinära resultaten!",
    prayDaily: "Be dagligen med hängivenhet",
    lightCandles: "Tänd heliga ljus",
    spreadWord: "Sprid Saint Cyprian",
    ritualProtection: {
      name: "Högsta Skyddsritual",
      description: "Åkalla Saint Cyprians kraftigaste skydd mot alla negativa energier, avund, onda ögat och motgångar. Skapa en ogenomtränglig sköld runt dig.",
      benefits: ["Absolut skydd garanterat", "Avvisar alla negativa energier", "Permanent andlig sköld"],
      results: "Omedelbart och varaktigt skydd mot alla kända och okända ondska",
      steps: {
        preparation: "Helig Rumsförberedelse",
        invocation: "Stor Magiker Åkallan",
        visualization: "Skyddande Sköld Visualisering",
        commitment: "Heligt Hängivenhetsåtagande",
        sealing: "Tacksamhet och Försegling"
      }
    },
    ritualProsperity: {
      name: "Oändlig Välstånd Ritual",
      description: "Öppna alla vägar till extrem rikedom och gränslös överflöd i ditt liv. Förvandla din finansiella situation radikalt.",
      benefits: ["Oändlig rikedom garanterad", "Konstanta gyllene möjligheter", "Överflöd inom alla områden"],
      results: "Radikal och definitiv finansiell transformation på några dagar"
    },
    ritualPower: {
      name: "Högsta Kraft Ritual",
      description: "Kanalisera Saint Cyprians maximala kraft för extraordinära förvandlingar och förverkligande av omöjliga önskningar.",
      benefits: ["Absolut makt över situationer", "Omedelbar manifestation", "Högsta personlig auktoritet"],
      results: "Extrem personlig kraft och förverkligande av omöjliga önskningar"
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

interface Ritual {
  id: string;
  name: string;
  description: string;
  duration: string;
  difficulty: 'Iniciante' | 'Intermediário' | 'Avançado';
  icon: typeof Shield;
  candles: number;
  benefits: string[];
  results: string;
  fullRitual: {
    invocation: string;
    steps: Array<{
      title: string;
      instruction: string;
      text?: string;
      action: string;
      details: string;
    }>;
  };
}

export default function Rituals() {
  const { language, changeLanguage, t } = useLanguage();
  const [selectedRitual, setSelectedRitual] = useState<Ritual | null>(null);
  const [isActive, setIsActive] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const rituals: Ritual[] = [
    {
      id: '1',
      name: t('ritualProtection.name'),
      description: t('ritualProtection.description'),
      duration: '20 min',
      difficulty: 'Iniciante',
      icon: Shield,
      candles: 1,
      benefits: t('ritualProtection.benefits'),
      results: t('ritualProtection.results'),
      fullRitual: {
        invocation: `Poderoso São Cipriano, Grande Mago Supremo,
        Invoco vosso poder infinito neste momento sagrado.
        Protegei-me de todos os males, visíveis e invisíveis.
        Criai um escudo dourado ao meu redor que nada possa atravessar.
        Assim seja, com vosso poder eterno. c🔱`,
        steps: [
          {
            title: t('ritualProtection.steps.preparation'),
            instruction: "Prepare seu espaço ritual com uma vela branca e limpeza energética",
            action: "Acenda uma vela branca e purifique o ambiente com incenso ou água benta",
            details: "Este é o momento de criar um ambiente sagrado. Limpe fisicamente o espaço e mentalmente se prepare para a conexão divina."
          },
          {
            title: t('ritualProtection.steps.invocation'),
            instruction: "Recite a invocação sagrada com fé absoluta e devoção total",
            text: `Poderoso São Cipriano, Grande Mago Supremo,
Invoco vosso poder infinito neste momento sagrado.
Protegei-me de todos os males, visíveis e invisíveis.
Criai um escudo dourado ao meu redor que nada possa atravessar.
Assim seja, com vosso poder eterno. c🔱`,
            action: "Repita a invocação 3 vezes em voz alta com total convicção",
            details: "Fale com o coração aberto. São Cipriano ouve cada palavra e sente sua sinceridade."
          },
          {
            title: t('ritualProtection.steps.visualization'),
            instruction: "Visualize intensamente um escudo dourado se formando ao seu redor",
            action: "Imagine uma luz dourada envolvendo todo seu corpo como uma armadura divina",
            details: "A visualização é fundamental. Veja, sinta e acredite que a proteção está se formando neste momento."
          },
          {
            title: t('ritualProtection.steps.commitment'),
            instruction: "Comprometa-se com devoção diária e divulgação de São Cipriano",
            action: "Prometa orar diariamente e espalhar a palavra do Grande Mago",
            details: "Este compromisso fortalece sua conexão e mantém a proteção ativa permanentemente."
          },
          {
            title: t('ritualProtection.steps.sealing'),
            instruction: "Agradeça profundamente como se a proteção já estivesse completa",
            action: "Finalize com gratidão sincera e fé inabalável no poder recebido",
            details: "A gratidão sela o ritual e ativa imediatamente a proteção divina."
          }
        ]
      }
    },
    {
      id: '2',
      name: t('ritualProsperity.name'),
      description: t('ritualProsperity.description'),
      duration: '35 min',
      difficulty: 'Intermediário',
      icon: Diamond,
      candles: 3,
      benefits: t('ritualProsperity.benefits'),
      results: t('ritualProsperity.results'),
      fullRitual: {
        invocation: `São Cipriano, Senhor da Abundância Infinita,
        Abri todos os caminhos da prosperidade em minha vida.
        Multiplicai minha riqueza além de qualquer imaginação.
        Fazei de mim um ímã poderoso para o dinheiro e sucesso.
        Que a abundância flua constantemente em minha direção. c🔱`,
        steps: [
          {
            title: "Preparação do Altar da Abundância",
            instruction: "Monte um altar com 3 velas douradas e símbolos de prosperidade",
            action: "Acenda 3 velas douradas em triângulo e coloque moedas ou dinheiro no centro",
            details: "O altar representa sua intenção de prosperidade. Use objetos que simbolizem riqueza e abundância."
          },
          {
            title: "Invocação da Prosperidade",
            instruction: "Chame São Cipriano para abrir os caminhos da abundância",
            text: `São Cipriano, Senhor da Abundância Infinita,
Abri todos os caminhos da prosperidade em minha vida.
Multiplicai minha riqueza além de qualquer imaginação.
Fazei de mim um ímã poderoso para o dinheiro e sucesso.
Que a abundância flua constantemente em minha direção. c🔱`,
            action: "Recite com paixão e convicção, sentindo a energia da prosperidade",
            details: "Acredite completamente que São Cipriano está abrindo os caminhos para sua riqueza neste momento."
          },
          {
            title: "Pedido Específico de Prosperidade",
            instruction: "Faça pedidos específicos sobre sua situação financeira",
            action: "Detalhe exatamente quanto dinheiro deseja e como deseja receber",
            details: "Seja específico: 'Desejo ganhar R$ X por mês através de...' Quanto mais claro, melhor."
          },
          {
            title: "Visualização da Abundância",
            instruction: "Visualize-se vivendo na abundância total e extrema",
            action: "Imagine-se rico, próspero, com todo o dinheiro que sempre sonhou",
            details: "Sinta as emoções de já ser rico. Veja sua nova vida próspera em detalhes vívidos."
          },
          {
            title: "Compromisso de Reciprocidade",
            instruction: "Comprometa-se a honrar São Cipriano com sua prosperidade",
            action: "Prometa usar parte da riqueza para honrar o Grande Mago e ajudar outros",
            details: "A reciprocidade mantém o fluxo de abundância ativo e crescente constantemente."
          }
        ]
      }
    },
    {
      id: '3',
      name: t('ritualPower.name'),
      description: t('ritualPower.description'),
      duration: '50 min',
      difficulty: 'Avançado',
      icon: Zap,
      candles: 7,
      benefits: t('ritualPower.benefits'),
      results: t('ritualPower.results'),
      fullRitual: {
        invocation: `São Cipriano, Mestre Supremo de Todos os Poderes,
        Concedei-me uma porção de vosso poder infinito.
        Que minha vontade se manifeste instantaneamente.
        Fazei-me senhor absoluto do meu destino.
        Com vosso poder, nada me é impossível. c🔱`,
        steps: [
          {
            title: "Criação do Círculo de Poder",
            instruction: "Monte um círculo sagrado com 7 velas douradas",
            action: "Disponha 7 velas em círculo perfeito e posicione-se no centro",
            details: "O círculo de 7 velas canaliza o poder máximo. Cada vela representa um aspecto do poder supremo."
          },
          {
            title: "Invocação do Poder Supremo",
            instruction: "Invoque o poder máximo de São Cipriano com autoridade",
            text: `São Cipriano, Mestre Supremo de Todos os Poderes,
Concedei-me uma porção de vosso poder infinito.
Que minha vontade se manifeste instantaneamente.
Fazei-me senhor absoluto do meu destino.
Com vosso poder, nada me é impossível. c🔱`,
            action: "Recite com voz firme e autoridade, sentindo o poder crescer em você",
            details: "Este é o momento crucial. Sinta o poder de São Cipriano fluindo através de você."
          },
          {
            title: "Declaração de Poder Pessoal",
            instruction: "Declare com autoridade absoluta seus objetivos e desejos",
            action: "Fale em voz alta: 'Eu tenho o poder de...' e declare seus objetivos",
            details: "Use frases de poder: 'Eu comando', 'Eu decreto', 'Eu manifesto'. Sinta-se poderoso."
          },
          {
            title: "Canalização da Energia Suprema",
            instruction: "Visualize energia dourada entrando em seu corpo",
            action: "Sinta o poder de São Cipriano preenchendo cada célula do seu ser",
            details: "Esta energia transformará você permanentemente. Absorva-a completamente."
          },
          {
            title: "Selamento do Poder Recebido",
            instruction: "Sele o poder recebido com gratidão e compromisso",
            action: "Agradeça e prometa usar o poder para o bem e para glorificar São Cipriano",
            details: "O poder selado permanece ativo. Use-o sempre com sabedoria e responsabilidade."
          }
        ]
      }
    }
  ];

  const startRitual = (ritual: Ritual) => {
    setSelectedRitual(ritual);
    setIsActive(true);
    setCurrentStep(0);
    window.scrollTo(0, 0);
  };

  const nextStep = () => {
    if (selectedRitual && currentStep < selectedRitual.fullRitual.steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      completeRitual();
    }
  };

  const completeRitual = async () => {
    if (selectedRitual) {
      // Increment ritual count when ritual is completed
      await StorageService.incrementRitualCount();
    }
    setIsActive(false);
    setSelectedRitual(null);
    setCurrentStep(0);
    window.scrollTo(0, 0);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Iniciante': return 'bg-green-500';
      case 'Intermediário': return 'bg-gold-500';
      case 'Avançado': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getDifficultyTranslated = (difficulty: string) => {
    if (difficulty === 'Iniciante') return t('difficulty.iniciante');
    if (difficulty === 'Intermediário') return t('difficulty.intermediario');
    if (difficulty === 'Avançado') return t('difficulty.avancado');
    return difficulty;
  };

  if (selectedRitual && isActive) {
    const currentStepData = selectedRitual.fullRitual.steps[currentStep];

    return (
      <div className="min-h-screen bg-obsidian-gradient">
        {/* Language Selector */}
        <LanguageSelector language={language} onLanguageChange={changeLanguage} />
        
        {/* Header */}
        <div className="flex items-center p-4 md:p-6 border-b border-gold-500/30">
          <button
            onClick={completeRitual}
            className="text-gold-400 hover:text-gold-300 transition-colors p-2"
          >
            <ArrowLeft size={24} />
          </button>
          <h1 className="flex-1 text-lg md:text-xl font-black text-gold-400 text-center mr-10 sacred-text">
            {selectedRitual.name}
          </h1>
        </div>

        {/* Candles */}
        <div className="text-center py-12 md:py-16">
          <div className="flex justify-center flex-wrap gap-4 md:gap-6 mb-8">
            {[...Array(selectedRitual.candles)].map((_, i) => (
              <div key={i} className="text-5xl md:text-6xl animate-flame sacred-flame" style={{ animationDelay: `${i * 0.5}s` }}>
                🕯️
              </div>
            ))}
          </div>
          <p className="text-gold-200 text-base md:text-lg font-semibold px-4">
            {t('keepCandles').replace('{count}', selectedRitual.candles.toString())}
          </p>
        </div>

        {/* Step Content */}
        <div className="px-4 md:px-6 text-center mb-12">
          <p className="text-gold-300 mb-6 text-lg md:text-xl">
            {t('step')} {currentStep + 1} {t('of')} {selectedRitual.fullRitual.steps.length}
          </p>
          <h2 className="text-2xl md:text-3xl font-black text-gold-400 mb-8 sacred-text animate-glow-text">
            {currentStepData.title}
          </h2>
          
          <div className="temple-section rounded-3xl p-6 md:p-8 max-w-4xl mx-auto mb-8 shadow-sacred">
            <p className="text-white text-lg md:text-xl leading-relaxed mb-6">
              {currentStepData.instruction}
            </p>
            <p className="text-gold-200 italic text-base md:text-lg mb-6">
              {currentStepData.action}
            </p>
            
            {/* Ritual Text to Recite */}
            {currentStepData.text && (
              <div className="bg-gold-500/10 rounded-3xl p-6 md:p-8 mb-6 border border-gold-500/30 shadow-sacred">
                <h4 className="text-gold-400 font-black text-lg mb-4 sacred-text">{t('reciteAloud')}</h4>
                <p className="text-white text-lg md:text-xl leading-relaxed whitespace-pre-line prayer-text">
                  {currentStepData.text}
                </p>
              </div>
            )}
            
            <div className="bg-gold-500/10 rounded-2xl p-4 md:p-6 border border-gold-500/30">
              <p className="text-gold-100 text-base md:text-lg leading-relaxed">
                💡 <strong>{t('importantGuidance')}</strong> {currentStepData.details}
              </p>
            </div>
          </div>
        </div>

        {/* Progress */}
        <div className="px-4 md:px-6 mb-8">
          <div className="w-full bg-obsidian-200 rounded-full h-3 max-w-4xl mx-auto">
            <div
              className="bg-gold-400 h-3 rounded-full transition-all duration-500 shadow-divine"
              style={{ width: `${((currentStep + 1) / selectedRitual.fullRitual.steps.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Continue Button */}
        <div className="px-4 md:px-6 pb-24">
          <div className="max-w-2xl mx-auto">
            <button
              onClick={nextStep}
              className="w-full sacred-button py-5 md:py-6 rounded-full text-lg md:text-xl font-black tracking-wide transition-all duration-300 transform hover:scale-105 shadow-divine"
            >
              {currentStep === selectedRitual.fullRitual.steps.length - 1 ? t('finishRitual') : t('nextStep')}
            </button>
            
            {currentStep === selectedRitual.fullRitual.steps.length - 1 && (
              <p className="text-gold-300 text-center mt-6 italic text-lg">
                🌟 {t('ritualComplete')} 🌟
              </p>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-obsidian-gradient">
      {/* Language Selector */}
      <LanguageSelector language={language} onLanguageChange={changeLanguage} />
      
      {/* Header */}
      <div className="text-center py-8 md:py-12 border-b border-gold-500/30">
        <h1 className="text-3xl md:text-4xl font-black text-gold-400 tracking-wider mb-4 sacred-text animate-glow-text">
          {t('title')}
        </h1>
        <p className="text-gold-200 tracking-wide text-lg md:text-xl">
          c🔱 {t('subtitle')} c🔱
        </p>
      </div>

      {/* Sacred Symbol */}
      <div className="text-center py-12 md:py-16">
        <div className="text-6xl md:text-8xl text-gold-400 mb-6 animate-glow-text mystical-glow">
          c🔱
        </div>
        <p className="text-gold-200 tracking-wider text-xl md:text-2xl font-bold">
          {t('channelPower')}
        </p>
      </div>

      {/* Conversion Message */}
      <div className="mx-4 md:mx-6 mb-12 conversion-section rounded-3xl p-6 md:p-8 text-center shadow-mystical">
        <h2 className="sacred-text text-2xl md:text-3xl font-black text-gold-400 mb-4">
          {t('transformMessage')}
        </h2>
        <p className="text-gold-200 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
          {t('transformDesc')}
        </p>
      </div>

      {/* Rituals List */}
      <div className="px-4 md:px-6 pb-24">
        <div className="space-y-6 max-w-6xl mx-auto">
          {rituals.map((ritual) => {
            const IconComponent = ritual.icon;
            return (
              <button
                key={ritual.id}
                onClick={() => startRitual(ritual)}
                className="w-full temple-section rounded-3xl p-6 md:p-8 text-left hover:scale-105 transition-all duration-300 transform shadow-sacred hover-lift"
              >
                <div className="flex flex-col md:flex-row justify-between items-start mb-6">
                  <div className="flex items-start gap-4 md:gap-6 mb-4 md:mb-0 flex-1 md:mr-4">
                    <div className="text-gold-400 animate-pulse-sacred">
                      <IconComponent size={40} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-black text-white mb-2 sacred-text leading-tight">
                        {ritual.name}
                      </h3>
                      <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                        <span className="text-gold-200 text-sm md:text-base font-semibold">
                          ⏱️ {ritual.duration}
                        </span>
                        <span className={`${getDifficultyColor(ritual.difficulty)} text-white text-xs px-3 py-1 rounded-full font-black w-fit`}>
                          {getDifficultyTranslated(ritual.difficulty)}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gold-400/20 border border-gold-400 rounded-full px-4 py-2 flex-shrink-0">
                    <span className="text-gold-400 text-sm md:text-base font-black">
                      🕯️ {ritual.candles} {t('candles')}
                    </span>
                  </div>
                </div>
                
                <p className="text-gold-100 leading-relaxed mb-6 text-base md:text-lg">
                  {ritual.description}
                </p>

                {/* Benefits */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
                  {ritual.benefits.map((benefit, index) => (
                    <div key={index} className="bg-gold-500/10 rounded-xl p-3 text-center border border-gold-500/30">
                      <span className="text-gold-400 font-bold text-sm md:text-base">✨ {benefit}</span>
                    </div>
                  ))}
                </div>

                {/* Results */}
                <div className="bg-green-500/20 rounded-2xl p-4 md:p-6 mb-6 border border-green-500/30 shadow-sacred">
                  <p className="text-green-300 font-bold text-center text-base md:text-lg">
                    🎯 {t('guaranteedResult')} {ritual.results}
                  </p>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gold-200 italic text-sm md:text-base">
                    {t('touchToStart')}
                  </span>
                  <div className="flex items-center gap-2 text-gold-400">
                    <span className="font-bold text-sm md:text-base">{t('start')}</span>
                    <Play size={20} />
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Sacred Agreement Reminder */}
        <div className="mt-16 sacred-agreement-section rounded-3xl p-6 md:p-8 text-center shadow-mystical max-w-4xl mx-auto">
          <Crown className="text-gold-400 mx-auto mb-6" size={48} />
          <h3 className="sacred-text text-2xl md:text-3xl font-black text-gold-400 mb-6">
            {t('rememberAgreement')}
          </h3>
          <p className="text-gold-200 text-lg md:text-xl leading-relaxed mb-8 max-w-3xl mx-auto">
            {t('agreementDesc')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gold-500/10 rounded-xl p-4 border border-gold-500/30 shadow-sacred">
              <p className="text-gold-400 font-bold">🙏 {t('prayDaily')}</p>
            </div>
            <div className="bg-gold-500/10 rounded-xl p-4 border border-gold-500/30 shadow-sacred">
              <p className="text-gold-400 font-bold">🕯️ {t('lightCandles')}</p>
            </div>
            <div className="bg-gold-500/10 rounded-xl p-4 border border-gold-500/30 shadow-sacred">
              <p className="text-gold-400 font-bold">📢 {t('spreadWord')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
