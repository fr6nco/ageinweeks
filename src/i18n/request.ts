import { getRequestConfig } from 'next-intl/server';
import Negotiator from 'negotiator'
import { headers } from 'next/headers'

export default getRequestConfig(async () => {
    const headersList = await headers()
    const acceptLangHeader = headersList.get('accept-language');
    const defaultLocale = 'en';
    const locales = ['en', 'sk'];
    const negotiator = new Negotiator({ headers: { 'accept-language': acceptLangHeader || '' } }).language(locales);
    const locale = negotiator || defaultLocale;

    return {
        locale,
        messages: (await import(`../../messages/${locale}.json`)).default
    };
});