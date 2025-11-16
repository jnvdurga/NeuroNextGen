"use client";

import React, { useRef } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import GalaxyBackground from "./GalaxyBg";

export default function FooterReveal() {
  const footerRef = useRef<HTMLDivElement>(null);

  return (
    <footer className="relative bg-black text-gray-300 px-6 py-16 lg:py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 opacity-40">
        <GalaxyBackground />
      </div>

      <div className="container mx-auto max-w-screen-xl relative z-10">
        {/* Equal 3 Columns */}
        <div
          ref={footerRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-14 md:gap-10"
        >
          {/* COLUMN 1 */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-white tracking-wide">
              NeuroNextGen <span className="text-white">Solutions</span>
            </h2>

            <p className="text-gray-400 leading-relaxed">
              We create future-proof digital experiences by engineering smart,
              scalable software.
            </p>

            <div className="flex space-x-4 text-white text-xl">
              {[
                {
                  icon: <FaWhatsapp />,
                  href: "https://api.whatsapp.com/send?phone=919406519122&text=Hello!%20I%27m%20interested%20in%20your%20services.",
                },
                { icon: <FaFacebook />, href: "https://www.facebook.com/PrakharArtServices/" },
                { icon: <FaInstagram />, href: "https://www.instagram.com/intelyhood/" },
                { icon: <FaLinkedin />, href: "https://in.linkedin.com/company/intelyhoodtech" },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target="_blank"
                  className="p-2 rounded-full border border-gray-600 hover:bg-gray-800 transition-all duration-300"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* COLUMN 2 */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold mb-4 uppercase tracking-wider">
              Quick Links
            </h3>

            <ul className="space-y-2">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Careers", href: "/careers" },
                { name: "Contact Us", href: "/contact" },
              ].map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3 */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wider">
              Address
            </h4>

            <a
              target="_blank"
              href="https://www.google.com/maps/place/Patch+Line+Technologies"
              className="flex items-start gap-3 text-gray-400 hover:text-white transition"
            >
              <MdLocationPin className="mt-1 text-white text-xl" />
              <span>
                72, Yeshwant Niwas Rd,
                <br />
                Nehru Park 2, Lad Colony,
                <br />
                Indore, Madhya Pradesh 452003
              </span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>
            © 2025{" "}
            <span className="font-semibold text-white">NeuroNextGen Solutions</span>.  
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
