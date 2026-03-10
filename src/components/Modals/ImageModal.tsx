import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Animation variants for modal
const imageVariants = {
  initial: { opacity: 0, scale: 0.9 },
  enter: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, scale: 0.9, transition: { duration: 0.5 } },
};

interface ImageModalProps {
  isOpen: boolean;
  images: string[];
  selectedImageIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const ImageModal = ({
  isOpen,
  images,
  selectedImageIndex,
  onClose,
  onNext,
  onPrev,
}: ImageModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 px-20 md:px-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <button
        onClick={onPrev}
        className="absolute left-4 text-white text-2xl"
      >
        <FaChevronLeft />
      </button>

      {/* Animate the selected image */}
      <motion.img
        src={images[selectedImageIndex]}
        alt="Selected"
        className="sm:h-[70%]"
        initial="initial"
        animate="enter"
        exit="exit"
        variants={imageVariants}
        onClick={onClose} // Close modal when image is clicked
      />

      <button
        onClick={onNext}
        className="absolute right-4 text-white text-2xl"
      >
        <FaChevronRight />
      </button>
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white text-2xl"
      >
        &times;
      </button>
    </div>
  );
};

export default ImageModal;
