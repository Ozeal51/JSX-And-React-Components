// Image.jsx
// ------------
// A simple presentational component that imports the shared `product`
// object (defined in `src/product.jsx`) and renders the product's image.
// The component applies a few inline styles and a CSS class for consistent
// sizing and rounding. Because the product data is imported directly, the
// component is tightly coupled to that module; it does not accept props.

import React from 'react'
import product from '../product'

export default function Image() {
  return (
    <img
      src={product.image}
      alt={product.name}
      className="product-image"
      style={{ maxWidth: '100%', borderRadius: '8px' }}
    />
  )
}

