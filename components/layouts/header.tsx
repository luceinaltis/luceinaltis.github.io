import { NextComponentType } from 'next'
import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'

import styles from '../../styles/layouts/Header.module.scss'

const Header: NextComponentType = () => {
  const scrollY = useRef(0)
  const prevScrollY = useRef(0)
  const headerRef = useRef<HTMLHeadingElement>(null)
  const [headerMarginTop, setheaderMarginTop] = useState(0)
  const throttle = useRef(false)

  const router = useRouter()

  useEffect(() => {
    if (null != headerRef.current && router.pathname === '/') {
      headerRef.current.style.background = 'rgb(248, 249, 250)'
    }

    const scrollListener = (): void => {
      if (null != headerRef.current) {
        scrollY.current = window.pageYOffset

        if (scrollY.current < 10) {
          setheaderMarginTop(0)
        }

        if (scrollY.current < 5) {
          headerRef.current.style.boxShadow = 'none'
          if (router.pathname === '/') {
            headerRef.current.style.background = 'rgb(248, 249, 250)'
          }
        } else {
          headerRef.current.style.boxShadow = 'rgba(0, 0, 0, 0.08) 0px 0px 8px'
          headerRef.current.style.background = '#ffffff'
        }

        const height = headerRef.current.getBoundingClientRect().height

        if (prevScrollY.current < scrollY.current && headerMarginTop <= 0) {
          // 아래 스크롤
          setheaderMarginTop(headerMarginTop - (scrollY.current - prevScrollY.current))
        } else if (headerMarginTop < -height) {
          // 위 스크롤(아예 안보일 때)
          setheaderMarginTop(-height)
        } else if (headerMarginTop < 0) {
          // 위 스크롤(조금 보일 때)
          let nextHeaderMarginTop = headerMarginTop + (-scrollY.current + prevScrollY.current)
          if (nextHeaderMarginTop > 0) {
            nextHeaderMarginTop = 0
          }
          setheaderMarginTop(nextHeaderMarginTop)
        }

        if (
          prevScrollY.current < scrollY.current &&
          window.innerHeight + scrollY.current >= document.documentElement.scrollHeight - height / 2
        ) {
          setheaderMarginTop(-height)
          if (headerRef && headerRef.current) {
            headerRef.current.style.marginTop = `-${height}px`
          }
        }

        headerRef.current.style.marginTop = `${headerMarginTop}px`
        prevScrollY.current = scrollY.current
      }
    }

    const throttledListener = (): void => {
      if (!throttle.current) {
        setTimeout(() => {
          scrollListener()
          throttle.current = false
        }, 10)
      }
      throttle.current = true
    }

    window.addEventListener('scroll', throttledListener)
    return () => {
      window.removeEventListener('scroll', throttledListener)
    }
  }, [headerMarginTop])

  return (
    <>
      <header className={styles.header_fixed} ref={headerRef}>
        <div className={`home__container`}>
          <div>
            <a href="/">
              <span>luce.log</span>
            </a>
          </div>
        </div>
      </header>
      <header className={styles.header} />
    </>
  )
}

export default Header
