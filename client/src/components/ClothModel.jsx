import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Center } from "@react-three/drei";

const Shirt = () => {
  const { scene } = useGLTF("/models/shop.glb");
  return (
    <Center>
      <primitive object={scene} scale={1.5} />
    </Center>
  );
};

const ClothModel = () => {
  return (
    <Canvas
      className="w-full h-full"
      camera={{ position: [0, 4, 6], fov: 35 }}
    >
      {/* Lights */}
      <ambientLight intensity={1.3} />
      <directionalLight position={[3, 3, 4]} intensity={1.5} />

      {/* Model */}
      <Shirt />

      {/* Controls */}
      <OrbitControls
        enableZoom={false}
        autoRotate
        autoRotateSpeed={0.6}
      />
    </Canvas>
  );
};

useGLTF.preload("/models/shop.glb");

export default ClothModel;
