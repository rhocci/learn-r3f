import { Canvas } from '@react-three/fiber';

function App() {
  return (
    <div id="canvas-container">
      <Canvas fallback={<div>WebGL 지원 환경이 아닙니다!</div>}>
        <mesh>
          <ambientLight intensity={0.1} />

          <boxGeometry args={[5, 5, 5]} />
          <meshStandardMaterial color="hotpink" />
        </mesh>
      </Canvas>
    </div>
  );
}

export default App;
