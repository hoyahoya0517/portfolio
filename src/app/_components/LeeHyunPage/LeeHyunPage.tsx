import { Dispatch, SetStateAction, useEffect, useState } from "react";
import styles from "./LeeHyunPage.module.css";
import { AnimatePresence, motion } from "motion/react";

export default function LeeHyunPage({
  leeHyunPage,
  setLeeHyunPage,
}: {
  leeHyunPage: boolean;
  setLeeHyunPage: Dispatch<SetStateAction<boolean>>;
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
    if (leeHyunPage) {
      body.style.overflow = "hidden";
    } else {
      body.style.removeProperty("overflow");
    }
  }, [leeHyunPage]);
  return (
    <>
      <AnimatePresence>
        {leeHyunPage && (
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
            className={styles.leeHyunPageContainer}
          >
            <div
              className={styles.background}
              onClick={() => {
                setLeeHyunPage(false);
              }}
            ></div>
            <div className={styles.leeHyunPage}>
              {width && width <= 768 && (
                <div className={styles.closeButton}>
                  <span
                    onClick={() => {
                      setLeeHyunPage(false);
                    }}
                  >
                    CLOSE
                  </span>
                </div>
              )}
              <div className={styles.left}>
                {width && width > 768 && (
                  <div className={styles.top}>
                    <span
                      onClick={() => {
                        setLeeHyunPage(false);
                      }}
                    >
                      CLOSE
                    </span>
                  </div>
                )}
                <div className={styles.main}>
                  <div className={styles.mainTop}>
                    <span>이현시스템</span>
                    <div>
                      <a href="https://www.leehyunsystem.com" target="_blank">
                        https://www.leehyunsystem.com
                      </a>
                    </div>
                  </div>
                  <div className={styles.mainCenter}>
                    <p>
                      이현시스템은 디스플레이 제품을 판매하는 회사를 소개하기
                      위해 제작한 웹사이트입니다. 회사의 이미지를 효과적으로
                      전달하는 데 초점을 맞추었으며, 정보를 명확하고 깔끔하게
                      보여줄 수 있는 <strong>디자인과 레이아웃</strong>에 중점을
                      두었습니다. 특히 디스플레이 관련 기술력을 강조하기 위해,{" "}
                      <strong>인터랙티브</strong>한 디자인 요소와{" "}
                      <strong>시각적 구성</strong>에 많은 신경을 쏟았습니다.
                      이를 통해 단순한 소개 페이지를 넘어, 회사의 전문성과
                      신뢰감을 함께 전달할 수 있도록 구성했습니다.
                    </p>
                  </div>
                  <div className={styles.mainTop2}>
                    <span>기간 : 2025.07 ~ 2025.08</span>
                    <span>
                      기술 : TypeScript, Next.js, Framer Motion, Gsap, Tailwind,
                      Vercel
                    </span>
                    <span>기여도 : 100%</span>
                  </div>
                  <div className={styles.mainCenter2}>
                    <p>
                      · 안정성과 편리성을 위해 TypeScript와 Next.js를 사용하여
                      개발
                    </p>
                    <p>
                      · 인터랙티브한 디자인요소를 위해 Framer Motion과 Gsap를
                      사용
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.right}>
                <div className={styles.img}>
                  <img src="https://res.cloudinary.com/hoyahoya/image/upload/v1760030912/portfolio/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2025-10-10_02.25.44_rs6o9l.png" />
                </div>
                <div className={styles.img}>
                  <img src="https://res.cloudinary.com/hoyahoya/image/upload/v1760030895/portfolio/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2025-10-10_02.26.04_svtt0s.png" />
                </div>
                <div className={styles.img}>
                  <img src="https://res.cloudinary.com/hoyahoya/image/upload/v1760030894/portfolio/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2025-10-10_02.26.32_bxfmdf.png" />
                </div>
                <div className={styles.video}>
                  <video
                    src="https://res.cloudinary.com/hoyahoya/video/upload/v1760072213/portfolio/%E1%84%8B%E1%85%B5%E1%84%92%E1%85%A7%E1%86%AB1_ddo4hz.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                </div>
                <div className={styles.img}>
                  <img src="https://res.cloudinary.com/hoyahoya/image/upload/v1760030908/portfolio/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2025-10-10_02.26.55_y6hxnz.png" />
                </div>
                <div className={styles.img}>
                  <img src="https://res.cloudinary.com/hoyahoya/image/upload/v1760030894/portfolio/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2025-10-10_02.27.01_ixtywy.png" />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
