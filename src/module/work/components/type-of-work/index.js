import React from 'react'
import { NavLink } from 'react-router-dom'
import { PROJECT_BY_WORK } from '_constants/projects'
import { ensureArray } from '_util/helpers'
const TypeOfWork = () => {
  return (
    <div className="type-of-work">
      {ensureArray(PROJECT_BY_WORK).map((workGroup, index) => {
        const { projects = [], id, name, key } = workGroup || {}
        return (
          <section key={id || index}>
            <h3 className="title">
              <div className="title-left">
                <div>{name}</div>
                <div className="count">{workGroup?.projects?.length || 0}</div>
              </div>
              <NavLink to={`/work/${key}`}>
                <div className="title-right">View All</div>
              </NavLink>
            </h3>
            <div className="row scrollbar">
              {projects.map((project, index) => {
                return (
                  <div
                    key={project.name || index}
                    className="item col-sm-12 col-md-6 col-lg-4 col-12"
                  >
                    <img alt={project.name} src={project.image} />
                  </div>
                )
              })}
            </div>
          </section>
        )
      })}
    </div>
  )
}

export default TypeOfWork
