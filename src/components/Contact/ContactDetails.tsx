import Images from "../../assets/Images";
import Title from "../Common/Title";

const ContactDetails = () => {
  return (
    <div className="w-full flex  flex-col ">
      <div className="space-y-3 mb-7">
        <Title text="contact" className="mb-7" />
        <span className="text-2xl md:text-3xl">Get in Touch</span>
        <p className="text-sm">
          Do you have questions or require help with Shilp Group's goods or
          services? We are available to assist you!
        </p>
        <p className="text-sm">
          Our committed support staff is prepared to handle any worries or
          problems you could run into. You can rely on us for timely support and
          trustworthy solutions.
        </p>
      </div>
      <div className="hidden sm:flex gap-6 items-start mt-5">
        <img loading="lazy" src={Images.contactLocation} className="w-8 h-8" alt="location" />
 
        <span className="text-base lg:text-lg">
        Shilp House,
        Besides Rajpath Club, Rajpath Rangoli Road, Bodakdev,
        Ahmedabad- 380054, Gujarat, India.
        </span>
      </div>
      <div className="hidden sm:flex gap-6 items-center my-4">
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
      <div className="hidden sm:flex gap-6 items-start">
        <img loading="lazy" src={Images.contactMessage} className="w-8 h-8" alt="message" />
        <div className="flex flex-col text-lg items-start justify-center">
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
  );
};

export default ContactDetails;
