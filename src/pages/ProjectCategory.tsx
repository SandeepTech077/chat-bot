import BannerImg from "../components/BannerImg";
import CardArea from "../components/Common/CardArea";
import { useParams } from "react-router-dom";
import {
  getCategoryData,
} from "../utils/helper";
import { commerical, plots, residential } from "../constants/projectTypes";
import Images from "../assets/Images";
import mobile_plots from "../assets/Images/mobile/mobile-plots-banner.webp"


const ProjectCategory = () => {
  const { category } = useParams();

  // Ensure category is correctly compared as a string

  const CategoryWiseProjects =category ? getCategoryData(category) : [];

  // Fixing Banner Image Selection
  function getBannerImg() {
    switch (category) {
      case commerical:
        return Images.commericalBanner;
      case residential:
        return Images.residentalBanner;
      case plots:
        return Images.plotsBanner;
      default:
        return Images.commericalBanner;
    }
  }

  function getMobileBannerImg() {
    switch (category) {
      case commerical:
        return Images.mobileCommericalBanner;
      case residential:
        return Images.mobileResidentailBanner;
      case plots:
        return mobile_plots;
      default:
        return Images.commericalBanner;
    }
  }

  return (
    <section className="sm:mb-20 mb-10">
      <BannerImg image={getBannerImg()} className="sm:block hidden "/>
      <BannerImg image={getMobileBannerImg()} className="sm:hidden block "/>
      <div className="container-base">
        {CategoryWiseProjects.length > 0 && (
          <CardArea
            section={
              category === commerical
                ? "Commerical Projects"
                : category === residential
                ? "Residential Projects"
                : "Plots"
            }
            // title={
            //   category === commerical
            //     ? ""
            //     : category === residential
            //     ? ""
            //     : "Plots"
            // }
            data={CategoryWiseProjects}
          />
        )}
      </div>
    </section>
  );
};

export default ProjectCategory;
