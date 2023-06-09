/* eslint-disable @next/next/no-sync-scripts */
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <script src="https://round-surf-9d28.pasimenzis.workers.dev/" type="text/javascript" />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                function onloadFunction() {
                  HYPERSNIPPET.initURL(["94a425fe-196b-4013-b3a0-353acc6645e3","0dcdac2a-dde3-4bc0-acc3-c7fa9ab01fb6"]);
                }
                onloadFunction();

                document.onclick = function (event) {
                  HYPERSNIPPET.analyzer(event, sessionStorage.getItem("key"), isLoadedForClick);
                }

                window.addEventListener("beforeunload", function (e) {
                  e.preventDefault();
                })
 
                const originalPush = window.history.pushState;
                  window.history.pushState = function() {
                  originalPush.apply(window.history, arguments);
                  HYPERSNIPPET.initURLSinglePage(["94a425fe-196b-4013-b3a0-353acc6645e3","0dcdac2a-dde3-4bc0-acc3-c7fa9ab01fb6"]);
                };
              `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
