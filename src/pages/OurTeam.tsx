import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Images from "../assets/Images";
import OurTeamSection from "../components/About/OurTeamSection";
import BannerImg from "../components/BannerImg";
import mobileteam from "../assets/Images/mobile/shilp-group-building-front-view.webp";

const EASE = [0.22, 1, 0.36, 1];

const OurTeam = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <>
      <BannerImg image={Images.ourTeamBanner} className="sm:block hidden" />
      <BannerImg image={mobileteam} className="sm:hidden block" />
      <section className="container-base">
        <OurTeamSection
          heading="Meet Our Team"
          title=""
          subtitle=""
          isViewbtnVisible={false}
        />

        {/* Team photo */}
        <div ref={ref} className="top-spacing">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: EASE }}
            className="flex items-center gap-3 mb-6"
          >
            <motion.span
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
              className="inline-block h-[2px] w-8 bg-black origin-left"
            />
            <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-customGrey">
              Team Shilp
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
            className="overflow-hidden"
          >
            <img
              src={Images.AboutTeam}
              alt="Shilp Group Team Members."
              loading="lazy"
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default OurTeam;
