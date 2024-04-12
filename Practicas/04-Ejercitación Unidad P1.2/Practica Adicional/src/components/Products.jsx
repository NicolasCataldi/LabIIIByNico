import React from 'react'
import Product from './Product'

function Products({products}) {
  return (
    <div>
        
      {products.map((name) => (<Product name={name}/>))}
    </div>
  )
}

export default Products
