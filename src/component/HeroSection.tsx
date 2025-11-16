"use client";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

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
  imageUrl = "https://res.cloudinary.com/demo/image/upload/f_auto,q_auto/v1/sample.jpg",
}: HeroSectionProps) {
  const router = useRouter();

  return (
    <section className="relative px-8 py-24 sm:py-32 bg-black text-white overflow-hidden">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <div className="space-y-6">

          {/* TITLE */}
          {title && (
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-light leading-tight tracking-tight"
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

          {/* SUBTITLE */}
          {subtitle && (
            <motion.p
              className="text-lg sm:text-xl text-gray-400 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              {subtitle}
            </motion.p>
          )}

          {/* BUTTON */}
          {buttonText && buttonLink && (
            <motion.button
              className="mt-4 px-10 py-4 bg-white text-black font-semibold rounded-lg shadow-lg hover:bg-gray-200 transition-all duration-300 text-lg sm:text-xl"
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

        {/* RIGHT IMAGE (Optimized) */}
        <motion.div
          className="relative w-full h-80 sm:h-[450px] rounded-xl overflow-hidden shadow-lg"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Image
            src={imageUrl}
            alt="Hero Image"
            width={700}
            height={700}
          
            className="w-full h-full object-cover rounded-xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
