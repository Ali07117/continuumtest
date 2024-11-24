import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const FluidBubble = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 2;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Create the fluid-like bubble geometry
    const geometry = new THREE.SphereGeometry(0.5, 64, 64);

    // Vertex Shader (makes the fluid move based on mouse)
    const vertexShader = `
      varying vec2 vUv;
      varying vec3 vPosition;
      uniform float uTime;
      uniform vec2 uMouse;

      void main() {
        vUv = uv;
        vPosition = position;
        vec3 transformedPosition = position;

        // Fluid movement effect based on mouse position
        transformedPosition += normal * sin(uTime * 2.0 + position.y * 5.0) * 0.2;
        transformedPosition += normal * cos(uTime * 2.0 + position.x * 5.0) * 0.2;

        // Use mouse position to control the bubble's position
        transformedPosition.x += (uMouse.x - 0.5) * 1.5;  // Change scale of movement
        transformedPosition.y += (uMouse.y - 0.5) * 1.5;

        gl_Position = projectionMatrix * modelViewMatrix * vec4(transformedPosition, 1.0);
      }
    `;

    // Fragment Shader (solid color #04097A)
    const fragmentShader = `
      varying vec2 vUv;
      varying vec3 vPosition;
      uniform vec2 uMouse;
      uniform float uTime;
      uniform float uAlpha;

      void main() {
        // Distance from center of sphere for fluid look
        float dist = distance(vUv, vec2(0.5));

        // Apply blur and softness based on distance and time
        float alpha = smoothstep(0.5, 0.48, dist) * uAlpha;

        // Set the fluid color to #04097A (RGB: 4, 9, 122)
        vec3 fluidColor = vec3(4.0 / 255.0, 9.0 / 255.0, 122.0 / 255.0);

        // Add blur effect by adding random noise to the color
        vec3 blurredColor = fluidColor + vec3(sin(uTime * 0.5) * 0.05, cos(uTime * 0.5) * 0.05, 0.0);
        
        gl_FragColor = vec4(blurredColor, alpha);
      }
    `;

    // Create material with shaders
    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        uMouse: { value: new THREE.Vector2(0.5, 0.5) },
        uTime: { value: 0 },
        uAlpha: { value: 0.0 },  // Start with the bubble invisible
      },
      transparent: true,
    });

    const bubble = new THREE.Mesh(geometry, material);
    scene.add(bubble);

    // Track mouse movement
    let isMouseMoving = false;
    let fadeOutTimeout = null;
    let fadeInTimeout = null;

    const handleMouseMove = (event) => {
      const x = (event.clientX / window.innerWidth);
      const y = (event.clientY / window.innerHeight);

      material.uniforms.uMouse.value.set(x, y);

      // Update bubble position based on mouse coordinates
      bubble.position.x = (x * 2 - 1) * 1.5;  // Normalize and scale for movement
      bubble.position.y = -(y * 2 - 1) * 1.5;

      // Fade in effect when mouse moves
      if (!isMouseMoving) {
        isMouseMoving = true;
        fadeIn(); // Start fade-in effect
      }

      // Clear any existing fade-out timeout
      if (fadeOutTimeout) {
        clearTimeout(fadeOutTimeout);
      }
    };

    const fadeIn = () => {
      const fadeDuration = 0.4; // Fade duration in seconds
      const startTime = Date.now();

      const fade = () => {
        const elapsed = (Date.now() - startTime) / 1000;  // Convert to seconds
        if (elapsed < fadeDuration) {
          material.uniforms.uAlpha.value = elapsed / fadeDuration;  // Increase alpha
          requestAnimationFrame(fade);
        } else {
          material.uniforms.uAlpha.value = 1.0;  // Ensure alpha is 1 after the fade
        }
      };
      fade();
    };

    const fadeOut = () => {
      const fadeDuration = 0.4; // Fade duration in seconds
      const startTime = Date.now();

      const fade = () => {
        const elapsed = (Date.now() - startTime) / 1000;  // Convert to seconds
        if (elapsed < fadeDuration) {
          material.uniforms.uAlpha.value = 1.0 - (elapsed / fadeDuration);  // Decrease alpha
          requestAnimationFrame(fade);
        } else {
          material.uniforms.uAlpha.value = 0.0;  // Ensure alpha is 0 after the fade
        }
      };
      fade();
    };

    const handleMouseStop = () => {
      // Start fading out after 50ms of no mouse movement
      fadeOutTimeout = setTimeout(fadeOut, 50);
      isMouseMoving = false;
    };

    // Detect when mouse stops
    let mouseStopTimeout;
    const mouseMoveHandler = (event) => {
      clearTimeout(mouseStopTimeout);
      handleMouseMove(event);

      // Set a short timeout to detect when the mouse stops
      mouseStopTimeout = setTimeout(handleMouseStop, 50);  // 50ms for quick response
    };

    window.addEventListener("mousemove", mouseMoveHandler);

    // Resize handling
    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", handleResize);

    // Animation loop
    const animate = () => {
      material.uniforms.uTime.value += 0.02;  // Speed up the deformation
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", mouseMoveHandler);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      containerRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} className="w-full h-full fixed top-0 left-0"></div>;
};

export default FluidBubble;
