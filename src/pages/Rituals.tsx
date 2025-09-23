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
    guaranteedResult: "RESULTADO GARANTIZADO:",
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
      invocation: `Poderoso São Cipriano, Grande Mago Supremo,
Invoco vosso poder infinito neste momento sagrado.
Protegei-me de todos os males, visíveis e invisíveis.
Criai um escudo dourado ao meu redor que nada possa atravessar.
Assim seja, com vosso poder eterno. 🔱`,
      steps: {
        preparation: "Preparação do Espaço Sagrado",
        invocation: "Invocação do Grande Mago",
        visualization: "Visualização do Escudo Protetor",
        commitment: "Compromisso Sagrado de Devoção",
        sealing: "Agradecimento e Selamento"
      },
      stepInstructions: {
        preparation: "Prepare seu espaço ritual com uma vela branca e limpeza energética",
        invocation: "Recite a invocação sagrada com fé absoluta e devoção total",
        visualization: "Visualize intensamente um escudo dourado se formando ao seu redor",
        commitment: "Comprometa-se com devoção diária e divulgação de São Cipriano",
        sealing: "Agradeça profundamente como se a proteção já estivesse completa"
      },
      stepActions: {
        preparation: "Acenda uma vela branca e purifique o ambiente com incenso ou água benta",
        invocation: "Repita a invocação 3 vezes em voz alta com total convicção",
        visualization: "Imagine uma luz dourada envolvendo todo seu corpo como uma armadura divina",
        commitment: "Prometa orar diariamente e espalhar a palavra do Grande Mago",
        sealing: "Finalize com gratidão sincera e fé inabalável no poder recebido"
      },
      stepDetails: {
        preparation: "Este é o momento de criar um ambiente sagrado. Limpe fisicamente o espaço e mentalmente se prepare para a conexão divina.",
        invocation: "Fale com o coração aberto. São Cipriano ouve cada palavra e sente sua sinceridade.",
        visualization: "A visualização é fundamental. Veja, sinta e acredite que a proteção está se formando neste momento.",
        commitment: "Este compromisso fortalece sua conexão e mantém a proteção ativa permanentemente.",
        sealing: "A gratidão sela o ritual e ativa imediatamente a proteção divina."
      }
    },
    ritualProsperity: {
      name: "Ritual da Prosperidade Infinita",
      description: "Abra todos os caminhos para riqueza extrema e abundância sem limites em sua vida. Transforme sua situação financeira radicalmente.",
      benefits: ["Riqueza infinita garantida", "Oportunidades de ouro constantes", "Abundância em todas as áreas"],
      results: "Transformação financeira radical e definitiva em poucos dias",
      invocation: `São Cipriano, Senhor da Abundância Infinita,
Abri todos os caminhos da prosperidade em minha vida.
Multiplicai minha riqueza além de qualquer imaginação.
Fazei de mim um ímã poderoso para o dinheiro e sucesso.
Que a abundância flua constantemente em minha direção. 🔱`,
      steps: {
        preparation: "Preparação do Altar da Abundância",
        invocation: "Invocação da Prosperidade Infinita",
        petition: "Pedido Específico de Prosperidade",
        visualization: "Visualização da Abundância Total",
        commitment: "Compromisso de Reciprocidade"
      },
      stepInstructions: {
        preparation: "Monte um altar com 3 velas douradas e símbolos de prosperidade",
        invocation: "Chame São Cipriano para abrir os caminhos da abundância",
        petition: "Faça pedidos específicos sobre sua situação financeira",
        visualization: "Visualize-se vivendo na abundância total e extrema",
        commitment: "Comprometa-se a honrar São Cipriano com sua prosperidade"
      },
      stepActions: {
        preparation: "Acenda 3 velas douradas em triângulo e coloque moedas ou dinheiro no centro",
        invocation: "Recite com paixão e convicção, sentindo a energia da prosperidade",
        petition: "Detalhe exatamente quanto dinheiro deseja e como deseja receber",
        visualization: "Imagine-se rico, próspero, com todo o dinheiro que sempre sonhou",
        commitment: "Prometa usar parte da riqueza para honrar o Grande Mago e ajudar outros"
      },
      stepDetails: {
        preparation: "O altar representa sua intenção de prosperidade. Use objetos que simbolizem riqueza e abundância.",
        invocation: "Acredite completamente que São Cipriano está abrindo os caminhos para sua riqueza neste momento.",
        petition: "Seja específico: 'Desejo ganhar R$ X por mês através de...' Quanto mais claro, melhor.",
        visualization: "Sinta as emoções de já ser rico. Veja sua nova vida próspera em detalhes vívidos.",
        commitment: "A reciprocidade mantém o fluxo de abundância ativo e crescente constantemente."
      }
    },
    ritualPower: {
      name: "Ritual do Poder Supremo",
      description: "Canalize o poder máximo de São Cipriano para transformações extraordinárias e realização de desejos impossíveis.",
      benefits: ["Poder absoluto sobre situações", "Manifestação instantânea", "Autoridade pessoal suprema"],
      results: "Poder pessoal extremo e realização de desejos impossíveis",
      invocation: `São Cipriano, Mestre Supremo de Todos os Poderes,
Concedei-me uma porção de vosso poder infinito.
Que minha vontade se manifeste instantaneamente.
Fazei-me senhor absoluto do meu destino.
Com vosso poder, nada me é impossível. 🔱`,
      steps: {
        preparation: "Criação do Círculo de Poder",
        invocation: "Invocação do Poder Supremo",
        declaration: "Declaração de Poder Pessoal",
        channeling: "Canalização da Energia Suprema",
        sealing: "Selamento do Poder Recebido"
      },
      stepInstructions: {
        preparation: "Monte um círculo sagrado com 7 velas douradas",
        invocation: "Invoque o poder máximo de São Cipriano com autoridade",
        declaration: "Declare com autoridade absoluta seus objetivos e desejos",
        channeling: "Visualize energia dourada entrando em seu corpo",
        sealing: "Sele o poder recebido com gratidão e compromisso"
      },
      stepActions: {
        preparation: "Disponha 7 velas em círculo perfeito e posicione-se no centro",
        invocation: "Recite com voz firme e autoridade, sentindo o poder crescer em você",
        declaration: "Fale em voz alta: 'Eu tenho o poder de...' e declare seus objetivos",
        channeling: "Sinta o poder de São Cipriano preenchendo cada célula do seu ser",
        sealing: "Agradeça e prometa usar o poder para o bem e para glorificar São Cipriano"
      },
      stepDetails: {
        preparation: "O círculo de 7 velas canaliza o poder máximo. Cada vela representa um aspecto do poder supremo.",
        invocation: "Este é o momento crucial. Sinta o poder de São Cipriano fluindo através de você.",
        declaration: "Use frases de poder: 'Eu comando', 'Eu decreto', 'Eu manifesto'. Sinta-se poderoso.",
        channeling: "Esta energia transformará você permanentemente. Absorva-a completamente.",
        sealing: "O poder selado permanece ativo. Use-o sempre com sabedoria e responsabilidade."
      }
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
      invocation: `Mighty Saint Cyprian, Supreme Grand Mage,
I invoke your infinite power in this sacred moment.
Protect me from all evils, visible and invisible.
Create a golden shield around me that nothing can penetrate.
So be it, with your eternal power. 🔱`,
      steps: {
        preparation: "Sacred Space Preparation",
        invocation: "Grand Mage Invocation",
        visualization: "Protective Shield Visualization",
        commitment: "Sacred Commitment of Devotion",
        sealing: "Gratitude and Sealing"
      },
      stepInstructions: {
        preparation: "Prepare your ritual space with a white candle and energy cleansing",
        invocation: "Recite the sacred invocation with absolute faith and total devotion",
        visualization: "Intensely visualize a golden shield forming around you",
        commitment: "Commit to daily devotion and spreading Saint Cyprian's word",
        sealing: "Give deep thanks as if protection were already complete"
      },
      stepActions: {
        preparation: "Light a white candle and purify the environment with incense or holy water",
        invocation: "Repeat the invocation 3 times aloud with total conviction",
        visualization: "Imagine golden light enveloping your entire body like divine armor",
        commitment: "Promise to pray daily and spread the Grand Mage's word",
        sealing: "Finish with sincere gratitude and unshakeable faith in received power"
      },
      stepDetails: {
        preparation: "This is the time to create a sacred environment. Clean the space physically and mentally prepare for divine connection.",
        invocation: "Speak from an open heart. Saint Cyprian hears every word and feels your sincerity.",
        visualization: "Visualization is fundamental. See, feel and believe that protection is forming at this moment.",
        commitment: "This commitment strengthens your connection and keeps protection permanently active.",
        sealing: "Gratitude seals the ritual and immediately activates divine protection."
      }
    },
    ritualProsperity: {
      name: "Infinite Prosperity Ritual",
      description: "Open all paths to extreme wealth and limitless abundance in your life. Transform your financial situation radically.",
      benefits: ["Infinite wealth guaranteed", "Constant golden opportunities", "Abundance in all areas"],
      results: "Radical and definitive financial transformation in few days",
      invocation: `Saint Cyprian, Lord of Infinite Abundance,
Open all pathways of prosperity in my life.
Multiply my wealth beyond any imagination.
Make me a powerful magnet for money and success.
Let abundance flow constantly in my direction. 🔱`,
      steps: {
        preparation: "Abundance Altar Preparation",
        invocation: "Infinite Prosperity Invocation",
        petition: "Specific Prosperity Petition",
        visualization: "Total Abundance Visualization",
        commitment: "Reciprocity Commitment"
      },
      stepInstructions: {
        preparation: "Set up an altar with 3 golden candles and prosperity symbols",
        invocation: "Call Saint Cyprian to open abundance pathways",
        petition: "Make specific requests about your financial situation",
        visualization: "Visualize yourself living in total and extreme abundance",
        commitment: "Commit to honoring Saint Cyprian with your prosperity"
      },
      stepActions: {
        preparation: "Light 3 golden candles in triangle and place coins or money in center",
        invocation: "Recite with passion and conviction, feeling prosperity energy",
        petition: "Detail exactly how much money you want and how you want to receive it",
        visualization: "Imagine yourself rich, prosperous, with all money you've always dreamed of",
        commitment: "Promise to use part of wealth to honor Grand Mage and help others"
      },
      stepDetails: {
        preparation: "The altar represents your prosperity intention. Use objects symbolizing wealth and abundance.",
        invocation: "Completely believe Saint Cyprian is opening pathways to your wealth at this moment.",
        petition: "Be specific: 'I want to earn $X per month through...' The clearer, the better.",
        visualization: "Feel the emotions of already being rich. See your new prosperous life in vivid detail.",
        commitment: "Reciprocity keeps abundance flow active and constantly growing."
      }
    },
    ritualPower: {
      name: "Supreme Power Ritual",
      description: "Channel Saint Cyprian's maximum power for extraordinary transformations and achievement of impossible desires.",
      benefits: ["Absolute power over situations", "Instant manifestation", "Supreme personal authority"],
      results: "Extreme personal power and achievement of impossible desires",
      invocation: `Saint Cyprian, Supreme Master of All Powers,
Grant me a portion of your infinite power.
Let my will manifest instantaneously.
Make me absolute lord of my destiny.
With your power, nothing is impossible for me. 🔱`,
      steps: {
        preparation: "Power Circle Creation",
        invocation: "Supreme Power Invocation",
        declaration: "Personal Power Declaration",
        channeling: "Supreme Energy Channeling",
        sealing: "Received Power Sealing"
      },
      stepInstructions: {
        preparation: "Create a sacred circle with 7 golden candles",
        invocation: "Invoke Saint Cyprian's maximum power with authority",
        declaration: "Declare your goals and desires with absolute authority",
        channeling: "Visualize golden energy entering your body",
        sealing: "Seal received power with gratitude and commitment"
      },
      stepActions: {
        preparation: "Arrange 7 candles in perfect circle and position yourself in center",
        invocation: "Recite with firm voice and authority, feeling power growing in you",
        declaration: "Say aloud: 'I have the power to...' and declare your goals",
        channeling: "Feel Saint Cyprian's power filling every cell of your being",
        sealing: "Thank and promise to use power for good and to glorify Saint Cyprian"
      },
      stepDetails: {
        preparation: "The 7-candle circle channels maximum power. Each candle represents an aspect of supreme power.",
        invocation: "This is the crucial moment. Feel Saint Cyprian's power flowing through you.",
        declaration: "Use power phrases: 'I command', 'I decree', 'I manifest'. Feel powerful.",
        channeling: "This energy will transform you permanently. Absorb it completely.",
        sealing: "Sealed power remains active. Always use it with wisdom and responsibility."
      }
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
      invocation: `Poderoso San Cipriano, Gran Mago Supremo,
Invoco tu poder infinito en este momento sagrado.
Protégeme de todos los males, visibles e invisibles.
Crea un escudo dorado a mi alrededor que nada pueda atravesar.
Así sea, con tu poder eterno. 🔱`,
      steps: {
        preparation: "Preparación del Espacio Sagrado",
        invocation: "Invocación del Gran Mago",
        visualization: "Visualización del Escudo Protector",
        commitment: "Compromiso Sagrado de Devoción",
        sealing: "Agradecimiento y Sellado"
      },
      stepInstructions: {
        preparation: "Prepara tu espacio ritual con una vela blanca y limpieza energética",
        invocation: "Recita la invocación sagrada con fe absoluta y devoción total",
        visualization: "Visualiza intensamente un escudo dorado formándose a tu alrededor",
        commitment: "Comprométete con devoción diaria y divulgación de San Cipriano",
        sealing: "Agradece profundamente como si la protección ya estuviera completa"
      },
      stepActions: {
        preparation: "Enciende una vela blanca y purifica el ambiente con incienso o agua bendita",
        invocation: "Repite la invocación 3 veces en voz alta con total convicción",
        visualization: "Imagina una luz dorada envolviendo todo tu cuerpo como una armadura divina",
        commitment: "Promete orar diariamente y difundir la palabra del Gran Mago",
        sealing: "Finaliza con gratitud sincera y fe inquebrantable en el poder recibido"
      },
      stepDetails: {
        preparation: "Este es el momento de crear un ambiente sagrado. Limpia físicamente el espacio y prepárate mentalmente para la conexión divina.",
        invocation: "Habla con el corazón abierto. San Cipriano escucha cada palabra y siente tu sinceridad.",
        visualization: "La visualización es fundamental. Ve, siente y cree que la protección se está formando en este momento.",
        commitment: "Este compromiso fortalece tu conexión y mantiene la protección activa permanentemente.",
        sealing: "La gratitud sella el ritual y activa inmediatamente la protección divina."
      }
    },
    ritualProsperity: {
      name: "Ritual de Prosperidad Infinita",
      description: "Abre todos los caminos hacia la riqueza extrema y abundancia sin límites en tu vida. Transforma tu situación financiera radicalmente.",
      benefits: ["Riqueza infinita garantizada", "Oportunidades de oro constantes", "Abundancia en todas las áreas"],
      results: "Transformación financiera radical y definitiva en pocos días",
      invocation: `San Cipriano, Señor de la Abundancia Infinita,
Abre todos los caminos de prosperidad en mi vida.
Multiplica mi riqueza más allá de cualquier imaginación.
Hazme un imán poderoso para el dinero y el éxito.
Que la abundancia fluya constantemente en mi dirección. 🔱`,
      steps: {
        preparation: "Preparación del Altar de Abundancia",
        invocation: "Invocación de Prosperidad Infinita",
        petition: "Petición Específica de Prosperidad",
        visualization: "Visualización de Abundancia Total",
        commitment: "Compromiso de Reciprocidad"
      },
      stepInstructions: {
        preparation: "Monta un altar con 3 velas doradas y símbolos de prosperidad",
        invocation: "Llama a San Cipriano para abrir los caminos de abundancia",
        petition: "Haz peticiones específicas sobre tu situación financiera",
        visualization: "Visualízate viviendo en abundancia total y extrema",
        commitment: "Comprométete a honrar a San Cipriano con tu prosperidad"
      },
      stepActions: {
        preparation: "Enciende 3 velas doradas en triángulo y coloca monedas o dinero en el centro",
        invocation: "Recita con pasión y convicción, sintiendo la energía de prosperidad",
        petition: "Detalla exactamente cuánto dinero deseas y cómo deseas recibirlo",
        visualization: "Imagínate rico, próspero, con todo el dinero que siempre soñaste",
        commitment: "Promete usar parte de la riqueza para honrar al Gran Mago y ayudar a otros"
      },
      stepDetails: {
        preparation: "El altar representa tu intención de prosperidad. Usa objetos que simbolicen riqueza y abundancia.",
        invocation: "Cree completamente que San Cipriano está abriendo los caminos hacia tu riqueza en este momento.",
        petition: "Sé específico: 'Deseo ganar $X por mes a través de...' Cuanto más claro, mejor.",
        visualization: "Siente las emociones de ya ser rico. Ve tu nueva vida próspera en detalles vívidos.",
        commitment: "La reciprocidad mantiene el flujo de abundancia activo y creciente constantemente."
      }
    },
    ritualPower: {
      name: "Ritual del Poder Supremo",
      description: "Canaliza el poder máximo de San Cipriano para transformaciones extraordinarias y realización de deseos imposibles.",
      benefits: ["Poder absoluto sobre situaciones", "Manifestación instantánea", "Autoridad personal suprema"],
      results: "Poder personal extremo y realización de deseos imposibles",
      invocation: `San Cipriano, Maestro Supremo de Todos los Poderes,
Concédeme una porción de tu poder infinito.
Que mi voluntad se manifieste instantáneamente.
Hazme señor absoluto de mi destino.
Con tu poder, nada me es imposible. 🔱`,
      steps: {
        preparation: "Creación del Círculo de Poder",
        invocation: "Invocación del Poder Supremo",
        declaration: "Declaración de Poder Personal",
        channeling: "Canalización de Energía Suprema",
        sealing: "Sellado del Poder Recibido"
      },
      stepInstructions: {
        preparation: "Crea un círculo sagrado con 7 velas doradas",
        invocation: "Invoca el poder máximo de San Cipriano con autoridad",
        declaration: "Declara tus objetivos y deseos con autoridad absoluta",
        channeling: "Visualiza energía dorada entrando en tu cuerpo",
        sealing: "Sella el poder recibido con gratitud y compromiso"
      },
      stepActions: {
        preparation: "Dispón 7 velas en círculo perfecto y posiciónate en el centro",
        invocation: "Recita con voz firme y autoridad, sintiendo el poder crecer en ti",
        declaration: "Di en voz alta: 'Tengo el poder de...' y declara tus objetivos",
        channeling: "Siente el poder de San Cipriano llenando cada célula de tu ser",
        sealing: "Agradece y promete usar el poder para el bien y glorificar a San Cipriano"
      },
      stepDetails: {
        preparation: "El círculo de 7 velas canaliza el poder máximo. Cada vela representa un aspecto del poder supremo.",
        invocation: "Este es el momento crucial. Siente el poder de San Cipriano fluyendo a través de ti.",
        declaration: "Usa frases de poder: 'Yo comando', 'Yo decreto', 'Yo manifiesto'. Siéntete poderoso.",
        channeling: "Esta energía te transformará permanentemente. Absórbela completamente.",
        sealing: "El poder sellado permanece activo. Úsalo siempre con sabiduría y responsabilidad."
      }
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
      invocation: `Puissant Saint Cyprien, Grand Mage Suprême,
J'invoque votre pouvoir infini en ce moment sacré.
Protégez-moi de tous les maux, visibles et invisibles.
Créez un bouclier doré autour de moi que rien ne peut pénétrer.
Qu'il en soit ainsi, par votre pouvoir éternel. 🔱`,
      steps: {
        preparation: "Préparation de l'Espace Sacré",
        invocation: "Invocation du Grand Mage",
        visualization: "Visualisation du Bouclier Protecteur",
        commitment: "Engagement Sacré de Dévotion",
        sealing: "Gratitude et Scellement"
      },
      stepInstructions: {
        preparation: "Préparez votre espace rituel avec une bougie blanche et un nettoyage énergétique",
        invocation: "Récitez l'invocation sacrée avec foi absolue et dévotion totale",
        visualization: "Visualisez intensément un bouclier doré se formant autour de vous",
        commitment: "Engagez-vous à la dévotion quotidienne et à la diffusion de Saint Cyprien",
        sealing: "Remerciez profondément comme si la protection était déjà complète"
      },
      stepActions: {
        preparation: "Allumez une bougie blanche et purifiez l'environnement avec de l'encens ou de l'eau bénite",
        invocation: "Répétez l'invocation 3 fois à haute voix avec une conviction totale",
        visualization: "Imaginez une lumière dorée enveloppant tout votre corps comme une armure divine",
        commitment: "Promettez de prier quotidiennement et de répandre la parole du Grand Mage",
        sealing: "Terminez avec gratitude sincère et foi inébranlable dans le pouvoir reçu"
      },
      stepDetails: {
        preparation: "C'est le moment de créer un environnement sacré. Nettoyez physiquement l'espace et préparez-vous mentalement à la connexion divine.",
        invocation: "Parlez avec le cœur ouvert. Saint Cyprien entend chaque mot et ressent votre sincérité.",
        visualization: "La visualisation est fondamentale. Voyez, sentez et croyez que la protection se forme en ce moment.",
        commitment: "Cet engagement renforce votre connexion et maintient la protection active en permanence.",
        sealing: "La gratitude scelle le rituel et active immédiatement la protection divine."
      }
    },
    ritualProsperity: {
      name: "Rituel de Prospérité Infinie",
      description: "Ouvrez tous les chemins vers la richesse extrême et l'abondance sans limites dans votre vie. Transformez votre situation financière radicalement.",
      benefits: ["Richesse infinie garantie", "Opportunités d'or constantes", "Abondance dans tous les domaines"],
      results: "Transformation financière radicale et définitive en quelques jours",
      invocation: `Saint Cyprien, Seigneur de l'Abondance Infinie,
Ouvrez tous les chemins de prospérité dans ma vie.
Multipliez ma richesse au-delà de toute imagination.
Faites de moi un aimant puissant pour l'argent et le succès.
Que l'abondance coule constamment dans ma direction. 🔱`,
      steps: {
        preparation: "Préparation de l'Autel d'Abondance",
        invocation: "Invocation de Prospérité Infinie",
        petition: "Pétition Spécifique de Prospérité",
        visualization: "Visualisation d'Abondance Totale",
        commitment: "Engagement de Réciprocité"
      },
      stepInstructions: {
        preparation: "Installez un autel avec 3 bougies dorées et symboles de prospérité",
        invocation: "Appelez Saint Cyprien pour ouvrir les chemins d'abondance",
        petition: "Faites des demandes spécifiques sur votre situation financière",
        visualization: "Visualisez-vous vivant dans l'abondance totale et extrême",
        commitment: "Engagez-vous à honorer Saint Cyprien avec votre prospérité"
      },
      stepActions: {
        preparation: "Allumez 3 bougies dorées en triangle et placez des pièces ou de l'argent au centre",
        invocation: "Récitez avec passion et conviction, ressentant l'énergie de prospérité",
        petition: "Détaillez exactement combien d'argent vous voulez et comment vous voulez le recevoir",
        visualization: "Imaginez-vous riche, prospère, avec tout l'argent dont vous avez toujours rêvé",
        commitment: "Promettez d'utiliser une partie de la richesse pour honorer le Grand Mage et aider les autres"
      },
      stepDetails: {
        preparation: "L'autel représente votre intention de prospérité. Utilisez des objets symbolisant richesse et abondance.",
        invocation: "Croyez complètement que Saint Cyprien ouvre les chemins vers votre richesse en ce moment.",
        petition: "Soyez spécifique : 'Je veux gagner X€ par mois grâce à...' Plus c'est clair, mieux c'est.",
        visualization: "Ressentez les émotions d'être déjà riche. Voyez votre nouvelle vie prospère en détails vivides.",
        commitment: "La réciprocité maintient le flux d'abondance actif et croissant constamment."
      }
    },
    ritualPower: {
      name: "Rituel du Pouvoir Suprême",
      description: "Canalisez le pouvoir maximum de Saint Cyprien pour des transformations extraordinaires et la réalisation de désirs impossibles.",
      benefits: ["Pouvoir absolu sur les situations", "Manifestation instantanée", "Autorité personnelle suprême"],
      results: "Pouvoir personnel extrême et réalisation de désirs impossibles",
      invocation: `Saint Cyprien, Maître Suprême de Tous les Pouvoirs,
Accordez-moi une portion de votre pouvoir infini.
Que ma volonté se manifeste instantanément.
Faites de moi seigneur absolu de mon destin.
Avec votre pouvoir, rien ne m'est impossible. 🔱`,
      steps: {
        preparation: "Création du Cercle de Pouvoir",
        invocation: "Invocation du Pouvoir Suprême",
        declaration: "Déclaration de Pouvoir Personnel",
        channeling: "Canalisation d'Énergie Suprême",
        sealing: "Scellement du Pouvoir Reçu"
      },
      stepInstructions: {
        preparation: "Créez un cercle sacré avec 7 bougies dorées",
        invocation: "Invoquez le pouvoir maximum de Saint Cyprien avec autorité",
        declaration: "Déclarez vos objectifs et désirs avec autorité absolue",
        channeling: "Visualisez l'énergie dorée entrant dans votre corps",
        sealing: "Scellez le pouvoir reçu avec gratitude et engagement"
      },
      stepActions: {
        preparation: "Disposez 7 bougies en cercle parfait et positionnez-vous au centre",
        invocation: "Récitez d'une voix ferme et avec autorité, sentant le pouvoir grandir en vous",
        declaration: "Dites à haute voix : 'J'ai le pouvoir de...' et déclarez vos objectifs",
        channeling: "Sentez le pouvoir de Saint Cyprien remplir chaque cellule de votre être",
        sealing: "Remerciez et promettez d'utiliser le pouvoir pour le bien et glorifier Saint Cyprien"
      },
      stepDetails: {
        preparation: "Le cercle de 7 bougies canalise le pouvoir maximum. Chaque bougie représente un aspect du pouvoir suprême.",
        invocation: "C'est le moment crucial. Sentez le pouvoir de Saint Cyprien coulant à travers vous.",
        declaration: "Utilisez des phrases de pouvoir : 'Je commande', 'Je décrète', 'Je manifeste'. Sentez-vous puissant.",
        channeling: "Cette énergie vous transformera définitivement. Absorbez-la complètement.",
        sealing: "Le pouvoir scellé reste actif. Utilisez-le toujours avec sagesse et responsabilité."
      }
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
      invocation: `Mächtiger Heiliger Cyprian, Höchster Großmagier,
Ich rufe Ihre unendliche Macht in diesem heiligen Moment an.
Schützen Sie mich vor allen Übeln, sichtbaren und unsichtbaren.
Erschaffen Sie einen goldenen Schild um mich, den nichts durchdringen kann.
So sei es, mit Ihrer ewigen Macht. 🔱`,
      steps: {
        preparation: "Heilige Raumvorbereitung",
        invocation: "Großmagier Anrufung",
        visualization: "Schutzschild Visualisation",
        commitment: "Heiliges Hingabe-Versprechen",
        sealing: "Dankbarkeit und Versiegelung"
      },
      stepInstructions: {
        preparation: "Bereiten Sie Ihren Ritualraum mit einer weißen Kerze und Energiereinigung vor",
        invocation: "Rezitieren Sie die heilige Anrufung mit absolutem Glauben und totaler Hingabe",
        visualization: "Visualisieren Sie intensiv einen goldenen Schild, der sich um Sie bildet",
        commitment: "Verpflichten Sie sich zu täglicher Hingabe und Verbreitung Heiligen Cyprians",
        sealing: "Danken Sie tief, als ob der Schutz bereits vollständig wäre"
      },
      stepActions: {
        preparation: "Zünden Sie eine weiße Kerze an und reinigen Sie die Umgebung mit Weihrauch oder Weihwasser",
        invocation: "Wiederholen Sie die Anrufung 3 Mal laut mit totaler Überzeugung",
        visualization: "Stellen Sie sich goldenes Licht vor, das Ihren ganzen Körper wie göttliche Rüstung umhüllt",
        commitment: "Versprechen Sie, täglich zu beten und das Wort des Großmagiers zu verbreiten",
        sealing: "Beenden Sie mit aufrichtiger Dankbarkeit und unerschütterlichem Glauben an erhaltene Macht"
      },
      stepDetails: {
        preparation: "Dies ist die Zeit, eine heilige Umgebung zu schaffen. Reinigen Sie den Raum physisch und bereiten Sie sich mental auf göttliche Verbindung vor.",
        invocation: "Sprechen Sie aus offenem Herzen. Heiliger Cyprian hört jedes Wort und fühlt Ihre Aufrichtigkeit.",
        visualization: "Visualisation ist fundamental. Sehen, fühlen und glauben Sie, dass Schutz sich in diesem Moment bildet.",
        commitment: "Diese Verpflichtung stärkt Ihre Verbindung und hält Schutz permanent aktiv.",
        sealing: "Dankbarkeit versiegelt das Ritual und aktiviert sofort göttlichen Schutz."
      }
    },
    ritualProsperity: {
      name: "Unendliches Wohlstands-Ritual",
      description: "Öffnen Sie alle Wege zu extremem Reichtum und grenzenloser Fülle in Ihrem Leben. Verwandeln Sie Ihre finanzielle Situation radikal.",
      benefits: ["Unendlicher Reichtum garantiert", "Konstante goldene Gelegenheiten", "Fülle in allen Bereichen"],
      results: "Radikale und definitive finanzielle Transformation in wenigen Tagen",
      invocation: `Heiliger Cyprian, Herr der Unendlichen Fülle,
Öffnen Sie alle Wege des Wohlstands in meinem Leben.
Vervielfachen Sie meinen Reichtum über jede Vorstellung hinaus.
Machen Sie mich zu einem mächtigen Magneten für Geld und Erfolg.
Lassen Sie Fülle konstant in meine Richtung fließen. 🔱`,
      steps: {
        preparation: "Fülle-Altar Vorbereitung",
        invocation: "Unendlicher Wohlstand Anrufung",
        petition: "Spezifische Wohlstand Bitte",
        visualization: "Totale Fülle Visualisation",
        commitment: "Gegenseitigkeit Verpflichtung"
      },
      stepInstructions: {
        preparation: "Errichten Sie einen Altar mit 3 goldenen Kerzen und Wohlstandssymbolen",
        invocation: "Rufen Sie Heiligen Cyprian an, um Fülle-Wege zu öffnen",
        petition: "Machen Sie spezifische Bitten bezüglich Ihrer finanziellen Situation",
        visualization: "Visualisieren Sie sich in totaler und extremer Fülle lebend",
        commitment: "Verpflichten Sie sich, Heiligen Cyprian mit Ihrem Wohlstand zu ehren"
      },
      stepActions: {
        preparation: "Zünden Sie 3 goldene Kerzen in Dreieck an und platzieren Sie Münzen oder Geld in der Mitte",
        invocation: "Rezitieren Sie mit Leidenschaft und Überzeugung, Wohlstandsenergie fühlend",
        petition: "Detaillieren Sie genau, wie viel Geld Sie wollen und wie Sie es erhalten wollen",
        visualization: "Stellen Sie sich reich, wohlhabend vor, mit allem Geld, von dem Sie immer geträumt haben",
        commitment: "Versprechen Sie, einen Teil des Reichtums zu verwenden, um den Großmagier zu ehren und anderen zu helfen"
      },
      stepDetails: {
        preparation: "Der Altar repräsentiert Ihre Wohlstandsabsicht. Verwenden Sie Objekte, die Reichtum und Fülle symbolisieren.",
        invocation: "Glauben Sie vollständig, dass Heiliger Cyprian die Wege zu Ihrem Reichtum in diesem Moment öffnet.",
        petition: "Seien Sie spezifisch: 'Ich will €X pro Monat durch... verdienen' Je klarer, desto besser.",
        visualization: "Fühlen Sie die Emotionen, bereits reich zu sein. Sehen Sie Ihr neues wohlhabendes Leben in lebendigen Details.",
        commitment: "Gegenseitigkeit hält Füllefluss aktiv und konstant wachsend."
      }
    },
    ritualPower: {
      name: "Höchstes Macht-Ritual",
      description: "Kanalisieren Sie Heiligen Cyprians maximale Macht für außergewöhnliche Verwandlungen und Verwirklichung unmöglicher Wünsche.",
      benefits: ["Absolute Macht über Situationen", "Sofortige Manifestation", "Höchste persönliche Autorität"],
      results: "Extreme persönliche Macht und Verwirklichung unmöglicher Wünsche",
      invocation: `Heiliger Cyprian, Höchster Meister Aller Mächte,
Gewähren Sie mir einen Teil Ihrer unendlichen Macht.
Lassen Sie meinen Willen sich sofort manifestieren.
Machen Sie mich zum absoluten Herrn meines Schicksals.
Mit Ihrer Macht ist mir nichts unmöglich. 🔱`,
      steps: {
        preparation: "Macht-Kreis Erschaffung",
        invocation: "Höchste Macht Anrufung",
        declaration: "Persönliche Macht Erklärung",
        channeling: "Höchste Energie Kanalisierung",
        sealing: "Erhaltene Macht Versiegelung"
      },
      stepInstructions: {
        preparation: "Erschaffen Sie einen heiligen Kreis mit 7 goldenen Kerzen",
        invocation: "Rufen Sie Heiligen Cyprians maximale Macht mit Autorität an",
        declaration: "Erklären Sie Ihre Ziele und Wünsche mit absoluter Autorität",
        channeling: "Visualisieren Sie goldene Energie, die in Ihren Körper eintritt",
        sealing: "Versiegeln Sie erhaltene Macht mit Dankbarkeit und Verpflichtung"
      },
      stepActions: {
        preparation: "Ordnen Sie 7 Kerzen in perfektem Kreis an und positionieren Sie sich in der Mitte",
        invocation: "Rezitieren Sie mit fester Stimme und Autorität, Macht in sich wachsend fühlend",
        declaration: "Sagen Sie laut: 'Ich habe die Macht zu...' und erklären Sie Ihre Ziele",
        channeling: "Fühlen Sie Heiligen Cyprians Macht jede Zelle Ihres Seins füllend",
        sealing: "Danken Sie und versprechen Sie, Macht für das Gute und zur Verherrlichung Heiligen Cyprians zu verwenden"
      },
      stepDetails: {
        preparation: "Der 7-Kerzen-Kreis kanalisiert maximale Macht. Jede Kerze repräsentiert einen Aspekt höchster Macht.",
        invocation: "Dies ist der entscheidende Moment. Fühlen Sie Heiligen Cyprians Macht durch Sie fließend.",
        declaration: "Verwenden Sie Machtphrasen: 'Ich befehle', 'Ich dekretiere', 'Ich manifestiere'. Fühlen Sie sich mächtig.",
        channeling: "Diese Energie wird Sie permanent verwandeln. Absorbieren Sie sie vollständig.",
        sealing: "Versiegelte Macht bleibt aktiv. Verwenden Sie sie immer mit Weisheit und Verantwortung."
      }
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
      invocation: `Potente San Cipriano, Grande Mago Supremo,
Invoco il vostro potere infinito in questo momento sacro.
Proteggetemi da tutti i mali, visibili e invisibili.
Create uno scudo dorato intorno a me che niente possa attraversare.
Così sia, con il vostro potere eterno. 🔱`,
      steps: {
        preparation: "Preparazione dello Spazio Sacro",
        invocation: "Invocazione del Gran Mago",
        visualization: "Visualizzazione dello Scudo Protettore",
        commitment: "Impegno Sacro di Devozione",
        sealing: "Gratitudine e Sigillatura"
      },
      stepInstructions: {
        preparation: "Preparate il vostro spazio rituale con una candela bianca e pulizia energetica",
        invocation: "Recitate l'invocazione sacra con fede assoluta e devozione totale",
        visualization: "Visualizzate intensamente uno scudo dorato che si forma intorno a voi",
        commitment: "Impegnatevi alla devozione quotidiana e diffusione di San Cipriano",
        sealing: "Ringraziate profondamente come se la protezione fosse già completa"
      },
      stepActions: {
        preparation: "Accendete una candela bianca e purificate l'ambiente con incenso o acqua benedetta",
        invocation: "Ripetete l'invocazione 3 volte ad alta voce con totale convinzione",
        visualization: "Immaginate una luce dorata che avvolge tutto il vostro corpo come un'armatura divina",
        commitment: "Promettete di pregare quotidianamente e diffondere la parola del Gran Mago",
        sealing: "Finite con gratitudine sincera e fede incrollabile nel potere ricevuto"
      },
      stepDetails: {
        preparation: "Questo è il momento di creare un ambiente sacro. Pulite fisicamente lo spazio e preparatevi mentalmente per la connessione divina.",
        invocation: "Parlate con il cuore aperto. San Cipriano sente ogni parola e percepisce la vostra sincerità.",
        visualization: "La visualizzazione è fondamentale. Vedete, sentite e credete che la protezione si stia formando in questo momento.",
        commitment: "Questo impegno rafforza la vostra connessione e mantiene la protezione attiva permanentemente.",
        sealing: "La gratitudine sigilla il rituale e attiva immediatamente la protezione divina."
      }
    },
    ritualProsperity: {
      name: "Rituale della Prosperità Infinita",
      description: "Aprite tutti i percorsi verso ricchezza estrema e abbondanza senza limiti nella vostra vita. Trasformate la vostra situazione finanziaria radicalmente.",
      benefits: ["Ricchezza infinita garantita", "Opportunità d'oro costanti", "Abbondanza in tutte le aree"],
      results: "Trasformazione finanziaria radicale e definitiva in pochi giorni",
      invocation: `San Cipriano, Signore dell'Abbondanza Infinita,
Aprite tutti i percorsi di prosperità nella mia vita.
Moltiplicate la mia ricchezza oltre ogni immaginazione.
Fatemi diventare una calamita potente per il denaro e il successo.
Che l'abbondanza fluisca costantemente nella mia direzione. 🔱`,
      steps: {
        preparation: "Preparazione dell'Altare dell'Abbondanza",
        invocation: "Invocazione di Prosperità Infinita",
        petition: "Richiesta Specifica di Prosperità",
        visualization: "Visualizzazione di Abbondanza Totale",
        commitment: "Impegno di Reciprocità"
      },
      stepInstructions: {
        preparation: "Allestite un altare con 3 candele dorate e simboli di prosperità",
        invocation: "Chiamate San Cipriano per aprire i percorsi dell'abbondanza",
        petition: "Fate richieste specifiche sulla vostra situazione finanziaria",
        visualization: "Visualizzatevi vivendo nell'abbondanza totale ed estrema",
        commitment: "Impegnatevi ad onorare San Cipriano con la vostra prosperità"
      },
      stepActions: {
        preparation: "Accendete 3 candele dorate in triangolo e mettete monete o denaro al centro",
        invocation: "Recitate con passione e convinzione, sentendo l'energia della prosperità",
        petition: "Dettagliate esattamente quanto denaro desiderate e come desiderate riceverlo",
        visualization: "Immaginatevi ricchi, prosperi, con tutto il denaro che avete sempre sognato",
        commitment: "Promettete di usare parte della ricchezza per onorare il Gran Mago e aiutare altri"
      },
      stepDetails: {
        preparation: "L'altare rappresenta la vostra intenzione di prosperità. Usate oggetti che simboleggiano ricchezza e abbondanza.",
        invocation: "Credete completamente che San Cipriano stia aprendo i percorsi verso la vostra ricchezza in questo momento.",
        petition: "Siate specifici: 'Desidero guadagnare €X al mese attraverso...' Più chiaro è, meglio è.",
        visualization: "Sentite le emozioni di essere già ricchi. Vedete la vostra nuova vita prospera in dettagli vividi.",
        commitment: "La reciprocità mantiene il flusso di abbondanza attivo e in costante crescita."
      }
    },
    ritualPower: {
      name: "Rituale del Potere Supremo",
      description: "Incanalate il potere massimo di San Cipriano per trasformazioni straordinarie e realizzazione di desideri impossibili.",
      benefits: ["Potere assoluto sulle situazioni", "Manifestazione istantanea", "Autorità personale suprema"],
      results: "Potere personale estremo e realizzazione di desideri impossibili",
      invocation: `San Cipriano, Maestro Supremo di Tutti i Poteri,
Concedetemi una porzione del vostro potere infinito.
Che la mia volontà si manifesti istantaneamente.
Fatemi signore assoluto del mio destino.
Con il vostro potere, niente mi è impossibile. 🔱`,
      steps: {
        preparation: "Creazione del Cerchio di Potere",
        invocation: "Invocazione del Potere Supremo",
        declaration: "Dichiarazione di Potere Personale",
        channeling: "Incanalazione di Energia Suprema",
        sealing: "Sigillatura del Potere Ricevuto"
      },
      stepInstructions: {
        preparation: "Create un cerchio sacro con 7 candele dorate",
        invocation: "Invocate il potere massimo di San Cipriano con autorità",
        declaration: "Dichiarate i vostri obiettivi e desideri con autorità assoluta",
        channeling: "Visualizzate energia dorata che entra nel vostro corpo",
        sealing: "Sigillate il potere ricevuto con gratitudine e impegno"
      },
      stepActions: {
        preparation: "Disponete 7 candele in cerchio perfetto e posizionatevi al centro",
        invocation: "Recitate con voce ferma e autorità, sentendo il potere crescere in voi",
        declaration: "Dite ad alta voce: 'Ho il potere di...' e dichiarate i vostri obiettivi",
        channeling: "Sentite il potere di San Cipriano riempire ogni cellula del vostro essere",
        sealing: "Ringraziate e promettete di usare il potere per il bene e glorificare San Cipriano"
      },
      stepDetails: {
        preparation: "Il cerchio di 7 candele incanaliza il potere massimo. Ogni candela rappresenta un aspetto del potere supremo.",
        invocation: "Questo è il momento cruciale. Sentite il potere di San Cipriano fluire attraverso di voi.",
        declaration: "Usate frasi di potere: 'Io comando', 'Io decreto', 'Io manifesto'. Sentitevi potenti.",
        channeling: "Questa energia vi trasformerà permanentemente. Assorbitela completamente.",
        sealing: "Il potere sigillato rimane attivo. Usatelo sempre con saggezza e responsabilità."
      }
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
      invocation: `Могущественный Святой Киприан, Высший Великий Маг,
Призываю вашу бесконечную силу в этот священный момент.
Защитите меня от всех зол, видимых и невидимых.
Создайте золотой щит вокруг меня, который ничто не может пробить.
Да будет так, вашей вечной силой. 🔱`,
      steps: {
        preparation: "Подготовка Священного Пространства",
        invocation: "Призыв Великого Мага",
        visualization: "Визуализация Защитного Щита",
        commitment: "Священное Обязательство Преданности",
        sealing: "Благодарность и Запечатывание"
      },
      stepInstructions: {
        preparation: "Подготовьте ваше ритуальное пространство с белой свечой и энергетической очисткой",
        invocation: "Прочитайте священный призыв с абсолютной верой и полной преданностью",
        visualization: "Интенсивно визуализируйте золотой щит, формирующийся вокруг вас",
        commitment: "Обязуйтесь к ежедневной преданности и распространению Святого Киприана",
        sealing: "Глубоко поблагодарите, как будто защита уже полная"
      },
      stepActions: {
        preparation: "Зажгите белую свечу и очистите окружение ладаном или святой водой",
        invocation: "Повторите призыв 3 раза вслух с полным убеждением",
        visualization: "Представьте золотой свет, обволакивающий все ваше тело как божественные доспехи",
        commitment: "Пообещайте молиться ежедневно и распространять слово Великого Мага",
        sealing: "Завершите искренней благодарностью и непоколебимой верой в полученную силу"
      },
      stepDetails: {
        preparation: "Это время создать священную обстановку. Очистите пространство физически и подготовьтесь мысленно к божественной связи.",
        invocation: "Говорите от открытого сердца. Святой Киприан слышит каждое слово и чувствует вашу искренность.",
        visualization: "Визуализация фундаментальна. Видьте, чувствуйте и верьте, что защита формируется в этот момент.",
        commitment: "Это обязательство укрепляет вашу связь и поддерживает защиту постоянно активной.",
        sealing: "Благодарность запечатывает ритуал и немедленно активирует божественную защиту."
      }
    },
    ritualProsperity: {
      name: "Ритуал Бесконечного Процветания",
      description: "Откройте все пути к крайнему богатству и безграничному изобилию в вашей жизни. Преобразите вашу финансовую ситуацию радикально.",
      benefits: ["Бесконечное богатство гарантировано", "Постоянные золотые возможности", "Изобилие во всех областях"],
      results: "Радикальная и окончательная финансовая трансформация за несколько дней",
      invocation: `Святой Киприан, Господь Бесконечного Изобилия,
Откройте все пути процветания в моей жизни.
Умножьте мое богатство за пределы любого воображения.
Сделайте меня мощным магнитом для денег и успеха.
Пусть изобилие постоянно течет в мою сторону. 🔱`,
      steps: {
        preparation: "Подготовка Алтаря Изобилия",
        invocation: "Призыв Бесконечного Процветания",
        petition: "Конкретная Просьба о Процветании",
        visualization: "Визуализация Полного Изобилия",
        commitment: "Обязательство Взаимности"
      },
      stepInstructions: {
        preparation: "Установите алтарь с 3 золотыми свечами и символами процветания",
        invocation: "Призовите Святого Киприана открыть пути изобилия",
        petition: "Сделайте конкретные просьбы о вашей финансовой ситуации",
        visualization: "Визуализируйте себя живущим в полном и крайнем изобилии",
        commitment: "Обязуйтесь чтить Святого Киприана вашим процветанием"
      },
      stepActions: {
        preparation: "Зажгите 3 золотые свечи треугольником и поместите монеты или деньги в центр",
        invocation: "Читайте со страстью и убеждением, чувствуя энергию процветания",
        petition: "Детально опишите, сколько именно денег вы хотите и как хотите их получить",
        visualization: "Представьте себя богатым, процветающим, со всеми деньгами, о которых всегда мечтали",
        commitment: "Пообещайте использовать часть богатства для чествования Великого Мага и помощи другим"
      },
      stepDetails: {
        preparation: "Алтарь представляет ваше намерение процветания. Используйте предметы, символизирующие богатство и изобилие.",
        invocation: "Полностью верьте, что Святой Киприан открывает пути к вашему богатству в этот момент.",
        petition: "Будьте конкретны: 'Я хочу зарабатывать Х рублей в месяц через...' Чем яснее, тем лучше.",
        visualization: "Почувствуйте эмоции от того, что уже богаты. Увидьте вашу новую процветающую жизнь в ярких деталях.",
        commitment: "Взаимность поддерживает поток изобилия активным и постоянно растущим."
      }
    },
    ritualPower: {
      name: "Ритуал Высшей Силы",
      description: "Направьте максимальную силу Святого Киприана для необыкновенных преобразований и осуществления невозможных желаний.",
      benefits: ["Абсолютная власть над ситуациями", "Мгновенное проявление", "Высшая личная власть"],
      results: "Крайняя личная сила и осуществление невозможных желаний",
      invocation: `Святой Киприан, Высший Мастер Всех Сил,
Дайте мне часть вашей бесконечной силы.
Пусть моя воля проявится мгновенно.
Сделайте меня абсолютным господином моей судьбы.
С вашей силой мне ничто невозможно. 🔱`,
      steps: {
        preparation: "Создание Круга Силы",
        invocation: "Призыв Высшей Силы",
        declaration: "Декларация Личной Силы",
        channeling: "Направление Высшей Энергии",
        sealing: "Запечатывание Полученной Силы"
      },
      stepInstructions: {
        preparation: "Создайте священный круг с 7 золотыми свечами",
        invocation: "Призовите максимальную силу Святого Киприана с авторитетом",
        declaration: "Декларируйте ваши цели и желания с абсолютным авторитетом",
        channeling: "Визуализируйте золотую энергию, входящую в ваше тело",
        sealing: "Запечатайте полученную силу с благодарностью и обязательством"
      },
      stepActions: {
        preparation: "Расположите 7 свечей в идеальном круге и встаньте в центр",
        invocation: "Читайте твердым голосом и с авторитетом, чувствуя, как сила растет в вас",
        declaration: "Скажите вслух: 'У меня есть сила...' и декларируйте ваши цели",
        channeling: "Почувствуйте силу Святого Киприана, наполняющую каждую клетку вашего существа",
        sealing: "Поблагодарите и пообещайте использовать силу для добра и прославления Святого Киприана"
      },
      stepDetails: {
        preparation: "Круг из 7 свечей направляет максимальную силу. Каждая свеча представляет аспект высшей силы.",
        invocation: "Это решающий момент. Почувствуйте силу Святого Киприана, текущую через вас.",
        declaration: "Используйте фразы силы: 'Я повелеваю', 'Я декретирую', 'Я проявляю'. Почувствуйте себя могущественным.",
        channeling: "Эта энергия трансформирует вас навсегда. Поглотите ее полностью.",
        sealing: "Запечатанная сила остается активной. Всегда используйте ее с мудростью и ответственностью."
      }
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
      invocation: `强大的圣西普里安，至高大法师，
我在这神圣时刻召唤您的无限力量。
保护我免受所有邪恶，可见和不可见的。
在我周围创造一个金色盾牌，任何东西都不能穿透。
如此成就，以您的永恒力量。🔱`,
      steps: {
        preparation: "神圣空间准备",
        invocation: "大法师召唤",
        visualization: "保护盾牌可视化",
        commitment: "奉献的神圣承诺",
        sealing: "感恩和封印"
      },
      stepInstructions: {
        preparation: "用一支白色蜡烛和能量清洁准备您的仪式空间",
        invocation: "以绝对信念和完全奉献诵读神圣召唤",
        visualization: "强烈地可视化一个金色盾牌在您周围形成",
        commitment: "承诺日常奉献和传播圣西普里安",
        sealing: "深深感谢，就像保护已经完成一样"
      },
      stepActions: {
        preparation: "点燃一支白色蜡烛，用香或圣水净化环境",
        invocation: "以完全信念大声重复召唤3次",
        visualization: "想象金色光芒包裹您的整个身体，如神圣盔甲",
        commitment: "承诺每日祈祷并传播大法师的话语",
        sealing: "以真诚感激和对接受力量的不摇信念结束"
      },
      stepDetails: {
        preparation: "这是创造神圣环境的时刻。物理清洁空间并在心理上准备神圣连接。",
        invocation: "用开放的心说话。圣西普里安听到每一个词并感受到您的真诚。",
        visualization: "可视化是基础的。看到、感受并相信保护正在此刻形成。",
        commitment: "这个承诺加强您的连接并保持保护永久活跃。",
        sealing: "感恩封印仪式并立即激活神圣保护。"
      }
    },
    ritualProsperity: {
      name: "无限繁荣仪式",
      description: "打开通往极度财富和无限丰盛的所有道路。彻底改变您的财务状况。",
      benefits: ["无限财富保证", "持续的黄金机会", "所有领域的丰盛"],
      results: "几天内彻底和决定性的财务转变",
      invocation: `圣西普里安，无限丰盛之主，
在我的生活中打开所有繁荣之路。
将我的财富增倍超越任何想象。
让我成为金钱和成功的强大磁铁。
让丰盛持续流向我的方向。🔱`,
      steps: {
        preparation: "丰盛祭坛准备",
        invocation: "无限繁荣召唤",
        petition: "特定繁荣请求",
        visualization: "完全丰盛可视化",
        commitment: "互惠承诺"
      },
      stepInstructions: {
        preparation: "设立一个有3支金色蜡烛和繁荣象征的祭坛",
        invocation: "召唤圣西普里安打开丰盛之路",
        petition: "对您的财务状况提出具体请求",
        visualization: "可视化自己生活在完全和极度的丰盛中",
        commitment: "承诺用您的繁荣来荣誉圣西普里安"
      },
      stepActions: {
        preparation: "三角形点燃3支金色蜡烛，在中心放置硬币或金钱",
        invocation: "以激情和信念诵读，感受繁荣能量",
        petition: "详细说明您想要多少金钱以及如何想要接受",
        visualization: "想象自己富有、繁荣，拥有您一直梦想的所有金钱",
        commitment: "承诺使用部分财富来荣誉大法师并帮助他人"
      },
      stepDetails: {
        preparation: "祭坛代表您的繁荣意图。使用象征财富和丰盛的物品。",
        invocation: "完全相信圣西普里安正在此刻为您的财富打开道路。",
        petition: "具体明确：'我想通过...每月赚取X元'越清楚越好。",
        visualization: "感受已经富有的情绪。以生动细节看到您的新繁荣生活。",
        commitment: "互惠保持丰盛流动活跃并持续增长。"
      }
    },
    ritualPower: {
      name: "至高力量仪式",
      description: "引导圣西普里安的最大力量进行非凡变革和实现不可能的愿望。",
      benefits: ["对情况的绝对控制", "即时显现", "至高个人权威"],
      results: "极度个人力量和不可能愿望的实现",
      invocation: `圣西普里安，所有力量的至高大师，
赐予我一部分您的无限力量。
让我的意志立即显现。
使我成为我命运的绝对主人。
以您的力量，对我没有不可能的事。🔱`,
      steps: {
        preparation: "力量圆圈创造",
        invocation: "至高力量召唤",
        declaration: "个人力量声明",
        channeling: "至高能量引导",
        sealing: "接受力量封印"
      },
      stepInstructions: {
        preparation: "用7支金色蜡烛创造一个神圣圆圈",
        invocation: "以权威召唤圣西普里安的最大力量",
        declaration: "以绝对权威声明您的目标和愿望",
        channeling: "可视化金色能量进入您的身体",
        sealing: "以感激和承诺封印接受的力量"
      },
      stepActions: {
        preparation: "将7支蜡烛排列成完美圆圈并将自己定位在中心",
        invocation: "以坚定的声音和权威诵读，感受力量在您内部增长",
        declaration: "大声说：'我有力量...'并声明您的目标",
        channeling: "感受圣西普里安的力量填充您存在的每个细胞",
        sealing: "感谢并承诺为善用力量并荣耀圣西普里安"
      },
      stepDetails: {
        preparation: "7支蜡烛的圆圈引导最大力量。每支蜡烛代表至高力量的一个方面。",
        invocation: "这是关键时刻。感受圣西普里安的力量流过您。",
        declaration: "使用力量短语：'我命令'，'我法令'，'我显现'。感受力量。",
        channeling: "这种能量将永久改变您。完全吸收它。",
        sealing: "封印的力量保持活跃。始终以智慧和责任使用它。"
      }
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
      invocation: `強大な聖キプリアヌス、至高の大魔法師よ、
この神聖な瞬間にあなたの無限の力を呼び出します。
見える悪からも見えない悪からも私を守ってください。
何も貫通できない金の盾を私の周りに作ってください。
あなたの永遠の力により、そのように成就されますように。🔱`,
      steps: {
        preparation: "神聖な空間の準備",
        invocation: "大魔法師の召喚",
        visualization: "保護盾の視覚化",
        commitment: "献身の神聖な約束",
        sealing: "感謝と封印"
      },
      stepInstructions: {
        preparation: "白いろうそくとエネルギー浄化であなたの儀式空間を準備する",
        invocation: "絶対的な信仰と完全な献身で神聖な召喚を唱える",
        visualization: "あなたの周りに金の盾が形成されることを強烈に視覚化する",
        commitment: "日々の献身と聖キプリアヌスの普及に約束する",
        sealing: "保護が既に完成しているかのように深く感謝する"
      },
      stepActions: {
        preparation: "白いろうそくを灯し、香または聖水で環境を浄化する",
        invocation: "完全な確信を持って召喚を3回声に出して繰り返す",
        visualization: "神聖な鎧のようにあなたの全身を包む金の光を想像する",
        commitment: "毎日祈り、大魔法師の言葉を広めることを約束する",
        sealing: "真摯な感謝と受け取った力への揺るぎない信仰で終了する"
      },
      stepDetails: {
        preparation: "これは神聖な環境を作る時です。物理的に空間を清浄し、精神的に神聖な接続に備えてください。",
        invocation: "開かれた心で話してください。聖キプリアヌスはすべての言葉を聞き、あなたの誠実さを感じています。",
        visualization: "視覚化は基本です。この瞬間に保護が形成されていることを見て、感じ、信じてください。",
        commitment: "この約束はあなたの接続を強化し、保護を永続的に活動的に保ちます。",
        sealing: "感謝が儀式を封印し、神聖な保護を即座に活性化します。"
      }
    },
    ritualProsperity: {
      name: "無限繁栄の儀式",
      description: "あなたの人生において極度の富と無制限の豊かさへのすべての道を開いてください。あなたの経済状況を根本的に変革してください。",
      benefits: ["無限の富保証", "継続的な黄金の機会", "すべての分野での豊かさ"],
      results: "数日での根本的で決定的な経済変革",
      invocation: `聖キプリアヌス、無限の豊かさの主よ、
私の人生のすべての繁栄の道を開いてください。
想像を超えて私の富を増やしてください。
お金と成功の強力な磁石にしてください。
豊かさが私の方向に絶えず流れるようにしてください。🔱`,
      steps: {
        preparation: "豊かさの祭壇準備",
        invocation: "無限繁栄の召喚",
        petition: "特定の繁栄の嘆願",
        visualization: "完全な豊かさの視覚化",
        commitment: "相互性の約束"
      },
      stepInstructions: {
        preparation: "3本の金のろうそくと繁栄の象徴で祭壇を設置する",
        invocation: "豊かさの道を開くために聖キプリアヌスを呼ぶ",
        petition: "あなたの財政状況について具体的な要求をする",
        visualization: "完全で極度の豊かさに生きる自分を視覚化する",
        commitment: "あなたの繁栄で聖キプリアヌスを称える約束をする"
      },
      stepActions: {
        preparation: "3本の金のろうそくを三角形に灯し、中央にコインやお金を置く",
        invocation: "繁栄のエネルギーを感じながら情熱と確信を持って唱える",
        petition: "どれくらいのお金が欲しいか、どのように受け取りたいかを詳しく述べる",
        visualization: "いつも夢見ていたすべてのお金を持つ、豊かで繁栄した自分を想像する",
        commitment: "富の一部を大魔法師を称え他人を助けるために使うことを約束する"
      },
      stepDetails: {
        preparation: "祭壇はあなたの繁栄の意図を表しています。富と豊かさを象徴する物を使ってください。",
        invocation: "聖キプリアヌスがこの瞬間にあなたの富への道を開いていることを完全に信じてください。",
        petition: "具体的に：「...を通じて月にX円稼ぎたい」明確であればあるほど良いです。",
        visualization: "既に裕福である感情を感じてください。生き生きとした詳細であなたの新しい豊かな人生を見てください。",
        commitment: "相互性は豊かさの流れを活発で絶えず成長し続けるものに保ちます。"
      }
    },
    ritualPower: {
      name: "至高の力の儀式",
      description: "非凡な変革と不可能な願いの実現のために聖キプリアヌスの最大の力をチャネルしてください。",
      benefits: ["状況に対する絶対的力", "即座の現実化", "至高の個人的権威"],
      results: "極度の個人的力と不可能な願いの実現",
      invocation: `聖キプリアヌス、すべての力の至高の師よ、
あなたの無限の力の一部を私に与えてください。
私の意志を即座に現実化させてください。
私の運命の絶対的な主人にしてください。
あなたの力により、私には不可能なことはありません。🔱`,
      steps: {
        preparation: "力の円の創造",
        invocation: "至高の力の召喚",
        declaration: "個人的力の宣言",
        channeling: "至高のエネルギーのチャネリング",
        sealing: "受け取った力の封印"
      },
      stepInstructions: {
        preparation: "7本の金のろうそくで神聖な円を作る",
        invocation: "権威を持って聖キプリアヌスの最大の力を呼び出す",
        declaration: "絶対的権威であなたの目標と願いを宣言する",
        channeling: "あなたの体に入る金のエネルギーを視覚化する",
        sealing: "感謝と約束で受け取った力を封印する"
      },
      stepActions: {
        preparation: "7本のろうそくを完璧な円に配置し、中央に位置する",
        invocation: "力があなたの中に成長するのを感じながら、しっかりとした声と権威で唱える",
        declaration: "声に出して言う：「私には...する力がある」そしてあなたの目標を宣言する",
        channeling: "聖キプリアヌスの力があなたの存在のすべての細胞を満たすのを感じる",
        sealing: "感謝し、善のため、聖キプリアヌスを栄光するために力を使うことを約束する"
      },
      stepDetails: {
        preparation: "7本のろうそくの円は最大の力をチャネルします。各ろうそくは至高の力の一面を表しています。",
        invocation: "これは決定的な瞬間です。聖キプリアヌスの力があなたを通して流れるのを感じてください。",
        declaration: "力の言葉を使ってください：「私は命令する」「私は法令する」「私は現実化する」力強く感じてください。",
        channeling: "このエネルギーはあなたを永続的に変革します。完全にそれを吸収してください。",
        sealing: "封印された力は活動的なままです。常に知恵と責任を持ってそれを使ってください。"
      }
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
      invocation: `أيها القديس قبريانوس العظيم، الساحر الأعظم،
أستدعي قوتك اللانهائية في هذه اللحظة المقدسة.
احموني من جميع الشرور، المرئية وغير المرئية.
اخلقوا درعاً ذهبياً حولي لا يستطيع شيء اختراقه.
فليكن كذلك، بقوتك الأبدية. 🔱`,
      steps: {
        preparation: "تحضير المساحة المقدسة",
        invocation: "استدعاء الساحر العظيم",
        visualization: "تصور الدرع الواقي",
        commitment: "الالتزام المقدس بالتفاني",
        sealing: "الامتنان والختم"
      },
      stepInstructions: {
        preparation: "حضروا مساحة طقوسكم بشمعة بيضاء وتنظيف طاقي",
        invocation: "اتلوا الاستدعاء المقدس بإيمان مطلق وتفان تام",
        visualization: "تصوروا بقوة درعاً ذهبياً يتشكل حولكم",
        commitment: "التزموا بالتفاني اليومي ونشر القديس قبريانوس",
        sealing: "اشكروا بعمق كما لو أن الحماية مكتملة بالفعل"
      },
      stepActions: {
        preparation: "أشعلوا شمعة بيضاء وطهروا البيئة بالبخور أو الماء المقدس",
        invocation: "كرروا الاستدعاء 3 مرات بصوت عال بقناعة تامة",
        visualization: "تخيلوا نوراً ذهبياً يلف جسدكم بالكامل كدرع إلهي",
        commitment: "وعدوا بالصلاة يومياً ونشر كلمة الساحر العظيم",
        sealing: "انهوا بامتنان صادق وإيمان لا يتزعزع بالقوة المستلمة"
      },
      stepDetails: {
        preparation: "هذا وقت خلق بيئة مقدسة. نظفوا المكان جسدياً واستعدوا عقلياً للاتصال الإلهي.",
        invocation: "تكلموا من قلب مفتوح. القديس قبريانوس يسمع كل كلمة ويشعر بصدقكم.",
        visualization: "التصور أساسي. انظروا، اشعروا، وآمنوا أن الحماية تتشكل في هذه اللحظة.",
        commitment: "هذا الالتزام يقوي اتصالكم ويبقي الحماية نشطة دائماً.",
        sealing: "الامتنان يختم الطقوس ويفعل الحماية الإلهية فوراً."
      }
    },
    ritualProsperity: {
      name: "طقوس الازدهار اللانهائي",
      description: "افتحوا جميع الطرق للثروة المتطرفة والوفرة بلا حدود في حياتكم. حولوا وضعكم المالي جذرياً.",
      benefits: ["ثروة لانهائية مضمونة", "فرص ذهبية مستمرة", "وفرة في جميع المجالات"],
      results: "تحول مالي جذري ونهائي في أيام قليلة",
      invocation: `القديس قبريانوس، سيد الوفرة اللانهائية،
افتحوا جميع طرق الازدهار في حياتي.
ضاعفوا ثروتي فوق أي خيال.
اجعلوني مغناطيساً قوياً للمال والنجاح.
دعوا الوفرة تتدفق باستمرار في اتجاهي. 🔱`,
      steps: {
        preparation: "تحضير مذبح الوفرة",
        invocation: "استدعاء الازدهار اللانهائي",
        petition: "طلب محدد للازدهار",
        visualization: "تصور الوفرة الكاملة",
        commitment: "التزام المعاملة بالمثل"
      },
      stepInstructions: {
        preparation: "أقيموا مذبحاً بـ 3 شموع ذهبية ورموز الازدهار",
        invocation: "ادعوا القديس قبريانوس لفتح طرق الوفرة",
        petition: "اطلبوا طلبات محددة حول وضعكم المالي",
        visualization: "تصوروا أنفسكم تعيشون في وفرة كاملة ومتطرفة",
        commitment: "التزموا بتكريم القديس قبريانوس بازدهاركم"
      },
      stepActions: {
        preparation: "أشعلوا 3 شموع ذهبية في مثلث وضعوا عملات أو أموال في المركز",
        invocation: "اتلوا بحماس وقناعة، اشعروا بطاقة الازدهار",
        petition: "فصلوا بالضبط كم من المال تريدون وكيف تريدون استلامه",
        visualization: "تخيلوا أنفسكم أغنياء، مزدهرين، مع كل المال الذي حلمتم به دائماً",
        commitment: "وعدوا باستخدام جزء من الثروة لتكريم الساحر العظيم ومساعدة الآخرين"
      },
      stepDetails: {
        preparation: "المذبح يمثل نيتكم للازدهار. استخدموا أشياء ترمز للثروة والوفرة.",
        invocation: "آمنوا تماماً أن القديس قبريانوس يفتح طرقاً لثروتكم في هذه اللحظة.",
        petition: "كونوا محددين: 'أريد كسب X ريال شهرياً من خلال...' كلما كان أوضح، كان أفضل.",
        visualization: "اشعروا بمشاعر كونكم أغنياء بالفعل. انظروا حياتكم المزدهرة الجديدة بتفاصيل حية.",
        commitment: "المعاملة بالمثل تبقي تدفق الوفرة نشطاً ونامياً باستمرار."
      }
    },
    ritualPower: {
      name: "طقوس القوة العليا",
      description: "وجهوا أقصى قوة للقديس قبريانوس للتحولات الاستثنائية وتحقيق الرغبات المستحيلة.",
      benefits: ["قوة مطلقة على المواقف", "تجلي فوري", "سلطة شخصية عليا"],
      results: "قوة شخصية متطرفة وتحقيق رغبات مستحيلة",
      invocation: `القديس قبريانوس، السيد الأعلى لجميع القوى،
امنحوني جزءاً من قوتكم اللانهائية.
دعوا إرادتي تتجلى فوراً.
اجعلوني السيد المطلق لمصيري.
بقوتكم، لا شيء مستحيل عليّ. 🔱`,
      steps: {
        preparation: "إنشاء دائرة القوة",
        invocation: "استدعاء القوة العليا",
        declaration: "إعلان القوة الشخصية",
        channeling: "توجيه الطاقة العليا",
        sealing: "ختم القوة المستلمة"
      },
      stepInstructions: {
        preparation: "اخلقوا دائرة مقدسة بـ 7 شموع ذهبية",
        invocation: "استدعوا أقصى قوة للقديس قبريانوس بسلطة",
        declaration: "أعلنوا أهدافكم ورغباتكم بسلطة مطلقة",
        visualization: "تصوروا طاقة ذهبية تدخل أجسادكم",
        sealing: "اختموا القوة المستلمة بامتنان والتزام"
      },
      stepActions: {
        preparation: "رتبوا 7 شموع في دائرة مثالية وضعوا أنفسكم في المركز",
        invocation: "اتلوا بصوت قوي وسلطة، اشعروا بالقوة تنمو فيكم",
        declaration: "قولوا بصوت عال: 'لدي قوة...' وأعلنوا أهدافكم",
        channeling: "اشعروا بقوة القديس قبريانوس تملأ كل خلية في كيانكم",
        sealing: "اشكروا ووعدوا باستخدام القوة للخير ولتمجيد القديس قبريانوس"
      },
      stepDetails: {
        preparation: "دائرة الـ 7 شموع توجه القوة القصوى. كل شمعة تمثل جانباً من القوة العليا.",
        invocation: "هذه اللحظة الحاسمة. اشعروا بقوة القديس قبريانوس تتدفق من خلالكم.",
        declaration: "استخدموا عبارات القوة: 'أنا آمر'، 'أنا أصدر مرسوماً'، 'أنا أجسد'. اشعروا بالقوة.",
        channeling: "هذه الطاقة ستحولكم نهائياً. امتصوها بالكامل.",
        sealing: "القوة المختومة تبقى نشطة. استخدموها دائماً بحكمة ومسؤولية."
      }
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
      invocation: `शक्तिशाली संत साइप्रियन, सर्वोच्च महान जादूगर,
मैं इस पवित्र क्षण में आपकी अनंत शक्ति का आह्वान करता हूं।
सभी बुराइयों से मेरी रक्षा करें, दृश्य और अदृश्य।
मेरे चारों ओर एक सुनहरी ढाल बनाएं जिसे कुछ भी भेद न सके।
ऐसा हो, आपकी शाश्वत शक्ति से। 🔱`,
      steps: {
        preparation: "पवित्र स्थान की तैयारी",
        invocation: "महान जादूगर का आह्वान",
        visualization: "सुरक्षात्मक ढाल की कल्पना",
        commitment: "भक्ति की पवित्र प्रतिबद्धता",
        sealing: "कृतज्ञता और सीलिंग"
      },
      stepInstructions: {
        preparation: "एक सफेद मोमबत्ती और ऊर्जा सफाई के साथ अपना अनुष्ठान स्थान तैयार करें",
        invocation: "पूर्ण विश्वास और संपूर्ण भक्ति के साथ पवित्र आह्वान का पाठ करें",
        visualization: "अपने चारों ओर एक सुनहरी ढाल बनने की तीव्र कल्पना करें",
        commitment: "दैनिक भक्ति और संत साइप्रियन के प्रसार के लिए प्रतिबद्ध हों",
        sealing: "गहरा धन्यवाद दें जैसे कि सुरक्षा पहले से ही पूरी हो गई हो"
      },
      stepActions: {
        preparation: "एक सफेद मोमबत्ती जलाएं और धूप या पवित्र जल से वातावरण को शुद्ध करें",
        invocation: "पूर्ण विश्वास के साथ आह्वान को 3 बार जोर से दोहराएं",
        visualization: "सुनहरी रोशनी की कल्पना करें जो आपके पूरे शरीर को दिव्य कवच की तरह घेर रही है",
        commitment: "दैनिक प्रार्थना करने और महान जादूगर के वचन फैलाने का वादा करें",
        sealing: "प्राप्त शक्ति में सच्ची कृतज्ञता और अटूट विश्वास के साथ समाप्त करें"
      },
      stepDetails: {
        preparation: "यह एक पवित्र वातावरण बनाने का समय है। स्थान को भौतिक रूप से साफ करें और दिव्य संबंध के लिए मानसिक रूप से तैयार हों।",
        invocation: "खुले दिल से बोलें। संत साइप्रियन हर शब्द सुनते हैं और आपकी सच्चाई महसूस करते हैं।",
        visualization: "कल्पना मौलिक है। देखें, महसूस करें और विश्वास करें कि इस क्षण में सुरक्षा बन रही है।",
        commitment: "यह प्रतिबद्धता आपके संबंध को मजबूत बनाती है और सुरक्षा को स्थायी रूप से सक्रिय रखती है।",
        sealing: "कृतज्ञता अनुष्ठान को सील करती है और तुरंत दिव्य सुरक्षा को सक्रिय करती है।"
      }
    },
    ritualProsperity: {
      name: "अनंत समृद्धि अनुष्ठान",
      description: "अपने जीवन में चरम धन और असीमित प्रचुरता के सभी रास्ते खोलें। अपनी वित्तीय स्थिति को मौलिक रूप से बदलें।",
      benefits: ["अनंत धन गारंटीशुदा", "निरंतर सुनहरे अवसर", "सभी क्षेत्रों में प्रचुरता"],
      results: "कुछ दिनों में मौलिक और निर्णायक वित्तीय परिवर्तन",
      invocation: `संत साइप्रियन, अनंत प्रचुरता के स्वामी,
मेरे जीवन में समृद्धि के सभी रास्ते खोलें।
किसी भी कल्पना से परे मेरी संपत्ति बढ़ाएं।
मुझे पैसे और सफलता के लिए एक शक्तिशाली चुंबक बनाएं।
प्रचुरता मेरी दिशा में लगातार बहे। 🔱`,
      steps: {
        preparation: "प्रचुरता वेदी की तैयारी",
        invocation: "अनंत समृद्धि का आह्वान",
        petition: "समृद्धि की विशिष्ट याचना",
        visualization: "पूर्ण प्रचुरता की कल्पना",
        commitment: "पारस्परिकता की प्रतिबद्धता"
      },
      stepInstructions: {
        preparation: "3 सुनहरी मोमबत्तियों और समृद्धि प्रतीकों के साथ एक वेदी स्थापित करें",
        invocation: "प्रचुरता के रास्ते खोलने के लिए संत साइप्रियन का आह्वान करें",
        petition: "अपनी वित्तीय स्थिति के बारे में विशिष्ट अनुरोध करें",
        visualization: "अपने आप को पूर्ण और चरम प्रचुरता में जीते हुए देखें",
        commitment: "अपनी समृद्धि के साथ संत साइप्रियन का सम्मान करने के लिए प्रतिबद्ध हों"
      },
      stepActions: {
        preparation: "3 सुनहरी मोमबत्तियों को त्रिकोण में जलाएं और बीच में सिक्के या पैसे रखें",
        invocation: "समृद्धि की ऊर्जा महसूस करते हुए जुनून और विश्वास के साथ पाठ करें",
        petition: "विस्तार से बताएं कि आप कितना पैसा चाहते हैं और कैसे प्राप्त करना चाहते हैं",
        visualization: "अपने आप को अमीर, समृद्ध, उस सारे पैसे के साथ देखें जिसका आपने हमेशा सपना देखा है",
        commitment: "महान जादूगर का सम्मान करने और दूसरों की मदद करने के लिए संपत्ति का एक हिस्सा उपयोग करने का वादा करें"
      },
      stepDetails: {
        preparation: "वेदी आपकी समृद्धि के इरादे का प्रतिनिधित्व करती है। धन और प्रचुरता का प्रतीक करने वाली वस्तुओं का उपयोग करें।",
        invocation: "पूरी तरह विश्वास करें कि संत साइप्रियन इस क्षण में आपकी संपत्ति के रास्ते खोल रहे हैं।",
        petition: "विशिष्ट रहें: 'मैं महीने में X रुपये ... के माध्यम से कमाना चाहता हूं' जितना स्पष्ट हो, उतना बेहतर।",
        visualization: "पहले से ही अमीर होने की भावनाओं को महसूस करें। अपने नए समृद्ध जीवन को स्पष्ट विवरणों में देखें।",
        commitment: "पारस्परिकता प्रचुरता के प्रवाह को सक्रिय और लगातार बढ़ते रहने में रखती है।"
      }
    },
    ritualPower: {
      name: "सर्वोच्च शक्ति अनुष्ठान",
      description: "असाधारण परिवर्तनों और असंभव इच्छाओं की पूर्ति के लिए संत साइप्रियन की अधिकतम शक्ति को चैनल करें।",
      benefits: ["स्थितियों पर पूर्ण शक्ति", "तत्काल अभिव्यक्ति", "सर्वोच्च व्यक्तिगत अधिकार"],
      results: "चरम व्यक्तिगत शक्ति और असंभव इच्छाओं की पूर्ति",
      invocation: `संत साइप्रियन, सभी शक्तियों के सर्वोच्च गुरु,
मुझे अपनी अनंत शक्ति का एक अंश दें।
मेरी इच्छा तुरंत प्रकट हो।
मुझे अपने भाग्य का पूर्ण स्वामी बनाएं।
आपकी शक्ति से, मेरे लिए कुछ भी असंभव नहीं है। 🔱`,
      steps: {
        preparation: "शक्ति वृत्त का निर्माण",
        invocation: "सर्वोच्च शक्ति का आह्वान",
        declaration: "व्यक्तिगत शक्ति की घोषणा",
        channeling: "सर्वोच्च ऊर्जा को चैनल करना",
        sealing: "प्राप्त शक्ति को सीलिंग"
      },
      stepInstructions: {
        preparation: "7 सुनहरी मोमबत्तियों के साथ एक पवित्र वृत्त बनाएं",
        invocation: "अधिकार के साथ संत साइप्रियन की अधिकतम शक्ति का आह्वान करें",
        declaration: "पूर्ण अधिकार के साथ अपने लक्ष्यों और इच्छाओं की घोषणा करें",
        channeling: "अपने शरीर में प्रवेश करने वाली सुनहरी ऊर्जा की कल्पना करें",
        sealing: "कृतज्ञता और प्रतिबद्धता के साथ प्राप्त शक्ति को सील करें"
      },
      stepActions: {
        preparation: "7 मोमबत्तियों को एक पूर्ण वृत्त में व्यवस्थित करें और खुद को बीच में स्थित करें",
        invocation: "दृढ़ आवाज और अधिकार के साथ पाठ करें, अपने अंदर शक्ति बढ़ते हुए महसूस करें",
        declaration: "जोर से कहें: 'मेरे पास शक्ति है...' और अपने लक्ष्यों की घोषणा करें",
        channeling: "संत साइप्रियन की शक्ति को अपने अस्तित्व की हर कोशिका को भरते हुए महसूस करें",
        sealing: "धन्यवाद दें और अच्छाई के लिए और संत साइप्रियन को महिमामंडित करने के लिए शक्ति का उपयोग करने का वादा करें"
      },
      stepDetails: {
        preparation: "7 मोमबत्तियों का वृत्त अधिकतम शक्ति को चैनल करता है। प्रत्येक मोमबत्ती सर्वोच्च शक्ति के एक पहलू का प्रतिनिधित्व करती है।",
        invocation: "यह निर्णायक क्षण है। संत साइप्रियन की शक्ति को अपने माध्यम से बहते हुए महसूस करें।",
        declaration: "शक्ति वाक्यों का उपयोग करें: 'मैं आदेश देता हूं', 'मैं फरमान देता हूं', 'मैं प्रकट करता हूं'। शक्तिशाली महसूस करें।",
        channeling: "यह ऊर्जा आपको स्थायी रूप से बदल देगी। इसे पूरी तरह से अवशोषित करें।",
        sealing: "सीलेड शक्ति सक्रिय रहती है। हमेशा इसका उपयोग ज्ञान और जिम्मेदारी के साथ करें।"
      }
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
      invocation: `강력한 성 키프리아누스, 최고의 대마법사,
이 신성한 순간에 당신의 무한한 힘을 부릅니다.
보이는 것과 보이지 않는 모든 악으로부터 나를 보호하세요.
아무것도 관통할 수 없는 황금 방패를 내 주위에 만드세요.
당신의 영원한 힘으로 그렇게 이루어지소서. 🔱`,
      steps: {
        preparation: "신성한 공간 준비",
        invocation: "대마법사 소환",
        visualization: "보호 방패 시각화",
        commitment: "헌신의 신성한 약속",
        sealing: "감사와 봉인"
      },
      stepInstructions: {
        preparation: "흰 촛불과 에너지 정화로 의식 공간을 준비하세요",
        invocation: "절대적 믿음과 완전한 헌신으로 신성한 소환을 암송하세요",
        visualization: "당신 주위에 황금 방패가 형성되는 것을 강렬하게 시각화하세요",
        commitment: "일일 헌신과 성 키프리아누스 전파에 헌신하세요",
        sealing: "보호가 이미 완료된 것처럼 깊이 감사하세요"
      },
      stepActions: {
        preparation: "흰 촛불을 켜고 향이나 성수로 환경을 정화하세요",
        invocation: "완전한 확신으로 소환을 3번 큰 소리로 반복하세요",
        visualization: "신성한 갑옷처럼 온몸을 감싸는 황금빛을 상상하세요",
        commitment: "매일 기도하고 대마법사의 말씀을 전파할 것을 약속하세요",
        sealing: "받은 힘에 대한 진실한 감사와 흔들리지 않는 믿음으로 마무리하세요"
      },
      stepDetails: {
        preparation: "이는 신성한 환경을 만드는 시간입니다. 공간을 물리적으로 정화하고 신성한 연결을 위해 정신적으로 준비하세요.",
        invocation: "열린 마음으로 말하세요. 성 키프리아누스는 모든 말을 듣고 당신의 진실함을 느낍니다.",
        visualization: "시각화는 기본입니다. 이 순간에 보호가 형성되고 있다는 것을 보고, 느끼고, 믿으세요.",
        commitment: "이 약속은 당신의 연결을 강화하고 보호를 영구적으로 활성화합니다.",
        sealing: "감사는 의식을 봉인하고 신성한 보호를 즉시 활성화합니다."
      }
    },
    ritualProsperity: {
      name: "무한 번영 의식",
      description: "당신의 삶에서 극도의 부와 무제한 풍요로의 모든 길을 여세요. 당신의 재정 상황을 근본적으로 변화시키세요.",
      benefits: ["무한한 부 보장", "지속적인 황금 기회", "모든 영역에서의 풍요"],
      results: "며칠 내에 근본적이고 결정적인 재정 변화",
      invocation: `성 키프리아누스, 무한한 풍요의 주님,
내 삶에 번영의 모든 길을 열어주세요.
상상을 초월하여 내 부를 증가시켜주세요.
나를 돈과 성공의 강력한 자석으로 만들어주세요.
풍요가 내 방향으로 끊임없이 흐르게 하세요. 🔱`,
      steps: {
        preparation: "풍요 제단 준비",
        invocation: "무한 번영 소환",
        petition: "특정 번영 청원",
        visualization: "완전한 풍요 시각화",
        commitment: "상호성 약속"
      },
      stepInstructions: {
        preparation: "3개의 금색 촛불과 번영 상징으로 제단을 설치하세요",
        invocation: "풍요의 길을 열기 위해 성 키프리아누스를 부르세요",
        petition: "당신의 재정 상황에 대해 구체적인 요청을 하세요",
        visualization: "완전하고 극도의 풍요 속에서 사는 자신을 시각화하세요",
        commitment: "당신의 번영으로 성 키프리아누스를 공경할 것을 약속하세요"
      },
      stepActions: {
        preparation: "3개의 금색 촛불을 삼각형으로 켜고 중앙에 동전이나 돈을 놓으세요",
        invocation: "번영 에너지를 느끼며 열정과 확신으로 암송하세요",
        petition: "얼마나 많은 돈을 원하고 어떻게 받고 싶은지 자세히 말하세요",
        visualization: "항상 꿈꿔왔던 모든 돈을 가진 부유하고 번영한 자신을 상상하세요",
        commitment: "대마법사를 공경하고 다른 사람들을 돕기 위해 부의 일부를 사용할 것을 약속하세요"
      },
      stepDetails: {
        preparation: "제단은 당신의 번영 의도를 나타냅니다. 부와 풍요를 상징하는 물건을 사용하세요.",
        invocation: "성 키프리아누스가 이 순간 당신의 부로 가는 길을 열고 있다고 완전히 믿으세요.",
        petition: "구체적으로 하세요: '월 X원을 ...를 통해 벌고 싶습니다' 더 명확할수록 좋습니다.",
        visualization: "이미 부자인 감정을 느끼세요. 생생한 세부사항으로 새로운 번영한 삶을 보세요.",
        commitment: "상호성은 풍요의 흐름을 활발하고 지속적으로 성장하게 합니다."
      }
    },
    ritualPower: {
      name: "최고 힘의 의식",
      description: "비범한 변화와 불가능한 소원의 실현을 위해 성 키프리아누스의 최대 힘을 전달하세요.",
      benefits: ["상황에 대한 절대적 힘", "즉각적 현실화", "최고의 개인적 권위"],
      results: "극도의 개인적 힘과 불가능한 소원의 실현",
      invocation: `성 키프리아누스, 모든 힘의 최고 주인,
당신의 무한한 힘의 일부를 제게 주세요.
내 의지가 즉시 나타나게 하세요.
나를 내 운명의 절대 주인으로 만들어주세요.
당신의 힘으로 나에게 불가능한 것은 없습니다. 🔱`,
      steps: {
        preparation: "힘의 원 창조",
        invocation: "최고 힘 소환",
        declaration: "개인적 힘 선언",
        channeling: "최고 에너지 전달",
        sealing: "받은 힘 봉인"
      },
      stepInstructions: {
        preparation: "7개의 금색 촛불로 신성한 원을 만드세요",
        invocation: "권위를 가지고 성 키프리아누스의 최대 힘을 소환하세요",
        declaration: "절대적 권위로 당신의 목표와 소원을 선언하세요",
        channeling: "당신의 몸으로 들어오는 황금 에너지를 시각화하세요",
        sealing: "감사와 약속으로 받은 힘을 봉인하세요"
      },
      stepActions: {
        preparation: "7개의 촛불을 완벽한 원으로 배치하고 중앙에 위치하세요",
        invocation: "확고한 목소리와 권위로 암송하며 힘이 자라나는 것을 느끼세요",
        declaration: "큰 소리로 말하세요: '나는 ...할 힘이 있다' 그리고 목표를 선언하세요",
        channeling: "성 키프리아누스의 힘이 당신 존재의 모든 세포를 채우는 것을 느끼세요",
        sealing: "감사하고 선을 위해 성 키프리아누스를 영화롭게 하기 위해 힘을 사용할 것을 약속하세요"
      },
      stepDetails: {
        preparation: "7개 촛불의 원은 최대 힘을 전달합니다. 각 촛불은 최고 힘의 한 측면을 나타냅니다.",
        invocation: "이는 결정적인 순간입니다. 성 키프리아누스의 힘이 당신을 통해 흐르는 것을 느끼세요.",
        declaration: "힘의 구문을 사용하세요: '나는 명령한다', '나는 선포한다', '나는 나타낸다'. 강력함을 느끼세요.",
        channeling: "이 에너지는 당신을 영구적으로 변화시킬 것입니다. 완전히 흡수하세요.",
        sealing: "봉인된 힘은 활성 상태를 유지합니다. 항상 지혜와 책임감을 가지고 사용하세요."
      }
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
      invocation: `Machtige Heilige Cypriaan, Hoogste Grote Magiër,
Ik roep uw oneindige kracht aan in dit heilige moment.
Bescherm mij tegen alle kwaden, zichtbare en onzichtbare.
Creëer een gouden schild om mij heen dat niets kan doordringen.
Zo zij het, met uw eeuwige kracht. 🔱`,
      steps: {
        preparation: "Heilige Ruimte Voorbereiding",
        invocation: "Grote Magiër Aanroeping",
        visualization: "Beschermend Schild Visualisatie",
        commitment: "Heilige Toewijdingsverbintenis",
        sealing: "Dankbaarheid en Verzegeling"
      },
      stepInstructions: {
        preparation: "Bereid uw rituele ruimte voor met een witte kaars en energiezuivering",
        invocation: "Reciteer de heilige aanroeping met absolute geloof en volledige toewijding",
        visualization: "Visualiseer intensief een gouden schild dat zich om u heen vormt",
        commitment: "Verbind u tot dagelijkse toewijding en verspreiding van Heilige Cypriaan",
        sealing: "Bedank diep alsof de bescherming al compleet is"
      },
      stepActions: {
        preparation: "Steek een witte kaars aan en reinig de omgeving met wierook of wijwater",
        invocation: "Herhaal de aanroeping 3 keer hardop met volledige overtuiging",
        visualization: "Stel u gouden licht voor dat uw hele lichaam omhult als goddelijke wapenrusting",
        commitment: "Beloof dagelijks te bidden en het woord van de Grote Magiër te verspreiden",
        sealing: "Eindig met oprechte dankbaarheid en onwankelbaar geloof in ontvangen kracht"
      },
      stepDetails: {
        preparation: "Dit is het moment om een heilige omgeving te creëren. Reinig de ruimte fysiek en bereid u mentaal voor op goddelijke verbinding.",
        invocation: "Spreek vanuit een open hart. Heilige Cypriaan hoort elk woord en voelt uw oprechtheid.",
        visualization: "Visualisatie is fundamenteel. Zie, voel en geloof dat bescherming zich op dit moment vormt.",
        commitment: "Deze verbintenis versterkt uw verbinding en houdt bescherming permanent actief.",
        sealing: "Dankbaarheid verzegelt het ritueel en activeert onmiddellijk goddelijke bescherming."
      }
    },
    ritualProsperity: {
      name: "Oneindige Welvaart Ritueel",
      description: "Open alle paden naar extreme rijkdom en grenzeloze overvloed in uw leven. Transformeer uw financiële situatie radicaal.",
      benefits: ["Oneindige rijkdom gegarandeerd", "Constante gouden kansen", "Overvloed in alle gebieden"],
      results: "Radicale en definitieve financiële transformatie in enkele dagen",
      invocation: `Heilige Cypriaan, Heer van Oneindige Overvloed,
Open alle paden van welvaart in mijn leven.
Vermenigvuldig mijn rijkdom voorbij elke verbeelding.
Maak mij een krachtige magneet voor geld en succes.
Laat overvloed constant in mijn richting stromen. 🔱`,
      steps: {
        preparation: "Overvloed Altaar Voorbereiding",
        invocation: "Oneindige Welvaart Aanroeping",
        petition: "Specifieke Welvaart Verzoek",
        visualization: "Totale Overvloed Visualisatie",
        commitment: "Wederkerigheid Verbintenis"
      },
      stepInstructions: {
        preparation: "Stel een altaar op met 3 gouden kaarsen en welvaartsymbolen",
        invocation: "Roep Heilige Cypriaan aan om overvloedspaden te openen",
        petition: "Doe specifieke verzoeken over uw financiële situatie",
        visualization: "Visualiseer uzelf levend in totale en extreme overvloed",
        commitment: "Verbind u ertoe Heilige Cypriaan met uw welvaart te eren"
      },
      stepActions: {
        preparation: "Steek 3 gouden kaarsen in driehoek aan en plaats munten of geld in het midden",
        invocation: "Reciteer met passie en overtuiging, voel de welvaarts-energie",
        petition: "Detail precies hoeveel geld u wilt en hoe u het wilt ontvangen",
        visualization: "Stel u zich voor rijk, welvarend, met al het geld waarvan u altijd gedroomd hebt",
        commitment: "Beloof een deel van de rijkdom te gebruiken om de Grote Magiër te eren en anderen te helpen"
      },
      stepDetails: {
        preparation: "Het altaar vertegenwoordigt uw welvaarts-intentie. Gebruik voorwerpen die rijkdom en overvloed symboliseren.",
        invocation: "Geloof volledig dat Heilige Cypriaan op dit moment paden naar uw rijkdom opent.",
        petition: "Wees specifiek: 'Ik wil €X per maand verdienen via...' Hoe duidelijker, hoe beter.",
        visualization: "Voel de emoties van al rijk zijn. Zie uw nieuwe welvarende leven in levendige details.",
        commitment: "Wederkerigheid houdt overvloedsstroom actief en constant groeiend."
      }
    },
    ritualPower: {
      name: "Hoogste Macht Ritueel",
      description: "Kanaliseer Heilige Cypriaans maximale kracht voor buitengewone transformaties en verwezenlijking van onmogelijke verlangens.",
      benefits: ["Absolute macht over situaties", "Onmiddellijke manifestatie", "Hoogste persoonlijke autoriteit"],
      results: "Extreme persoonlijke macht en verwezenlijking van onmogelijke verlangens",
      invocation: `Heilige Cypriaan, Hoogste Meester van Alle Machten,
Verleen mij een deel van uw oneindige kracht.
Laat mijn wil zich onmiddellijk manifesteren.
Maak mij absolute heer van mijn lot.
Met uw kracht is mij niets onmogelijk. 🔱`,
      steps: {
        preparation: "Macht Cirkel Creatie",
        invocation: "Hoogste Macht Aanroeping",
        declaration: "Persoonlijke Macht Verklaring",
        channeling: "Hoogste Energie Kanaliseren",
        sealing: "Ontvangen Macht Verzegeling"
      },
      stepInstructions: {
        preparation: "Creëer een heilige cirkel met 7 gouden kaarsen",
        invocation: "Roep Heilige Cypriaans maximale kracht aan met autoriteit",
        declaration: "Verklaar uw doelen en verlangens met absolute autoriteit",
        channeling: "Visualiseer gouden energie die uw lichaam binnenkomt",
        sealing: "Verzegel ontvangen kracht met dankbaarheid en verbintenis"
      },
      stepActions: {
        preparation: "Rangschik 7 kaarsen in perfecte cirkel en positioneer uzelf in het midden",
        invocation: "Reciteer met vaste stem en autoriteit, voel de kracht groeien in u",
        declaration: "Zeg hardop: 'Ik heb de macht om...' en verklaar uw doelen",
        channeling: "Voel Heilige Cypriaans kracht elke cel van uw wezen vullen",
        sealing: "Bedank en beloof kracht te gebruiken voor het goede en Heilige Cypriaan te verheerlijken"
      },
      stepDetails: {
        preparation: "De 7-kaarsencirkel kanaliseert maximale kracht. Elke kaars vertegenwoordigt een aspect van hoogste macht.",
        invocation: "Dit is het cruciale moment. Voel Heilige Cypriaans kracht door u heen stromen.",
        declaration: "Gebruik machts-zinnen: 'Ik beveel', 'Ik decreeteer', 'Ik manifesteer'. Voel u krachtig.",
        channeling: "Deze energie zal u permanent transformeren. Absorbeer het volledig.",
        sealing: "Verzegelde kracht blijft actief. Gebruik het altijd met wijsheid en verantwoordelijkheid."
      }
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
      invocation: `Mäktige Saint Cyprian, Högsta Stora Magiker,
Jag åkallar din oändliga kraft i detta heliga ögonblick.
Skydda mig från alla ondska, synliga och osynliga.
Skapa en gylden sköld omkring mig som inget kan tränga igenom.
Så vare det, med din eviga kraft. 🔱`,
      steps: {
        preparation: "Helig Rumsförberedelse",
        invocation: "Stor Magiker Åkallan",
        visualization: "Skyddande Sköld Visualisering",
        commitment: "Heligt Hängivenhetsåtagande",
        sealing: "Tacksamhet och Försegling"
      },
      stepInstructions: {
        preparation: "Förbered ditt rituella utrymme med ett vitt ljus och energirening",
        invocation: "Recitera den heliga åkallan med absolut tro och total hängivenhet",
        visualization: "Visualisera intensivt en gylden sköld som formar sig runt dig",
        commitment: "Förbind dig till daglig hängivenhet och spridning av Saint Cyprian",
        sealing: "Tacka djupt som om skyddet redan var komplett"
      },
      stepActions: {
        preparation: "Tänd ett vitt ljus och rena miljön med rökelse eller heligt vatten",
        invocation: "Upprepa åkallan 3 gånger högt med total övertygelse",
        visualization: "Föreställ dig gyllene ljus som omsluter hela din kropp som gudomlig rustning",
        commitment: "Lova att be dagligen och sprida Stora Magikerns ord",
        sealing: "Avsluta med uppriktig tacksamhet och orubblig tro på mottagen kraft"
      },
      stepDetails: {
        preparation: "Detta är tiden att skapa en helig miljö. Rengör utrymmet fysiskt och förbered dig mentalt för gudomlig förbindelse.",
        invocation: "Tala från ett öppet hjärta. Saint Cyprian hör varje ord och känner din uppriktighet.",
        visualization: "Visualisering är grundläggande. Se, känn och tro att skydd formas i detta ögonblick.",
        commitment: "Detta åtagande stärker din förbindelse och håller skyddet permanent aktivt.",
        sealing: "Tacksamhet förseglar ritualet och aktiverar omedelbart gudomligt skydd."
      }
    },
    ritualProsperity: {
      name: "Oändlig Välstånd Ritual",
      description: "Öppna alla vägar till extrem rikedom och gränslös överflöd i ditt liv. Förvandla din finansiella situation radikalt.",
      benefits: ["Oändlig rikedom garanterad", "Konstanta gyllene möjligheter", "Överflöd inom alla områden"],
      results: "Radikal och definitiv finansiell transformation på några dagar",
      invocation: `Saint Cyprian, Herre av Oändligt Överflöd,
Öppna alla vägar av välstånd i mitt liv.
Multiplicera min rikedom bortom all fantasi.
Gör mig till en kraftfull magnet för pengar och framgång.
Låt överflöd flöda konstant i min riktning. 🔱`,
      steps: {
        preparation: "Överflöds Altare Förberedelse",
        invocation: "Oändlig Välstånd Åkallan",
        petition: "Specifik Välstånd Begäran",
        visualization: "Total Överflöd Visualisering",
        commitment: "Ömsesidighet Åtagande"
      },
      stepInstructions: {
        preparation: "Sätt upp ett altare med 3 gyllene ljus och välståndssymboler",
        invocation: "Kalla på Saint Cyprian för att öppna överflödsvägar",
        petition: "Gör specifika begäranden om din finansiella situation",
        visualization: "Visualisera dig själv levande i totalt och extremt överflöd",
        commitment: "Förbind dig att hedra Saint Cyprian med ditt välstånd"
      },
      stepActions: {
        preparation: "Tänd 3 gyllene ljus i triangel och placera mynt eller pengar i mitten",
        invocation: "Recitera med passion och övertygelse, känn välståndsenergin",
        petition: "Detaljera exakt hur mycket pengar du vill ha och hur du vill få dem",
        visualization: "Föreställ dig rik, välmående, med alla pengar du alltid drömt om",
        commitment: "Lova att använda en del av rikedomen för att hedra Stora Magikern och hjälpa andra"
      },
      stepDetails: {
        preparation: "Altaret representerar din välståndsintention. Använd objekt som symboliserar rikedom och överflöd.",
        invocation: "Tro fullständigt att Saint Cyprian öppnar vägar till din rikedom i detta ögonblick.",
        petition: "Var specifik: 'Jag vill tjäna X kr per månad genom...' Ju tydligare, desto bättre.",
        visualization: "Känn känslorna av att redan vara rik. Se ditt nya välmående liv i levande detaljer.",
        commitment: "Ömsesidighet håller överflödesflödet aktivt och konstant växande."
      }
    },
    ritualPower: {
      name: "Högsta Kraft Ritual",
      description: "Kanalisera Saint Cyprians maximala kraft för extraordinära förvandlingar och förverkligande av omöjliga önskningar.",
      benefits: ["Absolut makt över situationer", "Omedelbar manifestation", "Högsta personlig auktoritet"],
      results: "Extrem personlig kraft och förverkligande av omöjliga önskningar",
      invocation: `Saint Cyprian, Högsta Mästare av Alla Krafter,
Bevilja mig en del av din oändliga kraft.
Låt min vilja manifestera sig omedelbart.
Gör mig till absolut herre över mitt öde.
Med din kraft är inget omöjligt för mig. 🔱`,
      steps: {
        preparation: "Kraft Cirkel Skapelse",
        invocation: "Högsta Kraft Åkallan",
        declaration: "Personlig Kraft Deklaration",
        channeling: "Högsta Energi Kanalisering",
        sealing: "Mottagen Kraft Försegling"
      },
      stepInstructions: {
        preparation: "Skapa en helig cirkel med 7 gyllene ljus",
        invocation: "Åkalla Saint Cyprians maximala kraft med auktoritet",
        declaration: "Deklarera dina mål och önskningar med absolut auktoritet",
        channeling: "Visualisera gyllen energi som kommer in i din kropp",
        sealing: "Försegla mottagen kraft med tacksamhet och åtagande"
      },
      stepActions: {
        preparation: "Arrangera 7 ljus i perfekt cirkel och positionera dig i mitten",
        invocation: "Recitera med fast röst och auktoritet, känn kraften växa i dig",
        declaration: "Säg högt: 'Jag har kraften att...' och deklarera dina mål",
        channeling: "Känn Saint Cyprians kraft fylla varje cell i ditt väsen",
        sealing: "Tacka och lova att använda kraften för gott och för att förhärliga Saint Cyprian"
      },
      stepDetails: {
        preparation: "7-ljus cirkeln kanaliserar maximal kraft. Varje ljus representerar en aspekt av högsta kraft.",
        invocation: "Detta är det avgörande ögonblicket. Känn Saint Cyprians kraft flöda genom dig.",
        declaration: "Använd kraftfraser: 'Jag befaller', 'Jag dekreterar', 'Jag manifesterar'. Känn dig kraftfull.",
        channeling: "Denna energi kommer att förvandla dig permanent. Absorbera den fullständigt.",
        sealing: "Förseglad kraft förblir aktiv. Använd den alltid med visdom och ansvar."
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
  
  const getCurrentTranslation = () => {
    return translations[language] || translations.pt;
  };
  
  return { language, changeLanguage, t, getCurrentTranslation };
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
  const { language, changeLanguage, t, getCurrentTranslation } = useLanguage();
  const [selectedRitual, setSelectedRitual] = useState<Ritual | null>(null);
  const [isActive, setIsActive] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const getCurrentRituals = (): Ritual[] => {
    const trans = getCurrentTranslation();
    
    return [
      {
        id: '1',
        name: trans.ritualProtection.name,
        description: trans.ritualProtection.description,
        duration: '20 min',
        difficulty: 'Iniciante',
        icon: Shield,
        candles: 1,
        benefits: trans.ritualProtection.benefits,
        results: trans.ritualProtection.results,
        fullRitual: {
          invocation: trans.ritualProtection.invocation,
          steps: [
            {
              title: trans.ritualProtection.steps.preparation,
              instruction: trans.ritualProtection.stepInstructions.preparation,
              action: trans.ritualProtection.stepActions.preparation,
              details: trans.ritualProtection.stepDetails.preparation
            },
            {
              title: trans.ritualProtection.steps.invocation,
              instruction: trans.ritualProtection.stepInstructions.invocation,
              text: trans.ritualProtection.invocation,
              action: trans.ritualProtection.stepActions.invocation,
              details: trans.ritualProtection.stepDetails.invocation
            },
            {
              title: trans.ritualProtection.steps.visualization,
              instruction: trans.ritualProtection.stepInstructions.visualization,
              action: trans.ritualProtection.stepActions.visualization,
              details: trans.ritualProtection.stepDetails.visualization
            },
            {
              title: trans.ritualProtection.steps.commitment,
              instruction: trans.ritualProtection.stepInstructions.commitment,
              action: trans.ritualProtection.stepActions.commitment,
              details: trans.ritualProtection.stepDetails.commitment
            },
            {
              title: trans.ritualProtection.steps.sealing,
              instruction: trans.ritualProtection.stepInstructions.sealing,
              action: trans.ritualProtection.stepActions.sealing,
              details: trans.ritualProtection.stepDetails.sealing
            }
          ]
        }
      },
      {
        id: '2',
        name: trans.ritualProsperity.name,
        description: trans.ritualProsperity.description,
        duration: '35 min',
        difficulty: 'Intermediário',
        icon: Diamond,
        candles: 3,
        benefits: trans.ritualProsperity.benefits,
        results: trans.ritualProsperity.results,
        fullRitual: {
          invocation: trans.ritualProsperity.invocation,
          steps: [
            {
              title: trans.ritualProsperity.steps.preparation,
              instruction: trans.ritualProsperity.stepInstructions.preparation,
              action: trans.ritualProsperity.stepActions.preparation,
              details: trans.ritualProsperity.stepDetails.preparation
            },
            {
              title: trans.ritualProsperity.steps.invocation,
              instruction: trans.ritualProsperity.stepInstructions.invocation,
              text: trans.ritualProsperity.invocation,
              action: trans.ritualProsperity.stepActions.invocation,
              details: trans.ritualProsperity.stepDetails.invocation
            },
            {
              title: trans.ritualProsperity.steps.petition,
              instruction: trans.ritualProsperity.stepInstructions.petition,
              action: trans.ritualProsperity.stepActions.petition,
              details: trans.ritualProsperity.stepDetails.petition
            },
            {
              title: trans.ritualProsperity.steps.visualization,
              instruction: trans.ritualProsperity.stepInstructions.visualization,
              action: trans.ritualProsperity.stepActions.visualization,
              details: trans.ritualProsperity.stepDetails.visualization
            },
            {
              title: trans.ritualProsperity.steps.commitment,
              instruction: trans.ritualProsperity.stepInstructions.commitment,
              action: trans.ritualProsperity.stepActions.commitment,
              details: trans.ritualProsperity.stepDetails.commitment
            }
          ]
        }
      },
      {
        id: '3',
        name: trans.ritualPower.name,
        description: trans.ritualPower.description,
        duration: '50 min',
        difficulty: 'Avançado',
        icon: Zap,
        candles: 7,
        benefits: trans.ritualPower.benefits,
        results: trans.ritualPower.results,
        fullRitual: {
          invocation: trans.ritualPower.invocation,
          steps: [
            {
              title: trans.ritualPower.steps.preparation,
              instruction: trans.ritualPower.stepInstructions.preparation,
              action: trans.ritualPower.stepActions.preparation,
              details: trans.ritualPower.stepDetails.preparation
            },
            {
              title: trans.ritualPower.steps.invocation,
              instruction: trans.ritualPower.stepInstructions.invocation,
              text: trans.ritualPower.invocation,
              action: trans.ritualPower.stepActions.invocation,
              details: trans.ritualPower.stepDetails.invocation
            },
            {
              title: trans.ritualPower.steps.declaration,
              instruction: trans.ritualPower.stepInstructions.declaration,
              action: trans.ritualPower.stepActions.declaration,
              details: trans.ritualPower.stepDetails.declaration
            },
            {
              title: trans.ritualPower.steps.channeling,
              instruction: trans.ritualPower.stepInstructions.channeling,
              action: trans.ritualPower.stepActions.channeling,
              details: trans.ritualPower.stepDetails.channeling
            },
            {
              title: trans.ritualPower.steps.sealing,
              instruction: trans.ritualPower.stepInstructions.sealing,
              action: trans.ritualPower.stepActions.sealing,
              details: trans.ritualPower.stepDetails.sealing
            }
          ]
        }
      }
    ];
  };

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

  const rituals = getCurrentRituals();

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
          🔱 {t('subtitle')} 🔱
        </p>
      </div>

      {/* Sacred Symbol */}
      <div className="text-center py-12 md:py-16">
        <div className="text-6xl md:text-8xl text-gold-400 mb-6 animate-glow-text mystical-glow">
          🔱
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
                  {Array.isArray(ritual.benefits) && ritual.benefits.map((benefit, index) => (
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
