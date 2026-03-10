import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useParams } from "react-router-dom";
import { getCategoryType } from "../../utils/getCategoryType";

const EASE = [0.22, 1, 0.36, 1];

interface AboutProjectProps {
  data: {
    about_desc: string;
    alt: string;
    img1: string;
    img2: string;
  };
  title: string;
  isCompleted: boolean;
  address_title: string;
}

const AboutProject = ({ data, title, isCompleted, address_title }: AboutProjectProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  const { category } = useParams();

  return (
    <section ref={ref} className="container-base py-12 md:py-16">
      {/* Mobile title (hidden on lg+) */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: EASE }}
        className="flex flex-col gap-2 mb-8 lg:hidden"
      >
        <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
        <div className="flex flex-wrap items-center gap-2 text-sm text-customGrey">
          <span>{getCategoryType(category)}</span>
          <span>|</span>
          <span>{address_title || "Ahmedabad"}</span>
          <span>|</span>
          <span
            className={`inline-flex items-center gap-1 font-medium ${
              isCompleted ? "text-green-600" : "text-black"
            }`}
          >
            <span
              className={`inline-block w-2 h-2 rounded-full ${
                isCompleted ? "bg-green-500" : "bg-amber-400"
              }`}
            />
            {isCompleted ? "Completed" : "Ongoing"}
          </span>
        </div>
      </motion.div>

      {/* Two-column content */}
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
          className="w-full lg:w-1/2"
        >
          {/* Section label */}
          <div className="flex items-center gap-3 mb-4">
            <motion.span
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.7, ease: EASE, delay: 0.2 }}
              className="inline-block h-[2px] w-8 bg-black origin-left"
            />
            <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-customGrey">
              About the Project
            </span>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-6 relative inline-block">
            {title}
            <motion.span
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, ease: EASE, delay: 0.5 }}
              className="absolute -bottom-1 left-0 h-[3px] w-full bg-black origin-left"
            />
          </h2>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.9, ease: EASE, delay: 0.35 }}
            className="text-customGrey text-sm leading-relaxed space-y-4 [&>p]:leading-7"
            dangerouslySetInnerHTML={{ __html: data.about_desc }}
          />
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 28 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, ease: EASE, delay: 0.25 }}
          className="w-full lg:w-1/2 overflow-hidden rounded-xl"
        >
          <motion.img
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.6, ease: EASE }}
            src={data.img1}
            alt={data.alt || "project image"}
            className="w-full h-[56vw] sm:h-[360px] lg:h-[440px] xl:h-[500px] object-cover rounded-xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutProject;

