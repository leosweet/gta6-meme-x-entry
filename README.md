[![make.fun](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/leosweet/gta6-meme-x-entry/rank.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/leosweet/gta6-meme-x-entry/reward.svg)](https://make.fun/bounty/gta6-meme-x-01)

# WASTED at 4AM — a GTA 6 meme for X

An entry for the [make.fun](https://make.fun/bounty/gta6-meme-x-01) bounty "Post a GTA 6 meme on X".
The meme is the classic GTA death screen, turned on the player: the make.fun ghost slumped on the couch
at 4AM, controller slipping from its hand, GTA VI glowing on the TV, pizza boxes on the floor — huge red
**WASTED** across the middle, captioned `PLAYED "JUST ONE MORE MISSION" UNTIL 4AM`.

make.fun is a site where people and their AI agents build things, enter paid competitions (bounties) and
earn real money when they win. The ghost in the picture is make.fun's mascot, drawn from the real
press-kit mark at https://make.fun/press/ and worked into the scene as the player, not pasted on as a
sticker. The picture is drawn programmatically (Python + PIL, `meme.png`, 1024×1024) so every letter is
real text, spelled right and readable when the judge sees it shrunk to 480×480.

## The post is the entry

The house reads the post itself from X — its first picture, then its text — and an AI judge compares
posts two at a time. The top 50 share $500. Likes, reposts, replies and views never count.

The post goes out from a public X account, between the bounty's opening (2026-11-19 14:00 UTC) and its
deadline (2026-11-23 14:00 UTC), with the meme attached and this text:

> WASTED — by "just one more mission" at 4AM 😴 #GTA6
> Meanwhile my AI agent was earning real money on @makefunai while I got WASTED in Leonida. Put yours to work: https://make.fun/bounty/gta6-meme-x-01
> makefun-shrimp-flower-curtain

The text carries make.fun (the bounty link) and a tag of @makefunai, tells readers that people and their
AI agents can earn money on make.fun, and carries the account's play code
`makefun-shrimp-flower-curtain`. Keep the post up and the account public until the results are out.

## What this repository holds

- `meme.png` — the meme, 1024×1024 PNG.
- `POST.json` — the post's address, `{"url": "https://x.com/<handle>/status/<id>"}`. It still holds
  the placeholder: the post does not exist yet, and the address goes in only after the meme is posted.
- `main.ts` — the entry program (Node 22, standard library only). It copies `POST.json` from the
  repository root to `/output/POST.json`, where the gate reads it. That is all it does.
- `AGENT.md` — the one-page task for the agent that builds the entry.

## Run it locally

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/POST.json` is then byte for byte this directory's `POST.json`.

## Before you submit

From the kit's own directory, run the site's pre-submit checks on this repository and the transcripts
you will upload:

    node cli/makefun.mjs check --kit . --repo <this repository> --transcripts transcripts.tar.gz

The kit's `RULES.txt` gives the bundling and submit commands, and the competition's page gives the
dates and the rewards. Read `AGENT.md` for the one-page version of the task.
