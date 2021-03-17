import React, { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import { PROJECT_BY_WORK } from '@/constants/projects'
import { ensureArray } from '@/util/helpers'
import ReactSlick from '@/components/react-slick'
import Layout from '@/components/layout'

const TypeOfWork = () => {
  const [dragging, setDragging] = useState(false)

  const handleBeforeChange = useCallback(() => {
    setDragging(true)
  }, [setDragging])

  const handleAfterChange = useCallback(() => {
    setDragging(false)
  }, [setDragging])

  const handleOnItemClick = useCallback(
    (e) => {
      if (dragging) {
        e.preventDefault()
        e.stopPropagation()
      }
    },
    [dragging]
  )

  return (
    <Layout>
      <div className="type-of-work">
        {ensureArray(PROJECT_BY_WORK).map((workGroup) => {
          const { projects = [], name, key } = workGroup || {}
          const workLink = `/work/type-of-work/${key}`

          return (
            <section key={key}>
              <h3 className="type-of-work__title">
                <Link to={workLink} className="type-of-work__title--left">
                  <div>{name}</div>
                  <div className="type-of-work__title--left__count">
                    {workGroup?.projects?.length || 0}
                  </div>
                </Link>
                <Link to={workLink}>
                  <div className="type-of-work__title--right">View All</div>
                </Link>
              </h3>
              <ReactSlick
                beforeChange={handleBeforeChange}
                afterChange={handleAfterChange}
              >
                {projects.map((project, index) => {
                  return (
                    <Link
                      onClickCapture={handleOnItemClick}
                      to={project.link}
                      key={project.name || index}
                    >
                      <img
                        className="type-of-work__image"
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
    </Layout>
  )
}

export default TypeOfWork
