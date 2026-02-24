import { useState } from 'react';

export type ObjectProps = {
  color: string;
  scale: number;
  metalness: number;
};

export const InteractiveObject = ({ color, scale, metalness }: ObjectProps) => {
  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <>
      <mesh
        scale={hovered ? scale * 1.1 : scale}
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
