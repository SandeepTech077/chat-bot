import React, { useState, useEffect } from "react";
import { FiX, FiChevronUp, FiChevronDown } from "react-icons/fi";
import { Link } from "react-router-dom";
import { RiMenu3Line } from "react-icons/ri";
import { FaWpforms } from "react-icons/fa";
import Images from "../assets/Images";
import Icons from "../assets/Icons";
import EnquiryModal from "./Modals/EnquiryModal";
import { getCategoryData } from "../utils/helper";
import { commerical, plots, residential } from "../constants/projectTypes";
import { SlLocationPin } from "react-icons/sl";

// Types
interface NavLink {
  label: string;
  href: string;
}

interface DropdownProps {
  items: Array<{
    id: string;
    title: string;
    url: string;
    size: string;
    parent_category: string;
    address: {
      mini_address: {
        line1: string;
        line2?: string;
        city?: string;
        state?: string;
        zip?: string;
      };
    };
  }>;
  label: string;

  category: string;
}

// Internal Components
const DesktopDropdown: React.FC<DropdownProps> = ({
  items,
  label,
  category,
}) => {
  const midPoint = Math.ceil(items.length / 2);

  const leftItems = items.slice(0, midPoint);
  const rightItems = items.slice(midPoint);

  return (
    <div className="relative ">
      <div>
        {/* Wrap only the label in a group div */}
        <div className="group inline-flex relative">
          <Link
            to={`/projects/${category}`}
            className="flex items-center text-sm hover:bg-black/30 hover:text-gray-300 xl:px-5 px-1 py-2  rounded transition-colors duration-300"
          >
            {label}
            <FiChevronDown className="ml-1" />
          </Link>

          {/* Move the dropdown inside the group div */}
          <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-[600px] bg-white/10 backdrop-blur-[30px] rounded-lg shadow-2xl invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 origin-top top-10 ">
            <div className="absolute inset-0 bg-black/50 rounded-lg" />
            <div className="relative grid grid-cols-2 gap-6 p-6">
              {[leftItems, rightItems].map((columnItems, columnIndex) => (
                <div key={columnIndex} className="space-y-3">
                  {columnItems.map((item) => {
                    // Log the item.title here

                    return (
                      <div key={item.id} className="group/item">
                        <Link
                          to={`/projects/${item.parent_category}/${item.url}`}
                          className="px-4 py-2 text-white rounded-md transition-colors duration-200 flex flex-col"
                        >
                          <span className="text-base">{item.title}</span>
                          <div className="w-full h-px bg-white/20 opacity-0 scale-x-0 transition-all duration-300 group-hover/item:opacity-100 group-hover/item:scale-x-100" />
                          <span className="text-sm transition-colors duration-300 group-hover/item:text-white flex gap-2 items-center">
                            <SlLocationPin /> {item?.address.mini_address.line1}{" "}
                            {item?.size && `|  ${item.size}`}
                          </span>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              ))}

              <div className="absolute left-1/2 top-[24px] bottom-[24px] -translate-x-1/2 w-[2px] bg-white/20" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MobileDropdown: React.FC<{
  isOpen: boolean;
  label: string;
  items: DropdownProps["items"];
  category: string; // Add category prop
  onToggle: () => void;
  onClose: () => void;
}> = ({ isOpen, label, items, category, onToggle, onClose }) => (
  <div className="space-y-4">
    <div className="flex justify-between items-center">
      {/* Make the parent category label a clickable link */}
      <Link
        to={`/projects/${category}`}
        className="text-white font-medium"
        onClick={onClose} // Close the menu on click
      >
        {label}
      </Link>
      {/* Toggle button */}
      <button onClick={onToggle} className="text-white lg:hidden">
        {isOpen ? <FiChevronUp /> : <FiChevronDown />}
      </button>
    </div>

    {isOpen && (
      <div className="ml-4 lg:hidden rounded mt-2 p-3 space-y-5 mb-2">
        {items.map((item) => (
          <Link
            key={item.id}
            to={`/projects/${item.parent_category}/${item.url}`}
            className="block text-white"
            onClick={onClose}
          >
            <div className="flex flex-col">
              <span className="font-semibold text-[13px]">{item.title}</span>
              <div className="flex items-center gap-2">
                <SlLocationPin className="text-sm" />
                <div className="text-[11px] text-gray-300">
                  {item.address.mini_address.line1}{" "}
                  {item?.size && `|  ${item.size}`}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    )}
    <hr className="border-gray-300 lg:hidden" />
  </div>
);

// Main Navbar Component
const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCommercialOpen, setIsCommercialOpen] = useState(false);
  const [isResidentialOpen, setIsResidentialOpen] = useState(false);
  const [isPlotsOpen, setIsPlotsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const navLinks: NavLink[] = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about-us" },
  ];

  const sidebarLinks: NavLink[] = [
    { label: "Our Team", href: "/our-team" },
    { label: "Project Tree", href: "/project-overview" },
    { label: "Blogs", href: "/blog" },
    { label: "Career", href: "/careers" },
    { label: "Contact Us", href: "/contact-us" },
  ];

  const dropdowns = {
    commercial: getCategoryData(commerical),
    residential: getCategoryData(residential),
    plots: getCategoryData(plots),
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="fixed top-0 w-full z-20 transition-shadow duration-300 text-white">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm pointer-events-none" />

      {/* Main Navbar Content */}
      <div className="container-base mx-auto px-4 py-4 flex items-center justify-between relative z-10 ">
        {/* Logo */}
        <Link to="/" className="z-20">
          <img
            src={Images.whiteLogo}
            alt="logo"
            loading="lazy"
            className="xl:w-[120px] sm:w-[100px] w-[120px]"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-4 text-sm xl:text-base text-white z-20 ">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="hover:bg-black/30 hover:text-gray-300 xl:px-5 px-2 py-2 rounded transition-colors duration-300 text-sm"
            >
              {link.label}
            </Link>
          ))}

          <DesktopDropdown
            label="Commercial"
            items={dropdowns.commercial}
            category={commerical}
          />
          <DesktopDropdown
            label="Residential"
            items={dropdowns.residential}
            category={residential}
          />
          <DesktopDropdown
            label="Plots"
            items={dropdowns.plots}
            category={plots}
          />

          <Link
            to="http://snehshilp.org"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:bg-black/30 hover:text-gray-300 xl:px-5 px-1 py-2 rounded transition-colors duration-300 text-sm"
          >
            Sneh Shilp Foundation
          </Link>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center xl:space-x-4 space-x-5 z-20">
          <button
            className="hidden lg:block border rounded-full py-2 md:px-3 lg:px-5 text-sm hover:bg-black hover:border-black hover:text-white transition-colors duration-200"
            onClick={() => setIsModalOpen(true)}
          >
            Enquiry Now
          </button>
          <a href="tel:+917435811123">
            <img loading="lazy" src={Icons.call} alt="call" className="z-20 " />
          </a>
          <FaWpforms
            className="text-xl lg:hidden z-20 h-6 w-6 "
            onClick={() => setIsModalOpen(true)}
          />
          <button onClick={toggleMenu} aria-label="Menu" className="z-20">
            <RiMenu3Line size={30} />
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed bg-black top-0 right-0 h-full overflow-auto shadow-lg w-64 p-6 transform transition-transform duration-300 z-20 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end">
          <FiX
            className="text-2xl cursor-pointer text-white"
            onClick={closeMenu}
          />
        </div>

        <div className="space-y-4 mt-8">
          {/* Mobile Navigation Links */}
          {navLinks.map((link, index) => (
            <React.Fragment key={index}>
              {link.href.startsWith("http") ? (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="block text-white lg:hidden"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  to={link.href}
                  onClick={closeMenu}
                  className="block text-white lg:hidden"
                >
                  {link.label}
                </Link>
              )}
              <hr className="border-gray-300 lg:hidden" />
            </React.Fragment>
          ))}

          <MobileDropdown
            label="Commercial"
            items={dropdowns.commercial}
            category={commerical}
            isOpen={isCommercialOpen}
            onToggle={() => setIsCommercialOpen(!isCommercialOpen)}
            onClose={closeMenu}
          />
          <MobileDropdown
            label="Residential"
            items={dropdowns.residential}
            category={residential}
            isOpen={isResidentialOpen}
            onToggle={() => setIsResidentialOpen(!isResidentialOpen)}
            onClose={closeMenu}
          />
          <MobileDropdown
            label="Plots"
            items={dropdowns.plots}
            category={plots}
            isOpen={isPlotsOpen}
            onToggle={() => setIsPlotsOpen(!isPlotsOpen)}
            onClose={closeMenu}
          />

          {/* Additional Sidebar Links */}
          {sidebarLinks.map((link, index) => (
            <React.Fragment key={index}>
              <Link
                to={link.href}
                onClick={closeMenu}
                className="block text-white"
              >
                {link.label}
              </Link>
              <hr className="border-gray-300" />
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Enquiry Modal */}
      <EnquiryModal
        isModalOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
      />

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={closeMenu}
        />
      )}
    </nav>
  );
};

export default Navbar;
