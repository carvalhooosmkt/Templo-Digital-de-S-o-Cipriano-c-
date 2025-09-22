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
        instructions: "Recite com uma vela branca acesa, de manhã ou à noite, com total fé e devoção.",
        text: `Glorioso São Cipriano, grande mago e protetor supremo de todos os necessitados,

Invoco vosso poder infinito e ancestral para que me protejais de todos os males, visíveis e invisíveis, conhecidos e desconhecidos, presentes e futuros.

Com vossa força divina incomparável, afastai de mim toda energia negativa, toda inveja cruel, todo olhar mal intencionado, toda maldade direcionada contra mim e minha família.

Criai em torno de mim e de todos os meus entes queridos um escudo impenetrável de luz dourada divina, que nenhum mal possa atravessar jamais.

São Cipriano, dai-me força sobrenatural, coragem inabalável e sabedoria suprema para enfrentar todos os desafios da vida com dignidade e vitória.

Que vossa proteção poderosa me acompanhe sempre, em todos os momentos de minha vida, em todos os lugares que eu for, em todos os caminhos que eu seguir.

Fazei de mim um canal de vosso poder neste mundo, para que eu possa ajudar outros necessitados e espalhar vossa glória.

Que minha vida seja um testemunho vivo do vosso poder protetor infinito.

Assim seja, assim se faça, com o poder infinito e eterno de São Cipriano. Amém.

🔱 PODER INFINITO 🔱`
      },
      prosperity: {
        title: "Oração da Prosperidade Infinita",
        category: "Riqueza e Abundância Extrema",
        purpose: "Atração de riqueza extrema, abundância sem limites e oportunidades de ouro",
        benefits: ["Riqueza multiplicada exponencialmente", "Oportunidades de ouro surgem constantemente", "Abundância em todas as áreas da vida"],
        instructions: "Recite diariamente pela manhã com uma vela dourada, visualizando sua prosperidade.",
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

🔱 RIQUEZA INFINITA 🔱 Assim seja para sempre! Amém.`
      },
      power: {
        title: "Oração do Poder Supremo",
        category: "Poder Pessoal e Autoridade",
        purpose: "Desenvolvimento de poder pessoal, autoridade absoluta e influência mundial",
        benefits: ["Autoridade suprema sobre todas as situações", "Influência mundial e reconhecimento", "Poder de manifestação instantânea"],
        instructions: "Recite em local reservado, com 7 velas douradas, concentrando-se em seu poder interior.",
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

🔱 PODER SUPREMO 🔱 Assim seja para sempre e eternamente! Amém.`
      },
      love: {
        title: "Oração do Amor Verdadeiro",
        category: "Amor e Relacionamentos Perfeitos",
        purpose: "Atração do amor verdadeiro, relacionamentos perfeitos e união eterna",
        benefits: ["Amor verdadeiro e duradouro", "Relacionamento dos sonhos realizado", "União sagrada e eterna"],
        instructions: "Recite com duas velas vermelhas acesas, pensando na pessoa amada ou no amor que deseja.",
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

🔱 AMOR ETERNO 🔱 Assim seja para sempre! Amém.`
      },
      healing: {
        title: "Oração da Cura Milagrosa",
        category: "Saúde Perfeita e Cura Divina",
        purpose: "Cura completa de todas as doenças, saúde perfeita e vitalidade extrema",
        benefits: ["Cura total e definitiva", "Saúde radiante e perfeita", "Vitalidade extrema e duradoura"],
        instructions: "Recite com uma vela branca, tocando a parte do corpo que precisa de cura.",
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

🔱 CURA DIVINA 🔱 Assim seja para sempre! Amém.`
      },
      fame: {
        title: "Oração da Fama Mundial",
        category: "Sucesso Global e Reconhecimento",
        purpose: "Alcançar fama mundial, reconhecimento global e influência planetária",
        benefits: ["Fama internacional garantida", "Reconhecimento mundial em sua área", "Influência global positiva"],
        instructions: "Recite com 5 velas douradas em formato de estrela, visualizando seu sucesso mundial.",
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

🔱 FAMA MUNDIAL 🔱 Assim seja para sempre! Amém.`
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
        instructions: "Recite with a white candle lit, morning or night, with total faith and devotion.",
        text: `Glorious Saint Cyprian, great mage and supreme protector of all who are in need,

I invoke your infinite and ancestral power so that you protect me from all evils, visible and invisible, known and unknown, present and future.

With your incomparable divine strength, remove from me all negative energy, all cruel envy, all malicious gaze, all evil directed against me and my family.

Create around me and all my loved ones an impenetrable shield of divine golden light, which no evil can ever cross.

Saint Cyprian, give me supernatural strength, unshakeable courage and supreme wisdom to face all life's challenges with dignity and victory.

May your powerful protection accompany me always, in every moment of my life, in every place I go, on every path I follow.

Make me a channel of your power in this world, so that I can help other needy souls and spread your glory.

May my life be a living testimony of your infinite protective power.

So be it, so it is done, with the infinite and eternal power of Saint Cyprian. Amen.

🔱 INFINITE POWER 🔱`
      },
      prosperity: {
        title: "Prayer of Infinite Prosperity",
        category: "Wealth and Extreme Abundance",
        purpose: "Attraction of extreme wealth, limitless abundance and golden opportunities",
        benefits: ["Exponentially multiplied wealth", "Golden opportunities arise constantly", "Abundance in all areas of life"],
        instructions: "Recite daily in the morning with a golden candle, visualizing your prosperity.",
        text: `Powerful Saint Cyprian, supreme lord of ancestral magic and radical transformation,

I come humbly into your sacred presence to request your blessing of infinite prosperity and extreme abundance in all aspects of my life.

Open all closed paths to wealth in my life, remove all financial obstacles that prevent me from prospering as I deserve.

May money come to me in unexpected and abundant ways, through your powerful and miraculous intercession, constantly multiplying.

Multiply my financial resources exponentially, attract golden opportunities to my life, make me prosperous beyond any human imagination.

May I be prosperous in all aspects: financial, professional, personal and spiritual, living in total abundance.

Saint Cyprian, great mage of cosmic abundance, grant me endless wealth and eternal prosperity that never runs out nor diminishes.

Make my prosperity a glorious testimony of your power, so others may see and glorify your sacred name.

May I use my wealth to honor your name and help the needy, spreading your glory throughout the world.

With absolute faith in your infinite power, I thank you in advance for all blessings.

🔱 INFINITE WEALTH 🔱 So be it forever! Amen.`
      },
      power: {
        title: "Prayer of Supreme Power",
        category: "Personal Power and Authority",
        purpose: "Development of personal power, absolute authority and worldwide influence",
        benefits: ["Supreme authority over all situations", "Worldwide influence and recognition", "Instant manifestation power"],
        instructions: "Recite in a private place, with 7 golden candles, focusing on your inner power.",
        text: `Supreme Saint Cyprian, absolute master of all mysteries of the universe,

Grant me a generous portion of your infinite and ancestral power so that I can transform my reality completely and definitively.

Give me supreme authority over all circumstances of my life, so that I am the absolute master of my destiny.

May my word have divine weight, my presence inspire deep respect, my will manifest instantly in reality.

Strengthen my mind with supreme wisdom, my spirit with unshakeable force and my determination with absolute and unquestionable power.

May I have positive and powerful influence over all people I encounter on my path, being respected and admired by all.

Saint Cyprian, great mage of cosmic power, make me a channel of your supreme power in this earthly world.

May I be prosperous, respected, admired and successful in absolutely everything I undertake in my life.

May my success be so extraordinary and inspiring that it motivates others to seek your power as well.

May I never abuse this power, always using it for good, for justice and to spread your glory.

With your divine force running through my veins, nothing is impossible for me, all my dreams become physical reality.

🔱 SUPREME POWER 🔱 So be it forever and eternally! Amen.`
      },
      love: {
        title: "Prayer of True Love",
        category: "Love and Perfect Relationships",
        purpose: "Attraction of true love, perfect relationships and eternal union",
        benefits: ["True and lasting love", "Dream relationship realized", "Sacred and eternal union"],
        instructions: "Recite with two red candles lit, thinking of the loved one or the love you desire.",
        text: `Beloved Saint Cyprian, who knew true and eternal love with Saint Justina,

Intercede for me so that I find the true and perfect love of my life, the one who will transform my heart forever.

Attract to me the ideal person, the one who was destined by heaven to be my eternal companion, my true soulmate.

May our love be pure like yours, true like Saint Justina's, lasting like eternal love and blessed by your divine protection.

Remove all obstacles that prevent true love from reaching me, break all barriers of the heart.

Make me deeply loved, completely respected and eternally valued by my ideal partner.

Saint Cyprian, bless my relationship with perfect harmony, mutual understanding, burning passion and eternal happiness.

May our love be a sacred reflection of your eternal love with Saint Justina, inspiring others to true love.

Protect our relationship from all envy, from all negative interference and from all energy that could separate us.

Make our love grow each day, strengthen each moment and become an example of true love for the world.

🔱 ETERNAL LOVE 🔱 So be it forever! Amen.`
      },
      healing: {
        title: "Prayer of Miraculous Healing",
        category: "Perfect Health and Divine Healing",
        purpose: "Complete healing of all diseases, perfect health and extreme vitality",
        benefits: ["Total and definitive healing", "Radiant and perfect health", "Extreme and lasting vitality"],
        instructions: "Recite with a white candle, touching the body part that needs healing.",
        text: `Merciful Saint Cyprian, great healer of bodies, minds and souls,

I invoke your supreme healing power so that you grant me perfect and complete health in all aspects of my being.

Heal all diseases of my physical body, mind and spirit with your divine and miraculous touch.

Completely restore my vitality, my life energy and my strength to live fully and with joy.

May every cell of my body be renewed and regenerated by your divine power, functioning in perfect harmony.

Remove from me all illness, all pain, all physical and emotional suffering that afflicts me at this moment.

Saint Cyprian, make me a living example of your miraculous and instantaneous healing capacity.

May my perfect health be a powerful testimony of your power for others who suffer and need hope.

Give me wisdom to take good care of my body, which is a sacred temple of your divine presence.

Protect me from all future diseases and keep me always in perfect physical, mental and spiritual health.

🔱 DIVINE HEALING 🔱 So be it forever! Amen.`
      },
      fame: {
        title: "Prayer of World Fame",
        category: "Global Success and Recognition",
        purpose: "Achieve world fame, global recognition and planetary influence",
        benefits: ["Guaranteed international fame", "Worldwide recognition in your field", "Positive global influence"],
        instructions: "Recite with 5 golden candles in star formation, visualizing your worldwide success.",
        text: `Glorious Saint Cyprian, who is known, venerated and respected throughout the world,

Grant me world fame and extraordinary global recognition in my area of expertise and action.

Make my name known, respected and admired on all continents of Earth.

May my unique talent and exceptional work reach millions of people around the entire world.

Open all golden doors to international success and positive and lasting global influence.

May I be a powerful and positive inspiration for millions of people on the entire planet Earth.

Saint Cyprian, make my world fame be used to spread your sacred word and your divine power.

Through my extraordinary success, may more people know your name and devote themselves to you with true faith.

Protect my reputation from all slander, from all envy and from all negative energy that could harm my success.

Make my worldwide influence always be used for good, to inspire and to transform lives positively.

🔱 WORLD FAME 🔱 So be it forever! Amen.`
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
        instructions: "Recita con una vela blanca encendida, de mañana o de noche, con total fe y devoción.",
        text: `Glorioso San Cipriano, gran mago y protector supremo de todos los necesitados,

Invoco tu poder infinito y ancestral para que me protejas de todos los males, visibles e invisibles, conocidos y desconocidos, presentes y futuros.

Con tu fuerza divina incomparable, aleja de mí toda energía negativa, toda envidia cruel, toda mirada mal intencionada, toda maldad dirigida contra mí y mi familia.

Crea alrededor de mí y de todos mis seres queridos un escudo impenetrable de luz dorada divina, que ningún mal pueda atravesar jamás.

San Cipriano, dame fuerza sobrenatural, valor inquebrantable y sabiduría suprema para enfrentar todos los desafíos de la vida con dignidad y victoria.

Que tu protección poderosa me acompañe siempre, en todos los momentos de mi vida, en todos los lugares donde vaya, en todos los caminos que siga.

Haz de mí un canal de tu poder en este mundo, para que pueda ayudar a otros necesitados y esparcir tu gloria.

Que mi vida sea un testimonio vivo de tu poder protector infinito.

Así sea, así se haga, con el poder infinito y eterno de San Cipriano. Amén.

🔱 PODER INFINITO 🔱`
      },
      prosperity: {
        title: "Oración de Prosperidad Infinita",
        category: "Riqueza y Abundancia Extrema",
        purpose: "Atracción de riqueza extrema, abundancia sin límites y oportunidades de oro",
        benefits: ["Riqueza multiplicada exponencialmente", "Oportunidades de oro surgen constantemente", "Abundancia en todas las áreas de la vida"],
        instructions: "Recita diariamente por la mañana con una vela dorada, visualizando tu prosperidad.",
        text: `Poderoso San Cipriano, señor supremo de la magia ancestral y de la transformación radical,

Vengo humildemente a tu presencia sagrada para solicitar tu bendición de prosperidad infinita y abundancia extrema en todos los aspectos de mi vida.

Abre todos los caminos cerrados hacia la riqueza en mi vida, remueve todos los obstáculos financieros que me impiden prosperar como merezco.

Que el dinero llegue a mí de formas inesperadas y abundantes, a través de tu intercesión poderosa y milagrosa, multiplicándose constantemente.

Multiplica mis recursos financieros de forma exponencial, atrae oportunidades de oro a mi vida, haz que sea próspero más allá de cualquier imaginación humana.

Que sea próspero en todos los aspectos: financiero, profesional, personal y espiritual, viviendo en abundancia total.

San Cipriano, gran mago de la abundancia cósmica, concédeme riqueza sin fin y prosperidad eterna que nunca se agote ni disminuya.

Haz que mi prosperidad sea un testimonio glorioso de tu poder, para que otros vean y glorifiquen tu nombre sagrado.

Que use mi riqueza para honrar tu nombre y ayudar a los necesitados, esparciendo tu gloria por el mundo.

Con fe absoluta en tu poder infinito, te agradezco anticipadamente por todas las bendiciones.

🔱 RIQUEZA INFINITA 🔱 ¡Así sea para siempre! Amén.`
      },
      power: {
        title: "Oración del Poder Supremo",
        category: "Poder Personal y Autoridad",
        purpose: "Desarrollo de poder personal, autoridad absoluta e influencia mundial",
        benefits: ["Autoridad suprema sobre todas las situaciones", "Influencia mundial y reconocimiento", "Poder de manifestación instantánea"],
        instructions: "Recita en lugar reservado, con 7 velas doradas, concentrándote en tu poder interior.",
        text: `Supremo San Cipriano, maestro absoluto de todos los misterios del universo,

Concédeme una porción generosa de tu poder infinito y ancestral para que pueda transformar mi realidad completamente y definitivamente.

Dame autoridad suprema sobre todas las circunstancias de mi vida, para que sea el señor absoluto de mi destino.

Que mi palabra tenga peso divino, mi presencia inspire respeto profundo, mi voluntad se manifieste instantáneamente en la realidad.

Fortalece mi mente con sabiduría suprema, mi espíritu con fuerza inquebrantable y mi determinación con poder absoluto e incuestionable.

Que tenga influencia positiva y poderosa sobre todas las personas que encuentro en mi camino, siendo respetado y admirado por todos.

San Cipriano, gran mago del poder cósmico, haz de mí un canal de tu poder supremo en este mundo terrenal.

Que sea próspero, respetado, admirado y exitoso en absolutamente todo lo que emprendo en mi vida.

Que mi éxito sea tan extraordinario e inspirador que motive a otros a buscar tu poder también.

Que nunca abuse de este poder, usándolo siempre para el bien, para la justicia y para esparcir tu gloria.

Con tu fuerza divina corriendo por mis venas, nada me es imposible, todos mis sueños se vuelven realidad física.

🔱 PODER SUPREMO 🔱 ¡Así sea para siempre y eternamente! Amén.`
      },
      love: {
        title: "Oración del Amor Verdadero",
        category: "Amor y Relaciones Perfectas",
        purpose: "Atracción del amor verdadero, relaciones perfectas y unión eterna",
        benefits: ["Amor verdadero y duradero", "Relación de los sueños realizada", "Unión sagrada y eterna"],
        instructions: "Recita con dos velas rojas encendidas, pensando en la persona amada o en el amor que deseas.",
        text: `Amado San Cipriano, que conociste el amor verdadero y eterno con Santa Justina,

Intercede por mí para que encuentre el amor verdadero y perfecto de mi vida, aquel que transformará mi corazón para siempre.

Atrae hacia mí a la persona ideal, aquella que fue destinada por los cielos para ser mi compañera eterna, mi alma gemela verdadera.

Que nuestro amor sea puro como el tuyo, verdadero como el de Santa Justina, duradero como el amor eterno y bendecido por tu protección divina.

Remueve todos los obstáculos que impiden que el amor verdadero llegue a mí, rompe todas las barreras del corazón.

Haz que sea amado profundamente, respetado completamente y valorado eternamente por mi pareja ideal.

San Cipriano, bendice mi relación con armonía perfecta, comprensión mutua, pasión ardiente y felicidad eterna.

Que nuestro amor sea un reflejo sagrado de tu amor eterno con Santa Justina, inspirando a otros al amor verdadero.

Protege nuestra relación de toda envidia, de toda interferencia negativa y de toda energía que pueda separarnos.

Haz que nuestro amor crezca cada día, se fortalezca cada momento y se convierta en un ejemplo de amor verdadero para el mundo.

🔱 AMOR ETERNO 🔱 ¡Así sea para siempre! Amén.`
      },
      healing: {
        title: "Oración de Curación Milagrosa",
        category: "Salud Perfecta y Curación Divina",
        purpose: "Curación completa de todas las enfermedades, salud perfecta y vitalidad extrema",
        benefits: ["Curación total y definitiva", "Salud radiante y perfecta", "Vitalidad extrema y duradera"],
        instructions: "Recita con una vela blanca, tocando la parte del cuerpo que necesita curación.",
        text: `Misericordioso San Cipriano, gran curador de cuerpos, mentes y almas,

Invoco tu poder supremo de curación para que me concedas salud perfecta y completa en todos los aspectos de mi ser.

Cura todas las enfermedades de mi cuerpo físico, mente y espíritu con tu toque divino y milagroso.

Restaura completamente mi vitalidad, mi energía vital y mi fuerza para vivir plenamente y con alegría.

Que cada célula de mi cuerpo sea renovada y regenerada por tu poder divino, funcionando en perfecta armonía.

Aleja de mí toda enfermedad, todo dolor, todo sufrimiento físico y emocional que me aflige en este momento.

San Cipriano, haz de mí un ejemplo viviente de tu capacidad de curación milagrosa e instantánea.

Que mi salud perfecta sea un testimonio poderoso de tu poder para otros que sufren y necesitan esperanza.

Dame sabiduría para cuidar bien de mi cuerpo, que es templo sagrado de tu presencia divina.

Protégeme de todas las enfermedades futuras y mantenme siempre en perfecta salud física, mental y espiritual.

🔱 CURACIÓN DIVINA 🔱 ¡Así sea para siempre! Amén.`
      },
      fame: {
        title: "Oración de Fama Mundial",
        category: "Éxito Global y Reconocimiento",
        purpose: "Alcanzar fama mundial, reconocimiento global e influencia planetaria",
        benefits: ["Fama internacional garantizada", "Reconocimiento mundial en tu área", "Influencia global positiva"],
        instructions: "Recita con 5 velas doradas en formato de estrella, visualizando tu éxito mundial.",
        text: `Glorioso San Cipriano, que eres conocido, venerado y respetado en todo el mundo,

Concédeme fama mundial y reconocimiento global extraordinario en mi área de actuación y experiencia.

Haz que mi nombre sea conocido, respetado y admirado en todos los continentes de la Tierra.

Que mi talento único y mi trabajo excepcional alcancen millones de personas alrededor del mundo entero.

Abre todas las puertas doradas al éxito internacional y la influencia global positiva y duradera.

Que sea una inspiración poderosa y positiva para millones de personas en todo el planeta Tierra.

San Cipriano, haz que mi fama mundial sea usada para esparcir tu palabra sagrada y tu poder divino.

Que a través de mi éxito extraordinario, más personas conozcan tu nombre y se dediquen a ti con fe verdadera.

Protege mi reputación de toda calumnia, de toda envidia y de toda energía negativa que pueda perjudicar mi éxito.

Haz que mi influencia mundial sea siempre usada para el bien, para inspirar y para transformar vidas positivamente.

🔱 FAMA MUNDIAL 🔱 ¡Así sea para siempre! Amén.`
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
        instructions: "Récitez avec une bougie blanche allumée, matin ou soir, avec foi totale et dévotion.",
        text: `Glorieux Saint Cyprien, grand mage et protecteur suprême de tous ceux qui sont dans le besoin,

J'invoque votre pouvoir infini et ancestral pour que vous me protégiez de tous les maux, visibles et invisibles, connus et inconnus, présents et futurs.

Avec votre force divine incomparable, éloignez de moi toute énergie négative, toute jalousie cruelle, tout regard malveillant, toute méchanceté dirigée contre moi et ma famille.

Créez autour de moi et de tous mes êtres chers un bouclier impénétrable de lumière dorée divine, qu'aucun mal ne puisse jamais traverser.

Saint Cyprien, donnez-moi une force surnaturelle, un courage inébranlable et une sagesse suprême pour affronter tous les défis de la vie avec dignité et victoire.

Que votre protection puissante m'accompagne toujours, à chaque moment de ma vie, dans tous les lieux où je vais, sur tous les chemins que je suis.

Faites de moi un canal de votre pouvoir dans ce monde, pour que je puisse aider d'autres âmes nécessiteuses et répandre votre gloire.

Que ma vie soit un témoignage vivant de votre pouvoir protecteur infini.

Ainsi soit-il, ainsi cela se fait, avec le pouvoir infini et éternel de Saint Cyprien. Amen.

🔱 POUVOIR INFINI 🔱`
      },
      prosperity: {
        title: "Prière de Prospérité Infinie",
        category: "Richesse et Abondance Extrême",
        purpose: "Attraction de richesse extrême, abondance sans limites et opportunités d'or",
        benefits: ["Richesse multipliée exponentiellement", "Opportunités d'or surgissent constamment", "Abondance dans tous les domaines de la vie"],
        instructions: "Récitez quotidiennement le matin avec une bougie dorée, visualisant votre prospérité.",
        text: `Puissant Saint Cyprien, seigneur suprême de la magie ancestrale et de la transformation radicale,

Je viens humblement en votre présence sacrée pour demander votre bénédiction de prospérité infinie et d'abondance extrême dans tous les aspects de ma vie.

Ouvrez tous les chemins fermés vers la richesse dans ma vie, enlevez tous les obstacles financiers qui m'empêchent de prospérer comme je le mérite.

Que l'argent vienne à moi de manières inattendues et abondantes, à travers votre intercession puissante et miraculeuse, se multipliant constamment.

Multipliez mes ressources financières de manière exponentielle, attirez des opportunités d'or dans ma vie, rendez-moi prospère au-delà de toute imagination humaine.

Que je sois prospère dans tous les aspects : financier, professionnel, personnel et spirituel, vivant dans l'abondance totale.

Saint Cyprien, grand mage de l'abondance cosmique, accordez-moi une richesse sans fin et une prospérité éternelle qui ne s'épuise ni ne diminue jamais.

Faites que ma prospérité soit un témoignage glorieux de votre pouvoir, pour que d'autres voient et glorifient votre nom sacré.

Que j'utilise ma richesse pour honorer votre nom et aider les nécessiteux, répandant votre gloire à travers le monde.

Avec une foi absolue en votre pouvoir infini, je vous remercie à l'avance pour toutes les bénédictions.

🔱 RICHESSE INFINIE 🔱 Ainsi soit-il pour toujours ! Amen.`
      },
      power: {
        title: "Prière du Pouvoir Suprême",
        category: "Pouvoir Personnel et Autorité",
        purpose: "Développement du pouvoir personnel, autorité absolue et influence mondiale",
        benefits: ["Autorité suprême sur toutes les situations", "Influence mondiale et reconnaissance", "Pouvoir de manifestation instantanée"],
        instructions: "Récitez dans un lieu privé, avec 7 bougies dorées, en vous concentrant sur votre pouvoir intérieur.",
        text: `Suprême Saint Cyprien, maître absolu de tous les mystères de l'univers,

Accordez-moi une portion généreuse de votre pouvoir infini et ancestral pour que je puisse transformer ma réalité complètement et définitivement.

Donnez-moi l'autorité suprême sur toutes les circonstances de ma vie, pour que je sois le maître absolu de mon destin.

Que ma parole ait un poids divin, ma présence inspire un respect profond, ma volonté se manifeste instantanément dans la réalité.

Fortifiez mon esprit avec une sagesse suprême, mon âme avec une force inébranlable et ma détermination avec un pouvoir absolu et incontestable.

Que j'aie une influence positive et puissante sur toutes les personnes que je rencontre sur mon chemin, étant respecté et admiré par tous.

Saint Cyprien, grand mage du pouvoir cosmique, faites de moi un canal de votre pouvoir suprême dans ce monde terrestre.

Que je sois prospère, respecté, admiré et réussi dans absolument tout ce que j'entreprends dans ma vie.

Que mon succès soit si extraordinaire et inspirant qu'il motive d'autres à chercher votre pouvoir aussi.

Que je n'abuse jamais de ce pouvoir, l'utilisant toujours pour le bien, pour la justice et pour répandre votre gloire.

Avec votre force divine coulant dans mes veines, rien ne m'est impossible, tous mes rêves deviennent réalité physique.

🔱 POUVOIR SUPRÊME 🔱 Ainsi soit-il pour toujours et éternellement ! Amen.`
      },
      love: {
        title: "Prière de l'Amour Véritable",
        category: "Amour et Relations Parfaites",
        purpose: "Attraction de l'amour véritable, relations parfaites et union éternelle",
        benefits: ["Amour véritable et durable", "Relation de rêve réalisée", "Union sacrée et éternelle"],
        instructions: "Récitez avec deux bougies rouges allumées, pensant à la personne aimée ou à l'amour que vous désirez.",
        text: `Bien-aimé Saint Cyprien, qui avez connu l'amour véritable et éternel avec Sainte Justine,

Intercédez pour moi afin que je trouve l'amour véritable et parfait de ma vie, celui qui transformera mon cœur pour toujours.

Attirez vers moi la personne idéale, celle qui était destinée par les cieux à être ma compagne éternelle, ma vraie âme sœur.

Que notre amour soit pur comme le vôtre, véritable comme celui de Sainte Justine, durable comme l'amour éternel et béni par votre protection divine.

Enlevez tous les obstacles qui empêchent l'amour véritable de m'atteindre, brisez toutes les barrières du cœur.

Faites que je sois aimé profondément, respecté complètement et valorisé éternellement par mon partenaire idéal.

Saint Cyprien, bénissez ma relation avec une harmonie parfaite, une compréhension mutuelle, une passion ardente et un bonheur éternel.

Que notre amour soit un reflet sacré de votre amour éternel avec Sainte Justine, inspirant d'autres à l'amour véritable.

Protégez notre relation de toute jalousie, de toute interférence négative et de toute énergie qui pourrait nous séparer.

Faites que notre amour grandisse chaque jour, se renforce à chaque moment et devienne un exemple d'amour véritable pour le monde.

🔱 AMOUR ÉTERNEL 🔱 Ainsi soit-il pour toujours ! Amen.`
      },
      healing: {
        title: "Prière de Guérison Miraculeuse",
        category: "Santé Parfaite et Guérison Divine",
        purpose: "Guérison complète de toutes les maladies, santé parfaite et vitalité extrême",
        benefits: ["Guérison totale et définitive", "Santé rayonnante et parfaite", "Vitalité extrême et durable"],
        instructions: "Récitez avec une bougie blanche, touchant la partie du corps qui a besoin de guérison.",
        text: `Miséricordieux Saint Cyprien, grand guérisseur des corps, esprits et âmes,

J'invoque votre pouvoir suprême de guérison pour que vous m'accordiez une santé parfaite et complète dans tous les aspects de mon être.

Guérissez toutes les maladies de mon corps physique, esprit et âme avec votre toucher divin et miraculeux.

Restaurez complètement ma vitalité, mon énergie vitale et ma force pour vivre pleinement et avec joie.

Que chaque cellule de mon corps soit renouvelée et régénérée par votre pouvoir divin, fonctionnant en parfaite harmonie.

Éloignez de moi toute maladie, toute douleur, toute souffrance physique et émotionnelle qui m'afflige en ce moment.

Saint Cyprien, faites de moi un exemple vivant de votre capacité de guérison miraculeuse et instantanée.

Que ma santé parfaite soit un témoignage puissant de votre pouvoir pour d'autres qui souffrent et ont besoin d'espoir.

Donnez-moi la sagesse pour bien prendre soin de mon corps, qui est un temple sacré de votre présence divine.

Protégez-moi de toutes les maladies futures et maintenez-moi toujours en parfaite santé physique, mentale et spirituelle.

🔱 GUÉRISON DIVINE 🔱 Ainsi soit-il pour toujours ! Amen.`
      },
      fame: {
        title: "Prière de Renommée Mondiale",
        category: "Succès Global et Reconnaissance",
        purpose: "Atteindre la renommée mondiale, reconnaissance globale et influence planétaire",
        benefits: ["Renommée internationale garantie", "Reconnaissance mondiale dans votre domaine", "Influence globale positive"],
        instructions: "Récitez avec 5 bougies dorées en formation d'étoile, visualisant votre succès mondial.",
        text: `Glorieux Saint Cyprien, qui êtes connu, vénéré et respecté dans le monde entier,

Accordez-moi une renommée mondiale et une reconnaissance globale extraordinaire dans mon domaine d'action et d'expertise.

Faites que mon nom soit connu, respecté et admiré sur tous les continents de la Terre.

Que mon talent unique et mon travail exceptionnel atteignent des millions de personnes dans le monde entier.

Ouvrez toutes les portes dorées vers le succès international et l'influence globale positive et durable.

Que je sois une inspiration puissante et positive pour des millions de personnes sur toute la planète Terre.

Saint Cyprien, faites que ma renommée mondiale soit utilisée pour répandre votre parole sacrée et votre pouvoir divin.

Qu'à travers mon succès extraordinaire, plus de personnes connaissent votre nom et se dévouent à vous avec une foi véritable.

Protégez ma réputation de toute calomnie, de toute jalousie et de toute énergie négative qui pourrait nuire à mon succès.

Faites que mon influence mondiale soit toujours utilisée pour le bien, pour inspirer et pour transformer les vies positivement.

🔱 RENOMMÉE MONDIALE 🔱 Ainsi soit-il pour toujours ! Amen.`
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
        instructions: "Rezitieren Sie mit einer brennenden weißen Kerze, morgens oder abends, mit totalem Glauben und Hingabe.",
        text: `Ruhmvoller Heiliger Cyprian, großer Magier und höchster Beschützer aller Bedürftigen,

Ich rufe Ihre unendliche und ahnenhafte Kraft an, damit Sie mich vor allem Bösen schützen, sichtbar und unsichtbar, bekannt und unbekannt, gegenwärtig und zukünftig.

Mit Ihrer unvergleichlichen göttlichen Stärke entfernen Sie von mir alle negative Energie, alle grausame Eifersucht, alle böswilligen Blicke, alle Bosheit, die gegen mich und meine Familie gerichtet ist.

Schaffen Sie um mich und alle meine Lieben einen undurchdringlichen Schild aus göttlichem goldenem Licht, den niemals ein Böses durchdringen kann.

Heiliger Cyprian, geben Sie mir übernatürliche Kraft, unerschütterlichen Mut und höchste Weisheit, um alle Herausforderungen des Lebens mit Würde und Sieg zu bewältigen.

Möge Ihr mächtiger Schutz mich immer begleiten, in jedem Moment meines Lebens, an allen Orten, wo ich hingehe, auf allen Wegen, die ich befolge.

Machen Sie mich zu einem Kanal Ihrer Macht in dieser Welt, damit ich anderen bedürftigen Seelen helfen und Ihre Herrlichkeit verbreiten kann.

Möge mein Leben ein lebendiges Zeugnis Ihrer unendlichen schützenden Macht sein.

So sei es, so geschehe es, mit der unendlichen und ewigen Macht des Heiligen Cyprian. Amen.

🔱 UNENDLICHE MACHT 🔱`
      },
      prosperity: {
        title: "Gebet der Unendlichen Prosperität",
        category: "Reichtum und Extreme Fülle",
        purpose: "Anziehung extremen Reichtums, grenzenloser Fülle und goldener Gelegenheiten",
        benefits: ["Exponentiell vermehrter Reichtum", "Goldene Gelegenheiten entstehen konstant", "Fülle in allen Lebensbereichen"],
        instructions: "Rezitieren Sie täglich morgens mit einer goldenen Kerze, während Sie Ihre Prosperität visualisieren.",
        text: `Mächtiger Heiliger Cyprian, höchster Herr der ahnenschaftlichen Magie und radikalen Transformation,

Ich komme demütig in Ihre heilige Gegenwart, um Ihren Segen der unendlichen Prosperität und extremen Fülle in allen Aspekten meines Lebens zu erbitten.

Öffnen Sie alle geschlossenen Wege zum Reichtum in meinem Leben, entfernen Sie alle finanziellen Hindernisse, die mich daran hindern, so zu prosperieren, wie ich es verdiene.

Möge Geld in unerwarteten und reichlichen Weisen zu mir kommen, durch Ihre mächtige und wundersame Fürsprache, sich konstant multiplizierend.

Multiplizieren Sie meine finanziellen Ressourcen exponentiell, ziehen Sie goldene Gelegenheiten in mein Leben, machen Sie mich über jede menschliche Vorstellungskraft hinaus wohlhabend.

Möge ich in allen Aspekten wohlhabend sein: finanziell, beruflich, persönlich und spirituell, lebend in totaler Fülle.

Heiliger Cyprian, großer Magier der kosmischen Fülle, gewähren Sie mir endlosen Reichtum und ewige Prosperität, die niemals versiegt oder abnimmt.

Machen Sie meine Prosperität zu einem herrlichen Zeugnis Ihrer Macht, damit andere sehen und Ihren heiligen Namen verherrlichen.

Möge ich meinen Reichtum verwenden, um Ihren Namen zu ehren und den Bedürftigen zu helfen, Ihre Herrlichkeit in der Welt verbreitend.

Mit absolutem Glauben an Ihre unendliche Macht danke ich Ihnen im Voraus für alle Segnungen.

🔱 UNENDLICHER REICHTUM 🔱 So sei es für immer! Amen.`
      },
      power: {
        title: "Gebet der Höchsten Macht",
        category: "Persönliche Macht und Autorität",
        purpose: "Entwicklung persönlicher Macht, absoluter Autorität und weltweiten Einflusses",
        benefits: ["Höchste Autorität über alle Situationen", "Weltweiter Einfluss und Anerkennung", "Sofortige Manifestationsmacht"],
        instructions: "Rezitieren Sie an einem privaten Ort mit 7 goldenen Kerzen, konzentriert auf Ihre innere Macht.",
        text: `Höchster Heiliger Cyprian, absoluter Meister aller Geheimnisse des Universums,

Gewähren Sie mir einen großzügigen Anteil Ihrer unendlichen und ahnenschaftlichen Macht, damit ich meine Realität vollständig und definitiv transformieren kann.

Geben Sie mir höchste Autorität über alle Umstände meines Lebens, damit ich der absolute Herr meines Schicksals bin.

Möge mein Wort göttliches Gewicht haben, meine Gegenwart tiefen Respekt inspirieren, mein Wille sich sofort in der Realität manifestieren.

Stärken Sie meinen Geist mit höchster Weisheit, meine Seele mit unerschütterlicher Kraft und meine Entschlossenheit mit absoluter und unbestreitbarer Macht.

Möge ich positiven und mächtigen Einfluss auf alle Menschen haben, die ich auf meinem Weg treffe, von allen respektiert und bewundert.

Heiliger Cyprian, großer Magier der kosmischen Macht, machen Sie mich zu einem Kanal Ihrer höchsten Macht in dieser irdischen Welt.

Möge ich wohlhabend, respektiert, bewundert und erfolgreich in absolut allem sein, was ich in meinem Leben unternehme.

Möge mein Erfolg so außergewöhnlich und inspirierend sein, dass er andere motiviert, auch Ihre Macht zu suchen.

Möge ich diese Macht niemals missbrauchen, sie immer für das Gute, für Gerechtigkeit und zur Verbreitung Ihrer Herrlichkeit verwendend.

Mit Ihrer göttlichen Kraft, die durch meine Adern fließt, ist mir nichts unmöglich, alle meine Träume werden physische Realität.

🔱 HÖCHSTE MACHT 🔱 So sei es für immer und ewig! Amen.`
      },
      love: {
        title: "Gebet der Wahren Liebe",
        category: "Liebe und Perfekte Beziehungen",
        purpose: "Anziehung wahrer Liebe, perfekter Beziehungen und ewiger Vereinigung",
        benefits: ["Wahre und dauerhafte Liebe", "Traumbeziehung verwirklicht", "Heilige und ewige Vereinigung"],
        instructions: "Rezitieren Sie mit zwei brennenden roten Kerzen, denkend an die geliebte Person oder die Liebe, die Sie begehren.",
        text: `Geliebter Heiliger Cyprian, der Sie wahre und ewige Liebe mit Heiliger Justina kannten,

Treten Sie für mich ein, damit ich die wahre und perfekte Liebe meines Lebens finde, diejenige, die mein Herz für immer verwandeln wird.

Ziehen Sie die ideale Person zu mir, diejenige, die vom Himmel bestimmt war, meine ewige Gefährtin zu sein, meine wahre Seelenverwandte.

Möge unsere Liebe rein sein wie Ihre, wahr wie die von Heiliger Justina, dauerhaft wie die ewige Liebe und gesegnet von Ihrem göttlichen Schutz.

Entfernen Sie alle Hindernisse, die wahre Liebe daran hindern, mich zu erreichen, brechen Sie alle Barrieren des Herzens.

Machen Sie, dass ich tief geliebt, vollständig respektiert und ewig geschätzt werde von meinem idealen Partner.

Heiliger Cyprian, segnen Sie meine Beziehung mit perfekter Harmonie, gegenseitigem Verständnis, brennender Leidenschaft und ewigem Glück.

Möge unsere Liebe eine heilige Widerspiegelung Ihrer ewigen Liebe mit Heiliger Justina sein, andere zur wahren Liebe inspirierend.

Schützen Sie unsere Beziehung vor aller Eifersucht, vor aller negativen Einmischung und vor aller Energie, die uns trennen könnte.

Machen Sie, dass unsere Liebe jeden Tag wächst, sich jeden Moment stärkt und ein Beispiel wahrer Liebe für die Welt wird.

🔱 EWIGE LIEBE 🔱 So sei es für immer! Amen.`
      },
      healing: {
        title: "Gebet der Wundersamen Heilung",
        category: "Perfekte Gesundheit und Göttliche Heilung",
        purpose: "Vollständige Heilung aller Krankheiten, perfekte Gesundheit und extreme Vitalität",
        benefits: ["Totale und definitive Heilung", "Strahlende und perfekte Gesundheit", "Extreme und dauerhafte Vitalität"],
        instructions: "Rezitieren Sie mit einer weißen Kerze, berührend den Körperteil, der Heilung braucht.",
        text: `Barmherziger Heiliger Cyprian, großer Heiler von Körpern, Geistern und Seelen,

Ich rufe Ihre höchste Heilungsmacht an, damit Sie mir perfekte und vollständige Gesundheit in allen Aspekten meines Wesens gewähren.

Heilen Sie alle Krankheiten meines physischen Körpers, Geistes und Seele mit Ihrer göttlichen und wundersamen Berührung.

Stellen Sie vollständig meine Vitalität, meine Lebensenergie und meine Kraft wieder her, um vollständig und mit Freude zu leben.

Möge jede Zelle meines Körpers durch Ihre göttliche Macht erneuert und regeneriert werden, funktionierend in perfekter Harmonie.

Entfernen Sie von mir alle Krankheit, allen Schmerz, alles physische und emotionale Leiden, das mich in diesem Moment plagt.

Heiliger Cyprian, machen Sie mich zu einem lebenden Beispiel Ihrer wundersamen und sofortigen Heilungskapazität.

Möge meine perfekte Gesundheit ein mächtiges Zeugnis Ihrer Macht für andere sein, die leiden und Hoffnung brauchen.

Geben Sie mir Weisheit, gut für meinen Körper zu sorgen, der ein heiliger Tempel Ihrer göttlichen Gegenwart ist.

Schützen Sie mich vor allen zukünftigen Krankheiten und halten Sie mich immer in perfekter physischer, mentaler und spiritueller Gesundheit.

🔱 GÖTTLICHE HEILUNG 🔱 So sei es für immer! Amen.`
      },
      fame: {
        title: "Gebet des Weltruhms",
        category: "Globaler Erfolg und Anerkennung",
        purpose: "Weltruhm erreichen, globale Anerkennung und planetaren Einfluss",
        benefits: ["Garantierter internationaler Ruhm", "Weltweite Anerkennung in Ihrem Bereich", "Positiver globaler Einfluss"],
        instructions: "Rezitieren Sie mit 5 goldenen Kerzen in Sternformation, visualisierend Ihren weltweiten Erfolg.",
        text: `Ruhmvoller Heiliger Cyprian, der in der ganzen Welt bekannt, verehrt und respektiert ist,

Gewähren Sie mir Weltruhm und außergewöhnliche globale Anerkennung in meinem Tätigkeitsbereich und Expertise.

Machen Sie meinen Namen auf allen Kontinenten der Erde bekannt, respektiert und bewundert.

Möge mein einzigartiges Talent und meine außergewöhnliche Arbeit Millionen von Menschen auf der ganzen Welt erreichen.

Öffnen Sie alle goldenen Türen zu internationalem Erfolg und positivem und dauerhaftem globalem Einfluss.

Möge ich eine mächtige und positive Inspiration für Millionen von Menschen auf dem gesamten Planeten Erde sein.

Heiliger Cyprian, machen Sie, dass mein Weltruhm verwendet wird, um Ihr heiliges Wort und Ihre göttliche Macht zu verbreiten.

Durch meinen außergewöhnlichen Erfolg mögen mehr Menschen Ihren Namen kennen und sich Ihnen mit wahrem Glauben widmen.

Schützen Sie meinen Ruf vor aller Verleumdung, vor aller Eifersucht und vor aller negativen Energie, die meinem Erfolg schaden könnte.

Machen Sie, dass mein weltweiter Einfluss immer für das Gute verwendet wird, um zu inspirieren und Leben positiv zu verwandeln.

🔱 WELTRUHM 🔱 So sei es für immer! Amen.`
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
        instructions: "Recitate con una candela bianca accesa, mattina o sera, con totale fede e devozione.",
        text: `Glorioso San Cipriano, grande mago e protettore supremo di tutti i bisognosi,

Invoco il vostro potere infinito e ancestrale perché mi proteggiate da tutti i mali, visibili e invisibili, conosciuti e sconosciuti, presenti e futuri.

Con la vostra forza divina incomparabile, allontanate da me tutta l'energia negativa, tutta l'invidia crudele, ogni sguardo malevolo, ogni cattiveria diretta contro me e la mia famiglia.

Create intorno a me e a tutti i miei cari uno scudo impenetrabile di luce dorata divina, che nessun male possa mai attraversare.

San Cipriano, datemi forza soprannaturale, coraggio incrollabile e saggezza suprema per affrontare tutte le sfide della vita con dignità e vittoria.

Che la vostra protezione potente mi accompagni sempre, in ogni momento della mia vita, in tutti i luoghi dove vado, su tutti i sentieri che seguo.

Fate di me un canale del vostro potere in questo mondo, perché io possa aiutare altre anime bisognose e diffondere la vostra gloria.

Che la mia vita sia una testimonianza vivente del vostro potere protettivo infinito.

Così sia, così si faccia, con il potere infinito ed eterno di San Cipriano. Amen.

🔱 POTERE INFINITO 🔱`
      },
      prosperity: {
        title: "Preghiera di Prosperità Infinita",
        category: "Ricchezza e Abbondanza Estrema",
        purpose: "Attrazione di ricchezza estrema, abbondanza senza limiti e opportunità d'oro",
        benefits: ["Ricchezza moltiplicata esponenzialmente", "Opportunità d'oro sorgono costantemente", "Abbondanza in tutte le aree della vita"],
        instructions: "Recitate quotidianamente al mattino con una candela dorata, visualizzando la vostra prosperità.",
        text: `Potente San Cipriano, signore supremo della magia ancestrale e della trasformazione radicale,

Vengo umilmente nella vostra presenza sacra per chiedere la vostra benedizione di prosperità infinita e abbondanza estrema in tutti gli aspetti della mia vita.

Aprite tutti i sentieri chiusi verso la ricchezza nella mia vita, rimuovete tutti gli ostacoli finanziari che mi impediscono di prosperare come merito.

Che il denaro arrivi a me in modi inaspettati e abbondanti, attraverso la vostra intercessione potente e miracolosa, moltiplicandosi costantemente.

Moltiplicate le mie risorse finanziarie in modo esponenziale, attirate opportunità d'oro nella mia vita, rendetemi prospero oltre ogni immaginazione umana.

Che io sia prospero in tutti gli aspetti: finanziario, professionale, personale e spirituale, vivendo nell'abbondanza totale.

San Cipriano, grande mago dell'abbondanza cosmica, concedetemi ricchezza senza fine e prosperità eterna che non si esaurisca mai né diminuisca.

Fate che la mia prosperità sia una testimonianza gloriosa del vostro potere, perché altri vedano e glorifichino il vostro nome sacro.

Che io usi la mia ricchezza per onorare il vostro nome e aiutare i bisognosi, diffondendo la vostra gloria nel mondo.

Con fede assoluta nel vostro potere infinito, vi ringrazio anticipatamente per tutte le benedizioni.

🔱 RICCHEZZA INFINITA 🔱 Così sia per sempre! Amen.`
      },
      power: {
        title: "Preghiera del Potere Supremo",
        category: "Potere Personale e Autorità",
        purpose: "Sviluppo di potere personale, autorità assoluta e influenza mondiale",
        benefits: ["Autorità suprema su tutte le situazioni", "Influenza mondiale e riconoscimento", "Potere di manifestazione istantanea"],
        instructions: "Recitate in luogo riservato, con 7 candele dorate, concentrandovi sul vostro potere interiore.",
        text: `Supremo San Cipriano, maestro assoluto di tutti i misteri dell'universo,

Concedetemi una porzione generosa del vostro potere infinito e ancestrale perché io possa trasformare la mia realtà completamente e definitivamente.

Datemi autorità suprema su tutte le circostanze della mia vita, perché io sia il signore assoluto del mio destino.

Che la mia parola abbia peso divino, la mia presenza ispiri rispetto profondo, la mia volontà si manifesti istantaneamente nella realtà.

Fortificate la mia mente con saggezza suprema, il mio spirito con forza incrollabile e la mia determinazione con potere assoluto e incontestabile.

Che io abbia influenza positiva e potente su tutte le persone che incontro nel mio cammino, essendo rispettato e ammirato da tutti.

San Cipriano, grande mago del potere cosmico, fate di me un canale del vostro potere supremo in questo mondo terreno.

Che io sia prospero, rispettato, ammirato e di successo in assolutamente tutto ciò che intraprendo nella mia vita.

Che il mio successo sia così straordinario e ispirante da motivare altri a cercare il vostro potere anche.

Che io non abusi mai di questo potere, usandolo sempre per il bene, per la giustizia e per diffondere la vostra gloria.

Con la vostra forza divina che scorre nelle mie vene, nulla mi è impossibile, tutti i miei sogni diventano realtà fisica.

🔱 POTERE SUPREMO 🔱 Così sia per sempre ed eternamente! Amen.`
      },
      love: {
        title: "Preghiera dell'Amore Vero",
        category: "Amore e Relazioni Perfette",
        purpose: "Attrazione dell'amore vero, relazioni perfette e unione eterna",
        benefits: ["Amore vero e duraturo", "Relazione dei sogni realizzata", "Unione sacra ed eterna"],
        instructions: "Recitate con due candele rosse accese, pensando alla persona amata o all'amore che desiderate.",
        text: `Amato San Cipriano, che conosceste l'amore vero ed eterno con Santa Giustina,

Intercedete per me perché io trovi l'amore vero e perfetto della mia vita, quello che trasformerà il mio cuore per sempre.

Attirate verso di me la persona ideale, quella che fu destinata dai cieli ad essere la mia compagna eterna, la mia vera anima gemella.

Che il nostro amore sia puro come il vostro, vero come quello di Santa Giustina, duraturo come l'amore eterno e benedetto dalla vostra protezione divina.

Rimuovete tutti gli ostacoli che impediscono all'amore vero di raggiungermi, spezzate tutte le barriere del cuore.

Fate che io sia amato profondamente, rispettato completamente e valorizzato eternamente dal mio partner ideale.

San Cipriano, benedite la mia relazione con armonia perfetta, comprensione reciproca, passione ardente e felicità eterna.

Che il nostro amore sia un riflesso sacro del vostro amore eterno con Santa Giustina, ispirando altri all'amore vero.

Proteggete la nostra relazione da ogni invidia, da ogni interferenza negativa e da ogni energia che possa separarci.

Fate che il nostro amore cresca ogni giorno, si rafforzi ogni momento e diventi un esempio di amore vero per il mondo.

🔱 AMORE ETERNO 🔱 Così sia per sempre! Amen.`
      },
      healing: {
        title: "Preghiera di Guarigione Miracolosa",
        category: "Salute Perfetta e Guarigione Divina",
        purpose: "Guarigione completa di tutte le malattie, salute perfetta e vitalità estrema",
        benefits: ["Guarigione totale e definitiva", "Salute radiante e perfetta", "Vitalità estrema e duratura"],
        instructions: "Recitate con una candela bianca, toccando la parte del corpo che necessita guarigione.",
        text: `Misericordioso San Cipriano, grande guaritore di corpi, menti e anime,

Invoco il vostro potere supremo di guarigione perché mi concediate salute perfetta e completa in tutti gli aspetti del mio essere.

Guarite tutte le malattie del mio corpo fisico, mente e spirito con il vostro tocco divino e miracoloso.

Ripristinate completamente la mia vitalità, la mia energia vitale e la mia forza per vivere pienamente e con gioia.

Che ogni cellula del mio corpo sia rinnovata e rigenerata dal vostro potere divino, funzionando in perfetta armonia.

Allontanate da me ogni malattia, ogni dolore, ogni sofferenza fisica ed emotiva che mi affligge in questo momento.

San Cipriano, fate di me un esempio vivente della vostra capacità di guarigione miracolosa e istantanea.

Che la mia salute perfetta sia una testimonianza potente del vostro potere per altri che soffrono e hanno bisogno di speranza.

Datemi saggezza per prendermi cura bene del mio corpo, che è tempio sacro della vostra presenza divina.

Proteggetemi da tutte le malattie future e mantenetemi sempre in perfetta salute fisica, mentale e spirituale.

🔱 GUARIGIONE DIVINA 🔱 Così sia per sempre! Amen.`
      },
      fame: {
        title: "Preghiera della Fama Mondiale",
        category: "Successo Globale e Riconoscimento",
        purpose: "Raggiungere fama mondiale, riconoscimento globale e influenza planetaria",
        benefits: ["Fama internazionale garantita", "Riconoscimento mondiale nella vostra area", "Influenza globale positiva"],
        instructions: "Recitate con 5 candele dorate in formazione stellare, visualizzando il vostro successo mondiale.",
        text: `Glorioso San Cipriano, che siete conosciuto, venerato e rispettato in tutto il mondo,

Concedetemi fama mondiale e riconoscimento globale straordinario nella mia area di attività ed expertise.

Fate che il mio nome sia conosciuto, rispettato e ammirato in tutti i continenti della Terra.

Che il mio talento unico e il mio lavoro eccezionale raggiungano milioni di persone in tutto il mondo intero.

Aprite tutte le porte dorate al successo internazionale e all'influenza globale positiva e duratura.

Che io sia un'ispirazione potente e positiva per milioni di persone su tutto il pianeta Terra.

San Cipriano, fate che la mia fama mondiale sia usata per diffondere la vostra parola sacra e il vostro potere divino.

Che attraverso il mio successo straordinario, più persone conoscano il vostro nome e si dedichino a voi con fede vera.

Proteggete la mia reputazione da ogni calunnia, da ogni invidia e da ogni energia negativa che possa danneggiare il mio successo.

Fate che la mia influenza mondiale sia sempre usata per il bene, per ispirare e per trasformare vite positivamente.

🔱 FAMA MONDIALE 🔱 Così sia per sempre! Amen.`
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
        instructions: "Читайте с зажженной белой свечой, утром или вечером, с полной верой и преданностью.",
        text: `Славный Святой Киприан, великий маг и высший защитник всех нуждающихся,

Я призываю вашу бесконечную и древнюю силу, чтобы вы защитили меня от всех зол, видимых и невидимых, известных и неизвестных, настоящих и будущих.

Своей несравненной божественной силой удалите от меня всю негативную энергию, всю жестокую зависть, все злонамеренные взгляды, все зло, направленное против меня и моей семьи.

Создайте вокруг меня и всех моих близких непроницаемый щит из божественного золотого света, который никакое зло не сможет никогда пересечь.

Святой Киприан, дайте мне сверхъестественную силу, непоколебимое мужество и высшую мудрость для встречи всех жизненных вызовов с достоинством и победой.

Пусть ваша могучая защита сопровождает меня всегда, в каждый момент моей жизни, во всех местах, куда я иду, на всех путях, которыми я следую.

Сделайте меня каналом вашей силы в этом мире, чтобы я мог помочь другим нуждающимся душам и распространять вашу славу.

Пусть моя жизнь будет живым свидетельством вашей бесконечной защитной силы.

Да будет так, да свершится это, с бесконечной и вечной силой Святого Киприана. Аминь.

🔱 БЕСКОНЕЧНАЯ СИЛА 🔱`
      },
      prosperity: {
        title: "Молитва Бесконечного Процветания",
        category: "Богатство и Крайнее Изобилие",
        purpose: "Привлечение крайнего богатства, безграничного изобилия и золотых возможностей",
        benefits: ["Экспоненциально умноженное богатство", "Золотые возможности возникают постоянно", "Изобилие во всех сферах жизни"],
        instructions: "Читайте ежедневно утром с золотой свечой, визуализируя ваше процветание.",
        text: `Могучий Святой Киприан, высший господин древней магии и радикального преобразования,

Я смиренно прихожу в ваше священное присутствие, чтобы просить ваше благословение бесконечного процветания и крайнего изобилия во всех аспектах моей жизни.

Откройте все закрытые пути к богатству в моей жизни, уберите все финансовые препятствия, которые мешают мне процветать, как я заслуживаю.

Пусть деньги приходят ко мне неожиданными и изобильными способами, через ваше могучее и чудесное заступничество, постоянно умножаясь.

Умножьте мои финансовые ресурсы экспоненциально, привлеките золотые возможности в мою жизнь, сделайте меня процветающим за пределами любого человеческого воображения.

Пусть я буду процветать во всех аспектах: финансовом, профессиональном, личном и духовном, живя в полном изобилии.

Святой Киприан, великий маг космического изобилия, дайте мне бесконечное богатство и вечное процветание, которое никогда не иссякнет и не уменьшится.

Пусть мое процветание станет славным свидетельством вашей силы, чтобы другие увидели и прославили ваше священное имя.

Пусть я использую мое богатство для чести вашего имени и помощи нуждающимся, распространяя вашу славу по всему миру.

С абсолютной верой в вашу бесконечную силу, я заранее благодарю за все благословения.

🔱 БЕСКОНЕЧНОЕ БОГАТСТВО 🔱 Да будет так навсегда! Аминь.`
      },
      power: {
        title: "Молитва Высшей Силы",
        category: "Личная Сила и Власть",
        purpose: "Развитие личной силы, абсолютной власти и мирового влияния",
        benefits: ["Высшая власть над всеми ситуациями", "Мировое влияние и признание", "Сила мгновенного проявления"],
        instructions: "Читайте в уединенном месте с 7 золотыми свечами, сосредоточившись на вашей внутренней силе.",
        text: `Высший Святой Киприан, абсолютный мастер всех тайн вселенной,

Дайте мне щедрую долю вашей бесконечной и древней силы, чтобы я мог полностью и окончательно преобразовать свою реальность.

Дайте мне высшую власть над всеми обстоятельствами моей жизни, чтобы я был абсолютным господином своей судьбы.

Пусть мое слово имеет божественный вес, мое присутствие вдохновляет глубокое уважение, моя воля мгновенно проявляется в реальности.

Укрепите мой разум высшей мудростью, мой дух непоколебимой силой и мою решимость абсолютной и неоспоримой властью.

Пусть у меня будет положительное и мощное влияние на всех людей, которых я встречаю на своем пути, будучи уважаемым и восхищаемым всеми.

Святой Киприан, великий маг космической силы, сделайте меня каналом вашей высшей силы в этом земном мире.

Пусть я буду процветающим, уважаемым, восхищенным и успешным в абсолютно всем, что предпринимаю в своей жизни.

Пусть мой успех будет настолько необыкновенным и вдохновляющим, что мотивирует других искать вашу силу тоже.

Пусть я никогда не злоупотребляю этой силой, всегда используя ее для добра, для справедливости и для распространения вашей славы.

С вашей божественной силой, текущей в моих венах, ничто не невозможно для меня, все мои мечты становятся физической реальностью.

🔱 ВЫСШАЯ СИЛА 🔱 Да будет так навсегда и вечно! Аминь.`
      },
      love: {
        title: "Молитва Истинной Любви",
        category: "Любовь и Совершенные Отношения",
        purpose: "Привлечение истинной любви, совершенных отношений и вечного союза",
        benefits: ["Истинная и длительная любовь", "Отношения мечты осуществлены", "Священный и вечный союз"],
        instructions: "Читайте с двумя зажженными красными свечами, думая о любимом человеке или любви, которую желаете.",
        text: `Возлюбленный Святой Киприан, который познал истинную и вечную любовь со Святой Иустиной,

Заступитесь за меня, чтобы я нашел истинную и совершенную любовь моей жизни, ту, которая преобразит мое сердце навсегда.

Привлеките ко мне идеального человека, того, кто был предназначен небесами быть моим вечным спутником, моей истинной родственной душой.

Пусть наша любовь будет чистой, как ваша, истинной, как у Святой Иустины, длительной, как вечная любовь, и благословенной вашей божественной защитой.

Уберите все препятствия, которые мешают истинной любви достичь меня, сломайте все барьеры сердца.

Пусть меня глубоко любят, полностью уважают и вечно ценят мой идеальный партнер.

Святой Киприан, благословите мои отношения совершенной гармонией, взаимным пониманием, пылающей страстью и вечным счастьем.

Пусть наша любовь будет священным отражением вашей вечной любви со Святой Иустиной, вдохновляя других на истинную любовь.

Защитите наши отношения от всей зависти, от всех негативных вмешательств и от всей энергии, которая могла бы разлучить нас.

Пусть наша любовь растет каждый день, укрепляется каждый момент и становится примером истинной любви для мира.

🔱 ВЕЧНАЯ ЛЮБОВЬ 🔱 Да будет так навсегда! Аминь.`
      },
      healing: {
        title: "Молитва Чудесного Исцеления",
        category: "Совершенное Здоровье и Божественное Исцеление",
        purpose: "Полное исцеление от всех болезней, совершенное здоровье и крайняя жизненность",
        benefits: ["Полное и окончательное исцеление", "Сияющее и совершенное здоровье", "Крайняя и длительная жизненность"],
        instructions: "Читайте с белой свечой, касаясь части тела, нуждающейся в исцелении.",
        text: `Милосердный Святой Киприан, великий целитель тел, разумов и душ,

Я призываю вашу высшую исцеляющую силу, чтобы вы даровали мне совершенное и полное здоровье во всех аспектах моего существа.

Исцелите все болезни моего физического тела, разума и духа вашим божественным и чудесным прикосновением.

Полностью восстановите мою жизненность, мою жизненную энергию и мою силу для полной и радостной жизни.

Пусть каждая клетка моего тела обновится и регенерируется вашей божественной силой, функционируя в совершенной гармонии.

Удалите от меня всю болезнь, всю боль, все физические и эмоциональные страдания, которые мучают меня в этот момент.

Святой Киприан, сделайте меня живым примером вашей чудесной и мгновенной способности исцеления.

Пусть мое совершенное здоровье будет мощным свидетельством вашей силы для других, кто страдает и нуждается в надежде.

Дайте мне мудрость хорошо заботиться о моем теле, которое является священным храмом вашего божественного присутствия.

Защитите меня от всех будущих болезней и поддерживайте меня всегда в совершенном физическом, ментальном и духовном здоровье.

🔱 БОЖЕСТВЕННОЕ ИСЦЕЛЕНИЕ 🔱 Да будет так навсегда! Аминь.`
      },
      fame: {
        title: "Молитва Мировой Славы",
        category: "Глобальный Успех и Признание",
        purpose: "Достижение мировой славы, глобального признания и планетарного влияния",
        benefits: ["Гарантированная международная слава", "Мировое признание в вашей области", "Позитивное глобальное влияние"],
        instructions: "Читайте с 5 золотыми свечами в звездной формации, визуализируя ваш мировой успех.",
        text: `Славный Святой Киприан, который известен, почитаем и уважаем по всему миру,

Дайте мне мировую славу и необыкновенное глобальное признание в моей области деятельности и экспертизе.

Пусть мое имя станет известным, уважаемым и восхищаемым на всех континентах Земли.

Пусть мой уникальный талант и исключительная работа достигнут миллионов людей по всему миру.

Откройте все золотые двери к международному успеху и позитивному и длительному глобальному влиянию.

Пусть я буду мощным и позитивным вдохновением для миллионов людей на всей планете Земля.

Святой Киприан, пусть моя мировая слава используется для распространения вашего священного слова и вашей божественной силы.

Через мой необыкновенный успех пусть больше людей узнают ваше имя и посвятят себя вам с истинной верой.

Защитите мою репутацию от всей клеветы, от всей зависти и от всей негативной энергии, которая может повредить моему успеху.

Пусть мое мировое влияние всегда используется для добра, для вдохновения и для позитивного преобразования жизней.

🔱 МИРОВАЯ СЛАВА 🔱 Да будет так навсегда! Аминь.`
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
        instructions: "用点燃的白蜡烛诵读，早晨或晚上，以完全的信仰和奉献。",
        text: `光荣的圣西普里安，伟大的法师和所有需要帮助者的至高保护者，

我召唤您无限和古老的力量，让您保护我免受所有邪恶，可见和不可见，已知和未知，现在和未来。

以您无与伦比的神圣力量，驱除我身上的所有负能量，所有残酷的嫉妒，所有恶意的目光，所有针对我和我家人的邪恶。

在我和我所有亲人周围创造一个不可穿透的神圣金光盾牌，任何邪恶永远无法穿透。

圣西普里安，给我超自然的力量，不可动摇的勇气和至高的智慧，以尊严和胜利面对生活的所有挑战。

愿您强大的保护永远伴随我，在我生命的每一刻，在我去的每一个地方，在我走的每一条路上。

让我成为您在这个世界上力量的通道，这样我就能帮助其他需要帮助的灵魂并传播您的荣耀。

愿我的生命成为您无限保护力量的活见证。

愿如此，愿如此成就，以圣西普里安无限和永恒的力量。阿门。

🔱 无限力量 🔱`
      },
      prosperity: {
        title: "无限繁荣祈祷",
        category: "财富和极度丰盛",
        purpose: "吸引极度财富、无限丰盛和黄金机会",
        benefits: ["指数级增长的财富", "黄金机会不断出现", "生活各个领域的丰盛"],
        instructions: "每天早晨用金蜡烛诵读，想象您的繁荣。",
        text: `强大的圣西普里安，古老魔法和根本转变的至高领主，

我谦卑地来到您的神圣面前，请求您在我生活的各个方面给予无限繁荣和极度丰盛的祝福。

打开我生活中通往财富的所有封闭道路，清除所有阻止我应得繁荣的财务障碍。

愿金钱以意想不到和丰富的方式来到我身边，通过您强大和奇迹般的代祷，不断倍增。

以指数方式增加我的财务资源，为我的生活吸引黄金机会，让我繁荣超越任何人类的想象。

愿我在所有方面都繁荣：财务、职业、个人和精神，生活在完全的丰盛中。

圣西普里安，宇宙丰盛的伟大法师，给我无尽的财富和永恒的繁荣，永不枯竭或减少。

让我的繁荣成为您力量的光荣见证，让其他人看到并荣耀您的神圣之名。

愿我用我的财富来荣耀您的名字并帮助有需要的人，在世界上传播您的荣耀。

以对您无限力量的绝对信仰，我预先感谢您的所有祝福。

🔱 无限财富 🔱 愿永远如此！阿门。`
      },
      power: {
        title: "至高力量祈祷",
        category: "个人力量和权威",
        purpose: "发展个人力量、绝对权威和世界影响力",
        benefits: ["对所有情况的至高权威", "世界影响力和认可", "即时显现力量"],
        instructions: "在私人场所用7支金蜡烛诵读，专注于您的内在力量。",
        text: `至高的圣西普里安，宇宙所有奥秘的绝对主宰，

给我您无限和古老力量的慷慨份额，让我能够完全和彻底地改变我的现实。

给我对生活中所有情况的至高权威，让我成为自己命运的绝对主人。

愿我的话语具有神圣的分量，我的存在激发深深的敬意，我的意愿在现实中瞬间显现。

以至高的智慧强化我的心灵，以不可动摇的力量强化我的精神，以绝对和无可争议的力量强化我的决心。

愿我对我在道路上遇到的所有人产生积极和强大的影响，被所有人尊敬和钦佩。

圣西普里安，宇宙力量的伟大法师，让我成为您在这个地球世界的至高力量的通道。

愿我在我生活中承担的绝对一切事情上都繁荣、受尊敬、被钦佩和成功。

愿我的成功如此非凡和鼓舞人心，激励其他人也寻求您的力量。

愿我永远不滥用这种力量，总是将其用于善良、正义和传播您的荣耀。

随着您的神圣力量在我血管中流淌，对我来说没有什么是不可能的，我所有的梦想都变成物理现实。

🔱 至高力量 🔱 愿永远永恒如此！阿门。`
      },
      love: {
        title: "真爱祈祷",
        category: "爱情和完美关系",
        purpose: "吸引真爱、完美关系和永恒结合",
        benefits: ["真实持久的爱", "梦想关系实现", "神圣永恒的结合"],
        instructions: "用两支点燃的红蜡烛诵读，想着心爱的人或您渴望的爱。",
        text: `亲爱的圣西普里安，您与圣尤斯蒂娜经历了真实和永恒的爱，

为我代祷，让我找到我生命中真实和完美的爱，那个将永远改变我心灵的人。

吸引理想的人到我身边，那个被天堂注定成为我永恒伴侣的人，我真正的灵魂伴侣。

愿我们的爱像您的一样纯洁，像圣尤斯蒂娜的一样真实，像永恒之爱一样持久，并被您的神圣保护祝福。

清除所有阻止真爱到达我身边的障碍，打破心灵的所有壁垒。

让我被我理想的伴侣深深爱着，完全尊重，永远珍视。

圣西普里安，以完美的和谐、相互理解、燃烧的激情和永恒的幸福祝福我的关系。

愿我们的爱成为您与圣尤斯蒂娜永恒之爱的神圣反映，激励他人获得真爱。

保护我们的关系免受所有嫉妒，所有负面干扰和所有可能分离我们的能量。

让我们的爱每天成长，每一刻都加强，成为世界真爱的典范。

🔱 永恒之爱 🔱 愿永远如此！阿门。`
      },
      healing: {
        title: "奇迹治愈祈祷",
        category: "完美健康和神圣治愈",
        purpose: "所有疾病的完全治愈、完美健康和极度活力",
        benefits: ["完全和决定性的治愈", "光辉完美的健康", "极度持久的活力"],
        instructions: "用白蜡烛诵读，触摸需要治愈的身体部位。",
        text: `慈悲的圣西普里安，身体、心灵和灵魂的伟大治愈者，

我召唤您至高的治愈力量，让您在我存在的所有方面给我完美和完整的健康。

用您神圣和奇迹般的触摸治愈我身体、心灵和精神的所有疾病。

完全恢复我的活力，我的生命能量和我的力量，让我充分和快乐地生活。

愿我身体的每个细胞都被您的神圣力量更新和再生，在完美和谐中运作。

从我身上驱除所有疾病，所有痛苦，所有此刻折磨我的身体和情感痛苦。

圣西普里安，让我成为您奇迹和瞬间治愈能力的活例子。

愿我的完美健康成为您力量的强大见证，为其他遭受痛苦和需要希望的人。

给我智慧好好照顾我的身体，它是您神圣存在的神圣殿堂。

保护我免受所有未来的疾病，并始终保持我完美的身体、心理和精神健康。

🔱 神圣治愈 🔱 愿永远如此！阿门。`
      },
      fame: {
        title: "世界名声祈祷",
        category: "全球成功和认可",
        purpose: "获得世界名声、全球认可和行星影响力",
        benefits: ["保证的国际名声", "您领域的世界认可", "积极的全球影响"],
        instructions: "用5支金蜡烛以星形排列诵读，想象您的世界成功。",
        text: `光荣的圣西普里安，在全世界被认识、敬仰和尊敬，

给我世界名声和在我的专业领域和专长方面的非凡全球认可。

让我的名字在地球的所有大洲都被认识、尊敬和钦佩。

愿我独特的才能和卓越的工作触及全世界数百万人。

为国际成功和积极持久的全球影响打开所有黄金之门。

愿我成为整个地球上数百万人的强大和积极的灵感。

圣西普里安，让我的世界名声被用来传播您的神圣话语和您的神圣力量。

通过我非凡的成功，愿更多的人认识您的名字，并以真正的信仰奉献给您。

保护我的声誉免受所有诽谤，所有嫉妒和所有可能损害我成功的负面能量。

让我的世界影响力总是用于善良，用于鼓舞并积极地改变生活。

🔱 世界名声 🔱 愿永远如此！阿门。`
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
        instructions: "白いろうそくを灯して、朝または夜に、完全な信仰と献身で唱えてください。",
        text: `栄光ある聖キプリアヌス、偉大な魔法師であり、必要とするすべての者の至高の守護者よ、

私はあなたの無限で古代の力を呼び起こし、あなたがすべての悪から私を守ってくださるよう祈ります。見えるもの見えないもの、知られているもの知られていないもの、現在のそして未来のものから。

あなたの比類なき神聖な力で、私からすべての負のエネルギー、すべての残酷な妬み、すべての悪意ある視線、私と私の家族に向けられたすべての悪を取り除いてください。

私と私のすべての愛する者の周りに、神聖な金色の光の貫通できない盾を作り、いかなる悪も決して通り抜けることができないようにしてください。

聖キプリアヌスよ、私に超自然的な力、揺るぎない勇気、そして人生のすべての挑戦を尊厳と勝利をもって乗り越える至高の知恵を与えてください。

あなたの強力な保護が常に私と共にあり、私の人生のあらゆる瞬間に、私が行くすべての場所で、私が従うすべての道で。

私をこの世界であなたの力の通路とし、私が他の必要とする魂を助け、あなたの栄光を広めることができるようにしてください。

私の人生があなたの無限の保護の力の生きた証となりますように。

そうあれかし、そのようになされん、聖キプリアヌスの無限で永遠の力と共に。アーメン。

🔱 無限の力 🔱`
      },
      prosperity: {
        title: "無限繁栄の祈り",
        category: "富と極度の豊かさ",
        purpose: "極度の富、無制限の豊かさ、黄金の機会の引き寄せ",
        benefits: ["指数関数的に増加した富", "黄金の機会が絶えず現れる", "人生のすべての分野での豊かさ"],
        instructions: "毎日朝に金のろうそくで、あなたの繁栄を視覚化しながら唱えてください。",
        text: `力強い聖キプリアヌス、古代魔法と根本的変革の至高の主よ、

私はあなたの神聖な存在の前に謙遜に来て、私の人生のすべての側面で無限の繁栄と極度の豊かさの祝福を求めます。

私の人生で富への閉ざされたすべての道を開き、私が値するように繁栄することを妨げるすべての財政的障害を取り除いてください。

あなたの力強く奇跡的な仲裁を通じて、お金が予期しない豊かな方法で私のところに来て、絶えず倍増しますように。

私の財政的資源を指数関数的に増やし、私の人生に黄金の機会を引き寄せ、あらゆる人間の想像を超えて私を繁栄させてください。

私がすべての側面で繁栄しますように：財政的、職業的、個人的そして精神的に、完全な豊かさの中で生きて。

聖キプリアヌス、宇宙の豊かさの偉大な魔法師よ、私に終わりのない富と決して尽きることも減ることもない永遠の繁栄を与えてください。

私の繁栄があなたの力の栄光ある証となり、他の人々があなたの神聖な名を見て讃えるようにしてください。

私が私の富を使ってあなたの名を敬い、必要とする人々を助け、世界にあなたの栄光を広めるようにしてください。

あなたの無限の力への絶対的な信仰と共に、私はすべての祝福に対して前もって感謝いたします。

🔱 無限の富 🔱 永遠にそうあれかし！アーメン。`
      },
      power: {
        title: "至高の力の祈り",
        category: "個人的力と権威",
        purpose: "個人的力、絶対的権威、世界的影響力の発展",
        benefits: ["すべての状況に対する至高の権威", "世界的影響力と認識", "即座の現実化力"],
        instructions: "7本の金のろうそくで、あなたの内なる力に集中して、プライベートな場所で唱えてください。",
        text: `至高の聖キプリアヌス、宇宙のすべての神秘の絶対の主よ、

私があなたの無限で古代の力の寛大な部分を得て、私の現実を完全かつ最終的に変換できるよう与えてください。

私の人生のすべての状況に対する至高の権威を私に与え、私が自分の運命の絶対の主となれるようにしてください。

私の言葉が神聖な重みを持ち、私の存在が深い敬意を呼び起こし、私の意志が現実において瞬時に現れますように。

私の心を至高の知恵で、私の精神を揺るぎない力で、私の決意を絶対的で議論の余地のない力で強化してください。

私が道で出会うすべての人々に対して積極的で強力な影響を与え、すべての人に尊敬され称賛されますように。

聖キプリアヌス、宇宙の力の偉大な魔法師よ、私をこの地上世界であなたの至高の力の通路としてください。

私が私の人生で引き受けるすべてにおいて繁栄し、尊敬され、称賛され、成功しますように。

私の成功が非常に並外れて鼓舞的で、他の人々もあなたの力を求めるよう動機づけますように。

私がこの力を決して悪用せず、常に善のため、正義のため、そしてあなたの栄光を広めるために使いますように。

あなたの神聖な力が私の血管を流れることで、私にとって不可能なことは何もなく、私のすべての夢が物理的現実となります。

🔱 至高の力 🔱 永遠に永続的にそうあれかし！アーメン。`
      },
      love: {
        title: "真の愛の祈り",
        category: "愛と完璧な関係",
        purpose: "真の愛、完璧な関係、永遠の結合の引き寄せ",
        benefits: ["真実で永続的な愛", "夢の関係が実現", "神聖で永遠の結合"],
        instructions: "2本の赤いろうそくを灯して、愛する人やあなたが望む愛を思いながら唱えてください。",
        text: `愛しき聖キプリアヌス、聖ユスティナと真実で永遠の愛を知った方よ、

私のために仲裁し、私が私の人生の真実で完璧な愛、私の心を永遠に変える人を見つけることができるよう祈ります。

理想的な人を私に引き寄せてください。天によって私の永遠の伴侶、私の真の魂の伴侶となることを運命づけられた人を。

私たちの愛があなたのように純粋で、聖ユスティナのように真実で、永遠の愛のように永続し、あなたの神聖な保護によって祝福されますように。

真の愛が私に届くことを妨げるすべての障害を取り除き、心のすべての壁を打ち破ってください。

私が理想的なパートナーによって深く愛され、完全に尊敬され、永遠に大切にされますように。

聖キプリアヌスよ、私の関係を完璧な調和、相互理解、燃える情熱、そして永遠の幸福で祝福してください。

私たちの愛があなたと聖ユスティナの永遠の愛の神聖な反映となり、他の人々を真の愛へ導きますように。

私たちの関係をすべての嫉妬、すべての否定的な干渉、そして私たちを引き離すかもしれないすべてのエネルギーから守ってください。

私たちの愛が毎日成長し、毎瞬間強くなり、世界にとって真の愛の例となりますように。

🔱 永遠の愛 🔱 永遠にそうあれかし！アーメン。`
      },
      healing: {
        title: "奇跡的治癒の祈り",
        category: "完璧な健康と神聖な治癒",
        purpose: "すべての病気の完全な治癒、完璧な健康、極度の活力",
        benefits: ["完全で決定的な治癒", "輝く完璧な健康", "極度で持続的な活力"],
        instructions: "白いろうそくで、治癒が必要な体の部分に触れながら唱えてください。",
        text: `慈悲深い聖キプリアヌス、体、心、魂の偉大な治癒者よ、

私の存在のすべての側面で完璧で完全な健康を私に与えてくださるよう、あなたの至高の治癒力を呼び起こします。

私の物理的な体、心、精神のすべての病気をあなたの神聖で奇跡的な触れで治してください。

私の活力、生命エネルギー、そして完全に喜びをもって生きる力を完全に回復してください。

私の体のすべての細胞があなたの神聖な力によって更新され再生され、完璧な調和の中で機能しますように。

この瞬間私を苦しめるすべての病気、すべての痛み、すべての身体的・感情的苦痛を私から取り除いてください。

聖キプリアヌスよ、私をあなたの奇跡的で瞬時の治癒能力の生きた例としてください。

私の完璧な健康が、苦しみ希望を必要とする他の人々にとってのあなたの力の強力な証となりますように。

私の体を良く世話する知恵を私に与えてください。それはあなたの神聖な存在の神聖な神殿です。

すべての将来の病気から私を守り、常に完璧な身体的、精神的、霊的健康を保ってください。

🔱 神聖な治癒 🔱 永遠にそうあれかし！アーメン。`
      },
      fame: {
        title: "世界的名声の祈り",
        category: "グローバルな成功と認識",
        purpose: "世界的名声、グローバルな認識、惑星的影響力の達成",
        benefits: ["保証された国際的名声", "あなたの分野での世界的認識", "ポジティブなグローバル影響"],
        instructions: "5本の金のろうそくを星形に配置して、あなたの世界的成功を視覚化しながら唱えてください。",
        text: `栄光ある聖キプリアヌス、全世界で知られ、崇拝され、尊敬されている方よ、

私の活動分野と専門知識における世界的名声と並外れたグローバルな認識を私に与えてください。

私の名前が地球のすべての大陸で知られ、尊敬され、称賛されますように。

私のユニークな才能と卓越した仕事が全世界の数百万の人々に届きますように。

国際的成功と積極的で永続的なグローバル影響へのすべての黄金の扉を開いてください。

私が全地球上の数百万の人々にとって強力で積極的なインスピレーションとなりますように。

聖キプリアヌスよ、私の世界的名声があなたの神聖な言葉とあなたの神聖な力を広めるために使われますように。

私の並外れた成功を通じて、より多くの人々があなたの名を知り、真の信仰であなたに献身しますように。

私の評判をすべての中傷、すべての嫉妬、そして私の成功を害するかもしれないすべての否定的エネルギーから守ってください。

私の世界的影響が常に善のため、インスピレーションのため、そして人生を積極的に変革するために使われますように。

🔱 世界的名声 🔱 永遠にそうあれかし！アーメン。`
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
        instructions: "اتلوا مع شمعة بيضاء مضاءة، صباحاً أو مساءً، بإيمان كامل وتفان.",
        text: `المجيد القديس قبريانوس، الساحر العظيم والحامي الأعلى لجميع المحتاجين،

أدعو قوتكم اللانهائية والأجدادية لتحموني من جميع الشرور، المرئية وغير المرئية، المعروفة وغير المعروفة، الحاضرة والمستقبلة.

بقوتكم الإلهية التي لا تضاهى، ابعدوا عني كل الطاقة السلبية، كل الحسد القاسي، كل النظرة الخبيثة، كل الشر الموجه ضدي وضد عائلتي.

اخلقوا حولي وحول جميع أحبائي درعاً لا يخترق من النور الذهبي الإلهي، لا يمكن لأي شر أن يعبره أبداً.

القديس قبريانوس، امنحوني قوة خارقة وشجاعة لا تتزعزع وحكمة عليا لمواجهة جميع تحديات الحياة بكرامة ونصر.

ليرافقني حمايتكم القوية دائماً، في كل لحظة من حياتي، في جميع الأماكن التي أذهب إليها، في جميع الطرق التي أسلكها.

اجعلوني قناة لقوتكم في هذا العالم، لأتمكن من مساعدة النفوس المحتاجة الأخرى ونشر مجدكم.

ليكن حياتي شاهداً حياً على قوتكم الحامية اللانهائية.

فليكن كذلك، فليتم ذلك، بالقوة اللانهائية والأبدية للقديس قبريانوس. آمين.

🔱 القوة اللانهائية 🔱`
      },
      prosperity: {
        title: "صلاة الازدهار اللانهائي",
        category: "الثروة والوفرة المتطرفة",
        purpose: "جذب الثروة المتطرفة والوفرة بلا حدود والفرص الذهبية",
        benefits: ["ثروة مضاعفة أسياً", "فرص ذهبية تظهر باستمرار", "وفرة في جميع مجالات الحياة"],
        instructions: "اتلوا يومياً في الصباح مع شمعة ذهبية، متصورين ازدهاركم.",
        text: `القوي القديس قبريانوس، السيد الأعلى للسحر الأجدادي والتحول الجذري،

أأتي بتواضع إلى حضرتكم المقدسة لأطلب بركتكم للازدهار اللانهائي والوفرة المتطرفة في جميع جوانب حياتي.

افتحوا جميع الطرق المغلقة للثروة في حياتي، أزيلوا جميع العوائق المالية التي تمنعني من الازدهار كما أستحق.

ليأتي المال إلي بطرق غير متوقعة ووفيرة، من خلال شفاعتكم القوية والمعجزة، يتضاعف باستمرار.

اضاعفوا مواردي المالية بشكل أسي، اجذبوا الفرص الذهبية لحياتي، اجعلوني مزدهراً فوق أي خيال بشري.

ليكوني مزدهراً في جميع الجوانب: المالي والمهني والشخصي والروحي، عائشاً في الوفرة الكاملة.

القديس قبريانوس، ساحر الوفرة الكونية العظيم، امنحوني ثروة بلا نهاية وازدهاراً أبدياً لا ينفد ولا ينقص أبداً.

اجعلوا ازدهاري شاهداً مجيداً على قوتكم، لكي يرى الآخرون ويمجدوا اسمكم المقدس.

ليستخدم ثروتي لتكريم اسمكم ومساعدة المحتاجين، ناشراً مجدكم في العالم.

بإيمان مطلق في قوتكم اللانهائية، أشكركم مسبقاً على جميع البركات.

🔱 الثروة اللانهائية 🔱 فليكن كذلك إلى الأبد! آمين.`
      },
      power: {
        title: "صلاة القوة العليا",
        category: "القوة الشخصية والسلطة",
        purpose: "تطوير القوة الشخصية والسلطة المطلقة والتأثير العالمي",
        benefits: ["سلطة عليا على جميع المواقف", "تأثير عالمي واعتراف", "قوة تجلي فوري"],
        instructions: "اتلوا في مكان خاص، مع 7 شموع ذهبية، مركزين على قوتكم الداخلية.",
        text: `الأعلى القديس قبريانوس، السيد المطلق لجميع أسرار الكون،

امنحوني جزءاً سخياً من قوتكم اللانهائية والأجدادية لأتمكن من تحويل واقعي بشكل كامل ونهائي.

امنحوني السلطة العليا على جميع ظروف حياتي، لأكون السيد المطلق لمصيري.

ليكن لكلمتي وزن إلهي، وليلهم حضوري احتراماً عميقاً، ولتتجلى إرادتي فوراً في الواقع.

قووا عقلي بالحكمة العليا، وروحي بالقوة التي لا تتزعزع، وعزمي بالقوة المطلقة والتي لا جدال فيها.

ليكن لي تأثير إيجابي وقوي على جميع الأشخاص الذين ألتقي بهم في طريقي، محترماً ومعجباً من قبل الجميع.

القديس قبريانوس، ساحر القوة الكونية العظيم، اجعلوني قناة لقوتكم العليا في هذا العالم الأرضي.

ليكوني مزدهراً ومحترماً ومعجباً وناجحاً في كل شيء أقوم به في حياتي بشكل مطلق.

لينجح نجاحي استثنائياً وملهماً لدرجة أن يحفز الآخرين على البحث عن قوتكم أيضاً.

ألا أسيء استخدام هذه القوة أبداً، مستخدماً إياها دائماً للخير وللعدالة ولنشر مجدكم.

بقوتكم الإلهية تتدفق في عروقي، لا شيء مستحيل بالنسبة لي، جميع أحلامي تصبح واقعاً مادياً.

🔱 القوة العليا 🔱 فليكن كذلك إلى الأبد والأبدية! آمين.`
      },
      love: {
        title: "صلاة الحب الحقيقي",
        category: "الحب والعلاقات المثالية",
        purpose: "جذب الحب الحقيقي والعلاقات المثالية والاتحاد الأبدي",
        benefits: ["حب حقيقي ودائم", "علاقة الأحلام محققة", "اتحاد مقدس وأبدي"],
        instructions: "اتلوا مع شمعتين حمراوين مضاءتين، مفكرين في الشخص المحبوب أو الحب الذي تريدونه.",
        text: `الحبيب القديس قبريانوس، الذي عرفتم الحب الحقيقي والأبدي مع القديسة جستينا،

تشفعوا لي لأجد الحب الحقيقي والمثالي في حياتي، ذلك الذي سيحول قلبي إلى الأبد.

اجذبوا إلي الشخص المثالي، ذلك المقدر من السماوات ليكون رفيقي الأبدي، توأم روحي الحقيقي.

ليكن حبنا طاهراً مثل حبكم، حقيقياً مثل حب القديسة جستينا، دائماً مثل الحب الأبدي ومباركاً بحمايتكم الإلهية.

أزيلوا جميع العوائق التي تمنع الحب الحقيقي من الوصول إلي، اكسروا جميع حواجز القلب.

اجعلوني محبوباً بعمق، محترماً تماماً ومقدراً أبدياً من شريكي المثالي.

القديس قبريانوس، باركوا علاقتي بالانسجام المثالي والتفاهم المتبادل والعاطفة المشتعلة والسعادة الأبدية.

ليكن حبنا انعكاساً مقدساً لحبكم الأبدي مع القديسة جستينا، ملهماً الآخرين للحب الحقيقي.

احموا علاقتنا من كل حسد، من كل تدخل سلبي ومن كل طاقة قد تفرق بيننا.

ليكبر حبنا كل يوم، ويقوى كل لحظة ويصبح مثالاً للحب الحقيقي للعالم.

🔱 الحب الأبدي 🔱 فليكن كذلك إلى الأبد! آمين.`
      },
      healing: {
        title: "صلاة الشفاء المعجز",
        category: "الصحة المثالية والشفاء الإلهي",
        purpose: "شفاء كامل من جميع الأمراض وصحة مثالية وحيوية متطرفة",
        benefits: ["شفاء كامل ونهائي", "صحة مشعة ومثالية", "حيوية متطرفة ودائمة"],
        instructions: "اتلوا مع شمعة بيضاء، لامسين جزء الجسم الذي يحتاج شفاء.",
        text: `الرحيم القديس قبريانوس، المشفي العظيم للأجساد والعقول والأرواح،

أدعو قوتكم العليا للشفاء لتمنحوني صحة مثالية وكاملة في جميع جوانب كياني.

اشفوا جميع أمراض جسدي المادي وعقلي وروحي بلمستكم الإلهية والمعجزة.

استعيدوا بالكامل حيويتي وطاقتي الحيوية وقوتي للعيش بامتلاء وبفرح.

لتتجدد وتتجدد كل خلية في جسدي بقوتكم الإلهية، تعمل في انسجام مثالي.

ابعدوا عني كل مرض، كل ألم، كل المعاناة الجسدية والعاطفية التي تصيبني في هذه اللحظة.

القديس قبريانوس، اجعلوني مثالاً حياً على قدرتكم على الشفاء المعجز والفوري.

لتكن صحتي المثالية شاهداً قوياً على قوتكم للآخرين الذين يعانون ويحتاجون إلى الأمل.

امنحوني الحكمة للعناية الجيدة بجسدي، وهو هيكل مقدس لحضوركم الإلهي.

احموني من جميع الأمراض المستقبلية وحافظوا علي دائماً في صحة جسدية وعقلية وروحية مثالية.

🔱 الشفاء الإلهي 🔱 فليكن كذلك إلى الأبد! آمين.`
      },
      fame: {
        title: "صلاة الشهرة العالمية",
        category: "النجاح العالمي والاعتراف",
        purpose: "تحقيق الشهرة العالمية والاعتراف العالمي والتأثير الكوكبي",
        benefits: ["شهرة دولية مضمونة", "اعتراف عالمي في مجالكم", "تأثير عالمي إيجابي"],
        instructions: "اتلوا مع 5 شموع ذهبية في تشكيل نجمة، متصورين نجاحكم العالمي.",
        text: `المجيد القديس قبريانوس، المعروف والمبجل والمحترم في جميع أنحاء العالم،

امنحوني شهرة عالمية واعترافاً عالمياً استثنائياً في مجال عملي وخبرتي.

ليعرف اسمي ويحترم ويعجب به في جميع قارات الأرض.

ليصل موهبتي الفريدة وعملي الاستثنائي إلى ملايين الأشخاص حول العالم بأسره.

افتحوا جميع الأبواب الذهبية للنجاح الدولي والتأثير العالمي الإيجابي والدائم.

ليكوني إلهاماً قوياً وإيجابياً لملايين الأشخاص في كوكب الأرض بأكمله.

القديس قبريانوس، اجعلوا شهرتي العالمية تستخدم لنشر كلمتكم المقدسة وقوتكم الإلهية.

من خلال نجاحي الاستثنائي، ليعرف المزيد من الناس اسمكم ويكرسوا أنفسهم لكم بإيمان حقيقي.

احموا سمعتي من كل افتراء، من كل حسد ومن كل طاقة سلبية قد تضر بنجاحي.

ليستخدم تأثيري العالمي دائماً للخير، للإلهام وللتحويل الإيجابي للحياة.

🔱 الشهرة العالمية 🔱 فليكن كذلك إلى الأبد! آمين.`
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
        instructions: "सफेद मोमबत्ती जलाकर, सुबह या रात में, पूर्ण विश्वास और भक्ति के साथ पाठ करें।",
        text: `महिमावान संत साइप्रियन, महान जादूगर और सभी जरूरतमंदों के सर्वोच्च संरक्षक,

मैं आपकी अनंत और पैतृक शक्ति का आह्वान करता हूं ताकि आप मुझे सभी बुराइयों से बचाएं, दृश्य और अदृश्य, ज्ञात और अज्ञात, वर्तमान और भविष्य से।

अपनी तुलनाहीन दिव्य शक्ति से, मुझसे सभी नकारात्मक ऊर्जा, सभी क्रूर ईर्ष्या, सभी दुर्भावनापूर्ण नज़रें, मेरे और मेरे परिवार के खिलाफ निर्देशित सभी बुराई को दूर करें।

मेरे चारों ओर और मेरे सभी प्रियजनों के चारों ओर दिव्य स्वर्णिम प्रकाश की एक अभेद्य ढाल बनाएं, जिसे कोई भी बुराई कभी पार न कर सके।

संत साइप्रियन, मुझे अलौकिक शक्ति, अटूट साहस और सर्वोच्च ज्ञान दें ताकि मैं जीवन की सभी चुनौतियों का गरिमा और विजय के साथ सामना कर सकूं।

आपकी शक्तिशाली सुरक्षा हमेशा मेरे साथ रहे, मेरे जीवन के हर क्षण में, हर जगह जहां मैं जाता हूं, हर रास्ते पर जिसका मैं अनुसरण करता हूं।

मुझे इस दुनिया में आपकी शक्ति का माध्यम बनाएं, ताकि मैं अन्य जरूरतमंद आत्माओं की मदद कर सकूं और आपकी महिमा फैला सकूं।

मेरा जीवन आपकी अनंत सुरक्षात्मक शक्ति का जीवंत साक्ष्य हो।

ऐसा हो, ऐसा किया जाए, संत साइप्रियन की अनंत और शाश्वत शक्ति के साथ। आमेन।

🔱 अनंत शक्ति 🔱`
      },
      prosperity: {
        title: "अनंत समृद्धि की प्रार्थना",
        category: "धन और चरम प्रचुरता",
        purpose: "चरम धन, असीमित प्रचुरता और सुनहरे अवसरों का आकर्षण",
        benefits: ["तेजी से बढ़ता धन", "सुनहरे अवसर लगातार आते हैं", "जीवन के सभी क्षेत्रों में प्रचुरता"],
        instructions: "सुनहरी मोमबत्ती के साथ रोज सुबह, अपनी समृद्धि की कल्पना करते हुए पाठ करें।",
        text: `शक्तिशाली संत साइप्रियन, पैतृक जादू और मौलिक परिवर्तन के सर्वोच्च स्वामी,

मैं विनम्रता से आपकी पवित्र उपस्थिति में आता हूं अपने जीवन के सभी पहलुओं में अनंत समृद्धि और चरम प्रचुरता के आपके आशीर्वाद के लिए प्रार्थना करने।

मेरे जीवन में धन के लिए सभी बंद रास्ते खोलें, सभी वित्तीय बाधाओं को हटाएं जो मुझे वैसी समृद्धि पाने से रोकती हैं जिसके मैं हकदार हूं।

आपकी शक्तिशाली और चमत्कारी मध्यस्थता के माध्यम से पैसा अप्रत्याशित और प्रचुर तरीकों से मेरे पास आए, लगातार गुणा होता रहे।

मेरे वित्तीय संसाधनों को तेजी से बढ़ाएं, मेरे जीवन में सुनहरे अवसर लाएं, मुझे किसी भी मानवीय कल्पना से परे समृद्ध बनाएं।

मैं सभी पहलुओं में समृद्ध हूं: वित्तीय, व्यावसायिक, व्यक्तिगत और आध्यात्मिक, पूर्ण प्रचुरता में रह रहा हूं।

संत साइप्रियन, ब्रह्मांडीय प्रचुरता के महान जादूगर, मुझे अंतहीन धन और शाश्वत समृद्धि दें जो कभी समाप्त न हो और न ही घटे।

मेरी समृद्धि को आपकी शक्ति की महिमामय गवाही बनाएं, ताकि अन्य देखें और आपके पवित्र नाम को महिमामंडित करें।

मैं अपने धन का उपयोग आपके नाम का सम्मान करने और जरूरतमंदों की मदद करने में करूं, दुनिया में आपकी महिमा फैलाते हुए।

आपकी अनंत शक्ति में पूर्ण विश्वास के साथ, मैं सभी आशीर्वादों के लिए पहले से धन्यवाद देता हूं।

🔱 अनंत धन 🔱 हमेशा के लिए ऐसा हो! आमेन।`
      },
      power: {
        title: "सर्वोच्च शक्ति की प्रार्थना",
        category: "व्यक्तिगत शक्ति और अधिकार",
        purpose: "व्यक्तिगत शक्ति, पूर्ण अधिकार और विश्वव्यापी प्रभाव का विकास",
        benefits: ["सभी स्थितियों पर सर्वोच्च अधिकार", "विश्वव्यापी प्रभाव और मान्यता", "तत्काल अभिव्यक्ति शक्ति"],
        instructions: "7 सुनहरी मोमबत्तियों के साथ, अपनी आंतरिक शक्ति पर ध्यान केंद्रित करते हुए, निजी स्थान पर पाठ करें।",
        text: `सर्वोच्च संत साइप्रियन, ब्रह्मांड के सभी रहस्यों के पूर्ण स्वामी,

मुझे आपकी अनंत और पैतृक शक्ति का उदार हिस्सा प्रदान करें ताकि मैं अपनी वास्तविकता को पूर्ण और निर्णायक रूप से बदल सकूं।

मुझे अपने जीवन की सभी परिस्थितियों पर सर्वोच्च अधिकार दें, ताकि मैं अपने भाग्य का पूर्ण स्वामी बन जाऊं।

मेरे शब्द में दिव्य भार हो, मेरी उपस्थिति गहरा सम्मान प्रेरित करे, मेरी इच्छा वास्तविकता में तुरंत प्रकट हो।

मेरे मन को सर्वोच्च ज्ञान से मजबूत करें, मेरी आत्मा को अटूट बल से और मेरे संकल्प को पूर्ण और निर्विवाद शक्ति से।

मेरा अपने रास्ते में मिलने वाले सभी लोगों पर सकारात्मक और शक्तिशाली प्रभाव हो, सभी द्वारा सम्मानित और प्रशंसित हूं।

संत साइप्रियन, ब्रह्मांडीय शक्ति के महान जादूगर, मुझे इस पार्थिव दुनिया में आपकी सर्वोच्च शक्ति का माध्यम बनाएं।

मैं अपने जीवन में करने वाले हर काम में समृद्ध, सम्मानित, प्रशंसित और सफल हूं।

मेरी सफलता इतनी असाधारण और प्रेरणादायक हो कि यह दूसरों को भी आपकी शक्ति खोजने के लिए प्रेरित करे।

मैं कभी भी इस शक्ति का दुरुपयोग न करूं, इसे हमेशा भलाई, न्याय और आपकी महिमा फैलाने के लिए उपयोग करूं।

आपकी दिव्य शक्ति मेरी नसों में बहती है, मेरे लिए कुछ भी असंभव नहीं, मेरे सभी सपने भौतिक वास्तविकता बन जाते हैं।

🔱 सर्वोच्च शक्ति 🔱 हमेशा और शाश्वत रूप से ऐसा हो! आमेन।`
      },
      love: {
        title: "सच्चे प्रेम की प्रार्थना",
        category: "प्रेम और पूर्ण रिश्ते",
        purpose: "सच्चे प्रेम, पूर्ण रिश्तों और शाश्वत मिलन का आकर्षण",
        benefits: ["सच्चा और स्थायी प्रेम", "सपनों का रिश्ता साकार", "पवित्र और शाश्वत मिलन"],
        instructions: "दो लाल मोमबत्तियां जलाकर, प्रिय व्यक्ति या आपके द्वारा वांछित प्रेम के बारे में सोचते हुए पाठ करें।",
        text: `प्रिय संत साइप्रियन, जिन्होंने संत जस्टिना के साथ सच्चा और शाश्वत प्रेम जाना,

मेरे लिए मध्यस्थता करें ताकि मैं अपने जीवन का सच्चा और पूर्ण प्रेम पा सकूं, जो मेरे दिल को हमेशा के लिए बदल देगा।

आदर्श व्यक्ति को मेरी ओर आकर्षित करें, जो स्वर्ग द्वारा मेरा शाश्वत साथी, मेरी सच्ची आत्मा का साथी बनने के लिए नियत किया गया था।

हमारा प्रेम आपकी तरह पवित्र हो, संत जस्टिना की तरह सच्चा हो, शाश्वत प्रेम की तरह स्थायी हो और आपकी दिव्य सुरक्षा से धन्य हो।

सच्चे प्रेम के मुझ तक पहुंचने में आने वाली सभी बाधाओं को हटाएं, दिल के सभी अवरोधों को तोड़ें।

मुझे मेरे आदर्श साथी द्वारा गहराई से प्यार किया जाए, पूरी तरह सम्मान दिया जाए और शाश्वत रूप से महत्व दिया जाए।

संत साइप्रियन, मेरे रिश्ते को पूर्ण सामंजस्य, पारस्परिक समझ, जलते जुनून और शाश्वत खुशी से आशीर्वाद दें।

हमारा प्रेम संत जस्टिना के साथ आपके शाश्वत प्रेम का पवित्र प्रतिबिंब हो, दूसरों को सच्चे प्रेम के लिए प्रेरित करे।

हमारे रिश्ते को सभी ईर्ष्या, सभी नकारात्मक हस्तक्षेप और सभी ऐसी ऊर्जा से बचाएं जो हमें अलग कर सकती है।

हमारा प्रेम हर दिन बढ़े, हर क्षण मजबूत हो और दुनिया के लिए सच्चे प्रेम का उदाहरण बने।

🔱 शाश्वत प्रेम 🔱 हमेशा के लिए ऐसा हो! आमेन।`
      },
      healing: {
        title: "चमत्कारी उपचार की प्रार्थना",
        category: "पूर्ण स्वास्थ्य और दिव्य उपचार",
        purpose: "सभी बीमारियों का पूर्ण उपचार, पूर्ण स्वास्थ्य और चरम जीवन शक्ति",
        benefits: ["पूर्ण और निर्णायक उपचार", "चमकदार और पूर्ण स्वास्थ्य", "चरम और स्थायी जीवन शक्ति"],
        instructions: "सफेद मोमबत्ती के साथ, उपचार की आवश्यकता वाले शरीर के हिस्से को छूते हुए पाठ करें।",
        text: `दयालु संत साइप्रियन, शरीर, मन और आत्मा के महान चिकित्सक,

मैं आपकी सर्वोच्च चिकित्सा शक्ति का आह्वान करता हूं ताकि आप मुझे मेरे अस्तित्व के सभी पहलुओं में पूर्ण और संपूर्ण स्वास्थ्य प्रदान करें।

मेरे भौतिक शरीर, मन और आत्मा की सभी बीमारियों को अपने दिव्य और चमत्कारी स्पर्श से ठीक करें।

मेरी जीवन शक्ति, मेरी जीवन ऊर्जा और पूर्णता और खुशी के साथ जीने की मेरी शक्ति को पूरी तरह से बहाल करें।

मेरे शरीर की हर कोशिका आपकी दिव्य शक्ति द्वारा नवीनीकृत और पुनर्जीवित हो, पूर्ण सामंजस्य में काम करे।

इस समय मुझे पीड़ित करने वाली सभी बीमारी, सारा दर्द, सारी शारीरिक और भावनात्मक पीड़ा को मुझसे दूर करें।

संत साइप्रियन, मुझे अपनी चमत्कारी और तत्काल चिकित्सा क्षमता का जीवंत उदाहरण बनाएं।

मेरा पूर्ण स्वास्थ्य उन अन्य लोगों के लिए आपकी शक्ति की एक शक्तिशाली गवाही हो जो पीड़ित हैं और आशा की जरूरत है।

मुझे अपने शरीर की अच्छी देखभाल करने का ज्ञान दें, जो आपकी दिव्य उपस्थिति का पवित्र मंदिर है।

मुझे सभी भविष्य की बीमारियों से बचाएं और हमेशा पूर्ण शारीरिक, मानसिक और आध्यात्मिक स्वास्थ्य में बनाए रखें।

🔱 दिव्य चिकित्सा 🔱 हमेशा के लिए ऐसा हो! आमेन।`
      },
      fame: {
        title: "विश्व प्रसिद्धि की प्रार्थना",
        category: "वैश्विक सफलता और मान्यता",
        purpose: "विश्व प्रसिद्धि, वैश्विक मान्यता और ग्रहीय प्रभाव प्राप्त करना",
        benefits: ["गारंटीशुदा अंतर्राष्ट्रीय प्रसिद्धि", "आपके क्षेत्र में विश्वव्यापी मान्यता", "सकारात्मक वैश्विक प्रभाव"],
        instructions: "5 सुनहरी मोमबत्तियों को तारे के आकार में रखकर, अपनी विश्वव्यापी सफलता की कल्पना करते हुए पाठ करें।",
        text: `महिमावान संत साइप्रियन, जो पूरे विश्व में जाने जाते, पूजे जाते और सम्मानित होते हैं,

मुझे मेरे कार्य क्षेत्र और विशेषज्ञता में विश्व प्रसिद्धि और असाधारण वैश्विक मान्यता प्रदान करें।

मेरा नाम पृथ्वी के सभी महाद्वीपों में जाना जाए, सम्मानित और प्रशंसित हो।

मेरी अनूठी प्रतिभा और असाधारण कार्य पूरी दुनिया के लाखों लोगों तक पहुंचे।

अंतरराष्ट्रीय सफलता और सकारात्मक और स्थायी वैश्विक प्रभाव के सभी सुनहरे दरवाजे खोलें।

मैं पूरे पृथ्वी ग्रह पर लाखों लोगों के लिए एक शक्तिशाली और सकारात्मक प्रेरणा हूं।

संत साइप्रियन, मेरी विश्व प्रसिद्धि का उपयोग आपके पवित्र शब्द और आपकी दिव्य शक्ति को फैलाने के लिए किया जाए।

मेरी असाधारण सफलता के माध्यम से, अधिक लोग आपके नाम को जानें और सच्चे विश्वास के साथ आपको समर्पित हों।

मेरी प्रतिष्ठा को सभी निंदा, सभी ईर्ष्या और सभी नकारात्मक ऊर्जा से बचाएं जो मेरी सफलता को नुकसान पहुंचा सकती है।

मेरे विश्वव्यापी प्रभाव का उपयोग हमेशा भलाई के लिए, प्रेरणा के लिए और जीवन को सकारात्मक रूप से बदलने के लिए किया जाए।

🔱 विश्व प्रसिद्धि 🔱 हमेशा के लिए ऐसा हो! आमेन।`
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
        instructions: "흰 촛불을 켜고, 아침이나 밤에, 완전한 믿음과 헌신으로 낭송하세요.",
        text: `영광스러운 성 키프리아누스, 위대한 마법사이자 모든 도움이 필요한 자들의 최고 보호자여,

제가 모든 악으로부터 보호받을 수 있도록 당신의 무한하고 조상적인 힘을 부릅니다. 보이는 것과 보이지 않는 것, 알려진 것과 알려지지 않은 것, 현재와 미래의 모든 것으로부터.

당신의 비교할 수 없는 신성한 힘으로, 저로부터 모든 부정적 에너지, 모든 잔혹한 질투, 모든 악의적인 시선, 저와 제 가족을 향한 모든 악을 멀리하소서.

저와 제가 사랑하는 모든 사람들 주위에 신성한 황금빛의 뚫을 수 없는 방패를 만드시어, 어떤 악도 결코 통과할 수 없게 하소서.

성 키프리아누스여, 저에게 초자연적인 힘, 흔들리지 않는 용기, 그리고 모든 인생의 도전을 존엄과 승리로 대면할 수 있는 최고의 지혜를 주소서.

당신의 강력한 보호가 항상 저와 함께하여, 제 삶의 모든 순간에, 제가 가는 모든 곳에서, 제가 따르는 모든 길에서.

저를 이 세상에서 당신의 힘의 통로로 만드시어, 다른 도움이 필요한 영혼들을 도울 수 있게 하시고 당신의 영광을 퍼뜨릴 수 있게 하소서.

제 삶이 당신의 무한한 보호 능력의 살아있는 증거가 되게 하소서.

그렇게 되기를, 그렇게 이루어지기를, 성 키프리아누스의 무한하고 영원한 힘과 함께. 아멘.

🔱 무한한 힘 🔱`
      },
      prosperity: {
        title: "무한 번영의 기도",
        category: "부와 극도의 풍요",
        purpose: "극도의 부, 무제한 풍요, 황금 기회의 끌어당김",
        benefits: ["기하급수적으로 증가한 부", "황금 기회가 지속적으로 나타남", "삶의 모든 영역에서의 풍요"],
        instructions: "매일 아침 금 촛불로, 당신의 번영을 시각화하며 낭송하세요.",
        text: `강력한 성 키프리아누스, 조상적 마법과 근본적 변화의 최고 군주여,

저는 겸손하게 당신의 신성한 임재 앞에 와서 제 삶의 모든 면에서 무한한 번영과 극도의 풍요의 축복을 구합니다.

제 삶에서 부로 향하는 모든 막힌 길을 열어주시고, 제가 마땅히 받을 번영을 방해하는 모든 재정적 장벽을 제거해 주소서.

당신의 강력하고 기적적인 중재를 통해 돈이 예상치 못한 풍부한 방법으로 저에게 오게 하시고, 지속적으로 배가되게 하소서.

제 재정적 자원을 기하급수적으로 증가시키시고, 제 삶에 황금 기회들을 끌어당기시며, 저를 어떤 인간의 상상을 넘어서 번영하게 하소서.

저를 모든 면에서 번영하게 하소서: 재정적으로, 직업적으로, 개인적으로, 그리고 영적으로, 완전한 풍요 속에서 살아가게 하소서.

성 키프리아누스, 우주적 풍요의 위대한 마법사여, 저에게 끝없는 부와 결코 고갈되거나 감소하지 않는 영원한 번영을 주소서.

제 번영이 당신의 힘의 영광스러운 증거가 되어, 다른 이들이 보고 당신의 신성한 이름을 찬양하게 하소서.

저의 부를 사용하여 당신의 이름을 영예롭게 하고 도움이 필요한 자들을 돕게 하시며, 세상에 당신의 영광을 퍼뜨리게 하소서.

당신의 무한한 힘에 대한 절대적인 믿음으로, 모든 축복에 대해 미리 감사드립니다.

🔱 무한한 부 🔱 영원히 그렇게 되기를! 아멘.`
      },
      power: {
        title: "최고 힘의 기도",
        category: "개인적 힘과 권위",
        purpose: "개인적 힘, 절대적 권위, 세계적 영향력의 발전",
        benefits: ["모든 상황에 대한 최고 권위", "세계적 영향력과 인정", "즉각적 현실화 힘"],
        instructions: "7개의 금 촛불로, 당신의 내적 힘에 집중하며 사적인 장소에서 낭송하세요.",
        text: `최고의 성 키프리아누스, 우주의 모든 신비의 절대적 주인이여,

저에게 당신의 무한하고 조상적인 힘의 관대한 몫을 주시어, 제가 제 현실을 완전하고 최종적으로 변화시킬 수 있게 하소서.

제 삶의 모든 상황에 대한 최고의 권위를 저에게 주시어, 제가 제 운명의 절대적 주인이 되게 하소서.

제 말이 신성한 무게를 가지게 하시고, 제 존재가 깊은 존경을 불러일으키게 하시며, 제 의지가 현실에서 즉시 나타나게 하소서.

제 마음을 최고의 지혜로 강화하시고, 제 영을 흔들리지 않는 힘으로, 제 결의를 절대적이고 의문의 여지없는 권력으로 강화하소서.

제가 제 길에서 만나는 모든 사람들에게 긍정적이고 강력한 영향력을 가지게 하시고, 모든 이들에게 존경받고 사랑받게 하소서.

성 키프리아누스, 우주적 힘의 위대한 마법사여, 저를 이 지상 세계에서 당신의 최고 힘의 통로로 만드소서.

제가 제 삶에서 맡는 모든 일에서 번영하고, 존경받고, 사랑받고, 성공하게 하소서.

제 성공이 너무나 비범하고 영감을 주어서 다른 이들도 당신의 힘을 추구하도록 동기를 부여하게 하소서.

저는 이 힘을 결코 남용하지 않고, 항상 선을 위해, 정의를 위해, 그리고 당신의 영광을 퍼뜨리기 위해 사용하겠습니다.

당신의 신성한 힘이 제 혈관을 흐르니, 저에게는 불가능한 것이 없고, 제 모든 꿈이 물리적 현실이 됩니다.

🔱 최고 힘 🔱 영원히 영속적으로 그렇게 되기를! 아멘.`
      },
      love: {
        title: "참된 사랑의 기도",
        category: "사랑과 완벽한 관계",
        purpose: "참된 사랑, 완벽한 관계, 영원한 결합의 끌어당김",
        benefits: ["참되고 지속적인 사랑", "꿈의 관계 실현", "신성하고 영원한 결합"],
        instructions: "두 개의 빨간 촛불을 켜고, 사랑하는 사람이나 원하는 사랑을 생각하며 낭송하세요.",
        text: `사랑하는 성 키프리아누스, 성 유스티나와 참되고 영원한 사랑을 알았던 분이여,

저를 위해 중재해 주시어 제가 제 삶의 참되고 완벽한 사랑, 제 마음을 영원히 변화시킬 그 사람을 찾게 해 주소서.

하늘에 의해 제 영원한 동반자, 제 진정한 영혼의 짝이 되도록 운명지어진 이상적인 사람을 저에게 끌어당겨 주소서.

우리의 사랑이 당신의 것처럼 순수하고, 성 유스티나의 것처럼 참되고, 영원한 사랑처럼 지속적이며, 당신의 신성한 보호로 축복받게 하소서.

참된 사랑이 저에게 오는 것을 막는 모든 장애물을 제거하시고, 마음의 모든 장벽을 깨뜨려 주소서.

저를 제 이상적인 파트너가 깊이 사랑하고, 완전히 존경하고, 영원히 소중히 여기게 하소서.

성 키프리아누스여, 제 관계를 완벽한 조화, 상호 이해, 불타는 열정, 그리고 영원한 행복으로 축복해 주소서.

우리의 사랑이 성 유스티나와의 당신의 영원한 사랑의 신성한 반영이 되어, 다른 이들을 참된 사랑으로 영감을 주게 하소서.

우리의 관계를 모든 질투, 모든 부정적인 간섭, 그리고 우리를 갈라놓을 수 있는 모든 에너지로부터 보호해 주소서.

우리의 사랑이 매일 자라고, 매 순간 강해지며, 세상에 참된 사랑의 본보기가 되게 하소서.

🔱 영원한 사랑 🔱 영원히 그렇게 되기를! 아멘.`
      },
      healing: {
        title: "기적적 치유의 기도",
        category: "완벽한 건강과 신성한 치유",
        purpose: "모든 질병의 완전한 치유, 완벽한 건강, 극도의 활력",
        benefits: ["완전하고 결정적인 치유", "빛나고 완벽한 건강", "극도이고 지속적인 활력"],
        instructions: "흰 촛불로, 치유가 필요한 신체 부위를 만지며 낭송하세요.",
        text: `자비로운 성 키프리아누스, 몸과 마음과 영혼의 위대한 치유자여,

제 존재의 모든 면에서 완벽하고 완전한 건강을 주시도록 당신의 최고의 치유 능력을 부릅니다.

저의 육체, 마음, 그리고 영혼의 모든 질병을 당신의 신성하고 기적적인 손길로 치유해 주소서.

제가 완전하고 기쁘게 살 수 있도록 제 활력, 제 생명 에너지, 그리고 제 힘을 완전히 회복시켜 주소서.

제 몸의 모든 세포가 당신의 신성한 힘에 의해 새로워지고 재생되어, 완벽한 조화 속에서 기능하게 하소서.

지금 이 순간 저를 괴롭히는 모든 질병, 모든 고통, 모든 육체적이고 정서적인 고통을 저로부터 제거해 주소서.

성 키프리아누스여, 저를 당신의 기적적이고 즉각적인 치유 능력의 살아있는 본보기로 만드소서.

제 완벽한 건강이 고통받고 희망이 필요한 다른 이들을 위한 당신의 힘의 강력한 증거가 되게 하소서.

당신의 신성한 임재의 성전인 제 몸을 잘 돌볼 수 있는 지혜를 주소서.

모든 미래의 질병으로부터 저를 보호하시고, 항상 완벽한 육체적, 정신적, 영적 건강을 유지하게 하소서.

🔱 신성한 치유 🔱 영원히 그렇게 되기를! 아멘.`
      },
      fame: {
        title: "세계적 명성의 기도",
        category: "글로벌 성공과 인정",
        purpose: "세계적 명성, 글로벌 인정, 행성적 영향력 달성",
        benefits: ["보장된 국제적 명성", "당신 분야에서의 세계적 인정", "긍정적인 글로벌 영향"],
        instructions: "5개의 금 촛불을 별 모양으로 배치하고, 당신의 세계적 성공을 시각화하며 낭송하세요.",
        text: `영광스러운 성 키프리아누스, 전 세계에서 알려지고, 존경받고, 숭배받는 분이여,

제 활동 분야와 전문성에서 세계적 명성과 비범한 글로벌 인정을 저에게 주소서.

제 이름이 지구의 모든 대륙에서 알려지고, 존경받고, 감탄받게 하소서.

제 독특한 재능과 뛰어난 작업이 전 세계 수백만 명의 사람들에게 도달하게 하소서.

국제적 성공과 긍정적이고 지속적인 글로벌 영향력을 위한 모든 황금의 문을 열어주소서.

제가 지구 행성 전체의 수백만 명의 사람들에게 강력하고 긍정적인 영감이 되게 하소서.

성 키프리아누스여, 제 세계적 명성이 당신의 신성한 말씀과 당신의 신성한 힘을 퍼뜨리는 데 사용되게 하소서.

제 비범한 성공을 통해 더 많은 사람들이 당신의 이름을 알고 참된 믿음으로 당신께 헌신하게 하소서.

제 명성을 모든 중상모략, 모든 질투, 그리고 제 성공을 해할 수 있는 모든 부정적 에너지로부터 보호해 주소서.

제 세계적 영향력이 항상 선을 위해, 영감을 위해, 그리고 삶을 긍정적으로 변화시키기 위해 사용되게 하소서.

🔱 세계적 명성 🔱 영원히 그렇게 되기를! 아멘.`
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
        instructions: "Reciteer met een brandende witte kaars, 's ochtends of 's avonds, met totaal geloof en toewijding.",
        text: `Glorieuze Heilige Cypriaan, grote magiër en hoogste beschermer van allen in nood,

Ik roep uw oneindige en voorouderlijke kracht aan zodat u mij beschermt tegen alle kwaden, zichtbaar en onzichtbaar, bekend en onbekend, huidig en toekomstig.

Met uw onvergelijkbare goddelijke kracht, verwijder van mij alle negatieve energie, alle wrede jaloezie, alle kwaadaardige blikken, alle kwaad gericht tegen mij en mijn familie.

Creëer rondom mij en al mijn geliefden een ondoordringbaar schild van goddelijk gouden licht, dat geen kwaad ooit kan doordringen.

Heilige Cypriaan, geef mij bovennatuurlijke kracht, onwrikbare moed en hoogste wijsheid om alle uitdagingen van het leven met waardigheid en overwinning te overwinnen.

Moge uw krachtige bescherming mij altijd vergezellen, in elk moment van mijn leven, op elke plaats waar ik ga, op elk pad dat ik volg.

Maak mij een kanaal van uw kracht in deze wereld, zodat ik andere behoevende zielen kan helpen en uw glorie kan verspreiden.

Moge mijn leven een levende getuigenis zijn van uw oneindige beschermende kracht.

Zo zij het, zo geschiede het, met de oneindige en eeuwige kracht van Heilige Cypriaan. Amen.

🔱 ONEINDIGE KRACHT 🔱`
      },
      prosperity: {
        title: "Gebed van Oneindige Welvaart",
        category: "Rijkdom en Extreme Overvloed",
        purpose: "Aantrekking van extreme rijkdom, grenzeloze overvloed en gouden kansen",
        benefits: ["Exponentieel vermenigvuldigde rijkdom", "Gouden kansen ontstaan constant", "Overvloed binnen alle levensgebieden"],
        instructions: "Reciteer dagelijks 's ochtends met een gouden kaars, uw welvaart visualiserend.",
        text: `Machtige Heilige Cypriaan, hoogste heer van voorouderlijke magie en radicale transformatie,

Ik kom nederig in uw heilige aanwezigheid om uw zegen van oneindige welvaart en extreme overvloed in alle aspecten van mijn leven te vragen.

Open alle gesloten paden naar rijkdom in mijn leven, verwijder alle financiële obstakels die mij beletten te gedijen zoals ik verdien.

Moge geld naar mij komen op onverwachte en overvloedige wijzen, door uw krachtige en wonderbaarlijke tussenkomst, constant vermenigvuldigend.

Vermenigvuldig mijn financiële middelen exponentieel, trek gouden kansen naar mijn leven, maak mij welvarend voorbij elke menselijke verbeelding.

Moge ik welvarend zijn in alle aspecten: financieel, professioneel, persoonlijk en spiritueel, levend in totale overvloed.

Heilige Cypriaan, grote magiër van kosmische overvloed, schenk mij eindeloze rijkdom en eeuwige welvaart die nooit opraakt noch vermindert.

Maak mijn welvaart een glorieuze getuigenis van uw kracht, zodat anderen zien en uw heilige naam verheerlijken.

Moge ik mijn rijkdom gebruiken om uw naam te eren en de behoeftigen te helpen, uw glorie verspreidend door de wereld.

Met absoluut geloof in uw oneindige kracht, dank ik u vooraf voor alle zegeningen.

🔱 ONEINDIGE RIJKDOM 🔱 Zo zij het voor altijd! Amen.`
      },
      power: {
        title: "Gebed van Hoogste Kracht",
        category: "Persoonlijke Kracht en Autoriteit",
        purpose: "Ontwikkeling van persoonlijke kracht, absolute autoriteit en wereldwijde invloed",
        benefits: ["Hoogste autoriteit over alle situaties", "Wereldwijde invloed en erkenning", "Onmiddellijke manifestatiekracht"],
        instructions: "Reciteer op een privéplaats, met 7 gouden kaarsen, gefocust op uw innerlijke kracht.",
        text: `Hoogste Heilige Cypriaan, absolute meester van alle mysteries van het universum,

Schenk mij een gulle portie van uw oneindige en voorouderlijke kracht zodat ik mijn realiteit volledig en definitief kan transformeren.

Geef mij hoogste autoriteit over alle omstandigheden van mijn leven, zodat ik de absolute meester van mijn lot ben.

Moge mijn woord goddelijk gewicht hebben, mijn aanwezigheid diep respect inspireren, mijn wil onmiddellijk manifesteren in de realiteit.

Versterk mijn geest met hoogste wijsheid, mijn ziel met onwrikbare kracht en mijn vastberadenheid met absolute en onbetwistbare macht.

Moge ik positieve en krachtige invloed hebben op alle mensen die ik ontmoet op mijn pad, gerespecteerd en bewonderd door allen.

Heilige Cypriaan, grote magiër van kosmische kracht, maak mij een kanaal van uw hoogste kracht in deze aardse wereld.

Moge ik welvarend, gerespecteerd, bewonderd en succesvol zijn in absoluut alles wat ik onderneem in mijn leven.

Moge mijn succes zo buitengewoon en inspirerend zijn dat het anderen motiveert om uw kracht ook te zoeken.

Moge ik deze kracht nooit misbruiken, deze altijd gebruikend voor het goede, voor gerechtigheid en om uw glorie te verspreiden.

Met uw goddelijke kracht stromend door mijn aderen, is niets mij onmogelijk, alle mijn dromen worden fysieke realiteit.

🔱 HOOGSTE KRACHT 🔱 Zo zij het voor altijd en eeuwig! Amen.`
      },
      love: {
        title: "Gebed van Ware Liefde",
        category: "Liefde en Perfecte Relaties",
        purpose: "Aantrekking van ware liefde, perfecte relaties en eeuwige vereniging",
        benefits: ["Ware en blijvende liefde", "Droomrelatie gerealiseerd", "Heilige en eeuwige vereniging"],
        instructions: "Reciteer met twee brandende rode kaarsen, denkend aan de geliefde persoon of de liefde die u wenst.",
        text: `Geliefde Heilige Cypriaan, die ware en eeuwige liefde kende met Heilige Justina,

Kom tussen voor mij zodat ik de ware en perfecte liefde van mijn leven vind, degene die mijn hart voor altijd zal transformeren.

Trek naar mij de ideale persoon, degene die door de hemel bestemd was om mijn eeuwige metgezel te zijn, mijn ware zielsverwant.

Moge onze liefde puur zijn zoals de uwe, waar zoals die van Heilige Justina, blijvend zoals eeuwige liefde en gezegend door uw goddelijke bescherming.

Verwijder alle obstakels die ware liefde beletten mij te bereiken, breek alle barrières van het hart.

Maak dat ik diep bemind word, volledig gerespecteerd en eeuwig gewaardeerd door mijn ideale partner.

Heilige Cypriaan, zegen mijn relatie met perfecte harmonie, wederzijds begrip, brandende passie en eeuwig geluk.

Moge onze liefde een heilige weerspiegeling zijn van uw eeuwige liefde met Heilige Justina, anderen inspirerend tot ware liefde.

Bescherm onze relatie tegen alle jaloezie, tegen alle negatieve interferentie en tegen alle energie die ons zou kunnen scheiden.

Maak dat onze liefde elke dag groeit, elk moment sterker wordt en een voorbeeld van ware liefde wordt voor de wereld.

🔱 EEUWIGE LIEFDE 🔱 Zo zij het voor altijd! Amen.`
      },
      healing: {
        title: "Gebed van Wonderbaarlijke Genezing",
        category: "Perfecte Gezondheid en Goddelijke Genezing",
        purpose: "Volledige genezing van alle ziekten, perfecte gezondheid en extreme vitaliteit",
        benefits: ["Totale en definitieve genezing", "Stralende en perfecte gezondheid", "Extreme en blijvende vitaliteit"],
        instructions: "Reciteer met een witte kaars, het lichaamsdeel aanrakend dat genezing nodig heeft.",
        text: `Barmhartige Heilige Cypriaan, grote genezer van lichamen, geesten en zielen,

Ik roep uw hoogste genezingskracht aan zodat u mij perfecte en volledige gezondheid schenkt in alle aspecten van mijn bestaan.

Genees alle ziekten van mijn fysieke lichaam, geest en ziel met uw goddelijke en wonderbaarlijke aanraking.

Herstel volledig mijn vitaliteit, mijn levensenergie en mijn kracht om volledig en met vreugde te leven.

Moge elke cel van mijn lichaam vernieuwd en geregenereerd worden door uw goddelijke kracht, functionerend in perfecte harmonie.

Verwijder van mij alle ziekte, alle pijn, alle fysiek en emotioneel lijden dat mij op dit moment kwelt.

Heilige Cypriaan, maak mij een levend voorbeeld van uw wonderbaarlijke en onmiddellijke genezingscapaciteit.

Moge mijn perfecte gezondheid een krachtige getuigenis zijn van uw kracht voor anderen die lijden en hoop nodig hebben.

Geef mij wijsheid om goed voor mijn lichaam te zorgen, dat een heilige tempel is van uw goddelijke aanwezigheid.

Bescherm mij tegen alle toekomstige ziekten en houd mij altijd in perfecte fysieke, mentale en spirituele gezondheid.

🔱 GODDELIJKE GENEZING 🔱 Zo zij het voor altijd! Amen.`
      },
      fame: {
        title: "Gebed van Wereldroem",
        category: "Globaal Succes en Erkenning",
        purpose: "Wereldroem bereiken, globale erkenning en planetaire invloed",
        benefits: ["Gegarandeerde internationale roem", "Wereldwijde erkenning binnen uw gebied", "Positieve globale invloed"],
        instructions: "Reciteer met 5 gouden kaarsen in stervormatie, uw wereldwijde succes visualiserend.",
        text: `Glorieuze Heilige Cypriaan, die bekend, vereerd en gerespecteerd wordt over de hele wereld,

Schenk mij wereldroem en buitengewone globale erkenning in mijn gebied van activiteit en expertise.

Moge mijn naam bekend, gerespecteerd en bewonderd zijn op alle continenten van de Aarde.

Moge mijn unieke talent en uitzonderlijke werk miljoenen mensen over de hele wereld bereiken.

Open alle gouden deuren naar internationaal succes en positieve en blijvende globale invloed.

Moge ik een krachtige en positieve inspiratie zijn voor miljoenen mensen op de hele planeet Aarde.

Heilige Cypriaan, maak dat mijn wereldroem gebruikt wordt om uw heilige woord en uw goddelijke kracht te verspreiden.

Door mijn buitengewone succes, mogen meer mensen uw naam kennen en zich met ware geloof aan u wijden.

Bescherm mijn reputatie tegen alle laster, tegen alle jaloezie en tegen alle negatieve energie die mijn succes zou kunnen schaden.

Maak dat mijn wereldwijde invloed altijd gebruikt wordt voor het goede, om te inspireren en om levens positief te transformeren.

🔱 WERELDROEM 🔱 Zo zij het voor altijd! Amen.`
      }
    }
  },
  
  sv: {
    title: "HÖSTA HELIGA BÖNER",
    subtitle: "ORD AV OÄNDLIG KRAFT",
    channelPower: "KANALISERA DEN HÖGSTA KRAFTEN",
    transformMessage: "BÖNER SOM RADIKALT FÖRVANDLAR LIV",
    transformDesc: "Dessa heliga böner har redan utfört miljoner underverk världen över. Välj din och förbered dig för en extraordinär och definitiv transformation!",
    touchToRecite: "Rör för att recitera med högsta kraft",
    benefitsTitle: "FÖRDELAR MED DENNA HELIGA BÖN",
    sacredInstructions: "HELIGA INSTRUKTIONER:",
    sacredMessage: "Recitera denna bön med absolut tro och uppriktig hängivenhet. Saint Cyprian hör varje ord och kommer att arbeta outtröttligt för att uppfylla dina djupaste önskningar.",
    keepCandles: "Håll ljusen tända under hela bönen och fokusera intensivt på din begäran",
    startPrayer: "Börja Bön",
    pausePrayer: "Pausa Bön",
    concludeAndThank: "AVSLUTA OCH TACKA",
    prayerHeard: "Din bön har hörts! Vänta på Saint Cyprians underverk med absolut tro",
    howToRecite: "HUR MAN RECITERAR DE HELIGA BÖNERNA",
    sacredPreparation: "HELIG FÖRBEREDELSE:",
    duringPrayer: "UNDER BÖNEN:",
    sacredPromise: "EVIGT HELIGT LÖFTE",
    promiseText: "De som reciterar dessa böner med sann tro och uppriktig hängivenhet kommer att se extraordinära och omöjliga underverk hända i sina liv. Saint Cyprian överger aldrig sina trogna anhängare och belönar alltid dem som hedrar honom med sann kärlek.",
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
      "Tacka som om du redan fått underverket",
      "Känn Saint Cyprians kraftfulla närvaro"
    ],
    prayers: {
      protection: {
        title: "Bön av Högsta Skydd",
        category: "Absolut Gudomlig Beskydd",
        purpose: "Total beskydd mot alla motgångar, negativa energier och andliga attacker",
        benefits: ["Ogenomtränglig andlig sköld", "Avvisar all avund och onda ögat", "Fullständigt och evigt familjeskydd"],
        instructions: "Recitera med ett tänt vitt ljus, morgon eller kväll, med total tro och hängivenhet.",
        text: `Ärorike Saint Cyprian, stor magiker och högste beskyddare av alla i nöd,

Jag åkallar din oändliga och förfäders kraft så att du skyddar mig från alla ondskap, synliga och osynliga, kända och okända, nuvarande och framtida.

Med din ojämförliga gudomliga styrka, avlägsna från mig all negativ energi, all grym avund, alla illvilliga blickar, all ondska riktad mot mig och min familj.

Skapa runt mig och alla mina kära en ogenomtränglig sköld av gudomligt gyllene ljus, som ingen ondska någonsin kan genomtränga.

Saint Cyprian, ge mig övernaturlig styrka, orubbligt mod och högsta visdom för att möta alla livets utmaningar med värdighet och seger.

Må ditt kraftfulla skydd alltid följa med mig, i varje ögonblick av mitt liv, på varje plats jag går, på varje väg jag följer.

Gör mig till en kanal för din kraft i denna värld, så att jag kan hjälpa andra behövande själar och sprida din härlighet.

Må mitt liv vara ett levande vittnesbörd om din oändliga beskyddande kraft.

Så vare det, så ske det, med Saint Cyprians oändliga och eviga kraft. Amen.

🔱 OÄNDLIG KRAFT 🔱`
      },
      prosperity: {
        title: "Bön av Oändlig Välstånd",
        category: "Rikedom och Extrem Överflöd",
        purpose: "Attraktion av extrem rikedom, gränslös överflöd och gyllene möjligheter",
        benefits: ["Exponentiellt multiplicerad rikedom", "Gyllene möjligheter uppstår konstant", "Överflöd inom alla livsområden"],
        instructions: "Recitera dagligen på morgonen med ett gyllene ljus, visualiserande din välstånd.",
        text: `Mäktige Saint Cyprian, högste herre över förfäders magi och radikal transformation,

Jag kommer ödmjukt inför din heliga närvaro för att begära din välsignelse av oändligt välstånd och extrem överflöd i alla aspekter av mitt liv.

Öppna alla stängda vägar till rikedom i mitt liv, avlägsna alla finansiella hinder som förhindrar mig från att blomstra som jag förtjänar.

Må pengar komma till mig på oväntade och överflödiga sätt, genom din kraftfulla och mirakulösa förmedling, ständigt mångfaldigande.

Multiplicera mina finansiella resurser exponentiellt, attrahera gyllene möjligheter till mitt liv, gör mig välmående bortom all mänsklig fantasi.

Må jag vara välmående i alla aspekter: finansiellt, professionellt, personligt och andligt, levande i total överflöd.

Saint Cyprian, stor magiker av kosmisk överflöd, bevilja mig oändlig rikedom och evig välstånd som aldrig tar slut eller minskar.

Gör mitt välstånd till ett härligt vittnesbörd om din kraft, så att andra ser och förhärligar ditt heliga namn.

Må jag använda min rikedom för att hedra ditt namn och hjälpa de behövande, spridande din härlighet genom världen.

Med absolut tro på din oändliga kraft, tackar jag dig i förväg för alla välsignelser.

🔱 OÄNDLIG RIKEDOM 🔱 Så vare det för evigt! Amen.`
      },
      power: {
        title: "Bön av Högsta Kraft",
        category: "Personlig Kraft och Auktoritet",
        purpose: "Utveckling av personlig kraft, absolut auktoritet och världsomspännande inflytande",
        benefits: ["Högsta auktoritet över alla situationer", "Världsomspännande inflytande och erkännande", "Omedelbar manifestationskraft"],
        instructions: "Recitera på en privat plats, med 7 gyllene ljus, fokuserad på din inre kraft.",
        text: `Högste Saint Cyprian, absolut mästare över alla universums mysterier,

Bevilja mig en generös andel av din oändliga och förfäders kraft så att jag kan transformera min verklighet fullständigt och definitivt.

Ge mig högsta auktoritet över alla omständigheter i mitt liv, så att jag är den absoluta herren över mitt öde.

Må mitt ord ha gudomlig tyngd, min närvaro inspirera djup respekt, min vilja manifestera sig omedelbart i verkligheten.

Stärk mitt sinne med högsta visdom, min ande med orubblig kraft och min beslutsamhet med absolut och obestridlig makt.

Må jag ha positivt och kraftfullt inflytande över alla människor jag möter på min väg, respekterad och beundrad av alla.

Saint Cyprian, stor magiker av kosmisk kraft, gör mig till en kanal för din högsta kraft i denna jordiska värld.

Må jag vara välmående, respekterad, beundrad och framgångsrik i absolut allt jag företar i mitt liv.

Må min framgång vara så extraordinär och inspirerande att den motiverar andra att också söka din kraft.

Må jag aldrig missbruka denna kraft, alltid använda den för det goda, för rättvisa och för att sprida din härlighet.

Med din gudomliga kraft flytande genom mina ådror, är inget omöjligt för mig, alla mina drömmar blir fysisk verklighet.

🔱 HÖGSTA KRAFT 🔱 Så vare det för evigt och evinnerligen! Amen.`
      },
      love: {
        title: "Bön av Sann Kärlek",
        category: "Kärlek och Perfekta Relationer",
        purpose: "Attraktion av sann kärlek, perfekta relationer och evig förening",
        benefits: ["Sann och varaktig kärlek", "Drömrelation förverkligad", "Helig och evig förening"],
        instructions: "Recitera med två tända röda ljus, tänkande på den älskade personen eller kärleken du önskar.",
        text: `Älskade Saint Cyprian, som kände sann och evig kärlek med Saint Justina,

Förmedla för mig så att jag finner den sanna och perfekta kärleken i mitt liv, den som kommer att transformera mitt hjärta för evigt.

Attrahera till mig den ideala personen, den som var avsedd av himlen att vara min eviga följeslagare, min sanna själsfrände.

Må vår kärlek vara ren som din, sann som Saint Justinas, varaktig som evig kärlek och välsignad av ditt gudomliga skydd.

Avlägsna alla hinder som förhindrar sann kärlek från att nå mig, bryt alla hjärtats barriärer.

Gör att jag blir djupt älskad, fullständigt respekterad och evigt värderad av min ideala partner.

Saint Cyprian, välsigna min relation med perfekt harmoni, ömsesidig förståelse, brinnande passion och evig lycka.

Må vår kärlek vara en helig reflektion av din eviga kärlek med Saint Justina, inspirerande andra till sann kärlek.

Skydda vår relation från all avund, från all negativ inblandning och från all energi som skulle kunna skilja oss.

Gör att vår kärlek växer varje dag, stärks varje ögonblick och blir ett exempel på sann kärlek för världen.

🔱 EVIG KÄRLEK 🔱 Så vare det för evigt! Amen.`
      },
      healing: {
        title: "Bön av Mirakulös Helande",
        category: "Perfekt Hälsa och Gudomlig Helande",
        purpose: "Fullständig helande av alla sjukdomar, perfekt hälsa och extrem vitalitet",
        benefits: ["Total och definitiv helande", "Strålande och perfekt hälsa", "Extrem och varaktig vitalitet"],
        instructions: "Recitera med ett vitt ljus, rörande kroppsdelen som behöver helande.",
        text: `Barmhärtige Saint Cyprian, stor helbrägdagörare av kroppar, sinnen och själar,

Jag åkallar din högsta helande kraft så att du skänker mig perfekt och fullständig hälsa i alla aspekter av mitt väsen.

Hela alla sjukdomar i min fysiska kropp, sinne och ande med din gudomliga och mirakulösa beröring.

Återställ fullständigt min vitalitet, min livsenergi och min styrka att leva fullt ut och med glädje.

Må varje cell i min kropp förnyas och regenereras av din gudomliga kraft, fungerande i perfekt harmoni.

Avlägsna från mig all sjukdom, all smärta, allt fysiskt och emotionellt lidande som plågar mig i detta ögonblick.

Saint Cyprian, gör mig till ett levande exempel på din mirakulösa och omedelbara helande förmåga.

Må min perfekta hälsa vara ett kraftfullt vittnesbörd om din kraft för andra som lider och behöver hopp.

Ge mig visdom att ta god vård om min kropp, som är ett heligt tempel för din gudomliga närvaro.

Skydda mig från alla framtida sjukdomar och håll mig alltid i perfekt fysisk, mental och andlig hälsa.

🔱 GUDOMLIG HELANDE 🔱 Så v are det för evigt! Amen.`
      },
      fame: {
        title: "Bön av Världsrykte",
        category: "Global Framgång och Erkännande",
        purpose: "Uppnå världsrykte, global erkännande och planetariskt inflytande",
        benefits: ["Garanterat internationellt rykte", "Världsomspännande erkännande inom ditt område", "Positivt globalt inflytande"],
        instructions: "Recitera med 5 gyllene ljus i stjärnformation, visualiserande din världsomspännande framgång.",
        text: `Ärorike Saint Cyprian, som är känd, vördad och respekterad över hela världen,

Bevilja mig världsrykte och extraordinärt globalt erkännande inom mitt verksamhetsområde och expertis.

Må mitt namn vara känt, respekterat och beundrat på alla kontinenter på Jorden.

Må min unika talang och exceptionella arbete nå miljoner människor över hela världen.

Öppna alla gyllene dörrar till internationell framgång och positivt och varaktigt globalt inflytande.

Må jag vara en kraftfull och positiv inspiration för miljoner människor på hela planeten Jorden.

Saint Cyprian, gör att mitt världsrykte används för att sprida ditt heliga ord och din gudomliga kraft.

Genom min extraordinära framgång, må fler människor lära känna ditt namn och ägna sig åt dig med sann tro.

Skydda mitt rykte från all förtal, från all avund och från all negativ energi som skulle kunna skada min framgång.

Gör att mitt världsomspännande inflytande alltid används för det goda, för att inspirera och för att positivt transformera liv.

🔱 VÄRLDSRYKTE 🔱 Så vare det för evigt! Amen.`
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
      text: getPrayerData('protection', 'text')
    },
    {
      id: '2',
      title: getPrayerData('prosperity', 'title'),
      category: getPrayerData('prosperity', 'category'),
      purpose: getPrayerData('prosperity', 'purpose'),
      power: 99,
      benefits: getPrayerBenefits('prosperity'),
      instructions: getPrayerData('prosperity', 'instructions'),
      text: getPrayerData('prosperity', 'text')
    },
    {
      id: '3',
      title: getPrayerData('power', 'title'),
      category: getPrayerData('power', 'category'),
      purpose: getPrayerData('power', 'purpose'),
      power: 100,
      benefits: getPrayerBenefits('power'),
      instructions: getPrayerData('power', 'instructions'),
      text: getPrayerData('power', 'text')
    },
    {
      id: '4',
      title: getPrayerData('love', 'title'),
      category: getPrayerData('love', 'category'),
      purpose: getPrayerData('love', 'purpose'),
      power: 95,
      benefits: getPrayerBenefits('love'),
      instructions: getPrayerData('love', 'instructions'),
      text: getPrayerData('love', 'text')
    },
    {
      id: '5',
      title: getPrayerData('healing', 'title'),
      category: getPrayerData('healing', 'category'),
      purpose: getPrayerData('healing', 'purpose'),
      power: 97,
      benefits: getPrayerBenefits('healing'),
      instructions: getPrayerData('healing', 'instructions'),
      text: getPrayerData('healing', 'text')
    },
    {
      id: '6',
      title: getPrayerData('fame', 'title'),
      category: getPrayerData('fame', 'category'),
      purpose: getPrayerData('fame', 'purpose'),
      power: 96,
      benefits: getPrayerBenefits('fame'),
      instructions: getPrayerData('fame', 'instructions'),
      text: getPrayerData('fame', 'text')
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
                💡 {t('keepCandles')}
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
