import React from "react";
import { FiX } from "react-icons/fi";
import { motion } from "framer-motion";
import CustomButton from "../Common/CustomButton";
import { ENQUIRY_SUCCESS_MESSAGE } from "../../constants/strings";

interface ConfirmationModalProps {
  isOpen: boolean;
  onConfirm: () => void;
  onClose: () => void;
  message?: string;
  confirmButtonText?: string;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  isOpen,
  onConfirm,
  onClose,
  message = ENQUIRY_SUCCESS_MESSAGE,
  confirmButtonText = "Download Brochure",
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex  items-center justify-center z-40 bg-black bg-opacity-80">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3 }}
        className="relative bg-white p-10  rounded-lg shadow-lg max-w-xl w-full mx-5 md:mx-auto"
      >
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          <FiX className="w-6 h-6" />
        </button>

        {/* Modal Content */}
        <h1 className=" font-semibold	 text-3xl text-black pb-5 text-center">Thank You</h1>
        <h3 className=" text-customGrey text-base pb-5 text-center">{message}</h3>
        <div className="mt-4 flex justify-center">
          <CustomButton
            className="px-6 py-2 text-lg  text-black"
            text={confirmButtonText}
            onClick={() => {
              onConfirm();
              onClose();
            }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default ConfirmationModal;
