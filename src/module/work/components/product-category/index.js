import React from 'react'
import Card from '@/components/card'
import Layout from '@/components/layout'
import { ALL_PROJECT } from '@/constants/projects'

const ProductCategory = ({
  title = 'All Projects',
  projects = ALL_PROJECT
}) => {
  return (
    <Layout>
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
    </Layout>
  )
}

export default ProductCategory
