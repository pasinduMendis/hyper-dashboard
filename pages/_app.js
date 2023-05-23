import '../styles/globals.css'
import { SSRProvider } from "@react-aria/ssr";
/* import 'bootstrap/dist/css/bootstrap.css'; */
/* import '../styles/bootstrap.min.css' */
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk&display=swap" rel="stylesheet" />

function MyApp({ Component, pageProps }) {
  return (
      <SSRProvider>
        <Component {...pageProps} />
      </SSRProvider>
  )
}

export default MyApp
