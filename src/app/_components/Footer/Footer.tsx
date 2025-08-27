import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.main}>
        <div className={styles.copyright}>
          <span>Copyright © 2025 GeonHo Lee.</span>
        </div>
      </div>
    </div>
  );
}
