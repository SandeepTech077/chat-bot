import { useState } from "react";
import { MdInfoOutline } from "react-icons/md";
import { BsDownload } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ProjectDataTypes } from "../../types/projectDataTypes.types";
import EnquiryModal from "../Modals/EnquiryModal";
import { commerical, plots, residential } from "../../constants/projectTypes";
import Icons from "../../assets/Icons";

type CustomCardProps = {
  reverse?: boolean;
  className?: string;
  data: ProjectDataTypes;
  onModalStateChange?: (isOpen: boolean) => void;
};

const CustomCard = ({
  reverse = false,
  className,
  data,
  onModalStateChange,
}: CustomCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalPdf, setModalPdf] = useState<string | undefined>(undefined);

  const handleInquiryClick = (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    setModalPdf(undefined);
    setIsModalOpen(true);
    onModalStateChange?.(true);
  };

  const handleDownloadClick = (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    setModalPdf(data?.brochure);
    setIsModalOpen(true);
    onModalStateChange?.(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    onModalStateChange?.(false);
  };

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/projects/${data.parent_category}/${data.url}`);
  };

  function getProjectType() {
    if (data.parent_category === residential) {
      return "Residential";
    } else if (data.parent_category === commerical) {
      return "Commerical";
    } else if (data.parent_category === plots) {
      return "Plots";
    }
  }

  const CardContent = () => (
    <div className={`flex justify-between mt-4 ${className}`}>
      <div className="flex flex-col py-3 sm:w-40">
        <span className="text-lg  break-words">
          {data?.title || "demo title"}
        </span>
        <span className="text-4xl pt-3 md:pt-5">{data?.no || "01"}</span>
      </div>

      <div className="py-3 text-base md:text-lg">
        <div className="flex items-center justify-between mb-2">
          <div className="ml-auto text-end ">
            <span className="text-base">
              {data?.address.mini_address?.line1}
            </span>
            <br />
            <span className="text-base">
              {data?.address.mini_address?.line2}
            </span>
          </div>
          <img
            src={Icons?.card_location}
            alt="location"
            className="w-8 h-8 ml-4"
          />
        </div>
        <div className="flex justify-between text-right items-center mb-2">
          <span className="text-base ml-auto">
            {data?.address?.mini_address?.sq_ft}{" "}
            {data?.title === "Shilp The Roots" ||
            data.title === "Shilp Incubation Centre" ||
            data.title === "Shilp Industrial Park"
              ? ""
              : "sq. ft."}
          </span>
          <img
            src={Icons.card_sqft}
            alt="sqft"
            loading="lazy"
            className="w-8 h-8  ml-4"
          />
        </div>
        <div className="flex justify-between items-center mb-2 pt-2">
          <span className="ml-auto text-base">{getProjectType()}</span>
          <img src={Icons.card_house} alt="city" className="w-8 h-8 ml-4" />
        </div>
        {data?.tag && (
          <div className="flex justify-between text-right items-center mb-2 pt-2">
            <span className="text-base ml-auto">{data?.tag}</span>
            <img
              src={Icons.tag}
              alt="Hand holding a key and house icon"
              loading="lazy"
              className="w-8 h-8 ml-4"
            />
          </div>
        )}
      </div>
    </div>
  );

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: reverse ? 40 : -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ y: -6, transition: { duration: 0.3, ease: "easeOut" } }}
        className="bg-white z-10 max-w-sm md:max-w-md relative group cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-500"
        onClick={handleNavigate}
      >
        {/* Project type badge */}
        {getProjectType() && (
          <span className="absolute top-3 right-3 z-20 bg-black text-white text-[10px] uppercase tracking-[0.12em] px-2.5 py-1 rounded-sm font-medium">
            {getProjectType()}
          </span>
        )}

        <div
          className={`absolute ${
            reverse ? "lg:bottom-10 max-lg:top-2" : "top-2"
          } left-2 flex flex-col space-y-2 p-2 z-20`}
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="p-2 bg-black rounded-full flex items-center justify-center"
            onClick={handleInquiryClick}
          >
            <MdInfoOutline className="text-white text-xl cursor-pointer" />
          </motion.div>
          {data?.title !== "Up Coming Shilp Residential" &&
            data?.title !== "Shilp Iskon Ambli" && (
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="p-2 bg-black rounded-full flex items-center justify-center"
                onClick={handleDownloadClick}
              >
                <BsDownload className="text-white text-xl cursor-pointer" />
              </motion.div>
            )}
        </div>

        {/* Mobile view */}
        <div className="lg:hidden mobile-view-cards">
          <div className="overflow-hidden rounded-t-sm">
            <img
              src={data?.card_img || `https://picsum.photos/200/300`}
              alt={data?.alt || "image"}
              className="h-[300px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.07]"
            />
          </div>
          <CardContent />
        </div>

        {/* Desktop view */}
        <div className="hidden lg:block">
          {reverse ? (
            <>
              <CardContent />
              <div className="overflow-hidden rounded-b-sm">
                <img
                  src={data?.card_img || `https://picsum.photos/200/300`}
                  alt={data?.alt || "image"}
                  className="w-[500px] h-[300px] xl:h-[350px] 2xl:h-[450px] object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.07]"
                />
              </div>
            </>
          ) : (
            <>
              <div className="overflow-hidden rounded-t-sm">
                <img
                  src={data?.card_img || `https://picsum.photos/200/300`}
                  alt={data?.alt || "image"}
                  className="w-[500px] h-[300px] xl:h-[350px] 2xl:h-[450px] object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.07]"
                />
              </div>
              <CardContent />
            </>
          )}
        </div>
      </motion.div>

      {isModalOpen && (
        <EnquiryModal
          projectName={data?.title}
          pdf={modalPdf}
          sideImg={data?.details?.banner_imgs[0]}
          isModalOpen={isModalOpen}
          closeModal={closeModal}
        />
      )}
    </>
  );
};

export default CustomCard;
