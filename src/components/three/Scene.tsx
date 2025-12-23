"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Preload } from "@react-three/drei";
import Particles from "./Particles";

export default function Scene() {
    return (
        <div className="fixed inset-0 -z-10">
            {/* オレンジグラデーション背景 */}
            <div
                className="absolute inset-0"
                style={{
                    background: `linear-gradient(
            135deg,
            #FF8C00 0%,
            #F9A825 30%,
            #E6EE9C 70%,
            #D4E157 100%
          )`,
                }}
            />

            <Canvas
                camera={{
                    position: [0, 0, 8],
                    fov: 60,
                    near: 0.1,
                    far: 100,
                }}
                gl={{
                    antialias: true,
                    alpha: true,
                    powerPreference: "high-performance",
                }}
                dpr={[1, 2]}
                style={{ background: 'transparent' }}
            >
                <Suspense fallback={null}>
                    <Particles count={1500} />
                    <ambientLight intensity={0.8} />
                </Suspense>

                <Preload all />
            </Canvas>
        </div>
    );
}
