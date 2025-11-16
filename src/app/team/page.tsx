"use client";

import { FaUserTie, FaCogs, FaServer, FaGlobeAmericas } from "react-icons/fa";

import HeroSection from "../../component/HeroSideBySide";
import CardsSection from "../../component/CardSection";
import HeadingSubTitel from "../../component/HeadingSubTitel";
import HeroCardsSection from "../../component/HeroCardSection";
import SideBySide from "../../component/SideBySide";

export default function Team() {
  // --- Collection Section (3 Cards) ---
  const collectionData = [
    {
      image: "https://res.cloudinary.com/dohksngyi/image/upload/v1763264267/webexpert_u04faa.jpg",
      title: "Web Development Experts",
      description:
        "Our developers specialize in building robust and scalable web solutions using React, Next.js, Node.js, and MongoDB.",
    },
    {
      image: "https://res.cloudinary.com/dohksngyi/image/upload/v1763264374/uiuxdisner_umgvwv.webp",
      title: "UI/UX Designers",
      description:
        "Our designers create intuitive, user-friendly interfaces with a focus on responsiveness, accessibility, and visual appeal.",
    },
    {
      image: "https://res.cloudinary.com/dohksngyi/image/upload/v1763264491/Back_End_Developer_rtbeg9.avif",
      title: "Cloud & Backend Specialists",
      description:
        "We manage secure backend systems, APIs, cloud deployment, and performance optimization for seamless user experiences.",
    },
  ];

  // --- Cards Section ---
  const cards = [
    {
      title: "Skilled Engineering Team",
      desc: "A diverse team of developers, designers, and analysts working collaboratively to deliver production-ready solutions.",
      icon: <FaUserTie />,
    },
    {
      title: "Agile & Automated Processes",
      desc: "Our workflows leverage agile methodology and automation pipelines for faster delivery, consistency, and reliability.",
      icon: <FaCogs />,
    },
    {
      title: "Secure & Scalable Infrastructure",
      desc: "We deploy projects on secure servers with optimized databases and CDN support for global reach and uptime.",
      icon: <FaServer />,
    },
    {
      title: "Global Collaboration",
      desc: "Our team collaborates with clients across the globe, ensuring cultural, technical, and business alignment.",
      icon: <FaGlobeAmericas />,
    },
  ];

  // --- Stats Section ---
  const stats = [
    { value: "50+", label: "Expert Team Members" },
    { value: "250+", label: "Successful Projects Delivered" },
    { value: "99%", label: "Client Satisfaction Rate" },
    { value: "5+", label: "Years of Industry Experience" },
  ];

  const legends = [
    { color: "#60a5fa", text: "Full-Stack Web Development" },
    { color: "#a78bfa", text: "UI/UX & Interaction Design" },
    { color: "#facc15", text: "Backend & Cloud Solutions" },
    { color: "#34d399", text: "Performance & Security" },
  ];

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="Meet the NeuroNextGen Solutions Team"
        subtitle="Our diverse and skilled team is dedicated to delivering innovative digital solutions for businesses worldwide."
        buttonText="Connect With Us"
        imageSrc="https://res.cloudinary.com/dohksngyi/image/upload/v1763264079/team_fjdqlk.jpg"
      />

      {/* Team Expertise Section */}
      <CardsSection data={collectionData} />

      {/* Heading / Intro */}
      <HeadingSubTitel
        tagText="OUR TEAM"
        heading="Experts Driving Innovation & Excellence"
        description="From creative designers to full-stack engineers and cloud specialists, our team collaborates to deliver high-quality, scalable, and innovative digital solutions."
      />

      {/* Cards + Stats Section */}
      <HeroCardsSection
        cards={cards}
        stats={stats}
        mapImageSrc="https://res.cloudinary.com/dohksngyi/image/upload/v1763264703/teams_qqznoe.jpg"
        legends={legends}
        backgroundColor="bg-black"
        textColor="text-white"
      />

      {/* Team Philosophy Section */}
      <SideBySide
        title="Our team thrives on collaboration, continuous learning, and innovation. Every project we deliver reflects our dedication to quality, efficiency, and client success."
        imageSrc="https://res.cloudinary.com/dohksngyi/image/upload/v1763264846/teamwork_rk70do.jpg"
        reverse
        backgroundColor="bg-[#0a0a0a]"
        gradientFrom="from-gray-900"
        gradientTo="to-black"
      />

      {/* Closing Section */}
      <HeadingSubTitel
        tagText="WORK WITH US"
        heading="Join Hands With Our Expert Team"
        description="Whether you're a startup or a global enterprise, our team is ready to provide technology solutions that drive business growth and innovation."
      />
    </>
  );
}
