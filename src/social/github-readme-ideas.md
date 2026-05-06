# GitHub README — future enhancement ideas

Directions discussed but not implemented. Each is **additive** to the current README — none rewrite what's there. Pick one when you want to refresh the profile.

Current README has direction A (Kotlin `data class`) + D (`@Composable` preview block). The list below is everything else considered.

## B. Auto-updating "Now shipping" line

Add one line to the README that rewrites itself on a schedule, naming what you most recently committed across pinned repos.

- **What it adds:** signals the profile is alive without you touching it.
- **Effort:** ~1 hour.
- **How:** GitHub Action with cron `0 6 * * *` runs `gh api -X GET search/commits?q=author:IronManYG ...`, parses the latest, regex-replaces a placeholder line in `README.md`, commits with `[skip ci]`.
- **Where it lands:** new line directly under the Composable block, e.g. `> 🔨 Latest: <repo> — <commit message> · <date>`.
- **Reference:** [Duy NG — How I made my GitHub profile README dynamic](https://tduyng.com/blog/dynamic-github-profile-readme/), [simonw's profile](https://github.com/simonw).

## C. WakaTime weekly stats

Embed a small block showing your weekly coding-time breakdown by language.

- **What it adds:** concrete proof of Kotlin/Compose hours per week. Strong signal to other engineers; recruiters mostly skip it.
- **Effort:** 30 min once WakaTime is set up + ongoing IDE plugin running while you code.
- **How:** create a free [WakaTime](https://wakatime.com/) account, install the WakaTime plugin in Android Studio + IntelliJ, then drop in the [`athul/waka-readme`](https://github.com/athul/waka-readme) GitHub Action with the API key + GitHub PAT in repo secrets.
- **Where it lands:** below the "What I'm working on" section, before "Stack".
- **Caveat:** the data is only useful if the IDE plugin runs continuously. Skip if you switch machines often.

## E. github-profile-summary-cards

Replace or augment the current single GitHub stats card with a 4-card visual poster: most-used languages, productive time of day, profile summary, repos per language.

- **What it adds:** more visual density without more clutter.
- **Effort:** 15 min.
- **How:** add the [`vn7n24fzkq/github-profile-summary-cards`](https://github.com/vn7n24fzkq/github-profile-summary-cards) Action with `cron` schedule. It writes generated SVGs to a `profile-summary-card-output/` folder in the repo; you reference them with relative `![](./profile-summary-card-output/...)` paths.
- **Where it lands:** replaces the current "GitHub stats" section.
- **Theme to pick:** `react-dark` or `solarized` reads cleanly with the existing tokyonight palette.

## F. App preview GIF

Record a 5–10 second screencast of one Compose app (Chirp's chat list, ScribbleDash's drawing canvas, EchoJournal's recording animation), embed centered at the top of the README.

- **What it adds:** the highest visual punch on this list. Instant proof you ship Compose UIs.
- **Effort:** 30–60 min for a clean recording + GIF optimization.
- **How:** `Android Studio → Logcat → Screen recording` (or scrcpy) → trim to 5–10s → convert to GIF with [ffmpeg](https://ffmpeg.org/) (`ffmpeg -i in.mp4 -vf "fps=15,scale=480:-1:flags=lanczos" -c:v gif out.gif`) → optimize with [gifsicle](https://www.lcdf.org/gifsicle/) to under 2MB → commit to `IronManYG/IronManYG` and reference with `<p align="center"><img src="./preview.gif" /></p>` above the data class.
- **Caveat:** a slow or boring recording hurts more than no recording. Iterate until it's tight.

## G. "Currently exploring" / `now` block

A small `now.md` file in the `IronManYG/IronManYG` repo that you update manually whenever you pick up something new (a paper, a library, a side project). The README pulls the latest line.

- **What it adds:** "this profile is alive" signal without infrastructure.
- **Effort:** 10 min one-off, plus rewriting one sentence every few weeks.
- **How:** plain markdown file at the repo root. Either reference it in the README via `<!-- include now.md -->` (handled by the [`actions-marketplace-validations/the-incredible-pulsar_readme-include`](https://github.com/marketplace) action), or just open `now.md` directly when needed and edit by hand.
- **Where it lands:** new section "Now" between the Composable and the narrative.
- **Pattern reference:** [nownownow.com](https://nownownow.com) — the "what I'm doing now" web movement.

## H. Open-source contributions section

Auto-generated list of merged PRs you've authored against other people's repos.

- **What it adds:** strong signal for senior engineers. Recruiters and hiring managers read this section closely.
- **Effort:** 20 min.
- **How:**

  ```yaml
  - name: Recent OSS contributions
    run: gh search prs --author=IronManYG --state=merged --limit=5 \
      --json title,repository,url \
      --jq '.[] | "- [\(.repository.nameWithOwner)] \(.title) — \(.url)"' > oss.md
  ```

  Then merge `oss.md` into the README via a marker block (e.g. `<!-- OSS:START --> ... <!-- OSS:END -->`).

- **Where it lands:** new section after "What I'm working on".
- **Skip until:** you have at least 3 merged PRs to other repos. An empty section is worse than no section.

## Quick reference

| Idea | Visual punch | Effort | Auto-updates |
|---|---|---|---|
| B — "Now shipping" line | Low | 1 hr | ✅ |
| C — WakaTime weekly | Medium | 30 min + plugin | ✅ |
| E — Summary cards poster | High | 15 min | ✅ |
| F — App preview GIF | **Highest** | 30–60 min | Manual re-record |
| G — `now` block | Low | 10 min | Manual |
| H — OSS contributions | Medium | 20 min | ✅ (when applicable) |

When you're ready to add one, edit [`./github-profile-readme.md`](./github-profile-readme.md) and push the result to `IronManYG/IronManYG/README.md`.
