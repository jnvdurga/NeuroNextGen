import PageHeroSection from "../../components/PageComponents/PageHeroSection";
import LogosSection from "../../components/PageComponents/PageLogoSection";
import ModelTrainingFlow from "../../components/PageComponents/PageModelTrainingFlow";
import QuoteSection from "../../components/PageComponents/PageQuoteSection";
import InfoSplitSection from "../../components/PageComponents/PageInfoSplitSection";
import ImproveDataSection from "../../components/PageComponents/PageImproveDataSection";
import FeaturesSection from "../../components/PageComponents/PageFeatures";

export default function genai() {
 const featuresData = [
  {
    icon: "/genai_feature1.webp",
    title: "Ops Center for Data Integrity",
    desc: "Gain real-time visibility and control over every step of dataset creation, validation, and optimization.",
  },
  {
    icon: "/genai_feature2.webp",
    title: "Global Expert Network",
    desc: "Tap into a vetted ecosystem of linguists, engineers, and domain specialists — delivering data precision across every language, industry, and modality.",
  },
  {
    icon: "/genai_feature3.webp",
    title: "Model Performance Boost",
    desc: "Empower your Generative AI with advanced, high-quality data pipelines built for scalability and precision.",
  },
  {
    icon: "/genai_feature4.webp",
    title: "Data Efficiency at Scale",
    desc: "Accelerate dataset generation with intelligent automation and human-in-the-loop efficiency.",
  },
  {
    icon: "/genai_feature5.webp",
    title: "Continuous Model Evaluation",
    desc: "Identify blind spots and enhance model resilience through proactive benchmarking and red-teaming.",
  },
  {
    icon: "/genai_feature6.webp",
    title: "Responsible AI Development",
    desc: "Ensure every dataset aligns with ethical standards — prioritizing fairness, transparency, and data privacy.",
  },
];
   
  return (
    <div className="flex flex-col">
      
        <PageHeroSection
        title="Generative AI Data Engine"
        subtitle="Powering the Next Wave of Intelligent Systems"
        buttonText="Book a Demo"
        imageSrc="/genai.webp"
      />
      
      <LogosSection
      tagText="PRODUCT OVERVIEW"
      heading="Generative AI Data Engine"
      description="Unleash the full potential of your AI with hyper-curated, high-fidelity datasets — engineered by a fusion of human expertise and AI automation. Our Generative AI Data Engine accelerates dataset creation, ensuring every model you build is smarter, faster, and more adaptive."
    />
    <ModelTrainingFlow
        title="Model Training Flow"
        imageSrc="/model_flow.webp"
        note="Pre-Training, Post-Training, and Deployment are managed by customers"
      />

       <QuoteSection
        quote="In the world of Generative AI, the quality of your model depends entirely on the quality of your data. Our platform provides meticulously curated, domain-specific datasets designed to fuel your AI’s growth and performance. With precision, scalability, and adaptability at its core, we help you train high-performing models that generate accurate, context-aware, and innovative outcomes — turning your data into true intelligence."
        author=""
        designation=""
      />

       <InfoSplitSection
        title="Generative AI Data Engine seamlessly integrates advanced automation with human-in-the-loop intelligence to deliver high-fidelity, domain-optimized training data — precisely aligned with your AI vision, accelerating innovation and model excellence at scale."
        imageSrc="/genai02.webp"
      />
      <ImproveDataSection
        tagText="BUILD AI"
        title="Improve Your Models By Improving Your Data"
        subtitle="High-quality training data, curated by subject matter experts, is crucial for developing powerful, accurate, Generative AI models."
      />

     <FeaturesSection features={featuresData} />
      
    {/* <QuoteSection
        quote="The Future of AI Starts Here"
        author="Reimagine what’s possible when data, automation, and intelligence converge.
Your next breakthrough model begins with the right data engine."
        designation=""
      /> */}



    </div>
  );
}