"use client";

import Image from "next/image";

interface HeroProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink?: string;
  imageSrc?: string;
  videoSrc?: string;
  bottomText?: string;
  bottomLinkText?: string;
  bottomLink?: string;
  reverse?: boolean;
}

export default function HeroSection({
  title,
  subtitle,
  buttonText,
  buttonLink = "/form",
  imageSrc,
  videoSrc,
  bottomText,
  bottomLinkText,
  bottomLink = "#",
  reverse = false,
}: HeroProps) {
  return (
<section
  className={`bg-black text-white min-h-screen w-full flex flex-col md:flex-row items-center justify-center
  px-4 sm:px-6 md:px-10 lg:px-12 py-14 md:py-18 pt-26 md:pt-30
  ${reverse ? "md:flex-row-reverse" : ""}`}
>

      {/* ✅ Text Section */}
      <div
  className={`w-full md:w-1/2 flex flex-col ml-0 md:ml-14 justify-center text-center items-center md:items-start md:text-left ${
    reverse ? "md:pl-12" : "md:pr-12"
  }`}
>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
          {title}
        </h1>

        <p className="text-base sm:text-lg text-gray-300 mb-8 leading-relaxed max-w-xl mx-auto md:mx-0">
          {subtitle}
        </p>

        <div className="flex justify-center md:justify-start">
          <a href={buttonLink}>
            <button className="bg-white text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-gray-200 transition-transform transform hover:scale-105 text-sm sm:text-base">
              {buttonText} →
            </button>
          </a>
        </div>

        {bottomText && (
          <p className="mt-8 text-sm sm:text-base text-gray-400 text-center md:text-left">
            {bottomText}{" "}
            {bottomLinkText && (
              <a
                href={bottomLink}
                className="text-white underline hover:text-gray-300"
              >
                {bottomLinkText} →
              </a>
            )}
          </p>
        )}
      </div>

      {/* ✅ Image/Video Section */}
      <div className="w-full md:w-1/2 flex justify-center align-center items-center mt-10 md:mt-0">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt="AI visualization"
            width={500}
            height={500}
            className="object-contain w-[85%] sm:w-[80%] md:w-[90%] lg:w-[500px] mx-auto rounded-2xl"
            priority
          />
        ) : (
          <video
            src={videoSrc || "/defaultVideo.mp4"}
            autoPlay
            loop
            muted
            playsInline
            className="object-cover rounded-2xl w-[85%] sm:w-[80%] md:w-[90%] lg:w-[500px] mx-auto shadow-lg"
          />
        )}
      </div>
    </section>
  );
}
