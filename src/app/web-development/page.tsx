// import CardsSection from "../../components/PageComponents/Card";
import { FaUserTie, FaCogs, FaServer, FaGlobeAmericas ,FaLaptopCode ,FaMobileAlt ,FaProjectDiagram ,FaCloud} from "react-icons/fa";

import HeroSection from "../../component/HeroSideBySide";
import CardsSection from "../../component/CardSection";
import HeadingSubTitel from "../../component/HeadingSubTitel";
import HeroCardsSection from "../../component/HeroCardSection";
import SideBySide from "../../component/SideBySide";

export default function WebDevelopment() {
  // --- Collection Section (3 Cards) ---
  const collectionData = [
    {
      image: "https://res.cloudinary.com/dohksngyi/image/upload/v1763231560/full-stack-web-developers_xkbs0p.png",
      title: "Custom Website Development",
      description:
        "We build high-performance, secure, and scalable websites tailored for businesses, startups, and global enterprises.",
    },
    {
      image: "https://res.cloudinary.com/dohksngyi/image/upload/v1763231462/android-app-info_ekzmi2.png",
      title: "Web App Engineering",
      description:
        "Modern, interactive, and cloud-ready web applications powered by React, Next.js, Node.js, and robust backend systems.",
    },
    {
      image: "https://res.cloudinary.com/dohksngyi/image/upload/v1763231639/uiux_memtcg.avif",
      title: "UI/UX & Responsive Design",
      description:
        "User-centric, mobile-first designs delivering seamless experiences across all devices and environments.",
    },
  ];

  // --- Features Section ---
 const featuresData = [
  {
    icon: "https://cdn-icons-png.flaticon.com/512/9068/9068720.png",
    title: "Full-Stack Engineering",
    desc: "We build powerful, secure, and scalable digital solutions using the MERN stack (MongoDB, Express, React, Node.js). Our engineering process covers frontend architecture, backend API development, authentication flows (JWT/OAuth), database modeling, caching layers, and cloud deployment. From MVP to enterprise-grade systems, we ensure your product is robust and future-ready.",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/9068/9068734.png",
    title: "Modern UI Development",
    desc: "Our UI engineering focuses on design systems, reusable components, motion design, and pixel precision. Using Tailwind CSS, Framer Motion, and custom UI libraries, we craft interfaces that feel modern, fluid, and intuitive. Every element is optimized for responsiveness, accessibility (WCAG standards), and conversion-driven user journeys.",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/9068/9068744.png",
    title: "API Development & Integration",
    desc: "We develop secure RESTful APIs and integrate complex third-party systems including payment gateways, CRMs, BI dashboards, cloud services, maps, SMS/Email gateways, and automation tools. Our API layer includes rate limiting, token-based security, error handling pipelines, and scalable microservice communication for enterprise-grade stability.",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/9068/9068741.png",
    title: "Performance Optimization",
    desc: "Your website is engineered to load in milliseconds. We apply performance techniques such as SSR/ISR (Next.js), code splitting, lazy-loading, caching, image compression, and global CDNs. Every page is optimized for Google Core Web Vitals, SEO ranking, accessibility audits, and device-specific rendering for flawless multi-device performance.",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/9068/9068762.png",
    title: "E-Commerce Development",
    desc: "We create fully custom e-commerce platforms with product management, advanced search filters, cart & checkout flow, secured payments, order tracking, inventory systems, admin dashboards, and analytics. Whether you want a Shopify-like system or a unique marketplace platform, we deliver scalable commerce architectures with seamless user experience.",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/9068/9068775.png",
    title: "Cloud & Deployment",
    desc: "We deploy and manage applications on AWS, Vercel, and Render with automated CI/CD pipelines, container-based workflows (Docker), load balancing, monitoring, and global CDN routing. Your applications remain fast, secure, and scalable with auto-scaling, error tracking, and uptime monitoring to support millions of users smoothly.",
  },
];


  // --- Cards Section ---
 const cards = [
  {
    title: "Professional Engineering Team",
    desc: "A skilled team of developers, designers, testers, and analysts delivering production-grade websites and applications.",
    icon: <FaUserTie />,
  },
  {
    title: "Automation-Driven Development",
    desc: "CI/CD pipelines, automated testing, and optimized workflows to ensure faster delivery and long-term scalability.",
    icon: <FaCogs />,
  },
  {
    title: "Enterprise-Level Infrastructure",
    desc: "Secure hosting, cloud integration, API gateways, load balancing, and optimized database infrastructures.",
    icon: <FaServer />,
  },
  {
    title: "Global Delivery Capability",
    desc: "We serve clients worldwide with seamless communication, transparent processes, and reliable delivery.",
    icon: <FaGlobeAmericas />,
  },
  {
    title: "Web Development Expertise",
    desc: "Modern, scalable, and responsive websites built using MERN, Next.js, and cloud-ready architectures.",
    icon: <FaLaptopCode />,
  },
  {
    title: "Mobile App Development",
    desc: "Android & iOS apps powered by React Native, Expo, and robust backend APIs.",
    icon: <FaMobileAlt />,
  },
  {
    title: "IT Project Consulting",
    desc: "Full-cycle IT project development — planning, architecture, prototyping, development, deployment.",
    icon: <FaProjectDiagram />,
  },
  {
    title: "Cloud & DevOps Solutions",
    desc: "Cloud deployments (AWS, Azure, GCP), DevOps monitoring, automation, and server maintenance.",
    icon: <FaCloud />,
  },
];


  // --- Stats Section ---
  const stats = [
    { value: "250+", label: "Web Projects Delivered" },
    { value: "30+", label: "Industries Served Worldwide" },
  ];

  const legends = [
    { color: "#60a5fa", text: "Full-Stack Web Engineering" },
    { color: "#a78bfa", text: "User Experience & Design" },
  ];

  return (
    <>
      {/* Hero Section */}
      <HeroSection
  title="Mobile App Development Services"
  subtitle="We build fast, secure, and user-friendly mobile apps..."
  buttonText="Start Your Mobile Project"
  imageSrc="https://res.cloudinary.com/dohksngyi/image/upload/v1763230993/webdevelop_iodo8r.jpg"
/>


      {/* Collection Section */}
      <CardsSection data={collectionData} />

      {/* Logos / Heading */}
      <HeadingSubTitel
        tagText="OUR EXPERTISE"
        heading="Complete Web Development Solutions"
        description="From UI/UX to backend architecture — we deliver powerful digital products that accelerate business growth and enhance user experience."
      />

      {/* Cards + Stats Section */}
      <HeroCardsSection
        cards={cards}
        stats={stats}
        mapImageSrc="https://res.cloudinary.com/dohksngyi/image/upload/v1763232463/WEBDEV_u28xbl.webp"
        legends={legends}
        backgroundColor="bg-black"
        textColor="text-white"
      />

      {/* Split Info Section */}
      <SideBySide
        title="Our development process covers everything — ideation, design, frontend engineering, backend systems, API development, testing, optimization, cloud deployment, and ongoing support. Every solution is built to be secure, scalable, and future-ready."
        imageSrc="https://res.cloudinary.com/dohksngyi/image/upload/v1763232578/webphoto_jslxgy.jpg"
        reverse
        backgroundColor="bg-[#0a0a0a]"
        gradientFrom="from-gray-900"
        gradientTo="to-black"
      />

      {/* Closing Section */}
      <HeadingSubTitel
        tagText="GROW WITH US"
        heading="Web Solutions Built for Performance, Security & Scale"
        description="Whether you're a startup or an enterprise — we help you build a strong online foundation that drives engagement, conversions, and long-term growth."
      />
    </>
  );
}
