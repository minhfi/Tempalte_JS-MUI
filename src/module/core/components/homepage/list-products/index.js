import React from 'react'
import { Link } from 'react-router-dom'
import productCategories from './constant'

const ProductsCategory = () => {
  return (
    <div className="products-container">
      <div className="products-container__products-grid">
        {productCategories.map((product) => {
          return (
            <div
              key={product.key}
              className="products-container__products-grid__item"
            >
              <Link to={product.link}>
                <img src={product.image} alt={product.alt} />
                <span className="products-container__products-grid__item__name">
                  {product.name}
                </span>
              </Link>
            </div>
          )
        })}
      </div>
      <div className="products-container__more">
        <Link to="/work/all">VIEW ALL PROJECTS</Link>
      </div>
    </div>
  )
}

export default ProductsCategory
