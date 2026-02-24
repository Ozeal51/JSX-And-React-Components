import React from 'react'
import product from '../product'

export default function Price() {
  return <p className="product-price">${product.price.toFixed(2)}</p>
}
