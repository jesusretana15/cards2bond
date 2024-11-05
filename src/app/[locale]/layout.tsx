import {NextIntlClientProvider} from 'next-intl';
import {getMessages, setRequestLocale} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import { ReactNode } from 'react';
import { useLocale } from 'next-intl';
import "./globals.css"; 

export default async function LocaleLayout({
  children
}: {
  children: ReactNode;
  params: {locale: string};
}) {
  const locale = useLocale();
  // Ensure that the incoming `locale` is valid
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