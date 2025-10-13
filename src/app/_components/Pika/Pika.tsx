import styles from "./Pika.module.css";
import { motion } from "motion/react";

export default function Pika() {
  return (
    <div className={styles.pika}>
      <motion.div
        className={styles.pikaBackground}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ amount: "some" }}
        transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
      ></motion.div>
    </div>
  );
}
