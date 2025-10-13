import { Dispatch, SetStateAction, useEffect, useState } from "react";
import styles from "./LanguagePage.module.css";
import { AnimatePresence, motion } from "motion/react";

export default function LanguagePage({
  languagePage,
  setLanguagePage,
}: {
  languagePage: boolean;
  setLanguagePage: Dispatch<SetStateAction<boolean>>;
}) {
  const [isJlpt, setIsJlpt] = useState(false);
  const [isOpic, setIsOpic] = useState(false);
  useEffect(() => {
    setIsJlpt(false);
    setIsOpic(false);
    const body: HTMLBodyElement =
      window.document.getElementsByTagName("body")[0];
    if (languagePage) {
      body.style.overflow = "hidden";
    } else {
      body.style.removeProperty("overflow");
    }
  }, [languagePage]);
  return (
    <>
      <AnimatePresence>
        {languagePage && (
          <motion.div
            className={styles.languagePageContainer}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div className={styles.languagePage}>
              <div className={styles.close}>
                <span onClick={() => setLanguagePage(false)}>CLOSE</span>
              </div>
              <div className={styles.left}>
                {isOpic && (
                  <div
                    className={styles.isOpic}
                    onClick={() => setIsOpic(false)}
                  >
                    <div className={styles.isOpicMain}>
                      <h1>OPIC</h1>
                      <span>자격 종목 : OPIC</span>
                      <span>자격 등급 : IH</span>
                      <span>시험 일자 : 2025.09.26</span>
                    </div>
                  </div>
                )}
                <motion.div
                  className={styles.opicLogo}
                  initial={{ y: -500, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
                  onClick={() => setIsOpic(true)}
                >
                  <img src="https://res.cloudinary.com/hoyahoya/image/upload/v1759503930/portfolio/opic_u1voez.png" />
                </motion.div>
              </div>
              <div className={styles.right}>
                {isJlpt && (
                  <div
                    className={styles.isJlpt}
                    onClick={() => setIsJlpt(false)}
                  >
                    <div className={styles.isJlptMain}>
                      <h1>JLPT</h1>
                      <span>자격 종목 : JLPT</span>
                      <span>자격 급수 : N2</span>
                      <span>시험 일자 : 2022.01.13</span>
                    </div>
                  </div>
                )}
                <motion.div
                  className={styles.jlptLogo}
                  initial={{ y: -500, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.75, duration: 0.5, ease: "easeOut" }}
                  onClick={() => setIsJlpt(true)}
                >
                  <img src="https://res.cloudinary.com/hoyahoya/image/upload/v1759503708/portfolio/jlpt_i2ifbv.png" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
