import React, { useEffect, useRef } from 'react';

export default function LabVIEWRain() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Realistic LabVIEW VIs, Functions, and Nodes for White Background
    const labviewSymbols = [
      { text: 'DAQmx Read', type: 'vi', color: '#b45309' },
      { text: 'While [⟲]', type: 'loop', color: '#475569' },
      { text: 'Wait (ms)', type: 'vi', color: '#0284c7' },
      { text: 'Enqueue [Q]', type: 'qmh', color: '#7c3aed' },
      { text: 'Dequeue [Q]', type: 'qmh', color: '#7c3aed' },
      { text: 'VISA Write', type: 'vi', color: '#0369a1' },
      { text: 'Bundle By Name', type: 'node', color: '#db2777' },
      { text: 'Unbundle', type: 'node', color: '#db2777' },
      { text: 'PID.vi', type: 'vi', color: '#059669' },
      { text: 'CLAD', type: 'cert', color: '#d97706' },
      { text: 'CLD', type: 'cert', color: '#d97706' },
      { text: 'CLA', type: 'cert', color: '#d97706' },
      { text: 'Case [0..1]', type: 'loop', color: '#64748b' },
      { text: 'Array Index', type: 'node', color: '#ea580c' },
      { text: 'TCP Open', type: 'vi', color: '#0284c7' },
      { text: 'FPGA FIFO', type: 'vi', color: '#e11d48' },
      { text: 'Sine Wave.vi', type: 'vi', color: '#059669' },
      { text: 'Numeric [DBL]', type: 'wire', color: '#d97706' },
      { text: 'Boolean [TF]', type: 'wire', color: '#16a34a' },
      { text: 'String [ABC]', type: 'wire', color: '#ec4899' },
      { text: 'Cluster { }', type: 'wire', color: '#9333ea' },
      { text: 'Error In/Out', type: 'wire', color: '#b45309' },
      { text: 'State Machine', type: 'qmh', color: '#0284c7' },
    ];

    const dropCount = Math.floor(window.innerWidth / 46);
    const drops = [];

    for (let i = 0; i < dropCount; i++) {
      const sym = labviewSymbols[Math.floor(Math.random() * labviewSymbols.length)];
      drops.push({
        x: Math.random() * width,
        y: Math.random() * height - height,
        speed: 0.55 + Math.random() * 0.85, // Gentle slow fall
        drift: (Math.random() - 0.5) * 0.2, // Subtle lateral drift
        opacity: 0.18 + Math.random() * 0.22, // Soft and clear on white
        symbol: sym,
        fontSize: Math.floor(11 + Math.random() * 2),
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      drops.forEach((d) => {
        d.y += d.speed;
        d.x += d.drift;

        // Wrap around smoothly
        if (d.y > height + 40) {
          d.y = -30;
          d.x = Math.random() * width;
          d.symbol = labviewSymbols[Math.floor(Math.random() * labviewSymbols.length)];
        }

        ctx.save();
        ctx.globalAlpha = d.opacity;

        const text = d.symbol.text;
        ctx.font = `600 ${d.fontSize}px 'Inter', monospace`;
        const textWidth = ctx.measureText(text).width;

        // LabVIEW terminal box
        const padX = 6;
        const padY = 3;
        const boxW = textWidth + padX * 2;
        const boxH = d.fontSize + padY * 2;

        ctx.fillStyle = '#ffffff';
        ctx.strokeStyle = d.symbol.color;
        ctx.lineWidth = 1;

        ctx.beginPath();
        if (ctx.roundRect) {
          ctx.roundRect(d.x, d.y - d.fontSize, boxW, boxH, 4);
        } else {
          ctx.rect(d.x, d.y - d.fontSize, boxW, boxH);
        }
        ctx.fill();
        ctx.stroke();

        // Node text inside
        ctx.fillStyle = d.symbol.color;
        ctx.fillText(text, d.x + padX, d.y);

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 0.85,
      }}
    />
  );
}
