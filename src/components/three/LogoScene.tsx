'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Environment, Float } from '@react-three/drei'
import * as THREE from 'three'

function LogoGeometry() {
  const meshRef = useRef<THREE.Mesh>(null)
  
  const material = useMemo(() => 
    new THREE.MeshStandardMaterial({
      color: 0x2A2723,
      metalness: 0.7,
      roughness: 0.3,
    }),
    []
  )

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.1
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} material={material} position={[0, 0, 0]}>
        <boxGeometry args={[2, 2, 0.3]} />
      </mesh>
    </Float>
  )
}

function Particles() {
  const particlesRef = useRef<THREE.Points>(null)
  
  const particlesGeometry = useMemo(() => {
    const count = 500
    const positions = new Float32Array(count * 3)
    
    for (let i = 0; i < count * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 20
    }
    
    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    return geometry
  }, [])

  const particlesMaterial = useMemo(() => 
    new THREE.PointsMaterial({
      color: 0xB59B73,
      size: 0.02,
      transparent: true,
      opacity: 0.6,
    }),
    []
  )

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05
    }
  })

  return <points ref={particlesRef} geometry={particlesGeometry} material={particlesMaterial} />
}

export function LogoScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 50 }}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#B59B73" />
      
      <LogoGeometry />
      <Particles />
      
      <Environment preset="city" />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
    </Canvas>
  )
}
