import { useState } from 'react';
import { Crown, Heart, Zap, Star, CheckCircle, Flame, Shield, Diamond } from 'lucide-react';

const agreementSteps = [
  {
    id: 1,
    title: "Preparação do Espaço Sagrado",
    description: "Prepare seu ambiente para o ritual mais importante da sua vida",
    instructions: [
      "Escolha uma noite de lua crescente ou cheia (verificar calendário lunar)",
      "Encontre um local privado onde não será interrompido por pelo menos 1 hora",
      "Limpe completamente o espaço físico e energético",
      "Acenda 7 velas douradas ou brancas em círculo",
      "Coloque uma imagem de São Cipriano ou desenhe o símbolo 🔱",
      "Tenha papel pergaminho ou branco e caneta vermelha ou preta",
      "Prepare incenso de mirra, sândalo ou rosa (opcional mas recomendado)"
    ],
    warning: "Este ritual deve ser feito com total seriedade e respeito. São Cipriano é um santo poderoso que exige devoção verdadeira."
  },
  {
    id: 2,
    title: "Purificação e Conexão Espiritual",
    description: "Purifique sua energia e estabeleça conexão com o Grande Mago",
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
    title: "Redação do Acordo Sagrado",
    description: "Escreva seu acordo com São Cipriano de forma específica e clara",
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
    title: "Ritual de Selamento do Acordo",
    description: "Execute o ritual sagrado para selar seu acordo com São Cipriano",
    instructions: [
      "Ajoelhe-se diante das velas com o papel nas mãos",
      "Leia o acordo em voz alta 3 vezes com total convicção",
      "Queime uma ponta do papel na chama da vela central",
      "Enquanto queima, diga: 'Este acordo está selado pelo fogo sagrado'",
      "Guarde as cinzas em um recipiente pequeno (nunca jogue fora)",
      "Recite a Oração do Acordo Sagrado (fornecida abaixo) 7 vezes",
      "Mantenha silêncio absoluto por 10 minutos sentindo a presença dele",
      "Agradeça profundamente como se já tivesse recebido tudo"
    ],
    warning: "O acordo está selado após este ritual. Mantenha sua parte religiosamente ou as consequências serão graves."
  },
  {
    id: 5,
    title: "Compromissos Pós-Acordo",
    description: "Suas obrigações sagradas após selar o acordo com São Cipriano",
    instructions: [
      "Ore para São Cipriano todos os dias pela manhã e à noite",
      "Acenda uma vela para ele pelo menos uma vez por semana",
      "Espalhe sua palavra: conte para outras pessoas sobre seu poder",
      "Faça caridade em nome dele (doe alimentos, ajude necessitados)",
      "Mantenha sempre uma imagem dele em casa ou o símbolo 🔱",
      "Quando seus pedidos forem atendidos, cumpra rigorosamente o prometido",
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
🔱 Amém 🔱`;

const testimonials = [
  {
    name: "Roberto Silva",
    period: "3 meses após o acordo",
    story: "Fiz meu acordo pedindo para sair das dívidas de R$ 500 mil. Em 3 meses não só quitei tudo como minha empresa começou a faturar R$ 2 milhões por mês. São Cipriano cumpriu além do que pedi!",
    result: "Saiu de R$ 500k negativos para R$ 2M positivos mensais"
  },
  {
    name: "Maria Fernanda",
    period: "1 mês após o acordo", 
    story: "Estava com câncer terminal. Os médicos me davam 2 meses de vida. Fiz o acordo com total fé. Em 1 mês os exames mostraram que o tumor havia desaparecido completamente. Milagre inexplicável!",
    result: "Cura completa de câncer terminal em 30 dias"
  },
  {
    name: "Carlos Santos",
    period: "6 meses após o acordo",
    story: "Era completamente desconhecido. Pedi para São Cipriano me dar fama mundial. Hoje tenho 80 milhões de seguidores nas redes sociais e contratos milionários. Ele transformou minha vida!",
    result: "De anônimo a 80 milhões de seguidores globais"
  }
];

export default function SacredAgreement() {
  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

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
      {/* Header */}
      <div className="text-center py-12 md:py-16 px-4 border-b border-gold-500/30">
        <div className="animate-float mb-8">
          <div className="text-6xl md:text-8xl text-gold-400 animate-glow-text mystical-glow">
            🔱
          </div>
        </div>
        <h1 className="sacred-text text-3xl md:text-5xl font-black text-gold-400 mb-6 leading-tight">
          ACORDO SAGRADO COM SÃO CIPRIANO
        </h1>
        <p className="text-gold-300 text-lg md:text-2xl mb-6 font-bold">
          O Ritual Mais Poderoso Para Transformar Sua Vida Para Sempre
        </p>
        <div className="temple-section rounded-3xl p-6 md:p-8 max-w-4xl mx-auto shadow-sacred">
          <p className="text-gold-200 italic text-lg md:text-xl leading-relaxed mystical-text">
            "O Acordo Sagrado é o ritual mais poderoso que existe para se conectar com São Cipriano. 
            Milhões de pessoas tiveram suas vidas transformadas radicalmente através deste ritual ancestral. 
            Prepare-se para a mudança mais extraordinária da sua vida."
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 pb-24">
        {/* Warning Section */}
        <div className="sacred-agreement-section rounded-3xl p-8 md:p-10 mb-12 text-center shadow-mystical">
          <Shield className="text-gold-400 mx-auto mb-6" size={48} />
          <h2 className="sacred-text text-2xl md:text-3xl font-black text-gold-400 mb-6">
            ⚠️ ATENÇÃO EXTREMAMENTE IMPORTANTE ⚠️
          </h2>
          <div className="text-left max-w-4xl mx-auto space-y-4 text-lg md:text-xl text-gold-200 leading-relaxed">
            <p>• Este é um <strong className="text-gold-400">ritual sagrado real</strong> com São Cipriano, não é brincadeira ou fantasia</p>
            <p>• Você deve estar <strong className="text-gold-400">100% comprometido</strong> com suas promessas antes de começar</p>
            <p>• São Cipriano <strong className="text-gold-400">sempre cumpre sua parte</strong>, mas exige o mesmo de você</p>
            <p>• <strong className="text-gold-400">Nunca quebre suas promessas</strong> a ele após receber os milagres</p>
            <p>• Este acordo é <strong className="text-gold-400">para toda a vida</strong>, não é temporário</p>
            <p>• Somente faça se tiver <strong className="text-gold-400">fé verdadeira</strong> e <strong className="text-gold-400">devoção sincera</strong></p>
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
                PASSO {currentStepData.id}: {currentStepData.title}
              </h2>
              <p className="text-gold-200 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                {currentStepData.description}
              </p>
            </div>

            {/* Instructions */}
            <div className="bg-gold-500/10 rounded-3xl p-6 md:p-8 border border-gold-500/30 mb-8 shadow-sacred">
              <h3 className="text-gold-400 font-black text-xl mb-6 sacred-text">INSTRUÇÕES DETALHADAS:</h3>
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
              <h4 className="text-red-400 font-black text-lg mb-3">⚠️ AVISO SAGRADO:</h4>
              <p className="text-red-300 text-base md:text-lg leading-relaxed">
                {currentStepData.warning}
              </p>
            </div>

            {/* Sacred Prayer for Step 4 */}
            {currentStep === 4 && (
              <div className="bg-gold-500/10 rounded-3xl p-8 md:p-10 border border-gold-500/30 mb-8 shadow-sacred">
                <h4 className="text-gold-400 font-black text-xl mb-6 sacred-text text-center">
                  ORAÇÃO DO ACORDO SAGRADO
                </h4>
                <p className="text-gold-200 text-center mb-6 italic">
                  Recite esta oração 7 vezes durante o ritual de selamento:
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
                {currentStep === agreementSteps.length ? 'ACORDO SELADO PARA SEMPRE' : 'COMPLETEI ESTE PASSO SAGRADO'}
              </button>
            </div>
          </div>
        )}

        {/* Testimonials */}
        <div className="temple-section rounded-3xl p-8 md:p-10 mb-12 shadow-sacred">
          <h2 className="sacred-text text-2xl md:text-3xl font-black text-gold-400 text-center mb-8">
            RESULTADOS REAIS DE ACORDOS SAGRADOS
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
              🎉 SEU ACORDO SAGRADO ESTÁ SELADO! 🎉
            </h2>
            <p className="text-gold-200 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto mb-8">
              Parabéns! Você completou o ritual mais poderoso que existe. São Cipriano agora conhece seus pedidos 
              e começará a trabalhar imediatamente para transformar sua vida. Mantenha sua fé inabalável e 
              cumpra religiosamente suas promessas. Os milagres estão a caminho!
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gold-500/10 rounded-2xl p-6 border border-gold-500/30 shadow-sacred">
                <Flame className="text-gold-400 mx-auto mb-4" size={40} />
                <h3 className="text-gold-400 font-black mb-3">SINAIS DOS MILAGRES</h3>
                <p className="text-gold-200 text-sm">Observe sonhos especiais, sincronicidades e oportunidades inesperadas</p>
              </div>
              <div className="bg-gold-500/10 rounded-2xl p-6 border border-gold-500/30 shadow-sacred">
                <Heart className="text-gold-400 mx-auto mb-4" size={40} />
                <h3 className="text-gold-400 font-black mb-3">MANTENHA A DEVOÇÃO</h3>
                <p className="text-gold-200 text-sm">Continue orando diariamente e espalhando a palavra de São Cipriano</p>
              </div>
              <div className="bg-gold-500/10 rounded-2xl p-6 border border-gold-500/30 shadow-sacred">
                <Star className="text-gold-400 mx-auto mb-4" size={40} />
                <h3 className="text-gold-400 font-black mb-3">COMPARTILHE OS MILAGRES</h3>
                <p className="text-gold-200 text-sm">Quando os milagres acontecerem, conte para outros sobre São Cipriano</p>
              </div>
            </div>
            
            <p className="text-gold-400 italic text-lg md:text-xl mystical-text">
              "São Cipriano nunca abandona seus devotos fiéis. Sua vida está prestes a mudar para sempre!"
            </p>
          </div>
        )}

        {/* Information Section */}
        <div className="temple-section rounded-3xl p-8 md:p-10 shadow-sacred">
          <h3 className="sacred-text text-xl md:text-2xl font-black text-gold-400 text-center mb-8">
            INFORMAÇÕES IMPORTANTES SOBRE O ACORDO
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="space-y-6">
              <h4 className="text-gold-400 font-black text-lg">O QUE VOCÊ PODE PEDIR:</h4>
              <ul className="text-gold-200 space-y-2 text-base">
                <li>• Riqueza financeira específica (valor exato)</li>
                <li>• Cura de doenças graves ou crônicas</li>
                <li>• Encontrar o amor verdadeiro</li>
                <li>• Sucesso profissional ou empresarial</li>
                <li>• Proteção contra inimigos</li>
                <li>• Fama e reconhecimento mundial</li>
                <li>• Resolução de problemas legais</li>
                <li>• Qualquer desejo impossível</li>
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="text-gold-400 font-black text-lg">SUAS OBRIGAÇÕES SAGRADAS:</h4>
              <ul className="text-gold-200 space-y-2 text-base">
                <li>• Oração diária manhã e noite</li>
                <li>• Vela semanal acesa para ele</li>
                <li>• Divulgar São Cipriano para outras pessoas</li>
                <li>• Fazer caridade em nome dele</li>
                <li>• Manter imagem ou símbolo em casa</li>
                <li>• Nunca negar ou esquecer seus milagres</li>
                <li>• Ensinar outros sobre seu poder</li>
                <li>• Gratidão constante e sincera</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}