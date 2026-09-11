// Adapted from https://pdfcn.dev/r/takumi/heading.json (MIT; see LICENSE).
// Retains the theme-driven heading scale; uses real heading tags for PDF tagging.
import React, { type ReactNode } from "react";
import { pdfTheme as theme } from "../../../lib/pdf/theme";
import { flatten, StyleSheet } from "./primitives";

const base = {
  color: theme.colors.ink,
  fontFamily: theme.fonts.heading,
  fontWeight: 600,
  lineHeight: 1.1,
  margin: 0,
};
const styles = StyleSheet.create({
  h1: {
    ...base, fontSize: theme.nameSize, lineHeight: 1.25,
    fontVariationSettings: '"wght" 600, "opsz" 40, "wdth" 100',
  },
  h2: {
    ...base, fontSize: theme.headingSize,
    fontVariationSettings: '"wght" 600, "opsz" 14, "wdth" 100',
    marginTop: theme.sectionGap, marginBottom: 4, paddingBottom: 3,
    borderBottomWidth: 0.5, borderBottomStyle: "solid",
    borderBottomColor: theme.colors.rule,
  },
});

export function Heading({ children, level = 2 }: { children: ReactNode; level?: 1 | 2 }) {
  const Tag = level === 1 ? "h1" : "h2";
  return <Tag style={flatten(styles[Tag])}>{children}</Tag>;
}
