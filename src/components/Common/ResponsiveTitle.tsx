interface ResponsiveTitleProps {
  text: string;
  className?: string;
}

const ResponsiveTitle = ({ text, className = "" }: ResponsiveTitleProps) => {
  return (
    <div className={`relative ${className} text-left mb-5`}>
        <div className="sm:block lg:hidden h-0.5 bg-gradient-to-l from-customGrey to-transparent flex-1"></div>

      <div className="relative inline-block">

        <span className="sm:text-[12px] md:text-[20px] lg:text-[24px] xl:text-[28px] capitalize text-customGrey">
          {text}
        </span>
      </div>


      <div className="sm:block lg:hidden h-0.5 bg-gradient-to-r from-customGrey to-transparent flex-1"></div>

      <div className="hidden lg:block absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-customGrey to-transparent w-60" />
   </div>
  );
};

export default ResponsiveTitle;
