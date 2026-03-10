import React, { useState, useEffect, useRef } from "react";
import { FiX, FiChevronDown } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import { RiMenu3Line } from "react-icons/ri";
import { FaWpforms } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";
import { motion, AnimatePresence } from "framer-motion";
import Images from "../assets/Images";
import Icons from "../assets/Icons";
import EnquiryModal from "./Modals/EnquiryModal";
import { getCategoryData } from "../utils/helper";
import { commerical, plots, residential } from "../constants/projectTypes";

// ─── Types ────────────────────────────────────────────────────────────────────
interface NavLink {
  label: string;
  href: string;
}

interface DropdownItem {
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
}

interface DropdownProps {
  items: DropdownItem[];
  label: string;
  category: string;
}

// ─── Desktop Dropdown ─────────────────────────────────────────────────────────
const DesktopDropdown: React.FC<DropdownProps> = ({ items, label, category }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const midPoint = Math.ceil(items.length / 2);
  const leftItems = items.slice(0, midPoint);
  const rightItems = items.slice(midPoint);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        to={`/projects/${category}`}
        className="group flex items-center gap-1 text-[13px] xl:text-sm font-medium tracking-wide py-2 px-3"
      >
        <span className="relative">
          {label}
          <span className="absolute -bottom-0.5 left-0 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
        </span>
        <FiChevronDown
          size={13}
          className={`text-white/60 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </Link>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.18 }}
            className="absolute left-1/2 -translate-x-1/2 top-full mt-0 w-[560px] z-50"
          >
            <div className="bg-[#0d0d0d]/95 backdrop-blur-xl border border-white/10 rounded-lg shadow-2xl overflow-hidden">
              <div className="h-[1px] bg-white/15" />
              <div className="grid grid-cols-2 p-5 gap-2 relative">
                <div className="absolute left-1/2 top-4 bottom-4 w-px bg-white/10" />
                {[leftItems, rightItems].map((colItems, ci) => (
                  <div key={ci} className="space-y-0.5">
                    {colItems.map((item) => (
                      <Link
                        key={item.id}
                        to={`/projects/${item.parent_category}/${item.url}`}
                        className="group/item flex flex-col px-3 py-2.5 rounded-md hover:bg-white/5 transition-all duration-200"
                        onClick={() => setOpen(false)}
                      >
                        <span className="text-[13px] font-medium text-white/90 group-hover/item:text-white transition-colors duration-200">
                          {item.title}
                        </span>
                        <span className="text-[11px] text-gray-500 flex items-center gap-1 mt-0.5">
                          <SlLocationPin className="shrink-0" />
                          {item.address.mini_address.line1}
                          {item.size && ` · ${item.size}`}
                        </span>
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// ─── Mobile Dropdown ──────────────────────────────────────────────────────────
const MobileDropdown: React.FC<{
  isOpen: boolean;
  label: string;
  items: DropdownItem[];
  category: string;
  onToggle: () => void;
  onClose: () => void;
}> = ({ isOpen, label, items, category, onToggle, onClose }) => (
  <div className="border-b border-white/10 pb-3">
    <div className="flex justify-between items-center py-2.5">
      <Link
        to={`/projects/${category}`}
        className="text-sm text-white/80 font-medium tracking-wide hover:text-white transition-colors"
        onClick={onClose}
      >
        {label}
      </Link>
      <button
        onClick={onToggle}
        className={`p-1 text-white/60 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
      >
        <FiChevronDown size={14} />
      </button>
    </div>

    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.22 }}
          className="overflow-hidden"
        >
          <div className="ml-3 space-y-3 pt-1 pb-2">
            {items.map((item) => (
              <Link
                key={item.id}
                to={`/projects/${item.parent_category}/${item.url}`}
                className="group flex flex-col"
                onClick={onClose}
              >
                <span className="text-[13px] text-white/80 group-hover:text-white transition-colors font-medium">
                  {item.title}
                </span>
                <span className="text-[11px] text-gray-500 flex items-center gap-1 mt-0.5">
                  <SlLocationPin />
                  {item.address.mini_address.line1}
                  {item.size && ` · ${item.size}`}
                </span>
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

// ─── Main Navbar ──────────────────────────────────────────────────────────────
const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCommercialOpen, setIsCommercialOpen] = useState(false);
  const [isResidentialOpen, setIsResidentialOpen] = useState(false);
  const [isPlotsOpen, setIsPlotsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => { setIsMenuOpen(false); }, [location]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
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

  const toggleMenu = () => setIsMenuOpen((p) => !p);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <nav
        className="fixed top-0 w-full z-50 text-white bg-black/70 backdrop-blur-md"
      >
        {/* Subtle top accent line */}
        <div className="h-[1px] bg-white/10" />

        <div className="container-base mx-auto px-4 xl:px-8 py-3.5 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="shrink-0">
            <img
              src={Images.whiteLogo}
              alt="Shilp Group"
              loading="eager"
              className="xl:w-[112px] w-[96px] object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-0.5 text-white">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="group relative text-[13px] xl:text-sm font-medium tracking-wide px-3 py-2"
              >
                <span className="relative">
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
                </span>
              </Link>
            ))}

            <DesktopDropdown label="Commercial" items={dropdowns.commercial} category={commerical} />
            <DesktopDropdown label="Residential" items={dropdowns.residential} category={residential} />
            <DesktopDropdown label="Plots" items={dropdowns.plots} category={plots} />

            <Link
              to="http://snehshilp.org"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative text-[13px] xl:text-sm font-medium tracking-wide px-3 py-2"
            >
              <span className="relative">
                Sneh Shilp Foundation
                <span className="absolute -bottom-0.5 left-0 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
              </span>
            </Link>
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-4">
            {/* Enquiry button - desktop */}
            <button
              className="hidden lg:inline-flex items-center text-[12px] font-semibold tracking-[0.12em] uppercase border border-white/70 text-white hover:bg-white hover:text-black px-5 py-2 rounded-sm transition-all duration-300"
              onClick={() => setIsModalOpen(true)}
            >
              Enquire Now
            </button>

            {/* Phone */}
            <a
              href="tel:+917435811123"
              className="hover:opacity-70 transition-opacity"
              aria-label="Call us"
            >
              <img loading="lazy" src={Icons.call} alt="call" className="w-5 h-5 object-contain" />
            </a>

            {/* Mobile enquiry icon */}
            <FaWpforms
              size={20}
              className="text-white hover:text-gray-300 transition-colors cursor-pointer lg:hidden"
              onClick={() => setIsModalOpen(true)}
            />

            {/* Hamburger */}
            <button
              onClick={toggleMenu}
              aria-label="Toggle menu"
              className="text-white hover:text-gray-300 transition-colors duration-200"
            >
              {isMenuOpen ? <FiX size={24} /> : <RiMenu3Line size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile Sidebar ── */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Dark overlay */}
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/65 backdrop-blur-sm z-40"
              onClick={closeMenu}
            />

            {/* Sidebar drawer */}
            <motion.aside
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.28 }}
              className="fixed top-0 right-0 h-full w-[280px] bg-[#080808] border-l border-white/10 z-50 flex flex-col overflow-y-auto"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
                <img src={Images.whiteLogo} alt="logo" className="w-[88px]" />
                <button
                  onClick={closeMenu}
                  className="text-white/60 hover:text-white transition-colors"
                >
                  <FiX size={22} />
                </button>
              </div>

              {/* Nav items */}
              <div className="flex-1 px-6 py-5 space-y-0.5">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    to={link.href}
                    onClick={closeMenu}
                    className="block py-2.5 text-sm text-white/75 hover:text-white border-b border-white/10 font-medium tracking-wide transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}

                <MobileDropdown
                  label="Commercial"
                  items={dropdowns.commercial}
                  category={commerical}
                  isOpen={isCommercialOpen}
                  onToggle={() => setIsCommercialOpen((p) => !p)}
                  onClose={closeMenu}
                />
                <MobileDropdown
                  label="Residential"
                  items={dropdowns.residential}
                  category={residential}
                  isOpen={isResidentialOpen}
                  onToggle={() => setIsResidentialOpen((p) => !p)}
                  onClose={closeMenu}
                />
                <MobileDropdown
                  label="Plots"
                  items={dropdowns.plots}
                  category={plots}
                  isOpen={isPlotsOpen}
                  onToggle={() => setIsPlotsOpen((p) => !p)}
                  onClose={closeMenu}
                />

                {sidebarLinks.map((link) => (
                  <Link
                    key={link.label}
                    to={link.href}
                    onClick={closeMenu}
                    className="block py-2.5 text-sm text-white/75 hover:text-white border-b border-white/10 font-medium tracking-wide transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}

                <a
                  href="http://snehshilp.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block py-2.5 text-sm text-white/75 hover:text-white border-b border-white/10 font-medium tracking-wide transition-colors"
                >
                  Sneh Shilp Foundation
                </a>
              </div>

              {/* CTA at bottom */}
              <div className="px-6 py-5 border-t border-white/10">
                <button
                  className="w-full py-3 text-sm font-semibold tracking-[0.12em] uppercase bg-white text-black hover:bg-gray-200 transition-colors rounded-sm"
                  onClick={() => { setIsModalOpen(true); closeMenu(); }}
                >
                  Enquire Now
                </button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Enquiry Modal */}
      <EnquiryModal
        isModalOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default Navbar;
