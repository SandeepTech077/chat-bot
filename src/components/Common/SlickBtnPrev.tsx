import { HiArrowSmallLeft } from "react-icons/hi2";

interface SlickBtnPrevProps {
  onClick?: () => void;
}

const SlickBtnPrev: React.FC<SlickBtnPrevProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="rounded-full border-2 border-black p-3 bg-white hover:bg-black hover:text-white lg:absolute bottom-0 lg:right-[5.5rem] block z-10"
    >
      <HiArrowSmallLeft className="text-2xl font-bold" />
    </button>
  );
};

export default SlickBtnPrev;

