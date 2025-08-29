import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Layout from './components/Layout';
import Intro from './pages/Intro';
import Temple from './pages/Temple';
import Rituals from './pages/Rituals';
import Prayers from './pages/Prayers';
import History from './pages/History';
import Profile from './pages/Profile';
import Library from './pages/Library';
import Teachings from './pages/Teachings';
import SacredAgreement from './pages/SacredAgreement';
import { StorageService } from './utils/storage';

function ScrollToTop() {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

function App() {
  const [hasSeenIntro, setHasSeenIntro] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkIntroStatus();
  }, []);

  const checkIntroStatus = async () => {
    const seen = await StorageService.hasSeenIntro();
    setHasSeenIntro(seen);
    setIsLoading(false);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-obsidian-gradient flex items-center justify-center">
        <div className="text-center">
          <div className="text-8xl mystical-glow text-gold-500 mb-4 animate-pulse">
            🔱
          </div>
          <p className="text-gold-200 text-lg">Preparando o Templo Sagrado...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={hasSeenIntro ? <Navigate to="/app" replace /> : <Intro />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/app" element={<Layout />}>
          <Route index element={<Temple />} />
          <Route path="rituals" element={<Rituals />} />
          <Route path="prayers" element={<Prayers />} />
          <Route path="history" element={<History />} />
          <Route path="library" element={<Library />} />
          <Route path="teachings" element={<Teachings />} />
          <Route path="sacred-agreement" element={<SacredAgreement />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="*" element={<Navigate to={hasSeenIntro ? "/app" : "/"} replace />} />
      </Routes>
    </>
  );
}

export default App;