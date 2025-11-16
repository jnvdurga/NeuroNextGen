"use client";


import { CgWebsite } from "react-icons/cg";
import { CiLock } from "react-icons/ci";
import { FaDatabase, FaUserCheck, FaUsersCog } from "react-icons/fa";
import { GrCycle } from "react-icons/gr";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { IoTrendingUp, IoTrophyOutline, IoWarningOutline } from "react-icons/io5";
import { LiaCookieSolid, LiaGavelSolid } from "react-icons/lia";
import { MdOutlineCancel,MdOutlineScience,MdOutlineBusinessCenter,MdOutlineSmartToy, MdOutlinePayment, MdOutlineRemoveRedEye } from "react-icons/md";
import { PiScales } from "react-icons/pi";
import { MdOutlinePrecisionManufacturing, MdOutlineWork, MdOutlineDataObject,MdOutlineCarRepair, MdOutlineIntegrationInstructions,} from "react-icons/md";
import { AiOutlineRobot } from "react-icons/ai";
import { TbApi } from "react-icons/tb";
import { RiGovernmentLine, RiRefund2Fill } from "react-icons/ri";
import { FiCode, FiSmartphone, FiRefreshCw, FiSettings } from "react-icons/fi";
import { MdDesignServices, MdBugReport ,MdBusiness, MdTimeline, MdStars, MdWork } from "react-icons/md";
import {
  FiMessageSquare,
  FiGlobe,
  FiZap,
  FiUsers,
  FiCpu,
  FiDatabase,
  FiCloud,
  FiShield,
  FiBookOpen,
  FiInfo,
  FiPhone,
  FiBriefcase,
  FiSearch,
  FiBox,
  FiMonitor,
  FiGitBranch,
  FiActivity,
} from "react-icons/fi";
import { FaUsers, FaLightbulb, FaShieldAlt, FaClock, FaDollarSign, FaHandsHelping } from "react-icons/fa";
import { ReactNode } from "react";


export interface NavItem {
  title: string;
  path?: string | any;
  submenu?: {
    heading: string;
    items: {
      icon?: ReactNode | any;
      title: string;
      desc?: string;
      path?: string;
      subItems?: { title: string; path: string }[];
    }[];
  }[];
}

export const navItems: NavItem[] = [
  {
    title: "Solutions",
    path: "",
    submenu: [
      {
        heading: "Artificial Intelligence",
        items: [
          {
            icon: FiCpu,
            title: "AI Development",
            desc: "Custom AI models, automation, and intelligent solutions",
            path: "/ai-development",
          },
          {
            icon: AiOutlineRobot,
            title: "AI for Robotics",
            desc: "AI solutions for automation and physical systems",
            path: "/ai-robotics",
          },
          {
            icon: MdOutlineIntegrationInstructions,
            title: "AI Integration",
            desc: "Integrate AI into your existing business workflow",
            path: "/ai-integration",
          },
        ],
      },

      {
        heading: "Software Development",
        items: [
          {
            icon: FiCode,
            title: "Web Development",
            desc: "High-performance websites & web applications",
            path: "/web-development",
          },
          {
            icon: MdOutlineWork,
            title: "Mobile App Development",
            desc: "iOS & Android apps using React Native & Flutter",
            path: "/mobile-development",
          }
        ],
      }

      
    ],
  },

 {
  title: "About Us",
  path: "",
  submenu: [
    {
      heading: "Company",
      items: [
        {
          icon: MdBusiness,
          title: "About Our Company",
          desc: "Who we are and what drives us",
          path: "/about",
        },
        {
          icon: MdTimeline,
          title: "Our Story",
          desc: "The journey and milestones we achieved",
          path: "/our-story",
        },
        {
          icon: FiUsers,
          title: "Our Team",
          desc: "Meet the experts behind our success",
          path: "/team",
        },
        {
          icon: MdStars,
          title: "Why Choose Us",
          desc: "What makes our company stand out",
          path: "/why-choose-us",
        },
        
      ],
    },
  ],
}
,
  {
    title: "Case Studies",
    path: "/case-studies",
  },

  {
    title: "Resources",
    path: "",
    submenu: [
      {
        heading: "Explore More",
        items: [
          {
            icon: FiInfo,
            title: "About Us",
            desc: "Who we are and how we work",
            path: "/about",
          },
          {
            icon: FiPhone,
            title: "Contact Us",
            desc: "Get support or launch your project with us",
            path: "/contact",
          },
          
          {
            icon: FiSearch,
            title: "Research",
            desc: "Our innovation, experiments & AI R&D",
            path: "/research",
          },
        ],
      },
    ],
  },

 
];



