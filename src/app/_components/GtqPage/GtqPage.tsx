import { Dispatch, SetStateAction, useEffect, useState } from "react";
import styles from "./GtqPage.module.css";
import { AnimatePresence, motion } from "motion/react";

export default function GtqPage({
  gtqPage,
  setGtqPage,
}: {
  gtqPage: boolean;
  setGtqPage: Dispatch<SetStateAction<boolean>>;
}) {
  const [isGtq, setIsGtq] = useState(false);
  const [isGtqI, setIsGtqI] = useState(false);
  const [isGoogle, setIsGoogle] = useState(false);
  useEffect(() => {
    setIsGtq(false);
    setIsGtqI(false);
    setIsGoogle(false);
    const body: HTMLBodyElement =
      window.document.getElementsByTagName("body")[0];
    if (gtqPage) {
      body.style.overflow = "hidden";
    } else {
      body.style.removeProperty("overflow");
    }
  }, [gtqPage]);
  return (
    <>
      <AnimatePresence>
        {gtqPage && (
          <motion.div
            className={styles.gtqPageContainer}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div className={styles.gtqPage}>
              <div className={styles.close}>
                <span onClick={() => setGtqPage(false)}>CLOSE</span>
              </div>
              <div className={styles.left}>
                {isGtq && (
                  <div className={styles.isGtq} onClick={() => setIsGtq(false)}>
                    <div className={styles.isGtqMain}>
                      <h1>GTQ</h1>
                      <span>자격 종목 : GTQ</span>
                      <span>자격 급수 : 1급</span>
                      <span>시험 일자 : 2025.07.26</span>
                    </div>
                  </div>
                )}
                <motion.div
                  className={styles.gtqLogo}
                  initial={{ y: -500, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
                  onClick={() => setIsGtq(true)}
                >
                  <img src="https://res.cloudinary.com/hoyahoya/image/upload/v1759485301/portfolio/gtqLogo_jtqloh.png" />
                </motion.div>
              </div>
              <div className={styles.center}>
                {isGtqI && (
                  <div
                    className={styles.isGtqI}
                    onClick={() => setIsGtqI(false)}
                  >
                    <div className={styles.isGtqIMain}>
                      <h1>GTQi</h1>
                      <span>자격 종목 : 일러스트</span>
                      <span>자격 급수 : 1급</span>
                      <span>시험 일자 : 2025.07.26</span>
                    </div>
                  </div>
                )}
                <motion.div
                  className={styles.gtqiLogo}
                  initial={{ y: -500, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.75, duration: 0.5, ease: "easeOut" }}
                  onClick={() => setIsGtqI(true)}
                >
                  <img src="https://res.cloudinary.com/hoyahoya/image/upload/v1759484997/portfolio/gtqiLogo_zu3m6x.png" />
                </motion.div>
              </div>
              <div className={styles.right}>
                {isGoogle && (
                  <div
                    className={styles.isGoogle}
                    onClick={() => setIsGoogle(false)}
                  >
                    <div className={styles.isGoogleMain}>
                      <h1>Google</h1>
                      <h1>Analytics</h1>
                      <span>자격 종목 : 구글 애널리틱스</span>
                      <span>시험 일자 : 2025.09.03</span>
                    </div>
                  </div>
                )}
                <motion.div
                  className={styles.googleLogo}
                  initial={{ y: -500, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1, duration: 0.5, ease: "easeOut" }}
                  onClick={() => setIsGoogle(true)}
                >
                  <img src="https://res.cloudinary.com/hoyahoya/image/upload/v1759484997/portfolio/googleLogo_ou6cz5.png" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
