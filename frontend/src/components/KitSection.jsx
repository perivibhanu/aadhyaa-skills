import React, { useState } from 'react';
import {
  Wrench,
  Trophy,
  Compass,
  Zap,
  Shield,
  Check,
  Play,
  MessageSquare,
  Cpu,
  Layers,
  ArrowRight,
  ExternalLink,
  Video,
} from 'lucide-react';
import { fallbackProjects } from '../data/frontendData.js';

export default function KitSection({ onNavigate }) {
  const [selectedSlug, setSelectedSlug] = useState('robotic-arm');
  const [videoMode, setVideoMode] = useState('demo'); // 'demo' | 'assembly'

  const robotBoxes = [
    {
      slug: 'robotic-arm',
      title: 'Robotic ARM',
      icon: <Wrench size={32} style={{ color: 'var(--accent-cyan)' }} />,
      short: 'Multi-Axis Precision Manipulator',
      demoVideo: 'https://www.youtube-nocookie.com/embed/rP3n_38Zzfk?rel=0',
      assemblyVideo: 'https://www.youtube-nocookie.com/embed/xLzYh501XFk?rel=0',
      directYoutube: 'https://www.youtube.com/watch?v=rP3n_38Zzfk',
      videoDuration: '6m 45s',
      chapters: [
        { time: '00:00', title: 'Kit Unboxing & Servo Test' },
        { time: '01:50', title: 'Base Swivel & Arm Joint Assembly' },
        { time: '03:45', title: 'Wiring MG996R Servos to Driver' },
        { time: '05:20', title: 'Kinematics & Arduino Flash' },
      ],
      gallery: [
        'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&w=600&q=80',
      ],
    },
    {
      slug: 'soccer-robot',
      title: 'Soccer Robot',
      icon: <Trophy size={32} style={{ color: 'var(--accent-gold)' }} />,
      short: 'Agile RoboSoccer Striker & Goalie',
      demoVideo: 'https://www.youtube-nocookie.com/embed/8rW3f99G_tM?rel=0',
      assemblyVideo: 'https://www.youtube-nocookie.com/embed/qg_hWpB7n-k?rel=0',
      directYoutube: 'https://www.youtube.com/watch?v=8rW3f99G_tM',
      videoDuration: '5m 18s',
      chapters: [
        { time: '00:00', title: 'Omni Wheels & Gearmotor Fit' },
        { time: '01:30', title: 'Solenoid Dribbler & Kicker Link' },
        { time: '03:10', title: 'Wireless PS2/Bluetooth Setup' },
        { time: '04:40', title: 'Field Maneuver & Shoot Test' },
      ],
      gallery: [
        'https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1508873696983-2df5293cb39f?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1546776310-eef45dd6d63c?auto=format&fit=crop&w=600&q=80',
      ],
    },
    {
      slug: 'all-terrain-robot',
      title: 'All Terrain Robot',
      icon: <Compass size={32} style={{ color: 'var(--accent-emerald)' }} />,
      short: 'Rocker-Bogie Rugged Rover',
      demoVideo: 'https://www.youtube-nocookie.com/embed/7zpojhD4hpI?rel=0',
      assemblyVideo: 'https://www.youtube-nocookie.com/embed/g0TaYhjpOfo?rel=0',
      directYoutube: 'https://www.youtube.com/watch?v=7zpojhD4hpI',
      videoDuration: '7m 10s',
      chapters: [
        { time: '00:00', title: 'Rocker-Bogie Differential Joint' },
        { time: '02:15', title: '6-Wheel Planetary Geared Motors' },
        { time: '04:30', title: 'Dual Motor Driver & LiPo Rail' },
        { time: '06:05', title: '45° Slope & Obstacle Clearance' },
      ],
      gallery: [
        'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=600&q=80',
      ],
    },
    {
      slug: 'maze-solvers',
      title: 'Maze Solvers',
      icon: <Zap size={32} style={{ color: '#7c3aed' }} />,
      short: 'Autonomous Flood-Fill Micromouse',
      demoVideo: 'https://www.youtube-nocookie.com/embed/ZMQbHMgK2rw?rel=0',
      assemblyVideo: 'https://www.youtube-nocookie.com/embed/0G_j8h-m3hM?rel=0',
      directYoutube: 'https://www.youtube.com/watch?v=ZMQbHMgK2rw',
      videoDuration: '8m 25s',
      chapters: [
        { time: '00:00', title: 'Ultrasonic & IR Sensor Array Mount' },
        { time: '02:00', title: 'Coreless DC Motor & Encoders' },
        { time: '04:15', title: 'Flood-Fill 16x16 Maze Algorithm' },
        { time: '07:00', title: 'High-Speed Autonomous Run' },
      ],
      gallery: [
        'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80',
      ],
    },
    {
      slug: 'fighting-robot',
      title: 'Fighting Robot',
      icon: <Shield size={32} style={{ color: 'var(--accent-crimson)' }} />,
      short: 'Combat RoboWars Rotary Spinner',
      demoVideo: 'https://www.youtube-nocookie.com/embed/8Ksdq3VdK7Y?rel=0',
      assemblyVideo: 'https://www.youtube-nocookie.com/embed/5F_P68D2bW0?rel=0',
      directYoutube: 'https://www.youtube.com/watch?v=8Ksdq3VdK7Y',
      videoDuration: '6m 02s',
      chapters: [
        { time: '00:00', title: 'Hardened Steel Chassis & Armor' },
        { time: '01:45', title: 'Brushless Outrunner Weapon Motor' },
        { time: '03:30', title: '60A ESC & Radio Transmitter Link' },
        { time: '05:10', title: 'Spinner RPM & Impact Demo' },
      ],
      gallery: [
        'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&q=80',
      ],
    },
  ];

  const defaultBox = robotBoxes.find((b) => b.slug === selectedSlug) || robotBoxes[0];
  
  // Dynamic custom video overrides from Admin Video Manager
  const [customVideos, setCustomVideos] = useState(() => {
    try {
      const saved = localStorage.getItem('aadhyaa_custom_videos');
      return saved ? JSON.parse(saved) : {};
    } catch (e) {
      return {};
    }
  });

  const customForSlug = customVideos[selectedSlug];
  const currentBox = customForSlug
    ? {
        ...defaultBox,
        demoVideo: customForSlug.demoVideo || defaultBox.demoVideo,
        assemblyVideo: customForSlug.assemblyVideo || defaultBox.assemblyVideo,
        videoDuration: (videoMode === 'demo' ? customForSlug.demoDuration : customForSlug.assemblyDuration) || defaultBox.videoDuration,
        chapters: customForSlug.chapters || defaultBox.chapters,
      }
    : defaultBox;

  const currentProject = fallbackProjects.find((p) => p.slug === selectedSlug) || fallbackProjects[0];

  return (
    <div className="page-turn-enter" style={{ padding: '40px 0 80px' }}>
      <div className="container" style={{ maxWidth: '1180px' }}>
        
        {/* Section Header */}
        <div className="section-title-wrap">
          <div className="badge-tag badge-gold">
            <Layers size={14} /> Official Hardware Products
          </div>
          <h1 className="section-title orbitron">Flagship Engineer Kits</h1>
          <p className="section-subtitle">
            Select any of the 5 professional robotics engineer kits below to inspect complete hardware specifications, included BOM components, live working demonstration videos, and firmware starter code.
          </p>
        </div>

        {/* 5 BOXES GRID - Exactly from user sketch */}
        <div className="kit-boxes-grid">
          {robotBoxes.map((box) => {
            const isSelected = box.slug === selectedSlug;
            return (
              <div
                key={box.slug}
                onClick={() => {
                  setSelectedSlug(box.slug);
                  setVideoMode('demo');
                }}
                className={`kit-box-card ${isSelected ? 'active' : ''}`}
                style={{
                  border: isSelected ? '2px solid var(--accent-gold)' : '1px solid var(--border-subtle)',
                  borderRadius: '16px',
                  padding: '24px 20px',
                  background: isSelected ? 'var(--bg-secondary)' : 'var(--bg-card)',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  boxShadow: isSelected ? '0 10px 30px rgba(217, 119, 6, 0.16)' : '0 4px 14px rgba(0,0,0,0.03)',
                  transform: isSelected ? 'translateY(-4px)' : 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  gap: '12px',
                  position: 'relative',
                }}
              >
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '14px',
                  background: isSelected ? 'var(--accent-gold-soft)' : 'var(--bg-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.2s',
                }}>
                  {box.icon}
                </div>
                
                <div>
                  <h3 className="orbitron" style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '4px' }}>
                    {box.title}
                  </h3>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.35 }}>
                    {box.short}
                  </p>
                </div>

                {isSelected && (
                  <div style={{
                    position: 'absolute',
                    top: '-10px',
                    background: 'var(--accent-gold)',
                    color: '#ffffff',
                    fontSize: '0.7rem',
                    fontWeight: 800,
                    padding: '2px 10px',
                    borderRadius: '10px',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                  }}>
                    Active View
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* FULL DETAILS DISPLAY FOR SELECTED ROBOT */}
        <div className="glass-panel" style={{
          padding: '36px',
          border: '1.5px solid var(--border-subtle)',
          background: 'var(--bg-card)',
          boxShadow: '0 8px 30px rgba(0,0,0,0.06)',
        }}>
          
          {/* Header Row */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: '16px',
            marginBottom: '26px',
            borderBottom: '1px solid var(--border-subtle)',
            paddingBottom: '20px',
          }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                <span className="badge-tag badge-gold">Official Engineer Kit</span>
                <span className="badge-tag">{currentProject.difficulty} Level</span>
              </div>
              <h2 className="orbitron" style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '4px' }}>
                {currentProject.title}
              </h2>
              <p className="rajdhani" style={{ fontSize: '1.05rem', color: 'var(--accent-gold)', fontWeight: 600, margin: 0 }}>
                {currentProject.tagline}
              </p>
            </div>

            {/* Direct Order Actions */}
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a
                href={`https://wa.me/919677131092?text=Hello%20Aadhyaa%20Skills,%20I%20am%20interested%20in%20ordering%20the%20${encodeURIComponent(currentProject.title)}%20Engineer%20Kit.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                <MessageSquare size={17} />
                Order via WhatsApp
              </a>

              <button
                onClick={() => onNavigate('order')}
                className="btn-secondary"
              >
                Open Quotation Page
              </button>
            </div>
          </div>

          {/* 2-Column Split: Video Player on Left, Full Description on Right */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: '32px',
            marginBottom: '36px',
          }}>
            
            {/* Left: Interactive Video Player & Pictures Gallery */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px', flexWrap: 'wrap', gap: '8px' }}>
                <div className="rajdhani" style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-main)', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Video size={18} style={{ color: 'var(--accent-gold)' }} /> Video Demonstrations
                </div>
                
                {/* Video Switcher Tabs */}
                <div style={{ display: 'flex', gap: '6px' }}>
                  <button
                    onClick={() => setVideoMode('demo')}
                    style={{
                      padding: '5px 12px',
                      borderRadius: '6px',
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      background: videoMode === 'demo' ? 'var(--accent-gold)' : 'var(--bg-primary)',
                      color: videoMode === 'demo' ? '#ffffff' : 'var(--text-muted)',
                      border: videoMode === 'demo' ? '1px solid var(--accent-gold)' : '1px solid var(--border-subtle)',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                    }}
                  >
                    ▶️ Live Demo
                  </button>
                  <button
                    onClick={() => setVideoMode('assembly')}
                    style={{
                      padding: '5px 12px',
                      borderRadius: '6px',
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      background: videoMode === 'assembly' ? 'var(--accent-cyan)' : 'var(--bg-primary)',
                      color: videoMode === 'assembly' ? '#ffffff' : 'var(--text-muted)',
                      border: videoMode === 'assembly' ? '1px solid var(--accent-cyan)' : '1px solid var(--border-subtle)',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                    }}
                  >
                    🛠️ Assembly Guide
                  </button>
                </div>
              </div>

              {/* Direct Working Embedded Video Player (Supports YouTube Embed & Local MP4 Video Uploads) */}
              <div style={{
                borderRadius: '14px',
                overflow: 'hidden',
                border: '1.5px solid var(--border-subtle)',
                background: '#090e1a',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)',
                position: 'relative',
                aspectRatio: '16/9',
                minHeight: '260px',
              }}>
                {(() => {
                  const videoSrc = videoMode === 'demo' ? currentBox.demoVideo : currentBox.assemblyVideo;
                  const isDirectFile = videoSrc && (videoSrc.startsWith('blob:') || videoSrc.startsWith('data:video') || videoSrc.includes('.mp4') || videoSrc.includes('.webm'));
                  
                  if (isDirectFile) {
                    return (
                      <video
                        key={`${selectedSlug}-${videoMode}-${videoSrc}`}
                        src={videoSrc}
                        controls
                        playsInline
                        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                      />
                    );
                  }

                  return (
                    <iframe
                      key={`${selectedSlug}-${videoMode}-${videoSrc}`}
                      src={videoSrc}
                      title={`${currentProject.title} ${videoMode === 'demo' ? 'Live Demo' : 'Assembly Tutorial'}`}
                      style={{ width: '100%', height: '100%', border: 'none' }}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  );
                })()}
              </div>

              {/* Video Info row */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '10px', fontSize: '0.8rem', color: 'var(--text-dim)' }}>
                <span>{videoMode === 'demo' ? '⚡ Live field operation & kinematics' : '🔧 Mechanical unboxing, servo alignment & schematics'}</span>
                <a
                  href={currentBox.directYoutube}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--accent-gold)', display: 'inline-flex', alignItems: 'center', gap: '4px', fontWeight: 600 }}
                >
                  YouTube <ExternalLink size={12} />
                </a>
              </div>

              {/* Video Timeline Chapters */}
              {currentBox.chapters && (
                <div style={{ marginTop: '12px', background: 'var(--bg-primary)', padding: '10px 14px', borderRadius: '8px', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ fontSize: '0.74rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '6px', letterSpacing: '0.04em' }}>
                    📑 Video Timestamps & Guide Chapters ({currentBox.videoDuration}):
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                    {currentBox.chapters.map((chap, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.78rem', color: 'var(--text-main)' }}>
                        <span style={{ fontFamily: 'monospace', fontWeight: 700, color: 'var(--accent-gold)', background: 'var(--accent-gold-soft)', padding: '1px 6px', borderRadius: '4px' }}>
                          {chap.time}
                        </span>
                        <span>{chap.title}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Hardware Photo Gallery */}
              <div style={{ marginTop: '18px' }}>
                <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '8px', letterSpacing: '0.05em' }}>
                  📸 Assembled Hardware Picture Views:
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                  {currentBox.gallery?.map((imgUrl, i) => (
                    <div key={i} style={{ borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--border-subtle)', height: '74px', position: 'relative' }}>
                      <img
                        src={imgUrl}
                        alt={`${currentProject.title} Angle ${i + 1}`}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Full Description & Features */}
            <div>
              <div className="rajdhani" style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--accent-gold)', textTransform: 'uppercase', marginBottom: '10px' }}>
                📋 Detailed Technical Overview
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.98rem', lineHeight: 1.7, marginBottom: '20px' }}>
                {currentProject.description}
              </p>

              <div className="rajdhani" style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-main)', textTransform: 'uppercase', marginBottom: '12px' }}>
                ⚡ Core System Features
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
                {currentProject.features?.map((f, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.92rem', color: 'var(--text-main)' }}>
                    <div style={{ width: '18px', height: '18px', borderRadius: '50%', background: 'rgba(5, 150, 105, 0.15)', color: 'var(--accent-emerald)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span>{f}</span>
                  </div>
                ))}
              </div>

              {/* Kit Specs Pill Card */}
              <div style={{
                background: 'var(--bg-primary)',
                padding: '16px 20px',
                borderRadius: '10px',
                border: '1px solid var(--border-subtle)',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                gap: '12px',
              }}>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>Controller</div>
                  <div style={{ fontWeight: 700, color: 'var(--text-main)', fontSize: '0.88rem' }}>Arduino / ESP32</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>Chassis</div>
                  <div style={{ fontWeight: 700, color: 'var(--text-main)', fontSize: '0.88rem' }}>Laser-Cut Acrylic / Alloy</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>Power Bus</div>
                  <div style={{ fontWeight: 700, color: 'var(--text-main)', fontSize: '0.88rem' }}>7.4V - 11.1V Li-Po</div>
                </div>
              </div>
            </div>

          </div>

          {/* COMPONENTS INCLUDED IN THIS KIT */}
          <div style={{
            background: 'var(--bg-primary)',
            padding: '24px',
            borderRadius: '12px',
            border: '1px solid var(--border-subtle)',
            marginBottom: '32px',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
              <Cpu size={18} style={{ color: 'var(--accent-cyan)' }} />
              <h3 className="rajdhani" style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-main)', margin: 0, textTransform: 'uppercase' }}>
                Complete Included Bill of Materials (BOM)
              </h3>
            </div>
            <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', marginBottom: '16px' }}>
              Every item is tested and packaged in this kit so you can build right out of the box with zero missing screws or headers:
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '10px',
            }}>
              {currentProject.components?.map((c, i) => (
                <div key={i} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '8px 12px',
                  background: 'var(--bg-card)',
                  borderRadius: '6px',
                  border: '1px solid var(--border-subtle)',
                  fontSize: '0.85rem',
                }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-gold)', flexShrink: 0 }} />
                  <span style={{ fontWeight: 600, color: 'var(--text-main)', flex: 1 }}>{c.name}</span>
                  <span style={{
                    fontSize: '0.75rem',
                    color: 'var(--accent-cyan)',
                    fontWeight: 700,
                    padding: '2px 8px',
                    borderRadius: '4px',
                    background: 'var(--accent-cyan-soft)',
                  }}>
                    Qty: {c.qty}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
