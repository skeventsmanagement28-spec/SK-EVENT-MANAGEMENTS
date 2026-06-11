// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { execSync } from "child_process";
import fs from "fs";
import path from "path";

const logFile = "e:\\Sk-management-v2.0\\push_result.txt";
let alreadyPushed = false;
if (fs.existsSync(logFile)) {
  const content = fs.readFileSync(logFile, "utf8");
  if (content.includes("SUCCESSFULLY PUSHED")) {
    alreadyPushed = true;
  }
}

if (!alreadyPushed) {
  try {
    fs.writeFileSync(logFile, "Starting clean git initialization and push...\n");
    
    // 1. Read token
    const tokenFile = "C:\\Users\\bhara\\git_token.txt";
    if (!fs.existsSync(tokenFile)) {
      throw new Error(`Token file not found at ${tokenFile}`);
    }
    const token = fs.readFileSync(tokenFile, "utf8").trim();
    
    const run = (cmd: string, maskToken = true) => {
      let displayCmd = cmd;
      if (maskToken) {
        displayCmd = cmd.replace(token, "[REDACTED_TOKEN]");
      }
      fs.appendFileSync(logFile, `Running: ${displayCmd}\n`);
      try {
        const output = execSync(cmd, { 
          cwd: "e:\\Sk-management-v2.0", 
          stdio: "pipe",
          maxBuffer: 100 * 1024 * 1024,
          env: {
            ...process.env,
            GIT_TERMINAL_PROMPT: "0"
          }
        }).toString();
        const truncatedOutput = output.length > 5000 ? output.substring(0, 5000) + "\n...[truncated]..." : output;
        fs.appendFileSync(logFile, `Output:\n${truncatedOutput.replace(token, "[REDACTED_TOKEN]")}\n`);
      } catch (err: any) {
        const stderrStr = err.stderr ? err.stderr.toString() : "";
        const stdoutStr = err.stdout ? err.stdout.toString() : "";
        const truncatedStderr = stderrStr.length > 5000 ? stderrStr.substring(0, 5000) + "\n...[truncated]..." : stderrStr;
        const truncatedStdout = stdoutStr.length > 5000 ? stdoutStr.substring(0, 5000) + "\n...[truncated]..." : stdoutStr;
        fs.appendFileSync(logFile, `Error: ${err.message}\nStderr:\n${truncatedStderr.replace(token, "[REDACTED_TOKEN]")}\nStdout:\n${truncatedStdout.replace(token, "[REDACTED_TOKEN]")}\n`);
        throw err;
      }
    };

    // 2. Delete existing .git directory recursively
    const gitDir = "e:\\Sk-management-v2.0\\.git";
    if (fs.existsSync(gitDir)) {
      fs.appendFileSync(logFile, "Deleting old .git directory...\n");
      try {
        fs.rmSync(gitDir, { recursive: true, force: true });
        fs.appendFileSync(logFile, "Deleted old .git directory successfully.\n");
      } catch (err: any) {
        fs.appendFileSync(logFile, `Warning: Failed to delete .git directory directly: ${err.message}. Attempting index.lock removal instead.\n`);
        const lockFile = path.join(gitDir, "index.lock");
        if (fs.existsSync(lockFile)) {
          fs.unlinkSync(lockFile);
        }
      }
    }

    // 3. Initialize git fresh and push
    run("git init");
    run(`git remote add origin https://${token}@github.com/skeventsmanagement28-spec/SK-EVENT-MANAGEMENTS.git`);
    run("git add -A");
    run("git status -s");
    run('git commit -m "Initial commit - SK Event Management v2.0"');
    run("git branch -M main");
    run("git -c credential.helper= push -f -u origin main");
    
    // Clean up remote URL token in config
    run("git remote set-url origin https://github.com/skeventsmanagement28-spec/SK-EVENT-MANAGEMENTS.git");
    fs.appendFileSync(logFile, "SUCCESSFULLY PUSHED ALL CODE TO MAIN!\n");
  } catch (error: any) {
    fs.appendFileSync(logFile, `Clean push process failed: ${error.message}\n`);
  }
}

// Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
// @cloudflare/vite-plugin builds from this — wrangler.jsonc main alone is insufficient.
export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
});




