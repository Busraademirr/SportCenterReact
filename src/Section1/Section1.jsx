import React from 'react'
import PageHero from './PageHero/PageHero'
import PageHeader from './PageHeader/PageHeader'

function Section1() {
  return (
    <div>
        <div id="section1">
        <div className="row">
          <div id="hero">
            <PageHeader/>
            <PageHero/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section1