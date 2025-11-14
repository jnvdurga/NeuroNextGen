"use client";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function HeroSection() {
  const router = useRouter();

  return (
    <section className="relative flex flex-col items-center justify-center text-center px-8 py-24 sm:py-40 bg-black text-white overflow-hidden min-h-screen">

      {/* ✅ Content Centered */}
<div className="relative z-10 flex flex-col items-center justify-center max-w-4xl">
  <motion.h1
    className="text-4xl sm:text-5xl md:text-6xl font-light leading-tight tracking-tight mb-10"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    Accelerate{" "}
    <span className="text-blue-300 font-medium">AI Innovation</span> to transform your business potential.
    <br />

    <div className="mt-6 text-lg sm:text-xl font-normal text-gray-300 leading-relaxed tracking-wide">
      Build{" "}
      <span className="text-blue-300 font-semibold">Smarter Intelligence</span>{" "}
      and{" "}
      <span className="text-blue-300 font-semibold">  Vetted Tech Talents</span>{" "}
      that power your next big leap.
    </div>
  </motion.h1>



        <motion.p
          className=" text-lg sm:text-xl text-gray-400 max-w-2xl leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Train, fine-tune, and deploy next-generation AI models that redefine what’s possible.
        </motion.p>

        <motion.button
          className="mt-6 px-10 py-4 bg-white text-black font-semibold rounded-lg shadow-lg hover:bg-gray-200 hover:shadow-xl transition-all duration-300 text-lg sm:text-xl"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          onClick={() => router.push("/form")}
        >
          Get Started →
        </motion.button>
      </div>

      {/* ✅ Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent pointer-events-none" />
    </section>
  );
}
