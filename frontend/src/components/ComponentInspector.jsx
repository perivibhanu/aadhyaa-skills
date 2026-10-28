import React, { useState } from 'react';
import { Cpu, Zap, AlertTriangle, HelpCircle, CheckCircle, Radio, Settings2, Info } from 'lucide-react';

export default function ComponentInspector({ components, onSelectRobot }) {
  const [selectedSlug, setSelectedSlug] = useState(components[0]?.slug || 'hc-sr04-ultrasonic');
  const [categoryFilter, setCategoryFilter] = useState('ALL');
  const [hoveredPin, setHoveredPin] = useState(null);

  const categories = ['ALL', 'Sensors', 'Motor Drivers', 'Actuators', 'Microcontrollers', 'Wireless & IOT'];

  const filteredComponents = components.filter((c) => {
    if (categoryFilter === 'ALL') return true;
    return c.category.toLowerCase().includes(categoryFilter.toLowerCase().replace(' & iot', ''));
  });

  const activeComp = components.find((c) => c.slug === selectedSlug) || components[0];

  return (
    <section id="components" style={{ padding: '80px 0', position: 'relative' }}>
      <div className="container">
        
        <div className="section-title-wrap">
          <div className="badge-tag">
            <Cpu size={14} /> Student Interactive Lab
          </div>
          <h2 className="section-title orbitron">Interactive Component Explorer</h2>
          <p className="section-subtitle">
            Aadhyaa Skills teaches students by directly interacting with real hardware. Click any component below to explore its working principle, pin connections, electrical ratings, and student debugging tips.
          </p>

          {/* Category Tabs */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '24px', flexWrap: 'wrap' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategoryFilter(cat)}
                className="rajdhani"
                style={{
                  padding: '6px 14px',
                  borderRadius: '16px',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  border: categoryFilter === cat ? '1px solid var(--accent-cyan)' : '1px solid rgba(255, 255, 255, 0.1)',
                  background: categoryFilter === cat ? 'rgba(0, 240, 255, 0.15)' : 'rgba(255, 255, 255, 0.04)',
                  color: categoryFilter === cat ? 'var(--accent-cyan)' : 'var(--text-muted)',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Lab Split View */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(280px, 340px) 1fr',
          gap: '24px',
          alignItems: 'start',
        }} className="component-lab-grid">
          
          {/* Left Column: Component Picker List */}
          <div className="glass-panel" style={{ padding: '16px', maxHeight: '680px', overflowY: 'auto' }}>
            <div className="rajdhani" style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-dim)', textTransform: 'uppercase', marginBottom: '12px', paddingLeft: '8px' }}>
              Select Component ({filteredComponents.length})
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {filteredComponents.map((comp) => {
                const isSelected = comp.slug === activeComp?.slug;
                return (
                  <button
                    key={comp.slug}
                    onClick={() => {
                      setSelectedSlug(comp.slug);
                      setHoveredPin(null);
                    }}
                    style={{
                      textAlign: 'left',
                      padding: '12px 14px',
                      borderRadius: '10px',
                      background: isSelected ? 'linear-gradient(90deg, rgba(0, 240, 255, 0.15), rgba(0, 240, 255, 0.04))' : 'rgba(255, 255, 255, 0.02)',
                      border: isSelected ? '1px solid var(--accent-cyan)' : '1px solid rgba(255, 255, 255, 0.06)',
                      transition: 'all 0.2s',
                      cursor: 'pointer',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
                      <span className="rajdhani" style={{ fontSize: '0.75rem', color: isSelected ? 'var(--accent-cyan)' : 'var(--text-dim)', fontWeight: 700, textTransform: 'uppercase' }}>
                        {comp.category}
                      </span>
                      <span style={{ fontSize: '0.7rem', color: 'var(--accent-gold)' }}>
                        {comp.operatingVoltage}
                      </span>
                    </div>
                    <div className="rajdhani" style={{
                      fontWeight: 700,
                      fontSize: '0.98rem',
                      color: isSelected ? '#fff' : '#cbd5e1',
                    }}>
                      {comp.name}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Active Component Deep-Dive Inspection */}
          {activeComp && (
            <div className="glass-panel" style={{ padding: '32px', position: 'relative' }}>
              
              {/* Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px', marginBottom: '20px' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                    <span className="badge-tag">{activeComp.category}</span>
                    <span className="badge-tag badge-gold">{activeComp.operatingVoltage}</span>
                    <span className="badge-tag badge-green">{activeComp.interfaceType}</span>
                  </div>
                  <h3 className="orbitron" style={{ fontSize: '1.65rem', fontWeight: 800, color: '#fff' }}>
                    {activeComp.name}
                  </h3>
                </div>

                <div style={{
                  background: 'rgba(0, 0, 0, 0.4)',
                  padding: '8px 16px',
                  borderRadius: '8px',
                  border: '1px solid rgba(0, 240, 255, 0.2)',
                  textAlign: 'right',
                }}>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-dim)' }}>STUDENT LAB MODULE</div>
                  <div className="rajdhani" style={{ color: 'var(--accent-cyan)', fontWeight: 700, fontSize: '0.9rem' }}>
                    Interactive Pinout Active
                  </div>
                </div>
              </div>

              {/* Description */}
              <p style={{ color: '#cbd5e1', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '22px' }}>
                {activeComp.description}
              </p>

              {/* Working Principle */}
              {activeComp.workingPrinciple && (
                <div style={{
                  padding: '16px 20px',
                  background: 'rgba(0, 240, 255, 0.05)',
                  borderRadius: '12px',
                  border: '1px solid rgba(0, 240, 255, 0.15)',
                  marginBottom: '24px',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                    <Info size={16} style={{ color: 'var(--accent-cyan)' }} />
                    <span className="rajdhani" style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--accent-cyan)', textTransform: 'uppercase' }}>
                      How It Works (Theoretical & Practical Core)
                    </span>
                  </div>
                  <p style={{ color: '#94a3b8', fontSize: '0.88rem', margin: 0 }}>
                    {activeComp.workingPrinciple}
                  </p>
                </div>
              )}

              {/* Pinout Interactive Section */}
              <div style={{ marginBottom: '26px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <div className="rajdhani" style={{ fontSize: '1rem', fontWeight: 700, color: '#fff', textTransform: 'uppercase' }}>
                    📍 Interactive Pinout Diagram & Functionality
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>
                    Hover or click any pin to inspect wiring details
                  </div>
                </div>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                  gap: '10px',
                }}>
                  {activeComp.pinout?.map((p, idx) => {
                    const isHovered = hoveredPin === idx;
                    return (
                      <div
                        key={idx}
                        onMouseEnter={() => setHoveredPin(idx)}
                        onClick={() => setHoveredPin(idx)}
                        style={{
                          padding: '12px 14px',
                          borderRadius: '8px',
                          background: isHovered ? 'rgba(0, 240, 255, 0.15)' : 'rgba(0, 0, 0, 0.35)',
                          border: isHovered ? '1px solid var(--accent-cyan)' : '1px solid rgba(255, 255, 255, 0.08)',
                          cursor: 'pointer',
                          transition: 'all 0.2s',
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
                          <span className="orbitron" style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--accent-gold)' }}>
                            {p.pin}
                          </span>
                          <span className="rajdhani" style={{ fontSize: '0.75rem', color: 'var(--text-dim)', fontWeight: 600 }}>
                            {p.label}
                          </span>
                        </div>
                        <div style={{ fontSize: '0.78rem', color: isHovered ? '#fff' : 'var(--text-muted)', lineHeight: 1.35 }}>
                          {p.function}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Used In Projects */}
              {activeComp.usedInProjects && (
                <div style={{ marginBottom: '24px' }}>
                  <div className="rajdhani" style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-dim)', textTransform: 'uppercase', marginBottom: '8px' }}>
                    Featured in Aadhyaa Projects:
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {activeComp.usedInProjects.map((p, i) => (
                      <a
                        key={i}
                        href="#projects"
                        style={{
                          fontSize: '0.8rem',
                          padding: '4px 12px',
                          borderRadius: '6px',
                          background: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid rgba(255, 255, 255, 0.12)',
                          color: '#fff',
                        }}
                      >
                        🤖 {p}
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Student Debugging Pro-Tips */}
              {activeComp.studentTips && activeComp.studentTips.length > 0 && (
                <div style={{
                  padding: '16px 20px',
                  background: 'rgba(255, 199, 0, 0.06)',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 199, 0, 0.25)',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                    <AlertTriangle size={17} style={{ color: 'var(--accent-gold)' }} />
                    <span className="rajdhani" style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--accent-gold)', textTransform: 'uppercase' }}>
                      Aadhyaa R&D Student Pro-Tips & Debugging
                    </span>
                  </div>
                  <ul style={{ margin: 0, paddingLeft: '18px', color: '#cbd5e1', fontSize: '0.85rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {activeComp.studentTips.map((tip, i) => (
                      <li key={i}>{tip}</li>
                    ))}
                  </ul>
                </div>
              )}

            </div>
          )}

        </div>

      </div>

      <style>{`
        @media (max-width: 860px) {
          .component-lab-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

