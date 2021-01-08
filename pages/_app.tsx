import '../styles/globals.scss'
import { AppProps } from 'next/app'
import Head from 'next/head'

import AppLayout from '../components/layout'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <AppLayout>
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Crimson+Pro" />
      </Head>
      <Component {...pageProps} />
    </AppLayout>
  )
}

export default MyApp
