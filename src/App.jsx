import './styles/global.css';
import './styles/animations.css';
import Layout from './components/Layout';
import DancingCat from './components/DancingCat';
import AnimationControls from './components/AnimationControls';
import { useAnimation } from './hooks/useAnimation';
import { useEffect } from 'react';

export default function App() {
  const { isPlaying, toggle } = useAnimation(false);

  useEffect(() => {
    const handler = (e) => {
      if (e.code === 'Space' && e.target === document.body) {
        e.preventDefault();
        toggle();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [toggle]);

  return (
    <Layout>
      <DancingCat isPlaying={isPlaying} />
      <AnimationControls isPlaying={isPlaying} onToggle={toggle} />
    </Layout>
  );
}
