import { Canvas } from '@react-three/fiber';

function App() {
  return (
    <div id="canvas-container">
      <Canvas>
        <mesh>
          {/* new THREE.BoxGeometry(2, 2, 2) 와 같음 */}
          <boxGeometry args={[2, 2, 2]} />
          <meshStandardMaterial />
        </mesh>
      </Canvas>
    </div>
  );
}

export default App;
