import React from 'react';
import { BookOpen, Video, FileText, CheckCircle2, HelpCircle, ArrowRight, ArrowLeft, MessageSquare } from 'lucide-react';

export default function GuidanceSection({ onNavigate }) {
  const guidancePillars = [
    {
      icon: <Video size={30} style={{ color: 'var(--accent-cyan)' }} />,
      title: 'Live Online Classes with R&D Engineers',
      description:
        'Interactive live online sessions led directly by senior robotics engineers. We guide you live through circuit breadboarding, microcontroller programming, and real-time hardware debugging.',
      points: [
        'Live line-by-line code explanation',
        'Hardware troubleshooting & oscillogram reviews',
        'Dedicated Q&A doubt clearing after every session',
      ],
    },
    {
      icon: <FileText size={30} style={{ color: 'var(--accent-gold)' }} />,
      title: 'Project Development PDF Manuals',
      description:
        'Every kit includes complete, high-resolution engineering documentation. You receive complete step-by-step PDF guides, verified circuit schematics, and pinout connection blueprints.',
      points: [
        'High-resolution wiring schematics',
        'Component datasheet summaries & pin functions',
        'Complete circuit diagrams in Eagle / EasyEDA format',
      ],
    },
    {
      icon: <CheckCircle2 size={30} style={{ color: 'var(--accent-emerald)' }} />,
      title: 'Step-by-Step Robot Building Process',
      description:
        'Zero confusion from unboxing to first power-on. We break the entire robot assembly into crystal-clear sequential stages with video tutorials for every phase.',
      points: [
        'Phase 1: Mechanical chassis & servo assembly',
        'Phase 2: Motor driver & power bus routing',
        'Phase 3: Sensor array mounting & calibration',
        'Phase 4: Code flashing & field testing',
      ],
    },
    {
      icon: <HelpCircle size={30} style={{ color: '#7c3aed' }} />,
      title: 'Viva-Voce & Concept Deep-Dives',
      description:
        'Crucial for college project reviews and placement interviews! We teach the exact physics, math, and engineering principles behind every module so you can answer any professor or interviewer.',
      points: [
        'Detailed viva question banks for each robot',
        'Kinematics, PID control & PWM modulation theory',
        'IEEE-standard capstone presentation slides & reports',
      ],
    },
  ];

  return (
    <div className="page-turn-enter" style={{ padding: '60px 0 80px' }}>
      <div className="container">
        
        {/* Title */}
        <div className="section-title-wrap">
          <div className="badge-tag badge-gold">
            <BookOpen size={14} /> Kit Owner Privileges
          </div>
          <h2 className="section-title orbitron">Student Project Guidance</h2>
          <p className="section-subtitle">
            When you purchase any Aadhyaa Skills Kit, you don't just get hardware in a box — you get full end-to-end guidance from our R&D mentors until your robot is built, tested, and running!
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
          marginBottom: '40px',
        }}>
          {guidancePillars.map((pillar, idx) => (
            <div
              key={idx}
              className="glass-panel"
              style={{
                padding: '30px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '12px',
                  background: 'var(--bg-primary)',
                  border: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '18px',
                }}>
                  {pillar.icon}
                </div>

                <h3 className="rajdhani" style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '12px' }}>
                  {pillar.title}
                </h3>

                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '18px' }}>
                  {pillar.description}
                </p>

                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {pillar.points.map((pt, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.86rem', color: 'var(--text-muted)' }}>
                      <span style={{ color: 'var(--accent-gold)', fontWeight: 700 }}>✓</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="glass-panel" style={{
          padding: '28px 36px',
          background: 'var(--bg-primary)',
          border: '1.5px solid var(--border-subtle)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '20px',
        }}>
          <div>
            <h4 className="orbitron" style={{ fontSize: '1.25rem', color: '#0f172a', marginBottom: '4px' }}>
              Have Questions Before Purchasing a Kit?
            </h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', margin: 0 }}>
              Speak directly with our Project Guidance Coordinators on WhatsApp or Phone at <strong style={{ color: '#0f172a' }}>+91 96771 31092</strong>.
            </p>
          </div>

          <a
            href="https://wa.me/919677131092?text=Hello%20Aadhyaa%20Skills,%20I%20have%20questions%20regarding%20the%20Project%20Guidance%20and%20Online%20Classes."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            <MessageSquare size={16} />
            Chat with Guidance Mentor
          </a>
        </div>

        {/* Page Turn Navigation Footer */}
        <div className="page-turn-footer">
          <button
            onClick={() => onNavigate('kit')}
            className="btn-secondary"
            style={{ padding: '10px 18px', fontSize: '0.88rem' }}
          >
            <ArrowLeft size={14} /> ⟵ Page 2: Kit
          </button>
          
          <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            Page 3 of 5: <strong>Project Guidance & Classes</strong>
          </div>

          <button
            onClick={() => onNavigate('internship')}
            className="btn-gold"
            style={{ padding: '10px 20px', fontSize: '0.88rem' }}
          >
            Turn Page to: Internship 📖 →
          </button>
        </div>

      </div>
    </div>
  );
}
