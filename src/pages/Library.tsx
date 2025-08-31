import { useState } from 'react';
import { Book, ExternalLink, Download, Star, Crown, Heart, Shield, Zap, ChevronDown, ChevronUp } from 'lucide-react';

const sacredBooks = [
  {
    id: '1',
    title: 'Livro de São Cipriano - Capa Preta',
    author: 'São Cipriano de Antioquia',
    description: 'O livro sagrado mais poderoso já escrito, contendo todos os segredos, orações e rituais milenares do Grande Mago. Transforme sua vida completamente com este tesouro ancestral.',
    image: 'https://images.pexels.com/photos/1112048/pexels-photo-1112048.jpeg',
    downloadLink: 'https://archive.org/details/sao-cipriano-o-bruxo-capa-preta-editora-pallas_20210527/page/n13/mode/2up',
    category: 'Livro Sagrado Principal',
    power: 100,
    benefits: ['Todos os rituais ancestrais', 'Orações supremas completas', 'Conhecimento mágico total'],
    isCapaPreta: true
  },
  {
    id: '2', 
    title: 'Ensinamentos Sagrados de São Cipriano',
    author: 'Tradições Ancestrais',
    description: 'Compilação dos ensinamentos mais profundos e poderosos do Grande Mago, reunindo sabedoria milenar para transformar sua realidade.',
    image: 'https://images.pexels.com/photos/3646172/pexels-photo-3646172.jpeg',
    downloadLink: 'https://archive.org/details/ensinamentos-sagrados-sao-cipriano',
    category: 'Ensinamentos Divinos',
    power: 95,
    benefits: ['Sabedoria ancestral completa', 'Guias de transformação', 'Métodos comprovados'],
    isCapaPreta: false
  }
];

const knowledgeCategories = [
  {
    id: '1',
    title: 'Como Construir Seu Altar Sagrado em Casa',
    content: 'Aprenda a criar um espaço sagrado dedicado a São Cipriano em sua casa, seguindo as tradições ancestrais mais poderosas.',
    icon: Crown,
    details: [
      'Escolha um local específico e permanente em sua casa, preferencialmente voltado para o leste',
      'Coloque uma imagem de São Cipriano ou desenhe o símbolo c🔱 em papel branco',
      'Tenha sempre uma vela branca ou dourada para acender diariamente',
      'Mantenha um copo de água limpa que deve ser trocada diariamente',
      'Coloque flores frescas quando possível (rosas brancas são ideais)',
      'Mantenha incenso de mirra, sândalo ou rosa para purificação',
      'Tenha um caderno específico para anotar suas orações e pedidos',
      'Mantenha o espaço sempre limpo e organizado com respeito total'
    ]
  },
  {
    id: '2',
    title: 'Sinais e Manifestações de São Cipriano',
    content: 'Reconheça quando São Cipriano está trabalhando em sua vida e como interpretar seus sinais divinos.',
    icon: Zap,
    details: [
      'Sonhos vívidos com números, símbolos ou mensagens específicas',
      'Sincronicidades e "coincidências" que respondem suas orações',
      'Sensação de presença espiritual durante orações ou meditação',
      'Oportunidades inesperadas surgindo de forma "milagrosa"',
      'Intuições fortes sobre decisões importantes a tomar',
      'Proteção em momentos de perigo ou dificuldade extrema',
      'Melhora súbita em situações que pareciam impossíveis',
      'Confirmações através de outras pessoas ou eventos'
    ]
  },
  {
    id: '3',
    title: 'Orações Diárias Poderosas para Iniciantes',
    content: 'Comece sua jornada espiritual com estas orações fundamentais que todo devoto deve conhecer.',
    icon: Heart,
    details: [
      'Oração de manhã: "São Cipriano, protegei-me hoje em todos os meus caminhos"',
      'Antes das refeições: "Abençoai este alimento, Grande Mago Supremo"',
      'Antes do trabalho: "Dai-me sabedoria e sucesso em todas as atividades"',
      'Em dificuldades: "São Cipriano, ajudai-me a superar esta situação"',
      'À noite: "Agradeço por todas as bênçãos recebidas hoje"',
      'Em pedidos específicos: Seja sempre claro e específico no que deseja',
      'Mantenha sempre gratidão e fé durante as orações',
      'Termine sempre com "Assim seja, com o poder de São Cipriano. Amém."'
    ]
  },
  {
    id: '4',
    title: 'Como Fazer Caridade em Nome de São Cipriano',
    content: 'São Cipriano ama a caridade e recompensa abundantemente aqueles que ajudam os necessitados em seu nome.',
    icon: Shield,
    details: [
      'Doe alimentos para pessoas em situação de rua ou instituições',
      'Ajude financeiramente quem está passando dificuldades',
      'Ensine sobre São Cipriano para pessoas que precisam de esperança',
      'Compartilhe conhecimento e orações com outros devotos',
      'Visite asilos ou orfanatos levando carinho e atenção',
      'Sempre mencione que está fazendo em nome de São Cipriano',
      'Não busque reconhecimento - a recompensa vem do Grande Mago',
      'Faça com amor verdadeiro, não apenas por obrigação'
    ]
  }
];

