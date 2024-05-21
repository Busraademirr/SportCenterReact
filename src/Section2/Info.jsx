import React from 'react'

function Info({hour, classType, img}) {
  return (
    <div>
        <div className="container" id="ourClassesMain">
          <div className="row">
            <div className="col-sm-12 col-md-6" id="ourClassesMainText">
              <h4>Why should you come to {classType}?</h4>
              <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium nesciunt eos soluta
                nostrum,
                minima consequuntur vitae dolore earum blanditiis, recusandae deleniti quibusdam eveniet
                aut
                neque suscipit? Aliquam eius at sequi?
              </h6>
              <br/>
              <h4>{classType} Hours</h4>
              <h6>Saturday-Sunday: {hour}
                <br/> Monday-Tuesday: {hour}
                <br/>Wednesday-Friday: {hour}
              </h6>
            </div>
            <div className="col-sm-12 col-md-6" id="ourClassesMainImg">
              <img src={img}/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Info