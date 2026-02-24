import { Canvas } from '@react-three/fiber';
import { Experience } from './components/Experience';
import * as s from './App.css';
import { Grid } from '@react-three/drei';

export default function App() {
  return (
    <div className={s.canvasContainer}>
      <Canvas>
        <Grid />
        <Experience />
      </Canvas>
    </div>
  );
}
