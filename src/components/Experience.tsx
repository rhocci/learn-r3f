import { OrbitControls } from '@react-three/drei';
import { useControls } from 'leva';
import { InteractiveObject } from './InteractiveObject';

export const Experience: React.FC = () => {
  const values = useControls({
    color: '#739bb4',
    scale: {
      value: 1,
      min: 0.1,
      max: 3,
      step: 0.1,
    },
    metalness: {
      value: 0,
      min: 0,
      max: 1,
      step: 0.1,
    },
  });

  return (
    <>
      <OrbitControls minDistance={1} maxDistance={10} />

      <ambientLight intensity={0.3} />
      <directionalLight castShadow position={[5, 10, 5]} intensity={1.5} />
      <pointLight castShadow position={[2, 3, 2]} intensity={10} />

      <InteractiveObject {...values} />
    </>
  );
};
