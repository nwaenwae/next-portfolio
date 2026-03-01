import { writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, "../public/images/projects");
mkdirSync(outDir, { recursive: true });

const url = "https://ultimune.shiseido.co.th/";
const filePath = join(outDir, "shiseido-ultimune.png");

// waitFor=5000 tells Microlink to wait 5 seconds after page load before screenshotting
const apiUrl = `https://api.microlink.io?url=${encodeURIComponent(url)}&screenshot=true&meta=false&waitFor=5000`;

console.log("📸 Recapturing Shiseido Ultimune (waiting 5s for content to load)...");

const res = await fetch(apiUrl, { headers: { "User-Agent": "Mozilla/5.0" } });
if (!res.ok) throw new Error(`Microlink API error: ${res.status}`);
const json = await res.json();
if (json.status !== "success") throw new Error(`Microlink failed: ${json.message}`);

const screenshotUrl = json.data.screenshot.url;
const imgRes = await fetch(screenshotUrl);
if (!imgRes.ok) throw new Error(`Download failed: ${imgRes.status}`);

writeFileSync(filePath, Buffer.from(await imgRes.arrayBuffer()));
console.log("✓ Saved to public/images/projects/shiseido-ultimune.png");
