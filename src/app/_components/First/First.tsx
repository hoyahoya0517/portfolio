"use client";

import { useEffect, useState } from "react";
import styles from "./First.module.css";
import { motion } from "motion/react";

export default function Fisrt() {
  const [isMobile, setIsMobile] = useState(false);
  const [isHoverName, setIsHoverName] = useState(false);
  useEffect(() => {
    if (
      navigator.userAgent.match(/Android/i) ||
      navigator.userAgent.match(/webOS/i) ||
      navigator.userAgent.match(/iPhone/i) ||
      navigator.userAgent.match(/iPad/i) ||
      navigator.userAgent.match(/iPod/i) ||
      navigator.userAgent.match(/BlackBerry/i) ||
      navigator.userAgent.match(/Windows Phone/i)
    ) {
      setIsMobile(true);
    }
  });
  return (
    <div className={styles.home}>
      <div className={styles.main}>
        <div className={styles.nameContainer}>
          <motion.div className={styles.name}>
            <motion.span
              onMouseEnter={() => {
                if (isMobile) return;
                setIsHoverName(true);
              }}
              onMouseLeave={() => {
                if (isMobile) return;
                setIsHoverName(false);
              }}
              onTouchStart={() => setIsHoverName(true)}
              onTouchEnd={() => setIsHoverName(false)}
              animate={{
                rotate: isHoverName ? 3 : 0,
                color: isHoverName ? "#f5f5f7" : "#d464ae",
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              L
            </motion.span>
            <motion.span
              onMouseEnter={() => {
                if (isMobile) return;
                setIsHoverName(true);
              }}
              onMouseLeave={() => {
                if (isMobile) return;
                setIsHoverName(false);
              }}
              onTouchStart={() => setIsHoverName(true)}
              onTouchEnd={() => setIsHoverName(false)}
              animate={{
                rotate: isHoverName ? -5 : 0,
                color: isHoverName ? "#f5f5f7" : "#d464ae",
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              E
            </motion.span>
            <motion.span
              onMouseEnter={() => {
                if (isMobile) return;
                setIsHoverName(true);
              }}
              onMouseLeave={() => {
                if (isMobile) return;
                setIsHoverName(false);
              }}
              onTouchStart={() => setIsHoverName(true)}
              onTouchEnd={() => setIsHoverName(false)}
              animate={{
                rotate: isHoverName ? 6 : 0,
                color: isHoverName ? "#f5f5f7" : "#d464ae",
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              E
            </motion.span>
            <motion.span
              onMouseEnter={() => {
                if (isMobile) return;
                setIsHoverName(true);
              }}
              onMouseLeave={() => {
                if (isMobile) return;
                setIsHoverName(false);
              }}
              onTouchStart={() => setIsHoverName(true)}
              onTouchEnd={() => setIsHoverName(false)}
              animate={{
                rotate: isHoverName ? -5 : 0,
                color: isHoverName ? "#f5f5f7" : "#d464ae",
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              G
            </motion.span>
            <motion.span
              onMouseEnter={() => {
                if (isMobile) return;
                setIsHoverName(true);
              }}
              onMouseLeave={() => {
                if (isMobile) return;
                setIsHoverName(false);
              }}
              onTouchStart={() => setIsHoverName(true)}
              onTouchEnd={() => setIsHoverName(false)}
              animate={{
                rotate: isHoverName ? 2.5 : 0,
                color: isHoverName ? "#f5f5f7" : "#d464ae",
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              E
            </motion.span>
            <motion.span
              onMouseEnter={() => {
                if (isMobile) return;
                setIsHoverName(true);
              }}
              onMouseLeave={() => {
                if (isMobile) return;
                setIsHoverName(false);
              }}
              onTouchStart={() => setIsHoverName(true)}
              onTouchEnd={() => setIsHoverName(false)}
              animate={{
                rotate: isHoverName ? -5 : 0,
                color: isHoverName ? "#f5f5f7" : "#d464ae",
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              O
            </motion.span>
            <motion.span
              onMouseEnter={() => {
                if (isMobile) return;
                setIsHoverName(true);
              }}
              onMouseLeave={() => {
                if (isMobile) return;
                setIsHoverName(false);
              }}
              onTouchStart={() => setIsHoverName(true)}
              onTouchEnd={() => setIsHoverName(false)}
              animate={{
                rotate: isHoverName ? 4 : 0,
                color: isHoverName ? "#f5f5f7" : "#d464ae",
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              N
            </motion.span>
            <motion.span
              onMouseEnter={() => {
                if (isMobile) return;
                setIsHoverName(true);
              }}
              onMouseLeave={() => {
                if (isMobile) return;
                setIsHoverName(false);
              }}
              onTouchStart={() => setIsHoverName(true)}
              onTouchEnd={() => setIsHoverName(false)}
              animate={{
                rotate: isHoverName ? -7 : 0,
                color: isHoverName ? "#f5f5f7" : "#d464ae",
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              H
            </motion.span>
            <motion.span
              onMouseEnter={() => {
                if (isMobile) return;
                setIsHoverName(true);
              }}
              onMouseLeave={() => {
                if (isMobile) return;
                setIsHoverName(false);
              }}
              onTouchStart={() => setIsHoverName(true)}
              onTouchEnd={() => setIsHoverName(false)}
              animate={{
                rotate: isHoverName ? 6 : 0,
                color: isHoverName ? "#f5f5f7" : "#d464ae",
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              O
            </motion.span>
          </motion.div>
          <span className={styles.portfolio}>PORTFOLIO</span>
        </div>
      </div>
    </div>
  );
}
