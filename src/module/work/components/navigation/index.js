import React from 'react'
import { NavLink } from 'react-router-dom'
import { WorkRoutes } from '_module/work/route'

const WorkNavigation = () => {
  return (
    <div className="work-navigation">
      <h2 className="work-navigation__title">Work</h2>
      <div className="work-navigation__container">
        {WorkRoutes.map((route) => {
          return (
            <NavLink
              key={route.path}
              activeClassName="work-navigation__container__item--active"
              className="work-navigation__container__item"
              to={route.path}
              exact={route.exact}
              isActive={(match, location) => {
                if (match) return true

                if (
                  ['/work', '/work/'].includes(location.pathname) &&
                  route.path === '/work/type-of-client'
                ) {
                  return true
                }

                if (location.pathname.includes(route.path)) {
                  return true
                }
              }}
            >
              <span key={route.path}>{route.label}</span>
            </NavLink>
          )
        })}
      </div>
    </div>
  )
}

export default WorkNavigation
