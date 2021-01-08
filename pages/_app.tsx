import '../styles/globals.scss'
import { AppProps } from 'next/app'

import AppLayout from '../components/layout'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  )
}

export default MyApp
