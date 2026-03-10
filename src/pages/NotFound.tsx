import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ErrorSvg from "../../public/error.svg";
import { GoArrowUpRight } from "react-icons/go";

const EASE = [0.22, 1, 0.36, 1];

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-white px-6 lg:px-20 gap-12 md:gap-0">
      {/* Left */}
      <div className="w-full md:w-2/5 flex flex-col items-center md:items-start">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="text-[120px] md:text-[160px] font-bold leading-none text-[#EDEAEA] select-none"
        >
          404
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.15 }}
          className="text-2xl md:text-3xl font-bold mt-2 mb-3 text-center md:text-left"
        >
          Page Not Found
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-sm text-customGrey mb-8 text-center md:text-left max-w-xs"
        >
          The page you're looking for doesn't exist or has been moved.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.35 }}
        >
          <Link
            to="/"
            className="group inline-flex items-center gap-2 bg-black text-white text-sm font-medium px-6 py-3 hover:bg-[#222] transition-colors duration-300"
          >
            Back to Home
            <GoArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </Link>
        </motion.div>
      </div>

      {/* Right */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
        className="w-full md:w-3/5 flex justify-center"
      >
        <img
          src={ErrorSvg}
          alt="404 illustration"
          className="max-w-full h-auto object-contain max-h-[440px]"
        />
      </motion.div>
    </div>
  );
};

export default NotFound;
