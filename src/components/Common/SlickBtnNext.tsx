import { HiArrowSmallRight } from "react-icons/hi2";

interface SlickBtnNextProps {
  onClick?: () => void;
}

const SlickBtnNext = ({ onClick }: SlickBtnNextProps) => {
  return (
    <button
      onClick={onClick}
      className=" rounded-full border-2 border-black p-3 bg-white hover:bg-black hover:text-white lg:absolute bottom-0   lg:right-5 block  z-10
      "
    >
      <HiArrowSmallRight className="text-2xl font-bold" />
    </button>
  );
};

export default SlickBtnNext;
