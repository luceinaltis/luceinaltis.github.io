import '../styles/globals.scss'
import '../public/prism.css'

import { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import AppLayout from '../components/layout'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const router = useRouter()
  useEffect(() => {
    if (router.pathname === '/log/[id]') {
      document.body.style.background = 'white'
    } else {
      document.body.style.background = '#f8f9fb'
    }
  }, [router.pathname])

  return (
    <AppLayout>
      <Head>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.1/css/all.css"
          integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Crimson+Pro" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={`https://www.luce.today${router.asPath}`} />
      </Head>
      <Component {...pageProps} />
    </AppLayout>
  )
}

export default MyApp
