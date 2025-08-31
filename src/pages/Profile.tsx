import { useState, useEffect } from 'react';
import { 
  Trash2, Bell, Volume2, Calendar, Star, Award, Trophy, Flame, Book, Shield,
  Target, Zap, Crown, Gift, CheckCircle, Clock, Settings, Share2, Heart
} from 'lucide-react';
import { StorageService, UserProgress } from '../utils/storage';

const achievements = [
  { id: 'first-prayer', name: 'Primeira Oração', desc: 'Recitou sua primeira oração sagrada', icon: Book, points: 10 },
  { id: 'first-ritual', name: 'Primeiro Ritual', desc: 'Completou seu primeiro ritual', icon: Flame, points: 25 },
  { id: 'dedicated-devotee', name: 'Devoto Dedicado', desc: '5 orações recitadas', icon: Heart, points: 50 },
  { id: 'weekly-faithful', name: 'Fiel Semanal', desc: '7 dias consecutivos de devoção', icon: Calendar, points: 75 },
  { id: 'ritual-master', name: 'Mestre dos Rituais', desc: '10 rituais completados', icon: Crown, points: 100 },
  { id: 'prayer-warrior', name: 'Guerreiro da Oração', desc: '25 orações recitadas', icon: Shield, points: 125 },
  { id: 'sacred-month', name: 'Mês Sagrado', desc: '30 dias de devoção', icon: Star, points: 200 },
  { id: 'grand-master', name: 'Grão-Mestre', desc: 'Nível máximo atingido', icon: Trophy, points: 500 }
];

