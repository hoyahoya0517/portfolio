import { Dispatch, SetStateAction, useEffect, useState } from "react";
import styles from "./StarSprayPage.module.css";
import { AnimatePresence, motion } from "motion/react";

export default function StarSprayPage({
  starSprayPage,
  setStarSprayPage,
}: {
  starSprayPage: boolean;
  setStarSprayPage: Dispatch<SetStateAction<boolean>>;
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
    if (starSprayPage) {
      body.style.overflow = "hidden";
    } else {
      body.style.removeProperty("overflow");
    }
  }, [starSprayPage]);
  return (
    <>
      <AnimatePresence>
        {starSprayPage && (
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
            className={styles.starSprayPageContainer}
          >
            <div
              className={styles.background}
              onClick={() => {
                setStarSprayPage(false);
              }}
            ></div>
            <div className={styles.starSprayPage}>
              <div className={styles.closeButton}>
                <span
                  onClick={() => {
                    setStarSprayPage(false);
                  }}
                >
                  CLOSE
                </span>
              </div>
              <div className={styles.left}>
                <div className={styles.main}>
                  <div className={styles.mainTop}>
                    <span>STAR SPRAY</span>
                    <div>
                      <a href="https://www.star-spray.com" target="_blank">
                        https://www.star-spray.com
                      </a>
                    </div>
                  </div>
                  <div className={styles.mainCenter}>
                    <p>
                      스타스프레이는 지금까지 배운 모든 기술을 활용해 처음부터
                      끝까지 <strong>혼자 작업하여</strong> 완성한
                      프로젝트입니다. 단순히 웹사이트를 제작하는 것을 넘어,
                      <strong> 실제 운영이 가능한 사이트</strong>를 만들고자
                      하는 목표로 시작했습니다. 평소에도 소품샵이나 개인
                      브랜드를 운영해보고 싶다는 생각이 있어 직접 사이트를
                      제작하게 되었으며, 일본 문화에 대한 관심을 바탕으로 일본
                      소품을 중심으로 구성했습니다. 또한 그 분위기에 어울리는
                      감각적이고 독특한 디자인을 구현하기 위해 여러 번의 시도와
                      고민을 거듭했습니다. 사이트를 완성한 후에는 일본 현지
                      온라인 사이트에서 직접 상품을 소싱해{" "}
                      <strong>실제 판매</strong>
                      까지 이어지는 과정을 경험했습니다.
                    </p>
                  </div>
                  <div className={styles.mainTop2}>
                    <span>기간 : 2024.06 ~</span>
                    <span>
                      기술 : TypeScript, Next.js, React Query, Zustand, Framer
                      Motion, Auth.js, Express.js, MongoDB, Aws, Vercel,
                      Cloudtype
                    </span>
                    <span>기여도 : 100%</span>
                  </div>
                  <div className={styles.mainCenter2}>
                    <p>
                      · 소품샵의 기본기능인 결제, 로그인, 장바구니등 모든 기능
                      구현
                    </p>
                    <p>
                      · 프론트엔드는 Next.js 백엔드는 Express.js를 사용하여 개발
                    </p>
                    <p>· 데이터를 관리하기 위해 React Query와 Zustand를 사용</p>
                    <p>
                      · 로그인기능을 구현하기 위해 Next.js에서 널리 사용되는
                      Auth.js를 사용
                    </p>
                    <p>
                      · 최초 배포는 Aws에 진행하였으나 1인 프로젝트 규모에 맞는
                      효율성을 고려해 프론트엔드는 Vercel, 백엔드는 Cloudtype에
                      배포
                    </p>
                    <p>· 결제기능은 PortOne의 NICEPAY를 사용</p>
                  </div>
                </div>
              </div>
              <div className={styles.right}>
                <div className={styles.video}>
                  <video
                    src="https://res.cloudinary.com/hoyahoya/video/upload/v1760072497/portfolio/%E1%84%89%E1%85%B3%E1%84%90%E1%85%A1%E1%84%89%E1%85%B3%E1%84%91%E1%85%B3%E1%84%85%E1%85%A6%E1%84%8B%E1%85%B51_gxyl9z.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                </div>
                <div className={styles.img}>
                  <img src="https://res.cloudinary.com/hoyahoya/image/upload/v1760086233/portfolio/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2025-10-10_17.48.58_zylual.png" />
                </div>
                <div className={styles.img}>
                  <img src="https://res.cloudinary.com/hoyahoya/image/upload/v1760086233/portfolio/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2025-10-10_17.49.06_dl3ijz.png" />
                </div>
                <div className={styles.img}>
                  <img src="https://res.cloudinary.com/hoyahoya/image/upload/v1760086233/portfolio/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2025-10-10_17.49.19_lf8bb3.png" />
                </div>
                <div className={styles.img}>
                  <img src="https://res.cloudinary.com/hoyahoya/image/upload/v1760086233/portfolio/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2025-10-10_17.49.45_viwqei.png" />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
