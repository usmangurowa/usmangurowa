import { fileURLToPath } from "node:url";
import { generateResumes } from "../src/lib/pdf/generate";

async function main() {
  const args = process.argv.slice(2);
  if (args.some((arg) => arg !== "--check") || args.filter((arg) => arg === "--check").length > 1) {
    throw new Error(`Unknown or duplicate flags: ${args.join(" ")}`);
  }
  const check = args.includes("--check");
  const outputDir = fileURLToPath(new URL("../public/resume/", import.meta.url));
  const reports = await generateResumes({ outputDir, check });
  for (const report of reports) {
    console.log(`${report.id}: ${report.pages} A4 pages; minimum ${report.minSize.toFixed(1)}pt; ${report.links} live links`);
  }
  console.log(check ? `Checked ${reports.length} resume PDFs; all are current.` : `Generated ${reports.length} resume PDFs in public/resume.`);
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
