import React from 'react'

function Product2() {
  return (
        <div className="col-sm-12 col-md-3">
            <div className="purchaseImg">
              <img src="/pictures/purchase2.jpg" alt=""/>
              <p>Treadmill <br/>
                <span className="strike-through">899.99$</span><span> / 599.99$</span>
              <p><span> <i className="fa-solid fa-cart-shopping"></i> Add to chart</span></p>
              </p>
            </div>
        </div>
  )
}

export default Product2