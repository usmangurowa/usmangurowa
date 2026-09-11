// Adapted from https://pdfcn.dev/r/takumi/utils.json (MIT; see LICENSE).
// Only the text/layout primitives used by this document are retained.
import React, { type CSSProperties, type ReactNode } from "react";

export type Style = CSSProperties;
type StyleInput = Style | Style[];
export const pointToCssPixel = (value: number) => value * (96 / 72);
export const StyleSheet = {
  create<T extends Record<string, Style>>(styles: T): T {
    return styles;
  },
};

// pdfcn tokens use points; Takumi's numeric CSS lengths use 96-DPI pixels.
// Unitless properties (lineHeight, fontWeight, etc.) must not be converted.
const POINT_LENGTH_PROPERTIES = new Set([
  "fontSize", "letterSpacing", "width", "height", "minWidth", "maxWidth",
  "minHeight", "maxHeight", "top", "right", "bottom", "left", "gap",
  "rowGap", "columnGap", "margin", "marginTop", "marginBottom", "marginLeft",
  "marginRight", "padding", "paddingTop", "paddingBottom", "paddingLeft",
  "paddingRight", "borderWidth", "borderTopWidth", "borderBottomWidth",
  "borderLeftWidth", "borderRightWidth", "textIndent",
]);

export function flatten(style?: StyleInput): CSSProperties {
  const merged: Style = Array.isArray(style) ? Object.assign({}, ...style) : style ?? {};
  return Object.fromEntries(Object.entries(merged).map(([property, value]) => [
    property,
    typeof value === "number" && POINT_LENGTH_PROPERTIES.has(property)
      ? pointToCssPixel(value)
      : value,
  ]));
}

type Props = { children?: ReactNode; style?: StyleInput };

export function View({ children, style, wrap }: Props & { wrap?: boolean }) {
  return (
    <div style={{
      display: "flex", flexDirection: "column", ...flatten(style),
      ...(wrap === false ? { breakInside: "avoid" } : {}),
    }}>
      {children}
    </div>
  );
}

export function PDFText({ children, style, href }: Props & { href?: string }) {
  return href
    ? <a href={href} style={flatten(style)}>{children}</a>
    : <span style={flatten(style)}>{children}</span>;
}
