# Certificates drop folder

Local-only inbox for PL Coding certificate PDFs. These get uploaded to LinkedIn as **Media** on each certification entry — they are not embedded in the site or shipped with the build.

## Expected filenames

Save each PDF here using the exact filename below. These match the placeholders in [`../linkedin.md`](../linkedin.md) §10. If your filenames differ, either rename the PDFs or update the linkedin.md references.

| File | LinkedIn cert it goes with | Year |
|---|---|---|
| `Hussain_Gaddal_CMP_Desktop_Cert.pdf` | Building Industry-Level Compose Multiplatform Desktop Apps *(only if a separate PDF was issued)* | 2025 |
| `Hussain_Gaddal_CMP_Mobile_Cert.pdf` | Building Industry-Level Compose Multiplatform Android & iOS Apps | 2025 |
| `Hussain_Gaddal_Spring_Boot_Cert.pdf` | Building Industry-Level Kotlin Backends With Spring Boot | 2025 |
| `Hussain_Gaddal_Android_Essentials_Cert.pdf` | The Essentials of Industry-Level Android App Development | 2024 |
| `Hussain_Gaddal_WearOS_Cert.pdf` | Building Industry-Level Wear OS Apps | 2024 |
| `Hussain_Gaddal_Android_Testing_Cert.pdf` | Mastering Automated Testing of Industry-Level Android Apps | 2024 |
| `Hussain_Gaddal_CICD_Cert.pdf` | Professional App Development With CI/CD | 2022 |

## What I (Claude) need from each PDF

When you've dropped them in, ping me and I'll inspect each one to:

1. **Confirm exact issue date** — LinkedIn wants Month + Year (right now `[Month] 20XX` is a placeholder in linkedin.md §10).
2. **Verify the official certificate title** matches what pl-coding actually printed (in case any course was renamed since you completed it).
3. **Pull the credential ID** if pl-coding prints one — goes in LinkedIn's "Credential ID" field for verifiability.
4. **Confirm the CMP cert count** — if there's only one PDF covering Android/iOS *and* Desktop, drop Cert #1 from linkedin.md §10. If two separate PDFs, keep both.

## Git policy

PDFs in this folder **are committed** to the repo. Rationale: every PDF is uploaded to LinkedIn as Media (publicly downloadable from your profile anyway), so committing them adds versioned backup without increasing exposure. They contain only public-equivalent info (name, course title, issue date — no email, no address, no private credentials).

If you ever add a cert with private info you don't want in the repo (e.g., something with an internal credential ID you'd rather not expose), gitignore that specific filename in the repo root `.gitignore`.
