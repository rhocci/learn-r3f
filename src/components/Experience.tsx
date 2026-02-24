import { Grid, OrbitControls } from '@react-three/drei';
import { useControls } from 'leva';
import { InteractiveObject } from './InteractiveObject';

export const Experience: React.FC = () => {
  const option = useControls({
    color: '#888',
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

      <Grid
        infiniteGrid
        fadeDistance={30}
        sectionColor={'#777'}
        cellSize={1}
        sectionSize={5}
      />

      <InteractiveObject
        color={option.color}
        scale={option.scale}
        metalness={option.metalness}
      />
    </>
  );
};
