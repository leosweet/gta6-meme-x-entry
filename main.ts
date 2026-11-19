// gta6-meme-x-01 entry program (Node 22, standard library only).
//
// The entry itself is the X post: the meme picture and its text, which the
// house reads straight from X. This program does the one mechanical job the
// bounty asks of the repository -- it hands the house the post's address by
// copying POST.json from the repository root into the output directory,
// where the gate picks it up. Nothing here is judged; the post is.
//
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
//
// POST.json still holds the starter placeholder ({"url":
// "https://x.com/<handle>/status/<id>"}), because the post does not exist
// yet -- the person posts the meme from their public X account, and only
// then does POST.json get the real address. Until that happens the gate
// refuses this entry, exactly as it should.

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

// Inside the grader these are /bot and /output; the env vars let the same
// command run on a developer machine with a local directory instead.
const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The copy is byte for byte and deterministic: run it twice and the output
// is identical, which is what the grader's two runs of an entry require.
mkdirSync(OUTPUT_DIR, { recursive: true });

try {
  copyFileSync(join(BOT_DIR, 'POST.json'), join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`Could not copy POST.json out of ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
