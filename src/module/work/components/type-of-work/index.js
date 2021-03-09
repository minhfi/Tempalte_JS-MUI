import React from 'react'
import { NavLink } from 'react-router-dom'
import { PROJECT_BY_WORK } from '_constants/projects'
import { ensureArray } from '_util/helpers'
import ReactSlick from '_components/react-slick'

const TypeOfWork = () => {
  return (
    <div className="type-of-work">
      {ensureArray(PROJECT_BY_WORK).map((workGroup, index) => {
        const { projects = [], name, key } = workGroup || {}
        const workLink = `/work/${key}`
        return (
          <section key={key || index}>
            <h3 className="title">
              <NavLink to={workLink} className="title-left">
                <div>{name}</div>
                <div className="count">{workGroup?.projects?.length || 0}</div>
              </NavLink>
              <NavLink to={workLink}>
                <div className="title-right">View All</div>
              </NavLink>
            </h3>
            <ReactSlick>
              {projects.map((project, index) => {
                return (
                  <NavLink to={project.link} key={project.name || index} >
                    <img className="image" alt={project.name} src={project.image} />
                  </NavLink>
                )
              })}
            </ReactSlick>
          </section>
        )
      })}
    </div>
  )
}

export default TypeOfWork
