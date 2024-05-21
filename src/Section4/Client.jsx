import React from 'react'

function Client() {
  return (
    <div>
        <div className="container" style={{margin: '5%'}}>
        <div className="row justify-content-around">
          <div className="col-sm-12 col-md-5">
            <div className="row">
              <div className="col-3">
                <img src="/pictures/client1.jpg" alt="" className="rounded-image"/>
              </div>
              <div className="col-9">
                <p className="mb-0">Diet Expert</p><br/>
                <span>CFO</span>
              </div>
              <div className="col-12">
                  <div className="textbox">
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, facilis cumque necessitatibus modi distinctio nam ullam molestias vero sequi eligendi exercitationem sit doloribus laboriosam nihil aut omnis delectus nemo minus?</span>
                  </div>
               </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-5">
            <div className="row">
              <div className="col-3">
                <img src="/pictures/client2.jpg" alt="" className="rounded-image"/>
              </div>
              <div className="col-9">
                <p className="mb-0">Cardio Trainer</p><br/>
                <span>CEO</span>
              </div>
              <div className="col-12">
                <div className="textbox">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, vitae autem architecto inventore
                  quis ut beatae, expedita perferendis quo eius deleniti illum aut est? Laudantium expedita quaerat ad
                  accusantium modi.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Client