import React from 'react'
import { Link } from 'react-router-dom'
import { PROJECTS_BY_CLIENT } from '@/constants/projects'
import TitleCounter from '../title-counter'

const TypeOfClient = () => {
  return (
    <div>
      <div className="type-of-client">
        {PROJECTS_BY_CLIENT.map((clientGroup, index) => {
          const { projects = [], name, key } = clientGroup || {}

          return (
            <Link
              to={`/work/type-of-client/${key}`}
              className="type-of-client__item"
              key={key}
            >
              <div className="type-of-client__item__title">
                <TitleCounter label={name} count={projects.length}/>
              </div>
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
    </div>
  )
}

export default TypeOfClient
