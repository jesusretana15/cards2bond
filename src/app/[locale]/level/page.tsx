"use client";
import styles from "./page.module.css"
import {useTranslations} from 'next-intl';
import { DotGothic16, Nunito } from 'next/font/google';
import { ReactTyped } from 'react-typed';
import {Link} from '@/i18n/routing';
import { motion } from "framer-motion";

const dotfont = DotGothic16({ subsets: ['latin'],
  weight: '400'})

const nunito = Nunito({ weight: ['400', '700'], subsets: ['latin'] })


export default function Categories() {

  const t = useTranslations('LevelPage');
  const category = sessionStorage.getItem('category')

  function handleClick(level: string) {
    sessionStorage.setItem('level', level);
  }



  return (

    <div className={styles.divCategory}>
    <Link href="/category">
      <button className={`${styles.button54Start} ${styles.buttonTopLeft} ${nunito.className}`} role="button">⇐</button>
    </Link>
  
    {/* <button className={`${styles.button54} ${nunito.className}`} onClick={()=> handleClick("1")}>{t(category + "1")}</button> */}
  
    <ReactTyped className={`${styles.h1Tittle} ${dotfont.className}`} strings={[`${t('title')}`]} typeSpeed={100} />
  
    <section  className={styles.categoryButtons}>
      <button className={`${styles.button54} ${nunito.className}`} onClick={()=> handleClick("1")}>{t(category + "1")}</button>
      <button className={`${styles.button54} ${nunito.className}`} onClick={()=> handleClick("2")} >{t(category + "2")}</button>
      <button className={`${styles.button54} ${nunito.className}`} onClick={()=> handleClick("3")}>{t(category + "3")}</button>
    </section>

    <motion.div animate={["initial"]}
    variants={{
      grow: {
        scale: 1.1
      },
      initial: {
        y: [-2, 2],
        rotate: 0,
        transition: {
          duration: 1,
          repeat: Infinity,
          // repeatDelay: 0.2,
          repeatType: "reverse"
        }
      }
    }

    }
     >
   <Link href="/start">
    <button className={`${styles.button54next} ${nunito.className}`}>{t('start')}</button>
    </Link>
    </motion.div>

   

  </div>
  )
}
