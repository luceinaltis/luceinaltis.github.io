import { NextComponentType } from 'next'

import Header from '../components/layouts/header'
import Footer from '../components/layouts/footer'

const Layout: NextComponentType = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout
