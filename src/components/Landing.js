import React from 'react';
import Info from './Info'
import Tournament from './Tournament'
import Easter from './Easter'
import Fashion from './Fashion'
import Cinco from './Cinco'

import undeadChangelog from '../img/changelogImages/undeadChangelog.png'

const Landing = () => {
  return (
      <div className = "container">
        {Info()}
        <div className="changelog" id ="changelog">
          <p className="changelog__title">Call Me Bruce Campbell Cuz I'm An...</p>
          <p className="changelog__date">5/13/20</p>

          <img src={undeadChangelog} alt="Changelog - Undead Slayer" className="changelog__img"/>
          <div className="changelog__card">
          <ul className="changelog__text">
            <li className="changelog__item">
            Undead Slayer now in game, working as retail
            </li>
            <li className="changelog__item">
            Void wands in loot -- for realsies
            </li>
            <li className="changelog__item">
            Void -> War Timer working -- for realsies
            </li>
            <li className="changelog__item">
            Olthoi Armor added to loot
            </li>
            <li className="changelog__item">
            Haebrean Armor added to loot
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
