import React from 'react'
import Card from '_components/card'
import allProjects from './constant'

const ProductCategory = () => {
  return (
    <div className="product-category">
      <div className="product-category__title">
        <h4>All Projects</h4>
        <span> {allProjects.length}</span>
      </div>
      <div className="product-category__container">
        {allProjects.map((project) => {
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
