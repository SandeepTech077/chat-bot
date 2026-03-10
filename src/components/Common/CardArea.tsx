import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import CustomCard from "./CustomCard";
import { ProjectDataTypes } from "../../types/projectDataTypes.types";

const EASE = [0.22, 1, 0.36, 1];

type CardAreaProps = {
  section: string;
  title?: string;
  data: ProjectDataTypes[];
  desc?: string;
};

const CardArea = ({ section, title, data, desc }: CardAreaProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section ref={ref} className="relative top-spacing px-0 md:px-20">
      {/* Section label + headline */}
      <div className="flex flex-col items-center text-center mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: EASE }}
          className="flex items-center gap-3 mb-3"
        >
          <motion.span
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
            className="inline-block h-[2px] w-8 bg-black origin-left"
          />
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-customGrey">
            {section}
          </span>
          <motion.span
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
            className="inline-block h-[2px] w-8 bg-black origin-right"
          />
        </motion.div>

        {title && (
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: EASE, delay: 0.12 }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold capitalize max-w-lg"
          >
            {title}
          </motion.h2>
        )}

        {desc && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE, delay: 0.2 }}
            className="mt-3 text-base text-customGrey max-w-xl"
          >
            {desc}
          </motion.p>
        )}
      </div>

      {/* Cards grid */}
      <div
        className={`grid grid-cols-1 gap-8 md:gap-10 lg:gap-16 mb-8 ${
          data.length === 1
            ? "place-items-center"
            : "sm:grid-cols-2 lg:grid-cols-3 justify-items-center"
        }`}
      >
        {data.length > 0 ? (
          data.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, ease: EASE, delay: 0.1 + index * 0.08 }}
              className="relative w-full flex justify-center"
            >
              <CustomCard data={item} reverse={index % 3 === 1} />
            </motion.div>
          ))
        ) : (
          <p className="col-span-full text-center text-base text-customGrey">
            No projects available.
          </p>
        )}
      </div>
    </section>
  );
};

export default CardArea;

