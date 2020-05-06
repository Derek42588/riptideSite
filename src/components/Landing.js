import React from 'react';
import Info from './Info'
import Tournament from './Tournament'
import Easter from './Easter'
import Fashion from './Fashion'
import Cinco from './Cinco'

import trinkets from '../img/changelogImages/trinkets.png'

const Landing = () => {
  return (
      <div className = "container">
        {Info()}
        <div className="changelog" id ="changelog">
          <p className="changelog__title">Flagging Is For Nerds</p>
          <p className="changelog__date">5/03/20</p>

          <img src={trinkets} alt="Changelog - Trinkets" className="changelog__img"/>
          <div className="changelog__card">
          <ul className="changelog__text">
            <li className="changelog__item">
              Void to War timer, 3-5s in between schools
            </li>
            <li className="changelog__item">
            Trinkets have been added to loot. Imbues for those trinkets soon to come. Collect the salvage!
            </li>
            <li className="changelog__item">
            Aetheria quest added. Aetheria will soon drop in loot.
            </li>
            <li className="changelog__item">
            You no longer have to flag for Aug gem. Flag check removed on the Aug Realm portal.
            </li>
            <li className="changelog__item">
            Legendary Heartseeker now works correctly
            </li>
            <li className="changelog__item">
            XP Modifier reduced to 2.0X.
            </li>
            <li className="changelog__item">
            Void nerf turned down to 30% until Aetheria come out
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
