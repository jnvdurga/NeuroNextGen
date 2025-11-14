import PageHeroSection from "../../components/PageComponents/PageHeroSection";
import LogosSection from "../../components/PageComponents/PageLogoSection";
import QuoteSection from "../../components/PageComponents/PageQuoteSection";
import InfoSplitSection from "../../components/PageComponents/PageInfoSplitSection";
import ImproveDataSection from "../../components/PageComponents/PageImproveDataSection";
import FeaturesSection from "../../components/PageComponents/PageFeatures";
import CollectionSection from "../../components/PageComponents/Collection";
import CardsSection from "../../components/PageComponents/Card";
import { FaBrain, FaRobot, FaCogs, FaGlobe } from "react-icons/fa";


export default function DataAnnotation() {
  // --- Collection Section ---
  const collectionData = [
    {
      image: "/data-annotation01.webp",
      title: "Annotation Labs",
      description:
        "Expert-led labeling hubs equipped with proprietary annotation tools and multi-modal interfaces for text, vision, and speech data.",
    },
    {
      image: "/data-annotation02.webp",
      title: "Human-in-the-Loop Systems",
      description:
        "Real-time collaboration between annotators and AI validators ensures accurate, bias-free, and context-aware dataset creation.",
    },
    {
      image: "/data-annotation03.webp",
      title: "Quality Assurance Pipelines",
      description:
        "Each dataset passes through multi-stage QA — combining automation, peer review, and domain-specific validation layers.",
    },
  ];

  // --- Features Section ---
  const featuresData = [
    {
      icon: "/data-annotation04.webp",
      title: "Multi-Modal Annotation",
      desc: "Text, image, audio, and video annotation capabilities under one infrastructure — ensuring seamless integration for complex AI models.",
    },
    {
      icon: "/data-annotation05.webp",
      title: "Human + Machine Efficiency",
      desc: "AI-assisted labeling tools accelerate workflows while maintaining human-level judgment for edge cases and contextual accuracy.",
    },
    {
      icon: "/data-annotation06.webp",
      title: "Scalable Annotation Infrastructure",
      desc: "Our cloud-based platform handles millions of data points daily — optimized for enterprise AI, LLMs, and autonomous systems.",
    },
    {
      icon: "/data-annotation07.webp",
      title: "Advanced Quality Control",
      desc: "Layered QA pipelines identify inconsistencies, bias, and labeling drift — ensuring reliable ground truth for model training.",
    },
    {
      icon: "/data-annotation08.webp",
      title: "Ethical & Secure Operations",
      desc: "Data is handled with end-to-end encryption, anonymization, and compliance with GDPR, HIPAA, and ISO data privacy standards.",
    },
    {
      icon: "/data-annotation09.webp",
      title: "Domain-Specific Expertise",
      desc: "Specialized annotation teams in healthcare, finance, manufacturing, and linguistics ensure datasets are relevant and reliable.",
    },
  ];

 
 // --- Cards Section ---
 const cards = [
  {
    title: "Human-in-the-Loop Annotation",
    desc: "Empower your AI pipeline with expert human oversight that continuously validates and improves model predictions. This ensures data precision, reduces labeling errors, and enhances contextual understanding across complex scenarios.",
    icon: <FaBrain />,
  },
  {
    title: "AI-Augmented Labeling",
    desc: "Combine machine efficiency with human intelligence. Smart pre-labeling powered by AI drastically reduces manual effort while human validators fine-tune the output for accuracy, consistency, and bias mitigation.",
    icon: <FaRobot />,
  },
  {
    title: "Workflow Automation",
    desc: "Optimize every step of your annotation lifecycle with automated task routing, integrated quality checks, and real-time progress tracking. Achieve faster turnarounds and improved transparency with minimal manual coordination.",
    icon: <FaCogs />,
  },
  {
    title: "Global Annotation Network",
    desc: "Access a multilingual, domain-specialized workforce distributed across 90+ regions. Gain culturally aware, unbiased datasets that accurately reflect real-world diversity and improve global model performance.",
    icon: <FaGlobe />,
  },
];

  const stats = [
    { value: "50M+", label: "Annotations Processed Monthly" },
    { value: "75+", label: "Enterprise AI Projects Delivered" },
  ];

  const legends = [
    { color: "#22c55e", text: "AI-Assisted Labeling Operations" },
    { color: "#a78bfa", text: "Global Human Annotation Workforce" },
  ];

  return (
    <>
      {/* Hero Section */}
      <PageHeroSection
        title="Data Annotation Engine"
        subtitle="Empower your AI models with accurate, bias-free, and ethically sourced training data — powered by human intelligence and automation."
        buttonText="Get Started"
        imageSrc="/data_annotation.webp"
      />

      {/* Collection Section */}
      <CollectionSection data={collectionData} />
      
      {/* Logos */}
      <LogosSection
        tagText="INDUSTRY PARTNERS"
        heading="Trusted by Global AI Innovators"
        description="Our annotation ecosystem combines advanced tooling, workforce intelligence, and automated QA to deliver world-class datasets for AI leaders across industries."
      />

      {/* Features Section */}
      <FeaturesSection features={featuresData} />
      

      {/* Quote Section */}
      {/* <QuoteSection
        quote="True AI performance begins with the integrity of the data it’s trained on. Annotation is not a task — it’s a craft."
        author="Fei-Fei Li"
        designation="Co-Director, Stanford Human-Centered AI"
      /> */}

      {/* Improve Data Section */}
      <ImproveDataSection
        tagText="OPTIMIZE"
        title="Annotation That Scales with Intelligence"
        subtitle="Our platform bridges human expertise and AI-assisted validation to ensure every data point contributes to model reliability and ethical intelligence."
      />

      {/* Split Info Section */}
      <InfoSplitSection
        title="Data annotation is the foundation of every successful AI model. Our pipeline spans from pre-labeling automation to continuous human QA, ensuring consistency, fairness, and contextual understanding."
        imageSrc="/data-annotation11.webp"
        reverse
        backgroundColor="bg-[#0a0a0a]"
        gradientFrom="from-gray-900"
        gradientTo="to-black"
      />

      {/* Cards + Stats Section */}
      <CardsSection
        cards={cards}
        stats={stats}
        mapImageSrc="/data-annotation10.webp"
        legends={legends}
        backgroundColor="bg-black"
        textColor="text-white"
      />

      {/* Closing Section */}
      <ImproveDataSection
        tagText="INNOVATE"
        title="Data That Teaches Machines to Understand the World"
        subtitle="Data Annotation Engine transforms raw, unstructured data into model-ready intelligence — driving the accuracy, fairness, and reliability of next-generation AI."
      />
    </>
  );
}
