import React, { useState } from 'react';
import { Phone, MessageSquare, Menu, X } from 'lucide-react';
import BrandLogo from './BrandLogo.jsx';

export default function Navbar({ activePage, onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'programs', label: 'Programs' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'kit', label: 'Engineer Kit' },
    { id: 'guidance', label: 'Guidance' },
    { id: 'order', label: 'Order' },
  ];

  const handleNavClick = (id) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      background: 'var(--bg-secondary)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      borderBottom: '1px solid var(--border-subtle)',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.03)',
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '74px',
      }}>
        {/* Neat Brand Logo for White Background */}
        <BrandLogo onClick={() => handleNavClick('home')} isDarkText={true} />

        {/* 5 Distinct Page Navigation Tabs */}
        <nav style={{
          display: 'none',
          alignItems: 'center',
          gap: '8px',
        }} className="desktop-nav">
          {navItems.map((item) => {
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="rajdhani"
                style={{
                  background: isActive ? 'rgba(217, 119, 6, 0.1)' : 'transparent',
                  border: 'none',
                  borderBottom: isActive ? '2px solid var(--accent-gold)' : '2px solid transparent',
                  borderRadius: '6px 6px 0 0',
                  padding: '8px 18px',
                  fontSize: '1.05rem',
                  fontWeight: isActive ? 700 : 600,
                  color: isActive ? 'var(--accent-gold)' : '#334155',
                  transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                  cursor: 'pointer',
                  letterSpacing: '0.03em',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                {item.label}
                {isActive && (
                  <span style={{
                    width: '5px',
                    height: '5px',
                    borderRadius: '50%',
                    background: 'var(--accent-gold)',
                    boxShadow: '0 0 6px var(--accent-gold)',
                  }} />
                )}
              </button>
            );
          })}
        </nav>

        {/* Quick Order Contact Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <a
            href="https://wa.me/919677131092?text=Hello%20Aadhyaa%20Skills%20R%26D,%20I%20want%20to%20order%20a%20Robotics%20Kit."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
            style={{ padding: '8px 16px', fontSize: '0.82rem' }}
          >
            <MessageSquare size={15} />
            <span className="btn-label-desktop">WhatsApp Order</span>
          </a>

          <a
            href="tel:+919677131092"
            className="btn-secondary"
            style={{ padding: '8px 14px', fontSize: '0.82rem' }}
            title="Call +91 96771 31092"
          >
            <Phone size={14} style={{ color: 'var(--accent-cyan)' }} />
            <span className="btn-label-desktop">+91 96771 31092</span>
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'transparent',
              color: '#0f172a',
              display: 'flex',
              padding: '6px',
            }}
            className="mobile-hamburger"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div style={{
          background: '#ffffff',
          borderBottom: '1px solid #e2e8f0',
          padding: '20px 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          boxShadow: '0 10px 25px rgba(0,0,0,0.06)',
        }}>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="rajdhani"
              style={{
                textAlign: 'left',
                background: activePage === item.id ? 'rgba(217, 119, 6, 0.1)' : 'transparent',
                border: 'none',
                color: activePage === item.id ? 'var(--accent-gold)' : '#0f172a',
                fontSize: '1.2rem',
                fontWeight: activePage === item.id ? 700 : 500,
                padding: '10px 14px',
                borderRadius: '8px',
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @media (min-width: 860px) {
          .desktop-nav { display: flex !important; }
          .mobile-hamburger { display: none !important; }
        }
        @media (max-width: 600px) {
          .btn-label-desktop { display: none; }
        }
      `}</style>
    </header>
  );
}
