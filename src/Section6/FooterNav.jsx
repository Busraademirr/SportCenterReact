import React from 'react'

function FooterNav() {
    return (    
            <div className="row justify-content-center">
                <div className="col-sm-4 col-md4">
                    <div>
                        <h5>Information</h5>
                        <ul className="nav flex-column">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Classes</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-sm-4 col-md-4">
                    <div>
                        <h5>Helpful Links</h5>
                        <ul className="nav flex-column">
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Supports</a></li>
                            <li><a href="#">Terms & Condition</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>
            </div>
    )
}

export default FooterNav