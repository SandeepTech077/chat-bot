import Images from "../../assets/Images";

interface BannerImgProps {
  image?: string;
  height?: string;
  width?: string;
  className?: string;
  alt?: string;
}

const BannerImg = ({
  image,
  height = "h-[350px] sm:h-[600px] lg:h-[700px]",
  width = "w-auto w-full",
  className = "",
  alt = "image",
}: BannerImgProps) => {
  const finalImage = image || `${Images.newAboutBanner}`;

  return (
    <section className={`${height} ${className} ${width} relative overflow-hidden`}>
      <img
        src={finalImage}
        alt={alt}
        loading="lazy"
        className="w-full h-full object-cover"
      />
    </section>
  );
};

export default BannerImg;
