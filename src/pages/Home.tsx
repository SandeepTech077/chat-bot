import ExpandableGallery from "../components/Home/ExpandableGallery";
import NewsUpdates from "../components/Home/NewsUpdates";
import Testimonials from "../components/Home/Testimonials";
import { getCategoryData } from "../utils/helper";
import { commerical, residential } from "../constants/projectTypes";
import CardArea from "../components/Common/CardArea";
import VideoPlayer from "./VideoPlayer";
import InfoSection from "../components/Common/InfoSection";
import Images from "../assets/Images";

const Home = () => {
  const commercialData = getCategoryData(commerical);
  const residentialData = getCategoryData(residential);

  return (
    <section>
      
      <VideoPlayer />

      <div className="container-base overflow-hidden">
        
        <InfoSection
          imageSrc={Images.about}
          buttonLink={`/about-us`}
          buttonText="About Us"
          title="Who We Are"
          subtitle="Trust in Shilp, Build Your Future"
          description="Shilp group, a real estate company in Ahmedabad that is driven by quality, integrity and authenticity has earned recognition as one of the top builders of Ahmedabad. The company is known for undertaking large, diverse projects, fostering innovation, embracing emerging technologies, and making a difference for their clients, employees and community. We are a brand that people trust because our projects helps to house people’s ambitions."
          description2={
            <>
              Founded in 2004 by Mr. Yash Brahmbhatt, Shilp Group started with a small land acquisition and has since grown into a trusted brand shaping Ahmedabad’s skyline. It was the first to develop projects on Sindhu Bhavan Road, now a prime location, and continues to pioneer strategic real estate developments. Adapting to trends while staying true to timeless values, Shilp Group has also <strong>know more</strong>
            </>
          }
          home='true'
         is_button="true"
       />

        <ExpandableGallery />

        <div className="sm:block hidden">
        <CardArea
          section={`commerical`}
          data={commercialData}
          title="Workspaces designed for your success"
        />
        </div>

        {/* <OurVision /> */}

        <div className="sm:block hidden">
        <CardArea
          section={`Residential`}
          data={residentialData}
          title="Creating homes that inspire living"
        />
             </div>

        <NewsUpdates />

        <Testimonials />
      </div>
    </section>
  );
};

export default Home;
