import React from 'react'

function Section5Form() {
    return (
        <div style={{ marginRight: '15%', marginLeft: '15%', marginTop: '10%' }}>
            <div className="row">
                <div className="col-sm-12 col-md-6">
                    <div className="row">
                        <div className="col">
                            <p>Mobile Number</p>
                            <span> 0282 100 00 00</span>
                        </div>
                        <div className="col">
                            <p>Email Adress</p>
                            <span>demo@demo.tr</span>
                        </div>
                    </div> <br /><br />
                    <div className="row">
                        <p>Make An Appoinment</p>
                        <form action="/submit_contact_form" method="post" id="contactUsForm">
                            <div>
                                <input placeholder="Your Name" />
                                <input placeholder="Your Email" />
                                <textarea placeholder="Your Message" rows="4"></textarea>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6">
                    <div style={{ width: '100%' }}>
                        <iframe className='iframe'
                                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a
                                    href="https://www.gps.ie/">gps vehicle tracker</a>
                        </iframe>
                    </div>

                </div>
                
            </div>
        </div>
    )
}

export default Section5Form