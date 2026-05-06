# LinkedIn — ready-to-paste copy

Profile URL: <https://www.linkedin.com/in/hussaingaddal/>

Edit each section by clicking the pencil icon next to it on your profile page. **Click the copy icon in the top-right corner of any code block below to copy that block in one click.**

> Note on `**bold**` markers: LinkedIn's About and Experience sections don't render markdown, so any `**` will paste as literal asterisks. The asterisks in the blocks below are *guidance* — they show which words you originally meant to emphasize. Either strip them yourself before pasting (recommended), or use a unicode-bold tool like <https://yaytext.com/bold-italic/> if you want the emphasis to render.

---

## 1. Headline (220 char limit)

```text
Android Developer at Kay Technology · Kotlin · Jetpack Compose · KMP/CMP · Spring Boot + Ktor backends · Full-stack Kotlin · 4+ yrs · Riyadh
```

(140 chars. Mobile-readable. Keywords front-loaded for LinkedIn search. Spring Boot leads the backend pair because Hussain has more Spring Boot experience; Ktor is also accurate via Kay Tech microservices.)

---

## 2. About (2,600 char limit)

```text
I'm Hussain, an Android Developer at Kay Technology in Riyadh. 4+ years shipping production apps in Kotlin and Jetpack Compose, with the last year focused on Kotlin Multiplatform and Compose Multiplatform (KMP/CMP).

At Kay Tech I lead the Android product. I migrated the legacy Java/XML codebase to Kotlin and Compose, which dropped crashes by 40%. I built reusable in-house SDKs (auth, search, downloads) that cut feature delivery time by 25%, redesigned core flows in Material 3 Compose for a 15% lift in session duration, and set up a Bitrise CI/CD pipeline plus a multi-module Clean Architecture/MVI structure that took new-developer onboarding from weeks to days (50% faster). I also build the Ktor microservices the app talks to (auth, content, search), and tightened API response time by ~30%.

Outside Kay Tech I ship side projects across Android, Wear OS, Desktop, and iOS using KMP/CMP. Recent ones: Chirp (cross-platform messenger, Spring Boot backend), Runique (multi-module running tracker with Wear OS sync), and ScribbleDash (Compose drawing app). The portfolio has the full list with architecture writeups.

I'm open to senior Android, KMP, or full-stack Kotlin roles.

📍 Riyadh, Saudi Arabia
✉️ hussain.yg2010@gmail.com
🌐 https://ironmanyg.github.io/hussain-portfolio/
💻 https://github.com/IronManYG
```

(~1,250 chars. First two lines surface the keywords above the "see more" fold on mobile.)

---

## 3. Top 5 Skills

Replace the current 5 Android synonyms with these.

```text
Kotlin
Jetpack Compose
Kotlin Multiplatform (KMP)
Compose Multiplatform (CMP)
Clean Architecture
```

---

## 4. Featured section (pin 4 cards)

LinkedIn lets you set **Title** (required) + **Description** for both Documents and Links. Links also accept a **Thumbnail** image (LinkedIn auto-fetches the page's OG image if you don't upload one — once `og_image.png` is in place at `src/assets/img/branding/og_image.png` and the site has redeployed, the portfolio + Chirp links will pull a branded preview automatically).

### Card 1 — Resume PDF (Document)

Already pinned. Re-export `src/cv/Hussain_Gaddal_CV_C.html` (or A) → save as `Hussain_Gaddal_CV.pdf` and replace the existing upload.

**Title** *(required)*

```text
Hussain Gaddal — Android Developer CV (2025)
```

**Description**

```text
4+ years shipping production Android. Kotlin · Jetpack Compose · KMP/CMP · Spring Boot + Ktor backends. Researcher era 2017–2022. JetBrains-collaborated certs through Pl-Coding.
```

### Card 2 — Portfolio (Link)

**URL**

```text
https://ironmanyg.github.io/hussain-portfolio/
```

**Title** *(required)*

```text
Hussain Gaddal — Portfolio
```

**Description**

```text
Bilingual EN/AR portfolio site. Featured projects with architecture writeups, downloadable CV, and contact.
```

**Thumbnail:** leave blank to let LinkedIn fetch the OG image from the page (once `og_image.png` is generated and deployed). If you want to upload a custom one earlier, use any 1200×630 PNG that fits the brand.

### Card 3 — GitHub profile (Link)

**URL**

```text
https://github.com/IronManYG
```

**Title** *(required)*

```text
IronManYG on GitHub
```

**Description**

