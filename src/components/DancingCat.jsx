import { useEffect, useState } from 'react';
import catSvg from '../assets/images/cat.svg';

const NOTES = ['♪', '♫', '♩', '♬', '🎵', '🎶'];
const NOTE_COLORS = ['#FF69B4', '#9370DB', '#FF8C00', '#00CED1', '#FF6347', '#32CD32'];

function MusicNote({ id, onDone }) {
  const note = NOTES[id % NOTES.length];
  const color = NOTE_COLORS[id % NOTE_COLORS.length];
  const left = 20 + (id * 37) % 60;
  const delay = (id * 0.3) % 1.5;
  const duration = 1.8 + (id % 3) * 0.4;

  return (
    <span
      style={{
        position: 'absolute',
        left: `${left}%`,
        bottom: '110%',
        fontSize: '1.4rem',
        color,
        animation: `floatNote ${duration}s ease-out ${delay}s forwards`,
        pointerEvents: 'none',
        userSelect: 'none',
        zIndex: 10,
      }}
      onAnimationEnd={onDone}
    >
      {note}
    </span>
  );
}

export default function DancingCat({ isPlaying }) {
  const [notes, setNotes] = useState([]);
  const [nextId, setNextId] = useState(0);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setNotes(prev => [...prev, nextId]);
      setNextId(id => id + 1);
    }, 400);
    return () => clearInterval(interval);
  }, [isPlaying, nextId]);

  const removeNote = (id) => {
    setNotes(prev => prev.filter(n => n !== id));
  };

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      {notes.map(id => (
        <MusicNote key={id} id={id} onDone={() => removeNote(id)} />
      ))}
      <img
        src={catSvg}
        alt="Dancing cat"
        className={isPlaying ? 'dancing' : 'idle'}
        style={{
          width: '200px',
          height: '220px',
          filter: isPlaying
            ? 'drop-shadow(0 0 16px #FF69B4) drop-shadow(0 0 32px #9370DB)'
            : 'drop-shadow(0 4px 8px rgba(0,0,0,0.4))',
          transition: 'filter 0.4s ease',
          display: 'block',
        }}
      />
    </div>
  );
}
