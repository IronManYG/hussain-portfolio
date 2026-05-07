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

### ⏸️ 5. Marketing-puffery drift across `projects.json` AR

EN tone is calm/builder; AR consistently adds CV-flex prefixes that the user explicitly removed from EN copy in earlier passes. **This is the largest pattern issue across the entire AR corpus.**

| File · field | AR addition not in EN |
|---|---|
| Chirp · `overview_ar` | `بمستوى المؤسسات (Enterprise-grade)`, `مُصمم لإبراز أساليب التطوير الحديثة` |
| Chirp · `impact_ar[2]` | `إمكانيات ممتازة` (excellent capabilities) |
| Runique · `overview_ar` | `يبرز هذا المشروع قدرتي في…` (this project highlights my abilities) |
| Runique · `challenge_ar` | `دقة استثنائية` (vs EN simply "precision") |
| Runique · `impact_ar` | `بناء معمارية صلبة ضمنت…` (frames each result as "I built X that ensured Y" instead of leading with the result) |
| ScribbleDash · `overview_ar` | `يُظهر التطبيق المهارات التقنية…` (tone shift to "see how skilled I am") |
| EchoJournal · `overview_ar` | `يتجاوز التطبيق فكرة التسجيل الصوتي البسيط` (bombastic lead-in) |
| Maktabati · `impact_ar[0]` | `بشكل كلي… كلياً` (says "completely" twice) |

**Fix approach:** strip the prefixes. AR sentences should *start* with the metric (`60FPS`, `100%`, `سرعة سب-ثانية`), not with the praise framing. Estimated effort: ~30 min focused pass.

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

### ⏸️ 8. Punctuation: comma vs period before `مما` — `about_page.json`

`مما` is a relative connector, not a sentence-starter. Recurring instances:

```diff
- "...إدارة التنزيلات. مما سرّع..."
+ "...إدارة التنزيلات، مما سرّع..."
```

Apply to all bullets in `experience.items[0].details` where `مما` follows a period.

### ⏸️ 9. Hero subtitle parentheticals — `about_page.json` · `hero.subtitle`

Three trailing English-in-parens (`Legacy Codebases`, `Multi-module`, `At Scale`). The third is especially redundant because `على النطاق الواسع` already conveys it. Trim.

### ⏸️ 10. Redundant English-in-parens for naturalized roles — `about_page.json`

```diff
- "role": "مطور أندرويد (Android Developer)"
+ "role": "مطور أندرويد"

- "role": "باحث (Researcher)"
+ "role": "باحث"
```

Reason: `أندرويد` *is* the transliteration of Android — appending the EN form is just visual noise. Reserve parenthetical EN for technical terms that aren't obvious from the AR (`Clean Architecture`, `MVI/MVVM` — those are useful).

### ⏸️ 11. `home.json` AR · `expertise.items[3].title` drops half the EN label

```diff
- "title": "تدفق البيانات"
+ "title": "البيانات والتدفق"
```

Reason: EN is "Data & Flow"; current AR translates only "Flow".

### ⏸️ 12. Cert 4 description drops "Tiles" — `about_page.json` · `certifications.items[3]`

```diff
- "تطوير متقدم ومترابط لنظام Wear OS يشمل Health Services API، والمزامنة السلسة عبر الأجهزة المختلفة."
+ "تطوير Wear OS شاملاً Health Services API، Tiles، والمزامنة بين الأجهزة."
```

Reason: EN explicitly lists "Tiles" as one of the three Wear OS features covered.

### ⏸️ 13. Cert 2 title — `about_page.json` · `certifications.items[1]`

```diff
- "title": "بناء واجهات خلفية لـ Kotlin بمستوى احترافي مع Spring Boot"
+ "title": "بناء خدمات خلفية بلغة Kotlin بمستوى احترافي باستخدام Spring Boot"
```

Reason: `واجهات خلفية` reads "backend interfaces". The EN "Backends" is normally rendered as `خدمات خلفية`.

### ✅ Notion redirects — applied in commit `5a364d1`

Five small AR polish items inside `src/_data/notion_redirects.json` were applied alongside the 404 fix:

- `projects.body_ar`: `الواجهات الخلفية` → `خدمات خلفية` (correct AR for "Backends").
- `experience.body_ar`: dual-form fix `بين دور الباحث ومطور أندرويد` → `بين دوري الباحث ومطور أندرويد` + `8+ سنوات` → `أكثر من 8 سنوات` (parallel article symmetry).
- `contact.body_ar`: `لينكدإن` → `LinkedIn` (brand name stays Latin, matches GitHub).
- `contact.body_ar`: `تواصل بـ` → `تواصل عبر` (more idiomatic).
- `cv.body_ar` reworded to match the new PDF target action.

---

## 🟢 Minor (polish)

### ⏸️ 14. Name shadda inconsistency

- `home.json` AR uses `قدّال` (with shadda).
- `src/ar/about.njk` title and image alt use `قدال` (no shadda).
- `src/ar/projects.njk` title uses `قدال`.
- `notion_redirects.json` `home.title_ar` uses `قدال`.

Pick one form and apply globally. Recommendation: drop the shadda (`قدال`) — most modern Arabic UI strips diacritics by default (iron rule 6).

### ⏸️ 15. Tailwind physical margins inside `src/ar/*.njk`

Templates use physical `ml-*`, `mr-*`, `pl-*`, `pr-*` classes. In a non-RTL-plugin Tailwind setup these *don't* flip in RTL, which means horizontal spacing carried over from EN templates is visually wrong-sided in AR.

Audit target — grep for `\b(ml|mr|pl|pr)-\d` inside `src/ar/`. Two paths to fix:

- Replace with logical equivalents: `ms-*` / `me-*` / `ps-*` / `pe-*` (Tailwind v3+ supports these).
- Or enable `tailwindcss-rtl` plugin and let it auto-flip.

### ⏸️ 16. Iron rule 8 mild violations — `home.json` AR

- `about.paragraphs[1]`: "أركز ... على استكشاف الإمكانيات … وبناء خدمات خلفية" — joins two distinct activities with و.
- `experience.items[2].details[0]`: `هندسة وبناء الأنظمة البرمجية الموثوقة` — doubles a verb where EN has one. Drop one: `تصميم أنظمة برمجية موثوقة`.

### 🔵 17. Button register — `home.json` AR

- `btn_work: "عرض المشاريع المميزة"` — masdar ✅
- `btn_cv: "تحميل السيرة الذاتية"` — masdar ✅
- `btn_contact: "تواصل معي"` — imperative

Strict iron-rule-4 reading: all UI buttons should be masdar (`التواصل`). Pragmatic reading: the contact CTA is consumer-friendly imperative and EN even has the same vibe. Inconsistent register, but a defensible product choice. Flag for confirmation.

---

## Summary

- **Total findings:** 17
- **Fixed:** 4 critical + 5 notion polish = 9 items committed.
- **Outstanding:** 4 major (#5, #7, #8, #9–#13 grouped) + 4 minor (#14, #15, #16, register call #17).

**Suggested next focused pass:** finding #5 (puffery sweep across `projects.json`) — biggest tone payoff per minute of work. Stripping the CV-flex prefixes and reframing impact bullets to lead with the result will make the AR version sound like the same understated person who wrote the EN.

## Cross-references

- Live status snapshot: [`BRANDING-SYNC.md`](./BRANDING-SYNC.md)
- Project memory snapshot: `~/.claude/projects/E--AntigravityProjects-hussain-portfolio/memory/project_branding_state.md`
- Skill applied: `~/.claude/skills/arabic-localization/`
