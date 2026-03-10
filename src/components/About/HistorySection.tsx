import TitleTwo from "../Common/TitleTwo";
import CounterCard from "../Common/Counter";
import AnimateOnInView from "../../animation/AnimateOnInView";


const HistorySection = () => {

  const titleVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const leftCardVariants = {
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

  const rightCardVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.5,
      },
    },
  };

  const bottomCardVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.5,
      },
    },
  };

  return (
    <section className="top-spacing lg:px-10 sm:px-0">
      {/* Title Section */}
      <AnimateOnInView
        variants={titleVariants}
        className="flex flex-col items-center"
      >
        <TitleTwo text="Since 21 years" />
        {/* <span className="pt-7 text-3xl">Our History</span> */}
      </AnimateOnInView>

      {/* Counter Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 -bold gap-2 mt-10 ">
        {/* Left Card */}
        <AnimateOnInView variants={leftCardVariants}>
          <CounterCard title="21" content="YEARS HANDS OF EXPERIENCE"  />
        </AnimateOnInView>

        {/* Middle Cards */}
        <AnimateOnInView variants={bottomCardVariants}>
          <CounterCard title="19" content="MILLION SQ. FT." />
        </AnimateOnInView>

        <AnimateOnInView variants={bottomCardVariants}>
          <CounterCard title="9000" content="UNITS" />
        </AnimateOnInView>

        {/* Right Card */}
        <AnimateOnInView variants={rightCardVariants}>
          <CounterCard
            title="52"
            content="RESIDENTIAL AND COMMERCIAL PROPERTIES"
          />
        </AnimateOnInView>
      </div>
    </section>
  );
};

export default HistorySection;
