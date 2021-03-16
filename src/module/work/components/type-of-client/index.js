import React from 'react'
import { Link } from 'react-router-dom'
import { PROJECTS_BY_CLIENT } from '@/constants/projects'

const TypeOfClient = () => {
  return (
    <div className="type-of-client row">
      {PROJECTS_BY_CLIENT.map((clientGroup, index) => {
        const { projects = [], name, key } = clientGroup || {}
        return (
          <Link
            to={`/work/type-of-client/${key}`}
            className="type-of-client__item col-sm-12 col-md-6 col-lg-4 col-12"
            key={key}
          >
            <h3 className="type-of-client__item__title">
              <div className="type-of-client__item__title--left">
                <div className="type-of-client__item__title--left__name">{name}</div>
                <div className="type-of-client__item__title--left__count">{projects.length || 0}</div>
              </div>
            </h3>
            <div>
              <img
                className="type-of-client__item__image"
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
