import PageHeroSection from "../../components/PageComponents/PageHeroSection";
import LogosSection from "../../components/PageComponents/PageLogoSection";
import QuoteSection from "../../components/PageComponents/PageQuoteSection";
import InfoSplitSection from "../../components/PageComponents/PageInfoSplitSection";
import ImproveDataSection from "../../components/PageComponents/PageImproveDataSection";
import FeaturesSection from "../../components/PageComponents/PageFeatures";
import CollectionSection from "../../components/PageComponents/Collection";
import CardsSection from "../../components/PageComponents/Card";
import { FaChartLine, FaSyncAlt, FaLightbulb, FaServer } from "react-icons/fa";

export default function ModelMonitoring() {
  // --- Collection Section ---
  const collectionData = [
    {
      image: "/Model_Monitoring01.webp",
      title: "Performance Metrics Tracking",
      description:
        "Continuously monitor precision, recall, latency, and accuracy metrics across production environments to ensure stable model performance.",
    },
    {
      image: "/Model_Monitoring02.webp",
      title: "Drift & Anomaly Detection",
      description:
        "Detect shifts in data distribution or model behavior in real-time using statistical and ML-based drift detection algorithms.",
    },
    {
      image: "/Model_Monitoring03.webp",
      title: "Alert & Incident Automation",
      description:
        "Automatically trigger alerts, rollbacks, or retraining workflows when models deviate from expected performance thresholds.",
    },
  ];

  // --- Features Section ---
  const featuresData = [
    {
      icon: "/Model_Monitoring04.webp",
      title: "Comprehensive Model Observability",
      desc: "Monitor every prediction, request, and model version with detailed visibility into latency, accuracy, and data integrity.",
    },
    {
      icon: "/Model_Monitoring05.webp",
      title: "Data Drift Detection",
      desc: "Real-time analysis of input data distributions helps identify drift and concept shift before they impact predictions.",
    },
    {
      icon: "/Model_Monitoring06.webp",
      title: "Bias & Fairness Evaluation",
      desc: "Continuously evaluate your models for demographic fairness, outcome bias, and ethical compliance across datasets.",
    },
    {
      icon: "/Model_Monitoring07.webp",
      title: "Root Cause Analysis",
      desc: "Automated explainability tools pinpoint the cause of model degradation — from dataset shift to feature imbalance.",
    },
    {
      icon: "/Model_Monitoring08.webp",
      title: "Custom Alerts & Dashboards",
      desc: "Set adaptive alerts for model KPIs and visualize trends with interactive dashboards tailored for your AI workflows.",
    },
    {
      icon: "/Model_Monitoring09.webp",
      title: "Continuous Feedback Loops",
      desc: "Integrate user feedback and retraining pipelines to close the loop and maintain model performance post-deployment.",
    },
  ];

  // --- Cards Section ---
 const cards = [
  {
    title: "End-to-End Monitoring",
    desc: "Gain full visibility into your ML pipelines — tracking data inputs, model predictions, and downstream outcomes from training to real-world deployment for continuous performance assurance.",
    icon: <FaChartLine />, // 📈 performance tracking
  },
  {
    title: "Automated Retraining Signals",
    desc: "Continuously detect concept drift and data anomalies, triggering retraining workflows automatically to preserve accuracy and model relevance over time.",
    icon: <FaSyncAlt />, // 🔁 automation and retraining
  },
  {
    title: "Explainable Insights",
    desc: "Leverage advanced interpretability tools like SHAP and LIME to visualize feature impact, improve trust, and ensure responsible AI decision-making across stakeholders.",
    icon: <FaLightbulb />, // 💡 insights and explainability
  },
  {
    title: "Scalable Infrastructure",
    desc: "Monitor and manage hundreds of models in parallel with distributed log aggregation, low-latency metrics processing, and adaptive scaling for enterprise workloads.",
    icon: <FaServer />, // 🖥️ scalable backend infrastructure
  },
];

  const stats = [
    { value: "99.9%", label: "Uptime in Model Monitoring Pipelines" },
    { value: "250+", label: "Deployed Models Under Active Watch" },
  ];

  const legends = [
    { color: "#60a5fa", text: "Model Observability Layer" },
    { color: "#a78bfa", text: "AI Feedback & Retraining System" },
  ];

  return (
    <>
      {/* Hero Section */}
      <PageHeroSection
        title="Model Monitoring & Observability"
        subtitle="Maintain trust, performance, and transparency with continuous monitoring, drift detection, and explainable AI insights."
        buttonText="Get a Demo"
        imageSrc="/Model_Monitoring.webp"
      />

      {/* Collection Section */}
      <CollectionSection data={collectionData} />
      
      {/* Logos */}
      <LogosSection
        tagText="TRUSTED BY LEADING AI TEAMS"
        heading="Operational Excellence for Deployed AI Systems"
        description="Our model monitoring suite ensures your production AI models remain accurate, compliant, and resilient — even as data and user behavior evolve."
      />

      {/* Features Section */}
      <FeaturesSection features={featuresData} />
      

      {/* Quote Section */}
      {/* <QuoteSection
        quote="Monitoring deployed models is as critical as training them — because reliability defines intelligence."
        author="Fei-Fei Li"
        designation="Co-Director, Stanford Human-Centered AI Institute"
      /> */}

      {/* Improve Data Section */}
      <ImproveDataSection
        tagText="TRUST & TRANSPARENCY"
        title="Intelligent Monitoring for Responsible AI"
        subtitle="We deliver visibility, control, and actionable insights that ensure your AI systems perform safely and ethically in production."
      />

      {/* Split Info Section */}
      <InfoSplitSection
        title="Our model monitoring pipeline provides real-time visibility, intelligent alerts, and automated remediation — ensuring your models adapt, evolve, and perform with consistency across all environments."
        imageSrc="/Model_Monitoring10.webp"
        reverse
        backgroundColor="bg-[#0a0a0a]"
        gradientFrom="from-gray-900"
        gradientTo="to-black"
      />

      {/* Cards + Stats Section */}
      <CardsSection
        cards={cards}
        stats={stats}
        mapImageSrc="/Model_Monitoring11.webp"
        legends={legends}
        backgroundColor="bg-black"
        textColor="text-white"
      />

      {/* Closing Section */}
      <ImproveDataSection
        tagText="EVOLVE RESPONSIBLY"
        title="Build Reliable, Transparent AI Systems"
        subtitle="Our Model Monitoring Platform empowers teams to track, explain, and optimize models in real time — ensuring accuracy, fairness, and trust at scale."
      />
    </>
  );
}
