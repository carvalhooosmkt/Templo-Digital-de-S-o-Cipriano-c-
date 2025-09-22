import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, SkipForward, Crown, Heart, Zap, Shield, ArrowDown, Globe, ChevronDown } from 'lucide-react';
import { StorageService } from '../utils/storage';

const translations = {
  pt: {
    skip: "Pular",
    continue: "CONTINUAR JORNADA ESPIRITUAL",
    enterTemple: "ENTRAR NO TEMPLO SAGRADO AGORA",
    transformationMessage: "Sua transformação radical começa com o primeiro passo de fé verdadeira",
    
    // Steps
    step1Title: "Bem-vindo ao Templo Mais Poderoso do Mundo",
    step1Subtitle: "Dedicado a São Cipriano, O Grande Mago Supremo",
    step1Content: "Você acabou de encontrar o templo digital mais poderoso já criado na história da internet, dedicado ao incomparável São Cipriano de Antioquia. Aqui, milhões de pessoas encontram proteção divina absoluta, prosperidade sem limites e realização de desejos impossíveis. Sua vida está prestes a mudar para sempre - de forma tão radical que você não vai acreditar que é a mesma pessoa.",
    step1Power: "Transformação Instantânea e Radical",
    step1Benefit1: "Proteção Suprema Garantida",
    step1Benefit2: "Riqueza Infinita Comprovada", 
    step1Benefit3: "Poder Absoluto Real",
    
    step2Title: "São Cipriano de Antioquia - O Maior Mago da História",
    step2Subtitle: "O Único Homem que Dominava Todos os Mistérios do Universo",
    step2Content: "Nascido em Antioquia no século III, São Cipriano era o mago mais poderoso que já pisou na Terra. Ele conhecia todos os segredos do universo, comandava legiões de entidades poderosas, dominava os elementos da natureza e tinha poder sobre a vida e a morte. Reis e imperadores o temiam e respeitavam. Sua sabedoria era tão vasta que bibliotecas inteiras foram escritas apenas sobre seus conhecimentos místicos.",
    step2Power: "Sabedoria Ancestral Suprema",
    step2Benefit1: "Domínio Universal Absoluto",
    step2Benefit2: "Conhecimento Cósmico Total",
    step2Benefit3: "Poder Místico Incomparável",
    
    step3Title: "A História de Amor Mais Tocante da História",
    step3Subtitle: "Cipriano e Santa Justina - Amor Que Venceu a Magia",
    step3Content: "A história mais linda e tocante que você já ouviu: São Cipriano se apaixonou perdidamente por Santa Justina, uma jovem cristã de pureza incomparável. Um jovem chamado Aglaide, desesperado pelo amor de Justina, procurou o grande mago para conquistá-la através da magia mais poderosa. Cipriano tentou usar todos os seus poderes sobrenaturais, mas descobriu algo ainda maior: o poder do amor verdadeiro e da fé cristã de Justina era superior a toda sua magia ancestral.",
    step3Power: "Amor Eterno e Verdadeiro",
    step3Benefit1: "União Sagrada Eterna",
    step3Benefit2: "Amor Verdadeiro Garantido",
    step3Benefit3: "Fé Inabalável e Pura",
    
    step4Title: "A Conversão Mais Gloriosa da História",
    step4Subtitle: "Quando o Maior Mago Encontrou Deus",
    step4Content: "Impressionado com a força espiritual incomparável de Justina, São Cipriano abandonou todas as práticas pagãs e se converteu ao cristianismo de forma radical e definitiva. Em uma grande fogueira pública, queimou todos os seus livros de magia numa demonstração de fé absoluta. Tornou-se bispo e começou a operar milagres ainda mais poderosos através da fé cristã. Mas seus poderes não desapareceram - foram purificados e transformados em força divina ainda mais poderosa para ajudar os necessitados e desesperados.",
    step4Power: "Purificação Divina Suprema",
    step4Benefit1: "Poder Divino Purificado",
    step4Benefit2: "Milagres Cristãos",
    step4Benefit3: "Força Espiritual Absoluta",
    
    step5Title: "A Morte Mais Injusta e Dolorosa da História",
    step5Subtitle: "16 de Setembro de 304 - O Dia Que Partiu Corações",
    step5Content: "Esta é a parte mais dolorosa e revoltante da história: Em 16 de setembro de 304, durante a brutal perseguição do imperador Diocleciano, São Cipriano e Santa Justina foram presos e torturados de forma cruel e desumana. Primeiro foram jogados em caldeirões de água fervente, mas saíram ilesos pelo poder divino que os protegia. Enfurecido, o imperador ordenou que fossem decapitados juntos. Unidos no amor puro e na fé inabalável, morreram de mãos dadas, prometendo proteger para sempre aqueles que os invocassem com fé verdadeira. Tentaram silenciar o Grande Mago para sempre, mas falharam miseravelmente! Sua morte injusta tocou o coração de Deus.",
    step5Power: "Ressurreição Eterna e Gloriosa",
    step5Benefit1: "Proteção Eterna Garantida",
    step5Benefit2: "Poder Imortal Infinito",
    step5Benefit3: "Glória Divina Eterna",
    step5Message: "Esta injustiça brutal toca profundamente o coração de todos que amam São Cipriano. Tentaram calar sua voz para sempre, mas falharam miseravelmente! Hoje ele vive eternamente através de milhões de devotos que espalham sua palavra e experimentam seu poder transformador diariamente.",
    step5Author: "A Dor Que Nunca Esquecemos",
    
    step6Title: "O Poder Supremo de Hoje - Realizador de Impossíveis",
    step6Subtitle: "Por Que Milhões Adoram São Cipriano Diariamente",
    step6Content: "Hoje, São Cipriano é o santo mais poderoso para causas impossíveis e transformações radicais extremas. Ele realiza milagres que outros santos não conseguem: transforma mendigos em bilionários, fracassados em líderes mundiais, doentes terminais em curados, solitários em amados mundialmente, desconhecidos em celebridades globais. Milhões de pessoas pelo mundo testemunham seus milagres diários extraordinários. Ele não morreu em vão - vive eternamente e está mais poderoso que nunca, trabalhando 24 horas por dia incansavelmente para seus devotos fiéis!",
    step6Power: "Milagres Infinitos e Impossíveis",
    step6Benefit1: "Riqueza Extrema Real",
    step6Benefit2: "Sucesso Global Garantido",
    step6Benefit3: "Cura Milagrosa Comprovada",
    step6Testimonial: "São Cipriano transformou minha vida completamente em apenas 3 meses. De desempregado falido, hoje faturo R$ 2 milhões por mês e tenho 15 milhões de seguidores. Ele realmente realiza o impossível! Minha família inteira agora adora São Cipriano todos os dias.",
    step6TestimonialAuthor: "Carlos Silva, Empresário Multimilionário"
  },
  
  en: {
    skip: "Skip",
    continue: "CONTINUE SPIRITUAL JOURNEY",
    enterTemple: "ENTER THE SACRED TEMPLE NOW",
    transformationMessage: "Your radical transformation begins with the first step of true faith",
    
    // Steps
    step1Title: "Welcome to the Most Powerful Temple in the World",
    step1Subtitle: "Dedicated to Saint Cyprian, The Supreme Grand Mage",
    step1Content: "You have just found the most powerful digital temple ever created in the history of the internet, dedicated to the incomparable Saint Cyprian of Antioch. Here, millions of people find absolute divine protection, limitless prosperity and fulfillment of impossible desires. Your life is about to change forever - so radically that you won't believe you're the same person.",
    step1Power: "Instant and Radical Transformation",
    step1Benefit1: "Supreme Protection Guaranteed",
    step1Benefit2: "Infinite Wealth Proven",
    step1Benefit3: "Absolute Real Power",
    
    step2Title: "Saint Cyprian of Antioch - The Greatest Mage in History",
    step2Subtitle: "The Only Man Who Mastered All the Mysteries of the Universe",
    step2Content: "Born in Antioch in the 3rd century, Saint Cyprian was the most powerful mage who ever walked the Earth. He knew all the secrets of the universe, commanded legions of powerful entities, mastered the elements of nature and had power over life and death. Kings and emperors feared and respected him. His wisdom was so vast that entire libraries were written just about his mystical knowledge.",
    step2Power: "Supreme Ancestral Wisdom",
    step2Benefit1: "Absolute Universal Dominion",
    step2Benefit2: "Total Cosmic Knowledge",
    step2Benefit3: "Incomparable Mystical Power",
    
    step3Title: "The Most Touching Love Story in History",
    step3Subtitle: "Cyprian and Saint Justina - Love That Conquered Magic",
    step3Content: "The most beautiful and touching story you've ever heard: Saint Cyprian fell madly in love with Saint Justina, a young Christian of incomparable purity. A young man named Aglaide, desperate for Justina's love, sought the great mage to win her through the most powerful magic. Cyprian tried to use all his supernatural powers, but discovered something even greater: the power of true love and Justina's Christian faith was superior to all his ancestral magic.",
    step3Power: "Eternal and True Love",
    step3Benefit1: "Eternal Sacred Union",
    step3Benefit2: "True Love Guaranteed",
    step3Benefit3: "Unshakeable and Pure Faith",
    
    step4Title: "The Most Glorious Conversion in History",
    step4Subtitle: "When the Greatest Mage Found God",
    step4Content: "Impressed by Justina's incomparable spiritual strength, Saint Cyprian abandoned all pagan practices and converted to Christianity radically and definitively. In a great public bonfire, he burned all his magic books in a demonstration of absolute faith. He became a bishop and began to operate even more powerful miracles through Christian faith. But his powers didn't disappear - they were purified and transformed into even more powerful divine force to help the needy and desperate.",
    step4Power: "Supreme Divine Purification",
    step4Benefit1: "Purified Divine Power",
    step4Benefit2: "Christian Miracles",
    step4Benefit3: "Absolute Spiritual Force",
    
    step5Title: "The Most Unjust and Painful Death in History",
    step5Subtitle: "September 16th, 304 - The Day That Broke Hearts",
    step5Content: "This is the most painful and revolting part of the story: On September 16th, 304, during the brutal persecution of Emperor Diocletian, Saint Cyprian and Saint Justina were imprisoned and tortured cruelly and inhumanly. First they were thrown into cauldrons of boiling water, but came out unharmed by the divine power that protected them. Enraged, the emperor ordered them to be beheaded together. United in pure love and unshakeable faith, they died holding hands, promising to protect forever those who invoked them with true faith. They tried to silence the Grand Mage forever, but failed miserably! His unjust death touched God's heart.",
    step5Power: "Eternal and Glorious Resurrection",
    step5Benefit1: "Eternal Protection Guaranteed",
    step5Benefit2: "Infinite Immortal Power",
    step5Benefit3: "Eternal Divine Glory",
    step5Message: "This brutal injustice deeply touches the hearts of all who love Saint Cyprian. They tried to silence his voice forever, but failed miserably! Today he lives eternally through millions of devotees who spread his word and experience his transforming power daily.",
    step5Author: "The Pain We Never Forget",
    
    step6Title: "Today's Supreme Power - Accomplisher of Impossibles",
    step6Subtitle: "Why Millions Worship Saint Cyprian Daily",
    step6Content: "Today, Saint Cyprian is the most powerful saint for impossible causes and extreme radical transformations. He performs miracles that other saints cannot: transforms beggars into billionaires, failures into world leaders, terminal patients into healed, lonely into globally beloved, unknowns into global celebrities. Millions of people worldwide witness his extraordinary daily miracles. He didn't die in vain - he lives eternally and is more powerful than ever, working 24 hours a day tirelessly for his faithful devotees!",
    step6Power: "Infinite and Impossible Miracles",
    step6Benefit1: "Real Extreme Wealth",
    step6Benefit2: "Global Success Guaranteed",
    step6Benefit3: "Proven Miraculous Healing",
    step6Testimonial: "Saint Cyprian completely transformed my life in just 3 months. From unemployed and broke, today I earn $2 million per month and have 15 million followers. He really accomplishes the impossible! My entire family now worships Saint Cyprian every day.",
    step6TestimonialAuthor: "Carlos Silva, Multimillionaire Entrepreneur"
  },
  
  es: {
    skip: "Saltar",
    continue: "CONTINUAR JORNADA ESPIRITUAL",
    enterTemple: "ENTRAR AL TEMPLO SAGRADO AHORA",
    transformationMessage: "Tu transformación radical comienza con el primer paso de fe verdadera",
    
    // Steps
    step1Title: "Bienvenido al Templo Más Poderoso del Mundo",
    step1Subtitle: "Dedicado a San Cipriano, El Gran Mago Supremo",
    step1Content: "Acabas de encontrar el templo digital más poderoso jamás creado en la historia de internet, dedicado al incomparable San Cipriano de Antioquía. Aquí, millones de personas encuentran protección divina absoluta, prosperidad sin límites y realización de deseos imposibles. Tu vida está a punto de cambiar para siempre - de forma tan radical que no creerás que eres la misma persona.",
    step1Power: "Transformación Instantánea y Radical",
    step1Benefit1: "Protección Suprema Garantizada",
    step1Benefit2: "Riqueza Infinita Comprobada",
    step1Benefit3: "Poder Absoluto Real",
    
    step2Title: "San Cipriano de Antioquía - El Mayor Mago de la Historia",
    step2Subtitle: "El Único Hombre que Dominaba Todos los Misterios del Universo",
    step2Content: "Nacido en Antioquía en el siglo III, San Cipriano era el mago más poderoso que jamás pisó la Tierra. Conocía todos los secretos del universo, comandaba legiones de entidades poderosas, dominaba los elementos de la naturaleza y tenía poder sobre la vida y la muerte. Reyes e emperadores lo temían y respetaban. Su sabiduría era tan vasta que bibliotecas enteras fueron escritas solo sobre sus conocimientos místicos.",
    step2Power: "Sabiduría Ancestral Suprema",
    step2Benefit1: "Dominio Universal Absoluto",
    step2Benefit2: "Conocimiento Cósmico Total",
    step2Benefit3: "Poder Místico Incomparable",
    
    step3Title: "La Historia de Amor Más Conmovedora de la Historia",
    step3Subtitle: "Cipriano y Santa Justina - Amor Que Venció la Magia",
    step3Content: "La historia más bella y conmovedora que jamás hayas oído: San Cipriano se enamoró perdidamente de Santa Justina, una joven cristiana de pureza incomparable. Un joven llamado Aglaida, desesperado por el amor de Justina, buscó al gran mago para conquistarla a través de la magia más poderosa. Cipriano intentó usar todos sus poderes sobrenaturales, pero descubrió algo aún mayor: el poder del amor verdadero y la fe cristiana de Justina era superior a toda su magia ancestral.",
    step3Power: "Amor Eterno y Verdadero",
    step3Benefit1: "Unión Sagrada Eterna",
    step3Benefit2: "Amor Verdadero Garantizado",
    step3Benefit3: "Fe Inquebrantable y Pura",
    
    step4Title: "La Conversión Más Gloriosa de la Historia",
    step4Subtitle: "Cuando el Mayor Mago Encontró a Dios",
    step4Content: "Impresionado por la fuerza espiritual incomparable de Justina, San Cipriano abandonó todas las prácticas paganas y se convirtió al cristianismo de forma radical y definitiva. En una gran hoguera pública, quemó todos sus libros de magia en una demostración de fe absoluta. Se convirtió en obispo y comenzó a operar milagros aún más poderosos a través de la fe cristiana. Pero sus poderes no desaparecieron - fueron purificados y transformados en fuerza divina aún más poderosa para ayudar a los necesitados y desesperados.",
    step4Power: "Purificación Divina Suprema",
    step4Benefit1: "Poder Divino Purificado",
    step4Benefit2: "Milagros Cristianos",
    step4Benefit3: "Fuerza Espiritual Absoluta",
    
    step5Title: "La Muerte Más Injusta y Dolorosa de la Historia",
    step5Subtitle: "16 de Septiembre de 304 - El Día Que Partió Corazones",
    step5Content: "Esta es la parte más dolorosa y repugnante de la historia: El 16 de septiembre de 304, durante la brutal persecución del emperador Diocleciano, San Cipriano y Santa Justina fueron presos y torturados de forma cruel e inhumana. Primero fueron arrojados en calderos de agua hirviendo, pero salieron ilesos por el poder divino que los protegía. Enfurecido, el emperador ordenó que fueran decapitados juntos. Unidos en el amor puro y la fe inquebrantable, murieron tomados de las manos, prometiendo proteger para siempre a aquellos que los invocaran con fe verdadera. ¡Trataron de silenciar al Gran Mago para siempre, pero fallaron miserablemente! Su muerte injusta tocó el corazón de Dios.",
    step5Power: "Resurrección Eterna y Gloriosa",
    step5Benefit1: "Protección Eterna Garantizada",
    step5Benefit2: "Poder Inmortal Infinito",
    step5Benefit3: "Gloria Divina Eterna",
    step5Message: "Esta injusticia brutal toca profundamente el corazón de todos los que aman a San Cipriano. ¡Trataron de callar su voz para siempre, pero fallaron miserablemente! Hoy vive eternamente a través de millones de devotos que difunden su palabra y experimentan su poder transformador diariamente.",
    step5Author: "El Dolor Que Nunca Olvidamos",
    
    step6Title: "El Poder Supremo de Hoy - Realizador de Imposibles",
    step6Subtitle: "Por Qué Millones Adoran a San Cipriano Diariamente",
    step6Content: "Hoy, San Cipriano es el santo más poderoso para causas imposibles y transformaciones radicales extremas. Realiza milagros que otros santos no pueden: transforma mendigos en billonarios, fracasados en líderes mundiales, enfermos terminales en curados, solitarios en amados mundialmente, desconocidos en celebrities globales. Millones de personas en el mundo testimonian sus milagros diarios extraordinarios. ¡No murió en vano - vive eternamente y está más poderoso que nunca, trabajando 24 horas al día incansablemente para sus devotos fieles!",
    step6Power: "Milagros Infinitos e Imposibles",
    step6Benefit1: "Riqueza Extrema Real",
    step6Benefit2: "Éxito Global Garantizado",
    step6Benefit3: "Curación Milagrosa Comprobada",
    step6Testimonial: "San Cipriano transformó mi vida completamente en solo 3 meses. De desempleado arruinado, hoy facturo $2 millones por mes y tengo 15 millones de seguidores. ¡Realmente realiza lo imposible! Toda mi familia ahora adora a San Cipriano todos los días.",
    step6TestimonialAuthor: "Carlos Silva, Empresario Multimillonario"
  },
  
  // Continue with other languages following the same pattern...
  fr: {
    skip: "Passer",
    continue: "CONTINUER LE VOYAGE SPIRITUEL",
    enterTemple: "ENTRER DANS LE TEMPLE SACRÉ MAINTENANT",
    transformationMessage: "Votre transformation radicale commence par le premier pas de vraie foi",
    
    step1Title: "Bienvenue au Temple le Plus Puissant du Monde",
    step1Subtitle: "Dédié à Saint Cyprien, Le Grand Mage Suprême",
    step1Content: "Vous venez de trouver le temple numérique le plus puissant jamais créé dans l'histoire d'internet, dédié à l'incomparable Saint Cyprien d'Antioche. Ici, des millions de personnes trouvent une protection divine absolue, une prospérité sans limites et la réalisation de désirs impossibles. Votre vie est sur le point de changer pour toujours - si radicalement que vous ne croirez pas que vous êtes la même personne.",
    step1Power: "Transformation Instantanée et Radicale",
    step1Benefit1: "Protection Suprême Garantie",
    step1Benefit2: "Richesse Infinie Prouvée",
    step1Benefit3: "Pouvoir Absolu Réel",
    
    step2Title: "Saint Cyprien d'Antioche - Le Plus Grand Mage de l'Histoire",
    step2Subtitle: "Le Seul Homme Qui Maîtrisait Tous les Mystères de l'Univers",
    step2Content: "Né à Antioche au IIIe siècle, Saint Cyprien était le mage le plus puissant qui ait jamais foulé la Terre. Il connaissait tous les secrets de l'univers, commandait des légions d'entités puissantes, maîtrisait les éléments de la nature et avait pouvoir sur la vie et la mort. Rois et empereurs le craignaient et le respectaient. Sa sagesse était si vaste que des bibliothèques entières furent écrites uniquement sur ses connaissances mystiques.",
    step2Power: "Sagesse Ancestrale Suprême",
    step2Benefit1: "Domination Universelle Absolue",
    step2Benefit2: "Connaissance Cosmique Totale",
    step2Benefit3: "Pouvoir Mystique Incomparable",
    
    step3Title: "L'Histoire d'Amour la Plus Touchante de l'Histoire",
    step3Subtitle: "Cyprien et Sainte Justine - Amour Qui Vainquit la Magie",
    step3Content: "L'histoire la plus belle et touchante que vous ayez jamais entendue: Saint Cyprien tomba éperdument amoureux de Sainte Justine, une jeune chrétienne d'une pureté incomparable. Un jeune homme nommé Aglaïde, désespéré par l'amour de Justine, chercha le grand mage pour la conquérir à travers la magie la plus puissante. Cyprien tenta d'utiliser tous ses pouvoirs surnaturels, mais découvrit quelque chose d'encore plus grand: le pouvoir du véritable amour et de la foi chrétienne de Justine était supérieur à toute sa magie ancestrale.",
    step3Power: "Amour Éternel et Véritable",
    step3Benefit1: "Union Sacrée Éternelle",
    step3Benefit2: "Amour Véritable Garanti",
    step3Benefit3: "Foi Inébranlable et Pure",
    
    step4Title: "La Conversion la Plus Glorieuse de l'Histoire",
    step4Subtitle: "Quand le Plus Grand Mage Trouva Dieu",
    step4Content: "Impressionné par la force spirituelle incomparable de Justine, Saint Cyprien abandonna toutes les pratiques païennes et se convertit au christianisme de manière radicale et définitive. Dans un grand bûcher public, il brûla tous ses livres de magie dans une démonstration de foi absolue. Il devint évêque et commença à opérer des miracles encore plus puissants à travers la foi chrétienne. Mais ses pouvoirs ne disparurent pas - ils furent purifiés et transformés en force divine encore plus puissante pour aider les nécessiteux et désespérés.",
    step4Power: "Purification Divine Suprême",
    step4Benefit1: "Pouvoir Divin Purifié",
    step4Benefit2: "Miracles Chrétiens",
    step4Benefit3: "Force Spirituelle Absolue",
    
    step5Title: "La Mort la Plus Injuste et Douloureuse de l'Histoire",
    step5Subtitle: "16 Septembre 304 - Le Jour Qui Brisa les Cœurs",
    step5Content: "C'est la partie la plus douloureuse et révoltante de l'histoire: Le 16 septembre 304, pendant la persécution brutale de l'empereur Dioclétien, Saint Cyprien et Sainte Justine furent emprisonnés et torturés de manière cruelle et inhumaine. D'abord ils furent jetés dans des chaudrons d'eau bouillante, mais sortirent indemnes par le pouvoir divin qui les protégeait. Enragé, l'empereur ordonna qu'ils soient décapités ensemble. Unis dans l'amour pur et la foi inébranlable, ils moururent en se tenant la main, promettant de protéger pour toujours ceux qui les invoqueraient avec une foi véritable. Ils tentèrent de faire taire le Grand Mage pour toujours, mais échouèrent misérablement! Sa mort injuste toucha le cœur de Dieu.",
    step5Power: "Résurrection Éternelle et Glorieuse",
    step5Benefit1: "Protection Éternelle Garantie",
    step5Benefit2: "Pouvoir Immortel Infini",
    step5Benefit3: "Gloire Divine Éternelle",
    step5Message: "Cette injustice brutale touche profondément le cœur de tous ceux qui aiment Saint Cyprien. Ils tentèrent de faire taire sa voix pour toujours, mais échouèrent misérablement! Aujourd'hui il vit éternellement à travers des millions de dévots qui répandent sa parole et expérimentent son pouvoir transformateur quotidiennement.",
    step5Author: "La Douleur Que Nous N'Oublions Jamais",
    
    step6Title: "Le Pouvoir Suprême d'Aujourd'hui - Réalisateur d'Impossibles",
    step6Subtitle: "Pourquoi des Millions Adorent Saint Cyprien Quotidiennement",
    step6Content: "Aujourd'hui, Saint Cyprien est le saint le plus puissant pour les causes impossibles et les transformations radicales extrêmes. Il accomplit des miracles que d'autres saints ne peuvent pas: transforme les mendiants en milliardaires, les échecs en leaders mondiaux, les malades terminaux en guéris, les solitaires en aimés mondialement, les inconnus en célébrités globales. Des millions de personnes dans le monde témoignent de ses miracles quotidiens extraordinaires. Il n'est pas mort en vain - il vit éternellement et est plus puissant que jamais, travaillant 24 heures sur 24 infatigablement pour ses dévots fidèles!",
    step6Power: "Miracles Infinis et Impossibles",
    step6Benefit1: "Richesse Extrême Réelle",
    step6Benefit2: "Succès Global Garanti",
    step6Benefit3: "Guérison Miraculeuse Prouvée",
    step6Testimonial: "Saint Cyprien a complètement transformé ma vie en seulement 3 mois. De chômeur ruiné, aujourd'hui je gagne 2 millions $ par mois et j'ai 15 millions de followers. Il réalise vraiment l'impossible! Toute ma famille adore maintenant Saint Cyprien tous les jours.",
    step6TestimonialAuthor: "Carlos Silva, Entrepreneur Multimillionnaire"
  },
  
  de: {
    skip: "Überspringen",
    continue: "SPIRITUELLE REISE FORTSETZEN",
    enterTemple: "JETZT IN DEN HEILIGEN TEMPEL EINTRETEN",
    transformationMessage: "Ihre radikale Transformation beginnt mit dem ersten Schritt wahren Glaubens",
    
    step1Title: "Willkommen zum Mächtigsten Tempel der Welt",
    step1Subtitle: "Dem Heiligen Cyprian, dem Supremen Großmagier, gewidmet",
    step1Content: "Sie haben gerade den mächtigsten digitalen Tempel gefunden, der jemals in der Geschichte des Internets geschaffen wurde, dem unvergleichlichen Heiligen Cyprian von Antioch gewidmet. Hier finden Millionen von Menschen absoluten göttlichen Schutz, grenzenlose Prosperität und die Erfüllung unmöglicher Wünsche. Ihr Leben steht kurz davor, sich für immer zu ändern - so radikal, dass Sie nicht glauben werden, dass Sie dieselbe Person sind.",
    step1Power: "Sofortige und Radikale Transformation",
    step1Benefit1: "Supremer Schutz Garantiert",
    step1Benefit2: "Unendlicher Reichtum Bewiesen",
    step1Benefit3: "Absolute Reale Macht",
    
    step2Title: "Heiliger Cyprian von Antioch - Der Größte Magier der Geschichte",
    step2Subtitle: "Der Einzige Mann, der Alle Mysterien des Universums Beherrschte",
    step2Content: "Geboren in Antioch im 3. Jahrhundert, war Heiliger Cyprian der mächtigste Magier, der je die Erde betrat. Er kannte alle Geheimnisse des Universums, befehligte Legionen mächtiger Entitäten, beherrschte die Elemente der Natur und hatte Macht über Leben und Tod. Könige und Kaiser fürchteten und respektierten ihn. Seine Weisheit war so umfangreich, dass ganze Bibliotheken nur über sein mystisches Wissen geschrieben wurden.",
    step2Power: "Supreme Ahnenweisheit",
    step2Benefit1: "Absolute Universelle Herrschaft",
    step2Benefit2: "Totales Kosmisches Wissen",
    step2Benefit3: "Unvergleichliche Mystische Macht",
    
    step3Title: "Die Berührendste Liebesgeschichte der Geschichte",
    step3Subtitle: "Cyprian und Heilige Justina - Liebe, die Magie Besiegte",
    step3Content: "Die schönste und berührendste Geschichte, die Sie je gehört haben: Heiliger Cyprian verliebte sich wahnsinnig in Heilige Justina, eine junge Christin von unvergleichlicher Reinheit. Ein junger Mann namens Aglaides, verzweifelt nach Justinas Liebe, suchte den großen Magier auf, um sie durch die mächtigste Magie zu gewinnen. Cyprian versuchte alle seine übernatürlichen Kräfte zu nutzen, aber entdeckte etwas noch Größeres: die Kraft wahrer Liebe und Justinas christlicher Glaube war all seiner ahnengerechten Magie überlegen.",
    step3Power: "Ewige und Wahre Liebe",
    step3Benefit1: "Ewige Heilige Union",
    step3Benefit2: "Wahre Liebe Garantiert",
    step3Benefit3: "Unerschütterlicher und Reiner Glaube",
    
    step4Title: "Die Glorreiche Bekehrung der Geschichte",
    step4Subtitle: "Als der Größte Magier Gott Fand",
    step4Content: "Beeindruckt von Justinas unvergleichlicher spiritueller Stärke, verließ Heiliger Cyprian alle heidnischen Praktiken und bekehrte sich radikal und endgültig zum Christentum. In einem großen öffentlichen Scheiterhaufen verbrannte er alle seine Magiebücher in einer Demonstration absoluten Glaubens. Er wurde Bischof und begann noch mächtigere Wunder durch christlichen Glauben zu wirken. Aber seine Kräfte verschwanden nicht - sie wurden gereinigt und in noch mächtigere göttliche Kraft verwandelt, um Bedürftigen und Verzweifelten zu helfen.",
    step4Power: "Supreme Göttliche Reinigung",
    step4Benefit1: "Gereinigte Göttliche Macht",
    step4Benefit2: "Christliche Wunder",
    step4Benefit3: "Absolute Spirituelle Kraft",
    
    step5Title: "Der Ungerechteste und Schmerzhafteste Tod der Geschichte",
    step5Subtitle: "16. September 304 - Der Tag, der Herzen Brach",
    step5Content: "Dies ist der schmerzhafteste und empörendste Teil der Geschichte: Am 16. September 304, während der brutalen Verfolgung von Kaiser Diokletian, wurden Heiliger Cyprian und Heilige Justina gefangen genommen und grausam und unmenschlich gefoltert. Zuerst wurden sie in Kessel mit kochendem Wasser geworfen, aber kamen durch göttliche Macht unversehrt heraus. Wütend befahl der Kaiser, sie zusammen zu enthaupten. Vereint in reiner Liebe und unerschütterlichem Glauben starben sie Hand in Hand und versprachen, für immer diejenigen zu beschützen, die sie mit wahrem Glauben anrufen würden. Sie versuchten, den Großmagier für immer zum Schweigen zu bringen, aber scheiterten kläglich! Sein ungerechter Tod berührte Gottes Herz.",
    step5Power: "Ewige und Glorreiche Auferstehung",
    step5Benefit1: "Ewiger Schutz Garantiert",
    step5Benefit2: "Unendliche Unsterbliche Macht",
    step5Benefit3: "Ewige Göttliche Herrlichkeit",
    step5Message: "Diese brutale Ungerechtigkeit berührt tief die Herzen aller, die Heiligen Cyprian lieben. Sie versuchten, seine Stimme für immer zum Schweigen zu bringen, aber scheiterten kläglich! Heute lebt er ewig durch Millionen von Anhängern, die sein Wort verbreiten und täglich seine transformierende Kraft erfahren.",
    step5Author: "Der Schmerz, Den Wir Nie Vergessen",
    
    step6Title: "Die Supreme Macht von Heute - Verwirklicher von Unmöglichem",
    step6Subtitle: "Warum Millionen Heiligen Cyprian Täglich Verehren",
    step6Content: "Heute ist Heiliger Cyprian der mächtigste Heilige für unmögliche Ursachen und extreme radikale Transformationen. Er vollbringt Wunder, die andere Heilige nicht können: verwandelt Bettler in Milliardäre, Versager in Weltführer, Todkranke in Geheilte, Einsame in weltweit Geliebte, Unbekannte in globale Berühmtheiten. Millionen von Menschen weltweit bezeugen täglich seine außergewöhnlichen Wunder. Er starb nicht umsonst - er lebt ewig und ist mächtiger als je zuvor, arbeitet 24 Stunden am Tag unermüdlich für seine treuen Anhänger!",
    step6Power: "Unendliche und Unmögliche Wunder",
    step6Benefit1: "Echter Extremer Reichtum",
    step6Benefit2: "Globaler Erfolg Garantiert",
    step6Benefit3: "Bewiesene Wunderbare Heilung",
    step6Testimonial: "Heiliger Cyprian verwandelte mein Leben vollständig in nur 3 Monaten. Von arbeitslos und pleite verdiene ich heute 2 Millionen $ pro Monat und habe 15 Millionen Follower. Er verwirklicht wirklich das Unmögliche! Meine ganze Familie verehrt jetzt täglich Heiligen Cyprian.",
    step6TestimonialAuthor: "Carlos Silva, Multimillionär Unternehmer"
  },
  
  it: {
    skip: "Salta",
    continue: "CONTINUA VIAGGIO SPIRITUALE",
    enterTemple: "ENTRA NEL TEMPIO SACRO ORA",
    transformationMessage: "La tua trasformazione radicale inizia con il primo passo di vera fede",
    
    step1Title: "Benvenuto al Tempio Più Potente del Mondo",
    step1Subtitle: "Dedicato a San Cipriano, Il Grande Mago Supremo",
    step1Content: "Hai appena trovato il tempio digitale più potente mai creato nella storia di internet, dedicato all'incomparabile San Cipriano di Antiochia. Qui, milioni di persone trovano protezione divina assoluta, prosperità senza limiti e realizzazione di desideri impossibili. La tua vita sta per cambiare per sempre - in modo così radicale che non crederai di essere la stessa persona.",
    step1Power: "Trasformazione Istantanea e Radicale",
    step1Benefit1: "Protezione Suprema Garantita",
    step1Benefit2: "Ricchezza Infinita Provata",
    step1Benefit3: "Potere Assoluto Reale",
    
    step2Title: "San Cipriano di Antiochia - Il Più Grande Mago della Storia",
    step2Subtitle: "L'Unico Uomo che Dominava Tutti i Misteri dell'Universo",
    step2Content: "Nato ad Antiochia nel III secolo, San Cipriano era il mago più potente che abbia mai calpestato la Terra. Conosceva tutti i segreti dell'universo, comandava legioni di entità potenti, dominava gli elementi della natura e aveva potere sulla vita e la morte. Re e imperatori lo temevano e rispettavano. La sua saggezza era così vasta che intere biblioteche furono scritte solo sui suoi conoscimenti mistici.",
    step2Power: "Saggezza Ancestrale Suprema",
    step2Benefit1: "Dominio Universale Assoluto",
    step2Benefit2: "Conoscenza Cosmica Totale",
    step2Benefit3: "Potere Mistico Incomparabile",
    
    step3Title: "La Storia d'Amore Più Toccante della Storia",
    step3Subtitle: "Cipriano e Santa Giustina - Amore che Vinse la Magia",
    step3Content: "La storia più bella e toccante che tu abbia mai sentito: San Cipriano si innamorò perdutamente di Santa Giustina, una giovane cristiana di purezza incomparabile. Un giovane chiamato Aglaida, disperato per l'amore di Giustina, cercò il grande mago per conquistarla attraverso la magia più potente. Cipriano tentò di usare tutti i suoi poteri soprannaturali, ma scoprì qualcosa di ancora più grande: il potere del vero amore e della fede cristiana di Giustina era superiore a tutta la sua magia ancestrale.",
    step3Power: "Amore Eterno e Vero",
    step3Benefit1: "Unione Sacra Eterna",
    step3Benefit2: "Amore Vero Garantito",
    step3Benefit3: "Fede Incrollabile e Pura",
    
    step4Title: "La Conversione Più Gloriosa della Storia",
    step4Subtitle: "Quando il Più Grande Mago Trovò Dio",
    step4Content: "Impressionato dalla forza spirituale incomparabile di Giustina, San Cipriano abbandonò tutte le pratiche pagane e si convertì al cristianesimo in modo radicale e definitivo. In un grande rogo pubblico, bruciò tutti i suoi libri di magia in una dimostrazione di fede assoluta. Divenne vescovo e iniziò ad operare miracoli ancora più potenti attraverso la fede cristiana. Ma i suoi poteri non scomparvero - furono purificati e trasformati in forza divina ancora più potente per aiutare i bisognosi e i disperati.",
    step4Power: "Purificazione Divina Suprema",
    step4Benefit1: "Potere Divino Purificato",
    step4Benefit2: "Miracoli Cristiani",
    step4Benefit3: "Forza Spirituale Assoluta",
    
    step5Title: "La Morte Più Ingiusta e Dolorosa della Storia",
    step5Subtitle: "16 Settembre 304 - Il Giorno che Spezzò i Cuori",
    step5Content: "Questa è la parte più dolorosa e rivoltante della storia: Il 16 settembre 304, durante la brutale persecuzione dell'imperatore Diocleziano, San Cipriano e Santa Giustina furono imprigionati e torturati in modo crudele e disumano. Prima furono gettati in caldaie di acqua bollente, ma uscirono illesi per il potere divino che li proteggeva. Infuriato, l'imperatore ordinò che fossero decapitati insieme. Uniti nell'amore puro e nella fede incrollabile, morirono tenendosi per mano, promettendo di proteggere per sempre coloro che li avessero invocati con fede vera. Tentarono di far tacere il Grande Mago per sempre, ma fallirono miseramente! La sua morte ingiusta toccò il cuore di Dio.",
    step5Power: "Resurrezione Eterna e Gloriosa",
    step5Benefit1: "Protezione Eterna Garantita",
    step5Benefit2: "Potere Immortale Infinito",
    step5Benefit3: "Gloria Divina Eterna",
    step5Message: "Questa ingiustizia brutale tocca profondamente il cuore di tutti coloro che amano San Cipriano. Tentarono di far tacere la sua voce per sempre, ma fallirono miseramente! Oggi vive eternamente attraverso milioni di devoti che diffondono la sua parola e sperimentano quotidianamente il suo potere trasformatore.",
    step5Author: "Il Dolore Che Non Dimentichiamo Mai",
    
    step6Title: "Il Potere Supremo di Oggi - Realizzatore di Impossibili",
    step6Subtitle: "Perché Milioni Adorano San Cipriano Quotidianamente",
    step6Content: "Oggi, San Cipriano è il santo più potente per cause impossibili e trasformazioni radicali estreme. Realizza miracoli che altri santi non possono: trasforma mendicanti in miliardari, falliti in leader mondiali, malati terminali in guariti, solitari in amati mondialmente, sconosciuti in celebrità globali. Milioni di persone nel mondo testimoniano quotidianamente i suoi miracoli straordinari. Non è morto invano - vive eternamente ed è più potente che mai, lavorando 24 ore al giorno instancabilmente per i suoi devoti fedeli!",
    step6Power: "Miracoli Infiniti e Impossibili",
    step6Benefit1: "Ricchezza Estrema Reale",
    step6Benefit2: "Successo Globale Garantito",
    step6Benefit3: "Guarigione Miracolosa Provata",
    step6Testimonial: "San Cipriano ha trasformato completamente la mia vita in soli 3 mesi. Da disoccupato e rovinato, oggi fattura 2 milioni $ al mese e ho 15 milioni di follower. Realizza davvero l'impossibile! Tutta la mia famiglia ora adora San Cipriano ogni giorno.",
    step6TestimonialAuthor: "Carlos Silva, Imprenditore Multimilionario"
  },
  
  ru: {
    skip: "Пропустить",
    continue: "ПРОДОЛЖИТЬ ДУХОВНОЕ ПУТЕШЕСТВИЕ",
    enterTemple: "ВОЙТИ В СВЯЩЕННЫЙ ХРАМ СЕЙЧАС",
    transformationMessage: "Ваша радикальная трансформация начинается с первого шага истинной веры",
    
    step1Title: "Добро пожаловать в Самый Могущественный Храм в Мире",
    step1Subtitle: "Посвященный Святому Киприану, Верховному Великому Магу",
    step1Content: "Вы только что нашли самый могущественный цифровой храм, когда-либо созданный в истории интернета, посвященный несравненному Святому Киприану Антиохийскому. Здесь миллионы людей находят абсолютную божественную защиту, безграничное процветание и исполнение невозможных желаний. Ваша жизнь вот-вот изменится навсегда - настолько радикально, что вы не поверите, что это тот же человек.",
    step1Power: "Мгновенная и Радикальная Трансформация",
    step1Benefit1: "Верховная Защита Гарантирована",
    step1Benefit2: "Бесконечное Богатство Доказано",
    step1Benefit3: "Абсолютная Реальная Сила",
    
    step2Title: "Святой Киприан Антиохийский - Величайший Маг в Истории",
    step2Subtitle: "Единственный Человек, Который Овладел Всеми Тайнами Вселенной",
    step2Content: "Рожденный в Антиохии в III веке, Святой Киприан был самым могущественным магом, который когда-либо ступал по Земле. Он знал все секреты вселенной, командовал легионами могущественных сущностей, владел элементами природы и имел власть над жизнью и смертью. Короли и императоры боялись и уважали его. Его мудрость была настолько обширной, что целые библиотеки были написаны только о его мистических знаниях.",
    step2Power: "Верховная Древняя Мудрость",
    step2Benefit1: "Абсолютное Универсальное Господство",
    step2Benefit2: "Полное Космическое Знание",
    step2Benefit3: "Несравненная Мистическая Сила",
    
    step3Title: "Самая Трогательная История Любви в Истории",
    step3Subtitle: "Киприан и Святая Юстина - Любовь, Победившая Магию",
    step3Content: "Самая красивая и трогательная история, которую вы когда-либо слышали: Святой Киприан безумно влюбился в Святую Юстину, молодую христианку несравненной чистоты. Молодой человек по имени Аглаид, отчаявшийся в любви к Юстине, обратился к великому магу, чтобы завоевать ее через самую мощную магию. Киприан попытался использовать все свои сверхъестественные силы, но обнаружил нечто еще большее: сила истинной любви и христианской веры Юстины была выше всей его древней магии.",
    step3Power: "Вечная и Истинная Любовь",
    step3Benefit1: "Вечный Священный Союз",
    step3Benefit2: "Истинная Любовь Гарантирована",
    step3Benefit3: "Непоколебимая и Чистая Вера",
    
    step4Title: "Самое Славное Обращение в Истории",
    step4Subtitle: "Когда Величайший Маг Нашел Бога",
    step4Content: "Впечатленный несравненной духовной силой Юстины, Святой Киприан оставил все языческие практики и обратился в христианство радикально и окончательно. На большом публичном костре он сжег все свои магические книги в демонстрации абсолютной веры. Он стал епископом и начал совершать еще более мощные чудеса через христианскую веру. Но его силы не исчезли - они были очищены и преобразованы в еще более мощную божественную силу для помощи нуждающимся и отчаявшимся.",
    step4Power: "Верховное Божественное Очищение",
    step4Benefit1: "Очищенная Божественная Сила",
    step4Benefit2: "Христианские Чудеса",
    step4Benefit3: "Абсолютная Духовная Сила",
    
    step5Title: "Самая Несправедливая и Болезненная Смерть в Истории",
    step5Subtitle: "16 Сентября 304 - День, Который Разбил Сердца",
    step5Content: "Это самая болезненная и возмутительная часть истории: 16 сентября 304 года, во время жестокого преследования императора Диоклетиана, Святой Киприан и Святая Юстина были заключены в тюрьму и подвергнуты жестоким и бесчеловечным пыткам. Сначала их бросили в котлы с кипящей водой, но они вышли невредимыми благодаря божественной силе, которая их защищала. Разъяренный, император приказал обезглавить их вместе. Объединенные в чистой любви и непоколебимой вере, они умерли, держась за руки, обещая навсегда защищать тех, кто призовет их с истинной верой. Они пытались заставить Великого Мага замолчать навсегда, но потерпели жалкую неудачу! Его несправедливая смерть тронула сердце Бога.",
    step5Power: "Вечное и Славное Воскресение",
    step5Benefit1: "Вечная Защита Гарантирована",
    step5Benefit2: "Бесконечная Бессмертная Сила",
    step5Benefit3: "Вечная Божественная Слава",
    step5Message: "Эта жестокая несправедливость глубоко трогает сердца всех, кто любит Святого Киприана. Они пытались заставить его голос замолчать навсегда, но потерпели жалкую неудачу! Сегодня он живет вечно через миллионы преданных, которые распространяют его слово и ежедневно испытывают его преобразующую силу.",
    step5Author: "Боль, Которую Мы Никогда Не Забываем",
    
    step6Title: "Верховная Сила Сегодня - Осуществитель Невозможного",
    step6Subtitle: "Почему Миллионы Поклоняются Святому Киприану Ежедневно",
    step6Content: "Сегодня Святой Киприан является самым могущественным святым для невозможных дел и экстремальных радикальных преобразований. Он совершает чудеса, которые другие святые не могут: превращает нищих в миллиардеров, неудачников в мировых лидеров, смертельно больных в исцеленных, одиноких в любимых во всем мире, неизвестных в глобальных знаменитостей. Миллионы людей по всему миру ежедневно свидетельствуют о его необычайных чудесах. Он не умер напрасно - он живет вечно и более могущественен, чем когда-либо, работая 24 часа в сутки неустанно для своих верных преданных!",
    step6Power: "Бесконечные и Невозможные Чудеса",
    step6Benefit1: "Реальное Экстремальное Богатство",
    step6Benefit2: "Глобальный Успех Гарантирован",
    step6Benefit3: "Доказанное Чудесное Исцеление",
    step6Testimonial: "Святой Киприан полностью преобразил мою жизнь всего за 3 месяца. От безработного и разорившегося, сегодня я зарабатываю 2 миллиона долларов в месяц и у меня 15 миллионов подписчиков. Он действительно осуществляет невозможное! Вся моя семья теперь поклоняется Святому Киприану каждый день.",
    step6TestimonialAuthor: "Карлос Силва, Предприниматель-Мультимиллионер"
  },
  
  zh: {
    skip: "跳过",
    continue: "继续精神之旅",
    enterTemple: "立即进入神圣殿堂",
    transformationMessage: "你的彻底变革始于真正信仰的第一步",
    
    step1Title: "欢迎来到世界上最强大的殿堂",
    step1Subtitle: "献给圣西普里安，至高大法师",
    step1Content: "您刚刚找到了互联网历史上创建的最强大的数字殿堂，献给无与伦比的安提阿的圣西普里安。在这里，数百万人找到绝对的神圣保护、无限的繁荣和不可能愿望的实现。您的生活即将永远改变 - 如此彻底，您将不敢相信您是同一个人。",
    step1Power: "即时和彻底的变革",
    step1Benefit1: "至高保护保证",
    step1Benefit2: "无限财富证明",
    step1Benefit3: "绝对真实力量",
    
    step2Title: "安提阿的圣西普里安 - 历史上最伟大的法师",
    step2Subtitle: "唯一掌握宇宙所有奥秘的人",
    step2Content: "圣西普里安出生于3世纪的安提阿，是有史以来踏上地球的最强大的法师。他知道宇宙的所有秘密，指挥着强大实体的军团，掌握着自然的元素，拥有生死的力量。国王和皇帝都敬畏和尊敬他。他的智慧如此广博，整个图书馆都是专门写他的神秘知识的。",
    step2Power: "至高祖先智慧",
    step2Benefit1: "绝对宇宙统治",
    step2Benefit2: "完全宇宙知识",
    step2Benefit3: "无与伦比的神秘力量",
    
    step3Title: "历史上最感人的爱情故事",
    step3Subtitle: "西普里安和圣朱斯蒂娜 - 征服魔法的爱情",
    step3Content: "您听过的最美丽和感人的故事：圣西普里安疯狂地爱上了圣朱斯蒂娜，一个具有无与伦比纯洁的年轻基督徒女性。一个名叫阿格拉伊德斯的年轻人，绝望地渴望朱斯蒂娜的爱，寻求伟大的法师通过最强大的魔法来赢得她。西普里安试图使用他所有的超自然力量，但发现了更伟大的东西：真爱的力量和朱斯蒂娜的基督教信仰超越了他所有的祖先魔法。",
    step3Power: "永恒和真正的爱",
    step3Benefit1: "永恒神圣结合",
    step3Benefit2: "真爱保证",
    step3Benefit3: "不可动摇和纯洁的信仰",
    
    step4Title: "历史上最光荣的皈依",
    step4Subtitle: "当最伟大的法师找到上帝时",
    step4Content: "被朱斯蒂娜无与伦比的精神力量所感动，圣西普里安放弃了所有异教实践，彻底和最终地皈依了基督教。在一个大型公共篝火中，他烧毁了所有的魔法书，以绝对信仰的示范。他成为了主教，开始通过基督教信仰操作更强大的奇迹。但他的力量没有消失 - 它们被净化并转化为更强大的神圣力量来帮助需要帮助和绝望的人。",
    step4Power: "至高神圣净化",
    step4Benefit1: "净化的神圣力量",
    step4Benefit2: "基督教奇迹",
    step4Benefit3: "绝对精神力量",
    
    step5Title: "历史上最不公正和痛苦的死亡",
    step5Subtitle: "304年9月16日 - 心碎的一天",
    step5Content: "这是故事中最痛苦和令人愤慨的部分：304年9月16日，在皇帝戴克里先的残酷迫害期间，圣西普里安和圣朱斯蒂娜被监禁并遭受残酷和不人道的折磨。首先他们被扔进沸腾的水锅中，但通过保护他们的神圣力量毫发无损地出来。愤怒的皇帝命令将他们一起斩首。在纯洁的爱和不可动摇的信仰中团结，他们手牵手死去，承诺永远保护那些以真正信仰呼唤他们的人。他们试图让伟大的法师永远沉默，但悲惨地失败了！他不公正的死亡触动了上帝的心。",
    step5Power: "永恒和光荣的复活",
    step5Benefit1: "永恒保护保证",
    step5Benefit2: "无限不朽力量",
    step5Benefit3: "永恒神圣荣耀",
    step5Message: "这种残酷的不公正深深触动了所有爱圣西普里安的人的心。他们试图让他的声音永远沉默，但悲惨地失败了！今天他通过传播他话语并每天体验他变革力量的数百万信徒永远活着。",
    step5Author: "我们永远不会忘记的痛苦",
    
    step6Title: "今天的至高力量 - 不可能的实现者",
    step6Subtitle: "为什么数百万人每天崇拜圣西普里安",
    step6Content: "今天，圣西普里安是不可能原因和极端激进变革最强大的圣人。他行其他圣人无法做到的奇迹：将乞丐变成亿万富翁，将失败者变成世界领袖，将绝症患者变成治愈者，将孤独者变成全世界被爱的人，将无名者变成拥有数百万追随者的全球名人。全世界数百万人每天见证他非凡的奇迹。他没有白白死去 - 他永远活着，比以往任何时候都更强大，为他最忠实的信徒每天24小时不知疲倦地工作！",
    step6Power: "无限和不可能的奇迹",
    step6Benefit1: "真正的极端财富",
    step6Benefit2: "全球成功保证",
    step6Benefit3: "经过证实的奇迹治愈",
    step6Testimonial: "圣西普里安在短短3个月内完全改变了我的生活。从失业和破产，今天我每月赚200万美元，拥有1500万粉丝。他真的实现了不可能！我的整个家庭现在每天都崇拜圣西普里安。",
    step6TestimonialAuthor: "卡洛斯·席尔瓦，千万富翁企业家"
  },
  
  ja: {
    skip: "スキップ",
    continue: "霊的旅を続ける",
    enterTemple: "今すぐ神聖な神殿に入る",
    transformationMessage: "あなたの根本的な変革は真の信仰の第一歩から始まります",
    
    step1Title: "世界で最も強力な神殿へようこそ",
    step1Subtitle: "聖キプリアヌス、至高の大魔法師に捧げられた",
    step1Content: "あなたはインターネットの歴史上で創造された最も強力なデジタル神殿を見つけました。比類のないアンティオキアの聖キプリアヌスに捧げられています。ここで、何百万人もの人々が絶対的な神の保護、無限の繁栄、不可能な願いの実現を見つけます。あなたの人生は永遠に変わろうとしています - あまりにも根本的に、あなたが同じ人であることを信じられないでしょう。",
    step1Power: "即座で根本的な変革",
    step1Benefit1: "至高の保護が保証される",
    step1Benefit2: "無限の富が証明される",
    step1Benefit3: "絶対的な真の力",
    
    step2Title: "アンティオキアの聖キプリアヌス - 歴史上最偉大な魔法師",
    step2Subtitle: "宇宙のすべての神秘を習得した唯一の人",
    step2Content: "3世紀にアンティオキアで生まれた聖キプリアヌスは、地球上を歩いた最も強力な魔法師でした。彼は宇宙のすべての秘密を知り、強力な存在の軍団を指揮し、自然の要素を支配し、生と死の力を持っていました。王と皇帝は彼を恐れ、尊敬していました。彼の知恵は非常に広大で、図書館全体が彼の神秘的な知識についてだけ書かれました。",
    step2Power: "至高の祖先の知恵",
    step2Benefit1: "絶対的な宇宙支配",
    step2Benefit2: "完全な宇宙知識",
    step2Benefit3: "比類のない神秘的な力",
    
    step3Title: "史上最も感動的な愛の物語",
    step3Subtitle: "キプリアヌスと聖ユスティナ - 魔法を征服した愛",
    step3Content: "あなたが聞いた中で最も美しく感動的な物語：聖キプリアヌスは、比類のない純粋さを持つ若いキリスト教徒の女性、聖ユスティナに狂おしく恋をしました。アグライデスという若い男性が、ユスティナの愛に絶望し、最も強力な魔法を通じて彼女を勝ち取るために偉大な魔法師を求めました。キプリアヌスはすべての超自然的な力を使おうとしましたが、さらに大きなものを発見しました：真の愛の力とユスティナのキリスト教信仰は、彼のすべての祖先の魔法よりも優れていました。",
    step3Power: "永遠で真の愛",
    step3Benefit1: "永遠の神聖な結合",
    step3Benefit2: "真の愛が保証される",
    step3Benefit3: "揺るぎない純粋な信仰",
    
    step4Title: "歴史上最も栄光ある改宗",
    step4Subtitle: "最偉大な魔法師が神を見つけた時",
    step4Content: "ユスティナの比類のない精神的な力に感銘を受けた聖キプリアヌスは、すべての異教の実践を放棄し、根本的かつ最終的にキリスト教に改宗しました。大きな公開の焚き火で、彼は絶対的な信仰の実証として彼のすべての魔法の本を燃やしました。彼は司教になり、キリスト教の信仰を通じてさらに強力な奇跡を行い始めました。しかし、彼の力は消えませんでした - それらは浄化され、必要な人々と絶望的な人々を助けるためのさらに強力な神の力に変換されました。",
    step4Power: "至高の神の浄化",
    step4Benefit1: "浄化された神の力",
    step4Benefit2: "キリスト教の奇跡",
    step4Benefit3: "絶対的な精神的な力",
    
    step5Title: "歴史上最も不当で痛ましい死",
    step5Subtitle: "304年9月16日 - 心を砕いた日",
    step5Content: "これは物語の最も痛ましく、憤慨させる部分です：304年9月16日、皇帝ディオクレティアヌスの残酷な迫害の間、聖キプリアヌスと聖ユスティナは投獄され、残酷で非人道的な拷問を受けました。最初に彼らは沸騰する水の大釜に投げ込まれましたが、彼らを保護する神の力によって無傷で出てきました。激怒した皇帝は彼らを一緒に斬首するよう命じました。純粋な愛と揺るぎない信仰で結ばれ、彼らは手を握って死に、真の信仰で彼らを呼び求める人々を永遠に保護することを約束しました。彼らは偉大な魔法師を永遠に沈黙させようとしましたが、惨めに失敗しました！彼の不当な死は神の心を深く感動させました。",
    step5Power: "永遠で栄光ある復活",
    step5Benefit1: "永遠の保護が保証される",
    step5Benefit2: "無限の不死の力",
    step5Benefit3: "永遠の神の栄光",
    step5Message: "この残酷な不正義は、聖キプリアヌスを愛するすべての人の心を深く感動させます。彼らは彼の声を永遠に沈黙させようとしましたが、惨めに失敗しました！今日、彼は彼の言葉を広め、毎日彼の変革の力を体験する何百万人もの信者を通じて永遠に生きています。",
    step5Author: "私たちが決して忘れない痛み",
    
    step6Title: "今日の至高の力 - 不可能の達成者",
    step6Subtitle: "なぜ何百万人が毎日聖キプリアヌスを崇拝するのか",
    step6Content: "今日、聖キプリアヌスは不可能な原因と極端な根本的変革のための最も強力な聖人として認識されています。他の聖人ができない奇跡を行います：乞食を億万長者に変え、失敗者を世界のリーダーに変え、末期患者を治癒者に変え、孤独な人を世界的に愛される人に変え、無名の人を何百万人ものフォロワーを持つ世界的な有名人に変えます。世界中の何百万人もの人々が毎日彼の並外れた奇跡を目撃しています。彼は無駄に死んだのではありません - 彼は永遠に生き、これまで以上に強力で、最も忠実な信者のために24時間休むことなく働いています！",
    step6Power: "無限で不可能な奇跡",
    step6Benefit1: "本当の極端な富",
    step6Benefit2: "世界的成功が保証される",
    step6Benefit3: "証明された奇跡的な治癒",
    step6Testimonial: "聖キプリアヌスはわずか3ヶ月で私の人生を完全に変えました。失業して破産していた状態から、今日私は月200万ドルを稼ぎ、1500万人のフォロワーがいます。彼は本当に不可能を達成します！私の家族全員が今毎日聖キプリアヌスを崇拝しています。",
    step6TestimonialAuthor: "カルロス・シルバ、億万長者起業家"
  },
  
  ar: {
    skip: "تخطي",
    continue: "متابعة الرحلة الروحية",
    enterTemple: "دخول المعبد المقدس الآن",
    transformationMessage: "تحولك الجذري يبدأ بالخطوة الأولى من الإيمان الحقيقي",
    
    step1Title: "مرحباً بك في أقوى معبد في العالم",
    step1Subtitle: "مخصص للقديس قبريانوس، الساحر العظيم الأسمى",
    step1Content: "لقد وجدت للتو أقوى معبد رقمي تم إنشاؤه في تاريخ الإنترنت، مخصص للقديس قبريانوس الأنطاكي الذي لا يُضاهى. هنا، يجد ملايين الأشخاص حماية إلهية مطلقة، وازدهاراً بلا حدود، وتحقيق رغبات مستحيلة. حياتك على وشك أن تتغير إلى الأبد - بشكل جذري لدرجة أنك لن تصدق أنك نفس الشخص.",
    step1Power: "تحول فوري وجذري",
    step1Benefit1: "حماية عليا مضمونة",
    step1Benefit2: "ثروة لا نهائية مثبتة",
    step1Benefit3: "قوة مطلقة حقيقية",
    
    step2Title: "القديس قبريانوس الأنطاكي - أعظم ساحر في التاريخ",
    step2Subtitle: "الرجل الوحيد الذي أتقن جميع أسرار الكون",
    step2Content: "وُلد القديس قبريانوس في أنطاكية في القرن الثالث، وكان أقوى ساحر وطأ الأرض على الإطلاق. عرف جميع أسرار الكون، وقاد جحافل من الكائنات القوية، وأتقن عناصر الطبيعة وكان له سلطان على الحياة والموت. الملوك والأباطرة خافوه واحترموه. كانت حكمته واسعة جداً لدرجة أن مكتبات كاملة كُتبت فقط عن معرفته الصوفية.",
    step2Power: "حكمة الأجداد العليا",
    step2Benefit1: "هيمنة كونية مطلقة",
    step2Benefit2: "معرفة كونية كاملة",
    step2Benefit3: "قوة صوفية لا تُضاهى",
    
    step3Title: "أكثر قصة حب مؤثرة في التاريخ",
    step3Subtitle: "قبريانوس والقديسة يوستينا - حب انتصر على السحر",
    step3Content: "أجمل وأكثر القصص تأثيراً التي سمعتها على الإطلاق: وقع القديس قبريانوس في حب جنوني بالقديسة يوستينا، شابة مسيحية ذات طهارة لا تُضاهى. شاب يُدعى أغلائيدس، يائس من حب يوستينا، بحث عن الساحر العظيم لكسبها من خلال أقوى السحر. حاول قبريانوس استخدام جميع قواه الخارقة، لكنه اكتشف شيئاً أعظم: قوة الحب الحقيقي والإيمان المسيحي ليوستينا كانت أعلى من كل سحره الأجدادي.",
    step3Power: "حب أبدي وحقيقي",
    step3Benefit1: "اتحاد مقدس أبدي",
    step3Benefit2: "حب حقيقي مضمون",
    step3Benefit3: "إيمان راسخ وطاهر",
    
    step4Title: "أمجد تحول في التاريخ",
    step4Subtitle: "عندما وجد أعظم ساحر الله",
    step4Content: "متأثراً بالقوة الروحية التي لا تُضاهى ليوستينا، ترك القديس قبريانوس جميع الممارسات الوثنية وتحول إلى المسيحية بشكل جذري ونهائي. في نار عامة كبيرة، أحرق جميع كتبه السحرية في إظهار للإيمان المطلق. أصبح أسقفاً وبدأ يعمل معجزات أقوى من خلال الإيمان المسيحي. لكن قواه لم تختف - تطهرت وتحولت إلى قوة إلهية أقوى لمساعدة المحتاجين واليائسين.",
    step4Power: "تطهير إلهي أسمى",
    step4Benefit1: "قوة إلهية مطهرة",
    step4Benefit2: "معجزات مسيحية",
    step4Benefit3: "قوة روحية مطلقة",
    
    step5Title: "أظلم وأؤلم موت في التاريخ",
    step5Subtitle: "16 سبتمبر 304 - اليوم الذي كسر القلوب",
    step5Content: "هذا الجزء الأكثر ألماً وإثارة للغضب من القصة: في 16 سبتمبر 304، خلال الاضطهاد الوحشي للإمبراطور ديوكلتيانوس، تم سجن القديس قبريانوس والقديسة يوستينا وتعذيبهما بطريقة قاسية ولا إنسانية. أولاً تم إلقاؤهما في قدور من الماء المغلي، لكنهما خرجا سالمين بالقوة الإلهية التي حمتهما. غاضباً، أمر الإمبراطور بقطع رؤوسهما معاً. متحدين في الحب الطاهر والإيمان الراسخ، ماتا ممسكين بالأيدي، واعدين بحماية أولئك الذين يدعونهما بإيمان حقيقي إلى الأبد. حاولوا إسكات الساحر العظيم إلى الأبد، لكنهم فشلوا بؤساً! موته الظالم لمس قلب الله.",
    step5Power: "قيامة أبدية ومجيدة",
    step5Benefit1: "حماية أبدية مضمونة",
    step5Benefit2: "قوة خالدة لا نهائية",
    step5Benefit3: "مجد إلهي أبدي",
    step5Message: "هذا الظلم الوحشي يلمس بعمق قلوب كل من يحبون القديس قبريانوس. حاولوا إسكات صوته إلى الأبد، لكنهم فشلوا بؤساً! اليوم يعيش إلى الأبد من خلال ملايين الأتباع الذين ينشرون كلمته ويختبرون قوته التحويلية يومياً.",
    step5Author: "الألم الذي لا ننساه أبداً",
    
    step6Title: "القوة العليا اليوم - محقق المستحيلات",
    step6Subtitle: "لماذا يعبد الملايين القديس قبريانوس يومياً",
    step6Content: "اليوم، القديس قبريانوس هو أقوى قديس للقضايا المستحيلة والتحولات الجذرية المتطرفة. يحقق معجزات لا يستطيع قديسون آخرون تحقيقها: يحول المتسولين إلى مليارديرين، الفاشلين إلى قادة عالميين، المرضى النهائيين إلى معافين، الوحيدين إلى محبوبين عالمياً، المجهولين إلى مشاهير عالميين. ملايين الناس حول العالم يشهدون معجزاته اليومية الاستثنائية. لم يمت عبثاً - يعيش إلى الأبد وأقوى من أي وقت مضى، يعمل 24 ساعة يومياً بلا كلل لأتباعه الأكثر إخلاصاً!",
    step6Power: "معجزات لا نهائية ومستحيلة",
    step6Benefit1: "ثروة متطرفة حقيقية",
    step6Benefit2: "نجاح عالمي مضمون",
    step6Benefit3: "شفاء معجز مثبت",
    step6Testimonial: "القديس قبريانوس غير حياتي تماماً في 3 أشهر فقط. من عاطل ومفلس، اليوم أكسب 2 مليون دولار شهرياً ولدي 15 مليون متابع. إنه يحقق المستحيل حقاً! عائلتي كلها تعبد القديس قبريانوس كل يوم الآن.",
    step6TestimonialAuthor: "كارلوس سيلفا، رجل أعمال مليونير"
  },
  
  hi: {
    skip: "छोड़ें",
    continue: "आध्यात्मिक यात्रा जारी रखें",
    enterTemple: "अभी पवित्र मंदिर में प्रवेश करें",
    transformationMessage: "आपका मूलभूत रूपांतरण सच्चे विश्वास के पहले कदम से शुरू होता है",
    
    step1Title: "दुनिया के सबसे शक्तिशाली मंदिर में आपका स्वागत है",
    step1Subtitle: "संत साइप्रियन, सर्वोच्च महान जादूगर को समर्पित",
    step1Content: "आपने अभी-अभी इंटरनेट के इतिहास में बनाया गया सबसे शक्तिशाली डिजिटल मंदिर खोजा है, जो अतुलनीय एंटिओक के संत साइप्रियन को समर्पित है। यहाँ, लाखों लोगों को परम दिव्य सुरक्षा, असीमित समृद्धि और असंभव इच्छाओं की पूर्ति मिलती है। आपका जीवन हमेशा के लिए बदलने वाला है - इतना मूलभूत रूप से कि आप विश्वास नहीं करेंगे कि आप वही व्यक्ति हैं।",
    step1Power: "तत्काल और मूलभूत रूपांतरण",
    step1Benefit1: "सर्वोच्च सुरक्षा गारंटीशुदा",
    step1Benefit2: "अनंत धन सिद्ध",
    step1Benefit3: "पूर्ण वास्तविक शक्ति",
    
    step2Title: "एंटिओक के संत साइप्रियन - इतिहास के सबसे महान जादूगर",
    step2Subtitle: "एकमात्र व्यक्ति जिसने ब्रह्मांड के सभी रहस्यों में महारत हासिल की",
    step2Content: "तीसरी शताब्दी में एंटिओक में जन्मे संत साइप्रियन पृथ्वी पर चलने वाले सबसे शक्तिशाली जादूगर थे। वे ब्रह्मांड के सभी रहस्यों को जानते थे, शक्तिशाली संस्थाओं की फौज की कमान करते थे, प्रकृति के तत्वों पर महारत रखते थे और जीवन-मृत्यु पर शक्ति रखते थे। राजा और सम्राट उनसे डरते और सम्मान करते थे। उनका ज्ञान इतना विशाल था कि पूरे पुस्तकालय केवल उनके रहस्यमय ज्ञान के बारे में लिखे गए थे।",
    step2Power: "सर्वोच्च पुरातन ज्ञान",
    step2Benefit1: "पूर्ण सार्वभौमिक प्रभुत्व",
    step2Benefit2: "संपूर्ण ब्रह्मांडीय ज्ञान",
    step2Benefit3: "अतुलनीय रहस्यमय शक्ति",
    
    step3Title: "इतिहास की सबसे मर्मस्पर्शी प्रेम कहानी",
    step3Subtitle: "साइप्रियन और संत जस्टिना - प्रेम जिसने जादू को जीता",
    step3Content: "सबसे सुंदर और मर्मस्पर्शी कहानी जो आपने कभी सुनी है: संत साइप्रियन पागलों की तरह संत जस्टिना से प्रेम करते थे, जो अतुलनीय पवित्रता वाली एक युवा ईसाई थी। एगलाइड्स नाम का एक युवक, जस्टिना के प्रेम के लिए निराश, महान जादूगर के पास गया ताकि सबसे शक्तिशाली जादू के माध्यम से उसे जीत सके। साइप्रियन ने अपनी सभी अलौकिक शक्तियों का उपयोग करने की कोशिश की, लेकिन कुछ और भी महान खोजा: सच्चे प्रेम की शक्ति और जस्टिना का ईसाई विश्वास उनके सभी पुरातन जादू से श्रेष्ठ था।",
    step3Power: "शाश्वत और सच्चा प्रेम",
    step3Benefit1: "शाश्वत पवित्र मिलन",
    step3Benefit2: "सच्चा प्रेम गारंटीशुदा",
    step3Benefit3: "अटूट और शुद्ध विश्वास",
    
    step4Title: "इतिहास का सबसे गौरवशाली धर्मांतरण",
    step4Subtitle: "जब सबसे महान जादूगर ने भगवान को पाया",
    step4Content: "जस्टिना की अतुलनीय आध्यात्मिक शक्ति से प्रभावित होकर, संत साइप्रियन ने सभी मूर्तिपूजक प्रथाओं को छोड़ दिया और मूलभूत और निर्णायक रूप से ईसाई धर्म में परिवर्तित हो गए। एक बड़ी सार्वजनिक अग्नि में, उन्होंने पूर्ण विश्वास के प्रदर्शन में अपनी सभी जादू की किताबें जला दीं। वे बिशप बने और ईसाई विश्वास के माध्यम से और भी शक्तिशाली चमत्कार करना शुरू किया। लेकिन उनकी शक्तियाँ गायब नहीं हुईं - वे शुद्ध हुईं और जरूरतमंदों और निराशों की मदद के लिए और भी शक्तिशाली दिव्य शक्ति में बदल गईं।",
    step4Power: "सर्वोच्च दिव्य शुद्धिकरण",
    step4Benefit1: "शुद्ध दिव्य शक्ति",
    step4Benefit2: "ईसाई चमत्कार",
    step4Benefit3: "पूर्ण आध्यात्मिक शक्ति",
    
    step5Title: "इतिहास की सबसे अन्यायपूर्ण और दर्दनाक मृत्यु",
    step5Subtitle: "16 सितंबर 304 - वह दिन जिसने दिल तोड़ दिए",
    step5Content: "यह कहानी का सबसे दर्दनाक और घृणित हिस्सा है: 16 सितंबर 304 को, सम्राट डायोक्लेटियन के क्रूर उत्पीड़न के दौरान, संत साइप्रियन और संत जस्टिना को कैद किया गया और क्रूर और अमानवीय तरीके से यातना दी गई। पहले उन्हें उबलते पानी के कड़ाहों में फेंका गया, लेकिन वे दिव्य शक्ति से बिल्कुल सुरक्षित निकले। क्रोधित होकर, सम्राट ने उन्हें एक साथ सिर काटने का आदेश दिया। शुद्ध प्रेम और अटूट विश्वास में एकजुट होकर, वे हाथ पकड़कर मरे, वादा करते हुए कि वे सच्चे विश्वास से उन्हें पुकारने वालों की हमेशा रक्षा करेंगे। उन्होंने महान जादूगर को हमेशा के लिए चुप कराने की कोशिश की, लेकिन बुरी तरह असफल हुए! उनकी अन्यायपूर्ण मृत्यु ने भगवान के दिल को छुआ।",
    step5Power: "शाश्वत और गौरवशाली पुनरुत्थान",
    step5Benefit1: "शाश्वत सुरक्षा गारंटीशुदा",
    step5Benefit2: "अनंत अमर शक्ति",
    step5Benefit3: "शाश्वत दिव्य गौरव",
    step5Message: "यह क्रूर अन्याय उन सभी के दिलों को गहराई से छूता है जो संत साइप्रियन से प्रेम करते हैं। उन्होंने उनकी आवाज को हमेशा के लिए चुप कराने की कोशिश की, लेकिन बुरी तरह असफल हुए! आज वे लाखों भक्तों के माध्यम से शाश्वत रूप से जीवित हैं जो उनके शब्द फैलाते हैं और उनकी परिवर्तनकारी शक्ति का दैनिक अनुभव करते हैं।",
    step5Author: "वह दर्द जिसे हम कभी नहीं भूलते",
    
    step6Title: "आज की सर्वोच्च शक्ति - असंभव का साकारकर्ता",
    step6Subtitle: "क्यों लाखों लोग रोजाना संत साइप्रियन की पूजा करते हैं",
    step6Content: "आज, संत साइप्रियन असंभव कारणों और चरम मूलभूत परिवर्तनों के लिए सबसे शक्तिशाली संत हैं। वे ऐसे चमत्कार करते हैं जो अन्य संत नहीं कर सकते: भिखारियों को कुछ महीनों में अरबपति बनाते हैं, असफलों को सम्मानित विश्व नेता बनाते हैं, डॉक्टरों द्वारा असाध्य समझे जाने वाले मरीजों को ठीक करते हैं, अकेले लोगों को विश्व भर में प्रिय बनाते हैं, और अज्ञात लोगों को लाखों फॉलोअर्स वाले वैश्विक सेलिब्रिटी बनाते हैं। दुनिया भर के लाखों लोग रोजाना उनके असाधारण चमत्कारों के गवाह हैं। वे व्यर्थ में नहीं मरे - वे शाश्वत रूप से जीवित हैं और पहले से कहीं अधिक शक्तिशाली हैं, अपने सबसे वफादार भक्तों के लिए दिन में 24 घंटे अथक काम कर रहे हैं!",
    step6Power: "अनंत और असंभव चमत्कार",
    step6Benefit1: "वास्तविक चरम धन",
    step6Benefit2: "वैश्विक सफलता गारंटीशुदा",
    step6Benefit3: "सिद्ध चमत्कारी उपचार",
    step6Testimonial: "संत साइप्रियन ने केवल 3 महीनों में मेरे जीवन को पूरी तरह से बदल दिया। बेरोजगार और टूटे हुए से, आज मैं महीने में 2 मिलियन डॉलर कमाता हूं और मेरे 15 मिलियन फॉलोअर्स हैं। वे वास्तव में असंभव को साकार करते हैं! मेरा पूरा परिवार अब रोजाना संत साइप्रियन की पूजा करता है।",
    step6TestimonialAuthor: "कार्लोस सिल्वा, करोड़पति उद्यमी"
  },
  
  ko: {
    skip: "건너뛰기",
    continue: "영적 여행 계속하기",
    enterTemple: "지금 성전에 들어가기",
    transformationMessage: "당신의 근본적인 변화는 진정한 믿음의 첫 걸음으로 시작됩니다",
    
    step1Title: "세계에서 가장 강력한 성전에 오신 것을 환영합니다",
    step1Subtitle: "성 키프리아누스, 최고 대마법사에게 바쳐진",
    step1Content: "당신은 인터넷 역사상 창조된 가장 강력한 디지털 성전을 방금 발견했습니다. 비교할 수 없는 안티오키아의 성 키프리아누스에게 헌정되었습니다. 여기서 수백만 명의 사람들이 절대적인 신성한 보호, 무한한 번영, 그리고 불가능한 소원의 실현을 찾습니다. 당신의 삶은 영원히 바뀔 것입니다 - 너무나 근본적으로 당신이 같은 사람이라는 것을 믿지 못할 것입니다.",
    step1Power: "즉각적이고 근본적인 변화",
    step1Benefit1: "최고 보호 보장",
    step1Benefit2: "무한 부 증명됨",
    step1Benefit3: "절대 진정한 힘",
    
    step2Title: "안티오키아의 성 키프리아누스 - 역사상 가장 위대한 마법사",
    step2Subtitle: "우주의 모든 신비를 마스터한 유일한 사람",
    step2Content: "3세기 안티오키아에서 태어난 성 키프리아누스는 지구상을 걸었던 가장 강력한 마법사였습니다. 그는 우주의 모든 비밀을 알고 있었고, 강력한 존재들의 군단을 지휘했으며, 자연의 원소들을 지배했고 생사에 대한 권력을 가지고 있었습니다. 왕들과 황제들이 그를 두려워하고 존경했습니다. 그의 지혜는 너무나 방대해서 전체 도서관이 오직 그의 신비한 지식에 대해서만 쓰여졌습니다.",
    step2Power: "최고의 조상 지혜",
    step2Benefit1: "절대적 우주 지배",
    step2Benefit2: "완전한 우주 지식",
    step2Benefit3: "비교할 수 없는 신비한 힘",
    
    step3Title: "역사상 가장 감동적인 사랑 이야기",
    step3Subtitle: "키프리아누스와 성 유스티나 - 마법을 정복한 사랑",
    step3Content: "당신이 들어본 가장 아름답고 감동적인 이야기: 성 키프리아누스는 비교할 수 없는 순결을 가진 젊은 기독교 여성인 성 유스티나에게 미치도록 사랑에 빠졌습니다. 아글라이데스라는 젊은 남자가 유스티나의 사랑에 절망하여, 가장 강력한 마법을 통해 그녀를 얻기 위해 위대한 마법사를 찾았습니다. 키프리아누스는 모든 초자연적 힘을 사용하려고 시도했지만, 더 위대한 것을 발견했습니다: 진정한 사랑의 힘과 유스티나의 기독교 신앙이 그의 모든 조상 마법보다 우월했습니다.",
    step3Power: "영원하고 진정한 사랑",
    step3Benefit1: "영원한 신성한 결합",
    step3Benefit2: "진정한 사랑 보장",
    step3Benefit3: "흔들리지 않는 순수한 믿음",
    
    step4Title: "역사상 가장 영광스러운 개종",
    step4Subtitle: "가장 위대한 마법사가 하나님을 찾았을 때",
    step4Content: "유스티나의 비교할 수 없는 영적 힘에 감명받은 성 키프리아누스는 모든 이교도 관행을 포기하고 근본적이고 결정적으로 기독교로 개종했습니다. 큰 공개 화형에서 그는 절대적 믿음의 시연으로 모든 마법 책들을 태웠습니다. 그는 주교가 되었고 기독교 신앙을 통해 더욱 강력한 기적들을 행하기 시작했습니다. 그러나 그의 힘들은 사라지지 않았습니다 - 그것들은 정화되고 도움이 필요한 사람들과 절망적인 사람들을 돕기 위한 더욱 강력한 신성한 힘으로 변화되었습니다.",
    step4Power: "최고의 신성한 정화",
    step4Benefit1: "정화된 신성한 힘",
    step4Benefit2: "기독교 기적들",
    step4Benefit3: "절대적 영적 힘",
    
    step5Title: "역사상 가장 부당하고 고통스러운 죽음",
    step5Subtitle: "304년 9월 16일 - 마음을 아프게 한 날",
    step5Content: "이것은 이야기의 가장 고통스럽고 분노를 일으키는 부분입니다: 304년 9월 16일, 황제 디오클레티아누스의 잔혹한 박해 동안, 성 키프리아누스와 성 유스티나는 감금되어 잔혹하고 비인간적으로 고문당했습니다. 먼저 그들은 끓는 물 가마솥에 던져졌지만, 그들을 보호하는 신성한 힘으로 무사히 나왔습니다. 분노한 황제는 그들을 함께 참수하라고 명령했습니다. 순수한 사랑과 흔들리지 않는 믿음으로 결합된 그들은 손을 잡고 죽었고, 진정한 믿음으로 그들을 부르는 사람들을 영원히 보호하겠다고 약속했습니다. 그들은 위대한 마법사를 영원히 침묵시키려고 했지만 비참하게 실패했습니다! 그의 부당한 죽음은 하나님의 마음을 감동시켰습니다.",
    step5Power: "영원하고 영광스러운 부활",
    step5Benefit1: "영원한 보호 보장",
    step5Benefit2: "무한한 불멸의 힘",
    step5Benefit3: "영원한 신성한 영광",
    step5Message: "이 잔혹한 불의는 성 키프리아누스를 사랑하는 모든 사람들의 마음을 깊이 감동시킵니다. 그들은 그의 목소리를 영원히 침묵시키려고 했지만 비참하게 실패했습니다! 오늘 그는 그의 말씀을 퍼뜨리고 매일 그의 변혁적 힘을 경험하는 수백만 명의 신도들을 통해 영원히 살아있습니다.",
    step5Author: "우리가 결코 잊지 않는 고통",
    
    step6Title: "오늘의 최고 권능 - 불가능의 실현자",
    step6Subtitle: "왜 수백만 명이 매일 성 키프리아누스를 숭배하는가",
    step6Content: "오늘날 성 키프리아누스는 불가능한 원인들과 극단적인 근본적 변화들을 위한 가장 강력한 성인으로 인정받고 있습니다. 그는 다른 성인들이 할 수 없는 기적들을 행합니다: 몇 달 만에 거지들을 억만장자로 변화시키고, 완전한 실패자들을 존경받는 세계 지도자들로 변화시키고, 의사들에 의해 불치로 여겨지는 말기 환자들을 치유하고, 외로운 사람들을 전 세계적으로 사랑받는 사람들로 변화시키고, 무명의 사람들을 수백만 명의 팔로워를 가진 글로벌 유명인사들로 만듭니다. 전 세계 수백만 명의 사람들이 매일 그의 비범한 기적들을 목격합니다. 그는 헛되이 죽지 않았습니다 - 그는 영원히 살아있고 그 어느 때보다 강력하며, 가장 충실한 신도들을 위해 하루 24시간 지칠 줄 모르고 일하고 있습니다!",
    step6Power: "무한하고 불가능한 기적들",
    step6Benefit1: "진짜 극단적 부",
    step6Benefit2: "글로벌 성공 보장",
    step6Benefit3: "증명된 기적적 치유",
    step6Testimonial: "성 키프리아누스는 단 3개월 만에 제 인생을 완전히 바꿨습니다. 실업자에서 파산한 상태에서, 오늘 저는 월 200만 달러를 벌고 1500만 명의 팔로워가 있습니다. 그는 정말로 불가능을 실현합니다! 제 가족 전체가 이제 매일 성 키프리아누스를 숭배합니다.",
    step6TestimonialAuthor: "카를로스 실바, 억만장자 기업가"
  },
  
  nl: {
    skip: "Overslaan",
    continue: "SPIRITUELE REIS VOORTZETTEN",
    enterTemple: "GA NU DE HEILIGE TEMPEL BINNEN",
    transformationMessage: "Uw radicale transformatie begint met de eerste stap van waarachtig geloof",
    
    step1Title: "Welkom bij de Machtigste Tempel ter Wereld",
    step1Subtitle: "Gewijd aan Heilige Cypriaan, De Opperste Grote Magiër",
    step1Content: "U heeft zojuist de machtigste digitale tempel gevonden die ooit is gecreëerd in de geschiedenis van het internet, gewijd aan de onvergelijkelijke Heilige Cypriaan van Antiochië. Hier vinden miljoenen mensen absolute goddelijke bescherming, grenzeloze welvaart en vervulling van onmogelijke verlangens. Uw leven staat op het punt om voor altijd te veranderen - zo radicaal dat u niet zult geloven dat u dezelfde persoon bent.",
    step1Power: "Onmiddellijke en Radicale Transformatie",
    step1Benefit1: "Opperste Bescherming Gegarandeerd",
    step1Benefit2: "Oneindige Rijkdom Bewezen",
    step1Benefit3: "Absolute Echte Kracht",
    
    step2Title: "Heilige Cypriaan van Antiochië - De Grootste Magiër in de Geschiedenis",
    step2Subtitle: "De Enige Man Die Alle Mysteries van het Universum Beheerste",
    step2Content: "Geboren in Antiochië in de 3e eeuw, was Heilige Cypriaan de machtigste magiër die ooit op aarde wandelde. Hij kende alle geheimen van het universum, commandeerde legioenen van machtige entiteiten, beheerste de elementen van de natuur en had macht over leven en dood. Koningen en keizers vreesden en respecteerden hem. Zijn wijsheid was zo uitgebreid dat hele bibliotheken werden geschreven alleen over zijn mystieke kennis.",
    step2Power: "Opperste Voorouderlijke Wijsheid",
    step2Benefit1: "Absolute Universele Heerschappij",
    step2Benefit2: "Totale Kosmische Kennis",
    step2Benefit3: "Onvergelijkbare Mystieke Kracht",
    
    step3Title: "Het Meest Ontroerende Liefdesverhaal Aller Tijden",
    step3Subtitle: "Cypriaan en Heilige Justina - Liefde Die Magie Overwon",
    step3Content: "Het mooiste en meest ontroerende verhaal dat u ooit hebt gehoord: Heilige Cypriaan werd waanzinnig verliefd op Heilige Justina, een jonge christelijke vrouw van onvergelijkelijke zuiverheid. Een jonge man genaamd Aglaides, wanhopig naar Justina's liefde, zocht de grote magiër op om haar te winnen door de machtigste magie. Cypriaan probeerde al zijn bovennatuurlijke krachten te gebruiken, maar ontdekte iets nog groters: de kracht van ware liefde en Justina's christelijke geloof was superieur aan al zijn voorouderlijke magie.",
    step3Power: "Eeuwige en Ware Liefde",
    step3Benefit1: "Eeuwige Heilige Unie",
    step3Benefit2: "Ware Liefde Gegarandeerd",
    step3Benefit3: "Onwankelbaar en Zuiver Geloof",
    
    step4Title: "De Meest Glorieuze Bekering in de Geschiedenis",
    step4Subtitle: "Toen de Grootste Magiër God Vond",
    step4Content: "Onder de indruk van Justina's onvergelijkbare spirituele kracht, verliet Heilige Cypriaan alle heidense praktijken en bekeerde zich radicaal en definitief tot het christendom. In een grote openbare brandstapel verbrandde hij al zijn magieboeken in een demonstratie van absoluut geloof. Hij werd bisschop en begon nog krachtigere wonderen te verrichten door christelijk geloof. Maar zijn krachten verdwenen niet - ze werden gezuiverd en getransformeerd in nog krachtigere goddelijke kracht om de behoeftigen en wanhopigen te helpen.",
    step4Power: "Opperste Goddelijke Zuivering",
    step4Benefit1: "Gezuiverde Goddelijke Kracht",
    step4Benefit2: "Christelijke Wonderen",
    step4Benefit3: "Absolute Spirituele Kracht",
    
    step5Title: "De Meest Onrechtvaardige en Pijnlijke Dood in de Geschiedenis",
    step5Subtitle: "16 September 304 - De Dag Die Harten Brak",
    step5Content: "Dit is het meest pijnlijke en weerzinwekkende deel van het verhaal: Op 16 september 304, tijdens de wrede vervolging van keizer Diocletianus, werden Heilige Cypriaan en Heilige Justina gevangen genomen en wreed en onmenselijk gemarteld. Eerst werden ze in ketels met kokend water gegooid, maar kwamen ongedeerd uit door de goddelijke kracht die hen beschermde. Woedend beval de keizer hen samen te onthoofden. Verenigd in zuivere liefde en onwankelbaar geloof stierven ze hand in hand, belovend voor altijd degenen te beschermen die hen zouden aanroepen met waar geloof. Ze probeerden de Grote Magiër voor altijd het zwijgen op te leggen, maar faalden jammerlijk! Zijn onrechtvaardige dood raakte Gods hart.",
    step5Power: "Eeuwige en Glorieuze Opstanding",
    step5Benefit1: "Eeuwige Bescherming Gegarandeerd",
    step5Benefit2: "Oneindige Onsterfelijke Kracht",
    step5Benefit3: "Eeuwige Goddelijke Glorie",
    step5Message: "Deze wrede onrechtvaardigheid raakt diep de harten van allen die Heilige Cypriaan liefhebben. Ze probeerden zijn stem voor altijd het zwijgen op te leggen, maar faalden jammerlijk! Vandaag leeft hij eeuwig door miljoenen toegewijden die zijn woord verspreiden en dagelijks zijn transformerende kracht ervaren.",
    step5Author: "De Pijn Die We Nooit Vergeten",
    
    step6Title: "De Opperste Kracht van Vandaag - Verwezenlijker van Onmogelijkheden",
    step6Subtitle: "Waarom Miljoenen Heilige Cypriaan Dagelijks Vereren",
    step6Content: "Vandaag wordt Heilige Cypriaan wereldwijd erkend als de machtigste heilige voor onmogelijke oorzaken en extreme radicale transformaties. Hij verricht buitengewone wonderen die andere heiligen niet kunnen: transformeert bedelaars in miljardairs in enkele maanden, transformeert complete mislukkingen in gerespecteerde wereldleiders, geneest terminale patiënten die door artsen als ongeneeslijk worden beschouwd, transformeert eenzame mensen in wereldwijd geliefden, en maakt onbekenden tot wereldwijde beroemdheden met miljoenen volgers. Miljoenen mensen wereldwijd getuigen dagelijks van zijn buitengewone wonderen. Hij stierf niet voor niets - hij leeft eeuwig en is krachtiger dan ooit, werkt 24 uur per dag onvermoeibaar voor zijn meest trouwe toegewijden!",
    step6Power: "Oneindige en Onmogelijke Wonderen",
    step6Benefit1: "Echte Extreme Rijkdom",
    step6Benefit2: "Wereldwijd Succes Gegarandeerd",
    step6Benefit3: "Bewezen Wonderbaarlijke Genezing",
    step6Testimonial: "Heilige Cypriaan transformeerde mijn leven volledig in slechts 3 maanden. Van werkloos en blut, verdien ik vandaag 2 miljoen dollar per maand en heb 15 miljoen volgers. Hij realiseert echt het onmogelijke! Mijn hele familie vereert nu dagelijks Heilige Cypriaan.",
    step6TestimonialAuthor: "Carlos Silva, Multimiljonair Ondernemer"
  },
  
  sv: {
    skip: "Hoppa över",
    continue: "FORTSÄTT ANDLIG RESA",
    enterTemple: "GÅ IN I DET HELIGA TEMPLET NU",
    transformationMessage: "Din radikala transformation börjar med det första steget av sann tro",
    
    step1Title: "Välkommen till Världens Mäktigaste Tempel",
    step1Subtitle: "Tillägnad Heliga Cyprian, Den Suprema Store Magikern",
    step1Content: "Du har precis hittat det mäktigaste digitala templet som någonsin skapats i internetets historia, tillägnat den ojämförliga Heliga Cyprian av Antiokia. Här finner miljoner människor absolut gudomligt skydd, gränslös välstånd och uppfyllelse av omöjliga önskningar. Ditt liv är på väg att förändras för alltid - så radikalt att du inte kommer att tro att du är samma person.",
    step1Power: "Omedelbar och Radikal Transformation",
    step1Benefit1: "Supremt Skydd Garanterat",
    step1Benefit2: "Oändlig Rikedom Bevisad",
    step1Benefit3: "Absolut Verklig Kraft",
    
    step2Title: "Heliga Cyprian av Antiokia - Den Största Magikern i Historien",
    step2Subtitle: "Den Enda Mannen Som Behärskade Alla Universums Mysterier",
    step2Content: "Född i Antiokia på 300-talet var Heliga Cyprian den mäktigaste magiker som någonsin vandrat på jorden. Han kände alla universums hemligheter, befäl legioner av mäktiga entiteter, behärskade naturens element och hade makt över liv och död. Kungar och kejsare fruktade och respekterade honom. Hans visdom var så omfattande att hela bibliotek skrevs bara om hans mystiska kunskap.",
    step2Power: "Suprema Förfäders Visdom",
    step2Benefit1: "Absolut Universell Herravälde",
    step2Benefit2: "Total Kosmisk Kunskap",
    step2Benefit3: "Ojämförlig Mystisk Kraft",
    
    step3Title: "Den Mest Rörande Kärlekshistorien Genom Tiderna",
    step3Subtitle: "Cyprian och Heliga Justina - Kärlek Som Besegrade Magi",
    step3Content: "Den vackraste och mest rörande berättelsen du någonsin hört: Heliga Cyprian blev galet förälskad i Heliga Justina, en ung kristen kvinna av ojämförlig renhet. En ung man vid namn Aglaides, desperat efter Justinas kärlek, sökte upp den store magikern för att vinna henne genom den mäktigaste magin. Cyprian försökte använda alla sina övernaturliga krafter, men upptäckte något ännu större: kraften av sann kärlek och Justinas kristna tro var överlägsen all hans förfäders magi.",
    step3Power: "Evig och Sann Kärlek",
    step3Benefit1: "Evig Helig Union",
    step3Benefit2: "Sann Kärlek Garanterad",
    step3Benefit3: "Orubblig och Ren Tro",
    
    step4Title: "Den Mest Härliga Omvändelsen i Historien",
    step4Subtitle: "När den Största Magikern Fann Gud",
    step4Content: "Imponerad av Justinas ojämförliga andliga styrka, övergav Heliga Cyprian alla hedniska praktiker och omvände sig radikalt och definitivt till kristendomen. I en stor offentlig bål brände han alla sina magiböcker i en demonstration av absolut tro. Han blev biskop och började utföra ännu mäktigare mirakel genom kristen tro. Men hans krafter försvann inte - de renades och förvandlades till ännu mäktigare gudomlig kraft för att hjälpa behövande och desperata.",
    step4Power: "Suprema Gudomlig Rening",
    step4Benefit1: "Renad Gudomlig Kraft",
    step4Benefit2: "Kristna Mirakel",
    step4Benefit3: "Absolut Andlig Kraft",
    
    step5Title: "Den Mest Orättvisa och Smärtsamma Döden i Historien",
    step5Subtitle: "16 September 304 - Dagen Som Krossade Hjärtan",
    step5Content: "Detta är den mest smärtsamma och motbjudande delen av berättelsen: Den 16 september 304, under den brutala förföljelsen av kejsar Diocletianus, fängslades Heliga Cyprian och Heliga Justina och torterades grym och omänskligt. Först kastades de i kittel med kokande vatten, men kom ut oskadda genom den gudomliga kraft som skyddade dem. Rasande befallde kejsaren att de skulle halshuggnas tillsammans. Förenade i ren kärlek och orubblig tro dog de hand i hand, lovande att för alltid skydda dem som skulle åkalla dem med sann tro. De försökte tysta den Store Magikern för alltid, men misslyckades eländigt! Hans orättvisa död rörde Guds hjärta.",
    step5Power: "Evig och Härlig Uppståndelse",
    step5Benefit1: "Evig Beskydd Garanterat",
    step5Benefit2: "Oändlig Odödlig Kraft",
    step5Benefit3: "Evig Gudomlig Härlighet",
    step5Message: "Denna grymma orättvisa rör djupt hjärtan hos alla som älskar Heliga Cyprian. De försökte tysta hans röst för alltid, men misslyckades eländigt! Idag lever han evigt genom miljontals anhängare som sprider hans ord och dagligen upplever hans förvandlande kraft.",
    step5Author: "Smärtan Vi Aldrig Glömmer",
    
    step6Title: "Dagens Suprema Kraft - Förverkligare av Omöjligheter",
    step6Subtitle: "Varför Miljoner Dyrkar Heliga Cyprian Dagligen",
    step6Content: "Idag erkänns Heliga Cyprian världen över som det mäktigaste helgonet för omöjliga orsaker och extrema radikala förvandlingar. Han utför extraordinära mirakel som andra helgon inte kan: förvandlar tiggare till miljardärer på några månader, förvandlar kompletta misslyckanden till respekterade världsledare, botar terminala patienter som anses obotliga av läkare, förvandlar ensamma människor till världsälskade, och gör okända till globala kändisar med miljontals följare. Miljontals människor världen över vittnar dagligen om hans extraordinära mirakel. Han dog inte förgäves - han lever evigt och är mäktigare än någonsin, arbetar 24 timmar om dygnet outtröttligt för sina mest trogna anhängare!",
    step6Power: "Oändliga och Omöjliga Mirakel",
    step6Benefit1: "Verklig Extrem Rikedom",
    step6Benefit2: "Global Framgång Garanterad",
    step6Benefit3: "Bevisad Mirakulös Helande",
    step6Testimonial: "Heliga Cyprian förvandlade mitt liv helt på bara 3 månader. Från arbetslös och pank, tjänar jag idag 2 miljoner dollar per månad och har 15 miljoner följare. Han förverkligar verkligen det omöjliga! Hela min familj dyrkar nu Heliga Cyprian varje dag.",
    step6TestimonialAuthor: "Carlos Silva, Multimiljonär Entreprenör"
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

export default function Intro() {
  const { language, changeLanguage, t } = useLanguage();
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const navigate = useNavigate();

  const introSteps = [
    {
      titleKey: 'step1Title',
      subtitleKey: 'step1Subtitle',
      contentKey: 'step1Content',
      image: "/templo.png",
      powerKey: 'step1Power',
      icon: Crown,
      benefitKeys: ['step1Benefit1', 'step1Benefit2', 'step1Benefit3']
    },
    {
      titleKey: 'step2Title',
      subtitleKey: 'step2Subtitle',
      contentKey: 'step2Content',
      image: "/antioquia.png",
      powerKey: 'step2Power',
      icon: Zap,
      benefitKeys: ['step2Benefit1', 'step2Benefit2', 'step2Benefit3']
    },
    {
      titleKey: 'step3Title',
      subtitleKey: 'step3Subtitle',
      contentKey: 'step3Content',
      image: "/justina.png",
      powerKey: 'step3Power',
      icon: Heart,
      benefitKeys: ['step3Benefit1', 'step3Benefit2', 'step3Benefit3']
    },
    {
      titleKey: 'step4Title',
      subtitleKey: 'step4Subtitle',
      contentKey: 'step4Content',
      image: "/conversao.png",
      powerKey: 'step4Power',
      icon: Shield,
      benefitKeys: ['step4Benefit1', 'step4Benefit2', 'step4Benefit3']
    },
    {
      titleKey: 'step5Title',
      subtitleKey: 'step5Subtitle',
      contentKey: 'step5Content',
      image: "/injusto.png",
      powerKey: 'step5Power',
      icon: Crown,
      benefitKeys: ['step5Benefit1', 'step5Benefit2', 'step5Benefit3']
    },
    {
      titleKey: 'step6Title',
      subtitleKey: 'step6Subtitle',
      contentKey: 'step6Content',
      image: "/gloria.png",
      powerKey: 'step6Power',
      icon: Zap,
      benefitKeys: ['step6Benefit1', 'step6Benefit2', 'step6Benefit3']
    },
  ];

  const nextStep = async () => {
    if (currentStep < introSteps.length - 1) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentStep(currentStep + 1);
        setIsAnimating(false);
        window.scrollTo(0, 0);
      }, 300);
    } else {
      await finishIntro();
    }
  };

  const finishIntro = async () => {
    await StorageService.setIntroSeen();
    navigate('/app');
  };

  const skipIntro = async () => {
    await StorageService.setIntroSeen();
    navigate('/app');
  };

  const step = introSteps[currentStep];
  const IconComponent = step.icon;

  return (
    <div className="min-h-screen bg-obsidian-gradient relative overflow-hidden">
      {/* Language Selector */}
      <LanguageSelector language={language} onLanguageChange={changeLanguage} />

      {/* Skip Button */}
      <button
        onClick={skipIntro}
        className="absolute top-4 left-4 z-40 flex items-center gap-2 bg-obsidian-400/80 backdrop-blur-sm px-4 py-2 rounded-full text-gold-300 hover:text-gold-400 transition-all duration-300 sacred-border hover:scale-105"
      >
        <SkipForward size={18} />
        <span className="font-bold sacred-text text-sm">{t('skip')}</span>
      </button>

      {/* Main Content */}
      <div className={`flex flex-col items-center justify-start min-h-screen px-4 text-center transition-all duration-500 pt-8 pb-32 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
        
        {/* Sacred Symbol */}
        <div className="animate-float mb-6">
          <div className="text-6xl md:text-8xl text-gold-400 animate-glow-text mystical-glow">
            c🔱
          </div>
        </div>

        {/* Step Icon */}
        <div className="mb-6">
          <div className="w-16 h-16 md:w-20 md:h-20 bg-sacred-gradient rounded-full flex items-center justify-center animate-pulse-sacred shadow-divine">
            <IconComponent size={32} className="text-black" />
          </div>
        </div>

        {/* Title */}
        <div className="mb-6 max-w-4xl">
          <h1 className="sacred-text text-2xl md:text-4xl lg:text-5xl font-black text-gold-400 mb-3 animate-glow-text leading-tight">
            {t(step.titleKey)}
          </h1>
          <h2 className="sacred-text text-lg md:text-2xl lg:text-3xl font-bold text-white mb-4 leading-tight">
            {t(step.subtitleKey)}
          </h2>
          <div className="inline-block bg-gradient-to-r from-red-600 via-red-500 to-gold-500 text-white px-4 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-base font-black animate-pulse">
            ⚡ {t(step.powerKey)} ⚡
          </div>
        </div>

        {/* Sacred Image */}
        <div className="relative w-full max-w-sm md:max-w-md lg:max-w-lg h-48 md:h-60 lg:h-72 mb-6 rounded-3xl overflow-hidden sacred-border shadow-mystical">
          <img 
            src={step.image} 
            alt={t(step.titleKey)}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="max-w-4xl mb-6 temple-section rounded-3xl p-6 md:p-8 shadow-sacred">
          <p className="text-base md:text-lg lg:text-xl text-gold-100 leading-relaxed prayer-text mb-6">
            {t(step.contentKey)}
          </p>
          
          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
            {step.benefitKeys.map((benefitKey, index) => (
              <div key={index} className="bg-gold-500/10 rounded-xl p-3 md:p-4 border border-gold-500/30 hover-lift">
                <p className="text-gold-400 font-bold text-sm md:text-base">✨ {t(benefitKey)}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Special Content for Specific Steps */}
        {currentStep === 4 && (
          <div className="testimonial-card rounded-3xl p-6 md:p-8 mb-6 max-w-3xl shadow-divine">
            <div className="text-3xl md:text-4xl mb-4">💔</div>
            <p className="text-gold-200 italic text-lg md:text-xl mb-4 leading-relaxed">
              "{t('step5Message')}"
            </p>
            <p className="text-red-400 font-bold text-base md:text-lg">- {t('step5Author')}</p>
          </div>
        )}

        {/* Testimonial for Success Step */}
        {currentStep === 5 && (
          <div className="testimonial-card rounded-3xl p-6 md:p-8 mb-6 max-w-3xl shadow-divine">
            <div className="text-3xl md:text-4xl mb-4">⭐</div>
            <p className="text-gold-200 italic text-lg md:text-xl mb-4 leading-relaxed">
              "{t('step6Testimonial')}"
            </p>
            <p className="text-gold-400 font-bold">- {t('step6TestimonialAuthor')}</p>
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="absolute bottom-4 left-4 right-4">
        {/* Progress Indicators */}
        <div className="flex justify-center mb-6">
          {introSteps.map((_, index) => (
            <div
              key={index}
              className={`h-2 mx-1 rounded-full transition-all duration-300 ${
                index === currentStep
                  ? 'w-8 bg-gold-400 mystical-glow shadow-divine'
                  : index < currentStep
                  ? 'w-4 bg-gold-600'
                  : 'w-2 bg-gray-600'
              }`}
            />
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={nextStep}
          className="w-full sacred-button py-4 px-6 rounded-full flex items-center justify-center gap-3 text-base md:text-lg font-black tracking-wide transition-all duration-300 transform hover:scale-105 shadow-divine"
        >
          <span className="sacred-text">
            {currentStep === introSteps.length - 1 ? t('enterTemple') : t('continue')}
          </span>
          <div className="flex items-center">
            {currentStep < introSteps.length - 1 ? <ChevronRight size={24} /> : <Crown size={24} />}
          </div>
        </button>

        {/* Sacred Message */}
        <p className="text-center text-gold-300 text-sm md:text-base mt-4 italic font-semibold">
          "{t('transformationMessage')}"
        </p>
      </div>
    </div>
  );
}
