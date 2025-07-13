import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

// Get `__dirname` equivalent in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const isGithubActor = process.env.NEXT_PUBLIC_GITHUB_ACTOR === "upsidedownlabs" || process.env.NEXT_PUBLIC_GITHUB_ACTOR === undefined;

// Get the BASE_PATH dynamically
const basePath = isGithubActor ? "" : "/m2w";


// Define the manifest object
const manifest = {
  name: "Neural Drive Interface",
  short_name: "Neural Drive",
  start_url: `${basePath}/`,
  display: "standalone",
  background_color: "#0a0a0a",
  theme_color: "#667eea",
  description: "Modern assistive communication system with vibrant UI and Bluetooth integration",
  icons: [
    { src: `${basePath}/chords-logo-192x192.png`, sizes: "192x192", type: "image/png" },
    { src: `${basePath}/chords-logo-512x512.png`, sizes: "512x512", type: "image/png" },
  ],
  screenshots: [
    { src: `${basePath}/image.png`, sizes: "1280x720", type: "image/png", form_factor: "wide" },
  ],
};

// Generate `manifest.json` in the `public/` directory
const outputPath = path.join(__dirname, "../public/manifest.json");
fs.writeFileSync(outputPath, JSON.stringify(manifest, null, 2));


