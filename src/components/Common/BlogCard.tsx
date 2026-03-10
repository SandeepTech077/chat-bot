import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";
import { BlogData } from "../../types/blogs.types";
import Calendar from "../../assets/Icons/calendar.svg";
interface BlogCardProps {
  data: BlogData;
  className?: string;
}
const BlogCard = ({ data, className = "" }: BlogCardProps) => {
  return (
    <Link
      to={`/blog/${data?.url}`}
      className={`group flex flex-col bg-white border border-[#EDEAEA] rounded-sm overflow-hidden hover:shadow-xl transition-shadow duration-500 ${className}`}
    >
      {/* Image */}
      <div className="overflow-hidden h-[220px] sm:h-[260px]">
        <img
          src={data.image}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          alt={data.title}
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        {/* Date */}
        <div className="flex items-center gap-2 text-[#727272] text-xs tracking-wide">
          <img src={Calendar} alt="calendar" className="w-3.5 h-3.5" />
          <span>{data.date}</span>
        </div>

        {/* Title */}
        <h2 className="text-base md:text-lg font-bold leading-snug line-clamp-2 group-hover:underline underline-offset-2 decoration-1">
          {data.title}
        </h2>

        {/* Separator */}
        <div className="h-px w-full bg-[#EDEAEA]" />

        {/* Excerpt */}
        <p className="text-sm text-customGrey leading-relaxed line-clamp-3 flex-1">
          {data.desc.slice(0, 200)}...
        </p>

        {/* CTA */}
        <div className="flex items-center gap-2 mt-auto pt-2 text-sm font-semibold">
          <span>Read More</span>
          <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <GoArrowUpRight className="text-white text-sm" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
