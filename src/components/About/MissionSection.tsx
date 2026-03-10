import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Icons from "../../assets/Icons";

const EASE = [0.22, 1, 0.36, 1];

const cards = [
  {
    icon: Icons.target,
    alt: "Mission",
    tag: "Our Mission",
    headline: "Build. Deliver. Excel.",
    description:
      "Building world-class commercial and residential spaces that are dynamic, unified, and tailored to every need while creating lasting value for customers, employees, and the community.",
  },
  {
    icon: Icons.vision,
    alt: "Vision",
    tag: "Our Vision",
    headline: "The Trusted Choice.",
    description:
      "To be the most trusted choice in real estate — creating a better, liveable and comfortable life for everyone through thoughtful design and timely delivery.",
  },
];

const MissionSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="top-spacing">
      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, ease: EASE }}
        className="flex items-center gap-3 mb-4"
      >
        <motion.span
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
          className="inline-block h-[2px] w-8 bg-black origin-left"
        />
        <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-customGrey">
          Our Goals
        </span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
        className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-12"
      >
        Mission &{" "}
        <span className="relative inline-block">
          Vision
          <motion.span
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, ease: EASE, delay: 0.5 }}
            className="absolute -bottom-1 left-0 h-[3px] w-full bg-black origin-left"
          />
        </span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#EDEAEA]">
        {cards.map((card, i) => (
          <motion.div
            key={card.tag}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: EASE, delay: 0.2 + i * 0.15 }}
            className="bg-white p-8 md:p-12 group hover:bg-black transition-colors duration-500 cursor-default"
          >
            {/* Top row */}
            <div className="flex items-start justify-between mb-8">
              <img
                src={card.icon}
                alt={card.alt}
                className="w-10 h-10 group-hover:invert transition-all duration-500"
              />
              <span className="text-[10px] font-semibold tracking-[0.22em] uppercase text-customGrey group-hover:text-white/40 transition-colors duration-500 mt-1">
                {card.tag}
              </span>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-white transition-colors duration-500 leading-tight">
              {card.headline}
            </h3>

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, ease: EASE, delay: 0.4 + i * 0.15 }}
              className="h-px w-12 bg-black/20 group-hover:bg-white/20 origin-left mb-5 transition-colors duration-500"
            />

            <p className="text-sm md:text-base text-customGrey leading-relaxed group-hover:text-white/60 transition-colors duration-500">
              {card.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MissionSection;
