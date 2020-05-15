import React from 'react';
import Info from './Info'
import Tournament from './Tournament'
import Easter from './Easter'
import Fashion from './Fashion'
import Cinco from './Cinco'

import candethChangelog from '../img/changelogImages/candethChangelog.jpg'

const Landing = () => {
  return (
      <div className = "container">
        {Info()}
        <div className="changelog" id ="changelog">
          <p className="changelog__title">Total Recall</p>
          <p className="changelog__date">5/15/20</p>

          <img src={candethChangelog} alt="Changelog - Recall Spells" className="changelog__img"/>
          <div className="changelog__card">
          <ul className="changelog__text">
            <li className="changelog__item">
            GW Invaders (Recall Quest) in game, working as retail
            </li>
            <li className="changelog__item">
            Fetish of the Dark Idols added to Dmitri for 30 trophies
            </li>
            <li className="changelog__item">
            Stipends changed to Stimulus Checks
            </li>
            <li className="changelog__item">
            Candeth Keep Recall quest added
            </li>
            <li className="changelog__item">
            Knorr armor added to loot table
            </li>
            <li className="changelog__item">
            Olthoi Celdon now dying properly
            </li>
            <li className="changelog__item">
            Recipes for Shadow, Seasoned Explorer, and Undead slayer bugged.  Being worked on now
            </li>
            <li className="changelog__item">
            Misc crashes fixed. Including, but not limited to:
            </li>
            <li className="changelog__item">
            First tink on items
            </li>
            <li className="changelog__item">
            Bobo (generator monster kills)
            </li>
            <li className="changelog__item">
            Green Garnet tinking
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
