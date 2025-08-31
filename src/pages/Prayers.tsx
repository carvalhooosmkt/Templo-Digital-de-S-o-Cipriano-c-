import { useState, useEffect } from 'react';
import { ArrowLeft, Play, Pause, CheckCircle, Crown, Heart, Shield, Star, Zap, Sparkles } from 'lucide-react';
import { StorageService } from '../utils/storage';

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

const prayers: Prayer[] = [
  {
    id: '1',
    title: 'Oração da Proteção Suprema',
    category: 'Proteção Divina Absoluta',
    purpose: 'Proteção total contra todas as adversidades, energias negativas e ataques espirituais',
    power: 98,
    benefits: ['Escudo espiritual impenetrável', 'Afasta toda inveja e olho gordo', 'Proteção familiar completa e eterna'],
    instructions: 'Recite com uma vela branca acesa, de manhã ou à noite, com total fé e devoção.',
    text: `Glorioso São Cipriano, grande mago e protetor supremo de todos os necessitados,

Invoco vosso poder infinito e ancestral para que me protejais de todos os males, visíveis e invisíveis, conhecidos e desconhecidos, presentes e futuros.

Com vossa força divina incomparável, afastai de mim toda energia negativa, toda inveja cruel, todo olhar mal intencionado, toda maldade direcionada contra mim e minha família.

Criai em torno de mim e de todos os meus entes queridos um escudo impenetrável de luz dourada divina, que nenhum mal possa atravessar jamais.

São Cipriano, dai-me força sobrenatural, coragem inabalável e sabedoria suprema para enfrentar todos os desafios da vida com dignidade e vitória.

Que vossa proteção poderosa me acompanhe sempre, em todos os momentos de minha vida, em todos os lugares que eu for, em todos os caminhos que eu seguir.

Fazei de mim um canal de vosso poder neste mundo, para que eu possa ajudar outros necessitados e espalhar vossa glória.

Que minha vida seja um testemunho vivo do vosso poder protetor infinito.

Assim seja, assim se faça, com o poder infinito e eterno de São Cipriano. Amém.

c🔱 PODER INFINITO c🔱`
  },
  {
    id: '2',
    title: 'Oração da Prosperidade Infinita',
    category: 'Riqueza e Abundância Extrema',
    purpose: 'Atração de riqueza extrema, abundância sem limites e oportunidades de ouro',
    power: 99,
    benefits: ['Riqueza multiplicada exponencialmente', 'Oportunidades de ouro surgem constantemente', 'Abundância em todas as áreas da vida'],
    instructions: 'Recite diariamente pela manhã com uma vela dourada, visualizando sua prosperidade.',
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

c🔱 RIQUEZA INFINITA c🔱 Assim seja para sempre! Amém.`
  },
  {
    id: '3',
    title: 'Oração do Poder Supremo',
    category: 'Poder Pessoal e Autoridade',
    purpose: 'Desenvolvimento de poder pessoal, autoridade absoluta e influência mundial',
    power: 100,
    benefits: ['Autoridade suprema sobre todas as situações', 'Influência mundial e reconhecimento', 'Poder de manifestação instantânea'],
    instructions: 'Recite em local reservado, com 7 velas douradas, concentrando-se em seu poder interior.',
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

c🔱 PODER SUPREMO c🔱 Assim seja para sempre e eternamente! Amém.`
  },
  {
    id: '4',
    title: 'Oração do Amor Verdadeiro',
    category: 'Amor e Relacionamentos Perfeitos',
    purpose: 'Atração do amor verdadeiro, relacionamentos perfeitos e união eterna',
    power: 95,
    benefits: ['Amor verdadeiro e duradouro', 'Relacionamento dos sonhos realizado', 'União sagrada e eterna'],
    instructions: 'Recite com duas velas vermelhas acesas, pensando na pessoa amada ou no amor que deseja.',
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

c🔱 AMOR ETERNO c🔱 Assim seja para sempre! Amém.`
  },
  {
    id: '5',
    title: 'Oração da Cura Milagrosa',
    category: 'Saúde Perfeita e Cura Divina',
    purpose: 'Cura completa de todas as doenças, saúde perfeita e vitalidade extrema',
    power: 97,
    benefits: ['Cura total e definitiva', 'Saúde radiante e perfeita', 'Vitalidade extrema e duradoura'],
    instructions: 'Recite com uma vela branca, tocando a parte do corpo que precisa de cura.',
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

c🔱 CURA DIVINA c🔱 Assim seja para sempre! Amém.`
  },
  {
    id: '6',
    title: 'Oração da Fama Mundial',
    category: 'Sucesso Global e Reconhecimento',
    purpose: 'Alcançar fama mundial, reconhecimento global e influência planetária',
    power: 96,
    benefits: ['Fama internacional garantida', 'Reconhecimento mundial em sua área', 'Influência global positiva'],
    instructions: 'Recite com 5 velas douradas em formato de estrela, visualizando seu sucesso mundial.',
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

c🔱 FAMA MUNDIAL c🔱 Assim seja para sempre! Amém.`
  }
];

export default function Prayers() {
  const [selectedPrayer, setSelectedPrayer] = useState<Prayer | null>(null);
  const [isReading, setIsReading] = useState(false);

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
                BENEFÍCIOS DESTA ORAÇÃO SAGRADA
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
                "Recite esta oração com fé absoluta e devoção sincera. São Cipriano ouve cada palavra 
                e trabalhará incansavelmente para realizar seus pedidos mais profundos."
              </p>
            </div>

            {/* Instructions */}
            <div className="temple-section rounded-3xl p-6 md:p-8 mb-6 shadow-sacred">
              <h4 className="text-gold-400 font-black text-lg mb-3 sacred-text">INSTRUÇÕES SAGRADAS:</h4>
              <p className="text-gold-200 text-base md:text-lg leading-relaxed mb-4">
                {selectedPrayer.instructions}
              </p>
              <p className="text-gold-300 italic text-base leading-relaxed">
                💡 Recite com fé absoluta e devoção sincera. São Cipriano ouve cada palavra 
                e trabalhará incansavelmente para realizar seus pedidos mais profundos.
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
                <span className="text-base md:text-lg">{isReading ? 'Pausar Oração' : 'Iniciar Oração'}</span>
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
            Mantenha as velas acesas durante toda a oração e concentre-se intensamente em seu pedido
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
              <span className="text-lg">CONCLUIR E AGRADECER</span>
            </button>
            
            <p className="text-center text-gold-300 text-sm md:text-base mt-6 italic">
              🌟 Sua oração foi ouvida! Aguarde os milagres de São Cipriano com fé absoluta 🌟
            </p>
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
          ORAÇÕES SAGRADAS SUPREMAS
        </h1>
        <p className="text-gold-200 tracking-wide text-lg md:text-xl">
          c🔱 PALAVRAS DE PODER INFINITO c🔱
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
          ORAÇÕES QUE TRANSFORMAM VIDAS RADICALMENTE
        </h2>
        <p className="text-gold-200 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
          Estas orações sagradas já realizaram milhões de milagres pelo mundo inteiro. 
          Escolha a sua e prepare-se para uma transformação extraordinária e definitiva!
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
                  Toque para recitar com poder supremo
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
            COMO RECITAR AS ORAÇÕES SAGRADAS
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="space-y-4">
              <h4 className="text-gold-400 font-black text-lg md:text-xl">PREPARAÇÃO SAGRADA:</h4>
              <ul className="text-gold-200 space-y-2 text-base md:text-lg">
                <li>• Acenda uma vela branca ou dourada com reverência</li>
                <li>• Encontre um local tranquilo e sagrado</li>
                <li>• Tenha uma imagem de São Cipriano por perto</li>
                <li>• Respire profundamente 7 vezes para purificar</li>
                <li>• Concentre-se completamente no seu pedido</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-gold-400 font-black text-lg md:text-xl">DURANTE A ORAÇÃO:</h4>
              <ul className="text-gold-200 space-y-2 text-base md:text-lg">
                <li>• Recite em voz alta com emoção verdadeira</li>
                <li>• Visualize intensamente seu pedido sendo atendido</li>
                <li>• Mantenha fé absoluta e inabalável</li>
                <li>• Agradeça como se já tivesse recebido o milagre</li>
                <li>• Sinta a presença poderosa de São Cipriano</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Sacred Promise */}
        <div className="mt-12 sacred-agreement-section rounded-3xl p-6 md:p-8 text-center shadow-mystical max-w-4xl mx-auto">
          <Crown className="text-gold-400 mx-auto mb-6" size={48} />
          <h3 className="sacred-text text-2xl md:text-3xl font-black text-gold-400 mb-6">
            PROMESSA SAGRADA ETERNA
          </h3>
          <p className="text-gold-200 text-lg md:text-xl leading-relaxed">
            "Aqueles que recitam estas orações com fé verdadeira e devoção sincera verão milagres 
            extraordinários e impossíveis acontecerem em suas vidas. São Cipriano nunca abandona 
            seus devotos fiéis e sempre recompensa aqueles que o honram com amor verdadeiro."
          </p>
        </div>
      </div>
    </div>
  );
}
