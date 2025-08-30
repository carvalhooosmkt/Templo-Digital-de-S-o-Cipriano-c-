import { useState } from 'react';
import { ChevronDown, ChevronUp, ArrowRight, Heart, Crown, Flame, Shield, Zap, Star, Award, ArrowDown } from 'lucide-react';

const historySections = [
  {
    id: '1',
    title: 'O Nascimento do Maior Mago da História',
    content: 'São Cipriano nasceu em Antioquia no século III, em uma família nobre e extremamente poderosa. Desde os primeiros anos de vida, demonstrou habilidades extraordinárias para as artes místicas que deixavam todos absolutamente impressionados e até mesmo amedrontados. Aos 7 anos de idade já dominava conhecimentos ancestrais que levavam décadas para serem aprendidos pelos maiores sábios da época. Seus pais, reconhecendo seu dom divino sobrenatural e incomparável, o enviaram para estudar com os maiores mestres místicos de todo o império romano, investindo fortunas em sua educação mágica.',
    image: '/templo.png',
    symbol: '🌟',
    power: 'Sabedoria Ancestral Suprema'
  },
  {
    id: '2',
    title: 'O Domínio Universal de Todos os Poderes',
    content: 'Durante sua juventude e idade adulta, Cipriano estudou no Egito com os sumos sacerdotes, na Caldeia com os magos mais poderosos, e na Grécia com os maiores filósofos e sábios da antiguidade. Ele dominava perfeitamente a alquimia mais avançada, a astrologia cósmica, a comunicação direta com espíritos e entidades, e tinha poder absoluto sobre todos os elementos da natureza. Conhecia os segredos mais profundos e ocultos do universo inteiro e comandava legiões inteiras de entidades poderosas. Sua fama se espalhou por todo o império romano como o mago mais poderoso, temido e respeitado que já existiu na face da Terra.',
    image: '/antioquia.png',
    symbol: '🔮',
    power: 'Domínio Universal Absoluto'
  },
  {
    id: '3',
    title: 'A História de Amor Mais Tocante de Todos os Tempos',
    content: 'Esta é a parte mais linda e emocionante da história: um jovem chamado Aglaide estava perdidamente apaixonado por Santa Justina, uma jovem cristã de beleza incomparável e pureza absoluta. Desesperado e sem conseguir conquistá-la por meios normais, Aglaide procurou o Grande Mago São Cipriano, oferecendo fortunas para que ele usasse seus poderes sobrenaturais para fazer Justina se apaixonar por ele. São Cipriano, confiante em seus poderes absolutos, aceitou o desafio. Ele tentou usar todas as suas magias mais poderosas, invocou as entidades mais fortes, mas descobriu algo completamente inesperado: o poder do amor verdadeiro e da fé cristã pura de Justina era superior a toda sua magia ancestral.',
    image: '/justina.png',
    symbol: '💖',
    power: 'Amor Eterno e Verdadeiro'
  },
  {
    id: '4',
    title: 'A Conversão Mais Gloriosa e Transformadora',
    content: 'Completamente impressionado e tocado pela força espiritual incomparável de Santa Justina, São Cipriano experimentou a maior transformação de sua vida. Ele abandonou todas as práticas pagãs de forma radical e definitiva, convertendo-se ao cristianismo com todo seu coração e alma. Em uma grande fogueira pública, queimou todos os seus livros de magia numa demonstração poderosa de fé absoluta, renunciando para sempre ao seu passado místico. Tornou-se bispo cristão e começou a operar milagres ainda mais poderosos através da fé cristã. Mas seus poderes ancestrais não desapareceram - foram purificados e transformados em força divina ainda mais poderosa para ajudar os necessitados e desesperados. Ele e Justina se uniram espiritualmente em um amor eterno que transcendeu todas as barreiras.',
    image: '/conversao.png',
    symbol: '✨',
    power: 'Purificação Divina Suprema'
  },
  {
    id: '5',
    title: 'A Morte Mais Injusta e Dolorosa da História - 16 de Setembro de 304',
    content: 'Esta é a parte mais dolorosa, revoltante e de partir o coração: Em 16 de setembro de 304, durante a brutal e desumana perseguição do imperador tirano Diocleciano, São Cipriano e Santa Justina foram presos de forma violenta e torturados de maneira cruel e desumana. O imperador, furioso com os milagres que São Cipriano operava em nome de Deus e com sua influência crescente, decidiu fazer um exemplo terrível. Primeiro, mandou jogá-los em caldeirões de chumbo derretido fervente, mas eles saíram completamente ilesos pelo poder divino, sem nenhuma queimadura. Enfurecido e humilhado, o tirano ordenou que fossem decapitados publicamente de forma brutal. Unidos no amor puro e na fé inabalável, eles morreram de mãos dadas, prometendo proteger para sempre aqueles que os invocassem com fé verdadeira. Tentaram silenciar o Grande Mago para sempre, mas falharam miseravelmente! Sua morte injusta tocou profundamente o coração de Deus.',
    image: '/injusto.png',
    symbol: '👑',
    power: 'Ressurreição Eterna e Gloriosa'
  },
  {
    id: '6',
    title: 'O Poder Supremo de Hoje - Realizador de Impossíveis',
    content: 'Hoje, mais de 1.700 anos depois, São Cipriano é reconhecido mundialmente como o santo mais poderoso para causas impossíveis e transformações radicais extremas. Ele realiza milagres extraordinários que outros santos não conseguem realizar: transforma mendigos em bilionários em poucos meses, transforma fracassados completos em líderes mundiais respeitados, cura doentes terminais considerados incuráveis pelos médicos, transforma pessoas solitárias em amadas mundialmente, e torna desconhecidos em celebridades globais com milhões de seguidores. Milhões de pessoas pelo mundo inteiro testemunham diariamente seus milagres extraordinários e impossíveis. Ele não morreu em vão - vive eternamente e está mais poderoso que nunca, trabalhando 24 horas por dia incansavelmente para seus devotos mais fiéis!',
    image: '/gloria.png',
    symbol: '⚡',
    power: 'Milagres Infinitos e Impossíveis'
  },
];

