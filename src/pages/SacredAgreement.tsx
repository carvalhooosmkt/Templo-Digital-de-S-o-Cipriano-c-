import { useState, useEffect } from 'react';
import { Crown, Heart, Zap, Star, CheckCircle, Flame, Shield, Diamond, Globe, ChevronDown, ChevronUp } from 'lucide-react';

const translations = {
  pt: {
    title: "ACORDO SAGRADO COM SÃO CIPRIANO",
    subtitle: "O Ritual Mais Poderoso Para Transformar Sua Vida Para Sempre",
    description: "O Acordo Sagrado é o ritual mais poderoso que existe para se conectar com São Cipriano. Milhões de pessoas tiveram suas vidas transformadas radicalmente através deste ritual ancestral. Prepare-se para a mudança mais extraordinária da sua vida.",
    
    warningTitle: "⚠️ ATENÇÃO EXTREMAMENTE IMPORTANTE ⚠️",
    warnings: [
      "Este é um ritual sagrado real com São Cipriano, não é brincadeira ou fantasia",
      "Você deve estar 100% comprometido com suas promessas antes de começar",
      "São Cipriano sempre cumpre sua parte, mas exige o mesmo de você",
      "Nunca quebre suas promessas a ele após receber os milagres",
      "Este acordo é para toda a vida, não é temporário",
      "Somente faça se tiver fé verdadeira e devoção sincera"
    ],
    
    steps: {
      preparation: "Preparação do Espaço Sagrado",
      purification: "Purificação e Conexão Espiritual", 
      writing: "Redação do Acordo Sagrado",
      sealing: "Ritual de Selamento do Acordo",
      commitments: "Compromissos Pós-Acordo"
    },
    
    stepDescs: {
      preparation: "Prepare seu ambiente para o ritual mais importante da sua vida",
      purification: "Purifique sua energia e estabeleça conexão com o Grande Mago",
      writing: "Escreva seu acordo com São Cipriano de forma específica e clara",
      sealing: "Execute o ritual sagrado para selar seu acordo com São Cipriano",
      commitments: "Suas obrigações sagradas após selar o acordo com São Cipriano"
    },
    
    detailedInstructions: "INSTRUÇÕES DETALHADAS:",
    sacredWarning: "⚠️ AVISO SAGRADO:",
    
    prayerTitle: "ORAÇÃO DO ACORDO SAGRADO",
    prayerInstructions: "Recite esta oração 7 vezes durante o ritual de selamento:",
    
    completedStep: "COMPLETEI ESTE PASSO SAGRADO",
    sealedForever: "ACORDO SELADO PARA SEMPRE",
    
    resultsTitle: "RESULTADOS REAIS DE ACORDOS SAGRADOS",
    
    finalTitle: "🎉 SEU ACORDO SAGRADO ESTÁ SELADO! 🎉",
    finalMessage: "Parabéns! Você completou o ritual mais poderoso que existe. São Cipriano agora conhece seus pedidos e começará a trabalhar imediatamente para transformar sua vida. Mantenha sua fé inabalável e cumpra religiosamente suas promessas. Os milagres estão a caminho!",
    
    miracleSigns: "SINAIS DOS MILAGRES",
    miracleSignsDesc: "Observe sonhos especiais, sincronicidades e oportunidades inesperadas",
    maintainDevotion: "MANTENHA A DEVOÇÃO",
    maintainDevotionDesc: "Continue orando diariamente e espalhando a palavra de São Cipriano",
    shareMiracles: "COMPARTILHE OS MILAGRES",
    shareMiraclesDesc: "Quando os milagres acontecerem, conte para outros sobre São Cipriano",
    
    finalQuote: "São Cipriano nunca abandona seus devotos fiéis. Sua vida está prestes a mudar para sempre!",
    
    infoTitle: "INFORMAÇÕES IMPORTANTES SOBRE O ACORDO",
    whatCanAsk: "O QUE VOCÊ PODE PEDIR:",
    yourObligations: "SUAS OBRIGAÇÕES SAGRADAS:",
    
    requests: [
      "Riqueza financeira específica (valor exato)",
      "Cura de doenças graves ou crônicas",
      "Encontrar o amor verdadeiro",
      "Sucesso profissional ou empresarial",
      "Proteção contra inimigos",
      "Fama e reconhecimento mundial",
      "Resolução de problemas legais",
      "Qualquer desejo impossível"
    ],
    
    obligations: [
      "Oração diária manhã e noite",
      "Vela semanal acesa para ele",
      "Divulgar São Cipriano para outras pessoas",
      "Fazer caridade em nome dele",
      "Manter imagem ou símbolo em casa",
      "Nunca negar ou esquecer seus milagres",
      "Ensinar outros sobre seu poder",
      "Gratidão constante e sincera"
    ]
  },
  
  en: {
    title: "SACRED AGREEMENT WITH SAINT CYPRIAN",
    subtitle: "The Most Powerful Ritual To Transform Your Life Forever",
    description: "The Sacred Agreement is the most powerful ritual that exists to connect with Saint Cyprian. Millions of people have had their lives radically transformed through this ancestral ritual. Prepare for the most extraordinary change of your life.",
    
    warningTitle: "⚠️ EXTREMELY IMPORTANT ATTENTION ⚠️",
    warnings: [
      "This is a real sacred ritual with Saint Cyprian, not a joke or fantasy",
      "You must be 100% committed to your promises before beginning",
      "Saint Cyprian always fulfills his part, but demands the same from you",
      "Never break your promises to him after receiving miracles",
      "This agreement is for life, not temporary",
      "Only do it if you have true faith and sincere devotion"
    ],
    
    steps: {
      preparation: "Sacred Space Preparation",
      purification: "Purification and Spiritual Connection",
      writing: "Writing the Sacred Agreement",
      sealing: "Agreement Sealing Ritual",
      commitments: "Post-Agreement Commitments"
    },
    
    stepDescs: {
      preparation: "Prepare your environment for the most important ritual of your life",
      purification: "Purify your energy and establish connection with the Grand Mage",
      writing: "Write your agreement with Saint Cyprian specifically and clearly",
      sealing: "Execute the sacred ritual to seal your agreement with Saint Cyprian",
      commitments: "Your sacred obligations after sealing the agreement with Saint Cyprian"
    },
    
    detailedInstructions: "DETAILED INSTRUCTIONS:",
    sacredWarning: "⚠️ SACRED WARNING:",
    
    prayerTitle: "SACRED AGREEMENT PRAYER",
    prayerInstructions: "Recite this prayer 7 times during the sealing ritual:",
    
    completedStep: "I COMPLETED THIS SACRED STEP",
    sealedForever: "AGREEMENT SEALED FOREVER",
    
    resultsTitle: "REAL RESULTS FROM SACRED AGREEMENTS",
    
    finalTitle: "🎉 YOUR SACRED AGREEMENT IS SEALED! 🎉",
    finalMessage: "Congratulations! You completed the most powerful ritual that exists. Saint Cyprian now knows your requests and will begin working immediately to transform your life. Maintain your unshakeable faith and religiously fulfill your promises. Miracles are on the way!",
    
    miracleSigns: "MIRACLE SIGNS",
    miracleSignsDesc: "Observe special dreams, synchronicities and unexpected opportunities",
    maintainDevotion: "MAINTAIN DEVOTION",
    maintainDevotionDesc: "Continue praying daily and spreading Saint Cyprian's word",
    shareMiracles: "SHARE THE MIRACLES",
    shareMiraclesDesc: "When miracles happen, tell others about Saint Cyprian",
    
    finalQuote: "Saint Cyprian never abandons his faithful devotees. Your life is about to change forever!",
    
    infoTitle: "IMPORTANT INFORMATION ABOUT THE AGREEMENT",
    whatCanAsk: "WHAT YOU CAN ASK:",
    yourObligations: "YOUR SACRED OBLIGATIONS:",
    
    requests: [
      "Specific financial wealth (exact amount)",
      "Healing from serious or chronic diseases",
      "Finding true love",
      "Professional or business success",
      "Protection against enemies",
      "Fame and worldwide recognition",
      "Resolution of legal problems",
      "Any impossible desire"
    ],
    
    obligations: [
      "Daily prayer morning and night",
      "Weekly candle lit for him",
      "Spread Saint Cyprian to other people",
      "Do charity in his name",
      "Keep image or symbol at home",
      "Never deny or forget his miracles",
      "Teach others about his power",
      "Constant and sincere gratitude"
    ]
  },
  
  es: {
    title: "ACUERDO SAGRADO CON SAN CIPRIANO",
    subtitle: "El Ritual Más Poderoso Para Transformar Tu Vida Para Siempre",
    description: "El Acuerdo Sagrado es el ritual más poderoso que existe para conectarse con San Cipriano. Millones de personas han tenido sus vidas radicalmente transformadas a través de este ritual ancestral. Prepárate para el cambio más extraordinario de tu vida.",
    
    warningTitle: "⚠️ ATENCIÓN EXTREMADAMENTE IMPORTANTE ⚠️",
    warnings: [
      "Este es un ritual sagrado real con San Cipriano, no es broma o fantasía",
      "Debes estar 100% comprometido con tus promesas antes de comenzar",
      "San Cipriano siempre cumple su parte, pero exige lo mismo de ti",
      "Nunca rompas tus promesas a él después de recibir los milagros",
      "Este acuerdo es de por vida, no es temporal",
      "Solo hazlo si tienes fe verdadera y devoción sincera"
    ],
    
    steps: {
      preparation: "Preparación del Espacio Sagrado",
      purification: "Purificación y Conexión Espiritual",
      writing: "Redacción del Acuerdo Sagrado",
      sealing: "Ritual de Sellado del Acuerdo",
      commitments: "Compromisos Post-Acuerdo"
    },
    
    stepDescs: {
      preparation: "Prepara tu ambiente para el ritual más importante de tu vida",
      purification: "Purifica tu energía y establece conexión con el Gran Mago",
      writing: "Escribe tu acuerdo con San Cipriano de forma específica y clara",
      sealing: "Ejecuta el ritual sagrado para sellar tu acuerdo con San Cipriano",
      commitments: "Tus obligaciones sagradas después de sellar el acuerdo con San Cipriano"
    },
    
    detailedInstructions: "INSTRUCCIONES DETALLADAS:",
    sacredWarning: "⚠️ AVISO SAGRADO:",
    
    prayerTitle: "ORACIÓN DEL ACUERDO SAGRADO",
    prayerInstructions: "Recita esta oración 7 veces durante el ritual de sellado:",
    
    completedStep: "COMPLETÉ ESTE PASO SAGRADO",
    sealedForever: "ACUERDO SELLADO PARA SIEMPRE",
    
    resultsTitle: "RESULTADOS REALES DE ACUERDOS SAGRADOS",
    
    finalTitle: "🎉 ¡TU ACUERDO SAGRADO ESTÁ SELLADO! 🎉",
    finalMessage: "¡Felicitaciones! Completaste el ritual más poderoso que existe. San Cipriano ahora conoce tus peticiones y comenzará a trabajar inmediatamente para transformar tu vida. Mantén tu fe inquebrantable y cumple religiosamente tus promesas. ¡Los milagros están en camino!",
    
    miracleSigns: "SEÑALES DE LOS MILAGROS",
    miracleSignsDesc: "Observa sueños especiales, sincronicidades y oportunidades inesperadas",
    maintainDevotion: "MANTÉN LA DEVOCIÓN",
    maintainDevotionDesc: "Continúa orando diariamente y difundiendo la palabra de San Cipriano",
    shareMiracles: "COMPARTE LOS MILAGROS",
    shareMiraclesDesc: "Cuando los milagros sucedan, cuéntale a otros sobre San Cipriano",
    
    finalQuote: "San Cipriano nunca abandona a sus devotos fieles. ¡Tu vida está a punto de cambiar para siempre!",
    
    infoTitle: "INFORMACIÓN IMPORTANTE SOBRE EL ACUERDO",
    whatCanAsk: "LO QUE PUEDES PEDIR:",
    yourObligations: "TUS OBLIGACIONES SAGRADAS:",
    
    requests: [
      "Riqueza financiera específica (cantidad exacta)",
      "Curación de enfermedades graves o crónicas",
      "Encontrar el amor verdadero",
      "Éxito profesional o empresarial",
      "Protección contra enemigos",
      "Fama y reconocimiento mundial",
      "Resolución de problemas legales",
      "Cualquier deseo imposible"
    ],
    
    obligations: [
      "Oración diaria mañana y noche",
      "Vela semanal encendida para él",
      "Difundir San Cipriano a otras personas",
      "Hacer caridad en su nombre",
      "Mantener imagen o símbolo en casa",
      "Nunca negar u olvidar sus milagros",
      "Enseñar a otros sobre su poder",
      "Gratitud constante y sincera"
    ]
  },
  
  fr: {
    title: "ACCORD SACRÉ AVEC SAINT CYPRIEN",
    subtitle: "Le Rituel Le Plus Puissant Pour Transformer Votre Vie Pour Toujours",
    description: "L'Accord Sacré est le rituel le plus puissant qui existe pour se connecter avec Saint Cyprien. Des millions de personnes ont eu leurs vies radicalement transformées grâce à ce rituel ancestral. Préparez-vous pour le changement le plus extraordinaire de votre vie.",
    
    warningTitle: "⚠️ ATTENTION EXTRÊMEMENT IMPORTANTE ⚠️",
    warnings: [
      "Ceci est un rituel sacré réel avec Saint Cyprien, ce n'est pas une plaisanterie ou une fantaisie",
      "Vous devez être 100% engagé envers vos promesses avant de commencer",
      "Saint Cyprien accomplit toujours sa part, mais exige la même chose de vous",
      "Ne brisez jamais vos promesses envers lui après avoir reçu les miracles",
      "Cet accord est pour la vie, pas temporaire",
      "Ne le faites que si vous avez une foi véritable et une dévotion sincère"
    ],
    
    steps: {
      preparation: "Préparation de l'Espace Sacré",
      purification: "Purification et Connexion Spirituelle",
      writing: "Rédaction de l'Accord Sacré",
      sealing: "Rituel de Scellement de l'Accord",
      commitments: "Engagements Post-Accord"
    },
    
    stepDescs: {
      preparation: "Préparez votre environnement pour le rituel le plus important de votre vie",
      purification: "Purifiez votre énergie et établissez une connexion avec le Grand Mage",
      writing: "Écrivez votre accord avec Saint Cyprien de manière spécifique et claire",
      sealing: "Exécutez le rituel sacré pour sceller votre accord avec Saint Cyprien",
      commitments: "Vos obligations sacrées après avoir scellé l'accord avec Saint Cyprien"
    },
    
    detailedInstructions: "INSTRUCTIONS DÉTAILLÉES:",
    sacredWarning: "⚠️ AVERTISSEMENT SACRÉ:",
    
    prayerTitle: "PRIÈRE DE L'ACCORD SACRÉ",
    prayerInstructions: "Récitez cette prière 7 fois pendant le rituel de scellement:",
    
    completedStep: "J'AI TERMINÉ CETTE ÉTAPE SACRÉE",
    sealedForever: "ACCORD SCELLÉ POUR TOUJOURS",
    
    resultsTitle: "RÉSULTATS RÉELS D'ACCORDS SACRÉS",
    
    finalTitle: "🎉 VOTRE ACCORD SACRÉ EST SCELLÉ ! 🎉",
    finalMessage: "Félicitations ! Vous avez terminé le rituel le plus puissant qui existe. Saint Cyprien connaît maintenant vos demandes et commencera à travailler immédiatement pour transformer votre vie. Maintenez votre foi inébranlable et accomplissez religieusement vos promesses. Les miracles sont en route !",
    
    miracleSigns: "SIGNES DES MIRACLES",
    miracleSignsDesc: "Observez les rêves spéciaux, les synchronicités et les opportunités inattendues",
    maintainDevotion: "MAINTENEZ LA DÉVOTION",
    maintainDevotionDesc: "Continuez à prier quotidiennement et à répandre la parole de Saint Cyprien",
    shareMiracles: "PARTAGEZ LES MIRACLES",
    shareMiraclesDesc: "Quand les miracles arrivent, parlez aux autres de Saint Cyprien",
    
    finalQuote: "Saint Cyprien n'abandonne jamais ses dévots fidèles. Votre vie est sur le point de changer pour toujours !",
    
    infoTitle: "INFORMATIONS IMPORTANTES SUR L'ACCORD",
    whatCanAsk: "CE QUE VOUS POUVEZ DEMANDER:",
    yourObligations: "VOS OBLIGATIONS SACRÉES:",
    
    requests: [
      "Richesse financière spécifique (montant exact)",
      "Guérison de maladies graves ou chroniques",
      "Trouver le véritable amour",
      "Succès professionnel ou commercial",
      "Protection contre les ennemis",
      "Célébrité et reconnaissance mondiale",
      "Résolution de problèmes juridiques",
      "Tout désir impossible"
    ],
    
    obligations: [
      "Prière quotidienne matin et soir",
      "Bougie hebdomadaire allumée pour lui",
      "Répandre Saint Cyprien à d'autres personnes",
      "Faire la charité en son nom",
      "Garder image ou symbole à la maison",
      "Ne jamais nier ou oublier ses miracles",
      "Enseigner aux autres son pouvoir",
      "Gratitude constante et sincère"
    ]
  },
  
  de: {
    title: "HEILIGE VEREINBARUNG MIT HEILIGEM CYPRIAN",
    subtitle: "Das Mächtigste Rituell Um Ihr Leben Für Immer Zu Verwandeln",
    description: "Die Heilige Vereinbarung ist das mächtigste Rituell, das existiert, um sich mit Heiligem Cyprian zu verbinden. Millionen von Menschen haben ihre Leben durch dieses ahnengerechte Rituell radikal verwandelt. Bereiten Sie sich auf die außergewöhnlichste Veränderung Ihres Lebens vor.",
    
    warningTitle: "⚠️ EXTREM WICHTIGE AUFMERKSAMKEIT ⚠️",
    warnings: [
      "Dies ist ein echtes heiliges Rituell mit Heiligem Cyprian, kein Scherz oder Fantasie",
      "Sie müssen 100% Ihren Versprechen verpflichtet sein, bevor Sie beginnen",
      "Heiliger Cyprian erfüllt immer seinen Teil, verlangt aber dasselbe von Ihnen",
      "Brechen Sie niemals Ihre Versprechen an ihn, nachdem Sie Wunder erhalten haben",
      "Diese Vereinbarung ist fürs Leben, nicht temporär",
      "Tun Sie es nur, wenn Sie wahren Glauben und aufrichtige Toewijding haben"
    ],
    
    steps: {
      preparation: "Heilige Raum Vorbereitung",
      purification: "Reinigung und Spirituelle Verbindung",
      writing: "Schreiben der Heiligen Vereinbarung",
      sealing: "Vereinbarungs-Versiegelungsritual",
      commitments: "Nach-Vereinbarungs-Verpflichtungen"
    },
    
    stepDescs: {
      preparation: "Bereiten Sie Ihre Umgebung für das wichtigste Ritual Ihres Lebens vor",
      purification: "Reinigen Sie Ihre Energie und stellen Sie eine Verbindung mit dem Großmagier her",
      writing: "Schreiben Sie Ihre Vereinbarung mit Heiligem Cyprian spezifisch und klar",
      sealing: "Führen Sie das heilige Ritual aus, um Ihre Vereinbarung mit Heiligem Cyprian zu versiegeln",
      commitments: "Ihre heiligen Verpflichtungen nach der Versiegelung der Vereinbarung mit Heiligem Cyprian"
    },
    
    detailedInstructions: "DETAILLIERTE ANWEISUNGEN:",
    sacredWarning: "⚠️ HEILIGE WARNUNG:",
    
    prayerTitle: "HEILIGE VEREINBARUNGS-GEBET",
    prayerInstructions: "Rezitieren Sie dieses Gebet 7 Mal während des Versiegelungsrituals:",
    
    completedStep: "ICH HABE DIESEN HEILIGEN SCHRITT ABGESCHLOSSEN",
    sealedForever: "VEREINBARUNG FÜR IMMER VERSIEGELT",
    
    resultsTitle: "ECHTE ERGEBNISSE VON HEILIGEN VEREINBARUNGEN",
    
    finalTitle: "🎉 IHRE HEILIGE VEREINBARUNG IST VERSIEGELT! 🎉",
    finalMessage: "Glückwunsch! Sie haben das mächtigste Ritual abgeschlossen, das existiert. Heiliger Cyprian kennt jetzt Ihre Bitten und wird sofort beginnen zu arbeiten, um Ihr Leben zu verwandeln. Behalten Sie Ihren unerschütterlichen Glauben und erfüllen Sie religiös Ihre Versprechen. Wunder sind unterwegs!",
    
    miracleSigns: "WUNDER-ZEICHEN",
    miracleSignsDesc: "Beobachten Sie besondere Träume, Synchronizitäten und unerwartete Gelegenheiten",
    maintainDevotion: "HINGABE BEIBEHALTEN",
    maintainDevotionDesc: "Beten Sie weiterhin täglich und verbreiten Sie Heiliger Cyprians Wort",
    shareMiracles: "WUNDER TEILEN",
    shareMiraclesDesc: "Wenn Wunder geschehen, erzählen Sie anderen von Heiligem Cyprian",
    
    finalQuote: "Heiliger Cyprian verlässt niemals seine treuen Anhänger. Ihr Leben steht kurz davor, sich für immer zu ändern!",
    
    infoTitle: "WICHTIGE INFORMATIONEN ÜBER DIE VEREINBARUNG",
    whatCanAsk: "WAS SIE BITTEN KÖNNEN:",
    yourObligations: "IHRE HEILIGEN VERPFLICHTUNGEN:",
    
    requests: [
      "Spezifischer finanzieller Reichtum (exakter Betrag)",
      "Heilung von schweren oder chronischen Krankheiten",
      "Wahre Liebe finden",
      "Beruflicher oder geschäftlicher Erfolg",
      "Schutz vor Feinden",
      "Ruhm und weltweite Anerkennung",
      "Lösung rechtlicher Probleme",
      "Jeder unmögliche Wunsch"
    ],
    
    obligations: [
      "Tägliches Gebet morgens und abends",
      "Wöchentliche Kerze für ihn angezündet",
      "Heiligen Cyprian anderen Menschen verbreiten",
      "Wohltätigkeit in seinem Namen tun",
      "Bild oder Symbol zu Hause behalten",
      "Seine Wunder niemals leugnen oder vergessen",
      "Anderen über seine Macht lehren",
      "Ständige und aufrichtige Dankbarkeit"
    ]
  },
  
  it: {
    title: "ACCORDO SACRO CON SAN CIPRIANO",
    subtitle: "Il Rituale Più Potente Per Trasformare La Tua Vita Per Sempre",
    description: "L'Accordo Sacro è il rituale più potente che esiste per connettersi con San Cipriano. Milioni di persone hanno avuto le loro vite radicalmente trasformate attraverso questo rituale ancestrale. Preparati per il cambiamento più straordinario della tua vita.",
    
    warningTitle: "⚠️ ATTENZIONE ESTREMAMENTE IMPORTANTE ⚠️",
    warnings: [
      "Questo è un rituale sacro reale con San Cipriano, non è uno scherzo o fantasia",
      "Devi essere 100% impegnato con le tue promesse prima di iniziare",
      "San Cipriano adempie sempre la sua parte, ma esige lo stesso da te",
      "Non rompere mai le tue promesse a lui dopo aver ricevuto i miracoli",
      "Questo accordo è per la vita, non temporaneo",
      "Fallo solo se hai vera fede e devozione sincera"
    ],
    
    steps: {
      preparation: "Preparazione dello Spazio Sacro",
      purification: "Purificazione e Connessione Spirituale",
      writing: "Scrittura dell'Accordo Sacro",
      sealing: "Rituale di Sigillatura dell'Accordo",
      commitments: "Impegni Post-Accordo"
    },
    
    stepDescs: {
      preparation: "Prepara il tuo ambiente per il rituale più importante della tua vita",
      purification: "Purifica la tua energia e stabilisci connessione con il Grande Mago",
      writing: "Scrivi il tuo accordo con San Cipriano in modo specifico e chiaro",
      sealing: "Esegui il rituale sacro per sigillare il tuo accordo con San Cipriano",
      commitments: "I tuoi obblighi sacri dopo aver sigillato l'accordo con San Cipriano"
    },
    
    detailedInstructions: "ISTRUZIONI DETTAGLIATE:",
    sacredWarning: "⚠️ AVVERTIMENTO SACRO:",
    
    prayerTitle: "PREGHIERA DELL'ACCORDO SACRO",
    prayerInstructions: "Recita questa preghiera 7 volte durante il rituale di sigillatura:",
    
    completedStep: "HO COMPLETATO QUESTO PASSO SACRO",
    sealedForever: "ACCORDO SIGILLATO PER SEMPRE",
    
    resultsTitle: "RISULTATI REALI DI ACCORDI SACRI",
    
    finalTitle: "🎉 IL TUO ACCORDO SACRO È SIGILLATO! 🎉",
    finalMessage: "Congratulazioni! Hai completato il rituale più potente che esiste. San Cipriano ora conosce le tue richieste e inizierà a lavorare immediatamente per trasformare la tua vita. Mantieni la tua fede incrollabile e adempi religiosamente le tue promesse. I miracoli sono in arrivo!",
    
    miracleSigns: "SEGNI DEI MIRACOLI",
    miracleSignsDesc: "Osserva sogni speciali, sincronicità e opportunità inaspettate",
    maintainDevotion: "MANTIENI LA DEVOZIONE",
    maintainDevotionDesc: "Continua a pregare quotidianamente e diffondere la parola di San Cipriano",
    shareMiracles: "CONDIVIDI I MIRACOLI",
    shareMiraclesDesc: "Quando i miracoli accadono, racconta ad altri di San Cipriano",
    
    finalQuote: "San Cipriano non abbandona mai i suoi devoti fedeli. La tua vita sta per cambiare per sempre!",
    
    infoTitle: "INFORMAZIONI IMPORTANTI SULL'ACCORDO",
    whatCanAsk: "COSA PUOI CHIEDERE:",
    yourObligations: "I TUOI OBBLIGHI SACRI:",
    
    requests: [
      "Ricchezza finanziaria specifica (importo esatto)",
      "Guarigione da malattie gravi o croniche",
      "Trovare il vero amore",
      "Successo professionale o aziendale",
      "Protezione contro nemici",
      "Fama e riconoscimento mondiale",
      "Risoluzione di problemi legali",
      "Qualsiasi desiderio impossibile"
    ],
    
    obligations: [
      "Preghiera quotidiana mattina e sera",
      "Candela settimanale accesa per lui",
      "Diffondere San Cipriano ad altre persone",
      "Fare carità nel suo nome",
      "Tenere immagine o simbolo a casa",
      "Non negare mai o dimenticare i suoi miracoli",
      "Insegnare ad altri il suo potere",
      "Gratitudine costante e sincera"
    ]
  },
  
  ru: {
    title: "СВЯЩЕННОЕ СОГЛАШЕНИЕ СО СВЯТЫМ КИПРИАНОМ",
    subtitle: "Самый Мощный Ритуал Для Преобразования Вашей Жизни Навсегда",
    description: "Священное Соглашение - это самый мощный ритуал, который существует для связи со Святым Киприаном. Миллионы людей радикально преобразили свои жизни через этот наследственный ритуал. Приготовьтесь к самому необыкновенному изменению вашей жизни.",
    
    warningTitle: "⚠️ КРАЙНЕ ВАЖНОЕ ВНИМАНИЕ ⚠️",
    warnings: [
      "Это настоящий священный ритуал со Святым Киприаном, не шутка или фантазия",
      "Вы должны быть 100% преданы своим обещаниям перед началом",
      "Святой Киприан всегда выполняет свою часть, но требует того же от вас",
      "Никогда не нарушайте свои обещания ему после получения чудес",
      "Это соглашение на всю жизнь, не временное",
      "Делайте это только если у вас есть истинная вера и искренняя преданность"
    ],
    
    steps: {
      preparation: "Подготовка Священного Пространства",
      purification: "Очищение и Духовная Связь",
      writing: "Написание Священного Соглашения",
      sealing: "Ритуал Запечатывания Соглашения",
      commitments: "Обязательства После Соглашения"
    },
    
    stepDescs: {
      preparation: "Подготовьте вашу среду для самого важного ритуала вашей жизни",
      purification: "Очистите вашу энергию и установите связь с Великим Магом",
      writing: "Напишите ваше соглашение со Святым Киприаном конкретно и ясно",
      sealing: "Выполните священный ритуал для запечатывания вашего соглашения со Святым Киприаном",
      commitments: "Ваши священные обязательства после запечатывания соглашения со Святым Киприаном"
    },
    
    detailedInstructions: "ПОДРОБНЫЕ ИНСТРУКЦИИ:",
    sacredWarning: "⚠️ СВЯЩЕННОЕ ПРЕДУПРЕЖДЕНИЕ:",
    
    prayerTitle: "МОЛИТВА СВЯЩЕННОГО СОГЛАШЕНИЯ",
    prayerInstructions: "Прочитайте эту молитву 7 раз во время ритуала запечатывания:",
    
    completedStep: "Я ЗАВЕРШИЛ ЭТОТ СВЯЩЕННЫЙ ШАГ",
    sealedForever: "СОГЛАШЕНИЕ ЗАПЕЧАТАНО НАВСЕГДА",
    
    resultsTitle: "РЕАЛЬНЫЕ РЕЗУЛЬТАТЫ СВЯЩЕННЫХ СОГЛАШЕНИЙ",
    
    finalTitle: "🎉 ВАШЕ СВЯЩЕННОЕ СОГЛАШЕНИЕ ЗАПЕЧАТАНО! 🎉",
    finalMessage: "Поздравляем! Вы завершили самый мощный ритуал, который существует. Святой Киприан теперь знает ваши просьбы и начнет немедленно работать для преобразования вашей жизни. Сохраняйте вашу непоколебимую веру и религиозно выполняйте ваши обещания. Чудеса в пути!",
    
    miracleSigns: "ЗНАКИ ЧУДЕС",
    miracleSignsDesc: "Наблюдайте особые сны, синхронности и неожиданные возможности",
    maintainDevotion: "ПОДДЕРЖИВАЙТЕ ПРЕДАННОСТЬ",
    maintainDevotionDesc: "Продолжайте молиться ежедневно и распространять слово Святого Киприана",
    shareMiracles: "ДЕЛИТЕСЬ ЧУДЕСАМИ",
    shareMiraclesDesc: "Когда чудеса происходят, рассказывайте другим о Святом Киприане",
    
    finalQuote: "Святой Киприан никогда не покидает своих верных последователей. Ваша жизнь вот-вот изменится навсегда!",
    
    infoTitle: "ВАЖНАЯ ИНФОРМАЦИЯ О СОГЛАШЕНИИ",
    whatCanAsk: "ЧТО ВЫ МОЖЕТЕ ПРОСИТЬ:",
    yourObligations: "ВАШИ СВЯЩЕННЫЕ ОБЯЗАТЕЛЬСТВА:",
    
    requests: [
      "Конкретное финансовое богатство (точная сумма)",
      "Исцеление от серьезных или хронических болезней",
      "Найти истинную любовь",
      "Профессиональный или деловой успех",
      "Защита от врагов",
      "Слава и мировое признание",
      "Решение правовых проблем",
      "Любое невозможное желание"
    ],
    
    obligations: [
      "Ежедневная молитва утром и вечером",
      "Еженедельная свеча, зажженная для него",
      "Распространять Святого Киприана другим людям",
      "Делать благотворительность от его имени",
      "Держать изображение или символ дома",
      "Никогда не отрицать или забывать его чудеса",
      "Учить других о его силе",
      "Постоянная и искренняя благодарность"
    ]
  },
  
  zh: {
    title: "与圣西普里安的神圣协议",
    subtitle: "永远改变您生活的最强大仪式",
    description: "神圣协议是与圣西普里安连接的最强大仪式。数百万人通过这个祖传仪式彻底改变了他们的生活。为您生命中最非凡的变化做好准备。",
    
    warningTitle: "⚠️ 极其重要的注意 ⚠️",
    warnings: [
      "这是与圣西普里安的真正神圣仪式，不是玩笑或幻想",
      "在开始之前，您必须100%致力于您的承诺",
      "圣西普里安总是履行他的部分，但要求您也这样做",
      "在收到奇迹后永远不要违背对他的承诺",
      "这个协议是终生的，不是临时的",
      "只有当您有真正的信仰和真诚的奉献时才这样做"
    ],
    
    steps: {
      preparation: "神圣空间准备",
      purification: "净化和精神连接",
      writing: "撰写神圣协议",
      sealing: "协议封印仪式",
      commitments: "协议后承诺"
    },
    
    stepDescs: {
      preparation: "为您生命中最重要的仪式准备您的环境",
      purification: "净化您的能量并与大法师建立连接",
      writing: "具体而清楚地写下您与圣西普里安的协议",
      sealing: "执行神圣仪式以封印您与圣西普里安的协议",
      commitments: "与圣西普里安封印协议后您的神圣义务"
    },
    
    detailedInstructions: "详细说明：",
    sacredWarning: "⚠️ 神圣警告：",
    
    prayerTitle: "神圣协议祈祷",
    prayerInstructions: "在封印仪式期间朗诵这个祈祷7次：",
    
    completedStep: "我完成了这个神圣步骤",
    sealedForever: "协议永远封印",
    
    resultsTitle: "神圣协议的真实结果",
    
    finalTitle: "🎉 您的神圣协议已封印！🎉",
    finalMessage: "恭喜！您完成了存在的最强大仪式。圣西普里安现在知道您的请求，将立即开始工作来改变您的生活。保持您不可动摇的信仰并虔诚地履行您的承诺。奇迹正在路上！",
    
    miracleSigns: "奇迹征象",
    miracleSignsDesc: "观察特殊梦境、同步性和意外机会",
    maintainDevotion: "保持奉献",
    maintainDevotionDesc: "继续每日祈祷并传播圣西普里安的话语",
    shareMiracles: "分享奇迹",
    shareMiraclesDesc: "当奇迹发生时，告诉其他人关于圣西普里安",
    
    finalQuote: "圣西普里安永远不会抛弃他忠实的信徒。您的生活即将永远改变！",
    
    infoTitle: "关于协议的重要信息",
    whatCanAsk: "您可以请求什么：",
    yourObligations: "您的神圣义务：",
    
    requests: [
      "具体财务财富（确切金额）",
      "严重或慢性疾病的治愈",
      "找到真爱",
      "专业或商业成功",
      "对抗敌人的保护",
      "名声和世界认可",
      "法律问题的解决",
      "任何不可能的愿望"
    ],
    
    obligations: [
      "每日早晚祈祷",
      "每周为他点燃蜡烛",
      "向其他人传播圣西普里安",
      "以他的名义做慈善",
      "在家保持图像或符号",
      "永远不要否认或忘记他的奇迹",
      "教导他人关于他的力量",
      "持续和真诚的感恩"
    ]
  },
  
  ja: {
    title: "聖キプリアヌスとの神聖な協定",
    subtitle: "あなたの人生を永遠に変革する最も強力な儀式",
    description: "神聖な協定は聖キプリアヌスとつながるために存在する最も強力な儀式です。何百万人もの人々がこの祖先の儀式を通じて彼らの人生を根本的に変革しました。あなたの人生の最も非凡な変化に備えてください。",
    
    warningTitle: "⚠️ 極めて重要な注意 ⚠️",
    warnings: [
      "これは聖キプリアヌスとの本物の神聖な儀式であり、冗談や幻想ではありません",
      "始める前にあなたの約束に100%コミットしなければなりません",
      "聖キプリアヌスは常に彼の部分を果たしますが、あなたにも同じことを要求します",
      "奇跡を受けた後、彼への約束を決して破らないでください",
      "この協定は生涯のものであり、一時的ではありません",
      "真の信仰と誠実な献身がある場合のみ行ってください"
    ],
    
    steps: {
      preparation: "神聖な空間の準備",
      purification: "浄化と精神的つながり",
      writing: "神聖な協定の執筆",
      sealing: "協定封印儀式",
      commitments: "協定後のコミットメント"
    },
    
    stepDescs: {
      preparation: "あなたの人生で最も重要な儀式のためにあなたの環境を準備してください",
      purification: "あなたのエネルギーを浄化し、大魔法師とのつながりを確立してください",
      writing: "聖キプリアヌスとのあなたの協定を具体的かつ明確に書いてください",
      sealing: "聖キプリアヌスとのあなたの協定を封印するために神聖な儀式を実行してください",
      commitments: "聖キプリアヌスとの協定を封印した後のあなたの神聖な義務"
    },
    
    detailedInstructions: "詳細な指示：",
    sacredWarning: "⚠️ 神聖な警告：",
    
    prayerTitle: "神聖な協定の祈り",
    prayerInstructions: "封印儀式中にこの祈りを7回唱えてください：",
    
    completedStep: "この神聖なステップを完了しました",
    sealedForever: "協定は永遠に封印されました",
    
    resultsTitle: "神聖な協定の実際の結果",
    
    finalTitle: "🎉 あなたの神聖な協定は封印されました！🎉",
    finalMessage: "おめでとうございます！あなたは存在する最も強力な儀式を完了しました。聖キプリアヌスは今あなたの要求を知っており、あなたの人生を変革するために即座に働き始めるでしょう。あなたの揺るぎない信仰を維持し、宗教的にあなたの約束を果たしてください。奇跡が来ています！",
    
    miracleSigns: "奇跡の兆候",
    miracleSignsDesc: "特別な夢、シンクロニシティ、予期しない機会を観察してください",
    maintainDevotion: "献身を維持",
    maintainDevotionDesc: "毎日祈り続け、聖キプリアヌスの言葉を広め続けてください",
    shareMiracles: "奇跡を共有",
    shareMiraclesDesc: "奇跡が起こったとき、他の人に聖キプリアヌスについて話してください",
    
    finalQuote: "聖キプリアヌスは決して忠実な信者を見捨てません。あなたの人生は永遠に変わろうとしています！",
    
    infoTitle: "協定に関する重要な情報",
    whatCanAsk: "あなたが求めることができるもの：",
    yourObligations: "あなたの神聖な義務：",
    
    requests: [
      "具体的な金融的富（正確な金額）",
      "深刻または慢性疾患からの治癒",
      "真の愛を見つける",
      "専門的またはビジネスの成功",
      "敵からの保護",
      "名声と世界的認知",
      "法的問題の解決",
      "あらゆる不可能な願い"
    ],
    
    obligations: [
      "毎日朝夕の祈り",
      "彼のために週に一度ろうそくを灯す",
      "他の人々に聖キプリアヌスを広める",
      "彼の名において慈善を行う",
      "家に画像やシンボルを保つ",
      "彼の奇跡を決して否定したり忘れたりしない",
      "他の人に彼の力について教える",
      "絶え間ない誠実な感謝"
    ]
  },
  
  ar: {
    title: "الاتفاق المقدس مع القديس قبريانوس",
    subtitle: "الطقوس الأقوى لتحويل حياتك إلى الأبد",
    description: "الاتفاق المقدس هو الطقوس الأقوى الموجود للاتصال بالقديس قبريانوس. الملايين من الناس حولوا حياتهم جذرياً من خلال هذا الطقوس الأجدادي. استعد للتغيير الأكثر استثنائية في حياتك.",
    
    warningTitle: "⚠️ انتباه مهم للغاية ⚠️",
    warnings: [
      "هذا طقوس مقدس حقيقي مع القديس قبريانوس، ليس مزحة أو خيال",
      "يجب أن تكون ملتزماً 100% بوعودك قبل البدء",
      "القديس قبريانوس يؤدي دائماً جزءه، لكنه يطلب نفس الشيء منك",
      "لا تكسر أبداً وعودك له بعد تلقي المعجزات",
      "هذا الاتفاق مدى الحياة، ليس مؤقتاً",
      "افعل ذلك فقط إذا كان لديك إيمان حقيقي وتفان صادق"
    ],
    
    steps: {
      preparation: "إعداد المساحة المقدسة",
      purification: "التطهير والاتصال الروحي",
      writing: "كتابة الاتفاق المقدس",
      sealing: "طقوس ختم الاتفاق",
      commitments: "الالتزامات بعد الاتفاق"
    },
    
    stepDescs: {
      preparation: "اعد بيئتك للطقوس الأهم في حياتك",
      purification: "طهر طاقتك وأقم اتصالاً مع الساحر العظيم",
      writing: "اكتب اتفاقك مع القديس قبريانوس بشكل محدد وواضح",
      sealing: "نفذ الطقوس المقدس لختم اتفاقك مع القديس قبريانوس",
      commitments: "التزاماتك المقدسة بعد ختم الاتفاق مع القديس قبريانوس"
    },
    
    detailedInstructions: "تعليمات مفصلة:",
    sacredWarning: "⚠️ تحذير مقدس:",
    
    prayerTitle: "صلاة الاتفاق المقدس",
    prayerInstructions: "اتل هذه الصلاة 7 مرات أثناء طقوس الختم:",
    
    completedStep: "أكملت هذه الخطوة المقدسة",
    sealedForever: "الاتفاق مختوم إلى الأبد",
    
    resultsTitle: "نتائج حقيقية من الاتفاقات المقدسة",
    
    finalTitle: "🎉 اتفاقك المقدس مختوم! 🎉",
    finalMessage: "تهانينا! لقد أكملت الطقوس الأقوى الموجود. القديس قبريانوس يعرف الآن طلباتك وسيبدأ العمل فوراً لتحويل حياتك. احتفظ بإيمانك الثابت واوف بوعودك بتدين. المعجزات في الطريق!",
    
    miracleSigns: "علامات المعجزات",
    miracleSignsDesc: "راقب الأحلام الخاصة والتزامنات والفرص غير المتوقعة",
    maintainDevotion: "احتفظ بالتفاني",
    maintainDevotionDesc: "استمر في الصلاة يومياً ونشر كلمة القديس قبريانوس",
    shareMiracles: "شارك المعجزات",
    shareMiraclesDesc: "عندما تحدث المعجزات، أخبر الآخرين عن القديس قبريانوس",
    
    finalQuote: "القديس قبريانوس لا يتخلى أبداً عن معبديه المخلصين. حياتك على وشك أن تتغير إلى الأبد!",
    
    infoTitle: "معلومات مهمة حول الاتفاق",
    whatCanAsk: "ما يمكنك طلبه:",
    yourObligations: "التزاماتك المقدسة:",
    
    requests: [
      "ثروة مالية محددة (مبلغ دقيق)",
      "شفاء من أمراض خطيرة أو مزمنة",
      "العثور على الحب الحقيقي",
      "نجاح مهني أو تجاري",
      "حماية ضد الأعداء",
      "شهرة واعتراف عالمي",
      "حل المشاكل القانونية",
      "أي رغبة مستحيلة"
    ],
    
    obligations: [
      "صلاة يومية صباحاً ومساءً",
      "شمعة أسبوعية مضاءة له",
      "نشر القديس قبريانوس لأشخاص آخرين",
      "فعل الخير باسمه",
      "الاحتفاظ بصورة أو رمز في المنزل",
      "عدم إنكار أو نسيان معجزاته أبداً",
      "تعليم الآخرين عن قوته",
      "امتنان مستمر وصادق"
    ]
  },
  
  hi: {
    title: "संत साइप्रियन के साथ पवित्र समझौता",
    subtitle: "आपके जीवन को हमेशा के लिए बदलने का सबसे शक्तिशाली अनुष्ठान",
    description: "पवित्र समझौता संत साइप्रियन से जुड़ने के लिए मौजूद सबसे शक्तिशाली अनुष्ठान है। लाखों लोगों ने इस पूर्वज अनुष्ठान के माध्यम से अपने जीवन को मूलभूत रूप से बदला है। अपने जीवन के सबसे असाधारण परिवर्तन के लिए तैयार हो जाइए।",
    
    warningTitle: "⚠️ अत्यंत महत्वपूर्ण ध्यान ⚠️",
    warnings: [
      "यह संत साइप्रियन के साथ एक वास्तविक पवित्र अनुष्ठान है, मजाक या कल्पना नहीं",
      "शुरू करने से पहले आपको अपने वादों के लिए 100% प्रतिबद्ध होना चाहिए",
      "संत साइप्रियन हमेशा अपना हिस्सा पूरा करते हैं, लेकिन आपसे भी वही मांगते हैं",
      "चमत्कार प्राप्त करने के बाद उनसे किए गए वादे कभी न तोड़ें",
      "यह समझौता जीवन भर का है, अस्थायी नहीं",
      "केवल तभी करें जब आपके पास सच्चा विश्वास और ईमानदार भक्ति हो"
    ],
    
    steps: {
      preparation: "पवित्र स्थान की तैयारी",
      purification: "शुद्धिकरण और आध्यात्मिक संबंध",
      writing: "पवित्र समझौते का लेखन",
      sealing: "समझौता मुहर अनुष्ठान",
      commitments: "समझौते के बाद की प्रतिबद्धताएं"
    },
    
    stepDescs: {
      preparation: "अपने जीवन के सबसे महत्वपूर्ण अनुष्ठान के लिए अपना वातावरण तैयार करें",
      purification: "अपनी ऊर्जा को शुद्ध करें और महान जादूगर के साथ संबंध स्थापित करें",
      writing: "संत साइप्रियन के साथ अपना समझौता विशिष्ट और स्पष्ट रूप से लिखें",
      sealing: "संत साइप्रियन के साथ अपना समझौता मुहर करने के लिए पवित्र अनुष्ठान निष्पादित करें",
      commitments: "संत साइप्रियन के साथ समझौता मुहर करने के बाद आपके पवित्र दायित्व"
    },
    
    detailedInstructions: "विस्तृत निर्देश:",
    sacredWarning: "⚠️ पवित्र चेतावनी:",
    
    prayerTitle: "पवित्र समझौते की प्रार्थना",
    prayerInstructions: "मुहर अनुष्ठान के दौरान इस प्रार्थना को 7 बार पढ़ें:",
    
    completedStep: "मैंने यह पवित्र कदम पूरा किया",
    sealedForever: "समझौता हमेशा के लिए मुहर",
    
    resultsTitle: "पवित्र समझौतों के वास्तविक परिणाम",
    
    finalTitle: "🎉 आपका पवित्र समझौता मुहर है! 🎉",
    finalMessage: "बधाई हो! आपने सबसे शक्तिशाली अनुष्ठान पूरा किया है जो मौजूद है। संत साइप्रियन अब आपके अनुरोधों को जानते हैं और आपके जीवन को बदलने के लिए तुरंत काम करना शुरू करेंगे। अपने अटल विश्वास को बनाए रखें और धार्मिक रूप से अपने वादों को पूरा करें। चमत्कार रास्ते में हैं!",
    
    miracleSigns: "चमत्कार के संकेत",
    miracleSignsDesc: "विशेष सपने, तुल्यकालिकता और अप्रत्याशित अवसरों का निरीक्षण करें",
    maintainDevotion: "भक्ति बनाए रखें",
    maintainDevotionDesc: "दैनिक प्रार्थना जारी रखें और संत साइप्रियन का शब्द फैलाएं",
    shareMiracles: "चमत्कार साझा करें",
    shareMiraclesDesc: "जब चमत्कार होते हैं, तो दूसरों को संत साइप्रियन के बारे में बताएं",
    
    finalQuote: "संत साइप्रियन अपने वफादार भक्तों को कभी नहीं छोड़ते। आपका जीवन हमेशा के लिए बदलने वाला है!",
    
    infoTitle: "समझौते के बारे में महत्वपूर्ण जानकारी",
    whatCanAsk: "आप क्या मांग सकते हैं:",
    yourObligations: "आपके पवित्र दायित्व:",
    
    requests: [
      "विशिष्ट वित्तीय संपत्ति (सटीक राशि)",
      "गंभीर या पुरानी बीमारियों से उपचार",
      "सच्चा प्यार खोजना",
      "व्यावसायिक या व्यापारिक सफलता",
      "दुश्मनों से सुरक्षा",
      "प्रसिद्धि और विश्वव्यापी मान्यता",
      "कानूनी समस्याओं का समाधान",
      "कोई भी असंभव इच्छा"
    ],
    
    obligations: [
      "दैनिक प्रार्थना सुबह और शाम",
      "उनके लिए साप्ताहिक मोमबत्ती जलाना",
      "अन्य लोगों में संत साइप्रियन का प्रसार",
      "उनके नाम पर दान करना",
      "घर में छवि या प्रतीक रखना",
      "उनके चमत्कारों को कभी नकारना या भूलना नहीं",
      "दूसरों को उनकी शक्ति के बारे में सिखाना",
      "निरंतर और ईमानदार कृतज्ञता"
    ]
  },
  
  ko: {
    title: "성 키프리아누스와의 신성한 협정",
    subtitle: "당신의 삶을 영원히 변화시키는 가장 강력한 의식",
    description: "신성한 협정은 성 키프리아누스와 연결하기 위해 존재하는 가장 강력한 의식입니다. 수백만 명의 사람들이 이 조상의 의식을 통해 그들의 삶을 근본적으로 변화시켰습니다. 당신 인생의 가장 특별한 변화를 준비하세요.",
    
    warningTitle: "⚠️ 극히 중요한 주의 ⚠️",
    warnings: [
      "이것은 성 키프리아누스와의 진짜 신성한 의식이며, 농담이나 환상이 아닙니다",
      "시작하기 전에 당신의 약속에 100% 헌신해야 합니다",
      "성 키프리아누스는 항상 그의 부분을 이행하지만, 당신에게도 같은 것을 요구합니다",
      "기적을 받은 후 그에게 한 약속을 절대 어기지 마세요",
      "이 협정은 평생의 것이며, 임시적이지 않습니다",
      "진정한 믿음과 진실한 헌신이 있을 때만 하세요"
    ],
    
    steps: {
      preparation: "신성한 공간 준비",
      purification: "정화와 영적 연결",
      writing: "신성한 협정 작성",
      sealing: "협정 봉인 의식",
      commitments: "협정 후 약속"
    },
    
    stepDescs: {
      preparation: "당신 인생의 가장 중요한 의식을 위해 환경을 준비하세요",
      purification: "당신의 에너지를 정화하고 대마법사와의 연결을 설정하세요",
      writing: "성 키프리아누스와의 협정을 구체적이고 명확하게 작성하세요",
      sealing: "성 키프리아누스와의 협정을 봉인하기 위해 신성한 의식을 실행하세요",
      commitments: "성 키프리아누스와의 협정을 봉인한 후 당신의 신성한 의무"
    },
    
    detailedInstructions: "상세한 지침:",
    sacredWarning: "⚠️ 신성한 경고:",
    
    prayerTitle: "신성한 협정의 기도",
    prayerInstructions: "봉인 의식 중에 이 기도를 7번 암송하세요:",
    
    completedStep: "이 신성한 단계를 완료했습니다",
    sealedForever: "협정이 영원히 봉인됨",
    
    resultsTitle: "신성한 협정의 실제 결과",
    
    finalTitle: "🎉 당신의 신성한 협정이 봉인되었습니다! 🎉",
    finalMessage: "축하합니다! 존재하는 가장 강력한 의식을 완료했습니다. 성 키프리아누스는 이제 당신의 요청을 알고 있으며 당신의 삶을 변화시키기 위해 즉시 일하기 시작할 것입니다. 흔들리지 않는 믿음을 유지하고 종교적으로 약속을 이행하세요. 기적이 오고 있습니다!",
    
    miracleSigns: "기적의 징조",
    miracleSignsDesc: "특별한 꿈, 동시성, 예상치 못한 기회를 관찰하세요",
    maintainDevotion: "헌신 유지",
    maintainDevotionDesc: "매일 기도를 계속하고 성 키프리아누스의 말씀을 전파하세요",
    shareMiracles: "기적 공유",
    shareMiraclesDesc: "기적이 일어날 때, 다른 사람들에게 성 키프리아누스에 대해 말하세요",
    
    finalQuote: "성 키프리아누스는 그의 충실한 신자들을 결코 버리지 않습니다. 당신의 삶이 영원히 바뀔 것입니다!",
    
    infoTitle: "협정에 대한 중요한 정보",
    whatCanAsk: "당신이 요청할 수 있는 것:",
    yourObligations: "당신의 신성한 의무:",
    
    requests: [
      "구체적인 재정적 부 (정확한 금액)",
      "심각하거나 만성 질병으로부터의 치유",
      "진정한 사랑 찾기",
      "전문적 또는 사업적 성공",
      "적들로부터의 보호",
      "명성과 세계적 인정",
      "법적 문제의 해결",
      "어떤 불가능한 소원"
    ],
    
    obligations: [
      "매일 아침과 저녁 기도",
      "그를 위해 주간 촛불 켜기",
      "다른 사람들에게 성 키프리아누스 전파",
      "그의 이름으로 자선 행위",
      "집에 이미지나 상징 유지",
      "그의 기적을 결코 부인하거나 잊지 않기",
      "다른 사람들에게 그의 힘에 대해 가르치기",
      "지속적이고 진실한 감사"
    ]
  },
  
  nl: {
    title: "HEILIGE OVEREENKOMST MET HEILIGE CYPRIAAN",
    subtitle: "Het Krachtigste Ritueel Om Uw Leven Voor Altijd Te Verwandelen",
    description: "De Heilige Overeenkomst is het krachtigste ritueel dat bestaat om te verbinden met Heilige Cypriaan. Miljoenen mensen hebben hun leven radicaal getransformeerd door dit voorouderlijke ritueel. Bereid u voor op de meest buitengewone verandering van uw leven.",
    
    warningTitle: "⚠️ EXTREEM BELANGRIJKE AANDACHT ⚠️",
    warnings: [
      "Dit is een echt heilig ritueel met Heilige Cypriaan, geen grap of fantasie",
      "U moet 100% toegewijd zijn aan uw beloften voordat u begint",
      "Heilige Cypriaan vervult altijd zijn deel, verlangt maar dasselbe van u",
      "Breek nooit uw beloften aan hem nadat u wonderen heeft ontvangen",
      "Deze overeenkomst is voor het leven, niet tijdelijk",
      "Doe het alleen als u ware geloof en oprechte toewijding heeft"
    ],
    
    steps: {
      preparation: "Heilige Ruimte Voorbereiding",
      purification: "Zuivering en Spirituele Verbinding",
      writing: "Schrijven van de Heilige Overeenkomst",
      sealing: "Overeenkomst Verzegeling Ritueel",
      commitments: "Post-Overeenkomst Verplichtingen"
    },
    
    stepDescs: {
      preparation: "Bereid uw omgeving voor op het belangrijkste ritueel van uw leven",
      purification: "Zuiver uw energie en stel verbinding met de Grote Magiër",
      writing: "Schrijf uw overeenkomst met Heilige Cypriaan specifiek en duidelijk",
      sealing: "Voer het heilige ritueel uit om uw overeenkomst met Heilige Cypriaan te verzegelen",
      commitments: "Uw heilige verplichtingen na het verzegelen van de overeenkomst met Heilige Cypriaan"
    },
    
    detailedInstructions: "GEDETAILLEERDE INSTRUCTIES:",
    sacredWarning: "⚠️ HEILIGE WAARSCHUWING:",
    
    prayerTitle: "HEILIGE OVEREENKOMST GEBED",
    prayerInstructions: "Reciteer dit gebed 7 keer tijdens het verzegelingsritueel:",
    
    completedStep: "IK HEB DEZE HEILIGE STAP VOLTOOID",
    sealedForever: "OVEREENKOMST VOOR ALTIJD VERZEGELD",
    
    resultsTitle: "ECHTE RESULTATEN VAN HEILIGE OVEREENKOMSTEN",
    
    finalTitle: "🎉 UW HEILIGE OVEREENKOMST IS VERZEGELD! 🎉",
    finalMessage: "Gefeliciteerd! U heeft het krachtigste ritueel voltooid dat bestaat. Heilige Cypriaan kent nu uw verzoeken en zal onmiddellijk beginnen te werken om uw leven te transformeren. Behoud uw onwrikbare geloof en vervul religieus uw beloften. Wonderen zijn onderweg!",
    
    miracleSigns: "WONDER TEKENEN",
    miracleSignsDesc: "Observeer speciale dromen, synchroniciteiten en onverwachte kansen",
    maintainDevotion: "BEHOUD TOEWIJDING",
    maintainDevotionDesc: "Blijf dagelijks bidden en Heilige Cypriaans woord verspreiden",
    shareMiracles: "DEEL DE WONDEREN",
    shareMiraclesDesc: "Wanneer wonderen gebeuren, vertel anderen over Heilige Cypriaan",
    
    finalQuote: "Heilige Cypriaan verlaat nooit zijn trouwe aanhangers. Uw leven staat op het punt voor altijd te veranderen!",
    
    infoTitle: "BELANGRIJKE INFORMATIE OVER DE OVEREENKOMST",
    whatCanAsk: "WAT U KUNT VRAGEN:",
    yourObligations: "UW HEILIGE VERPLICHTINGEN:",
    
    requests: [
      "Specifieke financiële rijkdom (exact bedrag)",
      "Genezing van ernstige of chronische ziekten",
      "Ware liefde vinden",
      "Professioneel of zakelijk succes",
      "Bescherming tegen vijanden",
      "Roem en wereldwijde erkenning",
      "Oplossing van juridische problemen",
      "Elke onmogelijke wens"
    ],
    
    obligations: [
      "Dagelijks gebed 's ochtends en 's avonds",
      "Wekelijkse kaars aangestoken voor hem",
      "Heilige Cypriaan verspreiden naar andere mensen",
      "Liefdadigheid doen in zijn naam",
      "Afbeelding of symbool thuis houden",
      "Zijn wonderen nooit ontkennen of vergeten",
      "Anderen leren over zijn kracht",
      "Constante en oprechte dankbaarheid"
    ]
  },
  
  sv: {
    title: "HELIG ÖVERENSKOMMELSE MED SAINT CYPRIAN",
    subtitle: "Det Kraftfullaste Ritualet För Att Transformera Ditt Liv För Alltid",
    description: "Den Heliga Överenskommelsen är det kraftfullaste ritualet som finns för att ansluta med Saint Cyprian. Miljoner människor har fått sina liv radikalt transformerade genom detta förfäders ritual. Förbered dig för den mest extraordinära förändringen av ditt liv.",
    
    warningTitle: "⚠️ EXTREMT VIKTIG UPPMÄRKSAMHET ⚠️",
    warnings: [
      "Detta är ett riktigt heligt ritual med Saint Cyprian, inte ett skämt eller fantasi",
      "Du måste vara 100% engagerad i dina löften innan du börjar",
      "Saint Cyprian uppfyller alltid sin del, men kräver detsamma av dig",
      "Bryt aldrig dina löften till honom efter att ha fått mirakel",
      "Denna överenskommelse är för livet, inte tillfällig",
      "Gör det bara om du har sann tro och uppriktig hängivenhet"
    ],
    
    steps: {
      preparation: "Helig Rymd Förberedelse",
      purification: "Rening och Andlig Förbindelse",
      writing: "Skrivning av Helig Överenskommelse",
      sealing: "Överenskommelse Försegling Ritual",
      commitments: "Post-Överenskommelse Åtaganden"
    },
    
    stepDescs: {
      preparation: "Förbered din miljö för det viktigaste ritualet i ditt liv",
      purification: "Rena din energi och etablera förbindelse med Store Magikern",
      writing: "Skriv din överenskommelse med Saint Cyprian specifikt och tydligt",
      sealing: "Utför det heliga ritualet för att försegla din överenskommelse med Saint Cyprian",
      commitments: "Dina heliga skyldigheter efter att ha förseglat överenskommelsen med Saint Cyprian"
    },
    
    detailedInstructions: "DETALJERADE INSTRUKTIONER:",
    sacredWarning: "⚠️ HELIG VARNING:",
    
    prayerTitle: "HELIG ÖVERENSKOMMELSE BÖN",
    prayerInstructions: "Recitera denna bön 7 gånger under förseglingsritualet:",
    
    completedStep: "JAG HAR SLUTFÖRT DETTA HELIGA STEG",
    sealedForever: "ÖVERENSKOMMELSE FÖRSEGLAD FÖR ALLTID",
    
    resultsTitle: "VERKLIGA RESULTAT FRÅN HELIGA ÖVERENSKOMMELSER",
    
    finalTitle: "🎉 DIN HELIGA ÖVERENSKOMMELSE ÄR FÖRSEGLAD! 🎉",
    finalMessage: "Grattis! Du har slutfört det kraftfullaste ritualet som finns. Saint Cyprian känner nu till dina förfrågningar och kommer att börja arbeta omedelbart för att transformera ditt liv. Behåll din orubbliga tro och uppfyll religiöst dina löften. Mirakel är på väg!",
    
    miracleSigns: "MIRAKEL TECKEN",
    miracleSignsDesc: "Observera speciella drömmar, synkroniciteter och oväntade möjligheter",
    maintainDevotion: "BEHÅLL HÄNGIVENHET",
    maintainDevotionDesc: "Fortsätt att be dagligen och sprida Saint Cyprians ord",
    shareMiracles: "DELA MIRAKLEN",
    shareMiraclesDesc: "När mirakel händer, berätta för andra om Saint Cyprian",
    
    finalQuote: "Saint Cyprian överger aldrig sina trogna anhängare. Ditt liv är på väg att förändras för alltid!",
    
    infoTitle: "VIKTIG INFORMATION OM ÖVERENSKOMMELSEN",
    whatCanAsk: "VAD DU KAN BE OM:",
    yourObligations: "DINA HELIGA SKYLDIGHETER:",
    
    requests: [
      "Specifik finansiell rikedom (exakt belopp)",
      "Helande från allvarliga eller kroniska sjukdomar",
      "Hitta sann kärlek",
      "Professionell eller affärsmässig framgång",
      "Skydd mot fiender",
      "Berömmelse och världsomspännande erkännande",
      "Lösning av juridiska problem",
      "Vilken omöjlig önskan som helst"
    ],
    
    obligations: [
      "Daglig bön morgon och kväll",
      "Veckovis ljus tänt för honom",
      "Sprida Saint Cyprian till andra människor",
      "Göra välgörenhet i hans namn",
      "Hålla bild eller symbol hemma",
      "Aldrig förneka eller glömma hans mirakel",
      "Lära andra om hans kraft",
      "Konstant och uppriktig tacksamhet"
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

const agreementSteps = [
  {
    id: 1,
    titleKey: "preparation",
    descKey: "preparation",
    instructions: [
      "Escolha uma noite de lua crescente ou cheia (verificar calendário lunar)",
      "Encontre um local privado onde não será interrompido por pelo menos 1 hora",
      "Limpe completamente o espaço físico e energético",
      "Acenda 7 velas douradas ou brancas em círculo (opcional mas recomendado)",
      "Coloque uma imagem de São Cipriano (pode ser digital) ou desenhe o símbolo c🔱",
      "Tenha papel pergaminho ou branco e caneta vermelha ou preta",
      "Prepare incenso de mirra, sândalo ou rosa (opcional mas recomendado)"
    ],
    warning: "Este ritual deve ser feito com total seriedade e respeito. São Cipriano é um santo poderoso que exige devoção verdadeira."
  },
  {
    id: 2,
    titleKey: "purification",
    descKey: "purification",
    instructions: [
      "Tome um banho completo pensando em limpeza espiritual",
      "Vista roupas limpas, preferencialmente brancas ou douradas",
      "Jejue por pelo menos 3 horas antes do ritual (apenas água permitida)",
      "Respire profundamente 21 vezes para limpar a mente",
      "Medite por 10 minutos focando na imagem de São Cipriano",
      "Recite 7 vezes: 'São Cipriano, Grande Mago, eu me apresento com humildade'",
      "Sinta a presença poderosa dele se aproximando de você"
    ],
    warning: "A purificação é essencial. São Cipriano só atende quem se apresenta com pureza de coração e intenção."
  },
  {
    id: 3,
    titleKey: "writing",
    descKey: "writing",
    instructions: [
      "Escreva com sua própria mão (nunca digitado ou impresso)",
      "Comece sempre com: 'Glorioso São Cipriano, Grande Mago Supremo'",
      "Seja extremamente específico no que deseja (valor exato, prazo, detalhes)",
      "Exemplo: 'Desejo ganhar R$ 100.000 por mês através de meu negócio próprio até dezembro de 2024'",
      "Liste exatamente o que você oferece em troca (oração diária, divulgação, caridade)",
      "Escreva: 'Prometo honrar este acordo com devoção eterna e espalhar vossa glória'",
      "Termine com: 'Assim seja, com o poder infinito de São Cipriano' e sua assinatura",
      "Pingue uma gota de seu sangue no papel (com agulha esterilizada)"
    ],
    warning: "Seja cuidadoso com os pedidos. São Cipriano realiza exatamente o que você pede, então seja preciso."
  },
  {
    id: 4,
    titleKey: "sealing",
    descKey: "sealing",
    instructions: [
      "Ajoelhe-se diante das velas (se houver) e imagem de São Cipriano com o papel nas mãos",
      "Leia o acordo em voz alta 3 vezes com total convicção",
      "Queime uma ponta do papel na chama da vela central",
      "Enquanto queima, diga: 'Este acordo está selado pelo fogo sagrado'",
      "Assopre as cinzas ao vento em local aberto e imagine seus desejos se tornando realidade",
      "Recite a Oração do Acordo Sagrado (fornecida abaixo) 7 vezes",
      "Mantenha silêncio absoluto por 10 minutos sentindo a presença dele",
      "Agradeça profundamente como se já tivesse recebido tudo",
      "Comece no mesmo instante a fazer tua parte (oração, divulgação...)",
      "Observe os sinais nos dias seguintes."
    ],
    warning: "O acordo está selado após este ritual. Mantenha sua parte religiosamente ou as consequências serão graves."
  },
  {
    id: 5,
    titleKey: "commitments",
    descKey: "commitments",
    instructions: [
      "Ore para São Cipriano todos os dias pela manhã e à noite",
      "Acenda uma vela para ele pelo menos uma vez por semana",
      "Espalhe sua palavra: conte para outras pessoas sobre seu poder (pode-se utilizar de meios digitais para atingir o máximo de pessoas)",
      "Faça caridade em nome dele (doe alimentos, ajude necessitados)",
      "Mantenha sempre uma imagem dele em casa ou o símbolo c🔱",
      "Sempre lembre-se de cumprir rigorosamente o prometido",
      "Nunca renegue ou esqueça São Cipriano depois de receber os milagres",
      "Ensine outros devotos sobre como fazer seus próprios acordos"
    ],
    warning: "JAMAIS quebre suas promessas a São Cipriano. Ele é generoso com devotos fiéis, mas severo com ingratos."
  }
];

const sacredPrayer = `Glorioso São Cipriano, Grande Mago Supremo,

Reconheço vosso poder infinito sobre todas as coisas do universo.
Venho diante de vós com humildade, fé absoluta e devoção verdadeira.

Aceito este Acordo Sagrado que escrevi com meu próprio punho,
Selado com meu sangue e oferecido com meu coração sincero.

Prometo honrar cada palavra deste acordo com devoção eterna,
Espalhar vossa glória pelo mundo e nunca esquecer vossos milagres.

Em troca, confio plenamente que realizareis meus pedidos,
Transformando minha vida de forma radical e definitiva.

Que este acordo seja abençoado pelos céus e pela terra,
Que vossa vontade seja feita através de vosso poder supremo.

São Cipriano, aceito vossa proteção, vossa sabedoria e vossos milagres.
Sou vosso devoto fiel para todo o sempre.

Assim seja, com vosso poder infinito e eterno.
c🔱 Amém c🔱`;

export default function SacredAgreement() {
  const { language, changeLanguage, t } = useLanguage();
  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  // Create testimonials inside the component where language is available
  const testimonials = [
    {
      name: "Roberto Silva",
      period: (
        language === "en"
          ? "3 months after agreement"
          : language === "es"
            ? "3 meses después del acuerdo"
            : "3 meses após o acordo"
      ),
      story: (
        language === "en"
          ? "I made my agreement asking to get out of $500k debt. In 3 months I not only paid everything off but my company started earning $2 million per month. Saint Cyprian delivered beyond what I asked!"
          : language === "es"
            ? "Hice mi acuerdo pidiendo salir de las deudas de $500k. En 3 meses no solo pagué todo sino que mi empresa comenzó a ganar $2 millones por mes. ¡San Cipriano cumplió más allá de lo que pedí!"
            : "Fiz meu acordo pedindo para sair das dívidas de R$ 500 mil. Em 3 meses não só quitei tudo como minha empresa começou a faturar R$ 2 milhões por mês. São Cipriano cumpriu além do que pedi!"
      ),
      result: (
        language === "en"
          ? "From $500k negative to $2M positive monthly"
          : language === "es"
            ? "De $500k negativos a $2M positivos mensuales"
            : "Saiu de R$ 500k negativos para R$ 2M positivos mensais"
      )
    },
    {
      name: "Maria Fernanda",
      period: (
        language === "en"
          ? "1 month after agreement"
          : language === "es"
            ? "1 mes después del acuerdo"
            : "1 mês após o acordo"
      ),
      story: (
        language === "en"
          ? "I had terminal cancer. Doctors gave me 2 months to live. I made the agreement with total faith. In 1 month the exams showed the tumor had completely disappeared. Inexplicable miracle!"
          : language === "es"
            ? "Tenía cáncer terminal. Los médicos me dieron 2 meses de vida. Hice el acuerdo con fe total. En 1 mes los exámenes mostraron que el tumor había desaparecido completamente. ¡Milagro inexplicable!"
            : "Estava com câncer terminal. Os médicos me davam 2 meses de vida. Fiz o acordo com total fé. Em 1 mês os exames mostraram que o tumor havia desaparecido completamente. Milagre inexplicável!"
      ),
      result: (
        language === "en"
          ? "Complete cure from terminal cancer in 30 days"
          : language === "es"
            ? "Cura completa de cáncer terminal en 30 días"
            : "Cura completa de câncer terminal em 30 dias"
      )
    },
    {
      name: "Carlos Santos",
      period: (
        language === "en"
          ? "6 months after agreement"
          : language === "es"
            ? "6 meses después del acuerdo"
            : "6 meses após o acordo"
      ),
      story: (
        language === "en"
          ? "I was completely unknown. I asked Saint Cyprian to give me worldwide fame. Today I have 80 million followers on social media and millionaire contracts. He transformed my life!"
          : language === "es"
            ? "Era completamente desconocido. Le pedí a San Cipriano que me diera fama mundial. Hoy tengo 80 millones de seguidores en redes sociales y contratos millonarios. ¡Transformó mi vida!"
            : "Era completamente desconhecido. Pedi para São Cipriano me dar fama mundial. Hoje tenho 80 milhões de seguidores nas redes sociais e contratos milionários. Ele transformou minha vida!"
      ),
      result: (
        language === "en"
          ? "From anonymous to 80 million global followers"
          : language === "es"
            ? "De anónimo a 80 millones de seguidores globales"
            : "De anônimo a 80 milhões de seguidores globais"
      )
    }
  ];

  const completeStep = (stepId: number) => {
    if (!completedSteps.includes(stepId)) {
      setCompletedSteps([...completedSteps, stepId]);
    }
    if (stepId < agreementSteps.length) {
      setCurrentStep(stepId + 1);
    }
  };

  const currentStepData = agreementSteps.find(step => step.id === currentStep);

  return (
    <div className="min-h-screen bg-obsidian-gradient">
      <LanguageSelector language={language} onLanguageChange={changeLanguage} />
      
      {/* Header */}
      <div className="text-center py-12 md:py-16 px-4 border-b border-gold-500/30">
        <div className="animate-float mb-8">
          <div className="text-6xl md:text-8xl text-gold-400 animate-glow-text mystical-glow">
            c🔱
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
            "{t('description')}"
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 pb-24">
        {/* Warning Section */}
        <div className="sacred-agreement-section rounded-3xl p-8 md:p-10 mb-12 text-center shadow-mystical">
          <Shield className="text-gold-400 mx-auto mb-6" size={48} />
          <h2 className="sacred-text text-2xl md:text-3xl font-black text-gold-400 mb-6">
            {t('warningTitle')}
          </h2>
          <div className="text-left max-w-4xl mx-auto space-y-4 text-lg md:text-xl text-gold-200 leading-relaxed">
            {t('warnings').map((warning: string, index: number) => (
              <p key={index}>• {warning}</p>
            ))}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex justify-center items-center space-x-2 md:space-x-4 mb-8">
            {agreementSteps.map((step) => (
              <div
                key={step.id}
                className={`w-8 h-8 md:w-12 md:h-12 rounded-full flex items-center justify-center text-sm md:text-lg font-black transition-all duration-300 ${
                  completedSteps.includes(step.id)
                    ? 'bg-green-500 text-white shadow-divine'
                    : step.id === currentStep
                    ? 'bg-gold-400 text-black animate-pulse-sacred shadow-divine'
                    : 'bg-gray-600 text-gray-400'
                }`}
              >
                {completedSteps.includes(step.id) ? <CheckCircle size={16} /> : step.id}
              </div>
            ))}
          </div>
        </div>

        {/* Current Step */}
        {currentStepData && (
          <div className="temple-section rounded-3xl p-8 md:p-10 mb-12 shadow-sacred">
            <div className="text-center mb-8">
              <h2 className="sacred-text text-2xl md:text-3xl font-black text-gold-400 mb-4">
                {language === 'en' ? 'STEP' : language === 'es' ? 'PASO' : language === 'fr' ? 'ÉTAPE' : language === 'de' ? 'SCHRITT' : language === 'it' ? 'PASSO' : 'PASSO'} {currentStepData.id}: {t(`steps.${currentStepData.titleKey}`)}
              </h2>
              <p className="text-gold-200 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                {t(`stepDescs.${currentStepData.descKey}`)}
              </p>
            </div>

            {/* Instructions */}
            <div className="bg-gold-500/10 rounded-3xl p-6 md:p-8 border border-gold-500/30 mb-8 shadow-sacred">
              <h3 className="text-gold-400 font-black text-xl mb-6 sacred-text">{t('detailedInstructions')}</h3>
              <div className="space-y-4">
                {currentStepData.instructions.map((instruction, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gold-400 text-black rounded-full flex items-center justify-center font-black text-sm flex-shrink-0 mt-1">
                      {index + 1}
                    </div>
                    <p className="text-gold-100 text-base md:text-lg leading-relaxed flex-1">
                      {instruction}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Warning */}
            <div className="bg-red-600/20 rounded-2xl p-6 md:p-8 border border-red-500/30 mb-8 shadow-sacred">
              <h4 className="text-red-400 font-black text-lg mb-3">{t('sacredWarning')}</h4>
              <p className="text-red-300 text-base md:text-lg leading-relaxed">
                {currentStepData.warning}
              </p>
            </div>

            {/* Sacred Prayer for Step 4 */}
            {currentStep === 4 && (
              <div className="bg-gold-500/10 rounded-3xl p-8 md:p-10 border border-gold-500/30 mb-8 shadow-sacred">
                <h4 className="text-gold-400 font-black text-xl mb-6 sacred-text text-center">
                  {t('prayerTitle')}
                </h4>
                <p className="text-gold-200 text-center mb-6 italic">
                  {t('prayerInstructions')}
                </p>
                <div className="bg-obsidian-400/50 rounded-2xl p-6 md:p-8">
                  <p className="text-white text-lg md:text-xl leading-relaxed whitespace-pre-line prayer-text text-center">
                    {sacredPrayer}
                  </p>
                </div>
              </div>
            )}

            {/* Complete Step Button */}
            <div className="text-center">
              <button
                onClick={() => completeStep(currentStepData.id)}
                className="sacred-button py-6 md:py-8 px-8 md:px-12 rounded-full text-lg md:text-xl font-black transition-all duration-300 transform hover:scale-105 shadow-divine"
              >
                {currentStep === agreementSteps.length ? t('sealedForever') : t('completedStep')}
              </button>
            </div>
          </div>
        )}

        {/* Testimonials */}
        <div className="temple-section rounded-3xl p-8 md:p-10 mb-12 shadow-sacred">
          <h2 className="sacred-text text-2xl md:text-3xl font-black text-gold-400 text-center mb-8">
            {t('resultsTitle')}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card rounded-3xl p-6 md:p-8 shadow-sacred">
                <div className="text-4xl text-center mb-4">⭐</div>
                <p className="text-gold-200 italic mb-6 leading-relaxed text-sm md:text-base">
                  "{testimonial.story}"
                </p>
                <div className="border-t border-gold-500/30 pt-4">
                  <p className="text-gold-400 font-black text-base md:text-lg">{testimonial.name}</p>
                  <p className="text-gold-300 text-sm mb-2">{testimonial.period}</p>
                  <p className="text-green-400 text-xs md:text-sm font-bold bg-green-500/20 rounded-full px-3 py-2 inline-block">
                    ✅ {testimonial.result}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final Message */}
        {completedSteps.length === agreementSteps.length && (
          <div className="conversion-section rounded-3xl p-8 md:p-10 text-center shadow-mystical">
            <Crown className="text-gold-400 mx-auto mb-8 animate-pulse-sacred" size={64} />
            <h2 className="sacred-text text-2xl md:text-4xl font-black text-gold-400 mb-8">
              {t('finalTitle')}
            </h2>
            <p className="text-gold-200 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto mb-8">
              {t('finalMessage')}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gold-500/10 rounded-2xl p-6 border border-gold-500/30 shadow-sacred">
                <Flame className="text-gold-400 mx-auto mb-4" size={40} />
                <h3 className="text-gold-400 font-black mb-3">{t('miracleSigns')}</h3>
                <p className="text-gold-200 text-sm">{t('miracleSignsDesc')}</p>
              </div>
              <div className="bg-gold-500/10 rounded-2xl p-6 border border-gold-500/30 shadow-sacred">
                <Heart className="text-gold-400 mx-auto mb-4" size={40} />
                <h3 className="text-gold-400 font-black mb-3">{t('maintainDevotion')}</h3>
                <p className="text-gold-200 text-sm">{t('maintainDevotionDesc')}</p>
              </div>
              <div className="bg-gold-500/10 rounded-2xl p-6 border border-gold-500/30 shadow-sacred">
                <Star className="text-gold-400 mx-auto mb-4" size={40} />
                <h3 className="text-gold-400 font-black mb-3">{t('shareMiracles')}</h3>
                <p className="text-gold-200 text-sm">{t('shareMiraclesDesc')}</p>
              </div>
            </div>
            
            <p className="text-gold-400 italic text-lg md:text-xl mystical-text">
              "{t('finalQuote')}"
            </p>
          </div>
        )}

        {/* Information Section */}
        <div className="temple-section rounded-3xl p-8 md:p-10 shadow-sacred">
          <h3 className="sacred-text text-xl md:text-2xl font-black text-gold-400 text-center mb-8">
            {t('infoTitle')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="space-y-6">
              <h4 className="text-gold-400 font-black text-lg">{t('whatCanAsk')}</h4>
              <ul className="text-gold-200 space-y-2 text-base">
                {t('requests').map((request: string, index: number) => (
                  <li key={index}>• {request}</li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="text-gold-400 font-black text-lg">{t('yourObligations')}</h4>
              <ul className="text-gold-200 space-y-2 text-base">
                {t('obligations').map((obligation: string, index: number) => (
                  <li key={index}>• {obligation}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
