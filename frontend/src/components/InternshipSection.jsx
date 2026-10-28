import React from 'react';
import { Award, ShieldCheck, CheckCircle2, ArrowRight, ArrowLeft } from 'lucide-react';

export default function InternshipSection({ onNavigate }) {
  const certifications = [
    {
      badge: 'Level 1 Global Certification',
      code: 'CLAD',
      title: 'Certified LabVIEW Associate Developer',
      desc: 'Industry standard certification validating foundational knowledge in graphical system design, dataflow architectures, subVI development, and hardware instrumentation control.',
      topics: ['Dataflow & State Machines', 'DAQ Data Acquisition & Sensors', 'Error Handling & Timing Loops'],
    },
    {
      badge: 'Level 2 Professional Developer',
      code: 'CLD',
      title: 'Certified LabVIEW Developer',
      desc: 'Demonstrates professional competence in designing, developing, and debugging scalable, high-reliability test automation and robotics control applications.',
      topics: ['Queued Message Handler (QMH)', 'Producer-Consumer Architecture', 'Event-Driven Automated Systems'],
    },
    {
      badge: 'Level 3 Enterprise Master',
      code: 'CLA',
      title: 'Certified LabVIEW Architect',
      desc: 'The pinnacle of automated test and measurement engineering. Certifies mastery in architecting large-scale distributed systems, multi-developer frameworks, and FPGA/RT systems.',
      topics: ['Enterprise System Architecture', 'Real-Time & FPGA Deployment', 'Project Management & Code Review'],
    },
  ];

  return (
    <div className="page-turn-enter" style={{ padding: '60px 0 80px' }}>
      <div className="container">
        
        {/* Title */}
        <div className="section-title-wrap">
          <div className="badge-tag badge-gold">
            <Award size={14} /> Career & Certification Track
          </div>
          <h2 className="section-title orbitron">CLAD, CLD, CLA Certifications & Internship</h2>
          <p className="section-subtitle">
            Earn globally recognized engineering credentials with our intensive R&D internships, complete with a <strong style={{ color: 'var(--accent-emerald)' }}>100% Placement Guarantee</strong> in core robotics, automotive, and automation industries.
          </p>
        </div>

        {/* 100% Placement Guarantee Banner */}
        <div className="glass-panel" style={{
          padding: '24px 32px',
          background: '#f0fdf4',
          border: '1.5px solid #86efac',
          borderRadius: '14px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '20px',
          marginBottom: '40px',
          boxShadow: '0 4px 20px rgba(5, 150, 105, 0.08)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              background: '#dcfce7',
              border: '2px solid var(--accent-emerald)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}>
              <ShieldCheck size={28} style={{ color: 'var(--accent-emerald)' }} />
            </div>
            <div>
              <div className="orbitron" style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a' }}>
                100% PLACEMENT GUARANTEE
              </div>
              <p style={{ color: '#334155', fontSize: '0.9rem', margin: 0 }}>
                We bridge your transition from engineering student to high-package Core Automation, Robotics, and Embedded Systems Engineer.
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/919677131092?text=Hello%20Aadhyaa%20Skills,%20I%20want%20to%20enroll%20in%20the%20100%25%20Placement%20Guarantee%20CLAD/CLD/CLA%20Internship%20Program."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
          >
            Apply for Next Batch on WhatsApp
          </a>
        </div>

        {/* Certifications 3-Card Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px',
          marginBottom: '48px',
        }}>
          {certifications.map((cert) => (
            <div
              key={cert.code}
              className="glass-panel"
              style={{
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                  <span className="badge-tag" style={{ fontSize: '0.72rem' }}>
                    {cert.badge}
                  </span>
                  <span className="orbitron" style={{ fontSize: '1.5rem', fontWeight: 900, color: 'var(--accent-gold)' }}>
                    {cert.code}
                  </span>
                </div>

                <h3 className="rajdhani" style={{ fontSize: '1.3rem', fontWeight: 700, color: '#0f172a', marginBottom: '10px' }}>
                  {cert.title}
                </h3>

                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '20px' }}>
                  {cert.desc}
                </p>

                <div className="rajdhani" style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--accent-cyan)', textTransform: 'uppercase', marginBottom: '8px' }}>
                  Core Competency Modules:
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {cert.topics.map((t, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: '#334155' }}>
                      <CheckCircle2 size={14} style={{ color: 'var(--accent-emerald)', flexShrink: 0 }} />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ marginTop: '24px', paddingTop: '18px', borderTop: '1px solid #e2e8f0' }}>
                <a
                  href={`https://wa.me/919677131092?text=Hello%20Aadhyaa%20Skills,%20I%20am%20interested%20in%20the%20${cert.code}%20(${encodeURIComponent(cert.title)})%20Certification%20Internship.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{ width: '100%', justifyContent: 'center', fontSize: '0.85rem' }}
                >
                  Inquire for {cert.code} Batch <ArrowRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Placement Support Pillars */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '16px',
        }}>
          {[
            { title: '1-on-1 Mock Interviews', desc: 'Conducted by industry technical leads' },
            { title: 'IEEE Project Portfolio', desc: 'Documented working hardware for your CV' },
            { title: 'Global NI Certification Exam Prep', desc: 'Rigorous sample tests and paper solving' },
            { title: 'Placement Hiring Drives', desc: 'Direct interview calls with corporate partners' },
          ].map((item, idx) => (
            <div
              key={idx}
              style={{
                padding: '18px 20px',
                background: '#ffffff',
                borderRadius: '10px',
                border: '1px solid #e2e8f0',
                boxShadow: '0 2px 6px rgba(0,0,0,0.03)',
              }}
            >
              <div className="rajdhani" style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', marginBottom: '4px' }}>
                {item.title}
              </div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                {item.desc}
              </div>
            </div>
          ))}
        </div>

        {/* Page Turn Navigation Footer */}
        <div className="page-turn-footer">
          <button
            onClick={() => onNavigate('guidance')}
            className="btn-secondary"
            style={{ padding: '10px 18px', fontSize: '0.88rem' }}
          >
            <ArrowLeft size={14} /> ⟵ Page 3: Guidance
          </button>
          
          <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            Page 4 of 5: <strong>Global Certifications & Internship</strong>
          </div>

          <button
            onClick={() => onNavigate('order')}
            className="btn-gold"
            style={{ padding: '10px 20px', fontSize: '0.88rem' }}
          >
            Turn Page to: Order 📖 →
          </button>
        </div>

      </div>
    </div>
  );
}
