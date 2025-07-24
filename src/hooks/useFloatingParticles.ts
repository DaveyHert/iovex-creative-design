import { useEffect, useRef } from "react";

/** Utility to get a random float between two values */
const randBetween = (min: number, max: number) =>
  min + Math.random() * (max - min);

/** Configuration type for controlling particle behavior. */
type ParticleConfig = {
  particleCount: number;
  minSize: number;
  maxSize: number;
  minSpeed: number;
  maxSpeed: number;
  minOpacity: number;
  maxOpacity: number;
  driftBias: [number, number];
  upwardBias: number;
};

/** Represents a single particle in the system. */
class Particle {
  private system: ParticleSystem;
  x = 0;
  y = 0;
  size = 1;
  speedX = 0;
  speedY = 0;
  baseOpacity = 1;
  opacity = 1;
  flicker = false;
  flickerOffset = 0;

  constructor(system: ParticleSystem) {
    this.system = system;
    this.initialize();
  }

  initialize() {
    const { width, height, config } = this.system;

    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.size = randBetween(config.minSize, config.maxSize);

    const speedMag = randBetween(config.minSpeed, config.maxSpeed);
    const direction = Math.random() < 0.5 ? -1 : 1;
    this.speedX = direction * speedMag;
    this.speedY = config.upwardBias * speedMag;

    this.baseOpacity = randBetween(config.minOpacity, config.maxOpacity);
    this.flicker = this.size <= config.minSize + 0.2;
    this.flickerOffset = Math.random() * 1000;
    this.opacity = this.baseOpacity;
  }

  update(time: number) {
    this.x += this.speedX;
    this.y += this.speedY;

    const { width, height } = this.system;
    if (this.x < -this.size) this.x = width + this.size;
    if (this.x > width + this.size) this.x = -this.size;
    if (this.y < -this.size) this.y = height + this.size;
    if (this.y > height + this.size) this.y = -this.size;

    if (this.flicker) {
      const flickerEffect = Math.sin(time * 5 + this.flickerOffset) * 0.25;
      this.opacity = Math.max(0, Math.min(1, this.baseOpacity + flickerEffect));
    } else {
      this.opacity = this.baseOpacity;
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255,255,255,${this.opacity})`;
    ctx.fill();
  }
}

/** Manages the particle system on a given canvas. */
class ParticleSystem {
  canvas: HTMLCanvasElement;
  config: ParticleConfig;
  width = 0;
  height = 0;
  particles: Particle[] = [];
  ctx: CanvasRenderingContext2D;

  constructor(canvas: HTMLCanvasElement, config: ParticleConfig) {
    const ctx = canvas.getContext("2d");
    if (!ctx) throw new Error("Canvas context is null");
    this.ctx = ctx;
    this.canvas = canvas;
    this.config = config;

    this.resize();
    this.particles = Array.from(
      { length: config.particleCount },
      () => new Particle(this)
    );
  }

  resize() {
    this.canvas.width = this.canvas.clientWidth;
    this.canvas.height = this.canvas.clientHeight;
    this.width = this.canvas.width;
    this.height = this.canvas.height;
  }

  update(time: number) {
    this.particles.forEach((p) => p.update(time));
  }

  draw() {
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.particles.forEach((p) => p.draw(this.ctx));
  }
}

/** Hook that attaches floating particle animation to a canvas. */
export function useFloatingParticles(
  canvasRef: React.RefObject<HTMLCanvasElement | null>,
  config: ParticleConfig
) {
  const animationRef = useRef<number | null>(null);
  const resizeObserverRef = useRef<ResizeObserver | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const system = new ParticleSystem(canvas, config);

    const animate = (time: number) => {
      const t = time * 0.001;
      system.update(t);
      system.draw();
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    // Watch for canvas resizing
    resizeObserverRef.current = new ResizeObserver(() => {
      system.resize();
    });
    resizeObserverRef.current.observe(canvas);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      resizeObserverRef.current?.disconnect();
    };
  }, [canvasRef, config]);
}
