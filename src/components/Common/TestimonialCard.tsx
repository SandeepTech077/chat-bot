
interface TestimonialCardProps {
  review: string;
  type: string;
  name: string;
}

const TestimonialCard = ({ review, type, name }: TestimonialCardProps) => {
  return (
    <div className="relative mx-auto max-w-3xl px-6 py-10 md:py-14 text-center">
      {/* Large quote mark */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 text-[120px] leading-none text-[#EDEAEA] font-serif select-none pointer-events-none" aria-hidden>
        &ldquo;
      </div>

      {/* Review */}
      <p className="relative z-10 text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed font-light italic">
        {review}
      </p>

      {/* Divider */}
      <div className="flex items-center justify-center gap-3 mt-8 mb-4">
        <span className="h-px w-12 bg-[#EDEAEA]" />
        <span className="w-1.5 h-1.5 rounded-full bg-black" />
        <span className="h-px w-12 bg-[#EDEAEA]" />
      </div>

      {/* Author */}
      <h3 className="text-base font-bold tracking-wide">{name}</h3>
      <p className="text-xs text-customGrey tracking-[0.15em] uppercase mt-1">{type}</p>
    </div>
  );
};

export default TestimonialCard;
