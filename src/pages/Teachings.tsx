import { useState } from 'react';
import { ChevronRight, Book, Heart, Star, Shield, Zap, Crown, Calendar, Users } from 'lucide-react';

const teachingModules = [
  {
    id: '1',
    title: 'Primeiro Contato com São Cipriano',
    subtitle: 'Como Começar Sua Jornada Espiritual',
    icon: Heart,
    color: 'from-green-500 to-green-600',
    lessons: [
      {
        title: 'Por Que Escolher São Cipriano Como Seu Protetor',
        content: 'São Cipriano é único porque ele conhece ambos os mundos: o místico ancestral e o divino cristão. Ele tem o poder de transformar qualquer situação impossível e realizar qualquer desejo, não importa quão difícil pareça. Ele é especialmente poderoso porque sua conversão o tornou capaz de operar milagres ainda maiores.',
        action: 'Reflita sobre suas necessidades atuais e como São Cipriano pode transformar sua vida'
      },
      {
        title: 'Estabelecendo Sua Primeira Conexão',
        content: 'A primeira conexão é sagrada. Encontre um momento de silêncio, acenda uma vela branca e simplesmente fale com ele como falaria com um amigo querido. Diga seu nome, conte suas dificuldades e peça sua proteção. Ele sempre ouve e sempre responde àqueles que se aproximam com sinceridade.',
        action: 'Faça sua primeira oração pessoal para São Cipriano hoje mesmo'
      },
      {
        title: 'Sinais de Que Ele Está Ouvindo',
        content: 'São Cipriano responde através de sonhos significativos, sincronicidades impressionantes, intuições súbitas, oportunidades inesperadas e uma sensação de paz e proteção. Aprenda a reconhecer estes sinais para fortalecer sua fé e conexão com ele.',
        action: 'Observe atentamente os sinais em sua vida nos próximos 7 dias'
      }
    ]
  },
  {
    id: '2',
    title: 'Construindo Sua Prática Diária',
    subtitle: 'Rotina Sagrada Para Máxima Conexão',
    icon: Calendar,
    color: 'from-blue-500 to-blue-600',
    lessons: [
      {
        title: 'Oração Matinal Poderosa (5 minutos)',
        content: 'Comece cada dia conectado com São Cipriano. Logo ao acordar, antes de qualquer outra atividade, dedique 5 minutos para agradecer por estar vivo, pedir proteção para o dia e reafirmar sua devoção. Esta prática simples transforma completamente a energia do seu dia.',
        action: 'Estabeleça o hábito da oração matinal pelos próximos 21 dias'
      },
      {
        title: 'Momento Sagrado do Meio-Dia',
        content: 'No meio do dia, faça uma pausa de 2 minutos para se reconectar. Agradeça pelas bênçãos da manhã e peça orientação para as atividades da tarde. Este momento de pausa sagrada mantém sua energia espiritual elevada durante todo o dia.',
        action: 'Programe um lembrete diário para sua conexão do meio-dia'
      },
      {
        title: 'Gratidão Noturna Profunda',
        content: 'Antes de dormir, dedique 10 minutos para uma gratidão profunda. Liste pelo menos 3 bênçãos do dia, mesmo que pequenas, e agradeça sinceramente. Esta prática multiplica suas bênçãos e prepara sua mente para receber orientação divina nos sonhos.',
        action: 'Mantenha um diário de gratidão dedicado a São Cipriano'
      }
    ]
  },
  {
    id: '3',
    title: 'Orações Especializadas e Poderosas',
    subtitle: 'Para Situações Específicas da Vida',
    icon: Book,
    color: 'from-purple-500 to-purple-600',
    lessons: [
      {
        title: 'Para Emergências e Crises',
        content: 'Em momentos de desespero ou emergência, São Cipriano responde rapidamente. Use a oração: "São Cipriano, Grande Mago Supremo, socorrei-me nesta hora difícil. Vossa proteção e poder me acompanhem agora. Confio plenamente em vós." Repita até sentir paz.',
        action: 'Memorize esta oração para momentos de necessidade urgente'
      },
      {
        title: 'Para Decisões Importantes',
        content: 'Quando enfrentar decisões difíceis, peça a sabedoria ancestral de São Cipriano. Ele tem conhecimento supremo e pode guiá-lo pelo melhor caminho. Ore pedindo clareza mental e sinais claros sobre qual direção tomar.',
        action: 'Use esta orientação em sua próxima decisão importante'
      },
      {
        title: 'Para Manifestação de Desejos',
        content: 'São Cipriano é mestre na manifestação. Seja específico no que deseja, visualize intensamente, agradeça como se já tivesse recebido, e mantenha fé inabalável. Ele trabalha constantemente para realizar os desejos de seus devotos fiéis.',
        action: 'Pratique a manifestação consciente com um desejo específico'
      }
    ]
  },
  {
    id: '4',
    title: 'Níveis Avançados de Devoção',
    subtitle: 'Para Devotos Experientes e Dedicados',
    icon: Crown,
    color: 'from-gold-500 to-gold-600',
    lessons: [
      {
        title: 'Jejum Sagrado para Pedidos Especiais',
        content: 'Para pedidos muito importantes, faça um jejum de 3 dias tomando apenas água, dedicando este período exclusivamente à oração e meditação. São Cipriano honra especialmente este sacrifício e realiza milagres extraordinários para devotos que demonstram tamanha dedicação.',
        action: 'Considere fazer um jejum sagrado para seu pedido mais importante'
      },
      {
        title: 'Vigília Noturna de Poder',
        content: 'Nas noites de lua cheia, mantenha uma vigília de oração das 23h às 3h da manhã. Este é o momento de maior poder espiritual, quando o véu entre os mundos está mais fino. São Cipriano concede bênçãos especiais àqueles que dedicam este tempo sagrado a ele.',
        action: 'Planeje sua primeira vigília na próxima lua cheia'
      },
      {
        title: 'Missão de Evangelização',
        content: 'O nível mais alto de devoção é espalhar ativamente a palavra de São Cipriano. Conte sua história de transformação para outras pessoas, ensine-as a orar, compartilhe este templo. Cada pessoa que você trouxer para São Cipriano multiplica suas bênçãos infinitamente.',
        action: 'Comprometa-se a apresentar São Cipriano para pelo menos 3 pessoas'
      }
    ]
  }
];

