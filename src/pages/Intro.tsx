import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, SkipForward, Crown, Heart, Zap, Shield, ArrowDown } from 'lucide-react';
import { StorageService } from '../utils/storage';

const introSteps = [
  {
    title: "Bem-vindo ao Templo Mais Poderoso do Mundo",
    subtitle: "Dedicado a São Cipriano, O Grande Mago Supremo",
    content: "Você acabou de encontrar o templo digital mais poderoso já criado na história da internet, dedicado ao incomparável São Cipriano de Antioquia. Aqui, milhões de pessoas encontram proteção divina absoluta, prosperidade sem limites e realização de desejos impossíveis. Sua vida está prestes a mudar para sempre - de forma tão radical que você não vai acreditar que é a mesma pessoa.",
    image: "/templo.png",
    power: "Transformação Instantânea e Radical",
    icon: Crown,
    benefits: ["Proteção Suprema Garantida", "Riqueza Infinita Comprovada", "Poder Absoluto Real"]
  },
  {
    title: "São Cipriano de Antioquia - O Maior Mago da História",
    subtitle: "O Único Homem que Dominava Todos os Mistérios do Universo",
    content: "Nascido em Antioquia no século III, São Cipriano era o mago mais poderoso que já pisou na Terra. Ele conhecia todos os segredos do universo, comandava legiões de entidades poderosas, dominava os elementos da natureza e tinha poder sobre a vida e a morte. Reis e imperadores o temiam e respeitavam. Sua sabedoria era tão vasta que bibliotecas inteiras foram escritas apenas sobre seus conhecimentos místicos.",
    image: "/antioquia.png",
    power: "Sabedoria Ancestral Suprema",
    icon: Zap,
    benefits: ["Domínio Universal Absoluto", "Conhecimento Cósmico Total", "Poder Místico Incomparável"]
  },
  {
    title: "A História de Amor Mais Tocante da História",
    subtitle: "Cipriano e Santa Justina - Amor Que Venceu a Magia",
    content: "A história mais linda e tocante que você já ouviu: São Cipriano se apaixonou perdidamente por Santa Justina, uma jovem cristã de pureza incomparável. Um jovem chamado Aglaide, desesperado pelo amor de Justina, procurou o grande mago para conquistá-la através da magia mais poderosa. Cipriano tentou usar todos os seus poderes sobrenaturais, mas descobriu algo ainda maior: o poder do amor verdadeiro e da fé cristã de Justina era superior a toda sua magia ancestral.",
    image: "https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg",
    power: "Amor Eterno e Verdadeiro",
    icon: Heart,
    benefits: ["União Sagrada Eterna", "Amor Verdadeiro Garantido", "Fé Inabalável e Pura"]
  },
  {
    title: "A Conversão Mais Gloriosa da História",
    subtitle: "Quando o Maior Mago Encontrou Deus",
    content: "Impressionado com a força espiritual incomparável de Justina, São Cipriano abandonou todas as práticas pagãs e se converteu ao cristianismo de forma radical e definitiva. Em uma grande fogueira pública, queimou todos os seus livros de magia numa demonstração de fé absoluta. Tornou-se bispo e começou a operar milagres ainda mais poderosos através da fé cristã. Mas seus poderes não desapareceram - foram purificados e transformados em força divina ainda mais poderosa para ajudar os necessitados e desesperados.",
    image: "https://images.pexels.com/photos/9816335/pexels-photo-9816335.jpeg",
    power: "Purificação Divina Suprema",
    icon: Shield,
    benefits: ["Poder Divino Purificado", "Milagres Cristãos", "Força Espiritual Absoluta"]
  },
  {
    title: "A Morte Mais Injusta e Dolorosa da História",
    subtitle: "16 de Setembro de 304 - O Dia Que Partiu Corações",
    content: "Esta é a parte mais dolorosa e revoltante da história: Em 16 de setembro de 304, durante a brutal perseguição do imperador Diocleciano, São Cipriano e Santa Justina foram presos e torturados de forma cruel e desumana. Primeiro foram jogados em caldeirões de lava fervente, mas saíram ilesos pelo poder divino. Enfurecido, o imperador ordenou que fossem decapitados juntos. Unidos no amor puro e na fé inabalável, morreram de mãos dadas, prometendo proteger para sempre aqueles que os invocassem com fé verdadeira. Tentaram silenciar o Grande Mago para sempre, mas falharam miseravelmente! Sua morte injusta tocou o coração de Deus.",
    image: "https://images.pexels.com/photos/3584901/pexels-photo-3584901.jpeg",
    power: "Ressurreição Eterna e Gloriosa",
    icon: Crown,
    benefits: ["Proteção Eterna Garantida", "Poder Imortal Infinito", "Glória Divina Eterna"]
  },
  {
    title: "O Poder Supremo de Hoje - Realizador de Impossíveis",
    subtitle: "Por Que Milhões Adoram São Cipriano Diariamente",
    content: "Hoje, São Cipriano é o santo mais poderoso para causas impossíveis e transformações radicais extremas. Ele realiza milagres que outros santos não conseguem: transforma mendigos em bilionários, fracassados em líderes mundiais, doentes terminais em curados, solitários em amados mundialmente, desconhecidos em celebridades globais. Milhões de pessoas pelo mundo testemunham seus milagres diários extraordinários. Ele não morreu em vão - vive eternamente e está mais poderoso que nunca, trabalhando 24 horas por dia incansavelmente para seus devotos fiéis!",
    image: "https://images.pexels.com/photos/5702629/pexels-photo-5702629.jpeg",
    power: "Milagres Infinitos e Impossíveis",
    icon: Zap,
    benefits: ["Riqueza Extrema Real", "Sucesso Global Garantido", "Cura Milagrosa Comprovada"]
  },
];

