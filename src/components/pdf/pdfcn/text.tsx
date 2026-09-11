// Adapted from https://pdfcn.dev/r/takumi/text.json (MIT; see LICENSE).
// Explicit, immutable theme instead of the registry's global serializer state.
import React, { type ReactNode } from "react";
import { pdfTheme as theme } from "../../../lib/pdf/theme";
import { PDFText, StyleSheet, type Style } from "./primitives";

const styles = StyleSheet.create({
  text: {
    color: theme.colors.ink,
    fontFamily: theme.fonts.body,
    fontSize: theme.bodySize,
    lineHeight: theme.lineHeight,
    marginBottom: theme.paragraphGap,
    marginTop: 0,
  },
  weightNormal: { fontWeight: 400 },
  weightSemibold: { fontWeight: 600 },
  noMargin: { marginBottom: 0, marginTop: 0 },
});

export function Text({ children, weight = "normal", noMargin, style, href }: {
  children?: ReactNode;
  weight?: "normal" | "semibold";
  noMargin?: boolean;
  style?: Style;
  href?: string;
}) {
  return (
    <PDFText href={href} style={[
      styles.text,
      weight === "semibold" ? styles.weightSemibold : styles.weightNormal,
      ...(noMargin ? [styles.noMargin] : []),
      ...(style ? [style] : []),
    ]}>
      {children}
    </PDFText>
  );
}
