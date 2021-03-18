import React, { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import { PROJECT_BY_WORK } from '@/constants/projects'
import { ensureArray } from '@/util/helpers'
import ReactSlick from '@/components/react-slick'
import TitleCounter from '../title-counter'

const TypeOfWork = () => {
  const [dragging, setDragging] = useState(false)

  const handleBeforeChange = useCallback(() => {
    setDragging(true)
  }, [setDragging])

  const handleAfterChange = useCallback(() => {
    setDragging(false)
  }, [setDragging])

  const handleOnItemClick = useCallback(e => {
    if (dragging) {
      e.preventDefault()
      e.stopPropagation()
    }
  }, [dragging])

  return (
    <div className="type-of-work">
      {ensureArray(PROJECT_BY_WORK).map(workGroup => {
        const { projects = [], name, key } = workGroup || {}
        const workLink = `/work/type-of-work/${key}`

        return (
          <div key={key} className="type-of-work__item">
            <div className="type-of-work__title">
              <TitleCounter to={workLink} label={name} count={workGroup?.projects?.length} />

              <Link to={workLink} className="type-of-work__title__view-all">
                View All
              </Link>
            </div>

            <ReactSlick
              className="type-of-work__slider"
              beforeChange={handleBeforeChange}
              afterChange={handleAfterChange}
            >
              {projects.map((project, index) => {
                return (
                  <Link
                    className="type-of-work__image"
                    onClickCapture={handleOnItemClick}
                    to={project.link}
                    key={project.name || index}
                  >
                    <img alt={project.name} src={project.image} />
                  </Link>
                )
              })}
            </ReactSlick>
          </div>
        )
      })}
    </div>
  )
}

export default TypeOfWork
