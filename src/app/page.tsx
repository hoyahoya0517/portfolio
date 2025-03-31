import Eighth from "./_components/Eighth/Eighth";
import Fifth from "./_components/Fifth/Fifth";
import Fisrt from "./_components/First/First";
import Fourth from "./_components/Fourth/Fourth";
import Ninth from "./_components/Ninth/Ninth";
import Second from "./_components/Second/Second";
import Seventh from "./_components/Seventh/Seventh";
import Sixth from "./_components/Sixth/Sixth";
import Third from "./_components/Third/Third";
import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.page}>
      <Fisrt />
      <Second />
      <Third />
      <Fourth />
      <Fifth />
      <Sixth />
      <Seventh />
      <Eighth />
      <Ninth />
    </div>
  );
}
