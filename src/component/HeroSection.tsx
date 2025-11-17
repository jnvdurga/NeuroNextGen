"use client";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

interface HeroSectionProps {
  title?: string;
  highlight1?: string;
  highlight2?: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
  imageUrl?: string;
}

export default function HeroSection({
  title,
  highlight1,
  highlight2,
  subtitle,
  buttonText,
  buttonLink,
  imageUrl,
}: HeroSectionProps) {
  const router = useRouter();

  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between px-8 py-24 sm:py-40 bg-black text-white min-h-screen overflow-hidden">
      
      {/* Left: Text */}
      <div className="relative z-10 flex flex-col items-start max-w-2xl md:mr-8">
        {title && (
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-light leading-tight tracking-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {title.split(" ").map((word, idx) => {
              const isHighlight = word === highlight1 || word === highlight2;
              return isHighlight ? (
                <span key={idx} className="text-blue-300 font-medium">
                  {word + " "}
                </span>
              ) : (
                word + " "
              );
            })}
          </motion.h1>
        )}

        {subtitle && (
          <motion.p
            className="text-lg sm:text-xl text-gray-400 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            {subtitle}
          </motion.p>
        )}

        {buttonText && buttonLink && (
          <motion.button
            className="px-10 py-4 bg-white text-black font-semibold rounded-lg shadow-lg hover:bg-gray-200 hover:shadow-xl transition-all duration-300 text-lg sm:text-xl"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            onClick={() => router.push(buttonLink)}
          >
            {buttonText}
          </motion.button>
        )}
      </div>

      {/* Right: Hero Image */}
      {imageUrl && (
       <div className="relative w-full md:w-1/2 h-64 sm:h-96 md:h-[500px] mt-10 md:mt-0">
  <Image
    src={imageUrl}
    alt="Hero Image"
    fill
    className="object-contain"
    priority
    loading="eager"
    sizes="(max-width: 768px) 100vw, 50vw"
  />
</div>

      )}

      {/* Optional subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent pointer-events-none" />
    </section>
  );
}
