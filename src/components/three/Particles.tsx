"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface ParticlesProps {
    count?: number;
}

// ソフトフォーカスの円形テクスチャを生成
function createSoftCircleTexture(): THREE.Texture {
    const canvas = document.createElement("canvas");
    const size = 128;
    canvas.width = size;
    canvas.height = size;

    const ctx = canvas.getContext("2d");
    if (!ctx) throw new Error("Could not get canvas context");

    // 放射状グラデーションで柔らかい円を描画
    const gradient = ctx.createRadialGradient(
        size / 2, size / 2, 0,
        size / 2, size / 2, size / 2
    );

    gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
    gradient.addColorStop(0.2, "rgba(255, 255, 255, 0.8)");
    gradient.addColorStop(0.4, "rgba(255, 255, 255, 0.4)");
    gradient.addColorStop(0.6, "rgba(255, 255, 255, 0.15)");
    gradient.addColorStop(0.8, "rgba(255, 255, 255, 0.05)");
    gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, size, size);

    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;

    return texture;
}

export default function Particles({ count = 800 }: ParticlesProps) {
    const meshRef = useRef<THREE.Points>(null);
    const initialPositions = useRef<Float32Array | null>(null);

    // テクスチャを生成
    const texture = useMemo(() => {
        if (typeof window !== "undefined") {
            return createSoftCircleTexture();
        }
        return null;
    }, []);

    // パーティクルの位置と属性を生成
    const { positions, colors, scales, speeds } = useMemo(() => {
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);
        const scales = new Float32Array(count);
        const speeds = new Float32Array(count);

        for (let i = 0; i < count; i++) {
            const i3 = i * 3;

            // 広い範囲に分布
            positions[i3] = (Math.random() - 0.5) * 25;
            positions[i3 + 1] = (Math.random() - 0.5) * 35;
            positions[i3 + 2] = (Math.random() - 0.5) * 8;

            // 温かみのあるオレンジ〜ゴールド〜クリーム系
            // シャンパンゴールド、白、薄い黄緑の「泡」のようなカラー
            const colorType = Math.random();
            if (colorType < 0.5) {
                // シャンパンゴールド / 泡
                colors[i3] = 1.0;
                colors[i3 + 1] = 0.95 + Math.random() * 0.05;
                colors[i3 + 2] = 0.8 + Math.random() * 0.2;
            } else if (colorType < 0.8) {
                // 純白 (ハイライト)
                colors[i3] = 1.0;
                colors[i3 + 1] = 1.0;
                colors[i3 + 2] = 1.0;
            } else {
                // 薄いグリーン (アクセント)
                colors[i3] = 0.9 + Math.random() * 0.1;
                colors[i3 + 1] = 1.0;
                colors[i3 + 2] = 0.8 + Math.random() * 0.2;
            }

            // 大きめのサイズバリエーション
            scales[i] = 0.8 + Math.random() * 2.0;

            // 上昇速度
            speeds[i] = 0.15 + Math.random() * 0.4;
        }

        return { positions, colors, scales, speeds };
    }, [count]);

    // 初期位置を保存
    useMemo(() => {
        initialPositions.current = positions.slice();
    }, [positions]);

    // アニメーションフレーム
    useFrame((state) => {
        if (!meshRef.current || !initialPositions.current) return;

        const time = state.clock.getElapsedTime();
        const positionAttribute = meshRef.current.geometry.attributes.position;
        const array = positionAttribute.array as Float32Array;

        for (let i = 0; i < count; i++) {
            const i3 = i * 3;

            let x = initialPositions.current[i3];
            let y = initialPositions.current[i3 + 1];
            const z = initialPositions.current[i3 + 2];

            // ゆっくり上昇
            y += (time * speeds[i]) % 35;
            if (y > 17.5) {
                y = -17.5 + (y - 17.5);
            }

            // ゆらゆら揺れる
            x += Math.sin(time * 0.2 + i * 0.08) * 0.5;

            array[i3] = x;
            array[i3 + 1] = y;
            array[i3 + 2] = z + Math.cos(time * 0.15 + i * 0.04) * 0.15;
        }

        positionAttribute.needsUpdate = true;
    });

    if (!texture) return null;

    return (
        <points ref={meshRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={count}
                    array={positions}
                    itemSize={3}
                    args={[positions, 3]}
                />
                <bufferAttribute
                    attach="attributes-color"
                    count={count}
                    array={colors}
                    itemSize={3}
                    args={[colors, 3]}
                />
                <bufferAttribute
                    attach="attributes-scale"
                    count={count}
                    array={scales}
                    itemSize={1}
                    args={[scales, 1]}
                />
            </bufferGeometry>
            <pointsMaterial
                size={2.0}
                map={texture}
                vertexColors
                transparent
                opacity={0.7}
                sizeAttenuation
                blending={THREE.AdditiveBlending}
                depthWrite={false}
                alphaTest={0.001}
            />
        </points>
    );
}
