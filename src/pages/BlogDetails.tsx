import { Controller, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { MenuItem, TextareaAutosize, TextField } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import { getBlogData } from "../utils/helper";
import { BlogData } from "../types/blogs.types";
import LoaderWithStyles from "../components/Loader/Loader";
import BannerImg from "../components/BannerImg";
import MainBanner from "../assets/blogs/BlogsBanner/Banner.png";
import mainMobileBanner from "../assets/blogs/BlogsBanner/mobile-banner.png";
import BlogBanner from "../components/Blogs/BlogBanner";
import profile from "../assets/Icons/shilpprofile.svg";
import Calendar from "../assets/Icons/calendar.svg";
import ConfirmationModal from "../components/Modals/ConfirmationModal";
import { ENQUIRY_SUCCESS_MESSAGE } from "../constants/strings";
import { useNavigate } from "react-router-dom";
import { enquirySchema } from "../validations/enquiry.validation";
import { getCategoryData } from "../utils/helper";
import { commerical, plots, residential } from "../constants/projectTypes";
import CustomButton from "../components/Common/CustomButton";

const generateBlogMetaTags = (blog: BlogData) => {
  const cleanDescription = blog.desc
    .replace(/<[^>]*>/g, "") // Remove HTML tags
    .replace(/\s+/g, " ") // Replace multiple spaces with single space
    .trim()
    .substring(0, 160); // Limit to 160 characters for optimal SEO

  // Generate keywords from blog content
  const generateKeywords = (): string => {
    const commonKeywords = [
      "real estate",
      "Ahmedabad",
      "property",
      "Shilp Group",
      "residential",
      "commercial",
      "investment",
    ];

    const titleWords = blog.title
      .toLowerCase()
      .split(" ")
      .filter((word) => word.length > 3)
      .map((word) => word.replace(/[^a-zA-Z]/g, ""));

    const contentKeywords = blog.points
      .map((point) => point.title.toLowerCase())
      .join(" ")
      .split(" ")
      .filter((word) => word.length > 4)
      .slice(0, 5);

    const allKeywords = [...commonKeywords, ...titleWords, ...contentKeywords];
    return [...new Set(allKeywords)].join(", ");
  };

  // Generate structured data for better SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    description: cleanDescription,
    image: blog.image,
    author: {
      "@type": "Organization",
      name: blog.publish,
    },
    publisher: {
      "@type": "Organization",
      name: "Shilp Group",
      logo: {
        "@type": "ImageObject",
        url: "https://shilp.co.in/logo.png",
      },
    },
    datePublished: blog.date,
    dateModified: blog.date,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://shilp.co.in/blog/${blog.url}`,
    },
  };

  return {
    title: `${blog.title} | Shilp Group Blog`,
    description: cleanDescription,
    keywords: generateKeywords(),
    structuredData: JSON.stringify(structuredData),
    canonicalUrl: `https://shilp.co.in/blog/${blog.url}`,
    ogTitle: blog.title,
    ogDescription: cleanDescription,
    ogImage: blog.image,
    ogUrl: `https://shilp.co.in/blog/${blog.url}`,
  };
};

