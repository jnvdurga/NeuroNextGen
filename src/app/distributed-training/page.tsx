import PageHeroSection from "../../components/PageComponents/PageHeroSection";
import LogosSection from "../../components/PageComponents/PageLogoSection";
import QuoteSection from "../../components/PageComponents/PageQuoteSection";
import InfoSplitSection from "../../components/PageComponents/PageInfoSplitSection";
import ImproveDataSection from "../../components/PageComponents/PageImproveDataSection";
import FeaturesSection from "../../components/PageComponents/PageFeatures";
import CollectionSection from "../../components/PageComponents/Collection";
import CardsSection from "../../components/PageComponents/Card";
import { FaNetworkWired, FaBug } from "react-icons/fa";
import { MdOutlineManageAccounts } from "react-icons/md";
import { GiProcessor } from "react-icons/gi"; 

export default function DistributedTraining() {
  // --- Collection Section ---
  const collectionData = [
    {
      image: "/distributed-training01.webp",
      title: "Distributed GPU Clusters",
      description:
        "Run massive model training workloads across synchronized GPU clusters, designed for stability, speed, and resource efficiency.",
    },
    {
      image: "/distributed-training02.webp",
      title: "Parallelized Compute Pipelines",
      description:
        "Leverage advanced data and model parallelization to optimize training throughput while minimizing communication overhead.",
    },
    {
      image: "/distributed-training03.webp",
      title: "Dynamic Scaling Infrastructure",
      description:
        "Intelligently scale up or down compute resources in real time — achieving optimal performance across thousands of nodes.",
    },
  ];

  // --- Features Section ---
  const featuresData = [
    {
      icon: "/distributed-training04.webp",
      title: "High-Performance Distributed Systems",
      desc: "Optimized compute clusters designed for seamless scaling of large language and vision models across multi-GPU environments.",
    },
    {
      icon: "/distributed-training05.webp",
      title: "Data & Model Parallelism",
      desc: "Maximize efficiency through hybrid parallelism — combining tensor, pipeline, and data parallel techniques for balanced workload distribution.",
    },
    {
      icon: "/distributed-training06.webp",
      title: "Fault Tolerance & Recovery",
      desc: "Our resilient architecture includes automatic checkpointing, job retries, and synchronization rollback mechanisms to prevent data loss.",
    },
    {
      icon: "/distributed-training07.webp",
      title: "Optimized Communication Layer",
      desc: "Low-latency data transfer using NCCL, InfiniBand, and RDMA ensures consistent synchronization across multi-node clusters.",
    },
    {
      icon: "/distributed-training08.webp",
      title: "Resource-Aware Scheduling",
      desc: "Intelligent scheduling engines allocate compute resources dynamically, preventing bottlenecks and ensuring workload balance.",
    },
    {
      icon: "/distributed-training09.webp",
      title: "Cross-Cloud Integration",
      desc: "Unified training orchestration across AWS, Azure, and GCP — enabling flexible, hybrid distributed learning environments.",
    },
  ];

  // --- Cards Section ---
 const cards = [
  {
    title: "Multi-Node Synchronization",
    desc: "Achieve seamless model weight consistency across distributed clusters using DeepSpeed, Megatron-LM, and PyTorch DDP — ensuring synchronized gradients and stable large-scale training.",
    icon: <FaNetworkWired />, // 🔗 network connectivity / sync
  },
  {
    title: "Elastic Training Management",
    desc: "Scale your infrastructure effortlessly by adding or removing nodes on the fly. Maintain uninterrupted training while optimizing resource allocation and minimizing overall compute costs.",
    icon: <MdOutlineManageAccounts />, // ⚙️ scalable infra management
  },
  {
    title: "GPU Utilization Optimization",
    desc: "Maximize throughput with intelligent memory allocation, compute balancing, and data parallelism — accelerating training speeds by up to 40% across multi-GPU workloads.",
    icon: <GiProcessor />, // 💻 GPU/processor visualization
  },
  {
    title: "Seamless Monitoring & Debugging",
    desc: "Monitor every node in real time through detailed dashboards and telemetry. Gain full visibility into performance metrics, synchronization latency, and potential bottlenecks for faster troubleshooting.",
    icon: <FaBug />, // 🪲 debugging & monitoring
  },
];


  const stats = [
    { value: "10,000+", label: "GPUs Trained Concurrently" },
    { value: "95%", label: "System Uptime During Distributed Runs" },
  ];

  const legends = [
    { color: "#60a5fa", text: "Distributed Compute Network" },
    { color: "#a78bfa", text: "AI Training Orchestration Layer" },
  ];

  return (
    <>
      {/* Hero Section */}
      <PageHeroSection
        title="Distributed Training Infrastructure"
        subtitle="Train massive AI models efficiently using scalable, fault-tolerant, and performance-optimized distributed systems."
        buttonText="Get a Demo"
        imageSrc="/distributed-training.webp"
      />

      {/* Collection Section */}
      <CollectionSection data={collectionData} />
      
      {/* Logos */}
      <LogosSection
        tagText="POWERED BY GLOBAL CLOUD PARTNERS"
        heading="Optimized for Large-Scale Model Training"
        description="Our distributed training ecosystem empowers AI organizations to accelerate experimentation, reduce training time, and scale models efficiently across multi-cloud GPU environments."
      />

      {/* Features Section */}
      <FeaturesSection features={featuresData} />


      {/* Quote Section */}
      {/* <QuoteSection
        quote="Scaling large models isn’t just about adding GPUs — it’s about designing systems that think in parallel."
        author="Andrew Ng"
        designation="Founder, DeepLearning.AI"
      /> */}

      {/* Improve Data Section */}
      <ImproveDataSection
        tagText="SCALE SMARTLY"
        title="Optimized Distributed Systems for Next-Gen AI"
        subtitle="Our infrastructure automatically balances workloads, monitors performance, and ensures seamless communication between distributed compute nodes."
      />

      {/* Split Info Section */}
      <InfoSplitSection
        title="Our distributed training engine combines dynamic resource allocation, synchronized checkpointing, and multi-cloud orchestration — ensuring your large-scale AI training runs are efficient, resilient, and cost-effective."
        imageSrc="/distributed-training10.webp"
        reverse
        backgroundColor="bg-[#0a0a0a]"
        gradientFrom="from-gray-900"
        gradientTo="to-black"
      />

      {/* Cards + Stats Section */}
      <CardsSection
        cards={cards}
        stats={stats}
        mapImageSrc="/distributed-training11.webp"
        legends={legends}
        backgroundColor="bg-black"
        textColor="text-white"
      />

      {/* Closing Section */}
      <ImproveDataSection
        tagText="INNOVATE"
        title="Train Smarter, Scale Faster"
        subtitle="Our Distributed Training Platform transforms complex compute orchestration into an intelligent, automated process — enabling efficient scaling of large AI models with precision and speed."
      />
    </>
  );
}
