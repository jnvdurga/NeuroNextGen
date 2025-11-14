import PageHeroSection from "../../components/PageComponents/PageHeroSection";
import LogosSection from "../../components/PageComponents/PageLogoSection";
import QuoteSection from "../../components/PageComponents/PageQuoteSection";
import InfoSplitSection from "../../components/PageComponents/PageInfoSplitSection";
import ImproveDataSection from "../../components/PageComponents/PageImproveDataSection";
import FeaturesSection from "../../components/PageComponents/PageFeatures";
import CollectionSection from "../../components/PageComponents/Collection";
import CardsSection from "../../components/PageComponents/Card";
  import { Brain, Code2, CloudCog, Palette } from "lucide-react";

export default function TechTalent() {
  // --- Collection Section ---
  const collectionData = [
    {
      image: "/Vetted_tech01.webp",
      title: "Access World-Class Tech Talent",
      description:
        "Get access to a global pool of elite engineers, designers, and data experts — pre-vetted for technical excellence and cultural fit.",
    },
    {
      image: "/Vetted_tech02.webp",
      title: "Flexible Hiring Models",
      description:
        "Choose between full-time, part-time, or project-based engagements. Scale your team instantly as your business evolves.",
    },
    {
      image: "/Vetted_tech03.webp",
      title: "Seamless Remote Collaboration",
      description:
        "Empower your team with remote professionals who integrate smoothly with your workflows, tools, and company culture.",
    },
  ];

  // --- Features Section ---
  const featuresData = [
    {
      icon: "/Vetted_tech04.webp",
      title: "Vetted Tech Professionals",
      desc: "We connect you with engineers who have been screened for technical skill, problem-solving, and communication ability.",
    },
    {
      icon: "/Vetted_tech04.webp",
      title: "Domain Expertise",
      desc: "Our network covers AI, data engineering, DevOps, cybersecurity, full-stack development, and more.",
    },
    {
      icon: "/Vetted_tech04.webp",
      title: "Rapid Onboarding",
      desc: "Hire within days, not weeks — our streamlined process gets top talent working on your projects quickly.",
    },
    {
      icon: "/Vetted_tech04.webp",
      title: "Managed Staffing Support",
      desc: "We handle contracts, payments, and logistics — letting you focus purely on innovation and growth.",
    },
    {
      icon: "/Vetted_tech04.webp",
      title: "Continuous Skill Development",
      desc: "We ensure our professionals stay updated with modern technologies and industry practices.",
    },
    {
      icon: "/Vetted_tech04.webp",
      title: "Global Reach, Local Impact",
      desc: "Tap into a worldwide talent pool while maintaining time zone compatibility and communication alignment.",
    },
  ];

  // --- Cards Section ---

const cards = [
  {
    title: "AI & Data Engineers",
    desc: "Leverage the power of machine learning, advanced analytics, and automated data pipelines with our expert AI and data engineers. From model training to real-time inference and data visualization, we help you unlock actionable insights and scale intelligent systems efficiently.",
    icon: <Brain className="w-10 h-10 text-cyan-400" />,
  },
  {
    title: "Full-Stack Developers",
    desc: "Build robust and responsive applications with developers skilled in React, Next.js, Node.js, and modern API-driven architectures. Our full-stack engineers deliver clean code, scalable systems, and seamless user experiences optimized for both performance and maintainability.",
    icon: <Code2 className="w-10 h-10 text-blue-400" />,
  },
  {
    title: "Cloud & DevOps Specialists",
    desc: "Automate, scale, and secure your entire infrastructure with AWS, Azure, and GCP-certified DevOps experts. From CI/CD pipelines to Kubernetes orchestration and monitoring, we ensure faster releases, higher uptime, and cost-efficient cloud management.",
    icon: <CloudCog className="w-10 h-10 text-purple-400" />,
  },
  {
    title: "Product Designers & Managers",
    desc: "Transform ideas into intuitive, impactful products with our creative UI/UX designers and agile product managers. We combine design thinking with data-driven strategy to craft experiences that delight users and align perfectly with business goals.",
    icon: <Palette className="w-10 h-10 text-pink-400" />,
  },
];



  const stats = [
    { value: "500+", label: "Top Engineers Available" },
    { value: "7 Days", label: "Average Hiring Time" },
  ];

  const legends = [
    { color: "#00E7FF", text: "Engineering Talent" },
    { color: "#7AFFF7", text: "AI & Cloud Experts" },
  ];

  return (
    <>
      {/* Hero Section */}
      <PageHeroSection
        title="Vetted Tech Talent Solutions"
        subtitle="Build, scale, and accelerate with top-tier global tech professionals — vetted, skilled, and ready to join your mission."
        buttonText="Find Talent"
        imageSrc="/talent.webp"
      />
            {/* Collection Section */}
      <CollectionSection data={collectionData} />
      

      {/* Logos Section */}
      <LogosSection
        tagText="TRUSTED BY INNOVATORS WORLDWIDE"
        heading="Hire the Right People, Instantly"
        description="Our platform connects you with world-class developers, designers, and engineers — ensuring fast, reliable, and high-quality team growth."
      />

      {/* Features Section */}
      <FeaturesSection features={featuresData} />
      

      {/* Quote Section */}
      {/* <QuoteSection
        quote="The right talent doesn't just fill roles — it transforms possibilities into progress."
        author="Satya Nadella"
        designation="CEO, Microsoft"
      /> */}

      {/* Improve Data Section */}
      <ImproveDataSection
        tagText="FIND TALENT THAT FITS"
        title="Empower Your Vision with Skilled Professionals"
        subtitle="We provide you access to the best global talent to build, innovate, and deliver without hiring delays or skill gaps."
      />

      {/* Info Split Section */}
      <InfoSplitSection
        title="Our tech talent solutions combine flexibility, reliability, and expertise — helping you grow your engineering capacity without the complexity of recruitment."
        imageSrc="/Vetted_tech06.webp"
        reverse
        backgroundColor="bg-[#0a0a0a]"
        gradientFrom="from-gray-900"
        gradientTo="to-black"
      />

      {/* Cards + Stats Section */}
      <CardsSection
        cards={cards}
        stats={stats}
        mapImageSrc="/Vetted_tech05.webp"
        legends={legends}
        backgroundColor="bg-black"
        textColor="text-white"
      />

      {/* Closing Section */}
      <ImproveDataSection
        tagText="BUILD YOUR DREAM TEAM"
        title="Access the Future of Work — Today"
        subtitle="Discover top-tier tech professionals ready to take your projects from concept to execution — quickly and efficiently."
      />
    </>
  );
}
