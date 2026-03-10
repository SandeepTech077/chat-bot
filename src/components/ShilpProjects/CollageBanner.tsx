import { useEffect, useState } from "react";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface CollageBannerProps {
  data: string[];
}

const CollageBanner = ({ data } : CollageBannerProps) => {
  const [currentImages, setCurrentImages] = useState<string[]>(data.slice(0, 3));
  const [fade, setFade] = useState<boolean[]>(Array(3).fill(false));
  const [prevImages, setPrevImages] = useState<string[]>([]);

  const getRandomImages = () => {
    let remainingImages = data.filter((img) => !prevImages.includes(img));
    if (remainingImages.length < 3) {
      remainingImages = data; // Reset if not enough images are left
    }
    const shuffledIndices = [0, 1, 2].sort(() => Math.random() - 0.5);
    const newImages = shuffledIndices.map((index) => remainingImages[index]);

    setPrevImages(newImages);
    return newImages;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(Array(3).fill(true)); // Trigger fade out

      setTimeout(() => {
        const newImages = getRandomImages();
        setCurrentImages(newImages);
        setFade(Array(3).fill(false)); // Trigger fade in
      }, 500);
    }, 2000);

    return () => clearInterval(interval);
  }, [currentImages]);

  return (
    <div className="relative  h-screen md:h-[90vh]">
      <div className="flex justify-between items-center relative">
        <div className="flex w-full overflow-hidden">
          {currentImages.map((src, index) => (
            <img
              key={index}
              loading="lazy"
              className={`w-full sm:w-1/2 lg:w-1/3 h-screen md:h-[90vh] object-cover object-center transition-opacity duration-500 ${
                fade[index] ? "opacity-50" : "opacity-100"
              }`}
              src={src}
              alt={`Banner ${index + 1}`}
            />
          ))}
        </div>

        {/* <div className="absolute inset-0 flex justify-between items-center">
          <div className="hidden md:block md:ml-10">
            <button className="bg-white/80 hover:bg-white text-black p-3 rounded-full shadow-md transition-all duration-300 hover:scale-110">
              <FaArrowLeft />
            </button>
          </div>

          <div className="hidden md:block md:mr-10">
            <button className="bg-white/80 hover:bg-white text-black p-3 rounded-full shadow-md transition-all duration-300 hover:scale-110">
              <FaArrowRight />
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default CollageBanner;
