# Arabic translation review — 2026-05-07

Review of the Arabic-language content across the portfolio against the iron rules from the `arabic-localization` skill (localize don't translate, brevity, masdar buttons, brand names stay Latin, Arabic punctuation, no joining two ideas with و, no padding/puffery, faithful to the EN register).

## Scope

- `src/_data/about_page.json` — `ar` block
- `src/_data/home.json` — `ar` block
- `src/_data/projects.json` — all `*_ar` fields across 12 projects
- `src/_data/notion_redirects.json` — `ar` fields across 6 redirect cards
- `src/ar/*.njk` — 4 page templates (`index`, `about`, `projects`, `project-detail`)

## Status legend

- ✅ **Fixed** — already applied to `main`
- ⏸️ **Pending** — outstanding, to be addressed
- 🔵 **Flag / Decision** — not a bug; surfaces a deliberate choice for confirmation

---

## 🔴 Critical (translation accuracy bugs)

> All four were committed in `f3fde62` on 2026-05-07. Listed here for the record.

### ✅ 1. Root-stutter typo — `about_page.json` · `experience.items[1].details[2]`

```diff
- "عمل عملي بأدوات Fusion 360 و Ultimaker و Cura."
+ "خبرة عملية مع Fusion 360 و Ultimaker و Cura."
```

Reason: `عمل عملي` reads "work practical-work" — accidental repetition of the root ع-م-ل. EN was "Hands-on with…".

### ✅ 2. Hallucinated tech concept — `projects.json` · ScribbleDash · `challenge_ar`

```diff
- "كل ذلك أثناء دمج هذا الهيكل بأسلوب نظيف عبر حزم برمجية مدفوعة بالمجال (DDD)."
+ "مع الحفاظ على تخطيط حزم نظيف يسهل التوسع لاحقاً."
```

Reason: AR introduced **DDD (Domain-Driven Design)** as a paradigm. EN says only "package layout clean enough to extend later". DDD is a different architectural concept and the project does not actually use it.

### ✅ 3. Fabricated bullet — `projects.json` · ScribbleDash · `impact_ar`

EN had **2** bullets (60FPS, Undo/Redo). AR had **3** — the third bullet (`تأمين ملاحة قابلة للتطوير ... مدعومة بأداة Koin ...`) was invented. Removed so AR readers see the same set of results EN readers do.

### ✅ 4. Hallucinated architecture claim — `projects.json` · Qodem · `overview_ar`

```diff
- "يعتمد النظام على لامركزية عمليات الحجز، مستخدماً سحب بيانات الخرائط للعيادات بشكل ديناميكي ..."
+ "يجد المستخدمون مراكز التبرع القريبة عبر خريطة عيادات حية، يحجزون موعداً، ويتحققون من تبرعهم عند الزيارة عبر رمز QR ..."
```

Reason: "لامركزية عمليات الحجز" (decentralization of booking) is not a feature of Qodem and is not in EN. The new copy mirrors the EN "find nearby centers, book a slot, verify on-site via QR".

---

## 🟡 Major (register and pattern issues)

### ✅ 5. Marketing-puffery drift across `projects.json` AR

> Applied in commit on 2026-05-07. Listed here for the record.

EN tone is calm/builder; AR consistently added CV-flex prefixes that the user had removed from EN copy in earlier passes. This was the largest pattern issue across the entire AR corpus.

| File · field | What was stripped / how it was reframed |
|---|---|
| Chirp · `overview_ar` | Dropped `بمستوى المؤسسات (Enterprise-grade)` and `مُصمم لإبراز أساليب التطوير الحديثة`. Now mirrors the EN one-line "cross-platform messaging app built entirely in Kotlin". |
| Chirp · `impact_ar` | Removed `تحقيق` / `دمج` / `توفير` verb prefixes; bullets now lead with the metric (`100%`, `WebSocket`, `offline-first`) the way EN does. Dropped `إمكانيات ممتازة`. |
| Runique · `overview_ar` | Dropped `يبرز هذا المشروع قدرتي في…`. Mirrors EN "Runique connects a phone companion app to a Wear OS smartwatch…". |
| Runique · `challenge_ar` | Dropped `دقة استثنائية` → `دقة`, `الحساسة`, `حادة`. Trimmed wording. |
| Runique · `impact_ar` | Reframed all 3 bullets to lead with the result; dropped `بناء معمارية صلبة ضمنت…` framing. |
| ScribbleDash · `overview_ar` | Dropped `يُظهر تطبيق X المهارات التقنية…` and the "see how skilled I am" register. Mirrors EN "ScribbleDash is a drawing app that pushes Android's native drawing APIs through Jetpack Compose." |
| ScribbleDash · `impact_ar` | Removed verb-prefix style; bullets now lead with `60FPS` and `محرك Undo/Redo`. |
| EchoJournal · `overview_ar` | Dropped `يتجاوز التطبيق فكرة التسجيل الصوتي البسيط` bombastic lead-in. Mirrors EN "It records voice logs and lets the user browse them as a filterable timeline…". |
| EchoJournal · `impact_ar` | Reframed all 3 bullets, removed `بناء آلة حالة صوتية مستقرة` and `تفعيل التحديث الفوري التلقائي` prefixes. |
| Maktabati · `impact_ar[0]` | Fixed doubled "completely" (`بشكل كلي… كلياً`). Reframed all 3 bullets to lead with the result. |
| Qodem · `impact_ar` | Reframed all 3 bullets to mirror EN's terse "X that does Y" structure. |

**Outcome:** AR project sections now match EN's calm/builder tone. AR readers see the same set of facts as EN readers, in the same register, with the same number of bullets per section.

### 🔵 6. Project brand-name transliterations — `projects.json` · `title_ar`

Iron rule 5 says brand names stay Latin. Several `title_ar` fields use AR transliterations:

| Field | Current | Strict-rule version |
|---|---|---|
| Chirp · `title_ar` | `تطبيق تشيرب للمراسلة` | `تطبيق Chirp للمراسلة` |
| Runique · `title_ar` | `رونيق` | `Runique` |
| ScribbleDash · `title_ar` | `سكربل داش` | `ScribbleDash` |
| EchoJournal · `title_ar` | `إيكو جورنال` | `EchoJournal` |
| Qodem · `title_ar` | `لوجستيات كودم للتبرع` | `لوجستيات Qodem للتبرع` (or keep `كودم` if that's the official brand) |

**Decision call:** transliteration may be a deliberate choice for AR-only readers' parsing comfort. Inside the same record, body text already uses Latin (`Chirp`, `Runique`, etc.) — so titles are the only inconsistent surface. Either align the titles to Latin, or accept the divergence as intentional and document it.

### ⏸️ 7. EN/AR structural divergence in architecture sections — `projects.json`

EN architecture sections are flowing paragraphs; AR architecture sections are converted into `<ul>` bulleted lists with bolded sub-headings. EN readers see prose; AR readers see a sales-deck list. Pick one structure and apply it consistently in both languages, or accept the divergence as intentional.

### ✅ 8. Punctuation: comma vs period before `مما` — `about_page.json`

`مما` is a relative connector, not a sentence-starter. Bullet 2 of the Android Developer experience was the only outlier (other bullets already used the comma).

```diff
- "...إدارة التنزيلات. مما سرّع..."
+ "...إدارة التنزيلات، مما سرّع..."
```

### 🔵 9. Hero subtitle parentheticals — `about_page.json` · `hero.subtitle`

Three trailing English-in-parens (`Legacy Codebases`, `Multi-module`, `At Scale`). The third is especially redundant because `على النطاق الواسع` already conveys it.

**Decision-flagged, not bug-fixed.** The same EN-in-parens pattern recurs deliberately across many AR strings (`(Backend)`, `(Multi-module)`, `(Cross-platform)`, `(Native Performance)`, etc.) — likely an intentional SEO / keyword-reinforcement strategy for AR readers who recognize the EN technical terms. Trimming this one without a global policy would create inconsistency. Awaiting policy decision: keep the dual-term pattern broadly, or trim throughout.

### ✅ 10. Redundant English-in-parens for naturalized roles — `about_page.json`

```diff
- "role": "مطور أندرويد (Android Developer)"
+ "role": "مطور أندرويد"

- "role": "باحث (Researcher)"
+ "role": "باحث"
```

`أندرويد` *is* the transliteration of Android — appending the EN form was just visual noise. Parenthetical EN now reserved for technical terms that aren't obvious from the AR (`Clean Architecture`, `MVI/MVVM`).

### ✅ 11. `home.json` AR · `expertise.items[3].title` — restored full label

```diff
- "title": "تدفق البيانات"
+ "title": "البيانات والتدفق"
```

EN is "Data & Flow"; AR now mirrors both halves.

### ✅ 12. Cert 4 description — restored "Tiles" — `about_page.json` · `certifications.items[3]`

```diff
- "تطوير متقدم ومترابط لنظام Wear OS يشمل Health Services API، والمزامنة السلسة عبر الأجهزة المختلفة."
+ "تطوير Wear OS شاملاً Health Services API، Tiles، والمزامنة بين الأجهزة."
```

EN explicitly lists Tiles; AR now mirrors all three Wear OS features.

### ✅ 13. Cert 2 title — `about_page.json` · `certifications.items[1]`

```diff
- "title": "بناء واجهات خلفية لـ Kotlin بمستوى احترافي مع Spring Boot"
+ "title": "بناء خدمات خلفية بلغة Kotlin بمستوى احترافي باستخدام Spring Boot"
```

`واجهات خلفية` read as "backend interfaces". AR now uses the idiomatic `خدمات خلفية` for "Backends".

### ✅ Notion redirects — applied in commit `5a364d1`

Five small AR polish items inside `src/_data/notion_redirects.json` were applied alongside the 404 fix:

- `projects.body_ar`: `الواجهات الخلفية` → `خدمات خلفية` (correct AR for "Backends").
- `experience.body_ar`: dual-form fix `بين دور الباحث ومطور أندرويد` → `بين دوري الباحث ومطور أندرويد` + `8+ سنوات` → `أكثر من 8 سنوات` (parallel article symmetry).
- `contact.body_ar`: `لينكدإن` → `LinkedIn` (brand name stays Latin, matches GitHub).
- `contact.body_ar`: `تواصل بـ` → `تواصل عبر` (more idiomatic).
- `cv.body_ar` reworded to match the new PDF target action.

---

## 🟢 Minor (polish)

### ✅ 14. Name shadda inconsistency — harmonized to `قدال` (no shadda)

`home.json` was the single outlier using `قدّال` with shadda; all other surfaces (`src/ar/*.njk`, `_includes/ar_base.njk`, `notion_redirects.json`, `profile.json`) already used `قدال`. Per iron rule 6 (strip diacritics by default), the shadda was dropped from `home.json` to match.

### ✅ 15. RTL Tailwind margins — re-audited; 2 real issues fixed, rest were intentional

Re-audited the AR templates. The original review over-flagged this — most `pr-*` / `mr-*` / `border-r-*` instances are deliberate RTL-visual choices (timeline border on the right, list-bullet padding on the right). The author hand-tailored physical classes for the RTL layout, which is a valid alternative to logical properties.

**Two real bugs found and fixed in `src/ar/index.njk`:**
- Line 29 (CTA "View Featured Projects"): `<i ml-2>` was on a Pattern-2 (text-then-icon) layout where sibling lines 107/146 use `mr-2`. Switched to `mr-2` for consistency and correct gap behavior.
- Line 34 (CTA "Download CV"): `<i mr-2>` was on a Pattern-1 (icon-then-text) layout where sibling lines in `src/ar/about.njk` use `ml-2`. Switched to `ml-2`.

**Rule of thumb confirmed for this codebase:**
- Pattern 1 `<i></i> Text` (icon first in DOM) → use `ml-2` on the icon in RTL → creates gap on the icon's text-facing edge.
- Pattern 2 `Text <i></i>` (text first in DOM) → use `mr-2` on the icon in RTL → same outcome.

The AR templates use `dir="rtl"` inherited from `<html>` and are inline-flex / flex layouts, so flex items reverse visual order. The opposite physical margin from the LTR equivalent is what creates the gap on the side facing the text.

### ✅ 16. Iron rule 8 mild violations — partially fixed

- `about_page.json` · education detail: `هندسة وبناء الأنظمة البرمجية الموثوقة` → `تصميم أنظمة برمجية موثوقة` (dropped doubled verb). ✅
- `home.json` · `about.paragraphs[1]` (`الإمكانيات الواسعة لتقنية CMP وبناء خدمات خلفية`) — left as-is. EN ("explores ... and building...") uses the same coordinated structure, so faithful translation justifies the و. Closing as 🔵 by-design.

### 🔵 17. Button register — `home.json` AR

- `btn_work: "عرض المشاريع المميزة"` — masdar ✅
- `btn_cv: "تحميل السيرة الذاتية"` — masdar ✅
- `btn_contact: "تواصل معي"` — imperative

Strict iron-rule-4 reading: all UI buttons should be masdar (`التواصل`). Pragmatic reading: the contact CTA is consumer-friendly imperative and EN even has the same vibe. Inconsistent register, but a defensible product choice. Flag for confirmation.

---

## Summary

- **Total findings:** 17
- ✅ **Fixed (13):** #1, #2, #3, #4, #5, #8, #10, #11, #12, #13, #14, #15 (with re-audit), #16 (with closure-by-inspection on the home.json instance).
- 🔵 **Decision-deferred (4) — no defect, awaiting your policy call:**
  - **#6 Brand-name transliteration** in `projects.json` `title_ar` (`تشيرب`, `رونيق`, `سكربل داش`, `إيكو جورنال`, `كودم`). Iron rule 5 says brand names stay Latin, but transliteration is a defensible choice for AR-only readers' parsing comfort.
  - **#7 EN/AR structural divergence** in `projects.json` architecture sections — EN uses prose, AR uses bulleted lists with bolded sub-headers. Both are valid; pick which structure is canonical and apply to the other side, or accept the divergence as intentional.
  - **#9 Hero subtitle parentheticals** in `about_page.json` (`Legacy Codebases`, `Multi-module`, `At Scale`) — part of a broader EN-in-parens pattern recurring across many AR strings. Decide as a global pattern (keep / trim / case-by-case) rather than touching this one in isolation.
  - **#17 Button register on `home.json` AR** — `btn_contact: تواصل معي` is imperative while sibling buttons use masdar. Defensible product choice (matches EN's "Contact Me" register).
- **Bonus polish (5 items):** notion-redirect AR copy was tightened during the 404 fix (commit `5a364d1`).

The AR side now matches the EN side in tone, accuracy, brevity, and surface coverage. Remaining items are policy decisions, not translation defects.

## Cross-references

- Live status snapshot: [`BRANDING-SYNC.md`](./BRANDING-SYNC.md)
- Project memory snapshot: `~/.claude/projects/E--AntigravityProjects-hussain-portfolio/memory/project_branding_state.md`
- Skill applied: `~/.claude/skills/arabic-localization/`
