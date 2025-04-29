"use client";

import styles from "./Sixth.module.css";
import { motion } from "motion/react";

export default function Sixth() {
  return (
    <div className={styles.sixth}>
      <div className={styles.main}>
        <div className={styles.title}>
          <div className={styles.projectTop}>
            <p className={styles.projectTitle}>Career</p>
            <motion.p
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ amount: "some" }}
              className={styles.webProject}
            >
              UNIQLO
            </motion.p>
            <p className={styles.projectInfo}>
              근무기간 : 2023.07 ~ 2024.12 (1년 6개월)
            </p>
          </div>
        </div>
        <div className={styles.career}>
          <div className={styles.careerInfo}>
            <p>유니클로 롯데월드몰점 근무</p>
            <p>
              <strong>국내 유일 플래그십 스토어</strong>인 유니클로 잠실
              롯데월드몰점에서 근무했습니다. 플래그십 스토어 특성상, 일반
              매장과는 차별화된 매장 운영 시스템과 고도화된 상품 관리 방식을
              경험할 수 있었습니다. 또한, <strong>대규모 고객</strong> 유입에
              대응하기 위해 매장 동선 최적화, 시즌별 상품 진열 및 재고 운용
              전략을 적극적으로 수행했습니다. 이 과정을 통해 매출 향상은 물론,
              고객에게 보다 만족스러운 쇼핑 경험을 제공하는 방법을 체득할 수
              있었습니다.
            </p>
          </div>
          <div className={styles.careerInfo}>
            <p>니트 부문 담당자</p>
            <p>
              니트 부문을 전담하여,{" "}
              <strong>상품 재고 관리와 판매 촉진 전략 수립</strong>을
              담당했습니다. 매주 니트 매출 데이터를 분석하고, 개선 방향과 전략을
              제시하는 보고서를 작성해 팀과 공유했습니다. 또한, 본사 창고 및
              국내 전체 재고를 확인하여 니트 상품의 적정 재고를 유지하고, 시기별
              판매량에 맞춘 <strong>상품 배치 및 프로모션 기획에</strong>도 적극
              참여했습니다. 이러한 경험을 통해 <strong>데이터 기반</strong>으로
              문제를 분석하고, 실질적인 개선 방안을 제안하는 능력을 키울 수
              있었습니다.
            </p>
          </div>
          <div className={styles.careerInfo}>
            <p>대규모 조직 내 협업 경험</p>
            <p>
              약 <strong>200</strong>명의 직원이 함께 근무하는 유니클로
              롯데월드몰점에서 다양한 팀과 긴밀하게 <strong>협력</strong>하며
              매장 운영에 참여했습니다. 섹션별 담당자들과의 커뮤니케이션, 시즌별
              매장 리뉴얼 준비, 재고 이동 및 프로모션 실행 등 다양한 협업 경험을
              통해, 빠르게 상황을 파악하고 팀과 조율하는 유연성을 키웠습니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
