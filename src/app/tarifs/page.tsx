"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { pricingPlans } from "@/data/data";
import { AnimatedTitle } from "@/components/animatedTitle";
import { ScaleButton } from "@/components/scaleButton";

export default function Tarifs() {
  const [isDay, setIsDay] = useState(false);

  return (
    <section
      id="tarifs"
      className="relative min-h-screen w-full flex flex-col items-center justify-center py-20 bg-gradient-to-br from-black to-gray-950 text-white z-[201]"
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-32 relative flex flex-col items-center justify-center w-full">
        <div className="flex items-center justify-start w-full">
          <AnimatedTitle
            text="Prix équitable, des avantages inégalés."
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-marcellus text-center pb-4"
            delay={0.1}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="inline-flex items-baseline justify-start my-6 w-full"
        >
          <div className="w-[5%] h-0.5 bg-white mr-4" />
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-pinyon-script text-white font-thin ">
            Commencez aujourd&apos;hui et faites passer votre entreprise au
            niveau supérieur.
          </h3>
        </motion.div>

        <div className="flex justify-center items-center space-x-4 py-10">
          <span
            className={`text-lg ${!isDay ? "text-white" : "text-gray-400"}`}
          >
            Mensuel
          </span>
          <button
            type="button"
            title="Tarifs Mois / Jours"
            onClick={() => setIsDay(!isDay)}
            className={`w-14 h-7 flex items-center rounded-full p-1 transition-colors duration-300 focus:outline-none ${
              isDay ? "bg-gray-900" : "bg-gray-300"
            }`}
          >
            <div
              className={`bg-black w-5 h-5 rounded-full shadow-md transform transition-transform duration-300 ${
                isDay ? "translate-x-7 bg-white" : ""
              }`}
            />
          </button>
          <span className={`text-lg ${isDay ? "text-white" : "text-gray-400"}`}>
            Journée
          </span>
        </div>

        <motion.div className="relative grid gap-4 lg:gap-8 mb-20 container mx-auto" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))" }}>
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{
                duration: 0.8,
                delay: 0.2 + index * 0.1,
                ease: "easeOut",
              }}
              className="bg-gray-900 rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
            >
              <div className="flex-grow">
                <div className="flex items-center gap-2">
                  <div className="h-px w-[10%] bg-white rounded-full" />
                  <p className="mb-1 mt-0 text-base lg:text-lg xl:text-xl font-medium uppercase text-white font-marcellus">
                    {plan.name}
                  </p>
                </div>

                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
                  {isDay ? plan.dayPrice : plan.monthlyPrice}
                  <span className="text-xl font-normal">
                    {isDay ? "/jours" : "/mois"}
                  </span>
                </div>
                <p className="text-gray-400 mb-6">{plan.description}</p>
                <div className="h-[1px] w-full bg-gray-700 rounded-full mb-4" />
                <ul className="mb-8 text-white font-marcellus">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center mb-2">
                      <svg
                        className="w-5 h-5 mr-2 text-violet-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <ScaleButton
                      text="Commencer"
                      hoverText="Commencer maintenant"
                      href="/contact"
                      bg="bg-white"
                      icon=""
                      target=""
                      rel=""
                      className="text-white bg-black hover:text-black flex z-10 whitespace-nowrap relative"
                type="button"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
