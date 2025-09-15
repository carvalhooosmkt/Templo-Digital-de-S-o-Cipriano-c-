import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Home, Flame, Book, Scroll, User, BookOpen, GraduationCap, Crown } from 'lucide-react';

export default function Navigation() {
  const { t } = useTranslation();
  
  const navItems = [
    { to: '/app', icon: Home, label: t('navigation.temple') },
    { to: '/app/rituals', icon: Flame, label: t('navigation.rituals') },
    { to: '/app/prayers', icon: Book, label: t('navigation.prayers') },
    { to: '/app/history', icon: Scroll, label: t('navigation.history') },
    { to: '/app/profile', icon: User, label: t('navigation.profile') },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-obsidian-500/95 border-t border-gold-500/30 backdrop-blur-lg z-50">
      <div className="flex justify-around items-center py-2 px-2 max-w-2xl mx-auto">
        {navItems.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/app'}
            className={({ isActive }) =>
              `flex flex-col items-center py-2 px-2 rounded-lg transition-all duration-300 ${
                isActive
                  ? 'text-gold-400 bg-gold-400/10 scale-110 mystical-glow'
                  : 'text-gold-200 hover:text-gold-400 hover:bg-gold-400/5'
              }`
            }
          >
            <Icon size={22} />
            <span className="text-xs font-bold mt-1 sacred-text">{label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
