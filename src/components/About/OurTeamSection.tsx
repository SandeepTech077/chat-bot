import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import TeamCard from "../Common/TeamCard";
import { teamMembers } from "../../assets/data/our-team";
import { TeamMember } from "../../types/team.types";
import OurTeamModal from "../Modals/OurTeamModal";
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";

const EASE = [0.22, 1, 0.36, 1];

interface TeamSectionProps {
  heading: string;
  title: string;
  subtitle: string;
  isViewbtnVisible: boolean;
}

const OurTeamSection = ({
  heading,
  isViewbtnVisible,
}: TeamSectionProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

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
      <section ref={ref} className="top-spacing">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, ease: EASE }}
              className="flex items-center gap-3 mb-4"
            >
              <motion.span
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
                className="inline-block h-[2px] w-8 bg-black origin-left"
              />
              <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-customGrey">
                The People
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
              className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight"
            >
              {heading}
            </motion.h2>
          </div>

          {isViewbtnVisible && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, ease: EASE, delay: 0.3 }}
            >
              <Link
                to="/our-team"
                className="group inline-flex items-center gap-2 text-sm font-medium border border-black px-5 py-2.5 hover:bg-black hover:text-white transition-colors duration-300"
              >
                View All Team
                <GoArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </Link>
            </motion.div>
          )}
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {teamMembers.map((data, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: EASE, delay: 0.1 + index * 0.08 }}
              className="w-full"
            >
              <TeamCard data={data} openModal={openModal} />
            </motion.div>
          ))}
        </div>
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
