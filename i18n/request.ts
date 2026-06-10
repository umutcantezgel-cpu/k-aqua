import {getRequestConfig} from 'next-intl/server';
import {routing} from './routing';

const namespaces = [
  'About', 'Career', 'Contact', 'Global', 'Home', 
  'News', 'Products', 'References', 'Service', 'Solutions'
];

export default getRequestConfig(async ({requestLocale}) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  let messages = {};
  
  for (const ns of namespaces) {
    try {
      const fileMessages = (await import(`../messages/${locale}/${ns}.json`)).default;
      messages = { ...messages, [ns]: fileMessages };
    } catch (e) {
      // Ignore if a specific namespace doesn't exist yet for some reason
    }
  }

  return {
    locale,
    messages
  };
});
