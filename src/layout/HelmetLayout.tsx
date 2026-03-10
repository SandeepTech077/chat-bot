import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

// Default meta information
const defaultMeta = {
  '/': {
    title: 'Shilp Group | Premium Real Estate Company in Ahmedabad',
    description: 'Explore top residential and commercial real estate projects in Ahmedabad with Shilp Group. Trusted for quality and timely delivery.',
  },
  '/about-us': {
    title: 'About Shilp Group | Trusted Real Estate Developers in Gujarat',
    description: "Learn about Shilp Group's legacy, core values, and leadership driving excellence in Gujarat's real estate sector.",
  },
  '/contact-us': {
    title: 'Contact Shilp Group | Enquire About Residential & Commercial Projects',
    description: "Get in touch for site visits, project information, or partnership opportunities. We're happy to assist.",
  },
  '/project-overview': {
    title: 'Project Overview | Explore All Shilp Group Real Estate Projects',
    description: 'Browse our complete portfolio of residential, commercial, and plot developments across Ahmedabad.',
  },
  '/careers': {
    title: 'Careers at Shilp Group | Join Gujarat\'s Leading Real Estate Team',
    description: 'Explore exciting career opportunities in real estate development, marketing, sales, and more.',
  },
  '/blog': {
    title: 'Shilp Group Blog | Real Estate Trends, Tips & Market Insights',
    description: 'Read expert articles and updates on real estate market trends, buyer guides, and investment advice.',
  },
  '/our-team': {
    title: 'Our Team | Meet the Experts Behind Shilp Group',
    description: 'Meet the professionals who lead innovation and excellence at Shilp Group\'s real estate projects.',
  },
  '/projects/commercial': {
    title: 'Commercial Properties in Ahmedabad | Shilp Group Projects',
    description: 'Discover Grade-A office spaces and commercial hubs by Shilp Group in Ahmedabad\'s prime business districts.',
  },
  '/projects/commercial/shilp-centrica': {
    title: 'Shilp Centrica | Premium Commercial Offices in Ahmedabad',
    description: 'Invest in premium commercial spaces at Shilp Centrica strategically located with modern infrastructure and amenities.',
  },
  '/projects/commercial/shilp-twin-towers': {
    title: 'Shilp Twin Towers | Office Spaces on SG Highway Ahmedabad',
    description: 'Grow your business at Shilp Twin Towers. Modern office spaces in Ahmedabad\'s most connected business location.',
  },
  '/projects/commercial/shilp-bussiness-gateway': {
    title: 'Shilp Business Gateway | Commercial Property in Ahmedabad',
    description: 'Find high-quality commercial office spaces at Shilp Business Gateway near SG Highway, Ahmedabad.',
  },
  '/projects/commercial/shilp-incubation-centre': {
    title: 'Shilp Incubation Centre | Startup Office Spaces in Ahmedabad',
    description: 'Tailor-made commercial spaces for startups and enterprises at Shilp Incubation Centre, Ahmedabad.',
  },
  '/projects/commercial/shilp-iskon-ambli': {
    title: 'Shilp Iskon Ambli | Premium Business Spaces in Ahmedabad',
    description: 'Explore modern commercial developments at Shilp Iskon Ambli. Ideal for growing businesses in Ahmedabad.',
  },
  '/projects/commercial/shilp-one': {
    title: 'Shilp One | Grade-A Commercial Office Tower in Ahmedabad',
    description: 'Upgrade your workspace with Shilp One Grade-A commercial offices with smart design and amenities.',
  },
  '/projects/residential': {
    title: 'Residential Properties in Ahmedabad | Apartments by Shilp Group',
    description: "Browse premium 2, 3 & 4 BHK apartments and villas by Shilp Group across Ahmedabad's top locations.",
  },
  '/projects/residential/shilp-serene': {
    title: 'Shilp Serene | 3 BHK Apartments in Shela, Ahmedabad',
    description: "Enjoy peaceful living at Shilp Serene spacious 3 BHK homes with modern amenities in Shela, Ahmedabad.",
  },
  '/projects/residential/shilp-residency': {
    title: 'Shilp Residency | Affordable 2 & 3 BHK Homes in Ahmedabad',
    description: "Discover comfortable and affordable living with Shilp Residency. Ideal for families in growing neighborhoods.",
  },
  '/projects/residential/shilp-skyline': {
    title: 'Shilp Skyline | Luxury Apartments with City Views in Ahmedabad',
    description: "Live elevated at Shilp Skyline luxury 3 & 4 BHK apartments with panoramic city views and premium facilities.",
  },
  '/projects/residential/shilp-paradise': {
    title: 'Shilp Paradise | Modern Homes in Gota, Ahmedabad',
    description: "Experience contemporary living at Shilp Paradise. Well-connected, stylish apartments in Gota.",
  },
  '/projects/residential/shilp-revanta': {
    title: 'Shilp Revanta | Smart 2 & 3 BHK Homes in Ahmedabad',
    description: "Move into modern 2 & 3 BHK apartments at Shilp Revanta crafted for urban lifestyles with smart layouts.",
  },
  '/projects/residential/shilp-ananta': {
    title: 'Shilp Ananta | Affordable Luxury Apartments in Ahmedabad',
    description: "Discover the perfect blend of luxury and value at Shilp Ananta thoughtfully designed homes with amenities.",
  },
  '/projects/residential/shilp-north-sky': {
    title: 'Shilp North Sky | Luxury Residences in North Ahmedabad',
    description: "Explore Shilp North Sky for upscale living with spacious apartments, sky lounges, and connectivity.",
  },
  '/projects/residential/shilp-celestial': {
    title: 'Shilp Celestial | Premium 4 BHK Apartments in Ahmedabad',
    description: "Live luxuriously at Shilp Celestial exclusive 4 BHK residences with high-end amenities and security.",
  },
  '/projects/plots': {
    title: 'Residential & Industrial Plots in Ahmedabad | Shilp Group',
    description: "Buy clear-title residential and industrial plots with Shilp Group in emerging zones of Ahmedabad.",
  },
  '/projects/plots/shilp-the-roots': {
    title: 'Shilp The Roots | Residential Plots in Dholera, Ahmedabad',
    description: "Invest in Shilp The Roots residential plots in Dholera smart city region, ideal for future growth.",
  },
  '/projects/plots/shilp-industrial-park': {
    title: 'Shilp Industrial Park | Industrial Land for Sale in Ahmedabad',
    description: "Buy industrial plots at Shilp Industrial Park strategically located for manufacturing and logistics.",
  },
  '/terms-and-conditions': {
    title: 'Terms of Use | Shilp Group Website',
    description: "Read the terms and conditions governing use of the Shilp Group website and its digital services.",
  },
  '/privacy-policy': {
    title: 'Privacy Policy | Shilp Group Website',
    description: "Review our privacy policy to learn how we manage and protect user data on Shilp Group's website.",
  },
};

const HelmetLayout = () => {
  const location = useLocation();

  // Check if current path is a blog detail page
  const isBlogDetailPage = location.pathname.match(/^\/blog\/[^/]+$/);
  

  if (isBlogDetailPage) {
    return null;
  }

  // Find meta info for the current path or use a fallback
  const meta = defaultMeta[location.pathname as keyof typeof defaultMeta] || {
    title: 'Shilp Group | Real Estate Developer in Ahmedabad',
    description: 'Discover premium real estate projects by Shilp Group in Ahmedabad. Quality construction and timely delivery.',
    canonical: `https://shilp.co.in${location.pathname}`,
  };

  return (
    <Helmet>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <link rel="canonical" href={`https://shilp.co.in${location.pathname}`} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:url" content={`https://shilp.co.in${location.pathname}`} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Shilp Group" />
      <meta property="og:image" content="https://shilp.co.in/default-og-image.jpg" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content="https://shilp.co.in/default-og-image.jpg" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Shilp Group" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Helmet>
  );
};

export default HelmetLayout;