export const services = [
  {
    icon: FiUsers,
    title: "Staff Augmentation",
    subtitle: "Expand your team effortlessly",
    features: [
      "Hire top-tier engineers on-demand",
      "Flexible scaling for any project size",
      "Reduce hiring time and cost",
    ],
    image: "/assets/icons/staff-augmentation.gif",
  },
  {
    icon: MdOutlinePrecisionManufacturing,
    title: "LLM Training",
    subtitle: "Fine-tune AI for your business",
    features: [
      "Train custom large language models",
      "Data curation & hyperparameter tuning",
      "Deploy scalable inference systems",
    ],
    image: "/assets/icons/llm-training.gif",
  },
  {
    icon: FiCode,
    title: "AI Deployment",
    subtitle: "Production-ready intelligence",
    features: [
      "Deploy AI models on web, cloud & edge",
      "Optimize inference speed and accuracy",
      "Real-time monitoring & retraining pipelines",
    ],
    image: "/assets/icons/ai-deployment.gif",
  },
  {
    icon: MdOutlineScience,
    title: "AI Research & Development",
    subtitle: "Innovate and explore new frontiers",
    features: [
      "Research-grade experimentation setups",
      "Custom dataset creation & evaluation",
      "Integration with scientific & industrial data",
    ],
    image: "/assets/icons/ai-research.gif",
  },
  {
    icon: MdOutlineWork,
    title: "Vetted Tech Talents",
    subtitle: "Work with pre-screened experts",
    features: [
      "AI-vetted global tech talent network",
      "Rigorous skill & communication testing",
      "Match with the perfect developer in days",
    ],
    image: "/assets/icons/vetted-talents.gif",
  },
  {
    icon: FiDatabase,
    title: "Data Annotation",
    subtitle: "Prepare quality data for AI",
    features: [
      "Image, text & video labeling",
      "Human-in-the-loop quality assurance",
      "Custom annotation pipelines",
    ],
    image: "/assets/icons/data-annotation.gif",
  },
  {
    icon: FiSettings,
    title: "MLOps & Automation",
    subtitle: "Scale AI with efficiency",
    features: [
      "CI/CD pipelines for AI models",
      "Model versioning & reproducibility",
      "Automated training and deployment workflows",
    ],
    image: "/assets/icons/mlops.gif",
  },
  {
    icon: FiGlobe,
    title: "AI Consulting",
    subtitle: "Strategize your AI transformation",
    features: [
      "AI roadmap & adoption strategy",
      "Model selection & architecture guidance",
      "ROI-driven AI implementation planning",
    ],
    image: "/assets/icons/ai-consulting.gif",
  },
  {
    icon: MdOutlineBusinessCenter,
    title: "AI for Enterprises",
    subtitle: "Industry-grade AI solutions",
    features: [
      "Finance, healthcare, legal & logistics AI",
      "Fraud detection & process optimization",
      "Predictive analytics & automation tools",
    ],
    image: "/assets/icons/enterprise-ai.gif",
  },
  {
    icon: FiCpu,
    title: "Computer Vision",
    subtitle: "Perception for intelligent systems",
    features: [
      "Object detection & tracking",
      "Face recognition & scene understanding",
      "Video analytics for security & industry",
    ],
    image: "/assets/icons/computer-vision.gif",
  },
  {
    icon: FiMessageSquare,
    title: "Natural Language Processing",
    subtitle: "Understand human language",
    features: [
      "Chatbots, summarization & sentiment analysis",
      "Named entity recognition & translation",
      "Conversational AI & speech models",
    ],
    image: "/assets/icons/nlp.gif",
  },
  {
    icon: MdOutlineSmartToy,
    title: "Robotics & Automation",
    subtitle: "Intelligent physical systems",
    features: [
      "Robot control with AI perception",
      "Sensor fusion & simulation environments",
      "Edge AI for autonomous systems",
    ],
    image: "/assets/icons/robotics.gif",
  },
  {
    icon: MdOutlineWork,
    title: "AI Talent Hiring",
    subtitle: "Build world-class AI teams",
    features: [
      "Hire top AI researchers & engineers",
      "Flexible engagement models",
      "End-to-end recruitment support",
    ],
    image: "/assets/icons/ai-talent.gif",
  },
];

