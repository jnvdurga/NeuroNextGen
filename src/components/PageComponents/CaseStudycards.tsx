"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface CaseStudyCardProps {
  title: string;
  category: string;
  services: string;
  image: string;
  description?: string;
}

export default function CaseStudyCard({
  title,
  category,
  services,
  image,
  description
}: CaseStudyCardProps) {
  const router = useRouter();

  return (
    <div
      className="group cursor-pointer bg-white/95 mt-10 rounded-3xl 
                 shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:shadow-[0_0_50px_rgba(255,255,255,0.3)]
                 transition-all duration-700 overflow-hidden border border-white/10
                 flex flex-col md:flex-row hover:scale-[1.03] hover:-translate-y-2 backdrop-blur-sm"
    >
      {/* Left Image Section */}
      <div
  className="relative w-full md:w-[30%] 
             h-64 sm:h-72 md:h-auto 
             flex items-center justify-center overflow-hidden"
>
  <div
    className="relative w-11/12 sm:w-5/6 md:w-full 
               h-full rounded-2xl overflow-hidden shadow-md"
  >
    <Image
      src={image}
      alt={title}
      fill
      className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
    />
  </div>
</div>


      {/* Right Text Section */}
      <div className="relative w-full md:w-[70%] bg-white/95 text-black p-6 md:p-10 flex flex-col justify-center transition-all duration-700 overflow-hidden">
        <h3 className="text-2xl md:text-3xl font-bold mb-3 transition-all duration-300 group-hover:text-blue-400">
          {title}
        </h3>

        <p className="text-sm md:text-base text-gray-700 mb-2">
          <span className="font-medium text-black">Category:</span> {category}
        </p>

        <p className="text-sm md:text-base text-gray-700 mb-4">
          <span className="font-medium text-black">Services:</span> {services}
        </p>

        {/* Hidden animated section */}
        <div
          className="max-h-0 opacity-0 translate-y-4 group-hover:max-h-40 group-hover:opacity-100 
                     group-hover:translate-y-0 transition-all duration-700 ease-in-out"
        >
          <p className="text-sm md:text-base text-gray-600">
            {description}
          </p>

          {/* <button
            onClick={(e) => {
              e.stopPropagation(); // prevent parent click
            }}
            className="mt-4 inline-block bg-blue-400 text-white px-6 py-2 rounded-full 
                       text-sm font-medium shadow-md hover:bg-indigo-700 transition-all duration-300"
          >
            Read More →
          </button> */}
        </div>
      </div>
    </div>
  );
}