```text
Open-source side projects in Kotlin, Compose, KMP/CMP, and Spring Boot. Pinned: Chirp, EchoJournal, ScribbleDash, Runique, Translator KMM, hussain-portfolio.
```

**Thumbnail:** GitHub serves a default profile preview, so leaving this blank is fine. LinkedIn will pull it on save.

### Card 4 — Chirp (Link)

**URL**

```text
https://ironmanyg.github.io/hussain-portfolio/chirp/
```

**Title** *(required)*

```text
Chirp — Cross-platform Messenger (KMP/CMP)
```

**Description**

```text
Android, iOS, and Desktop messenger with 100% shared business logic via Compose Multiplatform. Spring Boot backend, offline-first WebSocket sync, secure auth, FCM push.
```

**Thumbnail:** leave blank — LinkedIn fetches the project page's OG image after deploy.

---

## 5. Experience — Android Developer (Mar 2022 – Present)

Replace the current "Skills: Kotlin, Compose, +1 skill" with these bullets.

```text
- Took **full technical ownership** of the Android product. Migrated a legacy Java/XML codebase to Kotlin and Compose, which dropped crashes by 40%.
- Built reusable in-house SDKs (auth, search, downloads) that cut feature delivery time by 25%.
- Designed Material 3 Compose UIs that increased average session duration by 15%.
- Set the architectural standards (Clean Architecture, MVI, multi-module) and a Bitrise CI/CD pipeline. New-developer onboarding time dropped by 50%.
- Built and maintained Ktor microservices (auth, content, search). API response time improved by ~30%.
```

**Skills to attach to this role:** Kotlin, Jetpack Compose, KMP, CMP, Ktor, Spring Boot, Clean Architecture, MVI, CI/CD.

---

## 6. Experience — Researcher (Sep 2017 – Mar 2022)

Currently empty on LinkedIn. Add these bullets.

```text
- Co-built **Kay Scanner**, a device that scans physical books without human page-flipping. Worked across hardware control, image capture, and software automation around the scan pipeline.
- Helped deliver **Kay Labs**, a 3D-printing lab partnered with Imam Muhammad bin Saud University (College of Computer & Information Sciences). The lab was equipped with Ultimaker hardware so students could prototype CS coursework projects.
- Hands-on with Fusion 360 (CAD), Ultimaker hardware, and Cura slicing. Research and prototyping work that became the entry point into mobile engineering.
```

**Skills to attach:** 3D Printing, Fusion 360, Hardware Prototyping, Image Processing.

After both roles are populated, the company block reads: **Kay Technology · 8 yrs 9 mos · Riyadh, Saudi Arabia · On-site.**

---

## 7. Projects — reorder + refresh

LinkedIn currently has 13 project entries with `OOP` tagged on every one. Replace with the 12 entries below (Tier 1 = the 5 to showcase first, Tier 2 = 7 supporting entries).

### Field guide for every project

LinkedIn's project form has the same fields for both tiers. Per project:

- **Project name** *(required, 255 char limit)* — copy block
- **Description** *(2,000 char limit)* — copy block
- **Skills** — pick the top 5 from the dropdown (skills must already be in your Skills section, or you can add them on the fly)
- **Media** — click "Add media → Add link" and paste the Site URL block. LinkedIn renders a preview card under the project. You can also upload screenshots from `src/assets/img/projects/` if you want, but the live link is enough.
- **Start date / End date** — month + year (listed inline per project)
- **I am currently working on this project** — check for Maktabati and PlantPediaZ. Leave unchecked otherwise.
- **Contributors** — leave blank unless a teammate worked with you on a specific project.
- **Associated with** — pick from your Experience/Education entries. Recommended:
  - **Maktabati** → `Kay Technology` (the only project done as Kay Tech work)
  - **All Pl-Coding / Pl Campus / Udacity course projects + personal builds** → **leave blank**. These platforms aren't in your Experience or Education sections, so the picker won't show them. If you want to enable Associated with for course projects later, add Pl-Coding and Udacity as separate Education entries first.

### Tier 1 — Featured (newest first)

#### 1. Chirp Messaging Client

**Project name**

```text
Chirp Messaging Client
```

**Description**

```text
Cross-platform messaging app running on Android, iOS, and Desktop with 100% shared business logic via Compose Multiplatform. Offline-first sync, Spring Boot backend, secure auth, FCM push.

Stack: Kotlin Multiplatform, Compose Multiplatform, Koin, Spring Boot, Room, FCM
```

**Media — Site URL**

```text
https://ironmanyg.github.io/hussain-portfolio/chirp/
```