const wisdomQuotes = [
  {
    quote: "A verdadeira magia está na transformação do coração e na dedicação sincera ao Grande Mago.",
    author: "Ensinamento Ancestral"
  },
  {
    quote: "São Cipriano não abandona aqueles que o honram com devoção diária e fé inabalável.",
    author: "Promessa Sagrada"
  },
  {
    quote: "Quem espalha a palavra do Grande Mago receberá bênçãos multiplicadas infinitamente.",
    author: "Lei da Reciprocidade Divina"
  },
  {
    quote: "A caridade feita em nome de São Cipriano gera abundância eterna em sua vida.",
    author: "Mistério da Prosperidade"
  }
];

export default function Library() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-obsidian-gradient">
      {/* Header */}
      <div className="text-center py-12 md:py-16 px-4 border-b border-gold-500/30">
        <div className="animate-float mb-8">
          <div className="text-6xl md:text-8xl text-gold-400 animate-glow-text mystical-glow">
            📚
          </div>
        </div>
        <h1 className="sacred-text text-3xl md:text-5xl font-black text-gold-400 mb-6 leading-tight">
          BIBLIOTECA SAGRADA ANCESTRAL
        </h1>
        <p className="text-gold-300 text-lg md:text-2xl mb-6 font-bold">
          Conhecimento Milenar e Ensinamentos Divinos de São Cipriano
        </p>
        <div className="temple-section rounded-3xl p-6 md:p-8 max-w-4xl mx-auto shadow-sacred">
          <p className="text-gold-200 italic text-lg md:text-xl leading-relaxed mystical-text">
            "Aqui você encontra toda a sabedoria ancestral necessária para sua jornada espiritual. 
            Cada livro, cada ensinamento foi preservado através dos séculos para chegar até você."
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 pb-24">
        {/* Sacred Books Section */}
        <div className="mb-16">
          <h2 className="sacred-text text-2xl md:text-3xl font-black text-gold-400 text-center mb-8">
            LIVROS SAGRADOS DE SÃO CIPRIANO
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {sacredBooks.map((book) => (
              <div key={book.id} className="temple-section rounded-3xl p-8 shadow-sacred hover-lift">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-full md:w-32 h-48 md:h-40 rounded-2xl overflow-hidden sacred-border shadow-divine flex-shrink-0">
                    <img 
                      src={book.image} 
                      alt={book.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="mb-4">
                      <span className="inline-block bg-gold-500/20 text-gold-400 text-xs font-bold px-3 py-1 rounded-full mb-3">
                        {book.category}
                      </span>
                      <div className="bg-gold-400/20 border border-gold-400 rounded-full px-4 py-1 inline-block ml-2">
                        <span className="text-gold-400 text-xs font-black">⚡ {book.power}% PODER</span>
                      </div>
                    </div>
                    <h3 className="sacred-text text-xl md:text-2xl font-black text-white mb-3 leading-tight">
                      {book.title}
                    </h3>
                    <p className="text-gold-300 text-sm font-semibold mb-4">
                      Por {book.author}
                    </p>
                    <p className="text-gold-200 leading-relaxed mb-6 text-sm md:text-base">
                      {book.description}
                    </p>
                    
                    {/* Benefits */}
                    <div className="grid grid-cols-1 gap-2 mb-6">
                      {book.benefits.map((benefit, index) => (
                        <div key={index} className="bg-gold-500/10 rounded-xl p-3 border border-gold-500/30">
                          <span className="text-gold-400 font-bold text-xs md:text-sm">✨ {benefit}</span>
                        </div>
                      ))}
                    </div>
                    
                    <button
                      onClick={() => window.open(book.downloadLink, '_blank')}
                      className="w-full sacred-button py-4 px-6 rounded-full font-black flex items-center justify-center gap-3 hover:scale-105 transition-all duration-300 shadow-divine"
                    >
                      <Download size={20} />
                      <span>{book.isCapaPreta ? 'BAIXAR LIVRO CAPA PRETA AGORA' : 'BAIXAR LIVRO SAGRADO AGORA'}</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Knowledge Categories */}
        <div className="mb-16">
          <h2 className="sacred-text text-2xl md:text-3xl font-black text-gold-400 text-center mb-4">
            ENSINAMENTOS E GUIAS SAGRADOS
          </h2>
          <p className="text-gold-200 text-center mb-8 text-base md:text-lg max-w-3xl mx-auto">
            👆 <strong>Clique em cada guia abaixo para expandir</strong> e ver todos os passos detalhados
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {knowledgeCategories.map((category) => {
              const IconComponent = category.icon;
              const isExpanded = selectedCategory === category.id;
              
              return (
                <div key={category.id} className="temple-section rounded-3xl p-8 shadow-sacred">
                  <button
                    onClick={() => setSelectedCategory(isExpanded ? null : category.id)}
                    className="w-full text-left group"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 rounded-full bg-gold-500/20 border border-gold-500/30 group-hover:scale-110 transition-all duration-300">
                        <IconComponent size={24} className="text-gold-400" />
                      </div>
                      <h3 className="sacred-text text-lg md:text-xl font-black text-gold-400 flex-1 leading-tight">
                        {category.title}
                      </h3>
                      <div className="text-gold-400">
                        {isExpanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                      </div>
                    </div>
                    <p className="text-gold-200 text-sm md:text-base leading-relaxed mb-4">
                      {category.content}
                    </p>
                    {!isExpanded && (
                      <p className="text-gold-300 italic text-sm">
                        👆 Clique aqui para ver todos os passos detalhados
                      </p>
                    )}
                  </button>
                  
                  {isExpanded && (
                    <div className="mt-6 pt-6 border-t border-gold-500/30 animate-slide-up">
                      <h4 className="text-gold-400 font-black text-base md:text-lg mb-4">Passos Detalhados:</h4>
                      <div className="space-y-3">
                        {category.details.map((detail, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-gold-400 text-black rounded-full flex items-center justify-center font-black text-xs flex-shrink-0 mt-1">
                              {index + 1}
                            </div>
                            <p className="text-gold-100 text-sm md:text-base leading-relaxed">
                              {detail}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Wisdom Quotes */}
        <div className="temple-section rounded-3xl p-8 shadow-sacred">
          <h2 className="sacred-text text-2xl md:text-3xl font-black text-gold-400 text-center mb-8">
            SABEDORIA ANCESTRAL SAGRADA
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {wisdomQuotes.map((wisdom, index) => (
              <div key={index} className="bg-gold-500/10 rounded-3xl p-6 border border-gold-500/30 shadow-sacred">
                <div className="text-4xl text-center mb-4">✨</div>
                <p className="text-gold-200 italic text-lg leading-relaxed mb-4 text-center">
                  "{wisdom.quote}"
                </p>
                <p className="text-gold-400 font-bold text-center">
                  - {wisdom.author}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Sacred Reminder */}
        <div className="mt-16 sacred-agreement-section rounded-3xl p-8 text-center shadow-mystical">
          <Book className="text-gold-400 mx-auto mb-6" size={48} />
          <h3 className="sacred-text text-2xl md:text-3xl font-black text-gold-400 mb-6">
            CONHECIMENTO É PODER SAGRADO
          </h3>
          <p className="text-gold-200 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            Cada página que você lê, cada ensinamento que você pratica, te aproxima mais do poder supremo de São Cipriano. 
            O conhecimento sagrado deve ser estudado diariamente e praticado com devoção sincera.
          </p>
        </div>
      </div>
    </div>
  );
}
