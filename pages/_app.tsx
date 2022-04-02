import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MoralisProvider } from "react-moralis";
import { TinderProvider } from "../context/TinderContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MoralisProvider
      serverUrl="https://buaai0nj4ttx.usemoralis.com:2053/server"
      appId="0GJxnyxLAUzUpVBOtquzyPaZHLaAQxUFw8rmaLyr"
    >
      <TinderProvider>
        <Component {...pageProps} />
      </TinderProvider>
    </MoralisProvider>
  );
}

export default MyApp;
