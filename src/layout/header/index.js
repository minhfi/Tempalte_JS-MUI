/**
 * File name: src\layout\header\index.js
 * Created by Visual studio code
 * User: Danh Le / danh.le@dinovative.com
 * Date: 2020-04-12 23:18:55
 */

import React, { useEffect, useState, useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ensureArray } from '@/util/helpers'
import { NAV } from './constants'
import clsx from 'clsx'

import Logo from '@/static/svg/logo.svg'
import SearchIcon from '@/static/svg/search-white.svg'

export default function Header() {
  const headerRef = useRef(null)
  const lastScrollRef = useRef(0)
  const [collapse, setCollapse] = useState(true)

  const toggleCollapse = () => {
    setCollapse(!collapse)
  }

  const handleClickLink = (e) => {
    e && e.stopPropagation()
    setCollapse(true)
  }

  const scrollHandler = () => {
    if (document.body.style.overflow === 'hidden') {
      return
    }

    const nav = headerRef.current
    const lastScroll = lastScrollRef.current
    const navHeight = nav?.getBoundingClientRect().height
    const currentScroll = window.scrollY

    if (currentScroll >= lastScroll && currentScroll > navHeight) {
      // Scroll down
      // and hide reverse header navigation
      nav.classList.remove('show', 'sticky', 'slide-down-in')
      nav.classList.add('slide-up-out')
    }

    if (currentScroll >= lastScroll && currentScroll < navHeight) {
      // Scroll down
      // and show orange header navigation
      // and hide reverse header navigation
      nav.classList.remove('reverse', 'sticky', 'hide')
      nav.classList.add('show')
    }

    if (currentScroll < lastScroll && currentScroll > navHeight) {
      // Scroll up
      // and show reverse header navigation
      nav.classList.remove('hide', 'slide-up-out')
      nav.classList.add('slide-down-in', 'reverse', 'sticky', 'show')
    }

    if (currentScroll < lastScroll && currentScroll < navHeight) {
      // Scroll up
      // and hide reverse header navigation
      // and show orange header navigation
      nav.classList.remove('sticky', 'reverse', 'slide-down-in')
      nav.classList.add('slide-up-out')
    }

    lastScrollRef.current = currentScroll
  }

  useEffect(() => {
    if (!collapse) {
      document.body.style.overflow = 'hidden'
      // const isOverflowY = document.body.scrollHeight > document.body.clientHeight
      // isOverflowY && (document.body.style.paddingRight = '15px')
      return
    }

    document.body.style.overflow = ''
    document.body.style.paddingRight = ''
  }, [collapse])

  useEffect(() => {
    // Handle scroll event
    window.addEventListener('scroll', scrollHandler)
    return () => {
      window.removeEventListener('scroll', scrollHandler)
    }
  }, [])

  return (
    <div className="header__wrap">
      <div className="header" ref={headerRef}>
        <div className="header__container my-container">
          <Link className="header__logo" to="/">
            <img id="header-logo" src={Logo} />
          </Link>

          <div
            className={clsx('header__toggler', !collapse && 'show')}
            onClick={toggleCollapse}
          >
            <div className="icon-bar" />
            <div className="icon-bar" />
            <div className="icon-bar" />
            <div className="icon-bar" />
          </div>

          <div className={clsx('header__collapse', !collapse && 'show')}>
            <ul className="header__nav">
              {ensureArray(NAV).map(({ key, label, path }) => (
                <li onClick={handleClickLink} key={key}>
                  <NavLink activeClassName="active" to={path}>
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className="header__search">
              <img id="header-search" src={SearchIcon} />
            </div>
          </div>
        </div>
      </div>
      <div className={clsx('header__fake', !collapse && 'show')} onClick={() => setCollapse(true)}/>
    </div>
  )
}
