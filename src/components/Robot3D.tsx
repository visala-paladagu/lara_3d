import { useRef, useEffect, useMemo, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Text } from '@react-three/drei';
import * as THREE from 'three';
import { useIsMobile } from '@/hooks/use-mobile';

interface CursorState {
  x: number;
  y: number;
}

interface RobotProps {
  cursor: CursorState;
  isMobile: boolean;
}

const RobotModel = ({ cursor, isMobile }: RobotProps) => {
  const headRef = useRef<THREE.Group>(null);
  const leftPupilRef = useRef<THREE.Mesh>(null);
  const rightPupilRef = useRef<THREE.Mesh>(null);
  const rightArmRef = useRef<THREE.Group>(null);

  const scale = isMobile ? 1.0 : 1.2;
  const eyeTravelX = isMobile ? 0.04 : 0.06;
  const eyeTravelY = isMobile ? 0.03 : 0.05;

  const eyeBase = useMemo(
    () => ({
      left: new THREE.Vector3(-0.17, 0.11, 0.31),
      right: new THREE.Vector3(0.17, 0.11, 0.31),
    }),
    []
  );

  useFrame((state, delta) => {
    if (leftPupilRef.current && rightPupilRef.current) {
      const targetX = cursor.x * eyeTravelX;
      const targetY = cursor.y * eyeTravelY;

      const leftTarget = eyeBase.left;
      const rightTarget = eyeBase.right;

      leftPupilRef.current.position.x = THREE.MathUtils.damp(leftPupilRef.current.position.x, leftTarget.x + targetX, 10, delta);
      leftPupilRef.current.position.y = THREE.MathUtils.damp(leftPupilRef.current.position.y, leftTarget.y + targetY, 10, delta);
      rightPupilRef.current.position.x = THREE.MathUtils.damp(rightPupilRef.current.position.x, rightTarget.x + targetX, 10, delta);
      rightPupilRef.current.position.y = THREE.MathUtils.damp(rightPupilRef.current.position.y, rightTarget.y + targetY, 10, delta);
    }

    if (headRef.current) {
      headRef.current.rotation.y = THREE.MathUtils.damp(headRef.current.rotation.y, cursor.x * (isMobile ? 0.08 : 0.14), 8, delta);
      headRef.current.rotation.x = THREE.MathUtils.damp(headRef.current.rotation.x, -cursor.y * (isMobile ? 0.06 : 0.1), 8, delta);
    }

    if (rightArmRef.current) {
      const wave = Math.sin(state.clock.elapsedTime * 2.2) * 0.08;
      rightArmRef.current.rotation.z = -1.1 + wave;
      rightArmRef.current.rotation.x = -0.2 + Math.cos(state.clock.elapsedTime * 1.8) * 0.04;
    }
  });

  return (
    <Float speed={1.8} rotationIntensity={0.08} floatIntensity={0.35}>
      <group scale={scale} position={[0, -0.1, 0]}>
        <mesh position={[0, -1.05, 0]}>
          <capsuleGeometry args={[0.5, 0.95, 18, 36]} />
          <meshStandardMaterial color="#f5f8fd" metalness={0.3} roughness={0.35} />
        </mesh>

        <mesh position={[0, -0.92, 0.42]}>
          <boxGeometry args={[0.7, 0.44, 0.08]} />
          <meshStandardMaterial color="#0ea5c6" metalness={0.45} roughness={0.25} emissive="#0ea5c6" emissiveIntensity={0.15} />
        </mesh>

        <Text
          position={[0, -0.92, 0.47]}
          fontSize={0.09}
          color="#d8f7ff"
          anchorX="center"
          anchorY="middle"
        >
          LARA
        </Text>

        <mesh position={[0, -0.43, 0]}>
          <cylinderGeometry args={[0.15, 0.2, 0.25, 28]} />
          <meshStandardMaterial color="#e6edf6" metalness={0.4} roughness={0.3} />
        </mesh>

        <group ref={headRef} position={[0, 0.08, 0]}>
          <mesh>
            <sphereGeometry args={[0.5, 36, 36]} />
            <meshStandardMaterial color="#f9fbff" metalness={0.2} roughness={0.32} />
          </mesh>

          <mesh position={[0, 0.02, 0.28]}>
            <sphereGeometry args={[0.38, 36, 36, 0, Math.PI * 2, 0, Math.PI / 1.7]} />
            <meshStandardMaterial color="#f1f6fc" metalness={0.22} roughness={0.22} />
          </mesh>

          <mesh position={[-0.17, 0.11, 0.25]}>
            <sphereGeometry args={[0.11, 28, 28]} />
            <meshStandardMaterial color="#ffffff" metalness={0.08} roughness={0.18} />
          </mesh>

          <mesh position={[0.17, 0.11, 0.25]}>
            <sphereGeometry args={[0.11, 28, 28]} />
            <meshStandardMaterial color="#ffffff" metalness={0.08} roughness={0.18} />
          </mesh>

          <mesh ref={leftPupilRef} position={[-0.17, 0.11, 0.31]}>
            <sphereGeometry args={[0.05, 28, 28]} />
            <meshStandardMaterial color="#0ea5c6" metalness={0.45} roughness={0.2} emissive="#0ea5c6" emissiveIntensity={0.35} />
          </mesh>

          <mesh ref={rightPupilRef} position={[0.17, 0.11, 0.31]}>
            <sphereGeometry args={[0.05, 28, 28]} />
            <meshStandardMaterial color="#0ea5c6" metalness={0.45} roughness={0.2} emissive="#0ea5c6" emissiveIntensity={0.35} />
          </mesh>

          <mesh position={[-0.17, 0.11, 0.35]}>
            <sphereGeometry args={[0.018, 14, 14]} />
            <meshStandardMaterial color="#bff5ff" emissive="#bff5ff" emissiveIntensity={0.6} />
          </mesh>

          <mesh position={[0.17, 0.11, 0.35]}>
            <sphereGeometry args={[0.018, 14, 14]} />
            <meshStandardMaterial color="#bff5ff" emissive="#bff5ff" emissiveIntensity={0.6} />
          </mesh>

          <mesh position={[0, -0.15, 0.35]}>
            <boxGeometry args={[0.24, 0.05, 0.03]} />
            <meshStandardMaterial color="#9fb0c4" metalness={0.55} roughness={0.3} />
          </mesh>

          <mesh position={[-0.47, 0.08, 0.01]}>
            <cylinderGeometry args={[0.06, 0.06, 0.15, 16]} />
            <meshStandardMaterial color="#0ea5c6" metalness={0.45} roughness={0.25} />
          </mesh>
          <mesh position={[0.47, 0.08, 0.01]}>
            <cylinderGeometry args={[0.06, 0.06, 0.15, 16]} />
            <meshStandardMaterial color="#0ea5c6" metalness={0.45} roughness={0.25} />
          </mesh>

          <mesh position={[0, 0.46, 0.04]}>
            <sphereGeometry args={[0.06, 16, 16]} />
            <meshStandardMaterial color="#0ea5c6" emissive="#0ea5c6" emissiveIntensity={0.3} metalness={0.5} roughness={0.3} />
          </mesh>
        </group>

        <mesh position={[-0.6, -0.72, 0]}>
          <sphereGeometry args={[0.13, 18, 18]} />
          <meshStandardMaterial color="#e6edf6" metalness={0.4} roughness={0.3} />
        </mesh>
        <mesh position={[0.6, -0.72, 0]}>
          <sphereGeometry args={[0.13, 18, 18]} />
          <meshStandardMaterial color="#e6edf6" metalness={0.4} roughness={0.3} />
        </mesh>

        <group position={[-0.72, -1.02, 0]} rotation={[0, 0, 0.45]}>
          <mesh>
            <capsuleGeometry args={[0.08, 0.5, 10, 20]} />
            <meshStandardMaterial color="#f2f7fd" metalness={0.3} roughness={0.35} />
          </mesh>
          <mesh position={[0, -0.35, 0]}>
            <sphereGeometry args={[0.1, 16, 16]} />
            <meshStandardMaterial color="#dce6f2" metalness={0.4} roughness={0.3} />
          </mesh>
        </group>

        <group ref={rightArmRef} position={[0.72, -0.95, 0]} rotation={[-0.2, 0, -1.1]}>
          <mesh>
            <capsuleGeometry args={[0.08, 0.58, 10, 20]} />
            <meshStandardMaterial color="#f2f7fd" metalness={0.3} roughness={0.35} />
          </mesh>
          <mesh position={[0, -0.39, 0]}>
            <sphereGeometry args={[0.1, 16, 16]} />
            <meshStandardMaterial color="#dce6f2" metalness={0.4} roughness={0.3} />
          </mesh>
        </group>

        <mesh position={[0, -1.88, 0]}>
          <cylinderGeometry args={[0.26, 0.32, 0.18, 32]} />
          <meshStandardMaterial color="#e5edf7" metalness={0.35} roughness={0.3} />
        </mesh>

        <mesh position={[0, -1.98, 0]}>
          <cylinderGeometry args={[0.46, 0.5, 0.1, 36]} />
          <meshStandardMaterial color="#d6e2f0" metalness={0.38} roughness={0.3} />
        </mesh>
      </group>
    </Float>
  );
};

