import React from 'react'
import Card from '@/components/card'
import { ALL_PROJECT } from '@/constants/projects'
import TitleCounter from '../title-counter'

const ProductCategory = ({
  title = 'All Projects',
  projects = ALL_PROJECT
}) => {
  return (
    <div className="product-category">
      <div className="product-category__title">
        <TitleCounter label={title} count={projects.length}/>
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
