# GitHub — profile + repos

Profile: <https://github.com/IronManYG>

The actual `IronManYG/IronManYG` profile README content lives in [`./github-profile-readme.md`](./github-profile-readme.md). This file is the operational guide: what to set on the profile, what to pin, what to describe, what to archive.

---

## 1. Profile fields

| Field | Set to | How |
|---|---|---|
| Bio | `Android Developer at Kay Technology. Kotlin · Jetpack Compose · KMP/CMP · Ktor backends. Building production mobile apps from Riyadh.` | Settings → Public profile |
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
  -f bio="Android Developer at Kay Technology. Kotlin · Jetpack Compose · KMP/CMP · Ktor backends. Building production mobile apps from Riyadh." \
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
