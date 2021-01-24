import { NextComponentType } from 'next'
import { useEffect, useRef, useCallback, useState, useMemo } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import styles from '../../styles/layouts/Header.module.scss'

const Header: NextComponentType = () => {
  const scrollY = useRef(0)
  const prevScrollY = useRef(0)
  const headerRef = useRef<HTMLHeadingElement>(null)
  const [headerMarginTop, setHeaderMarginTop] = useState(0)
  // const throttle = useRef(false)

  const router = useRouter()

  // const throttledListener = useCallback((): void => {
  //   if (!throttle.current) {
  //     setTimeout(() => {
  //       scrollListener()
  //       throttle.current = false
  //     }, 20)
  //   }
  //   throttle.current = true
  // }, [])

  useEffect(() => {
    if (headerRef.current != null) {
      setHeaderMarginTop(0)
    }

    if (null != headerRef.current && router.pathname !== '/log/[id]') {
      headerRef.current.style.background = '#f8f9fb'
    }
  }, [router.pathname])

  useEffect(() => {
    const scrollListener = (): void => {
      if (null != headerRef.current) {
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
        let nextHeaderMargin = 0
        if (prevScrollY.current < scrollY.current && headerMarginTop <= 0) {
          // 아래 스크롤
          nextHeaderMargin = headerMarginTop - (scrollY.current - prevScrollY.current)
        } else if (headerMarginTop < -height) {
          // 위 스크롤(아예 안보일 때)
          nextHeaderMargin = -height
        } else if (headerMarginTop < 0) {
          // 위 스크롤(조금 보일 때)
          nextHeaderMargin = headerMarginTop + (-scrollY.current + prevScrollY.current)
          if (nextHeaderMargin > 0) {
            nextHeaderMargin = 0
          }
        }

        const start = Date.now()
        const timer = requestAnimationFrame(function animateMargin(timestamp) {
          const interval = Date.now() - start

          if (headerRef.current) {
            headerRef.current.style.marginTop = `${nextHeaderMargin}px`
          }
          // football.style.top = interval / 3 + 'px' // move element down

          if (interval < 10) requestAnimationFrame(animateMargin) // queue request for next frame
        })

        prevScrollY.current = scrollY.current
      }
    }

    window.addEventListener('scroll', scrollListener)
    return () => {
      window.removeEventListener('scroll', scrollListener)
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
