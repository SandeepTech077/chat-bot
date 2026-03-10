import { ButtonHTMLAttributes } from "react";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

interface CustomButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  className?: string;
  to?: string;
}

const CustomButton = ({ text, className = "", to, ...props } : CustomButtonProps) => {
  const button = (
    <button
      className={`  border border-black px-10 py-2 rounded-full flex items-center justify-center space-x-2 transition duration-300 ease-in-out hover:bg-black hover:text-white ${className}`}
      {...props}
    >
      <span>{text}</span>
      <BsArrowUpRightCircleFill className="text-2xl inline-block transition-transform duration-300 transform hover:translate-x-1" />
    </button>
  );

  return to ? <Link to={to}>{button}</Link> : button;
};

export default CustomButton;
