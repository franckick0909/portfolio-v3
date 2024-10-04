"use client";

import { dataServices } from "@/data/data";
import { motion } from "framer-motion";
import Accordion from "@/components/accordion";
import { accordionItems1, accordionItems2 } from "@/data/data";
import { AnimatedTitle } from "@/components/animatedTitle";

export default function Services() {
  return (
    <section
      id="services"
      className="relative min-h-screen w-full flex flex-col items-center justify-center py-16  bg-stone-100 z-[201]"
    >
      <div className="container mx-auto px-4 relative">
        <AnimatedTitle
          text="Services"
          className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-marcellus text-start mb-4"
          delay={0.1}
        />

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex items-center mb-16"
        >
          <div className="w-16 h-0.5 bg-black mr-4" />
          <h3 className="text-base md:text-lg lg:text-xl font-inter uppercase text-stone-700">
            Comment je peux vous aider
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {dataServices.map((service) => (
            <motion.div
              key={service.id}
              className="bg-white px-8 py-12 shadow-sm hover:shadow-xl transition-all duration-300 border-t-[3px] border-transparent hover:border-t-[3px] hover:border-black"
            >
              <h4 className="text-8xl mb-4 font-marcellus text-end">
                {service.id}
              </h4>
              <h5 className="text-2xl mb-4 font-inter">{service.title}</h5>
              <div className="w-8 h-[1px] bg-black mb-4"></div>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
        <div className="my-48">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex items-center my-16"
          >
            <div className="w-16 h-[1px] bg-black mr-4" />
            <h3 className="text-base md:text-lg lg:text-xl font-inter uppercase text-stone-700">
              Questions fréquentes
            </h3>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto ">
            <Accordion items={accordionItems1} />
            <Accordion items={accordionItems2} />
          </div>
        </div>
      </div>
    </section>
  );
}
