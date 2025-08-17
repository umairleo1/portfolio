import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeBackground: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<{
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    cubes: THREE.Mesh[];
    animationId: number;
  } | null>(null);

  useEffect(() => {
    const currentMountRef = mountRef.current;
    if (!currentMountRef) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    currentMountRef.appendChild(renderer.domElement);

    // Create grid of cubes
    const cubes: THREE.Mesh[] = [];
    const gridSize = 15;
    const spacing = 3;
    const cubeGeometry = new THREE.BoxGeometry(0.8, 0.8, 0.8);

    // Enhanced materials with different colors
    const materials = [
      new THREE.MeshLambertMaterial({
        color: 0x66d9ed,
        transparent: true,
        opacity: 0.7,
        emissive: 0x001122,
      }),
      new THREE.MeshLambertMaterial({
        color: 0x4a90e2,
        transparent: true,
        opacity: 0.6,
        emissive: 0x001133,
      }),
      new THREE.MeshLambertMaterial({
        color: 0x5c7cfa,
        transparent: true,
        opacity: 0.5,
        emissive: 0x001144,
      }),
    ];

    for (let x = -gridSize; x <= gridSize; x += 2) {
      for (let z = -gridSize; z <= gridSize; z += 2) {
        const material =
          materials[Math.floor(Math.random() * materials.length)];
        const cube = new THREE.Mesh(cubeGeometry, material);

        cube.position.set(x * spacing, Math.random() * 2 - 1, z * spacing);

        // Random rotation
        cube.rotation.x = Math.random() * Math.PI;
        cube.rotation.y = Math.random() * Math.PI;
        cube.rotation.z = Math.random() * Math.PI;

        scene.add(cube);
        cubes.push(cube);
      }
    }

    // Atmospheric lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.3);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x66d9ed, 1, 100);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);

    const spotLight = new THREE.SpotLight(
      0x4a90e2,
      0.8,
      0,
      Math.PI / 6,
      0.25,
      1
    );
    spotLight.position.set(-20, 20, 10);
    spotLight.target.position.set(0, 0, 0);
    scene.add(spotLight);
    scene.add(spotLight.target);

    // Additional rim lighting
    const rimLight = new THREE.DirectionalLight(0x66d9ed, 0.3);
    rimLight.position.set(-1, 1, -1);
    scene.add(rimLight);

    // Camera position
    camera.position.set(0, 15, 25);
    camera.lookAt(0, 0, 0);

    // Animation loop
    let time = 0;
    const animate = () => {
      time += 0.01;

      cubes.forEach((cube) => {
        const x = cube.position.x;
        const z = cube.position.z;

        // Wave motion using sine function
        const wave1 = Math.sin(time + x * 0.1 + z * 0.1) * 2;
        const wave2 = Math.cos(time * 0.7 + x * 0.05 + z * 0.15) * 1.5;
        cube.position.y = wave1 + wave2;

        // Gentle rotation
        cube.rotation.x += 0.003;
        cube.rotation.y += 0.002;
        cube.rotation.z += 0.001;

        // Pulsing opacity
        const distance = Math.sqrt(x * x + z * z);
        const pulse = Math.sin(time * 2 + distance * 0.1) * 0.2 + 0.8;
        if (cube.material instanceof THREE.MeshLambertMaterial) {
          cube.material.opacity = pulse * 0.6;
        }
      });

      // Camera subtle movement
      camera.position.x = Math.sin(time * 0.2) * 5;
      camera.position.z = 25 + Math.cos(time * 0.3) * 3;
      camera.lookAt(0, 0, 0);

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

        // Cleanup
        sceneRef.current.cubes.forEach((cube) => {
          scene.remove(cube);
          cube.geometry.dispose();
          if (cube.material instanceof THREE.Material) {
            cube.material.dispose();
          }
        });

        scene.clear();
        renderer.dispose();

        if (currentMountRef && renderer.domElement) {
          currentMountRef.removeChild(renderer.domElement);
        }
      }
    };
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
        opacity: 0.8,
      }}
    />
  );
};

export default ThreeBackground;
