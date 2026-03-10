
interface TestimonialCardProps {
  review: string;
  type: string;
  name: string;
}

const TestimonialCard = ({ review, type, name }: TestimonialCardProps) => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-white rounded-lg px-4 mx-auto space-y-6 md:space-y-0 md:space-x-32 md:w-[70%]">
      {/* Left side: Text and information */}
      <div className="flex-1 text-center order-2 md:order-1   py-5">
        <p className="md:text-xl italic text-gray-600 mb-4 ">
          {review}
        </p>
        <div>
          <h3 className="text-lg font-semibold ">{name}</h3>
          <h3 className="text-lg ">{type}</h3>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
