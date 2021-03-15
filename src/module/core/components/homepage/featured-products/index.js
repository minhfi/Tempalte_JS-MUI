import React from 'react'
import { Link } from 'react-router-dom'
import { FEATURED_PROJECTS } from '_constants/projects'
import Card from '_components/card'

const FeaturedProducts = () => {
  FEATURED_PROJECTS.length = 5

  return (
    <div className="products-container container-wrapper">
      <div className="products-container__products-grid">
        {FEATURED_PROJECTS.map((product) => {
          return (
            <div
              key={product.key}
              className="products-container__products-grid__item"
            >
              <Card item={product} />
            </div>
          )
        })}
      </div>
      <div className="products-container__more">
        <Link to="/work/product-category">VIEW ALL PROJECTS</Link>
      </div>
    </div>
  )
}

export default FeaturedProducts