const Robot3D = () => {
  const [cursor, setCursor] = useState<CursorState>({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    const updateCursor = (clientX: number, clientY: number) => {
      if (!containerRef.current) {
        return;
      }

      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const x = (clientX - centerX) / (rect.width / 2);
      const y = -(clientY - centerY) / (rect.height / 2);

      setCursor({
        x: THREE.MathUtils.clamp(x, -1, 1),
        y: THREE.MathUtils.clamp(y, -1, 1),
      });
    };

    const handlePointerMove = (event: PointerEvent) => {
      updateCursor(event.clientX, event.clientY);
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (event.touches[0]) {
        updateCursor(event.touches[0].clientX, event.touches[0].clientY);
      }
    };

    const resetCursor = () => {
      setCursor({ x: 0, y: 0 });
    };

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('pointerleave', resetCursor);
    window.addEventListener('blur', resetCursor);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('pointerleave', resetCursor);
      window.removeEventListener('blur', resetCursor);
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full h-[360px] sm:h-[420px] lg:h-[520px]">
      <Canvas camera={{ position: [0, 0.1, 4.6], fov: 42 }} dpr={[1, 2]}>
        <hemisphereLight intensity={0.75} groundColor="#cad3df" />
        <directionalLight position={[4, 6, 4]} intensity={1} />
        <directionalLight position={[-5, 3, -4]} intensity={0.45} />
        <pointLight position={[0, 2.2, 2.8]} intensity={0.55} color="#0ea5c6" />
        <RobotModel cursor={cursor} isMobile={isMobile} />
      </Canvas>
    </div>
  );
};

export default Robot3D;