export const itServices = [
  {
    icon: FiCode,
    title: "Web Development",
    subtitle: "Modern, scalable, and fast websites",
    features: [
      "Responsive website development",
      "Full-stack MERN solutions",
      "Business automation dashboards",
    ],
  },
  {
    icon: FiSmartphone,
    title: "Mobile App Development",
    subtitle: "Android & iOS apps that scale",
    features: [
      "React Native mobile apps",
      "Cross-platform UI development",
      "API integration & performance optimization",
    ],
  },
  {
    icon: MdBugReport,
    title: "Bug Fixing & Debugging",
    subtitle: "Resolve issues & improve performance",
    features: [
      "Fix crashes, UI errors, backend issues",
      "Performance & stability improvement",
      "Security checks & code cleanup",
    ],
  },
  {
    icon: FiRefreshCw,
    title: "Upgrades & Modernization",
    subtitle: "Upgrade outdated systems",
    features: [
      "UI redesign & theme updates",
      "Codebase modernization",
      "Tech migration & optimization",
    ],
  },
  {
    icon: MdDesignServices,
    title: "UI/UX Designing",
    subtitle: "Clean, modern & user-friendly designs",
    features: [
      "Figma wireframes & prototypes",
      "Brand-oriented UI design",
      "Component-based reusable UI systems",
    ],
  },
  {
    icon: FiSettings,
    title: "Custom IT Solutions",
    subtitle: "Tailored solutions for any business",
    features: [
      "Custom CRM/ERP systems",
      "Workflow automation",
      "Cloud-ready business applications",
    ],
  },
];



export const termsAndCondition = [
  {
    icon: CgWebsite,
    title: "Use of Website and Services",
    content: [
      {
        subtitle: "Acceptance of Terms",
        text: "By accessing this website, you acknowledge that you have read, understood, and accepted these Terms of Use.",
      },
      {
        subtitle: "License",
        text: "We grant you a non-exclusive, non-transferable, limited right to access and use this website for informational and service-related purposes only.",
      },
      {
        subtitle: "Prohibited Use",
        text: "You agree not to: Copy, modify, distribute, transmit, display, perform, or create derivative works based on our website content. Use the website for unlawful or fraudulent activities.",
      },
    ],
  },
  {
    icon: PiScales,
    title: "Intellectual Property Rights",
    content: [
      {
        subtitle: "Ownership",
        text: "All content, trademarks, and data on this website, including text, graphics, logos, images, and software, are the property of Chit Codes Technologies LLP and protected by applicable intellectual property laws.",
      },
      {
        subtitle: "Unauthorized Use",
        text: "Any unauthorized use of our intellectual property is strictly prohibited and may result in legal action.",
      },
    ],
  },
  {
    icon: MdOutlinePayment,
    title: "Payments and Billing",
    content: [
      {
        subtitle: "Payment Terms",
        text: "Users must pay for services as per the agreed terms and pricing mentioned on our website or in contractual agreements.",
      },
      {
        subtitle: "Consequences of Non-Payment",
        text: "Failure to make timely payments may result in suspension or termination of services.",
      },
    ],
  },
  {
    icon: IoWarningOutline,
    title: "Disclaimer of Warranties",
    content: [
      {
        subtitle: "No Warranties",
        text: "Our website and services are provided 'as is' without warranties of any kind. We do not guarantee error-free, uninterrupted, or fully secure services.",
      },
      {
        subtitle: "Limitation of Liability",
        text: "Chit Codes Technologies LLP shall not be liable for any direct, indirect, or consequential damages resulting from the use of our services.",
      },
    ],
  },
  {
    icon: LiaGavelSolid,
    title: "Termination of Services",
    content: [
      {
        subtitle: "Rights to Terminate",
        text: "We reserve the right to terminate or suspend your access if you violate these terms.",
      },
      {
        subtitle: "User Termination",
        text: "Users may terminate their service by notifying us at care@chitcodes.com.",
      },
    ],
  },
  {
    icon: RiGovernmentLine,
    title: "Governing Law",
    content: [
      {
        subtitle: "Jurisdiction",
        text: "These terms shall be governed by the laws of India, and any disputes shall be subject to the exclusive jurisdiction of the courts in [Your Jurisdiction].",
      },
    ],
  },
]

