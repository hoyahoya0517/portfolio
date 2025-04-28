"use client";

import { useState } from "react";
import styles from "./Second.module.css";
import { motion } from "motion/react";

export default function Second() {
  const [isTouch, setIsTouch] = useState(false);
  return (
    <div className={styles.second}>
      <div className={styles.hello}>
        <div>
          <span>HELLO</span>
          <span>HELLO</span>
          <span>HELLO</span>
          <span>HELLO</span>
          <span>HELLO</span>
          <span>HELLO</span>
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.image}>
          <motion.div
            onTouchStart={() => setIsTouch(true)}
            onTouchEnd={() => setIsTouch(false)}
            initial={{ scale: 1 }}
            animate={{ scale: isTouch ? 1.2 : 1 }}
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className={styles.imageMain}
          >
            <img src="https://res.cloudinary.com/hoyahoya/image/upload/v1698725818/hy/jsllzjuuuu6amda2e9jn.png" />
          </motion.div>
        </div>
        <div className={styles.detail}>
          <div className={styles.detailMain}>
            <div className={styles.detailTop}>
              <p>
                Name : <strong>이건호</strong>
              </p>
              <p>Birth : 1999.05.17</p>
              <p>Email : hoyahoya0517@naver.com</p>
              <p>Email : hoyahoya0517@naver.com</p>
            </div>
            <div className={styles.detailCenter}>
              <div className={styles.detailCenterLine}></div>
            </div>
            <div className={styles.detailBottom}>
              <p>
                저는 기술과 미적 감각을 바탕으로,{" "}
                <strong>사용자에게 새로운 경험</strong>을 제안하는 데 관심이
                많습니다. 웹사이트 제작과 디자인 작업을 넘어,{" "}
                <strong>패션</strong>이라는 문화적 코드를 디지털 안에서 풀어내는
                일에 흥미를 느끼고 있습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
