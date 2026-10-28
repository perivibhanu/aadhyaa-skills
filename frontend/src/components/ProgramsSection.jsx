import React from 'react';
import {
  Code2,
  Cpu,
  BookOpen,
  Radio,
  Briefcase,
  Award,
  Trophy,
  FolderGit2,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

export default function ProgramsSection({ onNavigate }) {
  const phases = [
    {
      phase: 'PHASE 01',
      title: 'Software Coding & Tools',
      desc: 'NI LabVIEW (Core 1, Core 2, Core 3, CLAD), C, C++, MATLAB, Python, and AI/ML integrated with LabVIEW.',
      icon: <Code2 size={24} style={{ color: 'var(--accent-gold)' }} />,
      accent: 'var(--accent-gold)',
    },
    {
      phase: 'PHASE 02',
      title: 'Hardware Prototyping',
      desc: 'Hands-on interfacing with Arduino, NodeMCU, NI myDAQ, NI myRIO, and Raspberry Pi.',
      icon: <Cpu size={24} style={{ color: 'var(--accent-cyan)' }} />,
      accent: 'var(--accent-cyan)',
    },
    {
      phase: 'PHASE 03',
      title: 'Academic Subjects & Labs',
      desc: 'Signals & Systems, Digital Image Processing, Control Systems, and Electronic Circuits.',
      icon: <BookOpen size={24} style={{ color: '#8b5cf6' }} />,
      accent: '#8b5cf6',
    },
    {
      phase: 'PHASE 04',
      title: 'Credit & Industry 4.0',
      desc: 'Embedded Systems, Robotics (Industry 4.0), IIoT (AWS, Azure, Firebase, ThingSpeak), Drone Tech, Biomedical Toolkits.',
      icon: <Radio size={24} style={{ color: 'var(--accent-gold)' }} />,
      accent: 'var(--accent-gold)',
      highlight: true,
    },
    {
      phase: 'PHASE 05',
      title: 'Internships & Placement',
      desc: 'Industrial internships, live industry exposure, campus placement drive assistance, and resume workshops.',
      icon: <Briefcase size={24} style={{ color: 'var(--accent-emerald)' }} />,
      accent: 'var(--accent-emerald)',
    },
    {
      phase: 'PHASE 06',
      title: 'Global Certifications',
      desc: 'Training and preparation for National Instruments CLAD and CLD worldwide credentials.',
      icon: <Award size={24} style={{ color: '#0284c7' }} />,
      accent: '#0284c7',
    },
    {
      phase: 'PHASE 07',
      title: 'Competitions & Hackathons',
      desc: 'Mentorship for Tamilnadu Skills, IndiaSkills, WorldSkills, Smart India Hackathon, and Flipkart Challenge.',
      icon: <Trophy size={24} style={{ color: '#d97706' }} />,
      accent: '#d97706',
    },
    {
      phase: 'PHASE 08',
      title: 'Project Support & Grants',
      desc: 'Mini projects, competition models, final year capstones, consultancy, and government-funded projects.',
      icon: <FolderGit2 size={24} style={{ color: '#e11d48' }} />,
      accent: '#e11d48',
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
            <Sparkles size={14} /> COMPREHENSIVE TRAINING ECOSYSTEM
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
            End-to-End Technical Offerings
          </h1>

          <p
            style={{
              fontSize: '1.08rem',
              color: 'var(--text-muted)',
              lineHeight: 1.7,
              maxWidth: '780px',
              margin: '0 auto',
            }}
          >
            Covering software coding, hardware interfacing, academic labs, project incubation, and global certifications.
          </p>
        </div>

        {/* 8 Phases Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(480px, 1fr))',
            gap: '22px',
            marginBottom: '48px',
          }}
        >
          {phases.map((p, idx) => (
            <div
              key={idx}
              className="glass-panel"
              style={{
                padding: '28px',
                borderRadius: '16px',
                border: p.highlight ? '1.5px solid var(--accent-gold)' : '1.5px solid var(--border-subtle)',
                background: 'var(--bg-card)',
                boxShadow: p.highlight
                  ? '0 6px 24px rgba(217, 119, 6, 0.12)'
                  : '0 4px 20px rgba(0, 0, 0, 0.04)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.25s ease',
                position: 'relative',
              }}
            >
              <div>
                {/* Phase Tag + Icon Row */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                  <span
                    className="rajdhani"
                    style={{
                      color: 'var(--accent-gold)',
                      fontWeight: 800,
                      fontSize: '0.85rem',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                    }}
                  >
                    {p.phase}
                  </span>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '10px',
                      background: 'var(--bg-primary)',
                      border: '1px solid var(--border-subtle)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {p.icon}
                  </div>
                </div>

                {/* Phase Title */}
                <h3
                  className="rajdhani"
                  style={{
                    fontSize: '1.4rem',
                    fontWeight: 800,
                    color: 'var(--text-main)',
                    lineHeight: 1.3,
                    marginBottom: '10px',
                  }}
                >
                  {p.title}
                </h3>

                {/* Phase Description */}
                <p
                  style={{
                    fontSize: '0.94rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Page Navigation Banner */}
        <div
          className="glass-panel"
          style={{
            padding: '24px 30px',
            borderRadius: '14px',
            border: '1px solid var(--border-subtle)',
            background: 'var(--bg-card)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          <div>
            <div className="rajdhani" style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-main)' }}>
              Ready to Validate Your Technical Mastery?
            </div>
            <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
              Explore the 4 Global National Instruments certification credentials.
            </div>
          </div>
          <button
            onClick={() => onNavigate && onNavigate('certifications')}
            className="btn-gold"
            style={{ padding: '10px 22px', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
          >
            <span>Proceed to Certifications</span>
            <ArrowRight size={16} />
          </button>
        </div>

      </div>
    </div>
  );
}

