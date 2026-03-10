import { useState } from "react";
import Title from "../Common/Title";
import AnimateOnInView from "../../animation/AnimateOnInView";
import ImageModal from "../Modals/ImageModal";
import skylinepdf from "../../assets/Images/shilpProjects/northSky/northsky_brochure.pdf"

const titleVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, delay: 0.5, ease: "easeInOut" },
  },
};

const galleryHeadingVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, delay: 0.3, ease: "easeInOut" },
  },
};

const bigImageVariants = {
  hidden: { opacity: 0, scale: 0.9, x: 50 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeInOut" },
  },
};

const topImageVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.5, ease: "easeInOut" },
  },
};

const bottomImageVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.3, ease: "easeInOut" },
  },
};

// Define the prop types for the Gallery componentinterface GalleryImage {
interface GalleryImage {
  src: string;
  alt: string;
}

interface GalleryProps {
  images: GalleryImage[];
}
const Gallery = ({ images }: GalleryProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);

  const openModal = (index: number) => {
    setSelectedImageIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const nextImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="container-base top-spacing px-10" id="gallery">
      {/* Title Section */}
      <AnimateOnInView variants={titleVariants}>
        <div className="w-full lg:w-1/2 md:pt-6 md:text-left order-1 lg:order-2">
          <Title className="mb-10" text="Project View" />
        </div>
      </AnimateOnInView>

      {/* Image Section */}
      <div className="flex flex-col lg:flex-row gap-4 mt-8">
        {/* Big Image */}
        <AnimateOnInView
          variants={bigImageVariants}
          className="w-full lg:w-1/2"
        >
          <img
            src={images[0].src}
            loading="lazy"
            alt={images[0].alt}
            className="w-full h-full object-cover rounded-md shadow-lg cursor-pointer"
            onClick={() => openModal(0)}
          />
        </AnimateOnInView>

        {/* Small Images */}
        <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
          {images.slice(1).map((img, index) => (
            <AnimateOnInView
              key={index}
              variants={index < 2 ? topImageVariants : bottomImageVariants}
            >
              <div className="relative w-full h-full aspect-square overflow-hidden rounded-md shadow-lg cursor-pointer">
                <img
                  src={img.src}
                  loading="lazy"
                  alt={img.alt}
                  className="absolute inset-0 w-full h-full object-cover"
                  onClick={() => openModal(index + 1)}
                />
              </div>
            </AnimateOnInView>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      <ImageModal
        isOpen={isOpen}
        images={images.map((img) => img.src)} // ImageModal uses just src
        selectedImageIndex={selectedImageIndex}
        onClose={closeModal}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </section>
  );
};

export default Gallery;
