/**
 * File name: src\layout\header\index.js
 * Created by Visual studio code
 * User: Danh Le / danh.le@dinovative.com
 * Date: 2020-04-12 23:18:55
 */

import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { NAV } from './constants'
import { ensureArray } from '_util/helpers'
import clsx from 'clsx'

import SearchIcon from '_static/svg/search.svg'
import Logo from '_static/svg/logo.svg'

export default function Header () {
  const [ collapse, setCollapse ] = useState(true)

  const toggleCollapse = () => {
    setCollapse(!collapse)
  }

  const handleClickLink = e => {
    e && e.stopPropagation()
    setCollapse(true)
  }

  return (
    <div className="header__wrap">
      <div className="header">
        <Link className="header__logo" to="/">
          <img src={Logo} alt="logo" />
        </Link>

        <div
          className={clsx('header__toggler', collapse && 'show')}
          onClick={toggleCollapse}
        >
          <div className="icon-bar" />
          <div className="icon-bar" />
          <div className="icon-bar" />
          <div className="icon-bar" />
        </div>

        <div className={clsx('header__collapse', collapse && 'show')}>
          <ul className="header__nav">
            {
              ensureArray(NAV).map(({ key, label, path }) => (
                <li onClick={handleClickLink} key={key}>
                  <NavLink activeClassName="active" to={path}>
                    {label}
                  </NavLink>
                </li>
              ))
            }
          </ul>

          <div className="header__search">
            <img src={SearchIcon} alt="search" />
          </div>
        </div>
      </div>
      <div className="header__fake" />
    </div>
  )
}
