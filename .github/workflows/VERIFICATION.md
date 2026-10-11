# Verification — 2026-10-11

- Frozen dependency installation passed with pnpm 11.25.0.
- `pnpm run build` passed: Astro check reported zero errors, warnings, or hints; 17 static pages generated.
- `pnpm run verify` passed: content field validation, 16 localized pages and language entry, metadata, alt text, current-page navigation, language switches, sitemap, and 431 local URLs.
- Additional builds and verification passed for `/research-lab/` and `/` with a different site origin.
- Browser QA: English desktop homepage; English/Korean research at 390 × 844 mobile viewport; mobile navigation opens; Escape closes and restores button focus; language switch preserves research route; Korean mobile page has no horizontal overflow.
- Original SVG device illustration and neutral portrait placeholders are included locally. No real people or publications are invented.
- Deployment workflow is manual dispatch only. GitHub Actions execution and live GitHub Pages URLs have not been tested because publication, pushing, and deployment have not been approved.

The Windows host blocked package-manager file creation in the source folder. Build checks therefore ran against a copy of the source in the permitted temporary directory (`%TEMP%/asdl-build-20261011`). Source remains in this workspace. The generated default-base output is supplied in dist; its example origin must be replaced with the actual GitHub Pages site configuration before deployment.

Before public launch, replace all sample records and supply verified professor, facility, and contact information. Review Korean terminology and institutional naming.
