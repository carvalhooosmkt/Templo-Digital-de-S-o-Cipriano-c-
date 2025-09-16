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
  
  // Continue with other languages following the same pattern...
  // For brevity, I'll add a few more key languages:
  
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
    downloadCapaPreta: "СКАЧАТЬ КНИГУ С ЧЕРНОЙ ОБЛОЖКОЙ СЕЙЧАС"
    // ... Continue with all other Russian translations
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
    downloadCapaPreta: "立即下载黑封面书籍"
    // ... Continue with all other Chinese translations
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
    downloadCapaPreta: "今すぐ黒いカバーの本をダウンロード"
    // ... Continue with all other Japanese translations
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
    downloadCapaPreta: "تحميل كتاب الغطاء الأسود الآن"
    // ... Continue with all other Arabic translations
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
    downloadCapaPreta: "अभी काला कवर वाली पुस्तक डाउनलोड करें"
    // ... Continue with all other Hindi translations
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
    downloadCapaPreta: "지금 검은 표지 책 다운로드"
    // ... Continue with all other Korean translations
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
    downloadCapaPreta: "ZWARTE OMSLAG BOEK NU DOWNLOADEN"
    // ... Continue with all other Dutch translations
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
    downloadCapaPreta: "LADDA NER SVART OMSLAG BOK NU"
    // ... Continue with all other Swedish translations
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
