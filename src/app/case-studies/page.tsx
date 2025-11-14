import CaseStudyCard from "@/components/PageComponents/CaseStudycards";

const caseStudiesData = [
  {
    title: "AI-Driven Computer Vision Transforms Echocardiogram Analysis for Biotech",
    category: "Computer Vision, AI in Healthcare, Medical Imaging",
    services: "AI Model Development, Medical Image Processing, Workflow Automation, Machine Learning Integration",
    image: "/case03.png",
    description: "Our AI-driven computer vision models analyze echocardiograms with unprecedented accuracy and speed. By integrating machine learning into medical imaging workflows, we help biotech companies enhance diagnostic precision and accelerate research. Automated processes reduce human error while enabling scalable, efficient operations in healthcare environments."
  },
  {
    title: "Robotic Process Automation Optimizes Supply Chain Management for Manufacturing",
    category: "Robotics, Automation, Supply Chain",
    services: "RPA Workflow Design, ERP Integration, Process Optimization, Analytics Dashboard",
    image: "/case02.png",
    description: "We implemented robotic process automation to streamline complex supply chain operations for a leading manufacturer. Our solutions automate repetitive tasks, improve inventory tracking, and integrate seamlessly with existing ERP systems. The result is faster order fulfillment, reduced operational costs, and enhanced visibility across the supply chain."
  },
  {
    title: "Predictive Analytics Enhances Customer Retention for E-commerce Platforms",
    category: "Data Science, Predictive Analytics, Customer Experience",
    services: "Data Modeling, Customer Segmentation, Personalized Recommendations, KPI Tracking",
    image: "/case01.png",
    description: "Leveraging predictive analytics, we help e-commerce platforms understand customer behavior and increase retention. Our models segment users, predict churn, and deliver personalized recommendations. Businesses can make data-driven decisions, optimize marketing campaigns, and boost customer satisfaction while driving revenue growth."
  }
];



export default function CaseStudies() {
  return (
    <main className="bg-black min-h-screen pt-30 px-2">
      {/* Heading Section */}
      <div className="bg-black shadow-sm text-center py-6 rounded-3xl max-w-[90%] mx-auto md:max-w-none md:mx-0 md:rounded-none">
        <p className="text-blue-300 text-3xl font-bold uppercase tracking-widest mb-3">
          Case Studies
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          We Love What We Do
        </h2>
        <p className="text-white text-base md:text-lg max-w-2xl mx-auto">
          See how our tailored solutions drive real results, empowering businesses to excel and innovate.
        </p>
      </div>

      {/* Cards Section */}
      <section className="container mx-auto">
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
