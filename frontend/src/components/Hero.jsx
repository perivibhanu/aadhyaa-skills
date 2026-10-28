import React from 'react';
import { Bot, Cpu, Sparkles, CheckCircle2, Layers, Building2, ArrowRight } from 'lucide-react';

export default function Hero({ onOpenCardModal, onSelectKit }) {
  return (
    <section style={{
      position: 'relative',
      padding: '60px 0 80px',
      overflow: 'hidden',
    }}>
      {/* Ambient background glow */}
      <div style={{
        position: 'absolute',
        top: '-120px',
        left: '20%',
        width: '600px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(0, 229, 255, 0.1) 0%, transparent 70%)',
        filter: 'blur(60px)',
        zIndex: 0,
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        top: '100px',
        right: '10%',
        width: '500px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(255, 199, 0, 0.08) 0%, transparent 70%)',
        filter: 'blur(60px)',
        zIndex: 0,
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.15fr 0.85fr',
          gap: '48px',
          alignItems: 'center',
        }} className="hero-side-grid">
          
          {/* Left Column: Headlines & Actions */}
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
              <span className="badge-tag badge-gold">
                <Sparkles size={13} />
                Aadhyaa Skills Research & Development
              </span>
            </div>

            <h1 className="orbitron" style={{
              fontSize: 'clamp(2.1rem, 4.2vw, 3.4rem)',
              fontWeight: 900,
              lineHeight: 1.15,
              marginBottom: '20px',
              textTransform: 'uppercase',
              letterSpacing: '0.02em',
            }}>
              <span style={{ color: '#ffffff' }}>For The People Who</span><br />
              <span style={{
                background: 'linear-gradient(90deg, #ffc700 0%, #00e5ff 65%, #38bdf8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                Born To Live With Robots
              </span>
            </h1>

            <p style={{
              fontSize: '1.08rem',
              color: '#cbd5e1',
              lineHeight: 1.65,
              marginBottom: '32px',
              maxWidth: '620px',
            }}>
              We manufacture all-inclusive hardware kits containing every microcontroller, motor driver, sensor, and chassis required to build competition-ready <strong>Robotic Arms</strong>, <strong>Soccer Bots</strong>, <strong>All-Terrain Rovers</strong>, <strong>Maze Solvers</strong>, and <strong>Fighting Combat Bots</strong>.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap', marginBottom: '40px' }}>
              <a href="#kits" className="btn-primary" style={{ padding: '13px 26px' }}>
                <Layers size={18} />
                Explore 6 Hardware Kits
              </a>

              <a href="#college-lab" className="btn-gold" style={{ padding: '13px 24px' }}>
                <Building2 size={18} />
                College Lab Setup
              </a>

              <a href="#components" className="btn-secondary" style={{ padding: '13px 22px' }}>
                <Cpu size={17} style={{ color: 'var(--accent-cyan)' }} />
                Component Lab
              </a>
            </div>

            {/* Key Trust Metrics */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
              gap: '16px',
              paddingTop: '24px',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            }}>
              {[
                { number: '5', label: 'Star Robots', sub: 'ARM, Soccer, Maze...' },
                { number: '6', label: 'Hardware Kits', sub: 'All Parts Included' },
                { number: '100%', label: 'Hands-on', sub: 'Component Learning' },
                { number: '20+ Kits', label: 'Institutional', sub: 'College Lab Setup' },
              ].map((stat, i) => (
                <div key={i}>
                  <div className="orbitron" style={{ fontSize: '1.5rem', fontWeight: 900, color: i === 1 ? 'var(--accent-gold)' : 'var(--accent-cyan)' }}>
                    {stat.number}
                  </div>
                  <div className="rajdhani" style={{ fontSize: '0.92rem', fontWeight: 700, color: '#f1f5f9' }}>
                    {stat.label}
                  </div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-dim)' }}>
                    {stat.sub}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Visual Robot Showcase Card from Flyer */}
          <div style={{ position: 'relative' }}>
            <div className="glass-panel" style={{
              padding: '16px',
              border: '1px solid rgba(0, 229, 255, 0.25)',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5), 0 0 30px rgba(0, 229, 255, 0.1)',
            }}>
              
              {/* Header inside card */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '12px',
                padding: '4px 8px',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', display: 'inline-block', boxShadow: '0 0 8px #10b981' }} />
                  <span className="orbitron" style={{ fontSize: '0.8rem', color: '#fff', fontWeight: 700 }}>
                    OFFICIAL R&D FLYER
                  </span>
                </div>
                <button
                  onClick={onOpenCardModal}
                  style={{
                    background: 'transparent',
                    color: 'var(--accent-gold)',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                  className="rajdhani"
                >
                  Inspect Full Size <ArrowRight size={13} />
                </button>
              </div>

              {/* Flyer Image Container */}
              <div
                onClick={onOpenCardModal}
                style={{
                  borderRadius: '12px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  position: 'relative',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  background: '#040711',
                }}
              >
                <img
                  src="/assets/aadhyaa_skills_card.jpg"
                  alt="Aadhyaa Skills Robotics Flyer"
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    transition: 'transform 0.4s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1.0)')}
                />
              </div>

              {/* Robot Badges below flyer */}
              <div style={{
                marginTop: '16px',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px',
                justifyContent: 'center',
              }}>
                {['🦾 Robotic ARM', '⚽ Soccer Robot', '🚜 All Terrain Rover', '⚡ Maze Solvers', '⚔️ Fighting Robot'].map((tag, idx) => (
                  <span
                    key={idx}
                    style={{
                      fontSize: '0.75rem',
                      padding: '4px 10px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      borderRadius: '6px',
                      color: '#cbd5e1',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .hero-side-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
