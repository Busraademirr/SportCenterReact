import React from 'react'

function Product1() {
  return (
        <div className="col-sm-12 col-md-3">
            <div className="purchaseImg">
              <img src="/pictures/purchase1.jpg" alt=""/>
              <p>Kettlebell / 5kg<br/>
                <span className="strike-through">89.99$</span>
                <span> / 59.99$</span>
                <p><span>
                  <i className="fa-solid fa-cart-shopping"></i> Add to chart 
                  </span></p>
              </p>
            </div>
          </div>
  )
}

export default Product1