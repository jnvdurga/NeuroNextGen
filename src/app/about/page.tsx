"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MdStar, MdPeople, MdTrendingUp, MdCode } from "react-icons/md";
import GalaxyBackground from "@/component/GalaxyBg";

type CounterKeys = "projects" | "clients" | "experience" | "satisfaction";

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState<Record<CounterKeys, number>>({
    projects: 0,
    clients: 0,
    experience: 0,
    satisfaction: 0,
  });

  const stats = [
    {
      key: "projects" as CounterKeys,
      label: "Web & Mobile Projects Delivered",
      target: 320,
      suffix: "+",
      icon: MdCode,
      color: "text-white",
    },
    {
      key: "clients" as CounterKeys,
      label: "Satisfied Clients Worldwide",
      target: 150,
      suffix: "+",
      icon: MdPeople,
      color: "text-white",
    },
    {
      key: "experience" as CounterKeys,
      label: "Years of IT Expertise",
      target: 5,
      suffix: "+",
      icon: MdTrendingUp,
      color: "text-white",
    },
    {
      key: "satisfaction" as CounterKeys,
      label: "Client Satisfaction Rate",
      target: 99,
      suffix: "%",
      icon: MdStar,
      color: "text-white",
    },
  ];

  useEffect(() => {
    setIsVisible(true);

    const animateCounters = () => {
      stats.forEach((stat) => {
        let current = 0;
        const increment = stat.target / 50;
        const timer = setInterval(() => {
          current += increment;
          if (current >= stat.target) {
            current = stat.target;
            clearInterval(timer);
          }
          setCounters((prev) => ({
            ...prev,
            [stat.key]: Math.floor(current),
          }));
        }, 30);
      });
    };

    const timer = setTimeout(animateCounters, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative bg-black text-white px-6 pb-20 pt-32 lg:pb-32 lg:pt-40">
      <GalaxyBackground />

      <div className="container max-w-screen-xl mx-auto overflow-hidden relative z-10">
        {/* Hero Section */}
        <div
          className={`text-center mb-20 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-6">
            <MdPeople className="w-4 h-4 text-white mr-2" />
            <span className="text-white text-sm font-medium tracking-wide">
              About NeuroNextGen Solutions
            </span>
          </div>

          <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Driving Digital Transformation
            <span className="block bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              With Innovation
            </span>
          </h1>

          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            At <span className="font-semibold text-white">NeuroNextGen Solutions</span>, we provide
            cutting-edge web and mobile solutions that empower businesses globally.
            From innovative AI-powered platforms to scalable full-stack applications,
            we turn ideas into reliable, high-performance digital products.
          </p>
        </div>

        {/* Stats Section */}
        <div
          className={`grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20 transform transition-all duration-1000 delay-200 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {stats.map((stat, index) => (
            <div
              key={stat.key}
              className="relative rounded-2xl overflow-hidden animate-fadeInUp"
              style={{ animationDelay: `${300 + index * 100}ms` }}
            >
              <div className="p-6 text-center">
                <stat.icon
                  className={`w-8 h-8 ${stat.color} opacity-90 mx-auto mb-4`}
                />
                <div className="text-3xl font-bold mb-2">
                  {counters[stat.key]}
                  {stat.suffix}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Core Values Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-white">
            Our Core Values
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            We believe in <span className="font-semibold">innovation, excellence, and client success</span>.
            Every project is delivered with precision, creativity, and a commitment to high-quality outcomes.
          </p>
        </div>

        {/* Company Mission, Vision, Story */}
        <div className="grid lg:grid-cols-3 gap-8 px-6 py-16">
          <div className="bg-white/5 rounded-2xl p-6 hover:bg-white/10 transition cursor-pointer">
            <h3 className="text-2xl font-bold mb-2">Our Mission</h3>
            <p className="text-gray-300">
              To empower businesses worldwide with innovative web and mobile solutions
              that drive efficiency, growth, and technological excellence.
            </p>
          </div>
          <div className="bg-white/5 rounded-2xl p-6 hover:bg-white/10 transition cursor-pointer">
            <h3 className="text-2xl font-bold mb-2">Our Vision</h3>
            <p className="text-gray-300">
              To be recognized globally as a trusted partner for building
              transformative digital experiences that redefine industries.
            </p>
          </div>
          <div className="bg-white/5 rounded-2xl p-6 hover:bg-white/10 transition cursor-pointer">
            <h3 className="text-2xl font-bold mb-2">Our Story</h3>
            <p className="text-gray-300">
              Founded with a passion for technology and innovation, NeuroNextGen Solutions
              has grown into a dedicated team delivering world-class IT services and solutions
              for clients across the globe.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
