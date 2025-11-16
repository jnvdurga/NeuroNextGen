import { FaLaptopCode, FaMobileAlt, FaCloud, FaPalette } from "react-icons/fa";

import HeroSection from "../../component/HeroSection";
import HeadingSubTitel from "../../component/HeadingSubTitel";
import FeaturesSection from "../../component/FeatureSection";
import SideBySide from "../../component/SideBySide";

export default function MobileDevelopment() {
  // --- Features Section ---
  const featuresData = [
    {
      icon: "https://cdn-icons-png.flaticon.com/512/1829/1829586.png",
      title: "Custom Mobile App Development",
      desc: "We develop fully tailored mobile applications designed to meet your business goals and user expectations with precision.",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/2721/2721298.png",
      title: "Cross-Platform Development",
      desc: "Using React Native and Flutter, we build apps that run smoothly on both Android and iOS while reducing cost and time.",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/681/681392.png",
      title: "High-Performance Architecture",
      desc: "Our apps follow Clean Architecture and MVVM patterns to ensure speed, security, smooth navigation, and long-term scalability.",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/1829/1829589.png",
      title: "UI/UX Design for Mobile",
      desc: "We design beautiful interfaces that are simple, engaging, and built with user behavior in mind to maximize retention.",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/3500/3500833.png",
      title: "Backend & API Integration",
      desc: "Connect your app with secure APIs powered by Node.js, Firebase, AWS, or your existing server infrastructure.",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/992/992651.png",
      title: "Testing & App Store Deployment",
      desc: "We handle quality assurance, performance optimization, Play Store submission, and App Store publishing.",
    },
  ];

  // --- Cards Section ---
  const cards = [
    {
      title: "Android App Development",
      desc: "Build high-quality and feature-rich Android apps optimized for speed and performance.",
      icon: <FaMobileAlt />,
    },
    {
      title: "iOS App Development",
      desc: "Premium, secure, and smooth-performing iOS applications built using Swift and Apple best practices.",
      icon: <FaMobileAlt />,
    },
    {
      title: "Cross-Platform Apps",
      desc: "One codebase for both platforms using React Native or Flutter for faster and cost-effective development.",
      icon: <FaCloud />,
    },
    {
      title: "UI/UX Prototyping",
      desc: "Experience your app before development begins with interactive prototypes and intuitive mobile-first design.",
      icon: <FaPalette />,
    },
  ];

  const stats = [
    { value: "150+", label: "Mobile Apps Delivered" },
    { value: "4.9/5", label: "Average App Rating" },
  ];

  const legends = [
    { color: "#3B82F6", text: "Android & iOS Apps" },
    { color: "#8B5CF6", text: "Cross-Platform Solutions" },
  ];

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="Mobile App Development Services"
        subtitle="We build fast, secure, and user-friendly mobile apps for Android and iOS — designed to scale with your business."
        buttonText="Start Your Mobile Project"
        imageUrl="https://res.cloudinary.com/dohksngyi/image/upload/v1763256466/mobile_tcm5dj.png"
      />

      {/* Logos Section */}
      <HeadingSubTitel
        tagText="TRUSTED BY GLOBAL BRANDS"
        heading="Build Mobile Apps with Confidence"
        description="Our team engineers top-quality, scalable, and user-centric mobile apps for businesses across all industries."
      />

      {/* Features Section */}
      <FeaturesSection features={featuresData} />

      {/* Transform Section */}
      <HeadingSubTitel
        tagText="TRANSFORM YOUR MOBILE EXPERIENCE"
        heading="We Build Apps That Users Love"
        description="Every app we build focuses on performance, design excellence, and real-world usability — ensuring long-term success."
      />

      {/* Info Split Section */}
      <SideBySide
        title="From concept to deployment, we deliver mobile apps built on clean architecture, modern frameworks, and secure backend technology. Whether you're a startup or enterprise — we help you go mobile the right way."
        imageSrc="https://res.cloudinary.com/dohksngyi/image/upload/v1763256859/android_aryr72.jpg"
        reverse
        backgroundColor="bg-[#0a0a0a]"
        gradientFrom="from-gray-900"
        gradientTo="to-black"
      />

      {/* Closing Section */}
      <HeadingSubTitel
        tagText="LAUNCH YOUR MOBILE APP"
        heading="Let’s Build a High-Quality Mobile App Together"
        description="We combine innovation, creativity, and powerful engineering to bring your mobile app idea to life. Experience smooth development from start to finish."
      />
    </>
  );
}
