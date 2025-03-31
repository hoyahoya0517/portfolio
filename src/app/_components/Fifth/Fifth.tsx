"use client";

import { useState } from "react";
import styles from "./Fifth.module.css";
import { motion, useAnimate } from "motion/react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

export default function Fifth() {
  const [scope, animate] = useAnimate();
  const [current, setCurrent] = useState(1);
  const handleRight = () => {
    if (current === 5) return;
    const tmp = current;
    setCurrent(tmp + 1);
    animate(
      scope.current,
      { x: `-${tmp}00svw` },
      { duration: 0.7, ease: "easeInOut" }
    );
  };
  const handleLeft = () => {
    if (current === 1) return;
    const tmp = current;
    setCurrent(tmp - 1);
    animate(
      scope.current,
      { x: `-${tmp - 2}00svw` },
      { duration: 0.7, ease: "easeInOut" }
    );
  };
  return (
    <div className={styles.fifth}>
      <div className={styles.main}>
        <div className={styles.project}>
          <div className={styles.projectTop}>
            <p className={styles.projectTitle}>Star Spray</p>
            <p className={styles.webProject}>Web Developer Project</p>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ amount: "some" }}
            className={styles.projectInfo}
          >
            백엔드 어쩌구저쩌구어쩌구저쩌구 어쩌구저쩌구어쩌구저쩌
            <br />
            구어쩌구저쩌구어쩌구저쩌구어 쩌구저쩌 구어쩌구저쩌구
            <br />
            프론트엔드 어쩌어쩌구저쩌구어쩌구저쩌구 어쩌구저쩌구어쩌구저쩌
            구어쩌구저쩌
          </motion.p>
        </div>
        <div className={styles.screenshot}>
          <motion.div
            ref={scope}
            initial={{ x: 0 }}
            transition={{ duration: 10, ease: "linear" }}
            className={styles.slide}
          >
            {/* <div className={styles.screenshotImg}>
              <img src="https://res.cloudinary.com/hoyahoya/image/upload/v1740991727/portfolio/port1-Photoroom_e1wb3r.png" />
            </div> */}
            <div className={styles.screenshotImg}>
              <img src="https://res.cloudinary.com/hoyahoya/image/upload/v1740991829/portfolio/port2-Photoroom_jvjgj0.png" />
            </div>
            <div className={styles.screenshotImg}>
              <img src="https://res.cloudinary.com/hoyahoya/image/upload/v1740991799/portfolio/port3-Photoroom_djg4gn.png" />
            </div>
            <div className={styles.screenshotImg}>
              <img src="https://res.cloudinary.com/hoyahoya/image/upload/v1740991726/portfolio/port4-Photoroom_zbpbku.png" />
            </div>
            <div className={styles.screenshotImg}>
              <img src="https://res.cloudinary.com/hoyahoya/image/upload/v1740991726/portfolio/port5-Photoroom_ztmed0.png" />
            </div>
            <div className={styles.screenshotImg}>
              <img src="https://res.cloudinary.com/hoyahoya/image/upload/v1740992220/portfolio/Group_15-Photoroom_dyemyi.png" />
            </div>
          </motion.div>
          <div className={styles.menu}>
            <div className={styles.left} onClick={handleLeft}>
              <RiArrowLeftSLine
                style={{ cursor: current === 1 ? "default" : "pointer" }}
                size={28}
                color={current === 1 ? "#B9B9BD" : "#525253"}
              />
            </div>
            <div className={styles.right} onClick={handleRight}>
              <RiArrowRightSLine
                style={{ cursor: current === 5 ? "default" : "pointer" }}
                size={28}
                color={current === 5 ? "#B9B9BD" : "#525253"}
              />
            </div>
          </div>
        </div>
        <div className={styles.projectBottom}>
          <div className={styles.projectBottomInfo}>
            <p>
              프론트엔드 어쩌어쩌구저쩌구어쩌구저쩌구 어쩌구저쩌구어쩌구저쩌
              구어쩌구저쩌 프론트엔드 어쩌어쩌구저쩌구어쩌구저쩌구
              어쩌구저쩌구어쩌구저쩌 구어쩌구저쩌 프론트엔드
              어쩌어쩌구저쩌구어쩌구저쩌구 어쩌구저쩌구어쩌구저쩌 구어쩌구저쩌
              프론트엔드 어쩌어쩌구저쩌구어쩌구저쩌구 어쩌구저쩌구어쩌구저쩌
              구어쩌구저쩌
            </p>
            <p>
              프론트엔드 어쩌어쩌구저쩌구어쩌구저쩌구 어쩌구저쩌구어쩌구저쩌
              구어쩌구저쩌 프론트엔드 어쩌어쩌구저쩌구어쩌구저쩌구
              어쩌구저쩌구어쩌구저쩌 구어쩌구저쩌 프론트엔드
              어쩌어쩌구저쩌구어쩌구저쩌구 어쩌구저쩌구어쩌구저쩌 구어쩌구저쩌
              프론트엔드 어쩌어쩌구저쩌구어쩌구저쩌구 어쩌구저쩌구어쩌구저쩌
              구어쩌구저쩌
            </p>
          </div>
          <div className={styles.projectBottomInfo}>
            <p>
              사용한 기술스택(프론트엔드) :
              뭐뭐멈머ㅜㅜ머ㅜ무머ㅜ머ㅜ머ㅝ뭐뭐뭐ㅜ머,뭐뭐뭐ㅜㅁ,뭐무머ㅜ머ㅜ머ㅜㅁ무머ㅜ머ㅜ머ㅜ머ㅜ머ㅜ머ㅜ머ㅜ뭐
            </p>
            <p>
              사용한 기술스택(백엔드) :
              뭐뭐멈머ㅜㅜ머ㅜ무머ㅜ머ㅜ머ㅝ뭐뭐뭐ㅜ머,뭐뭐뭐ㅜㅁ,뭐무머ㅜ머ㅜ머ㅜㅁ무머ㅜ머ㅜ머ㅜ머ㅜ머ㅜ머ㅜ머ㅜ뭐
            </p>
          </div>
          <div className={styles.projectBottomInfo}>
            <p>
              프론트엔드 어쩌어쩌구저쩌구어쩌구저쩌구 어쩌구저쩌구어쩌구저쩌
              구어쩌구저쩌 프론트엔드 어쩌어쩌구저쩌구어쩌구저쩌구
              어쩌구저쩌구어쩌구저쩌 구어쩌구저쩌 프론트엔드
              어쩌어쩌구저쩌구어쩌구저쩌구 어쩌구저쩌구어쩌구저쩌 구어쩌구저쩌
              프론트엔드 어쩌어쩌구저쩌구어쩌구저쩌구 어쩌구저쩌구어쩌구저쩌
              구어쩌구저쩌
            </p>
            <p>
              프론트엔드 어쩌어쩌구저쩌구어쩌구저쩌구 어쩌구저쩌구어쩌구저쩌
              구어쩌구저쩌 프론트엔드 어쩌어쩌구저쩌구어쩌구저쩌구
              어쩌구저쩌구어쩌구저쩌 구어쩌구저쩌 프론트엔드
              어쩌어쩌구저쩌구어쩌구저쩌구 어쩌구저쩌구어쩌구저쩌 구어쩌구저쩌
              프론트엔드 어쩌어쩌구저쩌구어쩌구저쩌구 어쩌구저쩌구어쩌구저쩌
              구어쩌구저쩌
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
