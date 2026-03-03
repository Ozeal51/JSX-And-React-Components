// Description.jsx
// ------------
// Simple component responsible for rendering the product description text.
// The value is pulled directly from the shared `product` export. Styling is
// applied via a CSS class to keep the markup clean.

import React from 'react'
import product from '../product'

export default function Description() {
  return <p className="product-desc">{product.description}</p>
}
