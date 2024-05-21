import React, { useEffect, useState } from 'react'
import PageNavbar from './PageNavbar'
import Hamburger from './Hamburger'

function PageHeader() {

  const [scrolled, setScrolled] = useState(false);

  
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 80) {
          setScrolled(true);} 
    });
    
  }, []);
  
    


  return (
    <div>
        <div id="header" className='fixed-top' style={scrolled ? { backgroundColor: 'var(--renk3)' } : {backgroundColor: 'transparent'}}>
            <div className="container" style={{ paddingLeft: '10%', paddingRight: '10%' }}>
                <div className="logo">
                    <img src="/pictures/logo.png" alt="" />
                </div>
                <PageNavbar/>
                <Hamburger/>
            </div>
        </div>
        
    </div>
  )
}

export default PageHeader