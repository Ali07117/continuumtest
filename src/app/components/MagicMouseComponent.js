import React, { useEffect, useRef } from 'react';

const MagicMouseComponent = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = []; // Store the particles for the gas effect
    let bubble = null; // Store the bubble object

    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 50 + 20; // Increased size range for bigger particles
        this.color = '#04097a'; // Gas color (deep blue)
        this.velocity = {
          x: (Math.random() - 0.5) * 5, // Increased horizontal velocity for wider dispersion
          y: (Math.random() - 0.5) * 5, // Increased vertical velocity
        };
        this.alpha = 0.5; // Semi-transparent for gas
        this.lifeSpan = 100; // Particles will fade out over time
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha; // Apply transparency
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.restore();
      }

      update() {
        this.draw();
        this.x += this.velocity.x; // Move the particle horizontally
        this.y += this.velocity.y; // Move the particle vertically
        this.alpha -= 0.02; // Fade out the particle over time
        if (this.alpha <= 0 || this.size <= 1) {
          this.lifeSpan = 0; // End the particle's life when it fades too much
        }
      }
    }

    class Bubble {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = 15; // Small size for the bubble
        this.color = 'white'; // White color for the bubble
        this.alpha = 1; // Full opacity
        this.lifeSpan = 60; // Bubbles will stay for a short time
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha; // Apply transparency
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.restore();
      }

      update() {
        this.draw();
        this.alpha -= 0.02; // Fade out the bubble over time
        if (this.alpha <= 0) {
          this.lifeSpan = 0; // End the bubble's life when it fades out
        }
      }
    }

    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;

      // Create new particles when the mouse moves
      for (let i = 0; i < 5; i++) {
        particles.push(new Particle(e.clientX, e.clientY));
      }

      // Create the bubble following the mouse
      bubble = new Bubble(e.clientX, e.clientY);
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and remove particles based on their lifespan
      for (let i = 0; i < particles.length; i++) {
        if (particles[i].lifeSpan <= 0) {
          particles.splice(i, 1); // Remove the particle
          i--;
        } else {
          particles[i].update(); // Update the particle's position and fading
        }
      }

      // Update and draw the bubble
      if (bubble) {
        bubble.update();
        if (bubble.lifeSpan <= 0) {
          bubble = null; // Remove the bubble after it fades out
        }
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section
      id="container"
      className="flex z-[2] flex-col justify-center items-center w-full h-full overflow-hidden relative"
    >
      <canvas ref={canvasRef} className="w-full h-full"></canvas>
    </section>
  );
};

export default MagicMouseComponent;
