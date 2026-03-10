import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AboutProject from "../components/ShilpProjects/AboutProject";
import FloorPlans from "../components/ShilpProjects/FloorPlans";
import Amenities from "../components/ShilpProjects/Amenities";
import Gallery from "../components/ShilpProjects/Gallery";
import ProjectUpdates from "../components/ShilpProjects/ProjectUpdates";
import Location from "../components/ShilpProjects/Location";
import { fetchProjectDetails } from "../utils/helper";
import ProjectTitleArea from "../components/ShilpProjects/ProjectTitleArea";
import LoaderWithStyles from "../components/Loader/Loader";
import YouTubeEmbed from "../components/ShilpProjects/YoutubeEmbed";
import ProjectBanner from "../components/ShilpProjects/ProjectBanner";
import ReraDetails from "../components/ShilpProjects/ReraDetails";
import { ProjectDataTypes } from "../types/projectDataTypes.types";

const ShilpProjects = () => {
  const { category, url } = useParams();

  const [projectDetails, setProjectDetails] = useState<ProjectDataTypes>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        if (category && url) {
          // Pass url directly instead of converting to number
          const { projectDetails, error } = await fetchProjectDetails(
            category,
            url
          );
          if (error) {
            setError(error);
          } else if (projectDetails) {
            setProjectDetails(projectDetails);
          }
        }
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "An unexpected error occurred"
        );
      }

      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };

    fetchData();
  }, [category, url]);

  if (loading) {
    return <LoaderWithStyles />;
  }

  if (projectDetails?.isActive === false) {
    return (
      <div className="w-full">
        <ProjectBanner
          data={projectDetails?.details.banner_imgs}
          black="true"
        />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <div className="text-red-500 text-xl font-semibold mb-2">
          Oops! Something went wrong
        </div>
        <div className="text-gray-600 text-center">{error}</div>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <section className="shilp-project-section overflow-hidden">
      <ProjectBanner
        data={projectDetails?.details?.banner_imgs}
        mobileImage={projectDetails?.details?.mobile_banner}
        bannerAlt={projectDetails?.details?.bannerAlt}
        mobileBannerAlt={projectDetails?.details?.mobileBannerAlt}
      />

      <ProjectTitleArea
        title={projectDetails?.title}
        brochure={projectDetails?.brochure}
        address_title={projectDetails?.address?.mini_address?.line1}
        bannerImg={projectDetails?.details?.banner_imgs}
        isCompleted={projectDetails?.is_completed}
        comp_status={projectDetails?.complete_status}
      />

      <AboutProject
        title={projectDetails?.title}
        isCompleted={projectDetails?.is_completed}
        data={projectDetails?.details?.about}
        address_title={projectDetails?.address?.mini_address?.line1}
      />

      {/* Add conditional rendering to prevent errors */}
      {projectDetails?.details?.floor_plans && (
        <FloorPlans data={projectDetails.details.floor_plans} />
      )}

      {projectDetails?.details?.gallery_imgs && (
        <Gallery images={projectDetails.details.gallery_imgs} />
      )}

      {projectDetails?.details?.amenities && (
        <Amenities
          amenities={projectDetails.details.amenities}
          title={projectDetails?.title}
        />
      )}

      {projectDetails?.video && <YouTubeEmbed src={projectDetails.video} />}

      {projectDetails?.details?.project_updates &&(
        <ProjectUpdates data={projectDetails.details.project_updates} />
      )}

      {projectDetails?.address && (
        <Location data={projectDetails.address} title={projectDetails?.title} />
      )}

      {projectDetails?.parent_category !== "plots" &&
        projectDetails?.reg_no && <ReraDetails reg={projectDetails.reg_no} />}
    </section>
  );
};

export default ShilpProjects;
