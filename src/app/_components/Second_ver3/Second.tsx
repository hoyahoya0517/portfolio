"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Second.module.css";
import { useMotionValueEvent, useScroll } from "motion/react";

export default function Second() {
  const secondRef = useRef<HTMLDivElement>(null);
  const spanRef = useRef<HTMLSpanElement>(null);
  const [spanWidth, setSpanWidth] = useState(0);
  const [iam, setIam] = useState("개발자");
  const { scrollYProgress } = useScroll({
    target: secondRef,
    offset: ["start start", "end end"],
  });
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.2) setIam("개발자");
    else if (latest < 0.5) setIam("디자이너");
    else if (latest < 0.8) setIam("디렉터");
    else if (latest < 1) setIam("이건호");
  });
  useEffect(() => {
    const handleResize = () => {
      if (spanRef.current) {
        setSpanWidth(spanRef.current.clientWidth);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    if (spanRef.current) {
      setSpanWidth(spanRef.current.clientWidth);
    }
  }, []);

  return (
    <div className={styles.second} ref={secondRef}>
      <div
        className={styles.info}
        style={{ transform: `translate(-${spanWidth / 2}px, -50%)` }}
      >
        <div
          className={styles.iam}
          style={{
            visibility: spanWidth === 0 ? "hidden" : "visible",
          }}
        >
          <span>저는</span>
          <span style={{ color: iam === "이건호" ? "#d464ae" : "black" }}>
            {iam}
          </span>
          <div>
            <span ref={spanRef}>입니다.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
