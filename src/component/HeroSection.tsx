"use client";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import React from "react";

interface HeroSectionProps {
  title?: string;
  highlight1?: string;
  highlight2?: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
}

export default function HeroSection({
  title,
  highlight1,
  highlight2,
  subtitle,
  buttonText,
  buttonLink,
}: HeroSectionProps) {
  const router = useRouter();

  return (
    <section className="relative flex flex-col items-center justify-center text-center px-8 py-24 sm:py-40 bg-black text-white overflow-hidden min-h-screen">

      <div className="relative z-10 flex flex-col items-center justify-center max-w-4xl">

        {/* TITLE (only if provided) */}
        {title && (
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-light leading-tight tracking-tight mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {/* Highlight logic */}
            {title.split(" ").map((word, idx) => {
              const isHighlight =
                word === highlight1 || word === highlight2;

              return isHighlight ? (
                <span key={idx} className="text-blue-300 font-medium">
                  {word + " "}
                </span>
              ) : (
                word + " "
              );
            })}

            {(highlight1 || highlight2) && (
              <div className="mt-6 text-lg sm:text-xl font-normal text-gray-300 leading-relaxed tracking-wide">
                Build{" "}
                {highlight1 && (
                  <span className="text-blue-300 font-semibold">
                    {highlight1}
                  </span>
                )}
                {highlight1 && highlight2 && " and "}
                {highlight2 && (
                  <span className="text-blue-300 font-semibold">
                    {highlight2}
                  </span>
                )}
                that power your next big leap.
              </div>
            )}
          </motion.h1>
        )}

        {/* SUBTITLE */}
        {subtitle && (
          <motion.p
            className=" text-lg sm:text-xl text-gray-400 max-w-2xl leading-relaxed"
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
            className="mt-6 px-10 py-4 bg-white text-black font-semibold rounded-lg shadow-lg hover:bg-gray-200 hover:shadow-xl transition-all duration-300 text-lg sm:text-xl"
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

      {/* Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent pointer-events-none" />
    </section>
  );
}
