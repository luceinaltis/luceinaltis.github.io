import { NextComponentType } from 'next'

import styles from '../../styles/layouts/Footer.module.scss'

const Footer: NextComponentType = () => {
  return (
    <footer className={styles.footer}>
      <div>Copyright {new Date().getFullYear()}. luce.log. All rights reserved.</div>
    </footer>
  )
}

export default Footer
