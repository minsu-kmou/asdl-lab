# ASDL bilingual laboratory website

Astro static website for Advanced Semiconductor Devices Lab. (ASDL), Major of Nano-Semiconductor Engineering, Korea Maritime & Ocean University. English and Korean versions of Home, Professor, Research, Publications, Members, News, Facilities, and Contact.

## Setup

Install Node.js 22 LTS and pnpm 11.25.0, then:

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Default URL: http://localhost:4321/asdl/ (language selection), /asdl/en/ and /asdl/ko/. Switches preserve the current page.

```sh
# POSIX shell: configure your actual deployment URL
SITE_URL=https://YOUR-ACCOUNT.github.io BASE_PATH=/YOUR-REPOSITORY pnpm build
SITE_URL=https://YOUR-ACCOUNT.github.io BASE_PATH=/YOUR-REPOSITORY pnpm verify
pnpm preview
```

```powershell
$env:SITE_URL = 'https://YOUR-ACCOUNT.github.io'
$env:BASE_PATH = '/YOUR-REPOSITORY'
pnpm build
pnpm verify
pnpm preview
```

Build runs Astro TypeScript checks and static generation into dist. Verification checks structured content, every localized route, metadata, image alt text, language switching, sitemap, and all local links/assets against the selected repository base. Use the same environment values for build, verify, and preview. Defaults use example.github.io; set the real site URL for production canonical metadata and sitemap.

## Editing

- src/data/publications.json: bilingual title, authors array, journal, numeric year, volume, pages, nullable DOI identifier, bilingual status. Sorted descending by year.
- src/data/members.json: local photo, bilingual name/role/researchTopic, nullable email, alumni boolean. Current and alumni groups are separate.
- src/data/news.json: ISO publishDate, bilingual title/content/category/imageAlt, local image. Sorted newest first. Plain text content.
- src/lib/site.ts: research themes, navigation translations and base-aware URL helpers.
- src/pages/[lang]/[...page].astro: presentation and verified professor, facility and contact details when supplied.
- public/images: local assets. JSON paths omit the base and leading slash, e.g. images/photo.jpg.

All sample records are visibly labeled placeholders. No real publications, faculty or student identities, equipment inventory, or contact details are asserted. Replace with approved, verified content; set placeholder to false only then. Confirm the Korean institutional/laboratory wording before public release. Portraits are neutral placeholders; the device artwork is a conceptual SVG, not a laboratory photograph. See AGENTS.md for content rules.

## GitHub Pages deployment — explicit approval required

The workflow is **manual-only**. Pushing does not deploy. No publishing, pushing, or deploying is authorized by this project setup.

After owner approval:
1. Create/select a repository and commit/push the project, including pnpm-lock.yaml.
2. In Settings → Pages set Source to **GitHub Actions**.
3. Optionally configure a required reviewer for the github-pages environment if your repository/account supports it.
4. In Actions → Deploy Astro to GitHub Pages, select **Run workflow** on the approved branch.
5. The workflow installs locked dependencies, checks/builds/verifies, uploads dist, and deploys to https://YOUR-ACCOUNT.github.io/YOUR-REPOSITORY/.
6. Check both languages, mobile menu, language switcher, all eight pages and sitemap on the published URL.

For an account root repository named YOUR-ACCOUNT.github.io, change workflow BASE_PATH to `/`. For a custom domain, change SITE_URL to the HTTPS origin, set BASE_PATH appropriately, configure the domain in Pages settings, and add public/CNAME. No secrets are needed: the deploy job uses GitHub's OIDC token and scoped Pages permissions.

No remote fonts, analytics, or remote image dependencies. Keyboard navigation includes a skip link, current-page indication, mobile menu state and Escape-to-close. Layout responds from mobile to desktop and honors reduced motion.
