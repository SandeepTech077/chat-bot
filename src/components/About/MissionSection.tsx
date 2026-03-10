import MissionCard from "../Common/MissionCard";
import AnimateOnInView from "../../animation/AnimateOnInView";
import Title from "../Common/Title";
import Icons from "../../assets/Icons";

const MissionSection = () => {
  const titleVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const topCardVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.5
      }
    }
  };

  const bottomCardVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.5
      }
    }
  };

  return (
    <section className="flex flex-col lg:flex-row justify-between top-spacing sm:gap-6 lg:px-10 sm:px-0 top-spacing">
      {/* Title Section */}
      <AnimateOnInView variants={titleVariants} className="mb-8 lg:w-[20%] w-full">
        <Title text="Our Goals" className="   " />
        {/* <h1 className="text-3xl    mt-5 sm:leading-tight">
          Our Mission & Vision
        </h1> */}
      </AnimateOnInView>

      {/* Mission Card - from top */}
      <AnimateOnInView variants={topCardVariants} className="lg:w-[40%]  w-full">
        <MissionCard
          Icon={Icons.target}
          title="Our Mission"
          alt='target'
          description="Building world-class commercial and residential spaces that are dynamic, unified, and tailored to every need while creating lasting value for customers, employees, and the community.
"
        />
      </AnimateOnInView>

      {/* Vision Card - from bottom */}
      <AnimateOnInView variants={bottomCardVariants} className="lg:w-[40%] w-full mt-6 sm:mt-0">
        <MissionCard
          Icon={Icons.vision}
          title="Our Vision"
          alt='Instagram social media icon'
          description="To be the obvious, the most trusted choice in real estate; creating a better, liveable and comfortable life for everyone"
        />
      </AnimateOnInView>
    </section>
  );
};

export default MissionSection;
