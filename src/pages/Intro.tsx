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
    step1Benefit3: "Pouvoir Absolu Réel"
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
    step1Benefit3: "Absolute Reale Macht"
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
    step1Benefit3: "Potere Assoluto Reale"
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
    step1Benefit3: "Абсолютная Реальная Сила"
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
    step1Benefit3: "绝对真实力量"
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
    step1Benefit3: "絶対的な真の力"
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
    step1Benefit3: "قوة مطلقة حقيقية"
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
    step1Benefit3: "पूर्ण वास्तविक शक्ति"
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
    step1Benefit3: "절대 진정한 힘"
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
    step1Benefit3: "Absolute Echte Kracht"
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
    step1Benefit3: "Absolut Verklig Kraft"
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
