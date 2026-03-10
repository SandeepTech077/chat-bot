import { useRef, useState } from "react";
import Title from "../Common/Title";
import Slider from "react-slick";
// import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import ImageModal from "../../components/Modals/ImageModal"
interface ProjectUpdate {
  month: string;
  year: number;
  images: Array<{
    src: string;
    alt: string;
  }>;
}

interface ProjectUpdatesProps {
  data: ProjectUpdate;
}

const ProjectUpdates = ({ data }: ProjectUpdatesProps) => {
  const imageSliderRef = useRef<Slider>(null);
const [isModalOpen , setIsModalOpen] = useState<boolean>(false)
const [selectedImageIndex , setSelectedImageIndex] = useState<number>(0)
  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: "20px",
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          dots: true,
        },
      },
    ],
  };

  const handleImageClick = (index:number ) =>{
    setSelectedImageIndex(index)
    setIsModalOpen(true)


  }


  const handleNext = ( ) =>{
    setSelectedImageIndex((prevIndex) => prevIndex === data.images.length - 1 ? 0 : prevIndex + 1 )
  }

  const handlePrev = ( ) =>{
    setSelectedImageIndex((prevIndex) => prevIndex === 0 ? data.images.length - 1 : prevIndex - 1 )
  }




  return (
    <section className="container-base top-spacing pb-5" id="projectStatus">
      <div className="flex  justify-between items-center">
      <Title text={`Project Updates`} className={`mb-8`} />
        {/* <span className="font-semibold text-xl sm:text-3xl">Project Updates</span> */}

        {/* Tabs */}
        <div className="bg-black rounded-lg sm:px-10 px-5 py-2 sm:py-4 text-white transition-colors justify-end">
          <span>
            {data?.month} {data?.year}
          </span>
          {/* <span>January 2025</span> */}
        </div>
      </div>
      {/* Slider for images */}
      <div className="mt-10">
        <Slider
          ref={imageSliderRef}
          {...settings}
          className="project-update-images"
        >
          {data?.images.map((image, index) => (
            <div key={index} className="relative">
              <img
                src={image.src}
                loading="lazy"
                alt={image.alt}
                className="w-full h-[400px] xl:h-[500px] object-cover px-2"
                onClick={() => handleImageClick(index)}
              />
            </div>
          ))}
        </Slider>
      </div>
      <ImageModal
        isOpen={isModalOpen}
        images={data.images.map((img) => img.src)}
        selectedImageIndex={selectedImageIndex}
        onClose={() => setIsModalOpen(false)}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </section>
  );
};

export default ProjectUpdates;
