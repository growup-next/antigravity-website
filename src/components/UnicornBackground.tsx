"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";

declare global {
  interface Window {
    UnicornStudio: { isInitialized: boolean; init: () => void };
  }
}

export default function UnicornBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const forward = (e: MouseEvent) => {
      const canvas = containerRef.current?.querySelector("canvas");
      if (!canvas) return;
      canvas.dispatchEvent(
        new MouseEvent("mousemove", {
          bubbles: false,
          cancelable: true,
          clientX: e.clientX,
          clientY: e.clientY,
        })
      );
    };
    window.addEventListener("mousemove", forward);
    return () => window.removeEventListener("mousemove", forward);
  }, []);

  return (
    <>
      <Script
        src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.1.0-1/dist/unicornStudio.umd.js"
        onLoad={() => {
          if (window.UnicornStudio && !window.UnicornStudio.isInitialized) {
            window.UnicornStudio.init();
            window.UnicornStudio.isInitialized = true;
          }
        }}
      />
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10" style={{ opacity: 0.6, mixBlendMode: "screen" }}>
        <div
          ref={containerRef}
          data-us-project="ywpMeQH9jueVeyngMZw0"
          data-us-dpi="1.5"
          data-us-fps="60"
          data-us-lazyload="true"
          data-us-production="true"
          className="absolute inset-0 w-full h-full"
        />
      </div>
    </>
  );
}
