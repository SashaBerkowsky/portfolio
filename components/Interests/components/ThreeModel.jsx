"use client";
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";

function ThreeModel({ isMobile = false }) {
	const gltf = useLoader(GLTFLoader, "/interests/scene.glb");
	const groupRef = useRef();

	useFrame((a) => {
		if (groupRef.current) {
			console.log(a);
			groupRef.current.rotation.z += 0.01;
		}
	});

	return (
		<group rotation={[Math.PI / 2, 0, Math.PI]} ref={groupRef}>
			<primitive scale={4} object={gltf.scene} />
		</group>
	);
}

export default function ThreeModelCanvas() {
	return (
		<Canvas style={{ height: "400px" }}>
			<ambientLight intensity={0.5} />
			<pointLight position={[10, 10, 10]} />
			<ThreeModel />
		</Canvas>
	);
}
