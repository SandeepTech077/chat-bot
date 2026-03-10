import { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { GoArrowUpRight } from "react-icons/go";
import { projectData } from "../../assets/data/projectData";
import { useNavigate } from "react-router-dom";

const EASE = [0.22, 1, 0.36, 1];

const ExpandableGallery = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  const sliderSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    fade: true,
  };

  useEffect(() => {
    if (activeIndex !== null) {
      setIsLoading(true);
      const t = setTimeout(() => setIsLoading(false), 800);
      return () => clearTimeout(t);
    }
  }, [activeIndex]);

  return (
    <section className="top-spacing" ref={ref}>
      {/* Heading */}
      <div className="lg:px-20 mb-8">
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
            Our Services
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: EASE, delay: 0.15 }}
          className="text-2xl md:text-3xl lg:text-4xl font-bold capitalize"
        >
          Residential, Commercial &amp; Plotting
        </motion.h2>
      </div>

      {/* Panels */}
      <div className="flex flex-col md:flex-row gap-1 h-auto md:h-[560px] lg:mx-20">
        {projectData.map((item, index) => {
          const isActive = activeIndex === index;
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, ease: EASE, delay: 0.1 + index * 0.12 }}
              className={`relative overflow-hidden cursor-pointer rounded-sm
                transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
                ${isActive
                  ? "md:flex-[3] h-[340px] md:h-full"
                  : "md:flex-[0.5] h-[56px] md:h-full"
                }`}
              onClick={() => setActiveIndex(isActive ? null : index)}
            >
              {/* Background image */}
              {isActive && !isLoading ? (
                <Slider key={index} {...sliderSettings}>
                  {item.explandable_back_img.map((img: string, i: number) => (
                    <div key={i} className="w-full h-full">
                      <img
                        src={img}
                        alt={`${item.title} ${i}`}
                        className="w-full h-[340px] md:h-[560px] object-cover"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </Slider>
              ) : (
                <img
                  src={item.explandable_back_img[0]}
                  alt={item.title}
                  loading="lazy"
                  className={`w-full h-full object-cover transition-all duration-700 ${
                    isActive ? "scale-105" : "scale-100"
                  }`}
                />
              )}

              {/* Shimmer loader */}
              <AnimatePresence>
                {isActive && isLoading && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 animate-pulse"
                  />
                )}
              </AnimatePresence>

              {/* Gradient overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent
                  transition-opacity duration-500 ${isActive ? "opacity-100" : "opacity-90"}`}
              />
              {/* Dark tint for inactive */}
              {!isActive && <div className="absolute inset-0 bg-black/60" />}

              {/* Title — Inactive: rotated on desktop, horizontal on mobile */}
              {!isActive && (
                <span className="absolute inset-0 flex items-center justify-center text-white font-semibold text-sm md:text-base tracking-widest uppercase
                  md:-rotate-90 whitespace-nowrap select-none">
                  {item.title}
                </span>
              )}

              {/* Active bottom bar */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 30, opacity: 0 }}
                    transition={{ duration: 0.4, ease: EASE }}
                    className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-5 py-4 bg-black/60 backdrop-blur-sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/projects/${item.category}`);
                    }}
                  >
                    <div>
                      <h3 className="text-white font-bold text-lg md:text-xl">{item.title}</h3>
                      <p className="text-white/60 text-xs tracking-widest uppercase mt-0.5">
                        Explore projects
                      </p>
                    </div>
                    <div className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center
                      hover:bg-white hover:text-black transition-all duration-300 group">
                      <GoArrowUpRight className="text-white group-hover:text-black text-lg transition-colors" />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default ExpandableGallery;
