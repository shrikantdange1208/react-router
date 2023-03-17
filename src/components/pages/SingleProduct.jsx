import React from 'react'
import { Link, useParams } from 'react-router-dom'
import products from '../../data'

export default function SingleProduct() {
  const { productId } = useParams()
  const product = products.find((pd) => pd.id === productId)
  const { name, image } = product
  return (
    <section className="section product">
      <img src={image} alt="name" />
      <h5>{name}</h5>
      <br />
      <Link to="/products" className="btn">
        Back to Products
      </Link>
    </section>
  )
}
