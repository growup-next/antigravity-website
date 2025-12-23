"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
    { src: "/carousel/mission_training.png", alt: "Corporate Training" },
    { src: "/carousel/mission_meeting.png", alt: "Team Meeting" },
    { src: "/carousel/mission_online.png", alt: "Online Meeting" },
    { src: "/carousel/mission_working.png", alt: "Focused Work" },
    { src: "/carousel/mission_social.png", alt: "Social Marketing" },
    // Duplicate for seamless loop if needed, but we typically duplicate the entire set in valid JSX
];

export default function InfiniteCarousel() {
    return (
        <div className="w-full overflow-hidden py-10 relative">


            <motion.div
                className="flex gap-8 w-max"
                animate={{ x: ["0%", "-25%"] }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: 40, // Slower for smoother scroll with more items
                }}
            >
                {/* Render images 4 times to ensure seamless loop (movement is -25% which is 1 set) */}
                {[...images, ...images, ...images, ...images].map((img, index) => (
                    <div
                        key={index}
                        className="relative w-72 h-40 md:w-96 md:h-54 flex-shrink-0 rounded-xl overflow-hidden shadow-lg border-2 border-white/50"
                    >
                        <Image
                            src={img.src}
                            alt={img.alt}
                            fill
                            className="object-cover hover:scale-110 transition-transform duration-500"
                        />
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
