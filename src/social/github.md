# GitHub — profile + repos

Profile: <https://github.com/IronManYG>

The actual `IronManYG/IronManYG` profile README content lives in [`./github-profile-readme.md`](./github-profile-readme.md). This file is the operational guide: what to set on the profile, what to pin, what to describe, what to archive.

**Click the copy icon in the top-right of any code block below to copy it in one click.**

## 0. Quick-paste profile values

For the GitHub Settings → Public profile UI (when you don't want to use the API):

### Bio

```text
Android Developer at Kay Technology. Kotlin · Jetpack Compose · KMP/CMP · Spring Boot + Ktor backends. Full-stack Kotlin from Riyadh.
```

### Blog (URL)

```text
https://ironmanyg.github.io/hussain-portfolio/
```

### Location

```text
Riyadh, Saudi Arabia
```

### Company

```text
Kay Technology
```

---

## 1. Profile fields

| Field | Set to | How |
|---|---|---|
| Bio | `Android Developer at Kay Technology. Kotlin · Jetpack Compose · KMP/CMP · Spring Boot + Ktor backends. Full-stack Kotlin from Riyadh.` | Settings → Public profile |
| Blog | `https://ironmanyg.github.io/hussain-portfolio/` | Settings → Public profile (replaces the old Notion URL) |
| Location | `Riyadh, Saudi Arabia` | Settings → Public profile |
| Company | `Kay Technology` | Already set |
| Email | `hussain.yg2010@gmail.com` | Already set |

These three (bio, blog, location) require `gh` auth with `user` scope. Refresh with:

```bash
gh auth refresh -s user
```

Then run:

```bash
gh api -X PATCH user \
  -f bio="Android Developer at Kay Technology. Kotlin · Jetpack Compose · KMP/CMP · Spring Boot + Ktor backends. Full-stack Kotlin from Riyadh." \
  -f blog="https://ironmanyg.github.io/hussain-portfolio/" \
  -f location="Riyadh, Saudi Arabia"
```

---

## 2. Profile README repo (`IronManYG/IronManYG`)

Repo doesn't exist yet — create it once. Content is in [`./github-profile-readme.md`](./github-profile-readme.md).

```bash
# One-off setup (creates the repo, pushes the README)
gh repo create IronManYG/IronManYG --public --description "My GitHub profile README" --add-readme=false
git -C /tmp clone https://github.com/IronManYG/IronManYG.git
cp src/social/github-profile-readme.md /tmp/IronManYG/README.md
git -C /tmp/IronManYG add README.md
git -C /tmp/IronManYG commit -m "Initial profile README"
git -C /tmp/IronManYG push origin main
```

For ongoing updates: edit `src/social/github-profile-readme.md` in this repo, then push the same content to `IronManYG/IronManYG/README.md`.

---

## 3. Pinned repos (6 slots) — ✅ pinned 2026-05-06

Pinning is GitHub UI only — no API support without a special GraphQL token. Current pin order:

1. **Chirp**
2. **EchoJournal**
3. **ScribbleDash**
4. **Runique** *(swapped in for PlantPediaZ on 2026-05-06)*
5. **Translator_KMM**
6. **hussain-portfolio**

---

## 4. Repo descriptions, topics, and homepages — ✅ done 2026-05-06

All 6 pinned repos (and PlantPediaZ) now carry: description, topic tags (lowercase, hyphens), and a `homepage` link to the matching portfolio detail page so the GitHub repo card surfaces the rich writeup.

| Repo | Topics |
|---|---|
| Chirp | `android`, `chat-app`, `clean-architecture`, `cmp`, `compose-multiplatform`, `cross-platform`, `desktop`, `firebase`, `ios`, `jetpack-compose`, `kmp`, `koin`, `kotlin`, `kotlin-multiplatform`, `ktor`, `offline-first`, `real-time`, `room-database`, `websockets` |
| EchoJournal | `android`, `audio-recording`, `clean-architecture`, `jetpack-compose`, `journaling`, `koin`, `kotlin`, `material-design-3`, `mvi`, `room-database` |
| ScribbleDash | `android`, `canvas`, `clean-architecture`, `drawing-app`, `jetpack-compose`, `koin`, `kotlin`, `material-design-3`, `mvi` |
| Runique | `android`, `clean-architecture`, `fitness-tracker`, `gps`, `jetpack-compose`, `koin`, `kotlin`, `ktor`, `maps-sdk`, `multi-module`, `mvi`, `oauth`, `room-database`, `running-tracker`, `wear-os` |
| Translator_KMM | `android`, `clean-architecture`, `cross-platform`, `ios`, `kmm`, `kotlin`, `kotlin-multiplatform`, `ktor`, `mvi`, `sqldelight`, `translation` |
| hussain-portfolio | `arabic`, `bilingual`, `eleventy`, `github-pages`, `nunjucks`, `portfolio`, `rtl`, `static-site`, `tailwindcss` |
| PlantPediaZ | `android`, `clean-architecture`, `game-guide`, `jetpack-compose`, `kotlin`, `multi-module`, `mvi`, `mvvm`, `plants-vs-zombies`, `retrofit` |

Older repo descriptions previously set:

```bash
gh api -X PATCH repos/IronManYG/MaterialCalculator \
  -f description="Pixel-style calculator with unit and UI tests verified by a CI/CD pipeline."

gh api -X PATCH repos/IronManYG/dev.gaddal.qodem-api \
  -f description="Qodem backend (Kotlin/Ktor) — blood donation API."

gh api -X PATCH repos/IronManYG/Qodem-multi-module \
  -f description="Multi-module refactor of Qodem (blood donation app, Udacity capstone)."

gh api -X PATCH repos/IronManYG/AutoMatic-Book-Scaneer \
  -f description="Early prototype of the Kay Scanner book digitization device. Hardware + capture pipeline. Researcher era (2017–2022)."
```

To replicate the topic + homepage pattern on a new repo:

```bash
gh api -X PATCH repos/IronManYG/<RepoName> \
  -f description="..." -f homepage="https://ironmanyg.github.io/hussain-portfolio/<slug>/"

gh api -X PUT repos/IronManYG/<RepoName>/topics \
  -f 'names[]=android' -f 'names[]=kotlin' -f 'names[]=jetpack-compose'  # ...etc
```

---

## 5. Archive list — ✅ done 2026-05-06 (30 repos archived)

30 repos archived on 2026-05-06. They remain public and history is preserved, but they no longer surface on the default profile view and stop diluting the repo list. To unarchive any of them: `gh api -X PATCH repos/IronManYG/<name> -F archived=false`.

**Test / junk repos:**

- `--`
- `Test`
- `Book-list`
- `Rainbow-Poem`
- `MediaPlayer`

**Basic Udacity exercise repos:**

- `AboutMe`
- `DiceRoller`
- `ColorMyViews`
- `PopularMovies`
- `andfun-kotlin-guess-it`
- `andfun-kotlin-dessert-pusher`
- `andfun-kotlin-android-trivia`
- `andfun-kotlin-mars-real-estate`
- `andfun-kotlin-sleep-tracker`
- `andfun-kotlin-sleep-tracker-with-recyclerview`
- `andfun-kotlin-gdg-finder`
- `andfun-kotlin-dev-bytes`
- `ud851-Sunshine`
- `ud839_Miwok`
- `ud851-Exercises`
- `nd940-android-kotlin-course1-starter`

**Codelab / starter repos:**

- `android-testing-starter_code`
- `android-kotlin-geo-fences-starter`
- `Project4`
- `Wander`
- `motionlayout-start`
- `PropertyAnimation`
- `ClippingExample`
- `CustomFanController`
- `constraint-layout`

Reference command used (kept for future cleanup rounds):

```bash
for repo in '--' Test Book-list Rainbow-Poem MediaPlayer; do
  gh api -X PATCH "repos/IronManYG/$repo" -F archived=true --jq '"\(.name): archived=\(.archived)"'
done
```

(Note: `-F` not `-f` — the `archived` field is a boolean, not a string. The `--` repo name needs single-quoting because bash treats `--` as end-of-options.)

---

## 6. Keep but unpinned

Legitimate older work — leave public, unpinned, no archive:

- `AsteroidRadar`, `todo-maps`, `ND940C3-Project`, `ShoeStore`
- `Qodem-v1`, `Qodem`, `RecipeApp`
- Researcher-era hardware/3D-printing forks: `pi-scan`, `spreadpi`, `spreads`, `scantailor`, `Michigan-Linear-Book-Scanner`, `3D-Printing-costs`, `kbricks-models`, `kbricks-core`, `FusionSheeter`. These quietly back up the Researcher narrative.

---

## 7. Repos waiting for topic tags (future check)

These repos currently have **no topics and no description**. They're not pinned and not on the CV — lower priority than the showcase repos tagged in §4. Worth tagging when/if they get demo-ready, added to LinkedIn projects, or referenced from the portfolio.

| Repo | Likely stack (verify first) | Suggested topics | Suggested description |
|---|---|---|---|
| `NutriSport` | Android / CMP nutrition app | `android`, `kotlin`, `jetpack-compose`, `nutrition`, `health-tracking` | "Nutrition tracking app — verify if Android-only or CMP" |
| `NoteMark` | Android Compose notes app | `android`, `kotlin`, `jetpack-compose`, `notes-app`, `markdown` | "Markdown-aware notes app built with Jetpack Compose" |
| `SpendLess` | Android Compose finance | `android`, `kotlin`, `jetpack-compose`, `expense-tracker`, `finance` | "Personal expense tracker built with Jetpack Compose" |
| `HabitTracker` | Android Compose habits | `android`, `kotlin`, `jetpack-compose`, `habit-tracker`, `productivity` | "Habit-tracking app built with Jetpack Compose" |
| `MyDiary` | Android diary | `android`, `kotlin`, `diary-app`, `journaling` | "Personal diary / journaling app" |

Process when ready (per repo):

1. Open the repo locally or skim its README to confirm the actual stack — don't tag blindly.
2. Add topics: `gh repo edit IronManYG/<REPO> --add-topic <topic1>,<topic2>,...`
3. Set description: `gh repo edit IronManYG/<REPO> --description "<one-line description>"`

Older practice repos (`day-XX-*`, `andfun-kotlin-*`, `nd940-*`, codelab/starters) intentionally stay topic-less and untouched — they're already archived per §5.
