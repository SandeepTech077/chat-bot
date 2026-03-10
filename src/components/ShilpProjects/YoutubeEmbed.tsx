import TitleTwo from "../Common/TitleTwo";

interface videoSrc {
  src: string;
}

function YouTubeEmbed({ src }: videoSrc) {
  return (
    <section>
      {src && (
        <div className="container-base top-spacing text-center">
          <TitleTwo text="Explore More" className="mb-8" />
          {/* <span className="text-3xl">Explore More By</span> */}
          <iframe
            className="w-full h-[30vh] mt-8 md:h-[50vh] lg:h-[70vh] xl:h-[80vh]"
            // height="315"
            src={src}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </section>
  );
}

export default YouTubeEmbed;
