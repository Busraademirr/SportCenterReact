import React from 'react'

function PageNavbar() {
  return (
    <div>
        <nav className="navbar" id="navbar">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#section1">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#section2">Classes</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#section3">Trainer</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#section4">Review</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#section5">Contact</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <button type="button" className="btn" data-bs-toggle="button">JOIN US</button>
                  </a>
                </li>
              </ul>
            </nav>
    </div>
  )
}

export default PageNavbar