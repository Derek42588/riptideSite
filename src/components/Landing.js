import React from 'react';
import { Link } from 'react-router-dom'
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
          <p className="changelog__date">5/30/20</p>

          <img src={infiniteSide} alt="Changelog - Infinite" className="changelog__img"/>
          <div className="changelog__card">
          <ul className="changelog__text">
            <li className="changelog__item">
            <Link to ='/wiki/?infinite_mana_stone'>Infinite Mana Stone Quest added</Link>
            </li>
            <li className="changelog__item">
            All pieces of armor now get hit with attacks. Tink up every armor piece!
            </li>
            <li className="changelog__item">
            Missile damage adjusted. You should no longer 1-shot. Testing locally gave me 400-430 crit + sneak shots on the head
            </li>
            <li className="changelog__item">
            Item leveling is in. (Aetheria and Cloaks will drop soon after some additional testing)
            </li>
            <li className="changelog__item">
            Ratings taken into account for combat calculations (the augs will now work.  Ratings/set armor do not drop yet)
            </li>
            <li className="changelog__item">
            Kindling crash fixed (Mage Armor and Focusing Stone)
            </li>
            <li className="changelog__item">
            Sleeches no longer drop eggs. Sleeches now attack.

            </li>
            <li className="changelog__item">
            Zaikhal Metos/Ayan Metos mirror added back in
            </li>
            <li className="changelog__item">
            Blank Augmentation Certificate added to Stipend Vendor, will now give 3 gems
            </li>
            <li className="changelog__item">
            Asheron will no longer eat two Aug gems for <Link to = '/wiki/?gem_of_knowledge'>Lore Aug</Link>
            </li>
            <li className="changelog__item">
            EO East + West added back in
            </li>
            <li className="changelog__item">
            POTB East + West added back in
            </li>
            <li className="changelog__item">
            Many additional items added to the <Link to ='/wiki/?vendors'>tailor vendor.</Link>
            </li>
            <li className="changelog__item">
            Golems added to DI
            </li>
            <li className="changelog__item">
            Tugak (Curse of Raven's Fury) reworked to fix it hitting 9 times
            </li>
            <li className="changelog__item">
            Changed Encrusted Bloodstone Jewel to have 10000 mana, but players would have to get a new one
            </li>
            <li className="changelog__item">
            Buff Others/Missing Self buffs added to Agents of Arc on Stipend turn ins
            </li>
            <li className="changelog__item">
            PK tagging issue fixed
            </li>
            <li className="changelog__item">
            Sedgemail added to loot table
            </li>
            <li className="changelog__item">
            Olthoi Covenant added to loot table
            </li>
            <li className="changelog__item">
            Olthoi Larvae Steak will now have 0 burden and give shareable XP like other EO trophies
            </li>
            <li className="changelog__item">
            Exquisite Casino Key removed from Rare Exchanger
            </li>
            <li className="changelog__item">
            Updated Dapper Suit,Chef's Hat, Crimped Hat,Luminous robe to be armor class and single coverage only.
            </li>
            <li className="changelog__item">
            Fixed Salvaged Steel and Salvaged Granite workmanship for the pk vendor bags. Was showing work 50.00 when using it now correctly shows work 5.00
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
