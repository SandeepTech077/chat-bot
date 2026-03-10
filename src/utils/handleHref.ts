// src/helpers/scrollHelper.ts

import React from "react";

interface ScrollToSectionParams {
  e: React.MouseEvent<HTMLElement>;
  href: string;
  scrollToSection: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

export const handleHref = ({ e, href, scrollToSection }: ScrollToSectionParams) => {
  if (href?.startsWith("#")) {
    // Type assertion to match expected type for scrollToSection
    const anchorEvent = e as React.MouseEvent<HTMLAnchorElement>;
    scrollToSection(anchorEvent, href);
  }
};
