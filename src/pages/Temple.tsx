import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Crown, Flame, Book, Zap, Shield, Star, Calendar, Heart, Award, Users, Globe, Sparkles, BookOpen, GraduationCap, ChevronRight } from 'lucide-react';

export default function Temple() {
  const { t } = useTranslation();
  const [currentDate] = useState(new Date());
  const navigate = useNavigate();

  // Check if it's São Cipriano Day (September 16th)
  const isSaoCiprianoDay = currentDate.getMonth() === 8 && currentDate.getDate() === 16;

  const templeAreas = [
    {
      id: 'altar',
      name: t('temple.areas.altar.name'),
      icon: Crown,
      description: t('temple.areas.altar.description'),
      action: () => navigate('/app/prayers'),
      color: 'from-gold-500 to-gold-600',
      benefits: t('temple.areas.altar.benefits')
    },
    {
      id: 'rituals',
      name: t('temple.areas.rituals.name'),
      icon: Flame,
      description: t('temple.areas.rituals.description'),
      action: () => navigate('/app/rituals'),
      color: 'from-red-500 to-red-600',
      benefits: t('temple.areas.rituals.benefits')
    },
    {
      id: 'library',
      name: t('temple.areas.library.name'),
      icon: BookOpen,
      description: t('temple.areas.library.description'),
      action: () => navigate('/app/library'),
      color: 'from-purple-500 to-purple-600',
      benefits: t('temple.areas.library.benefits')
    },
    {
      id: 'teachings',
      name: t('temple.areas.teachings.name'),
      icon: GraduationCap,
      description: t('temple.areas.teachings.description'),
      action: () => navigate('/app/teachings'),
      color: 'from-blue-500 to-blue-600',
      benefits: t('temple.areas.teachings.benefits')
    },
    {
      id: 'protection',
      name: t('temple.areas.protection.name'),
      icon: Shield,
      description: t('temple.areas.protection.description'),
      action: () => navigate('/app/prayers'),
      color: 'from-cyan-500 to-cyan-600',
      benefits: t('temple.areas.protection.benefits')
    },
    {
      id: 'agreement',
      name: t('temple.areas.agreement.name'),
      icon: Sparkles,
      description: t('temple.areas.agreement.description'),
      action: () => navigate('/app/sacred-agreement'),
      color: 'from-yellow-500 to-yellow-600',
      benefits: t('temple.areas.agreement.benefits')
    }
  ];

  const dailyBlessings = t('blessings.daily', { returnObjects: true }) as string[];
  const [currentBlessing] = useState(dailyBlessings[Math.floor(Math.random() * dailyBlessings.length)]);

  const testimonials = t('temple.testimonials', { returnObjects: true }) as Array<{
    name: string;
    transformation: string;
    story: string;
    location: string;
    timeframe: string;
  }>;

  return (
    <div className="min-h-screen bg-obsidian-gradient">
      {/* Special Event Banner - São Cipriano Day */}
      {isSaoCiprianoDay && (
        <div className="bg-gradient-to-r from-red-600 via-gold-500 to-red-600 text-center py-8 mb-6 animate-pulse shadow-divine">
          <div className="container mx-auto px-4">
            <h2 className="sacred-text text-2xl md:text-3xl font-black text-white mb-3 animate-glow-text">
              {t('temple.saoCiprianoDay.title')}
            </h2>
            <p className="text-gold-200 text-lg md:text-xl font-bold">
              {t('temple.saoCiprianoDay.subtitle')}
            </p>
            <p className="text-white text-base md:text-lg mt-2">
              {t('temple.saoCiprianoDay.powerMultiplied')}
            </p>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="text-center py-12 md:py-16 px-4">
        <div className="animate-float mb-8">
          <div className="text-6xl md:text-8xl lg:text-9xl text-gold-400 animate-glow-text mystical-glow">
            c🔱
          </div>
        </div>
        <h1 className="sacred-text text-3xl md:text-5xl lg:text-6xl font-black text-gold-400 mb-4 animate-pulse-sacred leading-tight">
          {t('temple.title')}
        </h1>
        <p className="text-gold-300 text-lg md:text-2xl mb-6 font-bold leading-relaxed">
          {t('temple.subtitle')}
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
              {[...Array(5)].map((_, i) => (
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
              {t('temple.mainAltar')}
            </h2>
            <p className="text-gold-200 text-base md:text-xl mb-8 leading-relaxed max-w-3xl mx-auto">
              {t('temple.altarDescription')}
            </p>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8">
            <button 
              onClick={() => navigate('/app/rituals')}
              className="sacred-button py-4 md:py-6 px-6 md:px-8 rounded-2xl flex items-center justify-center gap-4 transition-all duration-300 transform hover:scale-105 text-lg md:text-xl font-black shadow-divine"
            >
              <Zap size={28} />
              <span>{t('temple.emergencyRitual')}</span>
            </button>

            <button 
              onClick={() => navigate('/app/prayers')}
              className="bg-gradient-to-r from-purple-600 to-purple-700 text-white py-4 md:py-6 px-6 md:px-8 rounded-2xl flex items-center justify-center gap-4 hover:from-purple-500 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 text-lg md:text-xl font-black shadow-divine"
            >
              <Heart size={28} />
              <span>{t('temple.powerfulPrayer')}</span>
            </button>
          </div>

          {/* Sacred Promise */}
          <div className="bg-gradient-to-r from-red-600/20 to-gold-500/20 rounded-2xl p-6 md:p-8 border border-gold-500/30 shadow-sacred">
            <p className="text-gold-100 text-base md:text-lg font-bold leading-relaxed">
              {t('temple.sacredPromise')}
            </p>
          </div>
        </div>

        {/* Temple Areas */}
        <div className="mb-16">
          <h2 className="sacred-text text-2xl md:text-3xl font-black text-gold-400 text-center mb-4 animate-glow-text">
            {t('temple.exploreTemple')}
          </h2>
          <p className="text-gold-200 text-center mb-8 text-base md:text-lg max-w-3xl mx-auto">
            {t('temple.clickSections')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {templeAreas.map((area) => {
            const IconComponent = area.icon;
            return (
              <button
                key={area.id}
                onClick={area.action}
                className="temple-section rounded-3xl p-6 md:p-8 text-left hover:scale-105 transition-all duration-300 group shadow-sacred hover-lift border-2 border-transparent hover:border-gold-500/50 cursor-pointer"
              >
                <div className="flex items-start gap-4 md:gap-6 mb-4">
                  <div className={`p-3 md:p-4 rounded-full bg-gradient-to-r ${area.color} group-hover:scale-110 transition-transform duration-300 animate-pulse-sacred shadow-divine`}>
                    <IconComponent size={28} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="sacred-text text-lg md:text-xl font-black text-gold-400 mb-3 leading-tight">
                      {area.name}
                    </h3>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-gold-300 text-xs md:text-sm font-bold bg-gold-500/20 px-2 py-1 rounded-full">
                        👆 {t('common.clickHere')}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-gold-200 text-sm md:text-base leading-relaxed mb-4">
                  {area.description}
                </p>
                <div className="bg-gold-500/20 rounded-full px-4 py-2 inline-block border border-gold-500/30">
                  <span className="text-gold-400 font-bold text-xs md:text-sm">✨ {area.benefits}</span>
                </div>
                <div className="flex items-center justify-end mt-4 text-gold-400">
                  <span className="text-sm font-bold mr-2">{t('common.enter')}</span>
                  <ChevronRight size={20} />
                </div>
              </button>
            );
          })}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mb-16">
          <h2 className="sacred-text text-2xl md:text-3xl font-black text-gold-400 text-center mb-8 animate-glow-text">
            {t('temple.testimonials.title')}
          </h2>
          <p className="text-gold-200 text-center mb-12 text-base md:text-lg max-w-3xl mx-auto">
            {t('temple.testimonials.description')}
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
                    ⚡ {t('common.time')}: {testimonial.timeframe}
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
              {t('temple.dailyDevotion.title')}
            </h3>
          </div>
          <p className="text-gold-200 mb-8 text-base md:text-lg leading-relaxed">
            {t('temple.dailyDevotion.description')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <div className="bg-gold-500/10 rounded-2xl p-4 md:p-6 text-center border border-gold-500/30 hover:scale-105 transition-all duration-300 shadow-sacred">
              <div className="text-3xl md:text-4xl mb-4">🌅</div>
              <p className="text-gold-300 font-bold text-base md:text-lg mb-2">{t('temple.dailyDevotion.morning.title')}</p>
              <p className="text-gold-200 text-sm md:text-base">{t('temple.dailyDevotion.morning.description')}</p>
            </div>
            <div className="bg-gold-500/10 rounded-2xl p-4 md:p-6 text-center border border-gold-500/30 hover:scale-105 transition-all duration-300 shadow-sacred">
              <div className="text-3xl md:text-4xl mb-4">🕯️</div>
              <p className="text-gold-300 font-bold text-base md:text-lg mb-2">{t('temple.dailyDevotion.candle.title')}</p>
              <p className="text-gold-200 text-sm md:text-base">{t('temple.dailyDevotion.candle.description')}</p>
            </div>
            <div className="bg-gold-500/10 rounded-2xl p-4 md:p-6 text-center border border-gold-500/30 hover:scale-105 transition-all duration-300 shadow-sacred">
              <div className="text-3xl md:text-4xl mb-4">🌙</div>
              <p className="text-gold-300 font-bold text-base md:text-lg mb-2">{t('temple.dailyDevotion.night.title')}</p>
              <p className="text-gold-200 text-sm md:text-base">{t('temple.dailyDevotion.night.description')}</p>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="temple-section rounded-3xl p-6 md:p-8 mb-16 text-center shadow-sacred">
          <h3 className="sacred-text text-xl md:text-2xl font-black text-gold-400 mb-8">
            {t('temple.statistics.title')}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div className="bg-gold-500/10 rounded-2xl p-4 md:p-6 border border-gold-500/30 shadow-sacred">
              <Users className="text-gold-400 mx-auto mb-3" size={32} />
              <p className="text-2xl md:text-3xl font-black text-white mb-2">5.8M+</p>
              <p className="text-gold-200 text-xs md:text-sm">{t('temple.statistics.devotees')}</p>
            </div>
            <div className="bg-gold-500/10 rounded-2xl p-4 md:p-6 border border-gold-500/30 shadow-sacred">
              <Globe className="text-gold-400 mx-auto mb-3" size={32} />
              <p className="text-2xl md:text-3xl font-black text-white mb-2">195</p>
              <p className="text-gold-200 text-xs md:text-sm">{t('temple.statistics.countries')}</p>
            </div>
            <div className="bg-gold-500/10 rounded-2xl p-4 md:p-6 border border-gold-500/30 shadow-sacred">
              <Award className="text-gold-400 mx-auto mb-3" size={32} />
              <p className="text-2xl md:text-3xl font-black text-white mb-2">2.3M+</p>
              <p className="text-gold-200 text-xs md:text-sm">{t('temple.statistics.miracles')}</p>
            </div>
            <div className="bg-gold-500/10 rounded-2xl p-4 md:p-6 border border-gold-500/30 shadow-sacred">
              <Star className="text-gold-400 mx-auto mb-3" size={32} />
              <p className="text-2xl md:text-3xl font-black text-white mb-2">99.9%</p>
              <p className="text-gold-200 text-xs md:text-sm">{t('temple.statistics.successRate')}</p>
            </div>
          </div>
        </div>

        {/* Conversion Section */}
        <div className="conversion-section rounded-3xl p-8 md:p-10 text-center shadow-mystical">
          <div className="mb-8">
            <Star className="text-gold-400 mx-auto mb-6 animate-pulse-sacred" size={48} />
            <h2 className="sacred-text text-2xl md:text-4xl font-black text-gold-400 mb-6 leading-tight">
              {t('temple.conversion.title')}
            </h2>
            <p className="text-gold-200 text-base md:text-xl leading-relaxed max-w-4xl mx-auto mb-8">
              {t('temple.conversion.description')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-10">
            <div className="bg-red-600/20 rounded-2xl p-6 md:p-8 border border-red-500/30 shadow-sacred">
              <h3 className="text-red-400 font-black mb-4 text-lg md:text-xl">{t('temple.conversion.without.title')}</h3>
              <ul className="text-red-300 text-left space-y-2 text-sm md:text-base">
                {(t('temple.conversion.without.items', { returnObjects: true }) as string[]).map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-green-600/20 rounded-2xl p-6 md:p-8 border border-green-500/30 shadow-sacred">
              <h3 className="text-green-400 font-black mb-4 text-lg md:text-xl">{t('temple.conversion.with.title')}</h3>
              <ul className="text-green-300 text-left space-y-2 text-sm md:text-base">
                {(t('temple.conversion.with.items', { returnObjects: true }) as string[]).map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
          
          <button 
            onClick={() => navigate('/app/sacred-agreement')}
            className="sacred-button py-4 md:py-6 px-8 md:px-12 rounded-full text-lg md:text-xl font-black transition-all duration-300 transform hover:scale-105 shadow-divine"
          >
            {t('temple.conversion.ctaButton')}
          </button>
          
          <p className="text-gold-300 text-xs md:text-sm mt-6">
            {t('temple.conversion.guarantee')}
          </p>
        </div>

        {/* Sacred Message */}
        <div className="temple-section rounded-3xl p-6 md:p-8 mt-16 text-center shadow-sacred">
          <p className="text-gold-200 italic text-lg md:text-xl leading-relaxed mb-4 mystical-text">
            "{t('temple.sacredMessage.quote')}"
          </p>
          <p className="text-gold-400 font-black text-base md:text-lg sacred-text">
            - {t('temple.sacredMessage.author')}
          </p>
        </div>
      </div>
    </div>
  );
}
