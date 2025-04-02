"use client";

import { useRef, useState } from "react";
import styles from "./Fourth.module.css";
import { AnimatePresence, motion, useInView } from "motion/react";

export default function Fourth() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2 });
  // useEffect(() => {
  //   console.log("Element is in view: ", isInView);
  // }, [isInView]);
  const [isHtml, setIsHtml] = useState(false);
  const [isCss, setIsCss] = useState(false);
  const [isJs, setIsJs] = useState(false);
  const [isTs, setIsTs] = useState(false);
  const [isReact, setIsReact] = useState(false);
  const [isReactQuery, setIsReactQuery] = useState(false);
  const [isNext, setIsNext] = useState(false);
  const [isZustand, setIsZustand] = useState(false);
  const [isMotion, setIsMotion] = useState(false);
  const [isNode, setIsNode] = useState(false);
  const [isExpress, setIsExpress] = useState(false);
  const [isMongo, setIsMongo] = useState(false);
  const [isGit, setIsGit] = useState(false);
  const [isAws, setIsAws] = useState(false);
  const [isFigma, setIsFigma] = useState(false);
  return (
    <motion.div
      ref={ref}
      initial={{ backgroundColor: "rgb(255, 255, 255)" }}
      whileInView={{ backgroundColor: "rgb(0, 0, 0)" }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      viewport={{ amount: 0.2 }}
      className={styles.fourth}
    >
      <div className={styles.main}>
        <div className={styles.skills}>
          <p>Web Developer Skills</p>
        </div>
        <div className={styles.grid}>
          <div className={styles.skill}>
            <div className={styles.skillMain}>
              <motion.span
                style={{ cursor: isInView ? "pointer" : "default" }}
                onHoverStart={() => setIsHtml(true)}
                onHoverEnd={() => setIsHtml(false)}
                onTap={() => setIsHtml(true)}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeIn" }}
                viewport={{ amount: "some" }}
              >
                HTML
              </motion.span>
              <AnimatePresence>
                {isInView && isHtml && (
                  <motion.div
                    onHoverStart={() => setIsHtml(true)}
                    onHoverEnd={() => setIsHtml(false)}
                    onTap={() => setIsHtml(false)}
                    className={styles.skillDetail}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <motion.span className={styles.skillInfo}>
                      HTML을 이해한다.
                    </motion.span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skillMain}>
              <motion.span
                style={{ cursor: isInView ? "pointer" : "default" }}
                onHoverStart={() => setIsCss(true)}
                onHoverEnd={() => setIsCss(false)}
                onTap={() => setIsCss(true)}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeIn" }}
                viewport={{ amount: "some" }}
              >
                CSS
              </motion.span>
              <AnimatePresence>
                {isInView && isCss && (
                  <motion.div
                    onHoverStart={() => setIsCss(true)}
                    onHoverEnd={() => setIsCss(false)}
                    onTap={() => setIsCss(false)}
                    className={styles.skillDetail}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <motion.span className={styles.skillInfo}>
                      CSS를 이해한다.
                    </motion.span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skillMain}>
              <motion.span
                style={{ cursor: isInView ? "pointer" : "default" }}
                onHoverStart={() => setIsJs(true)}
                onHoverEnd={() => setIsJs(false)}
                onTap={() => setIsJs(true)}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeIn" }}
                viewport={{ amount: "some" }}
              >
                JavaScript
              </motion.span>
              <AnimatePresence>
                {isInView && isJs && (
                  <motion.div
                    onHoverStart={() => setIsJs(true)}
                    onHoverEnd={() => setIsJs(false)}
                    onTap={() => setIsJs(false)}
                    className={styles.skillDetail}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <motion.span className={styles.skillInfo}>
                      JavaScript를 이해한다.
                    </motion.span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skillMain}>
              <motion.span
                style={{ cursor: isInView ? "pointer" : "default" }}
                onHoverStart={() => setIsTs(true)}
                onHoverEnd={() => setIsTs(false)}
                onTap={() => setIsTs(true)}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeIn" }}
                viewport={{ amount: "some" }}
              >
                TypeScript
              </motion.span>
              <AnimatePresence>
                {isInView && isTs && (
                  <motion.div
                    onHoverStart={() => setIsTs(true)}
                    onHoverEnd={() => setIsTs(false)}
                    onTap={() => setIsTs(false)}
                    className={styles.skillDetail}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <motion.span className={styles.skillInfo}>
                      TypeScript를 이해한다.
                    </motion.span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skillMain}>
              <motion.span
                style={{
                  cursor: isInView ? "pointer" : "default",
                  color: "#d464ae",
                }}
                onHoverStart={() => setIsReact(true)}
                onHoverEnd={() => setIsReact(false)}
                onTap={() => setIsReact(true)}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeIn" }}
                viewport={{ amount: "some" }}
              >
                React
              </motion.span>
              <AnimatePresence>
                {isInView && isReact && (
                  <motion.div
                    onHoverStart={() => setIsReact(true)}
                    onHoverEnd={() => setIsReact(false)}
                    onTap={() => setIsReact(false)}
                    className={styles.skillDetail}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <motion.span className={styles.skillInfo}>
                      React를 이해한다.
                    </motion.span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skillMain}>
              <motion.span
                style={{ cursor: isInView ? "pointer" : "default" }}
                onHoverStart={() => setIsReactQuery(true)}
                onHoverEnd={() => setIsReactQuery(false)}
                onTap={() => setIsReactQuery(true)}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeIn" }}
                viewport={{ amount: "some" }}
              >
                React Query
              </motion.span>
              <AnimatePresence>
                {isInView && isReactQuery && (
                  <motion.div
                    onHoverStart={() => setIsReactQuery(true)}
                    onHoverEnd={() => setIsReactQuery(false)}
                    onTap={() => setIsReactQuery(false)}
                    className={styles.skillDetail}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <motion.span className={styles.skillInfo}>
                      React Query를 이해한다.
                    </motion.span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skillMain}>
              <motion.span
                style={{
                  cursor: isInView ? "pointer" : "default",
                  color: "#d464ae",
                }}
                onHoverStart={() => setIsNext(true)}
                onHoverEnd={() => setIsNext(false)}
                onTap={() => setIsNext(true)}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeIn" }}
                viewport={{ amount: "some" }}
              >
                Next.js
              </motion.span>
              <AnimatePresence>
                {isInView && isNext && (
                  <motion.div
                    onHoverStart={() => setIsNext(true)}
                    onHoverEnd={() => setIsNext(false)}
                    onTap={() => setIsNext(false)}
                    className={styles.skillDetail}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <motion.span className={styles.skillInfo}>
                      Next.js를 이해한다.
                    </motion.span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skillMain}>
              <motion.span
                style={{ cursor: isInView ? "pointer" : "default" }}
                onHoverStart={() => setIsZustand(true)}
                onHoverEnd={() => setIsZustand(false)}
                onTap={() => setIsZustand(true)}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeIn" }}
                viewport={{ amount: "some" }}
              >
                Zustand
              </motion.span>
              <AnimatePresence>
                {isInView && isZustand && (
                  <motion.div
                    onHoverStart={() => setIsZustand(true)}
                    onHoverEnd={() => setIsZustand(false)}
                    onTap={() => setIsZustand(false)}
                    className={styles.skillDetail}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <motion.span className={styles.skillInfo}>
                      Zustand를 이해한다.
                    </motion.span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skillMain}>
              <motion.span
                style={{ cursor: isInView ? "pointer" : "default" }}
                onHoverStart={() => setIsMotion(true)}
                onHoverEnd={() => setIsMotion(false)}
                onTap={() => setIsMotion(true)}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeIn" }}
                viewport={{ amount: "some" }}
              >
                Motion
              </motion.span>
              <AnimatePresence>
                {isInView && isMotion && (
                  <motion.div
                    onHoverStart={() => setIsMotion(true)}
                    onHoverEnd={() => setIsMotion(false)}
                    onTap={() => setIsMotion(false)}
                    className={styles.skillDetail}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <motion.span className={styles.skillInfo}>
                      Motion을 이해한다.
                    </motion.span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skillMain}>
              <motion.span
                style={{ cursor: isInView ? "pointer" : "default" }}
                onHoverStart={() => setIsNode(true)}
                onHoverEnd={() => setIsNode(false)}
                onTap={() => setIsNode(true)}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeIn" }}
                viewport={{ amount: "some" }}
              >
                Node.js
              </motion.span>
              <AnimatePresence>
                {isInView && isNode && (
                  <motion.div
                    onHoverStart={() => setIsNode(true)}
                    onHoverEnd={() => setIsNode(false)}
                    onTap={() => setIsNode(false)}
                    className={styles.skillDetail}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <motion.span className={styles.skillInfo}>
                      Node.js를 이해한다.
                    </motion.span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skillMain}>
              <motion.span
                style={{ cursor: isInView ? "pointer" : "default" }}
                onHoverStart={() => setIsExpress(true)}
                onHoverEnd={() => setIsExpress(false)}
                onTap={() => setIsExpress(true)}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeIn" }}
                viewport={{ amount: "some" }}
              >
                Express.js
              </motion.span>
              <AnimatePresence>
                {isInView && isExpress && (
                  <motion.div
                    onHoverStart={() => setIsExpress(true)}
                    onHoverEnd={() => setIsExpress(false)}
                    onTap={() => setIsExpress(false)}
                    className={styles.skillDetail}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <motion.span className={styles.skillInfo}>
                      Express.js를 이해한다.
                    </motion.span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skillMain}>
              <motion.span
                style={{ cursor: isInView ? "pointer" : "default" }}
                onHoverStart={() => setIsMongo(true)}
                onHoverEnd={() => setIsMongo(false)}
                onTap={() => setIsMongo(true)}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeIn" }}
                viewport={{ amount: "some" }}
              >
                MongoDB
              </motion.span>
              <AnimatePresence>
                {isInView && isMongo && (
                  <motion.div
                    onHoverStart={() => setIsMongo(true)}
                    onHoverEnd={() => setIsMongo(false)}
                    onTap={() => setIsMongo(false)}
                    className={styles.skillDetail}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <motion.span className={styles.skillInfo}>
                      MongoDB를 이해한다.
                    </motion.span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skillMain}>
              <motion.span
                style={{ cursor: isInView ? "pointer" : "default" }}
                onHoverStart={() => setIsGit(true)}
                onHoverEnd={() => setIsGit(false)}
                onTap={() => setIsGit(true)}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeIn" }}
                viewport={{ amount: "some" }}
              >
                Git
              </motion.span>
              <AnimatePresence>
                {isInView && isGit && (
                  <motion.div
                    onHoverStart={() => setIsGit(true)}
                    onHoverEnd={() => setIsGit(false)}
                    onTap={() => setIsGit(false)}
                    className={styles.skillDetail}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <motion.span className={styles.skillInfo}>
                      Git를 이해한다.
                    </motion.span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skillMain}>
              <motion.span
                style={{ cursor: isInView ? "pointer" : "default" }}
                onHoverStart={() => setIsAws(true)}
                onHoverEnd={() => setIsAws(false)}
                onTap={() => setIsAws(true)}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeIn" }}
                viewport={{ amount: "some" }}
              >
                AWS
              </motion.span>
              <AnimatePresence>
                {isInView && isAws && (
                  <motion.div
                    onHoverStart={() => setIsAws(true)}
                    onHoverEnd={() => setIsAws(false)}
                    onTap={() => setIsAws(false)}
                    className={styles.skillDetail}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <motion.span className={styles.skillInfo}>
                      AWS를 이해한다.
                    </motion.span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skillMain}>
              <motion.span
                style={{ cursor: isInView ? "pointer" : "default" }}
                onHoverStart={() => setIsFigma(true)}
                onHoverEnd={() => setIsFigma(false)}
                onTap={() => setIsFigma(true)}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeIn" }}
                viewport={{ amount: "some" }}
              >
                Figma
              </motion.span>
              <AnimatePresence>
                {isInView && isFigma && (
                  <motion.div
                    onHoverStart={() => setIsFigma(true)}
                    onHoverEnd={() => setIsFigma(false)}
                    onTap={() => setIsFigma(false)}
                    className={styles.skillDetail}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <motion.span className={styles.skillInfo}>
                      Figma를 이해한다.
                    </motion.span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
        {/* <div className={styles.starSpray}>
          <div className={styles.title}>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ amount: "some" }}
            >
              Star Spray
            </motion.span>
          </div>
        </div> */}
      </div>
    </motion.div>
  );
}
