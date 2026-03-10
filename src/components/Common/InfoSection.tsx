import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import AnimateOnInView from "../../animation/AnimateOnInView";
import CustomButton from "../Common/CustomButton";
import Titlep from "./Titlep";

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1, ease: "easeOut" },
  },
};

interface SectionComponentProps {
  imgClass?: string;
  title: string;
  subtitle: string;
  description: string;
  description2?: string;
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

  return (
    <section className="w-full sm:px-0 mt-10">
      {/* Mobile View */}
      <div className="sm:hidden flex flex-col items-center">
        <div className="w-full text-center">
          <AnimateOnInView variants={fadeInVariants}>
            <Titlep className="text-sm md:text-xl" text={title} />
          </AnimateOnInView>

          <AnimateOnInView variants={fadeInVariants}>
            <h1 className="text-2xl capitalize block text-left">{subtitle}</h1>
          </AnimateOnInView>

          <AnimateOnInView variants={fadeInVariants}>
            <p className="mt-4 text-base text-customGrey text-left">
              {description}
            </p>
            {description2 && (
              <p className="mt-4 text-base text-customGrey text-left">
                {description2}
              </p>
            )}
            {description3 && (
              <p className="mt-4 text-base text-customGrey text-left">
                {description3}
              </p>
            )}
          </AnimateOnInView>
        </div>

        {/* Mobile Image */}
        {isvisible !== "true" && imageSrc && (
          <AnimateOnInView
            className="w-full flex justify-center mt-4"
            variants={fadeInVariants}
          >
            <motion.img
              src={imageSrc}
              alt={title}
              className={`w-full h-auto ${imgClass}`}
              initial="hidden"
              animate="visible"
              variants={fadeInVariants}
            />
          </AnimateOnInView>
        )}

        {/* Mobile Button */}
        {buttonText && buttonLink && is_button === "true" && (
          <AnimateOnInView variants={fadeInVariants}>
            <div className="mt-6">
              <CustomButton
                text={buttonText}
                onClick={() => navigate(buttonLink)}
              />
            </div>
          </AnimateOnInView>
        )}
      </div>

      {/* Web View */}
      <div className="hidden sm:block lg:flex w-full">
        <div
          className={`flex flex-col lg:flex-row items-center w-full ${
            reverse ? "lg:flex-row-reverse" : ""
          }`}
        >
          {/* Image */}
          {imageSrc && (
            <AnimateOnInView
              className="w-full sm:w-1/2 flex justify-center order-first lg:order-1 mt-4"
              variants={fadeInVariants}
            >
              <motion.img
                src={imageSrc}
                alt={title}
                className={`lg:w-[80%] lg:h-[60vh] ${imgClass} sm:max-h-none`}
                initial="hidden"
                animate="visible"
                variants={fadeInVariants}
              />
            </AnimateOnInView>
          )}

          {/* Text and Button */}
          <div className="w-full sm:w-1/2 text-center sm:text-left order-2 lg:order-2">
            <AnimateOnInView variants={fadeInVariants}>
              <Titlep
                className="mb-6 sm:mb-6 text-base sm:text-sm md:text-xl"
                text={title}
              />
            </AnimateOnInView>

            <AnimateOnInView variants={fadeInVariants}>
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl capitalize block text-left">
                {subtitle}
              </h1>
            </AnimateOnInView>

            <AnimateOnInView variants={fadeInVariants}>
              <p className="mt-4 text-sm sm:text-base md:text-sm text-customGrey text-left">
                {description}
              </p>
              {description2 && (
                <p className="mt-4 text-sm sm:text-base md:text-sm text-customGrey text-left">
                  {description2}
                </p>
              )}
              {description3 && (
                <p className="mt-4 text-sm sm:text-base md:text-sm text-customGrey text-left">
                  {description3}
                </p>
              )}
            </AnimateOnInView>

            {/* Web Button */}
            {buttonText && buttonLink && (is_button !== "true" || home) && (
              <AnimateOnInView variants={fadeInVariants}>
                <div className="flex justify-center sm:justify-start mt-6 sm:mt-10">
                  <CustomButton
                    text={buttonText}
                    onClick={() => navigate(buttonLink)}
                  />
                </div>
              </AnimateOnInView>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
