"use client";

import { useRef, useState } from "react";
import styles from "./Ninth.module.css";
import { motion } from "framer-motion";

export default function Ninth() {
  const flagRef = useRef<HTMLDivElement>(null);
  const [isEnglish, setIsEnglish] = useState(false);
  const [isJapan, setIsJapan] = useState(false);

  return (
    <div className={styles.ninth}>
      <div className={styles.main}>
        <div className={styles.project}>
          <div className={styles.projectTop}>
            <p className={styles.projectTitle}>어학 자격증</p>
            <p className={styles.webProject}>Language</p>
          </div>
        </div>
        <div className={styles.flag} ref={flagRef}>
          <div className={styles.flagMain}>
            <div className={styles.english}>
              <div className={styles.certificate}>
                <motion.span
                  onClick={() => {
                    flagRef.current?.scrollIntoView({
                      behavior: "smooth",
                    });
                    setIsEnglish(true);
                  }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  whileHover={{
                    scale: 1.2,
                    transition: { duration: 0.3, ease: "easeOut" },
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  viewport={{ amount: 0.3 }}
                  style={{ color: "#708DFA" }}
                >
                  OPIc
                </motion.span>
                {isEnglish && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className={styles.englishBoxMain}
                  >
                    <div className={styles.boxTop}>
                      <p className={styles.date}>2024.07.07</p>
                      <p className={styles.title}>JLPT N2</p>
                      <p>일상 대화 가능</p>
                      <p>비지니스 대화 가능</p>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
            <div className={styles.japan}>
              <div className={styles.certificate}>
                <motion.span
                  onClick={() => {
                    flagRef.current?.scrollIntoView({
                      behavior: "smooth",
                    });
                    setIsJapan(true);
                  }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  whileHover={{
                    scale: 1.2,
                    transition: { duration: 0.3, ease: "easeOut" },
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  viewport={{ amount: 0.3 }}
                  style={{ color: "#D464AE" }}
                >
                  JLPT
                </motion.span>
                {isJapan && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className={styles.japanBoxMain}
                  >
                    <div className={styles.boxTop}>
                      <p className={styles.date}>2024.07.07</p>
                      <p className={styles.title}>JLPT N2</p>
                      <p>일상 대화 가능</p>
                      <p>비지니스 대화 가능</p>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
