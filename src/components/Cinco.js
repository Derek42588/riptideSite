import React from 'react';
import pinata from '../img/cinco/pinata.PNG';
import cincoNPC from '../img/cinco/cincoNPC.png';
import coronaDeath from '../img/cinco/coronaDeath.png';
import cincoRewards from '../img/cinco/cincoRewards.png';
import pinataExplosion from '../img/cinco/pinataExplosion.png';




const Cinco = () => {
  return (
    <div className="cinco" id ="cinco">
            <h1 className="cinco__title">CINCO DE MAYO</h1>
            <img src={pinata} alt="Pinata" className="cinco__img cinco__img--1"/>    
            <img src={cincoNPC} alt="Cinco NPC" className="cinco__img cinco__img--2"/>    
            <img src={coronaDeath} alt="Corona Death" className="cinco__img cinco__img--3"/>  
            <img src={cincoRewards} alt="Cinco Rewards" className="cinco__img cinco__img--4"/>    
  
            <img src={pinataExplosion} alt="Pinata Explosion" className="cinco__img cinco__img--5"/>    

    </div>
  );
};

export default Cinco;
