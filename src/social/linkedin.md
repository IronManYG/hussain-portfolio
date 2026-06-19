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

#### 8. Sifr — Material 3 Calculator

**Project name**

```text
Sifr — Material 3 Calculator
```

**Description**

```text
Sifr (صفر) — a modernized, deeply customizable Material 3 calculator for Android, live on the Google Play Store. Basic + scientific modes, built-in currency/unit/tip/date converters, five hand-crafted palettes plus Material You, and a live in-app language switch across 11 languages with full right-to-left support. Built on a hand-written recursive-descent expression engine with IEEE-754 precision cleanup.

Stack: Kotlin, Jetpack Compose, MVI, Koin, Navigation 3, Room, DataStore, Material 3
```

**Media — Site URL**

```text
https://ironmanyg.github.io/hussain-portfolio/sifr/
```

**Skills (top 5):** Kotlin, Jetpack Compose, MVI, Koin, Material Design 3
**Start:** December 2022 · **Currently working:** Yes · **Associated with:** (leave blank)

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

#### 12. Kay Scanner *(Researcher era)*

**Project name**

```text
Kay Scanner
```

**Description**

```text
Hardware + software device that scans physical books without manual page-flipping. Co-built across hardware control, image capture, and software automation around the scan pipeline. Pre-Android research work at Kay Technology that became the entry point into mobile engineering.

Stack: Hardware prototyping, Image capture pipeline, Embedded systems
```

**Media — Site URL** (early prototype repo)

```text
https://github.com/IronManYG/AutoMatic-Book-Scaneer
```

**Skills (top 5):** Hardware Prototyping, Image Processing, Embedded Systems, Research, Problem Solving
**Start:** September 2017 · **End:** March 2022 · **Currently working:** No · **Associated with:** Kay Technology

#### 13. Kay Labs *(Researcher era)*

**Project name**

```text
Kay Labs
```

**Description**

```text
Delivered Kay Labs at IMSIU's College of Computer & Information Sciences in partnership with Precise — a 3-printer Ultimaker lab equipped for CS senior projects.

My role spanned hardware install and configuration, the Cura slicing toolchain, intake software for student print-job submission, plus onboarding, training, and ongoing maintenance. Directly mentored 8 senior-year students across 3 graduation projects, helping them prototype hardware components for their work.

Stack: Fusion 360, Ultimaker, Cura, 3D Printing
```

**Media** — no public repo or portfolio page. Leave Media blank, or upload a photo of the lab / an Ultimaker-printed prototype if you have one in `src/assets/img/branding/` or similar.

**Skills (top 5):** 3D Printing, Fusion 360, CAD, Hardware Prototyping, Research
**Start:** September 2017 · **End:** March 2022 · **Currently working:** No · **Associated with:** Kay Technology

### Remove from LinkedIn

- **Shoe Store** — basic Udacity tutorial, low signal.
- **ND940C3-Project** — basic Udacity exercise (custom button + motion layout + notification). Lower signal than the Researcher-era projects that replace it in the showcase.

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

## 10. Certifications — ready to paste

All cert data below was verified against the actual PDFs in [`./certs/`](./certs/) on 2026-05-06. Titles, issue dates, and credential IDs are pulled from the cert files themselves; skills lists are from the course landing pages on `pl-coding.com`.

LinkedIn certification form fields per entry: **Name**, **Issuing organization**, **Issue date**, **Credential ID** (where present), **Credential URL**, **Skills**, **Media (file + title + description)**.

