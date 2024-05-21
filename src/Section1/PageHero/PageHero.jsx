import React from 'react'

function PageHero() {
  return (
    <div>
        <div className="heroBg" style={{paddingBottom: '5%'}}>
          <div className="container" id="homepageMain">
            <section id="section1main">
              <div>
                <div className="row justify-content-start">
                  <div className="col-sm-2 col-md-2">
                    <button className="btn firstbutton"> POWERFUL </button>
                  </div>
                </div>
              </div>
              <h1>
                Group <br/> Practice With Trainer
              </h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet magnam optio tenetur
                nisi
                quia nulla et? Porro vitae natus dolor delectus, voluptatibus iure esse corrupti facilis
                nulla non sunt animi!
              </p>
              <div>
                <div>
                  <div className="row">
                    <div className="col-sm-12 col-md-2">
                      <button className="bluebutton" style={{width: '100%'}}> Sign Up </button>
                    </div>
                    <div className="col-sm-12 col-md-2">
                      <button className="transparentbutton" style={{width: '100%'}}> Details </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

        </div>
        
    </div>
  )
}

export default PageHero