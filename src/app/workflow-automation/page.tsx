import PageHeroSection from "../../components/PageComponents/PageHeroSection";
import LogosSection from "../../components/PageComponents/PageLogoSection";
import QuoteSection from "../../components/PageComponents/PageQuoteSection";
import InfoSplitSection from "../../components/PageComponents/PageInfoSplitSection";
import ImproveDataSection from "../../components/PageComponents/PageImproveDataSection";
import FeaturesSection from "../../components/PageComponents/PageFeatures";
import CollectionSection from "../../components/PageComponents/Collection";
import CardsSection from "../../components/PageComponents/Card";
import { Workflow, Repeat, Bell, Gauge } from "lucide-react";

export default function WorkflowAutomation() {
   // --- Collection Section ---
  const collectionData = [
    {
      image: "/workflow01.webp",
      title: "End-to-End Pipeline Automation",
      description:
        "Orchestrate data ingestion, preprocessing, training, and deployment automatically — reducing manual intervention and errors.",
    },
    {
      image: "/workflow02.webp",
      title: "Intelligent Orchestration",
      description:
        "AI-driven automation dynamically schedules and optimizes pipelines based on data readiness, dependency graphs, and compute load.",
    },
    {
      image: "/workflow03.webp",
      title: "Continuous Deployment Workflows",
      description:
        "Deploy new models, trigger retraining, and manage version rollouts seamlessly with CI/CD integrations and zero-downtime releases.",
    },
  ];

  // --- Features Section ---
  const featuresData = [
    {
      icon: "/workflow04.webp",
      title: "Smart Workflow Orchestration",
      desc: "Automate complex data and ML pipelines using intelligent triggers, condition-based flows, and adaptive scheduling.",
    },
    {
      icon: "/workflow05.webp",
      title: "Cross-Platform Integrations",
      desc: "Seamlessly connect with tools like Airflow, Kubeflow, MLflow, and Jenkins to unify your AI workflow ecosystem.",
    },
    {
      icon: "/workflow06.webp",
      title: "Error Detection & Auto-Recovery",
      desc: "Self-healing workflows automatically detect job failures, retry failed steps, and resume from checkpoints.",
    },
    {
      icon: "/workflow07.webp",
      title: "Human-in-the-Loop Control",
      desc: "Enable manual approvals for critical workflow steps while keeping automation at the core for speed and safety.",
    },
    {
      icon: "/workflow08.webp",
      title: "Scalable Execution Engine",
      desc: "Run thousands of concurrent workflow jobs with distributed orchestration and compute-aware task scheduling.",
    },
    {
      icon: "/workflow09.webp",
      title: "Auditability & Compliance",
      desc: "Built-in tracking, versioning, and logging ensure every workflow meets enterprise-grade audit and compliance standards.",
    },
  ];

  // --- Cards Section ---

const cards = [
  {
    title: "Adaptive Workflow Engine",
    desc: "Dynamic DAG scheduling intelligently orchestrates tasks, selecting optimal execution paths and adapting in real time to resource utilization, system load, and data dependencies.",
    icon: <Workflow className="w-10 h-10 text-cyan-400" />,
  },
  {
    title: "Automated Model Lifecycle",
    desc: "Automate the complete ML lifecycle — from data ingestion and preprocessing to model training, evaluation, and deployment — with built-in monitoring, rollback, and version control.",
    icon: <Repeat className="w-10 h-10 text-blue-400" />,
  },
  {
    title: "Integrated Notifications",
    desc: "Receive instant updates through Slack, email, or custom dashboards on workflow completions, failures, performance anomalies, or retraining triggers for full operational awareness.",
    icon: <Bell className="w-10 h-10 text-yellow-400" />,
  },
  {
    title: "Cost & Performance Optimization",
    desc: "Leverage intelligent autoscaling, smart caching, and idle resource suspension to minimize cloud spend while maximizing throughput, latency, and system efficiency.",
    icon: <Gauge className="w-10 h-10 text-green-400" />,
  },
];



  const stats = [
    { value: "85%", label: "Reduction in Manual Workflow Errors" },
    { value: "3x", label: "Faster End-to-End AI Delivery" },
  ];

  const legends = [
    { color: "#60a5fa", text: "AI Workflow Engine" },
    { color: "#a78bfa", text: "Automation & Orchestration Layer" },
  ];

  return (
    <>
      {/* Hero Section */}
      <PageHeroSection
        title="Workflow Automation for AI Pipelines"
        subtitle="Accelerate AI operations with automated pipelines, intelligent orchestration, and real-time monitoring for every model lifecycle stage."
        buttonText="Request a Demo"
        imageSrc="/workflow.webp"
      />
            {/* Collection Section */}
            <CollectionSection data={collectionData} />
            

      {/* Logos */}
      <LogosSection
        tagText="TRUSTED BY ENTERPRISE AI TEAMS"
        heading="Streamline Complex AI Operations"
        description="Our Workflow Automation framework simplifies the orchestration of data, model, and deployment pipelines — giving your teams speed, consistency, and control."
      />

      {/* Features Section */}
      <FeaturesSection features={featuresData} />


      {/* Improve Data Section */}
      <ImproveDataSection
        tagText="EFFICIENCY REDEFINED"
        title="Automate, Optimize, and Scale"
        subtitle="Our intelligent workflow automation platform eliminates repetitive tasks, freeing your teams to focus on innovation, not operations."
      />

      {/* Split Info Section */}
      <InfoSplitSection
        title="We unify your ML lifecycle — from data prep to model serving — into an intelligent, automated system that ensures consistency, traceability, and performance across every deployment."
        imageSrc="/workflow10.webp"
        reverse
        backgroundColor="bg-[#0a0a0a]"
        gradientFrom="from-gray-900"
        gradientTo="to-black"
      />

      {/* Cards + Stats Section */}
      <CardsSection
        cards={cards}
        stats={stats}
        mapImageSrc="/workflow11.webp"
        legends={legends}
        backgroundColor="bg-black"
        textColor="text-white"
      />

      {/* Closing Section */}
      <ImproveDataSection
        tagText="AUTOMATE INTELLIGENTLY"
        title="AI Workflows That Run Themselves"
        subtitle="Empower your organization with adaptive workflow automation — ensuring seamless orchestration, minimal downtime, and faster innovation at every scale."
      />
    </>
  );
}
