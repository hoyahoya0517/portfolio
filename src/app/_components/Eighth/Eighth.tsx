"use client";

import styles from "./Eighth.module.css";
import { motion } from "motion/react";

export default function Eighth() {
  return (
    <div className={styles.eighth}>
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
              COS
            </motion.p>
            <p className={styles.projectInfo}>근무기간 : 2025.01</p>
          </div>
        </div>
        <div className={styles.career}>
          <div className={styles.careerInfo}>
            <p>COS 청담점 근무</p>
            <p>
              코스 청담점에서 근무하며 매장 분위기와 서비스 품질을 세심하게
              관리해, 고객에게 편안하면서도 세련된 쇼핑 경험을 제공하고 고객
              만족 향상에 기여했습니다.
            </p>
          </div>
          <div className={styles.careerInfo}>
            <p>Ambassador</p>
            <p>
              COS의 고객 경험 평가 시스템에서 본사 직원의 미스터리 쇼핑 평가를
              통해 최고 등급인 Ambassador를 달성했습니다. 고객 응대, 제품 제안,
              매장 경험 제공 등 전 영역에서 우수한 평가를 받아 브랜드가 지향하는
              고객 경험 수준을 성공적으로 구현했습니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
