import React from 'react'

function BestTrainers() {
  return (
    <div>
        <div id="bestTrainers">
      <div id="trainersText" style={{textAlign:'center'}}>
        <h3>OUR BEST TRAINERS</h3>
        <h2 className="sari-cizgi"> </h2><br/>
        <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, pariatur!</h6>
        <h6>Hampden - Sydney College</h6>
      </div>
      <div className="container" id="trainersImg">
        <div className="row">
          <div className="col-sm">
            <div>
              <div className="after"></div>
              <div className="imageContainer">
                <img src="/pictures/trainer1.jpg" alt=""/>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div className="imageContainer">
              <img src="/pictures/trainer2.jpg" alt=""/>
            </div>
          </div>
          <div className="col-sm">
            <div className="imageContainer">
              <img src="/pictures/trainer3.jpg" alt=""/>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default BestTrainers