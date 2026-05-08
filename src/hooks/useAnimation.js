import { useState, useCallback } from 'react';

export function useAnimation(initialState = false) {
  const [isPlaying, setIsPlaying] = useState(initialState);

  const toggle = useCallback(() => {
    setIsPlaying(prev => !prev);
  }, []);

  const play = useCallback(() => setIsPlaying(true), []);
  const stop = useCallback(() => setIsPlaying(false), []);

  return { isPlaying, toggle, play, stop };
}
