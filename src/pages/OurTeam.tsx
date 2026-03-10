import Images from "../assets/Images";
import OurTeamSection from "../components/About/OurTeamSection";
import AnimateOnInView from "../animation/AnimateOnInView";
import TitleTwo from "../components/Common/TitleTwo";
import BannerImg from "../components/BannerImg";
import mobileteam from "../assets/Images/mobile/shilp-group-building-front-view.webp"

const textVariants = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay: 0.2,
    },
  },
};

const imageVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay: 0.5,
    },
  },
};

const OurTeam = () => {
  return (
    <>
       <BannerImg image={`${Images.ourTeamBanner}`} className="sm:block hidden" />
       <BannerImg image={`${mobileteam}`} className="sm:hidden block" />
      <section className="container-base mb-10 px-10">
        <OurTeamSection
          heading="Meet Our Team"
          // title="Meet Our Team"
          // subtitle="Our team is committed to delivering exceptional service and innovative solutions."
          isViewbtnVisible={false}
        />

        <div className="container-base mx-auto mt-10">
          {/* Text Section with Animation */}
          <AnimateOnInView
            variants={textVariants}
            className="mb-6 sm:mb-8 md:mb-10"
          >
            <TitleTwo text="Team Shilp" className="mb-10 " />
            <span className="capitalize text-center text-2xl sm:text-3xl md:text-4xl  block mb-4 sm:mb-6">
               
            </span>
          </AnimateOnInView>

          {/* Image Section with Animation */}
          <AnimateOnInView
            variants={imageVariants}
            className="mt-6 sm:mt-8 md:mt-10"
          >
            <img
              src={Images.AboutTeam}
              alt="Shilp Group Team Members."
              loading="lazy"
              className="w-full h-auto object-cover rounded-md"
            />
          </AnimateOnInView>
        </div>
      </section>
    </>
  );
};

export default OurTeam;