**Skills (top 5):** Kotlin Multiplatform, Compose Multiplatform, Spring Boot, Koin, Room
**Start:** November 2025 · **End:** December 2025 · **Currently working:** No · **Associated with:** (leave blank)

#### 2. ScribbleDash

**Project name**

```text
ScribbleDash
```

**Description**

```text
Compose drawing app with a 1:1 canvas, undo/redo, and a Clean Architecture / MVI structure. Built end-to-end with Material 3.

Stack: Kotlin, Jetpack Compose, MVI, Koin, Material 3
```

**Media — Site URL**

```text
https://ironmanyg.github.io/hussain-portfolio/scribbledash/
```

**Skills (top 5):** Kotlin, Jetpack Compose, Clean Architecture, Koin, Material Design
**Start:** April 2025 · **End:** April 2025 · **Currently working:** No · **Associated with:** (leave blank)

#### 3. EchoJournal

**Project name**

```text
EchoJournal
```

**Description**

```text
Audio journaling app for quick voice memos with mood and topic tagging, search, and filtering. Compose UI with MediaRecorder integration.

Stack: Kotlin, Jetpack Compose, MVI, Room, MediaRecorder
```

**Media — Site URL**

```text
https://ironmanyg.github.io/hussain-portfolio/echojournal/
```

**Skills (top 5):** Kotlin, Jetpack Compose, Clean Architecture, Room, Android SDK
**Start:** January 2025 · **End:** February 2025 · **Currently working:** No · **Associated with:** (leave blank)

#### 4. Runique

**Project name**

```text
Runique
```

**Description**

```text
Multi-module running tracker with Wear OS sync, real-time GPS, and OAuth. Phone and watch share state via a layered architecture.

Stack: Kotlin, Jetpack Compose, Koin, Room, Ktor, Maps SDK, Wear OS
```

**Media — Site URL**

```text
https://ironmanyg.github.io/hussain-portfolio/runique/
```

**Skills (top 5):** Kotlin, Jetpack Compose, Wear OS, Ktor, Clean Architecture
**Start:** April 2024 · **End:** November 2024 · **Currently working:** No · **Associated with:** (leave blank)

#### 5. Maktabati

**Project name**

```text
Maktabati
```

**Description**

```text
Production research-library app. Full rebuild from a basic PDF viewer into a digital library: browse, read 1000+ page PDFs, search, offline caching, sign-in, resumable downloads.

Stack: Kotlin, Jetpack Compose, Room, Ktor
```

**Media — Site URL**

```text
https://ironmanyg.github.io/hussain-portfolio/maktabati/
```

**Skills (top 5):** Kotlin, Jetpack Compose, Room, Ktor, Android SDK
**Start:** March 2022 · **End:** *(leave blank)* · **Currently working:** ✅ Yes · **Associated with:** Kay Technology

### Tier 2 — Supporting entries (newest first)

#### 6. PlantPediaZ

**Project name**

```text
PlantPediaZ
```

**Description**

```text
Compose guide app for plants and zombies in Plants vs. Zombies 2, fed by the PvZ2 API. Multi-module architecture with MVVM/MVI.

Stack: Kotlin, Jetpack Compose, Multi-Module, MVVM, MVI, Retrofit
```

**Media — Site URL**

```text
https://ironmanyg.github.io/hussain-portfolio/plantpediaz/
```

**Skills (top 5):** Kotlin, Jetpack Compose, MVVM, Retrofit, Android SDK
**Start:** September 2024 · **End:** *(leave blank)* · **Currently working:** ✅ Yes · **Associated with:** (leave blank)

#### 7. Translator KMM

**Project name**

```text
Translator KMM
```

**Description**

```text
Translation app for 28 languages on Android and iOS, sharing the maximum amount of Kotlin code via Kotlin Multiplatform Mobile.

Stack: KMM, Ktor, SQLDelight
```

**Media — Site URL**

```text
https://ironmanyg.github.io/hussain-portfolio/translator-kmm/
```

**Skills (top 5):** Kotlin Multiplatform, Ktor, SQLDelight, iOS Development, Android SDK
**Start:** February 2023 · **End:** April 2023 · **Currently working:** No · **Associated with:** (leave blank)

#### 8. Material Calculator

**Project name**

```text
Material Calculator
```

**Description**

```text
Pixel-style calculator with unit and UI tests verified by a CI/CD pipeline.

Stack: Kotlin, Android SDK, JUnit, Espresso, CI/CD
```

**Media — Site URL**

```text
https://ironmanyg.github.io/hussain-portfolio/material-calculator/
```

