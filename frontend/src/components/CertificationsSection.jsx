import React from 'react';
import {
  Award,
  CheckCircle2,
  Clock,
  FileCheck,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  MessageSquare,
} from 'lucide-react';

export default function CertificationsSection({ onNavigate }) {
  const certifications = [
    {
      level: 'LEVEL 1',
      levelBg: 'rgba(217, 119, 6, 0.12)',
      levelColor: 'var(--accent-gold)',
      code: 'CLAD',
      title: 'Certified LabVIEW Associate Developer',
      summary: 'Validates ability to use LabVIEW to create simple applications with minimal guidance.',
      details: [
        'Format: 40 Multiple Choice Questions',
        'Duration: 2 Hours',
        'Prerequisite: None',
        'Validity: 3 Years',
      ],
      footerTag: 'BUILD FOUNDATION',
      footerColor: 'var(--accent-gold)',
    },
    {
      level: 'LEVEL 2',
      levelBg: 'rgba(2, 132, 199, 0.12)',
      levelColor: 'var(--accent-cyan)',
      code: 'CLD',
      title: 'Certified LabVIEW Developer',
      summary: 'Verifies ability to create functional, well-documented code with minimal development guidance.',
      details: [
        'Format: Application Development Exam',
        'Duration: 4 Hours',
        'Prerequisite: None',
        'Validity: 3 Years',
      ],
      footerTag: 'REAL-WORLD SOLUTIONS',
      footerColor: 'var(--accent-cyan)',
    },
    {
      level: 'LEVEL 3',
      levelBg: 'rgba(5, 150, 105, 0.12)',
      levelColor: 'var(--accent-emerald)',
      code: 'CLA',
      title: 'Certified LabVIEW Architect',
      summary: 'Demonstrates advanced expertise in designing and developing large-scale, maintainable applications.',
      details: [
        'Format: Design & Architecture Exam',
        'Duration: 4 Hours',
        'Prerequisite: CLD Certified',
        'Validity: 3 Years',
      ],
      footerTag: 'SCALABLE ARCHITECTURE',
      footerColor: 'var(--accent-emerald)',
    },
    {
      level: 'LEVEL 4',
      levelBg: 'rgba(139, 92, 246, 0.12)',
      levelColor: '#8b5cf6',
      code: 'CLED',
      title: 'Certified LabVIEW Embedded Developer',
      summary: 'Validates proficiency in real-time and FPGA embedded systems with myRIO and cRIO hardware.',
      details: [
        'Format: Embedded Application Dev',
        'Duration: 4 Hours',
        'Prerequisite: CLAD Recommended',
        'Validity: 3 Years',
      ],
      footerTag: 'EMBEDDED INNOVATIONS',
      footerColor: '#8b5cf6',
    },
  ];

  return (
    <div className="page-turn-enter" style={{ padding: '40px 0 80px' }}>
      <div className="container" style={{ maxWidth: '1100px' }}>
        
        {/* Header Block */}
        <div style={{ textAlign: 'center', marginBottom: '46px' }}>
          <span
            className="rajdhani"
            style={{
              color: 'var(--accent-gold)',
              fontSize: '0.95rem',
              fontWeight: 800,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              marginBottom: '10px',
            }}
          >
            <Sparkles size={14} /> NATIONAL INSTRUMENTS VALIDATION
          </span>
          
          <h1
            className="orbitron"
            style={{
              fontSize: 'clamp(2rem, 3.8vw, 2.9rem)',
              fontWeight: 900,
              letterSpacing: '-0.01em',
              color: 'var(--text-main)',
              lineHeight: 1.25,
              marginBottom: '14px',
            }}
          >
            Global LabVIEW Certification Path
          </h1>

          <p
            style={{
              fontSize: '1.08rem',
              color: 'var(--text-muted)',
              lineHeight: 1.7,
              maxWidth: '820px',
              margin: '0 auto',
            }}
          >
            Internationally recognized engineering benchmarks that give candidates an undeniable competitive edge.
          </p>
        </div>

        {/* 4 Certification Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(480px, 1fr))',
            gap: '24px',
            marginBottom: '46px',
          }}
        >
          {certifications.map((c, idx) => (
            <div
              key={idx}
              className="glass-panel"
              style={{
                padding: '32px 30px',
                borderRadius: '16px',
                border: '1.5px solid var(--border-subtle)',
                background: 'var(--bg-card)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.25s ease',
              }}
            >
              <div>
                {/* Level Tag Pill */}
                <div style={{ marginBottom: '14px' }}>
                  <span
                    className="rajdhani"
                    style={{
                      display: 'inline-block',
                      padding: '4px 12px',
                      borderRadius: '6px',
                      background: c.levelBg,
                      color: c.levelColor,
                      fontSize: '0.82rem',
                      fontWeight: 800,
                      letterSpacing: '0.08em',
                    }}
                  >
                    {c.level}
                  </span>
                </div>

                {/* Code & Title */}
                <h2
                  className="orbitron"
                  style={{
                    fontSize: '1.8rem',
                    fontWeight: 900,
                    color: 'var(--text-main)',
                    margin: '0 0 4px',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {c.code}
                </h2>
                
                <div
                  className="rajdhani"
                  style={{
                    fontSize: '1.15rem',
                    fontWeight: 700,
                    color: c.levelColor,
                    marginBottom: '14px',
                  }}
                >
                  {c.title}
                </div>

                {/* Summary */}
                <p
                  style={{
                    fontSize: '0.94rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.6,
                    marginBottom: '20px',
                  }}
                >
                  {c.summary}
                </p>

                {/* Details List */}
                <div
                  style={{
                    borderTop: '1px solid var(--border-subtle)',
                    paddingTop: '16px',
                    marginBottom: '20px',
                  }}
                >
                  <ul
                    style={{
                      listStyle: 'none',
                      padding: 0,
                      margin: 0,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '8px',
                    }}
                  >
                    {c.details.map((item, i) => (
                      <li
                        key={i}
                        style={{
                          fontSize: '0.88rem',
                          color: 'var(--text-main)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                        }}
                      >
                        <span style={{ color: c.levelColor, fontWeight: 700 }}>•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Footer Tag */}
              <div
                style={{
                  borderTop: '1px solid var(--border-subtle)',
                  paddingTop: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <span
                  className="rajdhani"
                  style={{
                    color: c.footerColor,
                    fontWeight: 800,
                    fontSize: '0.86rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                  }}
                >
                  {c.footerTag}
                </span>

                <a
                  href={`https://wa.me/919677131092?text=Hello%20Aadhyaa%20Skills,%20I%20am%20interested%20in%20${c.code}%20training%20and%20certification.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp"
                  style={{ padding: '6px 14px', fontSize: '0.78rem' }}
                >
                  <MessageSquare size={14} /> Enroll
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* 100% Placement Guarantee Banner */}
        <div
          className="glass-panel"
          style={{
            padding: '28px 32px',
            borderRadius: '16px',
            border: '1.5px solid var(--accent-emerald)',
            background: 'linear-gradient(135deg, var(--bg-card) 0%, rgba(5, 150, 105, 0.05) 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '20px',
            boxShadow: '0 4px 20px rgba(5, 150, 105, 0.08)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div
              style={{
                width: '52px',
                height: '52px',
                borderRadius: '12px',
                background: 'rgba(5, 150, 105, 0.12)',
                color: 'var(--accent-emerald)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <ShieldCheck size={28} />
            </div>
            <div>
              <div className="rajdhani" style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-main)' }}>
                100% Placement Guarantee in Core Automation & Robotics
              </div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                Direct interview drives with aerospace, automotive, instrumentation, and R&D corporations.
              </div>
            </div>
          </div>

          <button
            onClick={() => onNavigate && onNavigate('kit')}
            className="btn-gold"
            style={{ padding: '10px 22px', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
          >
            <span>Explore Engineer Kits</span>
            <ArrowRight size={16} />
          </button>
        </div>

      </div>
    </div>
  );
}

