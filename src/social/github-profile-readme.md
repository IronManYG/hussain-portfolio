### Hi, I'm Hussain Gaddal

```kotlin
data class Hussain(
    val role: String = "Android Developer",
    val company: String = "Kay Technology",
    val location: String = "Riyadh, Saudi Arabia",
    val years: Int = 4,
    val stack: List<String> = listOf(
        "Kotlin", "Jetpack Compose",
        "Kotlin Multiplatform", "Compose Multiplatform",
        "Ktor", "Spring Boot"
    ),
    val shipping: String = "Production Android + KMP/CMP side projects + Ktor backends",
    val openTo: List<String> = listOf("Senior Android", "KMP", "Full-stack Kotlin")
)

@Composable
@Preview
fun HussainProfile() {
    val me = remember { Hussain() }
    Column(verticalArrangement = Arrangement.spacedBy(12.dp)) {
        Hero(role = me.role, company = me.company, location = me.location)
        Now("Shipping Chirp on KMP/CMP, refining Android at Kay Tech.")
        Stack(items = me.stack)
        Pinned()  // ↓ rendered by GitHub below this README
        Reach(portfolio = true, linkedIn = true, email = true)
    }
}
```

Started at Kay Technology in 2017 as a Researcher on hardware and 3D-printing projects, then moved into mobile engineering in 2022. Now leading the Android product end to end.

[Portfolio](https://ironmanyg.github.io/hussain-portfolio/) · [LinkedIn](https://www.linkedin.com/in/hussaingaddal/) · [hussain.yg2010@gmail.com](mailto:hussain.yg2010@gmail.com)

---

#### What I'm working on

- **Kay Technology** — leading the Android product. Migrated a legacy Java/XML codebase to Kotlin and Compose (40% crash reduction), built reusable in-house SDKs (25% faster delivery), set the multi-module Clean Architecture/MVI standard plus a Bitrise CI/CD pipeline, and built the Ktor microservices behind it.
- **Side builds in KMP/CMP** — shipping to Android, iOS, and Desktop from one codebase. See pinned repos.

#### Stack

![Kotlin](https://img.shields.io/badge/Kotlin-7F52FF?style=flat&logo=kotlin&logoColor=white)
![Jetpack Compose](https://img.shields.io/badge/Jetpack_Compose-4285F4?style=flat&logo=jetpackcompose&logoColor=white)
![KMP](https://img.shields.io/badge/Kotlin_Multiplatform-7F52FF?style=flat&logo=kotlin&logoColor=white)
![Compose Multiplatform](https://img.shields.io/badge/Compose_Multiplatform-4285F4?style=flat&logo=jetpackcompose&logoColor=white)
![Ktor](https://img.shields.io/badge/Ktor-087CFA?style=flat&logo=ktor&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Spring_Boot-6DB33F?style=flat&logo=springboot&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-336791?style=flat&logo=postgresql&logoColor=white)
![Room](https://img.shields.io/badge/Room-4285F4?style=flat&logo=android&logoColor=white)
![Bitrise](https://img.shields.io/badge/Bitrise-683D87?style=flat&logo=bitrise&logoColor=white)
![Material_3](https://img.shields.io/badge/Material_3-757575?style=flat&logo=materialdesign&logoColor=white)

#### GitHub stats

<a href="https://github.com/IronManYG">
  <img src="https://github-readme-stats.vercel.app/api?username=IronManYG&show_icons=true&theme=tokyonight&hide_border=true&count_private=true" alt="GitHub Stats" height="160" />
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=IronManYG&layout=compact&theme=tokyonight&hide_border=true&langs_count=8" alt="Top Languages" height="160" />
</a>
