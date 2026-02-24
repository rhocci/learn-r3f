export type ObjectProps = {
  color: string;
  scale: number;
  metalness: number;
};

export const InteractiveObject = ({ color, scale, metalness }: ObjectProps) => {
  return (
    <>
      <mesh scale={scale} position={[0, scale / 2, 0]}>
        <boxGeometry />
        <meshStandardMaterial color={color} metalness={metalness} />
      </mesh>
    </>
  );
};
