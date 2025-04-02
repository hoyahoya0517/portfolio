"use client";

import styles from "./Second.module.css";
import { motion } from "motion/react";

export default function Second() {
  return (
    <div className={styles.second}>
      <div className={styles.hello}>
        <div>
          <span>HELLO</span>
          <span>HELLO</span>
          <span>HELLO</span>
          <span>HELLO</span>
          <span>HELLO</span>
          <span>HELLO</span>
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.image}>
          <motion.div
            whileTap={{ scale: 1.2 }}
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className={styles.imageMain}
          >
            <img src="https://res.cloudinary.com/hoyahoya/image/upload/v1698725818/hy/jsllzjuuuu6amda2e9jn.png" />
          </motion.div>
        </div>
        <div className={styles.detail}>
          <div className={styles.detailMain}>
            <p>
              안녕하세요.
              어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구
            </p>
            <p>
              어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구
            </p>
            <p>
              어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구
            </p>
            <p>
              어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구
            </p>
            <p>
              어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구
            </p>
            <p>
              어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구
            </p>
            <p>
              어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구
            </p>
            <p>
              어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구
            </p>
            <p>
              어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구
            </p>
            <p>
              어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구
            </p>
            <p>
              어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
