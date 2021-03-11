import React from 'react'
import { Link } from 'react-router-dom'
import { PROJECTS_BY_CLIENT } from '_constants/projects'

const TypeOfClient = () => {
  return (
    <div className="type-of-client row">
      {PROJECTS_BY_CLIENT.map((clientGroup, index) => {
        const { projects = [], id, name, key } = clientGroup || {}
        return (
          <Link
            to={`/work/type-of-client/${key}`}
            className="item col-sm-12 col-md-6 col-lg-4 col-12"
            key={id || index}
          >
            <h3 className="title">
              <div className="title-left">
                <div className="name">{name}</div>
                <div className="count">{projects.length || 0}</div>
              </div>
            </h3>
            <div>
              <img
                className="image"
                alt={projects[0]?.name}
                src={projects[0]?.image}
              />
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default TypeOfClient
