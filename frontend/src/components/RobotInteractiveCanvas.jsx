import React, { useState, useEffect, useRef } from 'react';
import {
  Play,
  RotateCcw,
  Zap,
  Shield,
  Activity,
  Compass,
  Sparkles,
  Sliders,
  CheckCircle2,
} from 'lucide-react';

export default function RobotInteractiveCanvas({ slug }) {
  const canvasRef = useRef(null);
  const [animMode, setAnimMode] = useState('auto'); // 'auto' | 'action' | 'manual'
  const [metricTelemetry, setMetricTelemetry] = useState({});

  // =========================================================================
  // 1. ROBOTIC ARM ANIMATION LOGIC
  // =========================================================================
  useEffect(() => {
    if (slug !== 'robotic-arm') return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let t = 0;

    const render = () => {
      t += 0.025;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Background grid
      ctx.strokeStyle = '#e2e8f0';
      ctx.lineWidth = 1;
      for (let x = 0; x < canvas.width; x += 30) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += 30) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Base Pedestal
      const baseX = canvas.width / 2;
      const baseY = canvas.height - 40;

      // Base Platform
      ctx.fillStyle = '#1e293b';
      ctx.fillRect(baseX - 60, baseY - 15, 120, 20);
      ctx.fillStyle = '#d97706';
      ctx.fillRect(baseX - 40, baseY - 25, 80, 10);

      // Kinematic Angles
      let theta1 = -Math.PI / 3 + Math.sin(t) * 0.4; // Shoulder
      let theta2 = Math.PI / 2.5 + Math.cos(t * 1.2) * 0.5; // Elbow
      let theta3 = -Math.PI / 4 + Math.sin(t * 0.8) * 0.3; // Wrist

      const L1 = 90; // Upper arm length
      const L2 = 80; // Forearm length
      const L3 = 45; // Wrist length

      // Joint 1 (Base/Shoulder)
      const j1X = baseX;
      const j1Y = baseY - 25;

      // Joint 2 (Elbow)
      const j2X = j1X + Math.cos(theta1) * L1;
      const j2Y = j1Y + Math.sin(theta1) * L1;

      // Joint 3 (Wrist)
      const j3X = j2X + Math.cos(theta1 + theta2) * L2;
      const j3Y = j2Y + Math.sin(theta1 + theta2) * L2;

      // End Effector (Gripper)
      const tipX = j3X + Math.cos(theta1 + theta2 + theta3) * L3;
      const tipY = j3Y + Math.sin(theta1 + theta2 + theta3) * L3;

      // Draw Link 1
      ctx.strokeStyle = '#0f172a';
      ctx.lineWidth = 14;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(j1X, j1Y);
      ctx.lineTo(j2X, j2Y);
      ctx.stroke();

      // Highlight Core
      ctx.strokeStyle = '#0284c7';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(j1X, j1Y);
      ctx.lineTo(j2X, j2Y);
      ctx.stroke();

      // Draw Link 2
      ctx.strokeStyle = '#334155';
      ctx.lineWidth = 10;
      ctx.beginPath();
      ctx.moveTo(j2X, j2Y);
      ctx.lineTo(j3X, j3Y);
      ctx.stroke();

      // Draw Link 3
      ctx.strokeStyle = '#64748b';
      ctx.lineWidth = 6;
      ctx.beginPath();
      ctx.moveTo(j3X, j3Y);
      ctx.lineTo(tipX, tipY);
      ctx.stroke();

      // Draw Servo Joints (Gold rings)
      [
        { x: j1X, y: j1Y, r: 12, label: 'J1: Base' },
        { x: j2X, y: j2Y, r: 10, label: 'J2: Shoulder' },
        { x: j3X, y: j3Y, r: 8, label: 'J3: Elbow' },
      ].forEach((j) => {
        ctx.fillStyle = '#d97706';
        ctx.beginPath();
        ctx.arc(j.x, j.y, j.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(j.x, j.y, j.r - 4, 0, Math.PI * 2);
        ctx.fill();
      });

      // Gripper Fingers
      const gripAngle = Math.sin(t * 1.5) * 0.3 + 0.35;
      const fLen = 22;

      // Left finger
      ctx.strokeStyle = '#e11d48';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(tipX, tipY);
      ctx.lineTo(tipX + Math.cos(theta1 + theta2 + theta3 - gripAngle) * fLen, tipY + Math.sin(theta1 + theta2 + theta3 - gripAngle) * fLen);
      ctx.stroke();

      // Right finger
      ctx.beginPath();
      ctx.moveTo(tipX, tipY);
      ctx.lineTo(tipX + Math.cos(theta1 + theta2 + theta3 + gripAngle) * fLen, tipY + Math.sin(theta1 + theta2 + theta3 + gripAngle) * fLen);
      ctx.stroke();

      // Held Chip / Target payload
      const chipGrip = Math.abs(Math.sin(t * 1.5)) > 0.4;
      if (chipGrip) {
        ctx.fillStyle = '#10b981';
        ctx.fillRect(tipX + Math.cos(theta1 + theta2 + theta3) * 16 - 6, tipY + Math.sin(theta1 + theta2 + theta3) * 16 - 6, 12, 12);
        ctx.fillStyle = '#ffffff';
        ctx.font = '7px sans-serif';
        ctx.fillText('IC', tipX + Math.cos(theta1 + theta2 + theta3) * 16 - 3, tipY + Math.sin(theta1 + theta2 + theta3) * 16 + 2);
      }

      // Live Telemetry Readout
      ctx.fillStyle = '#0f172a';
      ctx.font = '11px monospace';
      ctx.fillText(`J1 Base: ${Math.round((theta1 * 180) / Math.PI + 90)}°`, 20, 30);
      ctx.fillText(`J2 Shoulder: ${Math.round((theta2 * 180) / Math.PI)}°`, 20, 48);
      ctx.fillText(`J3 Wrist: ${Math.round((theta3 * 180) / Math.PI + 45)}°`, 20, 66);
      ctx.fillStyle = '#0284c7';
      ctx.fillText(`Cartesian: X:${Math.round(tipX - baseX)}mm  Y:${Math.round(baseY - tipY)}mm`, 20, 84);

      animationFrameId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animationFrameId);
  }, [slug]);

  // =========================================================================
  // 2. SOCCER ROBOT ANIMATION LOGIC
  // =========================================================================
  useEffect(() => {
    if (slug !== 'soccer-robot') return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let t = 0;

    let botX = 140;
    let botY = canvas.height / 2;
    let ballX = 220;
    let ballY = canvas.height / 2;
    let ballVx = 0;
    let ballVy = 0;

    const render = () => {
      t += 0.03;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Pitch background (turf)
      ctx.fillStyle = '#0f766e';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Field lines
      ctx.strokeStyle = 'rgba(255,255,255,0.4)';
      ctx.lineWidth = 2;
      ctx.strokeRect(20, 20, canvas.width - 40, canvas.height - 40);
      // Center line
      ctx.beginPath();
      ctx.moveTo(canvas.width / 2, 20);
      ctx.lineTo(canvas.width / 2, canvas.height - 20);
      ctx.stroke();
      // Center circle
      ctx.beginPath();
      ctx.arc(canvas.width / 2, canvas.height / 2, 45, 0, Math.PI * 2);
      ctx.stroke();

      // Right Goal Post
      ctx.strokeStyle = '#fbbf24';
      ctx.lineWidth = 4;
      ctx.strokeRect(canvas.width - 24, canvas.height / 2 - 50, 14, 100);

      // Robot Motion (Omni tracking toward ball)
      const targetX = 240 + Math.sin(t * 1.2) * 90;
      const targetY = canvas.height / 2 + Math.cos(t * 1.5) * 60;
      botX += (targetX - botX) * 0.05;
      botY += (targetY - botY) * 0.05;

      // Ball physics
      ballX += (botX + 35 - ballX) * 0.08 + ballVx;
      ballY += (botY - ballY) * 0.08 + ballVy;
      ballVx *= 0.94;
      ballVy *= 0.94;

      // Goal Kick pulse
      if (Math.sin(t) > 0.96) {
        ballVx = 8;
        ballVy = (Math.random() - 0.5) * 4;
      }

      // Draw Robot (Circular omni base)
      ctx.save();
      ctx.translate(botX, botY);
      const botAngle = Math.atan2(ballY - botY, ballX - botX);
      ctx.rotate(botAngle);

      // Disc Chassis
      ctx.fillStyle = '#0f172a';
      ctx.beginPath();
      ctx.arc(0, 0, 28, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#d97706';
      ctx.lineWidth = 3;
      ctx.stroke();

      // 3 Omni Wheels
      [-Math.PI / 2, Math.PI / 6, (5 * Math.PI) / 6].forEach((ang) => {
        const wx = Math.cos(ang) * 26;
        const wy = Math.sin(ang) * 26;
        ctx.fillStyle = '#475569';
        ctx.fillRect(wx - 4, wy - 8, 8, 16);
      });

      // Front Dribbler Bar
      ctx.fillStyle = '#e11d48';
      ctx.fillRect(20, -12, 6, 24);

      // Center LED
      ctx.fillStyle = '#22c55e';
      ctx.beginPath();
      ctx.arc(0, 0, 6, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // Draw Soccer Ball
      ctx.fillStyle = '#f97316';
      ctx.beginPath();
      ctx.arc(ballX, ballY, 10, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Ball Trajectory Trail
      ctx.strokeStyle = 'rgba(251, 146, 60, 0.4)';
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.moveTo(botX, botY);
      ctx.lineTo(ballX, ballY);
      ctx.stroke();
      ctx.setLineDash([]);

      // Telemetry
      ctx.fillStyle = '#ffffff';
      ctx.font = '11px monospace';
      ctx.fillText('Velocity: 1.85 m/s (Omni Vector)', 30, 40);
      ctx.fillText('Dribbler: Active (12,000 RPM)', 30, 58);
      ctx.fillText('Tracking: Ball Locked', 30, 76);

      animationFrameId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animationFrameId);
  }, [slug]);

  // =========================================================================
  // 3. ALL TERRAIN ROBOT (ROCKER-BOGIE) ANIMATION
  // =========================================================================
  useEffect(() => {
    if (slug !== 'all-terrain-robot') return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let t = 0;

    const render = () => {
      t += 0.03;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Sky / Gradient
      const grad = ctx.createLinearGradient(0, 0, 0, canvas.height);
      grad.addColorStop(0, '#f1f5f9');
      grad.addColorStop(1, '#e2e8f0');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Rocky Ground Surface Profile
      const groundY = (x) => {
        return (
          canvas.height -
          55 -
          Math.sin((x + t * 40) * 0.02) * 22 -
          Math.cos((x + t * 40) * 0.04) * 12
        );
      };

      // Draw Rocky Ground
      ctx.fillStyle = '#78716c';
      ctx.beginPath();
      ctx.moveTo(0, canvas.height);
      for (let x = 0; x <= canvas.width; x += 10) {
        ctx.lineTo(x, groundY(x));
      }
      ctx.lineTo(canvas.width, canvas.height);
      ctx.fill();

      // Rock details
      ctx.strokeStyle = '#57534e';
      ctx.lineWidth = 3;
      ctx.stroke();

      // Rover center position
      const roverX = canvas.width / 2;
      const wheelOffsets = [-75, -25, 30, 85];

      // Draw 4 side-visible Rocker-Bogie Wheels conforming to terrain
      const wheels = wheelOffsets.map((off) => {
        const wx = roverX + off;
        const wy = groundY(wx) - 18;
        return { x: wx, y: wy };
      });

      // Draw Rocker-Bogie Linkage Arms
      ctx.strokeStyle = '#0f172a';
      ctx.lineWidth = 8;
      ctx.lineCap = 'round';

      // Rear rocker link
      ctx.beginPath();
      ctx.moveTo(wheels[0].x, wheels[0].y);
      ctx.lineTo(wheels[1].x, wheels[1].y);
      ctx.stroke();

      // Front bogie link
      ctx.beginPath();
      ctx.moveTo(wheels[2].x, wheels[2].y);
      ctx.lineTo(wheels[3].x, wheels[3].y);
      ctx.stroke();

      // Main Central Differential Pivot
      const avgY = (wheels[1].y + wheels[2].y) / 2 - 32;
      ctx.strokeStyle = '#0284c7';
      ctx.lineWidth = 6;
      ctx.beginPath();
      ctx.moveTo(wheels[1].x, wheels[1].y);
      ctx.lineTo(roverX, avgY);
      ctx.lineTo(wheels[2].x, wheels[2].y);
      ctx.stroke();

      // Chassis Body
      ctx.fillStyle = '#1e293b';
      ctx.fillRect(roverX - 45, avgY - 24, 90, 26);
      ctx.fillStyle = '#d97706';
      ctx.fillRect(roverX - 35, avgY - 32, 70, 8);

      // Mast / Camera Sensor Head
      ctx.strokeStyle = '#0f172a';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(roverX + 25, avgY - 24);
      ctx.lineTo(roverX + 25, avgY - 52);
      ctx.stroke();
      ctx.fillStyle = '#0284c7';
      ctx.fillRect(roverX + 18, avgY - 60, 16, 10);

      // Laser radar sweep
      ctx.strokeStyle = 'rgba(2, 132, 199, 0.4)';
      ctx.beginPath();
      ctx.moveTo(roverX + 25, avgY - 55);
      ctx.lineTo(roverX + 110, avgY - 55 + Math.sin(t * 3) * 20);
      ctx.stroke();

      // Draw Knobby Wheels (Rotating)
      wheels.forEach((w) => {
        ctx.fillStyle = '#0f172a';
        ctx.beginPath();
        ctx.arc(w.x, w.y, 16, 0, Math.PI * 2);
        ctx.fill();

        // Rim
        ctx.fillStyle = '#d97706';
        ctx.beginPath();
        ctx.arc(w.x, w.y, 7, 0, Math.PI * 2);
        ctx.fill();

        // Rotating tread spokes
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 2;
        for (let i = 0; i < 4; i++) {
          const ang = t * 2 + (i * Math.PI) / 2;
          ctx.beginPath();
          ctx.moveTo(w.x, w.y);
          ctx.lineTo(w.x + Math.cos(ang) * 16, w.y + Math.sin(ang) * 16);
          ctx.stroke();
        }
      });

      // Telemetry
      ctx.fillStyle = '#0f172a';
      ctx.font = '11px monospace';
      ctx.fillText('Suspension: 6-Wheel Rocker-Bogie', 20, 30);
      ctx.fillText(`Slope Incline: ${Math.round(Math.sin(t) * 18 + 12)}° Dynamic`, 20, 48);
      ctx.fillText('Obstacle Clearance: 85 mm', 20, 66);

      animationFrameId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animationFrameId);
  }, [slug]);

  // =========================================================================
  // 4. MAZE SOLVERS (MICROMOUSE FLOOD-FILL) ANIMATION
  // =========================================================================
  useEffect(() => {
    if (slug !== 'maze-solvers') return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let t = 0;

    // Fixed 6x6 Maze Matrix for Demo
    const cellSize = 38;
    const offsetX = 50;
    const offsetY = 25;

    // Waypoints for the micromouse to traverse
    const path = [
      { r: 5, c: 0 },
      { r: 4, c: 0 },
      { r: 3, c: 0 },
      { r: 3, c: 1 },
      { r: 3, c: 2 },
      { r: 2, c: 2 },
      { r: 1, c: 2 },
      { r: 1, c: 3 },
      { r: 2, c: 3 },
      { r: 2, c: 4 },
      { r: 2, c: 5 },
      { r: 1, c: 5 },
      { r: 0, c: 5 },
    ];

    const render = () => {
      t += 0.02;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Dark maze arena
      ctx.fillStyle = '#090d16';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Maze Grid Background
      for (let r = 0; r < 6; r++) {
        for (let c = 0; c < 6; c++) {
          const x = offsetX + c * cellSize;
          const y = offsetY + r * cellSize;
          ctx.strokeStyle = '#1e293b';
          ctx.lineWidth = 1;
          ctx.strokeRect(x, y, cellSize, cellSize);
        }
      }

      // Walls (Stylized Maze)
      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 3;
      ctx.strokeRect(offsetX, offsetY, cellSize * 6, cellSize * 6);

      // Internal maze barrier lines
      const walls = [
        [0, 1, 1, 1],
        [1, 0, 1, 1],
        [2, 0, 2, 2],
        [3, 2, 3, 3],
        [4, 1, 4, 3],
        [0, 4, 2, 4],
        [3, 4, 5, 4],
      ];
      walls.forEach(([r1, c1, r2, c2]) => {
        ctx.beginPath();
        ctx.moveTo(offsetX + c1 * cellSize, offsetY + r1 * cellSize);
        ctx.lineTo(offsetX + c2 * cellSize, offsetY + r2 * cellSize);
        ctx.stroke();
      });

      // Target Goal Center (Red Zone)
      ctx.fillStyle = 'rgba(239, 68, 68, 0.3)';
      ctx.fillRect(offsetX + 5 * cellSize, offsetY, cellSize, cellSize);
      ctx.strokeStyle = '#ef4444';
      ctx.strokeRect(offsetX + 5 * cellSize, offsetY, cellSize, cellSize);
      ctx.fillStyle = '#ef4444';
      ctx.font = '9px monospace';
      ctx.fillText('GOAL', offsetX + 5 * cellSize + 6, offsetY + 22);

      // Mouse Current Position interpolation
      const pathIdx = Math.floor(t * 3) % (path.length - 1);
      const frac = (t * 3) % 1;
      const cur = path[pathIdx];
      const nxt = path[pathIdx + 1];

      const mouseX = offsetX + (cur.c + (nxt.c - cur.c) * frac + 0.5) * cellSize;
      const mouseY = offsetY + (cur.r + (nxt.r - cur.r) * frac + 0.5) * cellSize;

      // Traversed Breadcrumb Path
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.4)';
      ctx.lineWidth = 2;
      ctx.setLineDash([3, 3]);
      ctx.beginPath();
      for (let i = 0; i <= pathIdx; i++) {
        const px = offsetX + (path[i].c + 0.5) * cellSize;
        const py = offsetY + (path[i].r + 0.5) * cellSize;
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.stroke();
      ctx.setLineDash([]);

      // Sensor Beams (Pulsing IR waves)
      const rayLen = 28;
      ctx.strokeStyle = 'rgba(34, 197, 94, 0.8)';
      ctx.lineWidth = 1.5;
      // Front beam
      ctx.beginPath();
      ctx.moveTo(mouseX, mouseY);
      ctx.lineTo(mouseX + rayLen, mouseY);
      ctx.stroke();
      // Left beam
      ctx.beginPath();
      ctx.moveTo(mouseX, mouseY);
      ctx.lineTo(mouseX, mouseY - rayLen);
      ctx.stroke();
      // Right beam
      ctx.beginPath();
      ctx.moveTo(mouseX, mouseY);
      ctx.lineTo(mouseX, mouseY + rayLen);
      ctx.stroke();

      // Micromouse Body
      ctx.fillStyle = '#f59e0b';
      ctx.beginPath();
      ctx.arc(mouseX, mouseY, 11, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Coreless Wheels
      ctx.fillStyle = '#0f172a';
      ctx.fillRect(mouseX - 8, mouseY - 13, 16, 4);
      ctx.fillRect(mouseX - 8, mouseY + 9, 16, 4);

      // Telemetry Side Panel
      ctx.fillStyle = '#e2e8f0';
      ctx.font = '11px monospace';
      ctx.fillText('ALGORITHM: Flood-Fill v4', canvas.width - 170, 36);
      ctx.fillText(`CELL: [${cur.r}, ${cur.c}]`, canvas.width - 170, 56);
      ctx.fillText('SPEED: 2.1 m/s', canvas.width - 170, 76);
      ctx.fillText('ENCODERS: 1024 CPR', canvas.width - 170, 96);
      ctx.fillStyle = '#34d399';
      ctx.fillText('WALL SENSORS: Locked', canvas.width - 170, 116);

      animationFrameId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animationFrameId);
  }, [slug]);

  // =========================================================================
  // 5. FIGHTING ROBOT (ROBOWARS SPINNER) ANIMATION
  // =========================================================================
  useEffect(() => {
    if (slug !== 'fighting-robot') return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let t = 0;

    const sparks = [];

    const render = () => {
      t += 0.04;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Combat Arena Floor (Industrial steel diamond plate)
      ctx.fillStyle = '#111827';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Hazard Stripes on Borders
      ctx.strokeStyle = '#eab308';
      ctx.lineWidth = 8;
      ctx.strokeRect(10, 10, canvas.width - 20, canvas.height - 20);

      const botX = canvas.width / 2 - 40;
      const botY = canvas.height / 2;

      // Heavy Armored Chassis (Brushed steel wedge)
      ctx.fillStyle = '#374151';
      ctx.beginPath();
      ctx.moveTo(botX - 45, botY - 35);
      ctx.lineTo(botX + 35, botY - 25);
      ctx.lineTo(botX + 50, botY);
      ctx.lineTo(botX + 35, botY + 25);
      ctx.lineTo(botX - 45, botY + 35);
      ctx.closePath();
      ctx.fill();
      ctx.strokeStyle = '#9ca3af';
      ctx.lineWidth = 3;
      ctx.stroke();

      // Armor Ridge Lines
      ctx.strokeStyle = '#1f2937';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(botX - 20, botY - 25);
      ctx.lineTo(botX + 25, botY);
      ctx.lineTo(botX - 20, botY + 25);
      ctx.stroke();

      // Heavy-Duty Drive Wheels
      ctx.fillStyle = '#111827';
      ctx.fillRect(botX - 40, botY - 48, 30, 14);
      ctx.fillRect(botX - 40, botY + 34, 30, 14);

      // FRONT ROTARY KINETIC SPINNER WEAPON (High Speed)
      const spinAngle = t * 18;
      const spinRadius = 38;
      const weaponX = botX + 56;
      const weaponY = botY;

      // Motion blur circle
      ctx.fillStyle = 'rgba(239, 68, 68, 0.25)';
      ctx.beginPath();
      ctx.arc(weaponX, weaponY, spinRadius, 0, Math.PI * 2);
      ctx.fill();

      // Spinning Blade Teeth
      ctx.strokeStyle = '#ef4444';
      ctx.lineWidth = 6;
      ctx.beginPath();
      ctx.moveTo(weaponX + Math.cos(spinAngle) * spinRadius, weaponY + Math.sin(spinAngle) * spinRadius);
      ctx.lineTo(weaponX + Math.cos(spinAngle + Math.PI) * spinRadius, weaponY + Math.sin(spinAngle + Math.PI) * spinRadius);
      ctx.stroke();

      // Secondary Cross Blade
      ctx.strokeStyle = '#f87171';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(weaponX + Math.cos(spinAngle + Math.PI / 2) * (spinRadius - 6), weaponY + Math.sin(spinAngle + Math.PI / 2) * (spinRadius - 6));
      ctx.lineTo(weaponX + Math.cos(spinAngle - Math.PI / 2) * (spinRadius - 6), weaponY + Math.sin(spinAngle - Math.PI / 2) * (spinRadius - 6));
      ctx.stroke();

      // Weapon Center Hub
      ctx.fillStyle = '#f59e0b';
      ctx.beginPath();
      ctx.arc(weaponX, weaponY, 9, 0, Math.PI * 2);
      ctx.fill();

      // Generate Sparks from weapon tip
      if (Math.random() > 0.4) {
        sparks.push({
          x: weaponX + Math.cos(spinAngle) * spinRadius,
          y: weaponY + Math.sin(spinAngle) * spinRadius,
          vx: Math.random() * 8 + 3,
          vy: (Math.random() - 0.5) * 8,
          life: 1.0,
          color: Math.random() > 0.5 ? '#f59e0b' : '#ef4444',
        });
      }

      // Render & Update Sparks
      for (let i = sparks.length - 1; i >= 0; i--) {
        const s = sparks[i];
        ctx.fillStyle = s.color;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.life * 2.5, 0, Math.PI * 2);
        ctx.fill();
        s.x += s.vx;
        s.y += s.vy;
        s.life -= 0.05;
        if (s.life <= 0) sparks.splice(i, 1);
      }

      // Telemetry HUD
      ctx.fillStyle = '#f97316';
      ctx.font = '11px monospace';
      ctx.fillText('WEAPON: High-Kinetic Rotary Bar', 24, 34);
      ctx.fillText('RPM: 12,850 RPM (Brushless Outrunner)', 24, 52);
      ctx.fillText('ESC: 60A Continuous Rail', 24, 70);
      ctx.fillText('ARMOR: Hardened 3mm Stainless Steel', 24, 88);

      animationFrameId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animationFrameId);
  }, [slug]);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <canvas
        ref={canvasRef}
        width={580}
        height={320}
        style={{
          width: '100%',
          height: '100%',
          display: 'block',
          borderRadius: '12px',
        }}
      />
    </div>
  );
}

