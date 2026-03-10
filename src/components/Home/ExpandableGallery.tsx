import { useState, useEffect } from "react";
import Slider from "react-slick";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { projectData } from "../../assets/data/projectData";
import { useNavigate } from "react-router-dom";
import AnimateOnInView from "../../animation/AnimateOnInView";
import Titlep from "../Common/Titlep";

const ExpandableGallery = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleClick = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const handleCategory = (category: string) => {
    navigate(`/projects/${category}`);
  };

  const titleVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, delay: 0.5 } },
  };

  const tileVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  // Slider settings for autoplay
  const sliderSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  useEffect(() => {
    if (activeIndex !== null) {
      // Show loader for 2 seconds when an item is clicked
      setIsLoading(true);
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [activeIndex]);

  return (
    <section className="top-spacing ">
      {/* Title sliding in from the left with a delay */}
      <AnimateOnInView
        variants={titleVariants}
        transition={{ duration: 1, delay: 0.5 }}
        className="lg:px-20 sm:px-0"
      >
        <Titlep text="Our Services" className="w-full" />
        <h2 className="capitalize sm:text-3xl text-2xl ">
          Best solutions in Residential, Commercial, and Plotting segments
        </h2>
      </AnimateOnInView>

      <div className="flex flex-col md:flex-row items-center justify-center space-x-0 md:space-x-4 my-5 lg:mx-20">
        {projectData.map((item, index) => (
          <AnimateOnInView
            key={item.id}
            className={`relative w-full h-[200px] md:w-40 mt-5 rounded overflow-hidden cursor-pointer transition-all duration-500 ${
              activeIndex === index
                ? "md:w-full  sm:h-[350px] lg:h-[550px]"
                : " lg:h-[550px] h-[50px]"
            }`}
            onClick={() => handleClick(index)}
            variants={tileVariants}
            transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
          >
            {activeIndex === index ? (
              isLoading ? (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70">
                  <div className="w-full h-full bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 animate-pulse"></div>
                </div>
              ) : (
                // Render Slider after loader
                <Slider key={activeIndex} {...sliderSettings}>
                  {item.explandable_back_img.map(
                    (image: string, idx: number) => (
                      <img
                        key={idx}
                        src={image}
                        alt={`${item.title} ${idx + 1}`}
                        loading="lazy"
                        className="object-cover object-center w-full h-full transition-opacity duration-500"
                      />
                    )
                  )}
                </Slider>
              )
            ) : (
              // Display first image as background for inactive items
              <img
                src={item.explandable_back_img[0]}
                alt={item.title}
                loading="lazy"
                className={`w-full h-full object-cover object-center transition-opacity duration-500 ${
                  activeIndex === index ? "opacity-70" : "opacity-40"
                }`}
              />
            )}

            <div
              className={`absolute inset-0 bg-black transition-opacity duration-500 ${
                activeIndex === index ? "opacity-0" : "opacity-70"
              }`}
            />

            {activeIndex === index && (
              <div
                className="absolute bottom-0 flex items-center justify-between w-full bg-black bg-opacity-70 px-4 py-2 rounded-lg"
                onClick={() => handleCategory(item.category)}
              >
                <h3 className="text-white text-lg sm:text-xl sm:p-3">
                  {item.title}
                </h3>
                <BsArrowUpRightCircleFill className="sm:text-4xl text-2xl inline-block transition-transform duration-300 transform hover:translate-x-1 text-white" />
              </div>
            )}

            {activeIndex !== index && (
              <span
                className={`absolute text-white text-lg sm:text-xl transition-transform duration-500 ${
                  activeIndex === index
                    ? "bottom-4 left-4 transform rotate-0"
                    : "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate:0 md:-rotate-90"
                }`}
              >
                {item.title}
              </span>
            )}
          </AnimateOnInView>
        ))}
      </div>
    </section>
  );
};

export default ExpandableGallery;
