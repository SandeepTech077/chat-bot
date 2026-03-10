import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";
import CustomButton from "../Common/CustomButton";

// Shared animation config
const EASE = [0.22, 1, 0.36, 1]; // custom spring ease

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE, delay } },
});

const imgReveal = {
  hidden: { clipPath: "inset(0 100% 0 0)", opacity: 0 },
  visible: {
    clipPath: "inset(0 0% 0 0)",
    opacity: 1,
    transition: { duration: 1, ease: EASE },
  },
};

const lineGrow = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 0.9, ease: EASE, delay: 0.3 } },
};

interface SectionComponentProps {
  imgClass?: string;
  title: string;
  subtitle: string;
  description: string;
  description2?: React.ReactNode;
  description3?: string;
  buttonText?: string;
  buttonLink?: string;
  imageSrc?: string;
  is_button?: string;
  reverse?: boolean;
  home?: string;
  isvisible?: string;
}

const InfoSection: React.FC<SectionComponentProps> = ({
  imgClass,
  title,
  subtitle,
  description,
  description2,
  description3,
  buttonText,
  buttonLink,
  imageSrc,
  is_button,
  reverse = false,
  home,
  isvisible,
}) => {
  const navigate = useNavigate();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  const showButton = buttonText && buttonLink && (is_button !== "true" || home);

  return (
    <section ref={ref} className="w-full mt-10 sm:mt-16 lg:mt-20">
      {/* ── MOBILE ── */}
      <div className="sm:hidden flex flex-col gap-6">
        <div>
          {/* Label */}
          <motion.div
            variants={fadeUp(0)}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="flex items-center gap-3 mb-3"
          >
            <motion.span
              variants={lineGrow}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="inline-block h-[2px] w-8 bg-black origin-left"
            />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-customGrey">
              {title}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp(0.1)}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="text-2xl font-bold leading-tight capitalize"
          >
            {subtitle}
          </motion.h1>

          {/* Body text */}
          <motion.div
            variants={fadeUp(0.2)}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="mt-4 space-y-3 text-sm text-customGrey leading-relaxed"
          >
            <p>{description}</p>
            {description2 && <p>{description2}</p>}
            {description3 && <p>{description3}</p>}
          </motion.div>
        </div>

        {/* Image */}
        {isvisible !== "true" && imageSrc && (
          <motion.div
            variants={imgReveal}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="w-full overflow-hidden rounded-sm"
          >
            <img
              src={imageSrc}
              alt={title}
              className={`w-full h-[260px] object-cover ${imgClass}`}
            />
          </motion.div>
        )}

        {/* Button */}
        {buttonText && buttonLink && is_button === "true" && (
          <motion.div
            variants={fadeUp(0.3)}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <CustomButton text={buttonText} onClick={() => navigate(buttonLink)} />
          </motion.div>
        )}
      </div>

      {/* ── DESKTOP ── */}
      <div
        className={`hidden sm:flex items-center gap-10 lg:gap-16 w-full ${
          reverse ? "flex-row-reverse" : "flex-row"
        }`}
      >
        {/* Image side */}
        {imageSrc && (
          <motion.div
            variants={imgReveal}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="w-1/2 shrink-0 overflow-hidden rounded-sm"
          >
            <img
              src={imageSrc}
              alt={title}
              className={`w-full object-cover ${imgClass}`}
              style={{ height: "clamp(320px, 55vh, 580px)" }}
            />
          </motion.div>
        )}

        {/* Text side */}
        <div className="flex-1 flex flex-col gap-5">
          {/* Label + line */}
          <motion.div
            variants={fadeUp(0)}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="flex items-center gap-3"
          >
            <motion.span
              variants={lineGrow}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="inline-block h-[2px] w-8 bg-black origin-left"
            />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-customGrey">
              {title}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp(0.1)}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="text-2xl md:text-3xl lg:text-4xl font-bold leading-[1.15] capitalize"
          >
            {subtitle}
          </motion.h1>

          {/* Separator */}
          <motion.div
            variants={lineGrow}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="h-px w-full bg-[#EDEAEA] origin-left"
          />

          {/* Body text */}
          <motion.div
            variants={fadeUp(0.2)}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-3 text-sm md:text-base text-customGrey leading-relaxed"
          >
            <p>{description}</p>
            {description2 && <p>{description2}</p>}
            {description3 && <p>{description3}</p>}
          </motion.div>

          {/* Button */}
          {showButton && (
            <motion.div
              variants={fadeUp(0.3)}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="mt-2"
            >
              <CustomButton text={buttonText!} onClick={() => navigate(buttonLink!)} />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
