import React from 'react'

import { ensureArray } from '_util/helpers'

import { TYPE_OF_CLIENT } from '../data'

const TypeOfClient = () => {
  return (
    <div className="type-of-client">
      {
        TYPE_OF_CLIENT.map((type, index) => {
          return (
            <section key={type.title || index}>
              <h3 className="title">
                <div className="title-left">
                  <div>{type.title}</div>
                  <div className="count">{type.projects.length || 0}</div>
                </div>
                <div className="title-right">View All</div>
              </h3>
              <div className="row scrollbar">
                {
                  ensureArray(type.projects).map((project, index) => {
                    return (
                      <div key={project.name || index} className="item  col-sm-12 col-md-6 col-lg-4 col-12">
                        <img alt={project.name} src={project.src} />
                      </div>
                    )
                  })
                }
              </div>
            </section>
          )
        })
      }
    </div>
  )
}

export default TypeOfClient
