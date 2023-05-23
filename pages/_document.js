/* eslint-disable @next/next/no-sync-scripts */
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <script src="https://api.hypertarget.ai/" type="text/javascript" />
          <script
            dangerouslySetInnerHTML={{
              __html: `
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
