interface MissionCardProps {
  Icon: string;
  title: string;
  description: string;
  alt:string;
}

const MissionCard = ({ Icon, title, description,alt }: MissionCardProps) => {
  return (
    <div className="rounded-xl p-4 lg:p-8 items-start text-left mx-auto h-full transition-all duration-300  hover:shadow-[0px_20px_50px_rgba(0,0,0,0.1)] bg-white">
      <div className="text-3xl sm:text-4xl mb-3">
        {Icon && <img loading="lazy" className="w-12" src={Icon} alt={alt} />}
      </div>
      <h2 className="text-xl sm:text-2xl font-semibold mb-2">{title}</h2>
      <p className="text-base sm:text-lg text-customGrey">{description}</p>
    </div>
  );
};


export default MissionCard;
