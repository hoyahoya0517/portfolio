import styles from "./Gtq.module.css";
import { motion } from "motion/react";

export default function Gtq() {
  return (
    <div className={styles.gtq}>
      <motion.div
        className={styles.gtqMain}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ amount: "some" }}
        transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
      ></motion.div>
    </div>
  );
}
