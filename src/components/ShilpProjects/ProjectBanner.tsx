interface BannerProps {
  data: string[];
  mobileImage: string[];
  black?: string;
  mobileBannerAlt?:string;
  bannerAlt?:string;
}

const ProjectBanner = ({ data, mobileImage, black = 'false',mobileBannerAlt ,bannerAlt }: BannerProps) => {
  if (!data || data.length === 0) return null;

  const mobileSrc = mobileImage && mobileImage.length > 0 ? mobileImage[0] : data[0];
  const desktopSrc = data[0];

  return (
    <section className="relative w-full h-[70vh] lg:h-[100vh] overflow-hidden">
      {/* Background Image */}
      <img
        src={mobileSrc}
        alt={bannerAlt}
        className="w-full h-auto sm:hidden"
      />

      <img
        src={desktopSrc}
        alt={mobileBannerAlt}
        className="w-full h-auto hidden sm:block object-contain"
      />

      {/* Dark gradient overlay */}
      {black === 'true' && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-[32px] sm:text-[40px] font-bold">
            Coming Soon...
          </h1>
        </div>
      )}
    </section>
  );
};

export default ProjectBanner;
