import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';
 
export default createMiddleware(routing);
 
export const config = {
  matcher: ['/', '/(de|en|fr|es|it|tr|pl|ru|ar|zh)/:path*']
};