const powers = [
  { icon: '🛡️', name: 'Proteção Absoluta Total', desc: 'Contra todos os males visíveis, invisíveis e futuros' },
  { icon: '💰', name: 'Prosperidade Infinita', desc: 'Riqueza sem limites e abundância extrema constante' },
  { icon: '⚡', name: 'Poder Sobrenatural', desc: 'Realização de desejos considerados impossíveis' },
  { icon: '💖', name: 'Amor Verdadeiro Eterno', desc: 'Relacionamentos perfeitos e duradouros' },
  { icon: '🏆', name: 'Sucesso Mundial Garantido', desc: 'Em todos os aspectos da vida humana' },
  { icon: '🔥', name: 'Transformação Radical', desc: 'Mudança completa de realidade em semanas' },
  { icon: '🌟', name: 'Fama Mundial', desc: 'Reconhecimento e influência global comprovada' },
  { icon: '🎯', name: 'Objetivos Realizados', desc: 'Todos os sonhos se tornam realidade física' },
  { icon: '🏥', name: 'Cura Milagrosa', desc: 'Saúde perfeita e cura de doenças terminais' },
  { icon: '🎓', name: 'Sabedoria Suprema', desc: 'Conhecimento e inteligência elevada' },
  { icon: '🏠', name: 'Lar Abençoado', desc: 'Família unida, próspera e protegida' },
  { icon: '⚖️', name: 'Justiça Divina', desc: 'Resolução favorável de problemas legais' }
];

