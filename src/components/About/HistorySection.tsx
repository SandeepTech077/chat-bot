import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

const milestones = [
  { year: "2004", title: "The Beginning", desc: "Founded by Mr. Yash Brahmbhatt with a land auction win from AUDA — the first step into real estate." },
  { year: "2008", title: "Pioneer on SBR", desc: "Became the first developer to construct buildings on Sindhu Bhavan Road, now a prime Ahmedabad location." },
  { year: "2015", title: "National Recognition", desc: "Won multiple state and national accolades for excellence in commercial and residential delivery." },
  { year: "2020", title: "Affordable Housing", desc: "Expanded into affordable housing and plotting schemes to serve a wider community." },
  { year: "2024", title: "52+ Landmarks", desc: "Over 52 landmark projects, 19M+ sq. ft. delivered, and 9,000+ families housed across Ahmedabad." },
];

const HistorySection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

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
          Our Journey
        </span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
        className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-12"
      >
        Two Decades of<br />
        <span className="relative inline-block">
          Building Excellence
          <motion.span
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, ease: EASE, delay: 0.5 }}
            className="absolute -bottom-1 left-0 h-[3px] w-full bg-black origin-left"
          />
        </span>
      </motion.h2>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={inView ? { scaleY: 1 } : {}}
          transition={{ duration: 1.2, ease: EASE, delay: 0.3 }}
          className="absolute left-[72px] md:left-1/2 top-0 bottom-0 w-px bg-[#EDEAEA] origin-top hidden sm:block"
        />

        <div className="space-y-0">
          {milestones.map((m, i) => (
            <motion.div
              key={m.year}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: EASE, delay: 0.3 + i * 0.12 }}
              className={`flex flex-col sm:flex-row items-start sm:items-center gap-6 py-8 border-b border-[#EDEAEA] last:border-0
                ${i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}
            >
              {/* Year side */}
              <div className={`sm:w-1/2 ${i % 2 === 0 ? "sm:text-right sm:pr-12" : "sm:text-left sm:pl-12"}`}>
                <span className="text-4xl md:text-5xl font-bold text-[#EDEAEA]">{m.year}</span>
              </div>

              {/* Dot */}
              <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-black border-2 border-black ring-4 ring-white" />

              {/* Content side */}
              <div className={`sm:w-1/2 ${i % 2 === 0 ? "sm:pl-12" : "sm:pr-12"}`}>
                <h3 className="text-lg font-bold mb-2">{m.title}</h3>
                <p className="text-sm text-customGrey leading-relaxed">{m.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
