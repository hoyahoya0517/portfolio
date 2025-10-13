import styles from "./Third.module.css";

export default function Third() {
  return (
    <div className={styles.third}>
      <div className={styles.thirdMain}>
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
  );
}
