import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import HomeSection from './components/HomeSection.jsx';
import ProgramsSection from './components/ProgramsSection.jsx';
import CertificationsSection from './components/CertificationsSection.jsx';
import KitSection from './components/KitSection.jsx';
import GuidanceSection from './components/GuidanceSection.jsx';
import OrderSection from './components/OrderSection.jsx';
import AdminDashboard from './components/AdminDashboard.jsx';
import Footer from './components/Footer.jsx';
import LabVIEWRain from './components/LabVIEWRain.jsx';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, errorInfo) {
    console.error('App Error Boundary caught:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '60px 20px', textAlign: 'center', fontFamily: 'sans-serif' }}>
          <h2 style={{ color: '#d97706', marginBottom: '16px' }}>Application Encountered an Error</h2>
          <pre style={{ background: '#f1f5f9', color: '#0f172a', padding: '16px', borderRadius: '8px', display: 'inline-block', textAlign: 'left', maxWidth: '800px', overflowX: 'auto' }}>
            {String(this.state.error)}
          </pre>
          <br /><br />
          <button
            onClick={() => {
              try { localStorage.clear(); } catch(e){}
              window.location.hash = '';
              window.location.reload();
            }}
            style={{ padding: '10px 24px', background: '#d97706', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 600 }}
          >
            Reset Cache & Reload
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function App() {
  const [activePage, setActivePage] = useState('home');

  useEffect(() => {
    try {
      document.documentElement.setAttribute('data-theme', 'halfwhite');
      localStorage.setItem('aadhyaa_theme', 'halfwhite');
    } catch (e) {
      // safe fallback
    }
  }, []);

  useEffect(() => {
    const handleHash = () => {
      try {
        const hash = window.location.hash.replace('#', '').toLowerCase();
        if (['home', 'programs', 'certifications', 'kit', 'guidance', 'order', 'admin'].includes(hash)) {
          setActivePage(hash);
        }
      } catch (e) {
        // safe fallback
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const navigateTo = (page) => {
    setActivePage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <ErrorBoundary>
      <div className="app-root" style={{ position: 'relative', minHeight: '100vh', backgroundColor: 'var(--bg-primary)' }}>
        {/* Gentle, Ultra-Smooth LabVIEW Functions Falling Rain (Watermark Depth) */}
        <LabVIEWRain />

        {/* Header Navigation */}
        <Navbar activePage={activePage} onNavigate={navigateTo} />

        {/* Silky Smooth Page Stage */}
        <main className="page-stage">
          {activePage === 'home' && (
            <HomeSection key="home" onNavigate={navigateTo} />
          )}

          {activePage === 'programs' && (
            <ProgramsSection key="programs" onNavigate={navigateTo} />
          )}

          {activePage === 'certifications' && (
            <CertificationsSection key="certifications" onNavigate={navigateTo} />
          )}

          {activePage === 'kit' && (
            <KitSection key="kit" onNavigate={navigateTo} />
          )}

          {activePage === 'guidance' && (
            <GuidanceSection key="guidance" onNavigate={navigateTo} />
          )}

          {activePage === 'order' && (
            <OrderSection key="order" onNavigate={navigateTo} />
          )}

          {activePage === 'admin' && (
            <AdminDashboard key="admin" onNavigate={navigateTo} />
          )}
        </main>

        <Footer onNavigate={navigateTo} />
      </div>
    </ErrorBoundary>
  );
}
