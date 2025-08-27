import styles from "./Jlpt.module.css";
import { motion } from "motion/react";

export default function Jlpt() {
  return (
    <div className={styles.jlpt}>
      <motion.div
        className={styles.jlptMain}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ amount: "some" }}
        transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
      ></motion.div>
    </div>
  );
}
