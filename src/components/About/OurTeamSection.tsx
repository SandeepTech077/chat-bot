import { useState } from "react";
import TitleTwo from "../Common/TitleTwo";
import TeamCard from "../Common/TeamCard";
import { teamMembers } from "../../assets/data/our-team";
import AnimateOnInView from "../../animation/AnimateOnInView";
import { TeamMember } from "../../types/team.types";
import CustomButton from "../Common/CustomButton";
import OurTeamModal from "../Modals/OurTeamModal";

const animationVariants = {
  hidden: (isOdd: boolean) => ({
    opacity: 0,
    y: isOdd ? -100 : 100,
  }),
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

interface TeamSectionProps {
  heading: string;
  title: string;
  subtitle: string;
  isViewbtnVisible : boolean;
}

const OurTeamSection = ({
  heading,
  // title,
  // subtitle,
  isViewbtnVisible,
}: TeamSectionProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const openModal = (member: TeamMember): void => {
    setSelectedMember(member);
    setIsOpen(true);
  };

  const closeModal = (): void => {
    setIsOpen(false);
    setSelectedMember(null);
  };


  return (
    <>
      <section className="top-spacing lg:px-10 sm:px-0  ">
        <div className="flex flex-col items-center">
          <TitleTwo text={heading} />
          {/* <h2 className="py-7 text-xl sm:text-xl lg:text-3xl text-center">

            {title}
          </h2> */}
          {/* <p className="text-customGrey text-center sm:text-xl">{subtitle}</p> */}
        </div>

        <div className="flex flex-wrap justify-center mt-5 sm:mt-12">
          {teamMembers.map((data, index: number) => {
            const isOdd = index % 2 !== 0;

            return (
              <AnimateOnInView
                key={index}
                variants={{
                  hidden: animationVariants.hidden(isOdd),
                  visible: {
                    ...animationVariants.visible,
                    transition: {
                      ...animationVariants.visible.transition,
                      delay: index * 0.2,
                    },
                  },
                }}
                className="w-full sm:w-1/2 lg:w-1/4 p-2"
              >
                <TeamCard data={data} openModal={openModal} />
              </AnimateOnInView>
            );
          })}
        </div>

        {isViewbtnVisible && (
          <div className="flex justify-center items-center ">
            <CustomButton
              className="px-5 py-2 text-lg "
              text="View All"
              to="/our-team"
            />
          </div>
        )}
      </section>
      <OurTeamModal
        data={selectedMember}
        isOpen={isOpen}
        onClose={closeModal}
      />
    </>
  );
};

export default OurTeamSection;
