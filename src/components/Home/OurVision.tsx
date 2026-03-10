import Title from "../Common/Title";
import AnimateOnInView from "../../animation/AnimateOnInView";
import CountUp from 'react-countup';
import { useInView } from 'framer-motion';
import { useRef } from "react";

const OurVision = () => {
  const textVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, delay: 0.5, ease: "easeInOut" },
    },
  };

  const statsVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, delay: 0.5, ease: "easeInOut" },
    },
  };

  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

return (
    <section className="top-spacing lg:px-20 sm:px-0">
      <div className="flex flex-col lg:flex-row items-center justify-between">
        {/* Left side: Vision text */}
        <AnimateOnInView className="lg:w-1/3"  variants={textVariants}>
          <Title text="Numbers That Define Us" className="mb-10" />
          <h3 className="lg:text-xl sm:text-sm capitalize sm:text-center">
            Every number tells a story of trust, commitment, and excellence.
          </h3>
        </AnimateOnInView>

        {/* Right side: Vision statistics */}
        <div
          ref={ref}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-6 lg:mt-0 lg:w-2/3 lg:ml-10"
        >
          <AnimateOnInView className="flex flex-col items-center" variants={statsVariants}>
            <span className="text-2xl lg:text-5xl mt-4">
              {isInView && <CountUp start={0} end={21} duration={3} delay={1} />}+
            </span>
            <p className="text-customGrey text-sm sm:text-base md:text-lg mt-2 text-center">
             Years Hands on Experience
            </p>
          </AnimateOnInView>

          <AnimateOnInView className="flex flex-col items-center" variants={statsVariants}>
            <span className="text-2xl lg:text-5xl mt-4">
              {isInView && <CountUp end={19} start={0} duration={3} delay={1} />}+
            </span>
            <p className="text-customGrey text-sm sm:text-base md:text-lg mt-2 text-center">Million Sq. Ft.</p>
          </AnimateOnInView>

          <AnimateOnInView className="flex flex-col items-center" variants={statsVariants}>
            <span className="text-2xl lg:text-5xl mt-4">
              {isInView && <CountUp start={8500} end={9000} duration={3} delay={1} />}+
            </span>
            <p className="text-customGrey text-sm sm:text-base md:text-lg mt-2 text-center">Units</p>
          </AnimateOnInView>

          <AnimateOnInView className="flex flex-col items-center" variants={statsVariants}>
            <span className="text-2xl lg:text-5xl mt-4">
              {isInView && <CountUp start={0} end={52} duration={3} delay={1} />}+
            </span>
            <p className="text-customGrey text-sm sm:text-base md:text-lg mt-2 text-center">
              Residential And Commercial Properties
            </p>
          </AnimateOnInView>
        </div>
      </div>
    </section>
  );
};

export default OurVision;
