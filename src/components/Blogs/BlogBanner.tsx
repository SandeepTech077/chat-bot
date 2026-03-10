import React from "react";
interface BlogBannerProps {
  data: {
    banner: string;
    mobileBanner: string;
    title: string;
    description: string;
  };
}

const BlogBanner: React.FC<{ data: BlogBannerProps['data'] }> = ({ data }) => {
  return (
    <section className="relative w-full">
      {/* Desktop Banner */}
      <img
        src={data.banner}
        alt="Blog Banner"
        className="hidden sm:block w-full h-auto object-cover"
        loading="lazy"
      />

      {/* Mobile Banner */}
      <img
        src={data.mobileBanner}
        alt="Blog Mobile Banner"
        className="sm:hidden w-full h-auto object-cover"
        loading="lazy"
      />

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-white text-[30px] lg:text-[48px] font-bold mb-4">
          {data.title}
        </h1>
        <p className="text-white text-[24px] sm:text-[28px] max-w-6xl">
          {data.description}
        </p>
      </div>
    </section>
  );
};

export default BlogBanner;
