// pages/_app.js
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "next/font/local";

export const myFont1 = localFont({
  src: "../../public/font/Strawford-Bold.otf",
  variable: "--Strawford-Bold",
  // weight: "500",
});

export const myFont2 = localFont({
  src: "../../public/font/Strawford-Regular.otf",
  variable: "--Strawford-Regular",
  weight: "900",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${myFont1.className} ${myFont2.className}`}>
      {/* <Global /> */}
      <Component {...pageProps} />
    </main>
  );
}
