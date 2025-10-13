"use client";

import styles from "./Second.module.css";

export default function Second() {
  return (
    <div className={`${styles.second} `}>
      <div className={styles.info}>
        <div className={styles.iam}>
          <span>{`저는`}</span>
          <div className={styles.pinContainer}>
            <div className={`${styles.pinWrapper} pinWrapper2`}>
              <div className={styles.pinText}>
                <span>개발자</span>
              </div>
              <div className={styles.pinText}>
                <span>디자이너</span>
              </div>
              <div className={styles.pinText}>
                <span>브랜드매니저</span>
              </div>
              <div className={styles.pinText}>
                <span style={{ color: "#d464ad" }}>이건호</span>
              </div>
            </div>
          </div>
          <span>입니다.</span>
        </div>
      </div>
    </div>
  );
}
