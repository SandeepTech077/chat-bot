import { useRef } from "react";
import Slider from "react-slick";
import TitleTwo from "../Common/TitleTwo";
import TestimonialCard from "../Common/TestimonialCard";
import { testimonials } from "../../assets/data/testimonials";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
const Next = ({ onClick }: { onClick?: () => void }) => (
  <button
    onClick={onClick}
    className="hidden p-3 absolute top-1/2 -right-16 md:block z-10 transform -translate-y-1/2 bg-white hover:bg-gray-100 transition-colors"
  >
    <FaArrowRightLong className="text-2xl" />
  </button>
);

const Prev = ({ onClick }: { onClick?: () => void }) => (
  <button
    onClick={onClick}
    className="hidden p-3 absolute top-1/2 -left-16 md:block z-10 transform -translate-y-1/2 bg-white hover:bg-gray-100 transition-colors"
  >
    <FaArrowLeftLong className="text-2xl" />
  </button>
);

const Testimonials = () => {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    pauseOnHover: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <Next />,
    prevArrow: <Prev />,
    afterChange: () => {
      setTimeout(() => {
        if (sliderRef.current) {
          sliderRef.current.slickPlay();
        }
      }, 2000);
    },
  };

  return (
    <section className="top-spacing lg:px-20 sm:px-0">
      <div className="px-5 flex flex-col"> 
        <TitleTwo text="Testimonials" className="mb-10" />
        <h3 className="lg:text-3xl text-xl capitalize text-center">
          What People are Saying
        </h3>
      </div>

      {/* Container with padding for arrows */}
      <div className="relative sm:mx-auto sm:px-20 sm:max-w-full slider-news-container">
        <Slider ref={sliderRef} {...settings} className="sm:mb-20 mb-10">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="sm:px-4">
              <TestimonialCard
                review={testimonial.review}
                type={testimonial.type}
                name={testimonial.name}
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
