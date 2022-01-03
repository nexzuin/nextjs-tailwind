import '../styles/globals.css'
import 'boxicons/css/boxicons.min.css'
import Head from 'next/head'
import { AppWrapper } from '@/context/state'; // import based on where you put it

function Application({ Component, pageProps }) {
  return (
    <AppWrapper>
      <Head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css"/>
      </Head>
      <Component {...pageProps} />
    </AppWrapper>
  )
}

export default Application