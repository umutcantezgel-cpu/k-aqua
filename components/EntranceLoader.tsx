"use client";

import React, { useEffect, useState, useRef, useMemo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, useTexture, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

// A simple component to render the Earth
function Earth() {
  // Using a specular map from three.js examples (water is white, land is black)
  const textureUrl = 'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_specular_2048.jpg';
  const specularMap = useTexture(textureUrl);
  
  const earthRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (earthRef.current) {
      earthRef.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <Sphere ref={earthRef} args={[1, 64, 64]}>
      {/* 
        We use a standard material.
        By using the specular map as the alpha map, we can make water transparent 
        and land solid (we might need to invert it, or just use it as color).
        Actually, specular map is white for water, black for land.
        Let's use it to color the globe monochromatically.
      */}
      <meshBasicMaterial 
        map={specularMap}
        color="#1e293b" // slate-800
        transparent={true}
        opacity={0.8}
        blending={THREE.AdditiveBlending}
      />
    </Sphere>
  );
}

// 3D Particles orbiting the Earth
function WhirlParticles() {
  const pointsRef = useRef<THREE.Points>(null);
  const particleCount = 400;

  const positions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      // Create rings around the globe
      const radius = 1.2 + Math.random() * 0.4;
      const theta = Math.random() * Math.PI * 2;
      const y = (Math.random() - 0.5) * 0.5; // narrow band
      
      pos[i * 3] = radius * Math.cos(theta);
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = radius * Math.sin(theta);
    }
    return pos;
  }, [particleCount]);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y -= delta * 0.3; // rotate opposite to earth
      pointsRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#38bdf8" // sky-400
        size={0.03}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        opacity={0.6}
      />
    </Points>
  );
}

export default function EntranceLoader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // We temporarily remove the sessionStorage check so you can see the animation on every reload.
    // const hasVisited = sessionStorage.getItem('kaqua_visited');
    // if (hasVisited) {
    //   setShow(false);
    //   return;
    // }

    sessionStorage.setItem('kaqua_visited', 'true');
    const timer = setTimeout(() => {
      setShow(false);
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="entrance-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-[#fafafa] flex items-center justify-center"
        >
          {/* Exactly 200x200 Container */}
          <div className="relative w-[200px] h-[200px] flex items-center justify-center">
            
            {/* 2D Aura / CSS Whirl */}
            <div className="absolute inset-0 rounded-full animate-spin [animation-duration:3s] blur-xl opacity-40">
              <div className="w-full h-full rounded-full bg-[conic-gradient(from_0deg,transparent_0deg,#0ea5e9_180deg,transparent_360deg)]" />
            </div>
            <div className="absolute inset-0 rounded-full animate-spin [animation-duration:4s] reverse blur-lg opacity-30">
              <div className="w-full h-full rounded-full bg-[conic-gradient(from_0deg,transparent_0deg,#3b82f6_180deg,transparent_360deg)]" />
            </div>

            {/* 3D WebGL Canvas */}
            <div className="absolute inset-0 z-10">
              <Canvas camera={{ position: [0, 0, 2.8], fov: 45 }}>
                <ambientLight intensity={1} />
                <React.Suspense fallback={null}>
                  <Earth />
                </React.Suspense>
                <WhirlParticles />
              </Canvas>
            </div>

            {/* Inner masking to make it look clean if needed, though canvas is transparent */}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
