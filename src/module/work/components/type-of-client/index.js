import React from 'react'
import { NavLink } from 'react-router-dom'
import { PROJECTS_BY_CLIENT } from '_constants/projects'

const TypeOfClient = () => {
  return (
    <div className="type-of-client row">
      {PROJECTS_BY_CLIENT.map((clientGroup, index) => {
        const { projects = [], id, name, key } = clientGroup || {}
        return (
          <NavLink to={`/client/${key}`} className="item col-sm-12 col-md-6 col-lg-4 col-12" key={id || index}>
            <h3 className="title">
              <div className="title-left">
                <div className="name">{name}</div>
                <div className="count">{projects.length || 0}</div>
              </div>
            </h3>
            <div>
              <img alt={projects[0]?.name} src={projects[0]?.image} />
            </div>
          </NavLink>
        )
      })}
    </div>
  )
}

export default TypeOfClient
