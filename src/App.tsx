import { Canvas } from '@react-three/fiber';
import { Experience } from './components/Experience';
import * as s from './App.css';
import { Grid } from '@react-three/drei';

export default function App() {
  return (
    <div className={s.canvasContainer}>
      <Canvas shadows camera={{ position: [5, 5, 5] }}>
        <Experience />

        <Grid
          infiniteGrid
          fadeDistance={25}
          sectionColor={'#777'}
          cellSize={1}
          sectionSize={5}
        />

        <mesh
          receiveShadow
          position={[0, -0.01, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <planeGeometry args={[50, 50]} />
          <shadowMaterial transparent opacity={0.3} color="black" />
        </mesh>
      </Canvas>
    </div>
  );
}
