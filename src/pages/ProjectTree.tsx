import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Images from "../assets/Images";
import BannerImg from "../components/BannerImg";
import Title from "../components/Common/Title";
import { GoDotFill } from "react-icons/go";

import aaron from "../assets/Images/project-tree/aaron-residential-tower.webp";
import address from "../assets/Images/project-tree/address-location-building.webp";
import anata from "../assets/Images/project-tree/anata-modern-housing-project.webp";
import aperia from "../assets/Images/project-tree/aperia-commercial-tower.webp";
import arista from "../assets/Images/project-tree/arista-commercial-complex.webp";
import businessgateway from "../assets/Images/project-tree/shilp-business-gateway-building.webp";
import corporate_park from "../assets/Images/project-tree/corporate-park-office-complex.webp";
import elanza from "../assets/Images/project-tree/shilp-elanza-commercial-tower.webp";
import epitome from "../assets/Images/project-tree/epitome-highrise-project.webp";
import garden_view from "../assets/Images/project-tree/garden-view-residential-tower.webp";
import greencity from "../assets/Images/project-tree/green-city-residential-project.webp";
import greenview from "../assets/Images/project-tree/greenview.webp";
import indutrialpark from "../assets/Images/project-tree/industrial-park-development.webp";
import northSkypng from "../assets/Images/project-tree/north-sky-apartments.webp";
import paradise from "../assets/Images/project-tree/paradise-residency.webp";
import park_view from "../assets/Images/project-tree/parkview-green-apartments.webp";
import revanta from "../assets/Images/project-tree/revanta-residential-project.webp";
import sapphire from "../assets/Images/project-tree/sapphire-commercial-complex.webp";
import saral from "../assets/Images/project-tree/saral-residential-complex.webp";
import satved from "../assets/Images/project-tree/satved-premium-apartments.webp";
import serene from "../assets/Images/project-tree/serene-residential-flats.webp";
import shilp14 from "../assets/Images/project-tree/shilp-building-project.webp";
import shivalik_shilp_2 from "../assets/Images/project-tree/shivalik-shilp-building.webp";
import silver_nest from "../assets/Images/project-tree/silver-nest-residential-project.webp";
import zaveri from "../assets/Images/project-tree/zaveri-residency-project.webp";
import residency from "../assets/Images/project-tree/residency-apartment-complex.webp"
import theroots from "../assets/Images/project-tree/the-roots-residential-project.webp"
import shilpone from "../assets/Images/project-tree/shilp-one-building.webp"
import city_center_2 from "../assets/Images/project-tree/city-center-phase.webp"
import blossom from "../assets/Images/project-tree/blossom-luxuria-residential.webp"
import city_center from "../assets/Images/project-tree/city-center-commercial-plaza.webp"
import corner from "../assets/Images/project-tree/corner-mixed-use-building.webp"
// New 
import ShilpArcade from "../assets/Images/project-tree/shilp-arcade-commercial.webp"
import ShilpComplex from "../assets/Images/project-tree/shilp-complex-building.webp"
import Shaligram from "../assets/Images/project-tree/shilp-shaligram-residency.webp"
import Sashvat from "../assets/Images/project-tree/shilp-sashvat-residential.webp"
import ShilpSquareA from "../assets/Images/project-tree/shilp-square-building.webp"
import SHILPANNEXE from "../assets/Images/project-tree/shilp-annexe-commercial-property.webp"
import SHILPSQUAREB from "../assets/Images/project-tree/shilp-square-build.webp"
import Shilp3 from "../assets/Images/project-tree/shilp-building.webp"
import HCGHOSPITAL from "../assets/Images/project-tree/hcg-hospital-building.webp"
import CitySquare from "../assets/Images/project-tree/shilp-city-square-building.webp"
import ShivalikShilp from "../assets/Images/project-tree/shivalik-shilp-premium-tower.webp"
import ShilpShaligram from "../assets/Images/project-tree/shilp-shaligram-residency.webp"
import ShilpCentrica from "../assets/Images/project-tree/shilp-centrica-commercial.webp"
import ShilpCenter from "../assets/Images/project-tree/shilp-center-commercial-complex.webp"
import ShilpSkyLines from "../assets/Images/project-tree/shilp-skyline-tower.webp"
import ShilpTwinTower from "../assets/Images/project-tree/shilp-twin-tower.webp"
import ShilpCelestal from "../assets/Images/project-tree/shilp-celestal-building.webp"
import ShilpSacred from "../assets/Images/project-tree/shilp-sacred-apartments.webp"
import AsianSquare from "../assets/Images/project-tree/asian-square-complex.webp"


