import React from 'react'
import { Link } from 'react-router-dom'
import Card from '_components/card'
import featuredProducts from './constant'

const FeaturedProducts = () => {
  return (
    <div className="products-container">
      <div className="products-container__products-grid">
        {featuredProducts.map((product) => {
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
