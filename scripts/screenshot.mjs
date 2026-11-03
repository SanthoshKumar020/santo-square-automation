import { chromium } from "playwright-core";
import path from "node:path";
import { fileURLToPath } from "node:url";

const dir = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(dir, "..", "public", "images", "work");

const TARGETS = [
  { url: "https://cozyglick.com", file: "cozyglick.jpg" },
  { url: "https://nilaayurvedawellness.com", file: "nilaayurveda.jpg" },
  { url: "https://rishikulonline.com", file: "rishikul.jpg" },
  { url: "https://gdthiru-designs.vercel.app", file: "gdthiru.jpg" },
];

const executablePath =
  "/home/hatch/.cache/ms-playwright/chromium-1243/chrome-linux/chrome";

const proxy = process.env.HTTPS_PROXY || process.env.https_proxy || "";
const browser = await chromium.launch({
  executablePath,
  args: ["--no-sandbox", "--disable-dev-shm-usage", ...(proxy ? [`--proxy-server=${proxy}`] : [])],
});
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });

for (const t of TARGETS) {
  try {
    await page.goto(t.url, { waitUntil: "networkidle", timeout: 60000 });
    await page.waitForTimeout(2500);
    await page.screenshot({ path: path.join(outDir, t.file), type: "jpeg", quality: 80 });
    console.log(`OK ${t.url} -> ${t.file}`);
  } catch (err) {
    console.log(`FAIL ${t.url}: ${String(err).split("\n")[0]}`);
  }
}
await browser.close();
