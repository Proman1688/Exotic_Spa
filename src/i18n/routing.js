import { defineRouting } from 'next-intl/routing';
 
export const routing = defineRouting({
  locales: ['en', 'es', 'fr'], // Supported locales
  defaultLocale: 'en'
});