import { copyFileSync, existsSync } from "fs";
import { resolve } from "path";

const distDir = resolve(process.cwd(), "dist");
const source = resolve(distDir, "index.html");
const destination = resolve(distDir, "404.html");

if (!existsSync(source)) {
  console.error(`Expected build output at ${source} but it was not found.`);
  process.exit(1);
}

copyFileSync(source, destination);
console.log(`Created ${destination} for GitHub Pages SPA fallback.`);
