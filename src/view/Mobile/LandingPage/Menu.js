import React from 'react'
import { NavLink } from 'react-router-dom'
import DotsBottom from '@/static/image/home/home-dots-top.png'
import DotsTop from '@/static/image/home/home-dots-bottom.png'
import { LandingRoutes } from './contants'

const index = props => {
  return (
    <div id="nav-content" className="mobile-landing__nav">
      <div className="mobile-landing__nav--menu">
        {LandingRoutes.map((nav, index) => (
          <NavLink
            key={index}
            onClick={props.handleToggleMenu}
            to={nav.path} className="heading-3 mobile-landing__nav--menu__item" activeClassName="mobile-landing__nav--menu__item--active"
            isActive={(match, location) => (location.pathname === '/' && nav.path === '/home') || location.pathname.includes(nav.path)}
          >
            {nav.label}
          </NavLink>
        ))}
      </div>

      <div className="mobile-landing__nav--dots__top">
        <img src={DotsTop} alt="home-dots-top"/>
      </div>

      <div className="mobile-landing__nav--dots__bottom">
        <img src={DotsBottom} alt="home-dots-bottom"/>
      </div>

    </div>
  )
}

export default index
