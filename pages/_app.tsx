import "../styles/globals.css";
import type { AppProps } from "next/app";
import TemplatesContextProvider from "../store/templates-context";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TemplatesContextProvider>
      <Component {...pageProps} />
    </TemplatesContextProvider>
  );
}

export default MyApp;
