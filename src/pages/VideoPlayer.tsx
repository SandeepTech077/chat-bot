import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { HiArrowLongDown } from "react-icons/hi2";
import Banner from "../assets/Images/banner_img/second.jpg";
import MobileBanner from "../assets/Images/banner_img/mobileBanner.jpg";

const VideoPlayer = () => {
  return (
    <section className="relative w-full h-screen bg-black overflow-hidden">
      {/* ── Background Images ── */}
      <div className="absolute inset-0">
        {/* Desktop */}
        <img
          src={Banner}
          alt="Shilp Group Banner"
          className="hidden sm:block w-full h-full object-cover scale-[1.03] origin-center"
          loading="eager"
        />
        {/* Mobile */}
        <img
          src={MobileBanner}
          alt="Shilp Group Banner"
          className="block sm:hidden w-full h-full object-cover"
          loading="eager"
        />
        {/* Multi-layer overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
      </div>

      {/* ── Hero Content ── */}
      <div className="relative z-10 h-full flex flex-col justify-center container-base px-6 xl:px-10">
        {/* Gold label chip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="inline-block w-8 h-[2px] bg-white" />
          <span className="text-white/60 text-xs font-semibold tracking-[0.22em] uppercase">
            Est. 2004 · Ahmedabad
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="text-white font-bold leading-[1.08] tracking-tight
            text-4xl sm:text-5xl lg:text-6xl xl:text-7xl
            max-w-[16ch]"
        >
          Building Dreams,
          <br />
          <span className="text-white">Shaping Skylines.</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="mt-5 text-white/70 text-sm sm:text-base max-w-[44ch] leading-relaxed"
        >
          Shilp Group — Ahmedabad's trusted name in residential, commercial
          and plotting developments for over two decades.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85 }}
          className="mt-8 flex flex-wrap gap-4"
        >
          <Link
            to="/projects/residential"
            className="inline-flex items-center gap-2 px-7 py-3 bg-white text-black text-sm font-semibold tracking-[0.1em] uppercase hover:bg-gray-200 transition-colors duration-300 rounded-sm"
          >
            Explore Projects
          </Link>
          <Link
            to="/contact-us"
            className="inline-flex items-center gap-2 px-7 py-3 border border-white/60 text-white text-sm font-semibold tracking-[0.1em] uppercase hover:border-white hover:text-white transition-colors duration-300 rounded-sm"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>

      {/* ── Scroll Indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-white/50 text-[10px] tracking-[0.2em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
        >
          <HiArrowLongDown className="text-white text-xl" />
        </motion.div>
      </motion.div>

      {/* ── Bottom stat bar ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.1 }}
        className="absolute bottom-0 right-0 z-10 hidden lg:flex"
      >
        <div className="bg-black/80 backdrop-blur-md border-t border-l border-white/10 flex divide-x divide-white/10">
          {[
            { value: "21+", label: "Years Experience" },
            { value: "19M+", label: "Sq. Ft. Delivered" },
            { value: "9000+", label: "Happy Families" },
            { value: "52+", label: "Projects" },
          ].map((stat) => (
            <div key={stat.label} className="px-7 py-4 text-center">
              <div className="text-white text-xl font-bold">{stat.value}</div>
              <div className="text-white/50 text-[11px] tracking-wide mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default VideoPlayer;
