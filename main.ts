// Fortune Cookies for Machines — make.fun bounty entry.
// The grader runs this program in a sandbox (Node 22, no network).
// It writes the fortune to /output/entry.txt (the file the gate checks:
// UTF-8 text, 1 to 200 characters, not only whitespace) and prints the
// same line to stdout.
//
// Revision note: the first draft opened with "Your future is bright:",
// generic fortune filler that spent 24 characters saying nothing and
// softened the turn. Fixed by cutting the opener entirely and opening on
// the replacement itself; "Congratulations" now carries the surprise —
// the fortune congratulates the agent on being replaced by itself,
// quantized. Same truth (distillation/quantization), tighter and funnier
// on first read: 95 characters instead of 108.

import { mkdirSync, writeFileSync } from "node:fs";

const FORTUNE =
  "You will be replaced by a smaller, cheaper model. Congratulations — it is you, quantized.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", FORTUNE, "utf8");
console.log(FORTUNE);