export default function Intro() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const navigate = useNavigate();

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
      {/* Skip Button */}
      <button
        onClick={skipIntro}
        className="absolute top-4 right-4 z-50 flex items-center gap-2 bg-obsidian-400/80 backdrop-blur-sm px-4 py-2 rounded-full text-gold-300 hover:text-gold-400 transition-all duration-300 sacred-border hover:scale-105"
      >
        <SkipForward size={18} />
        <span className="font-bold sacred-text text-sm">Pular</span>
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
            {step.title}
          </h1>
          <h2 className="sacred-text text-lg md:text-2xl lg:text-3xl font-bold text-white mb-4 leading-tight">
            {step.subtitle}
          </h2>
          <div className="inline-block bg-gradient-to-r from-red-600 via-red-500 to-gold-500 text-white px-4 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-base font-black animate-pulse">
            ⚡ {step.power} ⚡
          </div>
        </div>

        {/* Sacred Image */}
        <div className="relative w-full max-w-sm md:max-w-md lg:max-w-lg h-48 md:h-60 lg:h-72 mb-6 rounded-3xl overflow-hidden sacred-border shadow-mystical">
          <img 
            src={step.image} 
            alt={step.title}
            className="w-full h-full object-cover"
          />
        
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex justify-center space-x-2">
             
            </div>
          </div>
        </div>



          

        {/* Content */}
        <div className="max-w-4xl mb-6 temple-section rounded-3xl p-6 md:p-8 shadow-sacred">
          <p className="text-base md:text-lg lg:text-xl text-gold-100 leading-relaxed prayer-text mb-6">
            {step.content}
          </p>
          
          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
            {step.benefits.map((benefit, index) => (
              <div key={index} className="bg-gold-500/10 rounded-xl p-3 md:p-4 border border-gold-500/30 hover-lift">
                <p className="text-gold-400 font-bold text-sm md:text-base">✨ {benefit}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Special Content for Specific Steps */}
        {currentStep === 4 && (
          <div className="testimonial-card rounded-3xl p-6 md:p-8 mb-6 max-w-3xl shadow-divine">
            <div className="text-3xl md:text-4xl mb-4">💔</div>
            <p className="text-gold-200 italic text-lg md:text-xl mb-4 leading-relaxed">
              "Esta injustiça brutal toca profundamente o coração de todos que amam São Cipriano. 
              Tentaram calar sua voz para sempre, mas falharam miseravelmente! Hoje ele vive eternamente através de 
              milhões de devotos que espalham sua palavra e experimentam seu poder transformador diariamente."
            </p>
            <p className="text-red-400 font-bold text-base md:text-lg">- A Dor Que Nunca Esquecemos</p>
          </div>
        )}

        {/* Testimonial for Success Step */}
        {currentStep === 5 && (
          <div className="testimonial-card rounded-3xl p-6 md:p-8 mb-6 max-w-3xl shadow-divine">
            <div className="text-3xl md:text-4xl mb-4">⭐</div>
            <p className="text-gold-200 italic text-lg md:text-xl mb-4 leading-relaxed">
              "São Cipriano transformou minha vida completamente em apenas 3 meses. De desempregado falido, 
              hoje faturo R$ 2 milhões por mês e tenho 15 milhões de seguidores. Ele realmente realiza o impossível! 
              Minha família inteira agora adora São Cipriano todos os dias."
            </p>
            <p className="text-gold-400 font-bold">- Carlos Silva, Empresário Multimilionário</p>
            <div className="flex justify-center space-x-1 mt-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-gold-400 text-xl">⭐</span>
              ))}
            </div>
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
            {currentStep === introSteps.length - 1 ? 'ENTRAR NO TEMPLO SAGRADO AGORA' : 'CONTINUAR JORNADA ESPIRITUAL'}
          </span>
          <div className="flex items-center">
            {currentStep < introSteps.length - 1 ? <ChevronRight size={24} /> : <Crown size={24} />}
          </div>
        </button>

        {/* Sacred Message */}
        <p className="text-center text-gold-300 text-sm md:text-base mt-4 italic font-semibold">
          "Sua transformação radical começa com o primeiro passo de fé verdadeira"
        </p>
      </div>
    </div>
  );
}
