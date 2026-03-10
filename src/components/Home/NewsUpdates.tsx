import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Slider from "react-slick";
import "./home.css";
import { blogData } from "../../assets/data/blogData";
import BlogCard from "../Common/BlogCard";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const EASE = [0.22, 1, 0.36, 1];

const NewsUpdates = () => {
  const sliderRef = useRef<Slider>(null);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  const SlickNext = ({ onClick }: { onClick?: () => void }) => (
    <button
      onClick={onClick}
      className="w-10 h-10 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300"
    >
      <FaArrowRightLong className="text-sm" />
    </button>
  );

  const SlickPrev = ({ onClick }: { onClick?: () => void }) => (
    <button
      onClick={onClick}
      className="w-10 h-10 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300"
    >
      <FaArrowLeftLong className="text-sm" />
    </button>
  );

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3500,
    cssEase: "ease-in-out",
    speed: 700,
    slidesToShow: 2,
    pauseOnHover: true,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
    afterChange: () => {
      setTimeout(() => { sliderRef.current?.slickPlay(); }, 2000);
    },
  };

  return (
    <section ref={ref} className="top-spacing">
      {/* Header row */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 lg:px-20">
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
              Blogs
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: EASE, delay: 0.12 }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold capitalize"
          >
            News &amp; Updates
          </motion.h2>
        </div>

        {/* Controls + View All */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex items-center gap-3"
        >
          <SlickPrev onClick={() => sliderRef.current?.slickPrev()} />
          <SlickNext onClick={() => sliderRef.current?.slickNext()} />
          <Link
            to="/blog"
            className="ml-2 text-sm font-semibold tracking-[0.1em] uppercase underline underline-offset-4 hover:opacity-60 transition-opacity"
          >
            View All
          </Link>
        </motion.div>
      </div>

      {/* Slider */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
        className="slider-news-container"
      >
        <Slider ref={sliderRef} {...settings}>
          {blogData.map((blog, i) => (
            <div key={i} className="px-3">
              <BlogCard data={blog} />
            </div>
          ))}
        </Slider>
      </motion.div>
    </section>
  );
};

export default NewsUpdates;