const projectData = [
  [

    {
      year: "2025",
      title: "Shilp Ananta",
      location: "Shela",
      type: "Residential",
      alt: "Anata Modern Housing Development",
      image: `${anata}`,
    }, //
    {
      year: "2025",
      title: "Shilp Sacred",
      location: "Ambli Road",
      type: "Commercial",
      alt: "Shilp Sacred Apartment Building",
      image: `${ShilpSacred}`,
    }, //
    {
      year: "2025",
      title: "Shilp Celestial",
      location: "Vaishnodevi",
      type: "Residential",
      alt: "Shilp Celestal Residential Building Exterior View",
      image: `${ShilpCelestal}`,
    }, //
  ],

  [
    {
      year: "2024",
      title: "Shilp Twin Tower",
      location: "SEZ, Gift City ",
      type: "Commercial",
      alt: "Shilp Twin Tower High-Rise Building",
      image: `${ShilpTwinTower}`,
    }, //
    {
      year: "2024",
      title: "Shilp SkyLine",
      location: "Shantigram",
      type: "Residential",
      alt: "Shilp Skyline High-Rise Tower",
      image: `${ShilpSkyLines}`,
    }, //
    {
      year: "2024",
      title: "Shilp Incubation Center",
      location: "Gift City",
      type: "Commercial",
      alt: "Shilp Center Office and Retail Complex",
      image: `${ShilpCenter}`,
    }, //
  ],

  [
    {
      year: "2023",
      title: "Shilp Centrica",
      location: "DTA, Gift City ",
      type: "Commercial",
      alt: "Shilp Centrica Commercial Office Building",
      image: `${ShilpCentrica}`,
    },//
    {
      year: "2023",
      title: "Shilp North Sky",
      location: "Gandhinagar",
      type: "Residential",
      alt: "North Sky Premium Apartments High-Rise",
      image: `${northSkypng}`,
    },//
    {
      year: "2022",
      title: "Shilp Business Gateway",
      location: "Vaishnodevi",
      type: "Commercial",
      alt: "Shilp Business Gateway Office Complex",
      image: `${businessgateway}`,
    },
  ],

  [
    {
      year: "2022",
      title: "Shilp Residency",
      location: "Gota",
      type: "Residential",
      alt: "Residential Apartment Complex Building",
      image: `${residency}`,

    },
    {
      year: "2022",
      title: "Shilp Serene",
      location: "Shilaj",
      type: "Residential",
      alt: "Serene Residential Apartment Buildings",
      image: `${serene}`,
    },
    {
      year: "2022",
      title: "Shilp Industrial Park",
      location: "Changodar",
      type: "Plot",
      alt: "Industrial Park Infrastructure Development",
      image: `${indutrialpark}`,
    },
  ],

  [
    {
      year: "2022",
      title: "Shilp The Roots",
      location: "Moti Devti",
      type: "Plots",
      alt: "The Roots Residential Complex Exterior View",
      image: `${theroots}`,
    },
    {
      year: "2022",
      title: "Shilp Paradise",
      location: "Bodakdev",
      type: "Residential",
      alt: "Paradise Residency Housing Scheme",
      image: `${paradise}`,
    },
    {
      year: "2022",
      title: "Shilp 14",
      location: "Rajpath Road",
      type: "Residential",
      alt: "Shilp Real Estate Project View",
      image: `${shilp14}`,
    },
  ],

  [
    {
      year: "2021",
      title: "Shilp One",
      location: "Rajpath Cross Road",
      type: "Commercial",
      alt: "Shilp One Office and Retail Tower",
      image: `${shilpone}`,
    },
    {
      year: "2021",
      title: "Shilp Revanta",
      location: "Shela",
      type: "Residential",
      alt: "Revanta Modern Residential Project Exterior",
      image: `${revanta}`,
    },
    {
      year: "2019",
      title: "Shilp Corporate Park",
      location: "Rajpath Rangoli Road",
      type: "Commercial",
      alt: "Corporate Park Modern Office Complex",
      image: `${corporate_park}`,
    },
  ],

  [
    {
      year: "2018",
      title: "Shilp Satved",
      location: "Bodavdev",
      type: "Commercial",
      alt: "Satved Premium Residential Apartments",
      image: `${satved}`,
    },
    {
      year: "2018",
      title: "Shilp Shaligram",
      location: "Vastrapur",
      type: "Residential",
      alt: "Shilp Shaligram Premium Residency",
      image: `${ShilpShaligram}`,
    },
    {
      year: "2018",
      title: "Shilp The Address",
      location: "Shilaj Cross Road",
      type: "Commercial",
      alt: "Real Estate Project Address and Location View",
      image: `${address}`,
    },
  ],

  [
    {
      year: "2018",
      title: "Shilp Zaveri",
      location: "Shyamal",
      type: "Commercial",
      alt: "Zaveri Modern Residency Project",
      image: `${zaveri}`,
    },
    {
      year: "2017",
      title: "Shilp Epitome",
      location: "Bodavdev",
      type: "Commercial",
      alt: "Epitome High-Rise Building Project",
      image: `${epitome}`,
    },
    {
      year: "2017",
      title: "City Center 2",
      location: "Science City",
      type: "Commercial",
      alt: "City Center Commercial Expansion",
      image: `${city_center_2}`,
    },
  ],

  [
    {
      year: "2015",
      title: "Shivalik Shilp 2",
      location: "Keshav Bhaug Party Plot",
      type: "Commercial",
      alt: "Shivalik Shilp Residential Tower View",
      image: `${shivalik_shilp_2}`,
    },
    {
      year: "2015",
      title: "Shivalik Shilp",
      location: "Iscon Mandir Cross Road",
      type: "Commercial",
      alt: "Shivalik Shilp Premium Residential Tower",
      image: `${ShivalikShilp}`,
    },
    {
      year: "2015",
      title: "Shilp Aperia",
      location: "Bopal Ambli",
      type: "Commercial",
      alt: "Aperia Commercial Office Tower",
      image: `${aperia}`,
    },

  ],

  [
    {
      year: "2015",
      title: "Shilp Arista",
      location: "Rajpath Rangoli Road",
      type: "Commercial",
      alt: "Arista Commercial Complex Building View",
      image: `${arista}`,
    },
    {
      year: "2015",
      title: "Asian Square",
      location: "Bodakdev",
      type: "Commercial",
      alt: "Asian Square Commercial Complex",
      image: `${AsianSquare}`,
    },
    {
      year: "2013",
      title: "Shilp Aaron",
      location: "Rajpath Rangoli Road",
      type: "Commerical",
      alt: "",
      image: `${aaron}`,
    },
  ],

  [
    {
      year: "2013",
      title: "Blossom Luxuria",
      location: "Science City",
      type: "Residental",
      alt: "Blossom Luxuria Premium Apartments",
      image: `${blossom}`,
    },
    {
      year: "2012",
      title: "Shilp Elanza",
      location: "Thaltej",
      type: "Residential",
      alt: "Shilp Elanza Commercial Office Tower",
      image: `${elanza}`,
    },
    {
      year: "2012",
      title: "City Center",
      location: "Science City",
      type: "Commerical",
      alt: "City Center Commercial Plaza and Office Space",
      image: `${city_center}`,
    },

  ],

  [
    {
      year: "2012",
      title: "Garden View",
      location: "Sola Bhagvat",
      type: "Residential",
      alt: "Garden View Residential Tower with Green Surroundings",
      image: `${garden_view}`,
    },
    {
      year: "2012",
      title: "Green View",
      location: "Science City",
      type: "Residential",
      alt: "",
      image: `${greenview}`,
    },
    {
      year: "2011",
      title: "City Square",
      location: "Science City",
      type: "Commercial",
      alt: "Shilp City Square Mixed-Use Development",
      image: `${CitySquare}`,
    },
  ],

  [
    {
      year: "2011",
      title: "Green City",
      location: "Science City",
      type: "Residential",
      alt: "Green City Eco-Friendly Housing Project",
      image: `${greencity}`,
    },
    {
      year: "2011",
      title: "Shilp Sapphire",
      location: "Thaltej",
      type: "Residential",
      alt: "Sapphire Commercial Complex Building",
      image: `${sapphire}`,
    },
    {
      year: "2010",
      title: "Parkview Green",
      location: "Science City",
      type: "Residential",
      alt: "Parkview Green Residential Apartments",
      image: `${park_view}`,
    },

  ],

  [
    {
      year: "2010",
      title: "Shilp Aaron",
      location: "Bopal",
      type: "Commercial",
      alt: "Aaron Residential Tower with Amenities",
      image: `${aaron}`,
    },
    {
      year: "2009",
      title: "Shilp Saral",
      location: "Bopal",
      type: "Residential",
      alt: "Saral Residential Complex Overview",
      image: `${saral}`,
    },
    {
      year: "2009",
      title: "Silver Nest",
      location: "Gota",
      type: "Residential",
      alt: "Silver Nest Modern Residential Housing",
      image: `${silver_nest}`,
    },
  ],

  [
    {
      year: "2009",
      title: "HCG Hospital",
      location: "Science City",
      type: "Commercial",
      alt: "Exterior View of HCG Hospital",
      image: `${HCGHOSPITAL}`,
    },
    {
      year: "2008",
      title: "Shilp 3",
      location: "Science City",
      type: "Commercial",
      alt: "Shilp Building Exterior Perspective",
      image: `${Shilp3}`,
    },
    {
      year: "2008",
      title: "Shilp Square B",
      location: "Drive in Road",
      type: "Commercial",
      alt: "Shilp Square Commercial Building Exterior",
      image: `${SHILPSQUAREB}`,
    },
  ],

  [
    {
      year: "2008",
      title: "Shilp Annexe",
      location: "New CG Road ChandKheda",
      type: "Commercial",
      alt: "Shilp Annexe Commercial Property",
      image: `${SHILPANNEXE}`,
    },
    {
      year: "2007",
      title: "Shilp Square A",
      location: "Drive in Road",
      type: "Commercial",
      alt: "Shilp Square building exterior image",
      image: `${ShilpSquareA}`,
    },
    {
      year: "2006",
      title: "Sashvat",
      location: "Memnagar",
      type: "Commercial",
      alt: "Shilp Sashvat Residential Apartment Complex",
      image: `${Sashvat}`,
    },
  ],

  [
    {
      year: "2005",
      title: "Shaligram",
      location: "Vastrapur",
      type: "Residential",
      alt: "",
      image: `${Shaligram}`,
    },
    {
      year: "2005",
      title: "Shilp Corner",
      location: "Gurukul Road",
      type: "Commercial",
      alt: "Corner View of Mixed-Use Commercial and Residential Building",
      image: `${corner}`,
    },
    {
      year: "2004",
      title: "Shilp Complex",
      location: "Gurukul Road",
      type: "Commercial",
      alt: "Shilp Complex Real Estate Project",
      image: `${ShilpComplex}`,
    },

  ],

  [
    {
      year: "2004",
      title: "Shilp Arcade",
      location: "Jodhpur Cross Road",
      type: "Commercial",
      alt: "Shilp Arcade Commercial Retail Space",
      image: `${ShilpArcade}`,
    },
  ],
];

