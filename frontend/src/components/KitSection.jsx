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
  Sparkles,
  Camera,
  Activity,
  Sliders,
  CheckCircle2,
} from 'lucide-react';
import { fallbackProjects } from '../data/frontendData.js';
import RobotInteractiveCanvas from './RobotInteractiveCanvas.jsx';

export default function KitSection({ onNavigate }) {
  const [selectedSlug, setSelectedSlug] = useState('robotic-arm');
  const [visualMode, setVisualMode] = useState('animation'); // 'animation' | 'photo'

  const robotBoxes = [
    {
      slug: 'robotic-arm',
      title: 'Robotic ARM',
      icon: <Wrench size={30} style={{ color: 'var(--accent-cyan)' }} />,
      badge: '6-DOF Precision Kinematics',
      short: 'Multi-Axis Precision Manipulator',
      tagline: '4 to 6-Axis Multi-DOF Precision Robotic Manipulator with Gripper',
      studioImage: '/assets/kits/robotic-arm.jpg',
      difficulty: 'Intermediate',
      telemetry: [
        { label: 'Kinematic Workspace', value: '6-Axis Multi-DOF Spherical' },
        { label: 'Payload Capacity', value: '500g Gripper Clamp' },
        { label: 'Actuators', value: 'High-Torque Metal Gear Servos' },
        { label: 'Controller Board', value: 'Arduino Uno / ESP32 Core' },
        { label: 'Position Repeatability', value: '±0.5 mm Accuracy' },
        { label: 'Power Bus', value: '7.4V - 11.1V Li-Po Rail' },
      ],
      description:
        'A precision engineering robotic manipulator designed for mastering inverse kinematics, coordinate transformations, pick-and-place automation, and servo PWM bus interfacing. Features CNC anodized alloy links, ball-bearing joints, and an articulated mechanical gripper.',
      features: [
        'Multi-axis coordinate motion & clamp control with micro-stepping precision',
        'Potentiometer & Analog Joystick manual override with real-time feedback',
        'Programmable memory sequence for Record & Playback industrial automation',
        'Bluetooth 5.0 and Android telemetry application control ready',
        'Complete Arduino C++ and LabVIEW DAQ integration support',
      ],
      components: [
        { name: 'Laser-Cut CNC Anodized Alloy Arm Chassis', qty: '1 Set' },
        { name: 'MG996R High-Torque Metal Gear Servos', qty: '6 Units' },
        { name: 'Precision Ball Bearing Swivel Base (360°)', qty: '1 Unit' },
        { name: 'Articulated Mechanical Parallel Gripper', qty: '1 Unit' },
        { name: 'PCA9685 16-Channel 12-Bit I2C PWM Driver', qty: '1 Board' },
        { name: 'Arduino Compatible MCU + Expansion Shield', qty: '1 Unit' },
        { name: 'Dual-Axis Thumb Joystick Module (X/Y)', qty: '2 Units' },
        { name: 'Heavy Duty M3 Stainless Steel Hardware & Brass Spacers', qty: '1 Pack' },
        { name: 'High-Current 5V/6V UBEC Voltage Regulator', qty: '1 Unit' },
      ],
    },
    {
      slug: 'soccer-robot',
      title: 'Soccer Robot',
      icon: <Trophy size={30} style={{ color: 'var(--accent-gold)' }} />,
      badge: 'Holonomic Omni-Vector',
      short: 'Agile RoboSoccer Striker & Goalie',
      tagline: 'High-Velocity Omnidirectional RoboSoccer Striker & Goalie',
      studioImage: '/assets/kits/soccer-robot.jpg',
      difficulty: 'Intermediate',
      telemetry: [
        { label: 'Drive Architecture', value: '3-Wheel 120° Omni-Vector' },
        { label: 'Max Field Velocity', value: '2.4 m/s Rapid Sprint' },
        { label: 'Ball Control', value: 'High-Friction Motorized Dribbler' },
        { label: 'Striking Mechanism', value: 'High-Force Solenoid Kicker' },
        { label: 'Wireless Link', value: 'ESP32 Wi-Fi / Bluetooth 5.0' },
        { label: 'Power Rail', value: '11.1V 3S LiPo High-Discharge' },
      ],
      description:
        'Engineered for RoboSoccer tournaments and autonomous sports navigation. Utilizes a holonomic drive system with three omnidirectional wheels that allow instantaneous motion in any direction without turning, coupled with a motorized roller dribbler and high-energy spring solenoid kicker.',
      features: [
        'Instantaneous holonomic 360° translation and simultaneous spin maneuvers',
        'Active motorized rubber dribbler roller for sticky ball control at speed',
        'High-energy spring-loaded solenoid kicker with electronic trigger',
        'Ultrasonic and infrared obstacle / opponent detection perimeter',
        'Wireless PS2 gamepad and mobile app precision telemetry control',
      ],
      components: [
        { name: 'CNC Machined Double-Deck Disc Chassis', qty: '1 Set' },
        { name: 'High-Traction 58mm Omnidirectional Wheels', qty: '3 Units' },
        { name: 'High-Speed Micro Metal Gearmotors (600 RPM)', qty: '3 Units' },
        { name: 'Motorized Rubber Grip Dribbler Mechanism', qty: '1 Unit' },
        { name: 'High-Force 12V Solenoid Kicker Unit', qty: '1 Unit' },
        { name: 'Dual H-Bridge High-Current Motor Driver', qty: '2 Boards' },
        { name: 'ESP32 Dual-Core Wireless Control Unit', qty: '1 Unit' },
        { name: 'Official Mini RoboSoccer Ball with Grip', qty: '1 Unit' },
      ],
    },
    {
      slug: 'all-terrain-robot',
      title: 'All Terrain Robot',
      icon: <Compass size={30} style={{ color: 'var(--accent-emerald)' }} />,
      badge: 'Rocker-Bogie 6-Wheel Rover',
      short: 'Rocker-Bogie Rugged Rover',
      tagline: 'NASA Rocker-Bogie Passive Suspension Obstacle Climbing Rover',
      studioImage: '/assets/kits/all-terrain-robot.jpg',
      difficulty: 'Advanced',
      telemetry: [
        { label: 'Suspension System', value: '6-Wheel Rocker-Bogie Differential' },
        { label: 'Obstacle Climbing', value: 'Up to 45° Incline & Boulders' },
        { label: 'Ground Clearance', value: '85 mm Articulated Lift' },
        { label: 'Traction Drive', value: '6x Planetary Geared Hub Motors' },
        { label: 'Chassis Material', value: 'Structural Aircraft Grade Alloy' },
        { label: 'Battery System', value: '11.1V 2200mAh LiPo Pack' },
      ],
      description:
        'Modeled on planetary exploration rovers like Curiosity and Perseverance, this all-terrain rover employs a 6-wheel rocker-bogie passive suspension. Each wheel maintains ground contact over rocks, staircases, and irregular ground without springs or shocks, distributing weight evenly.',
      features: [
        'Mechanical differential bar connects both rockers for equalized ground contact',
        'Conquers obstacles 1.5x the wheel diameter without tipping over',
        'Six independent planetary geared DC motors for unstoppable torque',
        'Deep-tread pneumatic style knobby tires with high-traction silicone grip',
        'FPV Camera and sensor mast mount for remote exploration missions',
      ],
      components: [
        { name: 'CNC Articulated Rocker-Bogie Aluminum Frame', qty: '1 Set' },
        { name: 'All-Terrain Deep-Tread Knobby Rubber Tires', qty: '6 Units' },
        { name: 'High-Torque Planetary Geared DC Motors (12V)', qty: '6 Units' },
        { name: 'Central Differential Mechanical Pivot Axle', qty: '1 Unit' },
        { name: 'Dual BTS7960 43A High-Power Motor Driver Rail', qty: '1 Board' },
        { name: 'Microcontroller Brain + Sensor Interface Deck', qty: '1 Unit' },
        { name: 'LiPo Battery Safety Tray & High-Current Wiring Harness', qty: '1 Set' },
        { name: 'Ultrasonic / LiDAR Sensor Mounting Mast', qty: '1 Unit' },
      ],
    },
    {
      slug: 'maze-solvers',
      title: 'Maze Solvers',
      icon: <Zap size={30} style={{ color: '#7c3aed' }} />,
      badge: 'Autonomous Flood-Fill Micromouse',
      short: 'Autonomous Flood-Fill Micromouse',
      tagline: 'High-Speed Autonomous Micromouse Maze Exploration Racer',
      studioImage: '/assets/kits/maze-solvers.jpg',
      difficulty: 'Advanced',
      telemetry: [
        { label: 'Solver Algorithm', value: 'Modified Flood-Fill & Diagonal Search' },
        { label: 'Distance Sensing', value: '4-Channel Optical IR & Laser Time-of-Flight' },
        { label: 'Motors & Gearing', value: 'Dual Coreless High-RPM with Brass Pinions' },
        { label: 'Encoder Resolution', value: '1024 CPR Magnetic Hall Encoders' },
        { label: 'Chassis Design', value: 'Integrated Matte-Black 4-Layer PCB' },
        { label: 'Peak Velocity', value: 'Up to 3.2 m/s Autonomous Sprint' },
      ],
      description:
        'A high-performance competition-grade micromouse robot. Built on an integrated 4-layer custom PCB chassis, it utilizes a multi-sensor array to map unknown 16x16 mazes in real time, calculating the shortest mathematical trajectory using Flood-Fill algorithms before unleashing an ultra-high-speed speed run.',
      features: [
        'Autonomous real-time maze wall mapping & dynamic shortest path computation',
        'Four angled optical distance sensors for ultra-fast wall-following calibration',
        'Dual high-RPM coreless DC motors with custom brass reduction gearboxes',
        'Gyroscope + Accelerometer 6-DOF IMU for precision corner drifting',
        'Supports C++ firmware flash, Python simulator, and LabVIEW algorithm testbeds',
      ],
      components: [
        { name: 'Integrated 4-Layer Matte Black PCB Chassis Board', qty: '1 Unit' },
        { name: 'High-Speed Coreless DC Motors (30,000 RPM)', qty: '2 Units' },
        { name: 'Precision CNC Machined Brass Pinions & Spur Gears', qty: '1 Set' },
        { name: 'Custom High-Grip Silicone Rims with Wheel Hubs', qty: '2 Units' },
        { name: 'High-Accuracy IR Optical Distance Sensor Array', qty: '4 Units' },
        { name: '6-Axis MPU-6050 Motion Tracking IMU Sensor', qty: '1 Unit' },
        { name: 'High-Resolution Magnetic Rotary Encoders', qty: '2 Units' },
        { name: 'Ultra-Lightweight 3.7V 300mAh LiPo Battery Pack', qty: '1 Unit' },
      ],
    },
    {
      slug: 'fighting-robot',
      title: 'Fighting Robot',
      icon: <Shield size={30} style={{ color: 'var(--accent-crimson)' }} />,
      badge: 'RoboWars High-Kinetic Combat',
      short: 'Combat RoboWars Rotary Spinner',
      tagline: 'Heavyweight Combat RoboWars Rotary Kinetic Drum Spinner',
      studioImage: '/assets/kits/fighting-robot.jpg',
      difficulty: 'Pro / Combat',
      telemetry: [
        { label: 'Combat Weight Class', value: 'Beetleweight / Antweight Championship' },
        { label: 'Kinetic Weapon', value: '12,850 RPM Hardened Steel Rotary Drum' },
        { label: 'Kinetic Energy', value: '450 Joules Impact Release' },
        { label: 'Armor Plate', value: '3mm Brushed Stainless Steel Wedge' },
        { label: 'Drive Electronics', value: '60A Dual Reversible Brushless ESC' },
        { label: 'Safety Cut-Off', value: 'Removable Master Safety Link & LED' },
      ],
      description:
        'Designed for high-impact combat robotics arena battles (RoboWars). Features a destructive front kinetic rotary spinner drum driven by an outrunner brushless motor reaching 12,850 RPM, housed within a hardened 3mm stainless steel wedge armor chassis designed to deflect opponent blows.',
      features: [
        'Devastating front kinetic rotary weapon bar delivers 450+ Joules on impact',
        'Hardened 3mm brushed stainless steel wedge deflects enemy lifters and spinners',
        'Independent dual high-traction drive wheels for explosive ramming and turning',
        'Heavy-duty 60A reversible speed controllers with fail-safe radio protocols',
        'Built to official international combat robotics competition safety regulations',
      ],
      components: [
        { name: 'Hardened Stainless Steel Laser-Cut Wedge Armor Chassis', qty: '1 Set' },
        { name: 'High-RPM Brushless Outrunner Weapon Motor (12,850 RPM)', qty: '1 Unit' },
        { name: 'CNC Machined Hardened Steel Kinetic Rotary Drum Weapon', qty: '1 Unit' },
        { name: 'High-Torque Metal Gear Drive Motors & Knobby Tires', qty: '2 Units' },
        { name: '60A Brushless ESC + Heavy Duty Drive ESC Rail', qty: '1 Set' },
        { name: '2.4GHz 6-Channel Radio Transmitter & Receiver Kit', qty: '1 Set' },
        { name: 'High-Discharge 3S LiPo Battery Pack (70C Burst)', qty: '1 Unit' },
        { name: 'Official Competition Removable Master Power Safety Switch', qty: '1 Unit' },
      ],
    },
  ];

  const currentBox = robotBoxes.find((b) => b.slug === selectedSlug) || robotBoxes[0];
  const currentProject = fallbackProjects.find((p) => p.slug === selectedSlug) || fallbackProjects[0];

  return (
    <div className="page-turn-enter" style={{ padding: '40px 0 80px' }}>
      <div className="container" style={{ maxWidth: '1200px' }}>
        
        {/* Section Header */}
        <div className="section-title-wrap">
          <div className="badge-tag badge-gold">
            <Layers size={14} /> Official Hardware Products
          </div>
          <h1 className="section-title orbitron">Flagship Engineer Kits</h1>
          <p className="section-subtitle">
            Choose any robot kit below to inspect its dedicated interactive kinematics motion simulation, studio hardware photograph, complete telemetry metrics, and included Bill of Materials.
          </p>
        </div>

        {/* 5 BOXES GRID - With Active Glowing Ring and Telemetry Pill */}
        <div className="kit-boxes-grid" style={{ marginBottom: '36px' }}>
          {robotBoxes.map((box) => {
            const isSelected = box.slug === selectedSlug;
            return (
              <div
                key={box.slug}
                onClick={() => setSelectedSlug(box.slug)}
                className={`kit-box-card ${isSelected ? 'active' : ''}`}
                style={{
                  border: isSelected ? '2px solid var(--accent-gold)' : '1px solid var(--border-subtle)',
                  borderRadius: '16px',
                  padding: '22px 18px',
                  background: isSelected ? '#ffffff' : 'var(--bg-card)',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  boxShadow: isSelected ? '0 10px 30px rgba(217, 119, 6, 0.16)' : '0 4px 14px rgba(0,0,0,0.03)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  gap: '12px',
                  position: 'relative',
                }}
              >
                <div style={{
                  width: '58px',
                  height: '58px',
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
                  <h3 className="orbitron" style={{ fontSize: '1.02rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '4px' }}>
                    {box.title}
                  </h3>
                  <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.35 }}>
                    {box.short}
                  </p>
                </div>

                <div style={{
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  color: isSelected ? 'var(--accent-gold)' : 'var(--text-dim)',
                  background: isSelected ? 'var(--accent-gold-soft)' : 'var(--bg-primary)',
                  padding: '3px 8px',
                  borderRadius: '6px',
                  marginTop: 'auto',
                }}>
                  {box.badge}
                </div>

                {isSelected && (
                  <div style={{
                    position: 'absolute',
                    top: '-10px',
                    background: 'var(--accent-gold)',
                    color: '#ffffff',
                    fontSize: '0.68rem',
                    fontWeight: 800,
                    padding: '2px 10px',
                    borderRadius: '10px',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    boxShadow: '0 2px 8px rgba(217, 119, 6, 0.3)',
                  }}>
                    Active Project
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* ================================================================= */}
        {/* DYNAMIC STAGE: SMOOTH SLIDE-IN TRANSITION FOR SELECTED PROJECT    */}
        {/* ================================================================= */}
        <div
          key={selectedSlug}
          className="glass-panel kit-stage-slide"
          style={{
            padding: '36px',
            border: '1.5px solid var(--border-subtle)',
            background: '#ffffff',
            boxShadow: '0 12px 40px rgba(0,0,0,0.06)',
            borderRadius: '20px',
          }}
        >
          
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
                <span className="badge-tag">{currentBox.difficulty} Level</span>
                <span className="badge-tag" style={{ background: 'rgba(2, 132, 199, 0.1)', color: '#0284c7' }}>
                  {currentBox.badge}
                </span>
              </div>
              <h2 className="orbitron" style={{ fontSize: '2.1rem', fontWeight: 900, color: 'var(--text-main)', margin: '0 0 6px' }}>
                {currentBox.title}
              </h2>
              <p className="rajdhani" style={{ fontSize: '1.05rem', color: 'var(--accent-gold)', fontWeight: 700, margin: 0 }}>
                {currentBox.tagline}
              </p>
            </div>

            {/* Direct Order Actions */}
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a
                href={`https://wa.me/919677131092?text=Hello%20Aadhyaa%20Skills,%20I%20am%20interested%20in%20ordering%20the%20${encodeURIComponent(currentBox.title)}%20Engineer%20Kit.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
                style={{ padding: '10px 20px', fontSize: '0.9rem' }}
              >
                <MessageSquare size={17} />
                Order via WhatsApp
              </a>

              <button
                onClick={() => onNavigate('order')}
                className="btn-secondary"
                style={{ padding: '10px 18px', fontSize: '0.9rem' }}
              >
                Open Quotation Page
              </button>
            </div>
          </div>

          {/* 2-Column Split: Interactive Visual on Left, Full Technical Specs on Right */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(420px, 1fr))',
            gap: '34px',
            marginBottom: '36px',
          }}>
            
            {/* Left: Dedicated Interactive Visual for this selected project */}
            <div>
              
              {/* Visual Mode Selector Tabs: Live Motion Animation vs Studio Photo */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px', flexWrap: 'wrap', gap: '8px' }}>
                <div className="rajdhani" style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-main)', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  {visualMode === 'animation' ? (
                    <>
                      <Activity size={18} style={{ color: 'var(--accent-gold)' }} />
                      <span>Live Kinematics Motion Simulation</span>
                    </>
                  ) : (
                    <>
                      <Camera size={18} style={{ color: 'var(--accent-cyan)' }} />
                      <span>Studio Hardware Photograph</span>
                    </>
                  )}
                </div>

                <div style={{ display: 'flex', gap: '6px' }}>
                  <button
                    onClick={() => setVisualMode('animation')}
                    style={{
                      padding: '6px 14px',
                      borderRadius: '8px',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      background: visualMode === 'animation' ? 'var(--accent-gold)' : 'var(--bg-primary)',
                      color: visualMode === 'animation' ? '#ffffff' : 'var(--text-muted)',
                      border: visualMode === 'animation' ? '1px solid var(--accent-gold)' : '1px solid var(--border-subtle)',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px',
                      transition: 'all 0.2s',
                    }}
                  >
                    <Activity size={13} /> Live Animation
                  </button>

                  <button
                    onClick={() => setVisualMode('photo')}
                    style={{
                      padding: '6px 14px',
                      borderRadius: '8px',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      background: visualMode === 'photo' ? 'var(--accent-cyan)' : 'var(--bg-primary)',
                      color: visualMode === 'photo' ? '#ffffff' : 'var(--text-muted)',
                      border: visualMode === 'photo' ? '1px solid var(--accent-cyan)' : '1px solid var(--border-subtle)',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px',
                      transition: 'all 0.2s',
                    }}
                  >
                    <Camera size={13} /> Studio Photo
                  </button>
                </div>
              </div>

              {/* Visual Showcase Stage */}
              <div style={{
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1.5px solid var(--border-subtle)',
                background: '#090d16',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.1)',
                position: 'relative',
                aspectRatio: '16/10',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                {visualMode === 'animation' ? (
                  <RobotInteractiveCanvas key={selectedSlug} slug={selectedSlug} />
                ) : (
                  <div style={{ width: '100%', height: '100%', position: 'relative', background: '#F1F4F8' }}>
                    <img
                      src={currentBox.studioImage}
                      alt={`${currentBox.title} Studio Product Shot`}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                        padding: '10px',
                        display: 'block',
                      }}
                    />
                    <div style={{
                      position: 'absolute',
                      bottom: '12px',
                      right: '12px',
                      background: 'rgba(15, 23, 42, 0.85)',
                      backdropFilter: 'blur(6px)',
                      color: '#ffffff',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      padding: '4px 10px',
                      borderRadius: '6px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px',
                    }}>
                      <Camera size={12} /> Studio 8K Capture
                    </div>
                  </div>
                )}
              </div>

              {/* Status footer bar */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: '12px',
                fontSize: '0.8rem',
                color: 'var(--text-muted)',
              }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Sparkles size={14} style={{ color: 'var(--accent-gold)' }} />
                  {visualMode === 'animation'
                    ? 'Interactive 60 FPS Canvas Simulation Engine'
                    : 'Clean Soft-Light Laboratory Studio Product Shot'}
                </span>
                <span style={{ fontFamily: 'monospace', fontWeight: 700, color: '#16a34a' }}>
                  ● Hardware Verified
                </span>
              </div>

            </div>

            {/* Right: Detailed Technical Specs & Telemetry */}
            <div>
              <div className="rajdhani" style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--accent-gold)', textTransform: 'uppercase', marginBottom: '10px' }}>
                📋 Detailed Technical Overview
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.96rem', lineHeight: 1.7, marginBottom: '20px' }}>
                {currentBox.description}
              </p>

              {/* Live Telemetry Metric Grid */}
              <div className="rajdhani" style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-main)', textTransform: 'uppercase', marginBottom: '12px' }}>
                ⚡ Hardware Telemetry & Architecture
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '10px',
                marginBottom: '24px',
              }}>
                {currentBox.telemetry.map((t, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: 'var(--bg-primary)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: '8px',
                      padding: '10px 14px',
                    }}
                  >
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontWeight: 700 }}>
                      {t.label}
                    </div>
                    <div style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--text-main)', marginTop: '2px' }}>
                      {t.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* Core Features Checklist */}
              <div className="rajdhani" style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-main)', textTransform: 'uppercase', marginBottom: '10px' }}>
                🚀 Built-In Robotics Capabilities
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {currentBox.features.map((f, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.9rem', color: 'var(--text-main)' }}>
                    <div style={{ width: '18px', height: '18px', borderRadius: '50%', background: 'rgba(5, 150, 105, 0.15)', color: 'var(--accent-emerald)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span>{f}</span>
                  </div>
                ))}
              </div>

            </div>

          </div>

          {/* =============================================================== */}
          {/* COMPLETE BILL OF MATERIALS (BOM) FOR THIS SPECIFIC ROBOT        */}
          {/* =============================================================== */}
          <div style={{
            background: 'var(--bg-primary)',
            padding: '24px',
            borderRadius: '14px',
            border: '1px solid var(--border-subtle)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <Cpu size={18} style={{ color: 'var(--accent-cyan)' }} />
              <h3 className="rajdhani" style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-main)', margin: 0, textTransform: 'uppercase' }}>
                Complete Included Bill of Materials (BOM) — {currentBox.title}
              </h3>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '16px' }}>
              Every component below is factory-tested, calibrated, and securely packaged in this specific kit:
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '10px',
            }}>
              {currentBox.components.map((c, i) => (
                <div key={i} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '9px 14px',
                  background: '#ffffff',
                  borderRadius: '8px',
                  border: '1px solid var(--border-subtle)',
                  fontSize: '0.86rem',
                }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-gold)', flexShrink: 0 }} />
                  <span style={{ fontWeight: 600, color: 'var(--text-main)', flex: 1 }}>{c.name}</span>
                  <span style={{
                    fontSize: '0.74rem',
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
