import React from 'react';
import stepOne from '../img/setupSS/step1.PNG'
import stepTwo from '../img/setupSS/step2.PNG'
import stepThree from '../img/setupSS/step3.PNG'


const Setup = () => {
  return (
    <div className="setup">
        <h2 className="setup__title">Installation</h2>
        <ul className="setup__instructions">
            <li className="setup__instructions-item">Download the client and launcher <a href="https://www.gdleac.com/#installing">here</a></li>
            <li className="setup__instructions-item">Once you get to step 4, use the below instructions.</li>
            <li className="setup__instructions-item">Server Type: GDLE DO NOT FORGET THIS STEP

            </li>
            <li className="setup__instructions-item">Server Name: Riptide
</li>
            <li className="setup__instructions-item">Server IP:  riptide.ac
</li>
            <li className="setup__instructions-item">Server Port: 9000
</li>
            <li className="setup__instructions-item">Secure: True
</li>
        </ul>

        <img src={stepOne} alt="Step One" className="setup__img setup__img--1"/>
        <img src={stepTwo} alt="Step Two" className="setup__img setup__img--2"/>
        <img src={stepThree} alt="Step Three" className="setup__img setup__img--3"/>

    </div>
  );
};

export default Setup;
