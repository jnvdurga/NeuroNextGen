"use client";

import React from "react";
import { motion } from "framer-motion";

interface InfoItem {
  icon: any;
  title: string;
  subtitle?: string;
  features?: string[];
  image?: string;
}

interface InfoGridProps {
  data: InfoItem[];
  title?: string;
  description?: string;
}

export const InfoGrid: React.FC<InfoGridProps> = ({ data, title, description }) => {
  return (
    <section className="py-20 px-6 bg-black text-white">
      <div className="container max-w-screen-xl mx-auto">

        {/* Section Header */}
        {title && (
          <h2 className="text-center text-4xl font-bold mb-4">{title}</h2>
        )}
        {description && (
          <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12">
            {description}
          </p>
        )}

        {/* Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 border border-white/10 rounded-2xl bg-white/5 hover:bg-white/10 transition relative"
            >
              <div className="flex items-center gap-4 mb-4">
                <item.icon className="w-10 h-10 text-white" />
                <h3 className="text-xl font-semibold">{item.title}</h3>
              </div>

              {item.subtitle && (
                <p className="text-gray-400 text-sm mb-3">{item.subtitle}</p>
              )}

              {item.features && (
                <ul className="text-gray-300 text-sm space-y-2">
                  {item.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-white">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
