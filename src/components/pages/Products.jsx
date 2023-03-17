import React from 'react'
import { Link } from 'react-router-dom'
import products from '../../data'

const Products = () => {
  return (
    <section className="section">
      <div className="products">
        {products.map((product) => {
          return (
            <article key={product.id}>
              <h5>{product.name}</h5>
              <Link to={`/products/${product.id}`}>more info</Link>
            </article>
          )
        })}
      </div>

      <br />
      <br />
      <Link to="/" className="btn">
        Back Home
      </Link>
    </section>
  )
}

export default Products
