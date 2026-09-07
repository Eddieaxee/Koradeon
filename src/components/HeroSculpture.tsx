'use client'

import { useRef, useMemo, useEffect, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, Environment, Float } from '@react-three/drei'
import * as THREE from 'three'

// Performance-optimized sculpture component
function Sculpture() {
  const meshRef = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)
  
  // Create parametric geometry
  const geometry = useMemo(() => {
    const geo = new THREE.TorusKnotGeometry(1.5, 0.5, 200, 32, 2, 3)
    return geo
  }, [])

  // Premium metallic material
  const material = useMemo(() => 
    new THREE.MeshStandardMaterial({
      color: 0xC9B58E,
      metalness: 0.85,
      roughness: 0.25,
      envMapIntensity: 1.8,
    }),
    []
  )

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Smooth rotation
      meshRef.current.rotation.x += delta * 0.15
      meshRef.current.rotation.y += delta * 0.2
      
      // Subtle hover effect
      const targetScale = hovered ? 1.1 : 1
      meshRef.current.scale.lerp(
        new THREE.Vector3(targetScale, targetScale, targetScale),
        0.1
      )
    }
  })

  return (
    <Float
      speed={2}
      rotationIntensity={0.5}
      floatIntensity={1}
    >
      <mesh
        ref={meshRef}
        geometry={geometry}
        material={material}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      />
    </Float>
  )
}

// Particle system for ambient atmosphere
function Particles() {
  const particlesRef = useRef<THREE.Points>(null)
  
  const particlesGeometry = useMemo(() => {
    const count = 1000
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      
      // Spherical distribution
      const radius = 5 + Math.random() * 10
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      
      positions[i3] = radius * Math.sin(phi) * Math.cos(theta)
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      positions[i3 + 2] = radius * Math.cos(phi)
      
      // Champagne/gold colors
      colors[i3] = 0.71 // R
      colors[i3 + 1] = 0.61 // G
      colors[i3 + 2] = 0.45 // B
    }
    
    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))
    return geometry
  }, [])

  const particlesMaterial = useMemo(() => 
    new THREE.PointsMaterial({
      size: 0.03,
      vertexColors: true,
      transparent: true,
      opacity: 0.6,
      sizeAttenuation: true
    }),
    []
  )

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.02
      particlesRef.current.rotation.x = state.clock.elapsedTime * 0.01
    }
  })

  return <points ref={particlesRef} geometry={particlesGeometry} material={particlesMaterial} />
}

// Lighting setup
function Lighting() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight
        position={[10, 10, 5]}
        intensity={1.5}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#B59B73" />
      <spotLight
        position={[0, 10, 0]}
        angle={0.3}
        penumbra={1}
        intensity={1}
        castShadow
      />
    </>
  )
}

// Mouse follow effect
function MouseFollow() {
  const { viewport, camera } = useThree()
  const targetPosition = useRef(new THREE.Vector3())
  
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1
      const y = -(event.clientY / window.innerHeight) * 2 + 1
      
      targetPosition.current.x = x * viewport.width * 0.1
      targetPosition.current.y = y * viewport.height * 0.1
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [viewport])

  useFrame(() => {
    camera.position.x += (targetPosition.current.x - camera.position.x) * 0.05
    camera.position.y += (targetPosition.current.y - camera.position.y) * 0.05
    camera.lookAt(0, 0, 0)
  })

  return null
}

// Main scene component
function Scene() {
  return (
    <>
      <Lighting />
      <MouseFollow />
      <Sculpture />
      <Particles />
      <Environment preset="city" />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
    </>
  )
}

// Main export component
export function HeroSculpture() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ 
          position: [0, 0, 5], 
          fov: 50,
          near: 0.1,
          far: 1000
        }}
        dpr={[1, isMobile ? 1.5 : 2]}
        performance={{ min: 0.5, max: 1 }}
        gl={{ 
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance'
        }}
        style={{ background: 'transparent' }}
      >
        <Scene />
      </Canvas>
    </div>
  )
}
