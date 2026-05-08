export default function AnimationControls({ isPlaying, onToggle }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
      <button
        onClick={onToggle}
        aria-label={isPlaying ? '애니메이션 정지' : '애니메이션 시작'}
        style={{
          padding: '0.9rem 2.5rem',
          fontSize: '1.1rem',
          fontWeight: 700,
          borderRadius: '50px',
          border: 'none',
          cursor: 'pointer',
          background: isPlaying
            ? 'linear-gradient(135deg, #FF6B6B, #FF8E53)'
            : 'linear-gradient(135deg, #FF69B4, #9370DB)',
          color: '#fff',
          boxShadow: isPlaying
            ? '0 4px 20px rgba(255,107,107,0.5)'
            : '0 4px 20px rgba(255,105,180,0.5)',
          transition: 'all 0.3s ease',
          animation: 'buttonBounce 1.5s ease-in-out infinite',
          minWidth: '160px',
        }}
        onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.08)'; }}
        onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; }}
      >
        {isPlaying ? '⏸ 정지' : '▶ 춤춰!'}
      </button>
      <p style={{
        color: 'rgba(255,255,255,0.6)',
        fontSize: '0.85rem',
        letterSpacing: '0.05em',
      }}>
        {isPlaying ? '고양이가 신나게 춤추는 중! 🎉' : '버튼을 눌러 고양이를 춤추게 하세요'}
      </p>
    </div>
  );
}
