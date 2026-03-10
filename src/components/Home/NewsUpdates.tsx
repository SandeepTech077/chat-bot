import { useRef } from "react";
import Title from "../Common/Title";
import BlogCard from "../Common/BlogCard";
import Slider from "react-slick";
import "./home.css";
import { blogData } from "../../assets/data/blogData";
import AnimateOnInView from "../../animation/AnimateOnInView";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const NewsUpdates = () => {
  const sliderRef = useRef<Slider>(null);

  const SlickBtnNext = ({ onClick }: { onClick: () => void }) => {
    return (
      <button onClick={onClick} className="p-3">
        <FaArrowRightLong className="text-2xl" />
      </button>
    );
  };

  const SlickBtnPrev = ({ onClick }: { onClick: () => void }) => {
    return (
      <button onClick={onClick} className="p-3">
        <FaArrowLeftLong className="text-2xl " />
      </button>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    speed: 2000,
    slidesToShow: 2,
    pauseOnHover: true,
    slidesToScroll: 1,
    centerMode: true,
    waitForAnimate: true,
    useCSS: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "0px",
        },
      },
    ],
    afterChange: () => {
      setTimeout(() => {
        if (sliderRef.current) {
          sliderRef.current.slickPlay(); 
        }
      }, 2000); 
    },
  };

  // Animation variants
  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const sliderVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section className="flex flex-col lg:flex-row top-spacing lg:ps-20 sm:px-0">
      {/* Left Side: Title and Buttons */}
      <AnimateOnInView
        className="flex flex-col justify-between lg:w-1/4  lg:mb-0"
        variants={titleVariants}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
      >
        <div>
          <Title className={`mb-10`} text={"Blogs"} />
          <h3 className="text-2xl lg:text-3xl">
            News &  Updates
          </h3>
        </div>

        <div className="hidden lg:flex gap-3 pb-5">
          <SlickBtnPrev onClick={() => sliderRef.current?.slickPrev()} />
          <SlickBtnNext onClick={() => sliderRef.current?.slickNext()} />
        </div>
      </AnimateOnInView>

      {/* Right Side: Slider */}
      <AnimateOnInView
        className="lg:w-3/4 slider-news-container"
        variants={sliderVariants}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
      >
        <Slider ref={sliderRef} {...settings}>
          {blogData.map((blogs, index) => (
            <BlogCard key={index} data={blogs} />
          ))}
        </Slider>
        <div className="flex justify-center lg:hidden gap-3">
          <SlickBtnPrev onClick={() => sliderRef.current?.slickPrev()} />
          <SlickBtnNext onClick={() => sliderRef.current?.slickNext()} />
        </div>
      </AnimateOnInView>
    </section>
  );
};

export default NewsUpdates;