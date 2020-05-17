import React from 'react';
import Info from './Info'
import Tournament from './Tournament'
import Easter from './Easter'
import Fashion from './Fashion'
import Cinco from './Cinco'

import mmdChangelog from '../img/changelogImages/mmdChangelog.jpg'

const Landing = () => {
  return (
      <div className = "container">
        {Info()}
        <div className="changelog" id ="changelog">
          <p className="changelog__title">MMDeez Nuts</p>
          <p className="changelog__date">5/17/20</p>

          <img src={mmdChangelog} alt="Changelog - MMD" className="changelog__img"/>
          <div className="changelog__card">
          <ul className="changelog__text">
            <li className="changelog__item">
            Funky vendor issue with new release fixed.
            </li>
            <li className="changelog__item">
            DI mobs will now spawn correctly. The spawns will start off in groups of 5 normal mobs. Killing the normal mobs will trigger the Boss mob to spawn.
            </li>
            <li className="changelog__item">
            Golems have finally made their way out to DI as well
            </li>
            <li className="changelog__item">
            Curse of Ravens Fury ring range has been modified. It should hit closer targets now. *fingers crossed*
            </li>
            <li className="changelog__item">
            Feeding Tubes and Forgotten Chasm mobs now drop epic loot
            </li>
            <li className="changelog__item">
            Mosswart Agitator now drops Armband
            </li>
            <li className="changelog__item">
            Egg Orchard, Path of the Blind, Forgotten Chasm, Matron Hive East, Feeding Tubes, Dark Design, and Creepy Canyons mobs now have a chance to drop 1 MMD note
            </li>
            <li className="changelog__item">
            Sanamar Collector accepts all the ninja dungeon mob trophies as shareable XP
            </li>
            <li className="changelog__item">
            All other world collectors accept the above trophies as shareable XP
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