export default function Profile() {
  const [progress, setProgress] = useState<UserProgress>({
    ritualsCompleted: 0,
    prayersRecited: 0,
    daysActive: 1,
    devotionLevel: 'Iniciante',
    lastVisit: new Date().toISOString(),
    achievements: [],
    firstVisit: new Date().toISOString(),
    lastPrayerDate: '',
    lastRitualDate: '',
    totalPoints: 0
  });
  const [reminderEnabled, setReminderEnabled] = useState(false);
  const [reminderTime, setReminderTime] = useState('09:00');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadProgress();
    checkExistingReminders();
  }, []);

  const loadProgress = async () => {
    setIsLoading(true);
    try {
      const savedProgress = await StorageService.getUserProgress();
      if (savedProgress) {
        setProgress(savedProgress);
      }
    } catch (error) {
      console.error('Error loading progress:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const checkExistingReminders = () => {
    const hasReminder = localStorage.getItem('prayerReminder');
    setReminderEnabled(!!hasReminder);
    if (hasReminder) {
      setReminderTime(hasReminder);
    }
  };

  const setupPrayerReminder = async () => {
    if ('Notification' in window) {
      const permission = await Notification.requestPermission();
      
      if (permission === 'granted') {
        localStorage.setItem('prayerReminder', reminderTime);
        setReminderEnabled(true);
        
        // Set up daily reminder
        const scheduleDaily = () => {
          const [hours, minutes] = reminderTime.split(':');
          const now = new Date();
          const scheduledTime = new Date();
          scheduledTime.setHours(parseInt(hours), parseInt(minutes), 0, 0);
          
          if (scheduledTime <= now) {
            scheduledTime.setDate(scheduledTime.getDate() + 1);
          }
          
          const timeToReminder = scheduledTime.getTime() - now.getTime();
          
          setTimeout(() => {
            new Notification('c🔱 Momento Sagrado de Oração', {
              body: 'São Cipriano está esperando sua oração diária. Fortaleça sua conexão divina agora!',
              icon: '/favicon.ico',
              badge: '/favicon.ico'
            });
            scheduleDaily(); // Schedule for next day
          }, timeToReminder);
        };
        
        scheduleDaily();
        alert('✅ Lembrete de oração configurado com sucesso! São Cipriano te chamará diariamente.');
      } else {
        alert('❌ Permissão de notificação negada. Ative as notificações para receber os chamados sagrados.');
      }
    } else {
      alert('❌ Seu navegador não suporta notificações. Use um navegador moderno para os lembretes sagrados.');
    }
  };

  const disableReminder = () => {
    localStorage.removeItem('prayerReminder');
    setReminderEnabled(false);
    alert('🔕 Lembretes de oração desativados.');
  };

  const resetProgress = async () => {
    if (confirm('⚠️ Tem certeza que deseja resetar todo seu progresso espiritual? Esta ação não pode ser desfeita!')) {
      await StorageService.clearAllData();
      await loadProgress(); // Reload fresh progress
      alert('🔄 Seu progresso foi resetado. Comece uma nova jornada espiritual!');
    }
  };

  const shareProgress = async () => {
    const text = `c🔱 Estou em minha jornada espiritual com São Cipriano!

✨ Nível: ${progress.devotionLevel}
🔥 Rituais: ${progress.ritualsCompleted}
📿 Orações: ${progress.prayersRecited}
📅 Dias ativos: ${progress.daysActive}
🏆 Pontos: ${progress.totalPoints}

Venha conhecer o poder transformador do Grande Mago: ${window.location.origin}`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'c🔱 Minha Jornada com São Cipriano',
          text: text,
        });
      } catch (err) {
        // User cancelled or error occurred
      }
    } else {
      // Fallback to clipboard
      try {
        await navigator.clipboard.writeText(text);
        alert('📋 Seu progresso foi copiado! Cole no WhatsApp ou onde desejar para espalhar a palavra de São Cipriano.');
      } catch (err) {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        alert('📋 Seu progresso foi copiado! Cole no WhatsApp ou onde desejar para espalhar a palavra de São Cipriano.');
      }
    }
  };

  const getDevotionColor = (level: string) => {
    switch (level) {
      case 'Iniciante': return 'bg-emerald-500';
      case 'Devoto': return 'bg-yellow-500';
      case 'Mestre': return 'bg-purple-500';
      case 'Supremo': return 'bg-gold-500';
      default: return 'bg-gray-500';
    }
  };

  const unlockedAchievements = achievements.filter(ach => progress.achievements.includes(ach.id));

  if (isLoading) {
    return (
      <div className="min-h-screen bg-obsidian-gradient flex items-center justify-center">
        <div className="text-gold-400 text-xl">Carregando progresso espiritual...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-obsidian-gradient">
      {/* Header */}
      <div className="text-center py-8 md:py-12 px-4 border-b border-gold-500/30">
        <div className="text-5xl md:text-6xl text-gold-400 mb-4 mystical-glow animate-glow-text">
          c🔱
        </div>
        <h1 className="text-2xl md:text-3xl font-black text-gold-400 mb-2 tracking-wide sacred-text">
          SEU PERFIL ESPIRITUAL
        </h1>
        <p className="text-gold-200 text-base md:text-lg">
          Devoto Fiel de São Cipriano
        </p>
      </div>

      <div className="container mx-auto px-4 py-8 pb-24">
        {/* Devotion Level */}
        <div className="temple-section rounded-3xl p-6 md:p-8 text-center mb-8 shadow-sacred">
          <h3 className="text-lg md:text-xl font-black text-gold-400 mb-4 sacred-text">
            NÍVEL DE DEVOÇÃO ATUAL
          </h3>
          <div className={`${getDevotionColor(progress.devotionLevel)} text-white font-black py-3 px-6 rounded-full inline-block mb-6 text-lg md:text-xl shadow-divine`}>
            {progress.devotionLevel} Espiritual
          </div>

          <div className="w-full bg-obsidian-200 rounded-full h-4 mb-4 max-w-2xl mx-auto">
            <div
              className="bg-gold-400 h-4 rounded-full transition-all duration-500 shadow-divine"
              style={{ width: `${Math.min((progress.totalPoints / 500) * 100, 100)}%` }}
            />
          </div>
          <p className="text-gold-300 text-sm md:text-base mb-4">
            {progress.totalPoints} / 500 pontos para o próximo nível
          </p>
          <p className="text-gold-200 text-sm md:text-base">
            Continue sua devoção diária para evoluir espiritualmente e receber bênçãos maiores
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8">
          <div className="temple-section rounded-2xl p-4 md:p-6 text-center shadow-sacred">
            <Flame className="text-gold-400 mx-auto mb-3" size={28} />
            <p className="text-2xl md:text-3xl font-black text-white mb-1">
              {progress.ritualsCompleted}
            </p>
            <p className="text-gold-200 text-xs md:text-sm font-semibold">
              Rituais Sagrados
            </p>
          </div>

          <div className="temple-section rounded-2xl p-4 md:p-6 text-center shadow-sacred">
            <Book className="text-purple-400 mx-auto mb-3" size={28} />
            <p className="text-2xl md:text-3xl font-black text-white mb-1">
              {progress.prayersRecited}
            </p>
            <p className="text-gold-200 text-xs md:text-sm font-semibold">
              Orações Recitadas
            </p>
          </div>

          <div className="temple-section rounded-2xl p-4 md:p-6 text-center shadow-sacred">
            <Calendar className="text-emerald-400 mx-auto mb-3" size={28} />
            <p className="text-2xl md:text-3xl font-black text-white mb-1">
              {progress.daysActive}
            </p>
            <p className="text-gold-200 text-xs md:text-sm font-semibold">
              Dias de Devoção
            </p>
          </div>

          <div className="temple-section rounded-2xl p-4 md:p-6 text-center shadow-sacred">
            <Star className="text-gold-400 mx-auto mb-3" size={28} />
            <p className="text-2xl md:text-3xl font-black text-white mb-1">
              {progress.totalPoints}
            </p>
            <p className="text-gold-200 text-xs md:text-sm font-semibold">
              Pontos de Fé
            </p>
          </div>
        </div>

        {/* Achievements */}
        <div className="temple-section rounded-3xl p-6 md:p-8 mb-8 shadow-sacred">
          <h3 className="text-xl md:text-2xl font-black text-gold-400 text-center mb-6 sacred-text">
            CONQUISTAS SAGRADAS
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievements.map((achievement) => {
              const IconComponent = achievement.icon;
              const isUnlocked = progress.achievements.includes(achievement.id);
              
              return (
                <div
                  key={achievement.id}
                  className={`rounded-2xl p-4 md:p-6 border transition-all duration-300 ${
                    isUnlocked
                      ? 'bg-gold-500/20 border-gold-500/50 shadow-sacred'
                      : 'bg-gray-600/20 border-gray-500/30'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-full ${isUnlocked ? 'bg-gold-400 text-black' : 'bg-gray-600 text-gray-400'}`}>
                      <IconComponent size={24} />
                    </div>
                    <div className="flex-1">
                      <h4 className={`font-black text-base md:text-lg mb-1 ${isUnlocked ? 'text-gold-400' : 'text-gray-400'}`}>
                        {achievement.name}
                      </h4>
                      <p className={`text-sm md:text-base ${isUnlocked ? 'text-gold-200' : 'text-gray-500'}`}>
                        {achievement.desc}
                      </p>
                    </div>
                    <div className={`text-xs font-bold px-2 py-1 rounded ${isUnlocked ? 'bg-gold-500 text-black' : 'bg-gray-600 text-gray-300'}`}>
                      +{achievement.points}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Prayer Reminders */}
        <div className="temple-section rounded-3xl p-6 md:p-8 mb-8 shadow-sacred">
          <h3 className="text-xl md:text-2xl font-black text-gold-400 mb-6 sacred-text">
            LEMBRETES SAGRADOS DE ORAÇÃO
          </h3>
          
          {!reminderEnabled ? (
            <div className="text-center">
              <div className="mb-6">
                <Bell className="text-gold-400 mx-auto mb-4" size={48} />
                <p className="text-gold-200 text-base md:text-lg mb-6 leading-relaxed">
                  Configure lembretes diários para nunca esquecer de se conectar com São Cipriano. 
                  Ele chamará você no horário sagrado para suas orações.
                </p>
              </div>
              
              <div className="mb-6">
                <label className="block text-gold-300 font-semibold mb-3">Horário da Oração Diária:</label>
                <input
                  type="time"
                  value={reminderTime}
                  onChange={(e) => setReminderTime(e.target.value)}
                  className="bg-obsidian-400 border border-gold-500/30 rounded-lg px-4 py-3 text-white font-semibold text-center text-lg"
                />
              </div>
              
              <button
                onClick={setupPrayerReminder}
                className="sacred-button py-4 px-8 rounded-full font-black transition-all duration-300 hover:scale-105 shadow-divine"
              >
                🔔 ATIVAR CHAMADO SAGRADO DIÁRIO
              </button>
            </div>
          ) : (
            <div className="text-center">
              <div className="bg-green-600/20 rounded-2xl p-6 md:p-8 border border-green-500/30 mb-6">
                <CheckCircle className="text-green-400 mx-auto mb-4" size={48} />
                <h4 className="text-green-400 font-black text-lg md:text-xl mb-3">LEMBRETES ATIVOS</h4>
                <p className="text-green-300 text-base md:text-lg mb-4">
                  São Cipriano te chamará todos os dias às {reminderTime} para sua oração sagrada
                </p>
                <button
                  onClick={disableReminder}
                  className="bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded-full font-bold transition-all duration-300"
                >
                  Desativar Lembretes
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Settings */}
        <div className="temple-section rounded-3xl p-6 md:p-8 mb-8 shadow-sacred">
          <h3 className="text-xl md:text-2xl font-black text-gold-400 mb-6 sacred-text">
            CONFIGURAÇÕES DO TEMPLO
          </h3>
          
          <div className="space-y-4">
            <button 
              onClick={shareProgress}
              className="w-full bg-gold-500/10 border border-gold-500/30 rounded-2xl p-4 md:p-6 flex items-center gap-4 hover:bg-gold-500/20 transition-all duration-300 hover:scale-105 shadow-sacred"
            >
              <Share2 className="text-gold-400" size={24} />
              <div className="flex-1 text-left">
                <span className="text-white font-bold text-base md:text-lg block">
                  Compartilhar Jornada Espiritual
                </span>
                <span className="text-gold-300 text-sm">
                  Espalhe a palavra de São Cipriano e inspire outros
                </span>
              </div>
            </button>

            <button 
              onClick={resetProgress}
              className="w-full bg-red-500/20 border border-red-400/30 rounded-2xl p-4 md:p-6 flex items-center gap-4 hover:bg-red-500/30 transition-all duration-300"
            >
              <Trash2 className="text-red-400" size={24} />
              <div className="flex-1 text-left">
                <span className="text-red-400 font-bold text-base md:text-lg block">
                  Resetar Progresso Espiritual
                </span>
                <span className="text-red-300 text-sm">
                  Começar uma nova jornada do zero
                </span>
              </div>
            </button>
          </div>
        </div>

        {/* Sacred Message */}
        <div className="sacred-agreement-section rounded-3xl p-6 md:p-8 text-center shadow-mystical">
          <Crown className="text-gold-400 mx-auto mb-6" size={48} />
          <h3 className="sacred-text text-2xl md:text-3xl font-black text-gold-400 mb-6">
            MENSAGEM DIVINA PESSOAL
          </h3>
          <p className="text-gold-200 italic text-lg md:text-xl leading-relaxed mystical-text">
            "Sua devoção sincera toca o coração de São Cipriano. Continue em sua jornada espiritual 
            e veja como sua vida se transforma a cada dia. O Grande Mago recompensa abundantemente 
            aqueles que perseveram no caminho da fé verdadeira e devoção sincera."
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gold-500/10 rounded-xl p-4 border border-gold-500/30">
              <p className="text-gold-400 text-sm font-bold">
                👥 {unlockedAchievements.length}/{achievements.length} Conquistas Desbloqueadas
              </p>
            </div>
            <div className="bg-gold-500/10 rounded-xl p-4 border border-gold-500/30">
              <p className="text-gold-400 text-sm font-bold">
                📅 Membro há {progress.daysActive} dias
              </p>
            </div>
            <div className="bg-gold-500/10 rounded-xl p-4 border border-gold-500/30">
              <p className="text-gold-400 text-sm font-bold">
                ⚡ Próximo nível: {500 - progress.totalPoints} pontos
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
