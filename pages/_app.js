/* eslint-disable @next/next/no-sync-scripts */
import { useEffect } from 'react';
import '../styles/globals.css'
import { SSRProvider } from "@react-aria/ssr";
import Head from 'next/head';
/* import 'bootstrap/dist/css/bootstrap.css'; */
/* import '../styles/bootstrap.min.css' */
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk&display=swap" rel="stylesheet" />


function MyApp({ Component, pageProps }) {

  useEffect(() => {
    function onloadFunction() {
      HYPERSNIPPET.initURL(["961fcca7-e6e2-4266-918e-afdbcbbcbe7f","3f5e7c34-9b86-48c6-b2d4-cc5a55dfaccd"]);
    }
    onloadFunction();

    document.onclick = function (event) {
      HYPERSNIPPET.analyzer(event, sessionStorage.getItem("key"), isLoadedForClick);
    }

    window.addEventListener("beforeunload", function (e) {
      e.preventDefault();
    })
  }, []);

  return (
      <SSRProvider>
         <Head>
        <script src="https://api.hypertarget.ai/" type="text/javascript" />
      </Head>
        <Component {...pageProps} />
      </SSRProvider>
  )
}

export default MyApp
