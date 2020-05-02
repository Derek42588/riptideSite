import React from 'react';
import waerGroup from '../img/fashion/waerGroup.png'
import pkTrophy from '../img/pkTrophy.png'

const Fashion = () => {
  return (
    <div className="fashion">
        <h2 className="fashion__title">RIPTIDE RUPAUL</h2>
        <div className="fashion__rules">
            <ul className="fashion__rules-text">
                <li className="fashion__rules-item">Riptide only (when giving awards, outfit be shown to @Dom)</li>
                <li className="fashion__rules-item">Paste your character name, screenshot, and superlative entry in #fashion</li>
                <li className="fashion__rules-item">You're allowed to enter as many suits as you want</li>
                <li className="fashion__rules-item">Best classic tailor - 25 <img src={pkTrophy} alt="Pk Trophy" className="fashion__rules-item-icon"/></li>
                <li className="fashion__rules-item">Best tailor - 25 <img src={pkTrophy} alt="Pk Trophy" className="fashion__rules-item-icon"/> </li>
                <li className="fashion__rules-item">Best ugly tailor - 25 <img src={pkTrophy} alt="Pk Trophy" className="fashion__rules-item-icon"/> </li>
                <li className="fashion__rules-item">VOTING WILL BE HELD ON SUNDAY 5/3/20. YOU HAVE UNTIL THEN TO ENTER</li>
            </ul>
        
        </div>
        <img src={waerGroup} alt="Waer in PPGSX" className="fashion__img fashion__img--1"/>
    </div>
  );
};

export default Fashion;
