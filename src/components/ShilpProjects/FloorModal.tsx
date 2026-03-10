import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FloorModalProps {
  children: React.ReactNode; 
  onClose: () => void; 
}

const modalVariants = {
  initial: {
    opacity: 0,
    scale: 0.75,
    y: 50
  },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: 20,
    transition: {
      duration: 0.2,
      ease: "easeIn"
    }
  }
};

const overlayVariants = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: { duration: 0.3 }
  },
  exit: { 
    opacity: 0,
    transition: { duration: 0.2 }
  }
};

const FloorModal = ({ children, onClose } : FloorModalProps) => {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
        variants={overlayVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        onClick={onClose}
      >
        <motion.div
          className="bg-white rounded-lg overflow-hidden max-w-4xl w-full"
          variants={modalVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          onClick={e => e.stopPropagation()}
        >
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default FloorModal;