export const steps = [
  {
    id: 1,
    title: "Discovery & Data Strategy",
    desc: "We begin by understanding your goals, data availability, and AI opportunities — defining a clear roadmap for intelligent transformation.",
    points: [
      "Business & AI Use-Case Analysis",
      "Data Audit & Feasibility Study",
      "AI Roadmap Definition",
    ],
  },
  {
    id: 2,
    title: "Data Collection & Preparation",
    desc: "Data is the fuel of AI — we collect, clean, and label datasets ensuring quality and representativeness for optimal model training.",
    points: [
      "Data Sourcing & Cleaning",
      "Annotation & Labeling Pipelines",
      "Feature Engineering & Validation",
    ],
  },
  {
    id: 3,
    title: "Model Design & Development",
    desc: "We build and fine-tune custom AI models tailored to your business needs — ensuring scalability, accuracy, and efficiency.",
    points: [
      "Model Selection & Training",
      "Evaluation & Benchmarking",
      "Iterative Optimization",
    ],
  },
  {
    id: 4,
    title: "Deployment & Integration",
    desc: "We integrate trained AI models into your products or infrastructure — delivering real-world, production-grade intelligence.",
    points: [
      "Cloud or Edge Deployment",
      "API & System Integration",
      "Performance Optimization",
    ],
  },
  {
    id: 5,
    title: "Monitoring & Continuous Improvement",
    desc: "AI never stops learning — we monitor performance, retrain with new data, and continuously enhance model accuracy over time.",
    points: [
      "Real-time Monitoring & Logging",
      "Model Retraining & Updates",
      "Ongoing Support & Optimization",
    ],
  },
];


export const features = [
  {
    title: "Automated LLM Workflows",
    subtitle: "AI-Powered Pipelines",
    description:
      "Streamline operations using fully automated workflows that leverage LLMs for decision-making, report generation, and optimization.",
    icon: FiCpu,
  },
  {
    title: "Intelligent Data Processing",
    subtitle: "Smart ETL Systems",
    description:
      "Automatically clean, structure, and analyze data using AI-driven extraction and natural language understanding.",
    icon: FiDatabase,
  },
  {
    title: "Lightning Fast Inference",
    subtitle: "Optimized for Scale",
    description:
      "Experience low-latency model inference powered by GPU-optimized serving and parallelized task execution.",
    icon: FiZap,
  },
  {
    title: "Adaptive Fine-Tuning",
    subtitle: "Continuous Learning",
    description:
      "Your models evolve with new data and feedback, enabling context-aware and dynamically improving AI systems.",
    icon: FiSettings,
  },
  {
    title: "Cloud-Native AI Stack",
    subtitle: "Scalable Infrastructure",
    description:
      "Run large language models securely in the cloud with automated scaling, monitoring, and deployment pipelines.",
    icon: FiCloud,
  },
  {
    title: "Secure AI Environment",
    subtitle: "Privacy & Compliance",
    description:
      "Built with data protection and ethical AI principles to ensure privacy, compliance, and responsible automation.",
    icon: FiShield,
  },
];

