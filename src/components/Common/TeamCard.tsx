import { TeamCardProps } from "../../types/team.types";
import Icons from "../../assets/Icons";
import { Link } from "react-router-dom";

const socialLinks = [
  { key: "facebook", icon: Icons.facebook, alt: "Facebook" },
  { key: "instagram", icon: Icons.insta, alt: "Instagram" },
  { key: "linkedin", icon: Icons.linkedin, alt: "LinkedIn" },
  { key: "twitter", icon: Icons.twitter, alt: "Twitter" },
];

const TeamCard = ({ data, openModal }: TeamCardProps) => {
  return (
    <div
      className="group cursor-pointer"
      onClick={() => openModal(data)}
    >
      {/* Image with overlay */}
      <div className="overflow-hidden aspect-[3/4] relative">
        <img
          src={data.image}
          alt={data.alt || "team member"}
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.06]"
          loading="lazy"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
        <span className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-black text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1">
          View
        </span>
      </div>

      {/* Info */}
      <div className="pt-4 pb-6 border-b border-[#EDEAEA]">
        <p className="text-sm font-bold tracking-wide">{data.name}</p>
        <p className="text-xs text-customGrey mt-1 uppercase tracking-[0.1em]">{data.role}</p>

        {/* Social links */}
        <div className="flex gap-2 mt-4">
          {socialLinks.map(({ key, icon, alt }) => {
            const href = data[key as keyof typeof data] as string | undefined;
            if (!href) return null;
            return (
              <Link
                key={key}
                to={href || "#"}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="w-7 h-7 flex items-center justify-center border border-[#EDEAEA] hover:border-black hover:bg-black transition-all duration-300 group/icon"
              >
                <img
                  src={icon}
                  alt={alt}
                  className="w-3.5 h-3.5 group-hover/icon:invert"
                />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
