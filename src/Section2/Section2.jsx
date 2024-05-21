import React from 'react'
import Section2Title from './Section2Title'
import BMICalc from './BMICalc'
import AddFunc from './AddFunc'


function Section2() {
    return (
        <div>
            <div id="section2">
                <div>
                    <div id="ourClasses" className='background-cross'>
                        <Section2Title />
                        <AddFunc/>
                    </div>
                    <div id="bmiCalculator" className="container">
                    <BMICalc />
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Section2