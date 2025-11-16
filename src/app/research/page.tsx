"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MdStar, MdPeople, MdTrendingUp, MdCode } from "react-icons/md";
import GalaxyBackground from "@/component/GalaxyBg";

type CounterKeys = "projects" | "clients" | "experience" | "satisfaction";

const Rearch = () => {
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
      label: "Active Research Projects",
      target: 12,
      suffix: "+",
      icon: MdCode,
      color: "text-white",
    },
    {
      key: "clients" as CounterKeys,
      label: "Collaborations Worldwide",
      target: 8,
      suffix: "+",
      icon: MdPeople,
      color: "text-white",
    },
    {
      key: "experience" as CounterKeys,
      label: "Years of R&D",
      target: 5,
      suffix: "+",
      icon: MdTrendingUp,
      color: "text-white",
    },
    {
      key: "satisfaction" as CounterKeys,
      label: "Successful Proof-of-Concepts",
      target: 90,
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
              Our Research & Innovation
            </span>
          </div>

          <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Exploring the Frontiers of Technology
            <span className="block bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Building Tomorrow’s Digital Solutions Today
            </span>
          </h1>

          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            At NeuroNextGen Solutions, our R&D team dives deep into the latest technologies
            — from **AI-driven predictive systems**, **real-time web & mobile platforms**, to
            **blockchain-enabled secure applications**. We are constantly studying futuristic
            concepts, developing proof-of-concepts, and exploring innovative solutions
            that will transform businesses and society.
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

        {/* Research Highlights */}
        <div className="grid lg:grid-cols-3 gap-8 px-6 py-16">
          <div className="bg-white/5 rounded-2xl p-6 hover:bg-white/10 transition cursor-pointer">
            <h3 className="text-2xl font-bold mb-2">Web 3.0 & Blockchain Experiments</h3>
            <p className="text-gray-300">
              We are exploring decentralized applications and smart contract integrations for
              secure, transparent, and autonomous business solutions. Our studies focus on
              blockchain scalability and cross-chain interoperability.
            </p>
          </div>
          <div className="bg-white/5 rounded-2xl p-6 hover:bg-white/10 transition cursor-pointer">
            <h3 className="text-2xl font-bold mb-2">AI & Predictive Systems</h3>
            <p className="text-gray-300">
              Our team researches AI-driven web and mobile applications capable of predictive
              analytics, anomaly detection, and adaptive user experiences. These studies aim
              to transform decision-making for enterprises and startups alike.
            </p>
          </div>
          <div className="bg-white/5 rounded-2xl p-6 hover:bg-white/10 transition cursor-pointer">
            <h3 className="text-2xl font-bold mb-2">ResQME: Real-Time Safety Platform</h3>
            <p className="text-gray-300">
              As part of our future-focused initiatives, we are developing ResQME — a
              real-time safety monitoring system for individuals using IoT, GPS tracking,
              and AI-based emergency alerts. This project represents a complex integration
              of mobile, cloud, and AI technologies.
            </p>
          </div>
          <div className="bg-white/5 rounded-2xl p-6 hover:bg-white/10 transition cursor-pointer">
            <h3 className="text-2xl font-bold mb-2">Next-Gen Mobile & Web Experiences</h3>
            <p className="text-gray-300">
              Studying progressive web apps, immersive UI/UX trends, and interactive
              3D experiences to deliver responsive, fast, and engaging platforms for
              the next generation of users.
            </p>
          </div>
          <div className="bg-white/5 rounded-2xl p-6 hover:bg-white/10 transition cursor-pointer">
            <h3 className="text-2xl font-bold mb-2">Cloud-Native Architectures</h3>
            <p className="text-gray-300">
              Researching scalable, fault-tolerant cloud-native solutions with microservices,
              serverless functions, and real-time API orchestration to power modern enterprise
              applications.
            </p>
          </div>
          <div className="bg-white/5 rounded-2xl p-6 hover:bg-white/10 transition cursor-pointer">
            <h3 className="text-2xl font-bold mb-2">Automation & DevOps Innovation</h3>
            <p className="text-gray-300">
              Exploring CI/CD pipelines, automated testing, and intelligent deployment
              strategies to reduce time-to-market, increase reliability, and maintain
              sustainable software delivery.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rearch;
