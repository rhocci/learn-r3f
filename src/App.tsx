import { Canvas } from '@react-three/fiber';

function App() {
  return (
    <div id="canvas-container" style={{ width: '100vw', height: '100vh' }}>
      <Canvas fallback={<div>WebGL 지원 환경이 아닙니다!</div>}>
        <mesh position={[1, 1, 1]}>
          <ambientLight intensity={0.9} />

          <directionalLight
            castShadow
            position={[2.5, 8, 5]}
            shadow-mapSize={[1024, 1024]}
          ></directionalLight>

          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="red" metalness="0.6" roughness="0" />
        </mesh>
      </Canvas>
    </div>
  );
}

export default App;
