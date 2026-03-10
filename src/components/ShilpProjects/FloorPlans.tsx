import { useState, useMemo } from "react";
import Title from "../Common/Title";
import { BsArrowRightCircle } from "react-icons/bs";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import Images from "../../assets/Images";

interface FloorPlan {
  id: number;
  name: string;
  alt:string;
  image: string;
}

interface FloorPlansProps {
  data: FloorPlan[];
}

const FloorPlans = ({ data }: FloorPlansProps) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedFloor, setSelectedFloor] = useState<FloorPlan>(data[0]);
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
  const [lightboxIndex, setLightboxIndex] = useState<number>(0);

  const handleNext = () => {
    if (currentIndex + 4 < data.length) {
      const newIndex = currentIndex + 4;
      setCurrentIndex(newIndex);
      setSelectedFloor(data[newIndex]);
    }
  };

  const handlePrevious = () => {
    if (currentIndex - 4 >= 0) {
      const newIndex = currentIndex - 4;
      setCurrentIndex(newIndex);
      setSelectedFloor(data[newIndex]);
    }
  };

  const handleSelectFloor = (floor: FloorPlan, openLightboxImmediate = false) => {
    setSelectedFloor(floor);
    
    if (openLightboxImmediate) {
      const floorIndex = data.findIndex(item => item.id === floor.id);
      openLightbox(floorIndex);
    }
  };

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "auto";
  };

  const navigateLightbox = (direction: "next" | "prev") => {
    if (direction === "next") {
      setLightboxIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1));
      setSelectedFloor(data[lightboxIndex === data.length - 1 ? 0 : lightboxIndex + 1]);
    } else {
      setLightboxIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1));
      setSelectedFloor(data[lightboxIndex === 0 ? data.length - 1 : lightboxIndex - 1]);
    }
  };

  // Memoized list of visible floors
  const visibleFloors = useMemo(
    () => data.slice(currentIndex, currentIndex + 4),
    [data, currentIndex]
  );

  if (!data || data.length === 0) {
    return null;
  }

  return (
    <>
      <div
        className="top-spacing w-full bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${Images.floorbg})` }}
      >
        <div className="container-base">
          <div className="py-10 flex flex-wrap justify-between lg:px-10 sm:px-0">
            <div className="w-full lg:w-1/2">
              <Title text="Floor Plans" className="mb-10" />
              <div className="mt-3">
                {visibleFloors.map((floor, idx) => (
                  <div
                    key={`floor-${floor.id}`}
                    className={`flex items-center justify-between py-2 border-b-2 cursor-pointer ${
                      selectedFloor.id === floor.id ? "font-bold" : "text-gray-500"
                    }`}
                    onClick={() => handleSelectFloor(floor, true)}
                  >
                    <span className="font-medium text-lg">{floor.name}</span>
                    <BsArrowRightCircle className="text-xl" />
                  </div>
                ))}
                <div className="flex justify-end gap-3 py-5">
                  <FaArrowLeftLong
                    className={`text-xl ${
                      currentIndex === 0
                        ? "opacity-50 cursor-not-allowed"
                        : "cursor-pointer"
                    }`}
                    onClick={handlePrevious}
                  />
                  <FaArrowRightLong
                    className={`text-xl ${
                      currentIndex + 4 >= data.length
                        ? "opacity-50 cursor-not-allowed"
                        : "cursor-pointer"
                    }`}
                    onClick={handleNext}
                  />
                </div>
              </div>
            </div>

            <div className="hidden lg:block xl:p-0 lg:w-1/2 relative">
              <div className="relative">
                <img
                  src={selectedFloor.image}
                  alt={selectedFloor.alt}
                  loading="lazy"
                  className="w-[400px] xl:w-[500px] object-cover h-[350px] float-end cursor-pointer"
                  onClick={() => openLightbox(data.findIndex(floor => floor.id === selectedFloor.id))}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <div className="absolute top-4 right-4">
            <button
              className="text-white text-4xl hover:text-gray-300"
              onClick={closeLightbox}
            >
              <IoClose />
            </button>
          </div>
          
          <div className="absolute top-4 left-4">
            <div className="bg-black bg-opacity-50 text-white px-4 py-2 rounded">
              {data[lightboxIndex].name}
            </div>
          </div>
          
          <div className="relative w-full max-w-4xl mx-auto">
            <img
              src={data[lightboxIndex].image}
              alt={data[lightboxIndex].alt}
              className="max-w-full max-h-[80vh] mx-auto"
            />
          </div>
          
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
            <button
              className="text-white text-4xl hover:text-gray-300"
              onClick={() => navigateLightbox("prev")}
            >
              <FaArrowLeftLong />
            </button>
          </div>
          
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
            <button
              className="text-white text-4xl hover:text-gray-300"
              onClick={() => navigateLightbox("next")}
            >
              <FaArrowRightLong />
            </button>
          </div>
          
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
            {data.map((floor, idx) => (
              <button
                key={`dot-${idx}`}
                className={`w-3 h-3 rounded-full ${
                  idx === lightboxIndex ? "bg-white" : "bg-gray-500"
                }`}
                onClick={() => {
                  setLightboxIndex(idx);
                  setSelectedFloor(data[idx]);
                }}
                aria-label={floor.name}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default FloorPlans;