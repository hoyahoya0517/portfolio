"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./SelectCard.module.css";
import { motion, useAnimate } from "motion/react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import StarSpray from "../StarSpray/StarSpray";
import LeeHyun from "../LeeHyun/LeeHyun";
import Career from "../Career/Career";
import Gtq from "../Gtq/Gtq";
import Jlpt from "../Jlpt/Jlpt";

export default function SelectCard() {
  const flagRef = useRef<HTMLDivElement>(null);
  const [scope, animate] = useAnimate();
  const [deg, setDeg] = useState(0);
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: ".selectCardWrapper",
        start: "top top",
        end: `+=100%`,
        markers: true,
        pin: true,
        scrub: 2,
      },
    });
  });
  useEffect(() => {}, [deg]);
  return (
    <div className={`${styles.selectCard} selectCardWrapper`} ref={flagRef}>
      <div className={styles.background}>
        {deg === 0 && <StarSpray />}
        {deg === 45 && <LeeHyun />}
        {deg === 90 && <Career />}
        {deg === 135 && <Gtq />}
        {deg === 180 && <Jlpt />}
      </div>
      <motion.div
        ref={scope}
        initial={{
          transform: "translate(-50%, -50%) rotate(0deg)",
        }}
        className={styles.circle}
      >
        <div className={styles.circleMain}>
          <div
            className={styles.starSpray}
            onClick={() => {
              flagRef.current?.scrollIntoView({
                behavior: "smooth",
              });
              animate(
                scope.current,
                {
                  transform: `translate(-50%, -50%) rotate(0deg)`,
                },
                { duration: 0.5, ease: "easeInOut" }
              );
              setDeg(0);
            }}
          >
            <span>STAR SPRAY</span>
            <motion.span
              initial={{ color: "#424245" }}
              animate={deg === 0 ? { color: "#d464ad" } : { color: "#424245" }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
              className={styles.detail}
            >
              Brand Project
            </motion.span>
          </div>
          <div
            className={styles.leeHyun}
            onClick={() => {
              flagRef.current?.scrollIntoView({
                behavior: "smooth",
              });
              animate(
                scope.current,
                {
                  transform: `translate(-50%, -50%) rotate(-45deg)`,
                },
                { duration: 0.5, ease: "easeInOut" }
              );
              setDeg(45);
            }}
          >
            <div>
              <span>LEEHYUN</span>
              <span>SYSTEM</span>
            </div>
            <motion.span
              initial={{ color: "#424245" }}
              animate={deg === 45 ? { color: "#d464ad" } : { color: "#424245" }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
              className={styles.detail}
            >
              Web Project
            </motion.span>
          </div>
          <div
            className={styles.career}
            onClick={() => {
              flagRef.current?.scrollIntoView({
                behavior: "smooth",
              });
              animate(
                scope.current,
                {
                  transform: `translate(-50%, -50%) rotate(-90deg)`,
                },
                { duration: 0.5, ease: "easeInOut" }
              );
              setDeg(90);
            }}
          >
            <div className={styles.careerMain}>
              <div className={styles.uniqlo}>
                <span>UNIQLO</span>
              </div>
              <div className={styles.cos}>
                <span>COS</span>
              </div>
            </div>
            <motion.span
              initial={{ color: "#424245" }}
              animate={deg === 90 ? { color: "#d464ad" } : { color: "#424245" }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
              className={styles.detail}
            >
              Career
            </motion.span>
          </div>
          <div
            className={styles.gtq}
            onClick={() => {
              flagRef.current?.scrollIntoView({
                behavior: "smooth",
              });
              animate(
                scope.current,
                {
                  transform: `translate(-50%, -50%) rotate(-135deg)`,
                },
                { duration: 0.5, ease: "easeInOut" }
              );
              setDeg(135);
            }}
          >
            <span>GTQ</span>
            <motion.span
              initial={{ color: "#424245" }}
              animate={
                deg === 135 ? { color: "#d464ad" } : { color: "#424245" }
              }
              transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
              className={styles.detail}
            >
              Certificate
            </motion.span>
          </div>
          <div
            className={styles.language}
            onClick={() => {
              flagRef.current?.scrollIntoView({
                behavior: "smooth",
              });
              animate(
                scope.current,
                {
                  transform: `translate(-50%, -50%) rotate(-180deg)`,
                },
                { duration: 0.5, ease: "easeInOut" }
              );
              setDeg(180);
            }}
          >
            <span>JLPT</span>
            <motion.span
              initial={{ color: "#424245" }}
              animate={
                deg === 180 ? { color: "#d464ad" } : { color: "#424245" }
              }
              transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
              className={styles.detail}
            >
              Language
            </motion.span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
