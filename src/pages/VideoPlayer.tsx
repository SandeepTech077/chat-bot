import Banner from "../assets/Images/banner_img/second.jpg";
import MobileBanner from "../assets/Images/banner_img/mobileBanner.jpg";

const VideoPlayer = () => {
  return (
    <section className="relative w-full h-screen bg-black overflow-hidden">
      {/* Desktop Image */}
      <div className="hidden sm:flex items-center justify-center w-full h-full">
        <img
          src={Banner}
          alt="Desktop Banner"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Mobile Image */}
      <div className="flex sm:hidden items-center justify-center w-full h-full">
        <img
          src={MobileBanner}
          alt="Mobile Banner"
          className="w-full h-full object-contain"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default VideoPlayer;
