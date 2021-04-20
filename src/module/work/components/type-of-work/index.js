import React, { useCallback, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { PROJECT_BY_WORK } from '@/constants/projects'
import { ensureArray } from '@/util/helpers'
import ReactSlick from '@/components/react-slick'
import TitleCounter from '../title-counter'

const TypeOfWork = () => {
  const typeOfWorkRef = useRef(null)
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

  const handleClickWorkTitle = (index) => {
    const target = typeOfWorkRef.current.children.item(index)
    const parentPosition = typeOfWorkRef.current.getBoundingClientRect()
    const targetPosition = target.getBoundingClientRect()

    const heightToFlyUp = targetPosition.y - parentPosition.y

    typeOfWorkRef.current.style.setProperty('--offsetY', -heightToFlyUp + 'px')
    typeOfWorkRef.current.classList.add('fly-up')
    target.classList.add('active')
  }

  return (
    <div className="type-of-work" ref={typeOfWorkRef}>
      {ensureArray(PROJECT_BY_WORK).map((workGroup, index) => {
        const { projects = [], name, key } = workGroup || {}
        const workLink = `/work/type-of-work/${key}`

        return (
          <div key={index} className="type-of-work__item">
            <div className="type-of-work__title">
              <TitleCounter
                to={workLink}
                label={name}
                count={workGroup?.projects?.length}
                onClick={() => handleClickWorkTitle(index)}
              />

              <Link
                to={workLink}
                className="type-of-work__title__view-all"
                onClick={() => handleClickWorkTitle(index)}
              >
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
                    to={project.link}
                    key={project.name || index}
                    onClickCapture={handleOnItemClick}
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
