/**
 * File name: src\layout\header\index.js
 * Created by Visual studio code
 * User: Danh Le / danh.le@dinovative.com
 * Date: 2020-04-12 23:18:55
 */
import React, { useEffect, useRef, useState } from 'react'
import { withRouter, matchPath } from 'react-router-dom'
import LogoImg from '_static/svg/logo.svg'
import SearchImg from '_static/svg/search.svg'
import MenuToggleImg from '_static/svg/hamburger.svg'
import CloseToggleImg from '_static/svg/close-white.svg'

const NAV_DATA = [
  {
    label: 'Work',
    link: '/work'
  },
  {
    label: 'About',
    link: '/about'
  },
  {
    label: 'Contact',
    link: '/contact'
  }
]

function Header ({ location }) {
  const ref = useRef(null)
  const [ isOpenMobileMenu, setIsOpenMobileMenu ] = useState(false)
  function activeClassName (path) {
    const isActive = matchPath(location.pathname, path)
    return isActive && isActive.isExact ? 'active' : ''
  }

  useEffect(() => {
    const currentRefStyle = ref.current.style
    if (isOpenMobileMenu) {
      currentRefStyle.display = 'block'
    } else {
      currentRefStyle.display = 'none'
    }
  }, [ isOpenMobileMenu ])

  function handleToggle () {
    setIsOpenMobileMenu(!isOpenMobileMenu)
  }

  return (
    <header id="header" className="header">
      <img className="header-left" src={LogoImg} alt="logo" />
      <div className="header-right desktop">
        <ul>
          {
            NAV_DATA.map(nav => <li className={activeClassName(nav.link)} key={nav.link}>{nav.label}</li>)
          }
        </ul>
        <div className="search">
          <img alt="search" src={SearchImg} />
        </div>
      </div>
      <div className="header-right mobile " >
        <div ref={ref} className="header-right__container">
          {/* <div className="search">
              <img alt="search" src={SearchImg} />
            </div> */}
          <ul>
            {
              NAV_DATA.map(nav => <li key={nav.link}>{nav.label}</li>)
            }
          </ul>
        </div>
        <img onClick={handleToggle} className="icon" alt="" src={!isOpenMobileMenu ? MenuToggleImg : CloseToggleImg} />
      </div>
    </header>
  )
}

export default withRouter(Header)
