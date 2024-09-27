"use client";

import { dataServices } from "@/data/data";
import { motion } from "framer-motion";
import Accordion from "@/components/accordion";
import { accordionItems1, accordionItems2 } from "@/data/data";

export default function Services() {
  return (
    <section
      id="services"
      className="relative min-h-screen w-full flex flex-col items-center justify-center py-16 bg-gradient-to-t from-white to-stone-100 overflow-hidden z-[201]"
    >
      <div className="container mx-auto px-4 relative">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-marcellus text-start mb-4"
        >
          Services
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex items-center mb-16"
        >
          <div className="w-16 h-0.5 bg-black mr-4" />
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-pinyon-script">
            Comment je peux vous aider
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {dataServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className="bg-white px-8 py-12 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <h4 className="text-8xl mb-4 font-marcellus text-end">
                {service.id}
              </h4>
              <h5 className="text-2xl mb-4 font-inter">{service.title}</h5>
              <div className="w-8 h-0.5 bg-black mb-4"></div>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="flex items-center mt-24 mb-16">
          <div className="w-16 h-0.5 bg-black mr-4" />
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-pinyon-script">
            Questions fréquentes
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto ">
          <Accordion items={accordionItems1} />
          <Accordion items={accordionItems2} />
        </div>
      </div>
    </section>
  );
}
