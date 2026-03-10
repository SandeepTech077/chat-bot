import React, { useState, ReactNode } from "react";
import TitleTwo from "../Common/TitleTwo";
import CustomButton from "../Common/CustomButton";
import AnimateOnInView from "../../animation/AnimateOnInView";
import northSkyLinePdf from "../../assets/Images/shilpProjects/northSky/shilp-northsky-brochure.pdf"
const titleVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeInOut" },
  },
};

const amenityVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeInOut" },
  },
};

interface Amenity {
  image: string;
  name: string;
  alt:string;
}

interface AmenitiesTypesProps {
  data: Amenity[];
  inModal?: boolean;
}

const AmenitiesTypes = ({ data, inModal = false }: AmenitiesTypesProps) => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = northSkyLinePdf;
    link.download = "northsky_brochure.pdf"; // Set the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div
      className={`
        grid grid-cols-2 
        ${
          inModal
            ? "sm:grid-cols-4 "
            : "md:flex md:flex-row md:justify-evenly"
        } 
        gap-4 mt-10
      `}
    >
      {data?.map((amenity, idx) => (
        <AnimateOnInView key={idx} variants={amenityVariants}>
          
          <div className={`flex flex-col items-center mb-4  `}>
            <div className={ ` ${amenity.name === 'download' ? 'justify-top' : 'border border-customGrey p-5 rounded-full'} `}>
            <img
              src={amenity.image}
              alt={amenity.alt}
              loading="lazy"
              onClick={() => {
                if (amenity.name === "download") {
                  handleDownload();
                }
              }}
            
              className={`${amenity.name === 'download' ? 'h-25 w-[200px] cursor-pointer ' : 'h-14 w-14'} `}
            />
            </div>  
            <span className="mt-2  font-medium text-lg text-center">
              {amenity.name === 'download' ? '' : amenity.name}
            </span>
          </div>
        </AnimateOnInView>
      ))}
    </div>
  );
};

// Define props for CustomModal component
interface CustomModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const AmenitiesModal: React.FC<CustomModalProps> = ({
  isOpen,
  onClose,
  children,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-11/12 max-w-2xl p-6 rounded-lg relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
        <div className="max-h-[80vh] ">{children}</div>
      </div>
    </div>
  );
};


// Define props for Amenities component
interface AmenitiesProps {
  amenities: Amenity[];
}

const Amenities: React.FC<AmenitiesProps> = ({ amenities }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [isMobile, setIsMobile] = useState(false);
  // const [showMoreButton, setShowMoreButton] = useState(false);

  // useEffect(() => {
  //   const handleResize = () => {
  //     if (window.innerWidth <= 768) {
  //       setIsMobile(true);
  //       if (amenities?.length > 6) {
  //         setShowMoreButton(true);
  //       }
  //     } else {
  //       setIsMobile(false);
  //       setShowMoreButton(false); // Always show all on desktop
  //     }
  //   };

  //   handleResize(); // Check on initial load
  //   window.addEventListener("resize", handleResize); // Listen for window resize

  //   return () => window.removeEventListener("resize", handleResize); // Clean up
  // }, [amenities?.length]);

  const handleViewMore = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="container-base top-spacing px-10">
      {amenities?.length > 0 && (
        <>
          <div className="text-center">
            <AnimateOnInView variants={titleVariants}>
              <TitleTwo text={`Amenities`} className="mb-10" />
              {/* <span className=" font-semibold	 md:text-3xl text-2xl">
                Amenities
              </span> */}
            </AnimateOnInView>
          </div>

          <AmenitiesTypes data={amenities?.slice(0, 6)} />

          {amenities.length > 6 && (
            <div className="flex justify-center mt-10">
              
              <CustomButton onClick={handleViewMore} text={`View More`} />
            </div>
          )}

          {/* Custom Modal for additional amenities */}
          <AmenitiesModal isOpen={isModalOpen} onClose={handleCloseModal}>
            <h2 className="text-2xl  font-semibold mb-4 text-center">
              More Amenities
            </h2>
            <div className="max-h-[70vh] overflow-y-auto">
              <AmenitiesTypes data={amenities} inModal />
            </div>
          </AmenitiesModal>
        </>
      )}
    </section>
  );
};

export default Amenities;
