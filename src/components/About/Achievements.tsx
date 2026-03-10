import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { awardsData } from "../../assets/data/awards";
import Icons from "../../assets/Icons";

const EASE = [0.22, 1, 0.36, 1];

const Achievements = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section ref={ref} className="top-spacing bg-[#FCFCFC]">
      <div className="container-base py-12">
        {/* First row */}
        <div className="flex flex-col md:flex-row gap-10">
          {/* Left — title */}
          <div className="md:w-1/2">
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
                Recognition
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
              className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-4"
            >
              A Showcase of{" "}
              <span className="relative inline-block">
                Success
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={inView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.8, ease: EASE, delay: 0.55 }}
                  className="absolute -bottom-1 left-0 h-[3px] w-full bg-black origin-left"
                />
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.7, ease: EASE, delay: 0.3 }}
              className="text-customGrey text-sm leading-relaxed max-w-sm"
            >
              Explore our collection of prestigious awards that reflect our
              dedication to quality, integrity and excellence.
            </motion.p>
          </div>

          {/* Right — first 2 featured awards */}
          <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {awardsData.slice(0, 2).map((award, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease: EASE, delay: 0.2 + i * 0.12 }}
                className="bg-white border border-[#EDEAEA] p-6 flex flex-col gap-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-400"
              >
                <img src={Icons.trophy} alt="trophy" className="w-10 h-10" />
                <span className="text-sm font-medium leading-snug">{award.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Remaining awards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 mt-8">
          {awardsData.slice(2).map((award, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: EASE, delay: 0.1 + i * 0.07 }}
              className="bg-white border border-[#EDEAEA] p-5 flex flex-col gap-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-400"
            >
              <img loading="lazy" src={Icons.trophy} alt="trophy" className="w-9 h-9" />
              <span className="text-sm leading-snug">{award.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;

