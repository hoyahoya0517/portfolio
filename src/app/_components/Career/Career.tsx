import styles from "./Career.module.css";
import { motion } from "motion/react";

export default function Career() {
  return (
    <div className={styles.career}>
      <div className={styles.careerMain}>
        <div className={styles.uniqlo}>
          <img src="https://res.cloudinary.com/hoyahoya/image/upload/v1756047265/portfolio/lookbook-21_yta4lt.avif" />
        </div>
        <div className={styles.cos}>
          <img src="https://res.cloudinary.com/hoyahoya/image/upload/v1756047579/portfolio/Untitled-1_copy_finikv.png" />
        </div>
        <motion.div
          className={styles.background}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ amount: "some" }}
          transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
        ></motion.div>
      </div>
    </div>
  );
}
