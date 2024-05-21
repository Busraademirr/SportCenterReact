import React from 'react'
import BestTrainers from './BestTrainers'
import PurchaseText from './PurchaseText'
import Products from './Products/Products'

function Section3() {
  return (
    <div>
        <div id="section3">
            <BestTrainers/>
            <div id="purchase">
                <PurchaseText/>
                <Products/>
            </div>
        </div>
    </div>
  )
}

export default Section3