const BlogDetails = () => {
  const BASE_URL = (import.meta as any).env.VITE_APP_BASE_URL;
  const { title } = useParams();
  const navigate = useNavigate();
  const blogurl = String(title);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isConfirmationOpen, setConfirmationOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [blogDetails, setBlogDetails] = useState<BlogData>();
  const [activeSection, setActiveSection] = useState<number>(-1);

  // SEO meta tags state
  const [metaTags, setMetaTags] = useState<any>(null);

  // Create refs for each section (including introduction)
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const introRef = useRef<HTMLDivElement | null>(null);

  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(enquirySchema),
  });

  useEffect(() => {
    const fetchBlogData = async () => {
      setLoading(true);
      setError(null);

      try {
        if (title) {
          const { blogDetails, error } = await getBlogData(blogurl);
          if (error) {
            setError(error);
          } else if (blogDetails) {
            setBlogDetails(blogDetails);
            // Generate meta tags when blog details are loaded
            const metaTagsData = generateBlogMetaTags(blogDetails);
            setMetaTags(metaTagsData);
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

    fetchBlogData();
  }, [title]);

  // Initialize section refs when blog details are loaded
  useEffect(() => {
    if (blogDetails?.points) {
      sectionRefs.current = sectionRefs.current.slice(
        0,
        blogDetails.points.length
      );
    }
  }, [blogDetails]);

  // Handle smooth scroll to section (including introduction)
  const scrollToSection = (index: number) => {
    if (index === -1) {
      if (introRef.current) {
        setActiveSection(-1);
        introRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
      }
    } else {
      const targetSection = sectionRefs.current[index];
      if (targetSection) {
        setActiveSection(index);
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
      }
    }
  };

  // Intersection Observer to track active section (including introduction)
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0% -80% 0%",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === introRef.current) {
            setActiveSection(-1);
          } else {
            const sectionIndex = sectionRefs.current.findIndex(
              (ref) => ref === entry.target
            );
            if (sectionIndex !== -1) {
              setActiveSection(sectionIndex);
            }
          }
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    if (introRef.current) {
      observer.observe(introRef.current);
    }

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      if (introRef.current) {
        observer.unobserve(introRef.current);
      }
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [blogDetails]);

  const banner = {
    banner: MainBanner,
    mobileBanner: mainMobileBanner,
    title: "Insights & Innovations",
    description:
      "Stay updated with the latest trends, expert opinions, and company news from ShilpGroup.",
  };

  if (loading) {
    return <LoaderWithStyles />;
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

  const onSubmit = async (data: any) => {
    setIsLoading(true);
    setErrorMessage(null);

    try {
      const response = await axios.post(`${BASE_URL}/send-enquiry-mail`, {
        name: data.name,
        email: data.email,
        contact: data.contact,
        message: data.message,
        project: data.project || "No project selected",
        token: "6gfG97fTGrx7ELcGXqAA5UGJXTHx94",
      });

      if (response?.data) {
        setConfirmationOpen(true);
        navigate("/thank-you", {
          state: {
            name: data.name,
            project: data.project,
          },
        });
        reset();
      }
    } catch (error: any) {
      setErrorMessage(
        error.response?.data?.message ||
          "Failed to submit the form. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const commercialData = getCategoryData(commerical);
  const residentialData = getCategoryData(residential);
  const plotdata = getCategoryData(plots);
  const allCatData = [...commercialData, ...residentialData, ...plotdata];

  return (
    <>
      {/* Dynamic SEO Meta Tags for Blog */}
      {metaTags && (
        <Helmet>
          {/* Basic Meta Tags */}
          <title>{metaTags.title}</title>
          <meta name="description" content={metaTags.description} />
          <meta name="keywords" content={metaTags.keywords} />
          <link rel="canonical" href={metaTags.canonicalUrl} />

          {/* Open Graph Meta Tags */}
          <meta property="og:title" content={metaTags.ogTitle} />
          <meta property="og:description" content={metaTags.ogDescription} />
          <meta property="og:image" content={metaTags.ogImage} />
          <meta property="og:url" content={metaTags.ogUrl} />
          <meta property="og:type" content="article" />
          <meta property="og:site_name" content="Shilp Group" />

          {/* Twitter Card Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={metaTags.ogTitle} />
          <meta name="twitter:description" content={metaTags.ogDescription} />
          <meta name="twitter:image" content={metaTags.ogImage} />

          {/* Article specific meta tags */}
          <meta property="article:author" content={blogDetails?.publish} />
          <meta property="article:published_time" content={blogDetails?.date} />
          <meta property="article:section" content="Real Estate" />
          <meta property="article:tag" content="Real Estate" />
          <meta property="article:tag" content="Ahmedabad" />
          <meta property="article:tag" content="Property" />

          {/* Additional SEO Meta Tags */}
          <meta name="robots" content="index, follow" />
          <meta name="author" content={blogDetails?.publish} />

          {/* Structured Data */}
          <script type="application/ld+json">{metaTags.structuredData}</script>
        </Helmet>
      )}

      <BlogBanner data={banner} />

      <div className="mx-auto mt-10 px-4 lg:px-8">
        {/* Blog Header - Full Width */}
        <motion.div
          className="mb-8"
          ref={introRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Blog Title */}
          <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 text-gray-900 leading-tight">
            {blogDetails?.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-6">
            <div className="flex items-center gap-2">
              <img
                src={profile}
                alt="author"
                className="w-4 h-4 object-contain"
              />
              <span>{blogDetails?.publish}</span>
            </div>
            <div className="flex items-center gap-2">
              <img
                src={Calendar}
                alt="calendar"
                className="w-4 h-4 object-contain"
              />
              <span>{blogDetails?.date}</span>
            </div>
          </div>
        </motion.div>

        {/* Three Column Layout */}
        <div className="flex flex-col xl:flex-row gap-8 ">
          {/* Left Sidebar - Table of Contents */}
          <div className="xl:w-64 order-2 xl:order-1 hidden lg:block">
            <div className="sticky top-8">
              {blogDetails?.points && blogDetails.points.length > 0 && (
                <motion.div
                  className="bg-gray-50 rounded-lg p-6"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h3 className="font-semibold text-lg mb-4 text-gray-900">
                    In this article
                  </h3>
                  <nav className="space-y-2">
                    <motion.button
                      onClick={() => scrollToSection(-1)}
                      className={`block w-full text-left text-sm font-medium mb-3 py-2 pl-4 border-l-2 rounded-r-md transition-all duration-300 ${
                        activeSection === -1
                          ? "text-black text-md bg-blue-50 border-blue-600"
                          : "text-blue-600 hover:bg-blue-50 border-blue-400 hover:border-blue-600"
                      }`}
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Introduction
                    </motion.button>
                    {blogDetails.points.map((point, index) => (
                      <motion.button
                        key={index}
                        onClick={() => scrollToSection(index)}
                        className={`block w-full text-left text-sm transition-all duration-300 py-2 pl-4 border-l-2 rounded-r-md ${
                          activeSection === index
                            ? "text-blue-600 bg-blue-50 border-blue-600 font-medium"
                            : "text-gray-600 hover:text-blue-600 border-gray-200 hover:border-blue-600 hover:bg-blue-50"
                        }`}
                        whileHover={{ x: 4 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {point.title}
                      </motion.button>
                    ))}
                  </nav>
                </motion.div>
              )}
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 order-1 xl:order-2">
            {/* Featured Image */}
            <motion.div
              className="mb-8 rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <BannerImg image={blogDetails?.image} alt={blogDetails?.alt} />
            </motion.div>

            {/* Blog Description */}
            {blogDetails?.desc && (
              <motion.div
                className="text-lg text-gray-600 mb-12 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {blogDetails.desc}
              </motion.div>
            )}

            {/* Blog Content Points */}
            <div className="space-y-12">
              {blogDetails?.points.map((blog, index) => (
                <motion.div
                  key={index}
                  className="scroll-mt-20"
                  ref={(el) => (sectionRefs.current[index] = el)}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                >
                  {/* Section Title */}
                  <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-900 leading-tight">
                    {blog.title}
                  </h2>

                  {/* Section Content */}
                  <div
                    className="prose prose-lg max-w-none text-gray-600 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: blog.subtitle }}
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="xl:w-80 order-3 hidden lg:block">
            <div className="sticky top-8 space-y-8">
              {/* Contact Us */}
              <motion.div
                className="bg-white border border-gray-200 rounded-lg p-6"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <TextField
                    variant="outlined"
                    label="Your Name"
                    className="w-full"
                    {...register("name")}
                    error={!!errors.name}
                    helperText={errors.name?.message}
                  />

                  <TextField
                    variant="outlined"
                    label="Email Id"
                    className="w-full"
                    {...register("email")}
                    error={!!errors.email}
                    helperText={errors.email?.message}
                  />

                  <TextField
                    variant="outlined"
                    type="number"
                    label="Contact No."
                    onInput={(e) => {
                      e.target.value = Math.max(0, parseInt(e.target.value))
                        .toString()
                        .slice(0, 10);
                    }}
                    className="w-full"
                    {...register("contact")}
                    error={!!errors.contact}
                    helperText={errors.contact?.message}
                  />

                  <Controller
                    name="project"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <TextField
                        {...field}
                        select
                        variant="outlined"
                        value={field.value || ""}
                        label="Select Project"
                        className="w-full"
                        error={!!errors?.project}
                        helperText={errors?.project?.message}
                        SelectProps={{
                          MenuProps: {
                            PaperProps: {
                              style: {
                                maxHeight: 300,
                              },
                            },
                          },
                        }}
                      >
                        {allCatData.map((option, index) => (
                          <MenuItem
                            key={`${option.title}-${index}`} // Combine title and index for uniqueness
                            value={option.title}
                            style={{ height: 50 }}
                          >
                            {option.title}
                          </MenuItem>
                        ))}
                      </TextField>
                    )}
                  />

                  <TextareaAutosize
                    minRows={4}
                    placeholder="Your Message"
                    className="w-full border text-black border-gray-300 rounded p-2"
                    {...register("message")}
                  />
                  {errors?.message && (
                    <span className="text-red-500 mb-5">
                      {errors?.message.message}
                    </span>
                  )}

                  <CustomButton
                    text={isLoading ? "Submitting..." : "Submit"}
                    type="submit"
                    disabled={isLoading}
                  />
                </form>

                {errorMessage && (
                  <div className="pt-5">
                    <span className="text-red-500">{errorMessage}</span>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <ConfirmationModal
        isOpen={isConfirmationOpen}
        onConfirm={() => setConfirmationOpen(false)}
        confirmButtonText={"Ok"}
        onClose={() => setConfirmationOpen(false)}
        message={ENQUIRY_SUCCESS_MESSAGE}
      />
    </>
  );
};

export default BlogDetails;
