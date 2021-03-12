import React, { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import { PROJECT_BY_WORK } from '_constants/projects'
import { ensureArray } from '_util/helpers'
import ReactSlick from '_components/react-slick'

const TypeOfWork = () => {
  const [dragging, setDragging] = useState(false)

  const handleBeforeChange = useCallback(() => {
    setDragging(true)
  }, [setDragging])

  const handleAfterChange = useCallback(() => {
    setDragging(false)
  }, [setDragging])

  const handleOnItemClick = useCallback(
    e => {
      if (dragging) {
        e.preventDefault()
        e.stopPropagation()
      }
    },
    [dragging]
  )
  return (
    <div className="type-of-work">
      {ensureArray(PROJECT_BY_WORK).map((workGroup, index) => {
        const { projects = [], name, key } = workGroup || {}
        const workLink = `/work/type-of-work/${key}`
        return (
          <section key={key || index}>
            <h3 className="title">
              <Link to={workLink} className="title-left">
                <div>{name}</div>
                <div className="count">{workGroup?.projects?.length || 0}</div>
              </Link>
              <Link to={workLink}>
                <div className="title-right">View All</div>
              </Link>
            </h3>
            <ReactSlick
              beforeChange={handleBeforeChange}
              afterChange={handleAfterChange}
            >
              {projects.map((project, index) => {
                return (
                  <Link onClickCapture={handleOnItemClick} to={project.link} key={project.name || index}>
                    <img
                      className="image"
                      alt={project.name}
                      src={project.image}
                    />
                  </Link>
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
