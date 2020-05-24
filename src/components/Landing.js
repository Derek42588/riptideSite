import React from 'react';
import Info from './Info'
import Tournament from './Tournament'
import Easter from './Easter'
import Fashion from './Fashion'
import Cinco from './Cinco'

import infiniteSide from '../img/changelogImages/infiniteSide.png'

const Landing = () => {
  return (
      <div className = "container">
        {Info()}
        <div className="changelog" id ="changelog">
          <p className="changelog__title">GOTROK HURT</p>
          <p className="changelog__date">5/24/20</p>

          <img src={infiniteSide} alt="Changelog - Infinite" className="changelog__img"/>
          <div className="changelog__card">
          <ul className="changelog__text">
            <li className="changelog__item">
            Infinite Mana Stone Quest added
            </li>
            <li className="changelog__item">
            Usts are now non drop
            </li>
            <li className="changelog__item">
            EO East + West added back in
            </li>
            <li className="changelog__item">
            POTB East + West added back in
            </li>
            <li className="changelog__item">
            Additional items added to the tailor vendor. (Mukkir wings, Fishing pole, etc.)
            </li>
            <li className="changelog__item">
            Golems added to DI
            </li>
            <li className="changelog__item">
            Tugak (Curse of Raven's Fury) reworked to fix it hitting 9 times
            </li>
          </ul>
          <a href = "/changelog">
            <button className="btn">Past Updates</button>
          </a>
          </div>
        </div>
        <h2 className="latestEvents">Latest Events</h2>
        {Fashion()}
        {Cinco()}
        {Tournament()}
        {Easter()}
    </div>
  );
};

export default Landing;
