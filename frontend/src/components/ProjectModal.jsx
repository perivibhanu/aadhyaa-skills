import React, { useState } from 'react';
import { X, Copy, Check, Terminal, Cpu, Layers, BookOpen, ExternalLink } from 'lucide-react';

export default function ProjectModal({ project, onClose, onOrderKit }) {
  const [copied, setCopied] = useState(false);

  if (!project) return null;

  const handleCopy = () => {
    if (project.starterCode?.code) {
      navigator.clipboard.writeText(project.starterCode.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
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

        {/* Modal Header */}
        <div style={{ marginBottom: '24px', paddingRight: '40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
            <span className="badge-tag">{project.difficulty} Level</span>
            <span className="badge-tag badge-gold">Kit: {project.recommendedKit}</span>
          </div>
          <h2 className="orbitron" style={{ fontSize: '1.8rem', fontWeight: 800, color: '#fff' }}>
            {project.title}
          </h2>
          <p className="rajdhani" style={{ color: 'var(--accent-cyan)', fontSize: '1.05rem', fontWeight: 600 }}>
            {project.tagline}
          </p>
        </div>

        {/* Detailed Description */}
        <div style={{ marginBottom: '24px' }}>
          <h4 className="rajdhani" style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-dim)', textTransform: 'uppercase', marginBottom: '8px' }}>
            Project Overview & Engineering Architecture
          </h4>
          <p style={{ color: '#cbd5e1', fontSize: '0.92rem', lineHeight: 1.6 }}>
            {project.fullDescription || project.shortDescription}
          </p>
        </div>

        {/* Features & Applications */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '16px',
          marginBottom: '24px',
        }}>
          {project.features && (
            <div style={{
              background: 'rgba(0, 0, 0, 0.35)',
              padding: '16px',
              borderRadius: '10px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
            }}>
              <div className="rajdhani" style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--accent-cyan)', marginBottom: '8px', textTransform: 'uppercase' }}>
                Key Technical Features
              </div>
              <ul style={{ margin: 0, paddingLeft: '18px', color: '#cbd5e1', fontSize: '0.82rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {project.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </div>
          )}

          {project.applications && (
            <div style={{
              background: 'rgba(0, 0, 0, 0.35)',
              padding: '16px',
              borderRadius: '10px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
            }}>
              <div className="rajdhani" style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--accent-gold)', marginBottom: '8px', textTransform: 'uppercase' }}>
                Industry & Competition Applications
              </div>
              <ul style={{ margin: 0, paddingLeft: '18px', color: '#cbd5e1', fontSize: '0.82rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {project.applications.map((app, i) => (
                  <li key={i}>{app}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Schematic Wiring Overview */}
        {project.schematicOverview && (
          <div style={{
            padding: '16px 20px',
            background: 'rgba(0, 240, 255, 0.05)',
            borderRadius: '10px',
            border: '1px solid rgba(0, 240, 255, 0.2)',
            marginBottom: '24px',
          }}>
            <div className="rajdhani" style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--accent-cyan)', textTransform: 'uppercase', marginBottom: '6px' }}>
              🔌 Circuit Schematic & Wiring Guide
            </div>
            <p style={{ color: '#cbd5e1', fontSize: '0.85rem', margin: 0, lineHeight: 1.5 }}>
              {project.schematicOverview}
            </p>
          </div>
        )}

        {/* Starter Code Block */}
        {project.starterCode && (
          <div style={{ marginBottom: '28px' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              background: '#070b12',
              padding: '10px 16px',
              borderTopLeftRadius: '10px',
              borderTopRightRadius: '10px',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              borderBottom: 'none',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Terminal size={15} style={{ color: 'var(--accent-cyan)' }} />
                <span className="orbitron" style={{ fontSize: '0.78rem', color: '#e2e8f0' }}>
                  STARTER CODE (C++ / ARDUINO)
                </span>
              </div>
              <button
                onClick={handleCopy}
                className="btn-secondary"
                style={{ padding: '4px 10px', fontSize: '0.75rem', gap: '6px' }}
              >
                {copied ? <Check size={13} style={{ color: 'var(--accent-green)' }} /> : <Copy size={13} />}
                {copied ? 'Copied!' : 'Copy Code'}
              </button>
            </div>
            <pre style={{
              background: '#03060a',
              padding: '18px',
              borderBottomLeftRadius: '10px',
              borderBottomRightRadius: '10px',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              overflowX: 'auto',
              fontFamily: 'var(--font-code)',
              fontSize: '0.82rem',
              color: '#38bdf8',
              lineHeight: 1.5,
              margin: 0,
            }}>
              <code>{project.starterCode.code}</code>
            </pre>
          </div>
        )}

        {/* Bottom CTA */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
          <button onClick={onClose} className="btn-secondary">
            Close
          </button>
          <button
            onClick={() => {
              onClose();
              if (onOrderKit) onOrderKit(project.recommendedKit);
            }}
            className="btn-primary"
          >
            <Layers size={16} />
            Order {project.recommendedKit} to Build This
          </button>
        </div>

      </div>
    </div>
  );
}

