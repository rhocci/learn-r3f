import { Canvas } from '@react-three/fiber';
import { Experience } from './components/Experience';
import * as s from './App.css';
import { Grid } from '@react-three/drei';

export default function App() {
  return (
    <div className={s.canvasContainer}>
      <Canvas shadows="soft">
        <Grid
          infiniteGrid
          fadeDistance={25}
          sectionColor={'#777'}
          cellSize={1}
          sectionSize={5}
        />

        <Experience />
      </Canvas>
    </div>
  );
}
