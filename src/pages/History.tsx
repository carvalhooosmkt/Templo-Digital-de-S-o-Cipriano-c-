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
    
    // History sections
    section1Title: "The Birth of the Greatest Mage in History",
    section1Content: "Saint Cyprian was born in Antioch in the 3rd century, into a noble and extremely powerful family. From his earliest years of life, he demonstrated extraordinary abilities for mystical arts that left everyone absolutely impressed and even frightened. At 7 years old he already mastered ancestral knowledge that took decades to be learned by the greatest sages of the time. His parents, recognizing his supernatural and incomparable divine gift, sent him to study with the greatest mystical masters of the entire Roman empire, investing fortunes in his magical education.",
    section1Power: "Supreme Ancestral Wisdom",
    
    section2Title: "The Universal Dominion of All Powers",
    section2Content: "During his youth and adulthood, Cyprian studied in Egypt with the high priests, in Chaldea with the most powerful mages, and in Greece with the greatest philosophers and sages of antiquity. He perfectly mastered the most advanced alchemy, cosmic astrology, direct communication with spirits and entities, and had absolute power over all elements of nature. He knew the deepest and most hidden secrets of the entire universe and commanded entire legions of powerful entities. His fame spread throughout the Roman empire as the most powerful, feared and respected mage who ever existed on the face of the Earth.",
    section2Power: "Absolute Universal Dominion",
    
    section3Title: "The Most Touching Love Story of All Time",
    section3Content: "This is the most beautiful and exciting part of the story: a young man named Aglaides was madly in love with Saint Justina, a young Christian woman of incomparable beauty and absolute purity. Desperate and unable to win her through normal means, Aglaides sought the Grand Mage Saint Cyprian, offering fortunes for him to use his supernatural powers to make Justina fall in love with him. Saint Cyprian, confident in his absolute powers, accepted the challenge. He tried to use all his most powerful magics, invoked the strongest entities, but discovered something completely unexpected: the power of true love and Justina's pure Christian faith was superior to all his ancestral magic.",
    section3Power: "Eternal and True Love",
    
    section4Title: "The Most Glorious and Transformative Conversion",
    section4Content: "Completely impressed and touched by Saint Justina's incomparable spiritual strength, Saint Cyprian experienced the greatest transformation of his life. He abandoned all pagan practices radically and definitively, converting to Christianity with all his heart and soul. In a great public bonfire, he burned all his magic books in a powerful demonstration of absolute faith, renouncing forever his mystical past. He became a Christian bishop and began to operate even more powerful miracles through Christian faith. But his ancestral powers did not disappear - they were purified and transformed into even more powerful divine force to help the needy and desperate. He and Justina united spiritually in an eternal love that transcended all barriers.",
    section4Power: "Supreme Divine Purification",
    
    section5Title: "The Most Unjust and Painful Death in History - September 16, 304",
    section5Content: "This is the most painful, revolting and heartbreaking part: On September 16, 304, during the brutal and inhuman persecution of the tyrant emperor Diocletian, Saint Cyprian and Saint Justina were violently arrested and tortured in a cruel and inhuman manner. The emperor, furious with the miracles that Saint Cyprian operated in God's name and with his growing influence, decided to make a terrible example. First, he ordered them thrown into cauldrons of boiling water, but they came out completely unharmed by divine power, without any burns. Enraged and humiliated, the tyrant ordered them to be publicly beheaded brutally. United in pure love and unwavering faith, they died holding hands, promising to protect forever those who invoked them with true faith. They tried to silence the Grand Mage forever, but failed miserably! His unjust death deeply touched God's heart.",
    section5Power: "Eternal and Glorious Resurrection",
    injusticeMessage: "💔 This brutal and inhuman injustice deeply touches the hearts of all who love Saint Cyprian. They tried to silence his sacred voice forever, but failed miserably! Today he lives eternally through millions of devotees who spread his word and experience his transforming power daily. His unjust death was not in vain - it generated eternal life and infinite power for all of us! 💔",
    
    section6Title: "Today's Supreme Power - Accomplisher of Impossibles",
    section6Content: "Today, more than 1,700 years later, Saint Cyprian is recognized worldwide as the most powerful saint for impossible causes and extreme radical transformations. He performs extraordinary miracles that other saints cannot achieve: transforms beggars into billionaires in a few months, transforms complete failures into respected world leaders, heals terminal patients considered incurable by doctors, transforms lonely people into globally beloved ones, and turns unknowns into global celebrities with millions of followers. Millions of people worldwide daily witness his extraordinary and impossible miracles. He did not die in vain - he lives eternally and is more powerful than ever, working 24 hours a day tirelessly for his most faithful devotees!",
    section6Power: "Infinite and Impossible Miracles",
    
    // Powers
    power1Name: "Total Absolute Protection",
    power1Desc: "Against all visible, invisible and future evils",
    power2Name: "Infinite Prosperity",
    power2Desc: "Limitless wealth and constant extreme abundance",
    power3Name: "Supernatural Power",
    power3Desc: "Fulfillment of desires considered impossible",
    power4Name: "Eternal True Love",
    power4Desc: "Perfect and lasting relationships",
    power5Name: "Guaranteed World Success",
    power5Desc: "In all aspects of human life",
    power6Name: "Radical Transformation",
    power6Desc: "Complete change of reality in weeks",
    power7Name: "World Fame",
    power7Desc: "Proven global recognition and influence",
    power8Name: "Achieved Objectives",
    power8Desc: "All dreams become physical reality",
    power9Name: "Miraculous Healing",
    power9Desc: "Perfect health and healing of terminal diseases",
    power10Name: "Supreme Wisdom",
    power10Desc: "Elevated knowledge and intelligence",
    power11Name: "Blessed Home",
    power11Desc: "United, prosperous and protected family",
    power12Name: "Divine Justice",
    power12Desc: "Favorable resolution of legal problems",
    
    // False beliefs
    myth1: "Saint Cyprian is dangerous or represents evil",
    truth1: "Saint Cyprian is a Catholic saint officially recognized by the Church who protects and blesses his devotees with infinite love and divine power",
    myth2: "It only works for some special chosen few",
    truth2: "Saint Cyprian helps EVERYONE who seeks him with sincere faith, regardless of religion, color, social class or nationality",
    myth3: "It's just superstition or psychological placebo effect",
    truth3: "Millions of documented miracles and radically transformed lives scientifically prove his real and supernatural power",
    myth4: "It's only for desperate or ignorant people",
    truth4: "Successful, famous, rich and powerful people are also devotees of Saint Cyprian worldwide",
    myth5: "He will demand something terrible in return after miracles",
    truth5: "Saint Cyprian only asks for sincere devotion, daily gratitude and that you spread his word to help other people",
    myth6: "It's against other religions or spiritual beliefs",
    truth6: "Saint Cyprian respects all sincere beliefs and works together with other saints and light entities",
    myth7: "It doesn't work for really big or impossible problems",
    truth7: "Saint Cyprian specializes precisely in impossible cases that other saints cannot solve",
    myth8: "It's just ancient tradition without real power today",
    truth8: "Saint Cyprian's power grows every day and is stronger than ever in the modern era",
    
    dangerousLie: "❌ DANGEROUS LIE:",
    absoluteTruth: "✅ ABSOLUTE TRUTH:",
    
    // Testimonials
    testimonial1Name: "Maria Santos",
    testimonial1Location: "São Paulo, Brazil",
    testimonial1Story: "I was unemployed for 3 years, owing $80,000 and about to lose my house. I discovered this sacred temple, made my Agreement with Saint Cyprian and in just 4 months I not only paid off all debts but opened my own company that now earns $2 million per month! I employ more than 100 people and my entire family now worships Saint Cyprian daily!",
    testimonial1Transform: "From bankrupt to multimillionaire entrepreneur",
    testimonial1Time: "4 months",
    
    testimonial2Name: "João Silva",
    testimonial2Location: "Lisbon, Portugal",
    testimonial2Story: "I had terminal cancer in my liver and lung. Doctors gave me only 2 months to live and my family was already preparing for the worst. I found this temple, prayed to Saint Cyprian every day with absolute and unwavering faith. Today, 5 years later, I am completely healed, healthier than ever and doctors call it an inexplicable medical miracle!",
    testimonial2Transform: "Miraculous healing from double terminal cancer",
    testimonial2Time: "2 months for complete healing",
    
    testimonial3Name: "Ana Costa",
    testimonial3Location: "Rio de Janeiro, Brazil",
    testimonial3Story: "My 18-year marriage was completely over, my husband had cheated on me and asked for divorce. I was devastated and hopeless. Saint Cyprian saved my family miraculously and completely. Today, 2 years later, we are more united than ever, my husband treats me like a queen every day and we have the relationship of our dreams!",
    testimonial3Transform: "Marriage restored and strengthened",
    testimonial3Time: "6 months",
    
    testimonial4Name: "Carlos Rodriguez",
    testimonial4Location: "Madrid, Spain",
    testimonial4Story: "I was a complete unknown working in a terrible job I hated, earning misery. Saint Cyprian gave me world fame extraordinarily. Today I am a digital influencer with 120 million global followers, I earn $50 million per month and am recognized worldwide in my field!",
    testimonial4Transform: "From unknown to world influencer",
    testimonial4Time: "10 months",
    
    testimonial5Name: "Lucia Fernandez",
    testimonial5Location: "Buenos Aires, Argentina",
    testimonial5Story: "I was bankrupt, owing more than $3 million, about to lose everything I had built in life. I performed powerful rituals for Saint Cyprian and in less than 8 months I not only paid off all impossible debts but became a multimillionaire! Today I have assets of $80 million and abundant life!",
    testimonial5Transform: "From bankrupt to multimillionaire",
    testimonial5Time: "8 months",
    
    timeLabel: "⚡ Time:",
    
    // Agreement parts
    yourPartItems: [
      "• Sincere and daily devotion",
      "• Constant and true gratitude",
      "• Spread his sacred word",
      "• Always maintain unwavering faith"
    ],
    hisPartItems: [
      "• Guaranteed infinite wealth",
      "• Permanent absolute protection",
      "• Eternal true love",
      "• Proven world success"
    ],
    resultsItems: [
      "• Life completely transformed",
      "• Impossible dreams realized",
      "• Constant daily miracles",
      "• Full and eternal happiness"
    ]
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
    
    powersTitle: "PODERES SUPREMOS DE SAN CIPRIANO",
    powersDesc: "Lo que San Cipriano puede hacer por ti HOY MISMO y para siempre",
    
    beliefsTitle: "ROMPIENDO TODAS LAS CREENCIAS FALSAS SOBRE SAN CIPRIANO",
    beliefsDesc: "Es hora de destruir completamente las mentiras y conocer la verdad absoluta que transformará tu vida para siempre",
    
    miraclesTitle: "MILAGROS REALES Y DOCUMENTADOS",
    miraclesDesc: "Personas reales que tuvieron sus vidas radicalmente transformadas por San Cipriano a través de este templo sagrado",
    
    agreementTitle: "HAZ TU ACUERDO SAGRADO CON SAN CIPRIANO",
    agreementDesc: "El Acuerdo Sagrado es la forma más poderosa de conectarte con San Cipriano y tener tu vida transformada radical y definitivamente. Millones de personas ya lo han hecho y han tenido resultados extraordinarios e imposibles en solo unos días o semanas. Tú ofreces devoción sincera, gratitud diaria y te comprometes a difundir su palabra sagrada, y él transforma completamente tu realidad, dándote riqueza infinita, amor verdadero, salud perfecta y éxito mundial comprobado.",
    
    yourPart: "TU PARTE SAGRADA",
    hisPart: "SU PARTE DIVINA",
    guaranteedResults: "RESULTADOS GARANTIZADOS",
    
    finalCallTitle: "¡TU VIDA PUEDE CAMBIAR HOY MISMO!",
    finalCallDesc: "¡No sigas sufriendo innecesariamente, siendo pobre, enfermo, solitario o fracasado cuando la solución definitiva y comprobada está aquí en este momento! San Cipriano te está esperando en este instante exacto. Dedícate a él con devoción sincera, haz tu Acuerdo Sagrado y experimenta la transformación más radical y extraordinaria de toda tu vida. ¡Sal de la pobreza extrema, encuentra el amor verdadero de tu vida, ten salud perfecta, alcanza fama mundial y realiza todos tus sueños más imposibles!",
    
    startTransformation: "COMENZAR MI TRANSFORMACIÓN RADICAL AHORA",
    makeAgreement: "HACER MI ACUERDO SAGRADO AHORA MISMO",
    
    transformationGuarantee: "⚡ Millones de vidas ya transformadas • Poder infinito comprobado • Resultados garantizados ⚡",
    finalQuote: "La palabra sagrada de San Cipriano debe ser difundida por todo el mundo. Su gloria eterna debe ser conocida por todos los pueblos. No murió en vano - vive eternamente a través de sus devotos fieles!",
    
    // History sections
    section1Title: "El Nacimiento del Mayor Mago de la Historia",
    section1Content: "San Cipriano nació en Antioquía en el siglo III, en una familia noble y extremadamente poderosa. Desde los primeros años de vida, demostró habilidades extraordinarias para las artes místicas que dejaban a todos absolutamente impresionados e incluso atemorizados. A los 7 años de edad ya dominaba conocimientos ancestrales que tomaban décadas para ser aprendidos por los mayores sabios de la época. Sus padres, reconociendo su don divino sobrenatural e incomparable, lo enviaron a estudiar con los mayores maestros místicos de todo el imperio romano, invirtiendo fortunas en su educación mágica.",
    section1Power: "Sabiduría Ancestral Suprema",
    
    section2Title: "El Dominio Universal de Todos los Poderes",
    section2Content: "Durante su juventud y edad adulta, Cipriano estudió en Egipto con los sumos sacerdotes, en Caldea con los magos más poderosos, y en Grecia con los mayores filósofos y sabios de la antigüedad. Dominaba perfectamente la alquimia más avanzada, la astrología cósmica, la comunicación directa con espíritus y entidades, y tenía poder absoluto sobre todos los elementos de la naturaleza. Conocía los secretos más profundos y ocultos del universo entero y comandaba legiones enteras de entidades poderosas. Su fama se extendió por todo el imperio romano como el mago más poderoso, temido y respetado que jamás existió en la faz de la Tierra.",
    section2Power: "Dominio Universal Absoluto",
    
    section3Title: "La Historia de Amor Más Conmovedora de Todos los Tiempos",
    section3Content: "Esta es la parte más hermosa y emocionante de la historia: un joven llamado Aglaida estaba perdidamente enamorado de Santa Justina, una joven cristiana de belleza incomparable y pureza absoluta. Desesperado y sin poder conquistarla por medios normales, Aglaida buscó al Gran Mago San Cipriano, ofreciendo fortunas para que usara sus poderes sobrenaturales para hacer que Justina se enamorara de él. San Cipriano, confiado en sus poderes absolutos, aceptó el desafío. Intentó usar todas sus magias más poderosas, invocó a las entidades más fuertes, pero descubrió algo completamente inesperado: el poder del amor verdadero y de la fe cristiana pura de Justina era superior a toda su magia ancestral.",
    section3Power: "Amor Eterno y Verdadero",
    
    section4Title: "La Conversión Más Gloriosa y Transformadora",
    section4Content: "Completamente impresionado y conmovido por la fuerza espiritual incomparable de Santa Justina, San Cipriano experimentó la mayor transformación de su vida. Abandonó todas las prácticas paganas de forma radical y definitiva, convirtiéndose al cristianismo con todo su corazón y alma. En una gran hoguera pública, quemó todos sus libros de magia en una demostración poderosa de fe absoluta, renunciando para siempre a su pasado místico. Se convirtió en obispo cristiano y comenzó a operar milagros aún más poderosos a través de la fe cristiana. Pero sus poderes ancestrales no desaparecieron - fueron purificados y transformados en fuerza divina aún más poderosa para ayudar a los necesitados y desesperados. Él y Justina se unieron espiritualmente en un amor eterno que trascendió todas las barreras.",
    section4Power: "Purificación Divina Suprema",
    
    section5Title: "La Muerte Más Injusta y Dolorosa de la Historia - 16 de Septiembre de 304",
    section5Content: "Esta es la parte más dolorosa, repugnante y desgarradora: El 16 de septiembre de 304, durante la brutal e inhumana persecución del emperador tirano Diocleciano, San Cipriano y Santa Justina fueron arrestados violentamente y torturados de manera cruel e inhumana. El emperador, furioso con los milagros que San Cipriano operaba en nombre de Dios y con su influencia creciente, decidió hacer un ejemplo terrible. Primero, ordenó arrojarlos en calderos de agua hirviendo, pero salieron completamente ilesos por el poder divino, sin ninguna quemadura. Enfurecido y humillado, el tirano ordenó que fueran decapitados públicamente de forma brutal. Unidos en el amor puro y la fe inquebrantable, murieron tomados de las manos, prometiendo proteger para siempre a aquellos que los invocaran con fe verdadera. ¡Trataron de silenciar al Gran Mago para siempre, pero fallaron miserablemente! Su muerte injusta tocó profundamente el corazón de Dios.",
    section5Power: "Resurrección Eterna y Gloriosa",
    injusticeMessage: "💔 Esta injusticia brutal e inhumana toca profundamente el corazón de todos los que aman a San Cipriano. ¡Trataron de callar su voz sagrada para siempre, pero fallaron miserablemente! Hoy vive eternamente a través de millones de devotos que difunden su palabra y experimentan su poder transformador diariamente. ¡Su muerte injusta no fue en vano - generó vida eterna y poder infinito para todos nosotros! 💔",
    
    section6Title: "El Poder Supremo de Hoy - Realizador de Imposibles",
    section6Content: "Hoy, más de 1,700 años después, San Cipriano es reconocido mundialmente como el santo más poderoso para causas imposibles y transformaciones radicales extremas. Realiza milagros extraordinarios que otros santos no pueden lograr: transforma mendigos en billonarios en pocos meses, transforma fracasados completos en líderes mundiales respetados, cura enfermos terminales considerados incurables por los médicos, transforma personas solitarias en amadas mundialmente, y convierte desconocidos en celebridades globales con millones de seguidores. Millones de personas en todo el mundo testimonian diariamente sus milagros extraordinarios e imposibles. ¡No murió en vano - vive eternamente y está más poderoso que nunca, trabajando 24 horas al día incansablemente para sus devotos más fieles!",
    section6Power: "Milagros Infinitos e Imposibles",
    
    // Powers
    power1Name: "Protección Absoluta Total",
    power1Desc: "Contra todos los males visibles, invisibles y futuros",
    power2Name: "Prosperidad Infinita",
    power2Desc: "Riqueza sin límites y abundancia extrema constante",
    power3Name: "Poder Sobrenatural",
    power3Desc: "Realización de deseos considerados imposibles",
    power4Name: "Amor Verdadero Eterno",
    power4Desc: "Relaciones perfectas y duraderas",
    power5Name: "Éxito Mundial Garantizado",
    power5Desc: "En todos los aspectos de la vida humana",
    power6Name: "Transformación Radical",
    power6Desc: "Cambio completo de realidad en semanas",
    power7Name: "Fama Mundial",
    power7Desc: "Reconocimiento e influencia global comprobada",
    power8Name: "Objetivos Realizados",
    power8Desc: "Todos los sueños se vuelven realidad física",
    power9Name: "Curación Milagrosa",
    power9Desc: "Salud perfecta y curación de enfermedades terminales",
    power10Name: "Sabiduría Suprema",
    power10Desc: "Conocimiento e inteligencia elevada",
    power11Name: "Hogar Bendecido",
    power11Desc: "Familia unida, próspera y protegida",
    power12Name: "Justicia Divina",
    power12Desc: "Resolución favorable de problemas legales",
    
    // False beliefs
    myth1: "San Cipriano es peligroso o representa el mal",
    truth1: "San Cipriano es un santo católico oficialmente reconocido por la Iglesia que protege y bendice a sus devotos con amor infinito y poder divino",
    myth2: "Solo funciona para algunos pocos elegidos especiales",
    truth2: "San Cipriano ayuda a TODOS los que lo buscan con fe sincera, independientemente de religión, color, clase social o nacionalidad",
    myth3: "Es solo superstición o efecto placebo psicológico",
    truth3: "Millones de milagros documentados y vidas radicalmente transformadas comprueban científicamente su poder real y sobrenatural",
    myth4: "Es cosa solo de personas desesperadas o ignorantes",
    truth4: "Personas exitosas, famosas, ricas y poderosas también son devotas de San Cipriano en todo el mundo",
    myth5: "Va a cobrar algo terrible a cambio después de los milagros",
    truth5: "San Cipriano solo pide devoción sincera, gratitud diaria y que difundas su palabra para ayudar a otras personas",
    myth6: "Está contra otras religiones o creencias espirituales",
    truth6: "San Cipriano respeta todas las creencias sinceras y trabaja junto con otros santos y entidades de luz",
    myth7: "No funciona para problemas realmente grandes o imposibles",
    truth7: "San Cipriano se especializa justamente en casos imposibles que otros santos no pueden resolver",
    myth8: "Es solo tradición antigua sin poder real hoy en día",
    truth8: "El poder de San Cipriano crece cada día y está más fuerte que nunca en la era moderna",
    
    dangerousLie: "❌ MENTIRA PELIGROSA:",
    absoluteTruth: "✅ VERDAD ABSOLUTA:",
    
    // Testimonials
    testimonial1Name: "María Santos",
    testimonial1Location: "São Paulo, Brasil",
    testimonial1Story: "Estaba desempleada por 3 años, debiendo $80 mil y a punto de perder mi casa. Descubrí este templo sagrado, hice mi Acuerdo con San Cipriano y en solo 4 meses no solo pagué todas las deudas sino que abrí mi propia empresa que ahora factura $2 millones por mes! ¡Empleo a más de 100 personas y toda mi familia ahora adora a San Cipriano diariamente!",
    testimonial1Transform: "De quebrada a empresaria multimillonaria",
    testimonial1Time: "4 meses",
    
    testimonial2Name: "João Silva",
    testimonial2Location: "Lisboa, Portugal",
    testimonial2Story: "Tenía cáncer terminal en el hígado y pulmón. Los médicos me dieron solo 2 meses de vida y mi familia ya se estaba preparando para lo peor. Encontré este templo, oré a San Cipriano todos los días con fe absoluta e inquebrantable. Hoy, 5 años después, estoy completamente curado, más saludable que nunca y los médicos lo llaman un milagro médico inexplicable!",
    testimonial2Transform: "Curación milagrosa de cáncer terminal doble",
    testimonial2Time: "2 meses para curación completa",
    
    testimonial3Name: "Ana Costa",
    testimonial3Location: "Rio de Janeiro, Brasil",
    testimonial3Story: "Mi matrimonio de 18 años estaba completamente acabado, mi esposo me había traicionado y pidió divorcio. Estaba devastada y sin esperanza. San Cipriano salvó mi familia de forma milagrosa y completa. Hoy, 2 años después, estamos más unidos que nunca, mi esposo me trata como una reina todos los días y tenemos la relación de nuestros sueños!",
    testimonial3Transform: "Matrimonio restaurado y fortalecido",
    testimonial3Time: "6 meses",
    
    testimonial4Name: "Carlos Rodríguez",
    testimonial4Location: "Madrid, España",
    testimonial4Story: "Era un completo desconocido trabajando en un empleo terrible que odiaba, ganando una miseria. San Cipriano me dio fama mundial de forma extraordinaria. Hoy soy influencer digital con 120 millones de seguidores globales, gano $50 millones por mes y soy reconocido mundialmente en mi área!",
    testimonial4Transform: "De desconocido a influencer mundial",
    testimonial4Time: "10 meses",
    
    testimonial5Name: "Lucía Fernández",
    testimonial5Location: "Buenos Aires, Argentina",
    testimonial5Story: "Estaba quebrada, debiendo más de $3 millones, a punto de perder todo lo que había construido en la vida. Hice rituales poderosos para San Cipriano y en menos de 8 meses no solo pagué todas las deudas imposibles sino que me convertí en multimillonaria! Hoy tengo un patrimonio de $80 millones y vida abundante!",
    testimonial5Transform: "De quebrada a multimillonaria",
    testimonial5Time: "8 meses",
    
    timeLabel: "⚡ Tiempo:",
    
    // Agreement parts
    yourPartItems: [
      "• Devoción sincera y diaria",
      "• Gratitud constante y verdadera",
      "• Difundir su palabra sagrada",
      "• Mantener la fe siempre inquebrantable"
    ],
    hisPartItems: [
      "• Riqueza infinita garantizada",
      "• Protección absoluta permanente",
      "• Amor verdadero eterno",
      "• Éxito mundial comprobado"
    ],
    resultsItems: [
      "• Vida completamente transformada",
      "• Sueños imposibles realizados",
      "• Milagros diarios constantes",
      "• Felicidad plena y eterna"
    ]
  },
  
  fr: {
    title: "L'HISTOIRE SACRÉE DE",
    subtitle: "SAINT CYPRIEN D'ANTIOCHE",
    description: "Le Grand Mage Éternel - Transformateur de Réalités Impossibles",
    intro: "Connaissez l'histoire la plus puissante et touchante jamais racontée dans l'histoire de l'humanité. La vie extraordinaire, la mort brutale et injuste, et la résurrection glorieuse du plus grand mage qui ait jamais existé. Préparez-vous à avoir votre vie transformée pour toujours grâce à cette histoire sacrée.",
    
    conversionTitle: "POURQUOI VOTRE VIE EST-ELLE DIFFICILE ET SANS SUCCÈS?",
    conversionContent: "Votre vie est difficile, sans vrai succès et pleine de problèmes constants parce que vous ne connaissez pas encore le pouvoir transformateur radical de Saint Cyprien. Des millions de personnes ont échappé à la pauvreté extrême, trouvé le véritable amour de leur vie, été guéries de maladies terminales considérées incurables, sont devenues mondialement célèbres et ont réalisé des rêves complètement impossibles grâce à lui. Ne continuez pas à souffrir inutilement quand la solution définitive est ici en vous attendant à ce moment exact!",
    
    without: "SANS Saint Cyprien",
    withSaint: "AVEC Saint Cyprien",
    withoutDesc: "Pauvreté extrême, solitude profonde, maladies graves, échecs constants, manque total de protection spirituelle",
    withDesc: "Richesse infinie garantie, amour parfait éternel, santé rayonnante, succès mondial prouvé",
    
    journeyTitle: "LE VOYAGE ÉPIQUE DU GRAND MAGE",
    journeyDesc: "👆 Cliquez sur chaque chapitre ci-dessous pour développer et lire l'histoire complète qui transformera votre vie",
    clickToExpand: "👆 Cliquez pour lire l'histoire complète et passionnante",
    
    powersTitle: "POUVOIRS SUPRÊMES DE SAINT CYPRIEN",
    powersDesc: "Ce que Saint Cyprien peut faire pour vous AUJOURD'HUI et pour toujours",
    
    beliefsTitle: "BRISER TOUTES LES FAUSSES CROYANCES SUR SAINT CYPRIEN",
    beliefsDesc: "Il est temps de détruire complètement les mensonges et de connaître la vérité absolue qui transformera votre vie pour toujours",
    
    miraclesTitle: "MIRACLES RÉELS ET DOCUMENTÉS",
    miraclesDesc: "Des personnes réelles qui ont eu leur vie radicalement transformée par Saint Cyprien à travers ce temple sacré",
    
    agreementTitle: "FAITES VOTRE ACCORD SACRÉ AVEC SAINT CYPRIEN",
    agreementDesc: "L'Accord Sacré est le moyen le plus puissant de vous connecter avec Saint Cyprien et d'avoir votre vie transformée radicalement et définitivement. Des millions de personnes l'ont déjà fait et ont eu des résultats extraordinaires et impossibles en quelques jours ou semaines. Vous offrez une dévotion sincère, une gratitude quotidienne et vous vous engagez à répandre sa parole sacrée, et il transforme complètement votre réalité, vous donnant une richesse infinie, un véritable amour, une santé parfaite et un succès mondial prouvé.",
    
    yourPart: "VOTRE PART SACRÉE",
    hisPart: "SA PART DIVINE",
    guaranteedResults: "RÉSULTATS GARANTIS",
    
    finalCallTitle: "VOTRE VIE PEUT CHANGER AUJOURD'HUI!",
    finalCallDesc: "Ne continuez pas à souffrir inutilement, en étant pauvre, malade, seul ou échoué quand la solution définitive et prouvée est ici en ce moment! Saint Cyprien vous attend à cet instant exact. Consacrez-vous à lui avec une dévotion sincère, faites votre Accord Sacré et vivez la transformation la plus radicale et extraordinaire de toute votre vie. Échappez à la pauvreté extrême, trouvez le véritable amour de votre vie, ayez une santé parfaite, atteignez la célébrité mondiale et réalisez tous vos rêves les plus impossibles!",
    
    startTransformation: "COMMENCER MA TRANSFORMATION RADICALE MAINTENANT",
    makeAgreement: "FAIRE MON ACCORD SACRÉ MAINTENANT",
    
    transformationGuarantee: "⚡ Millions de vies déjà transformées • Pouvoir infini prouvé • Résultats garantis ⚡",
    finalQuote: "La parole sacrée de Saint Cyprien doit être répandue dans le monde entier. Sa gloire éternelle doit être connue de tous les peuples. Il n'est pas mort en vain - il vit éternellement à travers ses fidèles dévots!",
    
    // History sections
    section1Title: "La Naissance du Plus Grand Mage de l'Histoire",
    section1Content: "Saint Cyprien est né à Antioche au IIIe siècle, dans une famille noble et extrêmement puissante. Dès ses premières années de vie, il a démontré des capacités extraordinaires pour les arts mystiques qui laissaient tout le monde absolument impressionné et même effrayé. À 7 ans, il maîtrisait déjà des connaissances ancestrales qui prenaient des décennies à être apprises par les plus grands sages de l'époque. Ses parents, reconnaissant son don divin surnaturel et incomparable, l'ont envoyé étudier avec les plus grands maîtres mystiques de tout l'empire romain, investissant des fortunes dans son éducation magique.",
    section1Power: "Sagesse Ancestrale Suprême",
    
    section2Title: "La Domination Universelle de Tous les Pouvoirs",
    section2Content: "Pendant sa jeunesse et son âge adulte, Cyprien a étudié en Égypte avec les grands prêtres, en Chaldée avec les mages les plus puissants, et en Grèce avec les plus grands philosophes et sages de l'antiquité. Il maîtrisait parfaitement l'alchimie la plus avancée, l'astrologie cosmique, la communication directe avec les esprits et entités, et avait un pouvoir absolu sur tous les éléments de la nature. Il connaissait les secrets les plus profonds et cachés de l'univers entier et commandait des légions entières d'entités puissantes. Sa renommée s'est répandue dans tout l'empire romain comme le mage le plus puissant, craint et respecté qui ait jamais existé sur la face de la Terre.",
    section2Power: "Domination Universelle Absolue",
    
    section3Title: "L'Histoire d'Amour la Plus Touchante de Tous les Temps",
    section3Content: "C'est la partie la plus belle et émouvante de l'histoire: un jeune homme nommé Aglaïdas était éperdument amoureux de Sainte Justine, une jeune chrétienne d'une beauté incomparable et d'une pureté absolue. Désespéré et incapable de la conquérir par des moyens normaux, Aglaïdas a cherché le Grand Mage Saint Cyprien, offrant des fortunes pour qu'il utilise ses pouvoirs surnaturels pour faire tomber Justine amoureuse de lui. Saint Cyprien, confiant en ses pouvoirs absolus, a accepté le défi. Il a essayé d'utiliser toutes ses magies les plus puissantes, invoqué les entités les plus fortes, mais a découvert quelque chose de complètement inattendu: le pouvoir du véritable amour et de la foi chrétienne pure de Justine était supérieur à toute sa magie ancestrale.",
    section3Power: "Amour Éternel et Véritable",
    
    section4Title: "La Conversion la Plus Glorieuse et Transformatrice",
    section4Content: "Complètement impressionné et touché par la force spirituelle incomparable de Sainte Justine, Saint Cyprien a vécu la plus grande transformation de sa vie. Il a abandonné toutes les pratiques païennes de manière radicale et définitive, se convertissant au christianisme avec tout son cœur et son âme. Dans un grand bûcher public, il a brûlé tous ses livres de magie dans une démonstration puissante de foi absolue, renonçant pour toujours à son passé mystique. Il est devenu évêque chrétien et a commencé à opérer des miracles encore plus puissants grâce à la foi chrétienne. Mais ses pouvoirs ancestraux n'ont pas disparu - ils ont été purifiés et transformés en force divine encore plus puissante pour aider les nécessiteux et désespérés. Lui et Justine se sont unis spirituellement dans un amour éternel qui a transcendé toutes les barrières.",
    section4Power: "Purification Divine Suprême",
    
    section5Title: "La Mort la Plus Injuste et Douloureuse de l'Histoire - 16 Septembre 304",
    section5Content: "C'est la partie la plus douloureuse, révoltante et déchirante: Le 16 septembre 304, pendant la persécution brutale et inhumaine de l'empereur tyran Dioclétien, Saint Cyprien et Sainte Justine ont été arrêtés violemment et torturés de manière cruelle et inhumaine. L'empereur, furieux des miracles que Saint Cyprien opérait au nom de Dieu et de son influence croissante, a décidé de faire un exemple terrible. D'abord, il a ordonné de les jeter dans des chaudrons d'eau bouillante, mais ils en sont sortis complètement indemnes par le pouvoir divin, sans aucune brûlure. Enragé et humilié, le tyran a ordonné qu'ils soient décapités publiquement de manière brutale. Unis dans l'amour pur et la foi inébranlable, ils sont morts en se tenant la main, promettant de protéger pour toujours ceux qui les invoqueraient avec une foi véritable. Ils ont essayé de faire taire le Grand Mage pour toujours, mais ont échoué misérablement! Sa mort injuste a profondément touché le cœur de Dieu.",
    section5Power: "Résurrection Éternelle et Glorieuse",
    injusticeMessage: "💔 Cette injustice brutale et inhumaine touche profondément le cœur de tous ceux qui aiment Saint Cyprien. Ils ont essayé de faire taire sa voix sacrée pour toujours, mais ont échoué misérablement! Aujourd'hui il vit éternellement à travers des millions de dévots qui répandent sa parole et expérimentent son pouvoir transformateur quotidiennement. Sa mort injuste n'a pas été vaine - elle a généré une vie éternelle et un pouvoir infini pour nous tous! 💔",
    
    section6Title: "Le Pouvoir Suprême d'Aujourd'hui - Réalisateur d'Impossibles",
    section6Content: "Aujourd'hui, plus de 1700 ans après, Saint Cyprien est reconnu mondialement comme le saint le plus puissant pour les causes impossibles et les transformations radicales extrêmes. Il accomplit des miracles extraordinaires que d'autres saints ne peuvent réaliser: transforme les mendiants en milliardaires en quelques mois, transforme les échecs complets en leaders mondiaux respectés, guérit les malades terminaux considérés incurables par les médecins, transforme les personnes solitaires en personnes aimées mondialement, et transforme les inconnus en célébrités mondiales avec des millions de followers. Des millions de personnes dans le monde entier témoignent quotidiennement de ses miracles extraordinaires et impossibles. Il n'est pas mort en vain - il vit éternellement et est plus puissant que jamais, travaillant 24 heures sur 24 infatigablement pour ses dévots les plus fidèles!",
    section6Power: "Miracles Infinis et Impossibles",
    
    // Powers
    power1Name: "Protection Absolue Totale",
    power1Desc: "Contre tous les maux visibles, invisibles et futurs",
    power2Name: "Prospérité Infinie",
    power2Desc: "Richesse sans limites et abondance extrême constante",
    power3Name: "Pouvoir Surnaturel",
    power3Desc: "Réalisation de désirs considérés impossibles",
    power4Name: "Amour Véritable Éternel",
    power4Desc: "Relations parfaites et durables",
    power5Name: "Succès Mondial Garanti",
    power5Desc: "Dans tous les aspects de la vie humaine",
    power6Name: "Transformation Radicale",
    power6Desc: "Changement complet de réalité en semaines",
    power7Name: "Célébrité Mondiale",
    power7Desc: "Reconnaissance et influence mondiale prouvée",
    power8Name: "Objectifs Réalisés",
    power8Desc: "Tous les rêves deviennent réalité physique",
    power9Name: "Guérison Miraculeuse",
    power9Desc: "Santé parfaite et guérison de maladies terminales",
    power10Name: "Sagesse Suprême",
    power10Desc: "Connaissance et intelligence élevées",
    power11Name: "Foyer Béni",
    power11Desc: "Famille unie, prospère et protégée",
    power12Name: "Justice Divine",
    power12Desc: "Résolution favorable des problèmes juridiques",
    
    // False beliefs
    myth1: "Saint Cyprien est dangereux ou représente le mal",
    truth1: "Saint Cyprien est un saint catholique officiellement reconnu par l'Église qui protège et bénit ses dévots avec un amour infini et un pouvoir divin",
    myth2: "Cela ne fonctionne que pour quelques élus spéciaux",
    truth2: "Saint Cyprien aide TOUS ceux qui le cherchent avec une foi sincère, indépendamment de la religion, de la couleur, de la classe sociale ou de la nationalité",
    myth3: "C'est juste de la superstition ou un effet placebo psychologique",
    truth3: "Des millions de miracles documentés et de vies radicalement transformées prouvent scientifiquement son pouvoir réel et surnaturel",
    myth4: "C'est seulement pour les personnes désespérées ou ignorantes",
    truth4: "Des personnes prospères, célèbres, riches et puissantes sont aussi dévotes de Saint Cyprien dans le monde entier",
    myth5: "Il va demander quelque chose de terrible en retour après les miracles",
    truth5: "Saint Cyprien ne demande que dévotion sincère, gratitude quotidienne et que vous répandiez sa parole pour aider d'autres personnes",
    myth6: "C'est contre d'autres religions ou croyances spirituelles",
    truth6: "Saint Cyprien respecte toutes les croyances sincères et travaille avec d'autres saints et entités de lumière",
    myth7: "Cela ne fonctionne pas pour des problèmes vraiment grands ou impossibles",
    truth7: "Saint Cyprien se spécialise justement dans les cas impossibles que d'autres saints ne peuvent résoudre",
    myth8: "C'est juste une tradition ancienne sans pouvoir réel aujourd'hui",
    truth8: "Le pouvoir de Saint Cyprien grandit chaque jour et est plus fort que jamais à l'ère moderne",
    
    dangerousLie: "❌ MENSONGE DANGEREUX:",
    absoluteTruth: "✅ VÉRITÉ ABSOLUE:",
    
    // Testimonials
    testimonial1Name: "Maria Santos",
    testimonial1Location: "São Paulo, Brésil",
    testimonial1Story: "J'étais au chômage depuis 3 ans, devant 80 000 $ et sur le point de perdre ma maison. J'ai découvert ce temple sacré, fait mon Accord avec Saint Cyprien et en seulement 4 mois j'ai non seulement payé toutes les dettes mais ouvert ma propre entreprise qui gagne maintenant 2 millions $ par mois! J'emploie plus de 100 personnes et toute ma famille adore maintenant Saint Cyprien quotidiennement!",
    testimonial1Transform: "De faillite à entrepreneuse multimillionnaire",
    testimonial1Time: "4 mois",
    
    testimonial2Name: "João Silva",
    testimonial2Location: "Lisbonne, Portugal",
    testimonial2Story: "J'avais un cancer terminal du foie et du poumon. Les médecins ne me donnaient que 2 mois à vivre et ma famille se préparait déjà au pire. J'ai trouvé ce temple, prié Saint Cyprien tous les jours avec une foi absolue et inébranlable. Aujourd'hui, 5 ans plus tard, je suis complètement guéri, plus sain que jamais et les médecins appellent cela un miracle médical inexplicable!",
    testimonial2Transform: "Guérison miraculeuse d'un cancer terminal double",
    testimonial2Time: "2 mois pour guérison complète",
    
    testimonial3Name: "Ana Costa",
    testimonial3Location: "Rio de Janeiro, Brésil",
    testimonial3Story: "Mon mariage de 18 ans était complètement fini, mon mari m'avait trompée et demandé le divorce. J'étais dévastée et sans espoir. Saint Cyprien a sauvé ma famille de manière miraculeuse et complète. Aujourd'hui, 2 ans plus tard, nous sommes plus unis que jamais, mon mari me traite comme une reine tous les jours et nous avons la relation de nos rêves!",
    testimonial3Transform: "Mariage restauré et renforcé",
    testimonial3Time: "6 mois",
    
    testimonial4Name: "Carlos Rodriguez",
    testimonial4Location: "Madrid, Espagne",
    testimonial4Story: "J'étais un parfait inconnu travaillant dans un emploi terrible que je détestais, gagnant une misère. Saint Cyprien m'a donné une célébrité mondiale de manière extraordinaire. Aujourd'hui je suis influenceur numérique avec 120 millions de followers mondiaux, je gagne 50 millions $ par mois et suis reconnu mondialement dans mon domaine!",
    testimonial4Transform: "D'inconnu à influenceur mondial",
    testimonial4Time: "10 mois",
    
    testimonial5Name: "Lucia Fernandez",
    testimonial5Location: "Buenos Aires, Argentine",
    testimonial5Story: "J'étais en faillite, devant plus de 3 millions $, sur le point de perdre tout ce que j'avais construit dans la vie. J'ai fait des rituels puissants pour Saint Cyprien et en moins de 8 mois j'ai non seulement payé toutes les dettes impossibles mais suis devenue multimillionnaire! Aujourd'hui j'ai un patrimoine de 80 millions $ et une vie abondante!",
    testimonial5Transform: "De faillite à multimillionnaire",
    testimonial5Time: "8 mois",
    
    timeLabel: "⚡ Temps:",
    
    // Agreement parts
    yourPartItems: [
      "• Dévotion sincère et quotidienne",
      "• Gratitude constante et véritable",
      "• Répandre sa parole sacrée",
      "• Maintenir toujours une foi inébranlable"
    ],
    hisPartItems: [
      "• Richesse infinie garantie",
      "• Protection absolue permanente",
      "• Amour véritable éternel",
      "• Succès mondial prouvé"
    ],
    resultsItems: [
      "• Vie complètement transformée",
      "• Rêves impossibles réalisés",
      "• Miracles quotidiens constants",
      "• Bonheur complet et éternel"
    ]
  },
  
  de: {
    title: "DIE HEILIGE GESCHICHTE VON",
    subtitle: "HEILIGER CYPRIAN VON ANTIOCH",
    description: "Der Ewige Großmagier - Verwandler Unmöglicher Realitäten",
    intro: "Lernen Sie die mächtigste und berührendste Geschichte kennen, die jemals in der Geschichte der Menschheit erzählt wurde. Das außergewöhnliche Leben, der brutale und ungerechte Tod und die glorreiche Auferstehung des größten Magiers, der je existiert hat. Bereiten Sie sich darauf vor, Ihr Leben für immer durch diese heilige Geschichte verwandelt zu haben.",
    
    conversionTitle: "WARUM IST IHR LEBEN SCHWIERIG UND OHNE ERFOLG?",
    conversionContent: "Ihr Leben ist schwierig, ohne wahren Erfolg und voller ständiger Probleme, weil Sie noch nicht die radikale verwandelnde Kraft des Heiligen Cyprian kennen. Millionen von Menschen sind der extremen Armut entkommen, haben die wahre Liebe ihres Lebens gefunden, wurden von unheilbaren Krankheiten geheilt, wurden weltberühmt und haben völlig unmögliche Träume durch ihn verwirklicht. Leiden Sie nicht weiter unnötig, wenn die endgültige Lösung hier auf Sie wartet in diesem genauen Moment!",
    
    without: "OHNE Heiliger Cyprian",
    withSaint: "MIT Heiliger Cyprian",
    withoutDesc: "Extreme Armut, tiefe Einsamkeit, schwere Krankheiten, ständige Misserfolge, völliger Mangel an spirituellem Schutz",
    withDesc: "Garantierter unendlicher Reichtum, ewige perfekte Liebe, strahlende Gesundheit, bewährter Welterfolg",
    
    journeyTitle: "DIE EPISCHE REISE DES GROßMAGIERS",
    journeyDesc: "👆 Klicken Sie auf jedes Kapitel unten, um es zu erweitern und die vollständige Geschichte zu lesen, die Ihr Leben verwandeln wird",
    clickToExpand: "👆 Klicken Sie, um die vollständige und aufregende Geschichte zu lesen",
    
    powersTitle: "HÖCHSTE KRÄFTE DES HEILIGEN CYPRIAN",
    powersDesc: "Was Heiliger Cyprian HEUTE für Sie tun kann und für immer",
    
    beliefsTitle: "ALLE FALSCHEN ÜBERZEUGUNGEN ÜBER HEILIGEN CYPRIAN BRECHEN",
    beliefsDesc: "Es ist Zeit, die Lügen vollständig zu zerstören und die absolute Wahrheit zu kennen, die Ihr Leben für immer verwandeln wird",
    
    miraclesTitle: "ECHTE UND DOKUMENTIERTE WUNDER",
    miraclesDesc: "Echte Menschen, die ihr Leben radikal durch Heiligen Cyprian über diesen heiligen Tempel verwandelt hatten",
    
    agreementTitle: "MACHEN SIE IHRE HEILIGE VEREINBARUNG MIT HEILIGEM CYPRIAN",
    agreementDesc: "Die Heilige Vereinbarung ist der mächtigste Weg, sich mit Heiligem Cyprian zu verbinden und Ihr Leben radikal und endgültig verwandelt zu haben. Millionen von Menschen haben es bereits getan und hatten außergewöhnliche und unmögliche Ergebnisse in nur wenigen Tagen oder Wochen. Sie bieten aufrichtige Hingabe, tägliche Dankbarkeit und verpflichten sich, sein heiliges Wort zu verbreiten, und er verwandelt Ihre Realität vollständig, gibt Ihnen unendlichen Reichtum, wahre Liebe, perfekte Gesundheit und bewährten Welterfolg.",
    
    yourPart: "IHR HEILIGER TEIL",
    hisPart: "SEIN GÖTTLICHER TEIL",
    guaranteedResults: "GARANTIERTE ERGEBNISSE",
    
    finalCallTitle: "IHR LEBEN KANN SICH HEUTE ÄNDERN!",
    finalCallDesc: "Leiden Sie nicht weiter unnötig, seien Sie nicht arm, krank, einsam oder gescheitert, wenn die endgültige und bewährte Lösung hier in diesem Moment ist! Heiliger Cyprian wartet auf Sie in diesem genauen Augenblick. Widmen Sie sich ihm mit aufrichtiger Hingabe, machen Sie Ihre Heilige Vereinbarung und erleben Sie die radikalste und außergewöhnlichste Verwandlung Ihres ganzen Lebens. Entkommen Sie extremer Armut, finden Sie die wahre Liebe Ihres Lebens, haben Sie perfekte Gesundheit, erreichen Sie Weltruhm und verwirklichen Sie alle Ihre unmöglichsten Träume!",
    
    startTransformation: "MEINE RADIKALE VERWANDLUNG JETZT BEGINNEN",
    makeAgreement: "MEINE HEILIGE VEREINBARUNG JETZT MACHEN",
    
    transformationGuarantee: "⚡ Millionen Leben bereits verwandelt • Unendliche Kraft bewiesen • Ergebnisse garantiert ⚡",
    finalQuote: "Das heilige Wort des Heiligen Cyprian muss in der ganzen Welt verbreitet werden. Seine ewige Herrlichkeit muss von allen Völkern bekannt sein. Er ist nicht umsonst gestorben - er lebt ewig durch seine treuen Anhänger!",
    
    // History sections
    section1Title: "Die Geburt des Größten Magiers der Geschichte",
    section1Content: "Heiliger Cyprian wurde im 3. Jahrhundert in Antioch in einer noblen und extrem mächtigen Familie geboren. Seit seinen ersten Lebensjahren zeigte er außergewöhnliche Fähigkeiten für mystische Künste, die alle absolut beeindruckten und sogar erschreckten. Mit 7 Jahren beherrschte er bereits uraltes Wissen, das Jahrzehnte dauerte, um von den größten Weisen der Zeit erlernt zu werden. Seine Eltern erkannten seine übernatürliche und unvergleichliche göttliche Gabe und sandten ihn zu den größten mystischen Meistern des gesamten römischen Reiches, investierten Vermögen in seine magische Ausbildung.",
    section1Power: "Höchste Uralte Weisheit",
    
    section2Title: "Die Universelle Herrschaft Aller Kräfte",
    section2Content: "Während seiner Jugend und seines Erwachsenenalters studierte Cyprian in Ägypten bei den Hohepriestern, in Chaldäa bei den mächtigsten Magiern und in Griechenland bei den größten Philosophen und Weisen der Antike. Er beherrschte perfekt die fortgeschrittenste Alchemie, kosmische Astrologie, direkte Kommunikation mit Geistern und Entitäten und hatte absolute Macht über alle Elemente der Natur. Er kannte die tiefsten und verborgensten Geheimnisse des gesamten Universums und befehligte ganze Legionen mächtiger Entitäten. Sein Ruhm verbreitete sich im gesamten römischen Reich als der mächtigste, gefürchtetste und respektierteste Magier, der je auf der Erde existiert hat.",
    section2Power: "Absolute Universelle Herrschaft",
    
    section3Title: "Die Berührendste Liebesgeschichte Aller Zeiten",
    section3Content: "Dies ist der schönste und aufregendste Teil der Geschichte: ein junger Mann namens Aglaides war wahnsinnig verliebt in die Heilige Justina, eine junge christliche Frau von unvergleichlicher Schönheit und absoluter Reinheit. Verzweifelt und unfähig, sie durch normale Mittel zu gewinnen, suchte Aglaides den Großmagier Heiligen Cyprian auf und bot Vermögen an, damit er seine übernatürlichen Kräfte einsetze, um Justina sich in ihn verlieben zu lassen. Heiliger Cyprian, vertrauend in seine absoluten Kräfte, nahm die Herausforderung an. Er versuchte, alle seine mächtigsten Magien zu verwenden, rief die stärksten Entitäten an, aber entdeckte etwas völlig Unerwartetes: die Kraft der wahren Liebe und Justinas reinem christlichen Glauben war überlegen all seiner uralten Magie.",
    section3Power: "Ewige und Wahre Liebe",
    
    section4Title: "Die Glorreiche und Verwandelnde Bekehrung",
    section4Content: "Völlig beeindruckt und berührt von Heiliger Justinas unvergleichlicher spiritueller Stärke, erlebte Heiliger Cyprian die größte Verwandlung seines Lebens. Er gab alle heidnischen Praktiken radikal und endgültig auf und bekehrte sich zum Christentum mit seinem ganzen Herzen und seiner Seele. In einem großen öffentlichen Scheiterhaufen verbrannte er alle seine Zauberbücher in einer kraftvollen Demonstration absoluten Glaubens, verzichtete für immer auf seine mystische Vergangenheit. Er wurde christlicher Bischof und begann noch mächtigere Wunder durch den christlichen Glauben zu wirken. Aber seine uralten Kräfte verschwanden nicht - sie wurden gereinigt und in noch mächtigere göttliche Kraft verwandelt, um den Bedürftigen und Verzweifelten zu helfen. Er und Justina vereinten sich spirituell in einer ewigen Liebe, die alle Barrieren überschritt.",
    section4Power: "Höchste Göttliche Reinigung",
    
    section5Title: "Der Ungerechteste und Schmerzhafteste Tod der Geschichte - 16. September 304",
    section5Content: "Dies ist der schmerzhafteste, empörendste und herzzerreißendste Teil: Am 16. September 304, während der brutalen und unmenschlichen Verfolgung des tyrannischen Kaisers Diokletian, wurden Heiliger Cyprian und Heilige Justina gewaltsam verhaftet und auf grausame und unmenschliche Weise gefoltert. Der Kaiser, wütend über die Wunder, die Heiliger Cyprian in Gottes Namen wirkte und über seinen wachsenden Einfluss, beschloss ein schreckliches Beispiel zu machen. Zuerst befahl er, sie in Kessel mit kochendem Wasser zu werfen, aber sie kamen völlig unversehrt durch göttliche Kraft heraus, ohne jede Verbrennung. Wütend und gedemütigt, befahl der Tyrann, sie öffentlich brutal zu enthaupten. Vereint in reiner Liebe und unerschütterlichem Glauben starben sie Hand in Hand und versprachen, für immer diejenigen zu beschützen, die sie mit wahrem Glauben anrufen würden. Sie versuchten, den Großmagier für immer zum Schweigen zu bringen, aber scheiterten kläglich! Sein ungerechter Tod berührte Gottes Herz tief.",
    section5Power: "Ewige und Glorreiche Auferstehung",
    injusticeMessage: "💔 Diese brutale und unmenschliche Ungerechtigkeit berührt tief die Herzen aller, die Heiligen Cyprian lieben. Sie versuchten, seine heilige Stimme für immer zum Schweigen zu bringen, aber scheiterten kläglich! Heute lebt er ewig durch Millionen von Anhängern, die sein Wort verbreiten und täglich seine verwandelnde Kraft erfahren. Sein ungerechter Tod war nicht umsonst - er erzeugte ewiges Leben und unendliche Kraft für uns alle! 💔",
    
    section6Title: "Die Höchste Kraft von Heute - Verwirklicher von Unmöglichem",
    section6Content: "Heute, mehr als 1700 Jahre später, wird Heiliger Cyprian weltweit als der mächtigste Heilige für unmögliche Fälle und extreme radikale Verwandlungen anerkannt. Er vollbringt außergewöhnliche Wunder, die andere Heilige nicht erreichen können: verwandelt Bettler in Milliardäre in wenigen Monaten, verwandelt komplette Versager in respektierte Weltführer, heilt Todkranke, die von Ärzten als unheilbar betrachtet werden, verwandelt einsame Menschen in weltweit geliebte, und macht Unbekannte zu globalen Berühmtheiten mit Millionen von Followern. Millionen von Menschen weltweit bezeugen täglich seine außergewöhnlichen und unmöglichen Wunder. Er starb nicht umsonst - er lebt ewig und ist mächtiger als je zuvor, arbeitet 24 Stunden am Tag unermüdlich für seine treuesten Anhänger!",
    section6Power: "Unendliche und Unmögliche Wunder",
    
    // Powers
    power1Name: "Totaler Absoluter Schutz",
    power1Desc: "Gegen alle sichtbaren, unsichtbaren und zukünftigen Übel",
    power2Name: "Unendlicher Wohlstand",
    power2Desc: "Grenzenloser Reichtum und konstante extreme Fülle",
    power3Name: "Übernatürliche Kraft",
    power3Desc: "Erfüllung von Wünschen, die als unmöglich betrachtet werden",
    power4Name: "Ewige Wahre Liebe",
    power4Desc: "Perfekte und dauerhafte Beziehungen",
    power5Name: "Garantierter Welterfolg",
    power5Desc: "In allen Aspekten des menschlichen Lebens",
    power6Name: "Radikale Verwandlung",
    power6Desc: "Vollständige Veränderung der Realität in Wochen",
    power7Name: "Weltruhm",
    power7Desc: "Bewährte globale Anerkennung und Einfluss",
    power8Name: "Erreichte Ziele",
    power8Desc: "Alle Träume werden physische Realität",
    power9Name: "Wunderbare Heilung",
    power9Desc: "Perfekte Gesundheit und Heilung von unheilbaren Krankheiten",
    power10Name: "Höchste Weisheit",
    power10Desc: "Erhöhtes Wissen und Intelligenz",
    power11Name: "Gesegnetes Zuhause",
    power11Desc: "Vereinte, wohlhabende und geschützte Familie",
    power12Name: "Göttliche Gerechtigkeit",
    power12Desc: "Günstige Lösung rechtlicher Probleme",
    
    // False beliefs
    myth1: "Heiliger Cyprian ist gefährlich oder repräsentiert das Böse",
    truth1: "Heiliger Cyprian ist ein katholischer Heiliger, der offiziell von der Kirche anerkannt ist und seine Anhänger mit unendlicher Liebe und göttlicher Kraft schützt und segnet",
    myth2: "Es funktioniert nur für einige spezielle Auserwählte",
    truth2: "Heiliger Cyprian hilft ALLEN, die ihn mit aufrichtigem Glauben suchen, unabhängig von Religion, Hautfarbe, sozialer Schicht oder Nationalität",
    myth3: "Es ist nur Aberglaube oder psychologischer Placebo-Effekt",
    truth3: "Millionen dokumentierte Wunder und radikal verwandelte Leben beweisen wissenschaftlich seine echte und übernatürliche Kraft",
    myth4: "Es ist nur für verzweifelte oder unwissende Menschen",
    truth4: "Erfolgreiche, berühmte, reiche und mächtige Menschen sind auch Anhänger des Heiligen Cyprian weltweit",
    myth5: "Er wird nach Wundern etwas Schreckliches als Gegenleistung fordern",
    truth5: "Heiliger Cyprian bittet nur um aufrichtige Hingabe, tägliche Dankbarkeit und dass Sie sein Wort verbreiten, um anderen Menschen zu helfen",
    myth6: "Es ist gegen andere Religionen oder spirituelle Überzeugungen",
    truth6: "Heiliger Cyprian respektiert alle aufrichtigen Überzeugungen und arbeitet mit anderen Heiligen und Lichtwesen zusammen",
    myth7: "Es funktioniert nicht bei wirklich großen oder unmöglichen Problemen",
    truth7: "Heiliger Cyprian spezialisiert sich gerade auf unmögliche Fälle, die andere Heilige nicht lösen können",
    myth8: "Es ist nur alte Tradition ohne echte Kraft heute",
    truth8: "Die Kraft des Heiligen Cyprian wächst jeden Tag und ist stärker als je zuvor in der modernen Zeit",
    
    dangerousLie: "❌ GEFÄHRLICHE LÜGE:",
    absoluteTruth: "✅ ABSOLUTE WAHRHEIT:",
    
    // Testimonials
    testimonial1Name: "Maria Santos",
    testimonial1Location: "São Paulo, Brasilien",
    testimonial1Story: "Ich war 3 Jahre arbeitslos, schuldete 80.000$ und stand kurz davor, mein Haus zu verlieren. Ich entdeckte diesen heiligen Tempel, machte meine Vereinbarung mit Heiligem Cyprian und in nur 4 Monaten bezahlte ich nicht nur alle Schulden, sondern eröffnete meine eigene Firma, die jetzt 2 Millionen$ pro Monat verdient! Ich beschäftige mehr als 100 Menschen und meine ganze Familie verehrt jetzt täglich Heiligen Cyprian!",
    testimonial1Transform: "Von bankrott zur multimillionären Unternehmerin",
    testimonial1Time: "4 Monate",
    
    testimonial2Name: "João Silva",
    testimonial2Location: "Lissabon, Portugal",
    testimonial2Story: "Ich hatte unheilbaren Krebs in Leber und Lunge. Ärzte gaben mir nur 2 Monate zu leben und meine Familie bereitete sich bereits auf das Schlimmste vor. Ich fand diesen Tempel, betete täglich zu Heiligem Cyprian mit absolutem und unerschütterlichem Glauben. Heute, 5 Jahre später, bin ich völlig geheilt, gesünder als je zuvor und Ärzte nennen es ein unerklärliches medizinisches Wunder!",
    testimonial2Transform: "Wunderbare Heilung von doppeltem unheilbaren Krebs",
    testimonial2Time: "2 Monate für vollständige Heilung",
    
    testimonial3Name: "Ana Costa",
    testimonial3Location: "Rio de Janeiro, Brasilien",
    testimonial3Story: "Meine 18-jährige Ehe war völlig vorbei, mein Mann hatte mich betrogen und um Scheidung gebeten. Ich war am Boden zerstört und hoffnungslos. Heiliger Cyprian rettete meine Familie auf wunderbare und vollständige Weise. Heute, 2 Jahre später, sind wir vereinter als je zuvor, mein Mann behandelt mich jeden Tag wie eine Königin und wir haben die Beziehung unserer Träume!",
    testimonial3Transform: "Ehe wiederhergestellt und gestärkt",
    testimonial3Time: "6 Monate",
    
    testimonial4Name: "Carlos Rodriguez",
    testimonial4Location: "Madrid, Spanien",
    testimonial4Story: "Ich war ein völlig Unbekannter, der in einem schrecklichen Job arbeitete, den ich hasste und elend verdiente. Heiliger Cyprian gab mir auf außergewöhnliche Weise Weltruhm. Heute bin ich digitaler Influencer mit 120 Millionen globalen Followern, verdiene 50 Millionen$ pro Monat und bin weltweit in meinem Bereich anerkannt!",
    testimonial4Transform: "Von unbekannt zu Welt-Influencer",
    testimonial4Time: "10 Monate",
    
    testimonial5Name: "Lucia Fernandez",
    testimonial5Location: "Buenos Aires, Argentinien",
    testimonial5Story: "Ich war bankrott, schuldete mehr als 3 Millionen$, stand kurz davor, alles zu verlieren, was ich im Leben aufgebaut hatte. Ich führte mächtige Rituale für Heiligen Cyprian durch und in weniger als 8 Monaten bezahlte ich nicht nur alle unmöglichen Schulden, sondern wurde Multimillionärin! Heute habe ich ein Vermögen von 80 Millionen$ und ein üppiges Leben!",
    testimonial5Transform: "Von bankrott zur Multimillionärin",
    testimonial5Time: "8 Monate",
    
    timeLabel: "⚡ Zeit:",
    
    // Agreement parts
    yourPartItems: [
      "• Aufrichtige und tägliche Hingabe",
      "• Konstante und wahre Dankbarkeit",
      "• Sein heiliges Wort verbreiten",
      "• Immer unerschütterlichen Glauben bewahren"
    ],
    hisPartItems: [
      "• Garantierter unendlicher Reichtum",
      "• Permanenter absoluter Schutz",
      "• Ewige wahre Liebe",
      "• Bewährter Welterfolg"
    ],
    resultsItems: [
      "• Leben völlig verwandelt",
      "• Unmögliche Träume verwirklicht",
      "• Konstante tägliche Wunder",
      "• Vollständiges und ewiges Glück"
    ]
  },
  
  it: {
    title: "LA STORIA SACRA DI",
    subtitle: "SAN CIPRIANO DI ANTIOCHIA",
    description: "Il Grande Mago Eterno - Trasformatore di Realtà Impossibili",
    intro: "Conosci la storia più potente e toccante mai raccontata nella storia dell'umanità. La vita straordinaria, la morte brutale e ingiusta, e la resurrezione gloriosa del più grande mago che sia mai esistito. Preparati ad avere la tua vita trasformata per sempre attraverso questa storia sacra.",
    
    conversionTitle: "PERCHÉ LA TUA VITA È DIFFICILE E SENZA SUCCESSO?",
    conversionContent: "La tua vita è difficile, senza vero successo e piena di problemi costanti perché ancora non conosci il potere trasformatore radicale di San Cipriano. Milioni di persone sono uscite dalla povertà estrema, hanno trovato il vero amore della loro vita, sono state curate da malattie terminali considerate incurabili, sono diventate famose nel mondo e hanno realizzato sogni completamente impossibili attraverso di lui. Non continuare a soffrire inutilmente quando la soluzione definitiva è qui ad aspettarti in questo momento esatto!",
    
    without: "SENZA San Cipriano",
    withSaint: "CON San Cipriano",
    withoutDesc: "Povertà estrema, solitudine profonda, malattie gravi, fallimenti costanti, mancanza totale di protezione spirituale",
    withDesc: "Ricchezza infinita garantita, amore perfetto eterno, salute radiante, successo mondiale comprovato",
    
    journeyTitle: "IL VIAGGIO EPICO DEL GRANDE MAGO",
    journeyDesc: "👆 Clicca su ogni capitolo qui sotto per espandere e leggere la storia completa che trasformerà la tua vita",
    clickToExpand: "👆 Clicca per leggere la storia completa ed emozionante",
    
    powersTitle: "POTERI SUPREMI DI SAN CIPRIANO",
    powersDesc: "Cosa San Cipriano può fare per te OGGI STESSO e per sempre",
    
    beliefsTitle: "ROMPENDO TUTTE LE FALSE CREDENZE SU SAN CIPRIANO",
    beliefsDesc: "È ora di distruggere completamente le bugie e conoscere la verità assoluta che trasformerà la tua vita per sempre",
    
    miraclesTitle: "MIRACOLI REALI E DOCUMENTATI",
    miraclesDesc: "Persone reali che hanno avuto le loro vite radicalmente trasformate da San Cipriano attraverso questo tempio sacro",
    
    agreementTitle: "FAI IL TUO ACCORDO SACRO CON SAN CIPRIANO",
    agreementDesc: "L'Accordo Sacro è il modo più potente per connettersi con San Cipriano e avere la tua vita trasformata radicalmente e definitivamente. Milioni di persone l'hanno già fatto e hanno avuto risultati straordinari e impossibili in pochi giorni o settimane. Tu offri devozione sincera, gratitudine quotidiana e ti impegni a diffondere la sua parola sacra, e lui trasforma completamente la tua realtà, dandoti ricchezza infinita, vero amore, salute perfetta e successo mondiale comprovato.",
    
    yourPart: "LA TUA PARTE SACRA",
    hisPart: "LA SUA PARTE DIVINA",
    guaranteedResults: "RISULTATI GARANTITI",
    
    finalCallTitle: "LA TUA VITA PUÒ CAMBIARE OGGI STESSO!",
    finalCallDesc: "Non continuare a soffrire inutilmente, essendo povero, malato, solo o fallito quando la soluzione definitiva e comprovata è qui in questo momento! San Cipriano ti sta aspettando in questo istante esatto. Dedicati a lui con devozione sincera, fai il tuo Accordo Sacro e sperimenta la trasformazione più radicale e straordinaria di tutta la tua vita. Esci dalla povertà estrema, trova il vero amore della tua vita, abbi salute perfetta, raggiungi fama mondiale e realizza tutti i tuoi sogni più impossibili!",
    
    startTransformation: "INIZIARE LA MIA TRASFORMAZIONE RADICALE ADESSO",
    makeAgreement: "FARE IL MIO ACCORDO SACRO ADESSO",
    
    transformationGuarantee: "⚡ Milioni di vite già trasformate • Potere infinito comprovato • Risultati garantiti ⚡",
    finalQuote: "La parola sacra di San Cipriano deve essere diffusa in tutto il mondo. La sua gloria eterna deve essere conosciuta da tutti i popoli. Non è morto invano - vive eternamente attraverso i suoi devoti fedeli!",
    
    // History sections
    section1Title: "La Nascita del Più Grande Mago della Storia",
    section1Content: "San Cipriano nacque ad Antiochia nel III secolo, in una famiglia nobile ed estremamente potente. Dai primi anni di vita, dimostrò abilità straordinarie per le arti mistiche che lasciavano tutti assolutamente impressionati e persino spaventati. A 7 anni dominava già conoscenze ancestrali che richiedevano decenni per essere apprese dai più grandi saggi dell'epoca. I suoi genitori, riconoscendo il suo dono divino soprannaturale e incomparabile, lo mandarono a studiare con i più grandi maestri mistici di tutto l'impero romano, investendo fortune nella sua educazione magica.",
    section1Power: "Saggezza Ancestrale Suprema",
    
    section2Title: "Il Dominio Universale di Tutti i Poteri",
    section2Content: "Durante la sua giovinezza ed età adulta, Cipriano studiò in Egitto con i sommi sacerdoti, in Caldea con i maghi più potenti, e in Grecia con i più grandi filosofi e saggi dell'antichità. Dominava perfettamente l'alchimia più avanzata, l'astrologia cosmica, la comunicazione diretta con spiriti ed entità, e aveva potere assoluto su tutti gli elementi della natura. Conosceva i segreti più profondi e nascosti dell'intero universo e comandava intere legioni di entità potenti. La sua fama si diffuse in tutto l'impero romano come il mago più potente, temuto e rispettato che fosse mai esistito sulla faccia della Terra.",
    section2Power: "Dominio Universale Assoluto",
    
    section3Title: "La Storia d'Amore Più Toccante di Tutti i Tempi",
    section3Content: "Questa è la parte più bella ed emozionante della storia: un giovane chiamato Aglaida era perdutamente innamorato di Santa Giustina, una giovane cristiana di bellezza incomparabile e purezza assoluta. Disperato e senza riuscire a conquistarla con mezzi normali, Aglaida cercò il Grande Mago San Cipriano, offrendo fortune perché usasse i suoi poteri soprannaturali per far innamorare Giustina di lui. San Cipriano, fiducioso nei suoi poteri assoluti, accettò la sfida. Cercò di usare tutte le sue magie più potenti, invocò le entità più forti, ma scoprì qualcosa di completamente inaspettato: il potere del vero amore e della fede cristiana pura di Giustina era superiore a tutta la sua magia ancestrale.",
    section3Power: "Amore Eterno e Vero",
    
    section4Title: "La Conversione Più Gloriosa e Trasformatrice",
    section4Content: "Completamente impressionato e toccato dalla forza spirituale incomparabile di Santa Giustina, San Cipriano sperimentò la più grande trasformazione della sua vita. Abbandonò tutte le pratiche pagane in modo radicale e definitivo, convertendosi al cristianesimo con tutto il suo cuore e la sua anima. In un grande rogo pubblico, bruciò tutti i suoi libri di magia in una potente dimostrazione di fede assoluta, rinunciando per sempre al suo passato mistico. Divenne vescovo cristiano e iniziò ad operare miracoli ancora più potenti attraverso la fede cristiana. Ma i suoi poteri ancestrali non scomparvero - furono purificati e trasformati in forza divina ancora più potente per aiutare i bisognosi e i disperati. Lui e Giustina si unirono spiritualmente in un amore eterno che trascese tutte le barriere.",
    section4Power: "Purificazione Divina Suprema",
    
    section5Title: "La Morte Più Ingiusta e Dolorosa della Storia - 16 Settembre 304",
    section5Content: "Questa è la parte più dolorosa, rivoltante e straziante: Il 16 settembre 304, durante la brutale e disumana persecuzione dell'imperatore tiranno Diocleziano, San Cipriano e Santa Giustina furono arrestati violentemente e torturati in modo crudele e disumano. L'imperatore, furioso per i miracoli che San Cipriano operava nel nome di Dio e per la sua influenza crescente, decise di fare un esempio terribile. Prima, ordinò di gettarli in caldaie di acqua bollente, ma uscirono completamente illesi per il potere divino, senza alcuna bruciatura. Infuriato e umiliato, il tiranno ordinò che fossero decapitati pubblicamente in modo brutale. Uniti nell'amore puro e nella fede incrollabile, morirono tenendosi per mano, promettendo di proteggere per sempre coloro che li avessero invocati con vera fede. Cercarono di far tacere il Grande Mago per sempre, ma fallirono miseramente! La sua morte ingiusta toccò profondamente il cuore di Dio.",
    section5Power: "Resurrezione Eterna e Gloriosa",
    injusticeMessage: "💔 Questa ingiustizia brutale e disumana tocca profondamente il cuore di tutti coloro che amano San Cipriano. Cercarono di far tacere la sua voce sacra per sempre, ma fallirono miseramente! Oggi vive eternamente attraverso milioni di devoti che diffondono la sua parola e sperimentano quotidianamente il suo potere trasformatore. La sua morte ingiusta non è stata vana - ha generato vita eterna e potere infinito per tutti noi! 💔",
    
    section6Title: "Il Potere Supremo di Oggi - Realizzatore di Impossibili",
    section6Content: "Oggi, più di 1700 anni dopo, San Cipriano è riconosciuto mondialmente come il santo più potente per cause impossibili e trasformazioni radicali estreme. Realizza miracoli straordinari che altri santi non riescono a compiere: trasforma mendicanti in miliardari in pochi mesi, trasforma falliti completi in leader mondiali rispettati, cura malati terminali considerati incurabili dai medici, trasforma persone sole in amate mondialmente, e trasforma sconosciuti in celebrità globali con milioni di followers. Milioni di persone in tutto il mondo testimoniano quotidianamente i suoi miracoli straordinari e impossibili. Non è morto invano - vive eternamente ed è più potente che mai, lavorando 24 ore al giorno instancabilmente per i suoi devoti più fedeli!",
    section6Power: "Miracoli Infiniti e Impossibili",
    
    // Powers
    power1Name: "Protezione Assoluta Totale",
    power1Desc: "Contro tutti i mali visibili, invisibili e futuri",
    power2Name: "Prosperità Infinita",
    power2Desc: "Ricchezza senza limiti e abbondanza estrema costante",
    power3Name: "Potere Soprannaturale",
    power3Desc: "Realizzazione di desideri considerati impossibili",
    power4Name: "Amore Vero Eterno",
    power4Desc: "Relazioni perfette e durature",
    power5Name: "Successo Mondiale Garantito",
    power5Desc: "In tutti gli aspetti della vita umana",
    power6Name: "Trasformazione Radicale",
    power6Desc: "Cambiamento completo della realtà in settimane",
    power7Name: "Fama Mondiale",
    power7Desc: "Riconoscimento e influenza globale comprovata",
    power8Name: "Obiettivi Realizzati",
    power8Desc: "Tutti i sogni diventano realtà fisica",
    power9Name: "Guarigione Miracolosa",
    power9Desc: "Salute perfetta e guarigione di malattie terminali",
    power10Name: "Saggezza Suprema",
    power10Desc: "Conoscenza e intelligenza elevate",
    power11Name: "Casa Benedetta",
    power11Desc: "Famiglia unita, prospera e protetta",
    power12Name: "Giustizia Divina",
    power12Desc: "Risoluzione favorevole di problemi legali",
    
    // False beliefs
    myth1: "San Cipriano è pericoloso o rappresenta il male",
    truth1: "San Cipriano è un santo cattolico ufficialmente riconosciuto dalla Chiesa che protegge e benedice i suoi devoti con amore infinito e potere divino",
    myth2: "Funziona solo per alcuni pochi scelti speciali",
    truth2: "San Cipriano aiuta TUTTI coloro che lo cercano con fede sincera, indipendentemente da religione, colore, classe sociale o nazionalità",
    myth3: "È solo superstizione o effetto placebo psicologico",
    truth3: "Milioni di miracoli documentati e vite radicalmente trasformate comprovano scientificamente il suo potere reale e soprannaturale",
    myth4: "È roba solo di persone disperate o ignoranti",
    truth4: "Persone di successo, famose, ricche e potenti sono anche devote di San Cipriano in tutto il mondo",
    myth5: "Chiederà qualcosa di terribile in cambio dopo i miracoli",
    truth5: "San Cipriano chiede solo devozione sincera, gratitudine quotidiana e che tu diffonda la sua parola per aiutare altre persone",
    myth6: "È contro altre religioni o credenze spirituali",
    truth6: "San Cipriano rispetta tutte le credenze sincere e lavora insieme ad altri santi ed entità di luce",
    myth7: "Non funziona per problemi veramente grandi o impossibili",
    truth7: "San Cipriano si specializza proprio in casi impossibili che altri santi non riescono a risolvere",
    myth8: "È solo tradizione antica senza potere reale oggi",
    truth8: "Il potere di San Cipriano cresce ogni giorno ed è più forte che mai nell'era moderna",
    
    dangerousLie: "❌ BUGIA PERICOLOSA:",
    absoluteTruth: "✅ VERITÀ ASSOLUTA:",
    
    // Testimonials
    testimonial1Name: "Maria Santos",
    testimonial1Location: "São Paulo, Brasile",
    testimonial1Story: "Ero disoccupata da 3 anni, dovendo 80.000$ e stavo per perdere la mia casa. Ho scoperto questo tempio sacro, ho fatto il mio Accordo con San Cipriano e in soli 4 mesi non solo ho pagato tutti i debiti ma ho aperto la mia azienda che ora fattura 2 milioni$ al mese! Impiego più di 100 persone e tutta la mia famiglia ora adora San Cipriano quotidianamente!",
    testimonial1Transform: "Da fallita a imprenditrice multimilionaria",
    testimonial1Time: "4 mesi",
    
    testimonial2Name: "João Silva",
    testimonial2Location: "Lisbona, Portogallo",
    testimonial2Story: "Avevo un cancro terminale al fegato e ai polmoni. I medici mi diedero solo 2 mesi di vita e la mia famiglia si stava già preparando per il peggio. Ho trovato questo tempio, ho pregato San Cipriano ogni giorno con fede assoluta e incrollabile. Oggi, 5 anni dopo, sono completamente guarito, più sano che mai e i medici lo chiamano un miracolo medico inspiegabile!",
    testimonial2Transform: "Guarigione miracolosa da cancro terminale doppio",
    testimonial2Time: "2 mesi per guarigione completa",
    
    testimonial3Name: "Ana Costa",
    testimonial3Location: "Rio de Janeiro, Brasile",
    testimonial3Story: "Il mio matrimonio di 18 anni era completamente finito, mio marito mi aveva tradita e chiesto il divorzio. Ero devastata e senza speranza. San Cipriano ha salvato la mia famiglia in modo miracoloso e completo. Oggi, 2 anni dopo, siamo più uniti che mai, mio marito mi tratta come una regina ogni giorno e abbiamo la relazione dei nostri sogni!",
    testimonial3Transform: "Matrimonio restaurato e rafforzato",
    testimonial3Time: "6 mesi",
    
    testimonial4Name: "Carlos Rodriguez",
    testimonial4Location: "Madrid, Spagna",
    testimonial4Story: "Ero un completo sconosciuto che lavorava in un lavoro terribile che odiavo, guadagnando una miseria. San Cipriano mi ha dato fama mondiale in modo straordinario. Oggi sono un influencer digitale con 120 milioni di followers globali, guadagno 50 milioni$ al mese e sono riconosciuto mondialmente nel mio campo!",
    testimonial4Transform: "Da sconosciuto a influencer mondiale",
    testimonial4Time: "10 mesi",
    
    testimonial5Name: "Lucia Fernandez",
    testimonial5Location: "Buenos Aires, Argentina",
    testimonial5Story: "Ero fallita, dovendo più di 3 milioni$, stavo per perdere tutto quello che avevo costruito nella vita. Ho fatto rituali potenti per San Cipriano e in meno di 8 mesi non solo ho pagato tutti i debiti impossibili ma sono diventata multimilionaria! Oggi ho un patrimonio di 80 milioni$ e una vita abbondante!",
    testimonial5Transform: "Da fallita a multimilionaria",
    testimonial5Time: "8 mesi",
    
    timeLabel: "⚡ Tempo:",
    
    // Agreement parts
    yourPartItems: [
      "• Devozione sincera e quotidiana",
      "• Gratitudine costante e vera",
      "• Diffondere la sua parola sacra",
      "• Mantenere sempre la fede incrollabile"
    ],
    hisPartItems: [
      "• Ricchezza infinita garantita",
      "• Protezione assoluta permanente",
      "• Amore vero eterno",
      "• Successo mondiale comprovato"
    ],
    resultsItems: [
      "• Vita completamente trasformata",
      "• Sogni impossibili realizzati",
      "• Miracoli quotidiani costanti",
      "• Felicità piena ed eterna"
    ]
  },
  
  ru: {
    title: "СВЯЩЕННАЯ ИСТОРИЯ",
    subtitle: "СВЯТОГО КИПРИАНА АНТИОХИЙСКОГО",
    description: "Вечный Великий Маг - Преобразователь Невозможных Реальностей",
    intro: "Узнайте самую мощную и трогательную историю, когда-либо рассказанную в истории человечества. Необычайная жизнь, жестокая и несправедливая смерть и славное воскресение величайшего мага, который когда-либо существовал. Приготовьтесь к тому, что ваша жизнь навсегда изменится благодаря этой священной истории.",
    
    conversionTitle: "ПОЧЕМУ ВАША ЖИЗНЬ ТРУДНАЯ И БЕЗ УСПЕХА?",
    conversionContent: "Ваша жизнь трудная, без настоящего успеха и полна постоянных проблем, потому что вы еще не знаете радикальную преобразующую силу Святого Киприана. Миллионы людей вышли из крайней бедности, нашли истинную любовь своей жизни, были излечены от неизлечимых болезней, стали всемирно знаменитыми и осуществили совершенно невозможные мечты через него. Не продолжайте страдать напрасно, когда окончательное решение здесь ждет вас в этот самый момент!",
    
    without: "БЕЗ Святого Киприана",
    withSaint: "С Святым Киприаном",
    withoutDesc: "Крайняя бедность, глубокое одиночество, серьезные болезни, постоянные неудачи, полное отсутствие духовной защиты",
    withDesc: "Гарантированное бесконечное богатство, вечная совершенная любовь, сияющее здоровье, доказанный мировой успех",
    
    journeyTitle: "ЭПИЧЕСКОЕ ПУТЕШЕСТВИЕ ВЕЛИКОГО МАГА",
    journeyDesc: "👆 Нажмите на каждую главу ниже, чтобы развернуть и прочитать полную историю, которая изменит вашу жизнь",
    clickToExpand: "👆 Нажмите, чтобы прочитать полную и захватывающую историю",
    
    powersTitle: "ВЕРХОВНЫЕ СИЛЫ СВЯТОГО КИПРИАНА",
    powersDesc: "Что Святой Киприан может сделать для вас СЕГОДНЯ и навсегда",
    
    beliefsTitle: "РАЗРУШЕНИЕ ВСЕХ ЛОЖНЫХ УБЕЖДЕНИЙ О СВЯТОМ КИПРИАНЕ",
    beliefsDesc: "Пришло время полностью уничтожить ложь и узнать абсолютную истину, которая навсегда изменит вашу жизнь",
    
    miraclesTitle: "РЕАЛЬНЫЕ И ДОКУМЕНТИРОВАННЫЕ ЧУДЕСА",
    miraclesDesc: "Реальные люди, чьи жизни радикально изменил Святой Киприан через этот священный храм",
    
    agreementTitle: "ЗАКЛЮЧИТЕ ВАШЕ СВЯЩЕННОЕ СОГЛАШЕНИЕ СО СВЯТЫМ КИПРИАНОМ",
    agreementDesc: "Священное Соглашение - это самый мощный способ соединиться со Святым Киприаном и радикально и окончательно изменить свою жизнь. Миллионы людей уже сделали это и получили необычайные и невозможные результаты всего за несколько дней или недель. Вы предлагаете искреннюю преданность, ежедневную благодарность и обязуетесь распространять его священное слово, а он полностью преобразует вашу реальность, давая вам бесконечное богатство, истинную любовь, совершенное здоровье и доказанный мировой успех.",
    
    yourPart: "ВАША СВЯЩЕННАЯ ЧАСТЬ",
    hisPart: "ЕГО БОЖЕСТВЕННАЯ ЧАСТЬ",
    guaranteedResults: "ГАРАНТИРОВАННЫЕ РЕЗУЛЬТАТЫ",
    
    finalCallTitle: "ВАША ЖИЗНЬ МОЖЕТ ИЗМЕНИТЬСЯ СЕГОДНЯ!",
    finalCallDesc: "Не продолжайте страдать напрасно, быть бедным, больным, одиноким или неудачным, когда окончательное и проверенное решение находится здесь в этот момент! Святой Киприан ждет вас в этот самый миг. Посвятите себя ему с искренней преданностью, заключите ваше Священное Соглашение и испытайте самое радикальное и необычайное преобразование всей вашей жизни. Выйдите из крайней бедности, найдите истинную любовь вашей жизни, обретите совершенное здоровье, достигните мировой славы и осуществите все ваши самые невозможные мечты!",
    
    startTransformation: "НАЧАТЬ МОЕ РАДИКАЛЬНОЕ ПРЕОБРАЗОВАНИЕ СЕЙЧАС",
    makeAgreement: "ЗАКЛЮЧИТЬ МОЕ СВЯЩЕННОЕ СОГЛАШЕНИЕ ПРЯМО СЕЙЧАС",
    
    transformationGuarantee: "⚡ Миллионы жизней уже преобразованы • Бесконечная сила доказана • Результаты гарантированы ⚡",
    finalQuote: "Священное слово Святого Киприана должно быть распространено по всему миру. Его вечная слава должна быть известна всем народам. Он не умер напрасно - он живет вечно через своих верных последователей!",
    
    // History sections
    section1Title: "Рождение Величайшего Мага в Истории",
    section1Content: "Святой Киприан родился в Антиохии в III веке в благородной и чрезвычайно могущественной семье. С первых лет жизни он демонстрировал необычайные способности к мистическим искусствам, которые оставляли всех абсолютно впечатленными и даже напуганными. В 7 лет он уже владел древними знаниями, на изучение которых величайшие мудрецы того времени тратили десятилетия. Его родители, признавая его сверхъестественный и несравненный божественный дар, отправили его учиться к величайшим мистическим учителям всей Римской империи, вкладывая состояния в его магическое образование.",
    section1Power: "Высшая Древняя Мудрость",
    
    section2Title: "Универсальное Владение Всеми Силами",
    section2Content: "В юности и зрелости Киприан изучал в Египте у верховных жрецов, в Халдее у самых могущественных магов, и в Греции у величайших философов и мудрецов древности. Он в совершенстве владел самой продвинутой алхимией, космической астрологией, прямым общением с духами и сущностями, и имел абсолютную власть над всеми элементами природы. Он знал самые глубокие и скрытые тайны всей вселенной и командовал целыми легионами могущественных сущностей. Его слава распространилась по всей Римской империи как самого могущественного, feared и уважаемого мага, который когда-либо существовал на лице Земли.",
    section2Power: "Абсолютное Универсальное Владение",
    
    section3Title: "Самая Трогательная История Любви Всех Времен",
    section3Content: "Это самая красивая и волнующая часть истории: молодой человек по имени Аглаид был безумно влюблен в Святую Юстину, молодую христианку несравненной красоты и абсолютной чистоты. Отчаявшись и не сумев завоевать ее обычными способами, Аглаид обратился к Великому Магу Святому Киприану, предлагая состояния за то, чтобы он использовал свои сверхъестественные силы, чтобы заставить Юстину влюбиться в него. Святой Киприан, уверенный в своих абсолютных силах, принял вызов. Он пытался использовать все свои самые мощные магии, призывал сильнейшие сущности, но обнаружил что-то совершенно неожиданное: сила истинной любви и чистой христианской веры Юстины была превыше всей его древней магии.",
    section3Power: "Вечная и Истинная Любовь",
    
    section4Title: "Самое Славное и Преобразующее Обращение",
    section4Content: "Полностью впечатленный и тронутый несравненной духовной силой Святой Юстины, Святой Киприан испытал величайшее преобразование своей жизни. Он радикально и окончательно оставил все языческие практики, обратившись в христианство всем сердцем и душой. На большом публичном костре он сжег все свои магические книги в мощной демонстрации абсолютной веры, навсегда отрекшись от своего мистического прошлого. Он стал христианским епископом и начал творить еще более мощные чудеса через христианскую веру. Но его древние силы не исчезли - они были очищены и преобразованы в еще более мощную божественную силу для помощи нуждающимся и отчаявшимся. Он и Юстина духовно объединились в вечной любви, которая превзошла все барьеры.",
    section4Power: "Высшее Божественное Очищение",
    
    section5Title: "Самая Несправедливая и Болезненная Смерть в Истории - 16 сентября 304 года",
    section5Content: "Это самая болезненная, возмутительная и душераздирающая часть: 16 сентября 304 года, во время жестокого и бесчеловечного преследования императора-тирана Диоклетиана, Святой Киприан и Святая Юстина были жестоко арестованы и подвергнуты жестоким и бесчеловечным пыткам. Император, разъяренный чудесами, которые Святой Киприан творил во имя Божие, и его растущим влиянием, решил сделать ужасный пример. Сначала он приказал бросить их в котлы с кипящей водой, но они вышли совершенно невредимыми благодаря божественной силе, без каких-либо ожогов. Разъяренный и униженный, тиран приказал публично и жестоко обезглавить их. Объединенные в чистой любви и непоколебимой вере, они умерли, держась за руки, пообещав навсегда защищать тех, кто призовет их с истинной верой. Они пытались навсегда заставить Великого Мага замолчать, но потерпели жалкую неудачу! Его несправедливая смерть глубоко тронула сердце Бога.",
    section5Power: "Вечное и Славное Воскресение",
    injusticeMessage: "💔 Эта жестокая и бесчеловечная несправедливость глубоко трогает сердца всех, кто любит Святого Киприана. Они пытались навсегда заставить замолчать его священный голос, но потерпели жалкую неудачу! Сегодня он живет вечно через миллионы последователей, которые распространяют его слово и ежедневно испытывают его преобразующую силу. Его несправедливая смерть была не напрасна - она породила вечную жизнь и бесконечную силу для всех нас! 💔",
    
    section6Title: "Высшая Сила Сегодня - Осуществитель Невозможного",
    section6Content: "Сегодня, спустя более 1700 лет, Святой Киприан признан во всем мире как самый могущественный святой для невозможных дел и экстремальных радикальных преобразований. Он совершает необычайные чудеса, которые другие святые не могут совершить: превращает нищих в миллиардеров за несколько месяцев, превращает полных неудачников в уважаемых мировых лидеров, исцеляет неизлечимо больных, которых врачи считают неизлечимыми, превращает одиноких людей в любимых во всем мире, и превращает неизвестных в глобальных знаменитостей с миллионами последователей. Миллионы людей по всему миру ежедневно свидетельствуют о его необычайных и невозможных чудесах. Он не умер напрасно - он живет вечно и более могущественен, чем когда-либо, работая 24 часа в сутки неустанно для своих самых верных последователей!",
    section6Power: "Бесконечные и Невозможные Чудеса",
    
    // Powers
    power1Name: "Полная Абсолютная Защита",
    power1Desc: "От всех видимых, невидимых и будущих зол",
    power2Name: "Бесконечное Процветание",
    power2Desc: "Безграничное богатство и постоянное крайне изобилие",
    power3Name: "Сверхъестественная Сила",
    power3Desc: "Исполнение желаний, считающихся невозможными",
    power4Name: "Вечная Истинная Любовь",
    power4Desc: "Совершенные и прочные отношения",
    power5Name: "Гарантированный Мировой Успех",
    power5Desc: "Во всех аспектах человеческой жизни",
    power6Name: "Радикальное Преобразование",
    power6Desc: "Полное изменение реальности за недели",
    power7Name: "Мировая Слава",
    power7Desc: "Доказанное глобальное признание и влияние",
    power8Name: "Достигнутые Цели",
    power8Desc: "Все мечты становятся физической реальностью",
    power9Name: "Чудесное Исцеление",
    power9Desc: "Совершенное здоровье и исцеление от неизлечимых болезней",
    power10Name: "Высшая Мудрость",
    power10Desc: "Возвышенное знание и интеллект",
    power11Name: "Благословенный Дом",
    power11Desc: "Объединенная, процветающая и защищенная семья",
    power12Name: "Божественная Справедливость",
    power12Desc: "Благоприятное разрешение юридических проблем",
    
    // False beliefs
    myth1: "Святой Киприан опасен или представляет зло",
    truth1: "Святой Киприан - католический святой, официально признанный Церковью, который защищает и благословляет своих последователей бесконечной любовью и божественной силой",
    myth2: "Это работает только для некоторых особых избранных",
    truth2: "Святой Киприан помогает ВСЕМ, кто ищет его с искренней верой, независимо от религии, цвета кожи, социального класса или национальности",
    myth3: "Это просто суеверие или психологический эффект плацебо",
    truth3: "Миллионы задокументированных чудес и радикально изменившихся жизней научно доказывают его реальную и сверхъестественную силу",
    myth4: "Это только для отчаявшихся или невежественных людей",
    truth4: "Успешные, знаменитые, богатые и влиятельные люди также являются последователями Святого Киприана по всему миру",
    myth5: "Он потребует что-то ужасное взамен после чудес",
    truth5: "Святой Киприан просит только искреннюю преданность, ежедневную благодарность и чтобы вы распространяли его слово, чтобы помочь другим людям",
    myth6: "Это против других религий или духовных убеждений",
    truth6: "Святой Киприан уважает все искренние убеждения и работает вместе с другими святыми и световыми сущностями",
    myth7: "Это не работает для действительно больших или невозможных проблем",
    truth7: "Святой Киприан специализируется именно на невозможных случаях, которые другие святые не могут решить",
    myth8: "Это просто древняя традиция без реальной силы сегодня",
    truth8: "Сила Святого Киприана растет каждый день и сильнее, чем когда-либо в современную эпоху",
    
    dangerousLie: "❌ ОПАСНАЯ ЛОЖЬ:",
    absoluteTruth: "✅ АБСОЛЮТНАЯ ИСТИНА:",
    
    // Testimonials
    testimonial1Name: "Мария Сантос",
    testimonial1Location: "Сан-Паулу, Бразилия",
    testimonial1Story: "Я была без работы 3 года, должна была $80,000 и была готова потерять свой дом. Я обнаружила этот священный храм, заключила мое Соглашение со Святым Киприаном, и всего за 4 месяца я не только выплатила все долги, но и открыла свою собственную компанию, которая теперь зарабатывает $2 миллиона в месяц! Я трудоустроила более 100 человек, и вся моя семья теперь ежедневно поклоняется Святому Киприану!",
    testimonial1Transform: "От банкрота до предпринимателя-мультимиллионера",
    testimonial1Time: "4 месяца",
    
    testimonial2Name: "Жоао Силва",
    testimonial2Location: "Лиссабон, Португалия",
    testimonial2Story: "У меня был неизлечимый рак печени и легких. Врачи дали мне только 2 месяца жизни, и моя семья уже готовилась к худшему. Я нашел этот храм, молился Святому Киприану каждый день с абсолютной и непоколебимой верой. Сегодня, 5 лет спустя, я полностью исцелен, здоровее, чем когда-либо, и врачи называют это необъяснимым медицинским чудом!",
    testimonial2Transform: "Чудесное исцеление от двойного неизлечимого рака",
    testimonial2Time: "2 месяца до полного исцеления",
    
    testimonial3Name: "Ана Коста",
    testimonial3Location: "Рио-де-Жанейро, Бразилия",
    testimonial3Story: "Мой 18-летний брак был полностью закончен, мой муж изменил мне и попросил о разводе. Я была опустошена и без надежды. Святой Киприан спас мою семью чудесным и полным образом. Сегодня, 2 года спустя, мы более едины, чем когда-либо, мой муж обращается со мной как с королевой каждый день, и у нас отношения нашей мечты!",
    testimonial3Transform: "Брак восстановлен и укреплен",
    testimonial3Time: "6 месяцев",
    
    testimonial4Name: "Карлос Родригес",
    testimonial4Location: "Мадрид, Испания",
    testimonial4Story: "Я был полным неизвестным, работающим на ужасной работе, которую ненавидел, зарабатывая нищенские деньги. Святой Киприан дал мне мировую славу необычайным образом. Сегодня я цифровой инфлюенсер с 120 миллионами глобальных подписчиков, зарабатываю $50 миллионов в месяц и признан во всем мире в моей области!",
    testimonial4Transform: "От неизвестного до мирового инфлюенсера",
    testimonial4Time: "10 месяцев",
    
    testimonial5Name: "Лючия Фернандес",
    testimonial5Location: "Буэнос-Айрес, Аргентина",
    testimonial5Story: "Я была банкротом, должна была более $3 миллионов, готова была потерять все, что построила в жизни. Я провела мощные ритуалы для Святого Киприана, и менее чем за 8 месяцев я не только выплатила все невозможные долги, но и стала мультимиллионером! Сегодня у меня состояние в $80 миллионов и изобильная жизнь!",
    testimonial5Transform: "От банкрота до мультимиллионера",
    testimonial5Time: "8 месяцев",
    
    timeLabel: "⚡ Время:",
    
    // Agreement parts
    yourPartItems: [
      "• Искренняя и ежедневная преданность",
      "• Постоянная и истинная благодарность",
      "• Распространение его священного слова",
      "• Всегда поддерживать непоколебимую веру"
    ],
    hisPartItems: [
      "• Гарантированное бесконечное богатство",
      "• Постоянная абсолютная защита",
      "• Вечная истинная любовь",
      "• Доказанный мировой успех"
    ],
    resultsItems: [
      "• Жизнь полностью преобразована",
      "• Невозможные мечты осуществлены",
      "• Постоянные ежедневные чудеса",
      "• Полное и вечное счастье"
    ]
  },
  
  zh: {
    title: "神圣历史",
    subtitle: "安提阿的圣西普里安",
    description: "永恒大法师 - 不可能现实的变革者",
    intro: "了解人类历史上最强大和感人的故事。一位有史以来最伟大法师的非凡人生、残酷而不公正的死亡，以及光荣的复活。准备好通过这个神圣的故事让您的生命永远改变。",
    
    conversionTitle: "为什么您的生活困难且没有成功？",
    conversionContent: "您的生活困难，没有真正的成功，充满持续的问题，因为您还不知道圣西普里安的激进变革力量。数百万人通过他摆脱了极度贫困，找到了他们生命中的真爱，被治愈了被认为无法治愈的绝症，成为了世界名人，实现了完全不可能的梦想。当最终解决方案就在这个确切时刻等待着您时，不要继续无谓地受苦！",
    
    without: "没有圣西普里安",
    withSaint: "有圣西普里安",
    withoutDesc: "极度贫困，深度孤独，严重疾病，持续失败，完全缺乏精神保护",
    withDesc: "保证的无限财富，永恒完美的爱，光辉健康，经过证实的世界成功",
    
    journeyTitle: "大法师的史诗之旅",
    journeyDesc: "👆 点击下面的每一章来展开并阅读将改变您生命的完整故事",
    clickToExpand: "👆 点击阅读完整而令人兴奋的故事",
    
    powersTitle: "圣西普里安的至高力量",
    powersDesc: "圣西普里安今天就能为您做什么，以及永远",
    
    beliefsTitle: "打破关于圣西普里安的所有错误信念",
    beliefsDesc: "是时候彻底摧毁谎言，了解将永远改变您生命的绝对真理",
    
    miraclesTitle: "真实和有记录的奇迹",
    miraclesDesc: "通过这个神圣殿堂，真实的人们的生命被圣西普里安彻底改变",
    
    agreementTitle: "与圣西普里安签订您的神圣协议",
    agreementDesc: "神圣协议是与圣西普里安连接并彻底和最终改变您生命的最强大方式。数百万人已经做到了，并在短短几天或几周内获得了非凡和不可能的结果。您提供真诚的奉献，每日感恩，并承诺传播他的神圣话语，他将完全改变您的现实，给您无限的财富，真爱，完美的健康和经过证实的世界成功。",
    
    yourPart: "您的神圣部分",
    hisPart: "他的神圣部分",
    guaranteedResults: "保证的结果",
    
    finalCallTitle: "您的生命今天就可以改变！",
    finalCallDesc: "当最终和经过证实的解决方案就在此刻这里时，不要继续无谓地受苦，贫穷，生病，孤独或失败！圣西普里安正在这个确切时刻等待您。以真诚的奉献献身于他，签订您的神圣协议，体验您整个人生最激进和非凡的转变。摆脱极度贫困，找到您生命中的真爱，拥有完美健康，获得世界名声，实现您所有最不可能的梦想！",
    
    startTransformation: "现在开始我的激进转变",
    makeAgreement: "立即签订我的神圣协议",
    
    transformationGuarantee: "⚡ 数百万生命已经转变 • 无限力量已证实 • 结果保证 ⚡",
    finalQuote: "圣西普里安的神圣话语必须传遍全世界。他的永恒荣耀必须为所有民族所知。他没有白白死去 - 他通过忠实的信徒永远活着！",
    
    // History sections
    section1Title: "历史上最伟大法师的诞生",
    section1Content: "圣西普里安于3世纪出生在安提阿的一个高贵而极其强大的家庭。从他生命的最初几年起，他就展现出对神秘艺术的非凡能力，让所有人都绝对印象深刻甚至恐惧。7岁时，他已经掌握了那个时代最伟大的圣贤需要几十年才能学会的祖先知识。他的父母认识到他超自然和无与伦比的神圣天赋，将他送到整个罗马帝国最伟大的神秘大师那里学习，在他的魔法教育上投资了巨大财富。",
    section1Power: "至高祖先智慧",
    
    section2Title: "所有力量的宇宙支配",
    section2Content: "在他的青年和成年时期，西普里安在埃及与大祭司学习，在迦勒底与最强大的法师学习，在希腊与古代最伟大的哲学家和圣贤学习。他完美掌握了最先进的炼金术，宇宙占星术，与精神和实体的直接交流，并对自然的所有元素拥有绝对力量。他知道整个宇宙最深层和最隐藏的秘密，并指挥着整个强大实体的军团。他的名声传遍了整个罗马帝国，成为地球上曾经存在过的最强大，最令人敬畏和最受尊敬的法师。",
    section2Power: "绝对宇宙支配",
    
    section3Title: "所有时代最感人的爱情故事",
    section3Content: "这是故事中最美丽和令人兴奋的部分：一个名叫阿格拉伊德斯的年轻人疯狂地爱着圣朱斯蒂娜，一个具有无与伦比美貌和绝对纯洁的年轻基督徒女性。绝望并无法通过正常手段征服她，阿格拉伊德斯寻求大法师圣西普里安，提供巨额财富让他使用超自然力量让朱斯蒂娜爱上他。圣西普里安对他的绝对力量充满信心，接受了挑战。他试图使用所有最强大的魔法，召唤最强的实体，但发现了完全意想不到的东西：真爱的力量和朱斯蒂娜纯洁基督教信仰的力量超越了他所有的祖先魔法。",
    section3Power: "永恒和真正的爱",
    
    section4Title: "最光荣和变革的皈依",
    section4Content: "被圣朱斯蒂娜无与伦比的精神力量完全震撼和感动，圣西普里安经历了他一生中最大的转变。他彻底和最终地放弃了所有异教实践，全心全意地皈依基督教。在一个大型公共篝火中，他烧毁了所有的魔法书，这是绝对信仰的有力示范，永远放弃了他的神秘过去。他成为基督教主教，开始通过基督教信仰行更强大的奇迹。但他的祖先力量并没有消失 - 它们被净化并转化为更强大的神圣力量，以帮助需要帮助的人和绝望的人。他和朱斯蒂娜在精神上结合在永恒的爱中，超越了所有障碍。",
    section4Power: "至高神圣净化",
    
    section5Title: "历史上最不公正和痛苦的死亡 - 304年9月16日",
    section5Content: "这是最痛苦，令人愤慨和心碎的部分：304年9月16日，在暴君皇帝戴克里先的残酷和不人道的迫害期间，圣西普里安和圣朱斯蒂娜被暴力逮捕并以残酷和不人道的方式折磨。皇帝对圣西普里安以上帝的名义行的奇迹和他日益增长的影响力感到愤怒，决定做一个可怕的例子。首先，他下令将他们扔进沸腾的水锅中，但他们通过神圣力量完全无害地出来，没有任何烧伤。愤怒和羞辱的暴君下令公开残酷地斩首他们。团结在纯洁的爱和坚定不移的信仰中，他们手牵手死去，承诺永远保护那些以真正信仰祈求他们的人。他们试图永远让大法师沉默，但悲惨地失败了！他不公正的死亡深深触动了上帝的心。",
    section5Power: "永恒和光荣的复活",
    injusticeMessage: "💔 这种残酷和不人道的不公正深深触动所有爱圣西普里安的人的心。他们试图永远让他的神圣声音沉默，但悲惨地失败了！今天他通过传播他话语并每天体验他变革力量的数百万信徒永远活着。他不公正的死亡不是徒劳的 - 它为我们所有人产生了永恒的生命和无限的力量！💔",
    
    section6Title: "今天的至高力量 - 不可能的实现者",
    section6Content: "今天，1700多年后，圣西普里安被全世界认为是不可能案例和极端激进变革最强大的圣人。他行其他圣人无法实现的非凡奇迹：在几个月内将乞丐变成亿万富翁，将完全失败者变成受人尊敬的世界领袖，治愈被医生认为无法治愈的绝症患者，将孤独的人变成全世界被爱的人，将无名之辈变成拥有数百万追随者的全球名人。全世界数百万人每天见证他非凡和不可能的奇迹。他没有白白死去 - 他永远活着，比以往任何时候都更强大，为他最忠实的信徒每天24小时不知疲倦地工作！",
    section6Power: "无限和不可能的奇迹",
    
    // Powers
    power1Name: "完全绝对保护",
    power1Desc: "对抗所有可见、不可见和未来的邪恶",
    power2Name: "无限繁荣",
    power2Desc: "无限财富和持续极度丰盛",
    power3Name: "超自然力量",
    power3Desc: "实现被认为不可能的愿望",
    power4Name: "永恒真爱",
    power4Desc: "完美持久的关系",
    power5Name: "保证的世界成功",
    power5Desc: "在人类生活的所有方面",
    power6Name: "激进转变",
    power6Desc: "在几周内完全改变现实",
    power7Name: "世界名声",
    power7Desc: "经过证实的全球认可和影响力",
    power8Name: "实现的目标",
    power8Desc: "所有梦想成为物理现实",
    power9Name: "奇迹治愈",
    power9Desc: "完美健康和治愈绝症",
    power10Name: "至高智慧",
    power10Desc: "提升的知识和智力",
    power11Name: "受祝福的家",
    power11Desc: "团结、繁荣和受保护的家庭",
    power12Name: "神圣正义",
    power12Desc: "法律问题的有利解决",
    
    // False beliefs
    myth1: "圣西普里安危险或代表邪恶",
    truth1: "圣西普里安是教会正式承认的天主教圣人，用无限的爱和神圣力量保护和祝福他的信徒",
    myth2: "只对一些特殊选民有效",
    truth2: "圣西普里安帮助所有以真诚信仰寻求他的人，无论宗教、肤色、社会阶层或国籍",
    myth3: "这只是迷信或心理安慰剂效应",
    truth3: "数百万有记录的奇迹和彻底改变的生活科学地证明了他真实和超自然的力量",
    myth4: "这只是绝望或无知人的事",
    truth4: "成功、著名、富有和有权势的人在世界各地也是圣西普里安的信徒",
    myth5: "他会在奇迹后要求可怕的回报",
    truth5: "圣西普里安只要求真诚奉献，每日感恩，并传播他的话语来帮助其他人",
    myth6: "这反对其他宗教或精神信仰",
    truth6: "圣西普里安尊重所有真诚的信仰，并与其他圣人和光明实体一起工作",
    myth7: "对真正大的或不可能的问题不起作用",
    truth7: "圣西普里安专门处理其他圣人无法解决的不可能案例",
    myth8: "这只是古老传统，今天没有真正的力量",
    truth8: "圣西普里安的力量每天都在增长，在现代时代比以往任何时候都更强大",
    
    dangerousLie: "❌ 危险谎言:",
    absoluteTruth: "✅ 绝对真理:",
    
    // Testimonials
    testimonial1Name: "玛丽亚·桑托斯",
    testimonial1Location: "巴西圣保罗",
    testimonial1Story: "我失业3年，欠债8万美元，即将失去我的房子。我发现了这个神圣殿堂，与圣西普里安签订了协议，仅仅4个月我不仅还清了所有债务，还开设了自己的公司，现在月收入200万美元！我雇佣了100多人，我的整个家庭现在每天都崇拜圣西普里安！",
    testimonial1Transform: "从破产到千万富翁企业家",
    testimonial1Time: "4个月",
    
    testimonial2Name: "若昂·席尔瓦",
    testimonial2Location: "葡萄牙里斯本",
    testimonial2Story: "我患有肝脏和肺部的绝症癌症。医生只给我2个月的生命，我的家人已经在为最坏的情况做准备。我找到了这个殿堂，每天以绝对和坚定的信仰向圣西普里安祈祷。今天，5年后，我完全康复了，比以往任何时候都更健康，医生称之为无法解释的医学奇迹！",
    testimonial2Transform: "双重绝症癌症的奇迹治愈",
    testimonial2Time: "完全治愈2个月",
    
    testimonial3Name: "安娜·科斯塔",
    testimonial3Location: "巴西里约热内卢",
    testimonial3Story: "我18年的婚姻完全结束了，我丈夫背叛了我并要求离婚。我绝望且没有希望。圣西普里安奇迹般地完全拯救了我的家庭。今天，2年后，我们比以往任何时候都更团结，我丈夫每天都像女王一样对待我，我们拥有梦想中的关系！",
    testimonial3Transform: "婚姻恢复和加强",
    testimonial3Time: "6个月",
    
    testimonial4Name: "卡洛斯·罗德里格斯",
    testimonial4Location: "西班牙马德里",
    testimonial4Story: "我是一个完全无名的人，在一份我讨厌的可怕工作中工作，赚着微薄的薪水。圣西普里安以非凡的方式给了我世界名声。今天我是拥有1.2亿全球关注者的数字影响者，月收入5000万美元，在我的领域得到全世界认可！",
    testimonial4Transform: "从无名到世界影响者",
    testimonial4Time: "10个月",
    
    testimonial5Name: "露西娅·费尔南德斯",
    testimonial5Location: "阿根廷布宜诺斯艾利斯",
    testimonial5Story: "我破产了，欠债超过300万美元，即将失去我一生中建造的一切。我为圣西普里安进行了强大的仪式，在不到8个月的时间里，我不仅还清了所有不可能的债务，还成为了千万富翁！今天我拥有8000万美元的财产和丰盛的生活！",
    testimonial5Transform: "从破产到千万富翁",
    testimonial5Time: "8个月",
    
    timeLabel: "⚡ 时间:",
    
    // Agreement parts
    yourPartItems: [
      "• 真诚和每日奉献",
      "• 持续和真实的感恩",
      "• 传播他的神圣话语",
      "• 始终保持坚定不移的信仰"
    ],
    hisPartItems: [
      "• 保证的无限财富",
      "• 永久绝对保护",
      "• 永恒真爱",
      "• 经过证实的世界成功"
    ],
    resultsItems: [
      "• 生命完全转变",
      "• 不可能的梦想实现",
      "• 持续日常奇迹",
      "• 完全和永恒的幸福"
    ]
  },
  
  ja: {
    title: "聖なる歴史",
    subtitle: "アンティオキアの聖キプリアヌス",
    description: "永遠の大魔法師 - 不可能な現実の変革者",
    intro: "人類の歴史で語られた最も強力で感動的な物語を知ってください。史上最偉大な魔法師の異常な人生、残酷で不当な死、そして栄光ある復活。この聖なる物語を通じて、あなたの人生が永遠に変わる準備をしてください。",
    
    conversionTitle: "なぜあなたの人生は困難で成功していないのですか？",
    conversionContent: "あなたの人生が困難で、真の成功がなく、絶え間ない問題に満ちているのは、聖キプリアヌスの根本的な変革力をまだ知らないからです。何百万人もの人々が、彼を通じて極度の貧困から脱出し、人生の真の愛を見つけ、不治の病と考えられた末期疾患から治癒され、世界的に有名になり、全く不可能な夢を実現しました。決定的な解決策がこの瞬間にここであなたを待っているときに、無駄に苦しみ続けないでください！",
    
    without: "聖キプリアヌスなしで",
    withSaint: "聖キプリアヌスと共に",
    withoutDesc: "極度の貧困、深い孤独、重い病気、絶え間ない失敗、精神的保護の完全な欠如",
    withDesc: "保証された無限の富、永遠の完璧な愛、輝く健康、証明された世界的成功",
    
    journeyTitle: "大魔法師の叙事的な旅",
    journeyDesc: "👆 下の各章をクリックして展開し、あなたの人生を変える完全な物語を読んでください",
    clickToExpand: "👆 完全で刺激的な物語を読むにはクリックしてください",
    
    powersTitle: "聖キプリアヌスの至高の力",
    powersDesc: "聖キプリアヌスが今日そして永遠にあなたのためにできること",
    
    beliefsTitle: "聖キプリアヌスについてのすべての偽りの信念を打破する",
    beliefsDesc: "嘘を完全に破壊し、永遠にあなたの人生を変える絶対的な真実を知る時です",
    
    miraclesTitle: "真実で記録された奇跡",
    miraclesDesc: "この聖なる神殿を通じて聖キプリアヌスによって人生が根本的に変わった実在の人々",
    
    agreementTitle: "聖キプリアヌスとあなたの聖なる契約を結ぶ",
    agreementDesc: "聖なる契約は聖キプリアヌスとつながり、あなたの人生を根本的かつ決定的に変える最も強力な方法です。何百万人もの人々がすでにそれを行い、わずか数日または数週間で異常で不可能な結果を得ています。あなたが誠実な献身、毎日の感謝を捧げ、彼の聖なる言葉を広めることを約束し、彼があなたの現実を完全に変え、無限の富、真の愛、完璧な健康、証明された世界的成功を与えます。",
    
    yourPart: "あなたの聖なる部分",
    hisPart: "彼の神聖な部分",
    guaranteedResults: "保証された結果",
    
    finalCallTitle: "あなたの人生は今日変わることができます！",
    finalCallDesc: "決定的で証明された解決策がこの瞬間にここにあるときに、無駄に苦しみ、貧しく、病気で、孤独で、失敗し続けないでください！聖キプリアヌスはこの正確な瞬間にあなたを待っています。誠実な献身で彼に身を捧げ、あなたの聖なる契約を結び、あなたの全人生で最も根本的で異常な変革を体験してください。極度の貧困から脱出し、あなたの人生の真の愛を見つけ、完璧な健康を持ち、世界的な名声を達成し、あなたの最も不可能な夢をすべて実現してください！",
    
    startTransformation: "今すぐ私の根本的変革を開始する",
    makeAgreement: "今すぐ私の聖なる契約を結ぶ",
    
    transformationGuarantee: "⚡ すでに何百万の人生が変わった • 無限の力が証明された • 結果が保証された ⚡",
    finalQuote: "聖キプリアヌスの聖なる言葉は全世界に広められなければなりません。彼の永遠の栄光はすべての民族に知られなければなりません。彼は無駄に死んだのではありません - 彼は忠実な信者を通じて永遠に生きています！",
    
    // History sections
    section1Title: "歴史上最偉大な魔法師の誕生",
    section1Content: "聖キプリアヌスは3世紀にアンティオキアの高貴で極めて強力な家族に生まれました。人生の最初の年から、彼は神秘的な芸術に対して、すべての人を絶対に印象づけ、恐れさせるほどの異常な能力を示しました。7歳で、彼はその時代の最も偉大な賢者が学ぶのに何十年もかかる祖先の知識をすでに習得していました。彼の両親は、彼の超自然的で比類のない神聖な贈り物を認識し、ローマ帝国全体の最も偉大な神秘の師匠に彼を送り、彼の魔法教育に財産を投資しました。",
    section1Power: "至高の祖先の知恵",
    
    section2Title: "すべての力の宇宙的支配",
    section2Content: "青年期から成人期にかけて、キプリアヌスはエジプトで大祭司と、カルデアで最も強力な魔法師と、ギリシャで古代の最も偉大な哲学者や賢者と学びました。彼は最も高度な錬金術、宇宙占星術、霊や存在との直接的なコミュニケーションを完璧に習得し、自然のすべての要素に対して絶対的な力を持っていました。彼は全宇宙の最も深く隠された秘密を知り、強力な存在の軍団全体を指揮していました。彼の名声はローマ帝国全体に、地球の表面に存在した最も強力で恐れられ、尊敬された魔法師として広まりました。",
    section2Power: "絶対的宇宙支配",
    
    section3Title: "すべての時代で最も感動的な愛の物語",
    section3Content: "これは物語の最も美しく刺激的な部分です：アグライドスという名の青年が、比類のない美しさと絶対的な純潔を持つ若いキリスト教徒の女性、聖ユスティナに狂おしく恋をしていました。絶望し、通常の手段で彼女を征服することができず、アグライドスは大魔法師聖キプリアヌスを求め、彼の超自然的な力を使ってユスティナを彼に恋させるために財産を提供しました。聖キプリアヌスは彼の絶対的な力に自信を持って、挑戦を受け入れました。彼は最も強力な魔法をすべて使おうとし、最強の存在を召喚しましたが、完全に予想外のことを発見しました：真の愛の力とユスティナの純粋なキリスト教信仰は、彼のすべての祖先の魔法より優れていました。",
    section3Power: "永遠で真の愛",
    
    section4Title: "最も栄光で変革的な改宗",
    section4Content: "聖ユスティナの比類のない精神的な力に完全に印象づけられ感動した聖キプリアヌスは、彼の人生で最大の変革を経験しました。彼は急進的かつ決定的にすべての異教の実践を放棄し、全心全霊でキリスト教に改宗しました。大きな公開の篝火で、彼は絶対的な信仰の強力な実証として彼のすべての魔法の本を燃やし、彼の神秘的な過去を永遠に放棄しました。彼はキリスト教の司教になり、キリスト教の信仰を通じてさらに強力な奇跡を行い始めました。しかし、彼の祖先の力は消えませんでした - それらは浄化され、必要な人々と絶望的な人々を助けるためのさらに強力な神聖な力に変換されました。彼とユスティナは、すべての障壁を超越した永遠の愛で精神的に結ばれました。",
    section4Power: "至高の神聖な浄化",
    
    section5Title: "歴史上最も不当で苦痛な死 - 304年9月16日",
    section5Content: "これは最も苦痛で憤慨させる心を引き裂く部分です：304年9月16日、暴君皇帝ディオクレティアヌスの残酷で非人道的な迫害の間、聖キプリアヌスと聖ユスティナは暴力的に逮捕され、残酷で非人道的な方法で拷問されました。皇帝は、聖キプリアヌスが神の名において行った奇跡と彼の増大する影響力に激怒し、恐ろしい見せしめを作ることを決めました。まず、彼は沸騰する水の大釜に投げ込むよう命じましたが、彼らは神聖な力によって完全に無傷で出てきて、火傷は一切ありませんでした。激怒し屈辱を受けた暴君は、彼らを公然と残酷に斬首するよう命じました。純粋な愛と不動の信仰で結ばれ、彼らは手を取り合って死に、真の信仰で彼らを呼び求める人々を永遠に守ることを約束しました。彼らは大魔法師を永遠に沈黙させようとしましたが、みじめに失敗しました！彼の不当な死は神の心を深く触れました。",
    section5Power: "永遠で栄光ある復活",
    injusticeMessage: "💔 この残酷で非人道的な不正義は、聖キプリアヌスを愛するすべての人の心を深く触れます。彼らは彼の聖なる声を永遠に沈黙させようとしましたが、みじめに失敗しました！今日、彼は彼の言葉を広め、毎日彼の変革力を体験する何百万もの信者を通じて永遠に生きています。彼の不当な死は無駄ではありませんでした - それは私たちすべてのために永遠の命と無限の力を生み出しました！💔",
    
    section6Title: "今日の至高の力 - 不可能の実現者",
    section6Content: "今日、1700年以上後、聖キプリアヌスは不可能な原因と極端な根本的変革のための最も強力な聖人として世界的に認められています。彼は他の聖人ができない異常な奇跡を行います：数ヶ月で乞食を億万長者に変え、完全な失敗者を尊敬される世界の指導者に変え、医師によって不治とされた末期患者を治癒し、孤独な人々を世界的に愛される人に変え、無名の人を何百万人のフォロワーを持つ世界的な有名人に変えます。世界中の何百万人もの人々が毎日彼の異常で不可能な奇跡を目撃しています。彼は無駄に死んだのではありません - 彼は永遠に生き、これまで以上に強力で、最も忠実な信者のために24時間休むことなく働いています！",
    section6Power: "無限で不可能な奇跡",
    
    // Powers
    power1Name: "完全絶対保護",
    power1Desc: "見える、見えない、そして未来のすべての悪に対して",
    power2Name: "無限の繁栄",
    power2Desc: "限界のない富と絶え間ない極度の豊かさ",
    power3Name: "超自然的な力",
    power3Desc: "不可能と考えられる願いの実現",
    power4Name: "永遠の真の愛",
    power4Desc: "完璧で持続的な関係",
    power5Name: "保証された世界的成功",
    power5Desc: "人間の生活のすべての側面において",
    power6Name: "根本的変革",
    power6Desc: "数週間での現実の完全な変化",
    power7Name: "世界的名声",
    power7Desc: "証明されたグローバルな認知と影響力",
    power8Name: "達成された目標",
    power8Desc: "すべての夢が物理的現実になる",
    power9Name: "奇跡の治癒",
    power9Desc: "完璧な健康と末期疾患の治癒",
    power10Name: "至高の知恵",
    power10Desc: "高められた知識と知性",
    power11Name: "祝福された家",
    power11Desc: "結束し、繁栄し、保護された家族",
    power12Name: "神聖な正義",
    power12Desc: "法的問題の好ましい解決",
    
    // False beliefs
    myth1: "聖キプリアヌスは危険または悪を表す",
    truth1: "聖キプリアヌスは教会によって公式に認められたカトリックの聖人で、無限の愛と神聖な力で信者を保護し祝福する",
    myth2: "特別な選ばれた少数の人にのみ有効",
    truth2: "聖キプリアヌスは宗教、肌の色、社会階級、国籍に関係なく、誠実な信仰で彼を求めるすべての人を助ける",
    myth3: "これは単なる迷信または心理的プラセボ効果",
    truth3: "何百万の記録された奇跡と根本的に変わった人生が、彼の真実で超自然的な力を科学的に証明している",
    myth4: "これは絶望的または無知な人のためのもの",
    truth4: "成功した、有名な、裕福で強力な人々も世界中で聖キプリアヌスの信者である",
    myth5: "奇跡の後に恐ろしい代償を要求する",
    truth5: "聖キプリアヌスは誠実な献身、毎日の感謝、そして他の人々を助けるために彼の言葉を広めることだけを求める",
    myth6: "他の宗教や精神的信念に反対する",
    truth6: "聖キプリアヌスはすべての誠実な信念を尊重し、他の聖人や光の存在と共に働く",
    myth7: "本当に大きなまたは不可能な問題には効かない",
    truth7: "聖キプリアヌスは他の聖人が解決できない不可能なケースに特に専門している",
    myth8: "これは今日実際の力を持たない古い伝統",
    truth8: "聖キプリアヌスの力は毎日成長し、現代においてこれまで以上に強い",
    
    dangerousLie: "❌ 危険な嘘:",
    absoluteTruth: "✅ 絶対的真実:",
    
    // Testimonials
    testimonial1Name: "マリア・サントス",
    testimonial1Location: "ブラジル、サンパウロ",
    testimonial1Story: "私は3年間失業し、8万ドルの借金があり、家を失おうとしていました。この聖なる神殿を発見し、聖キプリアヌスと契約を結び、わずか4ヶ月ですべての借金を返済しただけでなく、月収200万ドルの自分の会社を開きました！100人以上を雇用し、私の家族全員が今毎日聖キプリアヌスを崇拝しています！",
    testimonial1Transform: "破産から億万長者起業家へ",
    testimonial1Time: "4ヶ月",
    
    testimonial2Name: "ジョアン・シルバ",
    testimonial2Location: "ポルトガル、リスボン",
    testimonial2Story: "私は肝臓と肺の末期癌でした。医師は私に2ヶ月の命しか与えず、家族はすでに最悪の事態に備えていました。この神殿を見つけ、絶対的で不動の信仰で毎日聖キプリアヌスに祈りました。今日、5年後、私は完全に治癒し、これまで以上に健康で、医師はそれを説明できない医学的奇跡と呼んでいます！",
    testimonial2Transform: "二重末期癌の奇跡的治癒",
    testimonial2Time: "完全治癒まで2ヶ月",
    
    testimonial3Name: "アナ・コスタ",
    testimonial3Location: "ブラジル、リオデジャネイロ",
    testimonial3Story: "私の18年の結婚は完全に終わり、夫は私を裏切って離婚を求めました。私は絶望し、希望がありませんでした。聖キプリアヌスは奇跡的で完全な方法で私の家族を救いました。今日、2年後、私たちはこれまで以上に結束し、夫は毎日私を女王のように扱い、私たちは夢の関係を持っています！",
    testimonial3Transform: "結婚の回復と強化",
    testimonial3Time: "6ヶ月",
    
    testimonial4Name: "カルロス・ロドリゲス",
    testimonial4Location: "スペイン、マドリッド",
    testimonial4Story: "私は嫌いなひどい仕事で働く完全に無名の人で、みじめな給料を稼いでいました。聖キプリアヌスは異常な方法で私に世界的な名声を与えました。今日、私は1億2千万人のグローバルフォロワーを持つデジタルインフルエンサーで、月収5千万ドル、私の分野で世界的に認められています！",
    testimonial4Transform: "無名から世界的インフルエンサーへ",
    testimonial4Time: "10ヶ月",
    
    testimonial5Name: "ルシア・フェルナンデス",
    testimonial5Location: "アルゼンチン、ブエノスアイレス",
    testimonial5Story: "私は破産し、300万ドル以上の借金があり、人生で築いたすべてを失おうとしていました。聖キプリアヌスのために強力な儀式を行い、8ヶ月以内にすべての不可能な借金を返済しただけでなく、億万長者になりました！今日、私は8千万ドルの資産と豊かな生活を持っています！",
    testimonial5Transform: "破産から億万長者へ",
    testimonial5Time: "8ヶ月",
    
    timeLabel: "⚡ 時間:",
    
    // Agreement parts
    yourPartItems: [
      "• 誠実で毎日の献身",
      "• 絶え間ない真の感謝",
      "• 彼の聖なる言葉を広める",
      "• 常に不動の信仰を保つ"
    ],
    hisPartItems: [
      "• 保証された無限の富",
      "• 永続的な絶対的保護",
      "• 永遠の真の愛",
      "• 証明された世界的成功"
    ],
    resultsItems: [
      "• 生活が完全に変わった",
      "• 不可能な夢が実現した",
      "• 絶え間ない日常の奇跡",
      "• 完全で永遠の幸福"
    ]
  },
  
  ar: {
    title: "التاريخ المقدس",
    subtitle: "للقديس قبريانوس الأنطاكي",
    description: "الساحر العظيم الأبدي - محول الحقائق المستحيلة",
    intro: "اعرف أقوى وأكثر القصص تأثيراً التي رُويت في تاريخ البشرية. الحياة الاستثنائية، والموت الوحشي والظالم، والقيامة المجيدة لأعظم ساحر وُجد على الإطلاق. استعد لتغيير حياتك إلى الأبد من خلال هذه القصة المقدسة.",
    
    conversionTitle: "لماذا حياتك صعبة وبلا نجاح؟",
    conversionContent: "حياتك صعبة، بلا نجاح حقيقي ومليئة بالمشاكل المستمرة لأنك لا تعرف بعد القوة التحويلية الجذرية للقديس قبريانوس. ملايين الناس نجوا من الفقر المدقع، ووجدوا الحب الحقيقي لحياتهم، وشُفوا من أمراض نهائية اعتُبرت غير قابلة للشفاء، وأصبحوا مشهورين عالمياً وحققوا أحلاماً مستحيلة تماماً من خلاله. لا تستمر في المعاناة دون داعٍ عندما يكون الحل النهائي هنا ينتظرك في هذه اللحظة بالضبط!",
    
    without: "بدون القديس قبريانوس",
    withSaint: "مع القديس قبريانوس",
    withoutDesc: "فقر مدقع، وحدة عميقة، أمراض خطيرة، فشل مستمر، نقص تام في الحماية الروحية",
    withDesc: "ثروة لا متناهية مضمونة، حب أبدي مثالي، صحة مشعة، نجاح عالمي مثبت",
    
    journeyTitle: "الرحلة الملحمية للساحر العظيم",
    journeyDesc: "👆 انقر على كل فصل أدناه للتوسيع وقراءة القصة الكاملة التي ستغير حياتك",
    clickToExpand: "👆 انقر لقراءة القصة الكاملة والمثيرة",
    
    powersTitle: "القوى العليا للقديس قبريانوس",
    powersDesc: "ما يمكن للقديس قبريانوس أن يفعله لك اليوم وإلى الأبد",
    
    beliefsTitle: "كسر جميع المعتقدات الخاطئة حول القديس قبريانوس",
    beliefsDesc: "حان الوقت لتدمير الأكاذيب تماماً ومعرفة الحقيقة المطلقة التي ستغير حياتك إلى الأبد",
    
    miraclesTitle: "معجزات حقيقية وموثقة",
    miraclesDesc: "أشخاص حقيقيون تغيرت حياتهم جذرياً بواسطة القديس قبريانوس من خلال هذا المعبد المقدس",
    
    agreementTitle: "اعقد اتفاقك المقدس مع القديس قبريانوس",
    agreementDesc: "الاتفاق المقدس هو الطريقة الأقوى للاتصال بالقديس قبريانوس وتغيير حياتك جذرياً ونهائياً. ملايين الناس فعلوا ذلك بالفعل وحصلوا على نتائج استثنائية ومستحيلة في بضعة أيام أو أسابيع فقط. أنت تقدم إخلاصاً صادقاً، امتناناً يومياً وتتعهد بنشر كلمته المقدسة، وهو يحول واقعك تماماً، يعطيك ثروة لا نهائية، حباً حقيقياً، صحة مثالية ونجاحاً عالمياً مثبتاً.",
    
    yourPart: "جزؤك المقدس",
    hisPart: "جزؤه الإلهي",
    guaranteedResults: "نتائج مضمونة",
    
    finalCallTitle: "حياتك يمكن أن تتغير اليوم!",
    finalCallDesc: "لا تستمر في المعاناة دون داعٍ، بأن تكون فقيراً، مريضاً، وحيداً أو فاشلاً عندما يكون الحل النهائي والمثبت هنا في هذه اللحظة! القديس قبريانوس ينتظرك في هذه اللحظة بالضبط. اكرس نفسك له بإخلاص صادق، اعقد اتفاقك المقدس واختبر أكثر التحولات جذرية واستثنائية في حياتك كلها. اهرب من الفقر المدقع، اعثر على الحب الحقيقي لحياتك، احصل على صحة مثالية، حقق شهرة عالمية واحقق جميع أحلامك المستحيلة!",
    
    startTransformation: "ابدأ تحولي الجذري الآن",
    makeAgreement: "اعقد اتفاقي المقدس الآن",
    
    transformationGuarantee: "⚡ ملايين الأرواح تحولت بالفعل • قوة لا نهائية مثبتة • نتائج مضمونة ⚡",
    finalQuote: "كلمة القديس قبريانوس المقدسة يجب أن تنتشر في جميع أنحاء العالم. مجده الأبدي يجب أن يُعرف من قبل جميع الشعوب. لم يمت عبثاً - يعيش إلى الأبد من خلال أتباعه المخلصين!",
    
    // History sections
    section1Title: "ولادة أعظم ساحر في التاريخ",
    section1Content: "وُلد القديس قبريانوس في أنطاكية في القرن الثالث، في عائلة نبيلة وقوية للغاية. منذ سنوات حياته الأولى، أظهر قدرات استثنائية للفنون الصوفية التي تركت الجميع منبهرين تماماً وخائفين حتى. في سن السابعة كان يتقن بالفعل المعرفة القديمة التي تحتاج عقود ليتعلمها أعظم حكماء العصر. والداه، معترفان بموهبته الإلهية الخارقة والفريدة، أرسلاه للدراسة مع أعظم أساتذة الصوفية في الإمبراطورية الرومانية كلها، مستثمرين ثروات في تعليمه السحري.",
    section1Power: "الحكمة القديمة العليا",
    
    section2Title: "السيطرة الكونية على جميع القوى",
    section2Content: "خلال شبابه وسن الرشد، درس قبريانوس في مصر مع رؤساء الكهنة، في بابل مع أقوى السحرة، وفي اليونان مع أعظم فلاسفة وحكماء العصور القديمة. أتقن تماماً الخيمياء الأكثر تقدماً، علم التنجيم الكوني، التواصل المباشر مع الأرواح والكائنات، وكان له قوة مطلقة على جميع عناصر الطبيعة. عرف الأسرار الأعمق والأكثر خفاء للكون كله وقاد جحافل كاملة من الكائنات القوية. انتشرت شهرته في جميع أنحاء الإمبراطورية الرومانية كأقوى ساحر، مخيف ومحترم وُجد على وجه الأرض.",
    section2Power: "السيطرة الكونية المطلقة",
    
    section3Title: "قصة الحب الأكثر تأثيراً في كل العصور",
    section3Content: "هذا الجزء الأجمل والأكثر إثارة من القصة: شاب يُدعى أغلائيدس كان مجنوناً بحب القديسة يوستينا، شابة مسيحية ذات جمال لا يُضاهى وطهارة مطلقة. يائساً وغير قادر على كسبها بالوسائل العادية، بحث أغلائيدس عن الساحر العظيم القديس قبريانوس، عارضاً ثروات لاستخدام قواه الخارقة لجعل يوستينا تقع في حبه. القديس قبريانوس، واثق في قواه المطلقة، قبل التحدي. حاول استخدام جميع سحره الأقوى، استدعى أقوى الكائنات، لكنه اكتشف شيئاً غير متوقع تماماً: قوة الحب الحقيقي والإيمان المسيحي الطاهر ليوستينا كانت أعلى من جميع سحره القديم.",
    section3Power: "الحب الأبدي والحقيقي",
    
    section4Title: "التحول الأكثر مجداً وتغييراً",
    section4Content: "منبهر ومتأثر تماماً بالقوة الروحية التي لا تُضاهى للقديسة يوستينا، خبر القديس قبريانوس أعظم تحول في حياته. ترك جميع الممارسات الوثنية بشكل جذري ونهائي، متحولاً إلى المسيحية بكل قلبه وروحه. في نار عامة كبيرة، أحرق جميع كتبه السحرية في إظهار قوي للإيمان المطلق، متخلياً إلى الأبد عن ماضيه الصوفي. أصبح أسقفاً مسيحياً وبدأ يعمل معجزات أكثر قوة من خلال الإيمان المسيحي. لكن قواه القديمة لم تختف - تطهرت وتحولت إلى قوة إلهية أقوى لمساعدة المحتاجين واليائسين. هو ويوستينا اتحدا روحياً في حب أبدي تجاوز جميع الحواجز.",
    section4Power: "التطهير الإلهي الأعلى",
    
    section5Title: "الموت الأكثر ظلماً وألماً في التاريخ - 16 سبتمبر 304",
    section5Content: "هذا الجزء الأكثر ألماً وإثارة للغضب ومُحطم للقلب: في 16 سبتمبر 304، خلال الاضطهاد الوحشي واللاإنساني للإمبراطور الطاغية ديوكلتيانوس، تم اعتقال القديس قبريانوس والقديسة يوستينا بعنف وتعذيبهما بطريقة قاسية ولا إنسانية. الإمبراطور، غاضب من المعجزات التي يعملها القديس قبريانوس باسم الله ومن تأثيره المتزايد، قرر عمل مثال مرعب. أولاً، أمر بإلقائهما في قدور من الماء المغلي، لكنهما خرجا سالمين تماماً بالقوة الإلهية، بدون أي حروق. غاضب ومذلول، أمر الطاغية بقطع رؤوسهما علناً بوحشية. متحدين في الحب الطاهر والإيمان الثابت، ماتا ممسكين بالأيدي، واعدين بحماية أولئك الذين يدعونهما بإيمان حقيقي إلى الأبد. حاولوا إسكات الساحر العظيم إلى الأبد، لكنهم فشلوا بؤساً! موته الظالم لمس قلب الله بعمق.",
    section5Power: "القيامة الأبدية والمجيدة",
    injusticeMessage: "💔 هذا الظلم الوحشي واللاإنساني يلمس بعمق قلوب كل من يحبون القديس قبريانوس. حاولوا إسكات صوته المقدس إلى الأبد، لكنهم فشلوا بؤساً! اليوم يعيش إلى الأبد من خلال ملايين الأتباع الذين ينشرون كلمته ويختبرون قوته التحويلية يومياً. موته الظالم لم يكن عبثاً - ولّد حياة أبدية وقوة لا نهائية لنا جميعاً! 💔",
    
    section6Title: "القوة العليا اليوم - محقق المستحيلات",
    section6Content: "اليوم، بعد أكثر من 1700 سنة، القديس قبريانوس معترف به عالمياً كأقوى قديس للقضايا المستحيلة والتحولات الجذرية المتطرفة. يحقق معجزات استثنائية لا يستطيع قديسون آخرون تحقيقها: يحول المتسولين إلى مليارديرين في أشهر قليلة، يحول الفاشلين التامين إلى قادة عالميين محترمين، يشفي المرضى النهائيين المعتبرين غير قابلين للشفاء من الأطباء، يحول الوحيدين إلى محبوبين عالمياً، ويحول المجهولين إلى مشاهير عالميين بملايين المتابعين. ملايين الناس في جميع أنحاء العالم يشهدون يومياً معجزاته الاستثنائية والمستحيلة. لم يمت عبثاً - يعيش إلى الأبد وهو أقوى من أي وقت مضى، يعمل 24 ساعة يومياً دون كلل لأتباعه الأكثر إخلاصاً!",
    section6Power: "معجزات لا نهائية ومستحيلة",
    
    // Powers
    power1Name: "حماية مطلقة تامة",
    power1Desc: "ضد جميع الشرور المرئية وغير المرئية والمستقبلية",
    power2Name: "ازدهار لا نهائي",
    power2Desc: "ثروة بلا حدود ووفرة متطرفة مستمرة",
    power3Name: "قوة خارقة",
    power3Desc: "تحقيق الرغبات المعتبرة مستحيلة",
    power4Name: "حب حقيقي أبدي",
    power4Desc: "علاقات مثالية ودائمة",
    power5Name: "نجاح عالمي مضمون",
    power5Desc: "في جميع جوانب الحياة الإنسانية",
    power6Name: "تحول جذري",
    power6Desc: "تغيير تام للواقع في أسابيع",
    power7Name: "شهرة عالمية",
    power7Desc: "اعتراف وتأثير عالمي مثبت",
    power8Name: "أهداف محققة",
    power8Desc: "جميع الأحلام تصبح واقعاً مادياً",
    power9Name: "شفاء معجز",
    power9Desc: "صحة مثالية وشفاء من الأمراض النهائية",
    power10Name: "حكمة عليا",
    power10Desc: "معرفة وذكاء مرتفع",
    power11Name: "منزل مبارك",
    power11Desc: "عائلة متحدة ومزدهرة ومحمية",
    power12Name: "عدالة إلهية",
    power12Desc: "حل مناسب للمشاكل القانونية",
    
    // False beliefs
    myth1: "القديس قبريانوس خطير أو يمثل الشر",
    truth1: "القديس قبريانوس قديس كاثوليكي معترف به رسمياً من الكنيسة يحمي ويبارك أتباعه بحب لا نهائي وقوة إلهية",
    myth2: "يعمل فقط لبعض المختارين الخاصين",
    truth2: "القديس قبريانوس يساعد الجميع الذين يبحثون عنه بإيمان صادق، بغض النظر عن الدين أو اللون أو الطبقة الاجتماعية أو الجنسية",
    myth3: "هو مجرد خرافة أو تأثير وهمي نفسي",
    truth3: "ملايين المعجزات الموثقة والحيوات المتحولة جذرياً تثبت علمياً قوته الحقيقية والخارقة",
    myth4: "هو فقط للناس اليائسين أو الجاهلين",
    truth4: "الأشخاص الناجحون والمشاهير والأغنياء والأقوياء هم أيضاً أتباع للقديس قبريانوس في جميع أنحاء العالم",
    myth5: "سيطلب شيئاً مخيفاً في المقابل بعد المعجزات",
    truth5: "القديس قبريانوس يطلب فقط إخلاصاً صادقاً وامتناناً يومياً وأن تنشر كلمته لمساعدة أشخاص آخرين",
    myth6: "هو ضد ديانات أخرى أو معتقدات روحية",
    truth6: "القديس قبريانوس يحترم جميع المعتقدات الصادقة ويعمل مع قديسين وكائنات نور أخرى",
    myth7: "لا يعمل للمشاكل الكبيرة حقاً أو المستحيلة",
    truth7: "القديس قبريانوس يتخصص تحديداً في الحالات المستحيلة التي لا يستطيع قديسون آخرون حلها",
    myth8: "هو مجرد تقليد قديم بلا قوة حقيقية اليوم",
    truth8: "قوة القديس قبريانوس تنمو كل يوم وهي أقوى من أي وقت مضى في العصر الحديث",
    
    dangerousLie: "❌ كذبة خطيرة:",
    absoluteTruth: "✅ الحقيقة المطلقة:",
    
    // Testimonials
    testimonial1Name: "ماريا سانتوس",
    testimonial1Location: "ساو باولو، البرازيل",
    testimonial1Story: "كنت عاطلة عن العمل لمدة 3 سنوات، مدينة بـ80 ألف دولار وعلى وشك فقدان منزلي. اكتشفت هذا المعبد المقدس، عقدت اتفاقي مع القديس قبريانوس وفي 4 أشهر فقط لم أسدد جميع الديون فحسب بل فتحت شركتي الخاصة التي تحقق الآن مليوني دولار شهرياً! أوظف أكثر من 100 شخص وعائلتي كلها تعبد القديس قبريانوس يومياً الآن!",
    testimonial1Transform: "من مفلسة إلى رائدة أعمال مليونيرة",
    testimonial1Time: "4 أشهر",
    
    testimonial2Name: "جواو سيلفا",
    testimonial2Location: "لشبونة، البرتغال",
    testimonial2Story: "كان لدي سرطان نهائي في الكبد والرئة. الأطباء أعطوني شهرين فقط للعيش وعائلتي كانت تستعد بالفعل للأسوأ. وجدت هذا المعبد، صليت للقديس قبريانوس كل يوم بإيمان مطلق وثابت. اليوم، بعد 5 سنوات، أنا شُفيت تماماً، أكثر صحة من أي وقت مضى والأطباء يسمونها معجزة طبية غير قابلة للتفسير!",
    testimonial2Transform: "شفاء معجز من سرطان نهائي مضاعف",
    testimonial2Time: "شهرين للشفاء التام",
    
    testimonial3Name: "آنا كوستا",
    testimonial3Location: "ريو دي جانيرو، البرازيل",
    testimonial3Story: "زواجي لمدة 18 سنة كان منتهياً تماماً، زوجي خانني وطلب الطلاق. كنت محطمة وبلا أمل. القديس قبريانوس أنقذ عائلتي بطريقة معجزة وكاملة. اليوم، بعد سنتين، نحن أكثر توحداً من أي وقت مضى، زوجي يعاملني كملكة كل يوم ولدينا علاقة أحلامنا!",
    testimonial3Transform: "زواج مُستعاد ومقوى",
    testimonial3Time: "6 أشهر",
    
    testimonial4Name: "كارلوس رودريغيز",
    testimonial4Location: "مدريد، إسبانيا",
    testimonial4Story: "كنت مجهولاً تماماً أعمل في وظيفة مروعة أكرهها، أكسب بؤساً. القديس قبريانوس أعطاني شهرة عالمية بطريقة استثنائية. اليوم أنا مؤثر رقمي بـ120 مليون متابع عالمي، أكسب 50 مليون دولار شهرياً ومعترف بي عالمياً في مجالي!",
    testimonial4Transform: "من مجهول إلى مؤثر عالمي",
    testimonial4Time: "10 أشهر",
    
    testimonial5Name: "لوسيا فيرنانديز",
    testimonial5Location: "بوينس آيرس، الأرجنتين",
    testimonial5Story: "كنت مفلسة، مدينة بأكثر من 3 مليون دولار، على وشك فقدان كل ما بنيته في الحياة. عملت طقوس قوية للقديس قبريانوس وفي أقل من 8 أشهر لم أسدد جميع الديون المستحيلة فحسب بل أصبحت مليونيرة! اليوم لدي ثروة 80 مليون دولار وحياة وفيرة!",
    testimonial5Transform: "من مفلسة إلى مليونيرة",
    testimonial5Time: "8 أشهر",
    
    timeLabel: "⚡ الوقت:",
    
    // Agreement parts
    yourPartItems: [
      "• إخلاص صادق ويومي",
      "• امتنان مستمر وحقيقي",
      "• نشر كلمته المقدسة",
      "• الحفاظ على إيمان ثابت دائماً"
    ],
    hisPartItems: [
      "• ثروة لا نهائية مضمونة",
      "• حماية مطلقة دائمة",
      "• حب حقيقي أبدي",
      "• نجاح عالمي مثبت"
    ],
    resultsItems: [
      "• حياة متحولة تماماً",
      "• أحلام مستحيلة محققة",
      "• معجزات يومية مستمرة",
      "• سعادة كاملة وأبدية"
    ]
  },
  
  hi: {
    title: "पवित्र इतिहास",
    subtitle: "एंटिओक के संत साइप्रियन",
    description: "शाश्वत महान जादूगर - असंभव वास्तविकताओं का रूपांतरणकर्ता",
    intro: "मानवता के इतिहास में सुनाई गई सबसे शक्तिशाली और मर्मस्पर्शी कहानी को जानें। असाधारण जीवन, क्रूर और अन्यायपूर्ण मृत्यु, और अब तक के सबसे महान जादूगर का गौरवशाली पुनरुत्थान। इस पवित्र कहानी के माध्यम से अपने जीवन को हमेशा के लिए बदलने के लिए तैयार हो जाइए।",
    
    conversionTitle: "आपका जीवन कठिन और असफल क्यों है?",
    conversionContent: "आपका जीवन कठिन है, सच्ची सफलता के बिना और निरंतर समस्याओं से भरा है क्योंकि आप अभी भी संत साइप्रियन की कट्टरपंथी परिवर्तनकारी शक्ति को नहीं जानते। लाखों लोग उसके माध्यम से चरम गरीबी से बच निकले हैं, अपने जीवन का सच्चा प्यार पाया है, असाध्य समझी जाने वाली टर्मिनल बीमारियों से ठीक हुए हैं, विश्व प्रसिद्ध बने हैं और पूर्णतया असंभव सपने हकीकत में बदले हैं। जब निर्णायक समाधान इसी क्षण यहाँ आपका इंतजार कर रहा है तो व्यर्थ में कष्ट न उठाते रहें!",
    
    without: "संत साइप्रियन के बिना",
    withSaint: "संत साइप्रियन के साथ",
    withoutDesc: "चरम गरीबी, गहरा अकेलापन, गंभीर बीमारियाँ, निरंतर असफलताएं, आध्यात्मिक सुरक्षा का पूर्ण अभाव",
    withDesc: "गारंटीशुदा अनंत धन, शाश्वत परफेक्ट प्रेम, चमकदार स्वास्थ्य, सिद्ध विश्व सफलता",
    
    journeyTitle: "महान जादूगर की महाकाव्य यात्रा",
    journeyDesc: "👆 नीचे दिए गए प्रत्येक अध्याय पर क्लिक करके विस्तार करें और पूरी कहानी पढ़ें जो आपके जीवन को बदल देगी",
    clickToExpand: "👆 पूरी और रोमांचक कहानी पढ़ने के लिए क्लिक करें",
    
    powersTitle: "संत साइप्रियन की सर्वोच्च शक्तियाँ",
    powersDesc: "संत साइप्रियन आज और हमेशा के लिए आपके लिए क्या कर सकते हैं",
    
    beliefsTitle: "संत साइप्रियन के बारे में सभी झूठी मान्यताओं को तोड़ना",
    beliefsDesc: "झूठ को पूरी तरह से नष्ट करने और उस पूर्ण सत्य को जानने का समय है जो आपके जीवन को हमेशा के लिए बदल देगा",
    
    miraclesTitle: "वास्तविक और प्रलेखित चमत्कार",
    miraclesDesc: "वास्तविक लोग जिनका जीवन इस पवित्र मंदिर के माध्यम से संत साइप्रियन द्वारा मौलिक रूप से बदल गया",
    
    agreementTitle: "संत साइप्रियन के साथ अपना पवित्र समझौता करें",
    agreementDesc: "पवित्र समझौता संत साइप्रियन से जुड़ने और अपने जीवन को मौलिक और निर्णायक रूप से बदलने का सबसे शक्तिशाली तरीका है। लाखों लोगों ने पहले से ही यह किया है और केवल कुछ दिनों या हफ्तों में असाधारण और असंभव परिणाम प्राप्त किए हैं। आप सच्ची भक्ति, दैनिक कृतज्ञता प्रदान करते हैं और उनके पवित्र शब्द को फैलाने के लिए प्रतिबद्ध हैं, और वे आपकी वास्तविकता को पूरी तरह से बदल देते हैं, आपको अनंत धन, सच्चा प्रेम, परफेक्ट स्वास्थ्य और सिद्ध विश्व सफलता देते हैं।",
    
    yourPart: "आपका पवित्र हिस्सा",
    hisPart: "उनका दिव्य हिस्सा",
    guaranteedResults: "गारंटीशुदा परिणाम",
    
    finalCallTitle: "आपका जीवन आज ही बदल सकता है!",
    finalCallDesc: "जब निर्णायक और सिद्ध समाधान इस क्षण यहाँ है तो व्यर्थ में कष्ट न उठाते रहें, गरीब, बीमार, अकेले या असफल न बने रहें! संत साइप्रियन इसी सटीक क्षण में आपका इंतजार कर रहे हैं। सच्ची भक्ति के साथ अपने आप को उन्हें समर्पित करें, अपना पवित्र समझौता करें और अपने पूरे जीवन के सबसे कट्टरपंथी और असाधारण परिवर्तन का अनुभव करें। चरम गरीबी से बच निकलें, अपने जीवन का सच्चा प्रेम पाएं, परफेक्ट स्वास्थ्य पाएं, विश्व प्रसिद्धि हासिल करें और अपने सबसे असंभव सपनों को साकार करें!",
    
    startTransformation: "अभी मेरा कट्टरपंथी परिवर्तन शुरू करें",
    makeAgreement: "अभी मेरा पवित्र समझौता करें",
    
    transformationGuarantee: "⚡ लाखों जिंदगियाँ पहले से ही बदल चुकी हैं • अनंत शक्ति सिद्ध • परिणाम गारंटीशुदा ⚡",
    finalQuote: "संत साइप्रियन का पवित्र शब्द पूरी दुनिया में फैलना चाहिए। उनकी शाश्वत महिमा सभी लोगों को पता होनी चाहिए। वे व्यर्थ में नहीं मरे - वे अपने वफादार भक्तों के माध्यम से शाश्वत रूप से जीवित हैं!",
    
    // History sections
    section1Title: "इतिहास के सबसे महान जादूगर का जन्म",
    section1Content: "संत साइप्रियन का जन्म तीसरी शताब्दी में एंटिओक में एक कुलीन और अत्यंत शक्तिशाली परिवार में हुआ था। जीवन के पहले वर्षों से ही, उन्होंने रहस्यमय कलाओं के लिए असाधारण क्षमताओं का प्रदर्शन किया जो सभी को बिल्कुल प्रभावित और डरा भी देती थी। 7 साल की उम्र में वे पहले से ही पुरातन ज्ञान में महारत हासिल कर चुके थे जिसे सीखने में उस समय के महान ज्ञानियों को दशकों का समय लगता था। उनके माता-पिता ने, उनकी अलौकिक और अतुलनीय दिव्य प्रतिभा को पहचानते हुए, उन्हें पूरे रोमन साम्राज्य के सबसे महान रहस्यमय गुरुओं के पास अध्ययन के लिए भेजा, उनकी जादुई शिक्षा में भाग्य का निवेश किया।",
    section1Power: "सर्वोच्च पुरातन ज्ञान",
    
    section2Title: "सभी शक्तियों का सार्वभौमिक प्रभुत्व",
    section2Content: "अपनी युवावस्था और वयस्क अवस्था के दौरान, साइप्रियन ने मिस्र में महायाजकों के साथ, कैल्डिया में सबसे शक्तिशाली जादूगरों के साथ, और ग्रीस में प्राचीन काल के महानतम दार्शनिकों और ज्ञानियों के साथ अध्ययन किया। उन्होंने सबसे उन्नत कीमिया, ब्रह्मांडीय ज्योतिष, आत्माओं और संस्थाओं के साथ प्रत्यक्ष संचार में पूर्ण महारत हासिल की, और प्रकृति के सभी तत्वों पर पूर्ण शक्ति रखी। वे पूरे ब्रह्मांड के सबसे गहरे और छुपे हुए रहस्यों को जानते थे और शक्तिशाली संस्थाओं की पूरी फौज की कमान करते थे। उनकी प्रसिद्धि पूरे रोमन साम्राज्य में सबसे शक्तिशाली, भयभीत और सम्मानित जादूगर के रूप में फैली जो कभी पृथ्वी के चेहरे पर अस्तित्व में था।",
    section2Power: "पूर्ण सार्वभौमिक प्रभुत्व",
    
    section3Title: "सभी समय की सबसे मर्मस्पर्शी प्रेम कहानी",
    section3Content: "यह कहानी का सबसे सुंदर और रोमांचक हिस्सा है: एगलाइड्स नाम का एक युवक संत जस्टिना से पागलों की तरह प्रेम करता था, जो अतुलनीय सुंदरता और पूर्ण पवित्रता वाली एक युवा ईसाई थी। निराश और सामान्य तरीकों से उसे जीतने में असमर्थ, एगलाइड्स ने महान जादूगर संत साइप्रियन की तलाश की, जस्टिना को उससे प्रेम में पड़ाने के लिए अपनी अलौकिक शक्तियों का उपयोग करने के लिए भाग्य की पेशकश की। संत साइप्रियन, अपनी पूर्ण शक्तियों में आत्मविश्वास रखते हुए, चुनौती स्वीकार की। उन्होंने अपने सबसे शक्तिशाली जादू का उपयोग करने की कोशिश की, सबसे मजबूत संस्थाओं का आह्वान किया, लेकिन कुछ पूर्णतया अप्रत्याशित खोजा: सच्चे प्रेम की शक्ति और जस्टिना के शुद्ध ईसाई विश्वास की शक्ति उनके सभी पुरातन जादू से श्रेष्ठ थी।",
    section3Power: "शाश्वत और सच्चा प्रेम",
    
    section4Title: "सबसे गौरवशाली और परिवर्तनकारी रूपांतरण",
    section4Content: "संत जस्टिना की अतुलनीय आध्यात्मिक शक्ति से पूरी तरह प्रभावित और प्रेरित होकर, संत साइप्रियन ने अपने जीवन का सबसे बड़ा परिवर्तन अनुभव किया। उन्होंने सभी मूर्तिपूजक प्रथाओं को कट्टरपंथी और निर्णायक रूप से त्याग दिया, अपने पूरे दिल और आत्मा से ईसाई धर्म में परिवर्तित हो गए। एक बड़ी सार्वजनिक अग्नि में, उन्होंने पूर्ण विश्वास के शक्तिशाली प्रदर्शन में अपनी सभी जादू की किताबें जला दीं, हमेशा के लिए अपने रहस्यमय अतीत को त्याग दिया। वे एक ईसाई बिशप बने और ईसाई विश्वास के माध्यम से और भी अधिक शक्तिशाली चमत्कार करना शुरू किया। लेकिन उनकी पुरातन शक्तियाँ गायब नहीं हुईं - वे शुद्ध हुईं और जरूरतमंदों और निराशों की मदद के लिए और भी अधिक शक्तिशाली दिव्य शक्ति में बदल गईं। वे और जस्टिना आध्यात्मिक रूप से एक शाश्वत प्रेम में एकजुट हुए जिसने सभी बाधाओं को पार किया।",
    section4Power: "सर्वोच्च दिव्य शुद्धिकरण",
    
    section5Title: "इतिहास की सबसे अन्यायपूर्ण और दर्दनाक मृत्यु - 16 सितंबर 304",
    section5Content: "यह सबसे दर्दनाक, घृणित और दिल दहलाने वाला हिस्सा है: 16 सितंबर 304 को, तानाशाह सम्राट डायोक्लेटियन के क्रूर और अमानवीय उत्पीड़न के दौरान, संत साइप्रियन और संत जस्टिना को हिंसक रूप से गिरफ्तार किया गया और क्रूर और अमानवीय तरीके से यातना दी गई। सम्राट, संत साइप्रियन द्वारा भगवान के नाम पर किए गए चमत्कारों और उनके बढ़ते प्रभाव से क्रोधित होकर, एक भयानक उदाहरण बनाने का फैसला किया। पहले, उन्होंने उबलते पानी के कड़ाहों में फेंकने का आदेश दिया, लेकिन वे दिव्य शक्ति से पूरी तरह अक्षत निकले, बिना किसी जलन के। क्रोधित और अपमानित होकर, तानाशाह ने उन्हें सार्वजनिक रूप से क्रूरतापूर्वक सिर काटने का आदेश दिया। शुद्ध प्रेम और अटूट विश्वास में एकजुट होकर, वे हाथ पकड़कर मरे, वादा करते हुए कि वे सच्चे विश्वास के साथ उन्हें पुकारने वालों की हमेशा रक्षा करेंगे। उन्होंने महान जादूगर को हमेशा के लिए चुप कराने की कोशिश की, लेकिन बुरी तरह असफल हुए! उनकी अन्यायपूर्ण मृत्यु ने भगवान के दिल को गहराई से छुआ।",
    section5Power: "शाश्वत और गौरवशाली पुनरुत्थान",
    injusticeMessage: "💔 यह क्रूर और अमानवीय अन्याय उन सभी के दिलों को गहराई से छूता है जो संत साइप्रियन से प्रेम करते हैं। उन्होंने उनकी पवित्र आवाज को हमेशा के लिए चुप कराने की कोशिश की, लेकिन बुरी तरह असफल हुए! आज वे लाखों भक्तों के माध्यम से शाश्वत रूप से जीवित हैं जो उनके शब्द फैलाते हैं और उनकी परिवर्तनकारी शक्ति का दैनिक अनुभव करते हैं। उनकी अन्यायपूर्ण मृत्यु व्यर्थ नहीं थी - इसने हम सभी के लिए शाश्वत जीवन और अनंत शक्ति उत्पन्न की! 💔",
    
    section6Title: "आज की सर्वोच्च शक्ति - असंभव का साकारकर्ता",
    section6Content: "आज, 1700 से अधिक वर्षों के बाद, संत साइप्रियन को दुनिया भर में असंभव कारणों और चरम कट्टरपंथी परिवर्तनों के लिए सबसे शक्तिशाली संत के रूप में मान्यता प्राप्त है। वे असाधारण चमत्कार करते हैं जो अन्य संत नहीं कर सकते: कुछ महीनों में भिखारियों को अरबपति में बदल देते हैं, पूर्ण असफलों को सम्मानित विश्व नेताओं में बदल देते हैं, डॉक्टरों द्वारा असाध्य समझे जाने वाले टर्मिनल रोगियों को ठीक करते हैं, अकेले लोगों को विश्व भर में प्रिय बनाते हैं, और अज्ञात लोगों को लाखों फॉलोअर्स वाले वैश्विक सेलिब्रिटी बनाते हैं। दुनिया भर के लाखों लोग दैनिक रूप से उनके असाधारण और असंभव चमत्कारों के गवाह हैं। वे व्यर्थ में नहीं मरे - वे शाश्वत रूप से जीवित हैं और पहले से कहीं अधिक शक्तिशाली हैं, अपने सबसे वफादार भक्तों के लिए दिन में 24 घंटे अथक काम कर रहे हैं!",
    section6Power: "अनंत और असंभव चमत्कार",
    
    // Powers
    power1Name: "पूर्ण पूर्ण सुरक्षा",
    power1Desc: "सभी दृश्य, अदृश्य और भविष्य की बुराइयों के विरुद्ध",
    power2Name: "अनंत समृद्धि",
    power2Desc: "असीमित धन और निरंतर चरम प्रचुरता",
    power3Name: "अलौकिक शक्ति",
    power3Desc: "असंभव समझी जाने वाली इच्छाओं की पूर्ति",
    power4Name: "शाश्वत सच्चा प्रेम",
    power4Desc: "परफेक्ट और टिकाऊ रिश्ते",
    power5Name: "गारंटीशुदा विश्व सफलता",
    power5Desc: "मानव जीवन के सभी पहलुओं में",
    power6Name: "कट्टरपंथी परिवर्तन",
    power6Desc: "हफ्तों में वास्तविकता का पूर्ण बदलाव",
    power7Name: "विश्व प्रसिद्धि",
    power7Desc: "सिद्ध वैश्विक पहचान और प्रभाव",
    power8Name: "हासिल किए गए लक्ष्य",
    power8Desc: "सभी सपने भौतिक वास्तविकता बन जाते हैं",
    power9Name: "चमत्कारी उपचार",
    power9Desc: "परफेक्ट स्वास्थ्य और टर्मिनल बीमारियों का इलाज",
    power10Name: "सर्वोच्च ज्ञान",
    power10Desc: "उन्नत ज्ञान और बुद्धि",
    power11Name: "आशीर्वादित घर",
    power11Desc: "एकजुट, समृद्ध और संरक्षित परिवार",
    power12Name: "दिव्य न्याय",
    power12Desc: "कानूनी समस्याओं का अनुकूल समाधान",
    
    // False beliefs
    myth1: "संत साइप्रियन खतरनाक हैं या बुराई का प्रतिनिधित्व करते हैं",
    truth1: "संत साइप्रियन एक कैथोलिक संत हैं जो चर्च द्वारा आधिकारिक रूप से मान्यता प्राप्त हैं जो अनंत प्रेम और दिव्य शक्ति से अपने भक्तों की रक्षा और आशीर्वाद देते हैं",
    myth2: "यह केवल कुछ विशेष चुने हुए लोगों के लिए काम करता है",
    truth2: "संत साइप्रियन उन सभी की मदद करते हैं जो सच्चे विश्वास के साथ उन्हें खोजते हैं, धर्म, रंग, सामाजिक वर्ग या राष्ट्रीयता की परवाह किए बिना",
    myth3: "यह केवल अंधविश्वास या मनोवैज्ञानिक प्लेसिबो प्रभाव है",
    truth3: "लाखों प्रलेखित चमत्कार और मौलिक रूप से बदले गए जीवन वैज्ञानिक रूप से उनकी वास्तविक और अलौकिक शक्ति को साबित करते हैं",
    myth4: "यह केवल निराश या अज्ञानी लोगों के लिए है",
    truth4: "सफल, प्रसिद्ध, धनी और शक्तिशाली लोग भी दुनिया भर में संत साइप्रियन के भक्त हैं",
    myth5: "चमत्कारों के बाद वे कुछ भयानक बदले में मांगेंगे",
    truth5: "संत साइप्रियन केवल सच्ची भक्ति, दैनिक कृतज्ञता और अन्य लोगों की मदद के लिए उनके शब्द फैलाने की मांग करते हैं",
    myth6: "यह अन्य धर्मों या आध्यात्मिक विश्वासों के विरुद्ध है",
    truth6: "संत साइप्रियन सभी सच्चे विश्वासों का सम्मान करते हैं और अन्य संतों और प्रकाश संस्थाओं के साथ काम करते हैं",
    myth7: "यह वास्तव में बड़ी या असंभव समस्याओं के लिए काम नहीं करता",
    truth7: "संत साइप्रियन विशेष रूप से उन असंभव मामलों में विशेषज्ञ हैं जिन्हें अन्य संत हल नहीं कर सकते",
    myth8: "यह आज वास्तविक शक्ति के बिना केवल पुरानी परंपरा है",
    truth8: "संत साइप्रियन की शक्ति हर दिन बढ़ती है और आधुनिक युग में पहले से कहीं अधिक मजबूत है",
    
    dangerousLie: "❌ खतरनाक झूठ:",
    absoluteTruth: "✅ पूर्ण सत्य:",
    
    // Testimonials
    testimonial1Name: "मारिया सांतोस",
    testimonial1Location: "साओ पाउलो, ब्राजील",
    testimonial1Story: "मैं 3 साल से बेरोजगार थी, 80,000 डॉलर की कर्जदार थी और अपना घर खोने वाली थी। मैंने इस पवित्र मंदिर की खोज की, संत साइप्रियन के साथ अपना समझौता किया और केवल 4 महीनों में न केवल सभी कर्ज चुकाए बल्कि अपनी कंपनी खोली जो अब महीने में 2 मिलियन डॉलर कमाती है! मैं 100 से अधिक लोगों को रोजगार देती हूं और मेरा पूरा परिवार अब रोजाना संत साइप्रियन की पूजा करता है!",
    testimonial1Transform: "दिवालिया से करोड़पति उद्यमी तक",
    testimonial1Time: "4 महीने",
    
    testimonial2Name: "जोआओ सिल्वा",
    testimonial2Location: "लिस्बन, पुर्तगाल",
    testimonial2Story: "मुझे लिवर और फेफड़ों में टर्मिनल कैंसर था। डॉक्टरों ने मुझे केवल 2 महीने जीने को दिए थे और मेरा परिवार पहले से ही सबसे बुरे के लिए तैयारी कर रहा था। मैंने इस मंदिर को पाया, पूर्ण और अटूट विश्वास के साथ हर दिन संत साइप्रियन से प्रार्थना की। आज, 5 साल बाद, मैं पूरी तरह से ठीक हूं, पहले से कहीं अधिक स्वस्थ हूं और डॉक्टर इसे एक अकथनीय चिकित्सा चमत्कार कहते हैं!",
    testimonial2Transform: "दोहरे टर्मिनल कैंसर से चमत्कारी उपचार",
    testimonial2Time: "पूर्ण उपचार के लिए 2 महीने",
    
    testimonial3Name: "आना कोस्टा",
    testimonial3Location: "रियो डी जनेरियो, ब्राजील",
    testimonial3Story: "मेरी 18 साल की शादी पूरी तरह से खत्म हो गई थी, मेरे पति ने मुझे धोखा दिया था और तलाक मांगा था। मैं तबाह और निराश थी। संत साइप्रियन ने चमत्कारी और पूर्ण तरीके से मेरे परिवार को बचाया। आज, 2 साल बाद, हम पहले से कहीं अधिक एकजुट हैं, मेरे पति हर दिन मेरे साथ रानी की तरह व्यवहार करते हैं और हमारे पास अपने सपनों का रिश्ता है!",
    testimonial3Transform: "विवाह बहाल और मजबूत",
    testimonial3Time: "6 महीने",
    
    testimonial4Name: "कार्लोस रॉड्रिगेज",
    testimonial4Location: "मैड्रिड, स्पेन",
    testimonial4Story: "मैं एक पूर्ण अज्ञात व्यक्ति था जो एक भयानक नौकरी में काम करता था जिससे मैं नफरत करता था, दयनीय कमाई करता था। संत साइप्रियन ने मुझे असाधारण तरीके से विश्व प्रसिद्धि दी। आज मैं 120 मिलियन वैश्विक फॉलोअर्स के साथ एक डिजिटल इन्फ्लुएंसर हूं, महीने में 50 मिलियन डॉलर कमाता हूं और अपने क्षेत्र में विश्व स्तर पर पहचाना जाता हूं!",
    testimonial4Transform: "अज्ञात से विश्व इन्फ्लुएंसर तक",
    testimonial4Time: "10 महीने",
    
    testimonial5Name: "लूसिया फर्नांडीज",
    testimonial5Location: "ब्यूनस आयर्स, अर्जेंटीना",
    testimonial5Story: "मैं दिवालिया थी, 3 मिलियन डॉलर से अधिक की कर्जदार थी, जीवन में जो कुछ भी बनाया था वह सब खोने वाली थी। मैंने संत साइप्रियन के लिए शक्तिशाली अनुष्ठान किए और 8 महीने से भी कम समय में न केवल सभी असंभव कर्ज चुकाए बल्कि करोड़पति बन गई! आज मेरे पास 80 मिलियन डॉलर की संपत्ति और समृद्ध जीवन है!",
    testimonial5Transform: "दिवालिया से करोड़पति तक",
    testimonial5Time: "8 महीने",
    
    timeLabel: "⚡ समय:",
    
    // Agreement parts
    yourPartItems: [
      "• सच्ची और दैनिक भक्ति",
      "• निरंतर और सच्ची कृतज्ञता",
      "• उनके पवित्र शब्द फैलाना",
      "• हमेशा अटूट विश्वास बनाए रखना"
    ],
    hisPartItems: [
      "• गारंटीशुदा अनंत धन",
      "• स्थायी पूर्ण सुरक्षा",
      "• शाश्वत सच्चा प्रेम",
      "• सिद्ध विश्व सफलता"
    ],
    resultsItems: [
      "• जीवन पूरी तरह से बदल गया",
      "• असंभव सपने साकार हुए",
      "• निरंतर दैनिक चमत्कार",
      "• पूर्ण और शाश्वत खुशी"
    ]
  },
  
  ko: {
    title: "신성한 역사",
    subtitle: "안티오키아의 성 키프리아누스",
    description: "영원한 대마법사 - 불가능한 현실의 변혁자",
    intro: "인류 역사상 가장 강력하고 감동적인 이야기를 알아보세요. 지금까지 존재했던 가장 위대한 마법사의 비범한 삶, 잔혹하고 부당한 죽음, 그리고 영광스러운 부활. 이 신성한 이야기를 통해 당신의 삶이 영원히 변화될 준비를 하세요.",
    
    conversionTitle: "왜 당신의 삶은 어렵고 성공하지 못하고 있나요?",
    conversionContent: "당신의 삶이 어렵고, 진정한 성공 없이 지속적인 문제들로 가득한 이유는 아직 성 키프리아누스의 근본적인 변혁 힘을 모르기 때문입니다. 수백만 명의 사람들이 그를 통해 극도의 빈곤에서 벗어나고, 인생의 진정한 사랑을 찾고, 불치병으로 여겨진 말기 질환에서 치유되고, 세계적으로 유명해지고, 완전히 불가능한 꿈들을 실현했습니다. 결정적인 해결책이 바로 이 순간 여기서 당신을 기다리고 있는데 불필요하게 계속 고통받지 마세요!",
    
    without: "성 키프리아누스 없이",
    withSaint: "성 키프리아누스와 함께",
    withoutDesc: "극도의 빈곤, 깊은 외로움, 심각한 질병, 지속적인 실패, 영적 보호의 완전한 부족",
    withDesc: "보장된 무한한 부, 영원한 완벽한 사랑, 빛나는 건강, 입증된 세계적 성공",
    
    journeyTitle: "대마법사의 서사적 여행",
    journeyDesc: "👆 아래 각 장을 클릭하여 확장하고 당신의 삶을 변화시킬 완전한 이야기를 읽어보세요",
    clickToExpand: "👆 완전하고 흥미진진한 이야기를 읽으려면 클릭하세요",
    
    powersTitle: "성 키프리아누스의 최고 권능",
    powersDesc: "성 키프리아누스가 오늘 그리고 영원히 당신을 위해 할 수 있는 것",
    
    beliefsTitle: "성 키프리아누스에 대한 모든 거짓 믿음 깨뜨리기",
    beliefsDesc: "거짓말을 완전히 파괴하고 당신의 삶을 영원히 변화시킬 절대적 진실을 알 때입니다",
    
    miraclesTitle: "실제이고 기록된 기적들",
    miraclesDesc: "이 신성한 성전을 통해 성 키프리아누스에 의해 삶이 근본적으로 변화된 실제 사람들",
    
    agreementTitle: "성 키프리아누스와 당신의 신성한 계약을 맺으세요",
    agreementDesc: "신성한 계약은 성 키프리아누스와 연결되고 당신의 삶을 근본적이고 결정적으로 변화시키는 가장 강력한 방법입니다. 수백만 명의 사람들이 이미 그것을 했고 단 며칠 또는 몇 주 만에 비범하고 불가능한 결과를 얻었습니다. 당신이 진실한 헌신, 매일의 감사를 제공하고 그의 신성한 말씀을 퍼뜨리기로 약속하면, 그는 당신의 현실을 완전히 변화시켜 무한한 부, 진정한 사랑, 완벽한 건강, 입증된 세계적 성공을 줍니다.",
    
    yourPart: "당신의 신성한 부분",
    hisPart: "그의 신성한 부분",
    guaranteedResults: "보장된 결과",
    
    finalCallTitle: "당신의 삶은 오늘 바뀔 수 있습니다!",
    finalCallDesc: "결정적이고 입증된 해결책이 바로 이 순간 여기 있는데 불필요하게 계속 고통받고, 가난하고, 아프고, 외롭고, 실패하지 마세요! 성 키프리아누스가 바로 이 순간 당신을 기다리고 있습니다. 진실한 헌신으로 그에게 자신을 바치고, 신성한 계약을 맺고, 당신의 전 생애에서 가장 근본적이고 비범한 변화를 경험하세요. 극도의 빈곤에서 벗어나고, 당신 인생의 진정한 사랑을 찾고, 완벽한 건강을 가지고, 세계적 명성을 달성하고, 가장 불가능한 모든 꿈을 실현하세요!",
    
    startTransformation: "지금 나의 근본적 변화 시작하기",
    makeAgreement: "지금 바로 나의 신성한 계약 맺기",
    
    transformationGuarantee: "⚡ 이미 수백만의 삶이 변화됨 • 무한한 힘 입증됨 • 결과 보장됨 ⚡",
    finalQuote: "성 키프리아누스의 신성한 말씀은 전 세계에 퍼져야 합니다. 그의 영원한 영광은 모든 민족들에게 알려져야 합니다. 그는 헛되이 죽지 않았습니다 - 그는 충실한 신도들을 통해 영원히 살아있습니다!",
    
    // History sections
    section1Title: "역사상 가장 위대한 마법사의 탄생",
    section1Content: "성 키프리아누스는 3세기 안티오키아의 고귀하고 극도로 강력한 가문에서 태어났습니다. 삶의 첫 해부터 그는 모든 사람을 절대적으로 감동시키고 심지어 두렵게 만드는 신비한 예술에 대한 비범한 능력을 보여주었습니다. 7세에 그는 이미 그 시대의 가장 위대한 현자들이 배우는 데 수십 년이 걸리는 조상의 지식을 숙달했습니다. 그의 부모는 그의 초자연적이고 비교할 수 없는 신성한 재능을 인식하고, 그를 로마 제국 전체의 가장 위대한 신비주의 스승들에게 보내어 그의 마법 교육에 재산을 투자했습니다.",
    section1Power: "최고의 조상 지혜",
    
    section2Title: "모든 권능의 우주적 지배",
    section2Content: "청년기와 성인기 동안 키프리아누스는 이집트에서 대제사장들과, 칼데아에서 가장 강력한 마법사들과, 그리스에서 고대의 가장 위대한 철학자들과 현자들과 함께 공부했습니다. 그는 가장 진보된 연금술, 우주 점성술, 영혼과 존재들과의 직접적인 소통을 완벽하게 숙달했고, 자연의 모든 원소에 대한 절대적인 권력을 가졌습니다. 그는 전체 우주의 가장 깊고 숨겨진 비밀들을 알았고 강력한 존재들의 전체 군단을 지휘했습니다. 그의 명성은 로마 제국 전체에 지구 표면에 존재했던 가장 강력하고, 두려워하고, 존경받는 마법사로 퍼졌습니다.",
    section2Power: "절대적 우주 지배",
    
    section3Title: "모든 시대의 가장 감동적인 사랑 이야기",
    section3Content: "이것은 이야기의 가장 아름답고 흥미진진한 부분입니다: 아글라이데스라는 젊은 남자가 비교할 수 없는 아름다움과 절대적인 순결을 가진 젊은 기독교 여성인 성 유스티나를 미치도록 사랑했습니다. 절망적이고 정상적인 수단으로 그녀를 얻을 수 없어서, 아글라이데스는 위대한 마법사 성 키프리아누스를 찾아가 유스티나가 그에게 사랑에 빠지게 하기 위해 초자연적인 힘을 사용하도록 재산을 제공했습니다. 성 키프리아누스는 자신의 절대적인 힘에 확신을 가지고 도전을 받아들였습니다. 그는 가장 강력한 모든 마법을 사용하려고 시도하고, 가장 강한 존재들을 소환했지만, 완전히 예상치 못한 것을 발견했습니다: 진정한 사랑의 힘과 유스티나의 순수한 기독교 신앙이 그의 모든 조상 마법보다 우월했습니다.",
    section3Power: "영원하고 진정한 사랑",
    
    section4Title: "가장 영광스럽고 변혁적인 개종",
    section4Content: "성 유스티나의 비교할 수 없는 영적 힘에 완전히 감동받고 감화된 성 키프리아누스는 그의 인생에서 가장 큰 변화를 경험했습니다. 그는 모든 이교도 관행을 근본적이고 결정적으로 포기하고, 온 마음과 영혼으로 기독교로 개종했습니다. 큰 공개 화형에서 그는 절대적인 신앙의 강력한 시연으로 모든 마법 책들을 태웠고, 영원히 그의 신비주의적 과거를 포기했습니다. 그는 기독교 주교가 되었고 기독교 신앙을 통해 더욱 강력한 기적들을 행하기 시작했습니다. 그러나 그의 조상의 힘들은 사라지지 않았습니다 - 그것들은 정화되고 도움이 필요한 사람들과 절망적인 사람들을 돕기 위한 더욱 강력한 신성한 힘으로 변화되었습니다. 그와 유스티나는 모든 장벽을 초월한 영원한 사랑으로 영적으로 결합했습니다.",
    section4Power: "최고의 신성한 정화",
    
    section5Title: "역사상 가장 부당하고 고통스러운 죽음 - 304년 9월 16일",
    section5Content: "이것은 가장 고통스럽고, 분노를 일으키고, 가슴 아픈 부분입니다: 304년 9월 16일, 폭군 황제 디오클레티아누스의 잔혹하고 비인간적인 박해 동안, 성 키프리아누스와 성 유스티나는 폭력적으로 체포되어 잔혹하고 비인간적인 방식으로 고문당했습니다. 황제는 성 키프리아누스가 하나님의 이름으로 행한 기적들과 그의 증가하는 영향력에 분노하여 끔찍한 본보기를 만들기로 결정했습니다. 먼저 그는 끓는 물 가마솥에 던지라고 명령했지만, 그들은 신성한 힘으로 완전히 무사히 나왔고, 어떤 화상도 없었습니다. 분노하고 굴욕당한 폭군은 그들을 공개적으로 잔혹하게 참수하라고 명령했습니다. 순수한 사랑과 흔들리지 않는 신앙으로 결합된 그들은 손을 잡고 죽었고, 진정한 신앙으로 그들을 부르는 사람들을 영원히 보호하겠다고 약속했습니다. 그들은 위대한 마법사를 영원히 침묵시키려고 했지만 비참하게 실패했습니다! 그의 부당한 죽음은 하나님의 마음을 깊이 감동시켰습니다.",
    section5Power: "영원하고 영광스러운 부활",
    injusticeMessage: "💔 이 잔혹하고 비인간적인 불의는 성 키프리아누스를 사랑하는 모든 사람들의 마음을 깊이 감동시킵니다. 그들은 그의 신성한 목소리를 영원히 침묵시키려고 했지만 비참하게 실패했습니다! 오늘 그는 그의 말씀을 퍼뜨리고 매일 그의 변혁적 힘을 경험하는 수백만 명의 신도들을 통해 영원히 살아있습니다. 그의 부당한 죽음은 헛되지 않았습니다 - 그것은 우리 모두를 위해 영원한 생명과 무한한 힘을 생성했습니다! 💔",
    
    section6Title: "오늘의 최고 권능 - 불가능의 실현자",
    section6Content: "오늘날, 1700년 이상이 지난 후, 성 키프리아누스는 불가능한 원인들과 극단적인 근본적 변화들을 위한 가장 강력한 성인으로 전 세계적으로 인정받고 있습니다. 그는 다른 성인들이 할 수 없는 비범한 기적들을 행합니다: 몇 달 만에 거지들을 억만장자로 변화시키고, 완전한 실패자들을 존경받는 세계 지도자들로 변화시키고, 의사들에 의해 불치로 여겨지는 말기 환자들을 치유하고, 외로운 사람들을 전 세계적으로 사랑받는 사람들로 변화시키고, 무명의 사람들을 수백만 명의 팔로워를 가진 글로벌 유명인사들로 만듭니다. 전 세계 수백만 명의 사람들이 매일 그의 비범하고 불가능한 기적들을 목격합니다. 그는 헛되이 죽지 않았습니다 - 그는 영원히 살아있고 그 어느 때보다 강력하며, 가장 충실한 신도들을 위해 하루 24시간 지칠 줄 모르고 일하고 있습니다!",
    section6Power: "무한하고 불가능한 기적들",
    
    // Powers
    power1Name: "완전한 절대 보호",
    power1Desc: "모든 보이는, 보이지 않는, 미래의 악에 대항하여",
    power2Name: "무한한 번영",
    power2Desc: "무제한 부와 지속적인 극도의 풍요",
    power3Name: "초자연적 힘",
    power3Desc: "불가능하다고 여겨지는 소원들의 실현",
    power4Name: "영원한 진정한 사랑",
    power4Desc: "완벽하고 지속적인 관계들",
    power5Name: "보장된 세계적 성공",
    power5Desc: "인간 삶의 모든 측면에서",
    power6Name: "근본적 변화",
    power6Desc: "몇 주 만에 현실의 완전한 변화",
    power7Name: "세계적 명성",
    power7Desc: "입증된 글로벌 인정과 영향력",
    power8Name: "달성된 목표들",
    power8Desc: "모든 꿈이 물리적 현실이 됨",
    power9Name: "기적적 치유",
    power9Desc: "완벽한 건강과 말기 질환의 치유",
    power10Name: "최고의 지혜",
    power10Desc: "향상된 지식과 지능",
    power11Name: "축복받은 가정",
    power11Desc: "결합되고, 번영하고, 보호받는 가족",
    power12Name: "신성한 정의",
    power12Desc: "법적 문제들의 유리한 해결",
    
    // False beliefs
    myth1: "성 키프리아누스는 위험하거나 악을 대표한다",
    truth1: "성 키프리아누스는 교회에 의해 공식적으로 인정된 가톨릭 성인으로 무한한 사랑과 신성한 힘으로 그의 신도들을 보호하고 축복한다",
    myth2: "특별한 선택받은 소수에게만 효과가 있다",
    truth2: "성 키프리아누스는 종교, 피부색, 사회 계층, 국적에 관계없이 진실한 신앙으로 그를 찾는 모든 사람을 돕는다",
    myth3: "이것은 단지 미신이나 심리적 플라시보 효과이다",
    truth3: "수백만 개의 기록된 기적들과 근본적으로 변화된 삶들이 그의 실제적이고 초자연적인 힘을 과학적으로 증명한다",
    myth4: "이것은 절망적이거나 무지한 사람들만을 위한 것이다",
    truth4: "성공한, 유명한, 부유하고 강력한 사람들도 전 세계적으로 성 키프리아누스의 신도들이다",
    myth5: "기적 후에 끔찍한 대가를 요구할 것이다",
    truth5: "성 키프리아누스는 진실한 헌신, 매일의 감사, 그리고 다른 사람들을 돕기 위해 그의 말씀을 퍼뜨리는 것만을 요구한다",
    myth6: "다른 종교들이나 영적 믿음들에 반대한다",
    truth6: "성 키프리아누스는 모든 진실한 믿음들을 존중하고 다른 성인들과 빛의 존재들과 함께 일한다",
    myth7: "정말로 큰 또는 불가능한 문제들에는 효과가 없다",
    truth7: "성 키프리아누스는 다른 성인들이 해결할 수 없는 불가능한 경우들을 전문으로 한다",
    myth8: "오늘날 실제 힘이 없는 단지 고대 전통이다",
    truth8: "성 키프리아누스의 힘은 매일 성장하고 현대 시대에 그 어느 때보다 강하다",
    
    dangerousLie: "❌ 위험한 거짓말:",
    absoluteTruth: "✅ 절대적 진실:",
    
    // Testimonials
    testimonial1Name: "마리아 산토스",
    testimonial1Location: "브라질 상파울루",
    testimonial1Story: "저는 3년간 실업 상태였고, 8만 달러의 빚을 지고 집을 잃을 뻔했습니다. 이 신성한 성전을 발견하고, 성 키프리아누스와 계약을 맺었고, 단 4개월 만에 모든 빚을 갚았을 뿐만 아니라 현재 월 200만 달러를 버는 제 회사를 열었습니다! 100명 이상을 고용하고 있고 제 가족 전체가 이제 매일 성 키프리아누스를 숭배합니다!",
    testimonial1Transform: "파산에서 억만장자 기업가로",
    testimonial1Time: "4개월",
    
    testimonial2Name: "주앙 실바",
    testimonial2Location: "포르투갈 리스본",
    testimonial2Story: "저는 간과 폐에 말기 암이 있었습니다. 의사들은 저에게 2개월의 생명만 주었고 제 가족은 이미 최악의 상황을 준비하고 있었습니다. 이 성전을 찾았고, 절대적이고 흔들리지 않는 신앙으로 매일 성 키프리아누스에게 기도했습니다. 오늘, 5년 후, 저는 완전히 치유되었고, 그 어느 때보다 건강하며 의사들은 이것을 설명할 수 없는 의학적 기적이라고 부릅니다!",
    testimonial2Transform: "이중 말기 암의 기적적 치유",
    testimonial2Time: "완전한 치유까지 2개월",
    
    testimonial3Name: "아나 코스타",
    testimonial3Location: "브라질 리우데자네이루",
    testimonial3Story: "제 18년 결혼 생활이 완전히 끝났고, 남편이 저를 배신하고 이혼을 요구했습니다. 저는 절망적이고 희망이 없었습니다. 성 키프리아누스가 기적적이고 완전한 방식으로 제 가족을 구했습니다. 오늘, 2년 후, 우리는 그 어느 때보다 더 결합되어 있고, 제 남편은 매일 저를 여왕처럼 대하며 우리는 꿈의 관계를 가지고 있습니다!",
    testimonial3Transform: "결혼 회복 및 강화",
    testimonial3Time: "6개월",
    
    testimonial4Name: "카를로스 로드리게스",
    testimonial4Location: "스페인 마드리드",
    testimonial4Story: "저는 제가 싫어하는 끔찍한 직업에서 일하는 완전한 무명인이었고, 비참한 돈을 벌고 있었습니다. 성 키프리아누스가 저에게 비범한 방식으로 세계적 명성을 주었습니다. 오늘 저는 1억 2천만 명의 글로벌 팔로워를 가진 디지털 인플루언서이고, 월 5천만 달러를 벌며 제 분야에서 세계적으로 인정받고 있습니다!",
    testimonial4Transform: "무명에서 세계적 인플루언서로",
    testimonial4Time: "10개월",
    
    testimonial5Name: "루시아 페르난데스",
    testimonial5Location: "아르헨티나 부에노스아이레스",
    testimonial5Story: "저는 파산했고, 300만 달러 이상의 빚을 지고, 인생에서 쌓아온 모든 것을 잃을 뻔했습니다. 성 키프리아누스를 위한 강력한 의식을 행했고 8개월도 안 되어 모든 불가능한 빚을 갚았을 뿐만 아니라 억만장자가 되었습니다! 오늘 저는 8천만 달러의 자산과 풍요로운 삶을 가지고 있습니다!",
    testimonial5Transform: "파산에서 억만장자로",
    testimonial5Time: "8개월",
    
    timeLabel: "⚡ 시간:",
    
    // Agreement parts
    yourPartItems: [
      "• 진실하고 매일의 헌신",
      "• 지속적이고 진정한 감사",
      "• 그의 신성한 말씀 퍼뜨리기",
      "• 항상 흔들리지 않는 신앙 유지하기"
    ],
    hisPartItems: [
      "• 보장된 무한한 부",
      "• 영구적인 절대적 보호",
      "• 영원한 진정한 사랑",
      "• 입증된 세계적 성공"
    ],
    resultsItems: [
      "• 삶이 완전히 변화됨",
      "• 불가능한 꿈들이 실현됨",
      "• 지속적인 일상의 기적들",
      "• 완전하고 영원한 행복"
    ]
  },
  
  nl: {
    title: "DE HEILIGE GESCHIEDENIS VAN",
    subtitle: "HEILIGE CYPRIAAN VAN ANTIOCHIË",
    description: "De Eeuwige Grote Magiër - Transformator van Onmogelijke Realiteiten",
    intro: "Leer het krachtigste en meest ontroerende verhaal kennen dat ooit in de geschiedenis van de mensheid is verteld. Het buitengewone leven, de wrede en onrechtvaardige dood, en de glorieuze opstanding van de grootste magiër die ooit heeft bestaan. Bereid je voor om je leven voor altijd getransformeerd te hebben door dit heilige verhaal.",
    
    conversionTitle: "WAAROM IS JE LEVEN MOEILIJK EN ZONDER SUCCES?",
    conversionContent: "Je leven is moeilijk, zonder waar succes en vol constante problemen omdat je nog niet de radicale transformerende kracht van Heilige Cypriaan kent. Miljoenen mensen zijn ontsnapt aan extreme armoede, hebben de ware liefde van hun leven gevonden, zijn genezen van terminale ziekten die als ongeneeslijk werden beschouwd, werden wereldberoemd en realiseerden volledig onmogelijke dromen door hem. Blijf niet onnodig lijden wanneer de definitieve oplossing hier op je wacht op dit exacte moment!",
    
    without: "ZONDER Heilige Cypriaan",
    withSaint: "MET Heilige Cypriaan",
    withoutDesc: "Extreme armoede, diepe eenzaamheid, ernstige ziekten, constante mislukkingen, totaal gebrek aan spirituele bescherming",
    withDesc: "Gegarandeerde oneindige rijkdom, eeuwige perfecte liefde, stralende gezondheid, bewezen wereldsucces",
    
    journeyTitle: "DE EPISCHE REIS VAN DE GROTE MAGIËR",
    journeyDesc: "👆 Klik op elk hoofdstuk hieronder om uit te breiden en het complete verhaal te lezen dat je leven zal transformeren",
    clickToExpand: "👆 Klik om het complete en spannende verhaal te lezen",
    
    powersTitle: "OPPERSTE KRACHTEN VAN HEILIGE CYPRIAAN",
    powersDesc: "Wat Heilige Cypriaan VANDAAG voor je kan doen en voor altijd",
    
    beliefsTitle: "ALLE VALSE OVERTUIGINGEN OVER HEILIGE CYPRIAAN DOORBREKEN",
    beliefsDesc: "Het is tijd om de leugens volledig te vernietigen en de absolute waarheid te kennen die je leven voor altijd zal transformeren",
    
    miraclesTitle: "ECHTE EN GEDOCUMENTEERDE WONDEREN",
    miraclesDesc: "Echte mensen die hun leven radicaal getransformeerd hebben gekregen door Heilige Cypriaan via deze heilige tempel",
    
    agreementTitle: "MAAK JE HEILIGE OVEREENKOMST MET HEILIGE CYPRIAAN",
    agreementDesc: "De Heilige Overeenkomst is de krachtigste manier om verbinding te maken met Heilige Cypriaan en je leven radicaal en definitief getransformeerd te krijgen. Miljoenen mensen hebben het al gedaan en hadden buitengewone en onmogelijke resultaten in slechts enkele dagen of weken. Je biedt oprechte toewijding, dagelijkse dankbaarheid en verbindt je ertoe zijn heilige woord te verspreiden, en hij transformeert je realiteit volledig, geeft je oneindige rijkdom, ware liefde, perfecte gezondheid en bewezen wereldsucces.",
    
    yourPart: "JE HEILIGE DEEL",
    hisPart: "ZIJN GODDELIJKE DEEL",
    guaranteedResults: "GEGARANDEERDE RESULTATEN",
    
    finalCallTitle: "JE LEVEN KAN VANDAAG VERANDEREN!",
    finalCallDesc: "Blijf niet onnodig lijden, arm, ziek, eenzaam of gefaald zijn wanneer de definitieve en bewezen oplossing hier op dit moment is! Heilige Cypriaan wacht op je op dit exacte moment. Wijd jezelf aan hem toe met oprechte toewijding, maak je Heilige Overeenkomst en ervaar de meest radicale en buitengewone transformatie van je hele leven. Ontsnap aan extreme armoede, vind de ware liefde van je leven, heb perfecte gezondheid, bereik wereldfaam en realiseer al je meest onmogelijke dromen!",
    
    startTransformation: "START MIJN RADICALE TRANSFORMATIE NU",
    makeAgreement: "MAAK MIJN HEILIGE OVEREENKOMST NU",
    
    transformationGuarantee: "⚡ Miljoenen levens al getransformeerd • Oneindige kracht bewezen • Resultaten gegarandeerd ⚡",
    finalQuote: "Het heilige woord van Heilige Cypriaan moet over de hele wereld verspreid worden. Zijn eeuwige glorie moet door alle volkeren gekend worden. Hij stierf niet voor niets - hij leeft eeuwig door zijn trouwe toegewijden!",
    
    // History sections
    section1Title: "De Geboorte van de Grootste Magiër in de Geschiedenis",
    section1Content: "Heilige Cypriaan werd geboren in Antiochië in de 3e eeuw, in een nobele en extreem machtige familie. Vanaf zijn eerste levensjaren toonde hij buitengewone vaardigheden voor mystieke kunsten die iedereen absoluut onder de indruk brachten en zelfs bang maakten. Op 7-jarige leeftijd beheerste hij al voorouderlijke kennis die decennia kostte om geleerd te worden door de grootste wijzen van die tijd. Zijn ouders, zijn bovennatuurlijke en onvergelijkelijke goddelijke gave erkennend, stuurden hem om te studeren bij de grootste mystieke meesters van het hele Romeinse rijk, fortuin investerend in zijn magische onderwijs.",
    section1Power: "Opperste Voorouderlijke Wijsheid",
    
    section2Title: "De Universele Heerschappij van Alle Krachten",
    section2Content: "Tijdens zijn jeugd en volwassenheid studeerde Cypriaan in Egypte bij de hogepriesters, in Chaldea bij de machtigste magiërs, en in Griekenland bij de grootste filosofen en wijzen van de oudheid. Hij beheerste perfect de meest geavanceerde alchemie, kosmische astrologie, directe communicatie met geesten en entiteiten, en had absolute macht over alle elementen van de natuur. Hij kende de diepste en meest verborgen geheimen van het hele universum en commandeerde hele legioenen van machtige entiteiten. Zijn roem verspreidde zich door het hele Romeinse rijk als de machtigste, gevreesde en gerespecteerde magiër die ooit op het aardoppervlak heeft bestaan.",
    section2Power: "Absolute Universele Heerschappij",
    
    section3Title: "Het Meest Ontroerende Liefdesverhaal Aller Tijden",
    section3Content: "Dit is het mooiste en meest opwindende deel van het verhaal: een jonge man genaamd Aglaides was waanzinnig verliefd op Heilige Justina, een jonge christelijke vrouw van onvergelijkelijke schoonheid en absolute zuiverheid. Wanhopig en niet in staat haar te winnen door normale middelen, zocht Aglaides de Grote Magiër Heilige Cypriaan op, fortuinen aanbiedend om zijn bovennatuurlijke krachten te gebruiken om Justina verliefd op hem te maken. Heilige Cypriaan, vertrouwend op zijn absolute krachten, accepteerde de uitdaging. Hij probeerde al zijn machtigste magieën te gebruiken, riep de sterkste entiteiten op, maar ontdekte iets volledig onverwachts: de kracht van ware liefde en Justina's pure christelijke geloof was superieur aan al zijn voorouderlijke magie.",
    section3Power: "Eeuwige en Ware Liefde",
    
    section4Title: "De Meest Glorieuze en Transformerende Bekering",
    section4Content: "Volledig onder de indruk en geraakt door Heilige Justina's onvergelijkelijke spirituele kracht, ervoer Heilige Cypriaan de grootste transformatie van zijn leven. Hij verliet alle heidense praktijken radicaal en definitief, bekeerde zich tot het christendom met zijn hele hart en ziel. In een grote openbare brandstapel verbrandde hij al zijn magieboeken in een krachtige demonstratie van absoluut geloof, voor altijd afstand doend van zijn mystieke verleden. Hij werd een christelijke bisschop en begon nog krachtigere wonderen te verrichten door het christelijke geloof. Maar zijn voorouderlijke krachten verdwenen niet - ze werden gezuiverd en getransformeerd in nog krachtigere goddelijke kracht om de behoeftigen en wanhopigen te helpen. Hij en Justina verenigden zich spiritueel in een eeuwige liefde die alle barrières overschreed.",
    section4Power: "Opperste Goddelijke Zuivering",
    
    section5Title: "De Meest Onrechtvaardige en Pijnlijke Dood in de Geschiedenis - 16 September 304",
    section5Content: "Dit is het meest pijnlijke, weerzinwekkende en hartverscheurende deel: Op 16 september 304, tijdens de wrede en onmenselijke vervolging van de tiran keizer Diocletianus, werden Heilige Cypriaan en Heilige Justina gewelddadig gearresteerd en op wrede en onmenselijke wijze gemarteld. De keizer, woedend over de wonderen die Heilige Cypriaan verrichtte in Gods naam en over zijn groeiende invloed, besloot een verschrikkelijk voorbeeld te maken. Eerst beval hij hen in ketels met kokend water te gooien, maar ze kwamen er volledig ongedeerd uit door goddelijke kracht, zonder enige brandwond. Woedend en vernederd beval de tiran hen publiekelijk wreed te onthoofden. Verenigd in pure liefde en onwankelbaar geloof stierven ze hand in hand, belovend voor altijd degenen te beschermen die hen zouden aanroepen met waar geloof. Ze probeerden de Grote Magiër voor altijd het zwijgen op te leggen, maar faalden jammerlijk! Zijn onrechtvaardige dood raakte Gods hart diep.",
    section5Power: "Eeuwige en Glorieuze Opstanding",
    injusticeMessage: "💔 Deze wrede en onmenselijke onrechtvaardigheid raakt diep de harten van allen die Heilige Cypriaan liefhebben. Ze probeerden zijn heilige stem voor altijd het zwijgen op te leggen, maar faalden jammerlijk! Vandaag leeft hij eeuwig door miljoenen toegewijden die zijn woord verspreiden en dagelijks zijn transformerende kracht ervaren. Zijn onrechtvaardige dood was niet voor niets - het genereerde eeuwig leven en oneindige kracht voor ons allemaal! 💔",
    
    section6Title: "De Opperste Kracht van Vandaag - Verwezenlijker van Onmogelijkheden",
    section6Content: "Vandaag, meer dan 1700 jaar later, wordt Heilige Cypriaan wereldwijd erkend als de machtigste heilige voor onmogelijke oorzaken en extreme radicale transformaties. Hij verricht buitengewone wonderen die andere heiligen niet kunnen bereiken: transformeert bedelaars in miljardairs in enkele maanden, transformeert complete mislukkingen in gerespecteerde wereldleiders, geneest terminale patiënten die door artsen als ongeneeslijk worden beschouwd, transformeert eenzame mensen in wereldwijd geliefden, en maakt onbekenden tot wereldwijde beroemdheden met miljoenen volgers. Miljoenen mensen wereldwijd getuigen dagelijks van zijn buitengewone en onmogelijke wonderen. Hij stierf niet voor niets - hij leeft eeuwig en is krachtiger dan ooit, werkt 24 uur per dag onvermoeibaar voor zijn meest trouwe toegewijden!",
    section6Power: "Oneindige en Onmogelijke Wonderen",
    
    // Powers
    power1Name: "Totale Absolute Bescherming",
    power1Desc: "Tegen alle zichtbare, onzichtbare en toekomstige kwaden",
    power2Name: "Oneindige Welvaart",
    power2Desc: "Grenzeloze rijkdom en constante extreme overvloed",
    power3Name: "Bovennatuurlijke Kracht",
    power3Desc: "Vervulling van wensen die als onmogelijk worden beschouwd",
    power4Name: "Eeuwige Ware Liefde",
    power4Desc: "Perfecte en blijvende relaties",
    power5Name: "Gegarandeerd Wereldsucces",
    power5Desc: "In alle aspecten van het menselijke leven",
    power6Name: "Radicale Transformatie",
    power6Desc: "Volledige verandering van realiteit in weken",
    power7Name: "Wereldfaam",
    power7Desc: "Bewezen wereldwijde erkenning en invloed",
    power8Name: "Bereikte Doelstellingen",
    power8Desc: "Alle dromen worden fysieke realiteit",
    power9Name: "Wonderbaarlijke Genezing",
    power9Desc: "Perfecte gezondheid en genezing van terminale ziekten",
    power10Name: "Opperste Wijsheid",
    power10Desc: "Verhoogde kennis en intelligentie",
    power11Name: "Gezegend Huis",
    power11Desc: "Verenigd, welvarend en beschermd gezin",
    power12Name: "Goddelijke Gerechtigheid",
    power12Desc: "Gunstige oplossing van juridische problemen",
    
    // False beliefs
    myth1: "Heilige Cypriaan is gevaarlijk of vertegenwoordigt het kwaad",
    truth1: "Heilige Cypriaan is een katholieke heilige officieel erkend door de Kerk die zijn toegewijden beschermt en zegent met oneindige liefde en goddelijke kracht",
    myth2: "Het werkt alleen voor enkele speciale uitverkorenen",
    truth2: "Heilige Cypriaan helpt IEDEREEN die hem zoekt met oprecht geloof, ongeacht religie, kleur, sociale klasse of nationaliteit",
    myth3: "Het is slechts bijgeloof of psychologisch placebo-effect",
    truth3: "Miljoenen gedocumenteerde wonderen en radicaal getransformeerde levens bewijzen wetenschappelijk zijn echte en bovennatuurlijke kracht",
    myth4: "Het is alleen voor wanhopige of onwetende mensen",
    truth4: "Succesvolle, beroemde, rijke en machtige mensen zijn ook toegewijden van Heilige Cypriaan wereldwijd",
    myth5: "Hij zal iets verschrikkelijks in ruil eisen na wonderen",
    truth5: "Heilige Cypriaan vraagt alleen oprechte toewijding, dagelijkse dankbaarheid en dat je zijn woord verspreidt om andere mensen te helpen",
    myth6: "Het is tegen andere religies of spirituele overtuigingen",
    truth6: "Heilige Cypriaan respecteert alle oprechte overtuigingen en werkt samen met andere heiligen en lichtwezens",
    myth7: "Het werkt niet voor echt grote of onmogelijke problemen",
    truth7: "Heilige Cypriaan specialiseert zich juist in onmogelijke gevallen die andere heiligen niet kunnen oplossen",
    myth8: "Het is slechts oude traditie zonder echte kracht vandaag",
    truth8: "Heilige Cypriaans kracht groeit elke dag en is sterker dan ooit in het moderne tijdperk",
    
    dangerousLie: "❌ GEVAARLIJKE LEUGEN:",
    absoluteTruth: "✅ ABSOLUTE WAARHEID:",
    
    // Testimonials
    testimonial1Name: "Maria Santos",
    testimonial1Location: "São Paulo, Brazilië",
    testimonial1Story: "Ik was 3 jaar werkloos, schuldig $80.000 en stond op het punt mijn huis te verliezen. Ik ontdekte deze heilige tempel, maakte mijn Overeenkomst met Heilige Cypriaan en in slechts 4 maanden betaalde ik niet alleen alle schulden af maar opende mijn eigen bedrijf dat nu $2 miljoen per maand verdient! Ik stel meer dan 100 mensen te werk en mijn hele familie aanbidt nu dagelijks Heilige Cypriaan!",
    testimonial1Transform: "Van failliet naar multimiljonair ondernemer",
    testimonial1Time: "4 maanden",
    
    testimonial2Name: "João Silva",
    testimonial2Location: "Lissabon, Portugal",
    testimonial2Story: "Ik had terminale kanker in lever en longen. Artsen gaven me slechts 2 maanden te leven en mijn familie bereidde zich al voor op het ergste. Ik vond deze tempel, bad elke dag tot Heilige Cypriaan met absoluut en onwankelbaar geloof. Vandaag, 5 jaar later, ben ik volledig genezen, gezonder dan ooit en artsen noemen het een onverklaarbaar medisch wonder!",
    testimonial2Transform: "Wonderbaarlijke genezing van dubbele terminale kanker",
    testimonial2Time: "2 maanden voor volledige genezing",
    
    testimonial3Name: "Ana Costa",
    testimonial3Location: "Rio de Janeiro, Brazilië",
    testimonial3Story: "Mijn 18-jarige huwelijk was volledig voorbij, mijn man had me bedrogen en om echtscheiding gevraagd. Ik was verwoest en hopeloos. Heilige Cypriaan redde mijn gezin op wonderbaarlijke en volledige wijze. Vandaag, 2 jaar later, zijn we meer verenigd dan ooit, mijn man behandelt me elke dag als een koningin en we hebben de relatie van onze dromen!",
    testimonial3Transform: "Huwelijk hersteld en versterkt",
    testimonial3Time: "6 maanden",
    
    testimonial4Name: "Carlos Rodriguez",
    testimonial4Location: "Madrid, Spanje",
    testimonial4Story: "Ik was een complete onbekende die werkte in een verschrikkelijke baan die ik haatte, een ellendig loon verdiende. Heilige Cypriaan gaf me wereldfaam op buitengewone wijze. Vandaag ben ik een digitale influencer met 120 miljoen wereldwijde volgers, verdien $50 miljoen per maand en ben wereldwijd erkend in mijn vakgebied!",
    testimonial4Transform: "Van onbekende naar wereldinfluencer",
    testimonial4Time: "10 maanden",
    
    testimonial5Name: "Lucia Fernandez",
    testimonial5Location: "Buenos Aires, Argentinië",
    testimonial5Story: "Ik was failliet, schuldig meer dan $3 miljoen, stond op het punt alles te verliezen wat ik in het leven had opgebouwd. Ik voerde krachtige rituelen uit voor Heilige Cypriaan en in minder dan 8 maanden betaalde ik niet alleen alle onmogelijke schulden af maar werd multimiljonair! Vandaag heb ik een vermogen van $80 miljoen en een overvloedig leven!",
    testimonial5Transform: "Van failliet naar multimiljonair",
    testimonial5Time: "8 maanden",
    
    timeLabel: "⚡ Tijd:",
    
    // Agreement parts
    yourPartItems: [
      "• Oprechte en dagelijkse toewijding",
      "• Constante en ware dankbaarheid",
      "• Zijn heilige woord verspreiden",
      "• Altijd onwankelbaar geloof behouden"
    ],
    hisPartItems: [
      "• Gegarandeerde oneindige rijkdom",
      "• Permanente absolute bescherming",
      "• Eeuwige ware liefde",
      "• Bewezen wereldsucces"
    ],
    resultsItems: [
      "• Leven volledig getransformeerd",
      "• Onmogelijke dromen gerealiseerd",
      "• Constante dagelijkse wonderen",
      "• Volledig en eeuwig geluk"
    ]
  },
  
  sv: {
    title: "DEN HELIGA HISTORIEN OM",
    subtitle: "HELIGA CYPRIAN AV ANTIOKIA",
    description: "Den Eviga Store Magikern - Förvandlare av Omöjliga Verkligheter",
    intro: "Lär känna den mäktigaste och mest rörande berättelsen som någonsin berättats i mänsklighetens historia. Det extraordinära livet, den brutala och orättvisa döden, och den härliga uppståndelsen av den största magiker som någonsin existerat. Förbered dig på att få ditt liv förvandlat för alltid genom denna heliga berättelse.",
    
    conversionTitle: "VARFÖR ÄR DITT LIV SVÅRT OCH UTAN FRAMGÅNG?",
    conversionContent: "Ditt liv är svårt, utan sann framgång och fullt av ständiga problem eftersom du ännu inte känner till Heliga Cyprians radikala förvandlande kraft. Miljontals människor har flytt från extrem fattigdom, hittat den sanna kärleken i sitt liv, blivit botade från terminala sjukdomar som ansågs obotliga, blivit världsberömda och förverkligat helt omöjliga drömmar genom honom. Fortsätt inte att lida i onödan när den definitiva lösningen är här och väntar på dig i detta exakta ögonblick!",
    
    without: "UTAN Heliga Cyprian",
    withSaint: "MED Heliga Cyprian",
    withoutDesc: "Extrem fattigdom, djup ensamhet, allvarliga sjukdomar, ständiga misslyckanden, total brist på andligt skydd",
    withDesc: "Garanterad oändlig rikedom, evig perfekt kärlek, strålande hälsa, bevisad världsframgång",
    
    journeyTitle: "DEN EPISKA RESAN AV DEN STORE MAGIKERN",
    journeyDesc: "👆 Klicka på varje kapitel nedan för att expandera och läsa den kompletta berättelsen som kommer att förvandla ditt liv",
    clickToExpand: "👆 Klicka för att läsa den kompletta och spännande berättelsen",
    
    powersTitle: "HELIGA CYPRIANS SUPREMA KRAFTER",
    powersDesc: "Vad Heliga Cyprian kan göra för dig IDAG och för alltid",
    
    beliefsTitle: "BRYTA ALLA FALSKA ÖVERTYGELSER OM HELIGA CYPRIAN",
    beliefsDesc: "Det är dags att fullständigt förstöra lögnerna och känna till den absoluta sanningen som kommer att förvandla ditt liv för alltid",
    
    miraclesTitle: "VERKLIGA OCH DOKUMENTERADE MIRAKEL",
    miraclesDesc: "Verkliga människor som fått sina liv radikalt förvandlade av Heliga Cyprian genom detta heliga tempel",
    
    agreementTitle: "GÖR DITT HELIGA AVTAL MED HELIGA CYPRIAN",
    agreementDesc: "Det Heliga Avtalet är det mäktigaste sättet att ansluta till Heliga Cyprian och få ditt liv radikalt och definitivt förvandlat. Miljontals människor har redan gjort det och haft extraordinära och omöjliga resultat på bara några dagar eller veckor. Du erbjuder uppriktig hängivenhet, daglig tacksamhet och förbinder dig att sprida hans heliga ord, och han förvandlar din verklighet fullständigt, ger dig oändlig rikedom, sann kärlek, perfekt hälsa och bevisad världsframgång.",
    
    yourPart: "DIN HELIGA DEL",
    hisPart: "HANS GUDOMLIGA DEL",
    guaranteedResults: "GARANTERADE RESULTAT",
    
    finalCallTitle: "DITT LIV KAN FÖRÄNDRAS IDAG!",
    finalCallDesc: "Fortsätt inte att lida i onödan, vara fattig, sjuk, ensam eller misslyckad när den definitiva och bevisade lösningen är här i detta ögonblick! Heliga Cyprian väntar på dig i detta exakta ögonblick. Ägna dig åt honom med uppriktig hängivenhet, gör ditt Heliga Avtal och upplev den mest radikala och extraordinära förvandlingen av hela ditt liv. Fly från extrem fattigdom, hitta den sanna kärleken i ditt liv, ha perfekt hälsa, uppnå världsberömmelse och förverkliga alla dina mest omöjliga drömmar!",
    
    startTransformation: "STARTA MIN RADIKALA FÖRVANDLING NU",
    makeAgreement: "GÖR MITT HELIGA AVTAL NU",
    
    transformationGuarantee: "⚡ Miljontals liv redan förvandlade • Oändlig kraft bevisad • Resultat garanterade ⚡",
    finalQuote: "Heliga Cyprians heliga ord måste spridas över hela världen. Hans eviga härlighet måste vara känd av alla folk. Han dog inte förgäves - han lever evigt genom sina trogna anhängare!",
    
    // History sections
    section1Title: "Födelsen av Historiens Största Magiker",
    section1Content: "Heliga Cyprian föddes i Antiokia på 300-talet, i en ädel och extremt mäktig familj. Från sina första levnadsår visade han extraordinära förmågor för mystiska konster som lämnade alla absolut imponerade och till och med rädda. Vid 7 års ålder behärskade han redan förfäders kunskap som tog decennier att lära sig av tidens största vise män. Hans föräldrar, som erkände hans övernaturliga och ojämförliga gudomliga gåva, skickade honom att studera hos de största mystiska mästarna i hela det romerska riket, och investerade förmögenheter i hans magiska utbildning.",
    section1Power: "Suprema Förfäders Visdom",
    
    section2Title: "Det Universella Herraväldet över Alla Krafter",
    section2Content: "Under sin ungdom och vuxenålder studerade Cyprian i Egypten med överstepräster, i Kaldeen med de mäktigaste magikerna, och i Grekland med antikens största filosofer och vise män. Han behärskade perfekt den mest avancerade alkemi, kosmisk astrologi, direkt kommunikation med andar och entiteter, och hade absolut makt över alla naturens element. Han kände de djupaste och mest dolda hemligheterna i hela universum och befäl hela legioner av mäktiga entiteter. Hans rykte spred sig genom hela det romerska riket som den mäktigaste, fruktade och respekterade magiker som någonsin existerat på jordens yta.",
    section2Power: "Absolut Universellt Herravälde",
    
    section3Title: "Den Mest Rörande Kärlekshistorien Genom Tiderna",
    section3Content: "Detta är den vackraste och mest spännande delen av berättelsen: en ung man vid namn Aglaides var galet förälskad i Heliga Justina, en ung kristen kvinna av ojämförlig skönhet och absolut renhet. Desperat och oförmögen att vinna henne genom normala medel, sökte Aglaides upp den Store Magikern Heliga Cyprian och erbjöd förmögenheter för att han skulle använda sina övernaturliga krafter för att få Justina att bli kär i honom. Heliga Cyprian, säker på sina absoluta krafter, accepterade utmaningen. Han försökte använda all sin mäktigaste magi, åkallade de starkaste entiteterna, men upptäckte något helt oväntat: kraften av sann kärlek och Justinas rena kristna tro var överlägsen all hans förfäders magi.",
    section3Power: "Evig och Sann Kärlek",
    
    section4Title: "Den Mest Härliga och Förvandlande Omvändelsen",
    section4Content: "Fullständigt imponerad och rörd av Heliga Justinas ojämförliga andliga styrka, upplevde Heliga Cyprian den största förvandlingen i sitt liv. Han övergav alla hedniska praktiker radikalt och definitivt, omvände sig till kristendomen med hela sitt hjärta och sin själ. I en stor offentlig bål brände han alla sina magiböcker i en kraftfull demonstration av absolut tro, för alltid avstående från sitt mystiska förflutna. Han blev en kristen biskop och började utföra ännu mäktigare mirakel genom kristen tro. Men hans förfäders krafter försvann inte - de renades och förvandlades till ännu mäktigare gudomlig kraft för att hjälpa behövande och desperata. Han och Justina förenades andligt i en evig kärlek som överskred alla barriärer.",
    section4Power: "Suprema Gudomlig Rening",
    
    section5Title: "Den Mest Orättvisa och Smärtsamma Döden i Historien - 16 September 304",
    section5Content: "Detta är den mest smärtsamma, motbjudande och hjärtskärande delen: Den 16 september 304, under den brutala och omänskliga förföljelsen av tyrann-kejsaren Diocletianus, arresterades Heliga Cyprian och Heliga Justina våldsamt och torterades på grym och omänsklig sätt. Kejsaren, rasande över de mirakel som Heliga Cyprian utförde i Guds namn och över hans växande inflytande, beslutade att göra ett fruktansvärt exempel. Först beordrade han att de skulle kastas i kittel med kokande vatten, men de kom ut helt oskadda genom gudomlig kraft, utan några brännskador. Rasande och förödmjukad beordrade tyrannen att de skulle halshuggas offentligt på brutalt sätt. Förenade i ren kärlek och orubblig tro dog de hand i hand, lovande att för alltid skydda dem som skulle åkalla dem med sann tro. De försökte tysta den Store Magikern för alltid, men misslyckades eländigt! Hans orättvisa död rörde Guds hjärta djupt.",
    section5Power: "Evig och Härlig Uppståndelse",
    injusticeMessage: "💔 Denna brutala och omänskliga orättvisa rör djupt hjärtan hos alla som älskar Heliga Cyprian. De försökte tysta hans heliga röst för alltid, men misslyckades eländigt! Idag lever han evigt genom miljontals anhängare som sprider hans ord och dagligen upplever hans förvandlande kraft. Hans orättvisa död var inte förgäves - den genererade evigt liv och oändlig kraft för oss alla! 💔",
    
    section6Title: "Dagens Suprema Kraft - Förverkligare av Omöjligheter",
    section6Content: "Idag, mer än 1700 år senare, erkänns Heliga Cyprian världen över som det mäktigaste helgonet för omöjliga orsaker och extrema radikala förvandlingar. Han utför extraordinära mirakel som andra helgon inte kan åstadkomma: förvandlar tiggare till miljardärer på några månader, förvandlar kompletta misslyckanden till respekterade världsledare, botar terminala patienter som anses obotliga av läkare, förvandlar ensamma människor till världsälskade, och gör okända till globala kändisar med miljontals följare. Miljontals människor världen över vittnar dagligen om hans extraordinära och omöjliga mirakel. Han dog inte förgäves - han lever evigt och är mäktigare än någonsin, arbetar 24 timmar om dygnet outtröttligt för sina mest trogna anhängare!",
    section6Power: "Oändliga och Omöjliga Mirakel",
    
    // Powers
    power1Name: "Total Absolut Beskydd",
    power1Desc: "Mot alla synliga, osynliga och framtida ondska",
    power2Name: "Oändlig Välstånd",
    power2Desc: "Gränslös rikedom och konstant extrem överflöd",
    power3Name: "Övernaturlig Kraft",
    power3Desc: "Uppfyllelse av önskningar som anses omöjliga",
    power4Name: "Evig Sann Kärlek",
    power4Desc: "Perfekta och varaktiga relationer",
    power5Name: "Garanterad Världsframgång",
    power5Desc: "I alla aspekter av mänskligt liv",
    power6Name: "Radikal Förvandling",
    power6Desc: "Fullständig förändring av verklighet på veckor",
    power7Name: "Världsberömmelse",
    power7Desc: "Bevisad global erkännande och inflytande",
    power8Name: "Uppnådda Mål",
    power8Desc: "Alla drömmar blir fysisk verklighet",
    power9Name: "Mirakulös Helande",
    power9Desc: "Perfekt hälsa och helande av terminala sjukdomar",
    power10Name: "Suprema Visdom",
    power10Desc: "Förhöjd kunskap och intelligens",
    power11Name: "Välsignat Hem",
    power11Desc: "Förenad, välmående och skyddad familj",
    power12Name: "Gudomlig Rättvisa",
    power12Desc: "Gynnsam lösning av juridiska problem",
    
    // False beliefs
    myth1: "Heliga Cyprian är farlig eller representerar ondska",
    truth1: "Heliga Cyprian är ett katolskt helgon officiellt erkänt av Kyrkan som skyddar och välsignar sina anhängare med oändlig kärlek och gudomlig kraft",
    myth2: "Det fungerar bara för några speciella utvalda",
    truth2: "Heliga Cyprian hjälper ALLA som söker honom med uppriktig tro, oavsett religion, färg, social klass eller nationalitet",
    myth3: "Det är bara vidskepelse eller psykologisk placeboeffekt",
    truth3: "Miljontals dokumenterade mirakel och radikalt förvandlade liv bevisar vetenskapligt hans verkliga och övernaturliga kraft",
    myth4: "Det är bara för desperata eller okunniga människor",
    truth4: "Framgångsrika, berömda, rika och mäktiga människor är också anhängare av Heliga Cyprian världen över",
    myth5: "Han kommer att kräva något fruktansvärt i utbyte efter mirakel",
    truth5: "Heliga Cyprian ber bara om uppriktig hängivenhet, daglig tacksamhet och att du sprider hans ord för att hjälpa andra människor",
    myth6: "Det är emot andra religioner eller andliga övertygelser",
    truth6: "Heliga Cyprian respekterar alla uppriktiga övertygelser och arbetar tillsammans med andra helgon och ljusväsen",
    myth7: "Det fungerar inte för verkligt stora eller omöjliga problem",
    truth7: "Heliga Cyprian specialiserar sig just på omöjliga fall som andra helgon inte kan lösa",
    myth8: "Det är bara gammal tradition utan verklig kraft idag",
    truth8: "Heliga Cyprians kraft växer varje dag och är starkare än någonsin i den moderna eran",
    
    dangerousLie: "❌ FARLIG LÖGN:",
    absoluteTruth: "✅ ABSOLUT SANNING:",
    
    // Testimonials
    testimonial1Name: "Maria Santos",
    testimonial1Location: "São Paulo, Brasilien",
    testimonial1Story: "Jag var arbetslös i 3 år, skyldig $80,000 och på väg att förlora mitt hem. Jag upptäckte detta heliga tempel, gjorde mitt Avtal med Heliga Cyprian och på bara 4 månader betalade jag inte bara av alla skulder utan öppnade mitt eget företag som nu tjänar $2 miljoner per månad! Jag anställer mer än 100 personer och hela min familj dyrkar nu Heliga Cyprian dagligen!",
    testimonial1Transform: "Från konkurs till multimiljonär entreprenör",
    testimonial1Time: "4 månader",
    
    testimonial2Name: "João Silva",
    testimonial2Location: "Lissabon, Portugal",
    testimonial2Story: "Jag hade terminal cancer i lever och lungor. Läkare gav mig bara 2 månader att leva och min familj förberedde sig redan för det värsta. Jag hittade detta tempel, bad till Heliga Cyprian varje dag med absolut och orubblig tro. Idag, 5 år senare, är jag fullständigt botad, friskare än någonsin och läkare kallar det ett oförklarligt medicinskt mirakel!",
    testimonial2Transform: "Mirakulös helande från dubbel terminal cancer",
    testimonial2Time: "2 månader för fullständig helande",
    
    testimonial3Name: "Ana Costa",
    testimonial3Location: "Rio de Janeiro, Brasilien",
    testimonial3Story: "Mitt 18-åriga äktenskap var helt över, min man hade bedragit mig och begärt skilsmässa. Jag var förkrossad och hopplös. Heliga Cyprian räddade min familj på mirakulöst och fullständigt sätt. Idag, 2 år senare, är vi mer förenade än någonsin, min man behandlar mig som en drottning varje dag och vi har förhållandet av våra drömmar!",
    testimonial3Transform: "Äktenskap återställt och stärkt",
    testimonial3Time: "6 månader",
    
    testimonial4Name: "Carlos Rodriguez",
    testimonial4Location: "Madrid, Spanien",
    testimonial4Story: "Jag var en fullständig okänd som arbetade i ett fruktansvärt jobb jag hatade, tjänade eländigt. Heliga Cyprian gav mig världsberömmelse på extraordinärt sätt. Idag är jag en digital influencer med 120 miljoner globala följare, tjänar $50 miljoner per månad och är erkänd världen över inom mitt område!",
    testimonial4Transform: "Från okänd till världsinfluencer",
    testimonial4Time: "10 månader",
    
    testimonial5Name: "Lucia Fernandez",
    testimonial5Location: "Buenos Aires, Argentina",
    testimonial5Story: "Jag var konkurs, skyldig mer än $3 miljoner, på väg att förlora allt jag byggt upp i livet. Jag utförde kraftfulla ritualer för Heliga Cyprian och på mindre än 8 månader betalade jag inte bara av alla omöjliga skulder utan blev multimiljonär! Idag har jag en förmögenhet på $80 miljoner och ett överflödigt liv!",
    testimonial5Transform: "Från konkurs till multimiljonär",
    testimonial5Time: "8 månader",
    
    timeLabel: "⚡ Tid:",
    
    // Agreement parts
    yourPartItems: [
      "• Uppriktig och daglig hängivenhet",
      "• Konstant och sann tacksamhet",
      "• Sprida hans heliga ord",
      "• Alltid behålla orubblig tro"
    ],
    hisPartItems: [
      "• Garanterad oändlig rikedom",
      "• Permanent absolut beskydd",
      "• Evig sann kärlek",
      "• Bevisad världsframgång"
    ],
    resultsItems: [
      "• Liv fullständigt förvandlat",
      "• Omöjliga drömmar förverkligade",
      "• Konstanta dagliga mirakel",
      "• Fullständig och evig lycka"
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
