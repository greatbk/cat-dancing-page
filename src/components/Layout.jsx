import { useEffect, useState } from 'react';

function Star({ style }) {
  return (
    <div
      style={{
        position: 'absolute',
        width: '4px',
        height: '4px',
        borderRadius: '50%',
        background: '#fff',
        ...style,
      }}
    />
  );
}

export default function Layout({ children }) {
  const [stars] = useState(() =>
    Array.from({ length: 40 }, (_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 3}s`,
      animationDuration: `${1.5 + Math.random() * 2}s`,
    }))
  );

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      padding: '2rem 1rem',
    }}>
      {/* Background stars */}
      {stars.map(s => (
        <Star key={s.id} style={{
          top: s.top,
          left: s.left,
          animation: `twinkle ${s.animationDuration} ease-in-out ${s.animationDelay} infinite`,
        }} />
      ))}

      {/* Title */}
      <h1 style={{
        fontSize: 'clamp(1.8rem, 5vw, 3rem)',
        fontWeight: 900,
        marginBottom: '2.5rem',
        background: 'linear-gradient(90deg, #FF69B4, #9370DB, #FF8C00)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        letterSpacing: '-0.02em',
        textAlign: 'center',
      }}>
        🐱 Dancing Cat 🐱
      </h1>

      {/* Stage */}
      <div
        className="stage-glow"
        style={{
          background: 'rgba(255,255,255,0.05)',
          backdropFilter: 'blur(10px)',
          borderRadius: '24px',
          border: '1px solid rgba(255,255,255,0.15)',
          padding: '3rem 4rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2.5rem',
          position: 'relative',
        }}
      >
        {children}
      </div>

      <p style={{
        marginTop: '2rem',
        color: 'rgba(255,255,255,0.3)',
        fontSize: '0.8rem',
      }}>
        Made with React + CSS Animations
      </p>
    </div>
  );
}