export const reasons = [
  { icon: FaUsers, title: "Expert Team", desc: "Certified professionals with proven industry experience." },
  { icon: FaLightbulb, title: "Innovation Driven", desc: "Cutting-edge solutions with AI & automation." },
  { icon: FaHandsHelping, title: "Customer-Centric", desc: "Tailored solutions, transparent communication, and support." },
  { icon: FaClock, title: "On-Time Delivery", desc: "Agile workflows ensure fast delivery without compromising quality." },
  { icon: FaShieldAlt, title: "Quality Assurance", desc: "Secure, scalable, and tested solutions for peace of mind." },
  { icon: FaDollarSign, title: "Affordable Pricing", desc: "Flexible pricing and high ROI on every project." },
];

export const values = [
  {
    icon: "https://cdn-icons-png.flaticon.com/512/3079/3079872.png",
    title: 'Innovation',
    subtitle: 'Embracing creative solutions',
    features: ['Cutting-edge technologies', 'Creative problem-solving', 'Future-focused approach'],
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/2913/2913133.png",
    title: 'Reliability',
    subtitle: 'Consistent, dependable results',
    features: ['Robust systems & processes', 'High-quality deliverables', 'Trusted by clients'],
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/833/833472.png",
    title: 'Passion',
    subtitle: 'Committed to excellence',
    features: ['Love for technology', 'Exceptional user experiences', 'Dedicated to client success'],
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/1283/1283342.png",
    title: 'Excellence',
    subtitle: 'Striving for perfection',
    features: ['Pixel-perfect design', 'High-quality code', 'Superior customer service'],
  }
];

export const cardData = [
  {
    id: 1,
    title: "Vision",
    content: "At Patchline, our vision is to bridge the gap between technology and creativity, empowering businesses with innovative digital solutions.",
  },
  {
    id: 2,
    title: "Mission",
    content: "Our mission is to deliver seamless and scalable solutions in web, mobile, and enterprise applications that drive growth and impact.",
  },
  {
    id: 3,
    title: "Story",
    content: "Patchline started with a team of passionate engineers and designers, united by the goal of simplifying technology for real-world use cases.",
  },
  {
    id: 4,
    title: "Values",
    content: "We believe in innovation, collaboration, and integrity, ensuring every project we build reflects excellence and trust.",
  },
  {
    id: 5,
    title: "Future",
    content: "We are committed to exploring AI, automation, and next-gen technologies to redefine possibilities for our clients.",
  },
];

export const whyWorkWithUs = [
  {
    icon: FaLightbulb,
    title: "Cutting-Edge Innovation",
    description: "Work on revolutionary AI technology that's shaping the future of software development.",
    stats: "50+ AI models in production",
    aos: "fade-up"
  },
  {
    icon: IoTrendingUp,
    title: "Rapid Growth",
    description: "Join a fast-growing company with unlimited potential and career advancement opportunities.",
    stats: "300% growth year-over-year",
    aos: 'fade-down'
  },
  {
    icon: FiUsers,
    title: "World-Class Team",
    description: "Collaborate with brilliant minds from top tech companies like Google, Microsoft, and Meta.",
    stats: "Team from 15+ countries",
    aos: 'fade-up'
  },
  {
    icon: IoTrophyOutline,
    title: "Industry Recognition",
    description: "Be part of an company recognized by top industry publications and organizations.",
    stats: "Winner of 5+ industry awards",
    aos: 'fade-down'
  },
]

