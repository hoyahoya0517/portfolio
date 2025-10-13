import styles from "./Language.module.css";
import { motion } from "motion/react";

export default function Language() {
  return (
    <div className={styles.Language}>
      <motion.div
        className={styles.LanguageMain}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ amount: "some" }}
        transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
      ></motion.div>
    </div>
  );
}
