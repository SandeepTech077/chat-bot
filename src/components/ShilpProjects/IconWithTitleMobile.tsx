import { useState } from "react";
import useScrollToSection from "../../hooks/useScrollToSection";
import { handleHref } from "../../utils/handleHref";
import { AnimatePresence, motion } from "framer-motion";
import { GrCircleInformation } from "react-icons/gr";
import { IoMdClose } from "react-icons/io";
import mail from "../../assets/Icons/Mail.svg";
import gallery from "../../assets/Icons/Gallery.svg";
import download from "../../assets/Icons/DownLoadIcon.svg";
import location from "../../assets/Icons/location.svg";
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

// Function to map project status to the corresponding image
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

const itemVariants = {
  initial: { opacity: 0, x: -10 },
  animate: { opacity: 1, x: 0 },
};

const IconWithTitleMobile = ({ handleDownloadClick, handleInquiryClick, comp_status }: IconWithTitleMobileProps) => {
  const [isToggled, setIsToggled] = useState(false);

  const scrollToSection = useScrollToSection();
  const status = comp_status ? parseInt(comp_status, 10) : 50; // Default to 50% if comp_status is undefined

  return (
    <div className="block lg:hidden relative">
      {/* Toggler button visible only on sm and md screens */}
      <motion.button
        className="absolute top-4 right-0 flex items-center justify-center p-2 bg-white rounded-full"
        onClick={() => setIsToggled(!isToggled)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <GrCircleInformation size={24} />
      </motion.button>

      {/* Modal with icons that opens on toggler click */}
      <AnimatePresence>
        {isToggled && (
          <motion.div
            className="absolute bottom-[-1rem] right-4 bg-white p-6 rounded-lg shadow-lg z-10"
            variants={{
              initial: { opacity: 0, y: 20, scale: 0.95 }, // Start lower
              animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.3, ease: "easeOut" } },
              exit: { opacity: 0, y: 20, scale: 0.95, transition: { duration: 0.2, ease: "easeIn" } },
            }}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {/* Close button */}
            <motion.button
              className="absolute top-2 right-2 text-gray-500"
              onClick={() => setIsToggled(false)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <IoMdClose />
            </motion.button>

            {/* Icons in the modal arranged vertically */}
            <motion.div className="flex flex-col items-start gap-4">
              {[
                { icon: mail, title: "Inquiry", onClick: handleInquiryClick },
                { icon: download, title: "Download", onClick: handleDownloadClick },
                { icon: gallery, title: "Gallery", href: "#gallery" },
                { icon: location, title: "Location", href: "#location" },
                {
                  icon: getStatusIcon(status), // Use the dynamic status icon here
                  title: `Project Status (${status}%)`,
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  className="flex items-center gap-6 hover:text-black text-customGrey transition-colors cursor-pointer"
                  onClick={(e) =>
                    item.onClick
                      ? item.onClick()
                      : item.href
                      ? handleHref({ e, href: item.href, scrollToSection })
                      : null
                  }
                  variants={itemVariants}
                  initial="initial"
                  animate="animate"
                  transition={{ delay: index * 0.1 }}
                >
                  <img
                    src={item.icon}
                    loading="lazy"
                    className="transition w-[24px] duration-300 ease-in-out group-hover:filter group-hover:invert"
                    alt="icons"
                  />
                  <h6>{item.title}</h6>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default IconWithTitleMobile;
