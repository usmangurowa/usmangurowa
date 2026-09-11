import { brand } from "../../data/brand";

// All document/component dimensions are points, converted by pdfcn primitives.
export const pdfTheme = {
  colors: brand.light,
  fonts: brand.fonts,
  bodySize: 10.5,
  lineHeight: 1.25,
  nameSize: 27,
  headingSize: 12,
  margin: 42,
  bottomMargin: 76,
  footerInset: 27,
  sectionGap: 12,
  paragraphGap: 4,
  entryGap: 8,
} as const;
