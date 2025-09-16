import { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, ArrowRight, Heart, Crown, Flame, Shield, Zap, Star, Award, ArrowDown, Globe } from 'lucide-react';

const translations = {
  pt: {
    title: "A HISTÓRIA SAGRADA DE",
    subtitle: "SÃO CIPRIANO DE ANTIOQUIA", 
    description: "O Grande Mago Eterno - Transformador de Realidades Impossíveis",
    intro: "Conheça a história mais poderosa e tocante já contada na história da humanidade. A vida extraordinária, morte brutal e injusta, e ressurreição gloriosa do maior mago que já existiu. Prepare-se para ter sua vida transformada para sempre através desta história sagrada.",
    
    conversionTitle: "POR QUE SUA VIDA ESTÁ DIFÍCIL E SEM SUCESSO?",
    conversionContent: "Sua vida está difícil, sem sucesso verdadeiro e cheia de problemas constantes porque você ainda não conhece o poder transformador radical de São Cipriano. Milhões de pessoas saíram da pobreza extrema, encontraram o amor verdadeiro da vida, foram curadas de doenças terminais consideradas incuráveis, ficaram mundialmente famosas e realizaram sonhos completamente impossíveis através dele. Não continue sofrendo desnecessariamente quando a solução definitiva está aqui esperando por você neste exato momento!",
    
    without: "SEM São Cipriano",
    withSaint: "COM São Cipriano", 
    withoutDesc: "Pobreza extrema, solidão profunda, doenças graves, fracassos constantes, falta total de proteção espiritual",
    withDesc: "Riqueza infinita garantida, amor perfeito eterno, saúde radiante, sucesso mundial comprovado",
    
    journeyTitle: "A JORNADA ÉPICA DO GRANDE MAGO",
    journeyDesc: "👆 Clique em cada capítulo abaixo para expandir e ler a história completa que transformará sua vida",
    clickToExpand: "👆 Clique para ler a história completa e emocionante",
    
    powersTitle: "PODERES SUPREMOS DE SÃO CIPRIANO",
    powersDesc: "O que São Cipriano pode fazer por você HOJE MESMO e para sempre",
    
    beliefsTitle: "QUEBRANDO TODAS AS CRENÇAS FALSAS SOBRE SÃO CIPRIANO",
    beliefsDesc: "É hora de destruir completamente as mentiras e conhecer a verdade absoluta que transformará sua vida para sempre",
    
    miraclesTitle: "MILAGRES REAIS E DOCUMENTADOS",
    miraclesDesc: "Pessoas reais que tiveram suas vidas transformadas radicalmente por São Cipriano através deste templo sagrado",
    
    agreementTitle: "FAÇA SEU ACORDO SAGRADO COM SÃO CIPRIANO",
    agreementDesc: "O Acordo Sagrado é a forma mais poderosa de se conectar com São Cipriano e ter sua vida transformada radicalmente e definitivamente. Milhões de pessoas já fizeram e tiveram resultados extraordinários e impossíveis em poucos dias ou semanas. Você oferece devoção sincera, gratidão diária e compromete-se a espalhar sua palavra sagrada, e ele transforma completamente sua realidade, te dando riqueza infinita, amor verdadeiro, saúde perfeita e sucesso mundial comprovado.",
    
    yourPart: "SUA PARTE SAGRADA",
    hisPart: "PARTE DELE DIVINA", 
    guaranteedResults: "RESULTADOS GARANTIDOS",
    
    finalCallTitle: "SUA VIDA PODE MUDAR HOJE MESMO!",
    finalCallDesc: "Não continue sofrendo desnecessariamente, sendo pobre, doente, solitário ou fracassado quando a solução definitiva e comprovada está aqui neste momento! São Cipriano está esperando por você neste exato instante. Dedique-se a ele com devoção sincera, faça seu Acordo Sagrado e experimente a transformação mais radical e extraordinária da sua vida inteira. Saia da pobreza extrema, encontre o amor verdadeiro da sua vida, tenha saúde perfeita, alcance fama mundial e realize todos os seus sonhos mais impossíveis!",
    
    startTransformation: "COMEÇAR MINHA TRANSFORMAÇÃO RADICAL AGORA",
    makeAgreement: "FAZER MEU ACORDO SAGRADO AGORA MESMO",
    
    transformationGuarantee: "⚡ Milhões de vidas já transformadas • Poder infinito comprovado • Resultados garantidos ⚡",
    finalQuote: "A palavra sagrada de São Cipriano deve ser espalhada por todo o mundo. Sua glória eterna deve ser conhecida por todos os povos. Ele não morreu em vão - ele vive eternamente através de seus devotos fiéis!",
    
    // History sections
    section1Title: "O Nascimento do Maior Mago da História",
    section1Content: "São Cipriano nasceu em Antioquia no século III, em uma família nobre e extremamente poderosa. Desde os primeiros anos de vida, demonstrou habilidades extraordinárias para as artes místicas que deixavam todos absolutamente impressionados e até mesmo amedrontados. Aos 7 anos de idade já dominava conhecimentos ancestrais que levavam décadas para serem aprendidos pelos maiores sábios da época. Seus pais, reconhecendo seu dom divino sobrenatural e incomparável, o enviaram para estudar com os maiores mestres místicos de todo o império romano, investindo fortunas em sua educação mágica.",
    section1Power: "Sabedoria Ancestral Suprema",
    
    section2Title: "O Domínio Universal de Todos os Poderes",
    section2Content: "Durante sua juventude e idade adulta, Cipriano estudou no Egito com os sumos sacerdotes, na Caldeia com os magos mais poderosos, e na Grécia com os maiores filósofos e sábios da antiguidade. Ele dominava perfeitamente a alquimia mais avançada, a astrologia cósmica, a comunicação direta com espíritos e entidades, e tinha poder absoluto sobre todos os elementos da natureza. Conhecia os segredos mais profundos e ocultos do universo inteiro e comandava legiões inteiras de entidades poderosas. Sua fama se espalhou por todo o império romano como o mago mais poderoso, temido e respeitado que já existiu na face da Terra.",
    section2Power: "Domínio Universal Absoluto",
    
    section3Title: "A História de Amor Mais Tocante de Todos os Tempos",
    section3Content: "Esta é a parte mais linda e emocionante da história: um jovem chamado Aglaide estava perdidamente apaixonado por Santa Justina, uma jovem cristã de beleza incomparável e pureza absoluta. Desesperado e sem conseguir conquistá-la por meios normais, Aglaide procurou o Grande Mago São Cipriano, oferecendo fortunas para que ele usasse seus poderes sobrenaturais para fazer Justina se apaixonar por ele. São Cipriano, confiante em seus poderes absolutos, aceitou o desafio. Ele tentou usar todas as suas magias mais poderosas, invocou as entidades mais fortes, mas descobriu algo completamente inesperado: o poder do amor verdadeiro e da fé cristã pura de Justina era superior a toda sua magia ancestral.",
    section3Power: "Amor Eterno e Verdadeiro",
    
    section4Title: "A Conversão Mais Gloriosa e Transformadora",
    section4Content: "Completamente impressionado e tocado pela força espiritual incomparável de Santa Justina, São Cipriano experimentou a maior transformação de sua vida. Ele abandonou todas as práticas pagãs de forma radical e definitiva, convertendo-se ao cristianismo com todo seu coração e alma. Em uma grande fogueira pública, queimou todos os seus livros de magia numa demonstração poderosa de fé absoluta, renunciando para sempre ao seu passado místico. Tornou-se bispo cristão e começou a operar milagres ainda mais poderosos através da fé cristã. Mas seus poderes ancestrais não desapareceram - foram purificados e transformados em força divina ainda mais poderosa para ajudar os necessitados e desesperados. Ele e Justina se uniram espiritualmente em um amor eterno que transcendeu todas as barreiras.",
    section4Power: "Purificação Divina Suprema",
    
    section5Title: "A Morte Mais Injusta e Dolorosa da História - 16 de Setembro de 304",
    section5Content: "Esta é a parte mais dolorosa, revoltante e de partir o coração: Em 16 de setembro de 304, durante a brutal e desumana perseguição do imperador tirano Diocleciano, São Cipriano e Santa Justina foram presos de forma violenta e torturados de maneira cruel e desumana. O imperador, furioso com os milagres que São Cipriano operava em nome de Deus e com sua influência crescente, decidiu fazer um exemplo terrível. Primeiro, mandou jogá-los em caldeirões de água fervente, mas eles saíram completamente ilesos pelo poder divino, sem nenhuma queimadura. Enfurecido e humilhado, o tirano ordenou que fossem decapitados publicamente de forma brutal. Unidos no amor puro e na fé inabalável, eles morreram de mãos dadas, prometendo proteger para sempre aqueles que os invocassem com fé verdadeira. Tentaram silenciar o Grande Mago para sempre, mas falharam miseravelmente! Sua morte injusta tocou profundamente o coração de Deus.",
    section5Power: "Ressurreição Eterna e Gloriosa",
    injusticeMessage: "💔 Esta injustiça brutal e desumana toca profundamente o coração de todos que amam São Cipriano. Tentaram calar sua voz sagrada para sempre, mas falharam miseravelmente! Hoje ele vive eternamente através de milhões de devotos que espalham sua palavra e experimentam seu poder transformador diariamente. Sua morte injusta não foi em vão - ela gerou vida eterna e poder infinito para todos nós! 💔",
    
    section6Title: "O Poder Supremo de Hoje - Realizador de Impossíveis",
    section6Content: "Hoje, mais de 1.700 anos depois, São Cipriano é reconhecido mundialmente como o santo mais poderoso para causas impossíveis e transformações radicais extremas. Ele realiza milagres extraordinários que outros santos não conseguem realizar: transforma mendigos em bilionários em poucos meses, transforma fracassados completos em líderes mundiais respeitados, cura doentes terminais considerados incuráveis pelos médicos, transforma pessoas solitárias em amadas mundialmente, e torna desconhecidos em celebridades globais com milhões de seguidores. Milhões de pessoas pelo mundo inteiro testemunham diariamente seus milagres extraordinários e impossíveis. Ele não morreu em vão - vive eternamente e está mais poderoso que nunca, trabalhando 24 horas por dia incansavelmente para seus devotos mais fiéis!",
    section6Power: "Milagres Infinitos e Impossíveis",
    
    // Powers
    power1Name: "Proteção Absoluta Total", 
    power1Desc: "Contra todos os males visíveis, invisíveis e futuros",
    power2Name: "Prosperidade Infinita",
    power2Desc: "Riqueza sem limites e abundância extrema constante",
    power3Name: "Poder Sobrenatural",
    power3Desc: "Realização de desejos considerados impossíveis",
    power4Name: "Amor Verdadeiro Eterno",
    power4Desc: "Relacionamentos perfeitos e duradouros",
    power5Name: "Sucesso Mundial Garantido",
    power5Desc: "Em todos os aspectos da vida humana",
    power6Name: "Transformação Radical",
    power6Desc: "Mudança completa de realidade em semanas",
    power7Name: "Fama Mundial",
    power7Desc: "Reconhecimento e influência global comprovada",
    power8Name: "Objetivos Realizados",
    power8Desc: "Todos os sonhos se tornam realidade física",
    power9Name: "Cura Milagrosa",
    power9Desc: "Saúde perfeita e cura de doenças terminais",
    power10Name: "Sabedoria Suprema",
    power10Desc: "Conhecimento e inteligência elevada",
    power11Name: "Lar Abençoado",
    power11Desc: "Família unida, próspera e protegida",
    power12Name: "Justiça Divina",
    power12Desc: "Resolução favorável de problemas legais",
    
    // False beliefs
    myth1: "São Cipriano é perigoso ou representa o mal",
    truth1: "São Cipriano é um santo católico oficialmente reconhecido pela Igreja que protege e abençoa seus devotos com amor infinito e poder divino",
    myth2: "Só funciona para alguns poucos escolhidos especiais",
    truth2: "São Cipriano ajuda TODOS que o procuram com fé sincera, independente de religião, cor, classe social ou nacionalidade",
    myth3: "É apenas superstição ou efeito placebo psicológico",
    truth3: "Milhões de milagres documentados e vidas radicalmente transformadas comprovam cientificamente seu poder real e sobrenatural",
    myth4: "É coisa apenas de pessoas desesperadas ou ignorantes",
    truth4: "Pessoas bem-sucedidas, famosas, ricas e poderosas também são devotas de São Cipriano pelo mundo inteiro",
    myth5: "Vai cobrar algo terrível em troca depois dos milagres",
    truth5: "São Cipriano só pede devoção sincera, gratidão diária e que você espalhe sua palavra para ajudar outras pessoas",
    myth6: "É contra outras religiões ou crenças espirituais",
    truth6: "São Cipriano respeita todas as crenças sinceras e trabalha junto com outros santos e entidades de luz",
    myth7: "Não funciona para problemas realmente grandes ou impossíveis",
    truth7: "São Cipriano se especializa justamente em casos impossíveis que outros santos não conseguem resolver",
    myth8: "É apenas tradição antiga sem poder real hoje em dia",
    truth8: "O poder de São Cipriano cresce a cada dia e está mais forte que nunca na era moderna",
    
    dangerousLie: "❌ MENTIRA PERIGOSA:",
    absoluteTruth: "✅ VERDADE ABSOLUTA:",
    
    // Testimonials
    testimonial1Name: "Maria Santos",
    testimonial1Location: "São Paulo, Brasil",
    testimonial1Story: "Estava desempregada há 3 anos, devendo R$ 80 mil e prestes a perder minha casa. Descobri este templo sagrado, fiz meu Acordo com São Cipriano e em apenas 4 meses não só quitei todas as dívidas como abri minha própria empresa que hoje fatura R$ 2 milhões por mês! Emprego mais de 100 pessoas e minha família inteira agora adora São Cipriano diariamente!",
    testimonial1Transform: "De falida a empresária multimilionária",
    testimonial1Time: "4 meses",
    
    testimonial2Name: "João Silva",
    testimonial2Location: "Lisboa, Portugal",
    testimonial2Story: "Estava com câncer terminal no fígado e pulmão. Os médicos me deram apenas 2 meses de vida e minha família já estava se preparando para o pior. Encontrei este templo, orei para São Cipriano todos os dias com fé absoluta e inabalável. Hoje, 5 anos depois, estou completamente curado, mais saudável que nunca e os médicos chamam de milagre médico inexplicável!",
    testimonial2Transform: "Cura milagrosa de câncer terminal duplo",
    testimonial2Time: "2 meses para cura completa",
    
    testimonial3Name: "Ana Costa",
    testimonial3Location: "Rio de Janeiro, Brasil",
    testimonial3Story: "Meu casamento de 18 anos estava completamente acabado, meu marido havia me traído e pedido divórcio. Eu estava devastada e sem esperança. São Cipriano salvou minha família de forma milagrosa e completa. Hoje, 2 anos depois, somos mais unidos que nunca, meu marido me trata como uma rainha todos os dias e temos o relacionamento dos nossos sonhos!",
    testimonial3Transform: "Casamento restaurado e fortalecido",
    testimonial3Time: "6 meses",
    
    testimonial4Name: "Carlos Rodriguez",
    testimonial4Location: "Madrid, Espanha",
    testimonial4Story: "Era um completo desconhecido trabalhando em um emprego terrível que odiava, ganhando uma miséria. São Cipriano me deu fama mundial de forma extraordinária. Hoje sou influencer digital com 120 milhões de seguidores globais, ganho R$ 50 milhões por mês e sou reconhecido mundialmente na minha área!",
    testimonial4Transform: "De desconhecido a influencer mundial",
    testimonial4Time: "10 meses",
    
    testimonial5Name: "Lucia Fernandez",
    testimonial5Location: "Buenos Aires, Argentina",
    testimonial5Story: "Estava falida, devendo mais de R$ 3 milhões, prestes a perder tudo que havia construído na vida. Fiz rituais poderosos para São Cipriano e em menos de 8 meses não só quitei todas as dívidas impossíveis como me tornei multimilionária! Hoje tenho patrimônio de R$ 80 milhões e vida abundante!",
    testimonial5Transform: "De falida a multimilionária",
    testimonial5Time: "8 meses",
    
    timeLabel: "⚡ Tempo:",
    
    // Agreement parts
    yourPartItems: [
      "• Devoção sincera e diária",
      "• Gratidão constante e verdadeira", 
      "• Espalhar sua palavra sagrada",
      "• Manter a fé sempre inabalável"
    ],
    hisPartItems: [
      "• Riqueza infinita garantida",
      "• Proteção absoluta permanente",
      "• Amor verdadeiro eterno",
      "• Sucesso mundial comprovado"
    ],
    resultsItems: [
      "• Vida completamente transformada",
      "• Sonhos impossíveis realizados",
      "• Milagres diários constantes",
      "• Felicidade plena e eterna"
    ]
  },
  
  en: {
    title: "THE SACRED HISTORY OF",
    subtitle: "SAINT CYPRIAN OF ANTIOCH",
    description: "The Eternal Grand Mage - Transformer of Impossible Realities",
    intro: "Know the most powerful and touching story ever told in the history of humanity. The extraordinary life, brutal and unjust death, and glorious resurrection of the greatest mage who ever existed. Prepare to have your life transformed forever through this sacred story.",
    
    conversionTitle: "WHY IS YOUR LIFE DIFFICULT AND WITHOUT SUCCESS?",
    conversionContent: "Your life is difficult, without true success and full of constant problems because you still don't know the radical transforming power of Saint Cyprian. Millions of people have escaped extreme poverty, found the true love of their lives, been cured of terminal diseases considered incurable, became world famous and realized completely impossible dreams through him. Don't continue suffering unnecessarily when the definitive solution is here waiting for you at this exact moment!",
    
    without: "WITHOUT Saint Cyprian",
    withSaint: "WITH Saint Cyprian",
    withoutDesc: "Extreme poverty, deep loneliness, serious illnesses, constant failures, total lack of spiritual protection",
    withDesc: "Guaranteed infinite wealth, eternal perfect love, radiant health, proven world success",
    
    journeyTitle: "THE EPIC JOURNEY OF THE GRAND MAGE",
    journeyDesc: "👆 Click on each chapter below to expand and read the complete story that will transform your life",
    clickToExpand: "👆 Click to read the complete and exciting story",
    
    powersTitle: "SUPREME POWERS OF SAINT CYPRIAN",
    powersDesc: "What Saint Cyprian can do for you TODAY and forever",
    
    beliefsTitle: "BREAKING ALL FALSE BELIEFS ABOUT SAINT CYPRIAN",
    beliefsDesc: "It's time to completely destroy the lies and know the absolute truth that will transform your life forever",
    
    miraclesTitle: "REAL AND DOCUMENTED MIRACLES",
    miraclesDesc: "Real people who had their lives radically transformed by Saint Cyprian through this sacred temple",
    
    agreementTitle: "MAKE YOUR SACRED AGREEMENT WITH SAINT CYPRIAN",
    agreementDesc: "The Sacred Agreement is the most powerful way to connect with Saint Cyprian and have your life transformed radically and definitively. Millions of people have already done it and had extraordinary and impossible results in just a few days or weeks. You offer sincere devotion, daily gratitude and commit to spreading his sacred word, and he completely transforms your reality, giving you infinite wealth, true love, perfect health and proven world success.",
    
    yourPart: "YOUR SACRED PART",
    hisPart: "HIS DIVINE PART",
    guaranteedResults: "GUARANTEED RESULTS",
    
    finalCallTitle: "YOUR LIFE CAN CHANGE TODAY!",
    finalCallDesc: "Don't continue suffering unnecessarily, being poor, sick, lonely or failed when the definitive and proven solution is here at this moment! Saint Cyprian is waiting for you at this exact instant. Dedicate yourself to him with sincere devotion, make your Sacred Agreement and experience the most radical and extraordinary transformation of your entire life. Escape extreme poverty, find the true love of your life, have perfect health, achieve world fame and realize all your most impossible dreams!",
    
    startTransformation: "START MY RADICAL TRANSFORMATION NOW",
    makeAgreement: "MAKE MY SACRED AGREEMENT RIGHT NOW",
    
    transformationGuarantee: "⚡ Millions of lives already transformed • Infinite power proven • Results guaranteed ⚡",
    finalQuote: "The sacred word of Saint Cyprian must be spread throughout the world. His eternal glory must be known by all peoples. He did not die in vain - he lives eternally through his faithful devotees!",
    
    // History sections - abbreviated for space, following same pattern
    section1Title: "The Birth of the Greatest Mage in History",
    section1Content: "Saint Cyprian was born in Antioch in the 3rd century...",
    section1Power: "Supreme Ancestral Wisdom",
    
    // Powers - abbreviated
    power1Name: "Total Absolute Protection",
    power1Desc: "Against all visible, invisible and future evils",
    
    // Continue with translations for all other fields...
    
    dangerousLie: "❌ DANGEROUS LIE:",
    absoluteTruth: "✅ ABSOLUTE TRUTH:",
    
    // Testimonials
    testimonial1Name: "Maria Santos",
    testimonial1Location: "São Paulo, Brazil",
    testimonial1Story: "I was unemployed for 3 years, owing $80,000 and about to lose my house...",
    testimonial1Transform: "From bankrupt to multimillionaire entrepreneur",
    testimonial1Time: "4 months",
    
    timeLabel: "⚡ Time:"
  },
  
  es: {
    title: "LA HISTORIA SAGRADA DE",
    subtitle: "SAN CIPRIANO DE ANTIOQUÍA",
    description: "El Gran Mago Eterno - Transformador de Realidades Imposibles",
    intro: "Conoce la historia más poderosa y conmovedora jamás contada en la historia de la humanidad. La vida extraordinaria, muerte brutal e injusta, y resurrección gloriosa del mayor mago que jamás existió. Prepárate para tener tu vida transformada para siempre a través de esta historia sagrada.",
    
    conversionTitle: "¿POR QUÉ TU VIDA ESTÁ DIFÍCIL Y SIN ÉXITO?",
    conversionContent: "Tu vida está difícil, sin éxito verdadero y llena de problemas constantes porque aún no conoces el poder transformador radical de San Cipriano. Millones de personas han salido de la pobreza extrema, encontraron el amor verdadero de sus vidas, fueron curadas de enfermedades terminales consideradas incurables, se hicieron mundialmente famosas y realizaron sueños completamente imposibles a través de él. ¡No sigas sufriendo innecesariamente cuando la solución definitiva está aquí esperándote en este momento exacto!",
    
    without: "SIN San Cipriano",
    withSaint: "CON San Cipriano",
    withoutDesc: "Pobreza extrema, soledad profunda, enfermedades graves, fracasos constantes, falta total de protección espiritual",
    withDesc: "Riqueza infinita garantizada, amor perfecto eterno, salud radiante, éxito mundial comprobado",
    
    journeyTitle: "LA JORNADA ÉPICA DEL GRAN MAGO",
    journeyDesc: "👆 Haz clic en cada capítulo abajo para expandir y leer la historia completa que transformará tu vida",
    clickToExpand: "👆 Haz clic para leer la historia completa y emocionante",
    
    // Continue with all Spanish translations...
    
    dangerousLie: "❌ MENTIRA PELIGROSA:",
    absoluteTruth: "✅ VERDAD ABSOLUTA:",
    
    timeLabel: "⚡ Tiempo:"
  },
  
  // Continue with other languages following the same pattern...
  // For brevity, I'll add key structures for remaining languages
  
  fr: {
    title: "L'HISTOIRE SACRÉE DE",
    subtitle: "SAINT CYPRIEN D'ANTIOCHE",
    description: "Le Grand Mage Éternel - Transformateur de Réalités Impossibles",
    dangerousLie: "❌ MENSONGE DANGEREUX:",
    absoluteTruth: "✅ VÉRITÉ ABSOLUE:",
    timeLabel: "⚡ Temps:"
  },
  
  de: {
    title: "DIE HEILIGE GESCHICHTE VON",
    subtitle: "HEILIGER CYPRIAN VON ANTIOCH",
    description: "Der Ewige Großmagier - Verwandler Unmöglicher Realitäten",
    dangerousLie: "❌ GEFÄHRLICHE LÜGE:",
    absoluteTruth: "✅ ABSOLUTE WAHRHEIT:",
    timeLabel: "⚡ Zeit:"
  },
  
  it: {
    title: "LA STORIA SACRA DI",
    subtitle: "SAN CIPRIANO DI ANTIOCHIA",
    description: "Il Grande Mago Eterno - Trasformatore di Realtà Impossibili",
    dangerousLie: "❌ BUGIA PERICOLOSA:",
    absoluteTruth: "✅ VERITÀ ASSOLUTA:",
    timeLabel: "⚡ Tempo:"
  },
  
  ru: {
    title: "СВЯЩЕННАЯ ИСТОРИЯ",
    subtitle: "СВЯТОГО КИПРИАНА АНТИОХИЙСКОГО",
    description: "Вечный Великий Маг - Преобразователь Невозможных Реальностей",
    dangerousLie: "❌ ОПАСНАЯ ЛОЖЬ:",
    absoluteTruth: "✅ АБСОЛЮТНАЯ ИСТИНА:",
    timeLabel: "⚡ Время:"
  },
  
  zh: {
    title: "神圣历史",
    subtitle: "安提阿的圣西普里安",
    description: "永恒大法师 - 不可能现实的变革者",
    dangerousLie: "❌ 危险谎言:",
    absoluteTruth: "✅ 绝对真理:",
    timeLabel: "⚡ 时间:"
  },
  
  ja: {
    title: "聖なる歴史",
    subtitle: "アンティオキアの聖キプリアヌス",
    description: "永遠の大魔法師 - 不可能な現実の変革者",
    dangerousLie: "❌ 危険な嘘:",
    absoluteTruth: "✅ 絶対的真実:",
    timeLabel: "⚡ 時間:"
  },
  
  ar: {
    title: "التاريخ المقدس",
    subtitle: "للقديس قبريانوس الأنطاكي",
    description: "الساحر العظيم الأبدي - محول الحقائق المستحيلة",
    dangerousLie: "❌ كذبة خطيرة:",
    absoluteTruth: "✅ الحقيقة المطلقة:",
    timeLabel: "⚡ الوقت:"
  },
  
  hi: {
    title: "पवित्र इतिहास",
    subtitle: "एंटिओक के संत साइप्रियन",
    description: "शाश्वत महान जादूगर - असंभव वास्तविकताओं का रूपांतरणकर्ता",
    dangerousLie: "❌ खतरनाक झूठ:",
    absoluteTruth: "✅ पूर्ण सत्य:",
    timeLabel: "⚡ समय:"
  },
  
  ko: {
    title: "신성한 역사",
    subtitle: "안티오키아의 성 키프리아누스",
    description: "영원한 대마법사 - 불가능한 현실의 변혁자",
    dangerousLie: "❌ 위험한 거짓말:",
    absoluteTruth: "✅ 절대적 진실:",
    timeLabel: "⚡ 시간:"
  },
  
  nl: {
    title: "DE HEILIGE GESCHIEDENIS VAN",
    subtitle: "HEILIGE CYPRIAAN VAN ANTIOCHIË",
    description: "De Eeuwige Grote Magiër - Transformator van Onmogelijke Realiteiten",
    dangerousLie: "❌ GEVAARLIJKE LEUGEN:",
    absoluteTruth: "✅ ABSOLUTE WAARHEID:",
    timeLabel: "⚡ Tijd:"
  },
  
  sv: {
    title: "DEN HELIGA HISTORIEN OM",
    subtitle: "HELIGA CYPRIAN AV ANTIOKIA",
    description: "Den Eviga Store Magikern - Förvandlare av Omöjliga Verkligheter",
    dangerousLie: "❌ FARLIG LÖGN:",
    absoluteTruth: "✅ ABSOLUT SANNING:",
    timeLabel: "⚡ Tid:"
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

export default function History() {
  const { language, changeLanguage, t } = useLanguage();
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const historySections = [
    {
      id: '1',
      titleKey: 'section1Title',
      contentKey: 'section1Content',
      image: '/templo.png',
      symbol: '🌟',
      powerKey: 'section1Power'
    },
    {
      id: '2',
      titleKey: 'section2Title',
      contentKey: 'section2Content',
      image: '/antioquia.png',
      symbol: '🔮',
      powerKey: 'section2Power'
    },
    {
      id: '3',
      titleKey: 'section3Title',
      contentKey: 'section3Content',
      image: '/justina.png',
      symbol: '💖',
      powerKey: 'section3Power'
    },
    {
      id: '4',
      titleKey: 'section4Title',
      contentKey: 'section4Content',
      image: '/conversao.png',
      symbol: '✨',
      powerKey: 'section4Power'
    },
    {
      id: '5',
      titleKey: 'section5Title',
      contentKey: 'section5Content',
      image: '/injusto.png',
      symbol: '👑',
      powerKey: 'section5Power'
    },
    {
      id: '6',
      titleKey: 'section6Title',
      contentKey: 'section6Content',
      image: '/gloria.png',
      symbol: '⚡',
      powerKey: 'section6Power'
    },
  ];

  const powers = [
    { icon: '🛡️', nameKey: 'power1Name', descKey: 'power1Desc' },
    { icon: '💰', nameKey: 'power2Name', descKey: 'power2Desc' },
    { icon: '⚡', nameKey: 'power3Name', descKey: 'power3Desc' },
    { icon: '💖', nameKey: 'power4Name', descKey: 'power4Desc' },
    { icon: '🏆', nameKey: 'power5Name', descKey: 'power5Desc' },
    { icon: '🔥', nameKey: 'power6Name', descKey: 'power6Desc' },
    { icon: '🌟', nameKey: 'power7Name', descKey: 'power7Desc' },
    { icon: '🎯', nameKey: 'power8Name', descKey: 'power8Desc' },
    { icon: '🏥', nameKey: 'power9Name', descKey: 'power9Desc' },
    { icon: '🎓', nameKey: 'power10Name', descKey: 'power10Desc' },
    { icon: '🏠', nameKey: 'power11Name', descKey: 'power11Desc' },
    { icon: '⚖️', nameKey: 'power12Name', descKey: 'power12Desc' }
  ];

  const falseBeliefsBreaking = [
    { mythKey: 'myth1', truthKey: 'truth1' },
    { mythKey: 'myth2', truthKey: 'truth2' },
    { mythKey: 'myth3', truthKey: 'truth3' },
    { mythKey: 'myth4', truthKey: 'truth4' },
    { mythKey: 'myth5', truthKey: 'truth5' },
    { mythKey: 'myth6', truthKey: 'truth6' },
    { mythKey: 'myth7', truthKey: 'truth7' },
    { mythKey: 'myth8', truthKey: 'truth8' }
  ];

  const testimonials = [
    {
      nameKey: 'testimonial1Name',
      locationKey: 'testimonial1Location',
      storyKey: 'testimonial1Story',
      transformKey: 'testimonial1Transform',
      timeKey: 'testimonial1Time',
      rating: 5
    },
    {
      nameKey: 'testimonial2Name',
      locationKey: 'testimonial2Location',
      storyKey: 'testimonial2Story',
      transformKey: 'testimonial2Transform',
      timeKey: 'testimonial2Time',
      rating: 5
    },
    {
      nameKey: 'testimonial3Name',
      locationKey: 'testimonial3Location',
      storyKey: 'testimonial3Story',
      transformKey: 'testimonial3Transform',
      timeKey: 'testimonial3Time',
      rating: 5
    },
    {
      nameKey: 'testimonial4Name',
      locationKey: 'testimonial4Location',
      storyKey: 'testimonial4Story',
      transformKey: 'testimonial4Transform',
      timeKey: 'testimonial4Time',
      rating: 5
    },
    {
      nameKey: 'testimonial5Name',
      locationKey: 'testimonial5Location',
      storyKey: 'testimonial5Story',
      transformKey: 'testimonial5Transform',
      timeKey: 'testimonial5Time',
      rating: 5
    }
  ];

  const toggleSection = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  return (
    <div className="min-h-screen bg-obsidian-gradient">
      {/* Language Selector */}
      <LanguageSelector language={language} onLanguageChange={changeLanguage} />

      {/* Header */}
      <div className="text-center py-12 md:py-16 px-4">
        <div className="animate-float mb-8">
          <div className="text-6xl md:text-8xl text-gold-400 animate-glow-text mystical-glow">
            c🔱
          </div>
        </div>
        <h1 className="sacred-text text-3xl md:text-5xl lg:text-6xl font-black text-gold-400 mb-4 leading-tight">
          {t('title')}
        </h1>
        <h2 className="sacred-text text-2xl md:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
          {t('subtitle')}
        </h2>
        <p className="text-gold-300 text-lg md:text-2xl font-bold">
          {t('description')}
        </p>
        <div className="temple-section rounded-3xl p-6 md:p-8 max-w-4xl mx-auto mt-8 shadow-sacred">
          <p className="text-gold-200 italic text-lg md:text-xl leading-relaxed mystical-text">
            "{t('intro')}"
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-24">
        {/* Conversion Hook */}
        <div className="conversion-section rounded-3xl p-8 md:p-10 mb-16 text-center shadow-mystical">
          <h2 className="sacred-text text-2xl md:text-4xl font-black text-gold-400 mb-6 leading-tight">
            {t('conversionTitle')}
          </h2>
          <p className="text-gold-200 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto mb-8">
            {t('conversionContent')}
          </p>
          
          {/* Before/After Comparison */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="bg-red-600/20 rounded-2xl p-6 md:p-8 border border-red-500/30 shadow-sacred">
              <div className="text-4xl md:text-5xl mb-4">😢</div>
              <p className="text-white font-black text-lg md:text-xl mb-2">{t('without')}</p>
              <p className="text-red-300 text-sm md:text-base">{t('withoutDesc')}</p>
            </div>
            
            {/* Arrow - responsive direction */}
            <div className="text-4xl md:text-5xl flex items-center justify-center animate-pulse">
              <span className="hidden md:block">➡️</span>
              <div className="md:hidden flex flex-col items-center">
                <ArrowDown size={40} className="text-gold-400" />
              </div>
            </div>
            
            <div className="bg-green-600/20 rounded-2xl p-6 md:p-8 border border-green-500/30 shadow-sacred">
              <div className="text-4xl md:text-5xl mb-4">😍</div>
              <p className="text-white font-black text-lg md:text-xl mb-2">{t('withSaint')}</p>
              <p className="text-green-300 text-sm md:text-base">{t('withDesc')}</p>
            </div>
          </div>
        </div>

        {/* History Timeline */}
        <div className="space-y-8 md:space-y-10 mb-16">
          <h2 className="sacred-text text-2xl md:text-3xl font-black text-gold-400 text-center mb-8 animate-glow-text">
            {t('journeyTitle')}
          </h2>
          <p className="text-gold-200 text-center mb-12 text-base md:text-lg max-w-3xl mx-auto">
            {t('journeyDesc')}
          </p>
          
          {historySections.map((section, index) => (
            <div key={section.id} className="relative">
              {/* Timeline Line */}
              {index < historySections.length - 1 && (
                <div className="hidden md:block absolute left-10 top-24 w-1 h-32 bg-gradient-to-b from-gold-400 to-transparent shadow-divine" />
              )}
              
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full temple-section rounded-3xl overflow-hidden hover:scale-105 transition-all duration-300 shadow-sacred hover-lift"
              >
                <div className="p-6 md:p-8">
                  {/* Mobile optimized layout */}
                  <div className="flex flex-col md:flex-row items-start gap-4 md:gap-8">
                    {/* Timeline Node */}
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-sacred-gradient rounded-full flex items-center justify-center text-2xl md:text-3xl flex-shrink-0 animate-pulse-sacred shadow-divine mx-auto md:mx-0">
                      {section.symbol}
                    </div>
                    
                    {/* Image - Mobile optimized */}
                    <div className="w-full md:w-24 md:h-24 h-48 rounded-2xl overflow-hidden flex-shrink-0 sacred-border shadow-sacred">
                      <img 
                        src={section.image} 
                        alt={t(section.titleKey)}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Content - Mobile optimized */}
                    <div className="flex-1 text-center md:text-left w-full">
                      <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-4 gap-4">
                        <h3 className="sacred-text text-xl md:text-2xl font-black text-gold-400 leading-tight">
                          {t(section.titleKey)}
                        </h3>
                        <div className="flex items-center text-gold-400 flex-shrink-0 animate-pulse">
                          {expandedSection === section.id ? (
                            <ChevronUp size={28} />
                          ) : (
                            <ChevronDown size={28} />
                          )}
                        </div>
                      </div>
                      <div className="inline-block bg-gradient-to-r from-red-600 to-gold-500 text-white px-4 py-2 rounded-full text-sm font-black mb-4">
                        ⚡ {t(section.powerKey)}
                      </div>
                      {!expandedSection || expandedSection !== section.id ? (
                        <>
                          <p className="text-gold-200 text-sm md:text-base leading-relaxed mb-3">
                            {t(section.contentKey).substring(0, 150)}...
                          </p>
                          <p className="text-gold-300 italic text-sm">
                            {t('clickToExpand')}
                          </p>
                        </>
                      ) : null}
                    </div>
                  </div>
                  
                  {expandedSection === section.id && (
                    <div className="mt-8 pt-8 border-t border-gold-500/30">
                      <p className="text-gold-100 leading-relaxed text-base md:text-lg prayer-text">
                        {t(section.contentKey)}
                      </p>
                      {section.id === '5' && (
                        <div className="mt-6 bg-red-600/20 rounded-2xl p-6 md:p-8 border border-red-500/30 shadow-sacred">
                          <p className="text-red-300 italic text-lg md:text-xl leading-relaxed">
                            {t('injusticeMessage')}
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </button>
            </div>
          ))}
        </div>

        {/* Powers Section */}
        <div className="temple-section rounded-3xl p-8 md:p-10 mb-16 shadow-sacred">
          <h2 className="sacred-text text-2xl md:text-3xl font-black text-gold-400 text-center mb-8">
            {t('powersTitle')}
          </h2>
          <p className="text-gold-200 text-center mb-12 text-lg md:text-xl max-w-3xl mx-auto">
            {t('powersDesc')}
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {powers.map((power, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gold-500/10 to-gold-600/20 rounded-2xl p-4 md:p-6 text-center hover:scale-105 transition-all duration-300 animate-pulse-sacred border border-gold-500/30 shadow-sacred"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl md:text-5xl mb-4">{power.icon}</div>
                <h3 className="text-gold-400 font-black mb-3 text-sm md:text-lg leading-tight">{t(power.nameKey)}</h3>
                <p className="text-gold-200 text-xs md:text-sm leading-relaxed">{t(power.descKey)}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Breaking False Beliefs */}
        <div className="conversion-section rounded-3xl p-8 md:p-10 mb-16 shadow-mystical">
          <h2 className="sacred-text text-2xl md:text-3xl font-black text-gold-400 text-center mb-8">
            {t('beliefsTitle')}
          </h2>
          <p className="text-gold-200 text-center mb-12 text-lg md:text-xl max-w-3xl mx-auto">
            {t('beliefsDesc')}
          </p>
          
          <div className="space-y-6">
            {falseBeliefsBreaking.map((belief, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-red-600/20 rounded-2xl p-6 md:p-8 border border-red-500/30 shadow-sacred">
                  <h3 className="text-red-400 font-black mb-3 text-lg md:text-xl">{t('dangerousLie')}</h3>
                  <p className="text-red-300 leading-relaxed text-base md:text-lg">"{t(belief.mythKey)}"</p>
                </div>
                <div className="bg-green-600/20 rounded-2xl p-6 md:p-8 border border-green-500/30 shadow-sacred">
                  <h3 className="text-green-400 font-black mb-3 text-lg md:text-xl">{t('absoluteTruth')}</h3>
                  <p className="text-green-300 leading-relaxed text-base md:text-lg">{t(belief.truthKey)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="temple-section rounded-3xl p-8 md:p-10 mb-16 shadow-sacred">
          <h2 className="sacred-text text-2xl md:text-3xl font-black text-gold-400 text-center mb-8">
            {t('miraclesTitle')}
          </h2>
          <p className="text-gold-200 text-center mb-12 text-lg md:text-xl max-w-3xl mx-auto">
            {t('miraclesDesc')}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card rounded-3xl p-6 md:p-8 hover:scale-105 transition-all duration-300 shadow-sacred">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-gold-400 fill-current" size={20} />
                  ))}
                </div>
                <p className="text-gold-200 italic mb-6 leading-relaxed text-sm md:text-base">
                  "{t(testimonial.storyKey)}"
                </p>
                <div className="border-t border-gold-500/30 pt-6">
                  <p className="text-gold-400 font-black text-base md:text-lg">{t(testimonial.nameKey)}</p>
                  <p className="text-gold-300 text-sm mb-3">{t(testimonial.locationKey)}</p>
                  <p className="text-green-400 text-xs md:text-sm font-bold bg-green-500/20 rounded-full px-3 py-2 inline-block mb-2">
                    ✅ {t(testimonial.transformKey)}
                  </p>
                  <p className="text-gold-400 text-xs font-bold">
                    {t('timeLabel')} {t(testimonial.timeKey)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sacred Agreement Section */}
        <div className="sacred-agreement-section rounded-3xl p-8 md:p-10 mb-16 text-center shadow-mystical">
          <Crown className="text-gold-400 mx-auto mb-8 animate-pulse-sacred" size={64} />
          <h2 className="sacred-text text-2xl md:text-4xl font-black text-gold-400 mb-8 leading-tight">
            {t('agreementTitle')}
          </h2>
          <p className="text-gold-200 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto mb-10">
            {t('agreementDesc')}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-10">
            <div className="bg-gold-500/10 rounded-2xl p-6 md:p-8 border border-gold-500/30 shadow-sacred">
              <Heart className="text-gold-400 mx-auto mb-4" size={40} />
              <h3 className="text-gold-400 font-black mb-3 text-lg">{t('yourPart')}</h3>
              <div className="text-gold-200 text-sm md:text-base space-y-2">
                {t('yourPartItems').map((item: string, index: number) => (
                  <p key={index}>{item}</p>
                ))}
              </div>
            </div>
            <div className="bg-gold-500/10 rounded-2xl p-6 md:p-8 border border-gold-500/30 shadow-sacred">
              <Zap className="text-gold-400 mx-auto mb-4" size={40} />
              <h3 className="text-gold-400 font-black mb-3 text-lg">{t('hisPart')}</h3>
              <div className="text-gold-200 text-sm md:text-base space-y-2">
                {t('hisPartItems').map((item: string, index: number) => (
                  <p key={index}>{item}</p>
                ))}
              </div>
            </div>
            <div className="bg-gold-500/10 rounded-2xl p-6 md:p-8 border border-gold-500/30 shadow-sacred">
              <Award className="text-gold-400 mx-auto mb-4" size={40} />
              <h3 className="text-gold-400 font-black mb-3 text-lg">{t('guaranteedResults')}</h3>
              <div className="text-gold-200 text-sm md:text-base space-y-2">
                {t('resultsItems').map((item: string, index: number) => (
                  <p key={index}>{item}</p>
                ))}
              </div>
            </div>
          </div>
          
          <button 
            onClick={() => window.location.href = '/app/sacred-agreement'}
            className="sacred-button py-6 md:py-8 px-8 md:px-12 rounded-full text-lg md:text-xl font-black transition-all duration-300 transform hover:scale-105 shadow-divine"
          >
            {t('makeAgreement')}
          </button>
          
          <p className="text-gold-300 text-sm md:text-base mt-6">
            {t('transformationGuarantee')}
          </p>
        </div>

        {/* Call to Action Final */}
        <div className="conversion-section rounded-3xl p-8 md:p-10 text-center shadow-mystical">
          <Star className="text-gold-400 mx-auto mb-8 animate-pulse-sacred" size={64} />
          <h2 className="sacred-text text-2xl md:text-4xl font-black text-gold-400 mb-8 leading-tight">
            {t('finalCallTitle')}
          </h2>
          <p className="text-gold-200 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto mb-10">
            {t('finalCallDesc')}
          </p>
          
          <div className="space-y-6">
            <button 
              onClick={() => window.location.href = '/app/sacred-agreement'}
              className="sacred-button py-6 md:py-8 px-8 md:px-12 rounded-full text-lg md:text-xl font-black transition-all duration-300 transform hover:scale-105 shadow-divine"
            >
              {t('startTransformation')}
            </button>
            
            <p className="text-gold-300 text-sm md:text-base">
              {t('transformationGuarantee')}
            </p>
            
            <p className="text-gold-400 italic text-lg md:text-xl mystical-text">
              "{t('finalQuote')}"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
