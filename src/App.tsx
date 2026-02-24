import { Canvas } from '@react-three/fiber';
import { Experience } from './components/Experience';
import * as s from './App.css';

export default function App() {
  return (
    <div className={s.canvasContainer}>
      <Canvas>
        <Experience />
      </Canvas>
    </div>
  );
}