export const jobOpenings = [
  {
    id: 1,
    title: "Business Development Executive",
    department: "Sales",
    location: "Indore, India",
    type: "Full-time",
    salary: "20K - 50K",
    experience: "0 - 3 years",
    posted: "Today",
    description: "As a BDE, you will be responsible for generating leads, building relationships with potential clients, and closing deals. You will also be working closely with the engineering team to understand our product and services.",
    requirements: [
      "0-3 years of experience in sales and marketing",
      "Strong communication and interpersonal skills",
      "Ability to work in a fast-paced environment",
      "Basic understanding of software development and tech industry",
      "Comfortable with cold calling and lead generation",
      "Ability to work independently and in a team-oriented environment"
    ],
    responsibilities: [
      "Create and execute sales strategies to drive revenue growth",
      "Generate leads, build relationships, and close deals",
      "Collaborate with the engineering team to understand our product and services",
      "Develop and maintain a strong understanding of the tech industry",
      "Work closely with the marketing team to develop targeted campaigns",
      "Participate in sales calls and meetings with potential clients",
      "Maintain accurate records of sales activities and performance"
    ],
    qualifications: [
      "Bachelor's degree in Business Administration or related field",
      "Strong negotiation and closing skills",
      "Ability to work in a fast-paced environment",
      "Basic understanding of software development and tech industry",
      "Comfortable with cold calling and lead generation",
      "Ability to work independently and in a team-oriented environment"
    ],
    benefits: [
      "Competitive salary and commission structure",
      "Opportunity to work with a fast-growing company",
      "Professional development and training opportunities",
      "Flexible work hours and work-from-home options",
      "Paid time off and company holidays",
      "Health insurance and wellness perks"
    ]
  },
  {
    id: 2,
    title: "MERN Stack Developer",
    department: "Engineering",
    location: "Indore, India",
    type: "Full-time",
    salary: "80K - 110K",
    experience: "0 - 3 years",
    posted: "Today",
    description: "Join our dynamic team to build full-stack web applications using the MERN (MongoDB, Express.js, React, Node.js) stack. You'll work on modern, scalable products that empower developers globally.",
    requirements: [
      "0-3 years of experience in full-stack development",
      "Strong knowledge of MongoDB, Express.js, React, and Node.js",
      "Familiarity with RESTful APIs and JSON",
      "Understanding of basic DevOps practices",
      "Good debugging and problem-solving skills",
      "Comfortable with Git and version control workflows",
      "Basic understanding of deployment on cloud platforms"
    ],
    responsibilities: [
      "Develop and maintain full-stack applications using the MERN stack",
      "Collaborate with UI/UX designers and backend developers",
      "Write clean, maintainable, and efficient code",
      "Participate in code reviews and stand-ups",
      "Contribute to bug fixing and performance improvements",
      "Work closely with the QA team for testing and deployment",
      "Stay updated on new technologies and trends in full-stack development"
    ],
    qualifications: [
      "Bachelor's degree in Computer Science or related field",
      "Solid foundation in JavaScript and web development",
      "Hands-on experience with MongoDB and Node.js",
      "Understanding of front-end development principles",
      "Familiarity with Agile methodologies",
      "Good communication and teamwork skills"
    ],
    benefits: [
      "Mentorship and hands-on training",
      "Remote-friendly work environment",
      "Health and wellness benefits",
      "Opportunity to work with a skilled team",
      "Access to latest tech and tools",
      "Career growth and learning resources"
    ]
  },
  {
    id: 3,
    title: "React Developer",
    department: "Engineering",
    location: "Indore, India",
    type: "Full-time",
    salary: "75K - 105K",
    experience: "0 - 3 years",
    posted: "Today",
    description: "We are looking for a passionate React Developer to create dynamic and responsive user interfaces. Work on real-time dashboards, developer tools, and AI-enhanced web applications.",
    requirements: [
      "0-3 years of experience with React.js",
      "Good knowledge of JavaScript, HTML, CSS",
      "Familiarity with Redux or Context API",
      "Understanding of component-based architecture",
      "Experience with REST APIs and asynchronous operations",
      "Basic knowledge of testing tools like Jest or React Testing Library",
      "Comfort with Git version control"
    ],
    responsibilities: [
      "Develop responsive UI components using React",
      "Work closely with designers to implement user-centric features",
      "Optimize components for performance across devices",
      "Maintain code quality through testing and reviews",
      "Integrate with backend APIs and services",
      "Fix bugs and address usability issues",
      "Stay current with the latest React best practices"
    ],
    qualifications: [
      "Bachelor’s degree in Computer Science or related field",
      "Understanding of responsive design and cross-browser compatibility",
      "Hands-on experience with React hooks and modern features",
      "Good problem-solving skills and attention to detail",
      "Ability to work in a team-oriented environment",
      "Knowledge of web accessibility standards"
    ],
    benefits: [
      "Flexible work hours and remote options",
      "Learning budget and certification support",
      "Supportive and inclusive team culture",
      "Paid time off and company holidays",
      "Competitive compensation with bonus potential",
      "Health insurance and wellness perks"
    ]
  },
  {
    id: 4,
    title: "Java Developer",
    department: "Engineering",
    location: "Indore, India",
    type: "Full-time",
    salary: "85K - 115K",
    experience: "0 - 3 years",
    posted: "Today",
    description: "We are seeking a Java Developer to help build backend systems and APIs that power our AI-driven platform. Ideal for recent grads or junior developers with a strong Java foundation.",
    requirements: [
      "0-3 years of experience with Java development",
      "Familiarity with Spring Boot or similar frameworks",
      "Understanding of RESTful APIs and JSON",
      "Experience with databases like MySQL or PostgreSQL",
      "Knowledge of object-oriented programming concepts",
      "Ability to write clean, maintainable code",
      "Understanding of unit testing and version control"
    ],
    responsibilities: [
      "Develop and maintain backend services using Java",
      "Implement REST APIs and integrations",
      "Work with product and frontend teams on system design",
      "Write and maintain unit and integration tests",
      "Troubleshoot bugs and optimize performance",
      "Contribute to architecture decisions and planning",
      "Document code and workflows clearly"
    ],
    qualifications: [
      "Bachelor's degree in Computer Science or similar",
      "Solid grasp of Java and related technologies",
      "Strong logical and analytical thinking",
      "Understanding of database concepts and schemas",
      "Eagerness to learn and grow in a collaborative environment",
      "Familiarity with CI/CD pipelines is a plus"
    ],
    benefits: [
      "On-the-job training and mentorship",
      "Modern tech stack and tools",
      "Career advancement opportunities",
      "Paid certification programs",
      "Remote-first culture",
      "Health, dental, and vision insurance"
    ]
  },
  {
    id: 5,
    title: "Python Django Developer",
    department: "Engineering",
    location: "Indore, India",
    type: "Full-time",
    salary: "80K - 110K",
    experience: "0 - 3 years",
    posted: "Today",
    description: "Join our fast-growing engineering team to build scalable web applications using Python and Django. Ideal for early-career developers passionate about backend development and clean architecture.",
    requirements: [
      "0-3 years of experience with Python and Django",
      "Understanding of REST APIs and Django ORM",
      "Experience with PostgreSQL or other relational databases",
      "Knowledge of version control tools like Git",
      "Basic understanding of testing frameworks",
      "Ability to write clean and efficient code",
      "Familiarity with Docker is a plus"
    ],
    responsibilities: [
      "Develop backend systems and APIs using Django",
      "Collaborate with frontend and product teams",
      "Participate in system design and architecture discussions",
      "Write and maintain unit tests and documentation",
      "Optimize applications for performance and scalability",
      "Help troubleshoot and debug production issues",
      "Contribute to continuous improvement initiatives"
    ],
    qualifications: [
      "Bachelor’s degree in Computer Science or related field",
      "Strong foundation in Python programming",
      "Experience with Django-based projects",
      "Familiarity with MVC architecture",
      "Willingness to learn and adapt quickly",
      "Good communication and teamwork skills"
    ],
    benefits: [
      "Opportunity to work on real-world Django projects",
      "Supportive team environment",
      "Flexible work hours and remote options",
      "Training and certification budget",
      "Health and wellness benefits",
      "Career growth path and mentorship"
    ]
  },
]

export const experienceOptions = [
  "No experience",
  "0-1 years",
  "2-3 years",
  "4-5 years",
  "6-10 years",
  "10+ years"
]