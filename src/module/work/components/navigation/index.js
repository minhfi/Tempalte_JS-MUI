import React from 'react'
import { NavLink } from 'react-router-dom'
import { WorkRoutes } from '_module/work/route'

const WorkNavigation = () => {
  return (
    <div className="work-navigation">
      <h2 className="work-navigation__title">Work</h2>
      <div className="work-navigation__container">
        {WorkRoutes.map((item) => {
          return (
            <NavLink
              key={item.path}
              activeClassName="work-navigation__container__item--active"
              className="work-navigation__container__item"
              to={item.path}
              exact
            >
              <span key={item.path}>{item.label}</span>
            </NavLink>
          )
        })}
      </div>
    </div>
  )
}

export default WorkNavigation
