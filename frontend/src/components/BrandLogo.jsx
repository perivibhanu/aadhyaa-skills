import React from 'react';

export default function BrandLogo({ size = 'normal', onClick, isDarkText = true }) {
  const isLarge = size === 'large';

  return (
    <div
      onClick={onClick}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: isLarge ? '16px' : '12px',
        textDecoration: 'none',
        userSelect: 'none',
        cursor: onClick ? 'pointer' : 'default',
      }}
    >
      {/* Yellow Curvature AS Emblem */}
      <div
        style={{
          width: isLarge ? '48px' : '42px',
          height: isLarge ? '48px' : '42px',
          background: 'linear-gradient(135deg, #ffca00 0%, #f59e0b 100%)',
          borderRadius: '12px 4px 12px 4px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 14px rgba(245, 158, 11, 0.35)',
          position: 'relative',
          flexShrink: 0,
        }}
      >
        <span
          style={{
            fontFamily: "'Playfair Display', 'Times New Roman', Georgia, serif",
            fontStyle: 'italic',
            fontWeight: 900,
            fontSize: isLarge ? '26px' : '22px',
            color: '#111827',
            letterSpacing: '-1.5px',
            transform: 'translateX(-1px)',
            lineHeight: 1,
          }}
        >
          AS
        </span>
      </div>

      {/* Brand Text: Aadhyaa Skills / Research & Development */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div
          style={{
            color: isDarkText ? '#0f172a' : '#ffffff',
            fontWeight: 800,
            fontSize: isLarge ? '22px' : '19px',
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
            fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
          }}
        >
          Aadhyaa Skills
        </div>
        <div
          style={{
            color: isDarkText ? '#64748b' : 'rgba(255, 255, 255, 0.75)',
            fontWeight: 600,
            fontSize: isLarge ? '12px' : '10.5px',
            letterSpacing: '0.04em',
            lineHeight: 1.3,
            marginTop: '2px',
            fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
          }}
        >
          Research & Development
        </div>
      </div>
    </div>
  );
}
