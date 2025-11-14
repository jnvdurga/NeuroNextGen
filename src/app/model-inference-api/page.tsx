import PageHeroSection from "../../components/PageComponents/PageHeroSection";
import LogosSection from "../../components/PageComponents/PageLogoSection";
import QuoteSection from "../../components/PageComponents/PageQuoteSection";
import InfoSplitSection from "../../components/PageComponents/PageInfoSplitSection";
import ImproveDataSection from "../../components/PageComponents/PageImproveDataSection";
import FeaturesSection from "../../components/PageComponents/PageFeatures";
import CollectionSection from "../../components/PageComponents/Collection";
import CardsSection from "../../components/PageComponents/Card";
import { FaBolt, FaCodeBranch, FaNetworkWired, FaShieldAlt } from "react-icons/fa";

export default function ModelInferenceAPI() {
  // --- Features Section ---
  const featuresData = [
    {
      icon: "/Screenshot 2025-10-31 at 2.54.31 PM.webp",
      title: "Ultra-Low Latency APIs",
      desc: "Deploy models with sub-100ms response times using optimized runtime environments and GPU-accelerated inference layers.",
    },
    {
      icon: "/Screenshot 2025-10-31 at 2.54.35 PM.webp",
      title: "Multi-Model Endpoints",
      desc: "Host multiple models under unified APIs, enabling smart routing and A/B testing across different model versions.",
    },
    {
      icon: "/Screenshot 2025-10-31 at 2.54.39 PM.webp",
      title: "Auto-Scaling Infrastructure",
      desc: "Our inference engine dynamically scales compute instances to meet demand, ensuring consistent performance at any load.",
    },
    {
      icon: "/Screenshot 2025-10-31 at 2.54.44 PM.webp",
      title: "Streaming Inference Support",
      desc: "Enable token-level or frame-level streaming for conversational and vision-based models with real-time response delivery.",
    },
    {
      icon: "/Screenshot 2025-10-31 at 2.54.47 PM.webp",
      title: "Customizable Deployment Options",
      desc: "Deploy models across cloud, edge, or on-prem environments — optimized for privacy, cost, and performance.",
    },
    {
      icon: "/Screenshot 2025-10-31 at 2.54.51 PM.webp",
      title: "Monitoring & Usage Analytics",
      desc: "Track API usage, latency, error rates, and model drift through detailed dashboards and automated reports.",
    },
  ];

 // --- Cards Section ---
const cards = [
  {
    title: "Optimized Runtime Engines",
    desc: "Achieve lightning-fast inference with TensorRT, ONNX Runtime, and TorchServe — fine-tuned for GPU acceleration, low latency, and scalable deployment across environments.",
    icon: <FaBolt />, // ⚡ speed and performance
  },
  {
    title: "Versioned API Management",
    desc: "Seamlessly manage and deploy multiple model versions with built-in traffic routing, rollback capabilities, and structured schema versioning for reliable updates.",
    icon: <FaCodeBranch />, // 🌿 version control & branching
  },
  {
    title: "Edge & Hybrid Inference",
    desc: "Run models directly at the edge or in hybrid environments to minimize response times, enhance user experience, and optimize bandwidth utilization across distributed networks.",
    icon: <FaNetworkWired />, // 🌐 network connectivity & edge compute
  },
  {
    title: "Security & Compliance",
    desc: "Protect your inference endpoints with enterprise-grade encryption, fine-grained access control, and continuous compliance auditing aligned with global standards.",
    icon: <FaShieldAlt />, // 🛡️ security & protection
  },
];


  const stats = [
    { value: "99.99%", label: "API Uptime Across All Regions" },
    { value: "<100ms", label: "Average Inference Latency" },
  ];

  const legends = [
    { color: "#60a5fa", text: "Inference Gateway" },
    { color: "#a78bfa", text: "Distributed Model Serving Layer" },
  ];

  return (
    <>
      {/* Hero Section */}
      <PageHeroSection
        title="Model Inference API Platform"
        subtitle="Deliver fast, reliable, and secure AI predictions with our scalable inference API infrastructure built for production environments."
        buttonText="Request Access"
        imageSrc="/Model_Inference.webp"
      />

      {/* Collection Section */}
      {/* <CollectionSection data={collectionData} /> */}
      
      {/* Logos */}
      <LogosSection
        tagText="DEPLOYED BY GLOBAL AI TEAMS"
        heading="Enterprise-Grade AI Inference Infrastructure"
        description="Our Model Inference API framework enables real-time prediction serving, elastic scaling, and intelligent monitoring — so your models stay responsive, reliable, and ready for production."
      />

      {/* Features Section */}
      <FeaturesSection features={featuresData} />

      {/* Improve Data Section */}
      <ImproveDataSection
        tagText="DEPLOY AT SCALE"
        title="Instant Inference, Infinite Scalability"
        subtitle="Deploy any model, anywhere. Our infrastructure automatically optimizes for speed, cost, and reliability — from edge devices to large-scale cloud clusters."
      />

      {/* Split Info Section */}
      <InfoSplitSection
        title="Our inference layer unifies GPU acceleration, intelligent caching, and auto-scaling — ensuring every model prediction is delivered with maximum efficiency and minimum latency."
        imageSrc="/Model_Inference07.webp"
        reverse
        backgroundColor="bg-[#0a0a0a]"
        gradientFrom="from-gray-900"
        gradientTo="to-black"
      />

      {/* Cards + Stats Section */}
      <CardsSection
        cards={cards}
        stats={stats}
        mapImageSrc="/Model_Inference08.webp"
        legends={legends}
        backgroundColor="bg-black"
        textColor="text-white"
      />

      {/* Closing Section */}
      <ImproveDataSection
        tagText="PREDICT FASTER"
        title="Scalable APIs for Every AI Model"
        subtitle="Our Model Inference API delivers low-latency, high-throughput predictions — powering intelligent applications with speed, precision, and confidence."
      />
    </>
  );
}
