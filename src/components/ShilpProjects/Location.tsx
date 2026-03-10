import Images from "../../assets/Images";

interface LocationData {
  full_address: string;
  googleMap: string;
}

interface LocationProps {
  data: LocationData;
  title: string;
}

const Location = ({ data, title }: LocationProps) => {
  return (
    <section
      className="flex justify-between flex-col-reverse md:flex-row container-base top-spacing"
      id="location"
    >
      {/* Address Section */}
      <div className="w-full lg:w-[45%] flex flex-col justify-center">
        <h3 className="text-3xl  font-semibold	 mb-4">Location</h3>
        <div className="flex gap-6 items-start sm:w-[90%] ">
          <img
            src={Images.contactLocation}
            className="w-8 h-8"
            alt="location"
          />
          <span className="text-base lg:text-lg">
            <span className="font-semibold">{title}</span>
            <br />
            {data.full_address}
          </span>
        </div>
        <div className="flex gap-6 items-center my-4">
          <img loading="lazy" src={Images.contactPhone} className="w-8 h-8" alt="message" />
          <div className="flex flex-col">
            <a href="tel:+919898211567" className="text-base lg:text-lg">
              +91 9898211567
            </a>
            <a href="tel:+919898508567" className="text-base lg:text-lg">
              +91 9898508567
            </a>
          </div>
        </div>
        <div className="flex gap-6 items-center">
  <img src={Images.contactMessage} loading="lazy" className="w-8 h-8" alt="message" />
  <div className="flex flex-col">
    <a
      href="https://mail.google.com/mail/?view=cm&fs=1&to=sales@shilp.co.in"
      target="_blank"
      rel="noopener noreferrer"
      className="text-base lg:text-lg"
    >
      sales@shilp.co.in
    </a>
    <a
      href="https://mail.google.com/mail/?view=cm&fs=1&to=saumil@shilp.co.in"
      target="_blank"
      rel="noopener noreferrer"
      className="text-base lg:text-lg"
    >
      saumil@shilp.co.in
    </a>
  </div>
</div>

      </div>
      {/* Map Section */}
      <div className="w-full lg:w-[45%] mb-4 lg:mb-0 rounded-[20px] overflow-hidden">
  <div dangerouslySetInnerHTML={{ __html: data.googleMap }} className="rounded-[20px]"></div>
</div>

    </section>
  );
};

export default Location;
