import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";
import { BlogData } from "../../types/blogs.types";
import Calendar from "../../assets/Icons/calendar.svg";
interface BlogCardProps {
  data: BlogData;
  className?: string;
}
const BlogCard = ({ data, className = "p-10" }: BlogCardProps) => {
  return (
    <Link
      to={`/blog/${data?.url}`}
      className={`flex flex-col rounded-lg ${className}`}
    >
      <img
        src={data.image}
        className="w-full border border-[#727272] sm:h-[300px] h-[200px] object-cover mb-4 rounded-md"
        alt="blog-img"
        loading="lazy"
      />
      <div className={`relative mb-2`}>
        <div className="my-2 flex gap-2 text-[#727272] text-[14px]">
          <img src={Calendar} alt="calendar" />
          {data.date}
        </div>
        <span className="text-xl  mb-2">
          {/* <span className="block sm:hidden">{data.title}</span> */}
          <h1 className="block text-lg text-[#000000]  md:text-2xl">
            {data.title.slice(0, 30)}...
          </h1>
        </span>
        <div className="absolute bottom-0 top-100 rounded-full left-0 h-0.5 bg-gradient-to-r from-customGrey to-transparent w-60" />
      </div>
      <p className="text-customGrey mb-4">
        {/* <span className="block sm:hidden">{data.desc}</span> */}
        <span className="block">{data.desc.slice(0, 250)}...</span>
      </p>
      <div className="flex items-center gap-3 cursor-pointer group">
        <button className="border-[1px] border-black px-4 py-2 rounded-[30px] flex flex  items-center gap-2 group hover:bg-black transition-all duration-300">
          <span className="text-black group-hover:text-white transition-all duration-300">
            Read More...
          </span>
          <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center group-hover:bg-white transition-all duration-300">
            <GoArrowUpRight className="text-white group-hover:text-black text-lg" />
          </div>
        </button>
      </div>
    </Link>
  );
};

export default BlogCard;
