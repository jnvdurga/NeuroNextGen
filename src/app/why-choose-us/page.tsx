"use client";

import { FaUserTie, FaCogs, FaServer, FaGlobeAmericas } from "react-icons/fa";

import HeroSection from "../../component/HeroSideBySide";
import CardsSection from "../../component/CardSection";
import HeadingSubTitel from "../../component/HeadingSubTitel";
import HeroCardsSection from "../../component/HeroCardSection";
import SideBySide from "../../component/SideBySide";

export default function WhyChooseUs() {
  // --- Collection Section (3 Cards) ---
  const collectionData = [
    {
      image: "https://res.cloudinary.com/dohksngyi/image/upload/v1763261296/StableRep2_mzjpz5.png",
      title: "Custom Website Development",
      description:
        "We craft high-performance, secure, and scalable websites tailored to your business needs, ensuring robust user experience and growth.",
    },
    {
      image: "https://res.cloudinary.com/dohksngyi/image/upload/v1763261114/ditial_g8nwlh.png",
      title: "Web & Mobile App Engineering",
      description:
        "We build interactive, cloud-ready web and mobile applications using React, Next.js, Node.js, and other modern technologies.",
    },
    {
      image: "https://res.cloudinary.com/dohksngyi/image/upload/v1763261395/uides_wjs8z4.png",
      title: "UI/UX & Responsive Design",
      description:
        "Our user-first, mobile-responsive designs deliver seamless experiences across all devices, combining aesthetics with usability.",
    },
  ];

  // --- Cards Section ---
  const cards = [
    {
      title: "Expert Engineering Team",
      desc: "A skilled team of developers, designers, and analysts delivering production-ready, scalable, and high-quality digital solutions.",
      icon: <FaUserTie />,
    },
    {
      title: "Automation & Agile Processes",
      desc: "Optimized workflows, CI/CD pipelines, and agile methodology ensure faster delivery, consistency, and reliability.",
      icon: <FaCogs />,
    },
    {
      title: "Enterprise-Level Infrastructure",
      desc: "Secure servers, optimized databases, CDN support, and API gateways ensure high-performance, global delivery, and uptime.",
      icon: <FaServer />,
    },
    {
      title: "Global Delivery Capability",
      desc: "We collaborate with clients worldwide, ensuring technical, cultural, and business alignment for successful project outcomes.",
      icon: <FaGlobeAmericas />,
    },
  ];

  // --- Stats Section ---
  const stats = [
    { value: "250+", label: "Web & Mobile Projects Delivered" },
    { value: "30+", label: "Industries Served Globally" },
    { value: "99%", label: "Client Satisfaction Rate" },
    { value: "5+", label: "Years of Proven Experience" },
  ];

  const legends = [
    { color: "#60a5fa", text: "Full-Stack Web Engineering" },
    { color: "#a78bfa", text: "UI/UX & Interactive Design" },
    { color: "#facc15", text: "API & Cloud Integration" },
    { color: "#34d399", text: "Performance & Scalability" },
  ];

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="Why Choose NeuroNextGen Solutions?"
        subtitle="We deliver cutting-edge web and mobile solutions using modern technologies, optimized processes, and expert teams."
        buttonText="Get Started Today"
        imageSrc="https://res.cloudinary.com/dohksngyi/image/upload/v1763262036/WEB-AI-1_hbx2cg.jpg"
      />

      {/* Collection Section */}
      <CardsSection data={collectionData} />

      {/* Features Heading */}
      <HeadingSubTitel
        tagText="OUR EXPERTISE"
        heading="Technologies & Solutions We Excel In"
        description="From frontend to backend, cloud infrastructure, and full-stack engineering — we deliver end-to-end digital solutions using the latest tech stack."
      />

      {/* Cards + Stats Section */}
      <HeroCardsSection
        cards={cards}
        stats={stats}
        mapImageSrc="https://res.cloudinary.com/dohksngyi/image/upload/v1763261603/powred_sqkgxa.webp"
        legends={legends}
        backgroundColor="bg-black"
        textColor="text-white"
      />

      {/* Split Info Section */}
      <SideBySide
        title="Our development approach combines modern technologies, agile methodology, rigorous testing, and scalable architecture. Every solution is secure, optimized, and future-ready — designed to deliver measurable results for your business."
        imageSrc="https://res.cloudinary.com/dohksngyi/image/upload/v1763262123/The-Rise-of-AI-Powered-Blog-15Apr25_shy6ol.webp"
        reverse
        backgroundColor="bg-[#0a0a0a]"
        gradientFrom="from-gray-900"
        gradientTo="to-black"
      />

      {/* Closing Section */}
      <HeadingSubTitel
        tagText="GROW WITH US"
        heading="Partner with NeuroNextGen Solutions for Innovation & Success"
        description="Whether you're a startup or an enterprise, we provide technology solutions that accelerate growth, improve efficiency, and deliver high-quality results."
      />
    </>
  );
}
