interface TitleProps {
  text: string;
  className?: string;
}

const Titlep = ({ text, className = '' }: TitleProps) => {
  return (
    <div className={`relative ${className} text-left mb-3`}>
      <p className=" sm:text-[12px] md:text-[20px] lg:text-[24px] xl:text-[28px] capitalize text-customGrey ">
        {text}
      </p>
      <div className="absolute  bottom-0 top-6 md:top-10 rounded-full left-0 h-0.5 bg-gradient-to-r from-customGrey to-transparent w-60" />
    </div>
  );
};

export default Titlep;
  
