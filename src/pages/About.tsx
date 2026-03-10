import Images from "../assets/Images";
import Achievements from "../components/About/Achievements";
import HistorySection from "../components/About/HistorySection";
import MissionSection from "../components/About/MissionSection";
import OurTeamSection from "../components/About/OurTeamSection";
import BannerImg from "../components/BannerImg";
import InfoSection from "../components/Common/InfoSection";
import mobile_abt from "../assets/Images/mobile/mobile-about-section.webp";

const AboutUs = () => {
  return (
    <>
      <BannerImg image={Images.newAboutBanner} alt="" className="sm:block hidden" />
      <BannerImg image={mobile_abt} alt="" className="sm:hidden block" />
      <section className="container-base overflow-hidden">
        {/* Hero Section */}

        <InfoSection
          reverse
          imgClass="w-full"
          imageSrc={Images.newAboutAside}
          buttonLink={`/contact-us`}
          buttonText="Schedule A Visit"
          title="Who We Are"
          // subtitle="Trust in Shilp, Build Your Future"
          description2="Founded in 2004 by Mr. Yash Brahmbhatt, Shilp Group started with a small land acquisition and has since grown into a trusted brand shaping Ahmedabad’s skyline. It was the first to develop projects on Sindhu Bhavan Road, now a prime location, and continues to pioneer strategic real estate developments. Adapting to trends while staying true to timeless values, Shilp Group has also ventured into affordable housing and plotting schemes to meet evolving demands."
          description3="With a strong focus on timely delivery, meticulous planning, and market insight, the company has earned numerous state and national awards. At Shilp Group, every project reflects passion, persistence, and purpose—building not just structures, but aspirations."
          description="Shilp Group, a leading real estate company in Ahmedabad, is built on the pillars of quality, integrity, and authenticity. Recognized for its innovative approach, cutting-edge designs, and commitment to excellence, Shilp Group has delivered over 50 landmark projects across the city. The company is known for identifying upcoming areas and creating modern, dynamic structures that meet market needs."
          is_button='true'
        />

        <InfoSection
          imgClass="w-full"
          imageSrc={Images.newAboutAside2}
          buttonLink={`/contact-us`}
          buttonText="Schedule A Visit"
          title="Why Choose Us"
          isvisible = 'true'
          // subtitle="Built on Trust, Grounded in Values"
          description2="At Shilp Group, we believe that come what may, adapt to everything new and trending but don't leave behind the simplicity and things that are here to stay for the long term. Shilp Group has won many awards and accolades at the state as well as the national level for the excellent delivery of work. We also make sure to observe the market sharply and learn from others' mistakes before deciding on to a land or anything. That's how we have grown into a well-planned and strategized real estate firm."
          description="The story of Shilp Group started way back in 2004 when the Founder and CEO, Mr.Yash Brahmbhatt bid in a land auction by AUDA where he acquired a small piece of land. Since the beginning, he aspired to be in the business of real estate and wanted to build unique structures with memorable elevations and intricate designs. After all these wonderful years, we have crossed the 50 mark in our projects. Shilp Group is the first one in the business to have constructed buildings at Sindhu Bhavan Road, currently a prime area of Ahmedabad. It is indeed a matter of pride for the group to even have signature crossroads at SBR. We have also stepped into the affordable housing domain while adapting to the need of the hour. "
       
       />

        {/* Our History Section */}
        <HistorySection />

        {/* Our Mission Section */}
        <MissionSection />

        {/* Our Team Section */}
        <OurTeamSection
          heading="Our Team"
          title="A Team of Real Estate Experts At Your Service"
          subtitle=""
          isViewbtnVisible
        />
      </section>
      <Achievements />
    </>
  );
};

export default AboutUs;
