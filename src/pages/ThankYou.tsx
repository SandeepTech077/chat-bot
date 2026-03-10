import { motion } from "framer-motion";
import { FiCheckCircle, FiHome, FiMail, FiPhone, FiArrowLeft } from "react-icons/fi";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function ThankYou() {
  const navigate = useNavigate();
  const location = useLocation();
  const [customerName, setCustomerName] = useState("Valued Customer");
  const [projectName, setProjectName] = useState("");
  const [shouldDownload, setShouldDownload] = useState(false);
  const [pdfUrl, setPdfUrl] = useState("");

  useEffect(() => {
    if (location.state) {
      const { name, project, pdf } = location.state;
      if (name) setCustomerName(name);
      if (project) setProjectName(project);
      if (pdf) {
        setShouldDownload(true);
        setPdfUrl(pdf);
      }
    }
  }, [location.state]);

  const handleGoHome = () => navigate("/");
  const handleDownloadBrochure = () => {
    if (pdfUrl) {
      const link = document.createElement("a");
      link.href = pdfUrl;
      link.download = `${projectName}_brochure.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-blue-50 to-green-50">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1200 800"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E0F2FE" />
              <stop offset="50%" stopColor="#F0F9FF" />
              <stop offset="100%" stopColor="#ECFDF5" />
            </linearGradient>
            <radialGradient id="circleGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#10B981" stopOpacity="0.05" />
            </radialGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#bgGradient)" />

          <motion.circle cx="200" cy="150" r="80" fill="url(#circleGradient)" initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 2, delay: 0.5 }} />
          <motion.circle cx="1000" cy="200" r="120" fill="url(#circleGradient)" initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 2, delay: 0.8 }} />
          <motion.circle cx="300" cy="600" r="60" fill="url(#circleGradient)" initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 2, delay: 1.1 }} />
          <motion.circle cx="900" cy="650" r="90" fill="url(#circleGradient)" initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 2, delay: 1.4 }} />
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10 h-screen flex items-center justify-center p-4 sm:p-6 md:p-8">
        <motion.div
          className="max-w-lg sm:max-w-xl md:max-w-2xl mx-auto text-center bg-white/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl border border-white/50"
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        >
          {/* Icon */}
          <motion.div
            className="mb-6 sm:mb-8"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 200 }}
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg">
              <FiCheckCircle className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-3 sm:mb-4">Thank You!</h1>
            <h2 className="text-base sm:text-lg md:text-xl text-gray-600 mb-4 sm:mb-6">Dear {customerName}</h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-2">
              Your enquiry has been successfully submitted for
              {projectName && <span className="font-semibold text-blue-600"> {projectName}</span>}.
            </p>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-6 sm:mb-8">
              Our team will get back to you within 24 hours with all the information you need about your dream property.
            </p>
          </motion.div>

          {/* Next Steps */}
          <motion.div className="mb-6 sm:mb-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.7 }}>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 sm:mb-6">What happens next?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 text-center">
              <div className="flex flex-col items-center p-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2 sm:mb-3">
                  <FiMail className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                </div>
                <h4 className="text-sm sm:text-base font-semibold text-gray-800 ">Email </h4>
              </div>
              <div className="flex flex-col items-center p-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-full flex items-center justify-center mb-2 sm:mb-3">
                  <FiPhone className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                </div>
                <h4 className="text-sm w-full sm:text-base font-semibold text-gray-800">Personal Call</h4>
              </div>
              <div className="flex flex-col items-center p-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-full flex items-center justify-center mb-2 sm:mb-3">
                  <FiHome className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
                </div>
                <h4 className="text-sm sm:text-base font-semibold text-gray-800">Site Visit</h4>
              </div>
            </div>
          </motion.div>

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <button
              onClick={handleGoHome}
              className="px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-full hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <FiArrowLeft className="w-4 h-4" />
              Back to Home
            </button>

            {shouldDownload ? (
              <button
                onClick={handleDownloadBrochure}
                className="px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold rounded-full hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Download Brochure
              </button>
            ) : (
              <button
                onClick={() => window.location.href = "tel:+917435811123"}
                className="px-6 sm:px-8 py-2 sm:py-3 bg-white text-gray-700 font-semibold rounded-full border-2 border-gray-300 hover:border-gray-400 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Call Us Now
              </button>
            )}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            <p className="text-xs sm:text-sm text-gray-600">
              Need immediate assistance? Call us at{" "}
              <a href="tel:+919898211567" className="text-blue-600 font-semibold hover:underline">
                +91 9898211567
              </a>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default ThankYou;
