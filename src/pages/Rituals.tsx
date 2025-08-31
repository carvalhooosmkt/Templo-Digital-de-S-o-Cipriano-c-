import { useState } from 'react';
import { ArrowLeft, Play, Pause, CheckCircle, Shield, Diamond, Zap, Heart, Crown, Star } from 'lucide-react';
import { StorageService } from '../utils/storage';

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

const rituals: Ritual[] = [
  {
    id: '1',
    name: 'Ritual de Proteção Suprema',
    description: 'Invoque a proteção mais poderosa de São Cipriano contra todas as energias negativas, inveja, olho gordo e adversidades. Crie um escudo impenetrável ao seu redor.',
    duration: '20 min',
    difficulty: 'Iniciante',
    icon: Shield,
    candles: 1,
    benefits: ['Proteção absoluta garantida', 'Afasta todas as energias negativas', 'Escudo espiritual permanente'],
    results: 'Proteção imediata e duradoura contra todos os males conhecidos e desconhecidos',
    fullRitual: {
      invocation: `Poderoso São Cipriano, Grande Mago Supremo,
      Invoco vosso poder infinito neste momento sagrado.
      Protegei-me de todos os males, visíveis e invisíveis.
      Criai um escudo dourado ao meu redor que nada possa atravessar.
      Assim seja, com vosso poder eterno. c🔱`,
      steps: [
        {
          title: "Preparação do Espaço Sagrado",
          instruction: "Prepare seu espaço ritual com uma vela branca e limpeza energética",
          action: "Acenda uma vela branca e purifique o ambiente com incenso ou água benta",
          details: "Este é o momento de criar um ambiente sagrado. Limpe fisicamente o espaço e mentalmente se prepare para a conexão divina."
        },
        {
          title: "Invocação do Grande Mago",
          instruction: "Recite a invocação sagrada com fé absoluta e devoção total",
          text: `Poderoso São Cipriano, Grande Mago Supremo,
Invoco vosso poder infinito neste momento sagrado.
Protegei-me de todos os males, visíveis e invisíveis.
Criai um escudo dourado ao meu redor que nada possa atravessar.
Assim seja, com vosso poder eterno. c🔱`,
          action: "Repita a invocação 3 vezes em voz alta com total convicção",
          details: "Fale com o coração aberto. São Cipriano ouve cada palavra e sente sua sinceridade."
        },
        {
          title: "Visualização do Escudo Protetor",
          instruction: "Visualize intensamente um escudo dourado se formando ao seu redor",
          action: "Imagine uma luz dourada envolvendo todo seu corpo como uma armadura divina",
          details: "A visualização é fundamental. Veja, sinta e acredite que a proteção está se formando neste momento."
        },
        {
          title: "Compromisso Sagrado de Devoção",
          instruction: "Comprometa-se com devoção diária e divulgação de São Cipriano",
          action: "Prometa orar diariamente e espalhar a palavra do Grande Mago",
          details: "Este compromisso fortalece sua conexão e mantém a proteção ativa permanentemente."
        },
        {
          title: "Agradecimento e Selamento",
          instruction: "Agradeça profundamente como se a proteção já estivesse completa",
          action: "Finalize com gratidão sincera e fé inabalável no poder recebido",
          details: "A gratidão sela o ritual e ativa imediatamente a proteção divina."
        }
      ]
    }
  },
  {
    id: '2',
    name: 'Ritual da Prosperidade Infinita',
    description: 'Abra todos os caminhos para riqueza extrema e abundância sem limites em sua vida. Transforme sua situação financeira radicalmente.',
    duration: '35 min',
    difficulty: 'Intermediário',
    icon: Diamond,
    candles: 3,
    benefits: ['Riqueza infinita garantida', 'Oportunidades de ouro constantes', 'Abundância em todas as áreas'],
    results: 'Transformação financeira radical e definitiva em poucos dias',
    fullRitual: {
      invocation: `São Cipriano, Senhor da Abundância Infinita,
      Abri todos os caminhos da prosperidade em minha vida.
      Multiplicai minha riqueza além de qualquer imaginação.
      Fazei de mim um ímã poderoso para o dinheiro e sucesso.
      Que a abundância flua constantemente em minha direção. c🔱`,
      steps: [
        {
          title: "Preparação do Altar da Abundância",
          instruction: "Monte um altar com 3 velas douradas e símbolos de prosperidade",
          action: "Acenda 3 velas douradas em triângulo e coloque moedas ou dinheiro no centro",
          details: "O altar representa sua intenção de prosperidade. Use objetos que simbolizem riqueza e abundância."
        },
        {
          title: "Invocação da Prosperidade",
          instruction: "Chame São Cipriano para abrir os caminhos da abundância",
          text: `São Cipriano, Senhor da Abundância Infinita,
Abri todos os caminhos da prosperidade em minha vida.
Multiplicai minha riqueza além de qualquer imaginação.
Fazei de mim um ímã poderoso para o dinheiro e sucesso.
Que a abundância flua constantemente em minha direção. c🔱`,
          action: "Recite com paixão e convicção, sentindo a energia da prosperidade",
          details: "Acredite completamente que São Cipriano está abrindo os caminhos para sua riqueza neste momento."
        },
        {
          title: "Pedido Específico de Prosperidade",
          instruction: "Faça pedidos específicos sobre sua situação financeira",
          action: "Detalhe exatamente quanto dinheiro deseja e como deseja receber",
          details: "Seja específico: 'Desejo ganhar R$ X por mês através de...' Quanto mais claro, melhor."
        },
        {
          title: "Visualização da Abundância",
          instruction: "Visualize-se vivendo na abundância total e extrema",
          action: "Imagine-se rico, próspero, com todo o dinheiro que sempre sonhou",
          details: "Sinta as emoções de já ser rico. Veja sua nova vida próspera em detalhes vívidos."
        },
        {
          title: "Compromisso de Reciprocidade",
          instruction: "Comprometa-se a honrar São Cipriano com sua prosperidade",
          action: "Prometa usar parte da riqueza para honrar o Grande Mago e ajudar outros",
          details: "A reciprocidade mantém o fluxo de abundância ativo e crescente constantemente."
        }
      ]
    }
  },
  {
    id: '3',
    name: 'Ritual do Poder Supremo',
    description: 'Canalize o poder máximo de São Cipriano para transformações extraordinárias e realização de desejos impossíveis.',
    duration: '50 min',
    difficulty: 'Avançado',
    icon: Zap,
    candles: 7,
    benefits: ['Poder absoluto sobre situações', 'Manifestação instantânea', 'Autoridade pessoal suprema'],
    results: 'Poder pessoal extremo e realização de desejos impossíveis',
    fullRitual: {
      invocation: `São Cipriano, Mestre Supremo de Todos os Poderes,
      Concedei-me uma porção de vosso poder infinito.
      Que minha vontade se manifeste instantaneamente.
      Fazei-me senhor absoluto do meu destino.
      Com vosso poder, nada me é impossível. c🔱`,
      steps: [
        {
          title: "Criação do Círculo de Poder",
          instruction: "Monte um círculo sagrado com 7 velas douradas",
          action: "Disponha 7 velas em círculo perfeito e posicione-se no centro",
          details: "O círculo de 7 velas canaliza o poder máximo. Cada vela representa um aspecto do poder supremo."
        },
        {
          title: "Invocação do Poder Supremo",
          instruction: "Invoque o poder máximo de São Cipriano com autoridade",
          text: `São Cipriano, Mestre Supremo de Todos os Poderes,
Concedei-me uma porção de vosso poder infinito.
Que minha vontade se manifeste instantaneamente.
Fazei-me senhor absoluto do meu destino.
Com vosso poder, nada me é impossível. c🔱`,
          action: "Recite com voz firme e autoridade, sentindo o poder crescer em você",
          details: "Este é o momento crucial. Sinta o poder de São Cipriano fluindo através de você."
        },
        {
          title: "Declaração de Poder Pessoal",
          instruction: "Declare com autoridade absoluta seus objetivos e desejos",
          action: "Fale em voz alta: 'Eu tenho o poder de...' e declare seus objetivos",
          details: "Use frases de poder: 'Eu comando', 'Eu decreto', 'Eu manifesto'. Sinta-se poderoso."
        },
        {
          title: "Canalização da Energia Suprema",
          instruction: "Visualize energia dourada entrando em seu corpo",
          action: "Sinta o poder de São Cipriano preenchendo cada célula do seu ser",
          details: "Esta energia transformará você permanentemente. Absorva-a completamente."
        },
        {
          title: "Selamento do Poder Recebido",
          instruction: "Sele o poder recebido com gratidão e compromisso",
          action: "Agradeça e prometa usar o poder para o bem e para glorificar São Cipriano",
          details: "O poder selado permanece ativo. Use-o sempre com sabedoria e responsabilidade."
        }
      ]
    }
  }
];

