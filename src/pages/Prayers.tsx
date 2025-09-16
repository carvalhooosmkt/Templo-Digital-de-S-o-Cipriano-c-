import { useState, useEffect } from 'react';
import { ArrowLeft, Play, Pause, CheckCircle, Crown, Heart, Shield, Star, Zap, Sparkles, Globe, ChevronDown } from 'lucide-react';
import { StorageService } from '../utils/storage';

const translations = {
  pt: {
    title: "ORAÇÕES SAGRADAS SUPREMAS",
    subtitle: "PALAVRAS DE PODER INFINITO",
    channelPower: "CANALIZE O PODER SUPREMO",
    transformMessage: "ORAÇÕES QUE TRANSFORMAM VIDAS RADICALMENTE",
    transformDesc: "Estas orações sagradas já realizaram milhões de milagres pelo mundo inteiro. Escolha a sua e prepare-se para uma transformação extraordinária e definitiva!",
    touchToRecite: "Toque para recitar com poder supremo",
    benefitsTitle: "BENEFÍCIOS DESTA ORAÇÃO SAGRADA",
    sacredInstructions: "INSTRUÇÕES SAGRADAS:",
    sacredMessage: "Recite esta oração com fé absoluta e devoção sincera. São Cipriano ouve cada palavra e trabalhará incansavelmente para realizar seus pedidos mais profundos.",
    keepCandles: "Mantenha as velas acesas durante toda a oração e concentre-se intensamente em seu pedido",
    startPrayer: "Iniciar Oração",
    pausePrayer: "Pausar Oração",
    concludeAndThank: "CONCLUIR E AGRADECER",
    prayerHeard: "Sua oração foi ouvida! Aguarde os milagres de São Cipriano com fé absoluta",
    howToRecite: "COMO RECITAR AS ORAÇÕES SAGRADAS",
    sacredPreparation: "PREPARAÇÃO SAGRADA:",
    duringPrayer: "DURANTE A ORAÇÃO:",
    sacredPromise: "PROMESSA SAGRADA ETERNA",
    promiseText: "Aqueles que recitam estas orações com fé verdadeira e devoção sincera verão milagres extraordinários e impossíveis acontecerem em suas vidas. São Cipriano nunca abandona seus devotos fiéis e sempre recompensa aqueles que o honram com amor verdadeiro.",
    preparationSteps: [
      "Acenda uma vela branca ou dourada com reverência",
      "Encontre um local tranquilo e sagrado",
      "Tenha uma imagem de São Cipriano por perto",
      "Respire profundamente 7 vezes para purificar",
      "Concentre-se completamente no seu pedido"
    ],
    prayerSteps: [
      "Recite em voz alta com emoção verdadeira",
      "Visualize intensamente seu pedido sendo atendido",
      "Mantenha fé absoluta e inabalável",
      "Agradeça como se já tivesse recebido o milagre",
      "Sinta a presença poderosa de São Cipriano"
    ],
    prayers: {
      protection: {
        title: "Oração da Proteção Suprema",
        category: "Proteção Divina Absoluta",
        purpose: "Proteção total contra todas as adversidades, energias negativas e ataques espirituais",
        benefits: ["Escudo espiritual impenetrável", "Afasta toda inveja e olho gordo", "Proteção familiar completa e eterna"],
        instructions: "Recite com uma vela branca acesa, de manhã ou à noite, com total fé e devoção."
      },
      prosperity: {
        title: "Oração da Prosperidade Infinita",
        category: "Riqueza e Abundância Extrema",
        purpose: "Atração de riqueza extrema, abundância sem limites e oportunidades de ouro",
        benefits: ["Riqueza multiplicada exponencialmente", "Oportunidades de ouro surgem constantemente", "Abundância em todas as áreas da vida"],
        instructions: "Recite diariamente pela manhã com uma vela dourada, visualizando sua prosperidade."
      },
      power: {
        title: "Oração do Poder Supremo",
        category: "Poder Pessoal e Autoridade",
        purpose: "Desenvolvimento de poder pessoal, autoridade absoluta e influência mundial",
        benefits: ["Autoridade suprema sobre todas as situações", "Influência mundial e reconhecimento", "Poder de manifestação instantânea"],
        instructions: "Recite em local reservado, com 7 velas douradas, concentrando-se em seu poder interior."
      },
      love: {
        title: "Oração do Amor Verdadeiro",
        category: "Amor e Relacionamentos Perfeitos",
        purpose: "Atração do amor verdadeiro, relacionamentos perfeitos e união eterna",
        benefits: ["Amor verdadeiro e duradouro", "Relacionamento dos sonhos realizado", "União sagrada e eterna"],
        instructions: "Recite com duas velas vermelhas acesas, pensando na pessoa amada ou no amor que deseja."
      },
      healing: {
        title: "Oração da Cura Milagrosa",
        category: "Saúde Perfeita e Cura Divina",
        purpose: "Cura completa de todas as doenças, saúde perfeita e vitalidade extrema",
        benefits: ["Cura total e definitiva", "Saúde radiante e perfeita", "Vitalidade extrema e duradoura"],
        instructions: "Recite com uma vela branca, tocando a parte do corpo que precisa de cura."
      },
      fame: {
        title: "Oração da Fama Mundial",
        category: "Sucesso Global e Reconhecimento",
        purpose: "Alcançar fama mundial, reconhecimento global e influência planetária",
        benefits: ["Fama internacional garantida", "Reconhecimento mundial em sua área", "Influência global positiva"],
        instructions: "Recite com 5 velas douradas em formato de estrela, visualizando seu sucesso mundial."
      }
    }
  },
  
  en: {
    title: "SUPREME SACRED PRAYERS",
    subtitle: "WORDS OF INFINITE POWER",
    channelPower: "CHANNEL THE SUPREME POWER",
    transformMessage: "PRAYERS THAT RADICALLY TRANSFORM LIVES",
    transformDesc: "These sacred prayers have already performed millions of miracles worldwide. Choose yours and prepare for an extraordinary and definitive transformation!",
    touchToRecite: "Touch to recite with supreme power",
    benefitsTitle: "BENEFITS OF THIS SACRED PRAYER",
    sacredInstructions: "SACRED INSTRUCTIONS:",
    sacredMessage: "Recite this prayer with absolute faith and sincere devotion. Saint Cyprian hears every word and will work tirelessly to fulfill your deepest requests.",
    keepCandles: "Keep the candles lit throughout the prayer and focus intensely on your request",
    startPrayer: "Start Prayer",
    pausePrayer: "Pause Prayer",
    concludeAndThank: "CONCLUDE AND THANK",
    prayerHeard: "Your prayer has been heard! Await Saint Cyprian's miracles with absolute faith",
    howToRecite: "HOW TO RECITE THE SACRED PRAYERS",
    sacredPreparation: "SACRED PREPARATION:",
    duringPrayer: "DURING PRAYER:",
    sacredPromise: "ETERNAL SACRED PROMISE",
    promiseText: "Those who recite these prayers with true faith and sincere devotion will see extraordinary and impossible miracles happen in their lives. Saint Cyprian never abandons his faithful devotees and always rewards those who honor him with true love.",
    preparationSteps: [
      "Light a white or golden candle with reverence",
      "Find a quiet and sacred place",
      "Have an image of Saint Cyprian nearby",
      "Breathe deeply 7 times to purify",
      "Focus completely on your request"
    ],
    prayerSteps: [
      "Recite aloud with true emotion",
      "Intensely visualize your request being fulfilled",
      "Maintain absolute and unshakeable faith",
      "Give thanks as if you already received the miracle",
      "Feel Saint Cyprian's powerful presence"
    ],
    prayers: {
      protection: {
        title: "Prayer of Supreme Protection",
        category: "Absolute Divine Protection",
        purpose: "Total protection against all adversities, negative energies and spiritual attacks",
        benefits: ["Impenetrable spiritual shield", "Repels all envy and evil eye", "Complete and eternal family protection"],
        instructions: "Recite with a white candle lit, morning or night, with total faith and devotion."
      },
      prosperity: {
        title: "Prayer of Infinite Prosperity",
        category: "Wealth and Extreme Abundance",
        purpose: "Attraction of extreme wealth, limitless abundance and golden opportunities",
        benefits: ["Exponentially multiplied wealth", "Golden opportunities arise constantly", "Abundance in all areas of life"],
        instructions: "Recite daily in the morning with a golden candle, visualizing your prosperity."
      },
      power: {
        title: "Prayer of Supreme Power",
        category: "Personal Power and Authority",
        purpose: "Development of personal power, absolute authority and worldwide influence",
        benefits: ["Supreme authority over all situations", "Worldwide influence and recognition", "Instant manifestation power"],
        instructions: "Recite in a private place, with 7 golden candles, focusing on your inner power."
      },
      love: {
        title: "Prayer of True Love",
        category: "Love and Perfect Relationships",
        purpose: "Attraction of true love, perfect relationships and eternal union",
        benefits: ["True and lasting love", "Dream relationship realized", "Sacred and eternal union"],
        instructions: "Recite with two red candles lit, thinking of the loved one or the love you desire."
      },
      healing: {
        title: "Prayer of Miraculous Healing",
        category: "Perfect Health and Divine Healing",
        purpose: "Complete healing of all diseases, perfect health and extreme vitality",
        benefits: ["Total and definitive healing", "Radiant and perfect health", "Extreme and lasting vitality"],
        instructions: "Recite with a white candle, touching the body part that needs healing."
      },
      fame: {
        title: "Prayer of World Fame",
        category: "Global Success and Recognition",
        purpose: "Achieve world fame, global recognition and planetary influence",
        benefits: ["Guaranteed international fame", "Worldwide recognition in your field", "Positive global influence"],
        instructions: "Recite with 5 golden candles in star formation, visualizing your worldwide success."
      }
    }
  },
  
  es: {
    title: "ORACIONES SAGRADAS SUPREMAS",
    subtitle: "PALABRAS DE PODER INFINITO",
    channelPower: "CANALIZA EL PODER SUPREMO",
    transformMessage: "ORACIONES QUE TRANSFORMAN VIDAS RADICALMENTE",
    transformDesc: "¡Estas oraciones sagradas ya han realizado millones de milagros en todo el mundo. Elige la tuya y prepárate para una transformación extraordinaria y definitiva!",
    touchToRecite: "Toca para recitar con poder supremo",
    benefitsTitle: "BENEFICIOS DE ESTA ORACIÓN SAGRADA",
    sacredInstructions: "INSTRUCCIONES SAGRADAS:",
    sacredMessage: "Recita esta oración con fe absoluta y devoción sincera. San Cipriano escucha cada palabra y trabajará incansablemente para realizar tus peticiones más profundas.",
    keepCandles: "Mantén las velas encendidas durante toda la oración y concéntrate intensamente en tu petición",
    startPrayer: "Iniciar Oración",
    pausePrayer: "Pausar Oración",
    concludeAndThank: "CONCLUIR Y AGRADECER",
    prayerHeard: "¡Tu oración ha sido escuchada! Aguarda los milagros de San Cipriano con fe absoluta",
    howToRecite: "CÓMO RECITAR LAS ORACIONES SAGRADAS",
    sacredPreparation: "PREPARACIÓN SAGRADA:",
    duringPrayer: "DURANTE LA ORACIÓN:",
    sacredPromise: "PROMESA SAGRADA ETERNA",
    promiseText: "Aquellos que recitan estas oraciones con fe verdadera y devoción sincera verán milagros extraordinarios e imposibles suceder en sus vidas. San Cipriano nunca abandona a sus devotos fieles y siempre recompensa a aquellos que lo honran con amor verdadero.",
    preparationSteps: [
      "Enciende una vela blanca o dorada con reverencia",
      "Encuentra un lugar tranquilo y sagrado",
      "Ten una imagen de San Cipriano cerca",
      "Respira profundamente 7 veces para purificar",
      "Concéntrate completamente en tu petición"
    ],
    prayerSteps: [
      "Recita en voz alta con emoción verdadera",
      "Visualiza intensamente tu petición siendo cumplida",
      "Mantén fe absoluta e inquebrantable",
      "Agradece como si ya hubieras recibido el milagro",
      "Siente la presencia poderosa de San Cipriano"
    ],
    prayers: {
      protection: {
        title: "Oración de Protección Suprema",
        category: "Protección Divina Absoluta",
        purpose: "Protección total contra todas las adversidades, energías negativas y ataques espirituales",
        benefits: ["Escudo espiritual impenetrable", "Aleja toda envidia y mal de ojo", "Protección familiar completa y eterna"],
        instructions: "Recita con una vela blanca encendida, de mañana o de noche, con total fe y devoción."
      },
      prosperity: {
        title: "Oración de Prosperidad Infinita",
        category: "Riqueza y Abundancia Extrema",
        purpose: "Atracción de riqueza extrema, abundancia sin límites y oportunidades de oro",
        benefits: ["Riqueza multiplicada exponencialmente", "Oportunidades de oro surgen constantemente", "Abundancia en todas las áreas de la vida"],
        instructions: "Recita diariamente por la mañana con una vela dorada, visualizando tu prosperidad."
      },
      power: {
        title: "Oración del Poder Supremo",
        category: "Poder Personal y Autoridad",
        purpose: "Desarrollo de poder personal, autoridad absoluta e influencia mundial",
        benefits: ["Autoridad suprema sobre todas las situaciones", "Influencia mundial y reconocimiento", "Poder de manifestación instantánea"],
        instructions: "Recita en lugar reservado, con 7 velas doradas, concentrándote en tu poder interior."
      },
      love: {
        title: "Oración del Amor Verdadero",
        category: "Amor y Relaciones Perfectas",
        purpose: "Atracción del amor verdadero, relaciones perfectas y unión eterna",
        benefits: ["Amor verdadero y duradero", "Relación de los sueños realizada", "Unión sagrada y eterna"],
        instructions: "Recita con dos velas rojas encendidas, pensando en la persona amada o en el amor que deseas."
      },
      healing: {
        title: "Oración de Curación Milagrosa",
        category: "Salud Perfecta y Curación Divina",
        purpose: "Curación completa de todas las enfermedades, salud perfecta y vitalidad extrema",
        benefits: ["Curación total y definitiva", "Salud radiante y perfecta", "Vitalidad extrema y duradera"],
        instructions: "Recita con una vela blanca, tocando la parte del cuerpo que necesita curación."
      },
      fame: {
        title: "Oración de Fama Mundial",
        category: "Éxito Global y Reconocimiento",
        purpose: "Alcanzar fama mundial, reconocimiento global e influencia planetaria",
        benefits: ["Fama internacional garantizada", "Reconocimiento mundial en tu área", "Influencia global positiva"],
        instructions: "Recita con 5 velas doradas en formato de estrella, visualizando tu éxito mundial."
      }
    }
  },
  
  fr: {
    title: "PRIÈRES SACRÉES SUPRÊMES",
    subtitle: "MOTS DE POUVOIR INFINI",
    channelPower: "CANALISEZ LE POUVOIR SUPRÊME",
    transformMessage: "PRIÈRES QUI TRANSFORMENT RADICALEMENT LES VIES",
    transformDesc: "Ces prières sacrées ont déjà accompli des millions de miracles dans le monde entier. Choisissez la vôtre et préparez-vous à une transformation extraordinaire et définitive !",
    touchToRecite: "Touchez pour réciter avec le pouvoir suprême",
    benefitsTitle: "AVANTAGES DE CETTE PRIÈRE SACRÉE",
    sacredInstructions: "INSTRUCTIONS SACRÉES :",
    sacredMessage: "Récitez cette prière avec une foi absolue et une dévotion sincère. Saint Cyprien entend chaque mot et travaillera sans relâche pour réaliser vos demandes les plus profondes.",
    keepCandles: "Gardez les bougies allumées pendant toute la prière et concentrez-vous intensément sur votre demande",
    startPrayer: "Commencer la Prière",
    pausePrayer: "Pause Prière",
    concludeAndThank: "CONCLURE ET REMERCIER",
    prayerHeard: "Votre prière a été entendue ! Attendez les miracles de Saint Cyprien avec une foi absolue",
    howToRecite: "COMMENT RÉCITER LES PRIÈRES SACRÉES",
    sacredPreparation: "PRÉPARATION SACRÉE :",
    duringPrayer: "PENDANT LA PRIÈRE :",
    sacredPromise: "PROMESSE SACRÉE ÉTERNELLE",
    promiseText: "Ceux qui récitent ces prières avec une vraie foi et une dévotion sincère verront des miracles extraordinaires et impossibles se produire dans leurs vies. Saint Cyprien n'abandonne jamais ses fidèles dévots et récompense toujours ceux qui l'honorent avec un véritable amour.",
    preparationSteps: [
      "Allumez une bougie blanche ou dorée avec révérence",
      "Trouvez un endroit tranquille et sacré",
      "Ayez une image de Saint Cyprien à proximité",
      "Respirez profondément 7 fois pour purifier",
      "Concentrez-vous entièrement sur votre demande"
    ],
    prayerSteps: [
      "Récitez à haute voix avec une vraie émotion",
      "Visualisez intensément votre demande étant exaucée",
      "Maintenez une foi absolue et inébranlable",
      "Remerciez comme si vous aviez déjà reçu le miracle",
      "Sentez la présence puissante de Saint Cyprien"
    ],
    prayers: {
      protection: {
        title: "Prière de Protection Suprême",
        category: "Protection Divine Absolue",
        purpose: "Protection totale contre toutes les adversités, énergies négatives et attaques spirituelles",
        benefits: ["Bouclier spirituel impénétrable", "Repousse toute jalousie et mauvais œil", "Protection familiale complète et éternelle"],
        instructions: "Récitez avec une bougie blanche allumée, matin ou soir, avec foi totale et dévotion."
      },
      prosperity: {
        title: "Prière de Prospérité Infinie",
        category: "Richesse et Abondance Extrême",
        purpose: "Attraction de richesse extrême, abondance sans limites et opportunités d'or",
        benefits: ["Richesse multipliée exponentiellement", "Opportunités d'or surgissent constamment", "Abondance dans tous les domaines de la vie"],
        instructions: "Récitez quotidiennement le matin avec une bougie dorée, visualisant votre prospérité."
      },
      power: {
        title: "Prière du Pouvoir Suprême",
        category: "Pouvoir Personnel et Autorité",
        purpose: "Développement du pouvoir personnel, autorité absolue et influence mondiale",
        benefits: ["Autorité suprême sur toutes les situations", "Influence mondiale et reconnaissance", "Pouvoir de manifestation instantanée"],
        instructions: "Récitez dans un lieu privé, avec 7 bougies dorées, en vous concentrant sur votre pouvoir intérieur."
      },
      love: {
        title: "Prière de l'Amour Véritable",
        category: "Amour et Relations Parfaites",
        purpose: "Attraction de l'amour véritable, relations parfaites et union éternelle",
        benefits: ["Amour véritable et durable", "Relation de rêve réalisée", "Union sacrée et éternelle"],
        instructions: "Récitez avec deux bougies rouges allumées, pensant à la personne aimée ou à l'amour que vous désirez."
      },
      healing: {
        title: "Prière de Guérison Miraculeuse",
        category: "Santé Parfaite et Guérison Divine",
        purpose: "Guérison complète de toutes les maladies, santé parfaite et vitalité extrême",
        benefits: ["Guérison totale et définitive", "Santé rayonnante et parfaite", "Vitalité extrême et durable"],
        instructions: "Récitez avec une bougie blanche, touchant la partie du corps qui a besoin de guérison."
      },
      fame: {
        title: "Prière de Renommée Mondiale",
        category: "Succès Global et Reconnaissance",
        purpose: "Atteindre la renommée mondiale, reconnaissance globale et influence planétaire",
        benefits: ["Renommée internationale garantie", "Reconnaissance mondiale dans votre domaine", "Influence globale positive"],
        instructions: "Récitez avec 5 bougies dorées en formation d'étoile, visualisant votre succès mondial."
      }
    }
  },
  
  de: {
    title: "HÖCHSTE HEILIGE GEBETE",
    subtitle: "WORTE UNENDLICHER MACHT",
    channelPower: "KANALISIEREN SIE DIE HÖCHSTE MACHT",
    transformMessage: "GEBETE, DIE LEBEN RADIKAL VERWANDELN",
    transformDesc: "Diese heiligen Gebete haben bereits Millionen von Wundern weltweit vollbracht. Wählen Sie Ihres und bereiten Sie sich auf eine außergewöhnliche und definitive Transformation vor!",
    touchToRecite: "Berühren, um mit höchster Macht zu rezitieren",
    benefitsTitle: "VORTEILE DIESES HEILIGEN GEBETS",
    sacredInstructions: "HEILIGE ANWEISUNGEN:",
    sacredMessage: "Rezitieren Sie dieses Gebet mit absolutem Glauben und aufrichtiger Hingabe. Heiliger Cyprian hört jedes Wort und wird unermüdlich arbeiten, um Ihre tiefsten Bitten zu erfüllen.",
    keepCandles: "Halten Sie die Kerzen während des gesamten Gebets brennend und konzentrieren Sie sich intensiv auf Ihre Bitte",
    startPrayer: "Gebet Beginnen",
    pausePrayer: "Gebet Pausieren",
    concludeAndThank: "ABSCHLIESSEN UND DANKEN",
    prayerHeard: "Ihr Gebet wurde gehört! Erwarten Sie Heiligen Cyprians Wunder mit absolutem Glauben",
    howToRecite: "WIE MAN DIE HEILIGEN GEBETE REZITIERT",
    sacredPreparation: "HEILIGE VORBEREITUNG:",
    duringPrayer: "WÄHREND DES GEBETS:",
    sacredPromise: "EWIGES HEILIGES VERSPRECHEN",
    promiseText: "Diejenigen, die diese Gebete mit wahrem Glauben und aufrichtiger Hingabe rezitieren, werden außergewöhnliche und unmögliche Wunder in ihrem Leben geschehen sehen. Heiliger Cyprian verlässt niemals seine treuen Anhänger und belohnt immer diejenigen, die ihn mit wahrer Liebe ehren.",
    preparationSteps: [
      "Zünden Sie ehrfürchtig eine weiße oder goldene Kerze an",
      "Finden Sie einen ruhigen und heiligen Ort",
      "Haben Sie ein Bild von Heiligem Cyprian in der Nähe",
      "Atmen Sie 7 Mal tief zur Reinigung",
      "Konzentrieren Sie sich vollständig auf Ihre Bitte"
    ],
    prayerSteps: [
      "Rezitieren Sie laut mit wahrer Emotion",
      "Visualisieren Sie intensiv die Erfüllung Ihrer Bitte",
      "Bewahren Sie absoluten und unerschütterlichen Glauben",
      "Danken Sie, als hätten Sie das Wunder bereits erhalten",
      "Spüren Sie Heiligen Cyprians mächtige Gegenwart"
    ],
    prayers: {
      protection: {
        title: "Gebet des Höchsten Schutzes",
        category: "Absolute Göttliche Beschützung",
        purpose: "Totaler Schutz gegen alle Widrigkeiten, negative Energien und spirituelle Angriffe",
        benefits: ["Undurchdringlicher spiritueller Schild", "Weist alle Eifersucht und bösen Blick ab", "Vollständiger und ewiger Familienschutz"],
        instructions: "Rezitieren Sie mit einer brennenden weißen Kerze, morgens oder abends, mit totalem Glauben und Hingabe."
      },
      prosperity: {
        title: "Gebet der Unendlichen Prosperität",
        category: "Reichtum und Extreme Fülle",
        purpose: "Anziehung extremen Reichtums, grenzenloser Fülle und goldener Gelegenheiten",
        benefits: ["Exponentiell vermehrter Reichtum", "Goldene Gelegenheiten entstehen konstant", "Fülle in allen Lebensbereichen"],
        instructions: "Rezitieren Sie täglich morgens mit einer goldenen Kerze, während Sie Ihre Prosperität visualisieren."
      },
      power: {
        title: "Gebet der Höchsten Macht",
        category: "Persönliche Macht und Autorität",
        purpose: "Entwicklung persönlicher Macht, absoluter Autorität und weltweiten Einflusses",
        benefits: ["Höchste Autorität über alle Situationen", "Weltweiter Einfluss und Anerkennung", "Sofortige Manifestationsmacht"],
        instructions: "Rezitieren Sie an einem privaten Ort mit 7 goldenen Kerzen, konzentriert auf Ihre innere Macht."
      },
      love: {
        title: "Gebet der Wahren Liebe",
        category: "Liebe und Perfekte Beziehungen",
        purpose: "Anziehung wahrer Liebe, perfekter Beziehungen und ewiger Vereinigung",
        benefits: ["Wahre und dauerhafte Liebe", "Traumbeziehung verwirklicht", "Heilige und ewige Vereinigung"],
        instructions: "Rezitieren Sie mit zwei brennenden roten Kerzen, denkend an die geliebte Person oder die Liebe, die Sie begehren."
      },
      healing: {
        title: "Gebet der Wundersamen Heilung",
        category: "Perfekte Gesundheit und Göttliche Heilung",
        purpose: "Vollständige Heilung aller Krankheiten, perfekte Gesundheit und extreme Vitalität",
        benefits: ["Totale und definitive Heilung", "Strahlende und perfekte Gesundheit", "Extreme und dauerhafte Vitalität"],
        instructions: "Rezitieren Sie mit einer weißen Kerze, berührend den Körperteil, der Heilung braucht."
      },
      fame: {
        title: "Gebet des Weltruhms",
        category: "Globaler Erfolg und Anerkennung",
        purpose: "Weltruhm erreichen, globale Anerkennung und planetaren Einfluss",
        benefits: ["Garantierter internationaler Ruhm", "Weltweite Anerkennung in Ihrem Bereich", "Positiver globaler Einfluss"],
        instructions: "Rezitieren Sie mit 5 goldenen Kerzen in Sternformation, visualisierend Ihren weltweiten Erfolg."
      }
    }
  },
  
  it: {
    title: "PREGHIERE SACRE SUPREME",
    subtitle: "PAROLE DI POTERE INFINITO",
    channelPower: "INCANALATE IL POTERE SUPREMO",
    transformMessage: "PREGHIERE CHE TRASFORMANO RADICALMENTE LE VITE",
    transformDesc: "Queste preghiere sacre hanno già compiuto milioni di miracoli in tutto il mondo. Scegliete la vostra e preparatevi per una trasformazione straordinaria e definitiva!",
    touchToRecite: "Toccate per recitare con potere supremo",
    benefitsTitle: "BENEFICI DI QUESTA PREGHIERA SACRA",
    sacredInstructions: "ISTRUZIONI SACRE:",
    sacredMessage: "Recitate questa preghiera con fede assoluta e devozione sincera. San Cipriano sente ogni parola e lavorerà instancabilmente per realizzare le vostre richieste più profonde.",
    keepCandles: "Tenete le candele accese durante tutta la preghiera e concentratevi intensamente sulla vostra richiesta",
    startPrayer: "Iniziare Preghiera",
    pausePrayer: "Pausa Preghiera",
    concludeAndThank: "CONCLUDERE E RINGRAZIARE",
    prayerHeard: "La vostra preghiera è stata sentita! Aspettate i miracoli di San Cipriano con fede assoluta",
    howToRecite: "COME RECITARE LE PREGHIERE SACRE",
    sacredPreparation: "PREPARAZIONE SACRA:",
    duringPrayer: "DURANTE LA PREGHIERA:",
    sacredPromise: "PROMESSA SACRA ETERNA",
    promiseText: "Coloro che recitano queste preghiere con vera fede e devozione sincera vedranno miracoli straordinari e impossibili accadere nelle loro vite. San Cipriano non abbandona mai i suoi devoti fedeli e ricompensa sempre coloro che lo onorano con vero amore.",
    preparationSteps: [
      "Accendete una candela bianca o dorata con riverenza",
      "Trovate un luogo tranquillo e sacro",
      "Abbiate un'immagine di San Cipriano vicino",
      "Respirate profondamente 7 volte per purificare",
      "Concentratevi completamente sulla vostra richiesta"
    ],
    prayerSteps: [
      "Recitate ad alta voce con vera emozione",
      "Visualizzate intensamente la vostra richiesta che viene esaudita",
      "Mantenete fede assoluta e incrollabile",
      "Ringraziate come se aveste già ricevuto il miracolo",
      "Sentite la presenza potente di San Cipriano"
    ],
    prayers: {
      protection: {
        title: "Preghiera di Protezione Suprema",
        category: "Protezione Divina Assoluta",
        purpose: "Protezione totale contro tutte le avversità, energie negative e attacchi spirituali",
        benefits: ["Scudo spirituale impenetrabile", "Allontana tutta l'invidia e il malocchio", "Protezione familiare completa ed eterna"],
        instructions: "Recitate con una candela bianca accesa, mattina o sera, con totale fede e devozione."
      },
      prosperity: {
        title: "Preghiera di Prosperità Infinita",
        category: "Ricchezza e Abbondanza Estrema",
        purpose: "Attrazione di ricchezza estrema, abbondanza senza limiti e opportunità d'oro",
        benefits: ["Ricchezza moltiplicata esponenzialmente", "Opportunità d'oro sorgono costantemente", "Abbondanza in tutte le aree della vita"],
        instructions: "Recitate quotidianamente al mattino con una candela dorata, visualizzando la vostra prosperità."
      },
      power: {
        title: "Preghiera del Potere Supremo",
        category: "Potere Personale e Autorità",
        purpose: "Sviluppo di potere personale, autorità assoluta e influenza mondiale",
        benefits: ["Autorità suprema su tutte le situazioni", "Influenza mondiale e riconoscimento", "Potere di manifestazione istantanea"],
        instructions: "Recitate in luogo riservato, con 7 candele dorate, concentrandovi sul vostro potere interiore."
      },
      love: {
        title: "Preghiera dell'Amore Vero",
        category: "Amore e Relazioni Perfette",
        purpose: "Attrazione dell'amore vero, relazioni perfette e unione eterna",
        benefits: ["Amore vero e duraturo", "Relazione dei sogni realizzata", "Unione sacra ed eterna"],
        instructions: "Recitate con due candele rosse accese, pensando alla persona amata o all'amore che desiderate."
      },
      healing: {
        title: "Preghiera di Guarigione Miracolosa",
        category: "Salute Perfetta e Guarigione Divina",
        purpose: "Guarigione completa di tutte le malattie, salute perfetta e vitalità estrema",
        benefits: ["Guarigione totale e definitiva", "Salute radiante e perfetta", "Vitalità estrema e duratura"],
        instructions: "Recitate con una candela bianca, toccando la parte del corpo che necessita guarigione."
      },
      fame: {
        title: "Preghiera della Fama Mondiale",
        category: "Successo Globale e Riconoscimento",
        purpose: "Raggiungere fama mondiale, riconoscimento globale e influenza planetaria",
        benefits: ["Fama internazionale garantita", "Riconoscimento mondiale nella vostra area", "Influenza globale positiva"],
        instructions: "Recitate con 5 candele dorate in formazione stellare, visualizzando il vostro successo mondiale."
      }
    }
  },
  
  ru: {
    title: "ВЫСШИЕ СВЯЩЕННЫЕ МОЛИТВЫ",
    subtitle: "СЛОВА БЕСКОНЕЧНОЙ СИЛЫ",
    channelPower: "НАПРАВЬТЕ ВЫСШУЮ СИЛУ",
    transformMessage: "МОЛИТВЫ, РАДИКАЛЬНО ПРЕОБРАЗУЮЩИЕ ЖИЗНИ",
    transformDesc: "Эти священные молитвы уже совершили миллионы чудес по всему миру. Выберите свою и приготовьтесь к необыкновенной и окончательной трансформации!",
    touchToRecite: "Коснитесь, чтобы читать с высшей силой",
    benefitsTitle: "ПРЕИМУЩЕСТВА ЭТОЙ СВЯЩЕННОЙ МОЛИТВЫ",
    sacredInstructions: "СВЯЩЕННЫЕ ИНСТРУКЦИИ:",
    sacredMessage: "Читайте эту молитву с абсолютной верой и искренней преданностью. Святой Киприан слышит каждое слово и будет неустанно работать для исполнения ваших глубочайших просьб.",
    keepCandles: "Держите свечи зажженными во время всей молитвы и интенсивно сосредоточьтесь на вашей просьбе",
    startPrayer: "Начать Молитву",
    pausePrayer: "Приостановить Молитву",
    concludeAndThank: "ЗАВЕРШИТЬ И ПОБЛАГОДАРИТЬ",
    prayerHeard: "Ваша молитва услышана! Ожидайте чудеса Святого Киприана с абсолютной верой",
    howToRecite: "КАК ЧИТАТЬ СВЯЩЕННЫЕ МОЛИТВЫ",
    sacredPreparation: "СВЯЩЕННАЯ ПОДГОТОВКА:",
    duringPrayer: "ВО ВРЕМЯ МОЛИТВЫ:",
    sacredPromise: "ВЕЧНОЕ СВЯЩЕННОЕ ОБЕЩАНИЕ",
    promiseText: "Те, кто читает эти молитвы с истинной верой и искренней преданностью, увидят необыкновенные и невозможные чудеса в своих жизнях. Святой Киприан никогда не покидает своих верных последователей и всегда вознаграждает тех, кто чтит его истинной любовью.",
    preparationSteps: [
      "Зажгите белую или золотую свечу с благоговением",
      "Найдите тихое и священное место",
      "Имейте изображение Святого Киприана рядом",
      "Дышите глубоко 7 раз для очищения",
      "Полностью сосредоточьтесь на вашей просьбе"
    ],
    prayerSteps: [
      "Читайте вслух с истинной эмоцией",
      "Интенсивно визуализируйте исполнение вашей просьбы",
      "Поддерживайте абсолютную и непоколебимую веру",
      "Благодарите, как будто уже получили чудо",
      "Почувствуйте мощное присутствие Святого Киприана"
    ],
    prayers: {
      protection: {
        title: "Молитва Высшей Защиты",
        category: "Абсолютная Божественная Защита",
        purpose: "Полная защита от всех невзгод, негативных энергий и духовных атак",
        benefits: ["Непроницаемый духовный щит", "Отталкивает всю зависть и дурной глаз", "Полная и вечная семейная защита"],
        instructions: "Читайте с зажженной белой свечой, утром или вечером, с полной верой и преданностью."
      },
      prosperity: {
        title: "Молитва Бесконечного Процветания",
        category: "Богатство и Крайнее Изобилие",
        purpose: "Привлечение крайнего богатства, безграничного изобилия и золотых возможностей",
        benefits: ["Экспоненциально умноженное богатство", "Золотые возможности возникают постоянно", "Изобилие во всех сферах жизни"],
        instructions: "Читайте ежедневно утром с золотой свечой, визуализируя ваше процветание."
      },
      power: {
        title: "Молитва Высшей Силы",
        category: "Личная Сила и Власть",
        purpose: "Развитие личной силы, абсолютной власти и мирового влияния",
        benefits: ["Высшая власть над всеми ситуациями", "Мировое влияние и признание", "Сила мгновенного проявления"],
        instructions: "Читайте в уединенном месте с 7 золотыми свечами, сосредоточившись на вашей внутренней силе."
      },
      love: {
        title: "Молитва Истинной Любви",
        category: "Любовь и Совершенные Отношения",
        purpose: "Привлечение истинной любви, совершенных отношений и вечного союза",
        benefits: ["Истинная и длительная любовь", "Отношения мечты осуществлены", "Священный и вечный союз"],
        instructions: "Читайте с двумя зажженными красными свечами, думая о любимом человеке или любви, которую желаете."
      },
      healing: {
        title: "Молитва Чудесного Исцеления",
        category: "Совершенное Здоровье и Божественное Исцеление",
        purpose: "Полное исцеление от всех болезней, совершенное здоровье и крайняя жизненность",
        benefits: ["Полное и окончательное исцеление", "Сияющее и совершенное здоровье", "Крайняя и длительная жизненность"],
        instructions: "Читайте с белой свечой, касаясь части тела, нуждающейся в исцелении."
      },
      fame: {
        title: "Молитва Мировой Славы",
        category: "Глобальный Успех и Признание",
        purpose: "Достижение мировой славы, глобального признания и планетарного влияния",
        benefits: ["Гарантированная международная слава", "Мировое признание в вашей области", "Позитивное глобальное влияние"],
        instructions: "Читайте с 5 золотыми свечами в звездной формации, визуализируя ваш мировой успех."
      }
    }
  },
  
  zh: {
    title: "至高神圣祈祷",
    subtitle: "无限力量之词",
    channelPower: "引导至高力量",
    transformMessage: "彻底改变生活的祈祷",
    transformDesc: "这些神圣祈祷已经在全世界创造了数百万奇迹。选择您的祈祷，准备迎接非凡和决定性的转变！",
    touchToRecite: "触摸以至高力量诵读",
    benefitsTitle: "这个神圣祈祷的好处",
    sacredInstructions: "神圣指示：",
    sacredMessage: "以绝对信仰和真诚奉献诵读这个祈祷。圣西普里安听到每一个字，将不懈地工作来实现您最深的请求。",
    keepCandles: "在整个祈祷期间保持蜡烛点燃，并专注于您的请求",
    startPrayer: "开始祈祷",
    pausePrayer: "暂停祈祷",
    concludeAndThank: "结束并感谢",
    prayerHeard: "您的祈祷已被听到！以绝对信仰等待圣西普里安的奇迹",
    howToRecite: "如何诵读神圣祈祷",
    sacredPreparation: "神圣准备：",
    duringPrayer: "祈祷期间：",
    sacredPromise: "永恒神圣承诺",
    promiseText: "那些以真正信仰和真诚奉献诵读这些祈祷的人将看到非凡和不可能的奇迹在他们的生活中发生。圣西普里安永远不会抛弃他忠实的信徒，总是奖励那些以真爱尊敬他的人。",
    preparationSteps: [
      "虔诚地点燃白色或金色蜡烛",
      "找一个安静神圣的地方",
      "在附近放一张圣西普里安的图像",
      "深呼吸7次净化",
      "完全专注于您的请求"
    ],
    prayerSteps: [
      "以真实情感大声诵读",
      "强烈地想象您的请求被实现",
      "保持绝对和不可动摇的信仰",
      "感谢，就像您已经收到奇迹一样",
      "感受圣西普里安的强大存在"
    ],
    prayers: {
      protection: {
        title: "至高保护祈祷",
        category: "绝对神圣保护",
        purpose: "对所有逆境、负面能量和精神攻击的全面保护",
        benefits: ["不可穿透的精神盾牌", "驱散所有嫉妒和邪眼", "完整和永恒的家庭保护"],
        instructions: "用点燃的白蜡烛诵读，早晨或晚上，以完全的信仰和奉献。"
      },
      prosperity: {
        title: "无限繁荣祈祷",
        category: "财富和极度丰盛",
        purpose: "吸引极度财富、无限丰盛和黄金机会",
        benefits: ["指数级增长的财富", "黄金机会不断出现", "生活各个领域的丰盛"],
        instructions: "每天早晨用金蜡烛诵读，想象您的繁荣。"
      },
      power: {
        title: "至高力量祈祷",
        category: "个人力量和权威",
        purpose: "发展个人力量、绝对权威和世界影响力",
        benefits: ["对所有情况的至高权威", "世界影响力和认可", "即时显现力量"],
        instructions: "在私人场所用7支金蜡烛诵读，专注于您的内在力量。"
      },
      love: {
        title: "真爱祈祷",
        category: "爱情和完美关系",
        purpose: "吸引真爱、完美关系和永恒结合",
        benefits: ["真实持久的爱", "梦想关系实现", "神圣永恒的结合"],
        instructions: "用两支点燃的红蜡烛诵读，想着心爱的人或您渴望的爱。"
      },
      healing: {
        title: "奇迹治愈祈祷",
        category: "完美健康和神圣治愈",
        purpose: "所有疾病的完全治愈、完美健康和极度活力",
        benefits: ["完全和决定性的治愈", "光辉完美的健康", "极度持久的活力"],
        instructions: "用白蜡烛诵读，触摸需要治愈的身体部位。"
      },
      fame: {
        title: "世界名声祈祷",
        category: "全球成功和认可",
        purpose: "获得世界名声、全球认可和行星影响力",
        benefits: ["保证的国际名声", "您领域的世界认可", "积极的全球影响"],
        instructions: "用5支金蜡烛以星形排列诵读，想象您的世界成功。"
      }
    }
  },
  
  ja: {
    title: "至高の神聖な祈り",
    subtitle: "無限の力の言葉",
    channelPower: "至高の力をチャネルする",
    transformMessage: "人生を根本的に変革する祈り",
    transformDesc: "これらの神聖な祈りは既に世界中で数百万の奇跡を行いました。あなたのものを選んで、非凡で決定的な変革に備えてください！",
    touchToRecite: "至高の力で唱えるにはタッチ",
    benefitsTitle: "この神聖な祈りの利益",
    sacredInstructions: "神聖な指示：",
    sacredMessage: "絶対的な信仰と真摯な献身でこの祈りを唱えてください。聖キプリアヌスはすべての言葉を聞き、あなたの最も深い要求を満たすために絶え間なく働くでしょう。",
    keepCandles: "祈りの間中ろうそくを灯し続け、あなたの要求に集中してください",
    startPrayer: "祈りを始める",
    pausePrayer: "祈りを一時停止",
    concludeAndThank: "結論して感謝する",
    prayerHeard: "あなたの祈りは聞かれました！絶対的な信仰で聖キプリアヌスの奇跡を待ってください",
    howToRecite: "神聖な祈りの唱え方",
    sacredPreparation: "神聖な準備：",
    duringPrayer: "祈りの間：",
    sacredPromise: "永遠の神聖な約束",
    promiseText: "真の信仰と真摯な献身でこれらの祈りを唱える者は、彼らの人生で非凡で不可能な奇跡が起こるのを見るでしょう。聖キプリアヌスは決して忠実な信者を見捨てず、真の愛で彼を敬う者を常に報います。",
    preparationSteps: [
      "敬意を持って白または金のろうそくを灯す",
      "静かで神聖な場所を見つける",
      "近くに聖キプリアヌスの画像を置く",
      "浄化のために7回深呼吸する",
      "あなたの要求に完全に集中する"
    ],
    prayerSteps: [
      "真の感情で声に出して唱える",
      "あなたの要求が満たされることを強く視覚化する",
      "絶対的で揺るぎない信仰を維持する",
      "既に奇跡を受けたかのように感謝する",
      "聖キプリアヌスの強力な存在を感じる"
    ],
    prayers: {
      protection: {
        title: "至高の保護の祈り",
        category: "絶対的神聖保護",
        purpose: "すべての逆境、負のエネルギー、精神的攻撃に対する完全な保護",
        benefits: ["貫通できない精神的盾", "すべての妬みと悪い目を払い除ける", "完全で永遠の家族保護"],
        instructions: "白いろうそくを灯して、朝または夜に、完全な信仰と献身で唱えてください。"
      },
      prosperity: {
        title: "無限繁栄の祈り",
        category: "富と極度の豊かさ",
        purpose: "極度の富、無制限の豊かさ、黄金の機会の引き寄せ",
        benefits: ["指数関数的に増加した富", "黄金の機会が絶えず現れる", "人生のすべての分野での豊かさ"],
        instructions: "毎日朝に金のろうそくで、あなたの繁栄を視覚化しながら唱えてください。"
      },
      power: {
        title: "至高の力の祈り",
        category: "個人的力と権威",
        purpose: "個人的力、絶対的権威、世界的影響力の発展",
        benefits: ["すべての状況に対する至高の権威", "世界的影響力と認識", "即座の現実化力"],
        instructions: "7本の金のろうそくで、あなたの内なる力に集中して、プライベートな場所で唱えてください。"
      },
      love: {
        title: "真の愛の祈り",
        category: "愛と完璧な関係",
        purpose: "真の愛、完璧な関係、永遠の結合の引き寄せ",
        benefits: ["真実で永続的な愛", "夢の関係が実現", "神聖で永遠の結合"],
        instructions: "2本の赤いろうそくを灯して、愛する人やあなたが望む愛を思いながら唱えてください。"
      },
      healing: {
        title: "奇跡的治癒の祈り",
        category: "完璧な健康と神聖な治癒",
        purpose: "すべての病気の完全な治癒、完璧な健康、極度の活力",
        benefits: ["完全で決定的な治癒", "輝く完璧な健康", "極度で持続的な活力"],
        instructions: "白いろうそくで、治癒が必要な体の部分に触れながら唱えてください。"
      },
      fame: {
        title: "世界的名声の祈り",
        category: "グローバルな成功と認識",
        purpose: "世界的名声、グローバルな認識、惑星的影響力の達成",
        benefits: ["保証された国際的名声", "あなたの分野での世界的認識", "ポジティブなグローバル影響"],
        instructions: "5本の金のろうそくを星形に配置して、あなたの世界的成功を視覚化しながら唱えてください。"
      }
    }
  },
  
  ar: {
    title: "الصلوات المقدسة العليا",
    subtitle: "كلمات القوة اللانهائية",
    channelPower: "وجهوا القوة العليا",
    transformMessage: "صلوات تحول الحياة جذرياً",
    transformDesc: "هذه الصلوات المقدسة حققت بالفعل ملايين المعجزات في جميع أنحاء العالم. اختاروا صلاتكم واستعدوا لتحول استثنائي ونهائي!",
    touchToRecite: "المسوا للتلاوة بقوة عليا",
    benefitsTitle: "فوائد هذه الصلاة المقدسة",
    sacredInstructions: "تعليمات مقدسة:",
    sacredMessage: "اتلوا هذه الصلاة بإيمان مطلق وتفان صادق. القديس قبريانوس يسمع كل كلمة وسيعمل بلا كلل لتحقيق طلباتكم الأعمق.",
    keepCandles: "أبقوا الشموع مضاءة طوال الصلاة وركزوا بشدة على طلبكم",
    startPrayer: "بدء الصلاة",
    pausePrayer: "إيقاف الصلاة",
    concludeAndThank: "الختام والشكر",
    prayerHeard: "صلاتكم سُمعت! انتظروا معجزات القديس قبريانوس بإيمان مطلق",
    howToRecite: "كيفية تلاوة الصلوات المقدسة",
    sacredPreparation: "التحضير المقدس:",
    duringPrayer: "أثناء الصلاة:",
    sacredPromise: "وعد مقدس أبدي",
    promiseText: "أولئك الذين يتلون هذه الصلوات بإيمان حقيقي وتفان صادق سيرون معجزات استثنائية ومستحيلة تحدث في حياتهم. القديس قبريانوس لا يتخلى أبداً عن أتباعه المخلصين ويكافئ دائماً أولئك الذين يكرمونه بحب حقيقي.",
    preparationSteps: [
      "أشعلوا شمعة بيضاء أو ذهبية بخشوع",
      "اعثروا على مكان هادئ ومقدس",
      "احتفظوا بصورة القديس قبريانوس قريباً",
      "تنفسوا بعمق 7 مرات للتطهير",
      "ركزوا تماماً على طلبكم"
    ],
    prayerSteps: [
      "اتلوا بصوت عال بعاطفة حقيقية",
      "تصوروا بشدة تحقيق طلبكم",
      "حافظوا على إيمان مطلق وثابت",
      "اشكروا كما لو كنتم قد تلقيتم المعجزة بالفعل",
      "اشعروا بحضور القديس قبريانوس القوي"
    ],
    prayers: {
      protection: {
        title: "صلاة الحماية العليا",
        category: "الحماية الإلهية المطلقة",
        purpose: "حماية كاملة ضد جميع المحن والطاقات السلبية والهجمات الروحية",
        benefits: ["درع روحي لا يخترق", "يطرد كل حسد وعين شريرة", "حماية عائلية كاملة وأبدية"],
        instructions: "اتلوا مع شمعة بيضاء مضاءة، صباحاً أو مساءً، بإيمان كامل وتفان."
      },
      prosperity: {
        title: "صلاة الازدهار اللانهائي",
        category: "الثروة والوفرة المتطرفة",
        purpose: "جذب الثروة المتطرفة والوفرة بلا حدود والفرص الذهبية",
        benefits: ["ثروة مضاعفة أسياً", "فرص ذهبية تظهر باستمرار", "وفرة في جميع مجالات الحياة"],
        instructions: "اتلوا يومياً في الصباح مع شمعة ذهبية، متصورين ازدهاركم."
      },
      power: {
        title: "صلاة القوة العليا",
        category: "القوة الشخصية والسلطة",
        purpose: "تطوير القوة الشخصية والسلطة المطلقة والتأثير العالمي",
        benefits: ["سلطة عليا على جميع المواقف", "تأثير عالمي واعتراف", "قوة تجلي فوري"],
        instructions: "اتلوا في مكان خاص، مع 7 شموع ذهبية، مركزين على قوتكم الداخلية."
      },
      love: {
        title: "صلاة الحب الحقيقي",
        category: "الحب والعلاقات المثالية",
        purpose: "جذب الحب الحقيقي والعلاقات المثالية والاتحاد الأبدي",
        benefits: ["حب حقيقي ودائم", "علاقة الأحلام محققة", "اتحاد مقدس وأبدي"],
        instructions: "اتلوا مع شمعتين حمراوين مضاءتين، مفكرين في الشخص المحبوب أو الحب الذي تريدونه."
      },
      healing: {
        title: "صلاة الشفاء المعجز",
        category: "الصحة المثالية والشفاء الإلهي",
        purpose: "شفاء كامل من جميع الأمراض وصحة مثالية وحيوية متطرفة",
        benefits: ["شفاء كامل ونهائي", "صحة مشعة ومثالية", "حيوية متطرفة ودائمة"],
        instructions: "اتلوا مع شمعة بيضاء، لامسين جزء الجسم الذي يحتاج شفاء."
      },
      fame: {
        title: "صلاة الشهرة العالمية",
        category: "النجاح العالمي والاعتراف",
        purpose: "تحقيق الشهرة العالمية والاعتراف العالمي والتأثير الكوكبي",
        benefits: ["شهرة دولية مضمونة", "اعتراف عالمي في مجالكم", "تأثير عالمي إيجابي"],
        instructions: "اتلوا مع 5 شموع ذهبية في تشكيل نجمة، متصورين نجاحكم العالمي."
      }
    }
  },
  
  hi: {
    title: "सर्वोच्च पवित्र प्रार्थनाएं",
    subtitle: "अनंत शक्ति के शब्द",
    channelPower: "सर्वोच्च शक्ति चैनल करें",
    transformMessage: "प्रार्थनाएं जो जीवन को मौलिक रूप से बदलती हैं",
    transformDesc: "इन पवित्र प्रार्थनाओं ने पहले ही दुनिया भर में लाखों चमत्कार किए हैं। अपना चुनें और असाधारण और निर्णायक परिवर्तन के लिए तैयार हो जाएं!",
    touchToRecite: "सर्वोच्च शक्ति के साथ पाठ करने के लिए स्पर्श करें",
    benefitsTitle: "इस पवित्र प्रार्थना के लाभ",
    sacredInstructions: "पवित्र निर्देश:",
    sacredMessage: "इस प्रार्थना को पूर्ण विश्वास और सच्ची भक्ति के साथ पढ़ें। संत साइप्रियन हर शब्द सुनते हैं और आपकी गहरी इच्छाओं को पूरा करने के लिए अथक परिश्रम करेंगे।",
    keepCandles: "पूरी प्रार्थना के दौरान मोमबत्तियां जलाए रखें और अपने अनुरोध पर गहनता से ध्यान दें",
    startPrayer: "प्रार्थना शुरू करें",
    pausePrayer: "प्रार्थना रोकें",
    concludeAndThank: "समाप्त करें और धन्यवाद दें",
    prayerHeard: "आपकी प्रार्थना सुनी गई है! पूर्ण विश्वास के साथ संत साइप्रियन के चमत्कारों की प्रतीक्षा करें",
    howToRecite: "पवित्र प्रार्थनाओं का पाठ कैसे करें",
    sacredPreparation: "पवित्र तैयारी:",
    duringPrayer: "प्रार्थना के दौरान:",
    sacredPromise: "शाश्वत पवित्र वादा",
    promiseText: "जो लोग सच्चे विश्वास और सच्ची भक्ति के साथ इन प्रार्थनाओं का पाठ करते हैं, वे अपने जीवन में असाधारण और असंभव चमत्कार होते देखेंगे। संत साइप्रियन कभी भी अपने वफादार भक्तों को नहीं छोड़ते और हमेशा उन लोगों को पुरस्कृत करते हैं जो सच्चे प्रेम से उनका सम्मान करते हैं।",
    preparationSteps: [
      "श्रद्धा के साथ सफेद या सुनहरी मोमबत्ती जलाएं",
      "एक शांत और पवित्र स्थान खोजें",
      "पास में संत साइप्रियन की तस्वीर रखें",
      "शुद्धिकरण के लिए 7 बार गहरी सांस लें",
      "अपने अनुरोध पर पूरी तरह ध्यान दें"
    ],
    prayerSteps: [
      "सच्ची भावना के साथ जोर से पाठ करें",
      "अपने अनुरोध की पूर्ति की तीव्र कल्पना करें",
      "पूर्ण और अटूट विश्वास बनाए रखें",
      "धन्यवाद दें जैसे कि आपको पहले ही चमत्कार मिल गया हो",
      "संत साइप्रियन की शक्तिशाली उपस्थिति महसूस करें"
    ],
    prayers: {
      protection: {
        title: "सर्वोच्च सुरक्षा की प्रार्थना",
        category: "पूर्ण दिव्य सुरक्षा",
        purpose: "सभी विपत्तियों, नकारात्मक ऊर्जाओं और आध्यात्मिक हमलों के खिलाफ पूर्ण सुरक्षा",
        benefits: ["अभेद्य आध्यात्मिक ढाल", "सभी ईर्ष्या और नजर लगना दूर करता है", "पूर्ण और शाश्वत पारिवारिक सुरक्षा"],
        instructions: "सफेद मोमबत्ती जलाकर, सुबह या रात में, पूर्ण विश्वास और भक्ति के साथ पाठ करें।"
      },
      prosperity: {
        title: "अनंत समृद्धि की प्रार्थना",
        category: "धन और चरम प्रचुरता",
        purpose: "चरम धन, असीमित प्रचुरता और सुनहरे अवसरों का आकर्षण",
        benefits: ["तेजी से बढ़ता धन", "सुनहरे अवसर लगातार आते हैं", "जीवन के सभी क्षेत्रों में प्रचुरता"],
        instructions: "सुनहरी मोमबत्ती के साथ रोज सुबह, अपनी समृद्धि की कल्पना करते हुए पाठ करें।"
      },
      power: {
        title: "सर्वोच्च शक्ति की प्रार्थना",
        category: "व्यक्तिगत शक्ति और अधिकार",
        purpose: "व्यक्तिगत शक्ति, पूर्ण अधिकार और विश्वव्यापी प्रभाव का विकास",
        benefits: ["सभी स्थितियों पर सर्वोच्च अधिकार", "विश्वव्यापी प्रभाव और मान्यता", "तत्काल अभिव्यक्ति शक्ति"],
        instructions: "7 सुनहरी मोमबत्तियों के साथ, अपनी आंतरिक शक्ति पर ध्यान केंद्रित करते हुए, निजी स्थान पर पाठ करें।"
      },
      love: {
        title: "सच्चे प्रेम की प्रार्थना",
        category: "प्रेम और पूर्ण रिश्ते",
        purpose: "सच्चे प्रेम, पूर्ण रिश्तों और शाश्वत मिलन का आकर्षण",
        benefits: ["सच्चा और स्थायी प्रेम", "सपनों का रिश्ता साकार", "पवित्र और शाश्वत मिलन"],
        instructions: "दो लाल मोमबत्तियां जलाकर, प्रिय व्यक्ति या आपके द्वारा वांछित प्रेम के बारे में सोचते हुए पाठ करें।"
      },
      healing: {
        title: "चमत्कारी उपचार की प्रार्थना",
        category: "पूर्ण स्वास्थ्य और दिव्य उपचार",
        purpose: "सभी बीमारियों का पूर्ण उपचार, पूर्ण स्वास्थ्य और चरम जीवन शक्ति",
        benefits: ["पूर्ण और निर्णायक उपचार", "चमकदार और पूर्ण स्वास्थ्य", "चरम और स्थायी जीवन शक्ति"],
        instructions: "सफेद मोमबत्ती के साथ, उपचार की आवश्यकता वाले शरीर के हिस्से को छूते हुए पाठ करें।"
      },
      fame: {
        title: "विश्व प्रसिद्धि की प्रार्थना",
        category: "वैश्विक सफलता और मान्यता",
        purpose: "विश्व प्रसिद्धि, वैश्विक मान्यता और ग्रहीय प्रभाव प्राप्त करना",
        benefits: ["गारंटीशुदा अंतर्राष्ट्रीय प्रसिद्धि", "आपके क्षेत्र में विश्वव्यापी मान्यता", "सकारात्मक वैश्विक प्रभाव"],
        instructions: "5 सुनहरी मोमबत्तियों को तारे के आकार में रखकर, अपनी विश्वव्यापी सफलता की कल्पना करते हुए पाठ करें।"
      }
    }
  },
  
  ko: {
    title: "최고 신성한 기도",
    subtitle: "무한한 힘의 말씀",
    channelPower: "최고의 힘을 전달하세요",
    transformMessage: "삶을 근본적으로 변화시키는 기도",
    transformDesc: "이 신성한 기도들은 이미 전 세계에서 수백만의 기적을 행했습니다. 당신의 것을 선택하고 비범하고 결정적인 변화를 준비하세요!",
    touchToRecite: "최고의 힘으로 낭송하려면 터치",
    benefitsTitle: "이 신성한 기도의 혜택",
    sacredInstructions: "신성한 지시:",
    sacredMessage: "절대적인 믿음과 진실한 헌신으로 이 기도를 낭송하세요. 성 키프리아누스는 모든 말을 듣고 당신의 가장 깊은 요청을 이루기 위해 지칠 줄 모르고 일할 것입니다.",
    keepCandles: "기도하는 동안 촛불을 켜 두고 당신의 요청에 집중하세요",
    startPrayer: "기도 시작",
    pausePrayer: "기도 일시정지",
    concludeAndThank: "결론짓고 감사하기",
    prayerHeard: "당신의 기도가 들렸습니다! 절대적인 믿음으로 성 키프리아누스의 기적을 기다리세요",
    howToRecite: "신성한 기도를 낭송하는 방법",
    sacredPreparation: "신성한 준비:",
    duringPrayer: "기도 중:",
    sacredPromise: "영원한 신성한 약속",
    promiseText: "참된 믿음과 진실한 헌신으로 이 기도들을 낭송하는 자들은 그들의 삶에서 비범하고 불가능한 기적들이 일어나는 것을 볼 것입니다. 성 키프리아누스는 결코 충실한 신자들을 버리지 않으며 항상 참된 사랑으로 그를 공경하는 자들을 보상합니다.",
    preparationSteps: [
      "경건함으로 흰색 또는 금색 촛불을 켜세요",
      "조용하고 신성한 장소를 찾으세요",
      "근처에 성 키프리아누스의 이미지를 두세요",
      "정화를 위해 7번 깊게 숨쉬세요",
      "당신의 요청에 완전히 집중하세요"
    ],
    prayerSteps: [
      "진실한 감정으로 큰 소리로 낭송하세요",
      "당신의 요청이 이루어지는 것을 강렬하게 시각화하세요",
      "절대적이고 흔들리지 않는 믿음을 유지하세요",
      "이미 기적을 받은 것처럼 감사하세요",
      "성 키프리아누스의 강력한 존재를 느끼세요"
    ],
    prayers: {
      protection: {
        title: "최고 보호의 기도",
        category: "절대적 신성한 보호",
        purpose: "모든 역경, 부정적 에너지, 영적 공격에 대한 완전한 보호",
        benefits: ["뚫을 수 없는 영적 방패", "모든 질투와 악한 눈을 쫓아냄", "완전하고 영원한 가족 보호"],
        instructions: "흰 촛불을 켜고, 아침이나 밤에, 완전한 믿음과 헌신으로 낭송하세요."
      },
      prosperity: {
        title: "무한 번영의 기도",
        category: "부와 극도의 풍요",
        purpose: "극도의 부, 무제한 풍요, 황금 기회의 끌어당김",
        benefits: ["기하급수적으로 증가한 부", "황금 기회가 지속적으로 나타남", "삶의 모든 영역에서의 풍요"],
        instructions: "매일 아침 금 촛불로, 당신의 번영을 시각화하며 낭송하세요."
      },
      power: {
        title: "최고 힘의 기도",
        category: "개인적 힘과 권위",
        purpose: "개인적 힘, 절대적 권위, 세계적 영향력의 발전",
        benefits: ["모든 상황에 대한 최고 권위", "세계적 영향력과 인정", "즉각적 현실화 힘"],
        instructions: "7개의 금 촛불로, 당신의 내적 힘에 집중하며 사적인 장소에서 낭송하세요."
      },
      love: {
        title: "참된 사랑의 기도",
        category: "사랑과 완벽한 관계",
        purpose: "참된 사랑, 완벽한 관계, 영원한 결합의 끌어당김",
        benefits: ["참되고 지속적인 사랑", "꿈의 관계 실현", "신성하고 영원한 결합"],
        instructions: "두 개의 빨간 촛불을 켜고, 사랑하는 사람이나 원하는 사랑을 생각하며 낭송하세요."
      },
      healing: {
        title: "기적적 치유의 기도",
        category: "완벽한 건강과 신성한 치유",
        purpose: "모든 질병의 완전한 치유, 완벽한 건강, 극도의 활력",
        benefits: ["완전하고 결정적인 치유", "빛나고 완벽한 건강", "극도이고 지속적인 활력"],
        instructions: "흰 촛불로, 치유가 필요한 신체 부위를 만지며 낭송하세요."
      },
      fame: {
        title: "세계적 명성의 기도",
        category: "글로벌 성공과 인정",
        purpose: "세계적 명성, 글로벌 인정, 행성적 영향력 달성",
        benefits: ["보장된 국제적 명성", "당신 분야에서의 세계적 인정", "긍정적인 글로벌 영향"],
        instructions: "5개의 금 촛불을 별 모양으로 배치하고, 당신의 세계적 성공을 시각화하며 낭송하세요."
      }
    }
  },
  
  nl: {
    title: "HOOGSTE HEILIGE GEBEDEN",
    subtitle: "WOORDEN VAN ONEINDIGE KRACHT",
    channelPower: "KANALISEER DE HOOGSTE KRACHT",
    transformMessage: "GEBEDEN DIE LEVENS RADICAAL TRANSFORMEREN",
    transformDesc: "Deze heilige gebeden hebben al miljoenen wonderen wereldwijd verricht. Kies de uwe en bereid u voor op een buitengewone en definitieve transformatie!",
    touchToRecite: "Raak aan om te reciteren met hoogste kracht",
    benefitsTitle: "VOORDELEN VAN DIT HEILIGE GEBED",
    sacredInstructions: "HEILIGE INSTRUCTIES:",
    sacredMessage: "Reciteer dit gebed met absoluut geloof en oprechte toewijding. Heilige Cypriaan hoort elk woord en zal onvermoeibaar werken om uw diepste verzoeken te vervullen.",
    keepCandles: "Houd de kaarsen brandend tijdens het hele gebed en focus intens op uw verzoek",
    startPrayer: "Gebed Beginnen",
    pausePrayer: "Gebed Pauzeren",
    concludeAndThank: "AFSLUITEN EN BEDANKEN",
    prayerHeard: "Uw gebed is gehoord! Wacht op Heilige Cypriaans wonderen met absoluut geloof",
    howToRecite: "HOE DE HEILIGE GEBEDEN TE RECITEREN",
    sacredPreparation: "HEILIGE VOORBEREIDING:",
    duringPrayer: "TIJDENS HET GEBED:",
    sacredPromise: "EEUWIGE HEILIGE BELOFTE",
    promiseText: "Degenen die deze gebeden reciteren met waar geloof en oprechte toewijding zullen buitengewone en onmogelijke wonderen zien gebeuren in hun levens. Heilige Cypriaan verlaat nooit zijn trouwe toegewijden en beloont altijd degenen die hem eren met ware liefde.",
    preparationSteps: [
      "Steek een witte of gouden kaars aan met eerbied",
      "Vind een rustige en heilige plaats",
      "Heb een afbeelding van Heilige Cypriaan dichtbij",
      "Adem 7 keer diep om te zuiveren",
      "Focus volledig op uw verzoek"
    ],
    prayerSteps: [
      "Reciteer hardop met ware emotie",
      "Visualiseer intens uw verzoek dat vervuld wordt",
      "Behoud absoluut en onwrikbaar geloof",
      "Bedank alsof u het wonder al ontvangen hebt",
      "Voel Heilige Cypriaans krachtige aanwezigheid"
    ],
    prayers: {
      protection: {
        title: "Gebed van Hoogste Bescherming",
        category: "Absolute Goddelijke Bescherming",
        purpose: "Totale bescherming tegen alle tegenslagen, negatieve energieën en spirituele aanvallen",
        benefits: ["Ondoordringbaar spiritueel schild", "Weert alle jaloezie en boze oog af", "Volledige en eeuwige familiebescherming"],
        instructions: "Reciteer met een brandende witte kaars, 's ochtends of 's avonds, met totaal geloof en toewijding."
      },
      prosperity: {
        title: "Gebed van Oneindige Welvaart",
        category: "Rijkdom en Extreme Overvloed",
        purpose: "Aantrekking van extreme rijkdom, grenzeloze overvloed en gouden kansen",
        benefits: ["Exponentieel vermenigvuldigde rijkdom", "Gouden kansen ontstaan constant", "Overvloed in alle levensgebieden"],
        instructions: "Reciteer dagelijks 's ochtends met een gouden kaars, uw welvaart visualiserend."
      },
      power: {
        title: "Gebed van Hoogste Kracht",
        category: "Persoonlijke Kracht en Autoriteit",
        purpose: "Ontwikkeling van persoonlijke kracht, absolute autoriteit en wereldwijde invloed",
        benefits: ["Hoogste autoriteit over alle situaties", "Wereldwijde invloed en erkenning", "Onmiddellijke manifestatiekracht"],
        instructions: "Reciteer op een privéplaats, met 7 gouden kaarsen, gefocust op uw innerlijke kracht."
      },
      love: {
        title: "Gebed van Ware Liefde",
        category: "Liefde en Perfecte Relaties",
        purpose: "Aantrekking van ware liefde, perfecte relaties en eeuwige vereniging",
        benefits: ["Ware en blijvende liefde", "Droomrelatie gerealiseerd", "Heilige en eeuwige vereniging"],
        instructions: "Reciteer met twee brandende rode kaarsen, denkend aan de geliefde persoon of de liefde die u wenst."
      },
      healing: {
        title: "Gebed van Wonderbaarlijke Genezing",
        category: "Perfecte Gezondheid en Goddelijke Genezing",
        purpose: "Volledige genezing van alle ziekten, perfecte gezondheid en extreme vitaliteit",
        benefits: ["Totale en definitieve genezing", "Stralende en perfecte gezondheid", "Extreme en blijvende vitaliteit"],
        instructions: "Reciteer met een witte kaars, het lichaamsdeel aanrakend dat genezing nodig heeft."
      },
      fame: {
        title: "Gebed van Wereldroem",
        category: "Globaal Succes en Erkenning",
        purpose: "Wereldroem bereiken, globale erkenning en planetaire invloed",
        benefits: ["Gegarandeerde internationale roem", "Wereldwijde erkenning in uw gebied", "Positieve globale invloed"],
        instructions: "Reciteer met 5 gouden kaarsen in stervormatie, uw wereldwijde succes visualiserend."
      }
    }
  },
  
  sv: {
    title: "HÖGSTA HELIGA BÖNER",
    subtitle: "ORD AV OÄNDLIG KRAFT",
    channelPower: "KANALISERA DEN HÖGSTA KRAFTEN",
    transformMessage: "BÖNER SOM RADIKALT FÖRVANDLAR LIV",
    transformDesc: "Dessa heliga böner har redan utfört miljoner mirakel världen över. Välj din och förbered dig för en extraordinär och definitiv transformation!",
    touchToRecite: "Rör för att recitera med högsta kraft",
    benefitsTitle: "FÖRDELAR MED DENNA HELIGA BÖN",
    sacredInstructions: "HELIGA INSTRUKTIONER:",
    sacredMessage: "Recitera denna bön med absolut tro och uppriktig hängivenhet. Saint Cyprian hör varje ord och kommer att arbeta outtröttligt för att uppfylla dina djupaste önskningar.",
    keepCandles: "Håll ljusen tända under hela bönen och fokusera intensivt på din begäran",
    startPrayer: "Börja Bön",
    pausePrayer: "Pausa Bön",
    concludeAndThank: "AVSLUTA OCH TACKA",
    prayerHeard: "Din bön har hörts! Vänta på Saint Cyprians mirakel med absolut tro",
    howToRecite: "HUR MAN RECITERAR DE HELIGA BÖNERNA",
    sacredPreparation: "HELIG FÖRBEREDELSE:",
    duringPrayer: "UNDER BÖNEN:",
    sacredPromise: "EVIGT HELIGT LÖFTE",
    promiseText: "De som reciterar dessa böner med sann tro och uppriktig hängivenhet kommer att se extraordinära och omöjliga mirakel hända i sina liv. Saint Cyprian överger aldrig sina trogna anhängare och belönar alltid dem som hedrar honom med sann kärlek.",
    preparationSteps: [
      "Tänd ett vitt eller gyllene ljus med vördnad",
      "Hitta en lugn och helig plats",
      "Ha en bild av Saint Cyprian i närheten",
      "Andas djupt 7 gånger för rening",
      "Fokusera helt på din begäran"
    ],
    prayerSteps: [
      "Recitera högt med sann känsla",
      "Visualisera intensivt din begäran som uppfylls",
      "Behåll absolut och orubblig tro",
      "Tacka som om du redan fått miraklet",
      "Känn Saint Cyprians kraftfulla närvaro"
    ],
    prayers: {
      protection: {
        title: "Bön av Högsta Skydd",
        category: "Absolut Gudomlig Beskydd",
        purpose: "Total beskydd mot alla motgångar, negativa energier och andliga attacker",
        benefits: ["Ogenomtränglig andlig sköld", "Avvisar all avund och onda ögat", "Fullständigt och evigt familjeskydd"],
        instructions: "Recitera med ett tänt vitt ljus, morgon eller kväll, med total tro och hängivenhet."
      },
      prosperity: {
        title: "Bön av Oändlig Välstånd",
        category: "Rikedom och Extrem Överflöd",
        purpose: "Attraktion av extrem rikedom, gränslös överflöd och gyllene möjligheter",
        benefits: ["Exponentiellt multiplicerad rikedom", "Gyllene möjligheter uppstår konstant", "Överflöd inom alla livsområden"],
        instructions: "Recitera dagligen på morgonen med ett gyllene ljus, visualiserande din välstånd."
      },
      power: {
        title: "Bön av Högsta Kraft",
        category: "Personlig Kraft och Auktoritet",
        purpose: "Utveckling av personlig kraft, absolut auktoritet och världsomspännande inflytande",
        benefits: ["Högsta auktoritet över alla situationer", "Världsomspännande inflytande och erkännande", "Omedelbar manifestationskraft"],
        instructions: "Recitera på en privat plats, med 7 gyllene ljus, fokuserad på din inre kraft."
      },
      love: {
        title: "Bön av Sann Kärlek",
        category: "Kärlek och Perfekta Relationer",
        purpose: "Attraktion av sann kärlek, perfekta relationer och evig förening",
        benefits: ["Sann och varaktig kärlek", "Drömrelation förverkligad", "Helig och evig förening"],
        instructions: "Recitera med två tända röda ljus, tänkande på den älskade personen eller kärleken du önskar."
      },
      healing: {
        title: "Bön av Mirakulös Helande",
        category: "Perfekt Hälsa och Gudomlig Helande",
        purpose: "Fullständig helande av alla sjukdomar, perfekt hälsa och extrem vitalitet",
        benefits: ["Total och definitiv helande", "Strålande och perfekt hälsa", "Extrem och varaktig vitalitet"],
        instructions: "Recitera med ett vitt ljus, rörande kroppsdelen som behöver helande."
      },
      fame: {
        title: "Bön av Världsrykte",
        category: "Global Framgång och Erkännande",
        purpose: "Uppnå världsrykte, global erkännande och planetariskt inflytande",
        benefits: ["Garanterat internationellt rykte", "Världsomspännande erkännande inom ditt område", "Positivt globalt inflytande"],
        instructions: "Recitera med 5 gyllene ljus i stjärnformation, visualiserande din världsomspännande framgång."
      }
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
  
  // Function to get deeply nested prayer benefits
  const getPrayerBenefits = (prayerType: string) => {
    return translations[language]?.prayers?.[prayerType]?.benefits || translations.pt.prayers[prayerType]?.benefits || [];
  };
  
  // Function to get deeply nested prayer data
  const getPrayerData = (prayerType: string, field: string) => {
    return translations[language]?.prayers?.[prayerType]?.[field] || translations.pt.prayers[prayerType]?.[field] || '';
  };
  
  return { language, changeLanguage, t, getPrayerBenefits, getPrayerData };
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

interface Prayer {
  id: string;
  title: string;
  category: string;
  text: string;
  purpose: string;
  power: number;
  benefits: string[];
  instructions: string;
}

export default function Prayers() {
  const { language, changeLanguage, t, getPrayerBenefits, getPrayerData } = useLanguage();
  const [selectedPrayer, setSelectedPrayer] = useState<Prayer | null>(null);
  const [isReading, setIsReading] = useState(false);

  const prayers: Prayer[] = [
    {
      id: '1',
      title: getPrayerData('protection', 'title'),
      category: getPrayerData('protection', 'category'),
      purpose: getPrayerData('protection', 'purpose'),
      power: 98,
      benefits: getPrayerBenefits('protection'),
      instructions: getPrayerData('protection', 'instructions'),
      text: `Glorioso São Cipriano, grande mago e protetor supremo de todos os necessitados,

Invoco vosso poder infinito e ancestral para que me protejais de todos os males, visíveis e invisíveis, conhecidos e desconhecidos, presentes e futuros.

Com vossa força divina incomparável, afastai de mim toda energia negativa, toda inveja cruel, todo olhar mal intencionado, toda maldade direcionada contra mim e minha família.

Criai em torno de mim e de todos os meus entes queridos um escudo impenetrável de luz dourada divina, que nenhum mal possa atravessar jamais.

São Cipriano, dai-me força sobrenatural, coragem inabalável e sabedoria suprema para enfrentar todos os desafios da vida com dignidade e vitória.

Que vossa proteção poderosa me acompanhe sempre, em todos os momentos de minha vida, em todos os lugares que eu for, em todos os caminhos que eu seguir.

Fazei de mim um canal de vosso poder neste mundo, para que eu possa ajudar outros necessitados e espalhar vossa glória.

Que minha vida seja um testemunho vivo do vosso poder protetor infinito.

Assim seja, assim se faça, com o poder infinito e eterno de São Cipriano. Amém.

c🔱 PODER INFINITO c🔱`
    },
    {
      id: '2',
      title: getPrayerData('prosperity', 'title'),
      category: getPrayerData('prosperity', 'category'),
      purpose: getPrayerData('prosperity', 'purpose'),
      power: 99,
      benefits: getPrayerBenefits('prosperity'),
      instructions: getPrayerData('prosperity', 'instructions'),
      text: `Poderoso São Cipriano, senhor supremo da magia ancestral e da transformação radical,

Venho humildemente em vossa presença sagrada para solicitar vossa benção de prosperidade infinita e abundância extrema em todos os aspectos de minha vida.

Abri todos os caminhos fechados para a riqueza em minha vida, removei todos os obstáculos financeiros que me impedem de prosperar como mereço.

Que o dinheiro chegue até mim de formas inesperadas e abundantes, através de vossa intercessão poderosa e milagrosa, multiplicando-se constantemente.

Multiplicai meus recursos financeiros de forma exponencial, atraí oportunidades de ouro para minha vida, fazei com que eu seja próspero além de qualquer imaginação humana.

Que eu seja próspero em todos os aspectos: financeiro, profissional, pessoal e espiritual, vivendo na abundância total.

São Cipriano, grande mago da abundância cósmica, concedei-me riqueza sem fim e prosperidade eterna que nunca se esgote nem diminua.

Fazei com que minha prosperidade seja um testemunho glorioso de vosso poder, para que outros vejam e glorifiquem vosso nome sagrado.

Que eu use minha riqueza para honrar vosso nome e ajudar os necessitados, espalhando vossa glória pelo mundo.

Com fé absoluta em vosso poder infinito, eu agradeço antecipadamente por todas as bênçãos.

c🔱 RIQUEZA INFINITA c🔱 Assim seja para sempre! Amém.`
    },
    {
      id: '3',
      title: getPrayerData('power', 'title'),
      category: getPrayerData('power', 'category'),
      purpose: getPrayerData('power', 'purpose'),
      power: 100,
      benefits: getPrayerBenefits('power'),
      instructions: getPrayerData('power', 'instructions'),
      text: `Supremo São Cipriano, mestre absoluto de todos os mistérios do universo,

Concedei-me uma porção generosa de vosso poder infinito e ancestral para que eu possa transformar minha realidade completamente e definitivamente.

Dai-me autoridade suprema sobre todas as circunstâncias de minha vida, para que eu seja o senhor absoluto do meu destino.

Que minha palavra tenha peso divino, minha presença inspire respeito profundo, minha vontade se manifeste instantaneamente na realidade.

Fortificai minha mente com sabedoria suprema, meu espírito com força inabalável e minha determinação com poder absoluto e inquestionável.

Que eu tenha influência positiva e poderosa sobre todas as pessoas que encontro em meu caminho, sendo respeitado e admirado por todos.

São Cipriano, grande mago do poder cósmico, fazei de mim um canal de vosso poder supremo neste mundo terreno.

Que eu seja próspero, respeitado, admirado e bem-sucedido em absolutamente tudo que empreendo em minha vida.

Que meu sucesso seja tão extraordinário e inspirador que motive outros a buscarem vosso poder também.

Que eu nunca abuse deste poder, usando-o sempre para o bem, para a justiça e para espalhar vossa glória.

Com vossa força divina correndo em minhas veias, nada me é impossível, todos os meus sonhos se tornam realidade física.

c🔱 PODER SUPREMO c🔱 Assim seja para sempre e eternamente! Amém.`
    },
    {
      id: '4',
      title: getPrayerData('love', 'title'),
      category: getPrayerData('love', 'category'),
      purpose: getPrayerData('love', 'purpose'),
      power: 95,
      benefits: getPrayerBenefits('love'),
      instructions: getPrayerData('love', 'instructions'),
      text: `Amado São Cipriano, que conheceu o amor verdadeiro e eterno com Santa Justina,

Intercedei por mim para que eu encontre o amor verdadeiro e perfeito da minha vida, aquele que transformará meu coração para sempre.

Atraí para mim a pessoa ideal, aquela que foi destinada pelos céus para ser minha companheira eterna, minha alma gêmea verdadeira.

Que nosso amor seja puro como o vosso, verdadeiro como o de Santa Justina, duradouro como o amor eterno e abençoado por vossa proteção divina.

Removei todos os obstáculos que impedem o amor verdadeiro de chegar até mim, quebrai todas as barreiras do coração.

Fazei com que eu seja amado profundamente, respeitado completamente e valorizado eternamente pelo meu par ideal.

São Cipriano, abençoai meu relacionamento com harmonia perfeita, compreensão mútua, paixão ardente e felicidade eterna.

Que nosso amor seja um reflexo sagrado do vosso amor eterno com Santa Justina, inspirando outros ao amor verdadeiro.

Protegei nosso relacionamento de toda inveja, de toda interferência negativa e de toda energia que possa nos separar.

Fazei com que nosso amor cresça a cada dia, se fortaleça a cada momento e se torne um exemplo de amor verdadeiro para o mundo.

c🔱 AMOR ETERNO c🔱 Assim seja para sempre! Amém.`
    },
    {
      id: '5',
      title: getPrayerData('healing', 'title'),
      category: getPrayerData('healing', 'category'),
      purpose: getPrayerData('healing', 'purpose'),
      power: 97,
      benefits: getPrayerBenefits('healing'),
      instructions: getPrayerData('healing', 'instructions'),
      text: `Misericordioso São Cipriano, grande curador de corpos, mentes e almas,

Invoco vosso poder supremo de cura para que me concedais saúde perfeita e completa em todos os aspectos do meu ser.

Curai todas as doenças do meu corpo físico, mente e espírito com vosso toque divino e milagroso.

Restaurai completamente minha vitalidade, minha energia vital e minha força para viver plenamente e com alegria.

Que cada célula do meu corpo seja renovada e regenerada pelo vosso poder divino, funcionando em perfeita harmonia.

Afastai de mim toda enfermidade, toda dor, todo sofrimento físico e emocional que me aflige neste momento.

São Cipriano, fazei de mim um exemplo vivo de vossa capacidade de cura milagrosa e instantânea.

Que minha saúde perfeita seja um testemunho poderoso do vosso poder para outros que sofrem e precisam de esperança.

Dai-me sabedoria para cuidar bem do meu corpo, que é templo sagrado da vossa presença divina.

Protegei-me de todas as doenças futuras e mantende-me sempre em perfeita saúde física, mental e espiritual.

c🔱 CURA DIVINA c🔱 Assim seja para sempre! Amém.`
    },
    {
      id: '6',
      title: getPrayerData('fame', 'title'),
      category: getPrayerData('fame', 'category'),
      purpose: getPrayerData('fame', 'purpose'),
      power: 96,
      benefits: getPrayerBenefits('fame'),
      instructions: getPrayerData('fame', 'instructions'),
      text: `Glorioso São Cipriano, que é conhecido, venerado e respeitado em todo o mundo,

Concedei-me fama mundial e reconhecimento global extraordinário em minha área de atuação e expertise.

Fazei com que meu nome seja conhecido, respeitado e admirado em todos os continentes da Terra.

Que meu talento único e meu trabalho excepcional alcancem milhões de pessoas ao redor do mundo inteiro.

Abri todas as portas douradas para o sucesso internacional e a influência global positiva e duradoura.

Que eu seja uma inspiração poderosa e positiva para milhões de pessoas em todo o planeta Terra.

São Cipriano, fazei com que minha fama mundial seja usada para espalhar vossa palavra sagrada e vosso poder divino.

Que através do meu sucesso extraordinário, mais pessoas conheçam vosso nome e se devotem a vós com fé verdadeira.

Protegei minha reputação de toda calúnia, de toda inveja e de toda energia negativa que possa prejudicar meu sucesso.

Fazei com que minha influência mundial seja sempre usada para o bem, para inspirar e para transformar vidas positivamente.

c🔱 FAMA MUNDIAL c🔱 Assim seja para sempre! Amém.`
    }
  ];

  const startPrayer = (prayer: Prayer) => {
    setSelectedPrayer(prayer);
    window.scrollTo(0, 0);
  };

  const closePrayer = async () => {
    if (selectedPrayer) {
      // Increment prayer count when prayer is completed
      await StorageService.incrementPrayerCount();
    }
    setSelectedPrayer(null);
    setIsReading(false);
    window.scrollTo(0, 0);
  };

  if (selectedPrayer) {
    return (
      <div className="min-h-screen bg-obsidian-gradient">
        {/* Language Selector */}
        <LanguageSelector language={language} onLanguageChange={changeLanguage} />
        
        {/* Header */}
        <div className="flex items-center p-4 md:p-6 border-b border-gold-500/30">
          <button
            onClick={closePrayer}
            className="text-gold-400 hover:text-gold-300 transition-colors p-2"
          >
            <ArrowLeft size={24} />
          </button>
          <h1 className="flex-1 text-lg md:text-xl font-black text-gold-400 text-center mr-10 sacred-text">
            {selectedPrayer.title}
          </h1>
        </div>

        {/* Instructions and Controls */}
        <div className="px-4 md:px-6 py-6 border-b border-gold-500/20">
          <div className="max-w-4xl mx-auto">
            {/* Benefits */}
            <div className="mb-6">
              <h3 className="sacred-text text-xl md:text-2xl font-black text-gold-400 text-center mb-4">
                {t('benefitsTitle')}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
                {selectedPrayer.benefits.map((benefit, index) => (
                  <div key={index} className="bg-gold-500/10 rounded-2xl p-3 md:p-4 text-center border border-gold-500/30 shadow-sacred">
                    <p className="text-gold-400 font-bold text-sm md:text-base">✨ {benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Sacred Message */}
            <div className="temple-section rounded-3xl p-6 md:p-8 mb-6 text-center shadow-sacred">
              <p className="text-gold-300 italic text-lg md:text-xl leading-relaxed mb-4 mystical-text">
                "{t('sacredMessage')}"
              </p>
            </div>

            {/* Instructions */}
            <div className="temple-section rounded-3xl p-6 md:p-8 mb-6 shadow-sacred">
              <h4 className="text-gold-400 font-black text-lg mb-3 sacred-text">{t('sacredInstructions')}</h4>
              <p className="text-gold-200 text-base md:text-lg leading-relaxed mb-4">
                {selectedPrayer.instructions}
              </p>
              <p className="text-gold-300 italic text-base leading-relaxed">
                💡 {t('sacredMessage')}
              </p>
            </div>

            {/* Controls */}
            <div className="flex gap-4">
              <button
                onClick={() => setIsReading(!isReading)}
                className={`flex-1 py-4 md:py-5 rounded-full font-black flex items-center justify-center gap-3 transition-all duration-300 shadow-divine ${
                  isReading
                    ? 'bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-400 hover:to-red-500'
                    : 'bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-400 hover:to-green-500'
                }`}
              >
                {isReading ? <Pause size={24} /> : <Play size={24} />}
                <span className="text-base md:text-lg">{isReading ? t('pausePrayer') : t('startPrayer')}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Sacred Candles */}
        <div className="text-center py-12 md:py-16">
          <div className="flex justify-center flex-wrap gap-3 md:gap-4 mb-6">
            {[...Array(7)].map((_, i) => (
              <div key={i} className="text-4xl md:text-6xl animate-flame sacred-flame" style={{ animationDelay: `${i * 0.3}s` }}>
                🕯️
              </div>
            ))}
          </div>
          <p className="text-gold-200 text-base md:text-lg font-semibold max-w-2xl mx-auto px-4">
            {t('keepCandles')}
          </p>
        </div>

        {/* Prayer Text */}
        <div className="px-4 md:px-6 mb-12">
          <div className="temple-section rounded-3xl p-6 md:p-8 max-w-4xl mx-auto shadow-sacred">
            <p className="text-white text-lg md:text-xl leading-relaxed text-center whitespace-pre-line prayer-text">
              {selectedPrayer.text}
            </p>
          </div>
        </div>

        {/* Final Button */}
        <div className="px-4 md:px-6 pb-24">
          <div className="max-w-2xl mx-auto">
            <button
              onClick={closePrayer}
              className="w-full sacred-button py-4 md:py-5 rounded-full font-black flex items-center justify-center gap-3 transition-all duration-300 shadow-divine"
            >
              <CheckCircle size={24} />
              <span className="text-lg">{t('concludeAndThank')}</span>
            </button>
            
            <p className="text-center text-gold-300 text-sm md:text-base mt-6 italic">
              🌟 {t('prayerHeard')} 🌟
            </p>
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

      {/* Prayers List */}
      <div className="px-4 md:px-6 pb-24">
        <div className="space-y-6 max-w-6xl mx-auto">
          {prayers.map((prayer) => (
            <button
              key={prayer.id}
              onClick={() => startPrayer(prayer)}
              className="w-full temple-section rounded-3xl p-6 md:p-8 text-left hover:scale-105 transition-all duration-300 transform shadow-sacred hover-lift"
            >
              <div className="flex flex-col md:flex-row justify-between items-start mb-6">
                <div className="flex-1 mb-4 md:mb-0 md:mr-4">
                  <h3 className="text-xl md:text-2xl font-black text-white mb-2 sacred-text leading-tight">
                    {prayer.title}
                  </h3>
                  <p className="text-gold-300 text-base md:text-lg mb-3 font-semibold">
                    📿 {prayer.category}
                  </p>
                </div>
                <div className="bg-gold-400/20 border border-gold-400 rounded-full px-4 py-2 flex-shrink-0">
                  <span className="text-gold-400 text-sm md:text-base font-black">
                    ⚡ {prayer.power}% PODER
                  </span>
                </div>
              </div>

              <p className="text-gold-100 mb-6 leading-relaxed text-base md:text-lg">
                {prayer.purpose}
              </p>

              {/* Benefits */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
                {prayer.benefits.map((benefit, index) => (
                  <div key={index} className="bg-gold-500/10 rounded-xl p-3 text-center border border-gold-500/30">
                    <span className="text-gold-400 font-bold text-sm md:text-base">✨ {benefit}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-gold-200 italic text-sm md:text-base">
                  {t('touchToRecite')}
                </span>
                <div className="text-gold-400">
                  <Play size={24} />
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Sacred Instructions */}
        <div className="mt-16 temple-section rounded-3xl p-6 md:p-8 shadow-sacred max-w-6xl mx-auto">
          <h3 className="sacred-text text-2xl md:text-3xl font-black text-gold-400 text-center mb-8">
            {t('howToRecite')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="space-y-4">
              <h4 className="text-gold-400 font-black text-lg md:text-xl">{t('sacredPreparation')}</h4>
              <ul className="text-gold-200 space-y-2 text-base md:text-lg">
                {t('preparationSteps').map((step: string, index: number) => (
                  <li key={index}>• {step}</li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-gold-400 font-black text-lg md:text-xl">{t('duringPrayer')}</h4>
              <ul className="text-gold-200 space-y-2 text-base md:text-lg">
                {t('prayerSteps').map((step: string, index: number) => (
                  <li key={index}>• {step}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Sacred Promise */}
        <div className="mt-12 sacred-agreement-section rounded-3xl p-6 md:p-8 text-center shadow-mystical max-w-4xl mx-auto">
          <Crown className="text-gold-400 mx-auto mb-6" size={48} />
          <h3 className="sacred-text text-2xl md:text-3xl font-black text-gold-400 mb-6">
            {t('sacredPromise')}
          </h3>
          <p className="text-gold-200 text-lg md:text-xl leading-relaxed">
            "{t('promiseText')}"
          </p>
        </div>
      </div>
    </div>
  );
}
