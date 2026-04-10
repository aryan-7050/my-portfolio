// src/components/ParticleBackground.jsx
import React, { useEffect, useRef, useCallback } from 'react';
import * as THREE from 'three';
import { useTheme } from '../context/ThemeContext';

const ParticleBackground = () => {
  const containerRef = useRef(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  const { isDarkMode } = useTheme();
  const particlesMeshRef = useRef(null);
  const particlesMaterialRef = useRef(null);
  const rendererRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const animationFrameRef = useRef(null);
  const particlesGeometryRef = useRef(null);

  const handleMouseMove = useCallback((event) => {
    mousePosition.current = {
      x: (event.clientX / window.innerWidth) * 2 - 1,
      y: -(event.clientY / window.innerHeight) * 2 + 1
    };
  }, []);

  const handleResize = useCallback(() => {
    if (cameraRef.current && rendererRef.current) {
      cameraRef.current.aspect = window.innerWidth / window.innerHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    }
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    // Store ref value for cleanup
    const container = containerRef.current;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    cameraRef.current = camera;
    
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    rendererRef.current = renderer;
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    particlesGeometryRef.current = particlesGeometry;
    const particlesCount = 2000;
    
    const posArray = new Float32Array(particlesCount * 3);
    const colorArray = new Float32Array(particlesCount * 3);
    
    // Theme-based colors
    const lightColors = [
      new THREE.Color(0x8B5CF6), // Purple
      new THREE.Color(0x3B82F6), // Blue
      new THREE.Color(0xEC4899), // Pink
    ];
    
    const darkColors = [
      new THREE.Color(0xA78BFA), // Light Purple
      new THREE.Color(0x60A5FA), // Light Blue
      new THREE.Color(0xF472B6), // Light Pink
    ];
    
    const colors = isDarkMode ? darkColors : lightColors;

    for(let i = 0; i < particlesCount * 3; i += 3) {
      const radius = 15;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);
      
      posArray[i] = radius * Math.sin(phi) * Math.cos(theta);
      posArray[i+1] = radius * Math.sin(phi) * Math.sin(theta);
      posArray[i+2] = radius * Math.cos(phi);
      
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      colorArray[i] = randomColor.r;
      colorArray[i+1] = randomColor.g;
      colorArray[i+2] = randomColor.b;
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colorArray, 3));
    
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.08,
      vertexColors: true,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    
    particlesMaterialRef.current = particlesMaterial;
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    particlesMeshRef.current = particlesMesh;
    scene.add(particlesMesh);
    
    camera.position.z = 20;
    camera.position.y = 2;

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    // Animation loop
    const clock = new THREE.Clock();
    
    const animate = () => {
      const elapsedTime = clock.getElapsedTime();
      
      if (particlesMeshRef.current) {
        particlesMeshRef.current.rotation.y = elapsedTime * 0.05;
        particlesMeshRef.current.rotation.x = Math.sin(elapsedTime * 0.1) * 0.1;
        particlesMeshRef.current.rotation.y += mousePosition.current.x * 0.001;
        particlesMeshRef.current.rotation.x += mousePosition.current.y * 0.001;
      }
      
      if (particlesMaterialRef.current) {
        particlesMaterialRef.current.size = 0.08 + Math.sin(elapsedTime * 3) * 0.02;
      }
      
      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
      
      animationFrameRef.current = requestAnimationFrame(animate);
    };
    
    animate();

    // Cleanup function
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      
      if (container && rendererRef.current) {
        container.removeChild(rendererRef.current.domElement);
      }
      
      if (particlesGeometryRef.current) {
        particlesGeometryRef.current.dispose();
      }
      
      if (particlesMaterialRef.current) {
        particlesMaterialRef.current.dispose();
      }
      
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
    };
  }, [isDarkMode, handleMouseMove, handleResize]);

  return (
    <div 
      ref={containerRef} 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
        opacity: isDarkMode ? 0.6 : 0.4
      }}
    />
  );
};

export default ParticleBackground;