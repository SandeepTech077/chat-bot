import { commerical, plots, residential } from "../../constants/projectTypes";
import Images from "../Images";
import { NorthSky } from "../Images/shilpProjects/northSky";
import { Residency } from "../Images/shilpProjects/residency";
import { Serene } from "../Images/shilpProjects/serene";
import { ShilpOne } from "../Images/shilpProjects/Shilp One";
import { BusinessGateway } from "../Images/shilpProjects/ShilpBusinessGateway";
import { ShilpCentrica } from "../Images/shilpProjects/shilpCentrica";
import { SkyLine } from "../Images/shilpProjects/skyLine";
import { Paradise } from "../Images/shilpProjects/Shilp Paradise";
import { Revanta } from "../Images/shilpProjects/Shilp Revanta";
import { Ananta } from "../Images/shilpProjects/Shilp Ananta";
import { TheRoots } from "../Images/shilpProjects/Shilp-the-roots";
import { IndustrialPark } from "../Images/shilpProjects/Shilp-industrial-park";
import { ProjectDataTypes } from "../../types/projectDataTypes.types";
import { TwinTower } from "../Images/shilpProjects/twin_towers";
import { Incubation } from "../Images/shilpProjects/incubation_centre";
import { BopalAmbli } from "../Images/shilpProjects/bopal_ambli";
import { VaishnoDevi } from "../Images/shilpProjects/Upcoming";
import Icons from "../Icons";