> **PL Coding's LinkedIn issuer is "PL Coding GmbH"** — match exactly so LinkedIn links to the verified company page. The "GmbH" suffix is the German legal entity form; only use it on LinkedIn (CV/site keeps the cleaner "PL Coding").
>
> **Paste in the order below — oldest first.** LinkedIn's display sort is newest-on-top, but the *paste order* drives the stack when months tie. Pasting from oldest → newest puts the newest cert at the top of your displayed list. The 7 certs below are already sorted oldest-first.
>
> **PL Coding cert format.** 2024+ PL Coding certs (Essentials, Wear OS, Spring Boot, CMP × 2) don't print a credential ID — leave that field blank. The older 2022 CI/CD cert prints `VWTNWR`. The Udacity Nanodegree is fully verifiable at `confirm.udacity.com/KXAAJDDG`.
>
> **JetBrains badge.** PL Coding's website advertises the 2025 CMP + Spring Boot courses as "in collaboration with JetBrains". JetBrains is *not* printed on the cert PDFs — keep the JetBrains mention inside the Media description, not in the issuer field.
>
> **Testing course is bundled.** The "Mastering Automated Testing of Industry-Level Android Apps" topics are part of *The Essentials of Industry-Level Android App Development* — there is no separate Testing cert. Skills bundled into Cert #3 below.
>
> **LinkedIn skill cap.** LinkedIn caps skills *per certification* at 5 (UI limit). Each cert below lists the **top 5 to attach to the cert itself**, plus an **overflow** list for skills that should land elsewhere (your LinkedIn main Skills section, CV pills, GitHub repo topics, or site expertise cards) — see the propagation table at the end of this section.

---

### Cert #1 — Android Kotlin Developer Nanodegree (Udacity) *(Feb 2022 — paste first)*

> **Likely already on your LinkedIn.** If it's there, just verify the **Credential URL** and **Credential ID** are filled — publicly verifiable Nanodegrees boost credibility with recruiters.
>
> **Name on PDF.** "Hussain Yahya Hussain Gaddal" (your full legal name). LinkedIn doesn't have to match — keep "Hussain Gaddal" everywhere on LinkedIn.

**Name**

```text
Android Kotlin Developer Nanodegree
```

**Issuing organization**

```text
Udacity
```

**Issue date** → `February 2022`  ·  **Expiration date** → leave blank

**Credential ID**

```text
KXAAJDDG
```

**Credential URL**

```text
https://confirm.udacity.com/KXAAJDDG
```

**Top 5 skills (attach to cert)**

```text
Android Development
Kotlin
Android SDK
MVVM Architecture
Room Database
```

**Overflow skills (add to LinkedIn main Skills section instead — see propagation table):** `Retrofit`, `LiveData`, `Coroutines`, `Material Design`, `Firebase`, `Navigation Component`, `Lifecycle-Aware Components`.

**Media — file:** upload `Android Kotlin Developer Nanodegree Program Certificate.pdf`

**Media — title**

```text
Android Kotlin Developer Nanodegree — Verified Certificate of Completion
```

**Media — description**

```text
Verified Nanodegree program from Udacity (Feb 2022). Credential publicly verifiable at confirm.udacity.com/KXAAJDDG. Program covered Android SDK fundamentals, lifecycle and architecture (MVVM), persistence with Room, networking with Retrofit, reactive UI patterns (LiveData, Coroutines), and standard Android design patterns.
```

#### Companion entry — LinkedIn Education (keep both, pragmatic reason)

> **Why duplicate.** LinkedIn's Project "Associated with" links bind to **Education** and **Experience** entries — not to **Certifications**. Deleting the Education entry breaks the project associations on the Nanodegree-era projects (Asteroid Radar, Maps, Sifr — formerly Material Calculator, etc.). Keeping the Nanodegree in *both* sections is the practical move; the Education entry is what carries the project linkages.

LinkedIn Education form copy blocks:

**School**

```text
Udacity
```

**Degree**

```text
Certificate of Completion, Android Kotlin Developer
```

**Field of study**

```text
Android Development
```

**Start date** → `October 2021`  *(verify your actual enrollment date in your Udacity dashboard — typical Nanodegree pace was 4 months, so Oct 2021 is the most likely lead-in to Feb 2022 completion)*

**End date** → `February 2022`

**Grade**

```text
Pass
```

**Activities and societies** → leave blank

**Description** → leave blank *(the cert Media description above already covers content; duplicating here would be filler)*

**Skills** — keep just `OOP`, or skip entirely. All real Android-stack skills already attach to the Certification entry above; duplicating across surfaces dilutes endorsements.

**Media** — same as the Certification above:

- File: `Android Kotlin Developer Nanodegree Program Certificate.pdf`
- Link: `https://confirm.udacity.com/KXAAJDDG`

---

### Cert #2 — Professional App Development With CI/CD *(Dec 2022)*

**Name**

```text
Professional App Development With CI/CD
```

**Issuing organization**

```text
PL Coding GmbH
```

**Issue date** → `December 2022`  ·  **Expiration date** → leave blank

