import type { Metadata } from "next";
import "./globals.css";
import { Noto_Sans_KR } from "next/font/google";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Lee GeonHo | Portfolio",
  description: "Lee GeonHo Portfolio",
};

const font = Noto_Sans_KR({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

// const helvetica = localFont({
//   src: [
//     {
//       path: "../../public/fonts/Helvetica.ttf",
//       weight: "400",
//       style: "normal",
//     },
//     {
//       path: "../../public/fonts/Helvetica-Bold.ttf",
//       weight: "700",
//       style: "normal",
//     },
//   ],
// });

const sfPro = localFont({
  src: [
    {
      path: "../../public/fonts/SFPRODISPLAYREGULAR.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/SFPRODISPLAYMEDIUM.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/SFPRODISPLAYBOLD.otf",
      weight: "700",
      style: "normal",
    },
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${sfPro.className} ${font.className}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
