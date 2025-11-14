import PageHeroSection from "../../components/PageComponents/PageHeroSection";
import LogosSection from "../../components/PageComponents/PageLogoSection";
import QuoteSection from "../../components/PageComponents/PageQuoteSection";
import InfoSplitSection from "../../components/PageComponents/PageInfoSplitSection";
import ImproveDataSection from "../../components/PageComponents/PageImproveDataSection";
import FeaturesSection from "../../components/PageComponents/PageFeatures";
import CollectionSection from "../../components/PageComponents/Collection";
import CardsSection from "../../components/PageComponents/Card";
import { FaBrain, FaRobot, FaCogs, FaGlobe } from "react-icons/fa";

export default function CustomerSuccess() {
  const collectionData = [
    {
      image: "/customer01.webp",
      title: "Customer Insights & Analytics",
      description:
        "Understand customer behavior deeply using AI-driven analytics and real-time feedback systems.",
    },
    {
      image: "/customer02.webp",
      title: "Omnichannel Engagement",
      description:
        "Deliver consistent and personalized experiences across web, mobile, chat, and social platforms.",
    },
    {
      image: "/customer03.webp",
      title: "Retention & Loyalty Programs",
      description:
        "Boost customer lifetime value with predictive retention models and personalized loyalty strategies.",
    },
  ];

  const featuresData = [
    {
      icon: "/customer03.webp",
      title: "Data-Driven Decision Making",
      desc: "Leverage analytics and customer data to improve engagement and satisfaction.",
    },
    {
      icon: "/customer03.webp",
      title: "AI-Powered Support",
      desc: "Use intelligent chatbots and automation to deliver faster, smarter, and more personalized responses.",
    },
    {
      icon: "/customer03.webp",
      title: "Feedback Loops",
      desc: "Gather, analyze, and act on customer feedback to continuously improve products and services.",
    },
    {
      icon: "/customer03.webp",
      title: "Customer Journey Mapping",
      desc: "Visualize and optimize the complete customer lifecycle from acquisition to retention.",
    },
    {
      icon: "/customer03.webp",
      title: "CRM Integration",
      desc: "Integrate seamlessly with Salesforce, HubSpot, and other CRM tools to centralize insights.",
    },
    {
      icon: "/customer03.webp",
      title: "24/7 Support Enablement",
      desc: "Empower your support team with automation and real-time dashboards for better performance.",
    },
  ];

  const cards = [
  {
    title: "Customer Experience Analytics",
    desc: "Uncover deep behavioral trends, analyze real-time engagement data, and identify friction points across customer journeys. Use predictive insights to personalize interactions, boost satisfaction, and optimize every touchpoint.",
    icon: <FaBrain />,
  },
  {
    title: "AI Chatbots",
    desc: "Enhance user interactions with advanced conversational AI capable of understanding intent, emotion, and context. Provide 24/7 support, automate repetitive queries, and deliver faster, more empathetic responses at scale.",
    icon: <FaRobot />,
  },
  {
    title: "Retention Optimization",
    desc: "Detect early churn signals with machine learning models trained on behavioral and transactional data. Take proactive steps through automated campaigns, loyalty programs, and tailored communication to retain high-value customers.",
    icon: <FaCogs />,
  },
  {
    title: "Feedback Management",
    desc: "Collect, categorize, and analyze customer feedback using natural language processing to extract sentiment and key themes. Turn qualitative insights into measurable actions that improve product quality and user experience.",
    icon: <FaGlobe />,
  },
];

  const stats = [
    { value: "92%", label: "Average Customer Retention Rate" },
    { value: "3x", label: "Faster Response Time" },
  ];

  const legends = [
    { color: "#FF7E67", text: "Customer Insights" },
    { color: "#FFC947", text: "Engagement & Retention" },
  ];

  return (
    <>
      <PageHeroSection
        title="Customer Success Solutions"
        subtitle="Empower your teams to deliver exceptional experiences and long-term customer loyalty through smart engagement tools."
        buttonText="Request a Demo"
        imageSrc="/customer.webp"
      />
      
      <CollectionSection data={collectionData} />

      <LogosSection
        tagText="TRUSTED BY CUSTOMER-FIRST BRANDS"
        heading="Turn Customers Into Advocates"
        description="We help businesses deliver personalized, consistent, and delightful experiences that drive retention and advocacy."
      />

      <FeaturesSection features={featuresData} />

      {/* <QuoteSection
        quote="Customer success is about more than service — it’s about creating value at every interaction."
        author="Brian Halligan"
        designation="CEO, HubSpot"
      /> */}

      <ImproveDataSection
        tagText="EMPOWER YOUR CUSTOMER EXPERIENCE"
        title="Make Every Interaction Meaningful"
        subtitle="We help you understand, engage, and retain your customers with intelligent, data-driven success strategies."
      />
{/* 
      <InfoSplitSection
        title="Our customer success framework combines technology, analytics, and empathy to turn every customer into a long-term partner."
        imageSrc="/customer-support-team.webp"
        reverse
        backgroundColor="bg-[#0a0a0a]"
        gradientFrom="from-gray-900"
        gradientTo="to-black"
      /> */}

      <CardsSection
        cards={cards}
        stats={stats}
        mapImageSrc="/customer04.webp"
        legends={legends}
        backgroundColor="bg-black"
        textColor="text-white"
      />

      <ImproveDataSection
        tagText="DRIVE GROWTH THROUGH SATISFACTION"
        title="Deliver Experiences That Keep Customers Coming Back"
        subtitle="Empower your customer success teams with modern, data-driven tools designed to build trust, loyalty, and long-term relationships."
      />
    </>
  );
}
