import '../styles/globals.css'
import '../styles/media.css'
import Head from 'next/head'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return(
  <>
  <Head>
   <title>Architect website</title>
   <meta name="description" content="Architect website made by next js" />
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"></link>
   <link href="https://fonts.googleapis.com/css2?family=Baloo+Da+2:wght@400;500;700&display=swap" rel="stylesheet"></link>
   <link rel="shortcut icon" href="/home.ico" />
  </Head>
  <Component {...pageProps} />
  </>
  )
}
export default MyApp
