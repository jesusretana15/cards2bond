import {NextIntlClientProvider} from 'next-intl';
import {getLocale, getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import './globals.css';
import { ReactNode } from 'react';
import { Analytics } from "@vercel/analytics/react"
import Head from 'next/head';

type Props = {
  children: ReactNode;
};


export default async function LocaleLayout({children}: Props) {
  const locale = await getLocale();
  // Meta descriptions based on language
  const metaDescription =
    locale === 'es'
      ? 'Conecta con amigos, familiares y hasta desconocidos con preguntas diseñadas para iniciar conversaciones auténticas y divertidas. Encuentra el tema perfecto para cada ocasión y fortalece tus relaciones de manera fácil y entretenida.'
      : 'Connect with friends, family, and even strangers with questions designed to spark authentic and fun conversations. Find the perfect topic for any occasion and strengthen your relationships in an easy and entertaining way.';

  // Providing all messages to the client
  // side is the easiest way to get started
    // Ensure that the incoming `locale` is valid
    if (!routing.locales.includes(locale as any)) {
      notFound();
    }
    
  const messages = await getMessages();

  return (
    <html lang={locale}>
        <Head>
        <title>cards2bond</title>
        <meta name="description" content={metaDescription} />
        <link rel="alternate" hrefLang="en" href="https://yourwebsite.com/en" />
        <link rel="alternate" hrefLang="es" href="https://yourwebsite.com/es" />
      </Head>
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