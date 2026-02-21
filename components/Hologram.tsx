"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere, OrbitControls, Stars } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

// --- OPTIMIZED CORE FOR RYZEN 5 ---
const AnimatedSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();
    // Slow smooth rotation
    meshRef.current.rotation.x = time * 0.15;
    meshRef.current.rotation.y = time * 0.2;
  });

  return (
    // Optimized to save RAM
    <Sphere args={[1, 64, 64]} scale={2.2} ref={meshRef}>
      <MeshDistortMaterial
        color="#6d28d9"    // Deep Purple
        attach="material"
        distort={0.4}      // Distortion level (Safe for Vega 8)
        speed={1.5}        // Movement speed
        roughness={0.2}
        metalness={0.9}
      />
    </Sphere>
  );
};

// --- OUTER RING ---
const GlowingRing = () => {
  const ringRef = useRef<THREE.Mesh>(null);
  
  useFrame(() => {
    if (!ringRef.current) return;
    ringRef.current.rotation.z -= 0.005; // Very slow spin
  });

  return (
    <mesh ref={ringRef} rotation={[80, 0, 0]}>
      <torusGeometry args={[3.2, 0.05, 16, 100]} />
      <meshStandardMaterial color="#22d3ee" emissive="#22d3ee" emissiveIntensity={1.5} />
    </mesh>
  );
};

export default function Hologram() {
  return (
    <div className="absolute inset-0 z-0 h-screen w-full">
      <Canvas camera={{ position: [0, 0, 6] }} dpr={[1, 1.5]}>
        {/* Simplified Stars - Less count for performance */}
        <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#a78bfa" />
        <AnimatedSphere />
        <GlowingRing />
        {/* Zoom Disable kar diya taaki user galti se glitch na kare */}
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
}