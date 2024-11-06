import {NextIntlClientProvider} from 'next-intl';
import {getMessages, setRequestLocale} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import { useLocale } from 'next-intl';


type Params = Promise<{ locale: string }>

import "./globals.css"; 

export default async function LocaleLayout({
   children
}: {
  children?: React.ReactNode;
  params: Params;
}) {
  
  const locale = useLocale();
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
 
  // Enable static rendering
  setRequestLocale(locale);
  const messages = await getMessages();
 
  return (
    <html lang={locale}>
      <body>
        <title>cards2bond</title>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}