import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Images from "../../assets/Images";

const LoaderWithStyles = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) { clearInterval(interval); return 100; }
        return p + Math.floor(Math.random() * 12) + 4;
      });
    }, 90);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        key="loader"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-[9999] bg-[#080808] flex flex-col items-center justify-center overflow-hidden"
      >
        {/* Background subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Center content */}
        <div className="relative flex flex-col items-center gap-10">
          {/* Logo */}
          <motion.img
            src={Images.whiteLogo}
            alt="Shilp Group"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="w-32 md:w-40 object-contain"
          />

          {/* Tag line */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-white/30 text-xs tracking-[0.3em] uppercase font-medium"
          >
            Building Dreams · Shaping Skylines
          </motion.p>

          {/* Progress bar container */}
          <div className="w-64 md:w-80">
            <div className="h-[1px] w-full bg-white/10 relative overflow-hidden rounded-full">
              <motion.div
                className="absolute left-0 top-0 h-full bg-white rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ ease: "easeOut", duration: 0.3 }}
              />
            </div>
            <div className="flex justify-between mt-2">
              <span className="text-white/20 text-[10px] tracking-widest uppercase">Loading</span>
              <span className="text-white/30 text-[10px] font-mono">{Math.min(progress, 100)}%</span>
            </div>
          </div>
        </div>

        {/* Corner accents */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-1.5"
        >
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="w-1 h-1 rounded-full bg-white/20"
              animate={{ opacity: [0.2, 0.7, 0.2] }}
              transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
            />
          ))}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoaderWithStyles;

