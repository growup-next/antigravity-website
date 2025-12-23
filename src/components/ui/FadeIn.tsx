"use client";

import { motion, Variants, UseInViewOptions } from "framer-motion";
import { ReactNode } from "react";

interface FadeInProps {
    children: ReactNode;
    delay?: number;
    duration?: number;
    direction?: "up" | "down" | "left" | "right" | "none";
    className?: string;
    viewportMargin?: string;
    viewportAmount?: number;
    once?: boolean;
}

export default function FadeIn({
    children,
    delay = 0,
    duration = 0.6,
    direction = "up",
    className = "",
    viewportMargin = "-100px",
    viewportAmount = 0.3,
    once = true
}: FadeInProps) {

    const variants: Variants = {
        hidden: {
            opacity: 0,
            y: direction === "up" ? 20 : direction === "down" ? -20 : 0,
            x: direction === "left" ? 20 : direction === "right" ? -20 : 0
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: {
                duration,
                delay,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once, margin: viewportMargin as any, amount: viewportAmount }}
            variants={variants}
            className={className}
        >
            {children}
        </motion.div>
    );
}
