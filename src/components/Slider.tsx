"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

interface SliderProps {
  images: string[];
  direction?: "left" | "right";
}

export default function Slider({ images, direction = "left" }: SliderProps) {
  const [speed, setSpeed] = useState(15); // default desktop speed

  useEffect(() => {
    // Function to set speed based on screen size
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSpeed(5); // mobile speed
      } else {
        setSpeed(15); // desktop speed
      }
    };

    handleResize(); // run on mount
    window.addEventListener("resize", handleResize); // update on resize

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="overflow-hidden w-full">
      <div
        className="flex gap-16 whitespace-nowrap"
        style={{
          animation: `${
            direction === "right" ? "scroll-reverse" : "scroll"
          } ${speed}s linear infinite`,
        }}
      >
        {[...images, ...images].map((img, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 relative w-28 h-14 sm:w-40 sm:h-16"
          >
            <Image
              src={img}
              alt={`client-${idx}`}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 120px, 160px"
              priority
            />
          </div>
        ))}
      </div>
    </div>
  );
}
