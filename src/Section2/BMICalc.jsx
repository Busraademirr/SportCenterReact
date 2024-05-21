import React, { useState } from 'react';

function BMICalc() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBMI] = useState('');

  const calculate = () => {
    if (height && weight) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBMI(bmiValue);
    }
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div id="bmiContent" className="col-sm-12 col-md-6">
            <h3>BMI CALCULATOR</h3>
            <h6>
              The Body Mass Index (BMI) Calculator can be used to calculate BMI value and corresponding weight
              status while taking age into consideration. Use the "Metric Units" tab for the International
              System of Units or the "Other Units" tab to convert units into either US or metric units. Note
              that the calculator also computes the Ponderal Index in addition to BMI, both of which are
              discussed below in detail.
            </h6>
            <br />
            <div id="calculator">
              <div className="row" style={{ marginBottom: '2%' }}>
                <div className="col-sm-12 col-md-6" style={{ marginBottom: '2%' }}>
                  <span>
                    <input
                      id="input1"
                      type="number"
                      placeholder="Your Height (cm)"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                    />
                  </span>
                </div>
                <div className="col-sm-12 col-md-6" style={{ marginBottom: '2%' }}>
                  <span>
                    <input
                      id="input2"
                      type="number"
                      placeholder="Your Weight (kg)"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                    />
                  </span>
                </div>
              </div>
              <div>
                <span>
                  <button onClick={calculate}>Calculate</button>
                </span>
              </div>
            </div>
          </div>
          <div
            id="bmiImg"
            className="col-sm-12 col-md-6 text-center"
            style={{ position: 'relative', display: 'inline-block' }}
          >
            <p style={{ textAlign: 'center' }}>
              Your Body Mass Index: <span id="result">{bmi}</span>
            </p>
            <img src="/pictures/bmi-index.jpg" alt="BMI Index" />
            <div className="ucgen" id="ucgen"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BMICalc;