import React from 'react'
import Product1 from './Product1'
import Product2 from './Product2'
import Product3 from './Product3'
import Product4 from './Product4'

function Products() {
  return (
    <div>
        <div className="container" style={{padding: '0% 5% 5% 5%'}}>
        <div className="row">
        <Product1/>
        <Product2/>
        <Product3/>
        <Product4/>
        </div>
        </div>
    </div>
  )
}

export default Products