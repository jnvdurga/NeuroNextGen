"use client";
import Image from "next/image";

interface ModelTrainingFlowProps {
  title: string;
  imageSrc: string;
  imageAlt?: string;
  note?: string;
  backgroundColor?: string;
  textColor?: string;
}

export default function ModelTrainingFlow({
  title,
  imageSrc,
  imageAlt = "Training Flow Diagram",
  note,
  backgroundColor = "bg-[#0a0a0a]",
  textColor = "text-white",
}: ModelTrainingFlowProps) {
  return (
    <section className={`${backgroundColor} ${textColor} py-20 px-6 md:px-20 text-center`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
  {/* Title */}
  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-8 sm:mb-10 md:mb-12 text-center">
    {title}
  </h2>

  {/* Image */}
  <div className="flex justify-center overflow-hidden rounded-2xl shadow-lg h-64 sm:h-80 md:h-[400px] lg:h-[500px] w-full">
    <Image
      src={imageSrc}
      alt={imageAlt}
      width={800}
      height={600}
      className="object-contain w-full h-full"
    />
  </div>

  {/* Note */}
  {note && (
    <p className="text-gray-400 text-sm sm:text-base mt-4 sm:mt-6 md:mt-8 max-w-2xl mx-auto text-center">
      {note}
    </p>
  )}
</div>

    </section>
  );
}