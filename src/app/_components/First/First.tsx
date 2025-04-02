"use client";

import { useState } from "react";
import styles from "./First.module.css";
import { motion } from "motion/react";

export default function Fisrt() {
  const [isHoverName, setIsHoverName] = useState(false);
  return (
    <div className={styles.home}>
      <div className={styles.main}>
        <motion.div className={styles.name}>
          <motion.span
            onMouseEnter={() => setIsHoverName(true)}
            onMouseLeave={() => setIsHoverName(false)}
            onTouchStart={() => setIsHoverName(true)}
            onTouchEnd={() => setIsHoverName(false)}
            animate={{
              rotate: isHoverName ? 0 : -15,
              color: isHoverName ? "#d464ae" : "white",
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            G
          </motion.span>
          <motion.span
            onMouseEnter={() => setIsHoverName(true)}
            onMouseLeave={() => setIsHoverName(false)}
            animate={{
              rotate: isHoverName ? 0 : 5,
              color: isHoverName ? "#d464ae" : "white",
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            E
          </motion.span>
          <motion.span
            onMouseEnter={() => setIsHoverName(true)}
            onMouseLeave={() => setIsHoverName(false)}
            animate={{
              rotate: isHoverName ? 0 : -5,
              color: isHoverName ? "#d464ae" : "white",
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            O
          </motion.span>
          <motion.span
            onMouseEnter={() => setIsHoverName(true)}
            onMouseLeave={() => setIsHoverName(false)}
            animate={{
              rotate: isHoverName ? 0 : 4,
              color: isHoverName ? "#d464ae" : "white",
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            N
          </motion.span>
          <motion.span
            onMouseEnter={() => setIsHoverName(true)}
            onMouseLeave={() => setIsHoverName(false)}
            animate={{
              rotate: isHoverName ? 0 : -7,
              color: isHoverName ? "#d464ae" : "white",
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            H
          </motion.span>
          <motion.span
            onMouseEnter={() => setIsHoverName(true)}
            onMouseLeave={() => setIsHoverName(false)}
            animate={{
              rotate: isHoverName ? 0 : 6,
              color: isHoverName ? "#d464ae" : "white",
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            O
          </motion.span>
          <motion.span
            onMouseEnter={() => setIsHoverName(true)}
            onMouseLeave={() => setIsHoverName(false)}
            animate={{
              rotate: isHoverName ? 0 : 5,
              color: isHoverName ? "#d464ae" : "white",
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >{`'`}</motion.span>
          <motion.span
            onMouseEnter={() => setIsHoverName(true)}
            onMouseLeave={() => setIsHoverName(false)}
            animate={{
              rotate: isHoverName ? 0 : -4,
              color: isHoverName ? "#d464ae" : "white",
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            S
          </motion.span>
        </motion.div>
        <span>PORTFOLIO</span>
      </div>
    </div>
  );
}
