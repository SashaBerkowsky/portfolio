"use client";
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";

function KeyboardModel() {
	const KEYBOARD_REF = "/interests/mechanical_keyboard.glb";
	const gltf = useLoader(GLTFLoader, KEYBOARD_REF);
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

function GameboyModel() {
	const GAMEBOY_REF = "/interests/gameboy.glb";
	const gltf = useLoader(GLTFLoader, GAMEBOY_REF);
	const groupRef = useRef();

	useFrame((a) => {
		if (groupRef.current) {
			// groupRef.current.rotation.x += 0.01;
			groupRef.current.rotation.y += 0.01;
		}
	});

	return (
		<group
			rotation={[0, -Math.PI / 4, Math.PI / 4]}
			ref={groupRef}
			position={[0, -3, 0]}
		>
			<primitive scale={1} object={gltf.scene} />
		</group>
	);
}

function getModel(id) {
	switch (id) {
		case 0:
			return <KeyboardModel />;
		case 1:
			return <GameboyModel />;
		default:
			return <KeyboardModel />;
	}
}

export default function ThreeModelCanvas({ modelNumber }) {
	return (
		<Canvas style={{ height: "400px" }}>
			<ambientLight intensity={0.5} />
			<pointLight position={[10, 10, 10]} />
			{getModel(modelNumber)}
		</Canvas>
	);
}
