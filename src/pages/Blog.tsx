import { blogData } from "../assets/data/blogData";
import BlogBanner from "../components/Blogs/BlogBanner";
import BlogCard from "../components/Common/BlogCard";
import BannerImage from "../assets/blogs/BlogsBanner/Banner.png"
import MobileBanner from "../assets/blogs/BlogsBanner/mobile-banner.png"

const Blog = () => {
  const banner = {
    banner:BannerImage,
    mobileBanner:MobileBanner,
    title:"Insights & Innovations",
    description: "Stay updated with the latest trends, expert opinions, and company news from ShilpGroup."
  }
  return (
    <>
      <BlogBanner  data={banner}/>
      <div className="container mx-auto px-5 md:px-20 my-10 sm:my-20 ">

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-5 sm:mt-10">
  {[...blogData].reverse().map((blog, index) => (
    <BlogCard className="py-4" data={blog} key={index} />
  ))}
</div>

      </div>
    </>
  );
};

export default Blog;
