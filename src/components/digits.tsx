import { motion } from "framer-motion";

export default function Digits({ id }: { id: string }) {
  return (
    <div className="relative flex items-center justify-center w-12 h-10 md:w-20 md:h-16 lg:w-32 lg:h-[6.5rem] overflow-hidden leading-snug">
      {id.split("").map((digit, index) => (
        <motion.span
          key={`top-${index}`}
          className="font-marcellus font-normal text-3xl md:text-5xl lg:text-6xl xl:text-8xl pb-2 absolute"

          style={{ left: `${index * 54}%` }} // Ajusté le positionnement horizontal
          initial={{ y: "200%" }}
          animate={{ y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          variants={{
            hover: { y: "-100%" },
          }}
        >
          {digit}
        </motion.span>
      ))}
      {id.split("").map((digit, index) => (
        <motion.span
          key={`bottom-${index}`}
          className="font-pinyon-script text-4xl md:text-6xl lg:text-8xl font-normal inline-block absolute"
          style={{ left: `${index * 38}%` }} // Ajusté le positionnement horizontal
          initial={{ y: "200%" }}
          variants={{
            hover: { y: 0 },
          }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
        >
          {digit}
        </motion.span>
      ))}
    </div>
  );
}