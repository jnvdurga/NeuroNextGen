"use client";
import GalaxyBackground from "./GalaxyBg";
import { services } from "@/utilities/data";
import { motion } from "framer-motion";

export function ServiceCard() {
  return (
    <section className="relative px-6 py-20 bg-black text-white overflow-hidden">
      <GalaxyBackground />

      <div className="container max-w-screen-xl mx-auto relative z-10">
        {/* Heading */}
        <div className="space-y-5 text-center mb-16">
          <h1 className="text-white font-bold tracking-tight sm:text-5xl text-3xl">
            Our <span className="text-gray-400">Services</span>
          </h1>
          <p className="text-sm text-gray-300">
            We craft modern digital solutions for businesses of all sizes.
          </p>
        </div>

        {/* Feature-Style Service Cards */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
          {services.slice(0, 6).map((c, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, y: -6 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="w-full max-w-sm min-h-[260px] rounded-2xl bg-black border border-gray-700 p-6 
                         hover:border-white/60 transition-all duration-300 shadow-lg"
            >
              {/* Top Row: Icon + Title + Subtitle */}
              <div className="flex gap-4 items-center mb-5">
                <div className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-600 bg-gray-800 text-white">
                  <c.icon className="w-6 h-6" />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-lg font-semibold text-white">{c.title}</h3>
                  <span className="inline-block bg-gray-800 text-gray-300 text-[11px] font-medium px-2 py-0.5 rounded-md border border-gray-600 mt-1 w-fit">
                    {c.subtitle}
                  </span>
                </div>
              </div>

              {/* Features List */}
              <ul className="text-gray-300 text-sm space-y-2 mt-2">
                {c.features?.map((feature: string, index: number) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-gray-400">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
