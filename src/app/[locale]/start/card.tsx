import { ReactTyped } from "react-typed"
import styles from "./page.module.css"
import { useTranslations } from "next-intl"
import { DotGothic16, Nunito } from 'next/font/google';



const dotfont = DotGothic16({ subsets: ['latin'],
  weight: '400'})

const nunito = Nunito({ weight: ['400', '700'], subsets: ['latin'] })

export default function Card(props: { category: string; question: string; level: string | number }){
    const t = useTranslations("CategoryPage")


    
    return(
        <div className={styles.card}>
            <span className={`${styles.categoryHeader} ${dotfont.className}`} >{t(`${props.category}`)}</span>
            <div className={styles.cardBody}>
                <ReactTyped className={`${styles.question} ${nunito.className} ` } strings={[`${props.question}`]} typeSpeed={20} />
            </div>
            <span className={`${styles.levelHeader} ${dotfont.className} ` }>{t(`level`)} {props.level}</span>
      </div>
    )
}