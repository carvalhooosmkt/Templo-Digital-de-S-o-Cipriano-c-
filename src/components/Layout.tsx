import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import SacredParticles from './SacredParticles';

export default function Layout() {
  return (
    <div className="min-h-screen bg-obsidian-gradient relative">
      <SacredParticles />
      <main className="pb-20 relative z-10">
        <Outlet />
      </main>
      <Navigation />
    </div>
  );
}
