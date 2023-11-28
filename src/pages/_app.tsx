// pages/_app.js
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "next/font/local";

const myFont = localFont({
  src: "../../public/font/strawford-regular-webfont.woff2",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={myFont.className}>
      {/* <Global /> */}
      <Component {...pageProps} />
    </main>
  );
}
