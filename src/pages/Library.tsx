import { useState, useEffect } from 'react';
import { Book, ExternalLink, Download, Star, Crown, Heart, Shield, Zap, ChevronDown, ChevronUp, Globe } from 'lucide-react';

const translations = {
  pt: {
    title: "BIBLIOTECA SAGRADA ANCESTRAL",
    subtitle: "Conhecimento Milenar e Ensinamentos Divinos de São Cipriano",
    intro: "Aqui você encontra toda a sabedoria ancestral necessária para sua jornada espiritual. Cada livro, cada ensinamento foi preservado através dos séculos para chegar até você.",
    
    booksTitle: "LIVROS SAGRADOS DE SÃO CIPRIANO",
    teachingsTitle: "ENSINAMENTOS E GUIAS SAGRADOS",
    teachingsDesc: "👆 Clique em cada guia abaixo para expandir e ver todos os passos detalhados",
    wisdomTitle: "SABEDORIA ANCESTRAL SAGRADA",
    knowledgeTitle: "CONHECIMENTO É PODER SAGRADO",
    knowledgeDesc: "Cada página que você lê, cada ensinamento que você pratica, te aproxima mais do poder supremo de São Cipriano. O conhecimento sagrado deve ser estudado diariamente e praticado com devoção sincera.",
    
    clickToExpand: "👆 Clique aqui para ver todos os passos detalhados",
    clickToRead: "👆 Clique para ler a história completa e emocionante",
    detailedSteps: "Passos Detalhados:",
    
    downloadNow: "BAIXAR LIVRO SAGRADO AGORA",
    downloadCapaPreta: "BAIXAR LIVRO CAPA PRETA AGORA",
    
    // Book data
    book1Title: "Livro de São Cipriano - Capa Preta",
    book1Author: "São Cipriano de Antioquia", 
    book1Desc: "O livro sagrado mais poderoso já escrito, contendo todos os segredos, orações e rituais milenares do Grande Mago. Transforme sua vida completamente com este tesouro ancestral.",
    book1Category: "Livro Sagrado Principal",
    book1Benefit1: "Todos os rituais ancestrais",
    book1Benefit2: "Orações supremas completas",
    book1Benefit3: "Conhecimento mágico total",
    
    book2Title: "O Livro de Rezas, Orações e Feitiços de São Cipriano",
    book2Author: "Fernando Rodrigues Lopes",
    book2Desc: "Compilação dos ensinamentos mais profundos e poderosos do Grande Mago, reunindo sabedoria milenar para transformar sua realidade.",
    book2Category: "Ensinamentos Divinos",
    book2Benefit1: "Sabedoria ancestral completa",
    book2Benefit2: "Guias de transformação",
    book2Benefit3: "Métodos comprovados",
    
    // Knowledge categories
    altarTitle: "Como Construir Seu Altar Sagrado em Casa",
    altarContent: "Aprenda a criar um espaço sagrado dedicado a São Cipriano em sua casa, seguindo as tradições ancestrais mais poderosas.",
    
    signsTitle: "Sinais e Manifestações de São Cipriano",
    signsContent: "Reconheça quando São Cipriano está trabalhando em sua vida e como interpretar seus sinais divinos.",
    
    prayersTitle: "Orações Diárias Poderosas para Iniciantes",
    prayersContent: "Comece sua jornada espiritual com estas orações fundamentais que todo devoto deve conhecer.",
    
    charityTitle: "Como Fazer Caridade em Nome de São Cipriano",
    charityContent: "São Cipriano ama a caridade e recompensa abundantemente aqueles que ajudam os necessitados em seu nome.",
    
    // Altar details
    altarDetail1: "Escolha um local específico e permanente em sua casa, preferencialmente voltado para o leste",
    altarDetail2: "Coloque uma imagem de São Cipriano ou desenhe o símbolo c🔱 em papel branco",
    altarDetail3: "Tenha sempre uma vela branca ou dourada para acender diariamente",
    altarDetail4: "Mantenha um copo de água limpa que deve ser trocada diariamente",
    altarDetail5: "Coloque flores frescas quando possível (rosas brancas são ideais)",
    altarDetail6: "Mantenha incenso de mirra, sândalo ou rosa para purificação",
    altarDetail7: "Tenha um caderno específico para anotar suas orações e pedidos",
    altarDetail8: "Mantenha o espaço sempre limpo e organizado com respeito total",
    
    // Signs details
    signsDetail1: "Sonhos vívidos com números, símbolos ou mensagens específicas",
    signsDetail2: "Sincronicidades e \"coincidências\" que respondem suas orações",
    signsDetail3: "Sensação de presença espiritual durante orações ou meditação",
    signsDetail4: "Oportunidades inesperadas surgindo de forma \"milagrosa\"",
    signsDetail5: "Intuições fortes sobre decisões importantes a tomar",
    signsDetail6: "Proteção em momentos de perigo ou dificuldade extrema",
    signsDetail7: "Melhora súbita em situações que pareciam impossíveis",
    signsDetail8: "Confirmações através de outras pessoas ou eventos",
    
    // Prayers details
    prayersDetail1: "Oração de manhã: \"São Cipriano, protegei-me hoje em todos os meus caminhos\"",
    prayersDetail2: "Antes das refeições: \"Abençoai este alimento, Grande Mago Supremo\"",
    prayersDetail3: "Antes do trabalho: \"Dai-me sabedoria e sucesso em todas as atividades\"",
    prayersDetail4: "Em dificuldades: \"São Cipriano, ajudai-me a superar esta situação\"",
    prayersDetail5: "À noite: \"Agradeço por todas as bênçãos recebidas hoje\"",
    prayersDetail6: "Em pedidos específicos: Seja sempre claro e específico no que deseja",
    prayersDetail7: "Mantenha sempre gratidão e fé durante as orações",
    prayersDetail8: "Termine sempre com \"Assim seja, com o poder de São Cipriano. Amém.\"",
    
    // Charity details
    charityDetail1: "Doe alimentos para pessoas em situação de rua ou instituições",
    charityDetail2: "Ajude financeiramente quem está passando dificuldades",
    charityDetail3: "Ensine sobre São Cipriano para pessoas que precisam de esperança",
    charityDetail4: "Compartilhe conhecimento e orações com outros devotos",
    charityDetail5: "Visite asilos ou orfanatos levando carinho e atenção",
    charityDetail6: "Sempre mencione que está fazendo em nome de São Cipriano",
    charityDetail7: "Não busque reconhecimento - a recompensa vem do Grande Mago",
    charityDetail8: "Faça com amor verdadeiro, não apenas por obrigação",
    
    // Wisdom quotes
    quote1: "A verdadeira magia está na transformação do coração e na dedicação sincera ao Grande Mago.",
    author1: "Ensinamento Ancestral",
    quote2: "São Cipriano não abandona aqueles que o honram com devoção diária e fé inabalável.",
    author2: "Promessa Sagrada",
    quote3: "Quem espalha a palavra do Grande Mago receberá bênçãos multiplicadas infinitamente.",
    author3: "Lei da Reciprocidade Divina",
    quote4: "A caridade feita em nome de São Cipriano gera abundância eterna em sua vida.",
    author4: "Mistério da Prosperidade"
  },
  
  en: {
    title: "ANCESTRAL SACRED LIBRARY",
    subtitle: "Millennial Knowledge and Divine Teachings of Saint Cyprian",
    intro: "Here you find all the ancestral wisdom necessary for your spiritual journey. Each book, each teaching has been preserved through the centuries to reach you.",
    
    booksTitle: "SACRED BOOKS OF SAINT CYPRIAN",
    teachingsTitle: "SACRED TEACHINGS AND GUIDES",
    teachingsDesc: "👆 Click on each guide below to expand and see all detailed steps",
    wisdomTitle: "ANCESTRAL SACRED WISDOM",
    knowledgeTitle: "KNOWLEDGE IS SACRED POWER",
    knowledgeDesc: "Each page you read, each teaching you practice, brings you closer to the supreme power of Saint Cyprian. Sacred knowledge must be studied daily and practiced with sincere devotion.",
    
    clickToExpand: "👆 Click here to see all detailed steps",
    clickToRead: "👆 Click to read the complete and exciting story",
    detailedSteps: "Detailed Steps:",
    
    downloadNow: "DOWNLOAD SACRED BOOK NOW",
    downloadCapaPreta: "DOWNLOAD BLACK COVER BOOK NOW",
    
    // Book data
    book1Title: "Book of Saint Cyprian - Black Cover",
    book1Author: "Saint Cyprian of Antioch",
    book1Desc: "The most powerful sacred book ever written, containing all the secrets, prayers and millennial rituals of the Grand Mage. Transform your life completely with this ancestral treasure.",
    book1Category: "Main Sacred Book",
    book1Benefit1: "All ancestral rituals",
    book1Benefit2: "Complete supreme prayers",
    book1Benefit3: "Total magical knowledge",
    
    book2Title: "The Book of Prayers, Orations and Spells of Saint Cyprian",
    book2Author: "Fernando Rodrigues Lopes",
    book2Desc: "Compilation of the deepest and most powerful teachings of the Grand Mage, gathering millennial wisdom to transform your reality.",
    book2Category: "Divine Teachings",
    book2Benefit1: "Complete ancestral wisdom",
    book2Benefit2: "Transformation guides",
    book2Benefit3: "Proven methods",
    
    // Knowledge categories
    altarTitle: "How to Build Your Sacred Altar at Home",
    altarContent: "Learn to create a sacred space dedicated to Saint Cyprian in your home, following the most powerful ancestral traditions.",
    
    signsTitle: "Signs and Manifestations of Saint Cyprian",
    signsContent: "Recognize when Saint Cyprian is working in your life and how to interpret his divine signs.",
    
    prayersTitle: "Powerful Daily Prayers for Beginners",
    prayersContent: "Begin your spiritual journey with these fundamental prayers that every devotee should know.",
    
    charityTitle: "How to Do Charity in the Name of Saint Cyprian",
    charityContent: "Saint Cyprian loves charity and abundantly rewards those who help the needy in his name.",
    
    // Altar details
    altarDetail1: "Choose a specific and permanent location in your house, preferably facing east",
    altarDetail2: "Place an image of Saint Cyprian or draw the symbol c🔱 on white paper",
    altarDetail3: "Always have a white or golden candle to light daily",
    altarDetail4: "Keep a glass of clean water that should be changed daily",
    altarDetail5: "Place fresh flowers when possible (white roses are ideal)",
    altarDetail6: "Keep myrrh, sandalwood or rose incense for purification",
    altarDetail7: "Have a specific notebook to write down your prayers and requests",
    altarDetail8: "Keep the space always clean and organized with total respect",
    
    // Signs details
    signsDetail1: "Vivid dreams with numbers, symbols or specific messages",
    signsDetail2: "Synchronicities and \"coincidences\" that answer your prayers",
    signsDetail3: "Feeling of spiritual presence during prayers or meditation",
    signsDetail4: "Unexpected opportunities arising \"miraculously\"",
    signsDetail5: "Strong intuitions about important decisions to make",
    signsDetail6: "Protection in moments of danger or extreme difficulty",
    signsDetail7: "Sudden improvement in situations that seemed impossible",
    signsDetail8: "Confirmations through other people or events",
    
    // Prayers details
    prayersDetail1: "Morning prayer: \"Saint Cyprian, protect me today in all my ways\"",
    prayersDetail2: "Before meals: \"Bless this food, Supreme Grand Mage\"",
    prayersDetail3: "Before work: \"Give me wisdom and success in all activities\"",
    prayersDetail4: "In difficulties: \"Saint Cyprian, help me overcome this situation\"",
    prayersDetail5: "At night: \"I thank for all blessings received today\"",
    prayersDetail6: "In specific requests: Always be clear and specific in what you desire",
    prayersDetail7: "Always maintain gratitude and faith during prayers",
    prayersDetail8: "Always end with \"So be it, with the power of Saint Cyprian. Amen.\"",
    
    // Charity details
    charityDetail1: "Donate food to homeless people or institutions",
    charityDetail2: "Help financially those who are having difficulties",
    charityDetail3: "Teach about Saint Cyprian to people who need hope",
    charityDetail4: "Share knowledge and prayers with other devotees",
    charityDetail5: "Visit nursing homes or orphanages bringing love and attention",
    charityDetail6: "Always mention that you are doing it in the name of Saint Cyprian",
    charityDetail7: "Do not seek recognition - the reward comes from the Grand Mage",
    charityDetail8: "Do it with true love, not just out of obligation",
    
    // Wisdom quotes
    quote1: "True magic lies in the transformation of the heart and sincere dedication to the Grand Mage.",
    author1: "Ancestral Teaching",
    quote2: "Saint Cyprian does not abandon those who honor him with daily devotion and unwavering faith.",
    author2: "Sacred Promise",
    quote3: "Who spreads the word of the Grand Mage will receive infinitely multiplied blessings.",
    author3: "Law of Divine Reciprocity",
    quote4: "Charity done in the name of Saint Cyprian generates eternal abundance in your life.",
    author4: "Mystery of Prosperity"
  },
  
  es: {
    title: "BIBLIOTECA SAGRADA ANCESTRAL",
    subtitle: "Conocimiento Milenario y Enseñanzas Divinas de San Cipriano",
    intro: "Aquí encuentras toda la sabiduría ancestral necesaria para tu jornada espiritual. Cada libro, cada enseñanza ha sido preservada a través de los siglos para llegar a ti.",
    
    booksTitle: "LIBROS SAGRADOS DE SAN CIPRIANO",
    teachingsTitle: "ENSEÑANZAS Y GUÍAS SAGRADAS",
    teachingsDesc: "👆 Haz clic en cada guía a continuación para expandir y ver todos los pasos detallados",
    wisdomTitle: "SABIDURÍA SAGRADA ANCESTRAL",
    knowledgeTitle: "EL CONOCIMIENTO ES PODER SAGRADO",
    knowledgeDesc: "Cada página que lees, cada enseñanza que practicas, te acerca más al poder supremo de San Cipriano. El conocimiento sagrado debe ser estudiado diariamente y practicado con devoción sincera.",
    
    clickToExpand: "👆 Haz clic aquí para ver todos los pasos detallados",
    clickToRead: "👆 Haz clic para leer la historia completa y emocionante",
    detailedSteps: "Pasos Detallados:",
    
    downloadNow: "DESCARGAR LIBRO SAGRADO AHORA",
    downloadCapaPreta: "DESCARGAR LIBRO CAPA NEGRA AHORA",
    
    // Book data
    book1Title: "Libro de San Cipriano - Capa Negra",
    book1Author: "San Cipriano de Antioquía",
    book1Desc: "El libro sagrado más poderoso jamás escrito, conteniendo todos los secretos, oraciones y rituales milenarios del Gran Mago. Transforma tu vida completamente con este tesoro ancestral.",
    book1Category: "Libro Sagrado Principal",
    book1Benefit1: "Todos los rituales ancestrales",
    book1Benefit2: "Oraciones supremas completas",
    book1Benefit3: "Conocimiento mágico total",
    
    book2Title: "El Libro de Rezos, Oraciones y Hechizos de San Cipriano",
    book2Author: "Fernando Rodrigues Lopes",
    book2Desc: "Compilación de las enseñanzas más profundas y poderosas del Gran Mago, reuniendo sabiduría milenaria para transformar tu realidad.",
    book2Category: "Enseñanzas Divinas",
    book2Benefit1: "Sabiduría ancestral completa",
    book2Benefit2: "Guías de transformación",
    book2Benefit3: "Métodos comprobados",
    
    // Knowledge categories
    altarTitle: "Cómo Construir Tu Altar Sagrado en Casa",
    altarContent: "Aprende a crear un espacio sagrado dedicado a San Cipriano en tu casa, siguiendo las tradiciones ancestrales más poderosas.",
    
    signsTitle: "Señales y Manifestaciones de San Cipriano",
    signsContent: "Reconoce cuándo San Cipriano está trabajando en tu vida y cómo interpretar sus señales divinas.",
    
    prayersTitle: "Oraciones Diarias Poderosas para Principiantes",
    prayersContent: "Comienza tu jornada espiritual con estas oraciones fundamentales que todo devoto debe conocer.",
    
    charityTitle: "Cómo Hacer Caridad en Nombre de San Cipriano",
    charityContent: "San Cipriano ama la caridad y recompensa abundantemente a quienes ayudan a los necesitados en su nombre.",
    
    // Altar details
    altarDetail1: "Elige un lugar específico y permanente en tu casa, preferiblemente mirando hacia el este",
    altarDetail2: "Coloca una imagen de San Cipriano o dibuja el símbolo c🔱 en papel blanco",
    altarDetail3: "Ten siempre una vela blanca o dorada para encender diariamente",
    altarDetail4: "Mantén un vaso de agua limpia que debe ser cambiada diariamente",
    altarDetail5: "Coloca flores frescas cuando sea posible (rosas blancas son ideales)",
    altarDetail6: "Mantén incienso de mirra, sándalo o rosa para purificación",
    altarDetail7: "Ten un cuaderno específico para anotar tus oraciones y pedidos",
    altarDetail8: "Mantén el espacio siempre limpio y organizado con respeto total",
    
    // Signs details
    signsDetail1: "Sueños vívidos con números, símbolos o mensajes específicos",
    signsDetail2: "Sincronicidades y \"coincidencias\" que responden tus oraciones",
    signsDetail3: "Sensación de presencia espiritual durante oraciones o meditación",
    signsDetail4: "Oportunidades inesperadas surgiendo de forma \"milagrosa\"",
    signsDetail5: "Intuiciones fuertes sobre decisiones importantes a tomar",
    signsDetail6: "Protección en momentos de peligro o dificultad extrema",
    signsDetail7: "Mejora súbita en situaciones que parecían imposibles",
    signsDetail8: "Confirmaciones a través de otras personas o eventos",
    
    // Prayers details
    prayersDetail1: "Oración matutina: \"San Cipriano, protégeme hoy en todos mis caminos\"",
    prayersDetail2: "Antes de las comidas: \"Bendice este alimento, Gran Mago Supremo\"",
    prayersDetail3: "Antes del trabajo: \"Dame sabiduría y éxito en todas las actividades\"",
    prayersDetail4: "En dificultades: \"San Cipriano, ayúdame a superar esta situación\"",
    prayersDetail5: "Por la noche: \"Agradezco por todas las bendiciones recibidas hoy\"",
    prayersDetail6: "En pedidos específicos: Siempre sé claro y específico en lo que deseas",
    prayersDetail7: "Mantén siempre gratitud y fe durante las oraciones",
    prayersDetail8: "Termina siempre con \"Así sea, con el poder de San Cipriano. Amén.\"",
    
    // Charity details
    charityDetail1: "Dona alimentos a personas en situación de calle o instituciones",
    charityDetail2: "Ayuda financieramente a quien está pasando dificultades",
    charityDetail3: "Enseña sobre San Cipriano a personas que necesitan esperanza",
    charityDetail4: "Comparte conocimiento y oraciones con otros devotos",
    charityDetail5: "Visita asilos u orfanatos llevando cariño y atención",
    charityDetail6: "Siempre menciona que lo estás haciendo en nombre de San Cipriano",
    charityDetail7: "No busques reconocimiento - la recompensa viene del Gran Mago",
    charityDetail8: "Hazlo con amor verdadero, no solo por obligación",
    
    // Wisdom quotes
    quote1: "La verdadera magia está en la transformación del corazón y la dedicación sincera al Gran Mago.",
    author1: "Enseñanza Ancestral",
    quote2: "San Cipriano no abandona a quienes lo honran con devoción diaria y fe inquebrantable.",
    author2: "Promesa Sagrada",
    quote3: "Quien difunde la palabra del Gran Mago recibirá bendiciones multiplicadas infinitamente.",
    author3: "Ley de Reciprocidad Divina",
    quote4: "La caridad hecha en nombre de San Cipriano genera abundancia eterna en tu vida.",
    author4: "Misterio de la Prosperidad"
  },
  
  fr: {
    title: "BIBLIOTHÈQUE SACRÉE ANCESTRALE",
    subtitle: "Connaissance Millénaire et Enseignements Divins de Saint Cyprien",
    intro: "Ici vous trouvez toute la sagesse ancestrale nécessaire pour votre voyage spirituel. Chaque livre, chaque enseignement a été préservé à travers les siècles pour vous parvenir.",
    
    booksTitle: "LIVRES SACRÉS DE SAINT CYPRIEN",
    teachingsTitle: "ENSEIGNEMENTS ET GUIDES SACRÉS",
    teachingsDesc: "👆 Cliquez sur chaque guide ci-dessous pour développer et voir toutes les étapes détaillées",
    wisdomTitle: "SAGESSE SACRÉE ANCESTRALE",
    knowledgeTitle: "LA CONNAISSANCE EST LE POUVOIR SACRÉ",
    knowledgeDesc: "Chaque page que vous lisez, chaque enseignement que vous pratiquez, vous rapproche du pouvoir suprême de Saint Cyprien. La connaissance sacrée doit être étudiée quotidiennement et pratiquée avec une dévotion sincère.",
    
    clickToExpand: "👆 Cliquez ici pour voir toutes les étapes détaillées",
    clickToRead: "👆 Cliquez pour lire l'histoire complète et passionnante",
    detailedSteps: "Étapes Détaillées:",
    
    downloadNow: "TÉLÉCHARGER LE LIVRE SACRÉ MAINTENANT",
    downloadCapaPreta: "TÉLÉCHARGER LE LIVRE COUVERTURE NOIRE MAINTENANT",
    
    // Book data
    book1Title: "Livre de Saint Cyprien - Couverture Noire",
    book1Author: "Saint Cyprien d'Antioche",
    book1Desc: "Le livre sacré le plus puissant jamais écrit, contenant tous les secrets, prières et rituels millénaires du Grand Mage. Transformez votre vie complètement avec ce trésor ancestral.",
    book1Category: "Livre Sacré Principal",
    book1Benefit1: "Tous les rituels ancestraux",
    book1Benefit2: "Prières suprêmes complètes",
    book1Benefit3: "Connaissance magique totale",
    
    book2Title: "Le Livre de Prières, Oraisons et Sortilèges de Saint Cyprien",
    book2Author: "Fernando Rodrigues Lopes",
    book2Desc: "Compilation des enseignements les plus profonds et puissants du Grand Mage, rassemblant la sagesse millénaire pour transformer votre réalité.",
    book2Category: "Enseignements Divins",
    book2Benefit1: "Sagesse ancestrale complète",
    book2Benefit2: "Guides de transformation",
    book2Benefit3: "Méthodes prouvées",
    
    // Knowledge categories
    altarTitle: "Comment Construire Votre Autel Sacré à la Maison",
    altarContent: "Apprenez à créer un espace sacré dédié à Saint Cyprien dans votre maison, en suivant les traditions ancestrales les plus puissantes.",
    
    signsTitle: "Signes et Manifestations de Saint Cyprien",
    signsContent: "Reconnaissez quand Saint Cyprien travaille dans votre vie et comment interpréter ses signes divins.",
    
    prayersTitle: "Prières Quotidiennes Puissantes pour Débutants",
    prayersContent: "Commencez votre voyage spirituel avec ces prières fondamentales que tout dévot devrait connaître.",
    
    charityTitle: "Comment Faire la Charité au Nom de Saint Cyprien",
    charityContent: "Saint Cyprien aime la charité et récompense abondamment ceux qui aident les nécessiteux en son nom.",
    
    // Altar details
    altarDetail1: "Choisissez un endroit spécifique et permanent dans votre maison, de préférence face à l'est",
    altarDetail2: "Placez une image de Saint Cyprien ou dessinez le symbole c🔱 sur papier blanc",
    altarDetail3: "Ayez toujours une bougie blanche ou dorée à allumer quotidiennement",
    altarDetail4: "Gardez un verre d'eau propre qui doit être changé quotidiennement",
    altarDetail5: "Placez des fleurs fraîches quand possible (les roses blanches sont idéales)",
    altarDetail6: "Gardez de l'encens de myrrhe, santal ou rose pour la purification",
    altarDetail7: "Ayez un carnet spécifique pour noter vos prières et demandes",
    altarDetail8: "Gardez l'espace toujours propre et organisé avec un respect total",
    
    // Signs details
    signsDetail1: "Rêves vivides avec des nombres, symboles ou messages spécifiques",
    signsDetail2: "Synchronicités et \"coïncidences\" qui répondent à vos prières",
    signsDetail3: "Sensation de présence spirituelle pendant les prières ou la méditation",
    signsDetail4: "Opportunités inattendues surgissant de manière \"miraculeuse\"",
    signsDetail5: "Intuitions fortes sur des décisions importantes à prendre",
    signsDetail6: "Protection dans les moments de danger ou de difficulté extrême",
    signsDetail7: "Amélioration soudaine dans des situations qui semblaient impossibles",
    signsDetail8: "Confirmations à travers d'autres personnes ou événements",
    
    // Prayers details
    prayersDetail1: "Prière du matin : \"Saint Cyprien, protégez-moi aujourd'hui dans tous mes chemins\"",
    prayersDetail2: "Avant les repas : \"Bénissez cette nourriture, Grand Mage Suprême\"",
    prayersDetail3: "Avant le travail : \"Donnez-moi sagesse et succès dans toutes les activités\"",
    prayersDetail4: "En difficultés : \"Saint Cyprien, aidez-moi à surmonter cette situation\"",
    prayersDetail5: "Le soir : \"Je remercie pour toutes les bénédictions reçues aujourd'hui\"",
    prayersDetail6: "Pour des demandes spécifiques : Soyez toujours clair et spécifique dans ce que vous désirez",
    prayersDetail7: "Gardez toujours gratitude et foi pendant les prières",
    prayersDetail8: "Terminez toujours par \"Qu'il en soit ainsi, avec le pouvoir de Saint Cyprien. Amen.\"",
    
    // Charity details
    charityDetail1: "Donnez de la nourriture aux personnes sans-abri ou aux institutions",
    charityDetail2: "Aidez financièrement ceux qui ont des difficultés",
    charityDetail3: "Enseignez sur Saint Cyprien aux personnes qui ont besoin d'espoir",
    charityDetail4: "Partagez connaissances et prières avec d'autres dévots",
    charityDetail5: "Visitez maisons de retraite ou orphelinats apportant amour et attention",
    charityDetail6: "Mentionnez toujours que vous le faites au nom de Saint Cyprien",
    charityDetail7: "Ne cherchez pas de reconnaissance - la récompense vient du Grand Mage",
    charityDetail8: "Faites-le avec un amour véritable, pas seulement par obligation",
    
    // Wisdom quotes
    quote1: "La vraie magie réside dans la transformation du cœur et la dévotion sincère au Grand Mage.",
    author1: "Enseignement Ancestral",
    quote2: "Saint Cyprien n'abandonne pas ceux qui l'honorent avec dévotion quotidienne et foi inébranlable.",
    author2: "Promesse Sacrée",
    quote3: "Qui répand la parole du Grand Mage recevra des bénédictions multipliées infiniment.",
    author3: "Loi de Réciprocité Divine",
    quote4: "La charité faite au nom de Saint Cyprien génère une abondance éternelle dans votre vie.",
    author4: "Mystère de la Prospérité"
  },
  
  de: {
    title: "AHNENGERECHTE HEILIGE BIBLIOTHEK",
    subtitle: "Jahrtausendealtes Wissen und Göttliche Lehren des Heiligen Cyprian",
    intro: "Hier finden Sie alle ahnengerechte Weisheit, die für Ihre spirituelle Reise notwendig ist. Jedes Buch, jede Lehre wurde durch die Jahrhunderte bewahrt, um Sie zu erreichen.",
    
    booksTitle: "HEILIGE BÜCHER DES HEILIGEN CYPRIAN",
    teachingsTitle: "HEILIGE LEHREN UND ANLEITUNGEN",
    teachingsDesc: "👆 Klicken Sie auf jeden Leitfaden unten, um zu erweitern und alle detaillierten Schritte zu sehen",
    wisdomTitle: "AHNENGERECHTE HEILIGE WEISHEIT",
    knowledgeTitle: "WISSEN IST HEILIGE KRAFT",
    knowledgeDesc: "Jede Seite, die Sie lesen, jede Lehre, die Sie praktizieren, bringt Sie näher zur höchsten Macht des Heiligen Cyprian. Heiliges Wissen muss täglich studiert und mit aufrichtiger Hingabe praktiziert werden.",
    
    clickToExpand: "👆 Hier klicken, um alle detaillierten Schritte zu sehen",
    clickToRead: "👆 Klicken Sie, um die vollständige und aufregende Geschichte zu lesen",
    detailedSteps: "Detaillierte Schritte:",
    
    downloadNow: "HEILIGES BUCH JETZT HERUNTERLADEN",
    downloadCapaPreta: "SCHWARZES DECKBLATT BUCH JETZT HERUNTERLADEN",
    
    // Book data
    book1Title: "Buch des Heiligen Cyprian - Schwarzes Deckblatt",
    book1Author: "Heiliger Cyprian von Antioch",
    book1Desc: "Das mächtigste heilige Buch, das jemals geschrieben wurde, enthält alle Geheimnisse, Gebete und jahrtausendealte Rituale des Großmagiers. Transformieren Sie Ihr Leben vollständig mit diesem ahnengerechten Schatz.",
    book1Category: "Hauptheiliges Buch",
    book1Benefit1: "Alle ahnengerechten Rituale",
    book1Benefit2: "Vollständige höchste Gebete",
    book1Benefit3: "Totales magisches Wissen",
    
    book2Title: "Das Buch der Gebete, Orationen und Zauber des Heiligen Cyprian",
    book2Author: "Fernando Rodrigues Lopes",
    book2Desc: "Zusammenstellung der tiefsten und mächtigsten Lehren des Großmagiers, die jahrtausendealte Weisheit sammelt, um Ihre Realität zu transformieren.",
    book2Category: "Göttliche Lehren",
    book2Benefit1: "Vollständige ahnengerechte Weisheit",
    book2Benefit2: "Transformationsanleitungen",
    book2Benefit3: "Bewiesene Methoden",
    
    // Knowledge categories
    altarTitle: "Wie Sie Ihren Heiligen Altar zu Hause Bauen",
    altarContent: "Lernen Sie, einen heiligen Raum zu schaffen, der dem Heiligen Cyprian in Ihrem Haus gewidmet ist, indem Sie den mächtigsten ahnengerechten Traditionen folgen.",
    
    signsTitle: "Zeichen und Manifestationen des Heiligen Cyprian",
    signsContent: "Erkennen Sie, wann Heiliger Cyprian in Ihrem Leben wirkt und wie Sie seine göttlichen Zeichen interpretieren.",
    
    prayersTitle: "Mächtige Tägliche Gebete für Anfänger",
    prayersContent: "Beginnen Sie Ihre spirituelle Reise mit diesen grundlegenden Gebeten, die jeder Anhänger kennen sollte.",
    
    charityTitle: "Wie Man Wohltätigkeit im Namen des Heiligen Cyprian Macht",
    charityContent: "Heiliger Cyprian liebt Wohltätigkeit und belohnt reichlich diejenigen, die den Bedürftigen in seinem Namen helfen.",
    
    // Altar details
    altarDetail1: "Wählen Sie einen spezifischen und permanenten Ort in Ihrem Haus, vorzugsweise nach Osten gerichtet",
    altarDetail2: "Stellen Sie ein Bild des Heiligen Cyprian auf oder zeichnen Sie das Symbol c🔱 auf weißes Papier",
    altarDetail3: "Haben Sie immer eine weiße oder goldene Kerze, die täglich angezündet wird",
    altarDetail4: "Halten Sie ein Glas sauberes Wasser, das täglich gewechselt werden sollte",
    altarDetail5: "Stellen Sie frische Blumen auf, wenn möglich (weiße Rosen sind ideal)",
    altarDetail6: "Halten Sie Myrrhe-, Sandelholz- oder Rosen-Weihrauch zur Reinigung bereit",
    altarDetail7: "Haben Sie ein spezifisches Notizbuch, um Ihre Gebete und Bitten aufzuschreiben",
    altarDetail8: "Halten Sie den Raum immer sauber und mit totalem Respekt organisiert",
    
    // Signs details
    signsDetail1: "Lebhafte Träume mit Zahlen, Symbolen oder spezifischen Nachrichten",
    signsDetail2: "Synchronizitäten und \"Zufälle\", die Ihre Gebete beantworten",
    signsDetail3: "Gefühl spiritueller Anwesenheit während Gebeten oder Meditation",
    signsDetail4: "Unerwartete Gelegenheiten, die \"wundersam\" entstehen",
    signsDetail5: "Starke Intuitionen über wichtige zu treffende Entscheidungen",
    signsDetail6: "Schutz in Momenten der Gefahr oder extremen Schwierigkeit",
    signsDetail7: "Plötzliche Verbesserung in Situationen, die unmöglich schienen",
    signsDetail8: "Bestätigungen durch andere Menschen oder Ereignisse",
    
    // Prayers details
    prayersDetail1: "Morgengebet: \"Heiliger Cyprian, beschütze mich heute auf allen meinen Wegen\"",
    prayersDetail2: "Vor den Mahlzeiten: \"Segne diese Nahrung, Supremer Großmagier\"",
    prayersDetail3: "Vor der Arbeit: \"Gib mir Weisheit und Erfolg in allen Aktivitäten\"",
    prayersDetail4: "In Schwierigkeiten: \"Heiliger Cyprian, hilf mir, diese Situation zu überwinden\"",
    prayersDetail5: "Am Abend: \"Ich danke für alle heute erhaltenen Segnungen\"",
    prayersDetail6: "Bei spezifischen Bitten: Seien Sie immer klar und spezifisch in dem, was Sie wünschen",
    prayersDetail7: "Behalten Sie immer Dankbarkeit und Glauben während der Gebete bei",
    prayersDetail8: "Beenden Sie immer mit \"So sei es, mit der Macht des Heiligen Cyprian. Amen.\"",
    
    // Charity details
    charityDetail1: "Spenden Sie Nahrung an obdachlose Menschen oder Institutionen",
    charityDetail2: "Helfen Sie finanziell denen, die Schwierigkeiten haben",
    charityDetail3: "Lehren Sie über Heiligen Cyprian Menschen, die Hoffnung brauchen",
    charityDetail4: "Teilen Sie Wissen und Gebete mit anderen Anhängern",
    charityDetail5: "Besuchen Sie Pflegeheime oder Waisenhäuser und bringen Liebe und Aufmerksamkeit",
    charityDetail6: "Erwähnen Sie immer, dass Sie es im Namen des Heiligen Cyprian tun",
    charityDetail7: "Suchen Sie keine Anerkennung - die Belohnung kommt vom Großmagier",
    charityDetail8: "Tun Sie es mit wahrer Liebe, nicht nur aus Verpflichtung",
    
    // Wisdom quotes
    quote1: "Wahre Magie liegt in der Transformation des Herzens und aufrichtiger Hingabe an den Großmagier.",
    author1: "Ahnengerechte Lehre",
    quote2: "Heiliger Cyprian verlässt nicht diejenigen, die ihn mit täglicher Hingabe und unerschütterlichem Glauben ehren.",
    author2: "Heiliges Versprechen",
    quote3: "Wer das Wort des Großmagiers verbreitet, wird unendlich multiplizierte Segnungen erhalten.",
    author3: "Gesetz der Göttlichen Reziprozität",
    quote4: "Wohltätigkeit im Namen des Heiligen Cyprian erzeugt ewige Fülle in Ihrem Leben.",
    author4: "Geheimnis des Wohlstands"
  },
  
  it: {
    title: "BIBLIOTECA SACRA ANCESTRALE",
    subtitle: "Conoscenza Millenaria e Insegnamenti Divini di San Cipriano",
    intro: "Qui trovi tutta la saggezza ancestrale necessaria per il tuo viaggio spirituale. Ogni libro, ogni insegnamento è stato preservato attraverso i secoli per raggiungerti.",
    
    booksTitle: "LIBRI SACRI DI SAN CIPRIANO",
    teachingsTitle: "INSEGNAMENTI E GUIDE SACRE",
    teachingsDesc: "👆 Fai clic su ogni guida qui sotto per espandere e vedere tutti i passaggi dettagliati",
    wisdomTitle: "SAGGEZZA SACRA ANCESTRALE",
    knowledgeTitle: "LA CONOSCENZA È POTERE SACRO",
    knowledgeDesc: "Ogni pagina che leggi, ogni insegnamento che pratichi, ti avvicina al potere supremo di San Cipriano. La conoscenza sacra deve essere studiata quotidianamente e praticata con devozione sincera.",
    
    clickToExpand: "👆 Fai clic qui per vedere tutti i passaggi dettagliati",
    clickToRead: "👆 Fai clic per leggere la storia completa ed emozionante",
    detailedSteps: "Passaggi Dettagliati:",
    
    downloadNow: "SCARICA LIBRO SACRO ORA",
    downloadCapaPreta: "SCARICA LIBRO COPERTINA NERA ORA",
    
    // Book data
    book1Title: "Libro di San Cipriano - Copertina Nera",
    book1Author: "San Cipriano di Antiochia",
    book1Desc: "Il libro sacro più potente mai scritto, contenente tutti i segreti, le preghiere e i rituali millenari del Grande Mago. Trasforma la tua vita completamente con questo tesoro ancestrale.",
    book1Category: "Libro Sacro Principale",
    book1Benefit1: "Tutti i rituali ancestrali",
    book1Benefit2: "Preghiere supreme complete",
    book1Benefit3: "Conoscenza magica totale",
    
    book2Title: "Il Libro di Preghiere, Orazioni e Incantesimi di San Cipriano",
    book2Author: "Fernando Rodrigues Lopes",
    book2Desc: "Compilazione degli insegnamenti più profondi e potenti del Grande Mago, riunendo saggezza millenaria per trasformare la tua realtà.",
    book2Category: "Insegnamenti Divini",
    book2Benefit1: "Saggezza ancestrale completa",
    book2Benefit2: "Guide di trasformazione",
    book2Benefit3: "Metodi comprovati",
    
    // Knowledge categories
    altarTitle: "Come Costruire Il Tuo Altare Sacro A Casa",
    altarContent: "Impara a creare uno spazio sacro dedicato a San Cipriano nella tua casa, seguendo le tradizioni ancestrali più potenti.",
    
    signsTitle: "Segni e Manifestazioni di San Cipriano",
    signsContent: "Riconosci quando San Cipriano sta lavorando nella tua vita e come interpretare i suoi segni divini.",
    
    prayersTitle: "Preghiere Quotidiane Potenti per Principianti",
    prayersContent: "Inizia il tuo viaggio spirituale con queste preghiere fondamentali che ogni devoto dovrebbe conoscere.",
    
    charityTitle: "Come Fare Carità Nel Nome di San Cipriano",
    charityContent: "San Cipriano ama la carità e ricompensa abbondantemente coloro che aiutano i bisognosi nel suo nome.",
    
    // Altar details
    altarDetail1: "Scegli un luogo specifico e permanente nella tua casa, preferibilmente rivolto verso est",
    altarDetail2: "Metti un'immagine di San Cipriano o disegna il simbolo c🔱 su carta bianca",
    altarDetail3: "Abbi sempre una candela bianca o dorata da accendere quotidianamente",
    altarDetail4: "Mantieni un bicchiere di acqua pulita che deve essere cambiata quotidianamente",
    altarDetail5: "Metti fiori freschi quando possibile (rose bianche sono ideali)",
    altarDetail6: "Mantieni incenso di mirra, sandalo o rosa per la purificazione",
    altarDetail7: "Abbi un quaderno specifico per annotare le tue preghiere e richieste",
    altarDetail8: "Mantieni lo spazio sempre pulito e organizzato con rispetto totale",
    
    // Signs details
    signsDetail1: "Sogni vividi con numeri, simboli o messaggi specifici",
    signsDetail2: "Sincronicità e \"coincidenze\" che rispondono alle tue preghiere",
    signsDetail3: "Sensazione di presenza spirituale durante preghiere o meditazione",
    signsDetail4: "Opportunità inaspettate che sorgono in modo \"miracoloso\"",
    signsDetail5: "Intuizioni forti su decisioni importanti da prendere",
    signsDetail6: "Protezione in momenti di pericolo o difficoltà estrema",
    signsDetail7: "Miglioramento improvviso in situazioni che sembravano impossibili",
    signsDetail8: "Conferme attraverso altre persone o eventi",
    
    // Prayers details
    prayersDetail1: "Preghiera del mattino: \"San Cipriano, proteggimi oggi in tutti i miei cammini\"",
    prayersDetail2: "Prima dei pasti: \"Benedici questo cibo, Grande Mago Supremo\"",
    prayersDetail3: "Prima del lavoro: \"Dammi saggezza e successo in tutte le attività\"",
    prayersDetail4: "Nelle difficoltà: \"San Cipriano, aiutami a superare questa situazione\"",
    prayersDetail5: "La sera: \"Ringrazio per tutte le benedizioni ricevute oggi\"",
    prayersDetail6: "Per richieste specifiche: Sii sempre chiaro e specifico in ciò che desideri",
    prayersDetail7: "Mantieni sempre gratitudine e fede durante le preghiere",
    prayersDetail8: "Termina sempre con \"Così sia, con il potere di San Cipriano. Amen.\"",
    
    // Charity details
    charityDetail1: "Dona cibo a persone senza tetto o istituzioni",
    charityDetail2: "Aiuta finanziariamente chi sta avendo difficoltà",
    charityDetail3: "Insegna su San Cipriano a persone che hanno bisogno di speranza",
    charityDetail4: "Condividi conoscenza e preghiere con altri devoti",
    charityDetail5: "Visita case di riposo o orfanotrofi portando amore e attenzione",
    charityDetail6: "Menziona sempre che lo stai facendo nel nome di San Cipriano",
    charityDetail7: "Non cercare riconoscimento - la ricompensa viene dal Grande Mago",
    charityDetail8: "Fallo con amore vero, non solo per obbligo",
    
    // Wisdom quotes
    quote1: "La vera magia sta nella trasformazione del cuore e nella devozione sincera al Grande Mago.",
    author1: "Insegnamento Ancestrale",
    quote2: "San Cipriano non abbandona coloro che lo onorano con devozione quotidiana e fede incrollabile.",
    author2: "Promessa Sacra",
    quote3: "Chi diffonde la parola del Grande Mago riceverà benedizioni moltiplicate infinitamente.",
    author3: "Legge della Reciprocità Divina",
    quote4: "La carità fatta nel nome di San Cipriano genera abbondanza eterna nella tua vita.",
    author4: "Mistero della Prosperità"
  },
  
  ru: {
    title: "НАСЛЕДСТВЕННАЯ СВЯЩЕННАЯ БИБЛИОТЕКА",
    subtitle: "Тысячелетние Знания и Божественные Учения Святого Киприана",
    intro: "Здесь вы найдете всю наследственную мудрость, необходимую для вашего духовного путешествия. Каждая книга, каждое учение сохранялись веками, чтобы достичь вас.",
    
    booksTitle: "СВЯЩЕННЫЕ КНИГИ СВЯТОГО КИПРИАНА",
    teachingsTitle: "СВЯЩЕННЫЕ УЧЕНИЯ И РУКОВОДСТВА",
    teachingsDesc: "👆 Нажмите на каждое руководство ниже, чтобы развернуть и увидеть все подробные шаги",
    wisdomTitle: "НАСЛЕДСТВЕННАЯ СВЯЩЕННАЯ МУДРОСТЬ",
    knowledgeTitle: "ЗНАНИЕ - ЭТО СВЯЩЕННАЯ СИЛА",
    knowledgeDesc: "Каждая страница, которую вы читаете, каждое учение, которое вы практикуете, приближает вас к высшей силе Святого Киприана. Священное знание должно изучаться ежедневно и практиковаться с искренней преданностью.",
    
    clickToExpand: "👆 Нажмите здесь, чтобы увидеть все подробные шаги",
    clickToRead: "👆 Нажмите, чтобы прочитать полную и захватывающую историю",
    detailedSteps: "Подробные Шаги:",
    
    downloadNow: "СКАЧАТЬ СВЯЩЕННУЮ КНИГУ СЕЙЧАС",
    downloadCapaPreta: "СКАЧАТЬ КНИГУ С ЧЕРНОЙ ОБЛОЖКОЙ СЕЙЧАС",
    
    // Book data
    book1Title: "Книга Святого Киприана - Черная Обложка",
    book1Author: "Святой Киприан Антиохийский",
    book1Desc: "Самая мощная священная книга, когда-либо написанная, содержащая все секреты, молитвы и тысячелетние ритуалы Великого Мага. Полностью преобразите свою жизнь с этим наследственным сокровищем.",
    book1Category: "Главная Священная Книга",
    book1Benefit1: "Все наследственные ритуалы",
    book1Benefit2: "Полные высшие молитвы",
    book1Benefit3: "Полное магическое знание",
    
    book2Title: "Книга Молитв, Ораций и Заклинаний Святого Киприана",
    book2Author: "Фернандо Родригес Лопес",
    book2Desc: "Сборник самых глубоких и мощных учений Великого Мага, собирающий тысячелетнюю мудрость для преобразования вашей реальности.",
    book2Category: "Божественные Учения",
    book2Benefit1: "Полная наследственная мудрость",
    book2Benefit2: "Руководства по преобразованию",
    book2Benefit3: "Проверенные методы",
    
    // Knowledge categories
    altarTitle: "Как Построить Ваш Священный Алтарь Дома",
    altarContent: "Научитесь создавать священное пространство, посвященное Святому Киприану в вашем доме, следуя самым мощным наследственным традициям.",
    
    signsTitle: "Знаки и Проявления Святого Киприана",
    signsContent: "Распознайте, когда Святой Киприан работает в вашей жизни и как интерпретировать его божественные знаки.",
    
    prayersTitle: "Мощные Ежедневные Молитвы для Начинающих",
    prayersContent: "Начните свое духовное путешествие с этих основных молитв, которые должен знать каждый преданный.",
    
    charityTitle: "Как Делать Благотворительность во Имя Святого Киприана",
    charityContent: "Святой Киприан любит благотворительность и щедро вознаграждает тех, кто помогает нуждающимся в его имя.",
    
    // Altar details
    altarDetail1: "Выберите конкретное и постоянное место в вашем доме, предпочтительно обращенное на восток",
    altarDetail2: "Поместите изображение Святого Киприана или нарисуйте символ c🔱 на белой бумаге",
    altarDetail3: "Всегда имейте белую или золотую свечу для ежедневного зажигания",
    altarDetail4: "Держите стакан чистой воды, который следует менять ежедневно",
    altarDetail5: "Размещайте свежие цветы, когда возможно (белые розы идеальны)",
    altarDetail6: "Держите ладан из мирры, сандала или розы для очищения",
    altarDetail7: "Имейте специальную тетрадь для записи ваших молитв и просьб",
    altarDetail8: "Держите пространство всегда чистым и организованным с полным уважением",
    
    // Signs details
    signsDetail1: "Яркие сны с числами, символами или конкретными сообщениями",
    signsDetail2: "Синхронности и \"совпадения\", которые отвечают на ваши молитвы",
    signsDetail3: "Ощущение духовного присутствия во время молитв или медитации",
    signsDetail4: "Неожиданные возможности, возникающие \"чудесным\" образом",
    signsDetail5: "Сильные интуиции о важных решениях, которые нужно принять",
    signsDetail6: "Защита в моменты опасности или крайней трудности",
    signsDetail7: "Внезапное улучшение в ситуациях, которые казались невозможными",
    signsDetail8: "Подтверждения через других людей или события",
    
    // Prayers details
    prayersDetail1: "Утренняя молитва: \"Святой Киприан, защити меня сегодня на всех моих путях\"",
    prayersDetail2: "Перед едой: \"Благослови эту пищу, Верховный Великий Маг\"",
    prayersDetail3: "Перед работой: \"Дай мне мудрость и успех во всех делах\"",
    prayersDetail4: "В трудностях: \"Святой Киприан, помоги мне преодолеть эту ситуацию\"",
    prayersDetail5: "Вечером: \"Благодарю за все благословения, полученные сегодня\"",
    prayersDetail6: "В конкретных просьбах: Всегда будьте ясными и конкретными в том, что желаете",
    prayersDetail7: "Всегда поддерживайте благодарность и веру во время молитв",
    prayersDetail8: "Всегда заканчивайте \"Да будет так, силой Святого Киприана. Аминь.\"",
    
    // Charity details
    charityDetail1: "Жертвуйте еду бездомным людям или учреждениям",
    charityDetail2: "Помогайте финансово тем, кто испытывает трудности",
    charityDetail3: "Учите о Святом Киприане людей, которым нужна надежда",
    charityDetail4: "Делитесь знаниями и молитвами с другими преданными",
    charityDetail5: "Посещайте дома престарелых или детские дома, принося любовь и внимание",
    charityDetail6: "Всегда упоминайте, что вы делаете это во имя Святого Киприана",
    charityDetail7: "Не ищите признания - награда приходит от Великого Мага",
    charityDetail8: "Делайте это с истинной любовью, а не только из обязательства",
    
    // Wisdom quotes
    quote1: "Истинная магия заключается в преобразовании сердца и искренней преданности Великому Магу.",
    author1: "Наследственное Учение",
    quote2: "Святой Киприан не оставляет тех, кто чтит его ежедневной преданностью и непоколебимой верой.",
    author2: "Священное Обещание",
    quote3: "Кто распространяет слово Великого Мага, получит бесконечно умноженные благословения.",
    author3: "Закон Божественной Взаимности",
    quote4: "Благотворительность, совершаемая во имя Святого Киприана, порождает вечное изобилие в вашей жизни.",
    author4: "Тайна Процветания"
  },
  
  zh: {
    title: "祖传神圣图书馆",
    subtitle: "圣西普里安的千年知识和神圣教导",
    intro: "在这里您可以找到您精神之旅所需的所有祖传智慧。每本书、每个教导都经过几个世纪的保存才到达您身边。",
    
    booksTitle: "圣西普里安的神圣书籍",
    teachingsTitle: "神圣教导和指南",
    teachingsDesc: "👆 点击下面每个指南以展开并查看所有详细步骤",
    wisdomTitle: "祖传神圣智慧",
    knowledgeTitle: "知识就是神圣力量",
    knowledgeDesc: "您阅读的每一页，您实践的每个教导，都让您更接近圣西普里安的至高力量。神圣知识必须每天学习，用真诚的奉献来实践。",
    
    clickToExpand: "👆 点击这里查看所有详细步骤",
    clickToRead: "👆 点击阅读完整精彩的故事",
    detailedSteps: "详细步骤：",
    
    downloadNow: "立即下载神圣书籍",
    downloadCapaPreta: "立即下载黑封面书籍",
    
    // Book data
    book1Title: "圣西普里安之书 - 黑色封面",
    book1Author: "安提阿的圣西普里安",
    book1Desc: "有史以来最强大的神圣书籍，包含大法师的所有秘密、祈祷和千年仪式。用这个祖传宝藏完全改变您的生活。",
    book1Category: "主要神圣书籍",
    book1Benefit1: "所有祖传仪式",
    book1Benefit2: "完整至高祈祷",
    book1Benefit3: "完全魔法知识",
    
    book2Title: "圣西普里安的祈祷、祷告和咒语之书",
    book2Author: "费尔南多·罗德里格斯·洛佩斯",
    book2Desc: "大法师最深刻和最强大教导的汇编，聚集千年智慧来改变您的现实。",
    book2Category: "神圣教导",
    book2Benefit1: "完整祖传智慧",
    book2Benefit2: "转变指南",
    book2Benefit3: "经过验证的方法",
    
    // Knowledge categories
    altarTitle: "如何在家建造您的神圣祭坛",
    altarContent: "学习在您家中创建一个献给圣西普里安的神圣空间，遵循最强大的祖传传统。",
    
    signsTitle: "圣西普里安的征象和显现",
    signsContent: "识别圣西普里安何时在您的生活中工作以及如何解释他的神圣征象。",
    
    prayersTitle: "初学者的强大日常祈祷",
    prayersContent: "用每个信徒都应该知道的这些基本祈祷开始您的精神之旅。",
    
    charityTitle: "如何以圣西普里安的名义做慈善",
    charityContent: "圣西普里安热爱慈善，丰富地奖励那些以他的名义帮助有需要的人。",
    
    // Altar details
    altarDetail1: "在您家中选择一个特定和永久的位置，最好面向东方",
    altarDetail2: "放置圣西普里安的图像或在白纸上画符号c🔱",
    altarDetail3: "始终有一支白色或金色蜡烛每天点燃",
    altarDetail4: "保持一杯清水，应该每天更换",
    altarDetail5: "尽可能放置新鲜花朵（白玫瑰是理想的）",
    altarDetail6: "保持没药、檀香或玫瑰香用于净化",
    altarDetail7: "有一个专门的笔记本来记录您的祈祷和请求",
    altarDetail8: "始终保持空间清洁和有序，完全尊重",
    
    // Signs details
    signsDetail1: "生动的梦境，包含数字、符号或特定信息",
    signsDetail2: "回应您祈祷的同步性和\"巧合\"",
    signsDetail3: "在祈祷或冥想期间感受到精神存在",
    signsDetail4: "\"奇迹般\"出现的意外机会",
    signsDetail5: "关于重要决定的强烈直觉",
    signsDetail6: "在危险或极度困难时刻的保护",
    signsDetail7: "在似乎不可能的情况下突然改善",
    signsDetail8: "通过其他人或事件的确认",
    
    // Prayers details
    prayersDetail1: "晨祷：\"圣西普里安，今天在我所有的道路上保护我\"",
    prayersDetail2: "饭前：\"祝福这食物，至高大法师\"",
    prayersDetail3: "工作前：\"给我智慧和在所有活动中的成功\"",
    prayersDetail4: "困难中：\"圣西普里安，帮助我克服这种情况\"",
    prayersDetail5: "晚上：\"感谢今天收到的所有祝福\"",
    prayersDetail6: "在具体请求中：始终明确和具体您想要什么",
    prayersDetail7: "在祈祷期间始终保持感恩和信仰",
    prayersDetail8: "始终以\"愿如此，凭圣西普里安的力量。阿门。\"结束",
    
    // Charity details
    charityDetail1: "向无家可归的人或机构捐赠食物",
    charityDetail2: "在经济上帮助那些有困难的人",
    charityDetail3: "向需要希望的人教授关于圣西普里安的知识",
    charityDetail4: "与其他信徒分享知识和祈祷",
    charityDetail5: "访问养老院或孤儿院，带来爱和关注",
    charityDetail6: "始终提及您是以圣西普里安的名义这样做",
    charityDetail7: "不要寻求认可 - 奖励来自大法师",
    charityDetail8: "用真爱去做，不仅仅是出于义务",
    
    // Wisdom quotes
    quote1: "真正的魔法在于心灵的转变和对大法师的真诚奉献。",
    author1: "祖传教导",
    quote2: "圣西普里安不会抛弃那些以日常奉献和坚定信仰尊敬他的人。",
    author2: "神圣承诺",
    quote3: "传播大法师话语的人将获得无限倍增的祝福。",
    author3: "神圣互惠法则",
    quote4: "以圣西普里安名义进行的慈善在您的生活中产生永恒的丰盛。",
    author4: "繁荣的奥秘"
  },
  
  ja: {
    title: "先祖の神聖図書館",
    subtitle: "聖キプリアヌスの千年の知識と神聖な教え",
    intro: "ここであなたの霊的旅に必要なすべての先祖の知恵を見つけることができます。各本、各教えは何世紀にもわたって保存され、あなたに届けられました。",
    
    booksTitle: "聖キプリアヌスの神聖な書籍",
    teachingsTitle: "神聖な教えとガイド",
    teachingsDesc: "👆 下の各ガイドをクリックして展開し、すべての詳細な手順を見てください",
    wisdomTitle: "先祖の神聖な知恵",
    knowledgeTitle: "知識は神聖な力です",
    knowledgeDesc: "あなたが読むすべてのページ、あなたが実践するすべての教えは、聖キプリアヌスの至高の力にあなたを近づけます。神聖な知識は毎日学び、真摯な献身で実践されなければなりません。",
    
    clickToExpand: "👆 すべての詳細な手順を見るにはここをクリック",
    clickToRead: "👆 完全でエキサイティングな物語を読むにはクリック",
    detailedSteps: "詳細な手順：",
    
    downloadNow: "今すぐ神聖な本をダウンロード",
    downloadCapaPreta: "今すぐ黒いカバーの本をダウンロード",
    
    // Book data
    book1Title: "聖キプリアヌスの書 - 黒いカバー",
    book1Author: "アンティオキアの聖キプリアヌス",
    book1Desc: "これまでに書かれた最も強力な神聖な本で、大魔法師のすべての秘密、祈り、千年の儀式を含んでいます。この先祖の宝物であなたの人生を完全に変えてください。",
    book1Category: "主要神聖書",
    book1Benefit1: "すべての先祖の儀式",
    book1Benefit2: "完全な至高の祈り",
    book1Benefit3: "完全な魔法の知識",
    
    book2Title: "聖キプリアヌスの祈り、祈祷、呪文の書",
    book2Author: "フェルナンド・ロドリゲス・ロペス",
    book2Desc: "大魔法師の最も深く強力な教えの編纂で、あなたの現実を変えるために千年の知恵を集めています。",
    book2Category: "神聖な教え",
    book2Benefit1: "完全な先祖の知恵",
    book2Benefit2: "変革ガイド",
    book2Benefit3: "証明された方法",
    
    // Knowledge categories
    altarTitle: "家で神聖な祭壇を建てる方法",
    altarContent: "最も強力な先祖の伝統に従って、あなたの家で聖キプリアヌスに捧げられた神聖な空間を作ることを学んでください。",
    
    signsTitle: "聖キプリアヌスの兆候と現れ",
    signsContent: "聖キプリアヌスがあなたの人生で働いているときを認識し、彼の神聖な兆候を解釈する方法。",
    
    prayersTitle: "初心者のための強力な日常の祈り",
    prayersContent: "すべての信者が知るべきこれらの基本的な祈りであなたの霊的旅を始めてください。",
    
    charityTitle: "聖キプリアヌスの名において慈善を行う方法",
    charityContent: "聖キプリアヌスは慈善を愛し、彼の名において困っている人を助ける人々を豊かに報います。",
    
    // Altar details
    altarDetail1: "あなたの家の特定で永続的な場所を選んでください、できれば東向き",
    altarDetail2: "聖キプリアヌスの画像を置くか、白い紙にシンボルc🔱を描いてください",
    altarDetail3: "毎日点灯するための白いまたは金色のろうそくを常に持ってください",
    altarDetail4: "毎日交換すべき清潔な水のグラスを保ってください",
    altarDetail5: "可能な時は新鮮な花を置いてください（白いバラが理想的）",
    altarDetail6: "浄化のためのミルラ、サンダルウッド、またはローズの香を保ってください",
    altarDetail7: "あなたの祈りと要求を書き留めるための特定のノートを持ってください",
    altarDetail8: "常に完全な敬意を持って空間を清潔で整理された状態に保ってください",
    
    // Signs details
    signsDetail1: "数字、シンボル、または特定のメッセージを含む鮮明な夢",
    signsDetail2: "あなたの祈りに答えるシンクロニシティと\"偶然\"",
    signsDetail3: "祈りや瞑想中の霊的存在の感覚",
    signsDetail4: "\"奇跡的に\"現れる予期しない機会",
    signsDetail5: "重要な決定についての強い直感",
    signsDetail6: "危険や極度の困難の瞬間での保護",
    signsDetail7: "不可能に見えた状況での突然の改善",
    signsDetail8: "他の人や出来事を通じての確認",
    
    // Prayers details
    prayersDetail1: "朝の祈り：\"聖キプリアヌス、今日私のすべての道で私を守ってください\"",
    prayersDetail2: "食事前：\"この食べ物を祝福してください、至高の大魔法師\"",
    prayersDetail3: "仕事前：\"すべての活動で知恵と成功を私に与えてください\"",
    prayersDetail4: "困難時：\"聖キプリアヌス、この状況を克服するのを助けてください\"",
    prayersDetail5: "夜：\"今日受けたすべての祝福に感謝します\"",
    prayersDetail6: "特定の要求で：あなたが望むことを常に明確で具体的にしてください",
    prayersDetail7: "祈りの間、常に感謝と信仰を保ってください",
    prayersDetail8: "常に\"そうあらしめたまえ、聖キプリアヌスの力で。アーメン。\"で終えてください",
    
    // Charity details
    charityDetail1: "ホームレスの人々や機関に食べ物を寄付してください",
    charityDetail2: "困難を抱えている人々を経済的に助けてください",
    charityDetail3: "希望を必要とする人々に聖キプリアヌスについて教えてください",
    charityDetail4: "他の信者と知識と祈りを共有してください",
    charityDetail5: "愛と注意を持って老人ホームや孤児院を訪問してください",
    charityDetail6: "常に聖キプリアヌスの名においてそれを行っていることを言及してください",
    charityDetail7: "認識を求めないでください - 報酬は大魔法師から来ます",
    charityDetail8: "義務からだけでなく、真の愛でそれを行ってください",
    
    // Wisdom quotes
    quote1: "真の魔法は心の変革と大魔法師への真摯な献身にあります。",
    author1: "祖先の教え",
    quote2: "聖キプリアヌスは日々の献身と揺るぎない信仰で彼を敬う人々を見捨てません。",
    author2: "神聖な約束",
    quote3: "大魔法師の言葉を広める人は無限に倍増した祝福を受けるでしょう。",
    author3: "神聖な相互法則",
    quote4: "聖キプリアヌスの名において行われる慈善はあなたの人生に永遠の豊かさを生み出します。",
    author4: "繁栄の神秘"
  },
  
  ar: {
    title: "المكتبة المقدسة الأجدادية",
    subtitle: "المعرفة الألفية والتعاليم الإلهية للقديس قبريانوس",
    intro: "هنا تجد كل الحكمة الأجدادية اللازمة لرحلتك الروحية. كل كتاب، كل تعليم تم حفظه عبر القرون للوصول إليك.",
    
    booksTitle: "الكتب المقدسة للقديس قبريانوس",
    teachingsTitle: "التعاليم والأدلة المقدسة",
    teachingsDesc: "👆 انقر على كل دليل أدناه للتوسيع ورؤية جميع الخطوات المفصلة",
    wisdomTitle: "الحكمة المقدسة الأجدادية",
    knowledgeTitle: "المعرفة هي القوة المقدسة",
    knowledgeDesc: "كل صفحة تقرأها، كل تعليم تمارسه، يقربك أكثر من القوة العليا للقديس قبريانوس. المعرفة المقدسة يجب أن تُدرس يومياً وتُمارس بإخلاص صادق.",
    
    clickToExpand: "👆 انقر هنا لرؤية جميع الخطوات المفصلة",
    clickToRead: "👆 انقر لقراءة القصة الكاملة والمثيرة",
    detailedSteps: "الخطوات المفصلة:",
    
    downloadNow: "تحميل الكتاب المقدس الآن",
    downloadCapaPreta: "تحميل كتاب الغطاء الأسود الآن",
    
    // Book data
    book1Title: "كتاب القديس قبريانوس - الغطاء الأسود",
    book1Author: "القديس قبريانوس الأنطاكي",
    book1Desc: "أقوى كتاب مقدس كُتب على الإطلاق، يحتوي على جميع أسرار وصلوات وطقوس الساحر العظيم الألفية. حول حياتك تماماً بهذا الكنز الأجدادي.",
    book1Category: "الكتاب المقدس الرئيسي",
    book1Benefit1: "جميع الطقوس الأجدادية",
    book1Benefit2: "صلوات عليا كاملة",
    book1Benefit3: "معرفة سحرية كاملة",
    
    book2Title: "كتاب صلوات وأدعية وتعاويذ القديس قبريانوس",
    book2Author: "فيرناندو رودريغيس لوبيس",
    book2Desc: "تجميع لأعمق وأقوى تعاليم الساحر العظيم، جامعاً الحكمة الألفية لتحويل واقعك.",
    book2Category: "التعاليم الإلهية",
    book2Benefit1: "حكمة أجدادية كاملة",
    book2Benefit2: "أدلة التحول",
    book2Benefit3: "طرق مثبتة",
    
    // Knowledge categories
    altarTitle: "كيفية بناء مذبحك المقدس في المنزل",
    altarContent: "تعلم إنشاء مساحة مقدسة مخصصة للقديس قبريانوس في منزلك، متبعاً أقوى التقاليد الأجدادية.",
    
    signsTitle: "علامات ومظاهر القديس قبريانوس",
    signsContent: "اعرف متى يعمل القديس قبريانوس في حياتك وكيفية تفسير علاماته الإلهية.",
    
    prayersTitle: "صلوات يومية قوية للمبتدئين",
    prayersContent: "ابدأ رحلتك الروحية بهذه الصلوات الأساسية التي يجب على كل متعبد معرفتها.",
    
    charityTitle: "كيفية عمل الخير باسم القديس قبريانوس",
    charityContent: "القديس قبريانوس يحب الخير ويكافئ بوفرة أولئك الذين يساعدون المحتاجين باسمه.",
    
    // Altar details
    altarDetail1: "اختر مكاناً محدداً ودائماً في منزلك، يفضل أن يكون متجهاً شرقاً",
    altarDetail2: "ضع صورة للقديس قبريانوس أو ارسم الرمز c🔱 على ورق أبيض",
    altarDetail3: "احتفظ دائماً بشمعة بيضاء أو ذهبية لإشعالها يومياً",
    altarDetail4: "احتفظ بكوب من الماء النظيف الذي يجب تغييره يومياً",
    altarDetail5: "ضع زهوراً طازجة عندما يكون ممكناً (الورود البيضاء مثالية)",
    altarDetail6: "احتفظ ببخور المر أو الصندل أو الورد للتطهير",
    altarDetail7: "احتفظ بدفتر محدد لتسجيل صلواتك وطلباتك",
    altarDetail8: "احتفظ بالمساحة نظيفة ومنظمة دائماً باحترام تام",
    
    // Signs details
    signsDetail1: "أحلام واضحة بأرقام أو رموز أو رسائل محددة",
    signsDetail2: "تزامنات و\"مصادفات\" تجيب على صلواتك",
    signsDetail3: "شعور بالحضور الروحي أثناء الصلوات أو التأمل",
    signsDetail4: "فرص غير متوقعة تظهر \"بمعجزة\"",
    signsDetail5: "حدس قوي حول قرارات مهمة يجب اتخاذها",
    signsDetail6: "حماية في لحظات الخطر أو الصعوبة الشديدة",
    signsDetail7: "تحسن مفاجئ في مواقف بدت مستحيلة",
    signsDetail8: "تأكيدات من خلال أشخاص أو أحداث أخرى",
    
    // Prayers details
    prayersDetail1: "صلاة الصباح: \"القديس قبريانوس، احمني اليوم في جميع طرقي\"",
    prayersDetail2: "قبل الوجبات: \"بارك هذا الطعام، الساحر العظيم الأسمى\"",
    prayersDetail3: "قبل العمل: \"امنحني الحكمة والنجاح في جميع الأنشطة\"",
    prayersDetail4: "في الصعوبات: \"القديس قبريانوس، ساعدني على تجاوز هذا الوضع\"",
    prayersDetail5: "في المساء: \"أشكر على جميع البركات المتلقاة اليوم\"",
    prayersDetail6: "في الطلبات المحددة: كن دائماً واضحاً ومحدداً فيما تريد",
    prayersDetail7: "احتفظ دائماً بالامتنان والإيمان أثناء الصلوات",
    prayersDetail8: "انته دائماً بـ\"ليكن كذلك، بقوة القديس قبريانوس. آمين.\"",
    
    // Charity details
    charityDetail1: "تبرع بالطعام للمشردين أو المؤسسات",
    charityDetail2: "ساعد مالياً من يواجهون صعوبات",
    charityDetail3: "علّم عن القديس قبريانوس للأشخاص الذين يحتاجون أملاً",
    charityDetail4: "شارك المعرفة والصلوات مع متعبدين آخرين",
    charityDetail5: "زر دور المسنين أو دور الأيتام حاملاً الحب والاهتمام",
    charityDetail6: "اذكر دائماً أنك تفعل ذلك باسم القديس قبريانوس",
    charityDetail7: "لا تسع للاعتراف - المكافأة تأتي من الساحر العظيم",
    charityDetail8: "افعل ذلك بحب حقيقي، ليس فقط من الالتزام",
    
    // Wisdom quotes
    quote1: "السحر الحقيقي يكمن في تحول القلب والإخلاص الصادق للساحر العظيم.",
    author1: "تعليم أجدادي",
    quote2: "القديس قبريانوس لا يترك أولئك الذين يكرمونه بإخلاص يومي وإيمان راسخ.",
    author2: "وعد مقدس",
    quote3: "من ينشر كلمة الساحر العظيم سيحصل على بركات مضاعفة لا نهائياً.",
    author3: "قانون التبادل الإلهي",
    quote4: "الخير المعمول باسم القديس قبريانوس يولد وفرة أبدية في حياتك.",
    author4: "سر الازدهار"
  },
  
  hi: {
    title: "पूर्वज पवित्र पुस्तकालय",
    subtitle: "संत साइप्रियन का सहस्राब्दी ज्ञान और दिव्य शिक्षाएं",
    intro: "यहाँ आप अपनी आध्यात्मिक यात्रा के लिए आवश्यक सभी पूर्वज ज्ञान पाते हैं। प्रत्येक पुस्तक, प्रत्येक शिक्षा सदियों से संरक्षित होकर आप तक पहुंची है।",
    
    booksTitle: "संत साइप्रियन की पवित्र पुस्तकें",
    teachingsTitle: "पवित्र शिक्षाएं और मार्गदर्शिकाएं",
    teachingsDesc: "👆 विस्तार करने और सभी विस्तृत चरण देखने के लिए नीचे प्रत्येक गाइड पर क्लिक करें",
    wisdomTitle: "पूर्वज पवित्र ज्ञान",
    knowledgeTitle: "ज्ञान पवित्र शक्ति है",
    knowledgeDesc: "आप जो प्रत्येक पृष्ठ पढ़ते हैं, आप जो प्रत्येक शिक्षा का अभ्यास करते हैं, वह आपको संत साइप्रियन की सर्वोच्च शक्ति के करीब लाता है। पवित्र ज्ञान का दैनिक अध्ययन और सच्ची भक्ति के साथ अभ्यास होना चाहिए।",
    
    clickToExpand: "👆 सभी विस्तृत चरण देखने के लिए यहाँ क्लिक करें",
    clickToRead: "👆 पूरी और रोमांचक कहानी पढ़ने के लिए क्लिक करें",
    detailedSteps: "विस्तृत चरण:",
    
    downloadNow: "अभी पवित्र पुस्तक डाउनलोड करें",
    downloadCapaPreta: "अभी काला कवर वाली पुस्तक डाउनलोड करें",
    
    // Book data
    book1Title: "संत साइप्रियन की पुस्तक - काला कवर",
    book1Author: "एंटिओक के संत साइप्रियन",
    book1Desc: "अब तक लिखी गई सबसे शक्तिशाली पवित्र पुस्तक, जिसमें महान जादूगर के सभी रहस्य, प्रार्थनाएं और सहस्राब्दी अनुष्ठान हैं। इस पुरातन खजाने से अपने जीवन को पूरी तरह से बदलें।",
    book1Category: "मुख्य पवित्र पुस्तक",
    book1Benefit1: "सभी पुरातन अनुष्ठान",
    book1Benefit2: "पूर्ण सर्वोच्च प्रार्थनाएं",
    book1Benefit3: "संपूर्ण जादुई ज्ञान",
    
    book2Title: "संत साइप्रियन की प्रार्थनाओं, आराधनाओं और मंत्रों की पुस्तक",
    book2Author: "फर्नांडो रॉड्रिगेज लोपेज",
    book2Desc: "महान जादूगर की सबसे गहरी और शक्तिशाली शिक्षाओं का संकलन, आपकी वास्तविकता को बदलने के लिए सहस्राब्दी ज्ञान एकत्रित करता है।",
    book2Category: "दिव्य शिक्षाएं",
    book2Benefit1: "पूर्ण पुरातन ज्ञान",
    book2Benefit2: "रूपांतरण गाइड",
    book2Benefit3: "सिद्ध विधियां",
    
    // Knowledge categories
    altarTitle: "घर में अपनी पवित्र वेदी कैसे बनाएं",
    altarContent: "सबसे शक्तिशाली पुरातन परंपराओं का पालन करते हुए, अपने घर में संत साइप्रियन को समर्पित एक पवित्र स्थान बनाना सीखें।",
    
    signsTitle: "संत साइप्रियन के संकेत और प्रकटीकरण",
    signsContent: "पहचानें कि संत साइप्रियन आपके जीवन में कब काम कर रहे हैं और उनके दिव्य संकेतों की व्याख्या कैसे करें।",
    
    prayersTitle: "शुरुआती लोगों के लिए शक्तिशाली दैनिक प्रार्थनाएं",
    prayersContent: "इन मौलिक प्रार्थनाओं के साथ अपनी आध्यात्मिक यात्रा शुरू करें जिन्हें हर भक्त को जानना चाहिए।",
    
    charityTitle: "संत साइप्रियन के नाम पर दान कैसे करें",
    charityContent: "संत साइप्रियन दान से प्रेम करते हैं और उनके नाम पर जरूरतमंदों की मदद करने वालों को प्रचुर मात्रा में पुरस्कृत करते हैं।",
    
    // Altar details
    altarDetail1: "अपने घर में एक विशिष्ट और स्थायी स्थान चुनें, अधिमानतः पूर्व की ओर मुंह करके",
    altarDetail2: "संत साइप्रियन की एक छवि रखें या सफेद कागज पर प्रतीक c🔱 बनाएं",
    altarDetail3: "दैनिक जलाने के लिए हमेशा एक सफेद या सुनहरी मोमबत्ती रखें",
    altarDetail4: "साफ पानी का एक गिलास रखें जो रोजाना बदला जाना चाहिए",
    altarDetail5: "जब संभव हो तो ताजे फूल रखें (सफेद गुलाब आदर्श हैं)",
    altarDetail6: "शुद्धिकरण के लिए गंधरस, चंदन या गुलाब की धूप रखें",
    altarDetail7: "अपनी प्रार्थनाओं और अनुरोधों को लिखने के लिए एक विशिष्ट नोटबुक रखें",
    altarDetail8: "हमेशा पूर्ण सम्मान के साथ स्थान को साफ और व्यवस्थित रखें",
    
    // Signs details
    signsDetail1: "संख्याओं, प्रतीकों या विशिष्ट संदेशों के साथ जीवंत सपने",
    signsDetail2: "आपकी प्रार्थनाओं का उत्तर देने वाली समकालिकताएं और \"संयोग\"",
    signsDetail3: "प्रार्थना या ध्यान के दौरान आध्यात्मिक उपस्थिति की भावना",
    signsDetail4: "\"चमत्कारिक\" रूप से उत्पन्न होने वाले अप्रत्याशित अवसर",
    signsDetail5: "लेने वाले महत्वपूर्ण निर्णयों के बारे में मजबूत अंतर्ज्ञान",
    signsDetail6: "खतरे या चरम कठिनाई के क्षणों में सुरक्षा",
    signsDetail7: "असंभव लगने वाली स्थितियों में अचानक सुधार",
    signsDetail8: "अन्य लोगों या घटनाओं के माध्यम से पुष्टि",
    
    // Prayers details
    prayersDetail1: "सुबह की प्रार्थना: \"संत साइप्रियन, आज मेरे सभी रास्तों में मेरी रक्षा करें\"",
    prayersDetail2: "भोजन से पहले: \"इस भोजन को आशीर्वाद दें, सर्वोच्च महान जादूगर\"",
    prayersDetail3: "काम से पहले: \"मुझे सभी गतिविधियों में ज्ञान और सफलता दें\"",
    prayersDetail4: "कठिनाइयों में: \"संत साइप्रियन, इस स्थिति को पार करने में मेरी मदद करें\"",
    prayersDetail5: "रात में: \"आज प्राप्त सभी आशीर्वादों के लिए धन्यवाद\"",
    prayersDetail6: "विशिष्ट अनुरोधों में: हमेशा स्पष्ट और विशिष्ट रहें कि आप क्या चाहते हैं",
    prayersDetail7: "प्रार्थनाओं के दौरान हमेशा कृतज्ञता और विश्वास बनाए रखें",
    prayersDetail8: "हमेशा \"ऐसा ही हो, संत साइप्रियन की शक्ति से। आमीन।\" के साथ समाप्त करें",
    
    // Charity details
    charityDetail1: "बेघर लोगों या संस्थानों को भोजन दान करें",
    charityDetail2: "कठिनाइयों का सामना कर रहे लोगों की आर्थिक मदद करें",
    charityDetail3: "आशा की जरूरत वाले लोगों को संत साइप्रियन के बारे में सिखाएं",
    charityDetail4: "अन्य भक्तों के साथ ज्ञान और प्रार्थनाएं साझा करें",
    charityDetail5: "प्रेम और ध्यान लेकर वृद्धाश्रम या अनाथालय जाएं",
    charityDetail6: "हमेशा उल्लेख करें कि आप संत साइप्रियन के नाम पर यह कर रहे हैं",
    charityDetail7: "पहचान न खोजें - पुरस्कार महान जादूगर से आता है",
    charityDetail8: "इसे सच्चे प्रेम से करें, केवल दायित्व से नहीं",
    
    // Wisdom quotes
    quote1: "सच्चा जादू हृदय के रूपांतरण और महान जादूगर के प्रति सच्ची भक्ति में निहित है।",
    author1: "पुरातन शिक्षा",
    quote2: "संत साइप्रियन उन लोगों को नहीं छोड़ते जो दैनिक भक्ति और अटूट विश्वास के साथ उनका सम्मान करते हैं।",
    author2: "पवित्र वादा",
    quote3: "जो महान जादूगर का शब्द फैलाता है वह अनंत गुणित आशीर्वाद प्राप्त करेगा।",
    author3: "दिव्य पारस्परिकता का नियम",
    quote4: "संत साइप्रियन के नाम पर किया गया दान आपके जीवन में शाश्वत प्रचुरता उत्पन्न करता है।",
    author4: "समृद्धि का रहस्य"
  },
  
  ko: {
    title: "조상 신성 도서관",
    subtitle: "성 키프리아누스의 천년 지식과 신성한 가르침",
    intro: "여기서 당신의 영적 여행에 필요한 모든 조상의 지혜를 찾을 수 있습니다. 각 책, 각 가르침은 세기를 거쳐 보존되어 당신에게 도달했습니다.",
    
    booksTitle: "성 키프리아누스의 신성한 책들",
    teachingsTitle: "신성한 가르침과 안내서",
    teachingsDesc: "👆 확장하고 모든 상세한 단계를 보려면 아래 각 가이드를 클릭하세요",
    wisdomTitle: "조상 신성 지혜",
    knowledgeTitle: "지식은 신성한 힘입니다",
    knowledgeDesc: "당신이 읽는 모든 페이지, 당신이 실천하는 모든 가르침은 당신을 성 키프리아누스의 최고 힘에 더 가깝게 만듭니다. 신성한 지식은 매일 공부하고 진실한 헌신으로 실천되어야 합니다.",
    
    clickToExpand: "👆 모든 상세한 단계를 보려면 여기를 클릭하세요",
    clickToRead: "👆 완전하고 흥미진진한 이야기를 읽으려면 클릭하세요",
    detailedSteps: "상세한 단계:",
    
    downloadNow: "지금 신성한 책 다운로드",
    downloadCapaPreta: "지금 검은 표지 책 다운로드",
    
    // Book data
    book1Title: "성 키프리아누스의 책 - 검은 표지",
    book1Author: "안티오키아의 성 키프리아누스",
    book1Desc: "지금까지 쓰여진 가장 강력한 신성한 책으로, 위대한 마법사의 모든 비밀, 기도, 천년 의식을 포함합니다. 이 조상의 보물로 당신의 삶을 완전히 변화시키세요.",
    book1Category: "주요 신성한 책",
    book1Benefit1: "모든 조상 의식",
    book1Benefit2: "완전한 최고 기도",
    book1Benefit3: "완전한 마법 지식",
    
    book2Title: "성 키프리아누스의 기도, 기원, 주문의 책",
    book2Author: "페르난도 로드리게스 로페스",
    book2Desc: "위대한 마법사의 가장 깊고 강력한 가르침의 편집으로, 당신의 현실을 변화시키기 위해 천년의 지혜를 모았습니다.",
    book2Category: "신성한 가르침",
    book2Benefit1: "완전한 조상 지혜",
    book2Benefit2: "변화 가이드",
    book2Benefit3: "입증된 방법",
    
    // Knowledge categories
    altarTitle: "집에서 신성한 제단을 건설하는 방법",
    altarContent: "가장 강력한 조상 전통을 따라 집에서 성 키프리아누스에게 헌정된 신성한 공간을 만드는 법을 배우세요.",
    
    signsTitle: "성 키프리아누스의 징조와 현현",
    signsContent: "성 키프리아누스가 당신의 삶에서 언제 일하고 있는지 인식하고 그의 신성한 징조를 해석하는 방법.",
    
    prayersTitle: "초보자를 위한 강력한 일상 기도",
    prayersContent: "모든 신도가 알아야 할 이러한 기본 기도로 당신의 영적 여행을 시작하세요.",
    
    charityTitle: "성 키프리아누스의 이름으로 자선을 하는 방법",
    charityContent: "성 키프리아누스는 자선을 사랑하며 그의 이름으로 도움이 필요한 사람들을 돕는 사람들을 풍부하게 보상합니다.",
    
    // Altar details
    altarDetail1: "집에서 특정하고 영구적인 장소를 선택하세요, 가급적 동쪽을 향하도록",
    altarDetail2: "성 키프리아누스의 이미지를 놓거나 흰 종이에 기호 c🔱를 그리세요",
    altarDetail3: "매일 켜기 위한 흰색 또는 금색 양초를 항상 가지세요",
    altarDetail4: "매일 교체해야 하는 깨끗한 물 한 잔을 유지하세요",
    altarDetail5: "가능할 때 신선한 꽃을 놓으세요 (흰 장미가 이상적)",
    altarDetail6: "정화를 위한 몰약, 백단향 또는 장미 향을 유지하세요",
    altarDetail7: "기도와 요청을 기록하기 위한 특별한 노트북을 가지세요",
    altarDetail8: "항상 완전한 존경으로 공간을 깨끗하고 정리된 상태로 유지하세요",
    
    // Signs details
    signsDetail1: "숫자, 기호 또는 특정 메시지가 있는 생생한 꿈",
    signsDetail2: "당신의 기도에 답하는 동시성과 \"우연\"",
    signsDetail3: "기도나 명상 중 영적 존재의 감각",
    signsDetail4: "\"기적적으로\" 나타나는 예상치 못한 기회",
    signsDetail5: "내려야 할 중요한 결정에 대한 강한 직감",
    signsDetail6: "위험이나 극도의 어려움의 순간에서의 보호",
    signsDetail7: "불가능해 보였던 상황에서의 갑작스러운 개선",
    signsDetail8: "다른 사람들이나 사건을 통한 확인",
    
    // Prayers details
    prayersDetail1: "아침 기도: \"성 키프리아누스, 오늘 제 모든 길에서 저를 보호해 주세요\"",
    prayersDetail2: "식사 전: \"이 음식을 축복해 주세요, 최고 대마법사\"",
    prayersDetail3: "일 전: \"모든 활동에서 지혜와 성공을 주세요\"",
    prayersDetail4: "어려움에서: \"성 키프리아누스, 이 상황을 극복하도록 도와주세요\"",
    prayersDetail5: "밤에: \"오늘 받은 모든 축복에 감사합니다\"",
    prayersDetail6: "특정 요청에서: 당신이 원하는 것을 항상 명확하고 구체적으로 하세요",
    prayersDetail7: "기도 중에 항상 감사와 믿음을 유지하세요",
    prayersDetail8: "항상 \"그렇게 되소서, 성 키프리아누스의 힘으로. 아멘.\"으로 끝내세요",
    
    // Charity details
    charityDetail1: "노숙자나 기관에 음식을 기부하세요",
    charityDetail2: "어려움을 겪고 있는 사람들을 재정적으로 도우세요",
    charityDetail3: "희망이 필요한 사람들에게 성 키프리아누스에 대해 가르치세요",
    charityDetail4: "다른 신도들과 지식과 기도를 공유하세요",
    charityDetail5: "사랑과 관심을 가지고 요양원이나 고아원을 방문하세요",
    charityDetail6: "항상 성 키프리아누스의 이름으로 하고 있다고 언급하세요",
    charityDetail7: "인정을 구하지 마세요 - 보상은 위대한 마법사로부터 옵니다",
    charityDetail8: "의무가 아닌 진정한 사랑으로 하세요",
    
    // Wisdom quotes
    quote1: "진정한 마법은 마음의 변화와 위대한 마법사에 대한 진실한 헌신에 있습니다.",
    author1: "조상의 가르침",
    quote2: "성 키프리아누스는 매일의 헌신과 흔들리지 않는 믿음으로 그를 존경하는 사람들을 버리지 않습니다.",
    author2: "신성한 약속",
    quote3: "위대한 마법사의 말씀을 퍼뜨리는 사람은 무한히 배가된 축복을 받을 것입니다.",
    author3: "신성한 상호 법칙",
    quote4: "성 키프리아누스의 이름으로 행해진 자선은 당신의 삶에 영원한 풍요를 생성합니다.",
    author4: "번영의 신비"
  },
  
  nl: {
    title: "VOOROUDERLIJKE HEILIGE BIBLIOTHEEK",
    subtitle: "Millenniumoudezijn Kennis en Goddelijke Leerstellingen van Heilige Cypriaan",
    intro: "Hier vindt u alle voorouderlijke wijsheid die nodig is voor uw spirituele reis. Elk boek, elke leerstelling is door de eeuwen heen bewaard gebleven om u te bereiken.",
    
    booksTitle: "HEILIGE BOEKEN VAN HEILIGE CYPRIAAN",
    teachingsTitle: "HEILIGE LEERSTELLINGEN EN GIDSEN",
    teachingsDesc: "👆 Klik op elke gids hieronder om uit te breiden en alle gedetailleerde stappen te zien",
    wisdomTitle: "VOOROUDERLIJKE HEILIGE WIJSHEID",
    knowledgeTitle: "KENNIS IS HEILIGE KRACHT",
    knowledgeDesc: "Elke pagina die u leest, elke leerstelling die u praktizeert, brengt u dichter bij de opperste kracht van Heilige Cypriaan. Heilige kennis moet dagelijks bestudeerd en beoefend worden met oprechte toewijding.",
    
    clickToExpand: "👆 Klik hier om alle gedetailleerde stappen te zien",
    clickToRead: "👆 Klik om het volledige en spannende verhaal te lezen",
    detailedSteps: "Gedetailleerde Stappen:",
    
    downloadNow: "HEILIG BOEK NU DOWNLOADEN",
    downloadCapaPreta: "ZWARTE OMSLAG BOEK NU DOWNLOADEN",
    
    // Book data
    book1Title: "Boek van Heilige Cypriaan - Zwarte Omslag",
    book1Author: "Heilige Cypriaan van Antiochië",
    book1Desc: "Het krachtigste heilige boek ooit geschreven, bevattend alle geheimen, gebeden en millenniumrituelen van de Grote Magiër. Transformeer uw leven volledig met deze voorouderlijke schat.",
    book1Category: "Hoofd Heilig Boek",
    book1Benefit1: "Alle voorouderlijke rituelen",
    book1Benefit2: "Volledige opperste gebeden",
    book1Benefit3: "Totale magische kennis",
    
    book2Title: "Het Boek van Gebeden, Oraties en Spreuken van Heilige Cypriaan",
    book2Author: "Fernando Rodrigues Lopes",
    book2Desc: "Compilatie van de diepste en krachtigste leerstellingen van de Grote Magiër, millenniumwijsheid verzamelend om uw realiteit te transformeren.",
    book2Category: "Goddelijke Leerstellingen",
    book2Benefit1: "Volledige voorouderlijke wijsheid",
    book2Benefit2: "Transformatiegidsen",
    book2Benefit3: "Bewezen methoden",
    
    // Knowledge categories
    altarTitle: "Hoe Uw Heilig Altaar Thuis Te Bouwen",
    altarContent: "Leer een heilige ruimte gewijd aan Heilige Cypriaan in uw huis te creëren, de krachtigste voorouderlijke tradities volgend.",
    
    signsTitle: "Tekenen en Manifestaties van Heilige Cypriaan",
    signsContent: "Herken wanneer Heilige Cypriaan in uw leven werkt en hoe zijn goddelijke tekenen te interpreteren.",
    
    prayersTitle: "Krachtige Dagelijkse Gebeden voor Beginners",
    prayersContent: "Begin uw spirituele reis met deze fundamentele gebeden die elke toegewijde zou moeten kennen.",
    
    charityTitle: "Hoe Liefdadigheid Te Doen in de Naam van Heilige Cypriaan",
    charityContent: "Heilige Cypriaan houdt van liefdadigheid en beloont overvloedig degenen die de behoeftigen helpen in zijn naam.",
    
    // Altar details
    altarDetail1: "Kies een specifieke en permanente locatie in uw huis, bij voorkeur naar het oosten gericht",
    altarDetail2: "Plaats een afbeelding van Heilige Cypriaan of teken het symbool c🔱 op wit papier",
    altarDetail3: "Heb altijd een witte of gouden kaars om dagelijks aan te steken",
    altarDetail4: "Houd een glas schoon water dat dagelijks vervangen moet worden",
    altarDetail5: "Plaats verse bloemen wanneer mogelijk (witte rozen zijn ideaal)",
    altarDetail6: "Houd mirre, sandelhout of roos wierook voor zuivering",
    altarDetail7: "Heb een specifiek notitieboek om uw gebeden en verzoeken op te schrijven",
    altarDetail8: "Houd de ruimte altijd schoon en georganiseerd met totaal respect",
    
    // Signs details
    signsDetail1: "Levendige dromen met getallen, symbolen of specifieke boodschappen",
    signsDetail2: "Synchroniciteiten en \"toevalligheden\" die uw gebeden beantwoorden",
    signsDetail3: "Gevoel van spirituele aanwezigheid tijdens gebeden of meditatie",
    signsDetail4: "Onverwachte kansen die \"wonderbaarlijk\" ontstaan",
    signsDetail5: "Sterke intuïties over belangrijke te nemen beslissingen",
    signsDetail6: "Bescherming in momenten van gevaar of extreme moeilijkheid",
    signsDetail7: "Plotselinge verbetering in situaties die onmogelijk leken",
    signsDetail8: "Bevestigingen door andere mensen of gebeurtenissen",
    
    // Prayers details
    prayersDetail1: "Ochtendgebed: \"Heilige Cypriaan, bescherm me vandaag op al mijn wegen\"",
    prayersDetail2: "Voor maaltijden: \"Zegen dit voedsel, Opperste Grote Magiër\"",
    prayersDetail3: "Voor werk: \"Geef me wijsheid en succes in alle activiteiten\"",
    prayersDetail4: "In moeilijkheden: \"Heilige Cypriaan, help me deze situatie te overwinnen\"",
    prayersDetail5: "'s Avonds: \"Ik dank voor alle vandaag ontvangen zegeningen\"",
    prayersDetail6: "Bij specifieke verzoeken: Wees altijd duidelijk en specifiek in wat u wenst",
    prayersDetail7: "Behoud altijd dankbaarheid en geloof tijdens gebeden",
    prayersDetail8: "Eindig altijd met \"Zo zij het, met de kracht van Heilige Cypriaan. Amen.\"",
    
    // Charity details
    charityDetail1: "Doneer voedsel aan daklozen of instellingen",
    charityDetail2: "Help financieel degenen die moeilijkheden hebben",
    charityDetail3: "Leer over Heilige Cypriaan aan mensen die hoop nodig hebben",
    charityDetail4: "Deel kennis en gebeden met andere toegewijden",
    charityDetail5: "Bezoek verpleeghuizen of weeshuizen met liefde en aandacht",
    charityDetail6: "Vermeld altijd dat u het doet in de naam van Heilige Cypriaan",
    charityDetail7: "Zoek geen erkenning - de beloning komt van de Grote Magiër",
    charityDetail8: "Doe het met ware liefde, niet alleen uit verplichting",
    
    // Wisdom quotes
    quote1: "Ware magie ligt in de transformatie van het hart en oprechte toewijding aan de Grote Magiër.",
    author1: "Voorouderlijke Leerstelling",
    quote2: "Heilige Cypriaan verlaat niet degenen die hem eren met dagelijkse toewijding en onwankelbaar geloof.",
    author2: "Heilige Belofte",
    quote3: "Wie het woord van de Grote Magiër verspreidt zal oneindig vermenigvuldigde zegeningen ontvangen.",
    author3: "Wet van Goddelijke Wederkerigheid",
    quote4: "Liefdadigheid gedaan in de naam van Heilige Cypriaan genereert eeuwige overvloed in uw leven.",
    author4: "Mysterie van Welvaart"
  },
  
  sv: {
    title: "FÖRFÄDERS HELIGA BIBLIOTEK",
    subtitle: "Årtusendegammal Kunskap och Gudomliga Lärdomar av Heliga Cyprian",
    intro: "Här hittar du all förfäders visdom som behövs för din andliga resa. Varje bok, varje lärdom har bevarats genom århundraden för att nå dig.",
    
    booksTitle: "HELIGA BÖCKER AV HELIGA CYPRIAN",
    teachingsTitle: "HELIGA LÄRDOMAR OCH GUIDER",
    teachingsDesc: "👆 Klicka på varje guide nedan för att expandera och se alla detaljerade steg",
    wisdomTitle: "FÖRFÄDERS HELIGA VISDOM",
    knowledgeTitle: "KUNSKAP ÄR HELIG KRAFT",
    knowledgeDesc: "Varje sida du läser, varje lärdom du praktiserar, för dig närmare den suprema kraften av Heliga Cyprian. Helig kunskap måste studeras dagligen och praktiseras med uppriktig hängivenhet.",
    
    clickToExpand: "👆 Klicka här för att se alla detaljerade steg",
    clickToRead: "👆 Klicka för att läsa den fullständiga och spännande berättelsen",
    detailedSteps: "Detaljerade Steg:",
    
    downloadNow: "LADDA NER HELIG BOK NU",
    downloadCapaPreta: "LADDA NER SVART OMSLAG BOK NU",
    
    // Book data
    book1Title: "Bok av Heliga Cyprian - Svart Omslag",
    book1Author: "Heliga Cyprian av Antiokia",
    book1Desc: "Den mäktigaste heliga boken någonsin skriven, innehållande alla hemligheter, böner och årtusendegamla ritualer av den Store Magikern. Transformera ditt liv helt med denna förfäders skatt.",
    book1Category: "Huvud Helig Bok",
    book1Benefit1: "Alla förfäders ritualer",
    book1Benefit2: "Kompletta suprema böner",
    book1Benefit3: "Total magisk kunskap",
    
    book2Title: "Boken av Böner, Orationer och Trollformler av Heliga Cyprian",
    book2Author: "Fernando Rodrigues Lopes",
    book2Desc: "Sammanställning av den Store Magikerns djupaste och mäktigaste lärdomar, samlande årtusendegammal visdom för att transformera din verklighet.",
    book2Category: "Gudomliga Lärdomar",
    book2Benefit1: "Komplett förfäders visdom",
    book2Benefit2: "Transformationsguider",
    book2Benefit3: "Bevisade metoder",
    
    // Knowledge categories
    altarTitle: "Hur Du Bygger Ditt Heliga Altare Hemma",
    altarContent: "Lär dig skapa ett heligt utrymme tillägnat Heliga Cyprian i ditt hem, följande de mäktigaste förfäders traditionerna.",
    
    signsTitle: "Tecken och Manifestationer av Heliga Cyprian",
    signsContent: "Känn igen när Heliga Cyprian arbetar i ditt liv och hur du tolkar hans gudomliga tecken.",
    
    prayersTitle: "Kraftfulla Dagliga Böner för Nybörjare",
    prayersContent: "Börja din andliga resa med dessa grundläggande böner som varje hängiven borde känna till.",
    
    charityTitle: "Hur Man Gör Välgörenhet i Heliga Cyprians Namn",
    charityContent: "Heliga Cyprian älskar välgörenhet och belönar rikligt dem som hjälper behövande i hans namn.",
    
    // Altar details
    altarDetail1: "Välj en specifik och permanent plats i ditt hem, helst vänd mot öster",
    altarDetail2: "Placera en bild av Heliga Cyprian eller rita symbolen c🔱 på vitt papper",
    altarDetail3: "Ha alltid ett vitt eller gyllene ljus att tända dagligen",
    altarDetail4: "Håll ett glas rent vatten som bör bytas dagligen",
    altarDetail5: "Placera färska blommor när möjligt (vita rosor är ideala)",
    altarDetail6: "Håll myrra, sandelträ eller ros rökelse för rening",
    altarDetail7: "Ha en specifik anteckningsbok för att skriva ner dina böner och förfrågningar",
    altarDetail8: "Håll utrymmet alltid rent och organiserat med total respekt",
    
    // Signs details
    signsDetail1: "Livliga drömmar med siffror, symboler eller specifika meddelanden",
    signsDetail2: "Synkroniciteter och \"tillfälligheter\" som svarar på dina böner",
    signsDetail3: "Känsla av andlig närvaro under böner eller meditation",
    signsDetail4: "Oväntade möjligheter som uppstår \"mirakulöst\"",
    signsDetail5: "Starka intuitioner om viktiga beslut att ta",
    signsDetail6: "Skydd i ögonblick av fara eller extrem svårighet",
    signsDetail7: "Plötslig förbättring i situationer som verkade omöjliga",
    signsDetail8: "Bekräftelser genom andra människor eller händelser",
    
    // Prayers details
    prayersDetail1: "Morgonbön: \"Heliga Cyprian, skydda mig idag på alla mina vägar\"",
    prayersDetail2: "Före måltider: \"Välsigna denna mat, Supreme Store Magiker\"",
    prayersDetail3: "Före arbete: \"Ge mig visdom och framgång i alla aktiviteter\"",
    prayersDetail4: "I svårigheter: \"Heliga Cyprian, hjälp mig övervinna denna situation\"",
    prayersDetail5: "På kvällen: \"Jag tackar för alla välsignelser mottagna idag\"",
    prayersDetail6: "I specifika förfrågningar: Var alltid tydlig och specifik i vad du önskar",
    prayersDetail7: "Behåll alltid tacksamhet och tro under böner",
    prayersDetail8: "Avsluta alltid med \"Så vare det, med Heliga Cyprians kraft. Amen.\"",
    
    // Charity details
    charityDetail1: "Donera mat till hemlösa eller institutioner",
    charityDetail2: "Hjälp ekonomiskt dem som har svårigheter",
    charityDetail3: "Lär om Heliga Cyprian till människor som behöver hopp",
    charityDetail4: "Dela kunskap och böner med andra hängivna",
    charityDetail5: "Besök äldreboenden eller barnhem med kärlek och uppmärksamhet",
    charityDetail6: "Nämn alltid att du gör det i Heliga Cyprians namn",
    charityDetail7: "Sök inte erkännande - belöningen kommer från den Store Magikern",
    charityDetail8: "Gör det med sann kärlek, inte bara av plikt",
    
    // Wisdom quotes
    quote1: "Sann magi ligger i hjärtats transformation och uppriktig hängivenhet till den Store Magikern.",
    author1: "Förfäders Lärdom",
    quote2: "Heliga Cyprian överger inte dem som hedrar honom med daglig hängivenhet och orubblig tro.",
    author2: "Heligt Löfte",
    quote3: "Den som sprider den Store Magikerns ord kommer att få oändligt multiplicerade välsignelser.",
    author3: "Lag om Gudomlig Ömsesidighet",
    quote4: "Välgörenhet gjord i Heliga Cyprians namn genererar evig överflöd i ditt liv.",
    author4: "Välstånds Mysterium"
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

const sacredBooks = [
  {
    id: '1',
    titleKey: 'book1Title',
    authorKey: 'book1Author',
    descriptionKey: 'book1Desc',
    image: 'https://images.pexels.com/photos/1112048/pexels-photo-1112048.jpeg',
    downloadLink: 'https://archive.org/details/sao-cipriano-o-bruxo-capa-preta-editora-pallas_20210527/mode/2up',
    categoryKey: 'book1Category',
    power: 100,
    benefitKeys: ['book1Benefit1', 'book1Benefit2', 'book1Benefit3'],
    isCapaPreta: true
  },
  {
    id: '2', 
    titleKey: 'book2Title',
    authorKey: 'book2Author',
    descriptionKey: 'book2Desc',
    image: 'https://images.pexels.com/photos/3646172/pexels-photo-3646172.jpeg',
    downloadLink: 'https://archive.org/details/o-livro-de-rezas-oracoes-e-feiticos-de-sao-cipriano/mode/2up',
    categoryKey: 'book2Category',
    power: 95,
    benefitKeys: ['book2Benefit1', 'book2Benefit2', 'book2Benefit3'],
    isCapaPreta: false
  }
];

export default function Library() {
  const { language, changeLanguage, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const knowledgeCategories = [
    {
      id: '1',
      titleKey: 'altarTitle',
      contentKey: 'altarContent',
      icon: Crown,
      detailKeys: [
        'altarDetail1', 'altarDetail2', 'altarDetail3', 'altarDetail4',
        'altarDetail5', 'altarDetail6', 'altarDetail7', 'altarDetail8'
      ]
    },
    {
      id: '2',
      titleKey: 'signsTitle',
      contentKey: 'signsContent',
      icon: Zap,
      detailKeys: [
        'signsDetail1', 'signsDetail2', 'signsDetail3', 'signsDetail4',
        'signsDetail5', 'signsDetail6', 'signsDetail7', 'signsDetail8'
      ]
    },
    {
      id: '3',
      titleKey: 'prayersTitle',
      contentKey: 'prayersContent',
      icon: Heart,
      detailKeys: [
        'prayersDetail1', 'prayersDetail2', 'prayersDetail3', 'prayersDetail4',
        'prayersDetail5', 'prayersDetail6', 'prayersDetail7', 'prayersDetail8'
      ]
    },
    {
      id: '4',
      titleKey: 'charityTitle',
      contentKey: 'charityContent',
      icon: Shield,
      detailKeys: [
        'charityDetail1', 'charityDetail2', 'charityDetail3', 'charityDetail4',
        'charityDetail5', 'charityDetail6', 'charityDetail7', 'charityDetail8'
      ]
    }
  ];

  const wisdomQuotes = [
    {
      quoteKey: 'quote1',
      authorKey: 'author1'
    },
    {
      quoteKey: 'quote2',
      authorKey: 'author2'
    },
    {
      quoteKey: 'quote3',
      authorKey: 'author3'
    },
    {
      quoteKey: 'quote4',
      authorKey: 'author4'
    }
  ];

  return (
    <div className="min-h-screen bg-obsidian-gradient">
      {/* Language Selector */}
      <LanguageSelector language={language} onLanguageChange={changeLanguage} />

      {/* Header */}
      <div className="text-center py-12 md:py-16 px-4 border-b border-gold-500/30">
        <div className="animate-float mb-8">
          <div className="text-6xl md:text-8xl text-gold-400 animate-glow-text mystical-glow">
            📚
          </div>
        </div>
        <h1 className="sacred-text text-3xl md:text-5xl font-black text-gold-400 mb-6 leading-tight">
          {t('title')}
        </h1>
        <p className="text-gold-300 text-lg md:text-2xl mb-6 font-bold">
          {t('subtitle')}
        </p>
        <div className="temple-section rounded-3xl p-6 md:p-8 max-w-4xl mx-auto shadow-sacred">
          <p className="text-gold-200 italic text-lg md:text-xl leading-relaxed mystical-text">
            "{t('intro')}"
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 pb-24">
        {/* Sacred Books Section */}
        <div className="mb-16">
          <h2 className="sacred-text text-2xl md:text-3xl font-black text-gold-400 text-center mb-8">
            {t('booksTitle')}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {sacredBooks.map((book) => (
              <div key={book.id} className="temple-section rounded-3xl p-8 shadow-sacred hover-lift">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-full md:w-32 h-48 md:h-40 rounded-2xl overflow-hidden sacred-border shadow-divine flex-shrink-0">
                    <img 
                      src={book.image} 
                      alt={t(book.titleKey)}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="mb-4">
                      <span className="inline-block bg-gold-500/20 text-gold-400 text-xs font-bold px-3 py-1 rounded-full mb-3">
                        {t(book.categoryKey)}
                      </span>
                      <div className="bg-gold-400/20 border border-gold-400 rounded-full px-4 py-1 inline-block ml-2">
                        <span className="text-gold-400 text-xs font-black">⚡ {book.power}% PODER</span>
                      </div>
                    </div>
                    <h3 className="sacred-text text-xl md:text-2xl font-black text-white mb-3 leading-tight">
                      {t(book.titleKey)}
                    </h3>
                    <p className="text-gold-300 text-sm font-semibold mb-4">
                      Por {t(book.authorKey)}
                    </p>
                    <p className="text-gold-200 leading-relaxed mb-6 text-sm md:text-base">
                      {t(book.descriptionKey)}
                    </p>
                    
                    {/* Benefits */}
                    <div className="grid grid-cols-1 gap-2 mb-6">
                      {book.benefitKeys.map((benefitKey, index) => (
                        <div key={index} className="bg-gold-500/10 rounded-xl p-3 border border-gold-500/30">
                          <span className="text-gold-400 font-bold text-xs md:text-sm">✨ {t(benefitKey)}</span>
                        </div>
                      ))}
                    </div>
                    
                    <button
                      onClick={() => window.open(book.downloadLink, '_blank')}
                      className="w-full sacred-button py-4 px-6 rounded-full font-black flex items-center justify-center gap-3 hover:scale-105 transition-all duration-300 shadow-divine"
                    >
                      <Download size={20} />
                      <span>{book.isCapaPreta ? t('downloadCapaPreta') : t('downloadNow')}</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Knowledge Categories */}
        <div className="mb-16">
          <h2 className="sacred-text text-2xl md:text-3xl font-black text-gold-400 text-center mb-4">
            {t('teachingsTitle')}
          </h2>
          <p className="text-gold-200 text-center mb-8 text-base md:text-lg max-w-3xl mx-auto">
            {t('teachingsDesc')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {knowledgeCategories.map((category) => {
              const IconComponent = category.icon;
              const isExpanded = selectedCategory === category.id;
              
              return (
                <div key={category.id} className="temple-section rounded-3xl p-8 shadow-sacred">
                  <button
                    onClick={() => setSelectedCategory(isExpanded ? null : category.id)}
                    className="w-full text-left group"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 rounded-full bg-gold-500/20 border border-gold-500/30 group-hover:scale-110 transition-all duration-300">
                        <IconComponent size={24} className="text-gold-400" />
                      </div>
                      <h3 className="sacred-text text-lg md:text-xl font-black text-gold-400 flex-1 leading-tight">
                        {t(category.titleKey)}
                      </h3>
                      <div className="text-gold-400">
                        {isExpanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                      </div>
                    </div>
                    <p className="text-gold-200 text-sm md:text-base leading-relaxed mb-4">
                      {t(category.contentKey)}
                    </p>
                    {!isExpanded && (
                      <p className="text-gold-300 italic text-sm">
                        {t('clickToExpand')}
                      </p>
                    )}
                  </button>
                  
                  {isExpanded && (
                    <div className="mt-6 pt-6 border-t border-gold-500/30 animate-slide-up">
                      <h4 className="text-gold-400 font-black text-base md:text-lg mb-4">{t('detailedSteps')}</h4>
                      <div className="space-y-3">
                        {category.detailKeys.map((detailKey, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-gold-400 text-black rounded-full flex items-center justify-center font-black text-xs flex-shrink-0 mt-1">
                              {index + 1}
                            </div>
                            <p className="text-gold-100 text-sm md:text-base leading-relaxed">
                              {t(detailKey)}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Wisdom Quotes */}
        <div className="temple-section rounded-3xl p-8 shadow-sacred">
          <h2 className="sacred-text text-2xl md:text-3xl font-black text-gold-400 text-center mb-8">
            {t('wisdomTitle')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {wisdomQuotes.map((wisdom, index) => (
              <div key={index} className="bg-gold-500/10 rounded-3xl p-6 border border-gold-500/30 shadow-sacred">
                <div className="text-4xl text-center mb-4">✨</div>
                <p className="text-gold-200 italic text-lg leading-relaxed mb-4 text-center">
                  "{t(wisdom.quoteKey)}"
                </p>
                <p className="text-gold-400 font-bold text-center">
                  - {t(wisdom.authorKey)}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Sacred Reminder */}
        <div className="mt-16 sacred-agreement-section rounded-3xl p-8 text-center shadow-mystical">
          <Book className="text-gold-400 mx-auto mb-6" size={48} />
          <h3 className="sacred-text text-2xl md:text-3xl font-black text-gold-400 mb-6">
            {t('knowledgeTitle')}
          </h3>
          <p className="text-gold-200 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            {t('knowledgeDesc')}
          </p>
        </div>
      </div>
    </div>
  );
}