const ProjectTree = () => {
  const renderDesktopItem = (item: any) => {
    if (item.image) {
      return (
        <div className="hidden lg:flex items-center justify-between p-5 lg:w-[250px] xl:w-[290px] h-[150px] bg-white transition-all duration-300 hover:shadow-lg rounded-lg">
          <div className="flex flex-col items-start space-y-2 w-[70%]">
            {/* Year Badge */}
            <div className="border rounded-[20px] py-1 px-4 flex items-center gap-2 w-[100px] h-[30px] text-center justify-center">
              <GoDotFill />
              <span className="w-full h-full flex items-center justify-center">{item.year}</span>
            </div>

            {/* Title */}
            <div className="w-full h-[24px] flex items-center">
              <h2 className="text-sm xl:text-base text-left truncate">{item.title}</h2>
            </div>

            {/* Location */}
            <div className="w-full h-[24px] flex items-center">
              <span className="text-sm text-gray-500 text-left truncate">{item.location}</span>
            </div>

            {/* Type */}
            <div className="w-full h-[24px] flex items-center">
              <span className="text-sm truncate">{item.type}</span>
            </div>
          </div>

          {/* Image */}
          <div className="w-[70px] h-[70px] flex-shrink-0">
            <img src={item.image} loading="lazy" className="w-full h-full border rounded-full object-cover" alt="" />
          </div>
        </div>
      );
    }
    return null;
  };


  const renderMobileTimelineItem = (item: any) => (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot
          style={{ borderRadius: "4px", width: "10px", height: "10px" }}
        />
        <div className="w-10 border-top absolute" />
        <TimelineConnector className="timeline-connector" />
      </TimelineSeparator>
      <TimelineContent>
        <div className="bg-white transition-all duration-300 hover:shadow-lg  rounded-lg p-4 mb-4">
          <div className="flex items-center justify-between">
            <div className="flex flex-col space-y-2">
              <span className="inline-block border rounded-[20px] px-4 py-1 text-sm w-[70px]">
                {item.year}
              </span>
              <h2 className="text-lg font-medium">{item.title}</h2>
              <span className="text-sm text-gray-500">{item.location}</span>
              <span className="text-sm">{item.type}</span>
            </div>
            <img
              src={item.image}
              className="w-16 h-16 border rounded-full object-cover"
              alt={item.title}
            />
          </div>
        </div>
      </TimelineContent>
    </TimelineItem>
  );

  return (
    <section className="project-tree overflow-hidden ">
      <BannerImg image={Images.projectTreeBanner} />
      <div className="container-base top-spacing space-y-6 " style={{ marginLeft: "20px" }}>
        <Title text="Explore" />
        <h2 className="text-3xl">Our Project Tree</h2>
      </div>

      <div className="bg-[#f6f6f6] hidden lg:block top-spacing">
        <div className="mapWrapper pb-20 ">
          {projectData.map((row, rowIndex) => (
            <div key={rowIndex} className="row">
              {row.map((item, itemIndex) => (
                <div key={itemIndex} className="itemBar">
                  <div className="itemInfo">{renderDesktopItem(item)}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="lg:hidden block px-4 py-8 bg-[#f6f6f6] top-spacing">
        <Timeline>
          {projectData.flat().map((item) => renderMobileTimelineItem(item))}
        </Timeline>
      </div>
    </section>
  );
};

export default ProjectTree;
