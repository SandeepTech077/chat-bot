import { useRef } from "react";
import { useInView } from "framer-motion";
import CountUp from "react-countup";

interface CounterCardProps {
  title: string;
  content: string;
}

const CounterCard = ({ title, content }: CounterCardProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div
      ref={ref}
      className=" w-full md:h-[150px] h-[170px] p-4 border border-black bg-white flex flex-col"
    >
      {/* Counter Section (30% Height) */}
      <h2 className="h-[40%] md:text-3xl font-semibold text-2xl mb-2 flex justify-start items-end">
        {isInView ? <CountUp start={0} end={parseInt(title, 10)} duration={3} /> : 0}+
      </h2>

      {/* Content Section (70% Height) */}
      <p className="h-[60%] md:text-lg w-full text-sm flex justify-start items-top">
        {content}
      </p>
    </div>
  );
};

export default CounterCard;
