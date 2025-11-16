
import FeaturesSection from "../../component/FeatureSection";
import HeroSection from "../../component/HeroSideBySide"
import HeadingSubTitel from "../../component/HeadingSubTitel";
import SideBySide from "../../component/SideBySide";



export default function RoboticAi() {

    // ⭐ Logos of companies we work with (dummy logos for now)
    const logos = [
        { src: "https://cdn-icons-png.flaticon.com/512/732/732212.png", alt: "Microsoft" },
        { src: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png", alt: "Google" },
        { src: "https://cdn-icons-png.flaticon.com/512/2111/2111432.png", alt: "Vercel" },
        { src: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png", alt: "AWS" },
    ];

    // ⭐ Updated IT Company Feature Data (with external icons)
    const featuresData = [
        {
            icon: "https://cdn-icons-png.flaticon.com/512/2721/2721297.png",
            title: "Custom Web Development",
            desc: "High-performance, scalable, and SEO-optimized websites built with modern technologies like React, Next.js, and MERN.",
        },
        {
            icon: "https://cdn-icons-png.flaticon.com/512/1048/1048934.png",
            title: "Mobile App Development",
            desc: "Beautiful, fast, and cross-platform mobile apps built using React Native and modern UI/UX.",
        },
        {
            icon: "https://cdn-icons-png.flaticon.com/512/2721/2721279.png",
            title: "Bug Fixing & Maintenance",
            desc: "We analyze, debug, and stabilize your software with long-term support and real-time monitoring.",
        },
        {
            icon: "https://cdn-icons-png.flaticon.com/512/993/993707.png",
            title: "AI & Automation Integration",
            desc: "Enhance your business with AI chatbots, automation systems, and intelligent workflow solutions.",
        },
        {
            icon: "https://cdn-icons-png.flaticon.com/512/9068/9068896.png",
            title: "API Development & Integration",
            desc: "Secure, fast, and well-documented REST APIs for seamless communication between systems.",
        },
        {
            icon: "https://cdn-icons-png.flaticon.com/512/1006/1006363.png",
            title: "Modern UI/UX Design",
            desc: "Conversion-focused and visually stunning interfaces that improve user engagement.",
        },
    ];

    return (
        <>
            {/* ⭐ Hero Section */}
            <HeroSection
                title="End-to-End IT Services for Modern Businesses"
                subtitle="NeuroNextGen Solutions builds powerful digital products — from websites and mobile apps to AI-powered tools — designed to help your business grow faster."
                buttonText="Get Consultation"
                imageSrc="https://res.cloudinary.com/dohksngyi/image/upload/v1763225577/Aiface_rvuhk5.jpg"
            />

            {/* ⭐ Logo Strip */}
            <HeadingSubTitel
                tagText="OUR EXPERTISE"
                heading="Your Technology Growth Partner"
                description="We deliver world-class digital solutions trusted by startups, enterprises, and global brands."
                
            />

            {/* ⭐ Features Section */}
            <FeaturesSection features={featuresData} />

            {/* ⭐ Info Section 1 */}
            <HeadingSubTitel
                tagText="WHY US"
                heading="Reliable, Scalable & Future-Ready IT Services"
                description="We bring deep experience in engineering, automation, cloud technologies, and full-stack development to help businesses stay ahead of the competition."
            />

            {/* ⭐ Info Split Section */}
            <SideBySide
                title="NeuroNextGen Solutions merges cutting-edge development, clean UI/UX, and AI-powered enhancements to create software that performs beautifully and scales effortlessly."
                imageSrc="https://res.cloudinary.com/dohksngyi/image/upload/v1763228881/aibrain_qxqwf4.png"
                reverse
                backgroundColor="bg-[#0a0a0a]"
                gradientFrom="from-gray-900"
                gradientTo="to-black"
            />

            {/* ⭐ Info Section 2 */}
            <HeadingSubTitel
                tagText="SERVICES"
                heading="Transform Your Ideas Into High-Quality Digital Products"
                description="From planning to deployment — we deliver complete IT solutions, ensuring your business stays modern, automated, and high-performing."
            />
        </>
    );
}
