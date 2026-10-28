import React, { useState } from 'react';
import { Package, Check, Cpu, Sparkles, MessageSquare, PhoneCall, ChevronDown, ChevronUp } from 'lucide-react';

export default function KitsSection({ kits, onOrderKit }) {
  const [expandedKit, setExpandedKit] = useState(null);

  const toggleExpand = (slug) => {
    setExpandedKit(expandedKit === slug ? null : slug);
  };

  return (
    <section id="kits" style={{ padding: '80px 0', background: 'rgba(5, 9, 16, 0.6)' }}>
      <div className="container">
        
        <div className="section-title-wrap">
          <div className="badge-tag badge-gold">
            <Package size={14} /> Official Hardware Kits
          </div>
          <h2 className="section-title orbitron">Complete R&D Hardware Kits</h2>
          <p className="section-subtitle">
            Every kit is assembled in our laboratory with tested genuine parts, custom mounting brackets, pre-flashed microcontrollers, and comprehensive circuit connection manuals for students.
          </p>
        </div>

        {/* Kits Grid */}
        <div className="grid-cards">
          {kits.map((kit) => {
            const isExpanded = expandedKit === kit.slug;
            return (
              <div
                key={kit.slug}
                className="glass-panel"
                style={{
                  padding: '30px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  border: kit.badge?.includes('Flagship') ? '1px solid rgba(255, 199, 0, 0.45)' : '1px solid var(--border-glow)',
                  boxShadow: kit.badge?.includes('Flagship') ? '0 8px 30px rgba(255, 199, 0, 0.12)' : 'none',
                }}
              >
                <div>
                  {/* Category & Badge */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                    <span className="rajdhani" style={{ fontSize: '0.85rem', color: 'var(--accent-cyan)', fontWeight: 700, textTransform: 'uppercase' }}>
                      {kit.category}
                    </span>
                    {kit.badge && (
                      <span className={`badge-tag ${kit.badge.includes('Flagship') ? 'badge-gold' : 'badge-green'}`} style={{ fontSize: '0.7rem' }}>
                        <Sparkles size={11} /> {kit.badge}
                      </span>
                    )}
                  </div>

                  {/* Kit Title & Price */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px', marginBottom: '8px' }}>
                    <h3 className="orbitron" style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff' }}>
                      {kit.name}
                    </h3>
                    <div style={{ textAlign: 'right' }}>
                      <div className="orbitron" style={{ fontSize: '1.3rem', fontWeight: 900, color: 'var(--accent-gold)' }}>
                        ₹{kit.priceINR.toLocaleString('en-IN')}
                      </div>
                      <div style={{ fontSize: '0.7rem', color: 'var(--text-dim)' }}>All Parts Included</div>
                    </div>
                  </div>

                  <p className="rajdhani" style={{ color: 'var(--text-muted)', fontSize: '0.95rem', fontWeight: 600, marginBottom: '14px' }}>
                    {kit.tagline}
                  </p>

                  <p style={{ color: '#94a3b8', fontSize: '0.88rem', marginBottom: '20px', lineHeight: 1.5 }}>
                    {kit.description}
                  </p>

                  {/* Builds Which Projects */}
                  {kit.targetProjects && kit.targetProjects.length > 0 && (
                    <div style={{
                      padding: '10px 14px',
                      background: 'rgba(0, 240, 255, 0.05)',
                      borderRadius: '8px',
                      border: '1px solid rgba(0, 240, 255, 0.15)',
                      marginBottom: '18px',
                    }}>
                      <div style={{ fontSize: '0.75rem', color: 'var(--accent-cyan)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '4px' }}>
                        Builds Featured Robots:
                      </div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                        {kit.targetProjects.map((p, i) => (
                          <span
                            key={i}
                            style={{
                              fontSize: '0.75rem',
                              background: 'rgba(0, 0, 0, 0.4)',
                              padding: '2px 8px',
                              borderRadius: '4px',
                              color: '#fff',
                            }}
                          >
                            🤖 {p}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Components Included List */}
                  <div style={{ marginBottom: '20px' }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '10px',
                    }}>
                      <div className="rajdhani" style={{ fontSize: '0.85rem', fontWeight: 700, color: '#e2e8f0', textTransform: 'uppercase' }}>
                        Included Components ({kit.componentsIncluded?.length || 0}):
                      </div>
                      <button
                        onClick={() => toggleExpand(kit.slug)}
                        style={{
                          background: 'transparent',
                          color: 'var(--accent-cyan)',
                          fontSize: '0.8rem',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px',
                        }}
                      >
                        {isExpanded ? <>Less <ChevronUp size={14} /></> : <>View All <ChevronDown size={14} /></>}
                      </button>
                    </div>

                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {(isExpanded ? kit.componentsIncluded : kit.componentsIncluded.slice(0, 4)).map((comp, idx) => (
                        <li
                          key={idx}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            fontSize: '0.82rem',
                            color: '#cbd5e1',
                            padding: '4px 8px',
                            background: 'rgba(255, 255, 255, 0.03)',
                            borderRadius: '4px',
                          }}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <Check size={13} style={{ color: 'var(--accent-green)' }} />
                            <span>{comp.name}</span>
                          </div>
                          <span style={{ color: 'var(--accent-gold)', fontWeight: 700, fontSize: '0.78rem' }}>
                            x{comp.qty}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                {/* Bottom Actions */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '16px' }}>
                  <button
                    onClick={() => onOrderKit(kit.name)}
                    className="btn-primary"
                    style={{ width: '100%', padding: '12px' }}
                  >
                    <Package size={16} />
                    Order / Inquire This Kit
                  </button>

                  <a
                    href={`https://wa.me/919677131092?text=Hello%20Aadhyaa%20Skills,%20I%20am%20interested%20in%20ordering%20the%20${encodeURIComponent(kit.name)}%20(₹${kit.priceINR}).`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                    style={{ width: '100%', justifyContent: 'center', fontSize: '0.82rem', padding: '10px' }}
                  >
                    <MessageSquare size={15} style={{ color: '#25D366' }} />
                    Instant WhatsApp Enquiry
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