export default function Rituals() {
  const [selectedRitual, setSelectedRitual] = useState<Ritual | null>(null);
  const [isActive, setIsActive] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

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

  if (selectedRitual && isActive) {
    const currentStepData = selectedRitual.fullRitual.steps[currentStep];

    return (
      <div className="min-h-screen bg-obsidian-gradient">
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
            Mantenha as {selectedRitual.candles} vela(s) acesas durante todo o ritual sagrado
          </p>
        </div>

        {/* Step Content */}
        <div className="px-4 md:px-6 text-center mb-12">
          <p className="text-gold-300 mb-6 text-lg md:text-xl">
            Passo {currentStep + 1} de {selectedRitual.fullRitual.steps.length}
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
                <h4 className="text-gold-400 font-black text-lg mb-4 sacred-text">RECITE EM VOZ ALTA:</h4>
                <p className="text-white text-lg md:text-xl leading-relaxed whitespace-pre-line prayer-text">
                  {currentStepData.text}
                </p>
              </div>
            )}
            
            <div className="bg-gold-500/10 rounded-2xl p-4 md:p-6 border border-gold-500/30">
              <p className="text-gold-100 text-base md:text-lg leading-relaxed">
                💡 <strong>Orientação Importante:</strong> {currentStepData.details}
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
              {currentStep === selectedRitual.fullRitual.steps.length - 1 ? 'FINALIZAR RITUAL SAGRADO' : 'PRÓXIMO PASSO SAGRADO'}
            </button>
            
            {currentStep === selectedRitual.fullRitual.steps.length - 1 && (
              <p className="text-gold-300 text-center mt-6 italic text-lg">
                🌟 Seu ritual está completo! Os milagres de São Cipriano já começaram! 🌟
              </p>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-obsidian-gradient">
      {/* Header */}
      <div className="text-center py-8 md:py-12 border-b border-gold-500/30">
        <h1 className="text-3xl md:text-4xl font-black text-gold-400 tracking-wider mb-4 sacred-text animate-glow-text">
          RITUAIS SAGRADOS SUPREMOS
        </h1>
        <p className="text-gold-200 tracking-wide text-lg md:text-xl">
          c🔱 DESPERTE SEU PODER INFINITO c🔱
        </p>
      </div>

      {/* Sacred Symbol */}
      <div className="text-center py-12 md:py-16">
        <div className="text-6xl md:text-8xl text-gold-400 mb-6 animate-glow-text mystical-glow">
          c🔱
        </div>
        <p className="text-gold-200 tracking-wider text-xl md:text-2xl font-bold">
          CANALIZE O PODER SUPREMO
        </p>
      </div>

      {/* Conversion Message */}
      <div className="mx-4 md:mx-6 mb-12 conversion-section rounded-3xl p-6 md:p-8 text-center shadow-mystical">
        <h2 className="sacred-text text-2xl md:text-3xl font-black text-gold-400 mb-4">
          TRANSFORME SUA VIDA AGORA MESMO
        </h2>
        <p className="text-gold-200 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
          Estes rituais sagrados já transformaram milhões de vidas pelo mundo inteiro. 
          Escolha o seu e prepare-se para milagres extraordinários e impossíveis!
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
                          {ritual.difficulty}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gold-400/20 border border-gold-400 rounded-full px-4 py-2 flex-shrink-0">
                    <span className="text-gold-400 text-sm md:text-base font-black">
                      🕯️ {ritual.candles} vela(s)
                    </span>
                  </div>
                </div>
                
                <p className="text-gold-100 leading-relaxed mb-6 text-base md:text-lg">
                  {ritual.description}
                </p>

                {/* Benefits */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
                  {ritual.benefits.map((benefit, index) => (
                    <div key={index} className="bg-gold-500/10 rounded-xl p-3 text-center border border-gold-500/30">
                      <span className="text-gold-400 font-bold text-sm md:text-base">✨ {benefit}</span>
                    </div>
                  ))}
                </div>

                {/* Results */}
                <div className="bg-green-500/20 rounded-2xl p-4 md:p-6 mb-6 border border-green-500/30 shadow-sacred">
                  <p className="text-green-300 font-bold text-center text-base md:text-lg">
                    🎯 RESULTADO GARANTIDO: {ritual.results}
                  </p>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gold-200 italic text-sm md:text-base">
                    Toque para iniciar ritual sagrado
                  </span>
                  <div className="flex items-center gap-2 text-gold-400">
                    <span className="font-bold text-sm md:text-base">INICIAR</span>
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
            LEMBRE-SE DO SEU ACORDO SAGRADO
          </h3>
          <p className="text-gold-200 text-lg md:text-xl leading-relaxed mb-8 max-w-3xl mx-auto">
            Após cada ritual, mantenha sua devoção diária a São Cipriano e espalhe sua palavra sagrada. 
            Quanto mais você honrar o acordo, mais poderosos e rápidos serão os resultados extraordinários!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gold-500/10 rounded-xl p-4 border border-gold-500/30 shadow-sacred">
              <p className="text-gold-400 font-bold">🙏 Ore diariamente com devoção</p>
            </div>
            <div className="bg-gold-500/10 rounded-xl p-4 border border-gold-500/30 shadow-sacred">
              <p className="text-gold-400 font-bold">🕯️ Acenda velas sagradas</p>
            </div>
            <div className="bg-gold-500/10 rounded-xl p-4 border border-gold-500/30 shadow-sacred">
              <p className="text-gold-400 font-bold">📢 Divulgue São Cipriano</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