**Credential ID**

```text
VWTNWR
```

**Credential URL**

```text
https://www.pl-coding.com/courses/ci-cd-course
```

**Top 5 skills (attach to cert)**

```text
CI/CD
Bitrise
Continuous Delivery
Google Play Console
Firebase App Distribution
```

**Overflow skills:** `Continuous Integration`, `Git Workflow`, `Staging Environments`, `Automated Deployment`.

**Media — file:** upload `Professional App Development With CI-CD Certificate.pdf`

**Media — title**

```text
Professional App Dev with CI/CD — Course Completion Certificate
```

**Media — description**

```text
Issued by PL Coding. Step-by-step CI/CD workflow course for Android — covering automated CI pipelines with Bitrise, fully automated deployment to Google Play, industry-standard Git branching strategies for projects at scale, staging environment setup, and automated app distribution to QA testing teams via Firebase App Distribution.
```

---

### Cert #3 — The Essentials of Industry-Level Android App Development *(Oct 2024)*

**Name**

```text
The Essentials of Industry-Level Android App Development
```

**Issuing organization**

```text
PL Coding GmbH
```

**Issue date** → `October 2024`  ·  **Expiration date** → leave blank  ·  **Credential ID** → leave blank

**Credential URL**

```text
https://www.pl-coding.com/courses/android-essentials
```

