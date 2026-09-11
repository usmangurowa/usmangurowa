import { readFile } from "node:fs/promises";
import type { FontLoader } from "takumi-pdf";
import { brand } from "../../data/brand";

export const fontFiles = {
  heading: new URL("../../assets/fonts/BricolageGrotesque-latin-variable.woff2", import.meta.url),
  body: new URL("../../assets/fonts/Inter-latin-variable.woff2", import.meta.url),
};

export async function loadFonts(files = fontFiles): Promise<FontLoader[]> {
  return Promise.all((["heading", "body"] as const).map(async (key) => {
    try {
      return { name: brand.fonts[key], data: await readFile(files[key]) };
    } catch (error) {
      throw new Error(`Cannot load local PDF ${key} font: ${files[key].pathname}`, { cause: error });
    }
  }));
}
