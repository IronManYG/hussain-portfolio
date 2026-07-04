module.exports = function(eleventyConfig) {
  // Arabic-Indic (Eastern) numerals — convert Western 0-9 → ٠-٩ for the
  // Arabic/RTL pages (years, counts). Numbers still flow LTR; this only swaps
  // the glyphs. Apply explicitly in AR templates, e.g. `{{ project.year | arNum }}`.
  const arabicIndic = { "0": "٠", "1": "١", "2": "٢", "3": "٣", "4": "٤", "5": "٥", "6": "٦", "7": "٧", "8": "٨", "9": "٩" };
  eleventyConfig.addFilter("arNum", (value) => {
    if (value === undefined || value === null) return value;
    return String(value).replace(/[0-9]/g, (d) => arabicIndic[d]);
  });

  // Locale-aware variant for the shared page bodies: Arabic-Indic digits when
  // the page locale is "ar", the value untouched otherwise.
  // Usage: `{{ project.year | locNum(locale) }}`.
  eleventyConfig.addFilter("locNum", (value, locale) => {
    if (locale !== "ar") return value;
    if (value === undefined || value === null) return value;
    return String(value).replace(/[0-9]/g, (d) => arabicIndic[d]);
  });

  // Default locale for every template; src/ar/ar.11tydata.json overrides it
  // to "ar" for the Arabic directory. The shared base_rt.njk layout derives
  // dir/rtl, URL prefix, and UI strings (locales.json) from this.
  eleventyConfig.addGlobalData("locale", "en");

  // Tags that describe a project's provenance, not its tech — templates use
  // this to pick the "Type" meta row and to exclude these from tech-chip
  // lists. Single source of truth (was copy-pasted per template).
  eleventyConfig.addGlobalData("nonTechTags", [
    "Course Challenge", "Course Project", "Community Challenge",
    "Personal", "Personal Project", "Professional", "Institution"
  ]);

  // Passthrough copy for static assets
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/cv");
  eleventyConfig.addPassthroughCopy("src/favicon.svg");
  eleventyConfig.addPassthroughCopy("src/manifest.json");
  // sw.js must keep shipping even though nothing registers it anymore:
  // returning visitors still have the old v3 worker installed, and the
  // self-destruct version at the same URL is what removes it.
  eleventyConfig.addPassthroughCopy("src/sw.js");

  // Note: src/social/ is excluded via .eleventyignore — working/reference content
  // for the maintainer (LinkedIn / GitHub / Notion / CV ready-to-paste copy +
  // image prompts) that lives in src/ for proximity to the data it references
  // but isn't published.

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    pathPrefix: "/hussain-portfolio/",
    templateFormats: ["html", "njk", "md"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};
