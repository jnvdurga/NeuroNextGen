"use client";

import React from "react";
import { MdPhone, MdEmail } from "react-icons/md";
import { usePathname } from "next/navigation";

const ContactSection = () => {
  const pathname = usePathname();
  const isStaffAugmentationPage = pathname === "/staff-augmentation/";

  return (
    <div>
      <h3 className="text-white font-semibold mb-4 uppercase tracking-wider">
        Contact Us
      </h3>
      <ul className="space-y-3 text-gray-400">
          <>
            <li className="flex items-center space-x-2">
              <MdPhone className="text-white" />
              <a
                href="tel:+917649800211"
                className="hover:text-white transition"
              >
                +91 77468-64650
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <MdPhone className="text-white" />
              <a
                href="tel:+918966983955"
                className="hover:text-white transition"
              >
                +91 92388-04371
              </a>
            </li>
          </>

        {/* ✅ Show general emails only if NOT staff-augmentation page */}
        {!isStaffAugmentationPage && (
          <>
            <li className="flex items-center space-x-2">
              <MdEmail className="text-white" />
              <a
                href="mailto:info@IntelyHood.com"
                className="hover:text-white transition"
              >
                info@IntelyHood.com
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <MdEmail className="text-white" />
              <a
                href="mailto:connect@IntelyHood.com"
                className="hover:text-white transition"
              >
                connect@IntelyHood.com
              </a>
            </li>
          </>
        )}

        {/* ✅ Show only Talentpartner email on staff-augmentation page */}
        {isStaffAugmentationPage && (
          <li className="flex items-center space-x-2">
            <MdEmail className="text-white" />
            <a
              href="mailto:Talentpartner@IntelyHood.com"
              className="hover:text-white transition"
            >
              Talentpartner@IntelyHood.com
            </a>
          </li>
        )}
      </ul>
    </div>
  );
};

export default ContactSection;
