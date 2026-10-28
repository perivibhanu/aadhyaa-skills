import React, { useState } from 'react';
import { Bot, ArrowRight, Code2, Wrench, Shield, Zap, Compass, Trophy } from 'lucide-react';

export default function ProjectsSection({ projects, onSelectProject, onSelectKit }) {
  const [filter, setFilter] = useState('ALL');

  const getRobotIcon = (slug) => {
    switch (slug) {
      case 'robotic-arm':
        return <Wrench size={24} style={{ color: 'var(--accent-cyan)' }} />;
      case 'soccer-robot':
        return <Trophy size={24} style={{ color: 'var(--accent-gold)' }} />;
      case 'all-terrain-robot':
        return <Compass size={24} style={{ color: 'var(--accent-green)' }} />;
      case 'maze-solvers':
        return <Zap size={24} style={{ color: '#a855f7' }} />;
      case 'fighting-robot':
        return <Shield size={24} style={{ color: 'var(--accent-crimson)' }} />;
      default:
        return <Bot size={24} style={{ color: 'var(--accent-cyan)' }} />;
    }
  };

  const filteredProjects = projects.filter((p) => {
    if (filter === 'ALL') return true;
    return p.difficulty.toUpperCase() === filter;
  });

  return (
    <section id="projects" style={{ padding: '80px 0', position: 'relative' }}>
      <div className="container">
        
        <div className="section-title-wrap">
          <div className="badge-tag">
            <Bot size={14} /> Star Robotics Projects
          </div>
          <h2 className="section-title orbitron">Featured Robot Builds</h2>
          <p className="section-subtitle">
            Explore the five flagship robots showcased by Aadhyaa Skills R&D. Every single component, motor, and controller needed to construct these machines is included in our hardware kits.
          </p>

          {/* Filter Pills */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '24px', flexWrap: 'wrap' }}>
            {['ALL', 'BEGINNER', 'INTERMEDIATE', 'ADVANCED'].map((lvl) => (
              <button
                key={lvl}
                onClick={() => setFilter(lvl)}
                className="rajdhani"
                style={{
                  padding: '6px 18px',
                  borderRadius: '20px',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  border: filter === lvl ? '1px solid var(--accent-cyan)' : '1px solid rgba(255, 255, 255, 0.1)',
                  background: filter === lvl ? 'rgba(0, 240, 255, 0.18)' : 'rgba(255, 255, 255, 0.04)',
                  color: filter === lvl ? 'var(--accent-cyan)' : 'var(--text-muted)',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              >
                {lvl === 'ALL' ? 'All Robots (5)' : lvl}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid-cards">
          {filteredProjects.map((project) => (
            <div
              key={project.slug}
              className="glass-panel"
              style={{
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Top Accent line */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '3px',
                background: 'linear-gradient(90deg, var(--accent-cyan), var(--accent-gold))',
              }} />

              <div>
                {/* Header */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    {getRobotIcon(project.slug)}
                  </div>

                  <span className="badge-tag" style={{
                    fontSize: '0.7rem',
                    borderColor: project.difficulty === 'Advanced' ? 'rgba(255, 51, 102, 0.4)' : 'rgba(0, 240, 255, 0.4)',
                    color: project.difficulty === 'Advanced' ? 'var(--accent-crimson)' : 'var(--accent-cyan)',
                  }}>
                    {project.difficulty} Level
                  </span>
                </div>

                {/* Title */}
                <h3 className="orbitron" style={{ fontSize: '1.35rem', fontWeight: 800, color: '#fff', marginBottom: '8px' }}>
                  {project.title}
                </h3>

                <p className="rajdhani" style={{
                  color: 'var(--accent-gold)',
                  fontSize: '0.92rem',
                  fontWeight: 600,
                  marginBottom: '14px',
                }}>
                  {project.tagline}
                </p>

                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '20px', lineHeight: 1.55 }}>
                  {project.shortDescription}
                </p>

                {/* Recommended Kit */}
                <div style={{
                  padding: '10px 14px',
                  background: 'rgba(0, 0, 0, 0.3)',
                  borderRadius: '8px',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  marginBottom: '18px',
                }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Built Using Kit:
                  </div>
                  <div className="rajdhani" style={{ color: 'var(--accent-cyan)', fontWeight: 700, fontSize: '1rem' }}>
                    📦 {project.recommendedKit}
                  </div>
                </div>

                {/* Key components list preview */}
                <div style={{ marginBottom: '22px' }}>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)', marginBottom: '8px', textTransform: 'uppercase' }}>
                    Key Components:
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {project.keyComponents.slice(0, 3).map((comp, i) => (
                      <span
                        key={i}
                        style={{
                          fontSize: '0.75rem',
                          background: 'rgba(255, 255, 255, 0.05)',
                          padding: '4px 8px',
                          borderRadius: '4px',
                          color: '#e2e8f0',
                        }}
                      >
                        • {comp}
                      </span>
                    ))}
                    {project.keyComponents.length > 3 && (
                      <span style={{ fontSize: '0.75rem', color: 'var(--accent-gold)', padding: '4px' }}>
                        +{project.keyComponents.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '10px', marginTop: '12px' }}>
                <button
                  onClick={() => onSelectProject(project)}
                  className="btn-primary"
                  style={{ flex: 1, padding: '10px 14px', fontSize: '0.78rem' }}
                >
                  <Code2 size={15} />
                  Schematic & Code
                </button>

                <a
                  href="#kits"
                  onClick={() => onSelectKit && onSelectKit(project.recommendedKit)}
                  className="btn-secondary"
                  style={{ padding: '10px 14px', fontSize: '0.85rem' }}
                  title="View kit"
                >
                  <ArrowRight size={16} />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

