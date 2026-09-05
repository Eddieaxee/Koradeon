'use client'

import { useRef, useMemo, useEffect, useState, Suspense } from 'react'
import { Canvas, useFrame, useThree, useLoader } from '@react-three/fiber'
import { Environment, OrbitControls, Float } from '@react-three/drei'
import * as THREE from 'three'

interface LogoSceneProps {
  className?: string
}

function LogoMesh() {
  const groupRef = useRef<THREE.Group>(null)
  const { mouse, viewport } = useThree()

  // Load the actual KORADEDON logo texture
  const logoTexture = useLoader(THREE.TextureLoader, '/images/logo.png')

  const dotsGeometry = useMemo(() => new THREE.SphereGeometry(0.15, 32, 32), [])

  const material = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: 0xb59b73, // Champagne gold
        metalness: 0.8,
        roughness: 0.2
      }),
    []
  )

  const dotPositions = useMemo<[number, number, number][]>(
    () => [
      [-0.8, 0.5, 0],
      [0, 0.5, 0],
      [0.8, 0.5, 0]
    ],
    []
  )

  useFrame(() => {
    if (groupRef.current) {
      // Smooth mouse-follow tilt
      const targetRotationY = mouse.x * viewport.width * 0.05
      const targetRotationX = -mouse.y * viewport.height * 0.02
      groupRef.current.rotation.y +=
        (targetRotationY - groupRef.current.rotation.y) * 0.03
      groupRef.current.rotation.x +=
        (targetRotationX - groupRef.current.rotation.x) * 0.03
    }
  })

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={0.4} floatIntensity={0.8}>
        {/* Three foundational dots */}
        {dotPositions.map((pos, i) => (
          <mesh
            key={i}
            position={pos}
            geometry={dotsGeometry}
            material={material}
            castShadow
            receiveShadow
          />
        ))}

        {/* Logo plane with real texture */}
        <mesh
          position={[0, -0.5, 0]}
          rotation={[-Math.PI / 8, 0, 0]}
          castShadow
          receiveShadow
        >
          <planeGeometry args={[2, 2]} />
          <meshStandardMaterial
            map={logoTexture}
            transparent
            opacity={0.9}
            metalness={0.1}
            roughness={0.3}
          />
        </mesh>
      </Float>

      {/* Subtle glow around logo */}
      <pointLight
        position={[0, -0.5, 0.3]}
        intensity={0.5}
        color="#B59B73"
        distance={5}
        decay={2}
      />
    </group>
  )
}

function ConstructionLines() {
  const linesRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (linesRef.current) {
      linesRef.current.rotation.y = state.clock.elapsedTime * 0.05
    }
  })

  return (
    <group ref={linesRef}>
      <LineComponent start={[-3, 0, 0]} end={[3, 0, 0]} color={0xb59b73} />
      <LineComponent start={[0, -3, 0]} end={[0, 3, 0]} color={0xb59b73} />
      <LineComponent start={[0, 0, -3]} end={[0, 0, 3]} color={0xb59b73} />
    </group>
  )
}

function LineComponent({
  start,
  end,
  color
}: {
  start: [number, number, number]
  end: [number, number, number]
  color: number
}) {
  // Build a real THREE.Line object and mount it via primitive,
  // because <line> in JSX conflicts with the SVG line element.
  const lineObject = useMemo(() => {
    const geometry = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(...start),
      new THREE.Vector3(...end)
    ])
    const material = new THREE.LineBasicMaterial({
      color,
      transparent: true,
      opacity: 0.3
    })
    return new THREE.Line(geometry, material)
  }, [start, end, color])

  return <primitive object={lineObject} />
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight
        position={[10, 10, 5]}
        intensity={1}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <pointLight position={[-10, -10, -5]} intensity={0.3} color="#B59B73" />

      <Suspense fallback={null}>
        <LogoMesh />
      </Suspense>
      <ConstructionLines />

      <Environment preset="city" />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.3}
        maxPolarAngle={Math.PI / 1.5}
        minPolarAngle={Math.PI / 3}
      />
    </>
  )
}

export function LogoScene({ className = '' }: LogoSceneProps) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <div className={'w-full h-full ' + className}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50, near: 0.1, far: 1000 }}
        dpr={[1, isMobile ? 1.5 : 2]}
        performance={{ min: 0.5, max: 1 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        style={{ background: 'transparent' }}
      >
        <Scene />
      </Canvas>
    </div>
  )
}
