import { Grid, OrbitControls } from '@react-three/drei';
import { useControls } from 'leva';

export const Experience: React.FC = () => {
  const { grid, color, scale } = useControls({
    grid: true,
    color: '#888',
    scale: {
      value: 1,
      min: 0.1,
      max: 3,
      step: 0.1,
    },
  });

  return (
    <>
      <OrbitControls minDistance={1} maxDistance={10} />
      <ambientLight intensity={0.8} />
      <directionalLight />

      <Grid
        visible={grid}
        infiniteGrid
        fadeDistance={30}
        sectionColor={'#777'}
        cellSize={1}
        sectionSize={5}
      />

      <mesh scale={scale}>
        <boxGeometry />
        <meshStandardMaterial color={color} />
      </mesh>
    </>
  );
};
