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
    startFirstLesson: "COMEÇAR PRIMEIRA LIÇÃO AGORA MESMO",
    
    // Lesson Content Translations
    lessonContent: {
      module1: {
        lesson1: {
          title: "Por Que Escolher São Cipriano Como Seu Protetor",
          content: "São Cipriano é único porque ele conhece ambos os mundos: o místico ancestral e o divino cristão. Ele tem o poder de transformar qualquer situação impossível e realizar qualquer desejo, não importa quão difícil pareça. Sua história única de conversão do paganismo ao cristianismo lhe dá autoridade sobre todas as forças espirituais. Como grande mago convertido, ele compreende profundamente tanto as trevas quanto a luz, tornando-se o intercessor perfeito para quem busca proteção e transformação.",
          action: "Reflita sobre suas necessidades atuais e como São Cipriano pode transformar sua vida. Escreva em um papel três áreas específicas onde você precisa de ajuda divina."
        },
        lesson2: {
          title: "Fazendo Sua Primeira Conexão Sagrada",
          content: "A primeira conexão com São Cipriano deve ser feita com humildade e fé sincera. Prepare um espaço limpo e silencioso, acenda uma vela branca e fale diretamente com ele como falaria com um pai amoroso. Não há fórmulas complicadas - apenas sinceridade do coração. Conte suas necessidades, seus medos, suas esperanças. São Cipriano responde àqueles que o procuram com coração puro e intenção genuína de transformação espiritual.",
          action: "Hoje mesmo, encontre 10 minutos de silêncio. Acenda uma vela branca e converse com São Cipriano como se ele estivesse fisicamente presente ao seu lado."
        },
        lesson3: {
          title: "Reconhecendo os Sinais de Sua Presença",
          content: "São Cipriano se manifesta de várias formas sutis: através de sonhos vívidos, sincronicidades marcantes, proteção inexplicável em momentos perigosos, e uma sensação profunda de paz em meio às tempestades da vida. Aprenda a reconhecer sua linguagem espiritual. Ele pode enviar pessoas certas no momento certo, abrir portas que pareciam fechadas para sempre, ou simplesmente dar uma certeza interior de que tudo ficará bem.",
          action: "Mantenha um diário espiritual por uma semana. Anote todos os eventos 'coincidentes', sonhos marcantes e momentos de paz inexplicável que experimentar."
        }
      },
      module2: {
        lesson1: {
          title: "Oração Matinal Poderosa",
          content: "Comece cada dia estabelecendo uma conexão sagrada com São Cipriano. A oração matinal não deve ser mecânica, mas uma conversa íntima onde você entrega seu dia sob sua proteção. Peça orientação para decisões importantes, proteção contra energias negativas e abertura de caminhos para suas realizações. Esta prática matinal cria um escudo espiritual que o acompanha durante todo o dia, garantindo sua presença constante em sua jornada.",
          action: "Durante uma semana, levante-se 10 minutos mais cedo para dedicar tempo exclusivo à oração matinal com São Cipriano. Observe as mudanças em sua energia diária."
        },
        lesson2: {
          title: "Momento Sagrado do Meio-Dia",
          content: "O meio-dia é um momento de poder especial, quando o sol está em seu ápice e as energias espirituais são mais intensas. Use este momento para uma pausa sagrada de gratidão e renovação de fé. Mesmo que seja apenas um minuto, conecte-se com São Cipriano para agradecer pelas bênçãos da manhã e pedir força para completar o dia com excelência. Esta prática mantém sua vibração espiritual elevada durante todo o dia.",
          action: "Estabeleça um alarme para meio-dia todos os dias. Pare o que estiver fazendo por um minuto e faça uma oração de gratidão a São Cipriano."
        },
        lesson3: {
          title: "Gratidão Profunda da Noite",
          content: "A noite é o momento de encerramento sagrado, onde você revisa seu dia com gratidão profunda. Agradeça a São Cipriano por cada proteção, cada bênção, cada lição aprendida. Mesmo nos dias difíceis, encontre motivos para gratidão - talvez a dificuldade foi menor do que poderia ter sido graças à sua proteção. Esta prática noturna purifica sua alma e prepara terreno fértil para os milagres do dia seguinte.",
          action: "Antes de dormir, liste mentalmente cinco coisas específicas pelas quais você é grato a São Cipriano naquele dia. Sinta a gratidão realmente preenchendo seu coração."
        }
      },
      module3: {
        lesson1: {
          title: "Orações para Emergências e Crises",
          content: "Quando enfrentamos momentos de crise extrema, precisamos de orações poderosas que possam alcançar São Cipriano imediatamente. Nestas situações, a fé deve ser absoluta e as palavras devem sair do coração com total convicção. Em emergências financeiras, de saúde, relacionamentos ou proteção física, invoque o nome de São Cipriano com autoridade, lembrando-se de que ele tem poder sobre todas as situações impossíveis.",
          action: "Memorize uma oração curta mas poderosa para usar em emergências. Pratique recitá-la até que se torne automática em momentos de crise."
        },
        lesson2: {
          title: "Orações para Decisões Importantes",
          content: "Grandes decisões requerem sabedoria divina. Quando enfrentar escolhas que podem mudar sua vida - carreira, relacionamentos, mudanças importantes - peça a São Cipriano para iluminar seu caminho. Ele pode enviar sinais claros através de sonhos, pessoas sábias que aparecem em sua vida, ou simplesmente uma certeza interior profunda sobre qual caminho seguir. A chave é estar verdadeiramente aberto para receber a orientação, mesmo que seja diferente do que você inicialmente desejava.",
          action: "Antes de tomar qualquer decisão importante esta semana, passe pelo menos 15 minutos em oração pedindo orientação específica a São Cipriano. Aguarde sinais antes de agir."
        },
        lesson3: {
          title: "Orações para Manifestação de Desejos",
          content: "São Cipriano tem poder para manifestar desejos que parecem impossíveis, mas é essencial orar com fé absoluta e desapego ao resultado. Peça com especificidade - ele precisa entender exatamente o que você deseja. Mas também inclua sempre 'se for da Sua vontade divina', mostrando confiança em sua sabedoria superior. Às vezes, ele nos dá algo ainda melhor do que pedimos, porque vê possibilidades que nossa visão limitada não consegue perceber.",
          action: "Escolha um desejo específico e ore por ele diariamente durante uma semana, sempre incluindo abertura para que se manifeste da melhor forma possível segundo a vontade divina."
        }
      },
      module4: {
        lesson1: {
          title: "Jejum Sagrado e Purificação",
          content: "O jejum é uma prática espiritual poderosa que purifica corpo e alma, elevando nossa vibração espiritual e fortalecendo nossa conexão com São Cipriano. Não precisa ser extremo - pode começar jejuando uma refeição por semana ou evitando determinados alimentos por um dia. O importante é fazer como oferenda sagrada, não apenas como dieta. Durante o jejum, intensifique suas orações e meditações, usando a sensação de fome para lembrar-se de sua fome espiritual por transformação.",
          action: "Escolha um dia desta semana para fazer um jejum leve - pule uma refeição e dedique esse tempo extra à oração e reflexão espiritual."
        },
        lesson2: {
          title: "Vigília Noturna de Devoção",
          content: "A vigília noturna é uma das práticas mais poderosas para devotos avançados. Durante as horas silenciosas da madrugada, quando o mundo dorme, nossa conexão espiritual se aprofunda tremendamente. Escolha uma noite por mês para ficar acordado em oração, meditação e leitura espiritual. Este sacrifício de sono demonstra sua dedicação séria e permite receber revelações e bênçãos especiais que só vêm nos momentos de máxima entrega.",
          action: "Planeje uma vigília de 3-4 horas em uma noite desta semana. Prepare material de leitura espiritual, velas e água. Use o tempo para oração profunda e reflexão."
        },
        lesson3: {
          title: "Missão de Evangelização",
          content: "O devoto avançado compreende que receber bênçãos de São Cipriano implica também em compartilhá-las. Torne-se um instrumento de sua obra divina, falando sobre ele para pessoas que precisam de esperança e transformação. Não force - deixe que as oportunidades surjam naturalmente. Sua própria transformação será o testemunho mais poderoso. Quando as pessoas perguntarem sobre as mudanças positivas em sua vida, você terá a oportunidade natural de falar sobre São Cipriano.",
          action: "Esta semana, identifique uma pessoa em sua vida que parece precisar de esperança espiritual. Ore sobre como pode naturalmente compartilhar sua experiência com São Cipriano."
        }
      }
    }
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
    startFirstLesson: "START FIRST LESSON RIGHT NOW",
    
    lessonContent: {
      module1: {
        lesson1: {
          title: "Why Choose Saint Cyprian As Your Protector",
          content: "Saint Cyprian is unique because he knows both worlds: the mystical ancestral and the divine Christian. He has the power to transform any impossible situation and fulfill any desire, no matter how difficult it seems. His unique history of conversion from paganism to Christianity gives him authority over all spiritual forces. As a converted great mage, he deeply understands both darkness and light, making him the perfect intercessor for those seeking protection and transformation.",
          action: "Reflect on your current needs and how Saint Cyprian can transform your life. Write on paper three specific areas where you need divine help."
        },
        lesson2: {
          title: "Making Your First Sacred Connection",
          content: "The first connection with Saint Cyprian should be made with humility and sincere faith. Prepare a clean and quiet space, light a white candle and speak directly to him as you would speak to a loving father. There are no complicated formulas - just sincerity of heart. Tell your needs, your fears, your hopes. Saint Cyprian responds to those who seek him with pure heart and genuine intention for spiritual transformation.",
          action: "Today, find 10 minutes of silence. Light a white candle and talk to Saint Cyprian as if he were physically present beside you."
        },
        lesson3: {
          title: "Recognizing the Signs of His Presence",
          content: "Saint Cyprian manifests in various subtle ways: through vivid dreams, striking synchronicities, inexplicable protection in dangerous moments, and a deep sense of peace amid life's storms. Learn to recognize his spiritual language. He can send the right people at the right time, open doors that seemed forever closed, or simply give an inner certainty that everything will be fine.",
          action: "Keep a spiritual diary for a week. Write down all 'coincidental' events, striking dreams and moments of inexplicable peace you experience."
        }
      },
      module2: {
        lesson1: {
          title: "Powerful Morning Prayer",
          content: "Start each day by establishing a sacred connection with Saint Cyprian. Morning prayer should not be mechanical, but an intimate conversation where you surrender your day under his protection. Ask for guidance for important decisions, protection against negative energies and opening of paths for your achievements. This morning practice creates a spiritual shield that accompanies you throughout the day, ensuring his constant presence in your journey.",
          action: "For a week, wake up 10 minutes earlier to dedicate exclusive time to morning prayer with Saint Cyprian. Observe the changes in your daily energy."
        },
        lesson2: {
          title: "Sacred Noon Moment",
          content: "Noon is a moment of special power, when the sun is at its apex and spiritual energies are most intense. Use this moment for a sacred pause of gratitude and faith renewal. Even if it's just a minute, connect with Saint Cyprian to thank for morning blessings and ask for strength to complete the day with excellence. This practice keeps your spiritual vibration elevated throughout the day.",
          action: "Set an alarm for noon every day. Stop what you're doing for a minute and say a prayer of gratitude to Saint Cyprian."
        },
        lesson3: {
          title: "Deep Night Gratitude",
          content: "Night is the moment of sacred closure, where you review your day with deep gratitude. Thank Saint Cyprian for every protection, every blessing, every lesson learned. Even on difficult days, find reasons for gratitude - perhaps the difficulty was less than it could have been thanks to his protection. This nightly practice purifies your soul and prepares fertile ground for the miracles of the next day.",
          action: "Before sleeping, mentally list five specific things you are grateful to Saint Cyprian for that day. Feel gratitude really filling your heart."
        }
      },
      module3: {
        lesson1: {
          title: "Prayers for Emergencies and Crises",
          content: "When we face moments of extreme crisis, we need powerful prayers that can reach Saint Cyprian immediately. In these situations, faith must be absolute and words must come from the heart with total conviction. In financial, health, relationship or physical protection emergencies, invoke Saint Cyprian's name with authority, remembering that he has power over all impossible situations.",
          action: "Memorize a short but powerful prayer to use in emergencies. Practice reciting it until it becomes automatic in moments of crisis."
        },
        lesson2: {
          title: "Prayers for Important Decisions",
          content: "Great decisions require divine wisdom. When facing choices that can change your life - career, relationships, important changes - ask Saint Cyprian to illuminate your path. He can send clear signs through dreams, wise people who appear in your life, or simply a deep inner certainty about which path to follow. The key is being truly open to receiving guidance, even if it's different from what you initially wanted.",
          action: "Before making any important decision this week, spend at least 15 minutes in prayer asking for specific guidance from Saint Cyprian. Wait for signs before acting."
        },
        lesson3: {
          title: "Prayers for Desire Manifestation",
          content: "Saint Cyprian has power to manifest desires that seem impossible, but it's essential to pray with absolute faith and detachment from the result. Ask with specificity - he needs to understand exactly what you want. But also always include 'if it's Your divine will', showing trust in his superior wisdom. Sometimes, he gives us something even better than we ask for, because he sees possibilities that our limited vision cannot perceive.",
          action: "Choose a specific desire and pray for it daily for a week, always including openness for it to manifest in the best possible way according to divine will."
        }
      },
      module4: {
        lesson1: {
          title: "Sacred Fasting and Purification",
          content: "Fasting is a powerful spiritual practice that purifies body and soul, elevating our spiritual vibration and strengthening our connection with Saint Cyprian. It doesn't need to be extreme - you can start by fasting one meal per week or avoiding certain foods for a day. The important thing is to do it as a sacred offering, not just as a diet. During fasting, intensify your prayers and meditations, using the feeling of hunger to remind yourself of your spiritual hunger for transformation.",
          action: "Choose a day this week to do a light fast - skip a meal and dedicate that extra time to prayer and spiritual reflection."
        },
        lesson2: {
          title: "Nighttime Vigil of Devotion",
          content: "Nighttime vigil is one of the most powerful practices for advanced devotees. During the silent hours of dawn, when the world sleeps, our spiritual connection deepens tremendously. Choose one night per month to stay awake in prayer, meditation and spiritual reading. This sacrifice of sleep demonstrates your serious dedication and allows receiving special revelations and blessings that only come in moments of maximum surrender.",
          action: "Plan a 3-4 hour vigil on a night this week. Prepare spiritual reading material, candles and water. Use the time for deep prayer and reflection."
        },
        lesson3: {
          title: "Evangelization Mission",
          content: "The advanced devotee understands that receiving blessings from Saint Cyprian also implies sharing them. Become an instrument of his divine work, speaking about him to people who need hope and transformation. Don't force - let opportunities arise naturally. Your own transformation will be the most powerful testimony. When people ask about the positive changes in your life, you'll have the natural opportunity to speak about Saint Cyprian.",
          action: "This week, identify a person in your life who seems to need spiritual hope. Pray about how you can naturally share your experience with Saint Cyprian."
        }
      }
    }
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
    startFirstLesson: "COMENZAR PRIMERA LECCIÓN AHORA MISMO",
    
    lessonContent: {
      module1: {
        lesson1: {
          title: "Por Qué Elegir a San Cipriano Como Tu Protector",
          content: "San Cipriano es único porque conoce ambos mundos: el místico ancestral y el divino cristiano. Tiene el poder de transformar cualquier situación imposible y realizar cualquier deseo, sin importar cuán difícil parezca. Su historia única de conversión del paganismo al cristianismo le da autoridad sobre todas las fuerzas espirituales. Como gran mago convertido, comprende profundamente tanto las tinieblas como la luz, convirtiéndose en el intercesor perfecto para quienes buscan protección y transformación.",
          action: "Reflexiona sobre tus necesidades actuales y cómo San Cipriano puede transformar tu vida. Escribe en un papel tres áreas específicas donde necesitas ayuda divina."
        },
        lesson2: {
          title: "Haciendo Tu Primera Conexión Sagrada",
          content: "La primera conexión con San Cipriano debe hacerse con humildad y fe sincera. Prepara un espacio limpio y silencioso, enciende una vela blanca y háblale directamente como le hablarías a un padre amoroso. No hay fórmulas complicadas - solo sinceridad del corazón. Cuenta tus necesidades, tus miedos, tus esperanzas. San Cipriano responde a quienes lo buscan con corazón puro e intención genuina de transformación espiritual.",
          action: "Hoy mismo, encuentra 10 minutos de silencio. Enciende una vela blanca y conversa con San Cipriano como si estuviera físicamente presente a tu lado."
        },
        lesson3: {
          title: "Reconociendo las Señales de Su Presencia",
          content: "San Cipriano se manifiesta de varias formas sutiles: a través de sueños vívidos, sincronicidades impactantes, protección inexplicable en momentos peligrosos, y una sensación profunda de paz en medio de las tormentas de la vida. Aprende a reconocer su lenguaje espiritual. Puede enviar a las personas correctas en el momento correcto, abrir puertas que parecían cerradas para siempre, o simplemente dar una certeza interior de que todo estará bien.",
          action: "Mantén un diario espiritual durante una semana. Anota todos los eventos 'coincidentes', sueños impactantes y momentos de paz inexplicable que experimentes."
        }
      },
      module2: {
        lesson1: {
          title: "Oración Matutina Poderosa",
          content: "Comienza cada día estableciendo una conexión sagrada con San Cipriano. La oración matutina no debe ser mecánica, sino una conversación íntima donde entregas tu día bajo su protección. Pide orientación para decisiones importantes, protección contra energías negativas y apertura de caminos para tus realizaciones. Esta práctica matutina crea un escudo espiritual que te acompaña durante todo el día, garantizando su presencia constante en tu jornada.",
          action: "Durante una semana, levántate 10 minutos más temprano para dedicar tiempo exclusivo a la oración matutina con San Cipriano. Observa los cambios en tu energía diaria."
        },
        lesson2: {
          title: "Momento Sagrado del Mediodía",
          content: "El mediodía es un momento de poder especial, cuando el sol está en su cenit y las energías espirituales son más intensas. Usa este momento para una pausa sagrada de gratitud y renovación de fe. Aunque sea solo un minuto, conéctate con San Cipriano para agradecer por las bendiciones de la mañana y pedir fuerza para completar el día con excelencia. Esta práctica mantiene tu vibración espiritual elevada durante todo el día.",
          action: "Establece una alarma para el mediodía todos los días. Detén lo que estés haciendo por un minuto y haz una oración de gratitud a San Cipriano."
        },
        lesson3: {
          title: "Gratitud Profunda de la Noche",
          content: "La noche es el momento de cierre sagrado, donde revisas tu día con gratitud profunda. Agradece a San Cipriano por cada protección, cada bendición, cada lección aprendida. Incluso en los días difíciles, encuentra motivos para gratitud - tal vez la dificultad fue menor de lo que podría haber sido gracias a su protección. Esta práctica nocturna purifica tu alma y prepara terreno fértil para los milagros del día siguiente.",
          action: "Antes de dormir, enumera mentalmente cinco cosas específicas por las cuales estás agradecido a San Cipriano ese día. Siente la gratitud realmente llenando tu corazón."
        }
      },
      module3: {
        lesson1: {
          title: "Oraciones para Emergencias y Crisis",
          content: "Cuando enfrentamos momentos de crisis extrema, necesitamos oraciones poderosas que puedan alcanzar a San Cipriano inmediatamente. En estas situaciones, la fe debe ser absoluta y las palabras deben salir del corazón con total convicción. En emergencias financieras, de salud, relaciones o protección física, invoca el nombre de San Cipriano con autoridad, recordando que tiene poder sobre todas las situaciones imposibles.",
          action: "Memoriza una oración corta pero poderosa para usar en emergencias. Practica recitarla hasta que se vuelva automática en momentos de crisis."
        },
        lesson2: {
          title: "Oraciones para Decisiones Importantes",
          content: "Las grandes decisiones requieren sabiduría divina. Cuando enfrentes elecciones que pueden cambiar tu vida - carrera, relaciones, cambios importantes - pide a San Cipriano que ilumine tu camino. Puede enviar señales claras a través de sueños, personas sabias que aparecen en tu vida, o simplemente una certeza interior profunda sobre qué camino seguir. La clave es estar verdaderamente abierto para recibir la orientación, aunque sea diferente de lo que inicialmente deseabas.",
          action: "Antes de tomar cualquier decisión importante esta semana, pasa al menos 15 minutos en oración pidiendo orientación específica a San Cipriano. Espera señales antes de actuar."
        },
        lesson3: {
          title: "Oraciones para Manifestación de Deseos",
          content: "San Cipriano tiene poder para manifestar deseos que parecen imposibles, pero es esencial orar con fe absoluta y desapego al resultado. Pide con especificidad - necesita entender exactamente lo que deseas. Pero también incluye siempre 'si es Tu voluntad divina', mostrando confianza en su sabiduría superior. A veces, nos da algo aún mejor de lo que pedimos, porque ve posibilidades que nuestra visión limitada no puede percibir.",
          action: "Elige un deseo específico y ora por él diariamente durante una semana, siempre incluyendo apertura para que se manifieste de la mejor forma posible según la voluntad divina."
        }
      },
      module4: {
        lesson1: {
          title: "Ayuno Sagrado y Purificación",
          content: "El ayuno es una práctica espiritual poderosa que purifica cuerpo y alma, elevando nuestra vibración espiritual y fortaleciendo nuestra conexión con San Cipriano. No necesita ser extremo - puedes comenzar ayunando una comida por semana o evitando ciertos alimentos por un día. Lo importante es hacerlo como ofrenda sagrada, no solo como dieta. Durante el ayuno, intensifica tus oraciones y meditaciones, usando la sensación de hambre para recordar tu hambre espiritual por transformación.",
          action: "Elige un día de esta semana para hacer un ayuno ligero - salta una comida y dedica ese tiempo extra a la oración y reflexión espiritual."
        },
        lesson2: {
          title: "Vigilia Nocturna de Devoción",
          content: "La vigilia nocturna es una de las prácticas más poderosas para devotos avanzados. Durante las horas silenciosas de la madrugada, cuando el mundo duerme, nuestra conexión espiritual se profundiza tremendamente. Elige una noche por mes para quedarte despierto en oración, meditación y lectura espiritual. Este sacrificio de sueño demuestra tu dedicación seria y permite recibir revelaciones y bendiciones especiales que solo vienen en momentos de máxima entrega.",
          action: "Planifica una vigilia de 3-4 horas en una noche de esta semana. Prepara material de lectura espiritual, velas y agua. Usa el tiempo para oración profunda y reflexión."
        },
        lesson3: {
          title: "Misión de Evangelización",
          content: "El devoto avanzado comprende que recibir bendiciones de San Cipriano también implica compartirlas. Conviértete en un instrumento de su obra divina, hablando sobre él a personas que necesitan esperanza y transformación. No fuerces - deja que las oportunidades surjan naturalmente. Tu propia transformación será el testimonio más poderoso. Cuando las personas pregunten sobre los cambios positivos en tu vida, tendrás la oportunidad natural de hablar sobre San Cipriano.",
          action: "Esta semana, identifica a una persona en tu vida que parezca necesitar esperanza espiritual. Ora sobre cómo puedes compartir naturalmente tu experiencia con San Cipriano."
        }
      }
    }
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
    startFirstLesson: "COMMENCER LA PREMIÈRE LEÇON MAINTENANT",
    
    lessonContent: {
      module1: {
        lesson1: {
          title: "Pourquoi Choisir Saint Cyprien Comme Votre Protecteur",
          content: "Saint Cyprien est unique parce qu'il connaît les deux mondes : le mystique ancestral et le divin chrétien. Il a le pouvoir de transformer toute situation impossible et de réaliser tout désir, peu importe à quel point cela semble difficile. Son histoire unique de conversion du paganisme au christianisme lui donne autorité sur toutes les forces spirituelles. En tant que grand mage converti, il comprend profondément les ténèbres et la lumière, devenant l'intercesseur parfait pour ceux qui cherchent protection et transformation.",
          action: "Réfléchissez à vos besoins actuels et comment Saint Cyprien peut transformer votre vie. Écrivez sur papier trois domaines spécifiques où vous avez besoin d'aide divine."
        },
        lesson2: {
          title: "Faire Votre Première Connexion Sacrée",
          content: "La première connexion avec Saint Cyprien doit être faite avec humilité et foi sincère. Préparez un espace propre et silencieux, allumez une bougie blanche et parlez-lui directement comme vous parleriez à un père aimant. Il n'y a pas de formules compliquées - juste la sincérité du cœur. Racontez vos besoins, vos peurs, vos espoirs. Saint Cyprien répond à ceux qui le cherchent avec un cœur pur et une intention authentique de transformation spirituelle.",
          action: "Aujourd'hui, trouvez 10 minutes de silence. Allumez une bougie blanche et parlez à Saint Cyprien comme s'il était physiquement présent à vos côtés."
        },
        lesson3: {
          title: "Reconnaître les Signes de Sa Présence",
          content: "Saint Cyprien se manifeste de diverses manières subtiles : à travers des rêves vivaces, des synchronicités frappantes, une protection inexplicable dans des moments dangereux, et un sentiment profond de paix au milieu des tempêtes de la vie. Apprenez à reconnaître son langage spirituel. Il peut envoyer les bonnes personnes au bon moment, ouvrir des portes qui semblaient fermées à jamais, ou simplement donner une certitude intérieure que tout ira bien.",
          action: "Tenez un journal spirituel pendant une semaine. Notez tous les événements 'coïncidents', rêves frappants et moments de paix inexplicable que vous expérimentez."
        }
      },
      module2: {
        lesson1: {
          title: "Prière Mat​inale Puissante",
          content: "Commencez chaque jour en établissant une connexion sacrée avec Saint Cyprien. La prière matinale ne doit pas être mécanique, mais une conversation intime où vous remettez votre jour sous sa protection. Demandez guidance pour les décisions importantes, protection contre les énergies négatives et ouverture de chemins pour vos réalisations. Cette pratique matinale crée un bouclier spirituel qui vous accompagne toute la journée, garantissant sa présence constante dans votre voyage.",
          action: "Pendant une semaine, levez-vous 10 minutes plus tôt pour dédier du temps exclusif à la prière matinale avec Saint Cyprien. Observez les changements dans votre énergie quotidienne."
        },
        lesson2: {
          title: "Moment Sacré de Midi",
          content: "Midi est un moment de pouvoir spécial, quand le soleil est à son zénith et les énergies spirituelles sont les plus intenses. Utilisez ce moment pour une pause sacrée de gratitude et renouvellement de foi. Même si c'est juste une minute, connectez-vous avec Saint Cyprien pour remercier pour les bénédictions du matin et demander la force de compléter la journée avec excellence. Cette pratique maintient votre vibration spirituelle élevée toute la journée.",
          action: "Réglez une alarme pour midi chaque jour. Arrêtez ce que vous faites pendant une minute et faites une prière de gratitude à Saint Cyprien."
        },
        lesson3: {
          title: "Gratitude Profonde du Soir",
          content: "Le soir est le moment de clôture sacrée, où vous révisez votre journée avec gratitude profonde. Remerciez Saint Cyprien pour chaque protection, chaque bénédiction, chaque leçon apprise. Même dans les jours difficiles, trouvez des raisons de gratitude - peut-être la difficulté était moindre qu'elle aurait pu être grâce à sa protection. Cette pratique nocturne purifie votre âme et prépare un terrain fertile pour les miracles du jour suivant.",
          action: "Avant de dormir, énumérez mentalement cinq choses spécifiques pour lesquelles vous êtes reconnaissant à Saint Cyprien ce jour-là. Sentez la gratitude remplir vraiment votre cœur."
        }
      },
      module3: {
        lesson1: {
          title: "Prières pour Urgences et Crises",
          content: "Quand nous faisons face à des moments de crise extrême, nous avons besoin de prières puissantes qui peuvent atteindre Saint Cyprien immédiatement. Dans ces situations, la foi doit être absolue et les mots doivent venir du cœur avec conviction totale. Dans les urgences financières, de santé, relationnelles ou de protection physique, invoquez le nom de Saint Cyprien avec autorité, vous rappelant qu'il a pouvoir sur toutes les situations impossibles.",
          action: "Mémorisez une prière courte mais puissante à utiliser dans les urgences. Pratiquez la réciter jusqu'à ce qu'elle devienne automatique dans les moments de crise."
        },
        lesson2: {
          title: "Prières pour Décisions Importantes",
          content: "Les grandes décisions requièrent la sagesse divine. Quand vous faites face à des choix qui peuvent changer votre vie - carrière, relations, changements importants - demandez à Saint Cyprien d'illuminer votre chemin. Il peut envoyer des signes clairs à travers des rêves, des personnes sages qui apparaissent dans votre vie, ou simplement une certitude intérieure profonde sur quel chemin suivre. La clé est d'être vraiment ouvert à recevoir la guidance, même si elle est différente de ce que vous vouliez initialement.",
          action: "Avant de prendre toute décision importante cette semaine, passez au moins 15 minutes en prière demandant guidance spécifique à Saint Cyprien. Attendez les signes avant d'agir."
        },
        lesson3: {
          title: "Prières pour Manifestation de Désirs",
          content: "Saint Cyprien a le pouvoir de manifester des désirs qui semblent impossibles, mais il est essentiel de prier avec foi absolue et détachement du résultat. Demandez avec spécificité - il a besoin de comprendre exactement ce que vous voulez. Mais incluez aussi toujours 'si c'est Votre volonté divine', montrant confiance en sa sagesse supérieure. Parfois, il nous donne quelque chose d'encore mieux que ce que nous demandons, parce qu'il voit des possibilités que notre vision limitée ne peut percevoir.",
          action: "Choisissez un désir spécifique et priez pour lui quotidiennement pendant une semaine, incluant toujours l'ouverture pour qu'il se manifeste de la meilleure façon possible selon la volonté divine."
        }
      },
      module4: {
        lesson1: {
          title: "Jeûne Sacré et Purification",
          content: "Le jeûne est une pratique spirituelle puissante qui purifie corps et âme, élevant notre vibration spirituelle et renforçant notre connexion avec Saint Cyprien. Il n'a pas besoin d'être extrême - vous pouvez commencer en jeûnant un repas par semaine ou en évitant certains aliments pendant un jour. L'important est de le faire comme offrande sacrée, pas seulement comme régime. Pendant le jeûne, intensifiez vos prières et méditations, utilisant la sensation de faim pour vous rappeler votre faim spirituelle de transformation.",
          action: "Choisissez un jour cette semaine pour faire un jeûne léger - sautez un repas et dédiez ce temps supplémentaire à la prière et réflexion spirituelle."
        },
        lesson2: {
          title: "Veillée Nocturne de Dévotion",
          content: "La veillée nocturne est une des pratiques les plus puissantes pour les dévots avancés. Pendant les heures silencieuses de l'aube, quand le monde dort, notre connexion spirituelle s'approfondit énormément. Choisissez une nuit par mois pour rester éveillé en prière, méditation et lecture spirituelle. Ce sacrifice de sommeil démontre votre dédicace sérieuse et permet de recevoir des révélations et bénédictions spéciales qui ne viennent que dans les moments de maximum abandon.",
          action: "Planifiez une veillée de 3-4 heures une nuit cette semaine. Préparez du matériel de lecture spirituelle, bougies et eau. Utilisez le temps pour prière profonde et réflexion."
        },
        lesson3: {
          title: "Mission d'Évangélisation",
          content: "Le dévot avancé comprend que recevoir des bénédictions de Saint Cyprien implique aussi de les partager. Devenez un instrument de son œuvre divine, parlant de lui aux personnes qui ont besoin d'espoir et transformation. Ne forcez pas - laissez les opportunités surgir naturellement. Votre propre transformation sera le témoignage le plus puissant. Quand les gens demandent sur les changements positifs dans votre vie, vous aurez l'opportunité naturelle de parler de Saint Cyprien.",
          action: "Cette semaine, identifiez une personne dans votre vie qui semble avoir besoin d'espoir spirituel. Priez sur comment vous pouvez naturellement partager votre expérience avec Saint Cyprien."
        }
      }
    }
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
    startFirstLesson: "ERSTE LEKTION JETZT BEGINNEN",
    
    lessonContent: {
      module1: {
        lesson1: {
          title: "Warum Heiligen Cyprian Als Ihren Beschützer Wählen",
          content: "Heiliger Cyprian ist einzigartig, weil er beide Welten kennt: die mystische ancestrale und die göttliche christliche. Er hat die Macht, jede unmögliche Situation zu verwandeln und jeden Wunsch zu erfüllen, egal wie schwierig es scheint. Seine einzigartige Geschichte der Bekehrung vom Heidentum zum Christentum gibt ihm Autorität über alle spirituellen Kräfte. Als bekehrter großer Magier versteht er sowohl Dunkelheit als auch Licht tiefgreifend und wird zum perfekten Fürsprecher für diejenigen, die Schutz und Transformation suchen.",
          action: "Reflektieren Sie über Ihre aktuellen Bedürfnisse und wie Heiliger Cyprian Ihr Leben transformieren kann. Schreiben Sie auf Papier drei spezifische Bereiche, wo Sie göttliche Hilfe benötigen."
        },
        lesson2: {
          title: "Ihre Erste Heilige Verbindung Herstellen",
          content: "Die erste Verbindung mit Heiligem Cyprian sollte mit Demut und aufrichtigem Glauben hergestellt werden. Bereiten Sie einen sauberen und stillen Raum vor, zünden Sie eine weiße Kerze an und sprechen Sie direkt mit ihm, wie Sie mit einem liebenden Vater sprechen würden. Es gibt keine komplizierten Formeln - nur Aufrichtigkeit des Herzens. Erzählen Sie Ihre Bedürfnisse, Ihre Ängste, Ihre Hoffnungen. Heiliger Cyprian antwortet denen, die ihn mit reinem Herzen und echter Absicht für spirituelle Transformation suchen.",
          action: "Finden Sie heute 10 Minuten Stille. Zünden Sie eine weiße Kerze an und sprechen Sie mit Heiligem Cyprian, als wäre er physisch neben Ihnen anwesend."
        },
        lesson3: {
          title: "Die Zeichen Seiner Anwesenheit Erkennen",
          content: "Heiliger Cyprian manifestiert sich auf verschiedene subtile Weise: durch lebhafte Träume, auffällige Synchronizitäten, unerklärlichen Schutz in gefährlichen Momenten und ein tiefes Gefühl des Friedens inmitten der Lebensstürme. Lernen Sie, seine spirituelle Sprache zu erkennen. Er kann die richtigen Menschen zur richtigen Zeit senden, Türen öffnen, die für immer verschlossen schienen, oder einfach eine innere Gewissheit geben, dass alles gut wird.",
          action: "Führen Sie eine Woche lang ein spirituelles Tagebuch. Notieren Sie alle 'zufälligen' Ereignisse, auffällige Träume und Momente unerklärlichen Friedens, die Sie erleben."
        }
      },
      module2: {
        lesson1: {
          title: "Mächtiges Morgengebet",
          content: "Beginnen Sie jeden Tag mit der Herstellung einer heiligen Verbindung zu Heiligem Cyprian. Das Morgengebet sollte nicht mechanisch sein, sondern ein intimes Gespräch, wo Sie Ihren Tag unter seinen Schutz stellen. Bitten Sie um Führung für wichtige Entscheidungen, Schutz vor negativen Energien und Öffnung von Wegen für Ihre Errungenschaften. Diese Morgenpraxis schafft einen spirituellen Schild, der Sie den ganzen Tag begleitet und seine konstante Anwesenheit in Ihrer Reise garantiert.",
          action: "Stehen Sie eine Woche lang 10 Minuten früher auf, um exklusive Zeit dem Morgengebet mit Heiligem Cyprian zu widmen. Beobachten Sie die Veränderungen in Ihrer täglichen Energie."
        },
        lesson2: {
          title: "Heiliger Mittags-Moment",
          content: "Mittag ist ein Moment besonderer Kraft, wenn die Sonne auf ihrem Höhepunkt steht und spirituelle Energien am intensivsten sind. Nutzen Sie diesen Moment für eine heilige Pause der Dankbarkeit und Glaubenserneuerung. Auch wenn es nur eine Minute ist, verbinden Sie sich mit Heiligem Cyprian, um für Morgensegnungen zu danken und um Kraft zu bitten, den Tag mit Exzellenz zu vollenden. Diese Praxis hält Ihre spirituelle Schwingung den ganzen Tag erhöht.",
          action: "Stellen Sie jeden Tag einen Alarm für Mittag. Stoppen Sie, was Sie tun, für eine Minute und sprechen Sie ein Dankgebet zu Heiligem Cyprian."
        },
        lesson3: {
          title: "Tiefe Nacht-Dankbarkeit",
          content: "Die Nacht ist der Moment des heiligen Abschlusses, wo Sie Ihren Tag mit tiefer Dankbarkeit überprüfen. Danken Sie Heiligem Cyprian für jeden Schutz, jeden Segen, jede gelernte Lektion. Selbst an schwierigen Tagen finden Sie Gründe für Dankbarkeit - vielleicht war die Schwierigkeit geringer, als sie hätte sein können, dank seines Schutzes. Diese nächtliche Praxis reinigt Ihre Seele und bereitet fruchtbaren Boden für die Wunder des nächsten Tages vor.",
          action: "Bevor Sie schlafen, zählen Sie mental fünf spezifische Dinge auf, für die Sie Heiligem Cyprian an diesem Tag dankbar sind. Fühlen Sie die Dankbarkeit wirklich Ihr Herz erfüllen."
        }
      },
      module3: {
        lesson1: {
          title: "Gebete für Notfälle und Krisen",
          content: "Wenn wir Momente extremer Krise erleben, brauchen wir mächtige Gebete, die Heiligen Cyprian sofort erreichen können. In diesen Situationen muss der Glaube absolut sein und die Worte müssen aus dem Herzen mit totaler Überzeugung kommen. In finanziellen, gesundheitlichen, beziehungsbezogenen oder körperlichen Schutz-Notfällen rufen Sie Heiligen Cyprians Namen mit Autorität an und erinnern sich daran, dass er Macht über alle unmöglichen Situationen hat.",
          action: "Memorieren Sie ein kurzes aber mächtiges Gebet für Notfälle. Üben Sie es zu rezitieren, bis es in Krisenmomenten automatisch wird."
        },
        lesson2: {
          title: "Gebete für Wichtige Entscheidungen",
          content: "Große Entscheidungen erfordern göttliche Weisheit. Wenn Sie Wahlen treffen, die Ihr Leben verändern können - Karriere, Beziehungen, wichtige Veränderungen - bitten Sie Heiligen Cyprian, Ihren Weg zu erleuchten. Er kann klare Zeichen durch Träume senden, weise Menschen, die in Ihrem Leben erscheinen, oder einfach eine tiefe innere Gewissheit über welchen Weg zu folgen. Der Schlüssel ist, wirklich offen zu sein, Führung zu empfangen, auch wenn sie anders ist als das, was Sie anfangs wollten.",
          action: "Bevor Sie diese Woche eine wichtige Entscheidung treffen, verbringen Sie mindestens 15 Minuten im Gebet und bitten um spezifische Führung von Heiligem Cyprian. Warten Sie auf Zeichen, bevor Sie handeln."
        },
        lesson3: {
          title: "Gebete für Wunsch-Manifestation",
          content: "Heiliger Cyprian hat die Macht, Wünsche zu manifestieren, die unmöglich scheinen, aber es ist wesentlich, mit absolutem Glauben und Loslösung vom Ergebnis zu beten. Bitten Sie mit Spezifität - er muss genau verstehen, was Sie wollen. Aber schließen Sie auch immer 'wenn es Ihr göttlicher Wille ist' ein, zeigend Vertrauen in seine überlegene Weisheit. Manchmal gibt er uns etwas noch Besseres als wir bitten, weil er Möglichkeiten sieht, die unsere begrenzte Vision nicht wahrnehmen kann.",
          action: "Wählen Sie einen spezifischen Wunsch und beten Sie täglich eine Woche dafür, immer Offenheit einschließend, dass er sich auf die bestmögliche Weise nach göttlichem Willen manifestiert."
        }
      },
      module4: {
        lesson1: {
          title: "Heiliges Fasten und Reinigung",
          content: "Fasten ist eine mächtige spirituelle Praxis, die Körper und Seele reinigt, unsere spirituelle Schwingung erhöht und unsere Verbindung zu Heiligem Cyprian stärkt. Es muss nicht extrem sein - Sie können beginnen, indem Sie eine Mahlzeit pro Woche fasten oder bestimmte Nahrungsmittel für einen Tag vermeiden. Das Wichtige ist, es als heilige Opfergabe zu tun, nicht nur als Diät. Während des Fastens intensivieren Sie Ihre Gebete und Meditationen, nutzen das Hungergefühl, um sich an Ihren spirituellen Hunger nach Transformation zu erinnern.",
          action: "Wählen Sie einen Tag diese Woche für ein leichtes Fasten - überspringen Sie eine Mahlzeit und widmen Sie diese zusätzliche Zeit Gebet und spiritueller Reflexion."
        },
        lesson2: {
          title: "Nächtliche Andachts-Vigil",
          content: "Die nächtliche Vigil ist eine der mächtigsten Praktiken für fortgeschrittene Anhänger. Während der stillen Stunden der Morgendämmerung, wenn die Welt schläft, vertieft sich unsere spirituelle Verbindung enorm. Wählen Sie eine Nacht pro Monat, um wach zu bleiben in Gebet, Meditation und spiritueller Lektüre. Dieses Schlafopfer demonstriert Ihre ernsthafte Hingabe und ermöglicht das Empfangen spezieller Offenbarungen und Segnungen, die nur in Momenten maximaler Hingabe kommen.",
          action: "Planen Sie eine 3-4 Stunden Vigil an einem Abend dieser Woche. Bereiten Sie spirituelles Lesematerial, Kerzen und Wasser vor. Nutzen Sie die Zeit für tiefes Gebet und Reflexion."
        },
        lesson3: {
          title: "Evangelisations-Mission",
          content: "Der fortgeschrittene Anhänger versteht, dass Segnungen von Heiligem Cyprian zu empfangen auch bedeutet, sie zu teilen. Werden Sie ein Instrument seines göttlichen Werks, sprechen Sie über ihn zu Menschen, die Hoffnung und Transformation brauchen. Zwingen Sie nicht - lassen Sie Gelegenheiten natürlich entstehen. Ihre eigene Transformation wird das mächtigste Zeugnis sein. Wenn Menschen nach den positiven Veränderungen in Ihrem Leben fragen, haben Sie die natürliche Gelegenheit, über Heiligen Cyprian zu sprechen.",
          action: "Diese Woche identifizieren Sie eine Person in Ihrem Leben, die spirituelle Hoffnung zu brauchen scheint. Beten Sie darüber, wie Sie natürlich Ihre Erfahrung mit Heiligem Cyprian teilen können."
        }
      }
    }
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
    startFirstLesson: "INIZIARE LA PRIMA LEZIONE ADESSO",
    
    lessonContent: {
      module1: {
        lesson1: {
          title: "Perché Scegliere San Cipriano Come Tuo Protettore",
          content: "San Cipriano è unico perché conosce entrambi i mondi: il mistico ancestrale e il divino cristiano. Ha il potere di trasformare qualsiasi situazione impossibile e realizzare qualsiasi desiderio, non importa quanto difficile possa sembrare. La sua storia unica di conversione dal paganesimo al cristianesimo gli dà autorità su tutte le forze spirituali. Come grande mago convertito, comprende profondamente sia le tenebre che la luce, diventando l'intercessore perfetto per coloro che cercano protezione e trasformazione.",
          action: "Rifletti sui tuoi bisogni attuali e su come San Cipriano può trasformare la tua vita. Scrivi su carta tre aree specifiche dove hai bisogno di aiuto divino."
        },
        lesson2: {
          title: "Fare La Tua Prima Connessione Sacra",
          content: "La prima connessione con San Cipriano deve essere fatta con umiltà e fede sincera. Prepara uno spazio pulito e silenzioso, accendi una candela bianca e parlagli direttamente come parleresti a un padre amorevole. Non ci sono formule complicate - solo sincerità del cuore. Racconta i tuoi bisogni, le tue paure, le tue speranze. San Cipriano risponde a coloro che lo cercano con cuore puro e intenzione genuina di trasformazione spirituale.",
          action: "Oggi stesso, trova 10 minuti di silenzio. Accendi una candela bianca e parla con San Cipriano come se fosse fisicamente presente accanto a te."
        },
        lesson3: {
          title: "Riconoscere i Segni della Sua Presenza",
          content: "San Cipriano si manifesta in vari modi sottili: attraverso sogni vividi, sincronicità sorprendenti, protezione inspiegabile in momenti pericolosi, e un senso profondo di pace in mezzo alle tempeste della vita. Impara a riconoscere il suo linguaggio spirituale. Può inviare le persone giuste al momento giusto, aprire porte che sembravano chiuse per sempre, o semplicemente dare una certezza interiore che tutto andrà bene.",
          action: "Tieni un diario spirituale per una settimana. Annota tutti gli eventi 'coincidenti', sogni sorprendenti e momenti di pace inspiegabile che sperimenti."
        }
      },
      module2: {
        lesson1: {
          title: "Preghiera Mattutina Potente",
          content: "Inizia ogni giorno stabilendo una connessione sacra con San Cipriano. La preghiera mattutina non deve essere meccanica, ma una conversazione intima dove affidi la tua giornata sotto la sua protezione. Chiedi guida per decisioni importanti, protezione contro energie negative e apertura di strade per le tue realizzazioni. Questa pratica mattutina crea uno scudo spirituale che ti accompagna durante tutta la giornata, garantendo la sua presenza costante nel tuo viaggio.",
          action: "Per una settimana, alzati 10 minuti prima per dedicare tempo esclusivo alla preghiera mattutina con San Cipriano. Osserva i cambiamenti nella tua energia quotidiana."
        },
        lesson2: {
          title: "Momento Sacro di Mezzogiorno",
          content: "Mezzogiorno è un momento di potere speciale, quando il sole è al suo apice e le energie spirituali sono più intense. Usa questo momento per una pausa sacra di gratitudine e rinnovamento della fede. Anche se è solo un minuto, connettiti con San Cipriano per ringraziare per le benedizioni del mattino e chiedere forza per completare la giornata con eccellenza. Questa pratica mantiene la tua vibrazione spirituale elevata durante tutta la giornata.",
          action: "Imposta un allarme per mezzogiorno ogni giorno. Ferma quello che stai facendo per un minuto e fai una preghiera di gratitudine a San Cipriano."
        },
        lesson3: {
          title: "Gratitudine Profonda della Notte",
          content: "La notte è il momento di chiusura sacra, dove rivedi la tua giornata con gratitudine profonda. Ringrazia San Cipriano per ogni protezione, ogni benedizione, ogni lezione imparata. Anche nei giorni difficili, trova motivi per gratitudine - forse la difficoltà è stata minore di quello che avrebbe potuto essere grazie alla sua protezione. Questa pratica notturna purifica la tua anima e prepara terreno fertile per i miracoli del giorno successivo.",
          action: "Prima di dormire, elenca mentalmente cinque cose specifiche per cui sei grato a San Cipriano quel giorno. Senti la gratitudine riempire veramente il tuo cuore."
        }
      },
      module3: {
        lesson1: {
          title: "Preghiere per Emergenze e Crisi",
          content: "Quando affrontiamo momenti di crisi estrema, abbiamo bisogno di preghiere potenti che possano raggiungere San Cipriano immediatamente. In queste situazioni, la fede deve essere assoluta e le parole devono venire dal cuore con totale convinzione. In emergenze finanziarie, di salute, relazioni o protezione fisica, invoca il nome di San Cipriano con autorità, ricordando che ha potere su tutte le situazioni impossibili.",
          action: "Memorizza una preghiera breve ma potente da usare nelle emergenze. Pratica a recitarla finché non diventa automatica nei momenti di crisi."
        },
        lesson2: {
          title: "Preghiere per Decisioni Importanti",
          content: "Le grandi decisioni richiedono saggezza divina. Quando affronti scelte che possono cambiare la tua vita - carriera, relazioni, cambiamenti importanti - chiedi a San Cipriano di illuminare il tuo cammino. Può inviare segni chiari attraverso sogni, persone sagge che appaiono nella tua vita, o semplicemente una certezza interiore profonda su quale strada seguire. La chiave è essere veramente aperto a ricevere la guida, anche se è diversa da quello che inizialmente volevi.",
          action: "Prima di prendere qualsiasi decisione importante questa settimana, passa almeno 15 minuti in preghiera chiedendo guida specifica a San Cipriano. Aspetta i segni prima di agire."
        },
        lesson3: {
          title: "Preghiere per Manifestazione di Desideri",
          content: "San Cipriano ha il potere di manifestare desideri che sembrano impossibili, ma è essenziale pregare con fede assoluta e distacco dal risultato. Chiedi con specificità - ha bisogno di capire esattamente cosa vuoi. Ma includi sempre anche 'se è la Tua volontà divina', mostrando fiducia nella sua saggezza superiore. A volte, ci dà qualcosa di ancora meglio di quello che chiediamo, perché vede possibilità che la nostra visione limitata non può percepire.",
          action: "Scegli un desiderio specifico e prega per esso quotidianamente per una settimana, includendo sempre apertura perché si manifesti nel modo migliore possibile secondo la volontà divina."
        }
      },
      module4: {
        lesson1: {
          title: "Digiuno Sacro e Purificazione",
          content: "Il digiuno è una pratica spirituale potente che purifica corpo e anima, elevando la nostra vibrazione spirituale e rafforzando la nostra connessione con San Cipriano. Non deve essere estremo - puoi iniziare digiunando un pasto a settimana o evitando certi cibi per un giorno. L'importante è farlo come offerta sacra, non solo come dieta. Durante il digiuno, intensifica le tue preghiere e meditazioni, usando la sensazione di fame per ricordarti della tua fame spirituale di trasformazione.",
          action: "Scegli un giorno questa settimana per fare un digiuno leggero - salta un pasto e dedica quel tempo extra alla preghiera e riflessione spirituale."
        },
        lesson2: {
          title: "Veglia Notturna di Devozione",
          content: "La veglia notturna è una delle pratiche più potenti per devoti avanzati. Durante le ore silenziose dell'alba, quando il mondo dorme, la nostra connessione spirituale si approfondisce tremendamente. Scegli una notte al mese per rimanere sveglio in preghiera, meditazione e lettura spirituale. Questo sacrificio del sonno dimostra la tua dedicazione seria e permette di ricevere rivelazioni e benedizioni speciali che vengono solo nei momenti di massima resa.",
          action: "Pianifica una veglia di 3-4 ore in una notte di questa settimana. Prepara materiale di lettura spirituale, candele e acqua. Usa il tempo per preghiera profonda e riflessione."
        },
        lesson3: {
          title: "Missione di Evangelizzazione",
          content: "Il devoto avanzato comprende che ricevere benedizioni da San Cipriano implica anche condividerle. Diventa uno strumento della sua opera divina, parlando di lui a persone che hanno bisogno di speranza e trasformazione. Non forzare - lascia che le opportunità sorgano naturalmente. La tua stessa trasformazione sarà la testimonianza più potente. Quando le persone chiedono dei cambiamenti positivi nella tua vita, avrai l'opportunità naturale di parlare di San Cipriano.",
          action: "Questa settimana, identifica una persona nella tua vita che sembra aver bisogno di speranza spirituale. Prega su come puoi naturalmente condividere la tua esperienza con San Cipriano."
        }
      }
    }
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
    startFirstLesson: "НАЧАТЬ ПЕРВЫЙ УРОК ПРЯМО СЕЙЧАС",
    
    lessonContent: {
      module1: {
        lesson1: {
          title: "Почему Выбрать Святого Киприана Как Вашего Защитника",
          content: "Святой Киприан уникален, потому что он знает оба мира: мистический древний и божественный христианский. У него есть сила преобразовать любую невозможную ситуацию и исполнить любое желание, неважно, насколько трудным это кажется. Его уникальная история обращения от язычества к христианству дает ему власть над всеми духовными силами. Как обращенный великий маг, он глубоко понимает и тьму, и свет, становясь идеальным заступником для тех, кто ищет защиты и преобразования.",
          action: "Размышляйте о ваших текущих потребностях и о том, как Святой Киприан может преобразовать вашу жизнь. Напишите на бумаге три конкретные области, где вам нужна божественная помощь."
        },
        lesson2: {
          title: "Установление Вашей Первой Священной Связи",
          content: "Первая связь со Святым Киприаном должна быть установлена со смирением и искренней верой. Подготовьте чистое и тихое пространство, зажгите белую свечу и говорите с ним напрямую, как вы говорили бы с любящим отцом. Нет сложных формул - только искренность сердца. Расскажите ваши потребности, ваши страхи, ваши надежды. Святой Киприан отвечает тем, кто ищет его с чистым сердцем и подлинным намерением духовного преобразования.",
          action: "Сегодня же найдите 10 минут тишины. Зажгите белую свечу и говорите со Святым Киприаном, как если бы он физически присутствовал рядом с вами."
        },
        lesson3: {
          title: "Распознавание Знаков Его Присутствия",
          content: "Святой Киприан проявляется различными тонкими способами: через яркие сны, поразительные синхронности, необъяснимую защиту в опасные моменты и глубокое чувство мира среди жизненных бурь. Научитесь распознавать его духовный язык. Он может послать правильных людей в правильное время, открыть двери, которые казались навсегда закрытыми, или просто дать внутреннюю уверенность, что все будет хорошо.",
          action: "Ведите духовный дневник в течение недели. Записывайте все 'совпадающие' события, поразительные сны и моменты необъяснимого мира, которые вы испытываете."
        }
      },
      module2: {
        lesson1: {
          title: "Мощная Утренняя Молитва",
          content: "Начинайте каждый день, устанавливая священную связь со Святым Киприаном. Утренняя молитва не должна быть механической, но интимным разговором, где вы вверяете свой день под его защиту. Просите руководства для важных решений, защиты от негативных энергий и открытия путей для ваших достижений. Эта утренняя практика создает духовный щит, который сопровождает вас весь день, гарантируя его постоянное присутствие в вашем путешествии.",
          action: "В течение недели вставайте на 10 минут раньше, чтобы посвятить исключительное время утренней молитве со Святым Киприаном. Наблюдайте изменения в вашей ежедневной энергии."
        },
        lesson2: {
          title: "Священный Полуденный Момент",
          content: "Полдень - это момент особой силы, когда солнце в зените и духовные энергии наиболее интенсивны. Используйте этот момент для священной паузы благодарности и обновления веры. Даже если это всего минута, соединитесь со Святым Киприаном, чтобы поблагодарить за утренние благословения и попросить силы завершить день с превосходством. Эта практика поддерживает вашу духовную вибрацию повышенной весь день.",
          action: "Установите будильник на полдень каждый день. Остановите то, что делаете, на минуту и произнесите молитву благодарности Святому Киприану."
        },
        lesson3: {
          title: "Глубокая Ночная Благодарность",
          content: "Ночь - это момент священного завершения, где вы пересматриваете свой день с глубокой благодарностью. Благодарите Святого Киприана за каждую защиту, каждое благословение, каждый выученный урок. Даже в трудные дни находите причины для благодарности - возможно, трудность была меньше, чем могла бы быть благодаря его защите. Эта ночная практика очищает вашу душу и подготавливает плодородную почву для чудес следующего дня.",
          action: "Перед сном мысленно перечислите пять конкретных вещей, за которые вы благодарны Святому Киприану в этот день. Почувствуйте, как благодарность действительно наполняет ваше сердце."
        }
      },
      module3: {
        lesson1: {
          title: "Молитвы для Чрезвычайных Ситуаций и Кризисов",
          content: "Когда мы сталкиваемся с моментами крайнего кризиса, нам нужны мощные молитвы, которые могут немедленно достичь Святого Киприана. В этих ситуациях вера должна быть абсолютной, а слова должны исходить из сердца с полной убежденностью. В финансовых, здоровьесберегающих, отношенческих или физических защитных чрезвычайных ситуациях призывайте имя Святого Киприана с властью, помня, что у него есть сила над всеми невозможными ситуациями.",
          action: "Запомните короткую, но мощную молитву для использования в чрезвычайных ситуациях. Практикуйте ее произнесение, пока она не станет автоматической в моменты кризиса."
        },
        lesson2: {
          title: "Молитвы для Важных Решений",
          content: "Великие решения требуют божественной мудрости. Когда вы сталкиваетесь с выборами, которые могут изменить вашу жизнь - карьера, отношения, важные изменения - просите Святого Киприана осветить ваш путь. Он может послать ясные знаки через сны, мудрых людей, которые появляются в вашей жизни, или просто глубокую внутреннюю уверенность о том, какой путь следовать. Ключ в том, чтобы быть действительно открытым для получения руководства, даже если оно отличается от того, что вы изначально хотели.",
          action: "Прежде чем принять любое важное решение на этой неделе, проведите не менее 15 минут в молитве, прося конкретного руководства у Святого Киприана. Ждите знаков перед действием."
        },
        lesson3: {
          title: "Молитвы для Проявления Желаний",
          content: "Святой Киприан имеет силу проявлять желания, которые кажутся невозможными, но важно молиться с абсолютной верой и отрешенностью от результата. Просите с конкретностью - ему нужно точно понимать, что вы хотите. Но также всегда включайте 'если это Ваша божественная воля', показывая доверие к его высшей мудрости. Иногда он дает нам что-то еще лучше, чем мы просим, потому что видит возможности, которые наше ограниченное видение не может воспринять.",
          action: "Выберите конкретное желание и молитесь о нем ежедневно в течение недели, всегда включая открытость для того, чтобы оно проявилось наилучшим возможным способом согласно божественной воле."
        }
      },
      module4: {
        lesson1: {
          title: "Священный Пост и Очищение",
          content: "Пост - это мощная духовная практика, которая очищает тело и душу, повышая нашу духовную вибрацию и укрепляя нашу связь со Святым Киприаном. Он не должен быть экстремальным - вы можете начать с поста одного приема пищи в неделю или избегания определенных продуктов в течение дня. Важно делать это как священное приношение, а не просто как диету. Во время поста усиливайте ваши молитвы и медитации, используя чувство голода, чтобы напомнить себе о вашем духовном голоде по преобразованию.",
          action: "Выберите день на этой неделе для легкого поста - пропустите один прием пищи и посвятите это дополнительное время молитве и духовному размышлению."
        },
        lesson2: {
          title: "Ночное Бдение Преданности",
          content: "Ночное бдение - одна из самых мощных практик для продвинутых последователей. Во время тихих часов рассвета, когда мир спит, наша духовная связь углубляется tremendously. Выберите одну ночь в месяц, чтобы бодрствовать в молитве, медитации и духовном чтении. Эта жертва сна демонстрирует вашу серьезную преданность и позволяет получать особые откровения и благословения, которые приходят только в моменты максимальной отдачи.",
          action: "Запланируйте 3-4 часовое бдение в одну из ночей этой недели. Подготовьте материал для духовного чтения, свечи и воду. Используйте время для глубокой молитвы и размышления."
        },
        lesson3: {
          title: "Миссия Евангелизации",
          content: "Продвинутый последователь понимает, что получение благословений от Святого Киприана также подразумевает их разделение. Станьте инструментом его божественной работы, говоря о нем людям, которые нуждаются в надежде и преобразовании. Не принуждайте - позвольте возможностям возникать естественно. Ваше собственное преобразование будет самым мощным свидетельством. Когда люди спрашивают о положительных изменениях в вашей жизни, у вас будет естественная возможность говорить о Святом Киприане.",
          action: "На этой неделе определите человека в вашей жизни, который, кажется, нуждается в духовной надежде. Молитесь о том, как вы можете естественно поделиться своим опытом со Святым Киприаном."
        }
      }
    }
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
    startFirstLesson: "现在就开始第一课",
    
    lessonContent: {
      module1: {
        lesson1: {
          title: "为什么选择圣西普里安作为您的保护者",
          content: "圣西普里安是独特的，因为他了解两个世界：神秘的祖先世界和神圣的基督教世界。他有力量转化任何不可能的情况并实现任何愿望，无论看起来多么困难。他从异教转向基督教的独特历史给了他对所有精神力量的权威。作为一个转化的大法师，他深刻理解黑暗和光明，成为那些寻求保护和转化的人的完美代祷者。",
          action: "反思您当前的需求以及圣西普里安如何能够转化您的生活。在纸上写下您需要神圣帮助的三个具体领域。"
        },
        lesson2: {
          title: "建立您的第一次神圣连接",
          content: "与圣西普里安的第一次连接应该以谦卑和真诚的信仰进行。准备一个干净安静的空间，点燃一支白蜡烛，直接与他交谈，就像您与慈爱的父亲交谈一样。没有复杂的公式 - 只有心的真诚。告诉他您的需求、恐惧、希望。圣西普里安回应那些以纯洁的心和真正的精神转化意图寻求他的人。",
          action: "今天就找10分钟的安静时间。点燃一支白蜡烛，与圣西普里安交谈，就像他在您身边一样。"
        },
        lesson3: {
          title: "识别他存在的迹象",
          content: "圣西普里安以各种微妙的方式显现：通过生动的梦境、惊人的同步性、在危险时刻的无法解释的保护，以及在生活风暴中的深度平静感。学会识别他的精神语言。他可以在正确的时间派遣正确的人，打开似乎永远关闭的门，或者简单地给予内心的确信一切都会好的。",
          action: "保持一周的精神日记。记录所有'巧合'事件、惊人的梦境和您经历的无法解释的平静时刻。"
        }
      },
      module2: {
        lesson1: {
          title: "强大的晨祷",
          content: "通过与圣西普里安建立神圣连接来开始每一天。晨祷不应该是机械的，而应该是一次亲密的对话，您将您的一天置于他的保护之下。为重要决定寻求指导，保护免受负面能量，为您的成就开辟道路。这种晨间练习创造了一个精神盾牌，陪伴您整天，确保他在您旅程中的持续存在。",
          action: "一周内早起10分钟，专门用于与圣西普里安的晨祷。观察您日常能量的变化。"
        },
        lesson2: {
          title: "神圣的正午时刻",
          content: "正午是特殊力量的时刻，当太阳处于顶点，精神能量最强烈时。利用这个时刻进行神圣的感恩暂停和信仰更新。即使只是一分钟，与圣西普里安连接，感谢早晨的祝福并请求力量以卓越完成这一天。这种练习保持您的精神振动整天都很高。",
          action: "每天设置正午闹钟。停止您正在做的事情一分钟，向圣西普里安祈祷感恩。"
        },
        lesson3: {
          title: "深夜感恩",
          content: "夜晚是神圣结束的时刻，您以深深的感恩回顾您的一天。感谢圣西普里安的每一次保护、每一次祝福、每一次学到的教训。即使在困难的日子里，也要找到感恩的理由 - 也许困难比没有他的保护时要小。这种夜间练习净化您的灵魂，为第二天的奇迹准备肥沃的土壤。",
          action: "睡前，在心中列出您那天感谢圣西普里安的五件具体事情。感受感恩真正充满您的心。"
        }
      },
      module3: {
        lesson1: {
          title: "紧急情况和危机的祈祷",
          content: "当我们面临极端危机时刻时，我们需要能够立即到达圣西普里安的强大祈祷。在这些情况下，信仰必须是绝对的，话语必须以完全的信念从心中发出。在财务、健康、关系或身体保护紧急情况中，以权威呼唤圣西普里安的名字，记住他对所有不可能情况都有力量。",
          action: "记住一个简短但强大的祈祷用于紧急情况。练习背诵直到在危机时刻变成自动的。"
        },
        lesson2: {
          title: "重要决定的祈祷",
          content: "重大决定需要神圣智慧。当面临可能改变您生活的选择时 - 职业、关系、重要变化 - 请求圣西普里安照亮您的道路。他可以通过梦境、出现在您生活中的智慧人士发送清晰信号，或者简单地给予关于遵循哪条道路的深度内心确信。关键是真正开放接受指导，即使它与您最初想要的不同。",
          action: "本周在做任何重要决定之前，至少花15分钟祈祷，向圣西普里安寻求具体指导。行动前等待信号。"
        },
        lesson3: {
          title: "愿望显现的祈祷",
          content: "圣西普里安有力量显现看似不可能的愿望，但必须以绝对信仰和对结果的超脱来祈祷。具体地请求 - 他需要确切理解您想要什么。但也总是包括'如果这是您的神圣意志'，显示对他更高智慧的信任。有时，他给我们比我们要求的更好的东西，因为他看到我们有限视野无法感知的可能性。",
          action: "选择一个具体愿望，每天为它祈祷一周，总是包括开放性，让它以最好的可能方式根据神圣意志显现。"
        }
      },
      module4: {
        lesson1: {
          title: "神圣禁食和净化",
          content: "禁食是一种强大的精神练习，净化身体和灵魂，提升我们的精神振动并加强我们与圣西普里安的连接。它不需要极端 - 您可以从每周禁食一餐或一天避免某些食物开始。重要的是作为神圣奉献来做，而不仅仅是节食。在禁食期间，加强您的祈祷和冥想，利用饥饿感提醒自己对转化的精神饥渴。",
          action: "本周选择一天进行轻度禁食 - 跳过一餐，将额外时间用于祈祷和精神反思。"
        },
        lesson2: {
          title: "夜间奉献守夜",
          content: "夜间守夜是高级信徒最强大的练习之一。在黎明的安静时刻，当世界沉睡时，我们的精神连接极大地加深。每月选择一个夜晚保持清醒进行祈祷、冥想和精神阅读。这种睡眠牺牲展示了您的严肃奉献，并允许接收只在最大投降时刻才来的特殊启示和祝福。",
          action: "本周计划一个3-4小时的守夜。准备精神阅读材料、蜡烛和水。将时间用于深度祈祷和反思。"
        },
        lesson3: {
          title: "传道使命",
          content: "高级信徒理解从圣西普里安接受祝福也意味着分享它们。成为他神圣工作的工具，向需要希望和转化的人谈论他。不要强迫 - 让机会自然出现。您自己的转化将是最强大的见证。当人们询问您生活中的积极变化时，您将有自然机会谈论圣西普里安。",
          action: "本周，识别您生活中似乎需要精神希望的一个人。祈祷如何自然地分享您与圣西普里安的经历。"
        }
      }
    }
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
    startFirstLesson: "今すぐ最初のレッスンを始める",
    
    lessonContent: {
      module1: {
        lesson1: {
          title: "なぜ聖キプリアヌスをあなたの保護者として選ぶのか",
          content: "聖キプリアヌスは両方の世界を知っているため独特です：神秘的な祖先の世界と神聖なキリスト教の世界。彼はどんな不可能な状況も変革し、どんな願いも実現する力を持っています、それがどれほど困難に見えても。異教からキリスト教への彼の独特な改宗の歴史は、すべての精神的力に対する権威を与えています。改宗した偉大な魔法師として、彼は闇と光の両方を深く理解し、保護と変革を求める人々の完璧な仲裁者となっています。",
          action: "あなたの現在のニーズと聖キプリアヌスがあなたの人生をどのように変革できるかについて反省してください。紙に神聖な助けが必要な三つの具体的な領域を書いてください。"
        },
        lesson2: {
          title: "あなたの最初の神聖なつながりを作る",
          content: "聖キプリアヌスとの最初のつながりは謙遜と誠実な信仰で作られるべきです。清潔で静かな空間を準備し、白いろうそくを灯し、愛する父親に話すように直接彼に話してください。複雑な公式はありません - ただ心の誠実さだけです。あなたのニーズ、恐れ、希望を話してください。聖キプリアヌスは純粋な心と精神的変革への真の意図で彼を求める人々に応答します。",
          action: "今日、10分間の静寂を見つけてください。白いろうそくを灯し、聖キプリアヌスがあなたの隣に物理的に存在しているかのように話してください。"
        },
        lesson3: {
          title: "彼の存在の兆候を認識する",
          content: "聖キプリアヌスは様々な微妙な方法で現れます：鮮明な夢、印象的な同期性、危険な瞬間での説明のつかない保護、そして人生の嵐の中での深い平和感を通して。彼の精神的言語を認識することを学んでください。彼は適切な時に適切な人々を送ることができ、永遠に閉ざされているように見えた扉を開き、またはすべてがうまくいくという内なる確信を与えることができます。",
          action: "一週間精神的日記をつけてください。すべての'偶然の'出来事、印象的な夢、あなたが経験する説明のつかない平和の瞬間を記録してください。"
        }
      },
      module2: {
        lesson1: {
          title: "強力な朝の祈り",
          content: "聖キプリアヌスとの神聖なつながりを確立することで毎日を始めてください。朝の祈りは機械的であってはならず、あなたが彼の保護の下で一日を委ねる親密な会話であるべきです。重要な決定のための指導、負のエネルギーからの保護、あなたの達成のための道の開放を求めてください。この朝の実践は一日中あなたに付き添う精神的盾を作り、あなたの旅路での彼の絶え間ない存在を保証します。",
          action: "一週間、聖キプリアヌスとの朝の祈りに専用時間を捧げるために10分早く起きてください。あなたの日常エネルギーの変化を観察してください。"
        },
        lesson2: {
          title: "神聖な正午の瞬間",
          content: "正午は特別な力の瞬間で、太陽が頂点にあり精神的エネルギーが最も強烈な時です。この瞬間を感謝と信仰の更新の神聖な休息に使ってください。たとえ一分だけでも、聖キプリアヌスとつながって朝の祝福に感謝し、優秀さで一日を完了する力を求めてください。この実践はあなたの精神的振動を一日中高く保ちます。",
          action: "毎日正午にアラームを設定してください。一分間やっていることを止めて、聖キプリアヌスに感謝の祈りをしてください。"
        },
        lesson3: {
          title: "深い夜の感謝",
          content: "夜は神聖な終了の瞬間で、深い感謝であなたの一日を振り返る時です。すべての保護、すべての祝福、学んだすべての教訓について聖キプリアヌスに感謝してください。困難な日でも感謝の理由を見つけてください - おそらく困難は彼の保護のおかげで本来よりも少なかったのです。この夜の実践はあなたの魂を浄化し、翌日の奇跡のための肥沃な土壌を準備します。",
          action: "眠る前に、その日聖キプリアヌスに感謝する五つの具体的なことを心の中でリストしてください。感謝が本当にあなたの心を満たすのを感じてください。"
        }
      },
      module3: {
        lesson1: {
          title: "緊急事態と危機のための祈り",
          content: "極度の危機の瞬間に直面するとき、聖キプリアヌスに即座に届く強力な祈りが必要です。これらの状況では、信仰は絶対的でなければならず、言葉は完全な確信を持って心から出なければなりません。財政、健康、関係、または身体的保護の緊急事態では、聖キプリアヌスの名前を権威を持って呼び、彼がすべての不可能な状況に対して力を持っていることを思い出してください。",
          action: "緊急時に使用する短いが強力な祈りを記憶してください。危機の瞬間に自動的になるまで暗唱を練習してください。"
        },
        lesson2: {
          title: "重要な決定のための祈り",
          content: "大きな決定には神聖な知恵が必要です。あなたの人生を変える可能性のある選択に直面するとき - キャリア、関係、重要な変化 - 聖キプリアヌスにあなたの道を照らすよう求めてください。彼は夢、あなたの人生に現れる賢い人々を通して明確な兆候を送ることができ、またはどの道を辿るべきかについての深い内なる確信を与えることができます。鍵は、たとえそれがあなたが最初に望んでいたものと異なっていても、指導を受けることに本当に開かれていることです。",
          action: "今週重要な決定をする前に、聖キプリアヌスから具体的な指導を求めて少なくとも15分間祈りに費やしてください。行動する前に兆候を待ってください。"
        },
        lesson3: {
          title: "願いの実現のための祈り",
          content: "聖キプリアヌスは不可能に見える願いを実現する力を持っていますが、絶対的な信仰と結果への執着のなさで祈ることが不可欠です。具体性を持って求めてください - 彼はあなたが何を望んでいるかを正確に理解する必要があります。しかし常に'それがあなたの神聖な意志であるなら'も含めて、彼の優れた知恵への信頼を示してください。時々、彼は私たちが求めるよりもさらに良いものを与えてくれます、なぜなら彼は私たちの限られた視野では知覚できない可能性を見ているからです。",
          action: "具体的な願いを選び、一週間毎日それのために祈り、常に神聖な意志に従って最良の可能な方法で実現することへの開放性を含めてください。"
        }
      },
      module4: {
        lesson1: {
          title: "神聖な断食と浄化",
          content: "断食は体と魂を浄化し、私たちの精神的振動を高め、聖キプリアヌスとのつながりを強化する強力な精神的実践です。極端である必要はありません - 週に一食断食するか、一日特定の食べ物を避けることから始めることができます。重要なのは、単なるダイエットではなく神聖な捧げ物として行うことです。断食中は祈りと瞑想を強化し、空腹感を使って変革への精神的飢えを思い出してください。",
          action: "今週軽い断食をする日を選んでください - 一食抜いて、その余分な時間を祈りと精神的反省に捧げてください。"
        },
        lesson2: {
          title: "献身の夜間徹夜",
          content: "夜間徹夜は上級信者にとって最も強力な実践の一つです。世界が眠る夜明けの静かな時間中、私たちの精神的つながりは非常に深まります。月に一晩を選んで祈り、瞑想、精神的読書で起きていてください。この睡眠の犠牲はあなたの真剣な献身を示し、最大の降伏の瞬間にのみ来る特別な啓示と祝福を受け取ることを可能にします。",
          action: "今週の夜に3-4時間の徹夜を計画してください。精神的読書材料、ろうそく、水を準備してください。深い祈りと反省のために時間を使ってください。"
        },
        lesson3: {
          title: "伝道使命",
          content: "上級信者は聖キプリアヌスから祝福を受けることは、それらを分かち合うことも意味することを理解しています。彼の神聖な働きの道具となり、希望と変革を必要とする人々に彼について話してください。強制しないでください - 機会が自然に生じるようにしてください。あなた自身の変革が最も強力な証言となるでしょう。人々があなたの人生の積極的な変化について尋ねるとき、聖キプリアヌスについて話す自然な機会があるでしょう。",
          action: "今週、精神的希望を必要としているように見えるあなたの人生の人を特定してください。聖キプリアヌスとのあなたの経験を自然に分かち合う方法について祈ってください。"
        }
      }
    }
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
    startFirstLesson: "ابدأ الدرس الأول الآن",
    
    lessonContent: {
      module1: {
        lesson1: {
          title: "لماذا تختار القديس قبريانوس كحاميك",
          content: "القديس قبريانوس فريد لأنه يعرف كلا العالمين: العالم الصوفي الأجدادي والعالم المسيحي الإلهي. لديه القوة لتحويل أي موقف مستحيل وتحقيق أي رغبة، مهما بدت صعبة. تاريخه الفريد في التحول من الوثنية إلى المسيحية يمنحه السلطة على جميع القوى الروحية. كساحر عظيم متحول، يفهم بعمق كلاً من الظلام والنور، مما يجعله الشفيع المثالي لأولئك الذين يسعون للحماية والتحول.",
          action: "تأمل في احتياجاتك الحالية وكيف يمكن للقديس قبريانوس أن يحول حياتك. اكتب على ورقة ثلاث مناطق محددة تحتاج فيها للمساعدة الإلهية."
        },
        lesson2: {
          title: "إقامة اتصالك المقدس الأول",
          content: "يجب أن يتم الاتصال الأول مع القديس قبريانوس بتواضع وإيمان صادق. حضر مساحة نظيفة وهادئة، أشعل شمعة بيضاء وتحدث معه مباشرة كما تتحدث مع أب محب. لا توجد صيغ معقدة - فقط صدق القلب. أخبره احتياجاتك، مخاوفك، آمالك. القديس قبريانوس يستجيب لأولئك الذين يسعون إليه بقلب نقي ونية حقيقية للتحول الروحي.",
          action: "اليوم، اعثر على 10 دقائق من الصمت. أشعل شمعة بيضاء وتحدث مع القديس قبريانوس كما لو كان حاضراً جسدياً بجانبك."
        },
        lesson3: {
          title: "التعرف على علامات حضوره",
          content: "القديس قبريانوس يتجلى بطرق خفية مختلفة: من خلال الأحلام الحية، التزامنات المذهلة، الحماية غير المبررة في اللحظات الخطيرة، وشعور عميق بالسلام وسط عواصف الحياة. تعلم التعرف على لغته الروحية. يمكنه إرسال الأشخاص المناسبين في الوقت المناسب، فتح أبواب بدت مغلقة إلى الأبد، أو ببساطة إعطاء يقين داخلي أن كل شيء سيكون بخير.",
          action: "احتفظ بمذكرة روحية لمدة أسبوع. سجل جميع الأحداث 'المصادفة'، الأحلام المذهلة ولحظات السلام غير المبرر التي تختبرها."
        }
      },
      module2: {
        lesson1: {
          title: "صلاة الصباح القوية",
          content: "ابدأ كل يوم بإقامة اتصال مقدس مع القديس قبريانوس. صلاة الصباح يجب ألا تكون آلية، بل محادثة حميمة حيث تسلم يومك تحت حمايته. اطلب التوجيه للقرارات المهمة، الحماية من الطاقات السلبية وفتح طرق لإنجازاتك. هذه الممارسة الصباحية تخلق درعاً روحياً يرافقك طوال اليوم، مضموناً حضوره المستمر في رحلتك.",
          action: "لمدة أسبوع، استيقظ 10 دقائق أبكر لتكريس وقت حصري لصلاة الصباح مع القديس قبريانوس. لاحظ التغييرات في طاقتك اليومية."
        },
        lesson2: {
          title: "اللحظة المقدسة لمنتصف النهار",
          content: "منتصف النهار هو لحظة قوة خاصة، عندما تكون الشمس في أوجها والطاقات الروحية في أشد حالاتها. استخدم هذه اللحظة لوقفة مقدسة من الامتنان وتجديد الإيمان. حتى لو كانت دقيقة واحدة فقط، اتصل بالقديس قبريانوس لتشكر على بركات الصباح واطلب القوة لإكمال اليوم بامتياز. هذه الممارسة تحافظ على اهتزازك الروحي مرتفعاً طوال اليوم.",
          action: "اضبط منبهاً لمنتصف النهار كل يوم. توقف عما تفعله لدقيقة واحدة وقل صلاة امتنان للقديس قبريانوس."
        },
        lesson3: {
          title: "امتنان الليل العميق",
          content: "الليل هو لحظة الإغلاق المقدس، حيث تراجع يومك بامتنان عميق. اشكر القديس قبريانوس على كل حماية، كل بركة، كل درس تعلمته. حتى في الأيام الصعبة، اعثر على أسباب للامتنان - ربما كانت الصعوبة أقل مما كان يمكن أن تكون بفضل حمايته. هذه الممارسة الليلية تطهر روحك وتحضر أرضاً خصبة لمعجزات اليوم التالي.",
          action: "قبل النوم، اسرد ذهنياً خمسة أشياء محددة أنت ممتن للقديس قبريانوس عليها في ذلك اليوم. اشعر بالامتنان يملأ قلبك حقاً."
        }
      },
      module3: {
        lesson1: {
          title: "صلوات للطوارئ والأزمات",
          content: "عندما نواجه لحظات أزمة شديدة، نحتاج صلوات قوية يمكنها الوصول للقديس قبريانوس فوراً. في هذه المواقف، يجب أن يكون الإيمان مطلقاً والكلمات يجب أن تخرج من القلب بقناعة تامة. في طوارئ مالية، صحية، علاقات أو حماية جسدية، ادع اسم القديس قبريانوس بسلطة، متذكراً أن لديه قوة على جميع المواقف المستحيلة.",
          action: "احفظ صلاة قصيرة لكن قوية لاستخدامها في الطوارئ. مارس تلاوتها حتى تصبح تلقائية في لحظات الأزمة."
        },
        lesson2: {
          title: "صلوات للقرارات المهمة",
          content: "القرارات العظيمة تتطلب حكمة إلهية. عندما تواجه خيارات يمكن أن تغير حياتك - مهنة، علاقات، تغييرات مهمة - اطلب من القديس قبريانوس أن ينير طريقك. يمكنه إرسال إشارات واضحة من خلال الأحلام، أشخاص حكماء يظهرون في حياتك، أو ببساطة يقين داخلي عميق حول أي طريق تتبع. المفتاح هو أن تكون منفتحاً حقاً لتلقي التوجيه، حتى لو كان مختلفاً عما أردته في البداية.",
          action: "قبل اتخاذ أي قرار مهم هذا الأسبوع، اقض على الأقل 15 دقيقة في الصلاة طالباً توجيهاً محدداً من القديس قبريانوس. انتظر الإشارات قبل التصرف."
        },
        lesson3: {
          title: "صلوات لتجسيد الرغبات",
          content: "القديس قبريانوس لديه قوة لتجسيد رغبات تبدو مستحيلة، لكن من الضروري الصلاة بإيمان مطلق وانفصال عن النتيجة. اطلب بتحديد - يحتاج لفهم ما تريده بالضبط. لكن اشمل دائماً أيضاً 'إذا كانت مشيئتك الإلهية'، مظهراً ثقة في حكمته العليا. أحياناً، يعطينا شيئاً أفضل حتى مما نطلب، لأنه يرى إمكانيات لا تستطيع رؤيتنا المحدودة إدراكها.",
          action: "اختر رغبة محددة وصل من أجلها يومياً لمدة أسبوع، مشملاً دائماً انفتاحاً لتتجسد بأفضل طريقة ممكنة وفقاً للمشيئة الإلهية."
        }
      },
      module4: {
        lesson1: {
          title: "الصوم المقدس والتطهير",
          content: "الصوم ممارسة روحية قوية تطهر الجسد والروح، ترفع اهتزازنا الروحي وتقوي اتصالنا بالقديس قبريانوس. لا يحتاج لأن يكون متطرفاً - يمكنك البدء بصوم وجبة واحدة أسبوعياً أو تجنب أطعمة معينة ليوم واحد. المهم هو فعله كقربان مقدس، وليس فقط كحمية. أثناء الصوم، كثف صلواتك وتأملاتك، مستخدماً شعور الجوع لتذكر جوعك الروحي للتحول.",
          action: "اختر يوماً هذا الأسبوع لصوم خفيف - تخط وجبة واكرس ذلك الوقت الإضافي للصلاة والتأمل الروحي."
        },
        lesson2: {
          title: "سهرة ليلية للتفاني",
          content: "السهرة الليلية واحدة من أقوى الممارسات للمعبدين المتقدمين. أثناء ساعات الفجر الصامتة، عندما ينام العالم، يتعمق اتصالنا الروحي بشكل هائل. اختر ليلة واحدة شهرياً للبقاء مستيقظاً في الصلاة والتأمل والقراءة الروحية. هذه التضحية بالنوم تظهر تفانيك الجدي وتسمح بتلقي وحي وبركات خاصة تأتي فقط في لحظات الاستسلام الأقصى.",
          action: "خطط لسهرة 3-4 ساعات في إحدى ليالي هذا الأسبوع. حضر مواد قراءة روحية، شموع وماء. استخدم الوقت للصلاة العميقة والتأمل."
        },
        lesson3: {
          title: "مهمة التبشير",
          content: "المعبد المتقدم يفهم أن تلقي البركات من القديس قبريانوس يعني أيضاً مشاركتها. اصبح أداة لعمله الإلهي، متحدثاً عنه للأشخاص الذين يحتاجون الأمل والتحول. لا تجبر - دع الفرص تنشأ طبيعياً. تحولك الشخصي سيكون الشهادة الأقوى. عندما يسأل الناس عن التغييرات الإيجابية في حياتك، ستحصل على الفرصة الطبيعية للحديث عن القديس قبريانوس.",
          action: "هذا الأسبوع، حدد شخصاً في حياتك يبدو أنه يحتاج أملاً روحياً. صل حول كيف يمكنك مشاركة تجربتك مع القديس قبريانوس طبيعياً."
        }
      }
    }
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
    startFirstLesson: "अभी पहला पाठ शुरू करें",
    
    lessonContent: {
      module1: {
        lesson1: {
          title: "संत साइप्रियन को अपना संरक्षक क्यों चुनें",
          content: "संत साइप्रियन अनूठे हैं क्योंकि वे दोनों संसारों को जानते हैं: रहस्यमय पूर्वज संसार और दिव्य ईसाई संसार। उनके पास किसी भी असंभव स्थिति को बदलने और किसी भी इच्छा को पूरा करने की शक्ति है, चाहे वह कितनी भी कठिन लगे। मूर्तिपूजा से ईसाई धर्म में उनके अनूठे रूपांतरण का इतिहास उन्हें सभी आध्यात्मिक शक्तियों पर अधिकार देता है। एक परिवर्तित महान जादूगर के रूप में, वे अंधकार और प्रकाश दोनों को गहराई से समझते हैं, जो उन्हें सुरक्षा और परिवर्तन चाहने वालों के लिए आदर्श मध्यस्थ बनाता है।",
          action: "अपनी वर्तमान आवश्यकताओं पर विचार करें और संत साइप्रियन आपके जीवन को कैसे बदल सकते हैं। कागज पर तीन विशिष्ट क्षेत्र लिखें जहां आपको दिव्य सहायता की आवश्यकता है।"
        },
        lesson2: {
          title: "अपना पहला पवित्र संबंध बनाना",
          content: "संत साइप्रियन के साथ पहला संबंध विनम्रता और सच्ची श्रद्धा के साथ बनाया जाना चाहिए। एक साफ और शांत स्थान तैयार करें, एक सफेद मोमबत्ती जलाएं और उनसे सीधे बात करें जैसे आप एक प्रेमी पिता से बात करते हैं। कोई जटिल सूत्र नहीं हैं - केवल हृदय की सच्चाई। अपनी आवश्यकताएं, अपने डर, अपनी आशाएं बताएं। संत साइप्रियन उन लोगों को जवाब देते हैं जो शुद्ध हृदय और आध्यात्मिक परिवर्तन के वास्तविक इरादे से उन्हें खोजते हैं।",
          action: "आज ही, 10 मिनट की शांति खोजें। एक सफेद मोमबत्ती जलाएं और संत साइप्रियन से बात करें जैसे कि वे आपके बगल में शारीरिक रूप से उपस्थित हों।"
        },
        lesson3: {
          title: "उनकी उपस्थिति के संकेतों को पहचानना",
          content: "संत साइप्रियन विभिन्न सूक्ष्म तरीकों से प्रकट होते हैं: जीवंत सपनों के माध्यम से, आश्चर्यजनक समकालिकताओं, खतरनाक क्षणों में अस्पष्ट सुरक्षा, और जीवन के तूफानों के बीच शांति की गहरी भावना। उनकी आध्यात्मिक भाषा को पहचानना सीखें। वे सही समय पर सही लोगों को भेज सकते हैं, हमेशा के लिए बंद लगने वाले दरवाजे खोल सकते हैं, या बस एक आंतरिक निश्चितता दे सकते हैं कि सब कुछ ठीक हो जाएगा।",
          action: "एक सप्ताह के लिए एक आध्यात्मिक डायरी रखें। सभी 'संयोग' घटनाओं, आश्चर्यजनक सपनों और अस्पष्ट शांति के क्षणों को रिकॉर्ड करें जिनका आप अनुभव करते हैं।"
        }
      },
      module2: {
        lesson1: {
          title: "शक्तिशाली सुबह की प्रार्थना",
          content: "संत साइप्रियन के साथ एक पवित्र संबंध स्थापित करके हर दिन की शुरुआत करें। सुबह की प्रार्थना यांत्रिक नहीं होनी चाहिए, बल्कि एक अंतरंग बातचीत होनी चाहिए जहां आप अपना दिन उनकी सुरक्षा में सौंपते हैं। महत्वपूर्ण निर्णयों के लिए मार्गदर्शन मांगें, नकारात्मक ऊर्जाओं से सुरक्षा और अपनी उपलब्धियों के लिए रास्ते खोलने की प्रार्थना करें। यह सुबह का अभ्यास एक आध्यात्मिक ढाल बनाता है जो पूरे दिन आपके साथ रहती है, आपकी यात्रा में उनकी निरंतर उपस्थिति सुनिश्चित करती है।",
          action: "एक सप्ताह के लिए, संत साइप्रियन के साथ सुबह की प्रार्थना के लिए विशेष समय समर्पित करने के लिए 10 मिनट पहले उठें। अपनी दैनिक ऊर्जा में बदलाव देखें।"
        },
        lesson2: {
          title: "दोपहर का पवित्र क्षण",
          content: "दोपहर विशेष शक्ति का क्षण है, जब सूर्य अपने शिखर पर होता है और आध्यात्मिक ऊर्जाएं सबसे तीव्र होती हैं। इस क्षण का उपयोग कृतज्ञता और विश्वास नवीकरण के पवित्र विराम के लिए करें। भले ही यह केवल एक मिनट हो, संत साइप्रियन से जुड़ें सुबह के आशीर्वाद के लिए धन्यवाद देने और उत्कृष्टता के साथ दिन पूरा करने की शक्ति मांगने के लिए। यह अभ्यास आपके आध्यात्मिक कंपन को पूरे दिन ऊंचा रखता है।",
          action: "हर दिन दोपहर के लिए अलार्म सेट करें। एक मिनट के लिए जो कुछ भी कर रहे हैं उसे रोकें और संत साइप्रियन को कृतज्ञता की प्रार्थना करें।"
        },
        lesson3: {
          title: "रात की गहरी कृतज्ञता",
          content: "रात पवित्र समापन का क्षण है, जहां आप गहरी कृतज्ञता के साथ अपने दिन की समीक्षा करते हैं। हर सुरक्षा, हर आशीर्वाद, हर सीखे गए पाठ के लिए संत साइप्रियन को धन्यवाद दें। कठिन दिनों में भी, कृतज्ञता के कारण खोजें - शायद कठिनाई उनकी सुरक्षा के कारण उससे कम थी जो हो सकती थी। यह रात्रि अभ्यास आपकी आत्मा को शुद्ध करता है और अगले दिन के चमत्कारों के लिए उपजाऊ भूमि तैयार करता है।",
          action: "सोने से पहले, मानसिक रूप से पांच विशिष्ट चीजों की सूची बनाएं जिनके लिए आप उस दिन संत साइप्रियन के आभारी हैं। कृतज्ञता को वास्तव में अपने दिल को भरते हुए महसूस करें।"
        }
      },
      module3: {
        lesson1: {
          title: "आपातकाल और संकट के लिए प्रार्थनाएं",
          content: "जब हम अत्यधिक संकट के क्षणों का सामना करते हैं, तो हमें शक्तिशाली प्रार्थनाओं की आवश्यकता होती है जो तुरंत संत साइप्रियन तक पहुंच सकें। इन स्थितियों में, विश्वास पूर्ण होना चाहिए और शब्द पूर्ण विश्वास के साथ दिल से निकलने चाहिए। वित्तीय, स्वास्थ्य, रिश्ते या शारीरिक सुरक्षा की आपातकालीन स्थितियों में, अधिकार के साथ संत साइप्रियन का नाम लें, यह याद रखते हुए कि उनके पास सभी असंभव स्थितियों पर शक्ति है।",
          action: "आपातकाल में उपयोग के लिए एक छोटी लेकिन शक्तिशाली प्रार्थना याद करें। संकट के क्षणों में यह स्वचालित हो जाने तक इसे पढ़ने का अभ्यास करें।"
        },
        lesson2: {
          title: "महत्वपूर्ण निर्णयों के लिए प्रार्थनाएं",
          content: "महान निर्णयों के लिए दिव्य ज्ञान की आवश्यकता होती है। जब आप ऐसे विकल्पों का सामना करते हैं जो आपके जीवन को बदल सकते हैं - करियर, रिश्ते, महत्वपूर्ण बदलाव - संत साइप्रियन से अपने रास्ते को रोशन करने के लिए कहें। वे सपनों के माध्यम से स्पष्ट संकेत भेज सकते हैं, बुद्धिमान लोग जो आपके जीवन में आते हैं, या बस एक गहरी आंतरिक निश्चितता कि कौन सा रास्ता अपनाना है। मुख्य बात यह है कि मार्गदर्शन प्राप्त करने के लिए वास्तव में खुले रहें, भले ही यह आपकी शुरुआती इच्छा से अलग हो।",
          action: "इस सप्ताह कोई भी महत्वपूर्ण निर्णय लेने से पहले, संत साइप्रियन से विशिष्ट मार्गदर्शन मांगते हुए कम से कम 15 मिनट प्रार्थना में बिताएं। कार्य करने से पहले संकेतों की प्रतीक्षा करें।"
        },
        lesson3: {
          title: "इच्छा प्रकटीकरण के लिए प्रार्थनाएं",
          content: "संत साइप्रियन के पास असंभव लगने वाली इच्छाओं को प्रकट करने की शक्ति है, लेकिन पूर्ण विश्वास और परिणाम से अनासक्ति के साथ प्रार्थना करना आवश्यक है। विशिष्टता के साथ मांगें - उन्हें यह समझने की जरूरत है कि आप वास्तव में क्या चाहते हैं। लेकिन हमेशा 'यदि यह आपकी दिव्य इच्छा है' भी शामिल करें, उनकी श्रेष्ठ बुद्धि में विश्वास दिखाते हुए। कभी-कभी, वे हमें उससे भी बेहतर चीज देते हैं जो हम मांगते हैं, क्योंकि वे उन संभावनाओं को देखते हैं जिन्हें हमारी सीमित दृष्टि नहीं देख सकती।",
          action: "एक विशिष्ट इच्छा चुनें और एक सप्ताह तक इसके लिए दैनिक प्रार्थना करें, हमेशा इस खुलेपन को शामिल करते हुए कि यह दिव्य इच्छा के अनुसार सर्वोत्तम संभावित तरीके से प्रकट हो।"
        }
      },
      module4: {
        lesson1: {
          title: "पवित्र उपवास और शुद्धिकरण",
          content: "उपवास एक शक्तिशाली आध्यात्मिक अभ्यास है जो शरीर और आत्मा को शुद्ध करता है, हमारे आध्यात्मिक कंपन को बढ़ाता है और संत साइप्रियन के साथ हमारे संबंध को मजबूत करता है। इसे चरम होने की जरूरत नहीं है - आप सप्ताह में एक भोजन का उपवास करके या एक दिन के लिए कुछ खाद्य पदार्थों से बचकर शुरुआत कर सकते हैं। महत्वपूर्ण बात यह है कि इसे पवित्र अर्पण के रूप में करें, केवल आहार के रूप में नहीं। उपवास के दौरान, अपनी प्रार्थनाओं और ध्यान को तेज करें, भूख की भावना का उपयोग करके अपनी परिवर्तन की आध्यात्मिक भूख को याद करें।",
          action: "इस सप्ताह हल्का उपवास करने के लिए एक दिन चुनें - एक भोजन छोड़ें और उस अतिरिक्त समय को प्रार्थना और आध्यात्मिक चिंतन के लिए समर्पित करें।"
        },
        lesson2: {
          title: "समर्पण की रात्रि जागरण",
          content: "रात्रि जागरण उन्नत भक्तों के लिए सबसे शक्तिशाली अभ्यासों में से एक है। भोर के मौन घंटों के दौरान, जब दुनिया सोती है, हमारा आध्यात्मिक संबंध बहुत गहरा हो जाता है। प्रार्थना, ध्यान और आध्यात्मिक पठन में जागते रहने के लिए महीने में एक रात चुनें। नींद का यह त्याग आपकी गंभीर भक्ति को दर्शाता है और विशेष रहस्योद्घाटन और आशीर्वाद प्राप्त करने की अनुमति देता है जो केवल अधिकतम समर्पण के क्षणों में आते हैं।",
          action: "इस सप्ताह की एक रात में 3-4 घंटे की जागरण की योजना बनाएं। आध्यात्मिक पठन सामग्री, मोमबत्तियां और पानी तैयार करें। गहरी प्रार्थना और चिंतन के लिए समय का उपयोग करें।"
        },
        lesson3: {
          title: "प्रचार मिशन",
          content: "उन्नत भक्त समझता है कि संत साइप्रियन से आशीर्वाद प्राप्त करने का मतलब उन्हें साझा करना भी है। उनके दिव्य कार्य का एक साधन बनें, उन लोगों से उनके बारे में बात करें जिन्हें आशा और परिवर्तन की आवश्यकता है। जबरदस्ती न करें - अवसरों को प्राकृतिक रूप से उत्पन्न होने दें। आपका अपना परिवर्तन सबसे शक्तिशाली गवाही होगी। जब लोग आपके जीवन में सकारात्मक बदलावों के बारे में पूछते हैं, तो आपके पास संत साइप्रियन के बारे में बात करने का प्राकृतिक अवसर होगा।",
          action: "इस सप्ताह, अपने जीवन में एक व्यक्ति की पहचान करें जिसे आध्यात्मिक आशा की आवश्यकता लगती है। प्रार्थना करें कि आप संत साइप्रियन के साथ अपने अनुभव को प्राकृतिक रूप से कैसे साझा कर सकते हैं।"
        }
      }
    }
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
    startFirstLesson: "지금 첫 번째 레슨 시작하기",
    
    lessonContent: {
      module1: {
        lesson1: {
          title: "성 키프리아누스를 당신의 보호자로 선택하는 이유",
          content: "성 키프리아누스는 두 세계를 모두 알고 있기 때문에 독특합니다: 신비로운 조상의 세계와 신성한 기독교 세계. 그는 어떤 불가능한 상황도 변화시키고 어떤 소원도 실현할 수 있는 힘을 가지고 있습니다, 아무리 어려워 보여도. 이교에서 기독교로의 그의 독특한 개종 역사는 그에게 모든 영적 힘에 대한 권위를 줍니다. 개종한 위대한 마법사로서, 그는 어둠과 빛을 모두 깊이 이해하여 보호와 변화를 추구하는 사람들의 완벽한 중재자가 됩니다.",
          action: "당신의 현재 필요와 성 키프리아누스가 어떻게 당신의 삶을 변화시킬 수 있는지 반성해보세요. 종이에 신성한 도움이 필요한 세 가지 구체적인 영역을 적으세요."
        },
        lesson2: {
          title: "첫 번째 신성한 연결 만들기",
          content: "성 키프리아누스와의 첫 번째 연결은 겸손과 진실한 믿음으로 이루어져야 합니다. 깨끗하고 조용한 공간을 준비하고, 흰 촛불을 켜고 사랑하는 아버지에게 말하듯 직접 그에게 말하세요. 복잡한 공식은 없습니다 - 오직 마음의 진실함만 있을 뿐입니다. 당신의 필요, 두려움, 희망을 말하세요. 성 키프리아누스는 순수한 마음과 영적 변화에 대한 진정한 의도로 그를 찾는 사람들에게 응답합니다.",
          action: "오늘, 10분간의 침묵을 찾으세요. 흰 촛불을 켜고 성 키프리아누스가 당신 옆에 물리적으로 존재하는 것처럼 대화하세요."
        },
        lesson3: {
          title: "그의 존재의 징조 인식하기",
          content: "성 키프리아누스는 다양한 미묘한 방식으로 나타납니다: 생생한 꿈, 놀라운 동시성, 위험한 순간의 설명할 수 없는 보호, 그리고 인생의 폭풍 속에서의 깊은 평화감을 통해. 그의 영적 언어를 인식하는 법을 배우세요. 그는 적절한 시간에 적절한 사람들을 보낼 수 있고, 영원히 닫힌 것처럼 보이는 문을 열 수 있으며, 또는 단순히 모든 것이 잘 될 것이라는 내적 확신을 줄 수 있습니다.",
          action: "일주일 동안 영적 일기를 유지하세요. 모든 '우연한' 사건들, 놀라운 꿈들, 그리고 당신이 경험하는 설명할 수 없는 평화의 순간들을 기록하세요."
        }
      },
      module2: {
        lesson1: {
          title: "강력한 아침 기도",
          content: "성 키프리아누스와 신성한 연결을 설정함으로써 매일을 시작하세요. 아침 기도는 기계적이어서는 안 되며, 당신이 그의 보호 아래 하루를 맡기는 친밀한 대화여야 합니다. 중요한 결정을 위한 지도, 부정적 에너지로부터의 보호, 그리고 당신의 성취를 위한 길의 개방을 요청하세요. 이 아침 실천은 하루 종일 당신과 함께하는 영적 방패를 만들어, 당신의 여정에서 그의 지속적인 존재를 보장합니다.",
          action: "일주일 동안, 성 키프리아누스와의 아침 기도에 전용 시간을 바치기 위해 10분 일찍 일어나세요. 당신의 일상 에너지 변화를 관찰하세요."
        },
        lesson2: {
          title: "신성한 정오의 순간",
          content: "정오는 특별한 힘의 순간으로, 태양이 정점에 있고 영적 에너지가 가장 강렬할 때입니다. 이 순간을 감사와 믿음 갱신의 신성한 휴식으로 사용하세요. 단 1분이라도, 성 키프리아누스와 연결하여 아침의 축복에 감사하고 하루를 우수함으로 완성할 힘을 요청하세요. 이 실천은 하루 종일 당신의 영적 진동을 높게 유지합니다.",
          action: "매일 정오에 알람을 설정하세요. 하고 있는 일을 1분간 멈추고 성 키프리아누스에게 감사의 기도를 하세요."
        },
        lesson3: {
          title: "깊은 밤의 감사",
          content: "밤은 신성한 마무리의 순간으로, 깊은 감사로 하루를 돌아보는 시간입니다. 모든 보호, 모든 축복, 배운 모든 교훈에 대해 성 키프리아누스에게 감사하세요. 어려운 날에도 감사할 이유를 찾으세요 - 아마도 그의 보호 덕분에 어려움이 있을 수 있었던 것보다 적었을 것입니다. 이 야간 실천은 당신의 영혼을 정화하고 다음 날의 기적을 위한 비옥한 토양을 준비합니다.",
          action: "잠들기 전에, 그날 성 키프리아누스에게 감사하는 다섯 가지 구체적인 것들을 마음속으로 나열하세요. 감사가 정말로 당신의 마음을 채우는 것을 느끼세요."
        }
      },
      module3: {
        lesson1: {
          title: "응급상황과 위기를 위한 기도",
          content: "극도의 위기 순간에 직면할 때, 우리는 성 키프리아누스에게 즉시 도달할 수 있는 강력한 기도가 필요합니다. 이런 상황에서는 믿음이 절대적이어야 하고 말들이 완전한 확신을 가지고 마음에서 나와야 합니다. 재정적, 건강, 관계 또는 신체적 보호 응급상황에서, 권위를 가지고 성 키프리아누스의 이름을 부르며, 그가 모든 불가능한 상황에 대한 힘을 가지고 있음을 기억하세요.",
          action: "응급상황에서 사용할 짧지만 강력한 기도를 암기하세요. 위기의 순간에 자동이 될 때까지 암송을 연습하세요."
        },
        lesson2: {
          title: "중요한 결정을 위한 기도",
          content: "큰 결정들은 신성한 지혜를 필요로 합니다. 당신의 삶을 바꿀 수 있는 선택들에 직면할 때 - 직업, 관계, 중요한 변화들 - 성 키프리아누스에게 당신의 길을 밝혀달라고 요청하세요. 그는 꿈을 통해, 당신의 삶에 나타나는 지혜로운 사람들을 통해, 또는 단순히 어떤 길을 따라야 할지에 대한 깊은 내적 확신을 통해 명확한 신호를 보낼 수 있습니다. 핵심은 당신이 처음에 원했던 것과 다르더라도 지도를 받는 데 진정으로 열려 있는 것입니다.",
          action: "이번 주에 중요한 결정을 내리기 전에, 성 키프리아누스로부터 구체적인 지도를 구하며 최소 15분간 기도에 시간을 보내세요. 행동하기 전에 신호를 기다리세요."
        },
        lesson3: {
          title: "소원 실현을 위한 기도",
          content: "성 키프리아누스는 불가능해 보이는 소원들을 실현할 힘을 가지고 있지만, 절대적 믿음과 결과에 대한 집착 없음으로 기도하는 것이 필수적입니다. 구체적으로 요청하세요 - 그는 당신이 정확히 무엇을 원하는지 이해해야 합니다. 하지만 항상 '그것이 당신의 신성한 뜻이라면'도 포함하여, 그의 우월한 지혜에 대한 신뢰를 보여주세요. 때때로, 그는 우리가 요청하는 것보다 더 좋은 것을 주는데, 왜냐하면 그는 우리의 제한된 시야로는 인식할 수 없는 가능성들을 보기 때문입니다.",
          action: "구체적인 소원을 선택하고 일주일 동안 매일 그것을 위해 기도하되, 항상 신성한 뜻에 따라 가능한 최선의 방식으로 실현되도록 하는 열린 마음을 포함하세요."
        }
      },
      module4: {
        lesson1: {
          title: "신성한 금식과 정화",
          content: "금식은 몸과 영혼을 정화하고, 우리의 영적 진동을 높이며, 성 키프리아누스와의 연결을 강화하는 강력한 영적 실천입니다. 극단적일 필요는 없습니다 - 주당 한 끼를 금식하거나 하루 동안 특정 음식을 피하는 것으로 시작할 수 있습니다. 중요한 것은 단순한 다이어트가 아닌 신성한 헌물로 하는 것입니다. 금식 중에는 기도와 명상을 강화하고, 배고픔의 느낌을 사용하여 변화에 대한 영적 갈망을 상기시키세요.",
          action: "이번 주에 가벼운 금식을 할 날을 선택하세요 - 한 끼를 건너뛰고 그 추가 시간을 기도와 영적 성찰에 바치세요."
        },
        lesson2: {
          title: "헌신의 야간 철야",
          content: "야간 철야는 고급 신자들을 위한 가장 강력한 실천 중 하나입니다. 세상이 잠든 새벽의 조용한 시간 동안, 우리의 영적 연결은 엄청나게 깊어집니다. 기도, 명상, 영적 독서로 깨어 있기 위해 한 달에 한 밤을 선택하세요. 이 수면의 희생은 당신의 진지한 헌신을 보여주고 최대 항복의 순간에만 오는 특별한 계시와 축복을 받을 수 있게 합니다.",
          action: "이번 주 한 밤에 3-4시간의 철야를 계획하세요. 영적 독서 자료, 촛불, 물을 준비하세요. 깊은 기도와 성찰을 위해 시간을 사용하세요."
        },
        lesson3: {
          title: "전도 사명",
          content: "고급 신자는 성 키프리아누스로부터 축복을 받는 것이 그것들을 나누는 것도 의미한다는 것을 이해합니다. 그의 신성한 일의 도구가 되어, 희망과 변화가 필요한 사람들에게 그에 대해 이야기하세요. 강요하지 마세요 - 기회가 자연스럽게 생기도록 하세요. 당신 자신의 변화가 가장 강력한 증언이 될 것입니다. 사람들이 당신의 삶의 긍정적 변화에 대해 물을 때, 성 키프리아누스에 대해 이야기할 자연스러운 기회를 갖게 될 것입니다.",
          action: "이번 주에, 영적 희망이 필요해 보이는 당신 삶의 한 사람을 식별하세요. 성 키프리아누스와의 당신의 경험을 자연스럽게 나눌 수 있는 방법에 대해 기도하세요."
        }
      }
    }
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
    startFirstLesson: "EERSTE LES NU BEGINNEN",
    
    lessonContent: {
      module1: {
        lesson1: {
          title: "Waarom Heilige Cypriaan Als Uw Beschermer Kiezen",
          content: "Heilige Cypriaan is uniek omdat hij beide werelden kent: de mystieke voorouderlijke en de goddelijke christelijke. Hij heeft de macht om elke onmogelijke situatie te transformeren en elke wens te vervullen, ongeacht hoe moeilijk het lijkt. Zijn unieke geschiedenis van bekering van het heidendom naar het christendom geeft hem autoriteit over alle spirituele krachten. Als bekeerde grote magiër begrijpt hij zowel duisternis als licht diepgaand, waardoor hij de perfecte voorspreker wordt voor degenen die bescherming en transformatie zoeken.",
          action: "Reflecteer op uw huidige behoeften en hoe Heilige Cypriaan uw leven kan transformeren. Schrijf op papier drie specifieke gebieden waar u goddelijke hulp nodig heeft."
        },
        lesson2: {
          title: "Uw Eerste Heilige Verbinding Maken",
          content: "De eerste verbinding met Heilige Cypriaan moet worden gemaakt met nederigheid en oprecht geloof. Bereid een schone en stille ruimte voor, steek een witte kaars aan en spreek direct met hem zoals u zou spreken met een liefdevolle vader. Er zijn geen ingewikkelde formules - alleen oprechtheid van het hart. Vertel uw behoeften, uw angsten, uw hoop. Heilige Cypriaan antwoordt degenen die hem zoeken met een zuiver hart en oprechte intentie voor spirituele transformatie.",
          action: "Vind vandaag 10 minuten stilte. Steek een witte kaars aan en praat met Heilige Cypriaan alsof hij fysiek naast u aanwezig is."
        },
        lesson3: {
          title: "De Tekenen van Zijn Aanwezigheid Herkennen",
          content: "Heilige Cypriaan manifesteert zich op verschillende subtiele manieren: door levendige dromen, opvallende synchroniciteiten, onverklaarbare bescherming in gevaarlijke momenten, en een diep gevoel van vrede te midden van levensstormen. Leer zijn spirituele taal te herkennen. Hij kan de juiste mensen op het juiste moment sturen, deuren openen die voor altijd gesloten leken, of gewoon een innerlijke zekerheid geven dat alles goed komt.",
          action: "Houd een week lang een spiritueel dagboek bij. Noteer alle 'toevallige' gebeurtenissen, opvallende dromen en momenten van onverklaarbare vrede die u ervaart."
        }
      },
      module2: {
        lesson1: {
          title: "Krachtig Ochtendgebed",
          content: "Begin elke dag door een heilige verbinding met Heilige Cypriaan te vestigen. Het ochtendgebed mag niet mechanisch zijn, maar een intiem gesprek waarbij u uw dag onder zijn bescherming plaatst. Vraag om begeleiding voor belangrijke beslissingen, bescherming tegen negatieve energieën en opening van paden voor uw prestaties. Deze ochtendpraktijk creëert een spiritueel schild dat u de hele dag begeleidt, zijn constante aanwezigheid in uw reis garanderend.",
          action: "Sta een week lang 10 minuten eerder op om exclusieve tijd te wijden aan ochtendgebed met Heilige Cypriaan. Observeer de veranderingen in uw dagelijkse energie."
        },
        lesson2: {
          title: "Heilig Middagmoment",
          content: "Middag is een moment van speciale kracht, wanneer de zon op zijn hoogtepunt staat en spirituele energieën het meest intens zijn. Gebruik dit moment voor een heilige pauze van dankbaarheid en geloofsvernieuwing. Ook al is het maar een minuut, verbind met Heilige Cypriaan om te danken voor ochtendzegeningengen en om kracht te vragen om de dag met excellentie te voltooien. Deze praktijk houdt uw spirituele vibratie de hele dag verhoogd.",
          action: "Stel elke dag een alarm in voor de middag. Stop een minuut met wat u doet en zeg een dankgebed tot Heilige Cypriaan."
        },
        lesson3: {
          title: "Diepe Nachtelijke Dankbaarheid",
          content: "De nacht is het moment van heilige afsluiting, waar u uw dag met diepe dankbaarheid herbekijkt. Dank Heilige Cypriaan voor elke bescherming, elke zegening, elke geleerde les. Zelfs op moeilijke dagen, vind redenen voor dankbaarheid - misschien was de moeilijkheid minder dan het had kunnen zijn dankzij zijn bescherming. Deze nachtelijke praktijk zuivert uw ziel en bereidt vruchtbare grond voor de wonderen van de volgende dag.",
          action: "Voordat u slaapt, som mentaal vijf specifieke dingen op waarvoor u Heilige Cypriaan die dag dankbaar bent. Voel de dankbaarheid echt uw hart vullen."
        }
      },
      module3: {
        lesson1: {
          title: "Gebeden voor Noodsituaties en Crises",
          content: "Wanneer we momenten van extreme crisis tegenkomen, hebben we krachtige gebeden nodig die Heilige Cypriaan onmiddellijk kunnen bereiken. In deze situaties moet het geloof absoluut zijn en moeten woorden uit het hart komen met totale overtuiging. In financiële, gezondheids-, relatie- of fysieke beschermingsnoodsituaties, roep Heilige Cypriaans naam aan met autoriteit, herinnerend dat hij macht heeft over alle onmogelijke situaties.",
          action: "Memoriseer een kort maar krachtig gebed om te gebruiken in noodsituaties. Oefen het reciteren tot het automatisch wordt in crisismomenten."
        },
        lesson2: {
          title: "Gebeden voor Belangrijke Beslissingen",
          content: "Grote beslissingen vereisen goddelijke wijsheid. Wanneer u keuzes tegenkomt die uw leven kunnen veranderen - carrière, relaties, belangrijke veranderingen - vraag Heilige Cypriaan uw pad te verlichten. Hij kan duidelijke tekenen sturen door dromen, wijze mensen die in uw leven verschijnen, of gewoon een diepe innerlijke zekerheid over welk pad te volgen. De sleutel is werkelijk open zijn om begeleiding te ontvangen, zelfs als het anders is dan wat u aanvankelijk wilde.",
          action: "Voordat u deze week een belangrijke beslissing neemt, besteed minstens 15 minuten aan gebed om specifieke begeleiding van Heilige Cypriaan te vragen. Wacht op tekenen voordat u handelt."
        },
        lesson3: {
          title: "Gebeden voor Wensmanifestatie",
          content: "Heilige Cypriaan heeft de macht om wensen te manifesteren die onmogelijk lijken, maar het is essentieel om te bidden met absoluut geloof en loslating van het resultaat. Vraag met specificiteit - hij moet precies begrijpen wat u wilt. Maar voeg ook altijd 'als het Uw goddelijke wil is' toe, tonend vertrouwen in zijn superieure wijsheid. Soms geeft hij ons iets nog beters dan we vragen, omdat hij mogelijkheden ziet die onze beperkte visie niet kan waarnemen.",
          action: "Kies een specifieke wens en bid er een week lang dagelijks voor, altijd openheid insluitend dat het zich op de best mogelijke manier manifesteert volgens de goddelijke wil."
        }
      },
      module4: {
        lesson1: {
          title: "Heilig Vasten en Zuivering",
          content: "Vasten is een krachtige spirituele praktijk die lichaam en ziel zuivert, onze spirituele vibratie verhoogt en onze verbinding met Heilige Cypriaan versterkt. Het hoeft niet extreem te zijn - u kunt beginnen door één maaltijd per week te vasten of bepaalde voedingsmiddelen een dag te vermijden. Het belangrijke is het te doen als heilige offering, niet alleen als dieet. Tijdens het vasten, intensiveer uw gebeden en meditaties, gebruik het hongergevoel om uzelf te herinneren aan uw spirituele honger naar transformatie.",
          action: "Kies een dag deze week om licht te vasten - sla een maaltijd over en wijd die extra tijd aan gebed en spirituele reflectie."
        },
        lesson2: {
          title: "Nachtelijke Wake van Toewijding",
          content: "Nachtelijke wake is een van de krachtigste praktijken voor gevorderde aanhangers. Tijdens de stille uren van de dageraad, wanneer de wereld slaapt, verdiept onze spirituele verbinding enorm. Kies één nacht per maand om wakker te blijven in gebed, meditatie en spirituele lezing. Dit slaapopffer toont uw serieuze toewijding en maakt het mogelijk speciale openbaringen en zegeningen te ontvangen die alleen komen in momenten van maximale overgave.",
          action: "Plan een 3-4 uur wake op een nacht deze week. Bereid spiritueel leesmateriaal, kaarsen en water voor. Gebruik de tijd voor diep gebed en reflectie."
        },
        lesson3: {
          title: "Evangelisatiemissie",
          content: "De gevorderde aanhanger begrijpt dat zegeningen ontvangen van Heilige Cypriaan ook betekent ze te delen. Word een instrument van zijn goddelijke werk, sprekend over hem tot mensen die hoop en transformatie nodig hebben. Forceer niet - laat kansen natuurlijk ontstaan. Uw eigen transformatie zal het krachtigste getuigenis zijn. Wanneer mensen vragen naar de positieve veranderingen in uw leven, zult u de natuurlijke gelegenheid hebben om over Heilige Cypriaan te spreken.",
          action: "Deze week, identificeer een persoon in uw leven die spirituele hoop lijkt te behoeven. Bid over hoe u natuurlijk uw ervaring met Heilige Cypriaan kunt delen."
        }
      }
    }
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
    startFirstLesson: "BÖRJA FÖRSTA LEKTIONEN NU",
    
    lessonContent: {
      module1: {
        lesson1: {
          title: "Varför Välja Saint Cyprian Som Din Beskyddare",
          content: "Saint Cyprian är unik eftersom han känner båda världarna: den mystiska förfäders- och den gudomliga kristna. Han har makten att transformera vilken omöjlig situation som helst och uppfylla vilken önskan som helst, oavsett hur svår den verkar. Hans unika historia av omvändelse från hedendom till kristendom ger honom auktoritet över alla andliga krafter. Som omvänd stor magiker förstår han både mörker och ljus djupt, vilket gör honom till den perfekta förespråkaren för dem som söker skydd och transformation.",
          action: "Reflektera över dina nuvarande behov och hur Saint Cyprian kan transformera ditt liv. Skriv på papper tre specifika områden där du behöver gudomlig hjälp."
        },
        lesson2: {
          title: "Skapa Din Första Heliga Förbindelse",
          content: "Den första förbindelsen med Saint Cyprian bör göras med ödmjukhet och uppriktig tro. Förbered ett rent och tyst utrymme, tänd ett vitt ljus och tala direkt med honom som du skulle tala med en kärleksfull far. Det finns inga komplicerade formler - bara hjärtats uppriktighet. Berätta dina behov, dina rädslor, dina förhoppningar. Saint Cyprian svarar dem som söker honom med rent hjärta och äkta avsikt för andlig transformation.",
          action: "Hitta idag 10 minuters tystnad. Tänd ett vitt ljus och tala med Saint Cyprian som om han var fysiskt närvarande bredvid dig."
        },
        lesson3: {
          title: "Känna Igen Tecknen På Hans Närvaro",
          content: "Saint Cyprian manifesterar sig på olika subtila sätt: genom livliga drömmar, slående synkroniciteter, oförklarligt skydd i farliga ögonblick, och en djup känsla av frid mitt i livets stormar. Lär dig att känna igen hans andliga språk. Han kan skicka rätt personer vid rätt tid, öppna dörrar som verkade stängda för evigt, eller helt enkelt ge en inre visshet att allt kommer att bli bra.",
          action: "Håll en andlig dagbok i en vecka. Anteckna alla 'tillfälliga' händelser, slående drömmar och ögonblick av oförklarlig frid som du upplever."
        }
      },
      module2: {
        lesson1: {
          title: "Kraftfull Morgonbön",
          content: "Börja varje dag genom att etablera en helig förbindelse med Saint Cyprian. Morgonbönen bör inte vara mekanisk, utan ett intimt samtal där du överlämnar din dag under hans beskydd. Be om vägledning för viktiga beslut, skydd mot negativa energier och öppnande av vägar för dina prestationer. Denna morgonpraktik skapar en andlig sköld som följer dig hela dagen, garanterande hans konstanta närvaro i din resa.",
          action: "Vakna 10 minuter tidigare i en vecka för att ägna exklusiv tid åt morgonbön med Saint Cyprian. Observera förändringarna i din dagliga energi."
        },
        lesson2: {
          title: "Heligt Middagsögonblick",
          content: "Middag är ett ögonblick av speciell kraft, när solen är på sin höjdpunkt och andliga energier är mest intensiva. Använd detta ögonblick för en helig paus av tacksamhet och troförnyelse. Även om det bara är en minut, anslut med Saint Cyprian för att tacka för morgonens välsignelser och be om styrka att fullborda dagen med excellens. Denna praktik håller din andliga vibration förhöjd hela dagen.",
          action: "Ställ in ett alarm för middag varje dag. Stoppa vad du gör i en minut och säg en tacksamhetsbön till Saint Cyprian."
        },
        lesson3: {
          title: "Djup Nattlig Tacksamhet",
          content: "Natten är ögonblicket för helig avslutning, där du granskar din dag med djup tacksamhet. Tacka Saint Cyprian för varje skydd, varje välsignelse, varje lärd lektion. Även på svåra dagar, hitta skäl för tacksamhet - kanske var svårigheten mindre än den kunde ha varit tack vare hans skydd. Denna nattliga praktik renar din själ och förbereder bördig mark för nästa dags mirakel.",
          action: "Innan du sover, lista mentalt fem specifika saker du är tacksam för till Saint Cyprian den dagen. Känn tacksamheten verkligen fylla ditt hjärta."
        }
      },
      module3: {
        lesson1: {
          title: "Böner för Nödsituationer och Kriser",
          content: "När vi möter ögonblick av extrem kris behöver vi kraftfulla böner som kan nå Saint Cyprian omedelbart. I dessa situationer måste tron vara absolut och orden måste komma från hjärtat med total övertygelse. I finansiella, hälso-, relations- eller fysiska skyddsnödsituationer, åkalla Saint Cyprians namn med auktoritet, påminnande att han har makt över alla omöjliga situationer.",
          action: "Memorera en kort men kraftfull bön att använda i nödsituationer. Öva att recitera den tills den blir automatisk i krisögonblick."
        },
        lesson2: {
          title: "Böner för Viktiga Beslut",
          content: "Stora beslut kräver gudomlig visdom. När du möter val som kan förändra ditt liv - karriär, relationer, viktiga förändringar - be Saint Cyprian att belysa din väg. Han kan skicka tydliga tecken genom drömmar, visa människor som dyker upp i ditt liv, eller helt enkelt ge en djup inre visshet om vilken väg att följa. Nyckeln är att vara verkligt öppen för att ta emot vägledning, även om den skiljer sig från vad du ursprungligen ville.",
          action: "Innan du fattar något viktigt beslut denna vecka, tillbringa minst 15 minuter i bön och be om specifik vägledning från Saint Cyprian. Vänta på tecken innan du handlar."
        },
        lesson3: {
          title: "Böner för Önskemanifestationer",
          content: "Saint Cyprian har makt att manifestera önskningar som verkar omöjliga, men det är väsentligt att be med absolut tro och lösgjordhet från resultatet. Be med specificitet - han behöver förstå exakt vad du vill. Men inkludera också alltid 'om det är Din gudomliga vilja', visande förtroende för hans överlägsna visdom. Ibland ger han oss något ännu bättre än vi ber om, eftersom han ser möjligheter som vår begränsade syn inte kan uppfatta.",
          action: "Välj en specifik önskan och be för den dagligen i en vecka, alltid inkluderande öppenhet för att den manifesteras på bästa möjliga sätt enligt gudomlig vilja."
        }
      },
      module4: {
        lesson1: {
          title: "Helig Fasta och Rening",
          content: "Fasta är en kraftfull andlig praktik som renar kropp och själ, höjer vår andliga vibration och stärker vår förbindelse med Saint Cyprian. Den behöver inte vara extrem - du kan börja genom att fasta en måltid per vecka eller undvika vissa livsmedel en dag. Det viktiga är att göra det som helig offergåva, inte bara som diet. Under fastan, intensifiera dina böner och meditationer, använd hungerkänslan för att påminna dig om din andliga hunger efter transformation.",
          action: "Välj en dag denna vecka för att göra en lätt fasta - hoppa över en måltid och ägna den extra tiden åt bön och andlig reflektion."
        },
        lesson2: {
          title: "Nattlig Vaka av Hängivenhet",
          content: "Nattlig vaka är en av de kraftfullaste praktikerna för avancerade anhängare. Under gryningens tysta timmar, när världen sover, fördjupas vår andliga förbindelse enormt. Välj en natt per månad att stanna vaken i bön, meditation och andlig läsning. Detta sömnuppoffring visar din seriösa hängivenhet och möjliggör mottagande av speciella uppenbarelser och välsignelser som bara kommer i ögonblick av maximal överlämnelse.",
          action: "Planera en 3-4 timmars vaka en natt denna vecka. Förbered andligt läsmaterial, ljus och vatten. Använd tiden för djup bön och reflektion."
        },
        lesson3: {
          title: "Evangelisationsuppdrag",
          content: "Den avancerade anhängaren förstår att ta emot välsignelser från Saint Cyprian också innebär att dela dem. Bli ett instrument för hans gudomliga verk, talande om honom till människor som behöver hopp och transformation. Tvinga inte - låt möjligheter uppstå naturligt. Din egen transformation kommer att vara det kraftfullaste vittnesbördet. När människor frågar om de positiva förändringarna i ditt liv kommer du att ha den naturliga möjligheten att tala om Saint Cyprian.",
          action: "Denna vecka, identifiera en person i ditt liv som verkar behöva andligt hopp. Be om hur du naturligt kan dela din upplevelse med Saint Cyprian."
        }
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
    lessons: 3
  },
  {
    id: '2',
    titleKey: 'dailyPractice',
    subtitleKey: 'dailyPracticeSub',
    icon: Calendar,
    color: 'from-blue-500 to-blue-600',
    lessons: 3
  },
  {
    id: '3',
    titleKey: 'specializedPrayers',
    subtitleKey: 'specializedPrayersSub',
    icon: Book,
    color: 'from-purple-500 to-purple-600',
    lessons: 3
  },
  {
    id: '4',
    titleKey: 'advancedLevels',
    subtitleKey: 'advancedLevelsSub',
    icon: Crown,
    color: 'from-gold-500 to-gold-600',
    lessons: 3
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

  const getLessonContent = (moduleId: string, lessonIndex: number) => {
    const moduleKey = `module${moduleId}`;
    const lessonKey = `lesson${lessonIndex + 1}`;
    
    const content = translations[language]?.lessonContent?.[moduleKey]?.[lessonKey] || 
                   translations.pt.lessonContent[moduleKey][lessonKey];
    
    return content;
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

            {Array.from({ length: selectedModuleData.lessons }, (_, index) => {
              const lessonContent = getLessonContent(selectedModuleData.id, index);
              const lessonId = `${selectedModuleData.id}-${index}`;
              
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
                    onClick={() => completeLesson(lessonId)}
                    className={`w-full py-3 rounded-full font-black transition-all duration-300 ${
                      completedLessons.includes(lessonId)
                        ? 'bg-green-600 text-white'
                        : 'sacred-button hover:scale-105'
                    }`}
                  >
                    {completedLessons.includes(lessonId) ? `✅ ${t('lessonCompleted')} (+15 ${t('points')})` : t('markCompleted')}
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
                  {Array.from({ length: module.lessons }, (_, index) => (
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
                         language === 'ru' ? `Урок ${index + 1}` :
                         language === 'zh' ? `第${index + 1}课` :
                         language === 'ja' ? `レッスン${index + 1}` :
                         language === 'ar' ? `الدرس ${index + 1}` :
                         language === 'hi' ? `पाठ ${index + 1}` :
                         language === 'ko' ? `레슨 ${index + 1}` :
                         language === 'nl' ? `Les ${index + 1}` :
                         language === 'sv' ? `Lektion ${index + 1}` :
                         `Lição ${index + 1}`}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gold-300 text-sm md:text-base">
                    {module.lessons} {t('lessons')} (+15 {t('lessonPoints')})
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
