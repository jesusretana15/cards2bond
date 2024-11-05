"use client";
import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/routing';
import styles from "./page.module.css"
import { DotGothic16, Nunito } from 'next/font/google';
import { ReactTyped } from 'react-typed';
import { motion } from "framer-motion";

const dotfont = DotGothic16({ subsets: ['latin'],
  weight: '400'})

const nunito = Nunito({ weight: ['400', '700'], subsets: ['latin'] })

export default function HomePage() {
  const t = useTranslations('HomePage');
  sessionStorage.setItem('level', '1');
  sessionStorage.setItem('category', 'strangers');
  
  return (
 
    <div className={styles.divhome}>
    <ReactTyped className={`${styles.h1Tittle} ${dotfont.className}`} strings={["cards 2 bond..."]} typeSpeed={100} />
    <h2 className={`${styles.h2Header} ${dotfont.className}`}>{t('slogan')}</h2>
    <p className={`${styles.pDescription} ${nunito.className}`}> {t('description')} </p>
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
<Link href="/category">
    <button className={`${styles.button54Start}  ${nunito.className} ` }  role="button">{t('title')}</button>
    </Link>
    </motion.div>
    
    <div className={styles.divBtns}>
    <Link href="es"><button className={`${styles.button54} ${nunito.className}`}>español</button></Link>   
    <Link href="en"><button className={`${styles.button54} ${nunito.className}`}>english</button></Link>   
    </div>

    </div>
 

 
  );
}

