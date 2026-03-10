import {  motion } from "framer-motion";
import Title from "../Common/Title";
import AnimateOnInView from "../../animation/AnimateOnInView";
import { useParams } from "react-router-dom";
import { getCategoryType } from "../../utils/getCategoryType";

interface AboutProjectProps {
  data: {
    about_desc: string;
    alt:string;
    img1: string;
    img2: string;
  };
  title : string
  isCompleted : boolean
  address_title:string;
}

const AboutProject = ({ data , title , isCompleted ,address_title } : AboutProjectProps) => {
  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const slideInVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, },
  };

  const { category } = useParams();

  return (
    <section>
      <div className="flex flex-col container-base lg:hidden mt-8">
        <span className=" font-semibold	 pb-3 text-3xl">{title}</span>
        <div className="flex flex-wrap gap-3 ">
          <span>{getCategoryType(category)}</span>
          <span>|</span>
          <span>{address_title || "Ahmedabad"}</span>
          <span>|</span>
          <span>{isCompleted ? "Completed " : "Ongoing Project "}</span>
        </div>
      </div>

      <div className="container mx-auto px-5 md:px-10 max-lg:mt-10 ">
        <div className="flex flex-wrap">
          {/* Text Section with Animation */}
          <div className="w-full lg:w-1/2">
            <Title text={`About Project`} className={`mb-10`} />
            {/* <span className=" font-semibold	 text-3xl">About Project</span> */}
            <AnimateOnInView
              variants={fadeInVariants}
              transition={{ duration: 1 , ease: "easeInOut" , delay: 0.5 }}
              className=" [&>p]:pt-5"
              dangerouslySetInnerHTML={{
                __html: data.about_desc,
              }}
            />
          </div>

          <div className="flex justify-center mt-7 lg:mt-0 lg:justify-end w-full lg:w-1/2">
            <div className="relative">
              <AnimateOnInView
                variants={slideInVariants}
                transition={{ duration: 1, ease: "easeInOut" , delay : 0.5 }}
              >
                <motion.img
                  src={data.img1}
                  alt={data.alt || 'image'}
                  className="h-[50%] md:h-[60vh] lg:w-[400px] rounded-lg xl:w-[500px] "
                />
              </AnimateOnInView>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProject;
