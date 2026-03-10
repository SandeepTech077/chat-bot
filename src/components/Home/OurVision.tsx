import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";

const stats = [
  { end: 21, start: 0, suffix: "+", label: "Years Experience", delay: 0 },
  { end: 19, start: 0, suffix: "M+", label: "Sq. Ft. Delivered", delay: 0.1 },
  { end: 9000, start: 8500, suffix: "+", label: "Happy Families", delay: 0.2 },
  { end: 52, start: 0, suffix: "+", label: "Projects Completed", delay: 0.3 },
];

const EASE = [0.22, 1, 0.36, 1];

const OurVision = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="top-spacing">
      {/* Two-column layout: title left, stats right */}
      <div className="flex flex-col lg:flex-row lg:items-stretch border-t border-b border-[#EDEAEA]">
        {/* Left — label + headline */}
        <div className="lg:w-[30%] flex flex-col justify-center py-12 pr-8 border-b lg:border-b-0 lg:border-r border-[#EDEAEA]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: EASE }}
            className="flex items-center gap-3 mb-5"
          >
            <motion.span
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
              className="inline-block h-[2px] w-8 bg-black origin-left"
            />
            <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-customGrey">
              Our Numbers
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: EASE, delay: 0.15 }}
            className="text-3xl md:text-4xl lg:text-[2.6rem] font-bold leading-[1.15] tracking-tight"
          >
            Numbers That{" "}
            <br className="hidden lg:block" />
            <span className="relative inline-block">
              Define Us
              <motion.span
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, ease: EASE, delay: 0.6 }}
                className="absolute -bottom-1 left-0 h-[3px] w-full bg-black origin-left"
              />
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE, delay: 0.3 }}
            className="mt-6 text-sm text-customGrey leading-relaxed max-w-[260px]"
          >
            Two decades of excellence, crafting landmark spaces across Ahmedabad.
          </motion.p>
        </div>

        {/* Right — stats grid */}
        <div className="lg:w-[70%] grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: EASE, delay: 0.2 + i * 0.12 }}
              className={`flex flex-col items-center justify-center py-12 px-6 text-center group cursor-default
                hover:bg-black transition-colors duration-500
                ${i % 2 === 0 ? "border-r border-[#EDEAEA]" : ""}
                ${i < 2 ? "border-b lg:border-b-0 border-[#EDEAEA]" : ""}
                ${i !== 0 && i !== 2 ? "lg:border-r lg:border-[#EDEAEA]" : ""}
              `}
            >
              <span className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight group-hover:text-white transition-colors duration-500">
                {inView && (
                  <CountUp
                    start={stat.start}
                    end={stat.end}
                    duration={2.5}
                    delay={0.3 + i * 0.12}
                    separator=","
                  />
                )}
                {stat.suffix}
              </span>
              <span className="mt-3 text-[11px] md:text-xs text-customGrey font-medium tracking-[0.15em] uppercase group-hover:text-white/70 transition-colors duration-500">
                {stat.label}
              </span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.7, ease: EASE, delay: 0.6 + i * 0.1 }}
                className="mt-4 block h-[2px] w-8 bg-black/20 origin-left group-hover:bg-white/30 transition-colors duration-500"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurVision;
