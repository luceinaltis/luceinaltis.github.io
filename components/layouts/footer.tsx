import { NextComponentType } from 'next'

import styles from '../../styles/layouts/Footer.module.scss'

const Footer: NextComponentType = () => {
  return (
    <footer className={styles.footer}>
      <div>copyright {new Date().getFullYear()}. luce.log. all rights reserved.</div>
    </footer>
  )
}

export default Footer
