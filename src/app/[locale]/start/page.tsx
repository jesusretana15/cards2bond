"use client";
import {Link, usePathname} from '@/i18n/routing';
import Card from "./card";
import styles from "./page.module.css"
import { div, h1 } from "framer-motion/client";
import { DotGothic16, Nunito } from 'next/font/google';
import { motion } from "framer-motion";
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import { redirect } from 'next/navigation'

const dotfont = DotGothic16({ subsets: ['latin'],
  weight: '400'})

const nunito = Nunito({ weight: ['400', '700'], subsets: ['latin'] })


export default function Start() {
  const t = useTranslations("game");
  const [level, setLevel] = useState(() => sessionStorage.getItem('level') || "test");
  let currentLevel = parseInt(level);
  const category = sessionStorage.getItem('category') || "test";

  (category === "test" || level === "test") ? redirect(  `/`) : ""

  const generateQuestions = (category: string, level: string) => [
    `q1${category}${level}`, `q2${category}${level}`, `q3${category}${level}`,
    `q4${category}${level}`, `q5${category}${level}`, `q6${category}${level}`,
    `q7${category}${level}`, `q8${category}${level}`, `q9${category}${level}`,
    `q10${category}${level}`
  ];

  const [questions, setQuestions] = useState(() => generateQuestions(category, level));
  const [completed, setCompleted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
  const [selectedIndices, setSelectedIndices] = useState([0]);

  function handleClick() {    
    let randomNumber = 0;
    do {
      randomNumber = Math.floor(Math.random() * questions.length);
    } while (selectedIndices.includes(randomNumber));
    
    setSelectedIndices([...selectedIndices, randomNumber]);
    setCurrentQuestion(questions[randomNumber]);
  }

  function handleNextLevel() {

    let nextLevel = (currentLevel + 1).toString();
    sessionStorage.setItem('level', nextLevel);
   
  }

  

  return (
    <div className={styles.divGame}>
      <Link href="/level">
        <button className={`${styles.button54Start} ${styles.buttonTopLeft} ${nunito.className}`} role="button">⇐</button>
      </Link>
      <Card question={t(`${currentQuestion}`)} category={category} level={level}></Card>
    
      <div className={styles.divButtons}>
        <Link href="/"> <button className={`${styles.button54} ${nunito.className}`}>{t('home')}</button></Link>    
        {selectedIndices.length === questions.length ?  <Link href="/loading">
          <button onClick={handleNextLevel} className={`${styles.button54} ${nunito.className}`}>{t('nextLevel')}</button>
        </Link>
        : 
        (
          <button onClick={handleClick} className={`${styles.button54} ${nunito.className}`}>{t('next')}</button>
        )}
      </div>
    </div>
  );
}