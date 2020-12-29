import { NextComponentType } from 'next'

import styles from '../../styles/layouts/Footer.module.scss'

const Footer: NextComponentType = () => {
  return (
    <footer className={styles.footer}>
      {/* <hr /> */}
      <div>Copyright 2020. luce.log. All rights reserved.</div>
    </footer>
  )
}

export default Footer
