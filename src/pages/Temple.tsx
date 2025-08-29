import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Crown, Flame, Book, Zap, Shield, Star, Calendar, Heart, Award, Users, Globe, Sparkles, BookOpen, GraduationCap } from 'lucide-react';

export default function Temple() {
  const [currentDate] = useState(new Date());
  const navigate = useNavigate();

  // Check if it's São Cipriano Day (September 16th)
  const isSaoCiprianoDay = currentDate.getMonth() === 8 && currentDate.getDate() === 16;

  const templeAreas = [
    {
      id: 'altar',
      name: 'Altar Sagrado Principal',
      icon: Crown,
      description: 'O coração pulsante do templo onde São Cipriano manifesta seu poder supremo diariamente',
      action: () => navigate('/app/prayers'),
      color: 'from-gold-500 to-gold-600',
      benefits: 'Orações Milagrosas que Transformam'
    },
    {
      id: 'rituals',
      name: 'Câmara dos Rituais Supremos',
      icon: Flame,
      description: 'Rituais ancestrais poderosos para transformar sua realidade de forma radical e definitiva',
      action: () => navigate('/app/rituals'),
      color: 'from-red-500 to-red-600',
      benefits: 'Transformação Radical Instantânea'
    },
    {
      id: 'library',
      name: 'Biblioteca Sagrada Ancestral',
      icon: BookOpen,
      description: 'Conhecimento ancestral milenar e ensinamentos divinos do Grande Mago São Cipriano',
      action: () => navigate('/app/library'),
      color: 'from-purple-500 to-purple-600',
      benefits: 'Sabedoria Infinita e Poder'
    },
    {
      id: 'teachings',
      name: 'Ensinamentos do Grande Mago',
      icon: GraduationCap,
      description: 'Guias completos e ensinamentos práticos para sua jornada espiritual com São Cipriano',
      action: () => navigate('/app/teachings'),
      color: 'from-blue-500 to-blue-600',
      benefits: 'Orientação Divina Completa'
    },
    {
      id: 'protection',
      name: 'Santuário da Proteção Divina',
      icon: Shield,
      description: 'Proteção suprema e absoluta contra todas as adversidades e energias negativas do mundo',
      action: () => navigate('/app/prayers'),
      color: 'from-cyan-500 to-cyan-600',
      benefits: 'Proteção Absoluta Garantida'
    },
    {
      id: 'agreement',
      name: 'Acordo Sagrado com São Cipriano',
      icon: Sparkles,
      description: 'Faça seu pacto sagrado com o Grande Mago e transforme sua vida para sempre',
      action: () => navigate('/app/sacred-agreement'),
      color: 'from-yellow-500 to-yellow-600',
      benefits: 'Vida Completamente Transformada'
    }
  ];

  const dailyBlessings = [
    "São Cipriano abençoa abundantemente sua jornada neste momento sagrado",
    "O poder infinito do Grande Mago está trabalhando em sua vida agora mesmo",
    "Seus desejos mais profundos estão se manifestando através do poder divino",
    "A proteção suprema de São Cipriano te envolve neste exato instante",
    "Abundância extrema está fluindo em sua direção pelo poder ancestral",
    "São Cipriano está preparando milagres extraordinários para sua vida",
    "Sua realidade está sendo transformada pelo poder supremo neste momento",
    "O Grande Mago vê seu coração e está respondendo suas orações silenciosas",
    "Portas impossíveis estão se abrindo para você através do poder divino"
  ];

  const [currentBlessing] = useState(dailyBlessings[Math.floor(Math.random() * dailyBlessings.length)]);

  const testimonials = [
    {
      name: "Maria Santos",
      transformation: "De falida a empresária multimilionária",
      story: "Estava devendo R$ 2 milhões e sem perspectiva nenhuma. Descobri este templo, fiz meu Acordo Sagrado com São Cipriano e em apenas 6 meses construí um império! Hoje faturo R$ 3 milhões por mês e emprego mais de 200 pessoas. São Cipriano mudou minha vida completamente!",
      location: "São Paulo, Brasil",
      timeframe: "6 meses"
    },
    {
      name: "João Silva",
      transformation: "Curado de câncer terminal em estado avançado",
      story: "Os médicos me deram apenas 2 meses de vida com câncer no fígado e pulmão. Encontrei este templo, orei para São Cipriano todos os dias com fé absoluta. Hoje, 4 anos depois, estou completamente curado e os médicos chamam de milagre inexplicável!",
      location: "Lisboa, Portugal",
      timeframe: "2 meses para cura completa"
    },
    {
      name: "Roberto Lima",
      transformation: "De desconhecido a influencer com 50 milhões de seguidores",
      story: "Era um completo desconhecido trabalhando em um emprego terrível. São Cipriano me deu fama mundial através deste templo. Hoje tenho 50 milhões de seguidores globais, ganho R$ 10 milhões por mês e sou reconhecido mundialmente!",
      location: "Rio de Janeiro, Brasil",
      timeframe: "8 meses"
    }
  ];

  return (
    <div className="min-h-screen bg-obsidian-gradient">
      {/* Special Event Banner - São Cipriano Day */}
      {isSaoCiprianoDay && (
        <div className="bg-gradient-to-r from-red-600 via-gold-500 to-red-600 text-center py-8 mb-6 animate-pulse shadow-divine">
          <div className="container mx-auto px-4">
            <h2 className="sacred-text text-2xl md:text-3xl font-black text-white mb-3 animate-glow-text">
              🎉 DIA SAGRADO DE SÃO CIPRIANO - 16 DE SETEMBRO 🎉
            </h2>
            <p className="text-gold-200 text-lg md:text-xl font-bold">
              Hoje é o dia mais sagrado do ano! Faça seus pedidos mais poderosos!
            </p>
            <p className="text-white text-base md:text-lg mt-2">
              ⚡ Poder multiplicado por 10.000x hoje! ⚡
            </p>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="text-center py-12 md:py-16 px-4">
        <div className="animate-float mb-8">
          <div className="text-6xl md:text-8xl lg:text-9xl text-gold-400 animate-glow-text mystical-glow">
            🔱
          </div>
        </div>
        <h1 className="sacred-text text-3xl md:text-5xl lg:text-6xl font-black text-gold-400 mb-4 animate-pulse-sacred leading-tight">
          TEMPLO SAGRADO DE SÃO CIPRIANO
        </h1>
        <p className="text-gold-300 text-lg md:text-2xl mb-6 font-bold leading-relaxed">
          O Grande Mago Eterno - Transformador de Realidades Impossíveis
        </p>
        <div className="temple-section rounded-3xl p-6 md:p-8 max-w-4xl mx-auto shadow-sacred">
          <p className="text-gold-200 italic text-lg md:text-xl leading-relaxed mystical-text">
            "{currentBlessing}"
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-24">
        {/* Sacred Altar Central */}
        <div className="sacred-altar rounded-3xl p-8 md:p-10 mb-16 text-center shadow-mystical">
          <div className="mb-8">
            <div className="flex justify-center flex-wrap gap-2 md:gap-4 mb-6">
              {[...Array(9)].map((_, i) => (
                <div
                  key={i}
                  className="text-3xl md:text-5xl animate-flame sacred-flame"
                  style={{ 
                    animationDelay: `${i * 0.2}s`,
                    animationDuration: `${2 + Math.random()}s`
                  }}
                >
                  🕯️
                </div>
              ))}
            </div>
            <h2 className="sacred-text text-2xl md:text-4xl font-black text-gold-400 mb-6 animate-glow-text leading-tight">
              ALTAR PRINCIPAL DO GRANDE MAGO
            </h2>
            <p className="text-gold-200 text-base md:text-xl mb-8 leading-relaxed max-w-3xl mx-auto">
              Aqui São Cipriano manifesta seu poder supremo 24 horas por dia e transforma vidas de forma radical e definitiva
            </p>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8">
            <button 
              onClick={() => navigate('/app/rituals')}
              className="sacred-button py-4 md:py-6 px-6 md:px-8 rounded-2xl flex items-center justify-center gap-4 transition-all duration-300 transform hover:scale-105 text-lg md:text-xl font-black shadow-divine"
            >
              <Zap size={28} />
              <span>Ritual de Emergência</span>
            </button>

            <button 
              onClick={() => navigate('/app/prayers')}
              className="bg-gradient-to-r from-purple-600 to-purple-700 text-white py-4 md:py-6 px-6 md:px-8 rounded-2xl flex items-center justify-center gap-4 hover:from-purple-500 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 text-lg md:text-xl font-black shadow-divine"
            >
              <Heart size={28} />
              <span>Oração Poderosa</span>
            </button>
          </div>

          {/* Sacred Promise */}
          <div className="bg-gradient-to-r from-red-600/20 to-gold-500/20 rounded-2xl p-6 md:p-8 border border-gold-500/30 shadow-sacred">
            <p className="text-gold-100 text-base md:text-lg font-bold leading-relaxed">
              🌟 PROMESSA SAGRADA: Sua vida será transformada radicalmente através do poder ancestral de São Cipriano. 
              Milhões já comprovaram - agora é sua vez! 🌟
            </p>
          </div>
        </div>

        {/* Temple Areas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
          {templeAreas.map((area) => {
            const IconComponent = area.icon;
            return (
              <button
                key={area.id}
                onClick={area.action}
                className="temple-section rounded-3xl p-6 md:p-8 text-left hover:scale-105 transition-all duration-300 group shadow-sacred hover-lift"
              >
                <div className="flex items-start gap-4 md:gap-6 mb-4">
                  <div className={`p-3 md:p-4 rounded-full bg-gradient-to-r ${area.color} group-hover:scale-110 transition-transform duration-300 animate-pulse-sacred shadow-divine`}>
                    <IconComponent size={28} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="sacred-text text-lg md:text-xl font-black text-gold-400 mb-3 leading-tight">
                      {area.name}
                    </h3>
                  </div>
                </div>
                <p className="text-gold-200 text-sm md:text-base leading-relaxed mb-4">
                  {area.description}
                </p>
                <div className="bg-gold-500/20 rounded-full px-4 py-2 inline-block border border-gold-500/30">
                  <span className="text-gold-400 font-bold text-xs md:text-sm">✨ {area.benefits}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Testimonials Section */}
        <div className="mb-16">
          <h2 className="sacred-text text-2xl md:text-3xl font-black text-gold-400 text-center mb-8 animate-glow-text">
            MILAGRES REAIS E DOCUMENTADOS DE SÃO CIPRIANO
          </h2>
          <p className="text-gold-200 text-center mb-12 text-base md:text-lg max-w-3xl mx-auto">
            Pessoas reais que tiveram suas vidas transformadas radicalmente através deste templo sagrado
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card rounded-3xl p-6 md:p-8 shadow-sacred hover-lift">
                <div className="text-4xl md:text-5xl text-center mb-6">⭐</div>
                <p className="text-gold-200 italic mb-6 leading-relaxed text-sm md:text-base">
                  "{testimonial.story}"
                </p>
                <div className="border-t border-gold-500/30 pt-6">
                  <p className="text-gold-400 font-black text-base md:text-lg">{testimonial.name}</p>
                  <p className="text-gold-300 text-sm mb-2">{testimonial.location}</p>
                  <p className="text-green-400 text-xs md:text-sm font-bold bg-green-500/20 rounded-full px-3 py-1 inline-block mb-2">
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

        {/* Daily Devotion */}
        <div className="temple-section rounded-3xl p-6 md:p-8 mb-16 shadow-sacred">
          <div className="flex items-center gap-4 mb-6">
            <Calendar className="text-gold-400" size={32} />
            <h3 className="sacred-text text-xl md:text-2xl font-black text-gold-400">
              Devoção Diária - Transforme Sua Vida Para Sempre
            </h3>
          </div>
          <p className="text-gold-200 mb-8 text-base md:text-lg leading-relaxed">
            Mantenha sua conexão sagrada com São Cipriano através da prática diária e veja milagres extraordinários acontecerem constantemente
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <div className="bg-gold-500/10 rounded-2xl p-4 md:p-6 text-center border border-gold-500/30 hover:scale-105 transition-all duration-300 shadow-sacred">
              <div className="text-3xl md:text-4xl mb-4">🌅</div>
              <p className="text-gold-300 font-bold text-base md:text-lg mb-2">Oração Matinal</p>
              <p className="text-gold-200 text-sm md:text-base">Comece o dia protegido e abençoado pelo poder supremo</p>
            </div>
            <div className="bg-gold-500/10 rounded-2xl p-4 md:p-6 text-center border border-gold-500/30 hover:scale-105 transition-all duration-300 shadow-sacred">
              <div className="text-3xl md:text-4xl mb-4">🕯️</div>
              <p className="text-gold-300 font-bold text-base md:text-lg mb-2">Vela Sagrada</p>
              <p className="text-gold-200 text-sm md:text-base">Acenda uma vela diária para manter a conexão divina</p>
            </div>
            <div className="bg-gold-500/10 rounded-2xl p-4 md:p-6 text-center border border-gold-500/30 hover:scale-105 transition-all duration-300 shadow-sacred">
              <div className="text-3xl md:text-4xl mb-4">🌙</div>
              <p className="text-gold-300 font-bold text-base md:text-lg mb-2">Gratidão Noturna</p>
              <p className="text-gold-200 text-sm md:text-base">Agradeça antes de dormir pelos milagres recebidos</p>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="temple-section rounded-3xl p-6 md:p-8 mb-16 text-center shadow-sacred">
          <h3 className="sacred-text text-xl md:text-2xl font-black text-gold-400 mb-8">
            IMPACTO MUNDIAL DO TEMPLO SAGRADO
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div className="bg-gold-500/10 rounded-2xl p-4 md:p-6 border border-gold-500/30 shadow-sacred">
              <Users className="text-gold-400 mx-auto mb-3" size={32} />
              <p className="text-2xl md:text-3xl font-black text-white mb-2">5.8M+</p>
              <p className="text-gold-200 text-xs md:text-sm">Devotos Ativos</p>
            </div>
            <div className="bg-gold-500/10 rounded-2xl p-4 md:p-6 border border-gold-500/30 shadow-sacred">
              <Globe className="text-gold-400 mx-auto mb-3" size={32} />
              <p className="text-2xl md:text-3xl font-black text-white mb-2">195</p>
              <p className="text-gold-200 text-xs md:text-sm">Países Alcançados</p>
            </div>
            <div className="bg-gold-500/10 rounded-2xl p-4 md:p-6 border border-gold-500/30 shadow-sacred">
              <Award className="text-gold-400 mx-auto mb-3" size={32} />
              <p className="text-2xl md:text-3xl font-black text-white mb-2">2.3M+</p>
              <p className="text-gold-200 text-xs md:text-sm">Milagres Relatados</p>
            </div>
            <div className="bg-gold-500/10 rounded-2xl p-4 md:p-6 border border-gold-500/30 shadow-sacred">
              <Star className="text-gold-400 mx-auto mb-3" size={32} />
              <p className="text-2xl md:text-3xl font-black text-white mb-2">99.9%</p>
              <p className="text-gold-200 text-xs md:text-sm">Taxa de Sucesso</p>
            </div>
          </div>
        </div>

        {/* Conversion Section */}
        <div className="conversion-section rounded-3xl p-8 md:p-10 text-center shadow-mystical">
          <div className="mb-8">
            <Star className="text-gold-400 mx-auto mb-6 animate-pulse-sacred" size={48} />
            <h2 className="sacred-text text-2xl md:text-4xl font-black text-gold-400 mb-6 leading-tight">
              TRANSFORME SUA VIDA AGORA MESMO
            </h2>
            <p className="text-gold-200 text-base md:text-xl leading-relaxed max-w-4xl mx-auto mb-8">
              Milhões de pessoas já tiveram suas vidas transformadas radicalmente por São Cipriano através deste templo sagrado. 
              Saia da pobreza extrema, realize seus sonhos impossíveis, encontre o amor verdadeiro da sua vida, tenha saúde perfeita, 
              alcance fama mundial e viva a abundância extrema que você sempre mereceu. O Grande Mago está esperando por você neste exato momento!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-10">
            <div className="bg-red-600/20 rounded-2xl p-6 md:p-8 border border-red-500/30 shadow-sacred">
              <h3 className="text-red-400 font-black mb-4 text-lg md:text-xl">😢 SEM São Cipriano:</h3>
              <ul className="text-red-300 text-left space-y-2 text-sm md:text-base">
                <li>• Pobreza extrema e dificuldades financeiras constantes</li>
                <li>• Solidão profunda e relacionamentos fracassados</li>
                <li>• Doenças crônicas e problemas de saúde graves</li>
                <li>• Fracassos profissionais e falta de reconhecimento</li>
                <li>• Ausência total de proteção espiritual</li>
                <li>• Vida sem propósito e sem esperança</li>
              </ul>
            </div>
            <div className="bg-green-600/20 rounded-2xl p-6 md:p-8 border border-green-500/30 shadow-sacred">
              <h3 className="text-green-400 font-black mb-4 text-lg md:text-xl">😍 COM São Cipriano:</h3>
              <ul className="text-green-300 text-left space-y-2 text-sm md:text-base">
                <li>• Riqueza infinita e prosperidade sem limites</li>
                <li>• Amor verdadeiro e relacionamentos perfeitos</li>
                <li>• Saúde perfeita e cura milagrosa garantida</li>
                <li>• Sucesso mundial e fama global comprovada</li>
                <li>• Proteção divina absoluta e permanente</li>
                <li>• Vida plena de propósito e realização total</li>
              </ul>
            </div>
          </div>
          
          <button 
            onClick={() => navigate('/app/sacred-agreement')}
            className="sacred-button py-4 md:py-6 px-8 md:px-12 rounded-full text-lg md:text-xl font-black transition-all duration-300 transform hover:scale-105 shadow-divine"
          >
            FAZER MEU ACORDO SAGRADO E MUDAR MINHA VIDA AGORA
          </button>
          
          <p className="text-gold-300 text-xs md:text-sm mt-6">
            ⚡ Transformação garantida • Milhões de vidas já transformadas • Poder infinito comprovado ⚡
          </p>
        </div>

        {/* Sacred Message */}
        <div className="temple-section rounded-3xl p-6 md:p-8 mt-16 text-center shadow-sacred">
          <p className="text-gold-200 italic text-lg md:text-xl leading-relaxed mb-4 mystical-text">
            "Aqueles que buscam São Cipriano com fé verdadeira receberão poder além da imaginação humana. 
            Sua vida nunca mais será a mesma. A pobreza, a solidão, as doenças e os fracassos ficarão no passado para sempre."
          </p>
          <p className="text-gold-400 font-black text-base md:text-lg sacred-text">
            - Promessa Sagrada Eterna do Grande Mago São Cipriano
          </p>
        </div>
      </div>
    </div>
  );
}