**Skills (top 5):** Kotlin, Android SDK, JUnit, Espresso, CI/CD
**Start:** December 2022 · **End:** December 2022 · **Currently working:** No · **Associated with:** (leave blank)

#### 9. Qodem

**Project name**

```text
Qodem
```

**Description**

```text
Blood-donation appointment app: book appointments, pre-screen online, and browse blood-bank locations. Capstone project for the Udacity Android Kotlin Developer Nanodegree.

Stack: Kotlin, Android SDK, MVVM, Firebase
```

**Media — Site URL**

```text
https://ironmanyg.github.io/hussain-portfolio/qodem/
```

**Skills (top 5):** Kotlin, Android SDK, MVVM, Firebase, Material Design
**Start:** November 2021 · **End:** November 2021 · **Currently working:** No · **Associated with:** (leave blank)

#### 10. Todo-Maps

**Project name**

```text
Todo-Maps
```

**Description**

```text
Location-based to-do list using Google Maps and geofencing to remind users at a specific place.

Stack: Kotlin, Android SDK, Google Maps SDK, Geofencing
```

**Media — Site URL**

```text
https://ironmanyg.github.io/hussain-portfolio/todo-maps/
```

**Skills (top 5):** Kotlin, Google Maps SDK, Geofencing, Android SDK, MVVM
**Start:** August 2021 · **End:** October 2021 · **Currently working:** No · **Associated with:** (leave blank)

#### 11. Asteroid Radar

**Project name**

```text
Asteroid Radar
```

**Description**

```text
App showing near-Earth asteroids tracked by NASA's NEoWs API: size, velocity, distance, and hazard flag.

Stack: Kotlin, Android SDK, MVVM, Retrofit, Room
```

**Media — Site URL**

```text
https://ironmanyg.github.io/hussain-portfolio/asteroid-radar/
```

**Skills (top 5):** Kotlin, Android SDK, MVVM, Retrofit, Room
**Start:** February 2021 · **End:** March 2021 · **Currently working:** No · **Associated with:** (leave blank)

#### 12. ND940C3-Project

**Project name**

```text
ND940C3-Project
```

**Description**

```text
Custom-button download app with motion-layout animations and a notification flow that lands on a detail screen.

Stack: Kotlin, Android SDK, MotionLayout, Notifications
```

**Media — Site URL**

```text
https://ironmanyg.github.io/hussain-portfolio/nd940c3/
```

**Skills (top 5):** Kotlin, Android SDK, Animations, Material Design, Notifications
**Start:** May 2021 · **End:** June 2021 · **Currently working:** No · **Associated with:** (leave blank)

### Remove from LinkedIn

- **Shoe Store** — basic Udacity tutorial, low signal.
- **Kay Scanner** — move into the Researcher role bullets above (it's not a standalone project, it's the deliverable of that role).
- **Kay Labs** — same, belongs under Researcher.

---

## 8. Skills section — clean-up

Drop these from your LinkedIn Skills list (low signal):

- `Evernote`
- `Note Taking`
- `Teamwork`
- `Communication Skills`
- `Organizational Skills`
- `Fast Learner`
- `Ultimaker Cura` (move to the Researcher role only)
- `Learning Evernote for Windows` certificate (drop entirely)

Keep:

- The 3 LinkedIn Skill Assessment passes (Kotlin, Android, Autodesk Fusion 360) — verified badges.
- Stack and architecture skills.

Accept these LinkedIn-suggested skills:

- Android Testing
- Android SDK

Skip:

- Mobile Operating Systems (too generic)
- Mobile Game Development (not what you build)
- Object-oriented Languages (covered by Kotlin)

---

## 9. Education — label drift

LinkedIn currently says "Electrical and Electronics Engineering" while the CV/site say "Bachelor (Honors) of Electrical Engineering". Pick one canonical label across all surfaces. Recommended:

```text
Academy of Engineering Sciences — Bachelor (Honors), Electrical Engineering · 2011–2016
```

---

## 10. Certifications — add the 2025 ones

LinkedIn is missing these from the CV/site. Add each as its own certification entry.

```text
Building Industry-Level CMP Desktop Apps — Pl-Coding (JetBrains-collaborated), 2025
```

```text
Building Industry-Level CMP Android & iOS — Pl-Coding (JetBrains-collaborated), 2025
```

```text
Kotlin Backends With Spring Boot — Pl-Coding (JetBrains-collaborated), 2025
```

For each, attach the relevant skill (e.g., Compose Multiplatform, Spring Boot).
