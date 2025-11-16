import QuoteSection from "../../component/QuoteSection";
import SideBySide from "../../component/SideBySide";
import FeaturesSection from "../../component/FeatureSection";
import HeroSection from "../../component/HeroSideBySide"
import HeadingSubTitel from "../../component/HeadingSubTitel";
import FeatureSection from "../../component/FeatureSection"

export default function AiDevelopment() {
  const featuresData = [
    {
      icon: "https://cdn-icons-png.flaticon.com/512/2721/2721262.png",
      title: "Full-Stack Development",
      desc: "End-to-end development for web, mobile, SaaS, and enterprise platforms with high scalability.",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/4712/4712100.png",
      title: "AI-Powered Automation",
      desc: "Integrate intelligent automation to reduce manual tasks and boost operational efficiency.",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/3503/3503791.png",
      title: "Custom Software Solutions",
      desc: "Tailored digital products built to solve business-specific challenges with precision.",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/3260/3260287.png",
      title: "Cloud & DevOps Engineering",
      desc: "Deploy and manage your infrastructure with reliable cloud architecture, CI/CD, and monitoring.",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/1048/1048943.png",
      title: "Security-Driven Engineering",
      desc: "We prioritize protection with secure coding, encryption, and vulnerability-free architecture.",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/992/992651.png",
      title: "Continuous Maintenance",
      desc: "Ongoing support, updates, bug-fixing, and performance enhancements for uninterrupted growth.",
    },
  ];

  return (
    <div className="flex flex-col">
      
      <HeroSection
        title="IT Services Tailored for Modern Businesses"
        subtitle="From custom software to AI-driven solutions — we build, optimize, and scale technology that empowers your business."
        buttonText="Get Consultation"
        imageSrc="https://res.cloudinary.com/dohksngyi/image/upload/v1763222797/aigen_akg6bo.avif"
      />

      <HeadingSubTitel
        tagText="WHAT WE DO"
        heading="End-to-End IT Development Services"
        description="We help startups, enterprises, and global brands build powerful digital products. From web and mobile apps to intelligent AI systems and cloud architecture — our team ensures reliable, scalable, and high-performance solutions customized to your business goals."
      />

       

      <QuoteSection
        quote="Great technology is built on solid strategy, clean engineering, and user-centric innovation. Our team ensures every product is designed to perform, scale, and deliver measurable business outcomes."
        author="NeuroNextGen Solutions"
        designation="IT Solutions & Engineering Team"
      />

    <SideBySide
  title={`Exploring the Frontier of Artificial Intelligence: Developing Intelligent Systems That Predict Human Needs, Enhance Decision-Making, and Seamlessly Integrate Into Web and Mobile Platforms to Transform the Way We Interact with Technology`}
  imageSrc="https://res.cloudinary.com/dohksngyi/image/upload/v1763225577/Aiface_rvuhk5.jpg"
  imageAlt="AI futuristic visualization"
  reverse={false}
  backgroundColor="bg-black"
  textColor="text-white"
  gradientFrom="from-black"
  gradientTo="to-gray-800"
/>


      <HeadingSubTitel
        tagText="OUR APPROACH"
        heading="Building Reliable Technology Starts with Strong Engineering"
        description="From architecture to deployment — we craft solutions that help your business operate smarter, faster, and more efficiently. Every technology decision is backed by research, expertise, and industry-best practices."
      />

      <FeaturesSection features={featuresData} />
      

    </div>
  );
}
