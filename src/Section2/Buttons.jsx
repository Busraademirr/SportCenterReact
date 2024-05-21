import React from 'react'

function Buttons({handleClick, activeButton}) {
  return (
    <div>
        <div className="container mt-5" id="ourClassesButtons">
          <div className="row">
            <div className="col-sm-6 col-md-3">
              <button id="ourClassesBtn" onClick={handleClick} value="Yoga" className={activeButton === "Yoga" ? "shadowed" : ""}>Yoga</button>
            </div>
            <div className="col-sm-6 col-md-3">
              <button id="ourClassesBtn" onClick={handleClick} value="Group" className={activeButton === "Group" ? "shadowed" : ""}>Group</button>
            </div>
            <div className="col-sm-6 col-md-3">
              <button id="ourClassesBtn" onClick={handleClick} value="Solo" className={activeButton === "Solo" ? "shadowed" : ""} >Solo</button>
            </div>
            <div className="col-sm-6 col-md-3">
              <button id="ourClassesBtn" onClick={handleClick} value="Stretching" className={activeButton === "Stretching" ? "shadowed" : ""}
              >Stretching</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Buttons