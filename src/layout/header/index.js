/**
 * File name: src\layout\header\index.js
 * Created by Visual studio code
 * User: Danh Le / danh.le@dinovative.com
 * Date: 2020-04-12 23:18:55
 */

import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { NAV } from './constants'
import { ensureArray } from '@/util/helpers'
import clsx from 'clsx'

import SearchIcon from '_static/svg/search.svg'
import Logo from '_static/svg/logo.svg'

export default function Header() {
  const [collapse, setCollapse] = useState(true)
  const [lastScroll, setLastScroll] = useState(0)

  const toggleCollapse = () => {
    setCollapse(!collapse)
  }

  const handleClickLink = (e) => {
    e && e.stopPropagation()
    setCollapse(true)
  }

  const scrollHandler = () => {
    const nav = document.getElementById('my-header')
    const navHeight = nav?.getBoundingClientRect().height
    const currentScroll = document.documentElement.scrollTop

    if (currentScroll >= lastScroll && currentScroll > navHeight) {
      // Scroll down
      // and hide reverse header navigation
      nav.classList.remove('show')
      nav.classList.remove('sticky')
      nav.classList.remove('slide-down-in')
      nav.classList.add('slide-up-out')
    }

    if (currentScroll >= lastScroll && currentScroll < navHeight) {
      // Scroll down
      // and show orange header navigation
      // and hide reverse header navigation
      nav.classList.remove('reverse')
      nav.classList.remove('sticky')
      nav.classList.remove('hide')
      nav.classList.add('show')
    }

    if (currentScroll < lastScroll && currentScroll > navHeight) {
      // Scroll up
      // and show reverse header navigation
      nav.classList.remove('hide')
      nav.classList.remove('slide-up-out')
      nav.classList.add('slide-down-in')
      nav.classList.add('reverse')
      nav.classList.add('sticky')
      nav.classList.add('show')
    }

    if (currentScroll < lastScroll && currentScroll < navHeight) {
      // Scroll up
      // and hide reverse header navigation
      // and show orange header navigation
      nav.classList.remove('sticky')
      nav.classList.remove('reverse')
      nav.classList.remove('slide-down-in')
      nav.classList.add('slide-up-out')
    }

    setLastScroll(currentScroll <= 0 ? 0 : currentScroll)
  }

  useEffect(() => {
    // Handle scroll event
    window.addEventListener('scroll', scrollHandler)
    return () => {
      window.removeEventListener('scroll', scrollHandler)
    }
  }, [lastScroll])

  return (
    <div className="header__wrap" id="my-header">
      <div className="header my-container">
        <Link className="header__logo" to="/">
          <img src={Logo} />
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
            <img src={SearchIcon} />
          </div>
        </div>
      </div>
      <div className="header__fake" />
    </div>
  )
}
