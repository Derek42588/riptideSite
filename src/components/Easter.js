import React from 'react';
import bunnies from '../img/easterEvent.png';
import eggs from '../img/easterEggs.png';
import easterVendor from '../img/easterVendor.png';

import blueKit from '../img/blueKit.png';
import burningCoal from '../img/burningCoal.png';
import falatacot from '../img/falatacot.png';
import pyrealNugget from '../img/pyrealNugget.png';
import legKey from '../img/legKey.png';
import mmd from '../img/mmd.png';
import augGem from '../img/augGem.png';

const Easter = () => {
  return (
    <div className="easter">
      <h1 className="easter__title">EASTER IN DERETH</h1>
      <img
        src={bunnies}
        alt="DI Bunnies"
        className="easter__img easter__img--1"
      />

      <img src={eggs} alt="Eggs" className="easter__img easter__img--2" />
      {/* <ul className="easter__loot">
            <li className="easter__loot-item">1 leg</li>
            <li className="easter__loot-item">5 leg</li>
            <li className="easter__loot-item">3 blue kit</li>
            <li className="easter__loot-item">3 burning coals</li>
            <li className="easter__loot-item">3 ancient trinks</li>
            <li className="easter__loot-item">pyreal nugget</li>
            <li className="easter__loot-item">aug gem</li>
        </ul> */}
      <div className="easter__prizes">
        <div className="easter__prizes-row">
          <img src={legKey} alt="Legendary Key" className="easter__prize-img" />
        </div>
        <div className="easter__prizes-row">
          <img src={legKey} alt="Legendary Key" className="easter__prize-img" />
          <img src={legKey} alt="Legendary Key" className="easter__prize-img" />
          <img src={legKey} alt="Legendary Key" className="easter__prize-img" />
          <img src={legKey} alt="Legendary Key" className="easter__prize-img" />
          <img src={legKey} alt="Legendary Key" className="easter__prize-img" />
        </div>
        <div className="easter__prizes-row">
          <img src={mmd} alt="MMD note" className="easter__prize-img" />
          <img src={mmd} alt="MMD note" className="easter__prize-img" />
          <img src={mmd} alt="MMD note" className="easter__prize-img" />
          <img src={mmd} alt="MMD note" className="easter__prize-img" />
          <img src={mmd} alt="MMD note" className="easter__prize-img" />
        </div>

        <div className="easter__prizes-row">
        <img src={burningCoal} alt="burningCoal" className="easter__prize-img"/>
        <img src={burningCoal} alt="burningCoal" className="easter__prize-img"/>
        <img src={burningCoal} alt="burningCoal" className="easter__prize-img"/>

        </div>
        <div className="easter__prizes-row">
            
        <img src={falatacot} alt="falatacot" className="easter__prize-img"/>
        <img src={falatacot} alt="falatacot" className="easter__prize-img"/>
        <img src={falatacot} alt="falatacot" className="easter__prize-img"/>
        </div>
        <div className="easter__prizes-row">
            
        <img src={blueKit} alt="Blue Kit" className="easter__prize-img"/>
        <img src={blueKit} alt="Blue Kit" className="easter__prize-img"/>
        <img src={blueKit} alt="Blue Kit" className="easter__prize-img"/>
        </div>
        <div className="easter__prizes-row">
        <img src={pyrealNugget} alt="Pyreal Nugget" className="easter__prize-img" />

        </div>
        <div className="easter__prizes-row">
        <img src={augGem} alt="Blank Aug" className="easter__prize-img" />

        </div>
      </div>
      <img
        src={easterVendor}
        alt="Easter Vendor"
        className="easter__img easter__img--3"
      />
    </div>
  );
};

export default Easter;
