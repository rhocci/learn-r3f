import { useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';
import { MathUtils, Mesh } from 'three';

export type ObjectProps = {
  color: string;
  scale: number;
  metalness: number;
};

export const InteractiveObject = ({ color, scale, metalness }: ObjectProps) => {
  const [hovered, setHovered] = useState<boolean>(false);
  const meshRef = useRef<Mesh>(null!);

  useFrame(() => {
    const mesh = meshRef.current;
    const targetScale = hovered ? scale * 1.05 : scale;

    // lerp(x: 현재값 y: 목표값 z: 속도)
    mesh.scale.x = MathUtils.lerp(mesh.scale.x, targetScale, 0.1);
    mesh.scale.y = MathUtils.lerp(mesh.scale.y, targetScale, 0.1);
    mesh.scale.z = MathUtils.lerp(mesh.scale.z, targetScale, 0.1);
  });

  return (
    <>
      <mesh
        ref={meshRef}
        castShadow
        position={[0, scale / 2, 0]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <boxGeometry />
        <meshStandardMaterial color={color} metalness={metalness} />
      </mesh>
    </>
  );
};
