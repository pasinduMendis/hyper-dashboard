/* eslint-disable @next/next/no-sync-scripts */
import React from 'react';
import Head from 'next/head';

const MyApp = ({ Component, pageProps }) => {
  return (
    <React.Fragment>
      <Head>
        <script
          type="text/javascript"
          src="https://api.hypertarget.ai/"
        />
        <script type="text/javascript">
          {`
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
          `}
        </script>
      </Head>
      <Component {...pageProps} />
    </React.Fragment>
  );
};

export default MyApp;
