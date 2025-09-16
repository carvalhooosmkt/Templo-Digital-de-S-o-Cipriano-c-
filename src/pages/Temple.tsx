import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Crown, Flame, Book, Zap, Shield, Star, Calendar, Heart, Award, Users, Globe, Sparkles, BookOpen, GraduationCap, ChevronRight, ChevronDown, ChevronUp } from 'lucide-react';

const translations = {
  pt: {
    title: "TEMPLO SAGRADO DE SÃO CIPRIANO",
    subtitle: "O Grande Mago Eterno - Transformador de Realidades Impossíveis",
    saoCiprianoDay: "DIA SAGRADO DE SÃO CIPRIANO - 16 DE SETEMBRO",
    saoCiprianoDesc: "Hoje é o dia mais sagrado do ano! Faça seus pedidos mais poderosos!",
    powerMultiplied: "Poder multiplicado por 10.000x hoje!",
    
    altarTitle: "ALTAR PRINCIPAL DO GRANDE MAGO",
    altarDesc: "Aqui São Cipriano manifesta seu poder supremo 24 horas por dia e transforma vidas de forma radical e definitiva",
    emergencyRitual: "Ritual de Emergência",
    powerfulPrayer: "Oração Poderosa",
    
    sacredPromise: "PROMESSA SAGRADA: Sua vida será transformada radicalmente através do poder ancestral de São Cipriano. Milhões já comprovaram - agora é sua vez!",
    
    exploreTitle: "EXPLORE AS SEÇÕES SAGRADAS DO TEMPLO",
    exploreDesc: "Clique em cada seção abaixo para acessar os poderes específicos de São Cipriano",
    clickHere: "CLIQUE AQUI",
    enter: "ENTRAR",
    
    altarMain: "Altar Sagrado Principal",
    altarMainDesc: "O coração pulsante do templo onde São Cipriano manifesta seu poder supremo diariamente",
    altarMainBenefit: "Orações Milagrosas que Transformam",
    
    ritualsSupreme: "Câmara dos Rituais Supremos", 
    ritualsSupremeDesc: "Rituais ancestrais poderosos para transformar sua realidade de forma radical e definitiva",
    ritualsSupremeBenefit: "Transformação Radical Instantânea",
    
    libraryAncestral: "Biblioteca Sagrada Ancestral",
    libraryAncestralDesc: "Conhecimento ancestral milenar e ensinamentos divinos do Grande Mago São Cipriano",
    libraryAncestralBenefit: "Sabedoria Infinita e Poder",
    
    teachingsGrandMage: "Ensinamentos do Grande Mago",
    teachingsGrandMageDesc: "Guias completos e ensinamentos práticos para sua jornada espiritual com São Cipriano",
    teachingsGrandMageBenefit: "Orientação Divina Completa",
    
    protectionSanctuary: "Santuário da Proteção Divina",
    protectionSanctuaryDesc: "Proteção suprema e absoluta contra todas as adversidades e energias negativas do mundo",
    protectionSanctuaryBenefit: "Proteção Absoluta Garantida",
    
    sacredAgreement: "Acordo Sagrado com São Cipriano",
    sacredAgreementDesc: "Faça seu pacto sagrado com o Grande Mago e transforme sua vida para sempre",
    sacredAgreementBenefit: "Vida Completamente Transformada",
    
    miraclesTitle: "MILAGRES REAIS E DOCUMENTADOS DE SÃO CIPRIANO",
    miraclesDesc: "Pessoas reais que tiveram suas vidas transformadas radicalmente através deste templo sagrado",
    
    dailyDevotionTitle: "Devoção Diária - Transforme Sua Vida Para Sempre",
    dailyDevotionDesc: "Mantenha sua conexão sagrada com São Cipriano através da prática diária e veja milagres extraordinários acontecerem constantemente",
    morningPrayer: "Oração Matinal",
    morningPrayerDesc: "Comece o dia protegido e abençoado pelo poder supremo",
    sacredCandle: "Vela Sagrada", 
    sacredCandleDesc: "Acenda uma vela diária para manter a conexão divina",
    nightGratitude: "Gratidão Noturna",
    nightGratitudeDesc: "Agradeça antes de dormir pelos milagres recebidos",
    
    worldImpactTitle: "IMPACTO MUNDIAL DO TEMPLO SAGRADO",
    activeDevotees: "Devotos Ativos",
    countriesReached: "Países Alcançados",
    miraclesReported: "Milagres Relatados",
    successRate: "Taxa de Sucesso",
    
    transformNowTitle: "TRANSFORME SUA VIDA AGORA MESMO",
    transformNowDesc: "Milhões de pessoas já tiveram suas vidas transformadas radicalmente por São Cipriano através deste templo sagrado. Saia da pobreza extrema, realize seus sonhos impossíveis, encontre o amor verdadeiro da sua vida, tenha saúde perfeita, alcance fama mundial e viva a abundância extrema que você sempre mereceu. O Grande Mago está esperando por você neste exato momento!",
    
    withoutSaoCipriano: "SEM São Cipriano:",
    withSaoCipriano: "COM São Cipriano:",
    
    withoutList: [
      "Pobreza extrema e dificuldades financeiras constantes",
      "Solidão profunda e relacionamentos fracassados", 
      "Doenças crônicas e problemas de saúde graves",
      "Fracassos profissionais e falta de reconhecimento",
      "Ausência total de proteção espiritual",
      "Vida sem propósito e sem esperança"
    ],
    
    withList: [
      "Riqueza infinita e prosperidade sem limites",
      "Amor verdadeiro e relacionamentos perfeitos",
      "Saúde perfeita e cura milagrosa garantida", 
      "Sucesso mundial e fama global comprovada",
      "Proteção divina absoluta e permanente",
      "Vida plena de propósito e realização total"
    ],
    
    makeAgreementNow: "FAZER MEU ACORDO SAGRADO E MUDAR MINHA VIDA AGORA",
    
    finalMessage: "Aqueles que buscam São Cipriano com fé verdadeira receberão poder além da imaginação humana. Sua vida nunca mais será a mesma. A pobreza, a solidão, as doenças e os fracassos ficarão no passado para sempre.",
    finalAuthor: "Promessa Sagrada Eterna do Grande Mago São Cipriano",
    
    blessings: [
      "São Cipriano abençoa abundantemente sua jornada neste momento sagrado",
      "O poder infinito do Grande Mago está trabalhando em sua vida agora mesmo",
      "Seus desejos mais profundos estão se manifestando através do poder divino",
      "A proteção suprema de São Cipriano te envolve neste exato instante",
      "Abundância extrema está fluindo em sua direção pelo poder ancestral",
      "São Cipriano está preparando milagres extraordinários para sua vida",
      "Sua realidade está sendo transformada pelo poder supremo neste momento",
      "O Grande Mago vê seu coração e está respondendo suas orações silenciosas",
      "Portas impossíveis estão se abrindo para você através do poder divino"
    ]
  },
  
  en: {
    title: "SACRED TEMPLE OF SAINT CYPRIAN",
    subtitle: "The Eternal Grand Mage - Transformer of Impossible Realities",
    saoCiprianoDay: "SACRED DAY OF SAINT CYPRIAN - SEPTEMBER 16TH",
    saoCiprianoDesc: "Today is the most sacred day of the year! Make your most powerful requests!",
    powerMultiplied: "Power multiplied by 10,000x today!",
    
    altarTitle: "MAIN ALTAR OF THE GRAND MAGE",
    altarDesc: "Here Saint Cyprian manifests his supreme power 24 hours a day and transforms lives radically and definitively",
    emergencyRitual: "Emergency Ritual",
    powerfulPrayer: "Powerful Prayer",
    
    sacredPromise: "SACRED PROMISE: Your life will be radically transformed through Saint Cyprian's ancestral power. Millions have already proven it - now it's your turn!",
    
    exploreTitle: "EXPLORE THE SACRED SECTIONS OF THE TEMPLE",
    exploreDesc: "Click on each section below to access Saint Cyprian's specific powers",
    clickHere: "CLICK HERE",
    enter: "ENTER",
    
    altarMain: "Main Sacred Altar",
    altarMainDesc: "The pulsating heart of the temple where Saint Cyprian manifests his supreme power daily",
    altarMainBenefit: "Miraculous Transforming Prayers",
    
    ritualsSupreme: "Chamber of Supreme Rituals",
    ritualsSupremeDesc: "Powerful ancestral rituals to transform your reality radically and definitively",
    ritualsSupremeBenefit: "Instant Radical Transformation",
    
    libraryAncestral: "Ancestral Sacred Library",
    libraryAncestralDesc: "Millennial ancestral knowledge and divine teachings of Grand Mage Saint Cyprian",
    libraryAncestralBenefit: "Infinite Wisdom and Power",
    
    teachingsGrandMage: "Teachings of the Grand Mage",
    teachingsGrandMageDesc: "Complete guides and practical teachings for your spiritual journey with Saint Cyprian",
    teachingsGrandMageBenefit: "Complete Divine Guidance",
    
    protectionSanctuary: "Sanctuary of Divine Protection",
    protectionSanctuaryDesc: "Supreme and absolute protection against all adversities and negative energies of the world",
    protectionSanctuaryBenefit: "Absolute Protection Guaranteed",
    
    sacredAgreement: "Sacred Agreement with Saint Cyprian",
    sacredAgreementDesc: "Make your sacred pact with the Grand Mage and transform your life forever",
    sacredAgreementBenefit: "Life Completely Transformed",
    
    miraclesTitle: "REAL AND DOCUMENTED MIRACLES OF SAINT CYPRIAN",
    miraclesDesc: "Real people who had their lives radically transformed through this sacred temple",
    
    dailyDevotionTitle: "Daily Devotion - Transform Your Life Forever",
    dailyDevotionDesc: "Maintain your sacred connection with Saint Cyprian through daily practice and see extraordinary miracles happen constantly",
    morningPrayer: "Morning Prayer",
    morningPrayerDesc: "Start the day protected and blessed by supreme power",
    sacredCandle: "Sacred Candle",
    sacredCandleDesc: "Light a daily candle to maintain divine connection",
    nightGratitude: "Night Gratitude",
    nightGratitudeDesc: "Give thanks before sleeping for miracles received",
    
    worldImpactTitle: "WORLDWIDE IMPACT OF THE SACRED TEMPLE",
    activeDevotees: "Active Devotees",
    countriesReached: "Countries Reached",
    miraclesReported: "Miracles Reported",
    successRate: "Success Rate",
    
    transformNowTitle: "TRANSFORM YOUR LIFE RIGHT NOW",
    transformNowDesc: "Millions of people have already had their lives radically transformed by Saint Cyprian through this sacred temple. Escape extreme poverty, achieve your impossible dreams, find the true love of your life, have perfect health, achieve worldwide fame and live the extreme abundance you always deserved. The Grand Mage is waiting for you at this exact moment!",
    
    withoutSaoCipriano: "WITHOUT Saint Cyprian:",
    withSaoCipriano: "WITH Saint Cyprian:",
    
    withoutList: [
      "Extreme poverty and constant financial difficulties",
      "Deep loneliness and failed relationships",
      "Chronic diseases and serious health problems",
      "Professional failures and lack of recognition",
      "Total absence of spiritual protection",
      "Life without purpose and without hope"
    ],
    
    withList: [
      "Infinite wealth and limitless prosperity",
      "True love and perfect relationships",
      "Perfect health and guaranteed miraculous healing",
      "World success and proven global fame",
      "Absolute and permanent divine protection",
      "Full life of purpose and total fulfillment"
    ],
    
    makeAgreementNow: "MAKE MY SACRED AGREEMENT AND CHANGE MY LIFE NOW",
    
    finalMessage: "Those who seek Saint Cyprian with true faith will receive power beyond human imagination. Your life will never be the same. Poverty, loneliness, diseases and failures will be left in the past forever.",
    finalAuthor: "Eternal Sacred Promise of Grand Mage Saint Cyprian",
    
    blessings: [
      "Saint Cyprian abundantly blesses your journey at this sacred moment",
      "The infinite power of the Grand Mage is working in your life right now",
      "Your deepest desires are manifesting through divine power",
      "Saint Cyprian's supreme protection surrounds you at this exact instant",
      "Extreme abundance is flowing in your direction through ancestral power",
      "Saint Cyprian is preparing extraordinary miracles for your life",
      "Your reality is being transformed by supreme power at this moment",
      "The Grand Mage sees your heart and is answering your silent prayers",
      "Impossible doors are opening for you through divine power"
    ]
  },
  
  es: {
    title: "TEMPLO SAGRADO DE SAN CIPRIANO",
    subtitle: "El Gran Mago Eterno - Transformador de Realidades Imposibles",
    saoCiprianoDay: "DÍA SAGRADO DE SAN CIPRIANO - 16 DE SEPTIEMBRE",
    saoCiprianoDesc: "¡Hoy es el día más sagrado del año! ¡Haz tus peticiones más poderosas!",
    powerMultiplied: "¡Poder multiplicado por 10,000x hoy!",
    
    altarTitle: "ALTAR PRINCIPAL DEL GRAN MAGO",
    altarDesc: "Aquí San Cipriano manifiesta su poder supremo 24 horas al día y transforma vidas de forma radical y definitiva",
    emergencyRitual: "Ritual de Emergencia",
    powerfulPrayer: "Oración Poderosa",
    
    sacredPromise: "PROMESA SAGRADA: Tu vida será transformada radicalmente a través del poder ancestral de San Cipriano. ¡Millones ya lo han comprobado - ahora es tu turno!",
    
    exploreTitle: "EXPLORA LAS SECCIONES SAGRADAS DEL TEMPLO",
    exploreDesc: "Haz clic en cada sección a continuación para acceder a los poderes específicos de San Cipriano",
    clickHere: "HAZ CLIC AQUÍ",
    enter: "ENTRAR",
    
    altarMain: "Altar Sagrado Principal",
    altarMainDesc: "El corazón pulsante del templo donde San Cipriano manifiesta su poder supremo diariamente",
    altarMainBenefit: "Oraciones Milagrosas que Transforman",
    
    ritualsSupreme: "Cámara de Rituales Supremos",
    ritualsSupremeDesc: "Rituales ancestrales poderosos para transformar tu realidad de forma radical y definitiva",
    ritualsSupremeBenefit: "Transformación Radical Instantánea",
    
    libraryAncestral: "Biblioteca Sagrada Ancestral",
    libraryAncestralDesc: "Conocimiento ancestral milenario y enseñanzas divinas del Gran Mago San Cipriano",
    libraryAncestralBenefit: "Sabiduría Infinita y Poder",
    
    teachingsGrandMage: "Enseñanzas del Gran Mago",
    teachingsGrandMageDesc: "Guías completas y enseñanzas prácticas para tu jornada espiritual con San Cipriano",
    teachingsGrandMageBenefit: "Orientación Divina Completa",
    
    protectionSanctuary: "Santuario de Protección Divina",
    protectionSanctuaryDesc: "Protección suprema y absoluta contra todas las adversidades y energías negativas del mundo",
    protectionSanctuaryBenefit: "Protección Absoluta Garantizada",
    
    sacredAgreement: "Acuerdo Sagrado con San Cipriano",
    sacredAgreementDesc: "Haz tu pacto sagrado con el Gran Mago y transforma tu vida para siempre",
    sacredAgreementBenefit: "Vida Completamente Transformada",
    
    miraclesTitle: "MILAGROS REALES Y DOCUMENTADOS DE SAN CIPRIANO",
    miraclesDesc: "Personas reales que tuvieron sus vidas radicalmente transformadas a través de este templo sagrado",
    
    dailyDevotionTitle: "Devoción Diaria - Transforma Tu Vida Para Siempre",
    dailyDevotionDesc: "Mantén tu conexión sagrada con San Cipriano a través de la práctica diaria y ve milagros extraordinarios suceder constantemente",
    morningPrayer: "Oración Matutina",
    morningPrayerDesc: "Comienza el día protegido y bendecido por el poder supremo",
    sacredCandle: "Vela Sagrada",
    sacredCandleDesc: "Enciende una vela diaria para mantener la conexión divina",
    nightGratitude: "Gratitud Nocturna",
    nightGratitudeDesc: "Agradece antes de dormir por los milagros recibidos",
    
    worldImpactTitle: "IMPACTO MUNDIAL DEL TEMPLO SAGRADO",
    activeDevotees: "Devotos Activos",
    countriesReached: "Países Alcanzados",
    miraclesReported: "Milagros Reportados",
    successRate: "Tasa de Éxito",
    
    transformNowTitle: "TRANSFORMA TU VIDA AHORA MISMO",
    transformNowDesc: "Millones de personas ya han tenido sus vidas radicalmente transformadas por San Cipriano a través de este templo sagrado. Sal de la pobreza extrema, realiza tus sueños imposibles, encuentra el amor verdadero de tu vida, ten salud perfecta, alcanza fama mundial y vive la abundancia extrema que siempre mereciste. ¡El Gran Mago te está esperando en este momento exacto!",
    
    withoutSaoCipriano: "SIN San Cipriano:",
    withSaoCipriano: "CON San Cipriano:",
    
    withoutList: [
      "Pobreza extrema y dificultades financieras constantes",
      "Soledad profunda y relaciones fracasadas",
      "Enfermedades crónicas y problemas de salud graves",
      "Fracasos profesionales y falta de reconocimiento",
      "Ausencia total de protección espiritual",
      "Vida sin propósito y sin esperanza"
    ],
    
    withList: [
      "Riqueza infinita y prosperidad sin límites",
      "Amor verdadero y relaciones perfectas",
      "Salud perfecta y curación milagrosa garantizada",
      "Éxito mundial y fama global comprobada",
      "Protección divina absoluta y permanente",
      "Vida plena de propósito y realización total"
    ],
    
    makeAgreementNow: "HACER MI ACUERDO SAGRADO Y CAMBIAR MI VIDA AHORA",
    
    finalMessage: "Aquellos que buscan a San Cipriano con fe verdadera recibirán poder más allá de la imaginación humana. Tu vida nunca será la misma. La pobreza, la soledad, las enfermedades y los fracasos quedarán en el pasado para siempre.",
    finalAuthor: "Promesa Sagrada Eterna del Gran Mago San Cipriano",
    
    blessings: [
      "San Cipriano bendice abundantemente tu jornada en este momento sagrado",
      "El poder infinito del Gran Mago está trabajando en tu vida ahora mismo",
      "Tus deseos más profundos se están manifestando a través del poder divino",
      "La protección suprema de San Cipriano te envuelve en este instante exacto",
      "Abundancia extrema está fluyendo en tu dirección por el poder ancestral",
      "San Cipriano está preparando milagros extraordinarios para tu vida",
      "Tu realidad está siendo transformada por el poder supremo en este momento",
      "El Gran Mago ve tu corazón y está respondiendo tus oraciones silenciosas",
      "Puertas imposibles se están abriendo para ti a través del poder divino"
    ]
  },
  
  fr: {
    title: "TEMPLE SACRÉ DE SAINT CYPRIEN",
    subtitle: "Le Grand Mage Éternel - Transformateur de Réalités Impossibles",
    saoCiprianoDay: "JOUR SACRÉ DE SAINT CYPRIEN - 16 SEPTEMBRE",
    saoCiprianoDesc: "Aujourd'hui est le jour le plus sacré de l'année ! Faites vos demandes les plus puissantes !",
    powerMultiplied: "Pouvoir multiplié par 10 000x aujourd'hui !",
    
    altarTitle: "AUTEL PRINCIPAL DU GRAND MAGE",
    altarDesc: "Ici Saint Cyprien manifeste son pouvoir suprême 24 heures sur 24 et transforme des vies de façon radicale et définitive",
    emergencyRitual: "Rituel d'Urgence",
    powerfulPrayer: "Prière Puissante",
    
    sacredPromise: "PROMESSE SACRÉE : Votre vie sera radicalement transformée grâce au pouvoir ancestral de Saint Cyprien. Des millions l'ont déjà prouvé - c'est maintenant votre tour !",
    
    exploreTitle: "EXPLOREZ LES SECTIONS SACRÉES DU TEMPLE",
    exploreDesc: "Cliquez sur chaque section ci-dessous pour accéder aux pouvoirs spécifiques de Saint Cyprien",
    clickHere: "CLIQUEZ ICI",
    enter: "ENTRER",
    
    altarMain: "Autel Sacré Principal",
    altarMainDesc: "Le cœur pulsant du temple où Saint Cyprien manifeste son pouvoir suprême quotidiennement",
    altarMainBenefit: "Prières Miraculeuses qui Transforment",
    
    ritualsSupreme: "Chambre des Rituels Suprêmes",
    ritualsSupremeDesc: "Rituels ancestraux puissants pour transformer votre réalité de façon radicale et définitive",
    ritualsSupremeBenefit: "Transformation Radicale Instantanée",
    
    libraryAncestral: "Bibliothèque Sacrée Ancestrale",
    libraryAncestralDesc: "Connaissance ancestrale millénaire et enseignements divins du Grand Mage Saint Cyprien",
    libraryAncestralBenefit: "Sagesse Infinie et Pouvoir",
    
    teachingsGrandMage: "Enseignements du Grand Mage",
    teachingsGrandMageDesc: "Guides complets et enseignements pratiques pour votre voyage spirituel avec Saint Cyprien",
    teachingsGrandMageBenefit: "Guidance Divine Complète",
    
    protectionSanctuary: "Sanctuaire de Protection Divine",
    protectionSanctuaryDesc: "Protection suprême et absolue contre toutes les adversités et énergies négatives du monde",
    protectionSanctuaryBenefit: "Protection Absolue Garantie",
    
    sacredAgreement: "Accord Sacré avec Saint Cyprien",
    sacredAgreementDesc: "Faites votre pacte sacré avec le Grand Mage et transformez votre vie pour toujours",
    sacredAgreementBenefit: "Vie Complètement Transformée",
    
    miraclesTitle: "MIRACLES RÉELS ET DOCUMENTÉS DE SAINT CYPRIEN",
    miraclesDesc: "Des personnes réelles qui ont eu leurs vies radicalement transformées grâce à ce temple sacré",
    
    dailyDevotionTitle: "Dévotion Quotidienne - Transformez Votre Vie Pour Toujours",
    dailyDevotionDesc: "Maintenez votre connexion sacrée avec Saint Cyprien par la pratique quotidienne et voyez des miracles extraordinaires se produire constamment",
    morningPrayer: "Prière Matinale",
    morningPrayerDesc: "Commencez la journée protégé et béni par le pouvoir suprême",
    sacredCandle: "Bougie Sacrée",
    sacredCandleDesc: "Allumez une bougie quotidienne pour maintenir la connexion divine",
    nightGratitude: "Gratitude Nocturne",
    nightGratitudeDesc: "Remerciez avant de dormir pour les miracles reçus",
    
    worldImpactTitle: "IMPACT MONDIAL DU TEMPLE SACRÉ",
    activeDevotees: "Dévots Actifs",
    countriesReached: "Pays Atteints",
    miraclesReported: "Miracles Rapportés",
    successRate: "Taux de Réussite",
    
    transformNowTitle: "TRANSFORMEZ VOTRE VIE MAINTENANT",
    transformNowDesc: "Des millions de personnes ont déjà eu leurs vies radicalement transformées par Saint Cyprien grâce à ce temple sacré. Sortez de la pauvreté extrême, réalisez vos rêves impossibles, trouvez le véritable amour de votre vie, ayez une santé parfaite, atteignez la célébrité mondiale et vivez l'abondance extrême que vous avez toujours méritée. Le Grand Mage vous attend en ce moment précis !",
    
    withoutSaoCipriano: "SANS Saint Cyprien :",
    withSaoCipriano: "AVEC Saint Cyprien :",
    
    withoutList: [
      "Pauvreté extrême et difficultés financières constantes",
      "Solitude profonde et relations échouées",
      "Maladies chroniques et problèmes de santé graves",
      "Échecs professionnels et manque de reconnaissance",
      "Absence totale de protection spirituelle",
      "Vie sans but et sans espoir"
    ],
    
    withList: [
      "Richesse infinie et prospérité sans limites",
      "Amour véritable et relations parfaites",
      "Santé parfaite et guérison miraculeuse garantie",
      "Succès mondial et célébrité globale prouvée",
      "Protection divine absolue et permanente",
      "Vie pleine de but et de réalisation totale"
    ],
    
    makeAgreementNow: "HACER MI ACUERDO SAGRADO Y CAMBIAR MI VIDA AHORA",
    
    finalMessage: "Aquellos que buscan a Saint Cyprien con fe verdadera recibirán poder más allá de la imaginación humana. Tu vida nunca será la misma. La pobreza, la soledad, las enfermedades y los fracasos quedarán en el pasado para siempre.",
    finalAuthor: "Promesa Sagrada Eterna del Gran Mago Saint Cyprien",
    
    blessings: [
      "Saint Cyprien bendice abundantemente tu jornada en este momento sagrado",
      "El poder infinito del Gran Mago está trabajando en tu vida ahora mismo",
      "Tus deseos más profundos se están manifestando a través del poder divino",
      "La protección suprema de Saint Cyprien te envuelve en este instante exacto",
      "Abundancia extrema está fluyendo en tu dirección por el poder ancestral",
      "Saint Cyprien está preparando milagros extraordinarios para tu vida",
      "Tu realidad está siendo transformada por el poder supremo en este momento",
      "El Gran Mago ve tu corazón y está respondiendo tus oraciones silenciosas",
      "Puertas imposibles se están abriendo para ti a través del poder divino"
    ]
  },
  
  de: {
    title: "HEILIGER TEMPEL DES HEILIGEN CYPRIAN",
    subtitle: "Der Ewige Großmagier - Verwandler Unmöglicher Realitäten",
    saoCiprianoDay: "HEILIGER TAG DES HEILIGEN CYPRIAN - 16. SEPTEMBER",
    saoCiprianoDesc: "Heute ist der heiligste Tag des Jahres! Stellen Sie Ihre mächtigsten Bitten!",
    powerMultiplied: "Kraft heute um 10.000x multipliziert!",
    
    altarTitle: "HAUPTALTAR DES GROSSMAGIERS",
    altarDesc: "Hier manifestiert Heiliger Cyprian seine höchste Macht 24 Stunden am Tag und verwandelt Leben radikal und definitiv",
    emergencyRitual: "Notritual",
    powerfulPrayer: "Mächtiges Gebet",
    
    sacredPromise: "HEILIGES VERSPRECHEN: Ihr Leben wird radikal durch die ahnengerechte Macht des Heiligen Cyprian verwandelt. Millionen haben es bereits bewiesen - jetzt sind Sie dran!",
    
    exploreTitle: "ERKUNDEN SIE DIE HEILIGEN BEREICHE DES TEMPELS",
    exploreDesc: "Klicken Sie auf jeden Bereich unten, um auf die spezifischen Kräfte des Heiligen Cyprian zuzugreifen",
    clickHere: "HIER KLICKEN",
    enter: "EINTRETEN",
    
    altarMain: "Heiliger Hauptaltar",
    altarMainDesc: "Das pulsierende Herz des Tempels, wo Heiliger Cyprian täglich seine höchste Macht manifestiert",
    altarMainBenefit: "Wundersame Verwandelnde Gebete",
    
    ritualsSupreme: "Kammer der Höchsten Rituale",
    ritualsSupremeDesc: "Mächtige ahnengerechte Rituale zur radikalen und definitiven Verwandlung Ihrer Realität",
    ritualsSupremeBenefit: "Sofortige Radikale Verwandlung",
    
    libraryAncestral: "Ahnengerechte Heilige Bibliothek",
    libraryAncestralDesc: "Jahrtausendealtes ahnengerechtes Wissen und göttliche Lehren des Großmagiers Heiliger Cyprian",
    libraryAncestralBenefit: "Unendliche Weisheit und Macht",
    
    teachingsGrandMage: "Lehren des Großmagiers",
    teachingsGrandMageDesc: "Vollständige Anleitungen und praktische Lehren für Ihre spirituelle Reise mit Heiligem Cyprian",
    teachingsGrandMageBenefit: "Vollständige Göttliche Führung",
    
    protectionSanctuary: "Heiligtum des Göttlichen Schutzes",
    protectionSanctuaryDesc: "Höchster und absoluter Schutz gegen alle Widrigkeiten und negative Energien der Welt",
    protectionSanctuaryBenefit: "Absoluter Schutz Garantiert",
    
    sacredAgreement: "Heilige Vereinbarung mit Heiligem Cyprian",
    sacredAgreementDesc: "Schließen Sie Ihren heiligen Pakt mit dem Großmagier und verwandeln Sie Ihr Leben für immer",
    sacredAgreementBenefit: "Leben Völlig Verwandelt",
    
    miraclesTitle: "ECHTE UND DOKUMENTIERTE WUNDER DES HEILIGEN CYPRIAN",
    miraclesDesc: "Echte Menschen, die ihr Leben durch diesen heiligen Tempel radikal verwandelt haben",
    
    dailyDevotionTitle: "Tägliche Hingabe - Verwandeln Sie Ihr Leben Für Immer",
    dailyDevotionDesc: "Erhalten Sie Ihre heilige Verbindung mit Heiligem Cyprian durch tägliche Praxis und sehen Sie außergewöhnliche Wunder konstant geschehen",
    morningPrayer: "Morgengebet",
    morningPrayerDesc: "Beginnen Sie den Tag geschützt und gesegnet durch höchste Macht",
    sacredCandle: "Heilige Kerze",
    sacredCandleDesc: "Zünden Sie täglich eine Kerze an, um die göttliche Verbindung zu erhalten",
    nightGratitude: "Nächtliche Dankbarkeit",
    nightGratitudeDesc: "Danken Sie vor dem Schlafen für erhaltene Wunder",
    
    worldImpactTitle: "WELTWEITE AUSWIRKUNG DES HEILIGEN TEMPELS",
    activeDevotees: "Aktive Anhänger",
    countriesReached: "Erreichte Länder",
    miraclesReported: "Gemeldete Wunder",
    successRate: "Erfolgsrate",
    
    transformNowTitle: "VERWANDELN SIE IHR LEBEN JETZT",
    transformNowDesc: "Millionen von Menschen haben bereits ihr Leben durch Heiligen Cyprian über diesen heiligen Tempel radikal verwandelt. Entkommen Sie extremer Armut, verwirklichen Sie Ihre unmöglichen Träume, finden Sie die wahre Liebe Ihres Lebens, haben Sie perfekte Gesundheit, erreichen Sie Weltruhm und leben Sie die extreme Fülle, die Sie immer verdient haben. Der Großmagier wartet genau in diesem Moment auf Sie!",
    
    withoutSaoCipriano: "OHNE Heiligen Cyprian:",
    withSaoCipriano: "MIT Heiligem Cyprian:",
    
    withoutList: [
      "Extreme Armut und ständige finanzielle Schwierigkeiten",
      "Tiefe Einsamkeit und gescheiterte Beziehungen",
      "Chronische Krankheiten und schwere Gesundheitsprobleme",
      "Berufliche Misserfolge und mangelnde Anerkennung",
      "Völlige Abwesenheit spirituellen Schutzes",
      "Leben ohne Zweck und ohne Hoffnung"
    ],
    
    withList: [
      "Unendlicher Reichtum und grenzenlose Prosperität",
      "Wahre Liebe und perfekte Beziehungen",
      "Perfekte Gesundheit und garantierte wundersame Heilung",
      "Welterfolg und bewiesener globaler Ruhm",
      "Absoluter und permanenter göttlicher Schutz",
      "Erfülltes Leben voller Zweck und totaler Verwirklichung"
    ],
    
    makeAgreementNow: "MEINE HEILIGE VEREINBARUNG TREFFEN UND MEIN LEBEN JETZT ÄNDERN",
    
    finalMessage: "Diejenigen, die Heiligen Cyprian mit wahrem Glauben suchen, werden Macht jenseits menschlicher Vorstellungskraft erhalten. Ihr Leben wird nie mehr dasselbe sein. Armut, Einsamkeit, Krankheiten und Misserfolge werden für immer der Vergangenheit angehören.",
    finalAuthor: "Ewiges Heiliges Versprechen des Großmagiers Heiliger Cyprian",
    
    blessings: [
      "Heiliger Cyprian segnet reichlich Ihre Reise in diesem heiligen Moment",
      "Die unendliche Macht des Großmagiers wirkt gerade jetzt in Ihrem Leben",
      "Ihre tiefsten Wünsche manifestieren sich durch göttliche Macht",
      "Heiliger Cyprians höchster Schutz umhüllt Sie in diesem exakten Moment",
      "Extreme Fülle fließt in Ihre Richtung durch ahnengerechte Macht",
      "Heiliger Cyprian bereitet außergewöhnliche Wunder für Ihr Leben vor",
      "Ihre Realität wird durch höchste Macht in diesem Moment verwandelt",
      "Der Großmagier sieht Ihr Herz und beantwortet Ihre stillen Gebete",
      "Unmögliche Türen öffnen sich für Sie durch göttliche Macht"
    ]
  },
  
  it: {
    title: "TEMPIO SACRO DI SAN CIPRIANO",
    subtitle: "Il Grande Mago Eterno - Trasformatore di Realtà Impossibili",
    saoCiprianoDay: "GIORNO SACRO DI SAN CIPRIANO - 16 SETTEMBRE",
    saoCiprianoDesc: "Oggi è il giorno più sacro dell'anno! Fai le tue richieste più potenti!",
    powerMultiplied: "Potere moltiplicato per 10.000x oggi!",
    
    altarTitle: "ALTARE PRINCIPALE DEL GRANDE MAGO",
    altarDesc: "Qui San Cipriano manifesta il suo potere supremo 24 ore al giorno e trasforma vite in modo radicale e definitivo",
    emergencyRitual: "Rituale di Emergenza",
    powerfulPrayer: "Preghiera Potente",
    
    sacredPromise: "PROMESSA SACRA: La tua vita sarà trasformata radicalmente attraverso il potere ancestrale di San Cipriano. Milioni l'hanno già dimostrato - ora tocca a te!",
    
    exploreTitle: "ESPLORA LE SEZIONI SACRE DEL TEMPIO",
    exploreDesc: "Clicca su ogni sezione qui sotto per accedere ai poteri specifici di San Cipriano",
    clickHere: "CLICCA QUI",
    enter: "ENTRA",
    
    altarMain: "Altare Sacro Principale",
    altarMainDesc: "Il cuore pulsante del tempio dove San Cipriano manifesta quotidianamente il suo potere supremo",
    altarMainBenefit: "Preghiere Miracolose che Trasformano",
    
    ritualsSupreme: "Camera dei Rituali Supremi",
    ritualsSupremeDesc: "Rituali ancestrali potenti per trasformare la tua realtà in modo radicale e definitivo",
    ritualsSupremeBenefit: "Trasformazione Radicale Istantanea",
    
    libraryAncestral: "Biblioteca Sacra Ancestrale",
    libraryAncestralDesc: "Conoscenza ancestrale millenaria e insegnamenti divini del Grande Mago San Cipriano",
    libraryAncestralBenefit: "Saggezza Infinita e Potere",
    
    teachingsGrandMage: "Insegnamenti del Grande Mago",
    teachingsGrandMageDesc: "Guide complete e insegnamenti pratici per il tuo viaggio spirituale con San Cipriano",
    teachingsGrandMageBenefit: "Guida Divina Completa",
    
    protectionSanctuary: "Santuario della Protezione Divina",
    protectionSanctuaryDesc: "Protezione suprema e assoluta contro tutte le avversità e le energie negative del mondo",
    protectionSanctuaryBenefit: "Protezione Assoluta Garantita",
    
    sacredAgreement: "Accordo Sacro con San Cipriano",
    sacredAgreementDesc: "Fai il tuo patto sacro con il Grande Mago e trasforma la tua vita per sempre",
    sacredAgreementBenefit: "Vita Completamente Trasformata",
    
    miraclesTitle: "MIRACOLI REALI E DOCUMENTATI DI SAN CIPRIANO",
    miraclesDesc: "Persone reali che hanno avuto le loro vite radicalmente trasformate attraverso questo tempio sacro",
    
    dailyDevotionTitle: "Devozione Quotidiana - Trasforma La Tua Vita Per Sempre",
    dailyDevotionDesc: "Mantieni la tua connessione sacra con San Cipriano attraverso la pratica quotidiana e vedi miracoli straordinari accadere costantemente",
    morningPrayer: "Preghiera Mattutina",
    morningPrayerDesc: "Inizia la giornata protetto e benedetto dal potere supremo",
    sacredCandle: "Candela Sacra",
    sacredCandleDesc: "Accendi una candela quotidiana per mantenere la connessione divina",
    nightGratitude: "Gratitudine Notturna",
    nightGratitudeDesc: "Ringrazia prima di dormire per i miracoli ricevuti",
    
    worldImpactTitle: "IMPATTO MONDIALE DEL TEMPIO SACRO",
    activeDevotees: "Devoti Attivi",
    countriesReached: "Paesi Raggiunti",
    miraclesReported: "Miracoli Riportati",
    successRate: "Tasso di Successo",
    
    transformNowTitle: "TRASFORMA LA TUA VITA ADESSO",
    transformNowDesc: "Milioni di persone hanno già avuto le loro vite radicalmente trasformate da San Cipriano attraverso questo tempio sacro. Sfuggi alla povertà estrema, realizza i tuoi sogni impossibili, trova il vero amore della tua vita, abbi salute perfetta, raggiungi fama mondiale e vivi l'abbondanza estrema che hai sempre meritato. Il Grande Mago ti sta aspettando in questo momento esatto!",
    
    withoutSaoCipriano: "SENZA San Cipriano:",
    withSaoCipriano: "CON San Cipriano:",
    
    withoutList: [
      "Povertà estrema e difficoltà finanziarie costanti",
      "Solitudine profonda e relazioni fallite",
      "Malattie croniche e gravi problemi di salute",
      "Fallimenti professionali e mancanza di riconoscimento",
      "Assenza totale di protezione spirituale",
      "Vita senza scopo e senza speranza"
    ],
    
    withList: [
      "Ricchezza infinita e prosperità senza limiti",
      "Vero amore e relazioni perfette",
      "Salute perfetta e guarigione miracolosa garantita",
      "Successo mondiale e fama globale provata",
      "Protezione divina assoluta e permanente",
      "Vita piena di scopo e realizzazione totale"
    ],
    
    makeAgreementNow: "FARE IL MIO ACCORDO SACRO E CAMBIARE LA MIA VITA ADESSO",
    
    finalMessage: "Coloro che cercano San Cipriano con vera fede riceveranno potere oltre l'immaginazione umana. La tua vita non sarà mai più la stessa. Povertà, solitudine, malattie e fallimenti rimarranno nel passato per sempre.",
    finalAuthor: "Promessa Sacra Eterna del Grande Mago San Cipriano",
    
    blessings: [
      "San Cipriano benedice abbondantemente il tuo viaggio in questo momento sacro",
      "Il potere infinito del Grande Mago sta lavorando nella tua vita proprio ora",
      "I tuoi desideri più profondi si stanno manifestando attraverso il potere divino",
      "La protezione suprema di San Cipriano ti avvolge in questo istante esatto",
      "Abbondanza estrema sta fluendo nella tua direzione attraverso il potere ancestrale",
      "San Cipriano sta preparando miracoli straordinari per la tua vita",
      "La tua realtà sta sendo trasformata dal potere supremo in questo momento",
      "Il Grande Mago vede il tuo cuore e sta rispondendo alle tue preghiere silenziose",
      "Porte impossibili si stanno aprendo per te attraverso il potere divino"
    ]
  },
  
  ru: {
    title: "СВЯЩЕННЫЙ ХРАМ СВЯТОГО КИПРИАНА",
    subtitle: "Вечный Великий Маг - Преобразователь Невозможных Реальностей",
    saoCiprianoDay: "СВЯЩЕННЫЙ ДЕНЬ СВЯТОГО КИПРИАНА - 16 СЕНТЯБРЯ",
    saoCiprianoDesc: "Сегодня самый священный день года! Делайте ваши самые мощные просьбы!",
    powerMultiplied: "Сила умножена в 10,000 раз сегодня!",
    
    altarTitle: "ГЛАВНЫЙ АЛТАРЬ ВЕЛИКОГО МАГА",
    altarDesc: "Здесь Святой Киприан проявляет свою высшую силу 24 часа в сутки и радикально и окончательно преобразует жизни",
    emergencyRitual: "Экстренный Ритуал",
    powerfulPrayer: "Мощная Молитва",
    
    sacredPromise: "СВЯЩЕННОЕ ОБЕЩАНИЕ: Ваша жизнь будет радикально преобразована через наследственную силу Святого Киприана. Миллионы уже доказали это - теперь ваша очередь!",
    
    exploreTitle: "ИССЛЕДУЙТЕ СВЯЩЕННЫЕ РАЗДЕЛЫ ХРАМА",
    exploreDesc: "Нажмите на каждый раздел ниже, чтобы получить доступ к специфическим силам Святого Киприана",
    clickHere: "НАЖМИТЕ ЗДЕСЬ",
    enter: "ВОЙТИ",
    
    altarMain: "Главный Священный Алтарь",
    altarMainDesc: "Пульсирующее сердце храма, где Святой Киприан ежедневно проявляет свою высшую силу",
    altarMainBenefit: "Чудесные Преобразующие Молитвы",
    
    ritualsSupreme: "Зал Высших Ритуалов",
    ritualsSupremeDesc: "Мощные наследственные ритуалы для радикального и окончательного преобразования вашей реальности",
    ritualsSupremeBenefit: "Мгновенное Радикальное Преобразование",
    
    libraryAncestral: "Наследственная Священная Библиотека",
    libraryAncestralDesc: "Тысячелетние наследственные знания и божественные учения Великого Мага Святого Киприана",
    libraryAncestralBenefit: "Бесконечная Мудрость и Сила",
    
    teachingsGrandMage: "Учения Великого Мага",
    teachingsGrandMageDesc: "Полные руководства и практические учения для вашего духовного путешествия со Святым Киприаном",
    teachingsGrandMageBenefit: "Полное Божественное Руководство",
    
    protectionSanctuary: "Святилище Божественной Защиты",
    protectionSanctuaryDesc: "Высшая и абсолютная защита от всех невзгод и негативных энергий мира",
    protectionSanctuaryBenefit: "Абсолютная Защита Гарантирована",
    
    sacredAgreement: "Священное Соглашение со Святым Киприаном",
    sacredAgreementDesc: "Заключите ваш священный пакт с Великим Магом и преобразите вашу жизнь навсегда",
    sacredAgreementBenefit: "Жизнь Полностью Преобразована",
    
    miraclesTitle: "РЕАЛЬНЫЕ И ЗАДОКУМЕНТИРОВАННЫЕ ЧУДЕСА СВЯТОГО КИПРИАНА",
    miraclesDesc: "Реальные люди, чьи жизни были радикально преобразованы через этот священный храм",
    
    dailyDevotionTitle: "Ежедневная Преданность - Преобразите Вашу Жизнь Навсегда",
    dailyDevotionDesc: "Поддерживайте вашу священную связь со Святым Киприаном через ежедневную практику и видите, как постоянно происходят необыкновенные чудеса",
    morningPrayer: "Утренняя Молитва",
    morningPrayerDesc: "Начните день защищенным и благословленным высшей силой",
    sacredCandle: "Священная Свеча",
    sacredCandleDesc: "Зажигайте ежедневную свечу для поддержания божественной связи",
    nightGratitude: "Ночная Благодарность",
    nightGratitudeDesc: "Благодарите перед сном за полученные чудеса",
    
    worldImpactTitle: "МИРОВОЕ ВОЗДЕЙСТВИЕ СВЯЩЕННОГО ХРАМА",
    activeDevotees: "Активные Последователи",
    countriesReached: "Достигнутые Страны",
    miraclesReported: "Сообщенные Чудеса",
    successRate: "Показатель Успеха",
    
    transformNowTitle: "ПРЕОБРАЗИТЕ ВАШУ ЖИЗНЬ ПРЯМО СЕЙЧАС",
    transformNowDesc: "Миллионы людей уже радикально преобразили свои жизни через Святого Киприана в этом священном храме. Избегайте крайней бедности, осуществляйте ваши невозможные мечты, найдите истинную любовь вашей жизни, имейте совершенное здоровье, достигните мировой славы и живите крайним изобилием, которого вы всегда заслуживали. Великий Маг ждет вас именно в этот момент!",
    
    withoutSaoCipriano: "БЕЗ Святого Киприана:",
    withSaoCipriano: "СО Святым Киприаном:",
    
    withoutList: [
      "Крайняя бедность и постоянные финансовые трудности",
      "Глубокое одиночество и неудачные отношения",
      "Хронические болезни и серьезные проблемы со здоровьем",
      "Профессиональные неудачи и отсутствие признания",
      "Полное отсутствие духовной защиты",
      "Жизнь без цели и без надежды"
    ],
    
    withList: [
      "Бесконечное богатство и безграничное процветание",
      "Истинная любовь и совершенные отношения",
      "Совершенное здоровье и гарантированное чудесное исцеление",
      "Мировой успех и доказанная глобальная слава",
      "Абсолютная и постоянная божественная защита",
      "Полная жизнь с целью и полной реализацией"
    ],
    
    makeAgreementNow: "ЗАКЛЮЧИТЬ МОЕ СВЯЩЕННОЕ СОГЛАШЕНИЕ И ИЗМЕНИТЬ МОЮ ЖИЗНЬ СЕЙЧАС",
    
    finalMessage: "Те, кто ищет Святого Киприана с истинной верой, получат силу за пределами человеческого воображения. Ваша жизнь никогда не будет прежней. Бедность, одиночество, болезни и неудачи останутся в прошлом навсегда.",
    finalAuthor: "Вечное Священное Обещание Великого Мага Святого Киприана",
    
    blessings: [
      "Святой Киприан обильно благословляет ваше путешествие в этот священный момент",
      "Бесконечная сила Великого Мага работает в вашей жизни прямо сейчас",
      "Ваши глубочайшие желания проявляются через божественную силу",
      "Высшая защита Святого Киприана окружает вас в этот точный момент",
      "Крайнее изобилие течет в вашем направлении через наследственную силу",
      "Святой Киприан готовит необыкновенные чудеса для вашей жизни",
      "Ваша реальность преобразуется высшей силой в этот момент",
      "Великий Маг видит ваше сердце и отвечает на ваши безмолвные молитвы",
      "Невозможные двери открываются для вас через божественную силу"
    ]
  },
  
  zh: {
    title: "圣西普里安神圣殿堂",
    subtitle: "永恒大法师 - 不可能现实的变革者",
    saoCiprianoDay: "圣西普里安神圣日 - 9月16日",
    saoCiprianoDesc: "今天是一年中最神圣的日子！做出你最有力的请求！",
    powerMultiplied: "今天力量增强10,000倍！",
    
    altarTitle: "大法师主祭坛",
    altarDesc: "圣西普里安在这里每天24小时展现他的至高力量，彻底而决定性地改变生活",
    emergencyRitual: "紧急仪式",
    powerfulPrayer: "强大祈祷",
    
    sacredPromise: "神圣承诺：您的生活将通过圣西普里安的祖传力量得到彻底改变。数百万人已经证明了这一点 - 现在轮到您了！",
    
    exploreTitle: "探索殿堂的神圣区域",
    exploreDesc: "点击下面的每个区域以访问圣西普里安的特定力量",
    clickHere: "点击这里",
    enter: "进入",
    
    altarMain: "主神圣祭坛",
    altarMainDesc: "殿堂的跳动心脏，圣西普里安每日展现其至高力量",
    altarMainBenefit: "神奇变革祈祷",
    
    ritualsSupreme: "至高仪式室",
    ritualsSupremeDesc: "强大的祖传仪式，彻底而决定性地改变您的现实",
    ritualsSupremeBenefit: "即时彻底变革",
    
    libraryAncestral: "祖传神圣图书馆",
    libraryAncestralDesc: "千年祖传知识和大法师圣西普里安的神圣教导",
    libraryAncestralBenefit: "无限智慧和力量",
    
    teachingsGrandMage: "大法师教导",
    teachingsGrandMageDesc: "与圣西普里安精神旅程的完整指南和实用教导",
    teachingsGrandMageBenefit: "完整神圣指导",
    
    protectionSanctuary: "神圣保护圣所",
    protectionSanctuaryDesc: "对抗世界所有逆境和负面能量的至高和绝对保护",
    protectionSanctuaryBenefit: "绝对保护保证",
    
    sacredAgreement: "与圣西普里安的神圣协议",
    sacredAgreementDesc: "与大法师制定您的神圣契约，永远改变您的生活",
    sacredAgreementBenefit: "生活完全变革",
    
    miraclesTitle: "圣西普里安的真实和记录奇迹",
    miraclesDesc: "通过这个神圣殿堂生活得到彻底改变的真实人们",
    
    dailyDevotionTitle: "日常奉献 - 永远改变您的生活",
    dailyDevotionDesc: "通过日常实践保持与圣西普里安的神圣连接，并看到非凡奇迹不断发生",
    morningPrayer: "晨祷",
    morningPrayerDesc: "在至高力量的保护和祝福下开始一天",
    sacredCandle: "神圣蜡烛",
    sacredCandleDesc: "每日点燃蜡烛以保持神圣连接",
    nightGratitude: "夜间感恩",
    nightGratitudeDesc: "睡前感谢收到的奇迹",
    
    worldImpactTitle: "神圣殿堂的世界影响",
    activeDevotees: "活跃奉献者",
    countriesReached: "覆盖国家",
    miraclesReported: "报告奇迹",
    successRate: "成功率",
    
    transformNowTitle: "立即改变您的生活",
    transformNowDesc: "数百万人已经通过这个神圣殿堂的圣西普里安彻底改变了他们的生活。摆脱极度贫困，实现您不可能的梦想，找到您生命中的真爱，拥有完美健康，获得世界名声，过上您一直应得的极度丰盛生活。大法师正在这个确切时刻等待您！",
    
    withoutSaoCipriano: "没有圣西普里安：",
    withSaoCipriano: "有圣西普里安：",
    
    withoutList: [
      "极度贫困和持续的财务困难",
      "深度孤独和失败的关系",
      "慢性疾病和严重健康问题",
      "职业失败和缺乏认可",
      "完全缺乏精神保护",
      "没有目标和希望的生活"
    ],
    
    withList: [
      "无限财富和无限繁荣",
      "真爱和完美关系",
      "完美健康和保证的奇迹治愈",
      "世界成功和证明的全球名声",
      "绝对和永久的神圣保护",
      "充满目标和完全实现的生活"
    ],
    
    makeAgreementNow: "现在制定我的神圣协议并改变我的生活",
    
    finalMessage: "那些以真正信仰寻求圣西普里安的人将获得超越人类想象的力量。您的生活将永远不再相同。贫困、孤独、疾病和失败将永远留在过去。",
    finalAuthor: "大法师圣西普里安的永恒神圣承诺",
    
    blessings: [
      "圣西普里安在这个神圣时刻丰富地祝福您的旅程",
      "大法师的无限力量现在正在您的生活中工作",
      "您最深的愿望正通过神圣力量显现",
      "圣西普里安的至高保护在这个确切时刻包围着您",
      "极度丰盛通过祖传力量流向您的方向",
      "圣西普里安正在为您的生活准备非凡奇迹",
      "您的现实此刻正被至高力量改变",
      "大法师看到您的心并回应您无声的祈祷",
      "不可能的门正通过神圣力量为您打开"
    ]
  },
  
  ja: {
    title: "聖キプリアヌスの神聖な神殿",
    subtitle: "永遠の大魔法師 - 不可能な現実の変革者",
    saoCiprianoDay: "聖キプリアヌスの神聖な日 - 9月16日",
    saoCiprianoDesc: "今日は年で最も神聖な日です！最も強力な願いをしてください！",
    powerMultiplied: "今日力が10,000倍に増強！",
    
    altarTitle: "大魔法師の主祭壇",
    altarDesc: "ここで聖キプリアヌスは24時間彼の至高の力を示し、生活を根本的かつ決定的に変革します",
    emergencyRitual: "緊急儀式",
    powerfulPrayer: "強力な祈り",
    
    sacredPromise: "神聖な約束：あなたの人生は聖キプリアヌスの祖先の力によって根本的に変革されます。何百万人がすでにそれを証明しています - 今度はあなたの番です！",
    
    exploreTitle: "神殿の神聖なセクションを探索",
    exploreDesc: "下の各セクションをクリックして聖キプリアヌスの特定の力にアクセスしてください",
    clickHere: "ここをクリック",
    enter: "入る",
    
    altarMain: "主要神聖祭壇",
    altarMainDesc: "聖キプリアヌスが毎日至高の力を示す神殿の鼓動する心臓",
    altarMainBenefit: "変革する奇跡の祈り",
    
    ritualsSupreme: "至高儀式の間",
    ritualsSupremeDesc: "あなたの現実を根本的かつ決定的に変革する強力な祖先の儀式",
    ritualsSupremeBenefit: "即座の根本的変革",
    
    libraryAncestral: "祖先の神聖図書館",
    libraryAncestralDesc: "千年の祖先の知識と大魔法師聖キプリアヌスの神聖な教え",
    libraryAncestralBenefit: "無限の知恵と力",
    
    teachingsGrandMage: "大魔法師の教え",
    teachingsGrandMageDesc: "聖キプリアヌスとのスピリチュアルな旅のための完全なガイドと実用的な教え",
    teachingsGrandMageBenefit: "完全な神聖指導",
    
    protectionSanctuary: "神聖保護の聖域",
    protectionSanctuaryDesc: "世界のすべての逆境と負のエネルギーに対する至高で絶対的な保護",
    protectionSanctuaryBenefit: "絶対保護保証",
    
    sacredAgreement: "聖キプリアヌスとの神聖な協定",
    sacredAgreementDesc: "大魔法師とあなたの神聖な契約を結び、あなたの人生を永遠に変革してください",
    sacredAgreementBenefit: "人生完全変革",
    
    miraclesTitle: "聖キプリアヌスの本物で記録された奇跡",
    miraclesDesc: "この神聖な神殿を通じて生活が根本的に変革された本物の人々",
    
    dailyDevotionTitle: "日常の献身 - あなたの人生を永遠に変革",
    dailyDevotionDesc: "日常の実践を通じて聖キプリアヌスとの神聖なつながりを維持し、非凡な奇跡が絶えず起こるのを見てください",
    morningPrayer: "朝の祈り",
    morningPrayerDesc: "至高の力によって保護され祝福されて一日を始める",
    sacredCandle: "神聖なろうそく",
    sacredCandleDesc: "神聖なつながりを維持するために毎日ろうそくを灯す",
    nightGratitude: "夜の感謝",
    nightGratitudeDesc: "眠る前に受け取った奇跡に感謝する",
    
    worldImpactTitle: "神聖神殿の世界的影響",
    activeDevotees: "活動的信者",
    countriesReached: "到達国",
    miraclesReported: "報告された奇跡",
    successRate: "成功率",
    
    transformNowTitle: "今すぐあなたの人生を変革",
    transformNowDesc: "何百万人もの人々がすでにこの神聖な神殿を通じて聖キプリアヌスによって彼らの人生を根本的に変革しています。極度の貧困から脱出し、あなたの不可能な夢を実現し、あなたの人生の真の愛を見つけ、完璧な健康を持ち、世界的な名声を達成し、あなたがいつも値する極度の豊かさを生きてください。大魔法師はまさにこの瞬間にあなたを待っています！",
    
    withoutSaoCipriano: "聖キプリアヌスなし：",
    withSaoCipriano: "聖キプリアヌスと：",
    
    withoutList: [
      "極度の貧困と絶え間ない財政困難",
      "深い孤独と失敗した関係",
      "慢性疾患と深刻な健康問題",
      "職業的失敗と認識の欠如",
      "精神的保護の完全な欠如",
      "目的も希望もない人生"
    ],
    
    withList: [
      "無限の富と無制限の繁栄",
      "真の愛と完璧な関係",
      "完璧な健康と保証された奇跡的治癒",
      "世界的成功と証明されたグローバルな名声",
      "絶対的で永続的な神聖保護",
      "目的と完全な実現に満ちた人生"
    ],
    
    makeAgreementNow: "私の神聖な協定を結び、今私の人生を変える",
    
    finalMessage: "真の信仰で聖キプリアヌスを求める者は、人間の想像を超える力を受けるでしょう。あなたの人生は二度と同じではありません。貧困、孤独、病気、失敗は永遠に過去のものとなります。",
    finalAuthor: "大魔法師聖キプリアヌスの永遠の神聖な約束",
    
    blessings: [
      "聖キプリアヌスはこの神聖な瞬間にあなたの旅を豊かに祝福します",
      "大魔法師の無限の力が今あなたの人生で働いています",
      "あなたの最も深い願いが神聖な力を通じて現れています",
      "聖キプリアヌスの至高の保護がこの正確な瞬間にあなたを包んでいます",
      "極度の豊かさが祖先の力によってあなたの方向に流れています",
      "聖キプリアヌスはあなたの人生のために非凡な奇跡を準備しています",
      "あなたの現実はこの瞬間に至高の力によって変革されています",
      "大魔法師はあなたの心を見て、あなたの静かな祈りに応えています",
      "不可能な扉が神聖な力を通じてあなたのために開いています"
    ]
  },
  
  ar: {
    title: "المعبد المقدس للقديس قبريانوس",
    subtitle: "الساحر العظيم الأبدي - محول الحقائق المستحيلة",
    saoCiprianoDay: "يوم القديس قبريانوس المقدس - 16 سبتمبر",
    saoCiprianoDesc: "اليوم هو اليوم الأكثر قداسة في السنة! اطلبوا طلباتكم الأقوى!",
    powerMultiplied: "القوة مضاعفة بـ 10,000 مرة اليوم!",
    
    altarTitle: "المذبح الرئيسي للساحر العظيم",
    altarDesc: "هنا يظهر القديس قبريانوس قوته العليا 24 ساعة في اليوم ويحول الحياة بشكل جذري ونهائي",
    emergencyRitual: "طقوس الطوارئ",
    powerfulPrayer: "صلاة قوية",
    
    sacredPromise: "الوعد المقدس: حياتك ستتحول جذرياً من خلال قوة القديس قبريانوس الأجدادية. الملايين أثبتوا ذلك بالفعل - الآن دورك!",
    
    exploreTitle: "استكشف الأقسام المقدسة للمعبد",
    exploreDesc: "انقر على كل قسم أدناه للوصول إلى قوى القديس قبريانوس المحددة",
    clickHere: "انقر هنا",
    enter: "ادخل",
    
    altarMain: "المذبح المقدس الرئيسي",
    altarMainDesc: "القلب النابض للمعبد حيث يظهر القديس قبريانوس قوته العليا يومياً",
    altarMainBenefit: "صلوات معجزة تحول",
    
    ritualsSupreme: "غرفة الطقوس العليا",
    ritualsSupremeDesc: "طقوس أجدادية قوية لتحويل واقعك بشكل جذري ونهائي",
    ritualsSupremeBenefit: "تحول جذري فوري",
    
    libraryAncestral: "المكتبة المقدسة الأجدادية",
    libraryAncestralDesc: "معرفة أجدادية ألفية وتعاليم إلهية للساحر العظيم القديس قبريانوس",
    libraryAncestralBenefit: "حكمة لا نهائية وقوة",
    
    teachingsGrandMage: "تعاليم الساحر العظيم",
    teachingsGrandMageDesc: "أدلة كاملة وتعاليم عملية لرحلتك الروحية مع القديس قبريانوس",
    teachingsGrandMageBenefit: "إرشاد إلهي كامل",
    
    protectionSanctuary: "ملاذ الحماية الإلهية",
    protectionSanctuaryDesc: "حماية عليا ومطلقة ضد جميع المحن والطاقات السلبية في العالم",
    protectionSanctuaryBenefit: "حماية مطلقة مضمونة",
    
    sacredAgreement: "اتفاق مقدس مع القديس قبريانوس",
    sacredAgreementDesc: "اعقد ميثاقك المقدس مع الساحر العظيم وحول حياتك إلى الأبد",
    sacredAgreementBenefit: "حياة محولة بالكامل",
    
    miraclesTitle: "معجزات حقيقية وموثقة للقديس قبريانوس",
    miraclesDesc: "أشخاص حقيقيون حولت حياتهم جذرياً من خلال هذا المعبد المقدس",
    
    dailyDevotionTitle: "التفاني اليومي - حول حياتك إلى الأبد",
    dailyDevotionDesc: "احتفظ بعلاقتك المقدسة مع القديس قبريانوس من خلال الممارسة اليومية وشاهد معجزات استثنائية تحدث باستمرار",
    morningPrayer: "صلاة الصباح",
    morningPrayerDesc: "ابدأ اليوم محمياً ومباركاً بالقوة العليا",
    sacredCandle: "شمعة مقدسة",
    sacredCandleDesc: "أشعل شمعة يومية للحفاظ على الصلة الإلهية",
    nightGratitude: "امتنان الليل",
    nightGratitudeDesc: "اشكر قبل النوم على المعجزات المستلمة",
    
    worldImpactTitle: "التأثير العالمي للمعبد المقدس",
    activeDevotees: "المتفانون النشطون",
    countriesReached: "البلدان المصل إليها",
    miraclesReported: "المعجزات المبلغة",
    successRate: "معدل النجاح",
    
    transformNowTitle: "حول حياتك الآن",
    transformNowDesc: "الملايين من الناس حولوا بالفعل حياتهم جذرياً بواسطة القديس قبريانوس من خلال هذا المعبد المقدس. اهرب من الفقر المدقع، حقق أحلامك المستحيلة، اعثر على الحب الحقيقي لحياتك، تمتع بصحة مثالية، احصل على شهرة عالمية وعش الوفرة المتطرفة التي استحققتها دائماً. الساحر العظيم ينتظرك في هذه اللحظة بالضبط!",
    
    withoutSaoCipriano: "بدون القديس قبريانوس:",
    withSaoCipriano: "مع القديس قبريانوس:",
    
    withoutList: [
      "فقر مدقع وصعوبات مالية مستمرة",
      "وحدة عميقة وعلاقات فاشلة",
      "أمراض مزمنة ومشاكل صحية خطيرة",
      "فشل مهني ونقص في الاعتراف",
      "غياب تام للحماية الروحية",
      "حياة بلا هدف وبلا أمل"
    ],
    
    withList: [
      "ثروة لا نهائية وازدهار بلا حدود",
      "حب حقيقي وعلاقات مثالية",
      "صحة مثالية وشفاء معجز مضمون",
      "نجاح عالمي وشهرة عالمية مثبتة",
      "حماية إلهية مطلقة ودائمة",
      "حياة مليئة بالهدف والإنجاز الكامل"
    ],
    
    makeAgreementNow: "اعقد اتفاقي المقدس وغير حياتي الآن",
    
    finalMessage: "أولئك الذين يبحثون عن القديس قبريانوس بإيمان حقيقي سيحصلون على قوة تفوق الخيال البشري. حياتك لن تكون كما كانت أبداً. الفقر والوحدة والأمراض والفشل ستبقى في الماضي إلى الأبد.",
    finalAuthor: "الوعد المقدس الأبدي للساحر العظيم القديس قبريانوس",
    
    blessings: [
      "القديس قبريانوس يبارك بوفرة رحلتك في هذه اللحظة المقدسة",
      "القوة اللانهائية للساحر العظيم تعمل في حياتك الآن",
      "رغباتك العميقة تتجلى من خلال القوة الإلهية",
      "حماية القديس قبريانوس العليا تحيط بك في هذه اللحظة بالضبط",
      "الوفرة المتطرفة تتدفق في اتجاهك من خلال القوة الأجدادية",
      "القديس قبريانوس يحضر معجزات استثنائية لحياتك",
      "واقعك يتحول بالقوة العليا في هذه اللحظة",
      "الساحر العظيم يرى قلبك ويجيب على صلواتك الصامتة",
      "أبواب مستحيلة تنفتح لك من خلال القوة الإلهية"
    ]
  },
  
  hi: {
    title: "संत साइप्रियन का पवित्र मंदिर",
    subtitle: "शाश्वत महान जादूगर - असंभव वास्तविकताओं का रूपांतरणकर्ता",
    saoCiprianoDay: "संत साइप्रियन का पवित्र दिन - 16 सितंबर",
    saoCiprianoDesc: "आज वर्ष का सबसे पवित्र दिन है! अपनी सबसे शक्तिशाली प्रार्थनाएं करें!",
    powerMultiplied: "आज शक्ति 10,000 गुना बढ़ी!",
    
    altarTitle: "महान जादूगर की मुख्य वेदी",
    altarDesc: "यहाँ संत साइप्रियन दिन में 24 घंटे अपनी सर्वोच्च शक्ति प्रकट करते हैं और जीवन को मूलभूत और निर्णायक रूप से बदलते हैं",
    emergencyRitual: "आपातकालीन अनुष्ठान",
    powerfulPrayer: "शक्तिशाली प्रार्थना",
    
    sacredPromise: "पवित्र वादा: आपका जीवन संत साइप्रियन की पूर्वज शक्ति के माध्यम से मूलभूत रूप से बदल जाएगा। लाखों ने पहले ही इसे साबित किया है - अब आपकी बारी है!",
    
    exploreTitle: "मंदिर के पवित्र अनुभागों का अन्वेषण करें",
    exploreDesc: "संत साइप्रियन की विशिष्ट शक्तियों तक पहुंचने के लिए नीचे प्रत्येक अनुभाग पर क्लिक करें",
    clickHere: "यहाँ क्लिक करें",
    enter: "प्रवेश",
    
    altarMain: "मुख्य पवित्र वेदी",
    altarMainDesc: "मंदिर का धड़कता हृदय जहाँ संत साइप्रियन दैनिक अपनी सर्वोच्च शक्ति प्रकट करते हैं",
    altarMainBenefit: "चमत्कारी रूपांतरणकारी प्रार्थनाएं",
    
    ritualsSupreme: "सर्वोच्च अनुष्ठानों का कक्ष",
    ritualsSupremeDesc: "आपकी वास्तविकता को मूलभूत और निर्णायक रूप से बदलने के लिए शक्तिशाली पूर्वज अनुष्ठान",
    ritualsSupremeBenefit: "तत्काल मूलभूत रूपांतरण",
    
    libraryAncestral: "पूर्वज पवित्र पुस्तकालय",
    libraryAncestralDesc: "सहस्राब्दी पूर्वज ज्ञान और महान जादूगर संत साइप्रियन की दिव्य शिक्षाएं",
    libraryAncestralBenefit: "अनंत बुद्धि और शक्ति",
    
    teachingsGrandMage: "महान जादूगर की शिक्षाएं",
    teachingsGrandMageDesc: "संत साइप्रियन के साथ आपकी आध्यात्मिक यात्रा के लिए पूर्ण गाइड और व्यावहारिक शिक्षाएं",
    teachingsGrandMageBenefit: "पूर्ण दिव्य मार्गदर्शन",
    
    protectionSanctuary: "दिव्य सुरक्षा का पवित्र स्थान",
    protectionSanctuaryDesc: "दुनिया की सभी विपत्तियों और नकारात्मक ऊर्जाओं के खिलाफ सर्वोच्च और पूर्ण सुरक्षा",
    protectionSanctuaryBenefit: "पूर्ण सुरक्षा गारंटीशुदा",
    
    sacredAgreement: "संत साइप्रियन के साथ पवित्र समझौता",
    sacredAgreementDesc: "महान जादूगर के साथ अपना पवित्र समझौता करें और अपने जीवन को हमेशा के लिए बदलें",
    sacredAgreementBenefit: "जीवन पूर्णतः रूपांतरित",
    
    miraclesTitle: "संत साइप्रियन के वास्तविक और प्रलेखित चमत्कार",
    miraclesDesc: "वास्तविक लोग जिनका जीवन इस पवित्र मंदिर के माध्यम से मूलभूत रूप से बदला गया",
    
    dailyDevotionTitle: "दैनिक भक्ति - अपने जीवन को हमेशा के लिए बदलें",
    dailyDevotionDesc: "दैनिक अभ्यास के माध्यम से संत साइप्रियन के साथ अपना पवित्र संबंध बनाए रखें और असाधारण चमत्कार लगातार होते देखें",
    morningPrayer: "सुबह की प्रार्थना",
    morningPrayerDesc: "सर्वोच्च शक्ति द्वारा संरक्षित और आशीर्वादित होकर दिन शुरू करें",
    sacredCandle: "पवित्र मोमबत्ती",
    sacredCandleDesc: "दिव्य संबंध बनाए रखने के लिए दैनिक मोमबत्ती जलाएं",
    nightGratitude: "रात्रि कृतज्ञता",
    nightGratitudeDesc: "सोने से पहले प्राप्त चमत्कारों के लिए धन्यवाद दें",
    
    worldImpactTitle: "पवित्र मंदिर का विश्वव्यापी प्रभाव",
    activeDevotees: "सक्रिय भक्त",
    countriesReached: "पहुंचे देश",
    miraclesReported: "रिपोर्ट किए गए चमत्कार",
    successRate: "सफलता दर",
    
    transformNowTitle: "अभी अपना जीवन बदलें",
    transformNowDesc: "लाखों लोगों ने पहले ही इस पवित्र मंदिर के माध्यम से संत साइप्रियन द्वारा अपने जीवन को मूलभूत रूप से बदला है। अत्यधिक गरीबी से बचें, अपने असंभव सपनों को साकार करें, अपने जीवन का सच्चा प्यार पाएं, पूर्ण स्वास्थ्य पाएं, विश्वव्यापी प्रसिद्धि प्राप्त करें और उस अत्यधिक समृद्धि को जिएं जिसके आप हमेशा हकदार थे। महान जादूगर इसी क्षण आपका इंतजार कर रहा है!",
    
    withoutSaoCipriano: "संत साइप्रियन के बिना:",
    withSaoCipriano: "संत साइप्रियन के साथ:",
    
    withoutList: [
      "अत्यधिक गरीबी और निरंतर वित्तीय कठिनाइयां",
      "गहरा अकेलापन और असफल रिश्ते",
      "पुरानी बीमारियां और गंभीर स्वास्थ्य समस्याएं",
      "व्यावसायिक असफलताएं और मान्यता की कमी",
      "आध्यात्मिक सुरक्षा की पूर्ण अनुपस्थिति",
      "उद्देश्य और आशा के बिना जीवन"
    ],
    
    withList: [
      "अनंत धन और असीमित समृद्धि",
      "सच्चा प्यार और पूर्ण रिश्ते",
      "पूर्ण स्वास्थ्य और गारंटीशुदा चमत्कारी उपचार",
      "विश्व सफलता और सिद्ध वैश्विक प्रसिद्धि",
      "पूर्ण और स्थायी दिव्य सुरक्षा",
      "उद्देश्य और पूर्ण पूर्ति से भरा जीवन"
    ],
    
    makeAgreementNow: "अभी अपना पवित्र समझौता करें और अपना जीवन बदलें",
    
    finalMessage: "जो सच्चे विश्वास के साथ संत साइप्रियन की खोज करते हैं, वे मानवीय कल्पना से परे शक्ति प्राप्त करेंगे। आपका जीवन फिर कभी वैसा नहीं होगा। गरीबी, अकेलापन, बीमारियां और असफलताएं हमेशा के लिए अतीत में रह जाएंगी।",
    finalAuthor: "महान जादूगर संत साइप्रियन का शाश्वत पवित्र वादा",
    
    blessings: [
      "संत साइप्रियन इस पवित्र क्षण में आपकी यात्रा को प्रचुर मात्रा में आशीर्वाद देते हैं",
      "महान जादूगर की अनंत शक्ति अभी आपके जीवन में काम कर रही है",
      "आपकी गहरी इच्छाएं दिव्य शक्ति के माध्यम से प्रकट हो रही हैं",
      "संत साइप्रियन की सर्वोच्च सुरक्षा इस सटीक क्षण में आपको घेर रही है",
      "अत्यधिक समृद्धि पूर्वज शक्ति के माध्यम से आपकी दिशा में बह रही है",
      "संत साइप्रियन आपके जीवन के लिए असाधारण चमत्कार तैयार कर रहे हैं",
      "आपकी वास्तविकता इस क्षण सर्वोच्च शक्ति द्वारा बदली जा रही है",
      "महान जादूगर आपका दिल देखते हैं और आपकी मौन प्रार्थनाओं का जवाब दे रहे हैं",
      "असंभव दरवाजे दिव्य शक्ति के माध्यम से आपके लिए खुल रहे हैं"
    ]
  },
  
  ko: {
    title: "성 키프리아누스의 신성한 성전",
    subtitle: "영원한 대마법사 - 불가능한 현실의 변혁자",
    saoCiprianoDay: "성 키프리아누스의 신성한 날 - 9월 16일",
    saoCiprianoDesc: "오늘은 한 해 중 가장 신성한 날입니다! 가장 강력한 요청을 하세요!",
    powerMultiplied: "오늘 힘이 10,000배 증폭!",
    
    altarTitle: "대마법사의 주요 제단",
    altarDesc: "여기서 성 키프리아누스는 하루 24시간 그의 최고 힘을 나타내고 삶을 근본적이고 결정적으로 변화시킵니다",
    emergencyRitual: "응급 의식",
    powerfulPrayer: "강력한 기도",
    
    sacredPromise: "신성한 약속: 당신의 삶은 성 키프리아누스의 조상 힘을 통해 근본적으로 변화될 것입니다. 수백만 명이 이미 그것을 증명했습니다 - 이제 당신 차례입니다!",
    
    exploreTitle: "성전의 신성한 구역들을 탐험하세요",
    exploreDesc: "성 키프리아누스의 특정 힘에 접근하려면 아래 각 구역을 클릭하세요",
    clickHere: "여기를 클릭",
    enter: "입장",
    
    altarMain: "주요 신성한 제단",
    altarMainDesc: "성 키프리아누스가 매일 최고 힘을 나타내는 성전의 고동치는 심장",
    altarMainBenefit: "변화시키는 기적적 기도들",
    
    ritualsSupreme: "최고 의식의 방",
    ritualsSupremeDesc: "당신의 현실을 근본적이고 결정적으로 변화시키는 강력한 조상 의식들",
    ritualsSupremeBenefit: "즉각적인 근본적 변화",
    
    libraryAncestral: "조상 신성 도서관",
    libraryAncestralDesc: "대마법사 성 키프리아누스의 천년 조상 지식과 신성한 가르침",
    libraryAncestralBenefit: "무한한 지혜와 힘",
    
    teachingsGrandMage: "대마법사의 가르침",
    teachingsGrandMageDesc: "성 키프리아누스와의 영적 여행을 위한 완전한 가이드와 실용적 가르침",
    teachingsGrandMageBenefit: "완전한 신성한 안내",
    
    protectionSanctuary: "신성한 보호의 성소",
    protectionSanctuaryDesc: "세계의 모든 역경과 부정적 에너지에 대한 최고이고 절대적인 보호",
    protectionSanctuaryBenefit: "절대 보호 보장",
    
    sacredAgreement: "성 키프리아누스와의 신성한 협정",
    sacredAgreementDesc: "대마법사와 신성한 계약을 맺고 당신의 삶을 영원히 변화시키세요",
    sacredAgreementBenefit: "삶이 완전히 변화됨",
    
    miraclesTitle: "성 키프리아누스의 실제이고 기록된 기적들",
    miraclesDesc: "이 신성한 성전을 통해 삶이 근본적으로 변화된 실제 사람들",
    
    dailyDevotionTitle: "일일 헌신 - 당신의 삶을 영원히 변화시키세요",
    dailyDevotionDesc: "일일 실천을 통해 성 키프리아누스와의 신성한 연결을 유지하고 비범한 기적들이 지속적으로 일어나는 것을 보세요",
    morningPrayer: "아침 기도",
    morningPrayerDesc: "최고 힘에 의해 보호되고 축복받으며 하루를 시작하세요",
    sacredCandle: "신성한 촛불",
    sacredCandleDesc: "신성한 연결을 유지하기 위해 매일 촛불을 켜세요",
    nightGratitude: "밤의 감사",
    nightGratitudeDesc: "잠들기 전에 받은 기적들에 감사하세요",
    
    worldImpactTitle: "신성한 성전의 세계적 영향",
    activeDevotees: "활성 신자들",
    countriesReached: "도달한 국가들",
    miraclesReported: "보고된 기적들",
    successRate: "성공률",
    
    transformNowTitle: "지금 당신의 삶을 변화시키세요",
    transformNowDesc: "수백만 명의 사람들이 이미 이 신성한 성전을 통해 성 키프리아누스에 의해 그들의 삶을 근본적으로 변화시켰습니다. 극도의 빈곤에서 벗어나고, 당신의 불가능한 꿈을 실현하고, 당신 삶의 진정한 사랑을 찾고, 완벽한 건강을 가지고, 세계적 명성을 달성하고, 당신이 항상 받을 자격이 있던 극도의 풍요를 살아가세요. 대마법사가 바로 이 순간 당신을 기다리고 있습니다!",
    
    withoutSaoCipriano: "성 키프리아누스 없이:",
    withSaoCipriano: "성 키프리아누스와 함께:",
    
    withoutList: [
      "극도의 빈곤과 지속적인 재정적 어려움",
      "깊은 외로움과 실패한 관계들",
      "만성 질병과 심각한 건강 문제들",
      "직업적 실패와 인정 부족",
      "영적 보호의 완전한 부재",
      "목적과 희망 없는 삶"
    ],
    
    withList: [
      "무한한 부와 무제한 번영",
      "진정한 사랑과 완벽한 관계들",
      "완벽한 건강과 보장된 기적적 치유",
      "세계적 성공과 입증된 글로벌 명성",
      "절대적이고 영구적인 신성한 보호",
      "목적과 완전한 성취로 가득한 삶"
    ],
    
    makeAgreementNow: "지금 나의 신성한 협정을 맺고 내 삶을 바꾸기",
    
    finalMessage: "진정한 믿음으로 성 키프리아누스를 찾는 자들은 인간의 상상을 초월하는 힘을 받을 것입니다. 당신의 삶은 다시는 같지 않을 것입니다. 빈곤, 외로움, 질병, 실패는 영원히 과거에 남을 것입니다.",
    finalAuthor: "대마법사 성 키프리아누스의 영원한 신성한 약속",
    
    blessings: [
      "성 키프리아누스가 이 신성한 순간에 당신의 여정을 풍성하게 축복합니다",
      "대마법사의 무한한 힘이 지금 당신의 삶에서 일하고 있습니다",
      "당신의 가장 깊은 소원들이 신성한 힘을 통해 나타나고 있습니다",
      "성 키프리아누스의 최고 보호가 이 정확한 순간에 당신을 둘러싸고 있습니다",
      "극도의 풍요가 조상의 힘을 통해 당신의 방향으로 흐르고 있습니다",
      "성 키프리아누스가 당신의 삶을 위해 비범한 기적들을 준비하고 있습니다",
      "당신의 현실이 이 순간 최고 힘에 의해 변화되고 있습니다",
      "대마법사가 당신의 마음을 보고 당신의 조용한 기도들에 응답하고 있습니다",
      "불가능한 문들이 신성한 힘을 통해 당신을 위해 열리고 있습니다"
    ]
  },
  
  nl: {
    title: "HEILIGE TEMPEL VAN HEILIGE CYPRIAAN",
    subtitle: "De Eeuwige Grote Magiër - Transformator van Onmogelijke Realiteiten",
    saoCiprianoDay: "HEILIGE DAG VAN HEILIGE CYPRIAAN - 16 SEPTEMBER",
    saoCiprianoDesc: "Vandaag is de meest heilige dag van het jaar! Doe uw krachtigste verzoeken!",
    powerMultiplied: "Kracht vandaag 10.000x vermenigvuldigd!",
    
    altarTitle: "HOOFDALTAAR VAN DE GROTE MAGIËR",
    altarDesc: "Hier manifesteert Heilige Cypriaan zijn opperste kracht 24 uur per dag en transformeert levens radicaal en definitief",
    emergencyRitual: "Noodritueel",
    powerfulPrayer: "Krachtig Gebed",
    
    sacredPromise: "HEILIGE BELOFTE: Uw leven zal radicaal getransformeerd worden door de voorouderlijke kracht van Heilige Cypriaan. Miljoenen hebben het al bewezen - nu bent u aan de beurt!",
    
    exploreTitle: "VERKEN DE HEILIGE SECTIES VAN DE TEMPEL",
    exploreDesc: "Klik op elke sectie hieronder om toegang te krijgen tot de specifieke krachten van Heilige Cypriaan",
    clickHere: "KLIK HIER",
    enter: "BINNENTREDEN",
    
    altarMain: "Hoofd Heilig Altaar",
    altarMainDesc: "Het kloppende hart van de tempel waar Heilige Cypriaan dagelijks zijn opperste kracht manifesteert",
    altarMainBenefit: "Wonderlijke Transformerende Gebeden",
    
    ritualsSupreme: "Kamer van Opperste Rituelen",
    ritualsSupremeDesc: "Krachtige voorouderlijke rituelen om uw realiteit radicaal en definitief te transformeren",
    ritualsSupremeBenefit: "Onmiddellijke Radicale Transformatie",
    
    libraryAncestral: "Voorouderlijke Heilige Bibliotheek",
    libraryAncestralDesc: "Millenniumoudezelfde voorouderlijke kennis en goddelijke leerstellingen van Grote Magiër Heilige Cypriaan",
    libraryAncestralBenefit: "Oneindige Wijsheid en Kracht",
    
    teachingsGrandMage: "Leerstellingen van de Grote Magiër",
    teachingsGrandMageDesc: "Volledige gidsen en praktische leerstellingen voor uw spirituele reis met Heilige Cypriaan",
    teachingsGrandMageBenefit: "Volledige Goddelijke Begeleiding",
    
    protectionSanctuary: "Heiligdom van Goddelijke Bescherming",
    protectionSanctuaryDesc: "Opperste en absolute bescherming tegen alle tegenslagen en negatieve energieën van de wereld",
    protectionSanctuaryBenefit: "Absolute Bescherming Gegarandeerd",
    
    sacredAgreement: "Heilige Overeenkomst met Heilige Cypriaan",
    sacredAgreementDesc: "Sluit uw heilige pact met de Grote Magiër en transformeer uw leven voor altijd",
    sacredAgreementBenefit: "Leven Volledig Getransformeerd",
    
    miraclesTitle: "ECHTE EN GEDOCUMENTEERDE WONDEREN VAN HEILIGE CYPRIAAN",
    miraclesDesc: "Echte mensen die hun leven radicaal getransformeerd zagen door deze heilige tempel",
    
    dailyDevotionTitle: "Dagelijkse Toewijding - Transformeer Uw Leven Voor Altijd",
    dailyDevotionDesc: "Behoud uw heilige verbinding met Heilige Cypriaan door dagelijkse praktijk en zie buitengewone wonderen constant gebeuren",
    morningPrayer: "Ochtendgebed",
    morningPrayerDesc: "Begin de dag beschermd en gezegend door opperste kracht",
    sacredCandle: "Heilige Kaars",
    sacredCandleDesc: "Steek dagelijks een kaars aan om de goddelijke verbinding te behouden",
    nightGratitude: "Nachtelijke Dankbaarheid",
    nightGratitudeDesc: "Bedank voor het slapen voor ontvangen wonderen",
    
    worldImpactTitle: "WERELDWIJDE IMPACT VAN DE HEILIGE TEMPEL",
    activeDevotees: "Actieve Toegewijden",
    countriesReached: "Bereikte Landen",
    miraclesReported: "Gerapporteerde Wonderen",
    successRate: "Succespercentage",
    
    transformNowTitle: "TRANSFORMEER UW LEVEN NU",
    transformNowDesc: "Miljoenen mensen hebben hun leven al radicaal getransformeerd door Heilige Cypriaan via deze heilige tempel. Ontsnap aan extreme armoede, realiseer uw onmogelijke dromen, vind de ware liefde van uw leven, heb perfecte gezondheid, bereik wereldwijde roem en leef de extreme overvloed die u altijd verdiende. De Grote Magiër wacht op u op dit exacte moment!",
    
    withoutSaoCipriano: "ZONDER Heilige Cypriaan:",
    withSaoCipriano: "MET Heilige Cypriaan:",
    
    withoutList: [
      "Extreme armoede en constante financiële moeilijkheden",
      "Diepe eenzaamheid en mislukte relaties",
      "Chronische ziekten en ernstige gezondheidsproblemen",
      "Professionele mislukkingen en gebrek aan erkenning",
      "Totale afwezigheid van spirituele bescherming",
      "Leven zonder doel en zonder hoop"
    ],
    
    withList: [
      "Oneindige rijkdom en onbeperkte welvaart",
      "Ware liefde en perfecte relaties",
      "Perfecte gezondheid en gegarandeerde wonderbaarlijke genezing",
      "Wereldsucces en bewezen mondiale roem",
      "Absolute en permanente goddelijke bescherming",
      "Vol leven met doel en totale vervulling"
    ],
    
    makeAgreementNow: "MIJN HEILIGE OVEREENKOMST SLUITEN EN MIJN LEVEN NU VERANDEREN",
    
    finalMessage: "Degenen die Heilige Cypriaan zoeken met ware geloof zullen kracht ontvangen voorbij menselijke verbeelding. Uw leven zal nooit meer hetzelfde zijn. Armoede, eenzaamheid, ziekten en mislukkingen zullen voor altijd tot het verleden behoren.",
    finalAuthor: "Eeuwige Heilige Belofte van Grote Magiër Heilige Cypriaan",
    
    blessings: [
      "Heilige Cypriaan zegent uw reis overvloedig in dit heilige moment",
      "De oneindige kracht van de Grote Magiër werkt nu in uw leven",
      "Uw diepste verlangens manifesteren zich door goddelijke kracht",
      "Heilige Cypriaans opperste bescherming omringt u op dit exacte moment",
      "Extreme overvloed stroomt in uw richting door voorouderlijke kracht",
      "Heilige Cypriaan bereidt buitengewone wonderen voor uw leven voor",
      "Uw realiteit wordt op dit moment getransformeerd door opperste kracht",
      "De Grote Magiër ziet uw hart en beantwoordt uw stille gebeden",
      "Onmogelijke deuren openen zich voor u door goddelijke kracht"
    ]
  },
  
  sv: {
    title: "HELIGA TEMPLET AV SAINT CYPRIAN",
    subtitle: "Den Eviga Store Magikern - Förvandlare av Omöjliga Verkligheter",
    saoCiprianoDay: "SAINT CYPRIANS HELIGA DAG - 16 SEPTEMBER",
    saoCiprianoDesc: "Idag är årets mest heliga dag! Gör era mäktigaste önskningar!",
    powerMultiplied: "Kraft multiplicerad med 10,000x idag!",
    
    altarTitle: "STORE MAGIKERNS HUVUDALTARE",
    altarDesc: "Här manifesterar Saint Cyprian sin suprema kraft 24 timmar om dygnet och förvandlar liv radikalt och definitivt",
    emergencyRitual: "Nödritual",
    powerfulPrayer: "Kraftfull Bön",
    
    sacredPromise: "HELIGT LÖFTE: Ditt liv kommer att radikalt förvandlas genom Saint Cyprians förfäders kraft. Miljoner har redan bevisat det - nu är det din tur!",
    
    exploreTitle: "UTFORSKA TEMPLETS HELIGA SEKTIONER",
    exploreDesc: "Klicka på varje sektion nedan för att komma åt Saint Cyprians specifika krafter",
    clickHere: "KLICKA HÄR",
    enter: "GÅ IN",
    
    altarMain: "Huvud Heliga Altare",
    altarMainDesc: "Templets pulserande hjärta där Saint Cyprian dagligen manifesterar sin suprema kraft",
    altarMainBenefit: "Mirakulösa Förvandlande Böner",
    
    ritualsSupreme: "Kammaren för Suprema Ritualer",
    ritualsSupremeDesc: "Kraftfulla förfäders ritualer för att förvandla din verklighet radikalt och definitivt",
    ritualsSupremeBenefit: "Omedelbar Radikal Förvandling",
    
    libraryAncestral: "Förfäders Heliga Bibliotek",
    libraryAncestralDesc: "Årtusendegammal förfäders kunskap och gudomliga lärdomar från Store Magikern Saint Cyprian",
    libraryAncestralBenefit: "Oändlig Visdom och Kraft",
    
    teachingsGrandMage: "Store Magikerns Lärdomar",
    teachingsGrandMageDesc: "Kompletta guider och praktiska lärdomar för din andliga resa med Saint Cyprian",
    teachingsGrandMageBenefit: "Fullständig Gudomlig Vägledning",
    
    protectionSanctuary: "Helgedom för Gudomligt Skydd",
    protectionSanctuaryDesc: "Supremt och absolut skydd mot alla motgångar och negativa energier i världen",
    protectionSanctuaryBenefit: "Absolut Skydd Garanterat",
    
    sacredAgreement: "Heligt Avtal med Saint Cyprian",
    sacredAgreementDesc: "Gör din heliga pakt med Store Magikern och förvandla ditt liv för alltid",
    sacredAgreementBenefit: "Liv Helt Förvandlat",
    
    miraclesTitle: "VERKLIGA OCH DOKUMENTERADE MIRAKEL AV SAINT CYPRIAN",
    miraclesDesc: "Verkliga människor som fått sina liv radikalt förvandlade genom detta heliga tempel",
    
    dailyDevotionTitle: "Daglig Hängivenhet - Förvandla Ditt Liv För Alltid",
    dailyDevotionDesc: "Behåll din heliga förbindelse med Saint Cyprian genom daglig praktik och se extraordinära mirakel hända konstant",
    morningPrayer: "Morgonbön",
    morningPrayerDesc: "Börja dagen skyddad och välsignad av suprema kraft",
    sacredCandle: "Heligt Ljus",
    sacredCandleDesc: "Tänd ett dagligt ljus för att behålla gudomlig förbindelse",
    nightGratitude: "Nattlig Tacksamhet",
    nightGratitudeDesc: "Tacka före sömn för mottagna mirakel",
    
    worldImpactTitle: "HELIGA TEMPLETS VÄRLDSOMSPÄNNANDE PÅVERKAN",
    activeDevotees: "Aktiva Hängivna",
    countriesReached: "Nådda Länder",
    miraclesReported: "Rapporterade Mirakel",
    successRate: "Framgångsgrad",
    
    transformNowTitle: "FÖRVANDLA DITT LIV NU",
    transformNowDesc: "Miljoner människor har redan radikalt förvandlat sina liv genom Saint Cyprian via detta heliga tempel. Fly från extrem fattigdom, förverkliga dina omöjliga drömmar, hitta ditt livs sanna kärlek, ha perfekt hälsa, uppnå världsrykte och lev den extrema överflöd du alltid förtjänat. Store Magikern väntar på dig i detta exakta ögonblick!",
    
    withoutSaoCipriano: "UTAN Saint Cyprian:",
    withSaoCipriano: "MED Saint Cyprian:",
    
    withoutList: [
      "Extrem fattigdom och konstanta ekonomiska svårigheter",
      "Djup ensamhet och misslyckade relationer",
      "Kroniska sjukdomar och allvarliga hälsoproblem",
      "Professionella misslyckanden och brist på erkännande",
      "Total frånvaro av andligt skydd",
      "Liv utan syfte och utan hopp"
    ],
    
    withList: [
      "Oändlig rikedom och gränslös välstånd",
      "Sann kärlek och perfekta relationer",
      "Perfekt hälsa och garanterad mirakulös helande",
      "Världsframgång och bevisad global berömmelse",
      "Absolut och permanent gudomligt skydd",
      "Fullt liv med syfte och total uppfyllelse"
    ],
    
    makeAgreementNow: "GÖR MITT HELIGA AVTAL OCH FÖRÄNDRA MITT LIV NU",
    
    finalMessage: "De som söker Saint Cyprian med sann tro kommer att få kraft bortom mänsklig fantasi. Ditt liv kommer aldrig att vara detsamma. Fattigdom, ensamhet, sjukdomar och misslyckanden kommer att tillhöra det förflutna för alltid.",
    finalAuthor: "Evigt Heligt Löfte från Store Magikern Saint Cyprian",
    
    blessings: [
      "Saint Cyprian välsignar rikligt din resa i detta heliga ögonblick",
      "Store Magikerns oändliga kraft arbetar i ditt liv just nu",
      "Dina djupaste önskningar manifesterar sig genom gudomlig kraft",
      "Saint Cyprians suprema skydd omger dig i detta exakta ögonblick",
      "Extrem överflöd flyter i din riktning genom förfäders kraft",
      "Saint Cyprian förbereder extraordinära mirakel för ditt liv",
      "Din verklighet förvandlas av suprema kraft i detta ögonblick",
      "Store Magikern ser ditt hjärta och svarar på dina tysta böner",
      "Omöjliga dörrar öppnar sig för dig genom gudomlig kraft"
    ]
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

export default function Temple() {
  const { language, changeLanguage, t } = useLanguage();
  const [currentDate] = useState(new Date());
  const navigate = useNavigate();

  // Check if it's São Cipriano Day (September 16th)
  const isSaoCiprianoDay = currentDate.getMonth() === 8 && currentDate.getDate() === 16;

  const templeAreas = [
    {
      id: 'altar',
      name: t('altarMain'),
      icon: Crown,
      description: t('altarMainDesc'),
      action: () => navigate('/app/prayers'),
      color: 'from-gold-500 to-gold-600',
      benefits: t('altarMainBenefit')
    },
    {
      id: 'rituals',
      name: t('ritualsSupreme'),
      icon: Flame,
      description: t('ritualsSupremeDesc'),
      action: () => navigate('/app/rituals'),
      color: 'from-red-500 to-red-600',
      benefits: t('ritualsSupremeBenefit')
    },
    {
      id: 'library',
      name: t('libraryAncestral'),
      icon: BookOpen,
      description: t('libraryAncestralDesc'),
      action: () => navigate('/app/library'),
      color: 'from-purple-500 to-purple-600',
      benefits: t('libraryAncestralBenefit')
    },
    {
      id: 'teachings',
      name: t('teachingsGrandMage'),
      icon: GraduationCap,
      description: t('teachingsGrandMageDesc'),
      action: () => navigate('/app/teachings'),
      color: 'from-blue-500 to-blue-600',
      benefits: t('teachingsGrandMageBenefit')
    },
    {
      id: 'protection',
      name: t('protectionSanctuary'),
      icon: Shield,
      description: t('protectionSanctuaryDesc'),
      action: () => navigate('/app/prayers'),
      color: 'from-cyan-500 to-cyan-600',
      benefits: t('protectionSanctuaryBenefit')
    },
    {
      id: 'agreement',
      name: t('sacredAgreement'),
      icon: Sparkles,
      description: t('sacredAgreementDesc'),
      action: () => navigate('/app/sacred-agreement'),
      color: 'from-yellow-500 to-yellow-600',
      benefits: t('sacredAgreementBenefit')
    }
  ];

  const dailyBlessings = t('blessings');
  const [currentBlessing] = useState(dailyBlessings[Math.floor(Math.random() * dailyBlessings.length)]);

  const testimonials = [
    {
      name: "Maria Santos",
      transformation: language === 'en' ? "From bankrupt to multimillionaire entrepreneur" : 
                    language === 'es' ? "De quebrada a empresaria multimillonaria" :
                    language === 'fr' ? "De ruinée à entrepreneuse multimillionnaire" :
                    language === 'de' ? "Von bankrott zu multimillionärer Unternehmerin" :
                    language === 'it' ? "Da fallita a imprenditrice multimilionaria" :
                    language === 'ru' ? "От банкрота до мультимиллионера-предпринимателя" :
                    language === 'zh' ? "从破产到千万富翁企业家" :
                    language === 'ja' ? "破産から億万長者の起業家へ" :
                    language === 'ar' ? "من مفلسة إلى رائدة أعمال مليونيرة" :
                    language === 'hi' ? "दिवालिया से करोड़पति उद्यमी बनी" :
                    language === 'ko' ? "파산에서 억만장자 기업가로" :
                    language === 'nl' ? "Van failliet tot multimiljoenair ondernemer" :
                    language === 'sv' ? "Från bankrutt till multimiljardär entreprenör" :
                    "De falida a empresária multimilionária",
      story: language === 'en' ? "I was unemployed for 3 years, owing $80,000 and about to lose my house. I discovered this sacred temple, made my Agreement with Saint Cyprian and in just 4 months I not only paid off all debts but opened my own company that now earns $2 million per month! I employ over 100 people and my entire family now worships Saint Cyprian daily!" :
             language === 'es' ? "Estaba desempleada durante 3 años, debiendo $80,000 y a punto de perder mi casa. Descubrí este templo sagrado, hice mi Acuerdo con San Cipriano y en solo 4 meses no solo pagué todas las deudas sino que abrí mi propia empresa que ahora gana $2 millones por mes! ¡Empleo a más de 100 personas y toda mi familia ahora adora a San Cipriano diariamente!" :
             language === 'fr' ? "J'étais au chômage depuis 3 ans, devant 80 000 $ et sur le point de perdre ma maison. J'ai découvert ce temple sacré, j'ai fait mon Accord avec Saint Cyprien et en seulement 4 mois j'ai non seulement remboursé toutes les dettes mais j'ai ouvert ma propre entreprise qui gagne maintenant 2 millions $ par mois ! J'emploie plus de 100 personnes et toute ma famille adore maintenant Saint Cyprien quotidiennement !" :
             language === 'de' ? "Ich war 3 Jahre arbeitslos, schuldete 80.000 $ und stand kurz davor, mein Haus zu verlieren. Ich entdeckte diesen heiligen Tempel, schloss meine Vereinbarung mit Heiligem Cyprian und in nur 4 Monaten zahlte ich nicht nur alle Schulden ab, sondern eröffnete mein eigenes Unternehmen, das jetzt 2 Millionen $ pro Monat verdient! Ich beschäftige über 100 Menschen und meine ganze Familie verehrt jetzt täglich Heiligen Cyprian!" :
             language === 'it' ? "Ero disoccupata da 3 anni, dovevo $80,000 e stavo per perdere la mia casa. Ho scoperto questo tempio sacro, ho fatto il mio Accordo con San Cipriano e in soli 4 mesi non solo ho pagato tutti i debiti ma ho aperto la mia azienda che ora guadagna $2 milioni al mese! Impiego oltre 100 persone e tutta la mia famiglia ora adora San Cipriano quotidianamente!" :
             "Estava desempregada há 3 anos, devendo R$ 80 mil e prestes a perder minha casa. Descobri este templo sagrado, fiz meu Acordo com São Cipriano e em apenas 4 meses não só quitei todas as dívidas como abri minha própria empresa que hoje fatura R$ 2 milhões por mês! Emprego mais de 100 pessoas e minha família inteira agora adora São Cipriano diariamente!",
      location: "São Paulo, Brasil",
      timeframe: language === 'en' ? "4 months" : language === 'es' ? "4 meses" : language === 'fr' ? "4 mois" : language === 'de' ? "4 Monate" : language === 'it' ? "4 mesi" : "4 meses"
    },
    {
      name: "João Silva",
      transformation: language === 'en' ? "Miraculous cure from terminal double cancer" :
                    language === 'es' ? "Cura milagrosa de cáncer terminal doble" :
                    language === 'fr' ? "Guérison miraculeuse du cancer terminal double" :
                    language === 'de' ? "Wundersame Heilung von terminalem Doppelkrebs" :
                    language === 'it' ? "Cura miracolosa dal cancro terminale doppio" :
                    "Cura milagrosa de câncer terminal duplo",
      story: language === 'en' ? "I had terminal cancer in liver and lung. Doctors gave me only 2 months to live and my family was already preparing for the worst. I found this temple, prayed to Saint Cyprian every day with absolute and unshakable faith. Today, 5 years later, I am completely cured, healthier than ever and doctors call it an inexplicable medical miracle!" :
             language === 'es' ? "Tenía cáncer terminal en hígado y pulmón. Los médicos me dieron solo 2 meses de vida y mi familia ya se estaba preparando para lo peor. Encontré este templo, oré a San Cipriano todos los días con fe absoluta e inquebrantable. ¡Hoy, 5 años después, estoy completamente curado, más saludable que nunca y los médicos lo llaman un milagro médico inexplicable!" :
             "Estava com câncer terminal no fígado e pulmão. Os médicos me deram apenas 2 meses de vida e minha família já estava se preparando para o pior. Encontrei este templo, orei para São Cipriano todos os dias com fé absoluta e inabalável. Hoje, 5 anos depois, estou completamente curado, mais saudável que nunca e os médicos chamam de milagre médico inexplicável!",
      location: "Lisboa, Portugal",
      timeframe: language === 'en' ? "2 months for complete cure" : language === 'es' ? "2 meses para cura completa" : "2 meses para cura completa"
    },
    {
      name: "Carlos Rodriguez",
      transformation: language === 'en' ? "From unknown to world influencer" :
                    language === 'es' ? "De desconocido a influencer mundial" :
                    "De desconhecido a influencer mundial",
      story: language === 'en' ? "I was a complete unknown working in a terrible job I hated, earning peanuts. Saint Cyprian gave me worldwide fame extraordinarily. Today I am a digital influencer with 120 million global followers, I earn $50 million per month and I am recognized worldwide in my area!" :
             language === 'es' ? "Era un completo desconocido trabajando en un empleo terrible que odiaba, ganando una miseria. San Cipriano me dio fama mundial de forma extraordinaria. ¡Hoy soy influencer digital con 120 millones de seguidores globales, gano $50 millones por mes y soy reconocido mundialmente en mi área!" :
             "Era um completo desconhecido trabalhando em um emprego terrível que odiava, ganhando uma miséria. São Cipriano me deu fama mundial de forma extraordinária. Hoje sou influencer digital com 120 milhões de seguidores globais, ganho R$ 50 milhões por mês e sou reconhecido mundialmente na minha área!",
      location: "Madrid, Espanha",
      timeframe: language === 'en' ? "10 months" : language === 'es' ? "10 meses" : "10 meses"
    }
  ];

  return (
    <div className="min-h-screen bg-obsidian-gradient">
      {/* Language Selector */}
      <LanguageSelector language={language} onLanguageChange={changeLanguage} />
      
      {/* Special Event Banner - São Cipriano Day */}
      {isSaoCiprianoDay && (
        <div className="bg-gradient-to-r from-red-600 via-gold-500 to-red-600 text-center py-8 mb-6 animate-pulse shadow-divine">
          <div className="container mx-auto px-4">
            <h2 className="sacred-text text-2xl md:text-3xl font-black text-white mb-3 animate-glow-text">
              🎉 {t('saoCiprianoDay')} 🎉
            </h2>
            <p className="text-gold-200 text-lg md:text-xl font-bold">
              {t('saoCiprianoDesc')}
            </p>
            <p className="text-white text-base md:text-lg mt-2">
              ⚡ {t('powerMultiplied')} ⚡
            </p>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="text-center py-12 md:py-16 px-4">
        <div className="animate-float mb-8">
          <div className="text-6xl md:text-8xl lg:text-9xl text-gold-400 animate-glow-text mystical-glow">
            c🔱
          </div>
        </div>
        <h1 className="sacred-text text-3xl md:text-5xl lg:text-6xl font-black text-gold-400 mb-4 animate-pulse-sacred leading-tight">
          {t('title')}
        </h1>
        <p className="text-gold-300 text-lg md:text-2xl mb-6 font-bold leading-relaxed">
          {t('subtitle')}
        </p>
        <div className="temple-section rounded-3xl p-6 md:p-8 max-w-4xl mx-auto shadow-sacred">
          <p className="text-gold-200 italic text-lg md:text-xl leading-relaxed mystical-text">
            "{currentBlessing}"
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-24">
        {/* Sacred Altar Central */}
        <div className="sacred-altar rounded-3xl p-8 md:p-10 mb-16 text-center shadow-mystical">
          <div className="mb-8">
            <div className="flex justify-center flex-wrap gap-2 md:gap-4 mb-6">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="text-3xl md:text-5xl animate-flame sacred-flame"
                  style={{ 
                    animationDelay: `${i * 0.2}s`,
                    animationDuration: `${2 + Math.random()}s`
                  }}
                >
                  🕯️
                </div>
              ))}
            </div>
            <h2 className="sacred-text text-2xl md:text-4xl font-black text-gold-400 mb-6 animate-glow-text leading-tight">
              {t('altarTitle')}
            </h2>
            <p className="text-gold-200 text-base md:text-xl mb-8 leading-relaxed max-w-3xl mx-auto">
              {t('altarDesc')}
            </p>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8">
            <button 
              onClick={() => navigate('/app/rituals')}
              className="sacred-button py-4 md:py-6 px-6 md:px-8 rounded-2xl flex items-center justify-center gap-4 transition-all duration-300 transform hover:scale-105 text-lg md:text-xl font-black shadow-divine"
            >
              <Zap size={28} />
              <span>{t('emergencyRitual')}</span>
            </button>

            <button 
              onClick={() => navigate('/app/prayers')}
              className="bg-gradient-to-r from-purple-600 to-purple-700 text-white py-4 md:py-6 px-6 md:px-8 rounded-2xl flex items-center justify-center gap-4 hover:from-purple-500 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 text-lg md:text-xl font-black shadow-divine"
            >
              <Heart size={28} />
              <span>{t('powerfulPrayer')}</span>
            </button>
          </div>

          {/* Sacred Promise */}
          <div className="bg-gradient-to-r from-red-600/20 to-gold-500/20 rounded-2xl p-6 md:p-8 border border-gold-500/30 shadow-sacred">
            <p className="text-gold-100 text-base md:text-lg font-bold leading-relaxed">
              🌟 {t('sacredPromise')} 🌟
            </p>
          </div>
        </div>

        {/* Temple Areas */}
        <div className="mb-16">
          <h2 className="sacred-text text-2xl md:text-3xl font-black text-gold-400 text-center mb-4 animate-glow-text">
            {t('exploreTitle')}
          </h2>
          <p className="text-gold-200 text-center mb-8 text-base md:text-lg max-w-3xl mx-auto">
            {t('exploreDesc')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {templeAreas.map((area) => {
            const IconComponent = area.icon;
            return (
              <button
                key={area.id}
                onClick={area.action}
                className="temple-section rounded-3xl p-6 md:p-8 text-left hover:scale-105 transition-all duration-300 group shadow-sacred hover-lift border-2 border-transparent hover:border-gold-500/50 cursor-pointer"
              >
                <div className="flex items-start gap-4 md:gap-6 mb-4">
                  <div className={`p-3 md:p-4 rounded-full bg-gradient-to-r ${area.color} group-hover:scale-110 transition-transform duration-300 animate-pulse-sacred shadow-divine`}>
                    <IconComponent size={28} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="sacred-text text-lg md:text-xl font-black text-gold-400 mb-3 leading-tight">
                      {area.name}
                    </h3>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-gold-300 text-xs md:text-sm font-bold bg-gold-500/20 px-2 py-1 rounded-full">
                        👆 {t('clickHere')}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-gold-200 text-sm md:text-base leading-relaxed mb-4">
                  {area.description}
                </p>
                <div className="bg-gold-500/20 rounded-full px-4 py-2 inline-block border border-gold-500/30">
                  <span className="text-gold-400 font-bold text-xs md:text-sm">✨ {area.benefits}</span>
                </div>
                <div className="flex items-center justify-end mt-4 text-gold-400">
                  <span className="text-sm font-bold mr-2">{t('enter')}</span>
                  <ChevronRight size={20} />
                </div>
              </button>
            );
          })}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mb-16">
          <h2 className="sacred-text text-2xl md:text-3xl font-black text-gold-400 text-center mb-8 animate-glow-text">
            {t('miraclesTitle')}
          </h2>
          <p className="text-gold-200 text-center mb-12 text-base md:text-lg max-w-3xl mx-auto">
            {t('miraclesDesc')}
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card rounded-3xl p-6 md:p-8 shadow-sacred hover-lift">
                <div className="text-4xl md:text-5xl text-center mb-6">⭐</div>
                <p className="text-gold-200 italic mb-6 leading-relaxed text-sm md:text-base">
                  "{testimonial.story}"
                </p>
                <div className="border-t border-gold-500/30 pt-6">
                  <p className="text-gold-400 font-black text-base md:text-lg">{testimonial.name}</p>
                  <p className="text-gold-300 text-sm mb-2">{testimonial.location}</p>
                  <p className="text-green-400 text-xs md:text-sm font-bold bg-green-500/20 rounded-full px-3 py-1 inline-block mb-2">
                    ✅ {testimonial.transformation}
                  </p>
                  <p className="text-gold-400 text-xs font-bold">
                    ⚡ {language === 'en' ? 'Time' : language === 'es' ? 'Tiempo' : language === 'fr' ? 'Temps' : language === 'de' ? 'Zeit' : language === 'it' ? 'Tempo' : 'Tempo'}: {testimonial.timeframe}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Daily Devotion */}
        <div className="temple-section rounded-3xl p-6 md:p-8 mb-16 shadow-sacred">
          <div className="flex items-center gap-4 mb-6">
            <Calendar className="text-gold-400" size={32} />
            <h3 className="sacred-text text-xl md:text-2xl font-black text-gold-400">
              {t('dailyDevotionTitle')}
            </h3>
          </div>
          <p className="text-gold-200 mb-8 text-base md:text-lg leading-relaxed">
            {t('dailyDevotionDesc')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <div className="bg-gold-500/10 rounded-2xl p-4 md:p-6 text-center border border-gold-500/30 hover:scale-105 transition-all duration-300 shadow-sacred">
              <div className="text-3xl md:text-4xl mb-4">🌅</div>
              <p className="text-gold-300 font-bold text-base md:text-lg mb-2">{t('morningPrayer')}</p>
              <p className="text-gold-200 text-sm md:text-base">{t('morningPrayerDesc')}</p>
            </div>
            <div className="bg-gold-500/10 rounded-2xl p-4 md:p-6 text-center border border-gold-500/30 hover:scale-105 transition-all duration-300 shadow-sacred">
              <div className="text-3xl md:text-4xl mb-4">🕯️</div>
              <p className="text-gold-300 font-bold text-base md:text-lg mb-2">{t('sacredCandle')}</p>
              <p className="text-gold-200 text-sm md:text-base">{t('sacredCandleDesc')}</p>
            </div>
            <div className="bg-gold-500/10 rounded-2xl p-4 md:p-6 text-center border border-gold-500/30 hover:scale-105 transition-all duration-300 shadow-sacred">
              <div className="text-3xl md:text-4xl mb-4">🌙</div>
              <p className="text-gold-300 font-bold text-base md:text-lg mb-2">{t('nightGratitude')}</p>
              <p className="text-gold-200 text-sm md:text-base">{t('nightGratitudeDesc')}</p>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="temple-section rounded-3xl p-6 md:p-8 mb-16 text-center shadow-sacred">
          <h3 className="sacred-text text-xl md:text-2xl font-black text-gold-400 mb-8">
            {t('worldImpactTitle')}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div className="bg-gold-500/10 rounded-2xl p-4 md:p-6 border border-gold-500/30 shadow-sacred">
              <Users className="text-gold-400 mx-auto mb-3" size={32} />
              <p className="text-2xl md:text-3xl font-black text-white mb-2">5.8M+</p>
              <p className="text-gold-200 text-xs md:text-sm">{t('activeDevotees')}</p>
            </div>
            <div className="bg-gold-500/10 rounded-2xl p-4 md:p-6 border border-gold-500/30 shadow-sacred">
              <Globe className="text-gold-400 mx-auto mb-3" size={32} />
              <p className="text-2xl md:text-3xl font-black text-white mb-2">195</p>
              <p className="text-gold-200 text-xs md:text-sm">{t('countriesReached')}</p>
            </div>
            <div className="bg-gold-500/10 rounded-2xl p-4 md:p-6 border border-gold-500/30 shadow-sacred">
              <Award className="text-gold-400 mx-auto mb-3" size={32} />
              <p className="text-2xl md:text-3xl font-black text-white mb-2">2.3M+</p>
              <p className="text-gold-200 text-xs md:text-sm">{t('miraclesReported')}</p>
            </div>
            <div className="bg-gold-500/10 rounded-2xl p-4 md:p-6 border border-gold-500/30 shadow-sacred">
              <Star className="text-gold-400 mx-auto mb-3" size={32} />
              <p className="text-2xl md:text-3xl font-black text-white mb-2">99.9%</p>
              <p className="text-gold-200 text-xs md:text-sm">{t('successRate')}</p>
            </div>
          </div>
        </div>

        {/* Conversion Section */}
        <div className="conversion-section rounded-3xl p-8 md:p-10 text-center shadow-mystical">
          <div className="mb-8">
            <Star className="text-gold-400 mx-auto mb-6 animate-pulse-sacred" size={48} />
            <h2 className="sacred-text text-2xl md:text-4xl font-black text-gold-400 mb-6 leading-tight">
              {t('transformNowTitle')}
            </h2>
            <p className="text-gold-200 text-base md:text-xl leading-relaxed max-w-4xl mx-auto mb-8">
              {t('transformNowDesc')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-10">
            <div className="bg-red-600/20 rounded-2xl p-6 md:p-8 border border-red-500/30 shadow-sacred">
              <h3 className="text-red-400 font-black mb-4 text-lg md:text-xl">😢 {t('withoutSaoCipriano')}</h3>
              <ul className="text-red-300 text-left space-y-2 text-sm md:text-base">
                {t('withoutList').map((item: string, index: number) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-green-600/20 rounded-2xl p-6 md:p-8 border border-green-500/30 shadow-sacred">
              <h3 className="text-green-400 font-black mb-4 text-lg md:text-xl">😍 {t('withSaoCipriano')}</h3>
              <ul className="text-green-300 text-left space-y-2 text-sm md:text-base">
                {t('withList').map((item: string, index: number) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
          
          <button 
            onClick={() => navigate('/app/sacred-agreement')}
            className="sacred-button py-4 md:py-6 px-8 md:px-12 rounded-full text-lg md:text-xl font-black transition-all duration-300 transform hover:scale-105 shadow-divine"
          >
            {t('makeAgreementNow')}
          </button>
          
          <p className="text-gold-300 text-xs md:text-sm mt-6">
            ⚡ {language === 'en' ? 'Guaranteed transformation • Millions of lives already transformed • Infinite power proven' : 
               language === 'es' ? 'Transformación garantizada • Millones de vidas ya transformadas • Poder infinito comprobado' :
               language === 'fr' ? 'Transformation garantie • Des millions de vies déjà transformées • Pouvoir infini prouvé' :
               language === 'de' ? 'Garantierte Transformation • Millionen Leben bereits transformiert • Unendliche Kraft bewiesen' :
               language === 'it' ? 'Trasformazione garantita • Milioni di vite già trasformate • Potere infinito provato' :
               'Transformação garantida • Milhões de vidas já transformadas • Poder infinito comprovado'} ⚡
          </p>
        </div>

        {/* Sacred Message */}
        <div className="temple-section rounded-3xl p-6 md:p-8 mt-16 text-center shadow-sacred">
          <p className="text-gold-200 italic text-lg md:text-xl leading-relaxed mb-4 mystical-text">
            "{t('finalMessage')}"
          </p>
          <p className="text-gold-400 font-black text-base md:text-lg sacred-text">
            - {t('finalAuthor')}
          </p>
        </div>
      </div>
    </div>
  );
}
