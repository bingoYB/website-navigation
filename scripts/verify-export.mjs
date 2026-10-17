import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(process.argv[2] || "docs");
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const origin = "https://export.local";
const errors = [];
const stylesheets = new Set();
let references = 0;

function filesIn(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const filename = path.join(directory, entry.name);
    return entry.isDirectory() ? filesIn(filename) : [filename];
  });
}

function verifyReference(reference, filename) {
  if (!reference || /^(?:#|[a-z][a-z\d+.-]*:|\/\/)/i.test(reference)) return;
  const relativeFile = path.relative(root, filename).split(path.sep).join("/");
  const url = new URL(reference.replace(/&amp;/g, "&"), origin + basePath + "/" + relativeFile);
  if (url.origin !== origin) return;
  if (basePath && url.pathname !== basePath && !url.pathname.startsWith(basePath + "/")) {
    errors.push(relativeFile + ": missing base path in " + reference);
    return;
  }
  const localPath = decodeURIComponent(url.pathname.slice(basePath.length));
  const target = path.resolve(root, "." + (localPath || "/"));
  if (target !== root && !target.startsWith(root + path.sep)) {
    errors.push(relativeFile + ": resource escapes export directory: " + reference);
    return;
  }
  const candidates = [target, target + ".html", path.join(target, "index.html")];
  const existing = candidates.find((candidate) => fs.existsSync(candidate) && fs.statSync(candidate).isFile());
  if (!existing) {
    errors.push(relativeFile + ": missing " + reference);
  } else if (existing.endsWith(".css")) {
    stylesheets.add(existing);
  }
  references++;
}

assert.ok(fs.existsSync(path.join(root, "index.html")), "Missing exported homepage");
assert.ok(fs.existsSync(path.join(root, "404.html")), "Missing exported 404 page");
const files = filesIn(root);
const htmlFiles = files.filter((filename) => filename.endsWith(".html"));
for (const filename of htmlFiles) {
  const source = fs.readFileSync(filename, "utf8");
  if (filename.endsWith(".html")) {
    for (const [, reference] of source.matchAll(/\b(?:src|href)=["']([^"']+)["']/g)) {
      verifyReference(reference, filename);
    }
    for (const [, reference] of source.matchAll(/<meta property="og:image" content="([^"]+)"/g)) {
      verifyReference(reference, filename);
    }
  }
  for (const [, reference] of source.matchAll(/url\(\s*["']?([^"'()]+?)["']?\s*\)/g)) {
    verifyReference(reference.trim(), filename);
  }
}
for (const filename of stylesheets) {
  const source = fs.readFileSync(filename, "utf8");
  for (const [, reference] of source.matchAll(/url\(\s*["']?([^"'()]+?)["']?\s*\)/g)) {
    verifyReference(reference.trim(), filename);
  }
}
assert.equal(errors.length, 0, errors.join("\n"));
console.log("Validated " + htmlFiles.length + " pages and " + references + " local references for " + (basePath || "/") + ".");
