import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Slider from "react-slick";
import TestimonialCard from "../Common/TestimonialCard";
import { testimonials } from "../../assets/data/testimonials";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const EASE = [0.22, 1, 0.36, 1];

const Testimonials = () => {
  const sliderRef = useRef<Slider>(null);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  const Next = ({ onClick }: { onClick?: () => void }) => (
    <button
      onClick={onClick}
      className="w-10 h-10 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300"
    >
      <FaArrowRightLong className="text-sm" />
    </button>
  );

  const Prev = ({ onClick }: { onClick?: () => void }) => (
    <button
      onClick={onClick}
      className="w-10 h-10 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300"
    >
      <FaArrowLeftLong className="text-sm" />
    </button>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    customPaging: () => (
      <div className="custom-dot" />
    ),
    afterChange: () => {
      setTimeout(() => { sliderRef.current?.slickPlay(); }, 2000);
    },
  };

  return (
    <section ref={ref} className="top-spacing mb-10">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 lg:px-20">
        <div>
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
              Testimonials
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: EASE, delay: 0.12 }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold capitalize"
          >
            What People Are Saying
          </motion.h2>
        </div>

        {/* Arrow controls */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hidden sm:flex items-center gap-3"
        >
          <Prev onClick={() => sliderRef.current?.slickPrev()} />
          <Next onClick={() => sliderRef.current?.slickNext()} />
        </motion.div>
      </div>

      {/* Slider */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: EASE, delay: 0.25 }}
        className="relative border-y border-[#EDEAEA] py-4"
      >
        <Slider ref={sliderRef} {...settings}>
          {testimonials.map((t) => (
            <div key={t.id}>
              <TestimonialCard review={t.review} type={t.type} name={t.name} />
            </div>
          ))}
        </Slider>

        {/* Mobile arrows */}
        <div className="flex justify-center gap-3 mt-6 sm:hidden">
          <Prev onClick={() => sliderRef.current?.slickPrev()} />
          <Next onClick={() => sliderRef.current?.slickNext()} />
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonials;
