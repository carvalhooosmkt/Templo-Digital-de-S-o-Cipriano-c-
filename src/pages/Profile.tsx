import { useState, useEffect } from 'react';
import { 
  Trash2, Bell, Volume2, Calendar, Star, Award, Trophy, Flame, Book, Shield,
  Target, Zap, Crown, Gift, CheckCircle, Clock, Settings, Share2, Heart, Globe, ChevronDown
} from 'lucide-react';
import { StorageService, UserProgress } from '../utils/storage';

const translations = {
  pt: {
    title: "SEU PERFIL ESPIRITUAL",
    subtitle: "Devoto Fiel de São Cipriano",
    loading: "Carregando progresso espiritual...",
    currentLevel: "NÍVEL DE DEVOÇÃO ATUAL",
    spiritual: "Espiritual",
    pointsToNext: "pontos para o próximo nível",
    continueDesc: "Continue sua devoção diária para evoluir espiritualmente e receber bênçãos maiores",
    sacredRituals: "Rituais Sagrados",
    prayersRecited: "Orações Recitadas",
    devotionDays: "Dias de Devoção",
    faithPoints: "Pontos de Fé",
    sacredAchievements: "CONQUISTAS SAGRADAS",
    prayerReminders: "LEMBRETES SAGRADOS DE ORAÇÃO",
    reminderDesc: "Configure lembretes diários para nunca esquecer de se conectar com São Cipriano. Ele chamará você no horário sagrado para suas orações.",
    prayerTime: "Horário da Oração Diária:",
    activateDaily: "ATIVAR CHAMADO SAGRADO DIÁRIO",
    remindersActive: "LEMBRETES ATIVOS",
    remindersDesc: "São Cipriano te chamará todos os dias às {time} para sua oração sagrada",
    disableReminders: "Desativar Lembretes",
    templeSettings: "CONFIGURAÇÕES DO TEMPLO",
    shareJourney: "Compartilhar Jornada Espiritual",
    shareDesc: "Espalhe a palavra de São Cipriano e inspire outros",
    resetProgress: "Resetar Progresso Espiritual",
    resetDesc: "Começar uma nova jornada do zero",
    divineMessage: "MENSAGEM DIVINA PESSOAL",
    personalMessage: "Sua devoção sincera toca o coração de São Cipriano. Continue em sua jornada espiritual e veja como sua vida se transforma a cada dia. O Grande Mago recompensa abundantemente aqueles que perseveram no caminho da fé verdadeira e devoção sincera.",
    achievementsUnlocked: "Conquistas Desbloqueadas",
    memberFor: "Membro há {days} dias",
    nextLevel: "Próximo nível: {points} pontos",
    shareText: "Estou em minha jornada espiritual com São Cipriano!",
    level: "Nível",
    rituals: "Rituais",
    prayers: "Orações",
    activeDays: "Dias ativos",
    points: "Pontos",
    visitText: "Venha conhecer o poder transformador do Grande Mago:",
    shareTitle: "Minha Jornada com São Cipriano",
    shareCopied: "Seu progresso foi copiado! Cole no WhatsApp ou onde desejar para espalhar a palavra de São Cipriano.",
    resetConfirm: "Tem certeza que deseja resetar todo seu progresso espiritual? Esta ação não pode ser desfeita!",
    resetSuccess: "Seu progresso foi resetado. Comece uma nova jornada espiritual!",
    reminderSuccess: "Lembrete de oração configurado com sucesso! São Cipriano te chamará diariamente.",
    reminderDenied: "Permissão de notificação negada. Ative as notificações para receber os chamados sagrados.",
    browserNotSupported: "Seu navegador não suporta notificações. Use um navegador moderno para os lembretes sagrados.",
    reminderDisabled: "Lembretes de oração desativados.",
    notificationTitle: "Momento Sagrado de Oração",
    notificationBody: "São Cipriano está esperando sua oração diária. Fortaleça sua conexão divina agora!",
    achievements: {
      firstPrayer: { name: "Primeira Oração", desc: "Recitou sua primeira oração sagrada" },
      firstRitual: { name: "Primeiro Ritual", desc: "Completou seu primeiro ritual" },
      dedicatedDevotee: { name: "Devoto Dedicado", desc: "5 orações recitadas" },
      weeklyFaithful: { name: "Fiel Semanal", desc: "7 dias consecutivos de devoção" },
      ritualMaster: { name: "Mestre dos Rituais", desc: "10 rituais completados" },
      prayerWarrior: { name: "Guerreiro da Oração", desc: "25 orações recitadas" },
      sacredMonth: { name: "Mês Sagrado", desc: "30 dias de devoção" },
      grandMaster: { name: "Grão-Mestre", desc: "Nível máximo atingido" }
    }
  },
  
  en: {
    title: "YOUR SPIRITUAL PROFILE",
    subtitle: "Faithful Devotee of Saint Cyprian",
    loading: "Loading spiritual progress...",
    currentLevel: "CURRENT DEVOTION LEVEL",
    spiritual: "Spiritual",
    pointsToNext: "points to next level",
    continueDesc: "Continue your daily devotion to evolve spiritually and receive greater blessings",
    sacredRituals: "Sacred Rituals",
    prayersRecited: "Prayers Recited",
    devotionDays: "Devotion Days",
    faithPoints: "Faith Points",
    sacredAchievements: "SACRED ACHIEVEMENTS",
    prayerReminders: "SACRED PRAYER REMINDERS",
    reminderDesc: "Set up daily reminders to never forget to connect with Saint Cyprian. He will call you at the sacred time for your prayers.",
    prayerTime: "Daily Prayer Time:",
    activateDaily: "ACTIVATE DAILY SACRED CALL",
    remindersActive: "REMINDERS ACTIVE",
    remindersDesc: "Saint Cyprian will call you every day at {time} for your sacred prayer",
    disableReminders: "Disable Reminders",
    templeSettings: "TEMPLE SETTINGS",
    shareJourney: "Share Spiritual Journey",
    shareDesc: "Spread Saint Cyprian's word and inspire others",
    resetProgress: "Reset Spiritual Progress",
    resetDesc: "Start a new journey from scratch",
    divineMessage: "PERSONAL DIVINE MESSAGE",
    personalMessage: "Your sincere devotion touches Saint Cyprian's heart. Continue your spiritual journey and see how your life transforms each day. The Grand Mage abundantly rewards those who persevere in the path of true faith and sincere devotion.",
    achievementsUnlocked: "Achievements Unlocked",
    memberFor: "Member for {days} days",
    nextLevel: "Next level: {points} points",
    shareText: "I'm on my spiritual journey with Saint Cyprian!",
    level: "Level",
    rituals: "Rituals",
    prayers: "Prayers",
    activeDays: "Active days",
    points: "Points",
    visitText: "Come discover the transforming power of the Grand Mage:",
    shareTitle: "My Journey with Saint Cyprian",
    shareCopied: "Your progress has been copied! Paste on WhatsApp or wherever you want to spread Saint Cyprian's word.",
    resetConfirm: "Are you sure you want to reset all your spiritual progress? This action cannot be undone!",
    resetSuccess: "Your progress has been reset. Start a new spiritual journey!",
    reminderSuccess: "Prayer reminder set successfully! Saint Cyprian will call you daily.",
    reminderDenied: "Notification permission denied. Enable notifications to receive sacred calls.",
    browserNotSupported: "Your browser doesn't support notifications. Use a modern browser for sacred reminders.",
    reminderDisabled: "Prayer reminders disabled.",
    notificationTitle: "Sacred Prayer Moment",
    notificationBody: "Saint Cyprian is waiting for your daily prayer. Strengthen your divine connection now!",
    achievements: {
      firstPrayer: { name: "First Prayer", desc: "Recited your first sacred prayer" },
      firstRitual: { name: "First Ritual", desc: "Completed your first ritual" },
      dedicatedDevotee: { name: "Dedicated Devotee", desc: "5 prayers recited" },
      weeklyFaithful: { name: "Weekly Faithful", desc: "7 consecutive days of devotion" },
      ritualMaster: { name: "Ritual Master", desc: "10 rituals completed" },
      prayerWarrior: { name: "Prayer Warrior", desc: "25 prayers recited" },
      sacredMonth: { name: "Sacred Month", desc: "30 days of devotion" },
      grandMaster: { name: "Grand Master", desc: "Maximum level reached" }
    }
  },
  
  es: {
    title: "TU PERFIL ESPIRITUAL",
    subtitle: "Devoto Fiel de San Cipriano",
    loading: "Cargando progreso espiritual...",
    currentLevel: "NIVEL DE DEVOCIÓN ACTUAL",
    spiritual: "Espiritual",
    pointsToNext: "puntos para el siguiente nivel",
    continueDesc: "Continúa tu devoción diaria para evolucionar espiritualmente y recibir bendiciones mayores",
    sacredRituals: "Rituales Sagrados",
    prayersRecited: "Oraciones Recitadas",
    devotionDays: "Días de Devoción",
    faithPoints: "Puntos de Fe",
    sacredAchievements: "LOGROS SAGRADOS",
    prayerReminders: "RECORDATORIOS SAGRADOS DE ORACIÓN",
    reminderDesc: "Configura recordatorios diarios para nunca olvidar conectarte con San Cipriano. Te llamará en el horario sagrado para tus oraciones.",
    prayerTime: "Hora de Oración Diaria:",
    activateDaily: "ACTIVAR LLAMADA SAGRADA DIARIA",
    remindersActive: "RECORDATORIOS ACTIVOS",
    remindersDesc: "San Cipriano te llamará todos los días a las {time} para tu oración sagrada",
    disableReminders: "Desactivar Recordatorios",
    templeSettings: "CONFIGURACIONES DEL TEMPLO",
    shareJourney: "Compartir Jornada Espiritual",
    shareDesc: "Difunde la palabra de San Cipriano e inspira a otros",
    resetProgress: "Reiniciar Progreso Espiritual",
    resetDesc: "Comenzar una nueva jornada desde cero",
    divineMessage: "MENSAJE DIVINO PERSONAL",
    personalMessage: "Tu devoción sincera toca el corazón de San Cipriano. Continúa tu jornada espiritual y ve cómo tu vida se transforma cada día. El Gran Mago recompensa abundantemente a aquellos que perseveran en el camino de la fe verdadera y devoción sincera.",
    achievementsUnlocked: "Logros Desbloqueados",
    memberFor: "Miembro por {days} días",
    nextLevel: "Siguiente nivel: {points} puntos",
    shareText: "¡Estoy en mi jornada espiritual con San Cipriano!",
    level: "Nivel",
    rituals: "Rituales",
    prayers: "Oraciones",
    activeDays: "Días activos",
    points: "Puntos",
    visitText: "Ven a conocer el poder transformador del Gran Mago:",
    shareTitle: "Mi Jornada con San Cipriano",
    shareCopied: "¡Tu progreso ha sido copiado! Pega en WhatsApp o donde desees para difundir la palabra de San Cipriano.",
    resetConfirm: "¿Estás seguro de que quieres reiniciar todo tu progreso espiritual? ¡Esta acción no se puede deshacer!",
    resetSuccess: "Tu progreso ha sido reiniciado. ¡Comienza una nueva jornada espiritual!",
    reminderSuccess: "¡Recordatorio de oración configurado exitosamente! San Cipriano te llamará diariamente.",
    reminderDenied: "Permiso de notificación denegado. Activa las notificaciones para recibir llamadas sagradas.",
    browserNotSupported: "Tu navegador no soporta notificaciones. Usa un navegador moderno para recordatorios sagrados.",
    reminderDisabled: "Recordatorios de oración desactivados.",
    notificationTitle: "Momento Sagrado de Oración",
    notificationBody: "San Cipriano está esperando tu oración diaria. ¡Fortalece tu conexión divina ahora!",
    achievements: {
      firstPrayer: { name: "Primera Oración", desc: "Recitó su primera oración sagrada" },
      firstRitual: { name: "Primer Ritual", desc: "Completó su primer ritual" },
      dedicatedDevotee: { name: "Devoto Dedicado", desc: "5 oraciones recitadas" },
      weeklyFaithful: { name: "Fiel Semanal", desc: "7 días consecutivos de devoción" },
      ritualMaster: { name: "Maestro de Rituales", desc: "10 rituales completados" },
      prayerWarrior: { name: "Guerrero de Oración", desc: "25 oraciones recitadas" },
      sacredMonth: { name: "Mes Sagrado", desc: "30 días de devoción" },
      grandMaster: { name: "Gran Maestro", desc: "Nivel máximo alcanzado" }
    }
  },
  
  en: {
    title: "YOUR SPIRITUAL PROFILE",
    subtitle: "Faithful Devotee of Saint Cyprian",
    loading: "Loading spiritual progress...",
    currentLevel: "CURRENT DEVOTION LEVEL",
    spiritual: "Spiritual",
    pointsToNext: "points to next level",
    continueDesc: "Continue your daily devotion to evolve spiritually and receive greater blessings",
    sacredRituals: "Sacred Rituals",
    prayersRecited: "Prayers Recited",
    devotionDays: "Devotion Days",
    faithPoints: "Faith Points",
    sacredAchievements: "SACRED ACHIEVEMENTS",
    prayerReminders: "SACRED PRAYER REMINDERS",
    reminderDesc: "Set up daily reminders to never forget to connect with Saint Cyprian. He will call you at the sacred time for your prayers.",
    prayerTime: "Daily Prayer Time:",
    activateDaily: "ACTIVATE DAILY SACRED CALL",
    remindersActive: "REMINDERS ACTIVE",
    remindersDesc: "Saint Cyprian will call you every day at {time} for your sacred prayer",
    disableReminders: "Disable Reminders",
    templeSettings: "TEMPLE SETTINGS",
    shareJourney: "Share Spiritual Journey",
    shareDesc: "Spread Saint Cyprian's word and inspire others",
    resetProgress: "Reset Spiritual Progress",
    resetDesc: "Start a new journey from scratch",
    divineMessage: "PERSONAL DIVINE MESSAGE",
    personalMessage: "Your sincere devotion touches Saint Cyprian's heart. Continue your spiritual journey and see how your life transforms each day. The Grand Mage abundantly rewards those who persevere in the path of true faith and sincere devotion.",
    achievementsUnlocked: "Achievements Unlocked",
    memberFor: "Member for {days} days",
    nextLevel: "Next level: {points} points",
    shareText: "I'm on my spiritual journey with Saint Cyprian!",
    level: "Level",
    rituals: "Rituals",
    prayers: "Prayers",
    activeDays: "Active days",
    points: "Points",
    visitText: "Come discover the transforming power of the Grand Mage:",
    shareTitle: "My Journey with Saint Cyprian",
    shareCopied: "Your progress has been copied! Paste on WhatsApp or wherever you want to spread Saint Cyprian's word.",
    resetConfirm: "Are you sure you want to reset all your spiritual progress? This action cannot be undone!",
    resetSuccess: "Your progress has been reset. Start a new spiritual journey!",
    reminderSuccess: "Prayer reminder set successfully! Saint Cyprian will call you daily.",
    reminderDenied: "Notification permission denied. Enable notifications to receive sacred calls.",
    browserNotSupported: "Your browser doesn't support notifications. Use a modern browser for sacred reminders.",
    reminderDisabled: "Prayer reminders disabled.",
    notificationTitle: "Sacred Prayer Moment",
    notificationBody: "Saint Cyprian is waiting for your daily prayer. Strengthen your divine connection now!",
    achievements: {
      firstPrayer: { name: "First Prayer", desc: "Recited your first sacred prayer" },
      firstRitual: { name: "First Ritual", desc: "Completed your first ritual" },
      dedicatedDevotee: { name: "Dedicated Devotee", desc: "5 prayers recited" },
      weeklyFaithful: { name: "Weekly Faithful", desc: "7 consecutive days of devotion" },
      ritualMaster: { name: "Ritual Master", desc: "10 rituals completed" },
      prayerWarrior: { name: "Prayer Warrior", desc: "25 prayers recited" },
      sacredMonth: { name: "Sacred Month", desc: "30 days of devotion" },
      grandMaster: { name: "Grand Master", desc: "Maximum level reached" }
    }
  },
  
  es: {
    title: "TU PERFIL ESPIRITUAL",
    subtitle: "Devoto Fiel de San Cipriano",
    loading: "Cargando progreso espiritual...",
    currentLevel: "NIVEL DE DEVOCIÓN ACTUAL",
    spiritual: "Espiritual",
    pointsToNext: "puntos para el siguiente nivel",
    continueDesc: "Continúa tu devoción diaria para evolucionar espiritualmente y recibir bendiciones mayores",
    sacredRituals: "Rituales Sagrados",
    prayersRecited: "Oraciones Recitadas",
    devotionDays: "Días de Devoción",
    faithPoints: "Puntos de Fe",
    sacredAchievements: "LOGROS SAGRADOS",
    prayerReminders: "RECORDATORIOS SAGRADOS DE ORACIÓN",
    reminderDesc: "Configura recordatorios diarios para nunca olvidar conectarte con San Cipriano. Te llamará en el horario sagrado para tus oraciones.",
    prayerTime: "Hora de Oración Diaria:",
    activateDaily: "ACTIVAR LLAMADA SAGRADA DIARIA",
    remindersActive: "RECORDATORIOS ACTIVOS",
    remindersDesc: "San Cipriano te llamará todos los días a las {time} para tu oración sagrada",
    disableReminders: "Desactivar Recordatorios",
    templeSettings: "CONFIGURACIONES DEL TEMPLO",
    shareJourney: "Compartir Jornada Espiritual",
    shareDesc: "Difunde la palabra de San Cipriano e inspira a otros",
    resetProgress: "Reiniciar Progreso Espiritual",
    resetDesc: "Comenzar una nueva jornada desde cero",
    divineMessage: "MENSAJE DIVINO PERSONAL",
    personalMessage: "Tu devoción sincera toca el corazón de San Cipriano. Continúa tu jornada espiritual y ve cómo tu vida se transforma cada día. El Gran Mago recompensa abundantemente a aquellos que perseveran en el camino de la fe verdadera y devoción sincera.",
    achievementsUnlocked: "Logros Desbloqueados",
    memberFor: "Miembro por {days} días",
    nextLevel: "Siguiente nivel: {points} puntos",
    shareText: "¡Estoy en mi jornada espiritual con San Cipriano!",
    level: "Nivel",
    rituals: "Rituales",
    prayers: "Oraciones",
    activeDays: "Días activos",
    points: "Puntos",
    visitText: "Ven a conocer el poder transformador del Gran Mago:",
    shareTitle: "Mi Jornada con San Cipriano",
    shareCopied: "¡Tu progreso ha sido copiado! Pega en WhatsApp o donde desees para difundir la palabra de San Cipriano.",
    resetConfirm: "¿Estás seguro de que quieres reiniciar todo tu progreso espiritual? ¡Esta acción no se puede deshacer!",
    resetSuccess: "Tu progreso ha sido reiniciado. ¡Comienza una nueva jornada espiritual!",
    reminderSuccess: "¡Recordatorio de oración configurado exitosamente! San Cipriano te llamará diariamente.",
    reminderDenied: "Permiso de notificación denegado. Activa las notificaciones para recibir llamadas sagradas.",
    browserNotSupported: "Tu navegador no soporta notificaciones. Usa un navegador moderno para recordatorios sagrados.",
    reminderDisabled: "Recordatorios de oración desactivados.",
    notificationTitle: "Momento Sagrado de Oración",
    notificationBody: "San Cipriano está esperando tu oración diaria. ¡Fortalece tu conexión divina ahora!",
    achievements: {
      firstPrayer: { name: "Primera Oración", desc: "Recitó su primera oración sagrada" },
      firstRitual: { name: "Primer Ritual", desc: "Completó su primer ritual" },
      dedicatedDevotee: { name: "Devoto Dedicado", desc: "5 oraciones recitadas" },
      weeklyFaithful: { name: "Fiel Semanal", desc: "7 días consecutivos de devoción" },
      ritualMaster: { name: "Maestro de Rituales", desc: "10 rituales completados" },
      prayerWarrior: { name: "Guerrero de Oración", desc: "25 oraciones recitadas" },
      sacredMonth: { name: "Mes Sagrado", desc: "30 días de devoción" },
      grandMaster: { name: "Gran Maestro", desc: "Nivel máximo alcanzado" }
    }
  },
  
  de: {
    title: "IHR SPIRITUELLES PROFIL",
    subtitle: "Treuer Anhänger von Heiligem Cyprian",
    loading: "Lade spirituellen Fortschritt...",
    currentLevel: "AKTUELLES HINGABE-LEVEL",
    spiritual: "Spirituell",
    pointsToNext: "Punkte zum nächsten Level",
    continueDesc: "Setzen Sie Ihre tägliche Hingabe fort, um spirituell zu evolvieren und größere Segnungen zu erhalten",
    sacredRituals: "Heilige Rituale",
    prayersRecited: "Gebete Rezitiert",
    devotionDays: "Hingabe-Tage",
    faithPoints: "Glaubens-Punkte",
    sacredAchievements: "HEILIGE ERRUNGENSCHAFTEN",
    prayerReminders: "HEILIGE GEBETS-ERINNERUNGEN",
    reminderDesc: "Richten Sie tägliche Erinnerungen ein, um nie zu vergessen, sich mit Heiligem Cyprian zu verbinden. Er wird Sie zur heiligen Zeit für Ihre Gebete rufen.",
    prayerTime: "Tägliche Gebetszeit:",
    activateDaily: "TÄGLICHEN HEILIGEN RUF AKTIVIEREN",
    remindersActive: "ERINNERUNGEN AKTIV",
    remindersDesc: "Heiliger Cyprian wird Sie jeden Tag um {time} für Ihr heiliges Gebet rufen",
    disableReminders: "Erinnerungen Deaktivieren",
    templeSettings: "TEMPEL-EINSTELLUNGEN",
    shareJourney: "Spirituelle Reise Teilen",
    shareDesc: "Verbreiten Sie Heiligen Cyprians Wort und inspirieren Sie andere",
    resetProgress: "Spirituellen Fortschritt Zurücksetzen",
    resetDesc: "Eine neue Reise von vorn beginnen",
    divineMessage: "PERSÖNLICHE GÖTTLICHE NACHRICHT",
    personalMessage: "Ihre aufrichtige Hingabe berührt Heiligen Cyprians Herz. Setzen Sie Ihre spirituelle Reise fort und sehen Sie, wie sich Ihr Leben jeden Tag verwandelt. Der Großmagier belohnt reichlich diejenigen, die auf dem Weg des wahren Glaubens und aufrichtiger Hingabe beharren.",
    achievementsUnlocked: "Errungenschaften Freigeschaltet",
    memberFor: "Mitglied seit {days} Tagen",
    nextLevel: "Nächstes Level: {points} Punkte",
    shareText: "Ich bin auf meiner spirituellen Reise mit Heiligem Cyprian!",
    level: "Level",
    rituals: "Rituale",
    prayers: "Gebete",
    activeDays: "Aktive Tage",
    points: "Punkte",
    visitText: "Entdecken Sie die verwandelnde Kraft des Großmagiers:",
    shareTitle: "Meine Reise mit Heiligem Cyprian",
    shareCopied: "Ihr Fortschritt wurde kopiert! Fügen Sie in WhatsApp oder wo immer Sie möchten ein, um Heiligen Cyprians Wort zu verbreiten.",
    resetConfirm: "Sind Sie sicher, dass Sie Ihren gesamten spirituellen Fortschritt zurücksetzen möchten? Diese Aktion kann nicht rückgängig gemacht werden!",
    resetSuccess: "Ihr Fortschritt wurde zurückgesetzt. Beginnen Sie eine neue spirituelle Reise!",
    reminderSuccess: "Gebets-Erinnerung erfolgreich eingestellt! Heiliger Cyprian wird Sie täglich rufen.",
    reminderDenied: "Benachrichtigungs-Berechtigung verweigert. Aktivieren Sie Benachrichtigungen, um heilige Anrufe zu erhalten.",
    browserNotSupported: "Ihr Browser unterstützt keine Benachrichtigungen. Verwenden Sie einen modernen Browser für heilige Erinnerungen.",
    reminderDisabled: "Gebets-Erinnerungen deaktiviert.",
    notificationTitle: "Heiliger Gebetsmoment",
    notificationBody: "Heiliger Cyprian wartet auf Ihr tägliches Gebet. Stärken Sie jetzt Ihre göttliche Verbindung!",
    achievements: {
      firstPrayer: { name: "Erstes Gebet", desc: "Rezitierte Ihr erstes heiliges Gebet" },
      firstRitual: { name: "Erstes Ritual", desc: "Vollendete Ihr erstes Ritual" },
      dedicatedDevotee: { name: "Hingegebener Anhänger", desc: "5 Gebete rezitiert" },
      weeklyFaithful: { name: "Wöchentlich Treuer", desc: "7 aufeinanderfolgende Tage der Hingabe" },
      ritualMaster: { name: "Ritual-Meister", desc: "10 Rituale vollendet" },
      prayerWarrior: { name: "Gebets-Krieger", desc: "25 Gebete rezitiert" },
      sacredMonth: { name: "Heiliger Monat", desc: "30 Tage der Hingabe" },
      grandMaster: { name: "Großmeister", desc: "Maximales Level erreicht" }
    }
  },
  
  it: {
    title: "IL TUO PROFILO SPIRITUALE",
    subtitle: "Devoto Fedele di San Cipriano",
    loading: "Caricamento progresso spirituale...",
    currentLevel: "LIVELLO DI DEVOZIONE ATTUALE",
    spiritual: "Spirituale",
    pointsToNext: "punti al prossimo livello",
    continueDesc: "Continua la tua devozione quotidiana per evolvere spiritualmente e ricevere benedizioni maggiori",
    sacredRituals: "Rituali Sacri",
    prayersRecited: "Preghiere Recitate",
    devotionDays: "Giorni di Devozione",
    faithPoints: "Punti di Fede",
    sacredAchievements: "CONQUISTE SACRE",
    prayerReminders: "PROMEMORIA SACRI DI PREGHIERA",
    reminderDesc: "Imposta promemoria quotidiani per non dimenticare mai di connetterti con San Cipriano. Ti chiamerà nell'orario sacro per le tue preghiere.",
    prayerTime: "Orario di Preghiera Quotidiana:",
    activateDaily: "ATTIVA CHIAMATA SACRA QUOTIDIANA",
    remindersActive: "PROMEMORIA ATTIVI",
    remindersDesc: "San Cipriano ti chiamerà ogni giorno alle {time} per la tua preghiera sacra",
    disableReminders: "Disattiva Promemoria",
    templeSettings: "IMPOSTAZIONI DEL TEMPIO",
    shareJourney: "Condividi Viaggio Spirituale",
    shareDesc: "Diffondi la parola di San Cipriano e ispira altri",
    resetProgress: "Resetta Progresso Spirituale",
    resetDesc: "Inizia un nuovo viaggio da zero",
    divineMessage: "MESSAGGIO DIVINO PERSONALE",
    personalMessage: "La tua devozione sincera tocca il cuore di San Cipriano. Continua il tuo viaggio spirituale e vedi come la tua vita si trasforma ogni giorno. Il Grande Mago ricompensa abbondantemente coloro che perseverano nel cammino della vera fede e devozione sincera.",
    achievementsUnlocked: "Conquiste Sbloccate",
    memberFor: "Membro da {days} giorni",
    nextLevel: "Prossimo livello: {points} punti",
    shareText: "Sono nel mio viaggio spirituale con San Cipriano!",
    level: "Livello",
    rituals: "Rituali",
    prayers: "Preghiere",
    activeDays: "Giorni attivi",
    points: "Punti",
    visitText: "Vieni a scoprire il potere trasformatore del Grande Mago:",
    shareTitle: "Il Mio Viaggio con San Cipriano",
    shareCopied: "Il tuo progresso è stato copiato! Incolla su WhatsApp o dove vuoi per diffondere la parola di San Cipriano.",
    resetConfirm: "Sei sicuro di voler resettare tutto il tuo progresso spirituale? Questa azione non può essere annullata!",
    resetSuccess: "Il tuo progresso è stato resettato. Inizia un nuovo viaggio spirituale!",
    reminderSuccess: "Promemoria di preghiera impostato con successo! San Cipriano ti chiamerà quotidianamente.",
    reminderDenied: "Permesso di notifica negato. Attiva le notifiche per ricevere chiamate sacre.",
    browserNotSupported: "Il tuo browser non supporta le notifiche. Usa un browser moderno per promemoria sacri.",
    reminderDisabled: "Promemoria di preghiera disattivati.",
    notificationTitle: "Momento Sacro di Preghiera",
    notificationBody: "San Cipriano sta aspettando la tua preghiera quotidiana. Rafforza la tua connessione divina ora!",
    achievements: {
      firstPrayer: { name: "Prima Preghiera", desc: "Recitò la sua prima preghiera sacra" },
      firstRitual: { name: "Primo Rituale", desc: "Completò il suo primo rituale" },
      dedicatedDevotee: { name: "Devoto Dedicato", desc: "5 preghiere recitate" },
      weeklyFaithful: { name: "Fedele Settimanale", desc: "7 giorni consecutivi di devozione" },
      ritualMaster: { name: "Maestro dei Rituali", desc: "10 rituali completati" },
      prayerWarrior: { name: "Guerriero della Preghiera", desc: "25 preghiere recitate" },
      sacredMonth: { name: "Mese Sacro", desc: "30 giorni di devozione" },
      grandMaster: { name: "Gran Maestro", desc: "Livello massimo raggiunto" }
    }
  },
  
  ru: {
    title: "ВАШ ДУХОВНЫЙ ПРОФИЛЬ",
    subtitle: "Верный Последователь Святого Киприана",
    loading: "Загрузка духовного прогресса...",
    currentLevel: "ТЕКУЩИЙ УРОВЕНЬ ПРЕДАННОСТИ",
    spiritual: "Духовный",
    pointsToNext: "баллов до следующего уровня",
    continueDesc: "Продолжайте вашу ежедневную преданность для духовной эволюции и получения больших благословений",
    sacredRituals: "Священные Ритуалы",
    prayersRecited: "Прочитанные Молитвы",
    devotionDays: "Дни Преданности",
    faithPoints: "Баллы Веры",
    sacredAchievements: "СВЯЩЕННЫЕ ДОСТИЖЕНИЯ",
    prayerReminders: "СВЯЩЕННЫЕ НАПОМИНАНИЯ О МОЛИТВЕ",
    reminderDesc: "Настройте ежедневные напоминания, чтобы никогда не забывать соединяться со Святым Киприаном. Он позовет вас в священное время для ваших молитв.",
    prayerTime: "Время Ежедневной Молитвы:",
    activateDaily: "АКТИВИРОВАТЬ ЕЖЕДНЕВНЫЙ СВЯЩЕННЫЙ ЗОВ",
    remindersActive: "НАПОМИНАНИЯ АКТИВНЫ",
    remindersDesc: "Святой Киприан будет звать вас каждый день в {time} для вашей священной молитвы",
    disableReminders: "Отключить Напоминания",
    templeSettings: "НАСТРОЙКИ ХРАМА",
    shareJourney: "Поделиться Духовным Путешествием",
    shareDesc: "Распространяйте слово Святого Киприана и вдохновляйте других",
    resetProgress: "Сбросить Духовный Прогресс",
    resetDesc: "Начать новое путешествие с нуля",
    divineMessage: "ЛИЧНОЕ БОЖЕСТВЕННОЕ СООБЩЕНИЕ",
    personalMessage: "Ваша искренняя преданность касается сердца Святого Киприана. Продолжайте ваше духовное путешествие и видите, как ваша жизнь преобразуется каждый день. Великий Маг обильно вознаграждает тех, кто упорствует на пути истинной веры и искренней преданности.",
    achievementsUnlocked: "Достижения Разблокированы",
    memberFor: "Участник уже {days} дней",
    nextLevel: "Следующий уровень: {points} баллов",
    shareText: "Я в своем духовном путешествии со Святым Киприаном!",
    level: "Уровень",
    rituals: "Ритуалы",
    prayers: "Молитвы",
    activeDays: "Активные дни",
    points: "Баллы",
    visitText: "Приходите открыть преобразующую силу Великого Мага:",
    shareTitle: "Мое Путешествие со Святым Киприаном",
    shareCopied: "Ваш прогресс скопирован! Вставьте в WhatsApp или где хотите, чтобы распространить слово Святого Киприана.",
    resetConfirm: "Вы уверены, что хотите сбросить весь ваш духовный прогресс? Это действие нельзя отменить!",
    resetSuccess: "Ваш прогресс сброшен. Начните новое духовное путешествие!",
    reminderSuccess: "Напоминание о молитве успешно настроено! Святой Киприан будет звать вас ежедневно.",
    reminderDenied: "Разрешение на уведомления отклонено. Включите уведомления для получения священных звонков.",
    browserNotSupported: "Ваш браузер не поддерживает уведомления. Используйте современный браузер для священных напоминаний.",
    reminderDisabled: "Напоминания о молитве отключены.",
    notificationTitle: "Священный Момент Молитвы",
    notificationBody: "Святой Киприан ждет вашу ежедневную молитву. Укрепите вашу божественную связь сейчас!",
    achievements: {
      firstPrayer: { name: "Первая Молитва", desc: "Прочитали вашу первую священную молитву" },
      firstRitual: { name: "Первый Ритуал", desc: "Завершили ваш первый ритуал" },
      dedicatedDevotee: { name: "Преданный Последователь", desc: "5 молитв прочитано" },
      weeklyFaithful: { name: "Еженедельно Верный", desc: "7 последовательных дней преданности" },
      ritualMaster: { name: "Мастер Ритуалов", desc: "10 ритуалов завершено" },
      prayerWarrior: { name: "Воин Молитвы", desc: "25 молитв прочитано" },
      sacredMonth: { name: "Священный Месяц", desc: "30 дней преданности" },
      grandMaster: { name: "Великий Мастер", desc: "Максимальный уровень достигнут" }
    }
  },
  
  zh: {
    title: "您的精神档案",
    subtitle: "圣西普里安的忠实信徒",
    loading: "加载精神进度...",
    currentLevel: "当前奉献等级",
    spiritual: "精神",
    pointsToNext: "点数到下一级",
    continueDesc: "继续您的日常奉献以在精神上进化并获得更大的祝福",
    sacredRituals: "神圣仪式",
    prayersRecited: "背诵的祈祷",
    devotionDays: "奉献天数",
    faithPoints: "信仰积分",
    sacredAchievements: "神圣成就",
    prayerReminders: "神圣祈祷提醒",
    reminderDesc: "设置日常提醒，永远不要忘记与圣西普里安连接。他会在神圣时间呼唤您进行祈祷。",
    prayerTime: "每日祈祷时间：",
    activateDaily: "激活每日神圣呼唤",
    remindersActive: "提醒已激活",
    remindersDesc: "圣西普里安会每天在{time}呼唤您进行神圣祈祷",
    disableReminders: "禁用提醒",
    templeSettings: "殿堂设置",
    shareJourney: "分享精神旅程",
    shareDesc: "传播圣西普里安的话语并启发他人",
    resetProgress: "重置精神进度",
    resetDesc: "从零开始新的旅程",
    divineMessage: "个人神圣信息",
    personalMessage: "您真诚的奉献触动了圣西普里安的心。继续您的精神旅程，看看您的生活如何每天转变。大法师丰富地奖励那些在真正信仰和真诚奉献道路上坚持的人。",
    achievementsUnlocked: "成就已解锁",
    memberFor: "成员已{days}天",
    nextLevel: "下一级：{points}点",
    shareText: "我正在与圣西普里安的精神旅程中！",
    level: "等级",
    rituals: "仪式",
    prayers: "祈祷",
    activeDays: "活跃天数",
    points: "积分",
    visitText: "来发现大法师的变革力量：",
    shareTitle: "我与圣西普里安的旅程",
    shareCopied: "您的进度已复制！粘贴到WhatsApp或任何您想传播圣西普里安话语的地方。",
    resetConfirm: "您确定要重置所有精神进度吗？此操作无法撤销！",
    resetSuccess: "您的进度已重置。开始新的精神旅程！",
    reminderSuccess: "祈祷提醒设置成功！圣西普里安将每天呼唤您。",
    reminderDenied: "通知权限被拒绝。启用通知以接收神圣呼唤。",
    browserNotSupported: "您的浏览器不支持通知。使用现代浏览器进行神圣提醒。",
    reminderDisabled: "祈祷提醒已禁用。",
    notificationTitle: "神圣祈祷时刻",
    notificationBody: "圣西普里安正在等待您的日常祈祷。现在加强您的神圣连接！",
    achievements: {
      firstPrayer: { name: "第一次祈祷", desc: "背诵了您的第一个神圣祈祷" },
      firstRitual: { name: "第一次仪式", desc: "完成了您的第一个仪式" },
      dedicatedDevotee: { name: "专注信徒", desc: "背诵了5次祈祷" },
      weeklyFaithful: { name: "每周忠实", desc: "连续7天的奉献" },
      ritualMaster: { name: "仪式大师", desc: "完成了10个仪式" },
      prayerWarrior: { name: "祈祷战士", desc: "背诵了25次祈祷" },
      sacredMonth: { name: "神圣月份", desc: "30天的奉献" },
      grandMaster: { name: "大师", desc: "达到最高等级" }
    }
  },
  
  ja: {
    title: "あなたの精神プロフィール",
    subtitle: "聖キプリアヌスの忠実な信者",
    loading: "精神的進歩をロード中...",
    currentLevel: "現在の献身レベル",
    spiritual: "精神的",
    pointsToNext: "ポイントで次のレベル",
    continueDesc: "精神的に進化し、より大きな祝福を受けるために、日々の献身を続けてください",
    sacredRituals: "神聖な儀式",
    prayersRecited: "唱えた祈り",
    devotionDays: "献身の日数",
    faithPoints: "信仰ポイント",
    sacredAchievements: "神聖な功績",
    prayerReminders: "神聖な祈りのリマインダー",
    reminderDesc: "聖キプリアヌスとの繋がりを忘れないように毎日のリマインダーを設定してください。神聖な時間にあなたの祈りのために呼びかけるでしょう。",
    prayerTime: "毎日の祈りの時間：",
    activateDaily: "毎日の神聖な呼びかけを有効化",
    remindersActive: "リマインダー有効",
    remindersDesc: "聖キプリアヌスは毎日{time}にあなたの神聖な祈りのために呼びかけるでしょう",
    disableReminders: "リマインダーを無効化",
    templeSettings: "神殿設定",
    shareJourney: "精神的旅路を共有",
    shareDesc: "聖キプリアヌスの言葉を広め、他者を鼓舞",
    resetProgress: "精神的進歩をリセット",
    resetDesc: "ゼロから新しい旅路を始める",
    divineMessage: "個人的な神聖メッセージ",
    personalMessage: "あなたの真摯な献身は聖キプリアヌスの心に触れます。精神的旅路を続け、あなたの人生が毎日どのように変わるかを見てください。大魔法師は真の信仰と真摯な献身の道を歩み続ける者を豊かに報います。",
    achievementsUnlocked: "功績解除済み",
    memberFor: "{days}日間のメンバー",
    nextLevel: "次のレベル：{points}ポイント",
    shareText: "私は聖キプリアヌスとの精神的旅路にいます！",
    level: "レベル",
    rituals: "儀式",
    prayers: "祈り",
    activeDays: "活動日数",
    points: "ポイント",
    visitText: "大魔法師の変革力を発見しに来てください：",
    shareTitle: "聖キプリアヌスとの私の旅路",
    shareCopied: "あなたの進歩がコピーされました！WhatsAppや聖キプリアヌスの言葉を広めたい場所に貼り付けてください。",
    resetConfirm: "すべての精神的進歩をリセットしてもよろしいですか？この操作は元に戻せません！",
    resetSuccess: "あなたの進歩がリセットされました。新しい精神的旅路を始めてください！",
    reminderSuccess: "祈りのリマインダーが正常に設定されました！聖キプリアヌスが毎日呼びかけるでしょう。",
    reminderDenied: "通知の許可が拒否されました。神聖な呼びかけを受けるために通知を有効にしてください。",
    browserNotSupported: "あなたのブラウザは通知をサポートしていません。神聖なリマインダーのためにモダンなブラウザを使用してください。",
    reminderDisabled: "祈りのリマインダーが無効になりました。",
    notificationTitle: "神聖な祈りの瞬間",
    notificationBody: "聖キプリアヌスがあなたの日々の祈りを待っています。今、あなたの神聖な繋がりを強化してください！",
    achievements: {
      firstPrayer: { name: "最初の祈り", desc: "最初の神聖な祈りを唱えました" },
      firstRitual: { name: "最初の儀式", desc: "最初の儀式を完了しました" },
      dedicatedDevotee: { name: "献身的な信者", desc: "5回の祈りを唱えました" },
      weeklyFaithful: { name: "週間忠実", desc: "7日連続の献身" },
      ritualMaster: { name: "儀式の師匠", desc: "10の儀式を完了" },
      prayerWarrior: { name: "祈りの戦士", desc: "25回の祈りを唱えました" },
      sacredMonth: { name: "神聖な月", desc: "30日間の献身" },
      grandMaster: { name: "大師匠", desc: "最高レベルに到達" }
    }
  },
  
  ar: {
    title: "ملفك الروحي",
    subtitle: "المتفاني المخلص للقديس قبريانوس",
    loading: "تحميل التقدم الروحي...",
    currentLevel: "مستوى التفاني الحالي",
    spiritual: "روحي",
    pointsToNext: "نقطة للمستوى التالي",
    continueDesc: "استمر في تفانيك اليومي للتطور روحياً واستقبال بركات أعظم",
    sacredRituals: "الطقوس المقدسة",
    prayersRecited: "الصلوات المتلوة",
    devotionDays: "أيام التفاني",
    faithPoints: "نقاط الإيمان",
    sacredAchievements: "الإنجازات المقدسة",
    prayerReminders: "تذكيرات الصلاة المقدسة",
    reminderDesc: "اضبط تذكيرات يومية لعدم نسيان الاتصال بالقديس قبريانوس أبداً. سيناديك في الوقت المقدس لصلواتك.",
    prayerTime: "وقت الصلاة اليومية:",
    activateDaily: "تفعيل النداء المقدس اليومي",
    remindersActive: "التذكيرات نشطة",
    remindersDesc: "القديس قبريانوس سيناديك كل يوم في {time} لصلاتك المقدسة",
    disableReminders: "إلغاء التذكيرات",
    templeSettings: "إعدادات المعبد",
    shareJourney: "مشاركة الرحلة الروحية",
    shareDesc: "انشر كلمة القديس قبريانوس وألهم الآخرين",
    resetProgress: "إعادة تعيين التقدم الروحي",
    resetDesc: "بدء رحلة جديدة من الصفر",
    divineMessage: "رسالة إلهية شخصية",
    personalMessage: "تفانيك الصادق يلمس قلب القديس قبريانوس. استمر في رحلتك الروحية وانظر كيف تتحول حياتك كل يوم. الساحر العظيم يكافئ بوفرة أولئك الذين يثابرون في طريق الإيمان الحقيقي والتفاني الصادق.",
    achievementsUnlocked: "الإنجازات المفتوحة",
    memberFor: "عضو لمدة {days} يوم",
    nextLevel: "المستوى التالي: {points} نقطة",
    shareText: "أنا في رحلتي الروحية مع القديس قبريانوس!",
    level: "مستوى",
    rituals: "طقوس",
    prayers: "صلوات",
    activeDays: "أيام نشطة",
    points: "نقاط",
    visitText: "تعال لاكتشاف القوة المحولة للساحر العظيم:",
    shareTitle: "رحلتي مع القديس قبريانوس",
    shareCopied: "تم نسخ تقدمك! الصق في واتساب أو أينما تريد لنشر كلمة القديس قبريانوس.",
    resetConfirm: "هل أنت متأكد من أنك تريد إعادة تعيين كل تقدمك الروحي؟ لا يمكن التراجع عن هذا الإجراء!",
    resetSuccess: "تم إعادة تعيين تقدمك. ابدأ رحلة روحية جديدة!",
    reminderSuccess: "تم ضبط تذكير الصلاة بنجاح! القديس قبريانوس سيناديك يومياً.",
    reminderDenied: "تم رفض إذن الإشعارات. فعل الإشعارات لتلقي المكالمات المقدسة.",
    browserNotSupported: "متصفحك لا يدعم الإشعارات. استخدم متصفحاً حديثاً للتذكيرات المقدسة.",
    reminderDisabled: "تذكيرات الصلاة معطلة.",
    notificationTitle: "لحظة الصلاة المقدسة",
    notificationBody: "القديس قبريانوس ينتظر صلاتك اليومية. قوي اتصالك الإلهي الآن!",
    achievements: {
      firstPrayer: { name: "الصلاة الأولى", desc: "تلا صلاته المقدسة الأولى" },
      firstRitual: { name: "الطقوس الأولى", desc: "أكمل طقوسه الأولى" },
      dedicatedDevotee: { name: "المتفاني المخلص", desc: "5 صلوات متلوة" },
      weeklyFaithful: { name: "المخلص الأسبوعي", desc: "7 أيام متتالية من التفاني" },
      ritualMaster: { name: "سيد الطقوس", desc: "10 طقوس مكتملة" },
      prayerWarrior: { name: "محارب الصلاة", desc: "25 صلاة متلوة" },
      sacredMonth: { name: "الشهر المقدس", desc: "30 يوم من التفاني" },
      grandMaster: { name: "السيد الأعظم", desc: "تم الوصول للمستوى الأقصى" }
    }
  },
  
  hi: {
    title: "आपकी आध्यात्मिक प्रोफ़ाइल",
    subtitle: "संत साइप्रियन के वफादार भक्त",
    loading: "आध्यात्मिक प्रगति लोड हो रही है...",
    currentLevel: "वर्तमान भक्ति स्तर",
    spiritual: "आध्यात्मिक",
    pointsToNext: "अगले स्तर के लिए अंक",
    continueDesc: "आध्यात्मिक रूप से विकसित होने और अधिक आशीर्वाद प्राप्त करने के लिए अपनी दैनिक भक्ति जारी रखें",
    sacredRituals: "पवित्र अनुष्ठान",
    prayersRecited: "पाठ की गई प्रार्थनाएं",
    devotionDays: "भक्ति के दिन",
    faithPoints: "विश्वास अंक",
    sacredAchievements: "पवित्र उपलब्धियां",
    prayerReminders: "पवित्र प्रार्थना अनुस्मारक",
    reminderDesc: "संत साइप्रियन से जुड़ना कभी न भूलने के लिए दैनिक अनुस्मारक सेट करें। वह आपकी प्रार्थनाओं के लिए पवित्र समय पर आपको बुलाएंगे।",
    prayerTime: "दैनिक प्रार्थना समय:",
    activateDaily: "दैनिक पवित्र कॉल सक्रिय करें",
    remindersActive: "अनुस्मारक सक्रिय",
    remindersDesc: "संत साइप्रियन आपको हर दिन {time} पर आपकी पवित्र प्रार्थना के लिए बुलाएंगे",
    disableReminders: "अनुस्मारक अक्षम करें",
    templeSettings: "मंदिर सेटिंग्स",
    shareJourney: "आध्यात्मिक यात्रा साझा करें",
    shareDesc: "संत साइप्रियन का शब्द फैलाएं और दूसरों को प्रेरित करें",
    resetProgress: "आध्यात्मिक प्रगति रीसेट करें",
    resetDesc: "शुरू से नई यात्रा शुरू करें",
    divineMessage: "व्यक्तिगत दिव्य संदेश",
    personalMessage: "आपकी सच्ची भक्ति संत साइप्रियन के हृदय को छूती है। अपनी आध्यात्मिक यात्रा जारी रखें और देखें कि आपका जीवन हर दिन कैसे बदलता है। महान जादूगर उन लोगों को प्रचुर मात्रा में पुरस्कृत करते हैं जो सच्चे विश्वास और सच्ची भक्ति के पथ पर डटे रहते हैं।",
    achievementsUnlocked: "उपलब्धियां अनलॉक",
    memberFor: "{days} दिनों के लिए सदस्य",
    nextLevel: "अगला स्तर: {points} अंक",
    shareText: "मैं संत साइप्रियन के साथ अपनी आध्यात्मिक यात्रा पर हूं!",
    level: "स्तर",
    rituals: "अनुष्ठान",
    prayers: "प्रार्थनाएं",
    activeDays: "सक्रिय दिन",
    points: "अंक",
    visitText: "महान जादूगर की परिवर्तनकारी शक्ति खोजने आएं:",
    shareTitle: "संत साइप्रियन के साथ मेरी यात्रा",
    shareCopied: "आपकी प्रगति कॉपी हो गई है! WhatsApp पर या जहां भी आप संत साइप्रियन का शब्द फैलाना चाहते हैं, पेस्ट करें।",
    resetConfirm: "क्या आप वाकई अपनी सारी आध्यात्मिक प्रगति रीसेट करना चाहते हैं? इस कार्य को पूर्ववत नहीं किया जा सकता!",
    resetSuccess: "आपकी प्रगति रीसेट हो गई है। एक नई आध्यात्मिक यात्रा शुरू करें!",
    reminderSuccess: "प्रार्थना अनुस्मारक सफलतापूर्वक सेट किया गया! संत साइप्रियन आपको दैनिक बुलाएंगे।",
    reminderDenied: "सूचना अनुमति अस्वीकृत। पवित्र कॉल प्राप्त करने के लिए सूचनाएं सक्षम करें।",
    browserNotSupported: "आपका ब्राउज़र सूचनाओं का समर्थन नहीं करता। पवित्र अनुस्मारकों के लिए आधुनिक ब्राउज़र का उपयोग करें।",
    reminderDisabled: "प्रार्थना अनुस्मारक अक्षम।",
    notificationTitle: "पवित्र प्रार्थना क्षण",
    notificationBody: "संत साइप्रियन आपकी दैनिक प्रार्थना की प्रतीक्षा कर रहे हैं। अभी अपना दिव्य संबंध मजबूत करें!",
    achievements: {
      firstPrayer: { name: "पहली प्रार्थना", desc: "अपनी पहली पवित्र प्रार्थना का पाठ किया" },
      firstRitual: { name: "पहला अनुष्ठान", desc: "अपना पहला अनुष्ठान पूरा किया" },
      dedicatedDevotee: { name: "समर्पित भक्त", desc: "5 प्रार्थनाओं का पाठ किया" },
      weeklyFaithful: { name: "साप्ताहिक वफादार", desc: "लगातार 7 दिन की भक्ति" },
      ritualMaster: { name: "अनुष्ठान मास्टर", desc: "10 अनुष्ठान पूरे किए" },
      prayerWarrior: { name: "प्रार्थना योद्धा", desc: "25 प्रार्थनाओं का पाठ किया" },
      sacredMonth: { name: "पवित्र महीना", desc: "30 दिन की भक्ति" },
      grandMaster: { name: "महान गुरु", desc: "अधिकतम स्तर पहुंचा" }
    }
  },
  
  ko: {
    title: "당신의 영적 프로필",
    subtitle: "성 키프리아누스의 충실한 신자",
    loading: "영적 진행 상황 로딩 중...",
    currentLevel: "현재 헌신 레벨",
    spiritual: "영적",
    pointsToNext: "다음 레벨까지 포인트",
    continueDesc: "영적으로 발전하고 더 큰 축복을 받기 위해 일일 헌신을 계속하세요",
    sacredRituals: "신성한 의식",
    prayersRecited: "낭송한 기도",
    devotionDays: "헌신 일수",
    faithPoints: "신앙 포인트",
    sacredAchievements: "신성한 성취",
    prayerReminders: "신성한 기도 리마인더",
    reminderDesc: "성 키프리아누스와의 연결을 절대 잊지 않도록 매일 리마인더를 설정하세요. 신성한 시간에 당신의 기도를 위해 부를 것입니다.",
    prayerTime: "매일 기도 시간:",
    activateDaily: "매일 신성한 호출 활성화",
    remindersActive: "리마인더 활성",
    remindersDesc: "성 키프리아누스가 매일 {time}에 당신의 신성한 기도를 위해 부를 것입니다",
    disableReminders: "리마인더 비활성화",
    templeSettings: "성전 설정",
    shareJourney: "영적 여정 공유",
    shareDesc: "성 키프리아누스의 말씀을 퍼뜨리고 다른 사람들에게 영감을 주세요",
    resetProgress: "영적 진행 상황 재설정",
    resetDesc: "처음부터 새로운 여정 시작",
    divineMessage: "개인적인 신성한 메시지",
    personalMessage: "당신의 진실한 헌신이 성 키프리아누스의 마음에 닿습니다. 영적 여정을 계속하고 당신의 삶이 매일 어떻게 변화하는지 보세요. 대마법사는 참된 믿음과 진실한 헌신의 길에서 인내하는 자들을 풍성히 보상합니다.",
    achievementsUnlocked: "성취 잠금 해제",
    memberFor: "{days}일 동안 회원",
    nextLevel: "다음 레벨: {points} 포인트",
    shareText: "저는 성 키프리아누스와 함께 영적 여정을 하고 있습니다!",
    level: "레벨",
    rituals: "의식",
    prayers: "기도",
    activeDays: "활동 일수",
    points: "포인트",
    visitText: "대마법사의 변혁적 힘을 발견하러 오세요:",
    shareTitle: "성 키프리아누스와의 나의 여정",
    shareCopied: "당신의 진행 상황이 복사되었습니다! WhatsApp이나 성 키프리아누스의 말씀을 퍼뜨리고 싶은 곳에 붙여넣으세요.",
    resetConfirm: "정말로 모든 영적 진행 상황을 재설정하시겠습니까? 이 작업은 되돌릴 수 없습니다!",
    resetSuccess: "당신의 진행 상황이 재설정되었습니다. 새로운 영적 여정을 시작하세요!",
    reminderSuccess: "기도 리마인더가 성공적으로 설정되었습니다! 성 키프리아누스가 매일 부를 것입니다.",
    reminderDenied: "알림 권한이 거부되었습니다. 신성한 호출을 받으려면 알림을 활성화하세요.",
    browserNotSupported: "귀하의 브라우저는 알림을 지원하지 않습니다. 신성한 리마인더를 위해 최신 브라우저를 사용하세요.",
    reminderDisabled: "기도 리마인더가 비활성화되었습니다.",
    notificationTitle: "신성한 기도 순간",
    notificationBody: "성 키프리아누스가 당신의 일일 기도를 기다리고 있습니다. 지금 당신의 신성한 연결을 강화하세요!",
    achievements: {
      firstPrayer: { name: "첫 번째 기도", desc: "첫 번째 신성한 기도를 낭송했습니다" },
      firstRitual: { name: "첫 번째 의식", desc: "첫 번째 의식을 완료했습니다" },
      dedicatedDevotee: { name: "헌신적인 신자", desc: "5번의 기도를 낭송했습니다" },
      weeklyFaithful: { name: "주간 충실", desc: "7일 연속 헌신" },
      ritualMaster: { name: "의식 마스터", desc: "10개의 의식을 완료했습니다" },
      prayerWarrior: { name: "기도 전사", desc: "25번의 기도를 낭송했습니다" },
      sacredMonth: { name: "신성한 달", desc: "30일의 헌신" },
      grandMaster: { name: "그랜드 마스터", desc: "최대 레벨에 도달" }
    }
  },
  
  nl: {
    title: "UW SPIRITUELE PROFIEL",
    subtitle: "Trouwe Toegewijde van Heilige Cypriaan",
    loading: "Spirituele vooruitgang laden...",
    currentLevel: "HUIDIGE TOEWIJDINGSNIVEAU",
    spiritual: "Spiritueel",
    pointsToNext: "punten naar volgend niveau",
    continueDesc: "Zet uw dagelijkse toewijding voort om spiritueel te evolueren en grotere zegeningen te ontvangen",
    sacredRituals: "Heilige Rituelen",
    prayersRecited: "Gebeden Gereciteerd",
    devotionDays: "Toewijdingsdagen",
    faithPoints: "Geloof Punten",
    sacredAchievements: "HEILIGE PRESTATIES",
    prayerReminders: "HEILIGE GEBED HERINNERINGEN",
    reminderDesc: "Stel dagelijkse herinneringen in om nooit te vergeten verbinding te maken met Heilige Cypriaan. Hij zal u roepen op de heilige tijd voor uw gebeden.",
    prayerTime: "Dagelijkse Gebedstijd:",
    activateDaily: "DAGELIJKSE HEILIGE OPROEP ACTIVEREN",
    remindersActive: "HERINNERINGEN ACTIEF",
    remindersDesc: "Heilige Cypriaan zal u elke dag om {time} roepen voor uw heilige gebed",
    disableReminders: "Herinneringen Uitschakelen",
    templeSettings: "TEMPEL INSTELLINGEN",
    shareJourney: "Spirituele Reis Delen",
    shareDesc: "Verspreid Heilige Cypriaans woord en inspireer anderen",
    resetProgress: "Spirituele Vooruitgang Resetten",
    resetDesc: "Een nieuwe reis vanaf nul beginnen",
    divineMessage: "PERSOONLIJKE GODDELIJKE BOODSCHAP",
    personalMessage: "Uw oprechte toewijding raakt Heilige Cypriaans hart. Zet uw spirituele reis voort en zie hoe uw leven elke dag transformeert. De Grote Magiër beloont overvloedig degenen die volharden op het pad van ware geloof en oprechte toewijding.",
    achievementsUnlocked: "Prestaties Ontgrendeld",
    memberFor: "Lid voor {days} dagen",
    nextLevel: "Volgend niveau: {points} punten",
    shareText: "Ik ben op mijn spirituele reis met Heilige Cypriaan!",
    level: "Niveau",
    rituals: "Rituelen",
    prayers: "Gebeden",
    activeDays: "Actieve dagen",
    points: "Punten",
    visitText: "Kom de transformerende kracht van de Grote Magiër ontdekken:",
    shareTitle: "Mijn Reis met Heilige Cypriaan",
    shareCopied: "Uw vooruitgang is gekopieerd! Plak in WhatsApp of waar u ook Heilige Cypriaans woord wilt verspreiden.",
    resetConfirm: "Weet u zeker dat u al uw spirituele vooruitgang wilt resetten? Deze actie kan niet ongedaan gemaakt worden!",
    resetSuccess: "Uw vooruitgang is gereset. Begin een nieuwe spirituele reis!",
    reminderSuccess: "Gebed herinnering succesvol ingesteld! Heilige Cypriaan zal u dagelijks roepen.",
    reminderDenied: "Notificatie toestemming geweigerd. Schakel notificaties in om heilige oproepen te ontvangen.",
    browserNotSupported: "Uw browser ondersteunt geen notificaties. Gebruik een moderne browser voor heilige herinneringen.",
    reminderDisabled: "Gebed herinneringen uitgeschakeld.",
    notificationTitle: "Heilig Gebed Moment",
    notificationBody: "Heilige Cypriaan wacht op uw dagelijkse gebed. Versterk nu uw goddelijke verbinding!",
    achievements: {
      firstPrayer: { name: "Eerste Gebed", desc: "Reciteerde uw eerste heilige gebed" },
      firstRitual: { name: "Eerste Ritueel", desc: "Voltooide uw eerste ritueel" },
      dedicatedDevotee: { name: "Toegewijde Volgeling", desc: "5 gebeden gereciteerd" },
      weeklyFaithful: { name: "Wekelijks Trouw", desc: "7 opeenvolgende dagen van toewijding" },
      ritualMaster: { name: "Ritueel Meester", desc: "10 rituelen voltooid" },
      prayerWarrior: { name: "Gebed Krijger", desc: "25 gebeden gereciteerd" },
      sacredMonth: { name: "Heilige Maand", desc: "30 dagen van toewijding" },
      grandMaster: { name: "Grootmeester", desc: "Maximum niveau bereikt" }
    }
  },
  
  sv: {
    title: "DIN SPIRITUELLA PROFIL",
    subtitle: "Trogen Anhängare av Saint Cyprian",
    loading: "Laddar spirituella framsteg...",
    currentLevel: "NUVARANDE HÄNGIVENHETSNIVÅ",
    spiritual: "Spirituell",
    pointsToNext: "poäng till nästa nivå",
    continueDesc: "Fortsätt din dagliga hängivenhet för att utvecklas spirituellt och få större välsignelser",
    sacredRituals: "Heliga Ritualer",
    prayersRecited: "Böner Reciterade",
    devotionDays: "Hängivenhetsdagar",
    faithPoints: "Tro Poäng",
    sacredAchievements: "HELIGA PRESTATIONER",
    prayerReminders: "HELIGA BÖN PÅMINNELSER",
    reminderDesc: "Ställ in dagliga påminnelser för att aldrig glömma att ansluta med Saint Cyprian. Han kommer att kalla dig vid den heliga tiden för dina böner.",
    prayerTime: "Daglig Bönetid:",
    activateDaily: "AKTIVERA DAGLIGT HELIGT SAMTAL",
    remindersActive: "PÅMINNELSER AKTIVA",
    remindersDesc: "Saint Cyprian kommer att kalla dig varje dag kl {time} för din heliga bön",
    disableReminders: "Inaktivera Påminnelser",
    templeSettings: "TEMPEL INSTÄLLNINGAR",
    shareJourney: "Dela Spirituell Resa",
    shareDesc: "Sprid Saint Cyprians ord och inspirera andra",
    resetProgress: "Återställ Spirituella Framsteg",
    resetDesc: "Börja en ny resa från början",
    divineMessage: "PERSONLIGT GUDOMLIGT MEDDELANDE",
    personalMessage: "Din uppriktiga hängivenhet rör Saint Cyprians hjärta. Fortsätt din spirituella resa och se hur ditt liv förvandlas varje dag. Den Store Magikern belönar rikligt dem som uthärdar på vägen av sann tro och uppriktig hängivenhet.",
    achievementsUnlocked: "Prestationer Upplåsta",
    memberFor: "Medlem i {days} dagar",
    nextLevel: "Nästa nivå: {points} poäng",
    shareText: "Jag är på min spirituella resa med Saint Cyprian!",
    level: "Nivå",
    rituals: "Ritualer",
    prayers: "Böner",
    activeDays: "Aktiva dagar",
    points: "Poäng",
    visitText: "Kom och upptäck Store Magikerns förvandlande kraft:",
    shareTitle: "Min Resa med Saint Cyprian",
    shareCopied: "Dina framsteg har kopierats! Klistra in i WhatsApp eller var du vill sprida Saint Cyprians ord.",
    resetConfirm: "Är du säker på att du vill återställa alla dina spirituella framsteg? Denna åtgärd kan inte ångras!",
    resetSuccess: "Dina framsteg har återställts. Börja en ny spirituell resa!",
    reminderSuccess: "Böjn påminnelse inställd framgångsrikt! Saint Cyprian kommer att kalla dig dagligen.",
    reminderDenied: "Notifikation tillstånd nekat. Aktivera notifikationer för att ta emot heliga samtal.",
    browserNotSupported: "Din webbläsare stöder inte notifikationer. Använd en modern webbläsare för heliga påminnelser.",
    reminderDisabled: "Böjn påminnelser inaktiverade.",
    notificationTitle: "Heligt Böjn Ögonblick",
    notificationBody: "Saint Cyprian väntar på din dagliga bön. Stärk din gudomliga anslutning nu!",
    achievements: {
      firstPrayer: { name: "Första Bönen", desc: "Reciterade din första heliga bön" },
      firstRitual: { name: "Första Ritualen", desc: "Fullbordade din första ritual" },
      dedicatedDevotee: { name: "Hängiven Anhängare", desc: "5 böner reciterade" },
      weeklyFaithful: { name: "Veckovis Trogen", desc: "7 på varandra följande dagar av hängivenhet" },
      ritualMaster: { name: "Ritual Mästare", desc: "10 ritualer fullbordade" },
      prayerWarrior: { name: "Böjn Krigare", desc: "25 böner reciterade" },
      sacredMonth: { name: "Helig Månad", desc: "30 dagar av hängivenhet" },
      grandMaster: { name: "Stormästare", desc: "Maximal nivå nådd" }
    }
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

const achievementsList = [
  { id: 'first-prayer', icon: Book, points: 10 },
  { id: 'first-ritual', icon: Flame, points: 25 },
  { id: 'dedicated-devotee', icon: Heart, points: 50 },
  { id: 'weekly-faithful', icon: Calendar, points: 75 },
  { id: 'ritual-master', icon: Crown, points: 100 },
  { id: 'prayer-warrior', icon: Shield, points: 125 },
  { id: 'sacred-month', icon: Star, points: 200 },
  { id: 'grand-master', icon: Trophy, points: 500 }
];

export default function Profile() {
  const { language, changeLanguage, t } = useLanguage();
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
            new Notification(`c🔱 ${t('notificationTitle')}`, {
              body: t('notificationBody'),
              icon: '/favicon.ico',
              badge: '/favicon.ico'
            });
            scheduleDaily(); // Schedule for next day
          }, timeToReminder);
        };
        
        scheduleDaily();
        alert(`✅ ${t('reminderSuccess')}`);
      } else {
        alert(`❌ ${t('reminderDenied')}`);
      }
    } else {
      alert(`❌ ${t('browserNotSupported')}`);
    }
  };

  const disableReminder = () => {
    localStorage.removeItem('prayerReminder');
    setReminderEnabled(false);
    alert(`🔕 ${t('reminderDisabled')}`);
  };

  const resetProgress = async () => {
    if (confirm(`⚠️ ${t('resetConfirm')}`)) {
      await StorageService.clearAllData();
      await loadProgress(); // Reload fresh progress
      alert(`🔄 ${t('resetSuccess')}`);
    }
  };

  const shareProgress = async () => {
    const text = `c🔱 ${t('shareText')}

✨ ${t('level')}: ${progress.devotionLevel}
🔥 ${t('rituals')}: ${progress.ritualsCompleted}
📿 ${t('prayers')}: ${progress.prayersRecited}
📅 ${t('activeDays')}: ${progress.daysActive}
🏆 ${t('points')}: ${progress.totalPoints}

${t('visitText')} ${window.location.origin}`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: `c🔱 ${t('shareTitle')}`,
          text: text,
        });
      } catch (err) {
        // User cancelled or error occurred
      }
    } else {
      // Fallback to clipboard
      try {
        await navigator.clipboard.writeText(text);
        alert(`📋 ${t('shareCopied')}`);
      } catch (err) {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        alert(`📋 ${t('shareCopied')}`);
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

  const getAchievementData = (achievementId: string) => {
    const achievement = achievementsList.find(ach => ach.id === achievementId);
    const translation = t(`achievements.${achievementId.replace('-', '')}`);
    return {
      ...achievement,
      name: translation.name,
      desc: translation.desc
    };
  };

  const unlockedAchievements = achievementsList.filter(ach => progress.achievements.includes(ach.id));

  if (isLoading) {
    return (
      <div className="min-h-screen bg-obsidian-gradient flex items-center justify-center">
        <div className="text-gold-400 text-xl">{t('loading')}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-obsidian-gradient">
      {/* Language Selector */}
      <LanguageSelector language={language} onLanguageChange={changeLanguage} />
      
      {/* Header */}
      <div className="text-center py-8 md:py-12 px-4 border-b border-gold-500/30">
        <div className="text-5xl md:text-6xl text-gold-400 mb-4 mystical-glow animate-glow-text">
          c🔱
        </div>
        <h1 className="text-2xl md:text-3xl font-black text-gold-400 mb-2 tracking-wide sacred-text">
          {t('title')}
        </h1>
        <p className="text-gold-200 text-base md:text-lg">
          {t('subtitle')}
        </p>
      </div>

      <div className="container mx-auto px-4 py-8 pb-24">
        {/* Devotion Level */}
        <div className="temple-section rounded-3xl p-6 md:p-8 text-center mb-8 shadow-sacred">
          <h3 className="text-lg md:text-xl font-black text-gold-400 mb-4 sacred-text">
            {t('currentLevel')}
          </h3>
          <div className={`${getDevotionColor(progress.devotionLevel)} text-white font-black py-3 px-6 rounded-full inline-block mb-6 text-lg md:text-xl shadow-divine`}>
            {progress.devotionLevel} {t('spiritual')}
          </div>

          <div className="w-full bg-obsidian-200 rounded-full h-4 mb-4 max-w-2xl mx-auto">
            <div
              className="bg-gold-400 h-4 rounded-full transition-all duration-500 shadow-divine"
              style={{ width: `${Math.min((progress.totalPoints / 500) * 100, 100)}%` }}
            />
          </div>
          <p className="text-gold-300 text-sm md:text-base mb-4">
            {progress.totalPoints} / 500 {t('pointsToNext')}
          </p>
          <p className="text-gold-200 text-sm md:text-base">
            {t('continueDesc')}
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
              {t('sacredRituals')}
            </p>
          </div>

          <div className="temple-section rounded-2xl p-4 md:p-6 text-center shadow-sacred">
            <Book className="text-purple-400 mx-auto mb-3" size={28} />
            <p className="text-2xl md:text-3xl font-black text-white mb-1">
              {progress.prayersRecited}
            </p>
            <p className="text-gold-200 text-xs md:text-sm font-semibold">
              {t('prayersRecited')}
            </p>
          </div>

          <div className="temple-section rounded-2xl p-4 md:p-6 text-center shadow-sacred">
            <Calendar className="text-emerald-400 mx-auto mb-3" size={28} />
            <p className="text-2xl md:text-3xl font-black text-white mb-1">
              {progress.daysActive}
            </p>
            <p className="text-gold-200 text-xs md:text-sm font-semibold">
              {t('devotionDays')}
            </p>
          </div>

          <div className="temple-section rounded-2xl p-4 md:p-6 text-center shadow-sacred">
            <Star className="text-gold-400 mx-auto mb-3" size={28} />
            <p className="text-2xl md:text-3xl font-black text-white mb-1">
              {progress.totalPoints}
            </p>
            <p className="text-gold-200 text-xs md:text-sm font-semibold">
              {t('faithPoints')}
            </p>
          </div>
        </div>

        {/* Achievements */}
        <div className="temple-section rounded-3xl p-6 md:p-8 mb-8 shadow-sacred">
          <h3 className="text-xl md:text-2xl font-black text-gold-400 text-center mb-6 sacred-text">
            {t('sacredAchievements')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievementsList.map((achievement) => {
              const IconComponent = achievement.icon;
              const isUnlocked = progress.achievements.includes(achievement.id);
              const achievementData = getAchievementData(achievement.id);
              
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
                        {achievementData.name}
                      </h4>
                      <p className={`text-sm md:text-base ${isUnlocked ? 'text-gold-200' : 'text-gray-500'}`}>
                        {achievementData.desc}
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
            {t('prayerReminders')}
          </h3>
          
          {!reminderEnabled ? (
            <div className="text-center">
              <div className="mb-6">
                <Bell className="text-gold-400 mx-auto mb-4" size={48} />
                <p className="text-gold-200 text-base md:text-lg mb-6 leading-relaxed">
                  {t('reminderDesc')}
                </p>
              </div>
              
              <div className="mb-6">
                <label className="block text-gold-300 font-semibold mb-3">{t('prayerTime')}</label>
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
                🔔 {t('activateDaily')}
              </button>
            </div>
          ) : (
            <div className="text-center">
              <div className="bg-green-600/20 rounded-2xl p-6 md:p-8 border border-green-500/30 mb-6">
                <CheckCircle className="text-green-400 mx-auto mb-4" size={48} />
                <h4 className="text-green-400 font-black text-lg md:text-xl mb-3">{t('remindersActive')}</h4>
                <p className="text-green-300 text-base md:text-lg mb-4">
                  {t('remindersDesc').replace('{time}', reminderTime)}
                </p>
                <button
                  onClick={disableReminder}
                  className="bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded-full font-bold transition-all duration-300"
                >
                  {t('disableReminders')}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Settings */}
        <div className="temple-section rounded-3xl p-6 md:p-8 mb-8 shadow-sacred">
          <h3 className="text-xl md:text-2xl font-black text-gold-400 mb-6 sacred-text">
            {t('templeSettings')}
          </h3>
          
          <div className="space-y-4">
            <button 
              onClick={shareProgress}
              className="w-full bg-gold-500/10 border border-gold-500/30 rounded-2xl p-4 md:p-6 flex items-center gap-4 hover:bg-gold-500/20 transition-all duration-300 hover:scale-105 shadow-sacred"
            >
              <Share2 className="text-gold-400" size={24} />
              <div className="flex-1 text-left">
                <span className="text-white font-bold text-base md:text-lg block">
                  {t('shareJourney')}
                </span>
                <span className="text-gold-300 text-sm">
                  {t('shareDesc')}
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
                  {t('resetProgress')}
                </span>
                <span className="text-red-300 text-sm">
                  {t('resetDesc')}
                </span>
              </div>
            </button>
          </div>
        </div>

        {/* Sacred Message */}
        <div className="sacred-agreement-section rounded-3xl p-6 md:p-8 text-center shadow-mystical">
          <Crown className="text-gold-400 mx-auto mb-6" size={48} />
          <h3 className="sacred-text text-2xl md:text-3xl font-black text-gold-400 mb-6">
            {t('divineMessage')}
          </h3>
          <p className="text-gold-200 italic text-lg md:text-xl leading-relaxed mystical-text">
            "{t('personalMessage')}"
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gold-500/10 rounded-xl p-4 border border-gold-500/30">
              <p className="text-gold-400 text-sm font-bold">
                👥 {unlockedAchievements.length}/{achievementsList.length} {t('achievementsUnlocked')}
              </p>
            </div>
            <div className="bg-gold-500/10 rounded-xl p-4 border border-gold-500/30">
              <p className="text-gold-400 text-sm font-bold">
                📅 {t('memberFor').replace('{days}', progress.daysActive.toString())}
              </p>
            </div>
            <div className="bg-gold-500/10 rounded-xl p-4 border border-gold-500/30">
              <p className="text-gold-400 text-sm font-bold">
                ⚡ {t('nextLevel').replace('{points}', (500 - progress.totalPoints).toString())}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
