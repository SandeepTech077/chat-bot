import useScrollToSection from "../../hooks/useScrollToSection";
import { handleHref } from "../../utils/handleHref";

interface IconWithTitleProps {
  icon: string;
  title: string;
  href?: string;
  openModel?: boolean;
  onClick?: () => void;
}

const IconWithTitle = ({ icon, title, onClick, href, openModel = false }: IconWithTitleProps) => {
  const scrollToSection = useScrollToSection();

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    if (href) {
      handleHref({ e, href, scrollToSection });
    }
    onClick?.();
  };

  return (
    <div
      className="text-customGrey flex flex-col items-center group cursor-pointer"
      onClick={openModel ? onClick : handleClick}
    >
      <div className="border border-customGrey xl:p-4 p-3 rounded-full transition duration-300 ease-in-out group-hover:bg-black group-hover:border-transparent">
        <img
          src={icon}
          alt={title}
          loading="lazy"
          className="h-8 w-8 transition duration-300 ease-in-out group-hover:filter group-hover:invert"
        />
      </div>
      <span className=" pt-1 group-hover:text-black">{title}</span>
    </div>
  );
};

export default IconWithTitle;
