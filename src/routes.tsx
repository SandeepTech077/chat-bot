
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { Suspense, lazy } from "react";
import PageLayout from "./layout/PageLayout";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import ErrorFallback from "./components/GlobalErrorHandler/ErrorFallBack";
import HelmetLayout from "./layout/HelmetLayout";
import Loader from "./components/Loader/Loader";

// Lazy load pages for better performance
const Home = lazy(() => import("./pages/Home"));
const ThankYou = lazy(() => import("./pages/ThankYou"));
const ContactUs = lazy(() => import("./pages/Contact"));
const AboutUs = lazy(() => import("./pages/About"));
const ProjectTree = lazy(() => import("./pages/ProjectTree"));
const Career = lazy(() => import("./pages/Career"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogDetails = lazy(() => import("./pages/BlogDetails"));
const ShilpProjects = lazy(() => import("./pages/ShilpProjects"));
const OurTeam = lazy(() => import("./pages/OurTeam"));
const ProjectCategory = lazy(() => import("./pages/ProjectCategory"));
const TermsCondition = lazy(() => import("./pages/TermsCondition"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const NotFound = lazy(() => import("./pages/NotFound")); // path from routes to pages


const routeConfig = [
  { path: "/", component: <Home /> },
  { path: "/thank-you", component: <ThankYou /> },
  { path: "/contact-us", component: <ContactUs /> },
  { path: "/about-us", component: <AboutUs /> },
  { path: "/projects/:category", component: <ProjectCategory /> },
  { path: "/project-overview", component: <ProjectTree /> },
  { path: "/careers", component: <Career /> },
  { path: "/blog", component: <Blog /> },
  { path: "/blog/:title", component: <BlogDetails /> },
  { path: "/projects/:category/:url", component: <ShilpProjects /> },
  { path: "/our-team", component: <OurTeam /> },
  { path: "/terms-and-conditions", component: <TermsCondition /> },
  { path: "/privacy-policy", component: <PrivacyPolicy /> },
  { path: "*", component: <NotFound /> }, //comment added
];

const   AppRoutes = () => {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <PageLayout>
        <HelmetLayout />
        <ScrollToTop />
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Suspense fallback={<Loader />}>
            <Routes>
              {routeConfig.map(({ path, component }, index) => (
                <Route key={index} path={path} element={component} />
              ))}
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </PageLayout>
    </Router>
  );
};

export default AppRoutes;

