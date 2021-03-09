import React from 'react'
import { NavLink } from 'react-router-dom'
import { ensureArray } from '_util/helpers'
import { PROJECTS_BY_CLIENT } from '_constants/projects'

const TypeOfClient = () => {
  return (
    <div className="type-of-client">
      {PROJECTS_BY_CLIENT.map((clientGroup, index) => {
        const { projects = [], id, name, key } = clientGroup || {}
        return (
          <section key={id || index}>
            <h3 className="title">
              <div className="title-left">
                <div>{name}</div>
                <div className="count">{projects.length || 0}</div>
              </div>
              <NavLink to={`/work/${key}`}>
                <div className="title-right">View All</div>
              </NavLink>
            </h3>
            <div className="row scrollbar">
              {ensureArray(projects).map((project, index) => {
                return (
                  <div
                    key={project.name || index}
                    className="item col-sm-12 col-md-6 col-lg-4 col-12"
                  >
                    <img alt={project.name} src={project.src} />
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

export default TypeOfClient
