import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import IconWithTitle from "./IconWithTitle";
import location from "../../assets/Icons/location.svg";
import mail from "../../assets/Icons/Mail.svg";
import gallery from "../../assets/Icons/Gallery.svg";
import download from "../../assets/Icons/DownLoadIcon.svg";
import EnquiryModal from "../Modals/EnquiryModal";
import IconWithTitleMobile from "./IconWithTitleMobile";
import { useParams } from "react-router-dom";
import { getCategoryType } from "../../utils/getCategoryType";
import status10 from "../../assets/Images/Progress bar/1.svg";
import status20 from "../../assets/Images/Progress bar/2.svg";
import status30 from "../../assets/Images/Progress bar/3.svg";
import status40 from "../../assets/Images/Progress bar/4.svg";
import status50 from "../../assets/Images/Progress bar/5.svg";
import status60 from "../../assets/Images/Progress bar/6.svg";
import status70 from "../../assets/Images/Progress bar/7.svg";
import status80 from "../../assets/Images/Progress bar/8.svg";
import status90 from "../../assets/Images/Progress bar/9.svg";
import status100 from "../../assets/Images/Progress bar/10.svg";

const EASE = [0.22, 1, 0.36, 1];

interface ProjectTitleProps {
  title: string;
  brochure: string;
  isCompleted?: boolean;
  address_title?: string;
  comp_status?: string;
  bannerImg: string[];
}

const ProjectTitleArea = ({
  title,
  brochure,
  address_title,
  bannerImg,
  isCompleted,
  comp_status,
}: ProjectTitleProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalPdf, setModalPdf] = useState<string | undefined>(undefined);
  const [showTooltip, setShowTooltip] = useState<boolean>(false);

  const { category } = useParams();

  const handleInquiryClick = () => {
    setModalPdf(undefined);
    setIsModalOpen(true);
  };

  const handleDownloadClick = () => {
    setModalPdf(brochure);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const getStatusIcon = (status: number) => {
    if (status <= 10) return status10;
    if (status <= 20) return status20;
    if (status <= 30) return status30;
    if (status <= 40) return status40;
    if (status <= 50) return status50;
    if (status <= 60) return status60;
    if (status <= 70) return status70;
    if (status <= 80) return status80;
    if (status <= 90) return status90;
    return status100;
  };

  const status = comp_status ? parseInt(comp_status, 10) : 50;

  return (
    <section ref={ref}>
      <div className="container-base relative bottom-[7rem]">
        {/* Desktop bar (lg+) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: EASE }}
          className="hidden lg:flex items-center justify-between px-8 py-5 bg-white border-t-4 border-t-black shadow-lg rounded-t-xl"
        >
          {/* Left: title + meta */}
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl xl:text-3xl font-bold tracking-tight">{title}</h1>
            <div className="flex items-center gap-2 text-sm text-customGrey">
              <span className="font-medium">{getCategoryType(category)}</span>
              <span className="text-lineGrey">|</span>
              <span>{address_title || "Ahmedabad"}</span>
              <span className="text-lineGrey">|</span>
              <span
                className={`inline-flex items-center gap-1 font-medium ${
                  isCompleted ? "text-green-600" : "text-black"
                }`}
              >
                <span
                  className={`inline-block w-2 h-2 rounded-full ${
                    isCompleted ? "bg-green-500" : "bg-amber-400"
                  }`}
                />
                {isCompleted ? "Completed" : "Ongoing"}
              </span>
            </div>
          </div>

          {/* Right: action icons */}
          <div className="flex items-center gap-8">
            <IconWithTitle icon={mail} title="Inquiry" onClick={handleInquiryClick} />
            <IconWithTitle icon={download} title="Download" onClick={handleDownloadClick} />
            <IconWithTitle href="#gallery" icon={gallery} title="Gallery" />
            <IconWithTitle href="#location" icon={location} title="Location" />

            {/* Status with tooltip */}
            <div
              className="relative"
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
            >
              <IconWithTitle icon={getStatusIcon(status)} title="Project Status" />
              {showTooltip && (
                <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-3 py-1.5 rounded shadow-xl whitespace-nowrap font-medium">
                  Progress: {status}%
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Mobile / tablet layout */}
        <IconWithTitleMobile
          comp_status={comp_status}
          handleInquiryClick={handleInquiryClick}
          handleDownloadClick={handleDownloadClick}
        />
      </div>

      {isModalOpen && (
        <EnquiryModal
          projectName={title}
          pdf={modalPdf}
          sideImg={bannerImg[0]}
          isModalOpen={isModalOpen}
          closeModal={closeModal}
        />
      )}
    </section>
  );
};

export default ProjectTitleArea;

