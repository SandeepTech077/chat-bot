import { commerical, plots, residential } from "../constants/projectTypes";

export const getCategoryType = (category: string | undefined): string => {
  switch (category) {
    case residential:
      return "Residential";
    case commerical:
      return "Commerical";
    case plots:
      return "Plots";
    default:
      return "Unknown Category";
  }
};