const testimonials = [
  {
    name: "Maria Santos",
    location: "São Paulo, Brasil",
    story: "Estava desempregada há 3 anos, devendo R$ 80 mil e prestes a perder minha casa. Descobri este templo sagrado, fiz meu Acordo com São Cipriano e em apenas 4 meses não só quitei todas as dívidas como abri minha própria empresa que hoje fatura R$ 2 milhões por mês! Emprego mais de 100 pessoas e minha família inteira agora adora São Cipriano diariamente!",
    transformation: "De falida a empresária multimilionária",
    rating: 5,
    timeframe: "4 meses"
  },
  {
    name: "João Silva",
    location: "Lisboa, Portugal", 
    story: "Estava com câncer terminal no fígado e pulmão. Os médicos me deram apenas 2 meses de vida e minha família já estava se preparando para o pior. Encontrei este templo, orei para São Cipriano todos os dias com fé absoluta e inabalável. Hoje, 5 anos depois, estou completamente curado, mais saudável que nunca e os médicos chamam de milagre médico inexplicável!",
    transformation: "Cura milagrosa de câncer terminal duplo",
    rating: 5,
    timeframe: "2 meses para cura completa"
  },
  {
    name: "Ana Costa",
    location: "Rio de Janeiro, Brasil",
    story: "Meu casamento de 18 anos estava completamente acabado, meu marido havia me traído e pedido divórcio. Eu estava devastada e sem esperança. São Cipriano salvou minha família de forma milagrosa e completa. Hoje, 2 anos depois, somos mais unidos que nunca, meu marido me trata como uma rainha todos os dias e temos o relacionamento dos nossos sonhos!",
    transformation: "Casamento restaurado e fortalecido",
    rating: 5,
    timeframe: "6 meses"
  },
  {
    name: "Carlos Rodriguez", 
    location: "Madrid, Espanha",
    story: "Era um completo desconhecido trabalhando em um emprego terrível que odiava, ganhando uma miséria. São Cipriano me deu fama mundial de forma extraordinária. Hoje sou influencer digital com 120 milhões de seguidores globais, ganho R$ 50 milhões por mês e sou reconhecido mundialmente na minha área!",
    transformation: "De desconhecido a influencer mundial",
    rating: 5,
    timeframe: "10 meses"
  },
  {
    name: "Lucia Fernandez",
    location: "Buenos Aires, Argentina", 
    story: "Estava falida, devendo mais de R$ 3 milhões, prestes a perder tudo que havia construído na vida. Fiz rituais poderosos para São Cipriano e em menos de 8 meses não só quitei todas as dívidas impossíveis como me tornei multimilionária! Hoje tenho patrimônio de R$ 80 milhões e vida abundante!",
    transformation: "De falida a multimilionária",
    rating: 5,
    timeframe: "8 meses"
  }
];

const falseBeliefsBreaking = [
  {
    myth: "São Cipriano é perigoso ou representa o mal",
    truth: "São Cipriano é um santo católico oficialmente reconhecido pela Igreja que protege e abençoa seus devotos com amor infinito e poder divino"
  },
  {
    myth: "Só funciona para alguns poucos escolhidos especiais",
    truth: "São Cipriano ajuda TODOS que o procuram com fé sincera, independente de religião, cor, classe social ou nacionalidade"
  },
  {
    myth: "É apenas superstição ou efeito placebo psicológico", 
    truth: "Milhões de milagres documentados e vidas radicalmente transformadas comprovam cientificamente seu poder real e sobrenatural"
  },
  {
    myth: "É coisa apenas de pessoas desesperadas ou ignorantes",
    truth: "Pessoas bem-sucedidas, famosas, ricas e poderosas também são devotas de São Cipriano pelo mundo inteiro"
  },
  {
    myth: "Vai cobrar algo terrível em troca depois dos milagres",
    truth: "São Cipriano só pede devoção sincera, gratidão diária e que você espalhe sua palavra para ajudar outras pessoas"
  },
  {
    myth: "É contra outras religiões ou crenças espirituais",
    truth: "São Cipriano respeita todas as crenças sinceras e trabalha junto com outros santos e entidades de luz"
  },
  {
    myth: "Não funciona para problemas realmente grandes ou impossíveis",
    truth: "São Cipriano se especializa justamente em casos impossíveis que outros santos não conseguem resolver"
  },
  {
    myth: "É apenas tradição antiga sem poder real hoje em dia",
    truth: "O poder de São Cipriano cresce a cada dia e está mais forte que nunca na era moderna"
  }
];

