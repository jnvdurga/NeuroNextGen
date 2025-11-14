import PageHeroSection from "../../components/PageComponents/PageHeroSection";
import LogosSection from "../../components/PageComponents/PageLogoSection";
import QuoteSection from "../../components/PageComponents/PageQuoteSection";
import InfoSplitSection from "../../components/PageComponents/PageInfoSplitSection";
import ImproveDataSection from "../../components/PageComponents/PageImproveDataSection";
import FeaturesSection from "../../components/PageComponents/PageFeatures";

export default function physicalai() {
    const logos = [
        { src: "/window.svg", alt: "Boston Dynamics" },
        { src: "/window.svg", alt: "NVIDIA" },
        { src: "/vercel.svg", alt: "Tesla" },
        { src: "/genAi.jpg", alt: "NTT Data" },
    ];

    const featuresData = [
        {
            icon: "/physical_ai01.webp",
            title: "Real-World Data at Scale",
            desc: "Collect, process, and refine multimodal data — from sensors, cameras, and robotics — with global reach and precision.",
        },
        {
            icon: "/physical_ai02.webp",
            title: "Human-in-the-Loop Precision",
            desc: "Combine automated pipelines with domain experts for labeling, QA, and continuous improvement.",
        },
        {
            icon: "/physical_ai03.webp",
            title: "Simulation + Reality Integration",
            desc: "Leverage digital twins and physics-based simulations to complement physical-world datasets.",
        },
        {
            icon: "/physical_ai04.webp",
            title: "Autonomy-Ready Data",
            desc: "Purpose-built for robotics, autonomous vehicles, drones, and smart devices that rely on accurate, dynamic data.",
        },
        {
            icon: "/physical_ai05.webp",
            title: "Accelerated Model Training",
            desc: "Feed your models with real-time, structured, and verified data streams optimized for faster training cycles.",
        },
        {
            icon: "/physical_ai06.webp",
            title: "Responsible AI at the Edge",
            desc: "Designed for safety, privacy, and ethical AI deployment in the physical world.",
        },
    ];

    return (
        <>
            <PageHeroSection
                title="Physical AI Data Engine"
                subtitle="Bridging the Physical and Digital Worlds with Intelligent Data."
                buttonText="Book a Demo"
                imageSrc="/physical_ai.webp"
            />

            <LogosSection
                tagText="PRODUCT OVERVIEW"
                heading="Physical AI Data Engine"
                description="Physical AI Data Engine captures and curates high-quality real-world data to train AI models that interact, perceive, and make decisions in the physical world."
            />
            
            
            <FeaturesSection features={featuresData} />

            <ImproveDataSection
                tagText="BUILD AI"
                title="Smarter Data for Smarter Machines"
                subtitle="Physical AI depends on diverse, accurate, and dynamic datasets collected from real-world environments — enabling robots, drones, and devices to truly understand and respond to the world around them."
            />

            <InfoSplitSection
                title="Our hybrid model integrates automated pipelines, simulation tools, and expert review to deliver verified physical data for enterprise-scale AI applications — from autonomous systems to industrial robotics."
                imageSrc="/physical_ai07.webp"
                reverse
                backgroundColor="bg-[#0a0a0a]"
                gradientFrom="from-gray-900"
                gradientTo="to-black"
            />

            <ImproveDataSection
                tagText="INNOVATE"
                title="From Sensors to Intelligence"
                subtitle="transforms raw physical-world data into structured, model-ready intelligence — empowering breakthroughs in robotics, computer vision, and edge AI."
            />
        </>
    );
}
