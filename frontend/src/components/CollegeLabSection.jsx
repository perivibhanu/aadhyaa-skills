import React from 'react';
import { Building2, PackageCheck, Award, GraduationCap, Users, ShieldCheck, CheckCircle2, Phone, MessageSquare, FileText } from 'lucide-react';

export default function CollegeLabSection({ onRequestProposal }) {
  const labDeliverables = [
    {
      icon: <PackageCheck size={24} style={{ color: 'var(--accent-cyan)' }} />,
      title: '20+ Multi-Disciplinary Hardware Kits',
      description: 'Comprehensive sets of Robotics, Arduino, IoT, Embedded ARM Cortex, and VLSI kits with backup spares and power supplies for student lab batches.',
    },
    {
      icon: <FileText size={24} style={{ color: 'var(--accent-gold)' }} />,
      title: 'Curriculum & Lab Manuals (30+ Experiments)',
      description: 'Lab manuals, circuit schematics, and C++/Python starter code aligned with AICTE, Anna University, VTU, and JNTU engineering standards.',
    },
    {
      icon: <Users size={24} style={{ color: 'var(--accent-emerald)' }} />,
      title: 'Faculty Development Program (FDP)',
      description: 'Hands-on training for college professors and lab instructors conducted by Aadhyaa R&D engineers covering kinematics, IoT, and motor drivers.',
    },
    {
      icon: <Award size={24} style={{ color: '#a855f7' }} />,
      title: 'Certified Student Hackathons & Tech Fests',
      description: 'Co-branded RoboCup Soccer and RoboWars combat competitions with ISO-recognized student achievement certificates for placement credentials.',
    },
    {
      icon: <ShieldCheck size={24} style={{ color: '#38bdf8' }} />,
      title: '1-Year Component Replacement Warranty',
      description: 'Direct laboratory hardware replacement guarantee with dedicated phone/WhatsApp tech support for students and lab technicians.',
    },
    {
      icon: <GraduationCap size={24} style={{ color: '#f59e0b' }} />,
      title: 'Final Year Capstone Project Guidance',
      description: 'Direct mentorship for student project batches with IEEE paper format documentation and viva-voce preparation.',
    },
  ];

  return (
    <section id="college-lab" style={{ padding: '80px 0', background: 'rgba(7, 12, 23, 0.75)', position: 'relative' }}>
      <div className="container">
        
        {/* Title */}
        <div className="section-title-wrap">
          <div className="badge-tag badge-gold">
            <Building2 size={14} /> Institutional Solutions
          </div>
          <h2 className="section-title orbitron">College & Institutional Lab Setup</h2>
          <p className="section-subtitle">
            Equip your engineering college or polytechnic institution with complete 20+ kit state-of-the-art Robotics & Embedded Systems laboratories.
          </p>
        </div>

        {/* Deliverables Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px',
          marginBottom: '48px',
        }}>
          {labDeliverables.map((item, idx) => (
            <div
              key={idx}
              className="glass-panel"
              style={{
                padding: '28px',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '18px',
              }}
            >
              <div style={{
                width: '52px',
                height: '52px',
                borderRadius: '12px',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}>
                {item.icon}
              </div>
              <div>
                <h3 className="rajdhani" style={{ fontSize: '1.15rem', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>
                  {item.title}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.55, margin: 0 }}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Institutional Callout Banner */}
        <div className="glass-panel" style={{
          padding: '36px 40px',
          background: 'linear-gradient(135deg, rgba(16, 25, 44, 0.95), rgba(12, 20, 36, 0.95))',
          border: '1px solid rgba(255, 199, 0, 0.35)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '24px',
        }}>
          <div>
            <div className="badge-tag badge-gold" style={{ marginBottom: '10px' }}>
              Turnkey College Lab Package (20+ Kits)
            </div>
            <h3 className="orbitron" style={{ fontSize: '1.5rem', fontWeight: 800, color: '#fff', marginBottom: '6px' }}>
              Bring Aadhyaa R&D Robotics to Your Institution
            </h3>
            <p style={{ color: '#cbd5e1', fontSize: '0.95rem', maxWidth: '640px', margin: 0 }}>
              Contact our Institutional Coordinator for formal tenders, quotation proposals, syllabus customization, and campus demo dates.
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <button
              onClick={() => onRequestProposal && onRequestProposal('Institutional College Lab Setup (20+ Kits)')}
              className="btn-gold"
              style={{ padding: '14px 24px', fontSize: '0.9rem' }}
            >
              Request Institutional Proposal
            </button>

            <a
              href="https://wa.me/919677131092?text=Hello%20Aadhyaa%20Skills,%20we%20are%20interested%20in%20the%20College%20Robotics%20Lab%20Setup%20(20%2B%20Kits)%20for%20our%20institution."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ padding: '14px 20px', gap: '8px' }}
            >
              <MessageSquare size={16} style={{ color: '#25D366' }} />
              Direct WhatsApp Query
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