export default function History() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  return (
    <div className="min-h-screen bg-obsidian-gradient">
      {/* Header */}
      <div className="text-center py-12 md:py-16 px-4">
        <div className="animate-float mb-8">
          <div className="text-6xl md:text-8xl text-gold-400 animate-glow-text mystical-glow">
            c🔱
          </div>
        </div>
        <h1 className="sacred-text text-3xl md:text-5xl lg:text-6xl font-black text-gold-400 mb-4 leading-tight">
          A HISTÓRIA SAGRADA DE
        </h1>
        <h2 className="sacred-text text-2xl md:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
          SÃO CIPRIANO DE ANTIOQUIA
        </h2>
        <p className="text-gold-300 text-lg md:text-2xl font-bold">
          O Grande Mago Eterno - Transformador de Realidades Impossíveis
        </p>
        <div className="temple-section rounded-3xl p-6 md:p-8 max-w-4xl mx-auto mt-8 shadow-sacred">
          <p className="text-gold-200 italic text-lg md:text-xl leading-relaxed mystical-text">
            "Conheça a história mais poderosa e tocante já contada na história da humanidade. A vida extraordinária, 
            morte brutal e injusta, e ressurreição gloriosa do maior mago que já existiu. Prepare-se para ter sua vida 
            transformada para sempre através desta história sagrada."
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-24">
        {/* Conversion Hook */}
        <div className="conversion-section rounded-3xl p-8 md:p-10 mb-16 text-center shadow-mystical">
          <h2 className="sacred-text text-2xl md:text-4xl font-black text-gold-400 mb-6 leading-tight">
            POR QUE SUA VIDA ESTÁ DIFÍCIL E SEM SUCESSO?
          </h2>
          <p className="text-gold-200 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto mb-8">
            Sua vida está difícil, sem sucesso verdadeiro e cheia de problemas constantes porque você ainda não conhece 
            o poder transformador radical de São Cipriano. Milhões de pessoas saíram da pobreza extrema, encontraram o amor 
            verdadeiro da vida, foram curadas de doenças terminais consideradas incuráveis, ficaram mundialmente famosas e 
            realizaram sonhos completamente impossíveis através dele. Não continue sofrendo desnecessariamente quando a 
            solução definitiva está aqui esperando por você neste exato momento!
          </p>
          
          {/* Before/After Comparison */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="bg-red-600/20 rounded-2xl p-6 md:p-8 border border-red-500/30 shadow-sacred">
              <div className="text-4xl md:text-5xl mb-4">😢</div>
              <p className="text-white font-black text-lg md:text-xl mb-2">SEM São Cipriano</p>
              <p className="text-red-300 text-sm md:text-base">Pobreza extrema, solidão profunda, doenças graves, fracassos constantes, falta total de proteção espiritual</p>
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
              <p className="text-white font-black text-lg md:text-xl mb-2">COM São Cipriano</p>
              <p className="text-green-300 text-sm md:text-base">Riqueza infinita garantida, amor perfeito eterno, saúde radiante, sucesso mundial comprovado</p>
            </div>
          </div>
        </div>

        {/* History Timeline */}
        <div className="space-y-8 md:space-y-10 mb-16">
          <h2 className="sacred-text text-2xl md:text-3xl font-black text-gold-400 text-center mb-12 animate-glow-text">
            A JORNADA ÉPICA DO GRANDE MAGO
          </h2>
          
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
                        alt={section.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Content - Mobile optimized */}
                    <div className="flex-1 text-center md:text-left w-full">
                      <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-4 gap-4">
                        <h3 className="sacred-text text-xl md:text-2xl font-black text-gold-400 leading-tight">
                          {section.title}
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
                        ⚡ {section.power}
                      </div>
                      {!expandedSection || expandedSection !== section.id ? (
                        <p className="text-gold-200 text-sm md:text-base leading-relaxed">
                          {section.content.substring(0, 150)}...
                        </p>
                      ) : null}
                    </div>
                  </div>
                  
                  {expandedSection === section.id && (
                    <div className="mt-8 pt-8 border-t border-gold-500/30">
                      <p className="text-gold-100 leading-relaxed text-base md:text-lg prayer-text">
                        {section.content}
                      </p>
                      {section.id === '5' && (
                        <div className="mt-6 bg-red-600/20 rounded-2xl p-6 md:p-8 border border-red-500/30 shadow-sacred">
                          <p className="text-red-300 italic text-lg md:text-xl leading-relaxed">
                            💔 Esta injustiça brutal e desumana toca profundamente o coração de todos que amam São Cipriano. 
                            Tentaram calar sua voz sagrada para sempre, mas falharam miseravelmente! Hoje ele vive eternamente através de 
                            milhões de devotos que espalham sua palavra e experimentam seu poder transformador diariamente. 
                            Sua morte injusta não foi em vão - ela gerou vida eterna e poder infinito para todos nós! 💔
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
            PODERES SUPREMOS DE SÃO CIPRIANO
          </h2>
          <p className="text-gold-200 text-center mb-12 text-lg md:text-xl max-w-3xl mx-auto">
            O que São Cipriano pode fazer por você HOJE MESMO e para sempre
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {powers.map((power, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gold-500/10 to-gold-600/20 rounded-2xl p-4 md:p-6 text-center hover:scale-105 transition-all duration-300 animate-pulse-sacred border border-gold-500/30 shadow-sacred"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl md:text-5xl mb-4">{power.icon}</div>
                <h3 className="text-gold-400 font-black mb-3 text-sm md:text-lg leading-tight">{power.name}</h3>
                <p className="text-gold-200 text-xs md:text-sm leading-relaxed">{power.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Breaking False Beliefs */}
        <div className="conversion-section rounded-3xl p-8 md:p-10 mb-16 shadow-mystical">
          <h2 className="sacred-text text-2xl md:text-3xl font-black text-gold-400 text-center mb-8">
            QUEBRANDO TODAS AS CRENÇAS FALSAS SOBRE SÃO CIPRIANO
          </h2>
          <p className="text-gold-200 text-center mb-12 text-lg md:text-xl max-w-3xl mx-auto">
            É hora de destruir completamente as mentiras e conhecer a verdade absoluta que transformará sua vida para sempre
          </p>
          
          <div className="space-y-6">
            {falseBeliefsBreaking.map((belief, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-red-600/20 rounded-2xl p-6 md:p-8 border border-red-500/30 shadow-sacred">
                  <h3 className="text-red-400 font-black mb-3 text-lg md:text-xl">❌ MENTIRA PERIGOSA:</h3>
                  <p className="text-red-300 leading-relaxed text-base md:text-lg">"{belief.myth}"</p>
                </div>
                <div className="bg-green-600/20 rounded-2xl p-6 md:p-8 border border-green-500/30 shadow-sacred">
                  <h3 className="text-green-400 font-black mb-3 text-lg md:text-xl">✅ VERDADE ABSOLUTA:</h3>
                  <p className="text-green-300 leading-relaxed text-base md:text-lg">{belief.truth}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="temple-section rounded-3xl p-8 md:p-10 mb-16 shadow-sacred">
          <h2 className="sacred-text text-2xl md:text-3xl font-black text-gold-400 text-center mb-8">
            MILAGRES REAIS E DOCUMENTADOS
          </h2>
          <p className="text-gold-200 text-center mb-12 text-lg md:text-xl max-w-3xl mx-auto">
            Pessoas reais que tiveram suas vidas transformadas radicalmente por São Cipriano através deste templo sagrado
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
                  "{testimonial.story}"
                </p>
                <div className="border-t border-gold-500/30 pt-6">
                  <p className="text-gold-400 font-black text-base md:text-lg">{testimonial.name}</p>
                  <p className="text-gold-300 text-sm mb-3">{testimonial.location}</p>
                  <p className="text-green-400 text-xs md:text-sm font-bold bg-green-500/20 rounded-full px-3 py-2 inline-block mb-2">
                    ✅ {testimonial.transformation}
                  </p>
                  <p className="text-gold-400 text-xs font-bold">
                    ⚡ Tempo: {testimonial.timeframe}
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
            FAÇA SEU ACORDO SAGRADO COM SÃO CIPRIANO
          </h2>
          <p className="text-gold-200 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto mb-10">
            O Acordo Sagrado é a forma mais poderosa de se conectar com São Cipriano e ter sua vida transformada 
            radicalmente e definitivamente. Milhões de pessoas já fizeram e tiveram resultados extraordinários e 
            impossíveis em poucos dias ou semanas. Você oferece devoção sincera, gratidão diária e compromete-se a 
            espalhar sua palavra sagrada, e ele transforma completamente sua realidade, te dando riqueza infinita, 
            amor verdadeiro, saúde perfeita e sucesso mundial comprovado.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-10">
            <div className="bg-gold-500/10 rounded-2xl p-6 md:p-8 border border-gold-500/30 shadow-sacred">
              <Heart className="text-gold-400 mx-auto mb-4" size={40} />
              <h3 className="text-gold-400 font-black mb-3 text-lg">SUA PARTE SAGRADA</h3>
              <ul className="text-gold-200 text-sm md:text-base space-y-2">
                <li>• Devoção sincera e diária</li>
                <li>• Gratidão constante e verdadeira</li>
                <li>• Espalhar sua palavra sagrada</li>
                <li>• Manter a fé sempre inabalável</li>
              </ul>
            </div>
            <div className="bg-gold-500/10 rounded-2xl p-6 md:p-8 border border-gold-500/30 shadow-sacred">
              <Zap className="text-gold-400 mx-auto mb-4" size={40} />
              <h3 className="text-gold-400 font-black mb-3 text-lg">PARTE DELE DIVINA</h3>
              <ul className="text-gold-200 text-sm md:text-base space-y-2">
                <li>• Riqueza infinita garantida</li>
                <li>• Proteção absoluta permanente</li>
                <li>• Amor verdadeiro eterno</li>
                <li>• Sucesso mundial comprovado</li>
              </ul>
            </div>
            <div className="bg-gold-500/10 rounded-2xl p-6 md:p-8 border border-gold-500/30 shadow-sacred">
              <Award className="text-gold-400 mx-auto mb-4" size={40} />
              <h3 className="text-gold-400 font-black mb-3 text-lg">RESULTADOS GARANTIDOS</h3>
              <ul className="text-gold-200 text-sm md:text-base space-y-2">
                <li>• Vida completamente transformada</li>
                <li>• Sonhos impossíveis realizados</li>
                <li>• Milagres diários constantes</li>
                <li>• Felicidade plena e eterna</li>
              </ul>
            </div>
          </div>
          
          <button 
            onClick={() => window.location.href = '/app/sacred-agreement'}
            className="sacred-button py-6 md:py-8 px-8 md:px-12 rounded-full text-lg md:text-xl font-black transition-all duration-300 transform hover:scale-105 shadow-divine"
          >
            FAZER MEU ACORDO SAGRADO AGORA MESMO
          </button>
          
          <p className="text-gold-300 text-sm md:text-base mt-6">
            ⚡ Transformação garantida • Milhões de acordos bem-sucedidos • Poder infinito comprovado ⚡
          </p>
        </div>

        {/* Call to Action Final */}
        <div className="conversion-section rounded-3xl p-8 md:p-10 text-center shadow-mystical">
          <Star className="text-gold-400 mx-auto mb-8 animate-pulse-sacred" size={64} />
          <h2 className="sacred-text text-2xl md:text-4xl font-black text-gold-400 mb-8 leading-tight">
            SUA VIDA PODE MUDAR HOJE MESMO!
          </h2>
          <p className="text-gold-200 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto mb-10">
            Não continue sofrendo desnecessariamente, sendo pobre, doente, solitário ou fracassado quando a solução 
            definitiva e comprovada está aqui neste momento! São Cipriano está esperando por você neste exato instante. 
            Dedique-se a ele com devoção sincera, faça seu Acordo Sagrado e experimente a transformação mais radical e 
            extraordinária da sua vida inteira. Saia da pobreza extrema, encontre o amor verdadeiro da sua vida, 
            tenha saúde perfeita, alcance fama mundial e realize todos os seus sonhos mais impossíveis!
          </p>
          
          <div className="space-y-6">
            <button 
              onClick={() => window.location.href = '/app/sacred-agreement'}
              className="sacred-button py-6 md:py-8 px-8 md:px-12 rounded-full text-lg md:text-xl font-black transition-all duration-300 transform hover:scale-105 shadow-divine"
            >
              COMEÇAR MINHA TRANSFORMAÇÃO RADICAL AGORA
            </button>
            
            <p className="text-gold-300 text-sm md:text-base">
              ⚡ Milhões de vidas já transformadas • Poder infinito comprovado • Resultados garantidos ⚡
            </p>
            
            <p className="text-gold-400 italic text-lg md:text-xl mystical-text">
              "A palavra sagrada de São Cipriano deve ser espalhada por todo o mundo. Sua glória eterna deve ser 
              conhecida por todos os povos. Ele não morreu em vão - ele vive eternamente através de seus devotos fiéis!"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
