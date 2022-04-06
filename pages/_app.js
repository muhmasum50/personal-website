import Head from 'next/head'
import { ThemeProvider } from 'next-themes'
import '../styles/globals.css'
import 'aos/dist/aos.css';

function MyApp({ Component, pageProps }) {
  return(
    <>
      <Head>
        <title>Muhammad Ma'sum - محمد معصوم </title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
        <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet"/>
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
        <link rel="shortcut icon" href="/img/sun.png" />

      </Head>

      <ThemeProvider attribute="class">
      <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
