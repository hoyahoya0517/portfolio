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
            <div className={styles.skillMain2}>
              <motion.span
                // style={{ cursor: isInView ? "pointer" : "default" }}
                // onHoverStart={() => setIsHtml(true)}
                // onHoverEnd={() => setIsHtml(false)}
                // onTap={() => setIsHtml(true)}
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
            <div className={styles.skillMain2}>
              <motion.span
                // style={{ cursor: isInView ? "pointer" : "default" }}
                // onHoverStart={() => setIsCss(true)}
                // onHoverEnd={() => setIsCss(false)}
                // onTap={() => setIsCss(true)}
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
            <div className={styles.skillMain2}>
              <motion.span
                // style={{ cursor: isInView ? "pointer" : "default" }}
                // onHoverStart={() => setIsJs(true)}
                // onHoverEnd={() => setIsJs(false)}
                // onTap={() => setIsJs(true)}
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
                style={{
                  cursor: isInView ? "pointer" : "default",
                  color: "#d464ae",
                }}
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
                      TypeScript을 정확히 이해하고 있으며, 기본 타입부터 유니온
                      타입, 인터섹션 타입, 제너릭 타입 등 다양한 타입 활용에
                      능숙합니다.
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
                      React의 컴포넌트 기반 구조와 문법을 정확히 이해하고
                      있으며, SPA(Single Page Application) 방식과 React의 작동
                      원리(가상 DOM, 렌더링 최적화 등)에 대한 깊은 이해를
                      바탕으로 다양한 프로젝트를 구현했습니다.
                    </motion.span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skillMain2}>
              <motion.span
                // style={{ cursor: isInView ? "pointer" : "default" }}
                // onHoverStart={() => setIsReactQuery(true)}
                // onHoverEnd={() => setIsReactQuery(false)}
                // onTap={() => setIsReactQuery(true)}
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
                      Next.js의 작동 방식을 정확히 이해하고, React와의 구조적
                      차이점을 명확히 구분할 수 있습니다. 특히 Next.js의 핵심인
                      CSR과 SSR방식을 프로젝트에 따라 적절한 렌더링 방식을
                      선택하고 적용할 수 있습니다.
                    </motion.span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skillMain2}>
              <motion.span
                // style={{ cursor: isInView ? "pointer" : "default" }}
                // onHoverStart={() => setIsZustand(true)}
                // onHoverEnd={() => setIsZustand(false)}
                // onTap={() => setIsZustand(true)}
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
                style={{
                  cursor: isInView ? "pointer" : "default",
                  color: "#d464ae",
                }}
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
                      CSS와 디자인 요소에 꾸준한 관심을 가져온 만큼, 자연스러운
                      모션 표현에도 깊은 흥미를 가지고 있습니다. Framer Motion을
                      활용하여 다양한 애니메이션과 인터랙션을 구현해왔으며,
                      부드럽고 감각적인 사용자 경험을 제공하기 위해 지속적으로
                      학습하고 프로젝트에 적극적으로 적용해왔습니다.
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
                style={{
                  cursor: isInView ? "pointer" : "default",
                  color: "#d464ae",
                }}
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
                      Express.js를 활용해 직접 서버를 구축한 경험이 있습니다.
                      라우팅, 미들웨어 설정, API 구축 등 기본적인 서버 사이드
                      개발을 이해하고 있으며, 실제 프로젝트를 통해 서버 개발과
                      클라이언트 간 데이터 통신 흐름을 경험했습니다.
                    </motion.span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skillMain2}>
              <motion.span
                // style={{
                //   cursor: isInView ? "pointer" : "default",

                // }}
                // onHoverStart={() => setIsMongo(true)}
                // onHoverEnd={() => setIsMongo(false)}
                // onTap={() => setIsMongo(true)}
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
                style={{
                  cursor: isInView ? "pointer" : "default",
                  color: "#d464ae",
                }}
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
                      Git을 활용하여 프로젝트 버전 관리 및 협업을 경험했습니다.
                      버전 기록, 브랜치 전략, 병합 등을 이해하고 있으며,
                      안정적인 코드 관리와 팀 작업을 위한 기본적인 워크플로우를
                      실행할 수 있습니다.
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
                      프론트엔드와 백엔드 배포를 위해 AWS를 공부하고
                      활용했습니다. EC2를 통한 서버 운영, S3를 이용한 파일
                      호스팅, Route 53을 통한 도메인 연결 등 기본적인 클라우드
                      서비스 관리와 운영이 가능합니다.
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
                      Figma를 활용해 기본적인 UI/UX 디자인 작업이 가능하며,
                      프로젝트에서도 와이어프레임 제작과 화면 설계에
                      활용했습니다. 디자인 시 사용자 흐름과 사용성을 고려하여
                      효율적인 화면 구성을 기획할 수 있습니다.
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
