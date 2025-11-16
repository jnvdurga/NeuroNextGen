// import HeroSection from "@/components/Hero";
import HeroSection from "@/component/HeroSection";
import { InfoGrid } from "@/component/InfoGrid";
import {itServices } from "@/utilities/data";
import HeroSideBySide from "@/component/HeroSideBySide";

export default function Home() {
  return (
    <>
   <HeroSideBySide
 title="Build Smarter Digital Products with Expert IT Solutions"
subtitle="From websites and mobile apps to upgrades, debugging, and complete IT support — we help your business stay modern and scalable."
buttonText="Contact Us"
  imageSrc="https://res.cloudinary.com/dohksngyi/image/upload/v1763219861/AiforHome_cv0h9s.avif"
/>


   <HeroSection
  title="Empower Your Business with Cutting-Edge Digital Solutions"
  highlight1="Modern Web Experiences"
  highlight2="Scalable Mobile Apps"
  subtitle="At NeuroNext Gen Solutions, we build, upgrade, and maintain powerful digital products — from responsive websites to high-performance mobile applications and complete IT systems."
  buttonText="Start Your Project →"
  buttonLink="/form"
  imageUrl="https://res.cloudinary.com/dohksngyi/image/upload/v1763222431/2ndHome_vkca2v.webp"
/>


      <InfoGrid
        data={itServices}
        title="Our Services"
        description="We provide end-to-end IT solutions — from web & mobile apps to ongoing maintenance and business automation."
      />


    </>
  );
}