**Top 5 skills (attach to cert; testing skills bundled here since there's no separate Testing cert)**

```text
Multi-Module Architecture
Jetpack Compose
Gradle Convention Plugins
Kotlin Coroutines
Unit Testing
```

**Overflow skills:** `Kotlin Flows`, `Android Architecture`, `REST APIs`, `Caching Strategies`, `UI Testing`, `JUnit5`, `MockK`, `Integration Testing`, `End-to-End Testing`, `Google Maps SDK`, `Dynamic Feature Modules`, `Version Catalogs`.

**Media — file:** upload `The Essentials of Industry-Level Android App Development Certificate.pdf`

**Media — title**

```text
Essentials of Industry-Level Android — Course Completion Certificate
```

**Media — description**

```text
Issued by PL Coding. 84 video lessons / 17+ hours building a 6-screen running tracker app — covering project planning and architecture fundamentals, Gradle build-logic with version catalogs and convention plugins, reactive programming with Coroutines & Flows, Jetpack Compose at scale, remote APIs and local database caching strategies, dynamic feature modules, location tracking with the Google Maps SDK, and bundled testing strategies (unit, UI, integration, end-to-end).
```

---

### Cert #4 — Building Industry-Level Wear OS Apps *(Nov 2024)*

> **URL note:** PL Coding sells this course only via a direct checkout link (no `/courses/` landing page). Leave Credential URL blank, or use the courses index URL below.

**Name**

```text
Building Industry-Level Wear OS Apps
```

**Issuing organization**

```text
PL Coding GmbH
```

**Issue date** → `November 2024`  ·  **Expiration date** → leave blank  ·  **Credential ID** → leave blank

**Credential URL**

```text
https://www.pl-coding.com/courses
```

**Top 5 skills (attach to cert)**

```text
Wear OS
Health Services API
Jetpack Compose
Cross-Device Sync
Multi-Module Architecture
```

**Overflow skills:** `Kotlin Coroutines & Flows`.

**Media — file:** upload `Building Industry-Level Wear OS Apps Certificate.pdf`

**Media — title**

```text
Wear OS Apps — Course Completion Certificate
```

**Media — description**

```text
Issued by PL Coding. 5+ hours of video building a complete Wear OS app integrated with a paired mobile device — covering Wear OS theming with Jetpack Compose, exercise and heart-rate tracking via the Health Services API, watch-phone data synchronization, and integration into an existing multi-module Android architecture.
```

---

### Cert #5 — Building Industry-Level Kotlin Backends With Spring Boot *(Oct 2025)*

**Name**

```text
Building Industry-Level Kotlin Backends With Spring Boot
```

**Issuing organization**

```text
PL Coding GmbH
```

**Issue date** → `October 2025`  ·  **Expiration date** → leave blank  ·  **Credential ID** → leave blank

**Credential URL**

```text
https://www.pl-coding.com/courses/kotlin-spring-boot
```

**Top 5 skills (attach to cert)**

```text
Spring Boot
Kotlin
PostgreSQL
WebSockets
JWT Authentication
```

**Overflow skills:** `Redis`, `RabbitMQ`, `REST APIs`, `Multi-Module Gradle`, `CI/CD with GitHub Actions`, `BCrypt Password Hashing`, `Rate Limiting`.

**Media — file:** upload `Building Industry-Level Kotlin Backends With Spring Boot Certificate.pdf`

**Media — title**

```text
Kotlin Spring Boot Backends — Course Completion Certificate
```

**Media — description**

```text
Issued by PL Coding (in collaboration with JetBrains). 120+ video lessons / 20+ hours building a production-grade Kotlin chat-app backend with Spring Boot — covering multi-module Gradle architecture, PostgreSQL + Redis, JWT auth with refresh tokens, REST + WebSockets + RabbitMQ messaging, BCrypt password security, Redis-backed rate limiting, and CI/CD deployment via GitHub Actions.
```

---

### Cert #6 — Compose Multiplatform Android & iOS *(Dec 11, 2025)*

**Name**

```text
Building Industry-Level Compose Multiplatform Android & iOS Apps
```

**Issuing organization**

```text
PL Coding GmbH
```

**Issue date** → `December 2025`  ·  **Expiration date** → leave blank  ·  **Credential ID** → leave blank

**Credential URL**

```text
https://www.pl-coding.com/courses/cmp-mobile
```

**Top 5 skills (attach to cert)**

```text
Kotlin Multiplatform
Compose Multiplatform
Multi-Module Architecture
Offline-First Architecture
Authentication
```

**Overflow skills:** `Jetpack Compose`, `Gradle Convention Plugins`, `Room Database`.

**Media — file:** upload `Building Industry-Level Compose Multiplatform Android & iOS Apps Certificate.pdf`

**Media — title**

```text
Compose Multiplatform Android & iOS — Course Completion Certificate
```

**Media — description**

```text
Issued by PL Coding (in collaboration with JetBrains). 170+ video lessons / 30+ hours building an industry-scale multi-module chat app — covering KMP & CMP internals, build-logic + convention plugins, version catalogs, offline-first data with Room, authentication, real-time communication, and 100% responsive Compose UI across Android & iOS.
```

---

### Cert #7 — Compose Multiplatform Desktop Apps *(Dec 15, 2025 — paste last)*

**Name**

```text
Building Industry-Level Compose Multiplatform Desktop Apps
```

**Issuing organization**

```text
PL Coding GmbH
```

**Issue date** → `December 2025`  ·  **Expiration date** → leave blank  ·  **Credential ID** → leave blank

**Credential URL**

```text
https://www.pl-coding.com/courses/cmp-mobile
```

**Top 5 skills (attach to cert)**

```text
Compose Multiplatform
Compose for Desktop
Cross-Platform Development
Responsive UI
Multi-Module Architecture
```

**Overflow skills:** `Kotlin Multiplatform`.

**Media — file:** upload `Building Industry-Level Compose Multiplatform Desktop Apps Certificate.pdf`

**Media — title**

```text
Compose Multiplatform Desktop — Course Completion Certificate
```

**Media — description**

```text
Issued by PL Coding (in collaboration with JetBrains). 21-lesson / 4-hour add-on extending the CMP base course to Windows, MacOS and Linux desktop targets — covering desktop-specific Figma extensions, packaging, and platform-aware Compose UI.
```

---

### Notes on the "Issuing organization" field

- **PL Coding GmbH** — LinkedIn's autocomplete should surface the verified company page. If not, type it manually (it's the German legal entity form, capital `GmbH`).
- **Udacity** — has a verified LinkedIn company page; let autocomplete fill it.
- Don't put "Pl-Coding (JetBrains-collaborated)" in the issuer field — JetBrains is a collaborator, not the issuer (and only on the 2025 CMP + Spring Boot courses; the 2024/2022 ones aren't JetBrains-collaborated). The JetBrains mention belongs in the Media description for the 2025 certs only.
- **LinkedIn ordering** — paste oldest-first as numbered above (#1 Udacity → #7 CMP Desktop). Newest pastes appear at the top of the displayed list.

---

### Cross-surface skill propagation

LinkedIn caps skills per certification at 5. The "overflow" lists above don't go to waste — each skill has at least one other home where it reinforces your stack and improves discoverability.

**Free-space surfaces (where overflow can land):**

| Surface | Cap | Where to edit | Notes |
|---|---|---|---|
| LinkedIn main Skills section | 50 total | Profile → Skills | Endorsements + recruiter search benefit. Prune obsolete skills first via §8. |
| CV project pills | ~6–8 per project | `src/cv/Hussain_Gaddal_CV_A.html`, `src/cv/Hussain_Gaddal_CV_C.html` | Don't overcrowd compact variants D/E. |
| GitHub repo topics | 20 max per repo | Repo settings → Topics | Pinned repos already topic-tagged; check for additions. |
| Site expertise cards | varies | `src/_data/home.json` (en+ar) | Cards on homepage. |
| Site project pages | ~6 per project | `src/_data/projects.json` `tech_stack` | Already populated for most. |

**Where each overflow skill belongs:**

- **LinkedIn main Skills section — bulk add (de-dupe with existing first):**
  `Retrofit`, `LiveData`, `Material Design`, `Firebase`, `Navigation Component`, `Lifecycle-Aware Components`, `MVVM Architecture`, `CI/CD`, `Bitrise`, `Continuous Integration`, `Continuous Delivery`, `Google Play Console`, `Firebase App Distribution`, `Multi-Module Architecture`, `Gradle Convention Plugins`, `Version Catalogs`, `Kotlin Coroutines`, `Kotlin Flows`, `Caching Strategies`, `Unit Testing`, `UI Testing`, `JUnit5`, `MockK`, `Integration Testing`, `End-to-End Testing`, `Wear OS`, `Health Services API`, `Cross-Device Sync`, `Spring Boot`, `PostgreSQL`, `Redis`, `WebSockets`, `RabbitMQ`, `JWT Authentication`, `BCrypt`, `Rate Limiting`, `GitHub Actions`, `Compose Multiplatform`, `Compose for Desktop`, `Kotlin Multiplatform`, `Cross-Platform Development`, `Responsive UI`, `Offline-First Architecture`, `Authentication`.

- **CV pills (variants A and C only — D/E are length-locked):**
  - **Chirp** (currently `KMP, CMP, Koin, Spring Boot, Room, FCM`) — add `WebSockets`, `JWT`, `PostgreSQL`. Drop `FCM` if you need room.
  - **Runique** (currently `Kotlin, Compose, Koin, Room, Ktor, Maps SDK, Wear OS`) — add `Health Services API`. Already at 7 pills — consider dropping `Ktor` since Wear OS course doesn't use it.

- **GitHub repo topics (open each repo → Settings → Topics):**
  - **Chirp / Translator KMM / similar KMP repos** — add `compose-multiplatform`, `compose-desktop`, `kotlin-multiplatform`, `offline-first`, `multi-module-architecture`, `convention-plugins`.
  - **Chirp backend / qodem-api** — add `spring-boot`, `postgresql`, `redis`, `websockets`, `rabbitmq`, `jwt-authentication`, `rate-limiting`.
  - **Runique** — add `wear-os`, `health-services-api`, `convention-plugins`, `multi-module`.
  - **Older Android repos (Translator KMM, etc.)** — add `mvvm`, `retrofit`, `livedata` if still relevant.

- **Site `home.json` expertise cards (en + ar):**
  - **Backend card** — Spring Boot already added; consider adding `WebSockets` and `PostgreSQL` for backend stack visibility.
  - **Mobile card** — consider adding `Wear OS` and `Cross-Platform` if room.
  - **Tooling/DevOps card (if exists, otherwise create)** — `CI/CD`, `GitHub Actions`, `Bitrise`.

**Suggested execution order:**

1. **First** — paste all 7 certs to LinkedIn (with top-5 skills each). This is the highest-visibility win and is the immediate paste-blocking item.
2. **Second** — bulk-add the LinkedIn main Skills section with the de-duped overflow list. Cheap and high-value for recruiter search.
3. **Third** — GitHub repo topics on Chirp + Runique (these are pinned, so visible to anyone visiting your profile).
4. **Fourth** — CV pills on variants A and C only. Re-export PDFs after.
5. **Fifth (optional)** — site `home.json` expertise card refresh.
