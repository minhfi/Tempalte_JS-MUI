import React from 'react'
import Card from '_components/card'
import { ALL_PROJECT } from '_constants/projects'
import NotFound from '_components/not-found'
const ProductCategory = ({
  title = 'All Projects',
  projects = ALL_PROJECT
}) => {
  if (projects?.length === 0) {
    return <div style={{ height: 400 }}><NotFound /></div>
  }
  return (
    <div className="product-category">
      <div className="product-category__title">
        <h4>{title}</h4>
        <span>{projects.length}</span>
      </div>
      <div className="product-category__container">
        {projects.map((project) => {
          return (
            <div
              key={project.key}
              className="product-category__container__item"
            >
              <Card item={project} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ProductCategory
