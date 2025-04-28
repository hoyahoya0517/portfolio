"use client";

import { useEffect, useState } from "react";
import styles from "./Third.module.css";
import { motion } from "motion/react";

export default function Third() {
  const [width, setWidth] = useState<number>(0);
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  });
  // const ref = useRef(null);
  // const isInView = useInView(ref);
  // useEffect(() => {
  //   console.log("Element is in view: ", isInView);
  // }, [isInView]);
  return (
    <div className={styles.third}>
      <div className={styles.main}>
        {/* ------------------------------------------- */}
        <div className={styles.thrid1}>
          <div className={styles.left}></div>
          <div className={styles.center}>
            <div className={styles.line}>
              {/* <motion.div
                initial={{ transform: "translate(-50%, -50%) scale(0)" }}
                whileInView={{ transform: "translate(-50%, -50%) scale(1)" }}
                transition={{ duration: 0.5 }}
                viewport={{ amount: "some" }}
                className={styles.circle}
              ></motion.div> */}
            </div>
          </div>
          <div className={styles.right}>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeIn" }}
              viewport={{ amount: "some" }}
              className={styles.info}
            >
              <p className={styles.year}>2015 - 2017</p>
              <p>보성고등학교 졸업</p>
            </motion.div>
          </div>
        </div>
        {/* ------------------------------------------- */}
        <div className={styles.thrid1}>
          <div className={styles.left}></div>
          <div className={styles.center}>
            <div className={styles.line}>
              {/* <motion.div
                initial={{ transform: "translate(-50%, -50%) scale(0)" }}
                whileInView={{ transform: "translate(-50%, -50%) scale(1)" }}
                transition={{ duration: 0.5 }}
                viewport={{ amount: "some" }}
                className={styles.circle}
              ></motion.div> */}
            </div>
          </div>
          <div className={styles.right}>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeIn" }}
              viewport={{ amount: "some" }}
              className={styles.info}
            >
              <p className={styles.year}>2018 - 2024</p>
              <p>순천향대학교</p>
              <p>정보보호학과 졸업</p>
            </motion.div>
          </div>
        </div>
        {/* ------------------------------------------- */}
        <div className={styles.thrid1}>
          <div className={styles.left}>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeIn" }}
              viewport={{ amount: "some" }}
              className={styles.info}
            >
              <p className={styles.year}>2023.01 - 2023.06</p>
              <p>원더플레이스</p>
              <p>STAFF</p>
            </motion.div>
          </div>
          <div className={styles.center}>
            <div className={styles.line}>
              {/* <motion.div
                initial={{ transform: "translate(-50%, -50%) scale(0)" }}
                whileInView={{ transform: "translate(-50%, -50%) scale(1)" }}
                transition={{ duration: 0.5 }}
                viewport={{ amount: "some" }}
                className={styles.circle}
              ></motion.div> */}
            </div>
          </div>
          <div className={styles.right}>
            {width < 769 && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeIn" }}
                viewport={{ amount: "some" }}
                className={styles.info}
              >
                <p className={styles.year}>2023.01 - 2023.06</p>
                <p>원더플레이스</p>
                <p>STAFF</p>
              </motion.div>
            )}
          </div>
        </div>
        {/* ------------------------------------------- */}
        <div className={styles.thrid1}>
          <div className={styles.left}></div>
          <div className={styles.center}>
            <div className={styles.line}>
              {/* <motion.div
                initial={{ transform: "translate(-50%, -50%) scale(0)" }}
                whileInView={{ transform: "translate(-50%, -50%) scale(1)" }}
                transition={{ duration: 0.5 }}
                viewport={{ amount: "some" }}
                className={styles.circle}
              ></motion.div> */}
            </div>
          </div>
          <div className={styles.right}>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeIn" }}
              viewport={{ amount: "some" }}
              className={styles.info}
            >
              <p className={styles.year}>2023.07 - 2024.12</p>
              <p>유니클로</p>
              <p>니트 부문 담당자</p>
            </motion.div>
          </div>
        </div>
        {/* ------------------------------------------- */}
        <div className={styles.thrid1}>
          <div className={styles.left}></div>
          <div className={styles.center}>
            <div className={styles.line}>
              {/* <motion.div
                initial={{ transform: "translate(-50%, -50%) scale(0)" }}
                whileInView={{ transform: "translate(-50%, -50%) scale(1)" }}
                transition={{ duration: 0.5 }}
                viewport={{ amount: "some" }}
                className={styles.circle}
              ></motion.div> */}
            </div>
          </div>
          <div className={styles.right}>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeIn" }}
              viewport={{ amount: "some" }}
              className={styles.info}
            >
              <p className={styles.year}>2024.06</p>
              <p>스타스프레이</p>
              <p>소품샵 개발 및 운영</p>
            </motion.div>
          </div>
        </div>
        {/* ------------------------------------------- */}
        <div className={styles.thrid1}>
          <div className={styles.left}>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeIn" }}
              viewport={{ amount: "some" }}
              className={styles.info}
            >
              <p className={styles.year}>2025.01</p>
              <p>COS</p>
              <p>세일즈 어드바이저</p>
            </motion.div>
          </div>
          <div className={styles.center}>
            <div className={styles.line}>
              {/* <motion.div
                initial={{ transform: "translate(-50%, -50%) scale(0)" }}
                whileInView={{ transform: "translate(-50%, -50%) scale(1)" }}
                transition={{ duration: 0.5 }}
                viewport={{ amount: "some" }}
                className={styles.circle}
              ></motion.div> */}
            </div>
          </div>
          <div className={styles.right}>
            {width < 769 && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeIn" }}
                viewport={{ amount: "some" }}
                className={styles.info}
              >
                <p className={styles.year}>2025.01</p>
                <p>COS</p>
                <p>세일즈 어드바이저</p>
              </motion.div>
            )}
          </div>
        </div>
        {/* ------------------------------------------- */}
      </div>
    </div>
  );
}
