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
            프론트엔드, 백엔드, 디자인, 배포까지 모든 과정을 혼자 진행해 완성한
            프로젝트
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
              <img
                onClick={() => {
                  window.open("https://www.star-spray.com/");
                }}
                src="https://res.cloudinary.com/hoyahoya/image/upload/v1745643122/portfolio/star1_ddsvws.png"
              />
            </div>
            <div className={styles.screenshotImg}>
              <img
                onClick={() => {
                  window.open("https://www.star-spray.com/");
                }}
                src="https://res.cloudinary.com/hoyahoya/image/upload/v1745643116/portfolio/star2_clqn2d.png"
              />
            </div>
            <div className={styles.screenshotImg}>
              <img
                onClick={() => {
                  window.open("https://www.star-spray.com/");
                }}
                src="https://res.cloudinary.com/hoyahoya/image/upload/v1745643353/portfolio/star3_hbufnc.png"
              />
            </div>
            <div className={styles.screenshotImg}>
              <img
                onClick={() => {
                  window.open("https://www.star-spray.com/");
                }}
                src="https://res.cloudinary.com/hoyahoya/image/upload/v1745643116/portfolio/star4_pax2fb.png"
              />
            </div>
            <div className={styles.screenshotImg}>
              <img
                onClick={() => {
                  window.open("https://www.star-spray.com/");
                }}
                src="https://res.cloudinary.com/hoyahoya/image/upload/v1745643112/portfolio/star5_zkh9w1.png"
              />
            </div>
          </motion.div>
          <div className={styles.menu}>
            <div className={styles.left} onClick={handleLeft}>
              <RiArrowLeftSLine
                style={{ cursor: current === 1 ? "default" : "pointer" }}
                size={28}
                color={current === 1 ? "#B9B9BD" : "#f5f5f7"}
              />
            </div>
            <div className={styles.right} onClick={handleRight}>
              <RiArrowRightSLine
                style={{ cursor: current === 5 ? "default" : "pointer" }}
                size={28}
                color={current === 5 ? "#B9B9BD" : "#f5f5f7"}
              />
            </div>
          </div>
        </div>
        <div className={styles.projectBottom}>
          <div className={styles.projectBottomInfo}>
            <p>
              스타스프레이는 지금까지 배운 모든 기술을 활용해 처음부터 끝까지{" "}
              <strong>혼자 작업하여 완성</strong>한 프로젝트입니다.
              <br />
              단순히 웹사이트를 제작하는 것을 넘어,{" "}
              <strong>실제 운영이 가능한 사이트</strong>를 만들고자 하는 목표로
              시작했습니다.
              <br /> 평소 디자인에 대한 깊은 관심을 바탕으로, 일반적인
              쇼핑몰과는 차별화된 독특하고 감각적인 비주얼을 구현하기 위해 많은
              고민을 거듭했습니다. 특히 일본 문화와 소품에 대한 깊은 애정으로,
              일본 현지 온라인 쇼핑몰에서 직접 상품을 소싱하여{" "}
              <strong>실제로 판매까지 연결</strong>하는 과정을 경험했습니다.
            </p>
          </div>
          <div className={styles.projectBottomInfo}>
            <p>
              기술스택(<strong>프론트엔드</strong>) : TypeScript, Next.js, React
              Query, Zustand, Motion
            </p>
            <p>
              기술스택(<strong>백엔드</strong>) : Node.js, Express.js, MongoDB,
              Vercel
            </p>
          </div>
          <div className={styles.projectBottomInfo}>
            <p>
              프론트엔드는 SEO를보다 효율적으로 적용하기 위해 Next.js를
              선택하고, 코드 안정성을 위해 TypeScript를 도입했습니다. CSR과
              SSR을 상황에 맞게 유연하게 활용하기 위해 레이아웃을 구분해
              설계하였고, 서버에서 가져오는 데이터를 효율적으로 관리하기 위해
              React Query를 적용했습니다.
            </p>
            <p>
              백엔드에서는 REST API를 완성도 있게 구축하기 위해 Node.js와
              Express.js를 깊이 이해하는 데 집중했습니다. 특히 백엔드는
              프론트엔드에 비해 구조적 복잡성과 데이터 흐름 관리가 훨씬 어렵게
              느껴졌기 때문에, 초기에는 이해에 많은 어려움을 겪었지만 이를
              극복하기 위해 개념 학습과 실습을 반복하며 꾸준히 노력했습니다.
              또한 로그인 및 사용자 인증 과정에서 발생할 수 있는 보안 문제를
              해결하기 위해 bcrypt, cookie, cors 등 다양한 보안 관련 기술을
              학습하고 적용했습니다. 로그인 기능은 프로젝트 중 가장 높은
              난이도를 가진 부분 중 하나였지만, 프론트엔드와 백엔드 모두를
              다각도로 공부하며 안전하고 완성도 높은 인증 구조를 구축했고,
              Next.js에서 널리 사용되는 Auth.js를 도입해 인증 시스템을
              강화했습니다.
            </p>
            <p>
              결제 시스템 역시 실제 사용을 목표로 다양한 서비스를
              테스트했습니다. PortOne, Toss 등 여러 결제 서비스를 비교 검토한
              결과, PortOne을 통해 결제 기능을 구현하여 안정적인 거래가
              가능하도록 설정했습니다.
            </p>
            <p>
              배포 과정에서는 처음 AWS를 이용해 프론트엔드와 백엔드 모두
              배포하며 인프라 구축 경험을 쌓았지만, 1인 프로젝트 규모에 맞는
              효율성을 고려해, 이후 프론트엔드는 Vercel에, 백엔드는 Cloudtype에
              각각 최적화하여 분리 배포하는 전략을 사용했습니다.
            </p>
            <p>
              개발뿐 아니라, 평소 패션과 디자인에 대한 깊은 관심을 살려 평범한
              쇼핑몰이 아닌 독특하고 감각적인 사이트를 만들고자 했고 이를 위해
              Figma를 활용해 디자인 기획부터 UI/UX 구성까지 스스로 고민하며,
              사용자 경험을 고려한 차별화된 비주얼을 완성했습니다.
            </p>
            <p>
              이 프로젝트를 통해 프론트엔드와 백엔드를 연결하는 과정은 물론,
              실제 상품 판매까지 이어지는 전 과정을 직접 경험할 수 있었습니다.
              비록 규모는 작았지만, 웹 개발부터 서비스 운영, 비즈니스 실현까지
              모든 흐름을 스스로 체험하며 실질적인 성장을 이룰 수 있던 소중한
              경험이었습니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
