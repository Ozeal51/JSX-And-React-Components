// Name.jsx
// ------------
// Presents the name of the current product. It imports the central `product`
// object (exported from `src/product.jsx`) and simply renders its `name`
// property inside an <h3>. Like the other small components in the
// `components/` folder, it does not accept props and is tightly coupled to the
// shared product module.

import React from 'react'
import product from '../product'

export default function Name() {
  return <h3 className="product-name">{product.name}</h3>
}
