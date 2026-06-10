import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';
 
export const routing = defineRouting({
  locales: ['de', 'en', 'fr', 'es', 'it', 'tr', 'pl', 'ru', 'ar', 'zh'],
  defaultLocale: 'de'
});
 
export const {Link, redirect, usePathname, useRouter, getPathname} =
  createNavigation(routing);
