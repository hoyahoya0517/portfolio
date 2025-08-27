"use client";

import styles from "./Second.module.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";

export default function Second() {
  let width = 0;
  let height = 0;
  if (typeof window !== "undefined") {
    width = window.innerWidth;
    height = window.innerHeight;
  }
  const [spanHeight, setSpanHeight] = useState(0);
  const spanRef = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    if (spanRef.current) {
      setSpanHeight(spanRef.current.clientHeight);
    }
  }, [spanRef]);
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".secondWrapper",
        start: "top top",
        end: `+=${width * 5}`,
        pin: true,
        scrub: 2,
      },
    });
    tl.to(".pinWrapper2", {
      x: -width,
      duration: 2,
      ease: "linear",
    });
    tl.to(".pinWrapper2", {
      x: -width * 2,
      duration: 2,
      ease: "linear",
    });
    tl.to(".pinWrapper2", {
      x: -width * 3,
      duration: 2,
      ease: "linear",
    });
    tl.to(".otherSection2", {
      y: -height,
      duration: 2,
      ease: "linear",
    });
    tl.to(".otherSection2", {
      y: -height,
      duration: 2,
      ease: "linear",
    });
  });
  // useGSAP(() => {
  //   gsap.to(".pinTextWrapper span", {
  //     fontSize: "300px",
  //     duration: 1,
  //   });
  // });

  return (
    <div className={`${styles.second} secondWrapper`}>
      <div className={styles.info}>
        <div className={styles.iam}>
          <span ref={spanRef}>{`저는`}</span>
          <div className={styles.pinContainer} style={{ height: spanHeight }}>
            <div className={`${styles.pinWrapper} pinWrapper2`}>
              <div className={styles.pinText}>
                <span>개발자</span>
              </div>
              <div className={styles.pinText}>
                <span>디자이너</span>
              </div>
              <div className={styles.pinText}>
                <span>브랜드매니저</span>
              </div>
              <div className={styles.pinText}>
                <span style={{ color: "#d464ad" }}>이건호</span>
              </div>
            </div>
          </div>
          <span>입니다.</span>
        </div>
      </div>
      <div className={`${styles.otherSection} otherSection2`}>
        <div className={styles.otherSectionMain}>
          <div className={styles.info2}>
            <p>Web Developer</p>
            <p>UI/UX Designer</p>
            <p>Brand Manager</p>
          </div>
          <div className={styles.info3}>
            <p>CONTACT</p>
            <p>Mail : hoyahoya0517@naver.com</p>
            <p>Phone : 010-6272-6828</p>
          </div>
          <div className={styles.hello}>
            <div>
              <span>LeeGeonHo</span>
              <span>LeeGeonHo</span>
              <span>LeeGeonHo</span>
              <span>LeeGeonHo</span>
              <span>LeeGeonHo</span>
              <span>LeeGeonHo</span>
            </div>
          </div>
          <div className={styles.image}>
            <img src="https://res.cloudinary.com/hoyahoya/image/upload/v1745928379/portfolio/KakaoTalk_Photo_2025-04-29-21-05-53_egm5ni.png" />
          </div>
        </div>
      </div>
    </div>
  );
}
