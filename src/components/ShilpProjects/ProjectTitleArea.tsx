import { useState } from "react";
import IconWithTitle from "./IconWithTitle";
import location from "../../assets/Icons/location.svg";
import mail from "../../assets/Icons/Mail.svg";
import gallery from "../../assets/Icons/Gallery.svg";
import download from "../../assets/Icons/DownLoadIcon.svg";
import EnquiryModal from "../Modals/EnquiryModal";
import IconWithTitleMobile from "./IconWithTitleMobile";
import { useParams } from "react-router-dom";
import { getCategoryType } from "../../utils/getCategoryType";
import AnimateOnInView from "../../animation/AnimateOnInView";
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
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalPdf, setModalPdf] = useState<string | undefined>(undefined);
  const [showTooltip, setShowTooltip] = useState<boolean>(false); // To control tooltip visibility

  const { category } = useParams();

  // Handlers to open modal for different actions
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

  // Function to map project status to appropriate SVG
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
    return status100; // for 100%
  };

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 3, delay: 1 } },
  };

  const status = comp_status ? parseInt(comp_status, 10) : 50; // Default to 50% if comp_status is undefined

  return (
    <AnimateOnInView variants={variants}>
      <section>
        <div className="container-base relative bottom-[7rem]">
          {/* Large screen layout (lg and above) */}
          <div className="hidden lg:flex items-center justify-between p-5 bg-white rounded-t-xl">
            {/* Left section */}
            <div className="flex flex-col">
              <h1 className="font-semibold pb-3 text-3xl">{title}</h1>
              <div className="flex xl:gap-3 gap-2 ">
                <span>{getCategoryType(category)}</span>
                <span>|</span>
                <span>{address_title || "Ahmedabad"}</span>
                <span>|</span>
                <span>
                  {isCompleted ? "Completed Project " : "Ongoing Project"}
                </span>
              </div>
            </div>

            {/* Right section with icons */}
            <div className="flex gap-10">
              <IconWithTitle
                icon={mail}
                title="Inquiry"
                onClick={handleInquiryClick}
              />
              <IconWithTitle
                icon={download}
                title="Download"
                onClick={handleDownloadClick}
              />
              <IconWithTitle href="#gallery" icon={gallery} title="Gallery" />
              <IconWithTitle
                href="#location"
                icon={location}
                title="Location"
              />

              {/* Project Status icon with dynamic status */}
              <div
                className="relative"
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
              >
                <IconWithTitle
                  icon={getStatusIcon(status)}
                  title="Project Status"
                />
                {showTooltip && (
                  <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-black/90 text-white text-sm px-3 py-1 rounded-md shadow-lg whitespace-nowrap">
                    Project Progress: {status}%
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Small and medium screen layout (sm and md) */}
          <IconWithTitleMobile
            comp_status={comp_status}
            handleInquiryClick={handleInquiryClick}
            handleDownloadClick={handleDownloadClick}
          />
        </div>

        {/* Modal with conditional PDF prop */}
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
    </AnimateOnInView>
  );
};

export default ProjectTitleArea;
