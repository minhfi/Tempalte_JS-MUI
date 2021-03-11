import React from 'react'
import Card from '_components/card'
import { ALL_PROJECT } from '_constants/projects'

const ProductCategory = ({ title = 'All Projects', projects = ALL_PROJECT }) => {
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
