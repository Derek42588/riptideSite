import React from 'react';
import mwbBest from '../img/fashion/mwbBest.png'
import osmanUgly from '../img/fashion/osmanUgly.PNG'
import winguyenClassic from '../img/fashion/winguyenClassic.png'
import pkTrophy from '../img/pkTrophy.png'

const Fashion = () => {
  return (
    <div className="fashion" id ="fashion">
        <h2 className="fashion__title">RIPTIDE RUPAUL</h2>
        <div className="fashion__rules">
            <ul className="fashion__rules-text">
                <li className="fashion__rules-item">Riptide only (when giving awards, outfit be shown to @Dom)</li>
                <li className="fashion__rules-item">Paste your character name, screenshot, and superlative entry in #fashion</li>
                <li className="fashion__rules-item">You're allowed to enter as many suits as you want</li>
                <li className="fashion__rules-item">Best classic tailor - 25 <img src={pkTrophy} alt="Pk Trophy" className="fashion__rules-item-icon"/></li>
                <li className="fashion__rules-item">Best tailor - 25 <img src={pkTrophy} alt="Pk Trophy" className="fashion__rules-item-icon"/> </li>
                <li className="fashion__rules-item">Best ugly tailor - 25 <img src={pkTrophy} alt="Pk Trophy" className="fashion__rules-item-icon"/> </li>
            </ul>
        
        </div>
        <div className="fashion__winner-showcase fashion__winner-showcase--1">
        <h2 className="fashion__winner-showcase__title">
          Best Overall - @MWB
        </h2>
        <img src={mwbBest} alt="MWB best" className="fashion__winner-showcase__img fashion__winner-showcase__img--1"/>

        </div>
        <div className="fashion__winner-showcase fashion__winner-showcase--2">
        <h2 className="fashion__winner-showcase__title">
          Best Ugly - @Osman
        </h2>
        <img src={osmanUgly} alt="MWB best" className="fashion__winner-showcase__img fashion__winner-showcase__img--2"/>

        </div>
        <div className="fashion__winner-showcase fashion__winner-showcase--3">
        <h2 className="fashion__winner-showcase__title fashion__winner-showcase__title--winguyen">
          Best Classic - @Winguyen
        </h2>
        <img src={winguyenClassic} alt="MWB best" className="fashion__winner-showcase__img fashion__winner-showcase__img--3"/>

        </div>
    </div>
  );
};

export default Fashion;
