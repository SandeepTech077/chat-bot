import { TiLocationOutline } from "react-icons/ti";
import { LuSmartphone } from "react-icons/lu";
import Images from "../assets/Images";
import { Link } from "react-router-dom";
import Icons from "../assets/Icons";
import { FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-white text-black md:px-20 px-3">
      <div className="container-base justify-end py-10">
        {/* Social Media Section */}
        <div className="flex items-center gap-4 py-8 justify-center sm:justify-end">
          <span className="lg:text-xl sm:text-sm">Follow us on</span>
          <div className="flex gap-7">
            <Link
              to="https://www.facebook.com/ShilpGroup/"
              className="hover:opacity-70 transition-opacity"
              target="_blank"
            >
              <img  loading="lazy" src={Icons.facebook} alt="facebook" className="h-6 w-6 sm:h-8 sm:w-8" />
            </Link>
            <Link
              to="https://www.instagram.com/shilpgroup/"
              className="hover:opacity-70 transition-opacity"
              target="_blank"
            >
              <img loading="lazy" src={Icons.insta} alt="ins tagram" className="h-6 w-6 sm:h-8 sm:w-8" />
            </Link>
            <Link
              to="https://www.youtube.com/channel/UCl4AhLyffIpnKCwyCPwkBNQ"
              className="hover:opacity-70 transition-opacity"
              target="_blank"
            >
              <img loading="lazy" src={Icons.youtube} alt="youtube" className="h-6 w-6 sm:h-8 sm:w-8" />
            </Link>
            <Link
              to="https://www.linkedin.com/company/shilpgroup/posts/?feedView=all"
              className="hover:opacity-70 transition-opacity"
              target="_blank"
            >
              <img loading="lazy" src={Icons.linkedin} alt="linkedin" className="h-6 w-6 sm:h-8 sm:w-8" />
            </Link>
            <Link
              to="https://x.com/i/flow/login?redirect_after_login=%2FGroupShilp"
              className="hover:opacity-70 transition-opacity"
              target="_blank"
            >
              <img loading="lazy" src={Icons.twitter} alt="x" className="h-6 w-6 sm:h-8 sm:w-8" />
            </Link>
          </div>
        </div>

        {/* Rest of the Footer Content */}
        <div className="flex flex-col lg:flex-row justify-between items-start w-full space-y-8 lg:space-y-0">
          <div className="flex flex-col space-y-4 w-full lg:w-1/3">
            <img
              src={Images.ShlipBlackLogo}
              alt="footer-logo"
              loading="lazy"
              className="xl:w-[120px] sm:w-[100px] w-[120px] mb-2 self-start"
            />
            <p className="text-xs sm:text-lg">
              To be the obvious, the most trusted choice in real estate creating a better, liveable and comfortable life for everyone
            </p>
          </div>

       <div className="flex flex-col space-y-4 w-full lg:w-1/4">
            <h2 className="text-xs sm:text-xl font-semibold">Explore</h2>
            <ul className="space-y-2 text-xs sm:text-lg">
              <li>
                <Link to="/projects/residential">Residential Projects</Link>
              </li>
              <li>
                <Link to="/projects/commercial">Commercial Projects</Link>
              </li>
              <li>
                <Link to="/projects/plots">Plots</Link>
              </li>
              <li>
                <Link to="/project-overview">Project Tree</Link>
              </li>
              <li>
                <Link to="/blog">Blogs</Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col space-y-4 w-full lg:w-1/4">
            <h2 className="text-xs sm:text-xl font-semibold">About Shilp</h2>
            <ul className="space-y-2 text-xs sm:text-lg">
              <li>
                <Link to="/">Home</Link>
              </li>
                <li>
                <Link to="about-us">About Us</Link>
              </li>
              <li>
                <Link to="/our-team">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/careers">
                  Career
                </Link>
              </li>
              <li>
                <Link to="/contact-us">contact Us</Link>
              </li>
            
            </ul>
          </div>

          <div className="flex flex-col space-y-4 w-full lg:w-1/3">
            <h2 className="text-xs sm:text-xl font-semibold">Contact Us</h2>
            <div className="flex gap-3 items-start">
              <TiLocationOutline size={24} className="flex-shrink-0 mt-1" />
              <span className="text-xs sm:text-lg">
                SHILP HOUSE, Rajpath Rangoli Rd, Opposite Rajpath Club, Bodakdev, Ahmedabad, Gujarat 380054
              </span>
            </div>
            <div className="flex flex-col space-y-2">
              <div className="flex gap-3 items-start">
                <LuSmartphone size={24} className="flex-shrink-0" />
                <div className="flex flex-col text-xs sm:text-lg">
                  <a href="tel:+919898211567">+91 9898211567</a>
                  <a href="tel:+919898508567">+91 9898508567</a>
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <div className="flex gap-3">
                <FiMail size={24} className="flex-shrink-0" />
                <div className="flex flex-col text-xs sm:text-lg items-start justify-center">
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=sales@shilp.co.in"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    sales@shilp.co.in
                  </a>
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=saumil@shilp.co.in"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    saumil@shilp.co.in
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-t border-[#EDEAEA] my-5" />

        <div className="flex flex-col sm:flex-row justify-between items-center text-xs mt-5 sm:text-md">
          <p>&copy; {new Date().getFullYear()} All rights reserved</p>
          <div className="flex space-x-2">
            <Link to="/terms-and-conditions">Terms of Use</Link>
            <span>|</span>
            <Link to="/privacy-policy">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );  
};

export default Footer;