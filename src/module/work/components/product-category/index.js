import React from 'react'
import Card from '_components/card'
import { ALL_PROJECT } from '_constants/projects'

const ProductCategory = () => {
  return (
    <div className="product-category">
      <div className="product-category__title">
        <h4>All Projects</h4>
        <span>{ALL_PROJECT.length}</span>
      </div>
      <div className="product-category__container">
        {ALL_PROJECT.map((project) => {
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
