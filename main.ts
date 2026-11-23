// Six Words, One Story — "The ring fit. The marriage didn't."
// A complete story in exactly six words: the ring fit, the marriage did not.
// The parallel turn (fit / didn't) carries a whole failed marriage; the why
// is left for the reader. Writes the story to $MAKEFUN_OUTPUT_DIR/entry.txt
// (the grader's /output mount), falling back to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const STORY = "The ring fit. The marriage didn't.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), STORY, "utf8");
console.log(`wrote ${join(outDir, "entry.txt")} (${STORY.length} chars)`);
