"use client";

import styles from "./Seventh.module.css";
import { motion } from "motion/react";

export default function Seventh() {
  return (
    <div className={styles.seventh}>
      <div className={styles.main}>
        <div className={styles.title}>
          <div className={styles.projectTop}>
            <p className={styles.projectTitle}>Career</p>
            <motion.p
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ amount: "some" }}
              className={styles.webProject}
            >
              Star Spray
            </motion.p>
            <p className={styles.projectInfo}>근무기간 : 2024.06</p>
            <p className={styles.link}>
              <strong
                onClick={() => {
                  window.open("https://www.star-spray.com/");
                }}
              >
                #Link
              </strong>
            </p>
          </div>
        </div>
        <div className={styles.career}>
          <div className={styles.careerInfo}>
            <p>스타스프레이 제작</p>
            <p>
              스타스프레이 소품샵을 직접 기획하고 제작했습니다. 프론트엔드,
              백엔드 개발은 물론, 사이트 디자인과 UI/UX 설계까지 전 과정을 혼자
              담당했습니다. 특히 평범한 온라인샵과 차별화된 감각적인 디자인을
              위해 많은 고민을 거듭했으며, 초록색 배경과 별 패턴을 활용해
              독창적이고 신선한 분위기를 연출했습니다.
            </p>
          </div>
          <div className={styles.careerInfo}>
            <p>스타스프레이 운영</p>
            <p>
              스타스프레이 소품샵을 직접 운영하며, 상품 발주, 사이트 등록, 판매
              및 재고 관리를 경험했습니다. 특히 일본 문화에 대한 관심을 바탕으로
              일본 온라인 쇼핑몰에서 직접 상품을 소싱·발주하며, 온라인샵 운영의
              기본 흐름과 고객 응대 과정을 실질적으로 이해할 수 있었습니다.
            </p>
          </div>
          {/* <div className={styles.careerInfoButton}>
            <button
              onClick={() => {
                window.open("https://www.star-spray.com/");
              }}
            >
              <img src="https://res.cloudinary.com/hoyahoya/image/upload/v1745774951/portfolio/enter_rcbvoh.png" />
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}
