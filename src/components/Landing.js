import React from 'react';
import Info from './Info'
import Tournament from './Tournament'
import Easter from './Easter'
import Fashion from './Fashion'

import changelogImage from '../img/changelogImages/43020.png'

const Landing = () => {
  return (
      <div className = "container">
        {Info()}
        <div className="changelog">
          <p className="changelog__title">Stipends, Hero Tokens</p>
          <p className="changelog__date">4/30/20</p>

          <img src={changelogImage} alt="Changelog - Stipends" className="changelog__img"/>
          <div className="changelog__card">
          <ul className="changelog__text">
            <li className="changelog__item">
              Arcane augmentation vendor fixed
            </li>
            <li className="changelog__item">
              Laurana fixes
            </li>
            <li className="changelog__item">
            Hero tokens implemented
            </li>
            <li className="changelog__item">
            Stipends are here
            </li>
            <li className="changelog__item">
            Master Fletcher's portal fixed
            </li>
            <li className="changelog__item">
            Virindi Mask vendors will now accept the masks from our Tailor
            </li>
            <li className="changelog__item">
            Creatures on DI are no longer Bunnies
            </li>
            <li className="changelog__item">
            Colored Eggs no longer drop.
            </li>
          </ul>
          <a href = "/changelog">
            <button className="btn">Past Updates</button>
          </a>
          </div>
        </div>
        <h2 className="latestEvents">Latest Events</h2>
        {Fashion()}
        {Tournament()}
        {Easter()}
    </div>
  );
};

export default Landing;
