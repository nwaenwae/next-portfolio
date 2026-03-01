import { writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, "../public/images/projects");
mkdirSync(outDir, { recursive: true });

const projects = [
  { name: "afterklass", url: "https://www.afterklass.com/" },
  { name: "danone-care-plus", url: "https://danonecareplus.com/th/" },
  { name: "shiseido-ultimune", url: "https://ultimune.shiseido.co.th/" },
  { name: "codetism", url: "https://www.codetism.com/" },
  { name: "beauty-connect", url: "https://beautyconnect.shiseido.co.th/" },
  { name: "kuias", url: "https://kuias.ku.ac.th/" },
];

async function getScreenshot(projectUrl) {
  const apiUrl = `https://api.microlink.io?url=${encodeURIComponent(projectUrl)}&screenshot=true&meta=false`;
  const res = await fetch(apiUrl, { headers: { "User-Agent": "Mozilla/5.0" } });
  if (!res.ok) throw new Error(`Microlink API error: ${res.status}`);
  const json = await res.json();
  if (json.status !== "success") throw new Error(`Microlink failed: ${json.message}`);
  return json.data.screenshot.url;
}

async function downloadImage(imageUrl, filePath) {
  const res = await fetch(imageUrl);
  if (!res.ok) throw new Error(`Download failed: ${res.status}`);
  const buffer = Buffer.from(await res.arrayBuffer());
  writeFileSync(filePath, buffer);
}

for (const project of projects) {
  const filePath = join(outDir, `${project.name}.png`);
  try {
    console.log(`📸 Capturing ${project.name}...`);
    const screenshotUrl = await getScreenshot(project.url);
    await downloadImage(screenshotUrl, filePath);
    console.log(`   ✓ Saved to public/images/projects/${project.name}.png`);
  } catch (err) {
    console.error(`   ✗ Failed: ${err.message}`);
  }
}

console.log("\nDone.");
