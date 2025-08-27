import styles from "./LeeHyun.module.css";
import { motion } from "motion/react";
import Logo from "/public/svg/logo.svg";
import { InfiniteSlider } from "../../../../components/motion-primitives/infinite-slider";

export default function LeeHyun() {
  return (
    <div className={styles.leeHyun}>
      <div className={styles.background}>
        <motion.div
          className={styles.main}
          initial={{ filter: "blur(0px)" }}
          animate={{ filter: "blur(10px)" }}
          transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
        >
          <div className={styles.sliderContainer}>
            <InfiniteSlider gap={24} className={styles.slider} speed={70}>
              <div className={styles.logo}>
                <Logo />
              </div>
              <div className={styles.logo}>
                <Logo />
              </div>
              <div className={styles.logo}>
                <Logo />
              </div>
              <div className={styles.logo}>
                <Logo />
              </div>
              <div className={styles.logo}>
                <Logo />
              </div>
              <div className={styles.logo}>
                <Logo />
              </div>
              <div className={styles.logo}>
                <Logo />
              </div>
              <div className={styles.logo}>
                <Logo />
              </div>
              <div className={styles.logo}>
                <Logo />
              </div>
            </InfiniteSlider>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
