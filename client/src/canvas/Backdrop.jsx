import React, { useRef} from 'react'
import { easing } from 'maath'
import { useFrame } from '@react-three/fiber'
import { AccumulativeShadows, RandomizedLight } from '@react-three/drei'

const Backdrop = () => {
  const shadows = useRef();

  return (
    <AccumulativeShadows
      ref={shadows}
      temporal
      frames={60}
      alphaTest={0.85}
      scale={5}
      rotation={[Math.PI / 2, 0, 0]}
      position={[0, 0, -0.14]}
    >
      <RandomizedLight 
        amount={10}
        radius={9}
        intensity={2}
        ambient={0.55}
        position={[10, 10, -10]}
      />
     <RandomizedLight 
        amount={4}
        radius={10}
        intensity={0.75}
        ambient={0.75}
        position={[-2.5, 2.5, -3]}
      />
    </AccumulativeShadows>
  )
}

export default Backdrop