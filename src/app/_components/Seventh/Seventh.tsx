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
            <p className={styles.projectInfo}>
              근무기간 : 2024.03 ~ 2024.03 (2년 1개월)
            </p>
          </div>
        </div>
        <div className={styles.career}>
          <div className={styles.careerInfo}>
            <p>어쩌구 담당</p>
            <p>
              어쩌구 어쩌구 어쩌구 어쩌구 어쩌구 어쩌구 어쩌구어쩌구 어쩌구
              어쩌구 어쩌구 어쩌구 어쩌구 어쩌구 어쩌구 어쩌구 어쩌구 어쩌구
              어쩌구 어쩌구
            </p>
          </div>
          <div className={styles.careerInfo}>
            <p>어쩌구 담당</p>
            <p>
              어쩌구 어쩌구 어쩌구 어쩌구 어쩌구 어쩌구 어쩌구어쩌구 어쩌구
              어쩌구 어쩌구 어쩌구 어쩌구 어쩌구 어쩌구 어쩌구 어쩌구 어쩌구
              어쩌구 어쩌구
            </p>
          </div>
          <div className={styles.careerInfo}>
            <p>어쩌구 담당</p>
            <p>
              어쩌구 어쩌구 어쩌구 어쩌구 어쩌구 어쩌구 어쩌구어쩌구 어쩌구
              어쩌구 어쩌구 어쩌구 어쩌구 어쩌구 어쩌구 어쩌구 어쩌구 어쩌구
              어쩌구 어쩌구
            </p>
          </div>
          <div className={styles.careerInfo}>
            <p>어쩌구 담당</p>
            <p>
              어쩌구 어쩌구 어쩌구 어쩌구 어쩌구 어쩌구 어쩌구어쩌구 어쩌구
              어쩌구 어쩌구 어쩌구 어쩌구 어쩌구 어쩌구 어쩌구 어쩌구 어쩌구
              어쩌구 어쩌구
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
