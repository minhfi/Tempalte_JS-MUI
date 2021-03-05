/**
 * File name: src\layout\header\index.js
 * Created by Visual studio code
 * User: Danh Le / danh.le@dinovative.com
 * Date: 2020-04-12 23:18:55
 */
import React, { useRef } from 'react'
import { withRouter } from 'react-router-dom'
import LogoImg from '_static/svg/logo.svg'
import SearchImg from '_static/svg/search.svg'
import MenuToggleImg from '_static/svg/hamburger.svg'

function Header () {
  const ref = useRef(null)
  // function activeClassName (path) {
  //   const isActive = matchPath(this.props.location.pathname, path)
  //   return isActive && isActive.isExact ? 'active' : ''
  // }

  function handleToggle () {
    const currentRef = ref.current.style
    if (currentRef.display === 'block') {
      currentRef.display = 'none'
    } else {
      currentRef.display = 'block'
    }
  }

  return (
    <header id="header" className="header">
      <img className="header-left" src={LogoImg} alt="logo" />
      <div className="header-right desktop">
        <ul>
          <li className="active">
            Work
          </li>
          <li>
            About
          </li>
          <li>
            Contact
          </li>
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
            <li className="active">
              Work
            </li>
            <li>
              About
            </li>
            <li>
              Contact
            </li>
          </ul>
        </div>
        <img onClick={handleToggle} className="icon" alt="" src={MenuToggleImg} />
      </div>
    </header>
  )
}

export default withRouter(Header)
