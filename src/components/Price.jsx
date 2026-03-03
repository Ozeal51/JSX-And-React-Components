// Price.jsx
// ------------
// Displays the price of the shared product. It imports the `product` object
// from `src/product.jsx` and shows `product.price` formatted to two decimal
// places. The component is intentionally minimal and does not accept props.

import React from 'react'
import product from '../product'

export default function Price() {
  return <p className="product-price">${product.price.toFixed(2)}</p>
}
