import React from 'react';
import { X, ExternalLink, Phone, Globe } from 'lucide-react';

export default function CardPreviewModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" style={{ maxWidth: '640px', textAlign: 'center' }} onClick={(e) => e.stopPropagation()}>
        
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            background: 'rgba(255, 255, 255, 0.08)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            color: '#fff',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }}
        >
          <X size={20} />
        </button>

        <h3 className="orbitron" style={{ fontSize: '1.25rem', color: '#fff', marginBottom: '8px' }}>
          Official Aadhyaa Skills Card
        </h3>
        <p className="rajdhani" style={{ color: 'var(--accent-gold)', fontSize: '0.95rem', fontWeight: 600, marginBottom: '20px' }}>
          "For the People who Born to live with Robots"
        </p>

        {/* Card Image */}
        <div style={{
          borderRadius: '12px',
          overflow: 'hidden',
          border: '2px solid rgba(0, 240, 255, 0.3)',
          boxShadow: '0 8px 30px rgba(0, 0, 0, 0.6), 0 0 20px rgba(0, 240, 255, 0.2)',
          marginBottom: '20px',
        }}>
          <img
            src="/assets/aadhyaa_skills_card.jpg"
            alt="Aadhyaa Skills Research & Development Official Flyer"
            style={{ width: '100%', height: 'auto', display: 'block' }}
            onError={(e) => {
              // Fallback if not found on /assets
              e.target.src = '/aadhyaa_skills_card.jpg';
            }}
          />
        </div>

        {/* Contact info from card */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
          gap: '12px',
          padding: '14px',
          background: 'rgba(0, 0, 0, 0.4)',
          borderRadius: '8px',
          border: '1px solid rgba(255, 255, 255, 0.08)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent-cyan)' }}>
            <Phone size={16} />
            <span className="rajdhani" style={{ fontWeight: 700, fontSize: '1rem' }}>+91 96771 31092</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent-gold)' }}>
            <Globe size={16} />
            <span className="rajdhani" style={{ fontWeight: 700, fontSize: '1rem' }}>www.aadhyaaskill.com</span>
          </div>
        </div>

      </div>
    </div>
  );
}

