interface TitleTwoProps {
  text: string; 
  className?: string; 
}

const TitleTwo = ({ text, className = "" } : TitleTwoProps) => {
  return (
    <div className={`flex items-center justify-center w-full  ${className}`}>
      {/* Left side fading line */}
      <div className="flex-grow h-0.5 bg-gradient-to-l from-customGrey to-transparent"></div>

      {/* Title text */}
      <h3 className="mx-5 lg:text-[24px] sm:text-[16px  ]  text-customGrey capitalize">
        {text}
      </h3>

      {/* Right side fading line */}
      <div className="flex-grow h-0.5 bg-gradient-to-r from-customGrey to-transparent"></div>
    </div>
  );
};

export default TitleTwo;
