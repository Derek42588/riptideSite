import React from 'react';
import Info from './Info'
import Tournament from './Tournament'
import Easter from './Easter'
import Fashion from './Fashion'
import Cinco from './Cinco'

import stipendChangelog from '../img/changelogImages/stipendChangelog.png'

const Landing = () => {
  return (
      <div className = "container">
        {Info()}
        <div className="changelog" id ="changelog">
          <p className="changelog__title">Archers Are Hard To Please</p>
          <p className="changelog__date">5/09/20</p>

          <img src={stipendChangelog} alt="Changelog - Stpends" className="changelog__img"/>
          <div className="changelog__card">
          <ul className="changelog__text">
            <li className="changelog__item">
            Greater Primastic Darts and Quarrels should now work properly
            </li>
            <li className="changelog__item">
            Focus Stone added to Dmitri
            </li>
            <li className="changelog__item">
            Purified Mouryou Nekode added to Dalomar
            </li>
            <li className="changelog__item">
            Greater Deadly recipe fixes in Laurana
            </li>
            <li className="changelog__item">
            Wooden Top added to Dalomar
            </li>
            <li className="changelog__item">
            /fixbusy added back in
            </li>
            <li className="changelog__item">
            Stipend Certificate prices dropped to 1
            </li>
            <li className="changelog__item">
            Stipend Ring and Wall Certs combined
            </li>
            <li className="changelog__item">
            Stipend timers cut in half
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
