import QuoteSection from "../../component/QuoteSection";
import SideBySide from "../../component/SideBySide";
import FeaturesSection from "../../component/FeatureSection";
import HeroSection from "../../component/HeroSideBySide";
import HeadingSubTitel from "../../component/HeadingSubTitel";

export default function AiIntegration() {
  const featuresData = [
    {
      icon: "https://cdn-icons-png.flaticon.com/512/4712/4712107.png",
      title: "AI Chatbots & Virtual Assistants",
      desc: "Deploy intelligent AI agents that automate support, sales, and customer engagement with natural, human-like conversations.",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/4712/4712089.png",
      title: "Automation & Smart Workflows",
      desc: "Automate repetitive business operations like data entry, approvals, reporting, and notifications using AI-driven pipelines.",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/4712/4712101.png",
      title: "Predictive Intelligence",
      desc: "Leverage machine learning to forecast trends, detect anomalies, and support faster, data-driven decision making.",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/4712/4712073.png",
      title: "Computer Vision AI",
      desc: "Enable systems to analyze images, detect objects, verify documents, and automate real-world visual tasks with high accuracy.",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/4712/4712057.png",
      title: "AI Model Integration",
      desc: "Integrate OpenAI, Google Gemini, and custom ML models into your application, CRM, web app, or enterprise workflows.",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/4712/4712051.png",
      title: "Custom AI Development",
      desc: "Get AI solutions built specifically for your business — from automation tools and classifiers to fully custom AI systems.",
    },
  ];

  return (
    <div className="flex flex-col">

      {/* ⭐ NEW HERO SECTION CONTENT */}
      <HeroSection
        title="AI Integration for the Future of Business"
        subtitle="Transform your existing systems with AI-powered automation, smarter workflows, and intelligent decision-making tools — engineered by NeuroNextGen Solutions."
        buttonText="Start Your AI Transformation"
        imageSrc="https://res.cloudinary.com/dohksngyi/image/upload/v1763229662/aicolorbrain_aeqylh.jpg"
      />

      {/* ⭐ SUB HEADING */}
      <HeadingSubTitel
        tagText="AI SOLUTIONS"
        heading="Smarter, Faster & More Efficient Business Operations"
        description="We seamlessly integrate AI into websites, mobile apps, enterprise tools, and internal workflows to reduce manual effort, increase speed, and improve customer experience. Our AI solutions fit your business — not the other way around."
      />

      {/* ⭐ QUOTE SECTION */}
      <QuoteSection
        quote="AI is not the future — it's the present. Businesses that adopt intelligent automation today will lead their industries tomorrow."
        author="NeuroNextGen Solutions"
        designation="AI & Automation Engineering Team"
      />

      {/* ⭐ IMAGE + TEXT SECTION */}
      <SideBySide
        title="“True AI integration isn’t about replacing what you have — it’s about amplifying it. When intelligence flows seamlessly into your existing systems, your business doesn’t just evolve… it accelerates.”"
        imageSrc="https://res.cloudinary.com/dohksngyi/image/upload/v1763230472/aiintgration_hxtaau.webp"
        reverse
      />

      {/* ⭐ NEW SUB HEADING */}
      <HeadingSubTitel
        tagText="WHY AI"
        heading="Enhance Your Business With Intelligent Automation"
        description="From customer support to workflow automation — our AI solutions help your team save time, reduce costs, and operate with greater speed and accuracy. We specialize in integrating AI without disrupting your current tools or workflow."
      />

      {/* ⭐ FEATURE SECTION */}
      <FeaturesSection features={featuresData} />

    </div>
  );
}
