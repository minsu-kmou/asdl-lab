import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
export default defineConfig({ site: process.env.SITE_URL || 'https://example.github.io', base: process.env.BASE_PATH || '/asdl', output: 'static', trailingSlash: 'always', integrations: [sitemap({ i18n: { defaultLocale: 'en', locales: { en: 'en', ko: 'ko' } } })] });
