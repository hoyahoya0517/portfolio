import styles from "./StarSpray.module.css";
import { motion } from "motion/react";

export default function StarSpray() {
  return (
    <div className={styles.starSpray}>
      <motion.div
        className={styles.starSprayBackground}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ amount: "some" }}
        transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
      ></motion.div>
    </div>
  );
}
