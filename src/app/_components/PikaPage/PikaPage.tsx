import { Dispatch, SetStateAction, useEffect, useState } from "react";
import styles from "./PikaPage.module.css";
import { AnimatePresence, motion } from "motion/react";

export default function PikaPage({
  pikaPage,
  setPikaPage,
}: {
  pikaPage: boolean;
  setPikaPage: Dispatch<SetStateAction<boolean>>;
}) {
  const [width, setWidth] = useState<number | undefined>();
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    const body: HTMLBodyElement =
      window.document.getElementsByTagName("body")[0];
    if (pikaPage) {
      body.style.overflow = "hidden";
    } else {
      body.style.removeProperty("overflow");
    }
  }, [pikaPage]);
  return (
    <>
      <AnimatePresence>
        {pikaPage && (
          <motion.div
            initial={
              width && width > 768 ? { x: 3000, y: 0 } : { x: 0, y: 3000 }
            }
            animate={{
              x: 0,
              y: 0,
              transition: { duration: 0.5, ease: "easeInOut" },
            }}
            exit={
              width && width > 768
                ? { x: 3000, transition: { duration: 0.5, ease: "easeOut" } }
                : {
                    y: 3000,
                    transition: { duration: 0.5, ease: "easeOut" },
                  }
            }
            className={styles.pikaPageContainer}
          >
            <div
              className={styles.background}
              onClick={() => {
                setPikaPage(false);
              }}
              onTouchStart={() => {
                setPikaPage(false);
              }}
              onTouchEnd={() => {
                setPikaPage(false);
              }}
              onScroll={() => {
                setPikaPage(false);
              }}
            ></div>
            <div className={styles.pikaPage}>
              <div className={styles.closeButton}>
                <span
                  onClick={() => {
                    setPikaPage(false);
                  }}
                >
                  CLOSE
                </span>
              </div>
              <div className={styles.left}>
                <div className={styles.main}>
                  <div className={styles.mainTop}>
                    <span>PIKA</span>
                    <div>
                      <a
                        href="https://pikapikapikapikapikapika.vercel.app"
                        target="_blank"
                      >
                        https://pikapikapikapikapikapika.vercel.app
                      </a>
                    </div>
                  </div>
                  <div className={styles.mainCenter}>
                    <p>
                      피카는 다양한 온라인 쇼핑몰을 이용하며 떠올린 아이디어를
                      직접 구현한 액세서리 쇼핑 사이트입니다. 기존의 쇼핑몰들이
                      다소 단조롭고 일방적인 구조를 가지고 있다고 느껴, 사용자가
                      직접 반지, 귀걸이, 목걸이를 착용해볼 수 있는{" "}
                      <strong>인터랙티브한 경험</strong>을 제공하고자
                      기획했습니다. 실제 운영 사이트는 아니지만, 새로운 쇼핑몰
                      디자인 방향을 제시하기 위해 제작한 콘셉트형
                      프로젝트입니다. 사용자는 웹상에서 손, 귀, 목 등에
                      액세서리를 착용시켜보며 디자인을 직관적으로 확인할 수
                      있고, 이러한 <strong>참여형 인터랙션</strong>을 통해
                      브랜드의 감도와 몰입도를 강화할 수 있도록 구성했습니다.
                    </p>
                  </div>
                  <div className={styles.mainTop2}>
                    <span>기간 : 2025.09 ~ 2025.10</span>
                    <span>
                      기술 : TypeScript, Next.js, Framer Motion, Gsap, Tailwind,
                      Vercel
                    </span>
                    <span>기여도 : 100%</span>
                  </div>
                  <div className={styles.mainCenter2}>
                    <p>· 모든 제품들이 드래그로 움직일 수 있도록 구현</p>
                    <p>
                      · 인터랙티브한 디자인요소를 위해 Framer Motion과 Gsap를
                      사용
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.right}>
                <div className={styles.video}>
                  <video
                    src="https://res.cloudinary.com/hoyahoya/video/upload/v1760072218/portfolio/%E1%84%91%E1%85%B5%E1%84%8F%E1%85%A11_awhc8v.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                </div>
                <div className={styles.img}>
                  <img src="https://res.cloudinary.com/hoyahoya/image/upload/v1760072641/portfolio/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2025-10-10_14.02.50_urfzz0.png" />
                </div>
                <div className={styles.img}>
                  <img src="https://res.cloudinary.com/hoyahoya/image/upload/v1760072628/portfolio/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2025-10-10_14.02.59_niwmeu.png" />
                </div>
                <div className={styles.img}>
                  <img src="https://res.cloudinary.com/hoyahoya/image/upload/v1760072620/portfolio/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2025-10-10_14.03.20_w4nla3.png" />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
