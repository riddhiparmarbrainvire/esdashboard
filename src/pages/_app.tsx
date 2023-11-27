// pages/_app.js
import "../styles/globals.css";

function App({ Component, pageProps }: any) {
  const getLayout = Component.getLayout || ((page: any) => page);

  return getLayout(<Component {...pageProps} />);
}

export default App;
