"use client";
import styles from "./page.module.css";
import { useTranslations } from 'next-intl';
import { DotGothic16, Nunito } from 'next/font/google';
import { ReactTyped } from 'react-typed';
import { useRouter, usePathname } from 'next/navigation'; // Import from 'next/navigation' instead of 'next/router' for App Router
import { useEffect, useState } from "react";
import { redirect } from 'next/navigation'


const dotfont = DotGothic16({ subsets: ['latin'], weight: '400' });
const nunito = Nunito({ weight: ['400', '700'], subsets: ['latin'] });

export default function Categories(this: any) {
  const t = useTranslations('LevelPage');
  const pathname = usePathname();
  const locale = pathname.substring(1,3)
  const [level, setLevel] = useState(() => sessionStorage.getItem('level') || "test");
  let messageDisplay = level === "4" ? "finish"  :  "loading";
  

  setTimeout(() => {
    level === "4" ? redirect(  `/${locale}/`)  : redirect(  `/${locale}/start`);
    
  }, 5000);

  return (
    <div  className={styles.divLoading}>
      <ReactTyped
        className={`${styles.h1Tittle} ${dotfont.className}`}
        strings={[`${t(messageDisplay)}`]}
        typeSpeed={30}
      />
    </div>
  );
}
