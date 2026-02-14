"use client";

import { useEffect, useRef } from "react";

const NeonCursor = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let particlesArray = [];
    let hue = 0;
    let animationId;
    const mouse = { x: undefined, y: undefined };

    // Set canvas size
    const setSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setSize();

    // Particle class
    class Particle {
      constructor() {
        this.x = mouse.x;
        this.y = mouse.y;
        this.size = Math.random() * 10 + 2;
        this.speedX = Math.random() * 6 - 3;
        this.speedY = Math.random() * 6 - 3;
        this.color = `hsl(${hue}, 100%, 50%)`;
        this.gravity = 0.5;
        this.friction = 0.95;
        this.isCircle = Math.random() > 0.5;
        this.angle = Math.random() * 360;
        this.spinSpeed = Math.random() * 0.2 - 0.1;
      }

      update() {
        this.speedY += this.gravity;
        this.x += this.speedX;
        this.y += this.speedY;
        this.angle += this.spinSpeed;

        // Floor bounce
        if (this.y + this.size > canvas.height) {
          this.y = canvas.height - this.size;
          this.speedY *= -0.6;
        }

        // Wall bounce
        if (this.x + this.size > canvas.width || this.x - this.size < 0) {
          this.speedX *= -1;
        }

        this.speedX *= this.friction;
        this.speedY *= this.friction;

        if (this.size > 0.2) this.size -= 0.1;
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 15;
        ctx.shadowColor = this.color;
        ctx.beginPath();

        if (this.isCircle) {
          ctx.arc(0, 0, this.size, 0, Math.PI * 2);
        } else {
          ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
        }
        ctx.fill();
        ctx.restore();
      }
    }

    // Create particles
    const createParticles = (amount) => {
      if (mouse.x === undefined) return;
      for (let i = 0; i < amount; i++) {
        particlesArray.push(new Particle());
      }
    };

    // Event handlers
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      createParticles(3);
    };

    const handleClick = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      createParticles(15);
    };

    const handleTouchStart = (e) => {
      if (e.touches.length > 0) {
        mouse.x = e.touches[0].clientX;
        mouse.y = e.touches[0].clientY;
        createParticles(5);
      }
    };

    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        mouse.x = e.touches[0].clientX;
        mouse.y = e.touches[0].clientY;
        createParticles(3);
      }
    };

    // Animation loop - clear canvas completely (transparent)
    const animate = () => {
      // Clear canvas completely (transparent background)
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = particlesArray.length - 1; i >= 0; i--) {
        particlesArray[i].update();
        particlesArray[i].draw();

        if (particlesArray[i].size <= 0.3) {
          particlesArray.splice(i, 1);
        }
      }

      hue += 2;
      if (hue >= 360) hue = 0;

      animationId = requestAnimationFrame(animate);
    };

    // Add listeners
    window.addEventListener("resize", setSize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleClick);
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    // Start animation
    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", setSize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 9999,
        pointerEvents: "none",
        background: "transparent",
      }}
    />
  );
};

export default NeonCursor;
