import React, { useEffect, useRef, useState } from 'react';

const ThreeBackground: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<{
    scene: any;
    camera: any;
    renderer: any;
    cubes: any[];
    animationId: number;
  } | null>(null);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReducedMotion) return;

    // Lazy load Three.js after page load for instant startup
    const loadThreeJS = async () => {
      // Wait for page to be interactive
      await new Promise((resolve) => {
        if (document.readyState === 'complete') {
          setTimeout(resolve, 1000); // Additional delay for smooth startup
        } else {
          window.addEventListener('load', () => setTimeout(resolve, 1000), {
            once: true,
          });
        }
      });

      const THREE = await import('three');
      const currentMountRef = mountRef.current;
      if (!currentMountRef) return;

      // Scene setup with reduced complexity
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );

      const renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: false, // Disabled for better performance
        powerPreference: 'low-power', // Changed to low-power
      });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5)); // Reduced pixel ratio
      renderer.setClearColor(0x000000, 0);
      currentMountRef.appendChild(renderer.domElement);

      // Significantly reduced grid of cubes
      const cubes: any[] = [];
      const gridSize = 8; // Reduced from 15 to 8
      const spacing = 4; // Increased spacing
      const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);

      // Simplified materials - only one for better performance
      const material = new THREE.MeshBasicMaterial({
        color: 0x66d9ed,
        transparent: true,
        opacity: 0.4,
      });

      // Reduced grid: 8x8 instead of 15x15 (64 vs 225 cubes)
      for (let x = -gridSize; x <= gridSize; x += 3) {
        for (let z = -gridSize; z <= gridSize; z += 3) {
          const cube = new THREE.Mesh(cubeGeometry, material.clone());

          // Start at a consistent base position (no random Y)
          cube.position.set(x * spacing, 0, z * spacing);
          cube.rotation.y = Math.random() * Math.PI;

          // Start invisible for smooth fade-in
          cube.material.opacity = 0;

          scene.add(cube);
          cubes.push(cube);
        }
      }

      // Simplified lighting - only ambient light
      const ambientLight = new THREE.AmbientLight(0x66d9ed, 0.6);
      scene.add(ambientLight);

      // Camera position
      camera.position.set(0, 15, 25);
      camera.lookAt(0, 0, 0);

      // Smooth entrance animation
      let time = 0;
      let fadeInProgress = 0;
      const fadeInDuration = 180; // 3 seconds at 60fps

      const animate = () => {
        time += 0.005;

        // Gradual fade-in
        if (fadeInProgress < fadeInDuration) {
          fadeInProgress++;

          cubes.forEach((cube, index) => {
            // Staggered fade-in for natural appearance
            const delay = index * 3; // Stagger by 3 frames per cube
            const cubeAlpha = Math.max(
              0,
              Math.min(1, (fadeInProgress - delay) / 60)
            );

            if (cube.material) {
              cube.material.opacity = cubeAlpha * 0.4; // Target opacity of 0.4
            }

            // Smooth entry animation
            if (cubeAlpha > 0) {
              const wave = Math.sin(time + index * 0.1) * 1.5 * cubeAlpha;
              cube.position.y = wave;
              cube.rotation.y += 0.002;
            }
          });
        } else {
          // Normal animation after fade-in complete
          cubes.forEach((cube, index) => {
            const wave = Math.sin(time + index * 0.1) * 1.5;
            cube.position.y = wave;
            cube.rotation.y += 0.002;
          });
        }

        renderer.render(scene, camera);
        const animationId = requestAnimationFrame(animate);

        if (sceneRef.current) {
          sceneRef.current.animationId = animationId;
        }
      };

      sceneRef.current = {
        scene,
        camera,
        renderer,
        cubes,
        animationId: 0,
      };

      setIsLoaded(true);
      animate();

      // Handle resize
      const handleResize = () => {
        if (!sceneRef.current) return;
        const { camera, renderer } = sceneRef.current;
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
        if (sceneRef.current) {
          cancelAnimationFrame(sceneRef.current.animationId);
          sceneRef.current.cubes.forEach((cube: any) => {
            scene.remove(cube);
            cube.geometry.dispose();
            cube.material.dispose();
          });
          scene.clear();
          renderer.dispose();
          if (currentMountRef && renderer.domElement) {
            currentMountRef.removeChild(renderer.domElement);
          }
        }
      };
    };

    loadThreeJS();
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        pointerEvents: 'none',
        opacity: isLoaded ? 0.8 : 0,
        transition: 'opacity 1.5s ease-out',
        background: !isLoaded
          ? 'radial-gradient(ellipse at center, rgba(102, 217, 237, 0.02) 0%, transparent 70%)'
          : 'transparent',
      }}
    />
  );
};

export default ThreeBackground;
