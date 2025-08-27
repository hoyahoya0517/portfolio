// import Eighth from "./_components/Eighth/Eighth";
// import Fifth from "./_components/Fifth/Fifth";
// import Fisrt from "./_components/First/First";
import FirstVer2 from "./_components/First_ver2/First";
import Footer from "./_components/Footer/Footer";
// import Fourth from "./_components/Fourth/Fourth";
// import Ninth from "./_components/Ninth/Ninth";
// import Second from "./_components/Second/Second";
// import Sixth from "./_components/Sixth/Sixth";
// import Third from "./_components/Third/Third";
// import Ten from "./_components/Ten/Ten";
import styles from "./page.module.css";
import SelectCard from "./_components/SelectCard/SelectCard";
import SecondVer2 from "./_components/Second_ver2/Second";

export default function Page() {
  return (
    <div className={styles.page}>
      {/* <Fisrt /> */}
      <FirstVer2 />
      {/* <Second /> */}
      <SecondVer2 />
      {/* <Third /> */}
      {/* <Fourth /> */}
      <SelectCard />
      {/* <Sixth />
      <Eighth />
      <Fifth /> */}
      {/* <Ninth /> */}
      {/* <Ten /> */}
      <Footer />
    </div>
  );
}
