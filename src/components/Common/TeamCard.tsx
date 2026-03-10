import { TeamCardProps } from "../../types/team.types";
import Icons from "../../assets/Icons";
import { Link } from "react-router-dom";

const TeamCard = ({ data, openModal }: TeamCardProps) => {

  return (
    <div className=" mb-8 overflow-visible" onClick={() => openModal(data)}>
      {/* Image */}
      <img
        src={data.image}
        alt={data.alt || 'member'}
        className="w-full sm:w-[350px] h-auto object-cover object-center mx-auto"
        loading="lazy"
      />

      {/* Content */}
      <div className="flex flex-col  py-5 pb-8">
        <span className="text-lg">{data.name}</span>
        <span className="text-customGrey pt-2 text-base">{data.role}</span>
        <div className="flex gap-2 xl:gap-6 pt-3">
          {/* facebook */}
          <Link
            to={data?.facebook || "#"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={Icons.facebook}
              className="w-10 h-10 p-2 border bg-[#EDEAEA]"
              alt="icon"
            />
          </Link>

          {/* insta */}
          <Link
            to={data.instagram || "#"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={Icons.insta}
              className="w-10 h-10 p-2 border bg-[#EDEAEA]"
              alt="icon"
            />
          </Link>

          {/* linked in  */}
          <Link
            to={data.linkedin || "#"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={Icons.linkedin}
              className="w-10 h-10 p-2 border bg-[#EDEAEA]"
              alt="icon"
            />
          </Link>

          {/* twitter  */}
          <Link
            to={data.twitter || "#"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={Icons.twitter}
              className="w-10 h-10 p-2 border bg-[#EDEAEA]"
              alt="icon"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