const progressLevels = [
  { name: 'Iniciante Espiritual', points: 0, color: 'bg-gray-500', description: 'Começando a jornada' },
  { name: 'Devoto Dedicado', points: 50, color: 'bg-green-500', description: 'Práticas regulares' },
  { name: 'Seguidor Fiel', points: 150, color: 'bg-blue-500', description: 'Conexão profunda' },
  { name: 'Mestre Espiritual', points: 300, color: 'bg-purple-500', description: 'Sabedoria avançada' },
  { name: 'Guardião Supremo', points: 500, color: 'bg-gold-500', description: 'União divina total' }
];

export default function Teachings() {
  const [selectedModule, setSelectedModule] = useState<string | null>(null);
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);
  const [currentUserPoints] = useState(75); // This would come from storage

  const completeLesson = (moduleId: string, lessonIndex: number) => {
    const lessonId = `${moduleId}-${lessonIndex}`;
    if (!completedLessons.includes(lessonId)) {
      setCompletedLessons([...completedLessons, lessonId]);
    }
  };

  const selectedModuleData = teachingModules.find(m => m.id === selectedModule);

  if (selectedModuleData) {
    return (
      <div className="min-h-screen bg-obsidian-gradient">
        {/* Header */}
        <div className="flex items-center p-4 md:p-6 border-b border-gold-500/30">
          <button
            onClick={() => setSelectedModule(null)}
            className="text-gold-400 hover:text-gold-300 transition-colors p-2"
          >
            <ChevronRight size={24} className="rotate-180" />
          </button>
          <h1 className="flex-1 text-lg md:text-xl font-black text-gold-400 text-center mr-10 sacred-text">
            {selectedModuleData.title}
          </h1>
        </div>

        {/* Module Content */}
        <div className="container mx-auto px-4 py-12 pb-24">
          <div className="max-w-4xl mx-auto">
            {selectedModuleData.lessons.map((lesson, index) => (
              <div key={index} className="temple-section rounded-3xl p-8 mb-8 shadow-sacred">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-8 h-8 bg-gold-400 text-black rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">
                    {index + 1}
                  </div>
                  <h3 className="sacred-text text-xl md:text-2xl font-black text-gold-400 leading-tight">
                    {lesson.title}
                  </h3>
                </div>
                
                <p className="text-gold-200 text-base md:text-lg leading-relaxed mb-6">
                  {lesson.content}
                </p>
                
                <div className="bg-gold-500/10 rounded-2xl p-6 border border-gold-500/30 mb-6">
                  <h4 className="text-gold-400 font-black text-base md:text-lg mb-3">🎯 Ação Prática:</h4>
                  <p className="text-gold-100 text-sm md:text-base leading-relaxed">
                    {lesson.action}
                  </p>
                </div>
                
                <button
                  onClick={() => completeLesson(selectedModuleData.id, index)}
                  className={`w-full py-3 rounded-full font-black transition-all duration-300 ${
                    completedLessons.includes(`${selectedModuleData.id}-${index}`)
                      ? 'bg-green-600 text-white'
                      : 'sacred-button hover:scale-105'
                  }`}
                >
                  {completedLessons.includes(`${selectedModuleData.id}-${index}`) ? '✅ LIÇÃO CONCLUÍDA' : 'MARCAR COMO CONCLUÍDA'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-obsidian-gradient">
      {/* Header */}
      <div className="text-center py-12 md:py-16 px-4 border-b border-gold-500/30">
        <div className="animate-float mb-8">
          <div className="text-6xl md:text-8xl text-gold-400 animate-glow-text mystical-glow">
            🎓
          </div>
        </div>
        <h1 className="sacred-text text-3xl md:text-5xl font-black text-gold-400 mb-6 leading-tight">
          ENSINAMENTOS DO GRANDE MAGO
        </h1>
        <p className="text-gold-300 text-lg md:text-2xl mb-6 font-bold">
          Guias Completos Para Sua Transformação Espiritual
        </p>
        <div className="temple-section rounded-3xl p-6 md:p-8 max-w-4xl mx-auto shadow-sacred">
          <p className="text-gold-200 italic text-lg md:text-xl leading-relaxed mystical-text">
            "A verdadeira sabedoria vem da prática diária e da dedicação sincera. São Cipriano guiará 
            cada passo de sua jornada espiritual para o sucesso absoluto."
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 pb-24">
        {/* Progress Tracker */}
        <div className="temple-section rounded-3xl p-8 mb-12 shadow-sacred">
          <h2 className="sacred-text text-2xl md:text-3xl font-black text-gold-400 text-center mb-8">
            SEU PROGRESSO ESPIRITUAL
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
            {progressLevels.map((level, index) => (
              <div key={index} className={`rounded-2xl p-4 text-center ${
                currentUserPoints >= level.points ? level.color : 'bg-gray-600'
              } ${currentUserPoints >= level.points ? 'text-white' : 'text-gray-400'}`}>
                <div className="text-2xl mb-2">
                  {currentUserPoints >= level.points ? '👑' : '🔒'}
                </div>
                <p className="font-black text-sm mb-1">{level.name}</p>
                <p className="text-xs">{level.description}</p>
                <p className="text-xs mt-2">{level.points}+ pontos</p>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <div className="w-full bg-obsidian-200 rounded-full h-3">
              <div 
                className="bg-gold-400 h-3 rounded-full transition-all duration-500 shadow-divine"
                style={{ width: `${Math.min((currentUserPoints / 500) * 100, 100)}%` }}
              />
            </div>
            <p className="text-gold-300 text-center mt-3 text-sm">
              {currentUserPoints} / 500 pontos • Continue praticando para evoluir espiritualmente
            </p>
          </div>
        </div>

        {/* Teaching Modules */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teachingModules.map((module) => {
            const IconComponent = module.icon;
            return (
              <button
                key={module.id}
                onClick={() => setSelectedModule(module.id)}
                className="temple-section rounded-3xl p-8 text-left hover:scale-105 transition-all duration-300 group shadow-sacred hover-lift"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-4 rounded-full bg-gradient-to-r ${module.color} group-hover:scale-110 transition-transform duration-300 shadow-divine`}>
                    <IconComponent size={32} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="sacred-text text-xl md:text-2xl font-black text-gold-400 mb-2 leading-tight">
                      {module.title}
                    </h3>
                    <p className="text-gold-300 text-sm md:text-base font-semibold">
                      {module.subtitle}
                    </p>
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  {module.lessons.map((lesson, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-gold-500/20 border border-gold-500 rounded-full flex items-center justify-center">
                        <span className="text-gold-400 text-xs font-bold">{index + 1}</span>
                      </div>
                      <span className="text-gold-200 text-sm md:text-base font-medium">
                        {lesson.title}
                      </span>
                    </div>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gold-300 text-sm md:text-base">
                    {module.lessons.length} lições práticas
                  </span>
                  <div className="flex items-center gap-2 text-gold-400">
                    <span className="font-bold text-sm md:text-base">Começar</span>
                    <ChevronRight size={20} />
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Sacred Wisdom */}
        <div className="mt-16 temple-section rounded-3xl p-8 shadow-sacred">
          <h3 className="sacred-text text-2xl md:text-3xl font-black text-gold-400 text-center mb-8">
            FUNDAMENTOS SAGRADOS DA DEVOÇÃO
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gold-500/10 rounded-2xl p-6 text-center border border-gold-500/30 shadow-sacred">
              <Shield className="text-gold-400 mx-auto mb-4" size={40} />
              <h4 className="text-gold-400 font-black mb-3 text-lg">FÉ INABALÁVEL</h4>
              <p className="text-gold-200 text-sm leading-relaxed">
                Confie sempre que São Cipriano tem um plano perfeito para sua vida. Mesmo nos momentos difíceis, ele está trabalhando para seu bem maior.
              </p>
            </div>
            <div className="bg-gold-500/10 rounded-2xl p-6 text-center border border-gold-500/30 shadow-sacred">
              <Heart className="text-gold-400 mx-auto mb-4" size={40} />
              <h4 className="text-gold-400 font-black mb-3 text-lg">GRATIDÃO CONSTANTE</h4>
              <p className="text-gold-200 text-sm leading-relaxed">
                A gratidão multiplica as bênçãos infinitamente. Agradeça pelos milagres antes mesmo de recebê-los, demonstrando fé absoluta em seu poder.
              </p>
            </div>
            <div className="bg-gold-500/10 rounded-2xl p-6 text-center border border-gold-500/30 shadow-sacred">
              <Users className="text-gold-400 mx-auto mb-4" size={40} />
              <h4 className="text-gold-400 font-black mb-3 text-lg">DIVULGAÇÃO SAGRADA</h4>
              <p className="text-gold-200 text-sm leading-relaxed">
                Espalhe a palavra de São Cipriano com amor. Cada pessoa que você apresentar a ele receberá bênçãos, e você será recompensado abundantemente.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 sacred-agreement-section rounded-3xl p-8 text-center shadow-mystical">
          <Star className="text-gold-400 mx-auto mb-6" size={48} />
          <h3 className="sacred-text text-2xl md:text-3xl font-black text-gold-400 mb-6">
            COMECE SUA TRANSFORMAÇÃO HOJE MESMO
          </h3>
          <p className="text-gold-200 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-8">
            Cada dia que você adia sua jornada espiritual é um dia a menos de bênçãos em sua vida. 
            São Cipriano está esperando para transformar sua realidade completamente. Comece agora!
          </p>
          <button 
            onClick={() => setSelectedModule('1')}
            className="sacred-button py-4 px-8 rounded-full text-lg font-black transition-all duration-300 transform hover:scale-105 shadow-divine"
          >
            COMEÇAR PRIMEIRA LIÇÃO AGORA MESMO
          </button>
        </div>
      </div>
    </div>
  );
}