export const projectData: ProjectDataTypes[] = [
  // Commerical ==============================================================
  {
    id: 1,
    category: commerical,
    title: "Commercial",
    explandable_back_img: [
      ShilpCentrica.centricaBanner,
      ShilpCentrica.TwinTower,
      BusinessGateway.bgBanner,
      ShilpOne.oneBanner,
    ],
    full_title: "Commerical Projects",
    description1:
      "We make strategies, design & development to create valuable products",
    description2:
      "We ensure that your place of work gets the best out of you. From conception to creation, our locations and structures offer efficient workspaces that ensure productivity and convenience all at the same time.",
    projects: [
      // Shilp Centerica
      {
        id: 1,
        no: "01",
        card_img: `${ShilpCentrica.cardImg}`,
        alt: "",
        title: "Shilp Centrica",
        url: "shilp-centrica",
        is_completed: false,
        complete_status: "65",
        isActive: true,
        address: {
          mini_address: {
            line1: "DTA, Gift City",
            line2: "Gandhinagar",
            sq_ft: "1326-3538",
          },
          full_address:
            "Plot 35B, Block 35, GIFT City, Opp. GIFT Club Gandhinagar - 382355",
          googleMap:
            '<iframe class="map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7235.745581366771!2d72.68825219579355!3d23.156343618123792!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e813f2b727dc9%3A0xe203bf1b4fcc8730!2sShilp%20Centrica%20Commercial%20Giftcity!5e0!3m2!1sen!2sin!4v1730723249604!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
        },
        video: "https://www.youtube.com/embed/mx2jNf4MFcY?si=fits1fqyra9C69Hs",
        tag: null,
        size: null,
        brochure: `${ShilpCentrica.centrica_brochure}`,
        parent_category: commerical,
        reg_no: "PR/GJ/GANDHINAGAR/GANDHINAGAR/Others/CAA12608/081123",
        details: {
          about: {
            img1: `${ShilpCentrica.gallery2}`,
            about_desc:
              "<p>Shilp Centrica, nestled in the heart of GIFT City, Gandhinagar, is set to become a landmark commercial building in India’s first fully operational smart city, redefining the standards of contemporary business infrastructure. </p><p>With a two-road corner view, soaring 29 stories high, it boasts a unique feature on the 30th floor—a business center, terrace garden, cafeteria, open dining, and a gym, offering an unparalleled work environment. Proximity to the metro station adds to its accessibility.</p><p>With office sizes starting at 1800 sq ft, the building is designed for efficient space utilization, featuring a double-height lounge, 10 automatic elevators, a stunning foyer, awe-inspiring elevation, and contemporary square and rectangular offices, reflecting new-age architecture. Shilp Centrica combines modern functionality with aesthetic appeal, making it a prime choice for Business seeking an innovative and dynamic workspace.</p>",
          },
          floor_plans: [
            {
              id: 1,
              name: "Ground Floor",
              alt: "Ground floor layout showcasing the space and design organization.",
              image: `${ShilpCentrica.ground_floor}`,
            },
            {
              id: 2,
              name: "First Floor",
              alt: "First floor plan highlighting the space arrangement.",
              image: `${ShilpCentrica.first_floor}`,
            },
            {
              id: 3,
              name: "Second Floor",
              alt: "Floor plan detail layout for the Second floor of building.  ",
              image: `${ShilpCentrica.second_floor}`,
            },
            {
              id: 4,
              name: "Third Floor",
              alt: "Floor plan detail layout for the third floor of building. ",
              image: `${ShilpCentrica.third_floor}`,
            },
            {
              id: 5,
              name: "Fourth Floor",
              alt: "Floor plan detail layout for the fourth floor of building.",
              image: `${ShilpCentrica.fourth_floor}`,
            },
            {
              id: 6,
              name: "Fifth Floor",
              alt: "Floor plan detail layout for the fifthfloor of building.",
              image: `${ShilpCentrica.fifth_floor}`,
            },
            {
              id: 7,
              name: "Sixth Floor",
              alt: "Floor plan detail layout for the sixth floor of building.",
              image: `${ShilpCentrica.six_floor}`,
            },
            {
              id: 8,
              name: "Seven to Seventeen Floor",
              alt: "Floor plan detail layout for the seven to seventeen floor of building.",
              image: `${ShilpCentrica.seven_to_seventeen_floor}`,
            },
            {
              id: 9,
              name: "Eighteen Floor",
              alt: "Floor plan detail layout for the Eighteenth floor of building.",
              image: `${ShilpCentrica.eighteen_floor}`,
            },
            {
              id: 10,
              name: "Nineteen Floor",
              alt: "Floor plan showcasing the 19th floor of the building.",
              image: `${ShilpCentrica.nineteen_floor}`,
            },
            {
              id: 11,
              name: "Twenty to Thirty Floor",
              alt: "Floor plan of the building's twenty to thirty floors.",
              image: `${ShilpCentrica.twenty_to_thirty}`,
            },
            {
              id: 12,
              name: "Terrace Floor",
              alt: "Terrace floor plan with defined spaces and design details.",
              image: `${ShilpCentrica.terrace}`,
            },
          ],

          banner_imgs: [ShilpCentrica.centricaBanner2],
          mobile_banner: [ShilpCentrica.mobileBanner],
          bannerAlt:
            "Shilp Centrica banner showcasing the commercial tower's modern architecture.",
          mobileBannerAlt:
            "Shilp Centrica mobile banner optimized for smaller screens, displaying tower facade.",

          // mobile_imgs:[TwinTower.mobileBanner],

          gallery_imgs: [
            {
              src: ShilpCentrica.gallery1,
              alt: "Modern facade of Shilp Centrica commercial tower exterior view.",
            },
            {
              src: ShilpCentrica.gallery2,
              alt: "Interior view showcasing the double-height lounge and reception area.",
            },
            {
              src: ShilpCentrica.gallery3,
              alt: "Office space at Shilp Centrica highlighting layout and design.",
            },
            {
              src: ShilpCentrica.gallery4,
              alt: "Shilp Centrica lift lobby with modern aesthetics and lighting.",
            },
            {
              src: ShilpCentrica.gallery5,
              alt: "Top-floor cafeteria and open dining area at Shilp Centrica.",
            },
          ],

          amenities: [
            { name: "Elevators", alt: "", image: Icons.lift },
            { name: "Parking", alt: "Parking Area Icon", image: Icons.parking },
            {
              name: "Gym",
              alt: "Gym and Fitness Center Icon",
              image: Icons.gym,
            },
            { name: `Cafe Area`, alt: "", image: Icons.cafe },
            { name: "Business Center", alt: "", image: Icons.hall },
            ,
          ],
          project_updates: {
            month: "July",
            year: 2025,
            images: [
              {
                src: `${ShilpCentrica.feb1}`,
                alt: "Shilp Centrica May 2025 Progress Image 1",
              },
              {
                src: `${ShilpCentrica.feb2}`,
                alt: "Shilp Centrica May 2025 Construction Image 2",
              },
              {
                src: `${ShilpCentrica.feb3}`,
                alt: "Shilp Centrica May 2025 Site Update Image 3",
              },
            ],
          },
        },
      },
      // Shilp Twin Towers
      {
        id: 2,
        no: "02",
        card_img: `${TwinTower.twinCard}`,
        alt: "",
        title: "Shilp Twin Towers",
        url: "shilp-twin-towers",
        is_completed: false,
        complete_status: "5",
        isActive: true,
        address: {
          mini_address: {
            line1: "SEZ, Gift City",
            line2: "Gandhinagar",
            sq_ft: "1725-7835",
          },
          full_address:
            "5M6M+3Q Gujarat International Finance Tec-City, Gujarat",
          googleMap:
            '<iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3668.2747589032565!2d72.684412!3d23.160169999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8100190968c3%3A0xafc3d395f181bed2!2sShilp%20Twin%20Tower!5e0!3m2!1sen!2sin!4v1737536226715!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
        },
        video: "https://www.youtube.com/embed/IlV5wyLBfOQ",

        tag: null,
        size: null,
        brochure: `${TwinTower.twin_tower_brochure}`,
        parent_category: commerical,
        reg_no: "PR/GJ/AHMEDABAD/AHMEDABAD CITY/AUDA/MAA08006/050221",
        details: {
          about: {
            img1: `${TwinTower.twinAbout}`,
            alt: "Twin layout about image showing a modern design.",
            about_desc:
              "<p>Strategically located within the Special Economic Zone (SEZ) at 15 E & D Building, GIFT City built on floor plans ranging from 1,725 sq. ft. to 7,835 sq. ft. Shilp Twin Towers stands as a beacon of modern business innovation. This iconic structure offers collaborative coworking spaces designed to inspire productivity and foster creativity. With 28 meticulously designed floors, Shilp Twin Towers provides the biggest floor plans to suit the needs of businesses across industries.Surrounded by scenic greenery and thoughtfully located near Udyan Path, the Twin Towers offer a refreshing and vibrant work environment.</p><p> The building’s proximity to the SEZ of GIFT City ensures seamless connectivity and access to world-class facilities, making it an ideal destination for ambitious enterprises.Designed to support growth, collaboration, and innovation, Shilp Twin Towers blends functionality with aesthetic appeal. From its thoughtfully planned interiors to its focus on fostering community, this development promises to elevate the standards of modern workplaces in India’s first smart city.</p>",
          },
          floor_plans: [
            {
              id: 1,
              name: "Lower Terrace",
              alt: "Lower terrace showing layout and space distribution.",
              image: `${TwinTower.lowerTerrace}`,
            },
            {
              id: 2,
              name: "Ground Floor",
              alt: "Layout of the ground floor with space distribution.",
              image: `${TwinTower.groundFloor}`,
            },
            {
              id: 3,
              name: "First Floor",
              alt: "Floor plan for the first floor showcasing room distribution.",
              image: `${TwinTower.firstFloor}`,
            },
            {
              id: 4,
              name: "Second Floor",
              alt: "Detailed floor plan for the second floor layout.",
              image: `${TwinTower.secondFloor}`,
            },
            {
              id: 5,
              name: "Third Floor",
              alt: "Detailed floor plan for the third floor layout.",
              image: `${TwinTower.thirdFloor}`,
            },
            {
              id: 6,
              name: "Fourth Floor",
              alt: "Detailed floor plan for the fourth floor layout.",
              image: `${TwinTower.fourthFloor}`,
            },
            {
              id: 7,
              name: "Fifth & Sixth Floor",
              alt: "Building floor plans from the 5th and 6th floors layout.",
              image: `${TwinTower.fifthSixthFloor}`,
            },
            {
              id: 8,
              name: "Seven Floor",
              alt: "Detailed floor plan for the 7th floor layout.",
              image: `${TwinTower.sevenFloor}`,
            },
            {
              id: 9,
              name: "Eight To Eleven Floor",
              alt: "Building floor plans from the 8th to 11th floors layout.",
              image: `${TwinTower.eightToElevenFloor}`,
            },
            {
              id: 10,
              name: "Thirteen To Sixteen Floor",
              alt: "Building floor plans from the 13th to 16th floors layout.",
              image: `${TwinTower.thirteenToSixteenFloor}`,
            },
            {
              id: 11,
              name: "Seventeen Floor",
              alt: "Detailed floor plan for the 17th floor layout.",
              image: `${TwinTower.seventeenFloor}`,
            },
            {
              id: 12,
              name: "Eighteen Floor",
              alt: "18th floor plan layout with detailed room distribution.",
              image: `${TwinTower.eighteenFloor}`,
            },
            {
              id: 13,
              name: "Nineteen Floor",
              alt: "19th floor plan layout showing space arrangement.",
              image: `${TwinTower.nineteenFloor}`,
            },
            {
              id: 14,
              name: "Twenty To TwentyEight Floor",
              alt: "Building floor plans from the 20th to 28th floors layout.",
              image: `${TwinTower.twentyToTwentyEightFloor}`,
            },
            {
              id: 15,
              name: "Site Context",
              alt: "Site context plan providing an overview of the surrounding area.",
              image: `${TwinTower.siteContext}`,
            },
            {
              id: 16,
              name: "Site Plans",
              alt: "Overview of site plans, with floor plans key structures and layouts.",
              image: `${TwinTower.sitePlans}`,
            },
          ],

          banner_imgs: [TwinTower.twinBanner],
          mobile_banner: [TwinTower.mobileBanner],
          bannerAlt: "Another version of mobile banner for responsive design.",
          mobileBannerAlt:
            "Twin Tower mobile banner featuring a compact view of the twin towers for mobile devices.",

          gallery_imgs: [
            {
              src: TwinTower.twin_gallery_one,
              alt: "Twin Tower exterior view showing modern design and glass facade.",
            },
            {
              src: TwinTower.twin_gallery_two,
              alt: "Wide angle shot of Shilp Twin Tower with surrounding greenery.",
            },
            {
              src: TwinTower.twin_gallery_three,
              alt: "Interior lobby area of Twin Tower with stylish seating.",
            },
            {
              src: TwinTower.twin_gallery_four,
              alt: "Workspaces inside Shilp Twin Tower featuring large open areas.",
            },
            {
              src: TwinTower.twin_gallery_five,
              alt: "Night view of Twin Tower lit up with ambient lighting.",
            },
          ],

          amenities: [
            { name: "Elevators", alt: "", image: Icons.lift },
            { name: "Parking", alt: "Parking Area Icon", image: Icons.parking },
            {
              name: "Gym",
              alt: "Gym and Fitness Center Icon",
              image: Icons.gym,
            },
            { name: `Cafe Area`, alt: "", image: Icons.cafe },
            { name: "Business Center", alt: "", image: Icons.hall },
            ,
          ],
          project_updates: {
            month: "July",
            year: 2025,
            images: [
              {
                src: `${TwinTower.fab1}`,
                alt: "Twin Tower May 2025 Construction Image 1",
              },
              {
                src: `${TwinTower.fab2}`,
                alt: "Twin Tower May 2025 Development Progress Image 2",
              },
              {
                src: `${TwinTower.fab3}`,
                alt: "Twin Tower May 2025 Site Update Image 3",
              },
            ],
          },
        },
      },
      // Shilp Business Gateway
      {
        id: 3,
        no: "03",
        card_img: `${BusinessGateway.bgCard}`,
        alt: "",
        title: "Shilp Business Gateway",
        url: "shilp-bussiness-gateway",
        is_completed: false,
        complete_status: "70",
        isActive: true,
        address: {
          mini_address: {
            line1: "Vaishnodevi, S.G Highway",
            line2: "Ahmedabad",
            sq_ft: "2303-5082",
          },
          full_address: "4GGR+94G, Ahmedabad, Gujarat 382481, India",
          googleMap:
            '<iframe class="map"  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3669.211370777344!2d72.540325!3d23.125948!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e835c3a28003b%3A0x4ab60271c16cc954!2sSHILP%20BUSINESS%20GATEWAY!5e0!3m2!1sen!2sus!4v1730726393838!5m2!1sen!2sus" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
        },
        video: null,
        tag: null,
        size: null,
        brochure: `${BusinessGateway.business_gateway_brochure}`,
        parent_category: commerical,
        reg_no:
          "PR/GJ/AHMEDABAD/AHMEDABAD CITY/Ahmedabad Municipal Corporation/CN63AA09963/A1C/030123",
        details: {
          about: {
            img1: `${BusinessGateway.bgabout}`,
            about_desc:
              "<p>Rising from SG Highway the commercial hub of Ahmedabad, Shilp Business Gateaway is an impressive first-in-class development forming a powerful footprint for your Business. This prime office opportunity features a double-height lobby entrance and plentiful space for productivity and respite for this premium locale.</p><p>Shilp Business Gateway gives your business this unique advantage of being at a prime place well connected and easy to reach with the metro just 10 mins away. We have taken into account the corporate lifestyle and included amenities like a director’s lounge and excess to their personal lift, recreational area for your staff to relax and a cafetaria. Shilp Business Gateway is set to become a landmark of SG Highway and take your business to the next orbit!</p>",
          },
          floor_plans: [
            {
              id: 1,
              name: "Ground Floor",
              alt: "Building plan showing an overviw of layout.",
              image: `${BusinessGateway.ground}`,
            },
            {
              id: 2,
              name: "First Floor",
              alt: "Design overview for the first floor of the building.",
              image: `${BusinessGateway.first}`,
            },
            {
              id: 3,
              name: "Second And Third Floor",
              alt: "Second and third floors plan with room arrangements layout.",
              image: `${BusinessGateway.second_third}`,
            },
            {
              id: 4,
              name: "Fourth To Eleventh Floor",
              alt: "Floor plan showing 4th to 11th floors with detailed layout.",
              image: `${BusinessGateway.fourth_to_eleventh}`,
            },
            {
              id: 5,
              name: "Tweflth Floor",
              alt: "Twelfth floor layout plan with room distribution.",
              image: `${BusinessGateway.twelfth}`,
            },
            {
              id: 6,
              name: "Corporate Floor",
              alt: "Corporate floor plan highlighting services and features.",
              image: `${BusinessGateway.corporate}`,
            },
          ],

          banner_imgs: [BusinessGateway.bgBanner],
          mobile_banner: [BusinessGateway.mobileBanner],
          bannerAlt:
            "Business Gateway banner showcasing the commercial complex and modern facade.",
          mobileBannerAlt:
            "Business Gateway mobile banner optimized for smaller screens, highlighting the building front.",

          gallery_imgs: [
            {
              src: BusinessGateway.gallery1,
              alt: "Front view of Shilp Business Gateway commercial complex.",
            },
            {
              src: BusinessGateway.gallery2,
              alt: "Spacious lobby area inside Business Gateway with modern design.",
            },
            {
              src: BusinessGateway.gallery3,
              alt: "Wide-angle exterior image of Business Gateway during daytime.",
            },
            {
              src: BusinessGateway.gallery1,
              alt: "Front view of Shilp Business Gateway commercial complex.",
            },
            {
              src: BusinessGateway.gallery2,
              alt: "Spacious lobby area inside Business Gateway with modern design.",
            },
          ],

          amenities: [
            { name: "Cafe", alt: "", image: Icons.hall },
            { name: "Lounge", alt: "", image: Icons.lounge },
            {
              name: "Indoor Games",
              alt: "Library room amenity icon",
              image: Icons.indoorGames,
            },
          ],
          project_updates: {
            month: "July",
            year: 2025,
            images: [
              {
                src: `${BusinessGateway.site1}`,
                alt: "Business Gateway May 2025 Construction Image 1",
              },
              {
                src: `${BusinessGateway.site2}`,
                alt: "Business Gateway May 2025 Development Progress Image 2",
              },
              {
                src: `${BusinessGateway.site3}`,
                alt: "Business Gateway May 2025 Site Overview Image 3",
              },
            ],
          },
        },
      },

      // Shilp Incubation Centre
      {
        id: 4,
        no: "04",
        card_img: `${Incubation.icCard}`,
        alt: "",
        title: "Shilp Incubation Centre",
        url: "shilp-incubation-centre",
        is_completed: true,
        complete_status: "100",
        isActive: true,
        address: {
          mini_address: {
            line1: "Gift City",
            // line2: "Ahmedabad",
            sq_ft: "4 seats onward",
          },
          full_address:
            "5M6G+2Q Gujarat International Finance Gift-City, Gujarat",
          googleMap:
            '<iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3668.2784343397543!2d72.67690739999999!3d23.1600358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8130b4763a19%3A0x1e74a2a775dbd26a!2sShilp%20Incubation%20Centre%20SEZ-IFSC!5e0!3m2!1sen!2sin!4v1737608481150!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
        },
        video: "https://www.youtube.com/embed/ahOlw5qpklA?si=JDf8vp_ydetfK2qi",
        tag: "Ready To Move",
        brochure: `${Incubation.IncubationPdf}`,
        size: null,
        parent_category: commerical,
        reg_no: null,
        details: {
          about: {
            img1: `${Incubation.icAbout}`,
            about_desc:
              "<p>The Shilp Incubation Centre in GIFT City, Gandhinagar, is a state-of-the-art hub designed to empower startups. Located in India’s first operational smart city, it offers world-class infrastructure, including modern office spaces, high-speed internet, and a collaborative work environment. </p><p>Startups gain access to mentorship, funding opportunities, and invaluable networking with investors and industry leaders.Entrepreneurs can also tap into government schemes and initiatives available within GIFT City, helping them scale their businesses effectively. With its strategic location and supportive ecosystem, the Shilp Incubation Centre serves as an ideal platform for startups to thrive in India’s booming entrepreneurial landscape. It is a catalyst for innovation and success, fostering growth in the nation’s rapidly evolving business ecosystem.</p>",
          },
          floor_plans: [],
          banner_imgs: [Incubation.icBanner],
          mobile_banner: [Incubation?.mobileBanner],
          bannerAlt:
            "Incubation Center banner showcasing innovative workspace architecture.",
          mobileBannerAlt:
            "Incubation Center mobile banner highlighting modern design for smaller screens.",

          gallery_imgs: [
            {
              src: Incubation.incubationGallery1,
              alt: "Incubation Gallery Image 1",
            },
            {
              src: Incubation.incubationGallery2,
              alt: "Project image 2 from the gallery showcasing building details.",
            },
            {
              src: Incubation.incubationGallery3,
              alt: "Incubation Gallery Image 3",
            },
            {
              src: Incubation.incubationGallery4,
              alt: "Incubation Gallery Image 4",
            },
            {
              src: Incubation.incubationGallery1,
              alt: "Incubation Gallery Image 5",
            },
          ],

          amenities: [
            {
              name: "Reception",
              alt: "Reception Desk Service Icon",
              image: Icons.reception,
            }, //
            { name: "Full Height Cabins", alt: "", image: Icons.hall },
            { name: "Lounge Sitting", alt: "", image: Icons.lounge },
            { name: "Access Control Entry", alt: "", image: Icons.sec_pass }, //
            {
              name: "Game Area",
              alt: "Library room amenity icon",
              image: Icons.indoorGames,
            },
            { name: "Booth Seating", alt: "", image: Icons.tableSeat },
            {
              name: "Meeting Room",
              alt: "Meeting Room Icon",
              image: Icons.meeting,
            },
            { name: "Cafeteria", alt: "", image: Icons.cafe },
          ],
          project_updates: {
            month: "July",
            year: 2025,
            images: [
              {
                src: `${Incubation.jan1}`,
                alt: "Incubation Project January 2025 Progress Image 1",
              },
              {
                src: `${Incubation.jan2}`,
                alt: "Incubation Project January 2025 Site Development Image 2",
              },
              {
                src: `${Incubation.jan3}`,
                alt: "Incubation Project January 2025 Construction Update Image 3",
              },
            ],
          },
        },
      },
      // Deactivated
      // Coming soon ( Bopal Ambli)
      {
        id: 5,
        no: "05",
        card_img: `${BopalAmbli.baCard}`,
        alt: "Shilp Sacred project thumbnail image",
        title: "Shilp Sacred",
        url: "shilp-sacred",
        is_completed: false,
        complete_status: "10",
        isActive: true,
        address: {
          mini_address: {
            line1: "Iskon Ambli",
            line2: "Ahmedabad",
            sq_ft: "1500-2000",
          },
          full_address:
            "NEAR AAMBLI BRTS STATION, , AAMBLI ROAD,VILLAGE: AAMBLI, TALUKA AND DISTRICT: AHMEDABAD., Daskroi,Ahmedabad, GUJARAT-380058",
          googleMap: `<iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.6950222597345!2d72.48189!3d23.0257445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b986d401bff%3A0xd0e612ab883cf86!2sShilp%20Sacred!5e0!3m2!1sen!2sin!4v1721225899999!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
        },
        video: "https://www.youtube.com/embed/M8rg8wjYoN8",
        tag: null,
        size: null,
        brochure: `${BopalAmbli.ambliBroucher}`,
        parent_category: commerical,
        reg_no:
          "PR/GJ/AHMEDABAD/DASKROI/Ahmedabad Municipal Corporation/CAA15471/070725/310530WEBSITE: HTTPS://GUJRERA.GUJARAT.GOV.IN/",
        details: {
          about: {
            img1: `${BopalAmbli.AboutUs}`,
            about_desc:
              "<p>Shilp Sacred is another crowned jewel, a commercial project on Ambli Road, Ahmedabad’s dynamic business hub. The G+11 project has thoughtfully planned workspaces with offices starting at 1476 sq ft and spacious showrooms from 2600 sq ft. What makes it more special is the modern architecture, with a sleek glass façade and an open-to-sky foyer. The floor plans have enough ease and flexibility to adapt to your needs, making the project ideal for any business to succeed.</p><p>Startups gain access to mentorship, funding opportunities, and invaluable networking with investors and industry leaders. Entrepreneurs can also tap into government schemes and initiatives available within GIFT City, helping them scale their businesses effectively. With its strategic location and supportive ecosystem, the Shilp Incubation Centre serves as an ideal platform for startups to thrive in India’s booming entrepreneurial landscape. It is a catalyst for innovation and success, fostering growth in the nation’s rapidly evolving business ecosystem.</p>",
          },
          floor_plans: [
            {
              id: 1,
              name: "Ground Floor",
              alt: "Ground floor layout showing entrance, lobby, and key access areas.",
              image: `${BopalAmbli.GoundFloor}`,
            },
            {
              id: 2,
              name: "First Floor",
              alt: "First floor layout including common areas and office spaces.",
              image: `${BopalAmbli.FirstFloor}`,
            },
            {
              id: 3,
              name: "Second Floor",
              alt: "Second floor layout featuring meeting rooms and corridors.",
              image: `${BopalAmbli.SecondFloor}`,
            },
            {
              id: 4,
              name: "Third Floor",
              alt: "Third floor layout with private cabins and breakout zones.",
              image: `${BopalAmbli.ThirdFloor}`,
            },
            {
              id: 5,
              name: "Fourth Floor",
              alt: "Fourth floor layout with additional office and lounge areas.",
              image: `${BopalAmbli.FourthFloor}`,
            },
            {
              id: 6,
              name: "Fifth Floor",
              alt: "Fifth floor layout showing extended workstations and restrooms.",
              image: `${BopalAmbli.FifthFloor}`,
            },
            {
              id: 7,
              name: "Sixth Floor",
              alt: "Sixth floor plan including cafeteria and recreation rooms.",
              image: `${BopalAmbli.SixthFloor}`,
            },
            {
              id: 8,
              name: "Seventh Floor",
              alt: "Seventh floor layout showing open areas and collaborative zones.",
              image: `${BopalAmbli.SeventhFloor}`,
            },
            {
              id: 9,
              name: "Eighth Floor",
              alt: "Eighth floor layout with executive cabins and support areas.",
              image: `${BopalAmbli.EighthFloor}`,
            },
            {
              id: 10,
              name: "Ninth Floor",
              alt: "Ninth floor layout with advanced amenities and access control.",
              image: `${BopalAmbli.NinthFloor}`,
            },
            {
              id: 11,
              name: "Tenth Floor",
              alt: "Tenth floor layout with rooftop access and service areas.",
              image: `${BopalAmbli.TenthFloor}`,
            },
            {
              id: 12,
              name: "Tenth Floor",
              alt: "Eleventh floor layout with rooftop access and service areas.",
              image: `${BopalAmbli.EleventhFloor}`,
            },
          ],
          banner_imgs: [BopalAmbli.banner],
          moile_banner: [BopalAmbli.mobileBanner],
          bannerAlt: "Shilp Sacred banner image",
          mobileBannerAlt: "Shilp Sacred mobile banner image",
          gallery_imgs: [
            {
              src: BopalAmbli.gallery1,
              alt: "Shilp Sacred gallery image 1",
            },
            {
              src: BopalAmbli.gallery2,
              alt: "Shilp Sacred gallery image 2",
            },
            {
              src: BopalAmbli.gallery3,
              alt: "Shilp Sacred gallery image 3",
            },
            {
              src: BopalAmbli.gallery4,
              alt: "Shilp Sacred gallery image 4",
            },
            {
              src: BopalAmbli.gallery5,
              alt: "Shilp Sacred gallery image 5",
            },
          ],
          amenities: [
            { name: "High-Speed Elevator", alt: "", image: Icons.lift },
            // { name: "Room Dimensions", alt: "", image: Icons.houseReal },

            {
              name: "sky Atrium",
              alt: "sky Atrium room amenity icon",
              image: Icons.layer,
            },
            {
              name: "Cafeteria",
              alt: "Cafeteria  amenity icon",
              image: Icons.cafe,
            },
          ],
          project_updates: {
            month: "July",
            year: 2025,
            images: [
              {
                src: `${BopalAmbli.project1}`,
                alt: "Shilp Sacred May 2025 Construction Image 1",
              },
              {
                src: `${BopalAmbli.project2}`,
                alt: "Shilp Sacred May 2025 Development Progress Image 2",
              },
              {
                src: `${BopalAmbli.project3}`,
                alt: "Shilp Sacred May 2025 Site Overview Image 3",
              },
            ],
          },
        },
      },

      // Shilp One
      {
        id: 6,
        no: "06",
        card_img: `${ShilpOne.card}`,
        alt: "",
        title: "Shilp One",
        url: "shilp-one",
        isActive: true,
        is_completed: true,
        complete_status: "100",
        address: {
          mini_address: {
            line1: "Shilaj Circle ",
            line2: "Ahmedabad",
            sq_ft: "1944-2594",
          },
          full_address:
            "3F3H+MR5, 502 shilp one, Khyati Circle, Thaltej - Shilaj Rd, Ahmedabad, Gujarat 380059, India",
          googleMap:
            '<iframe class="map"  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3671.1856874793566!2d72.47988!3d23.053653!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9d947d1d76ad%3A0x7ede7112c0ab44a5!2sSHILP%20ONE!5e0!3m2!1sen!2sus!4v1730727122899!5m2!1sen!2sus" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
        },
        video: null,
        size: null,
        tag: "Ready To Move",
        brochure: `${ShilpOne.oneBrochure}`,
        parent_category: commerical,
        reg_no: " PR/GJ/AHMEDABAD/AHMEDABAD CITY/AUDA/CAA07959/250121",
        details: {
          about: {
            img1: `${ShilpOne.about}`,
            about_desc:
              "<p>Shilp One, the word that describes your workspace. It is a building with an exclusive architecture that affirms that at Shilp we create architecture that becomes a landmark in itself. At Shilp One, visibility is designed to be part of the space you choose.</p><p>The building showcases a complete glass façade which not only enhances exterior beauty but also provides seamless visibility to your business at the forefront of a corner location on large roads. Shilp One has been thoughtfully designed to bring the utmost comfort, functionality and convenience to clients.</p>",
          },
          floor_plans: [
            {
              id: 1,
              name: "Ground Floor",
              alt: "Ground floor layout for the building design.",
              image: `${ShilpOne.ground}`,
            },
            {
              id: 2,
              name: "First To Third Floor",
              alt: "Floor plan for First to Third floor layout.",
              image: `${ShilpOne.first_third}`,
            },
            {
              id: 3,
              name: "Fourth Floor",
              alt: "Fourth floor plan layout showcasing room distribution.",
              image: `${ShilpOne.fourth}`,
            },
            {
              id: 4,
              name: "Fifth Floor",
              alt: "Detailed layout for the fifth floor of the building.",
              image: `${ShilpOne.fifth}`,
            },
            {
              id: 5,
              name: "Sixth Floor",
              alt: "Sixth floor layout plan showing detailed room structure.",
              image: `${ShilpOne.sixth}`,
            },
          ],
          banner_imgs: [ShilpOne.oneBanner],
          mobile_banner: [ShilpOne.mobileBanner],
          bannerAlt: "Mobile responsive promotional banner for the site.",
          mobileBannerAlt:
            "Shilp One mobile banner displaying tower facade optimized for mobile view.",

          gallery_imgs: [
            {
              src: ShilpOne.gallery1,
              alt: "Shilp One Gallery Image 1 - Front elevation view",
            },
            {
              src: ShilpOne.gallery2,
              alt: "Shilp One Gallery Image 2 - Side building perspective",
            },
            {
              src: ShilpOne.gallery3,
              alt: "Shilp One Gallery Image 3 - Main entrance and façade design",
            },
            {
              src: ShilpOne.gallery4,
              alt: "Shilp One Gallery Image 4 - Office interior or common area",
            },
            {
              src: ShilpOne.gallery1,
              alt: "Shilp One Gallery Image 5 - Reused front elevation view",
            },
          ],

          amenities: [
            { name: "Automatic Lifts", alt: "", image: Icons.lift },
            { name: "Parking", alt: "Parking Area Icon", image: Icons.parking },
            { name: "Water Supply", alt: "", image: Icons.water },
            {
              name: "Flooring",
              alt: "Flooring  Design Icon",
              image: Icons.flooring,
            },
            {
              name: "Electrification",
              alt: "Electrification system icon for infrastructure",
              image: Icons.electrification,
            },
          ],
          project_updates: {
            month: "July",
            year: 2025,
            images: [
              {
                src: `${ShilpOne.jan1}`,
                alt: "Shilp Aarambh January Event Image 1",
              },
              {
                src: `${ShilpOne.jan2}`,
                alt: "January event or announcement image #2 for promotional use.",
              },
              {
                src: `${ShilpOne.jan3}`,
                alt: "Shilp Aarambh January Event Image 3",
              },
            ],
          },
        },
      },
    ],
  },
  // Residental ==============================================================
  {
    id: 2,
    category: residential,
    title: "Residential",

    explandable_back_img: [
      SkyLine.groundview,
      NorthSky.banner,
      Serene.sereBanner,
      Residency.fullview,
      Revanta.sliderImage,
      Paradise.sliderImage,
      Ananta.silder1,
    ],
    full_title: "Residential Projects",
    description1: "Luxury living spaces designed for comfort and convenience.",
    description2:
      "Our residential projects offer modern amenities, beautiful landscapes, and a peaceful atmosphere for families to enjoy.",
    projects: [
      // Shilp Serene / 1
      {
        id: 1,
        no: "01",
        card_img: `${Serene.sereCard}`,
        alt: "Serene project card image showcasing elevation or key highlights.",

        title: "Shilp Serene",
        url: "shilp-serene",
        is_completed: false,
        complete_status: "85",
        isActive: true,
        address: {
          mini_address: {
            line1: "Shilaj Circle",
            line2: "Ahmedabad",
            sq_ft: "3 BHK ,1900",
          },
          full_address: "Shilaj, Ahmedabad, Gujarat 380059, India",
          googleMap:
            '<iframe class="map"  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3670.976230447635!2d72.482525!3d23.061333!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9d61f278b0d5%3A0xed5338f670b69eaf!2sShilp%20Serene!5e0!3m2!1sen!2sus!4v1730781678679!5m2!1sen!2sus" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
        },
        video: "https://www.youtube.com/embed/PJ5odc_bWlE?si=qufygoF3uobiNoNO",
        tag: "Sample House Ready",
        size: "3 BHK",
        brochure: `${Serene.serene_brochure}`,
        parent_category: residential,
        reg_no:
          "PR/GJ/AHMEDABAD/AHMEDABAD CITY/Ahmedabad Municipal Corporation/MAA10737/A1M/180924/310327",
        details: {
          about: {
            img1: `${Serene.sereAbt}`,
            about_desc:
              "<p>Welcome to a sophisticated, metropolitan lifestyle within a vibrant community on the cusp of an urban and serene backdrop. Shilp Serene is a collection of two and three bedroom stunning homes, offering an unparalleled combination of contemporary design, sought-after amenities and endless views.</p><p>Located right on the S.P ring road and just a little further to the Shilaj cross roads, Shilp Serene offers an unique locational advantage you. Here, convenient access to Sindhu Bhavan – the upcoming entertainment & shopping hub intermingle with newly developed neighborhood that have hospitals, malls, schools & other conveniences.</p>",
          },
          floor_plans: [
            {
              id: 1,
              name: "Site Plan",
              alt: "Overall site plan showing building layout and design.",
              image: `${Serene.floorImg1}`,
            },
            {
              id: 2,
              name: "First Floor",
              alt: "First floor plan layout terrace only ast floor showcasing design details.",
              image: `${Serene.floorImg2}`,
            },
            {
              id: 3,
              name: "Typical Floor Plan",
              alt: "Typical floor plan layout terrace only 2nd floor design details.",
              image: `${Serene.floorImg3}`,
            },
            {
              id: 4,
              name: "2 BHK Block A",
              alt: "2 BHK Unit Plan Block A room layout.",
              image: `${Serene.floorImg5}`,
            },
            {
              id: 5,
              name: "3 BHK UnitPlan Block A,C,D,J",
              alt: "3 BHK unit plan layout for Blocks A, C, D, J showcasing floor details.",
              image: `${Serene.floorImg4}`,
            },

            {
              id: 6,
              name: "3 BHK Block B",
              alt: "3 BHK Unit Plan Block B room layout.",
              image: `${Serene.floorImg6}`,
            },
            {
              id: 7,
              name: "3 BHK Block B, D, J",
              alt: "3 BHK unit layout for Blocks B, D, and J.",
              image: `${Serene.floorImg7}`,
            },
            {
              id: 8,
              name: "3 BHK Block E, I, F, G",
              alt: "3 BHK unit plan layout for Blocks E, I, F, G with room plan.",
              image: `${Serene.floorImg8}`,
            },
            {
              id: 9,
              name: "3 BHK Block F, H, B, C, D, J",
              alt: "3 BHK unit plan layout for Blocks F, H, B, C, D, J with room plan.",
              image: `${Serene.floorImg9}`,
            },
            {
              id: 10,
              name: "3 BHK Block K",
              alt: "3 BHK Unit Plan Block K room layout.",
              image: `${Serene.floorImg10}`,
            },
          ],
          banner_imgs: [Serene.sereBanner],
          mobile_banner: [Serene.mobileBanner],
          bannerAlt:
            "Serene project banner showcasing tranquil residential architecture and landscaped surroundings.",
          mobileBannerAlt:
            "Serene mobile banner highlighting the project’s facade, optimized for mobile view.",

          gallery_imgs: [
            {
              src: Serene.gallery1,
              alt: "Shilp Serene Gallery Image 1 - Main elevation view of the residential building",
            },
            {
              src: Serene.gallery2,
              alt: "Shilp Serene Gallery Image 2 - Side angle showcasing architectural design",
            },
            {
              src: Serene.gallery3,
              alt: "Shilp Serene Gallery Image 3 - Interior amenities and layout view",
            },
            {
              src: Serene.gallery4,
              alt: "Shilp Serene Gallery Image 4 - Balcony and facade details",
            },
            {
              src: Serene.gallery5,
              alt: "Shilp Serene Gallery Image 5 - Landscaped garden and community area view",
            },
          ],

          amenities: [
            {
              name: "Multipurpose Court",
              alt: "Tennis or Sports Court Icon",
              image: Icons.court,
            },
            {
              name: "Indoor Games",
              alt: "Library room amenity icon",
              image: Icons.indoorGames,
            },
            {
              name: "Gymnasium",
              alt: "Gym and Fitness Center Icon",
              image: Icons.gym,
            },
            {
              name: "Swimming Pool",
              alt: "Swimming pool icon",
              image: Icons.swim,
            },
            { name: "Sitting Area", alt: "", image: Icons.seating },
            { name: "Toddler's play area", alt: "", image: Icons.toddler },
            {
              name: "Children's play area",
              alt: "",
              image: Icons.childPlayArea,
            },
            {
              name: "lawn garden",
              alt: "Icon of a machine cleaning a garden",
              image: Icons.lawnGarden,
            },
            { name: "ev charging station", alt: "", image: Icons.charging },
            { name: "benquet hall", alt: "", image: Icons.hall },
            { name: "yoga room", alt: "", image: Icons.yoga },
            { name: "Stump Icon", alt: "", image: Icons.pitch },
            {
              name: "library room",
              alt: "Library room amenity icon",
              image: Icons.lib,
            },
            { name: "society office", alt: "", image: Icons.hall },
            { name: "changing & shower area", alt: "", image: Icons.door },
          ],
          project_updates: {
            month: "July",
            year: 2025,
            images: [
              {
                src: `${Serene.site1}`,
                alt: "Serene May 2025 Construction Progress Image 1",
              },
              {
                src: `${Serene.site2}`,
                alt: "Serene May 2025 Development Update Image 2",
              },
              {
                src: `${Serene.site3}`,
                alt: "Serene May 2025 Site View Image 3",
              },
            ],
          },
        },
      },
      // Shilp Residency / 2
      {
        id: 2,
        no: "02",
        card_img: `${Residency.card}`,
        alt: "",
        title: "Shilp Residency",
        url: "shilp-residency",
        is_completed: false,
        complete_status: "80",
        isActive: true,
        address: {
          mini_address: {
            line1: "Gota, SG Highway",
            line2: "Ahmedabad",
            sq_ft: "3-4 BHK 2050-3341",
          },
          full_address:
            "Shilp Residency, Near Olive greens, Gota, Ahmedabad, Gujarat 382481.",
          googleMap:
            '<iframe class="map"  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3669.818174106999!2d72.534856!3d23.103751!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e83a9cb707b49%3A0xad7700f272fd6f4f!2sShilp%20Residency%20(3%20%26%204%20BHK%20Apartment%20with%20Penthouse)!5e0!3m2!1sen!2sus!4v1730781432192!5m2!1sen!2sus" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
        },
        video: "https://www.youtube.com/embed/3yx0BzZqj2g?si=wlntYLAuvrlVCyMS",
        tag: "Sample House Ready",
        size: "3 - 4 BHK",
        brochure: `${Residency.residency_brochure}`,
        parent_category: residential,
        reg_no: "PR/GJ/AHMEDABAD/AHMEDABAD CITY/AUDA/MAA11096/291222",
        details: {
          about: {
            img1: `${Residency.about}`,
            about_desc:
              "<p>It’s more than smart design & Intricate architecture. It’s a sensitive addition of experiences & facilities to create a sophisticated neighbourhood, a perfect blend of intricate simplicity and contemporary comfort.</p><p>A Central Park surrounded by a classy architecture invites you into an open space that becomes the centre of a lifestyle of your choice. The plaza comprises all the facilities of your choice, from an open lawn to a well-appointed club and an area for the children to play, from cozy sit-outs to covered pool spaces to indulge in games- the Central Park is an invitation for you to create your own lifestyle.</p>",
          },
          floor_plans: [
            {
              id: 1,
              name: "Ground Floor Plan",
              alt: "Ground floor layout showcasing the overall space.",
              image: `${Residency.floorImg1}`,
            },
            {
              id: 2,
              name: "First Floor Plan",
              alt: "First floor plan layout  showing the building's space design.",
              image: `${Residency.floorImg2}`,
            },
            {
              id: 3,
              name: "Typical Floor",
              alt: "Layout design of a typical floor for the building.",
              image: `${Residency.floorImg4}`,
            },
            {
              id: 4,
              name: "3 BHK Unit Plan Block A, B, C, D",
              alt: "3 BHK unit plan for Blocks A, B, C, and D room layout.",
              image: `${Residency.floorImg6}`,
            },
            {
              id: 5,
              name: "3 BHK Unit Plan Block A, B, C, D",
              alt: "Alternative layout for 3 BHK units in Blocks A, B, C, and D.",
              image: `${Residency.floorImg7}`,
            },
            {
              id: 6,
              name: "3 BHK Unit Plan Block F, G, H, I",
              alt: "3 BHK Unit Plan for Blocks F to I 2nd floor room layout.",
              image: `${Residency.floorImg8}`,
            },
            {
              id: 7,
              name: "3 BHK Unit Plan Block F, G, H, I",
              alt: "Alternate 3 BHK unit plan layout for Blocks F, G, H, and I.",
              image: `${Residency.floorImg9}`,
            },
            {
              id: 8,
              name: "3 BHK Penthouse Block F, G, H, I",
              alt: "3 BHK penthouse layout for Blocks F to I room layout.",
              image: `${Residency.floorImg11}`,
            },
            {
              id: 9,
              name: "3 BHK Unit Plan Block A, B, C, D",
              alt: "Additional 3 BHK layout for Blocks A, B, C, and D.",
              image: `${Residency.floorImg12}`,
            },
            {
              id: 10,
              name: "4 BHK Block E, J",
              alt: "4 BHK unit plan for Blocks E and J with room distribution.",
              image: `${Residency.floorImg3}`,
            },
            {
              id: 11,
              name: "4 BHK Unit Plan Block E, J",
              alt: "4 BHK Penthouse plan Blocks E and J room layout.",
              image: `${Residency.floorImg10}`,
            },
            {
              id: 12,
              name: "PentHouse Floor",
              alt: "3 BHK Unit Plan Block B room layout.",
              image: `${Residency.floorImg5}`,
            },
          ],

          banner_imgs: [Residency.banner],
          mobile_banner: [Residency.mobileBanner],
          bannerAlt:
            "Residency project banner showcasing elegant residential towers and landscape design.",
          mobileBannerAlt:
            "Residency mobile banner featuring building elevation optimized for mobile devices.",

          gallery_imgs: [
            {
              src: Residency.gallery1,
              alt: "Shilp Residency Gallery Image 1 - Main elevation showcasing modern architecture",
            },
            {
              src: Residency.gallery2,
              alt: "Shilp Residency Gallery Image 2 - Central park and landscape view",
            },
            {
              src: Residency.gallery3,
              alt: "Shilp Residency Gallery Image 3 - Entrance view highlighting project layout",
            },
            {
              src: Residency.gallery4,
              alt: "Shilp Residency Gallery Image 4 - Reused elevation showcasing front façade",
            },
            {
              src: Residency.gallery5,
              alt: "Shilp Residency Gallery Image 5 - Reused central park view with outdoor area",
            },
          ],

          amenities: [
            { name: "Wall Finish", alt: "", image: Icons.hall },
            { name: "Kitchen", alt: "", image: Icons.kitchen },
            { name: "Doors", alt: "", image: Icons.door },
            { name: "Windows", alt: "", image: Icons.windows },
            {
              name: "Electrification",
              alt: "Electrification system icon for infrastructure",
              image: Icons.electrification,
            },
          ],
          project_updates: {
            month: "July",
            year: 2025,
            images: [
              {
                src: `${Residency.site1}`,
                alt: "Residency Project May 2025 Construction Image 1",
              },
              {
                src: `${Residency.site2}`,
                alt: "Residency Project May 2025 Progress Image 2",
              },
              {
                src: `${Residency.site3}`,
                alt: "Residency Project May 2025 Site View Image 3",
              },
            ],
          },
        },
      },
      // Shilp Skyline / 3
      {
        id: 3,
        no: "03",
        card_img: `${SkyLine.card}`,
        alt: "",
        title: "Shilp Skyline",
        url: "shilp-skyline",
        is_completed: false,
        complete_status: "35",
        isActive: true,
        address: {
          mini_address: {
            line1: "Adani Shantigram",
            line2: "Ahmedabad",
            sq_ft: "4 BHK - 3071",
          },
          full_address: "Adani, Shantigram, Ahmedabad, Gujarat 382421",
          googleMap:
            '<iframe class="map"  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3668.0452918592746!2d72.538591!3d23.168547!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c290385035c6f%3A0x77018e480d96bf00!2sShilp%20Skyline%20at%20Adani%20Shantigram!5e0!3m2!1sen!2sus!4v1730728131253!5m2!1sen!2sus"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
        },
        video: "https://www.youtube.com/embed/ADbDrWvfnlk?si=msIjwnOtTFWXCVbI",
        tag: "Sample House Ready",
        size: "4 BHK",
        brochure: `${SkyLine.sky_brochure}`,
        parent_category: residential,
        reg_no:
          "PR/GJ/AHMEDABAD/AHMEDABAD CITY/Ahmedabad Urban Development Authority/RAA14084/020924/300929",
        details: {
          about: {
            img1: `${SkyLine.about}`,
            about_desc:
              "<p>Welcome to SKYLINE, where the boundaries of luxury living are redefined amidst the endless expanse of the sky and the overlooking greens. Perched at the center of Shantigram, this exclusive high-end residence transcends traditional notions of opulence, offering discerning individuals a sanctuary of unparalleled grandeur and sophistication</p><p>With breathtaking views stretching as far as the eye can see, and a host of personalized services designed to elevate every aspect of daily life, SKYLINE epitomizes the pinnacle of sky-high living.</p>",
          },
          floor_plans: [
            {
              id: 1,
              name: "Ground Floor",
              alt: "Ground floor plan showing entrance layout, parking, and lobby area.",
              image: `${SkyLine.groundFloorPlan}`,
            },
            {
              id: 2,
              name: "Typical Floor Plan",
              alt: "Typical floor layout showcasing the arrangement of units and corridors.",
              image: `${SkyLine.typicalFloorPlan}`,
            },
            {
              id: 3,
              name: "Typical Unit Plan",
              alt: "Typical unit plan showcasing layout and design options.",
              image: `${SkyLine.typicalUnitPlan}`,
            },
          ],

          banner_imgs: [SkyLine.banner],
          mobile_banner: [SkyLine.mobileBanner],
          bannerAlt:
            "SkyLine project banner highlighting contemporary high-rise architecture.",
          mobileBannerAlt:
            "SkyLine mobile banner showcasing the building facade for mobile view.",
          gallery_imgs: [
            {
              src: SkyLine.gallery1,
              alt: "Shilp Skyline Gallery Image 1 - Tower elevation view with sky backdrop",
            },
            {
              src: SkyLine.gallery2,
              alt: "Shilp Skyline Gallery Image 2 - Side view of the high-rise structure",
            },
            {
              src: SkyLine.gallery3,
              alt: "Shilp Skyline Gallery Image 3 - Entrance and driveway area of the project",
            },
            {
              src: SkyLine.gallery1,
              alt: "Shilp Skyline Gallery Image 4 - Reused tower elevation view",
            },
            {
              src: SkyLine.gallery2,
              alt: "Shilp Skyline Gallery Image 5 - Reused side angle showcasing facade",
            },
          ],

          amenities: [
            {
              name: "Open Garden",
              alt: "Icon of a machine cleaning a garden",
              image: Icons.lawnGarden,
            },
            {
              name: "Swimming Pool",
              alt: "Swimming pool icon",
              image: Icons.swim,
            },
            // { name: "Doors",alt:"", image: Icons.door },
            // { name: "Windows",alt:"", image: Icons.window },
            // { name: "Flooring",alt:"Gym and Fitness Center Icon", image: Images.gym },
            // { name: "Electrification",alt:"Electrification system icon for infrastructure", image: Icons.electrification },
          ],
          project_updates: {
            month: "July",
            year: 2025,
            images: [
              {
                src: `${SkyLine.site1}`,
                alt: "SkyLine Project May 2025 Construction Image 1",
              },
              {
                src: `${SkyLine.site2}`,
                alt: "SkyLine Project May 2025 Progress Update Image 2",
              },
              {
                src: `${SkyLine.site3}`,
                alt: "SkyLine Project May 2025 Site Development Image 3",
              },
            ],
          },
        },
      },
      // Shilp Paradise / 4
      {
        id: 4,
        no: "04",
        card_img: `${Paradise.card}`,
        alt: "",
        title: "Shilp Paradise",
        url: "shilp-paradise",
        is_completed: true,
        complete_status: "100",
        isActive: true,
        address: {
          mini_address: {
            line1: "Sindhu Bhavan Road",
            line2: "Ahmedabad",
            sq_ft: "4 BHK 2935-3380",
          },
          full_address:
            "Opp. Times Square 2, Bodakdev, Ahmedabad, Gujarat 380051",
          googleMap:
            '<iframe class="map"  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3671.4115707475717!2d72.506211!3d23.045368!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b3fac058423%3A0x8a834d4cc394c900!2sShilp%20Paradise!5e0!3m2!1sen!2sus!4v1730782269772!5m2!1sen!2sus" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
        },
        video: "https://www.youtube.com/embed/3l40JeKd29Q?si=ffDDDcDQWoYbBVsk",
        tag: "Ready To Move",
        size: "4 BHK",
        brochure: `${Paradise.shilpParadiseBrochure}`,
        parent_category: residential,
        reg_no: "PR/GJ/AHMEDABAD/AHMEDABAD CITY/AUDA/MAA09669/050122",
        details: {
          about: {
            img1: `${Paradise.about}`,
            about_desc:
              "<p>SHILP PARADISE is situated in the west Ahmedabad’s working and residential communities.</p><p>It is also perfectly placed in the center of everything, with leading malls, food hubs, education institutions, hospitals close by.</p><p>Enjoy shopping? Indoor shopping malls at the S G road provide a modern and contemporary approach. However, if you prefer a leisurely day surrounding yourself with beautiful fashion boutiques, cafes and restaurants for every palate then the SBR which is minutes away, is the perfect stop for you to be in the heart of this magnificent city.</p>",
          },
          floor_plans: [
            {
              id: 1,
              name: "Ground Floor",
              alt: "Ground floor layout design showing room divisions.",
              image: `${Paradise.floorImg1}`,
            },
            {
              id: 2,
              name: "Typical Floor Plan",
              alt: "Typical floor layout plan for the building.",
              image: `${Paradise.floorImg2}`,
            },
            {
              id: 3,
              name: "Typical A Unit Plan",
              alt: "Type A unit plan for Blocks A and B room layout.",
              image: `${Paradise.floorImg3}`,
            },
            {
              id: 4,
              name: "Typical B Unit Plan",
              alt: "Type B unit plan layout for Blocks A and B room layout.",
              image: `${Paradise.floorImg4}`,
            },
          ],
          banner_imgs: [Paradise.banner],
          mobile_banner: [Paradise.mobileBanner],
          bannerAlt:
            "Paradise project banner showcasing luxurious residential towers and serene surroundings.",
          mobileBannerAlt:
            "Paradise mobile banner optimized for smaller screens, displaying elegant facade.",

          gallery_imgs: [
            {
              src: Paradise.gallery1,
              alt: "Shilp Paradise Gallery Image 1 - Modern building elevation with landscaped foreground",
            },
            {
              src: Paradise.gallery2,
              alt: "Shilp Paradise Gallery Image 2 - Interior courtyard and recreational area view",
            },
            {
              src: Paradise.gallery3,
              alt: "Shilp Paradise Gallery Image 3 - View of the entrance and driveway area",
            },
            {
              src: Paradise.gallery4,
              alt: "Shilp Paradise Gallery Image 4 - Evening view of residential tower with lighting",
            },
            {
              src: Paradise.gallery5,
              alt: "Shilp Paradise Gallery Image 5 - Wide-angle shot of the project's full facade",
            },
          ],

          amenities: [
            { name: "Multipurpose Hall", alt: "", image: Icons.hall },
            { name: "Toddler's play area", alt: "", image: Icons.toddler },
            { name: "School Drop Off Zone", alt: "", image: Icons.bus },
            {
              name: "Children's Play Area",
              alt: "",
              image: Icons.childPlayArea,
            },
            { name: "Landscape Garden", alt: "", image: Icons.landscape },
          ],
          project_updates: {
            month: "July",
            year: 2025,
            images: [
              {
                src: `${Paradise.jan1}`,
                alt: "Paradise Project January 2025 Construction Image 1",
              },
              {
                src: `${Paradise.jan2}`,
                alt: "Paradise Project January 2025 Site Progress Image 2",
              },
              {
                src: `${Paradise.jan3}`,
                alt: "Paradise Project January 2025 Development Update Image 3",
              },
            ],
          },
        },
      },
      // Shilp Revanta / 5
      {
        id: 5,
        no: "05",
        card_img: `${Revanta.card}`,
        alt: "",
        title: "Shilp Revanta",
        url: "shilp-revanta",
        is_completed: true,
        complete_status: "100",
        isActive: true,
        address: {
          mini_address: {
            line1: "Club 0 7 Road, Shela",
            line2: "Ahmedabad",
            sq_ft: "3BHK-1510",
          },
          full_address: "Opp. CLUB O7 Rd, Shela, Ahmedabad, Gujarat 382424",
          googleMap:
            '<iframe class="map"  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14689.775053452824!2d72.4569308!3d23.0074731!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b3d0859a98d%3A0x163d0104d6e9c68a!2sSHILP%20REVANTA%20-%20shela%20project!5e0!3m2!1sen!2sin!4v1730782812381!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
        },
        video: "https://www.youtube.com/embed/43_oZW0v8dY?si=DlDWBI9-asnGR6ZQ",
        tag: "Ready To Move",
        size: "3 BHK",
        brochure: `${Revanta.shilpRevantaBrochure}`,
        parent_category: residential,
        reg_no: "PR/GJ/AHMEDABAD/SANAND/AUDA/MAA07874/050121",
        details: {
          about: {
            img1: `${Revanta.about}`,
            about_desc:
              "<p>Shilp Revanta, 3BHK homes that redefine standards of living, now at Shela, Ahmedabad. Shilp Revanta is setting new standards in simplicity, functionality and luxury. Set at a prime location, Shilp Revanta is all set to give you a home of your dreams and a life of comfort.</p><p>Uniquely planned 3 BHK homes at Shilp Revanta give you the experience of comfortable living. Where the homes are like paradise, the building offers more than 70 amenities to make your life truly liveable. There is a perfect blend of relaxation and rejuvenation with gymnasium, mini theatre, party halls, plush gardens, water body and much more. A separate play area for the kids gives them their independence. Swimming pool, skating rink, sports activities are all meant to keep you fit and healthy. A day care centre, toddler’s room, medicare centre give you the peace of mind while you focus on work.</p><p>Affordable yet luxury homes at Shilp Revanta have to be your perfect choice. Located at Shela, there is everything you need for your daily needs – from supermarkets, to temples, schools, clubs, hospitals, eateris and much more.</p>",
          },
          floor_plans: [
            {
              id: 1,
              name: "Ground Floor",
              alt: "Site plan layout showcasing building structure.",
              image: `${Revanta.ground_floor}`,
            },
            {
              id: 2,
              name: "First Floor ",
              alt: "Site plan layout showcasing building structure.",
              image: `${Revanta.first_floor}`,
            },
            {
              id: 3,
              name: "Second to Fourteen Floor",
              alt: "Typical floor plan layout from second to fourteenth floor showing unit arrangement.",
              image: `${Revanta.second_fourteen_floor}`,
            },
            {
              id: 4,
              name: "Block A,B,H & I - 3BHK",
              alt: "3 BHK Block C layout and floorplan building.",
              image: `${Revanta.block_ABHI3BHK}`,
            },
            {
              id: 5,
              name: "Block C - 3BHK",
              alt: "3BHK unit floor plan of C block layout.",
              image: `${Revanta.blockC3BHK}`,
            },
            {
              id: 6,
              name: "Block D,E,F,G - 3BHK",
              alt: "Layout for M Foyer designed as a 3BHK unit.",
              image: `${Revanta.block_DEFG_3bhk}`,
            },
            {
              id: 7,
              name: "Block J - 3BHK",
              alt: "Foyer flock structure and layout details.",
              image: `${Revanta.block_J3BHK}`,
            },
            {
              id: 8,
              name: "Block K,L,M - 3BHK",
              alt: "3BHK floor plan layout design.",
              image: `${Revanta.block_KLM_3bhk}`,
            },
          ],
          banner_imgs: [Revanta.banner],
          mobile_banner: [Revanta.mobileBanner],
          bannerAlt:
            "Revanta project banner displaying modern residential towers and vibrant landscape.",
          mobileBannerAlt:
            "Revanta mobile banner showcasing building elevation, optimized for mobile view.",
          gallery_imgs: [
            {
              src: Revanta.gallery1,
              alt: "Exterior view of Shilp Revanta residential towers with landscaped surroundings.",
            },
            {
              src: Revanta.gallery2,
              alt: "Interior image of a furnished 3BHK apartment in Shilp Revanta.",
            },
            {
              src: Revanta.gallery3,
              alt: "Clubhouse and amenities area at Shilp Revanta project site.",
            },
            {
              src: Revanta.gallery4,
              alt: "Night view of Shilp Revanta buildings with lighting and greenery.",
            },
            {
              src: Revanta.gallery5,
              alt: "Children's play area and garden facilities in Shilp Revanta community.",
            },
          ],

          amenities: [
            {
              name: "Multipurpose Game",
              alt: "Tennis or Sports Court Icon",
              image: Icons.court,
            },
            {
              name: "Indoor Games",
              alt: "Library room amenity icon",
              image: Icons.indoorGames,
            },
            {
              name: "Swimming Pool",
              alt: "Swimming pool icon",
              image: Icons.swim,
            },
            {
              name: "Gymnasium",
              alt: "Gym and Fitness Center Icon",
              image: Icons.gym,
            },
            { name: "Seating Area", alt: "", image: Icons.seating },
            { name: "Toddler's play area", alt: "", image: Icons.toddler },
            {
              name: "Lawn Garden",
              alt: "Icon of a machine cleaning a garden",
              image: Icons.lawnGarden,
            },
            { name: "Banquet Hall", alt: "", image: Icons.hall },
            { name: "Banquet", alt: "", image: Icons.tableSeat },
            { name: "Cricket Pitch", alt: "", image: Icons.pitch },
            { name: "Library Room", alt: "", image: Icons.lib },
            { name: "Service Room", alt: "", image: Icons.hall },
            { name: "Two Lifts Per Block", alt: "", image: Icons.lift },
            { name: "Yoga Room", alt: "", image: Icons.yoga },
            {
              name: "Handicap Friendly Ramp",
              alt: "Wheelchair Icon",
              image: Icons.wheelChair,
            },
            { name: "Entrance Loby Block", alt: "", image: Icons.door },
          ],
          project_updates: {
            month: "July",
            year: 2023,
            images: [
              {
                src: `${Revanta.jan1}`,
                alt: "Revanta Project January 2023 Construction Image 1",
              },
              {
                src: `${Revanta.jan2}`,
                alt: "Revanta Project January 2023 Site Progress Image 2",
              },
              {
                src: `${Revanta.jan3}`,
                alt: "Revanta Project January 2023 Development Update Image 3",
              },
            ],
          },
        },
      },
      // Shilp Ananta / 6
      // {
      //   id: 6,
      //   no: "06",
      //   card_img: `${Ananta.card}`,
      //   alt: "",
      //   title: "Shilp Ananta",
      //   url: "shilp-ananta",
      //   is_completed: true,
      //   complete_status: "100",
      //   isActive: true,
      //   address: {
      //     mini_address: {
      //       line1: "Club 0 7 Road, Shela",
      //       line2: "Ahmedabad",
      //       sq_ft: "2BHK-1085",
      //     },
      //     full_address: "Opp. CLUB O7 Rd, Shela, Ahmedabad, Gujarat 382424",
      //     googleMap:
      //       '<iframe class="map"  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14689.775053452824!2d72.4569308!3d23.0074731!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b3d0859a98d%3A0x163d0104d6e9c68a!2sSHILP%20REVANTA%20-%20shela%20project!5e0!3m2!1sen!2sin!4v1730782812381!5m2!1sen!2sin"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      //   },
      //   video: "https://www.youtube.com/embed/MjrMHMx3TTk?si=abCAVFUFFHBG5Bel",
      //   tag: "Ready To Move",
      //   size: "2 BHK",
      //   brochure: `${Ananta.shilpAnantaBrochure}`,
      //   parent_category: residential,
      //   reg_no: "PR/GJ/AHMEDABAD/AHMEDABAD CITY/AUDA/MAA08006/050221",
      //   details: {
      //     about: {
      //       img1: `${Ananta.about}`,
      //       about_desc:
      //         "<p>Shilp Ananta, a name that talks of infinity, is here to bestow upon you a life that you’ve dreamt of with unending comfort and luxury. The 2BHK residential retreat located in Shela, serves as an extension of your own home, with handsomely appointed amenities devoted to enhance daily life.</p><p>Shilp Ananta provides luxury living in budget. The building has a vehicle free ground floor embracing all types of spaces depending on what one is looking for like multipurpose courts, indoor games, gymnasium, library, dance and music rooms and well-landscaped areas for residents of every age to name a few. With over 35 amenities, Shilp Ananta, is the place to be.</p><p>Located at the heart of Shela, Shilp Ananta boasts of the best surroundings. There are shopping marts, super markets and local markets to serve your daily needs. There are restaurants, gymnasiums, hospitals, fuel stations and one of the leading clubs of Ahmedabad in close vicinity. It is truly the ideal place to live.</p>",
      //     },
      //     floor_plans: [
      //       {
      //         id: 1,
      //         name: "Site Plan",
      //         alt: "Site plan amenities of the building layout.",
      //         image: `${Ananta.floorimg2}`,
      //       },
      //       {
      //         id: 2,
      //         name: "First Floor",
      //         alt: "First-floor layout plan showing key spaces and room setup.",
      //         image: `${Ananta.floorimg3}`,
      //       },
      //       {
      //         id: 3,
      //         name: "Second To Fourteen Floor",
      //         alt: "Floor plan from second to fourteenth floor of the building.",
      //         image: `${Ananta.floorimg4}`,
      //       },
      //       {
      //         id: 4,
      //         name: "Unit Plan Block A & F",
      //         alt: "Unit plan for blocks B, C, D, E, G, H, I, and J showing room layouts.",
      //         image: `${Ananta.floorimg1}`,
      //       },
      //       {
      //         id: 5,
      //         name: "Unit Plan Block B, C, D, E, G, H, I, & J",
      //         alt: "Unit Floor plan layout Block A & F.",
      //         image: `${Ananta.floorimg5}`,
      //       },
      //     ],

      //     banner_imgs: [Ananta.banner],
      //     mobile_banner: [Ananta.mobileBanner],
      //     bannerAlt:
      //       "Ananta project banner showcasing exterior view and architecture.",
      //     mobileBannerAlt:
      //       "Ananta mobile banner highlighting project facade for smaller screens.",

      //     gallery_imgs: [
      //       {
      //         src: Ananta.gallery1,
      //         alt: "Entrance view of Shilp Ananta showing main gate and driveway.",
      //       },
      //       {
      //         src: Ananta.gallery2,
      //         alt: "View of landscaped gardens and children's play area at Shilp Ananta.",
      //       },
      //       {
      //         src: Ananta.gallery3,
      //         alt: "Top view of the residential towers at Shilp Ananta.",
      //       },
      //       {
      //         src: Ananta.gallery4,
      //         alt: "Indoor amenities including gym and community area at Shilp Ananta.",
      //       },
      //       {
      //         src: Ananta.gallery5,
      //         alt: "Evening view of Shilp Ananta towers with lighting and common area.",
      //       },
      //     ],

      //     amenities: [
      //       { name: "TV Laounge Area", alt: "", image: Icons.tvarea },
      //       {
      //         name: "Libraray",
      //         alt: "Library room amenity icon",
      //         image: Icons.indoorGames,
      //       },
      //       { name: "Estate Manager", alt: "", image: Icons.estate_manager },
      //       {
      //         name: "Functional Lawn Area",
      //         alt: "Icon of a machine cleaning a garden",
      //         image: Icons.lawnGarden,
      //       },
      //       { name: "Community Seating Area", alt: "", image: Icons.seating },
      //       { name: "Walking Area", alt: "", image: Icons.walker },
      //       {
      //         name: "Handicap Friendly Ramp",
      //         alt: "Wheelchair Icon",
      //         image: Icons.wheelChair,
      //       },
      //       { name: "Entrance Loby Block", alt: "", image: Icons.Entrance },
      //       { name: "Two Lifts Per Block", alt: "", image: Icons.lift },
      //       {
      //         name: "Residental Entrance Gate",
      //         alt: "",
      //         image: Icons.Entrance,
      //       },
      //     ],
      //     project_updates: {
      //       month: "July",
      //       year: 2025,
      //       images: [
      //         {
      //           src: `${Ananta.jan1}`,
      //           alt: "Ananta January 2025 Event Image 1",
      //         },
      //         {
      //           src: `${Ananta.jan2}`,
      //           alt: "Ananta January 2025 Event Image 2",
      //         },
      //         {
      //           src: `${Ananta.jan3}`,
      //           alt: "Ananta January 2025 Event Image 3",
      //         },
      //       ],
      //     },
      //   },
      // },
      // Shilp North Sky /7
      {
        id: 6,
        no: "06",
        card_img: `${NorthSky.card}`,
        alt: "",
        title: "Shilp North Sky",
        url: "shilp-north-sky",
        is_completed: false,
        complete_status: "60",
        isActive: true,
        address: {
          mini_address: {
            line1: "Gift City",
            line2: "Gandhinagar",
            sq_ft: "2-3 BHK 1325 -1875",
          },
          full_address:
            "Gujarat International Finance Tec-City, Gujarat 382355, India",
          googleMap:
            '<iframe class="map"  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3668.2980107667763!2d72.685363!3d23.159321!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e811a76b0b4ff%3A0x96237abb12c519f7!2sShilp%20North%20Sky%2C%20Gift%20City!5e0!3m2!1sen!2sus!4v1730780841352!5m2!1sen!2sus"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
        },
        video: "https://www.youtube.com/embed/_sqBMJSVnl8?si=J0Y9twKSsbBCoi5Y",
        tag: null,
        size: "2 - 3 BHK",
        brochure: `${NorthSky.north_sky_brochure}`,
        parent_category: residential,
        reg_no: "PR/GJ/GANDHINAGAR/GANDHINAGAR/Others/MAA11559/060423",
        details: {
          about: {
            img1: `${NorthSky.about}`,
            about_desc:
              "<p>Introducing North Sky, a premium 2 & 3BHK residential scheme in GIFT City, Gandhinagar, one of India’s top smart cities. Located in the heart of the SEZ area, it offers breathtaking views of lush gardens or the Sabarmati River, blending luxury with convenience.</p><p>North Sky apartments range from 1325 to 1875 sq. ft., designed with modern amenities for a comfortable lifestyle. Residents can enjoy a fully equipped gym, swimming pool, clubhouse, and children’s play area.</p><p>Standing 25 storeys tall, North Sky’s stunning architecture enhances the skyline. High-quality materials and thoughtful design ensure both elegance and durability, making it an ideal home for luxury living.</p>",
          },
          floor_plans: [
            {
              id: 1,
              name: "First Floor",
              alt: "First floor layout plan with detailed room placements of Club Luxe.",
              image: `${NorthSky.floorImg8}`,
            },
            {
              id: 2,
              name: "Second Floor",
              alt: "Second floor layout plan displaying room arrangements.",
              image: `${NorthSky.floorImg9}`,
            },
            {
              id: 3,
              name: "Site Plan",
              alt: "Comprehensive site plan showing the overall layout of the project.",
              image: `${NorthSky.floorImg10}`,
            },
            {
              id: 4,
              name: "Typical Floor Penthouse",
              alt: "Typical floor plan penthouse layout highlighting the design.",
              image: `${NorthSky.floorImg11}`,
            },
            {
              id: 5,
              name: "Typical Floor",
              alt: "Typical floor plan layout of 3rd to 24th floor building unit.",
              image: `${NorthSky.floorImg12}`,
            },
            {
              id: 6,
              name: "2 BHK Unit Plan Block A, B, C",
              alt: "2 BHK Unit Plan Block A, B & C room design.",
              image: `${NorthSky.floorImg1}`,
            },
            {
              id: 7,
              name: "2 BHK Unit Plan Block A, C",
              alt: "2 BHK Unit Plan Block A & C room design.",
              image: `${NorthSky.floorImg2}`,
            },
            {
              id: 8,
              name: "2 BHK Unit Plan Block B",
              alt: "2 BHK unit plan for Block B showing floor layout.",
              image: `${NorthSky.floorImg3}`,
            },
            {
              id: 9,
              name: "3 BHK Unit Plan Block A, C",
              alt: "3 BHK unit plan for Blocks A and C with room arrangement.",
              image: `${NorthSky.floorImg4}`,
            },
            {
              id: 10,
              name: "3 BHK Unit Plan Block B",
              alt: "3 BHK unit plan for Block B showing layout and room configuration.",
              image: `${NorthSky.floorImg5}`,
            },
            {
              id: 11,
              name: "4 BHK Unit Plan Block A, C",
              alt: "4 BHK Unit Plan Block A & C with room layout.",
              image: `${NorthSky.floorImg6}`,
            },
            {
              id: 12,
              name: "4 BHK Unit Plan Block A",
              alt: "4 BHK unit plan layout for Block A showing floor distribution.",
              image: `${NorthSky.floorImg7}`,
            },
          ],

          banner_imgs: [NorthSky.banner],
          mobile_banner: [NorthSky.mobileBanner],
          bannerAlt:
            "NorthSky project banner highlighting modern architectural design.",
          mobileBannerAlt:
            "NorthSky mobile banner showcasing project facade optimized for mobile view.",

          gallery_imgs: [
            {
              src: NorthSky.gallery1,
              alt: "North Sky residential building front view with landscaped entrance.",
            },
            {
              src: NorthSky.gallery2,
              alt: "Interior view of North Sky's modern living room setup.",
            },
            {
              src: NorthSky.gallery3,
              alt: "North Sky construction site with ongoing work and materials.",
            },
            {
              src: NorthSky.gallery4,
              alt: "Top-down view of North Sky project highlighting pool and amenities.",
            },
            {
              src: NorthSky.gallery5,
              alt: "Evening shot of North Sky's illuminated exterior and surrounding area.",
            },
          ],

          amenities: [
            // { name: "Wall Finish",alt:"", image: Icons.hall },
            // { name: "Kitchen",alt:"", image: Icons.kitchen },
            // { name: "Doors",alt:"", image: Icons.door },
            // { name: "Windows",alt:"", image: Icons.windows },
            // { name: "Electrification",alt:"Electrification system icon for infrastructure", image: Icons.electrification },
            {
              name: "Open Garden",
              alt: "Icon of a machine cleaning a garden",
              image: Icons.lawnGarden,
            },
            {
              name: "Swimming Pool",
              alt: "Swimming pool icon",
              image: Icons.swim,
            },
            {
              name: "Kids Pool",
              alt: "Icon of a kid playing in a pool.",
              image: Icons.kidpool,
            },
            {
              name: "download",
              alt: "Download Brochure Icon.",
              image: Icons.download,
            },
          ],
          project_updates: {
            month: "July",
            year: 2025,
            images: [
              {
                src: `${NorthSky.fab1}`,
                alt: "North Sky May 2025 Construction Progress Image 1",
              },
              {
                src: `${NorthSky.fab2}`,
                alt: "North Sky May 2025 Site Update Image 2",
              },
              {
                src: `${NorthSky.fab3}`,
                alt: "North Sky May 2025 Project Development Image 3",
              },
            ],
          },
        },
      },
      // Shilp vaishodevi /8
      {
        id: 7,
        no: "07",
        card_img: `${Images.aboutImage}`,
        alt: "Vaishnodevi project or location image showcasing the area.",
        title: "Shilp Celestial",
        url: "shilp-celestial",
        is_completed: false,
        complete_status: "20",
        isActive: true,
        address: {
          mini_address: {
            line1: "Vaishnodevi",
            line2: "Ahmedabad",
            sq_ft: "3 -4 BHK 2379-3153",
          },
          full_address:
            "OPP. ADANI SHANTIGRAM, KHORAJ, Gandhinagar, Gandhinagar, GUJARAT-382421",
          googleMap:
            // '<iframe class="map"  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3668.2980107667763!2d72.685363!3d23.159321!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e811a76b0b4ff%3A0x96237abb12c519f7!2sShilp%20North%20Sky%2C%20Gift%20City!5e0!3m2!1sen!2sus!4v1730780841352!5m2!1sen!2sus"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
            '<iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.6432537294584!2d72.5485262!3d23.1470535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e830072b2074f%3A0x92c526096801c487!2sShilp%20Celestial!5e0!3m2!1sen!2sin!4v1711577340212!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
        },
        video: "https://www.youtube.com/embed/1VhJ_qlS5S4",
        size: "3-4 BHK",
        brochure: `${VaishnoDevi.Vaishnodevi_brochure}`,
        parent_category: residential,
        reg_no:
          "PR/GJ/GANDHINAGAR/GANDHINAGAR/Gandhinagar Municipal Corporation/MAA14918/070325/070730",
        details: {
          about: {
            img1: `${VaishnoDevi.aboutImage}`,
            about_desc:
              "<p>Introducing Shilp Celestial, a premium residential project featuring 3 and 4 BHK homes on the iconic SG Road. Blending celestial inspiration with urban vibrancy, it offers a perfect fusion of modern aesthetics and timeless elegance. Surrounded by top schools, hospitals, corporate hubs, and premium societies, it ensures a thriving community life with seamless connectivity to Ahmedabad and Gandhinagar.</p><p>More than just a residence, Shilp Celestial is a lifestyle statement. Thoughtfully designed amenities elevate your everyday experience—whether it’s unwinding in the lush landscaped gardens, staying active in the state-of-the-art fitness center, or enjoying moments of leisure in the grand clubhouse and swimming pool. Here, every element is crafted to offer comfort, luxury, and a sense of belonging in a thriving, well-connected community.</p>",
          },
          floor_plans: [
            {
              id: 1,
              name: "Ground Floor",
              alt: "Detailed ground floor layout plan showing spaces.",
              image: `${VaishnoDevi.GroundFloor}`,
            },
            {
              id: 2,
              name: "First Floor",
              alt: "First-floor podium amenities plan with room arrangements.",
              image: `${VaishnoDevi.FirstFloor}`,
            },
            {
              id: 3,
              name: "Second Floor",
              alt: "Second-floor layout plan showing room arrangement.",
              image: `${VaishnoDevi.SecondFloor}`,
            },
            {
              id: 4,
              name: "Typical Floor",
              alt: "Skyline Ground floor layout image showing building floor plan.",
              image: `${VaishnoDevi.TypicalFloor}`,
            },
            {
              id: 5,
              name: "Unit Plan Block A, B",
              alt: "Unit plan for Blocks A and B with layout details.",
              image: `${VaishnoDevi.UnitPlanBlockAB}`,
            },
            {
              id: 6,
              name: "Unit Plan Block A, D, E",
              alt: "Unit plan for Blocks A, D, and E with detailed floor layout.",
              image: `${VaishnoDevi.UnitPlanBlockADE}`,
            },
            {
              id: 7,
              name: "4 BHK Block C",
              alt: "4 BHK unit plan Block C room layout.",
              image: `${VaishnoDevi.Unit4Floor}`,
            },
          ],

          banner_imgs: [VaishnoDevi.banner],
          mobile_banner: [VaishnoDevi.mobileBanner],
          bannerAlt:
            "VaishnoDevi project banner showcasing residential elevation and architectural highlights.",
          mobileBannerAlt:
            "VaishnoDevi mobile banner displaying project facade, optimized for mobile view.",
          gallery_imgs: [
            {
              src: VaishnoDevi.gallery_img1,
              alt: "Front view of Shilp Celestial with landscaped entrance and building elevation.",
            },
            {
              src: VaishnoDevi.gallery_img2,
              alt: "Modern interior of a Shilp Celestial living room and decor setup.",
            },
            {
              src: VaishnoDevi.gallery_img3,
              alt: "Amenity space featuring swimming pool and recreational area.",
            },
            {
              src: VaishnoDevi.gallery_img4,
              alt: "Evening shot of Shilp Celestial exterior with lighting and ambiance.",
            },
            {
              src: VaishnoDevi.gallery_img5,
              alt: "Top view of Shilp Celestial showing block layout and surroundings.",
            },
          ],

          amenities: [
            { name: "Wall Finish", alt: "", image: VaishnoDevi.hall },
            { name: "Kitchen", alt: "", image: VaishnoDevi.kitchen },
            { name: "Doors", alt: "", image: VaishnoDevi.door },
            { name: "Windows", alt: "", image: VaishnoDevi.window },
            {
              name: "Electrification",
              alt: "Electrification system icon for infrastructure",
              image: VaishnoDevi.electrification,
            },
          ],
          project_updates: {
            month: "July",
            year: 2025,
            images: [
              {
                src: `${VaishnoDevi.img1}`,
                alt: "Vaishno Devi Project May 2025 Progress Image 1",
              },
              {
                src: `${VaishnoDevi.img2}`,
                alt: "Vaishno Devi Project May 2025 Construction Image 2",
              },
              {
                src: `${VaishnoDevi.img3}`,
                alt: "Vaishno Devi Project May 2025 Site Work Image 3",
              },
            ],
          },
        },
      },
    ],
  },
  // Plots ===================================================================
  {
    id: 3,
    category: plots,
    title: "Plots",
    explandable_back_img: [TheRoots.banner, IndustrialPark.SliderImage],
    description1: "Premium land spaces for your dream projects.",
    description2:
      "Choose from prime plots of land located in strategic areas, ideal for building custom homes or commercial spaces.",
    projects: [
      // Shilp The Roots
      {
        id: 1,
        no: "01",
        card_img: `${TheRoots.card}`,
        alt: "Business or residential card image for informational use.",
        title: "Shilp The Roots",
        url: "shilp-the-roots",
        is_completed: false,
        complete_status: "80",
        isActive: true,
        address: {
          mini_address: {
            line1: "Moti Devti",
            line2: "Ahmedabad",
            sq_ft: "1000 sq. Yard Onwards",
          },
          full_address: "Motidevti, Gujarat 382213, India",
          googleMap:
            '<iframe class="map"  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3674.483150149426!2d72.415419!3d22.932427000000004!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e97682760a7cd%3A0x2e58a24787b0923a!2sSHILP%20The%20Roots!5e0!3m2!1sen!2sus!4v1730783462390!5m2!1sen!2sus"  loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
        },
        video: null,
        tag: null,
        size: null,
        brochure: `${TheRoots.roots_brochure}`,
        parent_category: plots,
        reg_no: "PR/GJ/AHMEDABAD/AHMEDABAD CITY/AUDA/MAA08006/050221",
        details: {
          about: {
            img1: `${TheRoots.about}`,
            about_desc:
              "<p>Located at Moti Devti, near Gulmohar Greens Resort Club, Shilp, The Roots is the ideal weekend retreat for you and your loved ones. Just 12 km from Shantipura, it offers easy access through three major routes. The property is designed to refresh and rejuvenate, with maximum units facing lush gardens and a 2 km-long central garden for jogging and cycling.</p><p>A 40 ft. surrounding road ensures smooth movement, while curved roads eliminate dead ends, adding a farmhouse-like charm. The clubhouse and restaurants provide the perfect space to relax, away from the city’s hustle. Surrounded by greenery and fresh air, Shilp, The Roots combines nature, comfort, and modern amenities for the perfect weekend home.</p>",
          },
          floor_plans: [
            {
              id: 1,
              name: "Plan",
              alt: "Master plan showing an overview of the entire building layout.",
              image: `${TheRoots.plan}`,
            },
          ],
          banner_imgs: [TheRoots.banner],
          mobile_banner: [TheRoots.mobileBanner],
          bannerAlt:
            "The Roots project banner highlighting modern residential design and green surroundings.",
          mobileBannerAlt:
            "The Roots mobile banner showcasing project facade, optimized for mobile view.",

          gallery_imgs: [
            {
              src: TheRoots.gallery1,
              alt: "Entrance view of Shilp The Roots highlighting greenery and road design.",
            },
            {
              src: TheRoots.gallery2,
              alt: "Interior shot from Shilp The Roots showcasing design aesthetics.",
            },
            {
              src: TheRoots.gallery3,
              alt: "Amenities area including clubhouse and green surroundings.",
            },
            {
              src: TheRoots.gallery4,
              alt: "Landscape and layout view of Shilp The Roots from the top angle.",
            },
            {
              src: TheRoots.gallery5,
              alt: "Evening view showing lighting and outdoor ambiance of the project.",
            },
          ],

          amenities: null,
          project_updates: {
            month: "July",
            year: 2025,
            images: [
              {
                src: `${TheRoots.site1}`,
                alt: "The Roots January 2025 Progress Image 1",
              },
              {
                src: `${TheRoots.site2}`,
                alt: "The Roots January 2025 Construction Update Image 2",
              },
              {
                src: `${TheRoots.site3}`,
                alt: "The Roots January 2025 Site Development Image 3",
              },
            ],
          },
        },
      },
      // Shilp Industrial Park
      {
        id: 2,
        no: "02",
        card_img: `${IndustrialPark.card}`,
        alt: "",
        title: "Shilp Industrial Park",
        url: "shilp-industrial-park",
        is_completed: true,
        complete_status: "100",
        isActive: true,
        address: {
          mini_address: {
            line1: "Matoda",
            line2: "Ahmedabad",
            sq_ft: "3500 sq. Yard Onwards",
          },
          full_address: "VCQ2+V6, Matoda, Gujarat 382220, India",
          googleMap:
            '<iframe class="map"  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3674.483150149426!2d72.415419!3d22.932427000000004!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e97682760a7cd%3A0x2e58a24787b0923a!2sSHILP%20The%20Roots!5e0!3m2!1sen!2sus!4v1730783462390!5m2!1sen!2sus" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
        },
        video: null,
        tag: null,
        size: null,
        brochure: `${IndustrialPark.industrial_park_brochure}`,
        parent_category: plots,
        reg_no: "PR/GJ/AHMEDABAD/AHMEDABAD CITY/AUDA/MAA08006/050221",
        details: {
          about: {
            img1: `${IndustrialPark.about}`,
            about_desc:
              "<p>Shilp Industrial Park is located just 12 km from Sanathal Circle and 800 meters from Changodar-Bavla Highway and offers a prime location for businesses. With 3 plot sizes, it provides ample space for industrial needs, ensuring easy transportation and logistics access.</p><p>Equipped with RCC roads, street lights, electric cabling trenches, CCTV, a security cabin, and a maintenance office, the park ensures smooth operations. Common truck parking and wide roads (80 ft. main, 40 ft. internal) allow hassle-free movement without U-turns.</p><p>Shilp Industrial Park is a thriving industrial hub surrounded by reputed companies like Zydus Technologies, Gallops Industrial Park, and Intas Pharmaceuticals. With modern amenities, strategic location, and top businesses nearby, it’s the perfect place to set up, grow, and succeed.</p>",
          },
          floor_plans: [
            {
              id: 1,
              name: "Layout Plan",
              alt: "Comprehensive layout plan of the Industrial Park showing plot divisions and infrastructure.",
              image: `${IndustrialPark.floorPlansOne}`,
            },
          ],

          banner_imgs: [IndustrialPark.banner],
          mobile_banner: [IndustrialPark.mobileBanner],
          bannerAlt:
            "Industrial Park banner showcasing large-scale infrastructure and layout.",
          mobileBannerAlt:
            "Industrial Park mobile banner optimized for mobile view, highlighting industrial units.",

          gallery_imgs: [
            {
              src: IndustrialPark.gallery1,
              alt: "Aerial view of Shilp Industrial Park highlighting layout and plot structures.",
            },
            {
              src: IndustrialPark.gallery2,
              alt: "Internal RCC road and infrastructure at Shilp Industrial Park.",
            },
            {
              src: IndustrialPark.gallery1,
              alt: "Wide road inside Shilp Industrial Park showing truck access.",
            },
            {
              src: IndustrialPark.gallery1,
              alt: "Plot divisions with amenities at Shilp Industrial Park.",
            },
            {
              src: IndustrialPark.gallery2,
              alt: "Overview of main gate and security features at Shilp Industrial Park.",
            },
          ],
          amenities: null,
          project_updates: {
            month: "July",
            year: 2025,
            images: [
              {
                src: `${IndustrialPark.site1}`,
                alt: "Industrial Park January 2025 Development Image 1",
              },
              {
                src: `${IndustrialPark.site2}`,
                alt: "Industrial Park January 2025 Construction Progress Image 2",
              },
              {
                src: `${IndustrialPark.site3}`,
                alt: "Industrial Park January 2025 Site Overview Image 3",
              },
            ],
          },
        },
      },
    ],
  },
];
