import React from 'react';
import { Phone, Globe, MessageSquare } from 'lucide-react';
import BrandLogo from './BrandLogo.jsx';

export default function Footer({ onNavigate }) {
  const handleNav = (page) => {
    if (onNavigate) {
      onNavigate(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer style={{
      background: 'var(--bg-secondary)',
      borderTop: '1px solid var(--border-subtle)',
      padding: '50px 0 26px',
      position: 'relative',
      zIndex: 1,
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '40px',
          marginBottom: '36px',
        }}>
          
          {/* Column 1: Brand & Profile */}
          <div>
            <div style={{ marginBottom: '16px' }}>
              <BrandLogo onClick={() => handleNav('home')} isDarkText={true} />
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.7, margin: 0 }}>
              Aadhyaa Skills Research and Development specializes in high-impact research, training, and development solutions designed to empower individuals and organizations for success in the ever-evolving global landscape.
            </p>
          </div>

          {/* Column 2: Navigation Pages */}
          <div>
            <div className="rajdhani" style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-main)', textTransform: 'uppercase', marginBottom: '14px', letterSpacing: '0.04em' }}>
              Pages
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.92rem', color: 'var(--text-muted)' }}>
              <li><button onClick={() => handleNav('home')} style={{ background: 'transparent', color: 'inherit', textAlign: 'left', padding: 0, cursor: 'pointer', transition: 'color 0.2s' }}>Home</button></li>
              <li><button onClick={() => handleNav('programs')} style={{ background: 'transparent', color: 'inherit', textAlign: 'left', padding: 0, cursor: 'pointer', transition: 'color 0.2s' }}>Programs (8 Phases)</button></li>
              <li><button onClick={() => handleNav('certifications')} style={{ background: 'transparent', color: 'inherit', textAlign: 'left', padding: 0, cursor: 'pointer', transition: 'color 0.2s' }}>Certifications (CLAD / CLD / CLA)</button></li>
              <li><button onClick={() => handleNav('kit')} style={{ background: 'transparent', color: 'inherit', textAlign: 'left', padding: 0, cursor: 'pointer', transition: 'color 0.2s' }}>Engineer Kit</button></li>
              <li><button onClick={() => handleNav('guidance')} style={{ background: 'transparent', color: 'inherit', textAlign: 'left', padding: 0, cursor: 'pointer', transition: 'color 0.2s' }}>Guidance</button></li>
              <li><button onClick={() => handleNav('order')} style={{ background: 'transparent', color: 'inherit', textAlign: 'left', padding: 0, cursor: 'pointer', transition: 'color 0.2s' }}>Order (WhatsApp Desk)</button></li>
            </ul>
          </div>

          {/* Column 3: Direct Contact & WhatsApp */}
          <div>
            <div className="rajdhani" style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-main)', textTransform: 'uppercase', marginBottom: '14px', letterSpacing: '0.04em' }}>
              Direct Contact
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.92rem', color: 'var(--text-muted)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Phone size={16} style={{ color: 'var(--accent-cyan)' }} />
                <span>+91 96771 31092</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <MessageSquare size={16} style={{ color: '#25D366' }} />
                <span>WhatsApp: +91 96771 31092</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Globe size={16} style={{ color: 'var(--accent-gold)' }} />
                <a href="https://www.aadhyaaskill.com" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
                  www.aadhyaaskill.com
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright bar */}
        <div style={{
          borderTop: '1px solid var(--border-subtle)',
          paddingTop: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
          fontSize: '0.85rem',
          color: 'var(--text-dim)',
        }}>
          <div>
            © {new Date().getFullYear()} Aadhyaa Skills Research & Development. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
