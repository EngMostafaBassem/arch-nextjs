import '../styles/globals.css'
import '../styles/media.css'
import Head from 'next/head'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return(
  <>
  <Head>
   <meta name="description" content="Architect website made by next js" />
  </Head>
  <Component {...pageProps} />
  </>
  )
}
export default MyApp
