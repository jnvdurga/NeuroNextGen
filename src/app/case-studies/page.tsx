import CaseStudyCard from "@/component/CaseStudy";

const caseStudiesData = [
  {
    title: "Next-Gen E-Commerce Platform for Global Retailer",
    category: "Web Development, AI, Full-Stack Innovation",
    services: "AI-Powered Product Recommendations, Scalable React Frontend, Node.js Backend, Cloud Hosting",
    image: "https://res.cloudinary.com/dohksngyi/image/upload/v1763262392/ecomaerce_tovpnz.webp",
    description: "We engineered a futuristic e-commerce platform combining AI-driven product recommendations with real-time analytics. The system leverages React and Node.js for high-performance, cloud-deployed infrastructure, enabling seamless global transactions and predictive customer engagement."
  },
  {
    title: "Cross-Platform Logistics App with Predictive Tracking",
    category: "Mobile App Development, AI, IoT",
    services: "Real-Time GPS Tracking, Predictive Delivery Analytics, Push Notifications, API Automation",
    image: "https://res.cloudinary.com/dohksngyi/image/upload/v1763262597/tracking-vs-monitoring_fmehah.png",
    description: "Our team developed a cutting-edge logistics app integrating AI predictive analytics with real-time GPS tracking. The platform anticipates delivery delays, optimizes routing, and automates notifications, transforming operational efficiency for the enterprise while providing a futuristic user experience."
  },
  {
    title: "Cloud-Native Transformation for Enterprise IT",
    category: "Cloud Solutions, DevOps, AI-Ready Architecture",
    services: "Cloud Migration, Microservices, CI/CD Pipelines, Security & Performance Optimization",
    image: "https://res.cloudinary.com/dohksngyi/image/upload/v1763263401/cloudimage_sylpwx.avif",
    description: "We spearheaded the migration of legacy enterprise systems to a cloud-native architecture, incorporating AI-ready pipelines, microservices, and real-time monitoring. This next-gen infrastructure ensures resilience, scalability, and rapid deployment for mission-critical operations."
  },
  {
    title: "AI-Enhanced CRM System for FinTech Innovation",
    category: "Web App Development, AI, SaaS",
    services: "CRM Automation, Predictive Customer Insights, Backend APIs, Advanced Analytics Dashboard",
    image: "https://res.cloudinary.com/dohksngyi/image/upload/v1763262853/crm_usffxd.png",
    description: "We designed an AI-augmented CRM platform that predicts client behavior, automates workflows, and integrates advanced analytics dashboards. The system empowers fintech teams with actionable insights, real-time decision support, and seamless SaaS integration."
  },
  {
    title: "Intelligent Automation & Enterprise Workflow Optimization",
    category: "RPA, AI, IT Consulting",
    services: "Robotic Process Automation, Predictive Task Scheduling, ERP Integration, Data-Driven Dashboards",
    image: "https://res.cloudinary.com/dohksngyi/image/upload/v1763263071/AI-Automation-1_q5m4om.webp",
    description: "Leveraging RPA and AI, we reimagined enterprise workflows to achieve intelligent task automation. Predictive scheduling, real-time analytics, and ERP integration enable organizations to accelerate operations, reduce errors, and embrace a futuristic, data-driven IT environment."
  }
];

export default function CaseStudies() {
  return (
    <main className="bg-black min-h-screen pt-30 px-2">
      {/* Heading Section */}
      <div className="bg-black shadow-sm text-center py-6 rounded-3xl max-w-[90%] mx-auto md:max-w-none md:mx-0 md:rounded-none">
        <p className="text-blue-400 text-3xl font-bold uppercase tracking-widest mb-3">
          Case Studies
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Empowering Businesses with Futuristic IT Solutions
        </h2>
        <p className="text-white text-base md:text-lg max-w-2xl mx-auto">
          At NeuroNextGen Solutions, we don’t just deliver IT services — we innovate at the cutting edge. From AI-driven web apps to cloud-native architectures, predictive systems, and intelligent automation, explore how our research-led projects redefine business potential and digital transformation.
        </p>
      </div>

      {/* Cards Section */}
      <section className="container mx-auto mt-10 space-y-10">
        {caseStudiesData.map((caseStudy, index) => (
          <CaseStudyCard
            key={index}
            title={caseStudy.title}
            category={caseStudy.category}
            services={caseStudy.services}
            image={caseStudy.image}
            description={caseStudy.description}
          />
        ))}
      </section>
    </main>
  );
}
