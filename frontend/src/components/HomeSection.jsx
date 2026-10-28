import React from 'react';
import {
  BookOpen,
  Lightbulb,
  TrendingUp,
  Target,
  Rocket,
} from 'lucide-react';

export default function HomeSection({ onNavigate }) {
  return (
    <div className="page-turn-enter" style={{ padding: '40px 0 60px' }}>
      <div className="container" style={{ maxWidth: '1040px' }}>
        
        {/* ======================================================== */}
        {/* 1. OFFICIAL BRAND MOTIVE BOARD (Matching 2nd Screenshot) */}
        {/* ======================================================== */}
        <div
          className="glass-panel"
          style={{
            margin: '0 auto 54px',
            padding: '38px 32px 34px',
            background: 'linear-gradient(180deg, var(--bg-card) 0%, var(--bg-secondary) 100%)',
            border: '2px solid var(--border-subtle)',
            borderRadius: '20px',
            boxShadow: '0 12px 40px rgba(0, 0, 0, 0.05)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Subtle golden ambient accent corner */}
          <div
            style={{
              position: 'absolute',
              top: '-40px',
              right: '-40px',
              width: '140px',
              height: '140px',
              background: 'radial-gradient(circle, rgba(217, 119, 6, 0.12) 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />

          {/* Slogan Hashtag */}
          <div style={{ textAlign: 'center', marginBottom: '18px' }}>
            <span
              className="rajdhani"
              style={{
                fontSize: 'clamp(1.4rem, 3vw, 2rem)',
                fontWeight: 800,
                letterSpacing: '0.04em',
                color: 'var(--text-main)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              <span>#SkillsToday</span>
              <span style={{ color: 'var(--accent-gold)' }}>ImpactTomorrow</span>
            </span>
          </div>

          {/* Main Brand Emblem: AS + Aadhyaa Skills R&D */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '16px',
              marginBottom: '28px',
              flexWrap: 'wrap',
            }}
          >
            {/* Signature Yellow Curved Emblem */}
            <div
              style={{
                width: '56px',
                height: '56px',
                background: 'linear-gradient(135deg, #ffca00 0%, #f59e0b 100%)',
                borderRadius: '14px 4px 14px 4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 6px 20px rgba(245, 158, 11, 0.38)',
                flexShrink: 0,
              }}
            >
              <span
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontStyle: 'italic',
                  fontWeight: 900,
                  fontSize: '30px',
                  color: '#111827',
                  letterSpacing: '-1.5px',
                  lineHeight: 1,
                }}
              >
                AS
              </span>
            </div>

            <h1
              className="orbitron"
              style={{
                fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
                fontWeight: 900,
                letterSpacing: '-0.02em',
                color: 'var(--text-main)',
                margin: 0,
                lineHeight: 1.15,
                textAlign: 'center',
              }}
            >
              Aadhyaa Skills <span style={{ color: 'var(--accent-gold)' }}>R&D</span>
            </h1>
          </div>

          {/* Sleek Horizontal Divider with Center Node */}
          <div
            style={{
              position: 'relative',
              width: '90%',
              margin: '0 auto 32px',
              height: '2px',
              background: 'linear-gradient(90deg, transparent 0%, var(--accent-gold) 20%, var(--accent-gold) 80%, transparent 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                background: 'var(--accent-gold)',
                boxShadow: '0 0 10px var(--accent-gold)',
                border: '2.5px solid var(--bg-card)',
              }}
            />
          </div>

          {/* The 4 Motive Pillars: Learn. | Innovate. | Elevate. | Impact. */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '16px',
              textAlign: 'center',
            }}
          >
            {/* Pillar 1: Learn */}
            <div
              style={{
                padding: '16px 12px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                borderRight: '1px solid var(--border-subtle)',
              }}
              className="motive-pillar"
            >
              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '12px',
                  background: 'var(--accent-gold-soft)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-gold)',
                  marginBottom: '10px',
                }}
              >
                <BookOpen size={28} strokeWidth={2.2} />
              </div>
              <h3 className="rajdhani" style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-main)', margin: '0 0 6px' }}>
                Learn.
              </h3>
              <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.45 }}>
                Master core robotics, sensors & instrumentation fundamentals.
              </p>
            </div>

            {/* Pillar 2: Innovate */}
            <div
              style={{
                padding: '16px 12px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                borderRight: '1px solid var(--border-subtle)',
              }}
              className="motive-pillar"
            >
              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '12px',
                  background: 'var(--accent-gold-soft)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-gold)',
                  marginBottom: '10px',
                }}
              >
                <Lightbulb size={28} strokeWidth={2.2} />
              </div>
              <h3 className="rajdhani" style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-main)', margin: '0 0 6px' }}>
                Innovate.
              </h3>
              <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.45 }}>
                Convert ideas into working hardware prototypes & autonomous bots.
              </p>
            </div>

            {/* Pillar 3: Elevate */}
            <div
              style={{
                padding: '16px 12px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                borderRight: '1px solid var(--border-subtle)',
              }}
              className="motive-pillar"
            >
              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '12px',
                  background: 'var(--accent-gold-soft)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-gold)',
                  marginBottom: '10px',
                }}
              >
                <TrendingUp size={28} strokeWidth={2.2} />
              </div>
              <h3 className="rajdhani" style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-main)', margin: '0 0 6px' }}>
                Elevate.
              </h3>
              <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.45 }}>
                Level up to global CLAD/CLD standards with hands-on R&D mastery.
              </p>
            </div>

            {/* Pillar 4: Impact */}
            <div
              style={{
                padding: '16px 12px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
              className="motive-pillar"
            >
              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '12px',
                  background: 'var(--accent-gold-soft)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-gold)',
                  marginBottom: '10px',
                }}
              >
                <Target size={28} strokeWidth={2.2} />
              </div>
              <h3 className="rajdhani" style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-main)', margin: '0 0 6px' }}>
                Impact.
              </h3>
              <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.45 }}>
                Win national competitions and secure guaranteed career placements.
              </p>
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* 2. ABOUT COMPANY (Exact Content from 1st Screenshot)    */}
        {/* ======================================================== */}
        <section style={{ marginBottom: '50px' }}>
          
          {/* Category Tag */}
          <div style={{ marginBottom: '12px' }}>
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
                gap: '8px',
              }}
            >
              ABOUT COMPANY
            </span>
          </div>

          {/* Main Heading */}
          <h2
            className="orbitron"
            style={{
              fontSize: 'clamp(2rem, 3.8vw, 2.9rem)',
              fontWeight: 800,
              lineHeight: 1.25,
              color: 'var(--text-main)',
              marginBottom: '22px',
              letterSpacing: '-0.01em',
            }}
          >
            Dynamic, Forward-Thinking Skill & R&D Solutions
          </h2>

          {/* Lead Paragraph 1 */}
          <p
            style={{
              fontSize: '1.12rem',
              lineHeight: 1.8,
              color: 'var(--text-muted)',
              marginBottom: '18px',
            }}
          >
            <strong style={{ color: 'var(--text-main)', fontWeight: 700 }}>
              Aadhyaa Skills Research and Development
            </strong>{' '}
            specializes in high-impact research, training, and development solutions designed to empower individuals and organizations for success in the ever-evolving global landscape.
          </p>

          {/* Sub Paragraph 2 */}
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.8,
              color: 'var(--text-muted)',
              marginBottom: '38px',
            }}
          >
            We partner with leading universities to establish{' '}
            <strong style={{ color: 'var(--text-main)', fontWeight: 700 }}>
              National Instruments Center of Excellence
            </strong>{' '}
            facilities, equipping engineering campuses with industry-grade software, DAQ hardware, and structured semester-wise training.
          </p>

          {/* Vision & Mission Two Cards Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '24px',
            }}
          >
            {/* Card 1: Our Vision */}
            <div
              className="glass-panel"
              style={{
                padding: '30px 28px',
                borderRadius: '16px',
                border: '1.5px solid var(--border-subtle)',
                background: 'var(--bg-card)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    background: 'rgba(225, 29, 72, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-crimson)',
                  }}
                >
                  <Target size={20} strokeWidth={2.4} />
                </div>
                <h3
                  className="rajdhani"
                  style={{
                    fontSize: '1.4rem',
                    fontWeight: 800,
                    color: 'var(--text-main)',
                    margin: 0,
                  }}
                >
                  Our Vision
                </h3>
              </div>

              <p
                style={{
                  fontSize: '0.96rem',
                  lineHeight: 1.7,
                  color: 'var(--text-muted)',
                  margin: 0,
                }}
              >
                To be a catalyst for positive change by creating a world where individuals and organizations thrive through continuous learning, innovation, and skill enhancement.
              </p>
            </div>

            {/* Card 2: Our Mission */}
            <div
              className="glass-panel"
              style={{
                padding: '30px 28px',
                borderRadius: '16px',
                border: '1.5px solid var(--border-subtle)',
                background: 'var(--bg-card)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    background: 'rgba(2, 132, 199, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-cyan)',
                  }}
                >
                  <Rocket size={20} strokeWidth={2.4} />
                </div>
                <h3
                  className="rajdhani"
                  style={{
                    fontSize: '1.4rem',
                    fontWeight: 800,
                    color: 'var(--text-main)',
                    margin: 0,
                  }}
                >
                  Our Mission
                </h3>
              </div>

              <p
                style={{
                  fontSize: '0.96rem',
                  lineHeight: 1.7,
                  color: 'var(--text-muted)',
                  margin: 0,
                }}
              >
                Pioneer cutting-edge research, develop transformative training programs, and bridge the gap between academic knowledge and practical application.
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
