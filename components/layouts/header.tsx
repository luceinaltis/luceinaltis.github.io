import { NextComponentType } from 'next'
import { useEffect, useRef, useCallback } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import styles from '../../styles/layouts/Header.module.scss'

const Header: NextComponentType = () => {
  const scrollY = useRef(0)
  const prevScrollY = useRef(0)
  const headerRef = useRef<HTMLHeadingElement>(null)

  const throttle = useRef(false)
  const router = useRouter()

  const scrollListener = useCallback((): void => {
    if (null != headerRef.current) {
      let nextHeaderMarginTop = 0
      scrollY.current = window.pageYOffset

      if (scrollY.current < 10) {
        headerRef.current.style.boxShadow = 'none'
        if (router.pathname !== '/log/[id]') {
          headerRef.current.style.background = '#f8f9fb'
        }
      } else {
        headerRef.current.style.boxShadow = 'rgba(0, 0, 0, 0.08) 0px 0px 8px'
        headerRef.current.style.background = '#ffffff'
      }

      const height = headerRef.current.getBoundingClientRect().height
      const headerMarginTop = parseInt(headerRef.current.style.marginTop)

      if (prevScrollY.current < scrollY.current && headerMarginTop <= 0) {
        // 아래 스크롤
        nextHeaderMarginTop = headerMarginTop - (scrollY.current - prevScrollY.current)
      } else if (headerMarginTop < -height) {
        // 위 스크롤(아예 안보일 때)
        nextHeaderMarginTop = -height
      } else if (headerMarginTop < 0) {
        // 위 스크롤(조금 보일 때)
        nextHeaderMarginTop = headerMarginTop + (-scrollY.current + prevScrollY.current)
        if (nextHeaderMarginTop > 0) {
          nextHeaderMarginTop = 0
        }
      }

      headerRef.current.style.marginTop = `${nextHeaderMarginTop}px`
      prevScrollY.current = scrollY.current
    }
  }, [])

  const throttledListener = useCallback((): void => {
    if (!throttle.current) {
      setTimeout(() => {
        scrollListener()
        throttle.current = false
      }, 8)
    }
    throttle.current = true
  }, [])

  useEffect(() => {
    if (headerRef.current != null) {
      headerRef.current.style.marginTop = '0px'
    }

    if (null != headerRef.current && router.pathname !== '/log/[id]') {
      headerRef.current.style.background = '#f8f9fb'
    }
  }, [router.pathname])

  useEffect(() => {
    window.addEventListener('scroll', throttledListener)
    return () => {
      window.removeEventListener('scroll', throttledListener)
    }
  }, [])

  return (
    <>
      <header className={styles.header_fixed} ref={headerRef}>
        <div className={`home__container`}>
          <div className={styles.logo__wrapper}>
            <Link href="/">
              <a>
                <div className={styles.logo}>luce.log</div>
              </a>
            </Link>
          </div>
          <div>
            <div className={styles.categories__wrapper}>
              <Link href="/">
                <a className={router.pathname === '/' ? styles.active : styles.inactive}>기록</a>
              </Link>
              <Link href="/tags">
                <a className={router.pathname === '/tags' ? styles.active : styles.inactive}>
                  태그 목록
                </a>
              </Link>
              <Link href="/about">
                <a className={router.pathname === '/about' ? styles.active : styles.inactive}>
                  소개
                </a>
              </Link>
              <span
                className={styles.desktop}
                style={
                  router.pathname === '/'
                    ? { left: `calc(2.25rem)`, width: '2.5rem' }
                    : router.pathname === '/tags'
                    ? { left: 'calc(7rem + 1rem)', width: '5rem' }
                    : router.pathname === '/about'
                    ? { left: 'calc(14rem + 2.25rem)', width: '2.5rem' }
                    : { left: '-100%' }
                }
              />
              <span
                className={styles.mobile}
                style={
                  router.pathname === '/'
                    ? { left: `calc(1.5rem)`, width: '2rem' }
                    : router.pathname === '/tags'
                    ? { left: 'calc(5rem + .5rem)', width: '4rem' }
                    : router.pathname === '/about'
                    ? { left: 'calc(10rem + 1.5rem)', width: '2rem' }
                    : { left: '-100%' }
                }
              />
            </div>
          </div>
        </div>
      </header>
      <header className={styles.header} />
    </>
  )
}

export default Header
