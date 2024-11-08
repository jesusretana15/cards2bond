import {NextIntlClientProvider} from 'next-intl';
import {getLocale, getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import './globals.css';
import { ReactNode } from 'react';
import { Analytics } from "@vercel/analytics/react"

type Props = {
  children: ReactNode;
};


export default async function LocaleLayout({children}: Props) {
  const locale = await getLocale();
  // Providing all messages to the client
  // side is the easiest way to get started
    // Ensure that the incoming `locale` is valid
    if (!routing.locales.includes(locale as any)) {
      notFound();
    }
    
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <title>cards2bond</title>
      </head>
      <body
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
        <Analytics/>
      </body>
    </html>
  );
}