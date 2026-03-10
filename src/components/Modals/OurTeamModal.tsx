import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { TeamModalProps } from "../../types/team.types";
import Icons from "../../assets/Icons";
import { IoCloseOutline } from "react-icons/io5";

const OurTeamModal = ({ data, isOpen, onClose }: TeamModalProps) => {
  if (!data) return null;

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const isMobileView = window.innerWidth < 768;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="bg-white rounded-[40px] w-full max-w-4xl relative flex flex-col"
            style={{
              maxHeight: isMobileView ? "90vh" : "100%",
              height: isMobileView ? "90vh" : "80vh",
            }}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Close Icon */}
            <button onClick={onClose} className="absolute top-8 right-5 z-10">
            <IoCloseOutline size={25}/>
            </button>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-8">
              <div className="flex flex-col md:flex-row">
                {/* Left Side */}
                <div className="w-full md:w-1/2 p-3 flex flex-col lg:items-start items-center">
                  <img
                    src={data.image}
                    alt={data.name}
                    loading="lazy"
                    className="object-cover mb-4 h-full md:w-full border rounded-[20px]"
                  />

                  <div className="flex space-x-4 justify-start pt-5">
                    <Link
                      to={data.facebook || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={Icons.facebook}
                        className="w-10 h-10 p-2 border bg-[#EDEAEA]"
                        alt="icon"
                      />
                    </Link>

                    <Link
                      to={data?.instagram || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={Icons.insta}
                        className="w-10 h-10 p-2 border bg-[#EDEAEA]"
                        alt="icon"
                      />
                    </Link>

                    <Link
                      to={data.linkedin || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={Icons.linkedin}
                        className="w-10 h-10 p-2 border bg-[#EDEAEA]"
                        alt="icon"
                      />
                    </Link>

                    <Link
                      to={data.twitter || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={Icons.twitter}
                        className="w-10 h-10 p-2 border bg-[#EDEAEA]"
                        alt="icon"
                      />
                    </Link>
                  </div>
                </div>

                {/* Right Side */}
                <div className="w-full md:w-1/2 md:pl-6">
                  <h2 className="text-2xl lg:text-3xl mb-2 mt-5">
                    {data.name}
                  </h2>
                  <h3 className="text-md lg:text-lg text-customGrey mb-4">
                    {data.role}
                  </h3>
                  <p className="text-sm lg:text-[15px] text-customGrey">
                    {isMobileView &&
                    data.description1 &&
                    data.description1.length > 100 &&
                    !isExpanded
                      ? data.description1.substring(0, 100)
                      : data.description1}
                    {isMobileView &&
                      data.description1 &&
                      data.description1.length > 100 && (
                        <button
                          className="text-blue-500 font-semibold mx-2"
                          onClick={toggleReadMore}
                        >
                          {isExpanded ? "Read Less" : "Read More"}
                        </button>
                      )}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OurTeamModal;
