import { useRef } from "react";
import { useFloatingParticles } from "../hooks/useFloatingParticles";

const config = {
  particleCount: 120,
  minSize: 0.3,
  maxSize: 1,
  minSpeed: 0.05,
  maxSpeed: 0.25,
  minOpacity: 0.5,
  maxOpacity: 0.9,
  driftBias: [-1, 1] as [number, number], // either left or right
  upwardBias: 0.7, // constant upward/downward drift for diagonal movenebt
};

export default function FloatingParticlesCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useFloatingParticles(canvasRef, config);

  return (
    <canvas
      ref={canvasRef}
      className='w-[850px] h-[500px]'
      style={{ width: "100%" }}
    />
  );
}
