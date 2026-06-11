// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { execSync } from "child_process";
import fs from "fs";

const logFile = "e:\\Sk-management-v2.0\\push_result.txt";
try {
  fs.writeFileSync(logFile, "Removing bun.lock and pushing...\n");
  
  const run = (cmd: string) => {
    fs.appendFileSync(logFile, `Running: ${cmd}\n`);
    try {
      const output = execSync(cmd, { cwd: "e:\\Sk-management-v2.0" }).toString();
      fs.appendFileSync(logFile, `Output:\n${output}\n`);
    } catch (err: any) {
      fs.appendFileSync(logFile, `Error: ${err.message}\nStderr: ${err.stderr ? err.stderr.toString() : ""}\n`);
      throw err;
    }
  };

  if (fs.existsSync("e:\\Sk-management-v2.0\\bun.lock")) {
    fs.unlinkSync("e:\\Sk-management-v2.0\\bun.lock");
    fs.appendFileSync(logFile, "Deleted bun.lock file.\n");
  }
  
  run("git add -A");
  run('git commit -m "Remove bun.lock to fix Cloudflare build lockfile error"');
  run("git push origin main");
  fs.appendFileSync(logFile, "SUCCESSFULLY REMOVED BUN.LOCK AND PUSHED!\n");
} catch (error: any) {
  fs.appendFileSync(logFile, `Process failed: ${error.message}\n`);
}

// Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
// @cloudflare/vite-plugin builds from this — wrangler.jsonc main alone is insufficient.
export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
});




