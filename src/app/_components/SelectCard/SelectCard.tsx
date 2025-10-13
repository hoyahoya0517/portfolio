// "use client";

// import { useEffect, useRef, useState } from "react";
// import styles from "./SelectCard.module.css";
// import { motion, useAnimate } from "motion/react";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import StarSpray from "../StarSpray/StarSpray";
// import LeeHyun from "../LeeHyun/LeeHyun";
// import Pika from "../Pika/Pika";
// import Gtq from "../Gtq/Gtq";
// import StarSprayPage from "../StarSprayPage/StarSprayPage";
// import Language from "../Language/Language";
// import GtqPage from "../GtqPage/GtqPage";
// import LanguagePage from "../LanguagePage/LanguagePage";
// import LeeHyunPage from "../LeeHyunPage/LeeHyunPage";
// import PikaPage from "../PikaPage/PikaPage";

// export default function SelectCard() {
//   const flagRef = useRef<HTMLDivElement>(null);
//   const [scope, animate] = useAnimate();
//   const [deg, setDeg] = useState(0);
//   const [starSprayPage, setStarSprayPage] = useState(false);
//   const [leeHyunPage, setLeeHyunPage] = useState(false);
//   const [pikaPage, setPikaPage] = useState(false);
//   const [gtqPage, setGtqPage] = useState(false);
//   const [languagePage, setLanguagePage] = useState(false);
//   gsap.registerPlugin(ScrollTrigger);
//   useGSAP(() => {
//     gsap.timeline({
//       scrollTrigger: {
//         trigger: ".selectCardWrapper",
//         start: "top top",
//         end: `+=100%`,
//         pin: true,
//         scrub: 2,
//       },
//     });
//   });
//   useEffect(() => {}, [deg]);
//   return (
//     <div className={`${styles.selectCard} selectCardWrapper`} ref={flagRef}>
//       <StarSprayPage
//         starSprayPage={starSprayPage}
//         setStarSprayPage={setStarSprayPage}
//       />
//       <LeeHyunPage leeHyunPage={leeHyunPage} setLeeHyunPage={setLeeHyunPage} />
//       <PikaPage pikaPage={pikaPage} setPikaPage={setPikaPage} />
//       <GtqPage gtqPage={gtqPage} setGtqPage={setGtqPage} />
//       <LanguagePage
//         languagePage={languagePage}
//         setLanguagePage={setLanguagePage}
//       />
//       <div className={styles.background}>
//         {deg === 0 && <StarSpray />}
//         {deg === 45 && <LeeHyun />}
//         {deg === 90 && <Pika />}
//         {deg === 135 && <Gtq />}
//         {deg === 180 && <Language />}
//       </div>
//       <motion.div
//         ref={scope}
//         initial={{
//           transform: "translate(-50%, -50%) rotate(0deg)",
//         }}
//         className={styles.circle}
//       >
//         <div className={styles.circleMain}>
//           <div
//             className={styles.starSpray}
//             onClick={() => {
//               if (deg === 0) {
//                 flagRef.current?.scrollIntoView({
//                   behavior: "smooth",
//                 });
//                 setStarSprayPage(true);
//                 return;
//               }
//               flagRef.current?.scrollIntoView({
//                 behavior: "smooth",
//               });
//               animate(
//                 scope.current,
//                 {
//                   transform: `translate(-50%, -50%) rotate(0deg)`,
//                 },
//                 { duration: 0, ease: "easeInOut" }
//               );
//               setDeg(0);
//             }}
//           >
//             <span>STAR SPRAY</span>
//             <motion.span
//               initial={{ color: "#424245" }}
//               animate={deg === 0 ? { color: "#d464ad" } : { color: "#424245" }}
//               transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
//               className={styles.detail}
//             >
//               Brand Project
//             </motion.span>
//           </div>
//           <div
//             className={styles.leeHyun}
//             onClick={() => {
//               if (deg === 45) {
//                 flagRef.current?.scrollIntoView({
//                   behavior: "smooth",
//                 });
//                 setLeeHyunPage(true);
//                 return;
//               }
//               flagRef.current?.scrollIntoView({
//                 behavior: "smooth",
//               });
//               animate(
//                 scope.current,
//                 {
//                   transform: `translate(-50%, -50%) rotate(-45deg)`,
//                 },
//                 { duration: 0, ease: "easeInOut" }
//               );
//               setDeg(45);
//             }}
//           >
//             <div>
//               <span>LEEHYUN</span>
//               <span>SYSTEM</span>
//             </div>
//             <motion.span
//               initial={{ color: "#424245" }}
//               animate={deg === 45 ? { color: "#d464ad" } : { color: "#424245" }}
//               transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
//               className={styles.detail}
//             >
//               Web Project
//             </motion.span>
//           </div>
//           <div
//             className={styles.pika}
//             onClick={() => {
//               if (deg === 90) {
//                 flagRef.current?.scrollIntoView({
//                   behavior: "smooth",
//                 });
//                 setPikaPage(true);
//                 return;
//               }
//               flagRef.current?.scrollIntoView({
//                 behavior: "smooth",
//               });
//               animate(
//                 scope.current,
//                 {
//                   transform: `translate(-50%, -50%) rotate(-90deg)`,
//                 },
//                 { duration: 0, ease: "easeInOut" }
//               );
//               setDeg(90);
//             }}
//           >
//             <span>PIKA</span>
//             <motion.span
//               initial={{ color: "#424245" }}
//               animate={deg === 90 ? { color: "#d464ad" } : { color: "#424245" }}
//               transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
//               className={styles.detail}
//             >
//               Web Project
//             </motion.span>
//           </div>
//           <div
//             className={styles.gtq}
//             onClick={() => {
//               if (deg === 135) {
//                 flagRef.current?.scrollIntoView({
//                   behavior: "smooth",
//                 });
//                 setGtqPage(true);
//                 return;
//               }
//               flagRef.current?.scrollIntoView({
//                 behavior: "smooth",
//               });
//               animate(
//                 scope.current,
//                 {
//                   transform: `translate(-50%, -50%) rotate(-135deg)`,
//                 },
//                 { duration: 0, ease: "easeInOut" }
//               );
//               setDeg(135);
//             }}
//           >
//             <div>
//               <span>Design &</span>
//               <span>Analytics</span>
//             </div>
//             <motion.span
//               initial={{ color: "#424245" }}
//               animate={
//                 deg === 135 ? { color: "#d464ad" } : { color: "#424245" }
//               }
//               transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
//               className={styles.detail}
//             >
//               Certificate
//             </motion.span>
//           </div>
//           <div
//             className={styles.language}
//             onClick={() => {
//               if (deg === 180) {
//                 flagRef.current?.scrollIntoView({
//                   behavior: "smooth",
//                 });
//                 setLanguagePage(true);
//                 return;
//               }
//               flagRef.current?.scrollIntoView({
//                 behavior: "smooth",
//               });
//               animate(
//                 scope.current,
//                 {
//                   transform: `translate(-50%, -50%) rotate(-180deg)`,
//                 },
//                 { duration: 0, ease: "easeInOut" }
//               );
//               setDeg(180);
//             }}
//           >
//             <span>Language</span>
//             <motion.span
//               initial={{ color: "#424245" }}
//               animate={
//                 deg === 180 ? { color: "#d464ad" } : { color: "#424245" }
//               }
//               transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
//               className={styles.detail}
//             >
//               Certificate
//             </motion.span>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// }
