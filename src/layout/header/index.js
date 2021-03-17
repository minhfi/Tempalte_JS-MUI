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

import { ReactComponent as SearchIcon } from '_static/svg/search.svg'
import { ReactComponent as Logo } from '_static/svg/logo.svg'

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
      // Scroll down and hide header navigation
      nav.classList.add('hide')
      nav.classList.remove('show')
      nav.classList.remove('sticky')
      nav.classList.remove('reverse')
    } else if (currentScroll < navHeight) {
      // Scroll down and hide header navigation
      nav.classList.add('show')
      nav.classList.remove('hide')
      nav.classList.remove('sticky')
      nav.classList.remove('reverse')
    } else if (currentScroll > navHeight) {
      // Scroll up and show reverse header navigation
      nav.classList.add('show')
      nav.classList.add('sticky')
      nav.classList.add('reverse')
      nav.classList.remove('hide')
    }
    // else {
    //   nav.classList.add('hide')
    //   nav.classList.remove('show')
    //   nav.classList.remove('sticky')
    //   nav.classList.remove('reverse')
    // }

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
          {/* <img src={Logo} alt="logo" /> */}
          <Logo />
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
            <SearchIcon />
          </div>
        </div>
      </div>
      <div className="header__fake" />
    </div>
  )
}
