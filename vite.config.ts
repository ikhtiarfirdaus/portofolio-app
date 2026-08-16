import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Folders under /public that hold project screenshots.
// Add a new folder name here whenever a new project needs a gallery.
const SCREENSHOT_FOLDERS = ["stock-management-system", "affiliate-management-system"];
const IMAGE_EXT = /\.(png|jpe?g|webp|gif)$/i;

/**
 * Scans public/<folder> at dev-server start & build time and exposes the
 * file list as a virtual module, so screenshots dropped into those folders
 * show up automatically without editing any component code.
 */
function screenshotsManifestPlugin(): Plugin {
  const virtualId = "virtual:screenshots";
  const resolvedId = "\0" + virtualId;

  const buildManifest = () => {
    const manifest: Record<string, string[]> = {};
    for (const folder of SCREENSHOT_FOLDERS) {
      const dir = path.resolve(__dirname, "public", folder);
      if (fs.existsSync(dir)) {
        manifest[folder] = fs
          .readdirSync(dir)
          .filter((f) => IMAGE_EXT.test(f))
          .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
          .map((f) => `/${folder}/${f}`);
      } else {
        manifest[folder] = [];
      }
    }
    return manifest;
  };

  return {
    name: "screenshots-manifest",
    resolveId(id) {
      if (id === virtualId) return resolvedId;
    },
    load(id) {
      if (id === resolvedId) {
        return `export default ${JSON.stringify(buildManifest())}`;
      }
    },
    configureServer(server) {
      // Regenerate + trigger a reload when files are added/removed while `npm run dev` is running.
      for (const folder of SCREENSHOT_FOLDERS) {
        const dir = path.resolve(__dirname, "public", folder);
        server.watcher.add(dir);
      }
      server.watcher.on("add", (file) => {
        if (SCREENSHOT_FOLDERS.some((f) => file.includes(`${path.sep}public${path.sep}${f}${path.sep}`))) {
          const mod = server.moduleGraph.getModuleById(resolvedId);
          if (mod) server.moduleGraph.invalidateModule(mod);
          server.ws.send({ type: "full-reload" });
        }
      });
      server.watcher.on("unlink", (file) => {
        if (SCREENSHOT_FOLDERS.some((f) => file.includes(`${path.sep}public${path.sep}${f}${path.sep}`))) {
          const mod = server.moduleGraph.getModuleById(resolvedId);
          if (mod) server.moduleGraph.invalidateModule(mod);
          server.ws.send({ type: "full-reload" });
        }
      });
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), screenshotsManifestPlugin()],
});
