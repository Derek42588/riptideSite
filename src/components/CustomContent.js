import React from 'react';
import dalomarArmor from '../img/VendorPics/dalomarArmor.PNG';
import dalomarClothing from '../img/VendorPics/dalomarClothing.PNG';
import dalomarDyes from '../img/VendorPics/dalomarDyes.PNG';
import dalomarMagic from '../img/VendorPics/dalomarMagic.PNG';
import dalomarWeapons from '../img/VendorPics/dalomarWeapons.PNG';



// - PK kills are all logged on the backend
// - PK trophies on PK kills
// - Kills are used to track ELO (can maybe say something about PK seasons in the future?)
// - Rares dispell upon getting tagged for PVP combat
// - Rare gems have 1s use timer instead of 3m to help with tinking
// - Unlimited skill resets at Asheron's Castle
// - Global Killstreak tracking
//     - Killing Spree(3 kills)
//     - Rampage(5 kills)
//     - Dominating(8 kills)
//     - Unstoppable(10 kills)
//     - Godlike(12 kills)
//     - Massacre(15 kills)
// - DI (stronger than retail) implementation (legendary loot, mmds, legendary keys)

// QOL fixes
// - No timer on Chorizite
// - 20 hour aug gem
// - Only have to flag aug once
// - Unlimited resets at Asheron's Castle
// - No timer on coals
// - tailoring prices cut to 5 MMDs
// - 1s rare cooldown
// - Level 58, 2 Scints and PDI for new chars
// - Sellable massives
//
//
//
// - Quest timer fixes:
//     - No timer on Chorizite
//     - 20 hour aug gem
//     - You only need to flag for the aug gem once
//     - Unlimited skill resets at Asheron's Castle
//     - No timer on Coals quest
// - Quests:
//     - Black pages of Salt and Ash quest
//     - Viss flagging and Viss implementation
//     - DI flagging quest implemented
//     - Custom Arcane lore Augmentation gem (talk with Asheron for more details)
//     - Shadow Slayer quest
// - Vendors: 
//     - 
        
        
//         -1s rare cooldown
//         -New Chars talk to NPC by starter LS for insta 58, use pathwarden for 2 scint gems and a PDI
//         -tailoring prices cut down to 5 from 50
const CustomContent = () => {


  return (
    <div className="customContent">

    <h2 className="customContent__title">
    Custom Content
    </h2>

    <div className="customContent__content-box customContent__content-box--pvp">
    <h3 className="customContent__subtitle customContent__subtitle--pvp">
        PvP changes 
    </h3>
    <ul className="customContent__list customContent__list--pvp">
        <li className="customContent__list-item customContent__list-item--pvp">PK kills are all logged on the backend</li>
        <li className="customContent__list-item customContent__list-item--pvp">PK trophies on PK kills, used at the custom vendors</li>
        <li className="customContent__list-item customContent__list-item--pvp">Rares dispel upon getting tagged for PVP combat</li>
        <li className="customContent__list-item customContent__list-item--pvp">Kills are used to track ELO -- PvP Seasons in the works!</li>
    </ul>
    <ul className="customContent__list customContent__list--streaks">
        <li className="customContent__list-item customContent__list-item--streaks"><span className = "customContent__list-subtitle">Global Killstreak tracking</span></li>
        <li className="customContent__list-item customContent__list-item--streaks">Killing Spree (3 kills)</li>
        <li className="customContent__list-item customContent__list-item--streaks">Rampage (5 kills)</li>
        <li className="customContent__list-item customContent__list-item--streaks">Unstoppable (10 kills)</li>
        <li className="customContent__list-item customContent__list-item--streaks">Godlike (12 kills)</li>
        <li className="customContent__list-item customContent__list-item--streaks">Massacre (15 kills)</li>
    </ul>
    </div>

    <div className="customContent__content-box customContent__content-box--qol">
    <h3 className="customContent__subtitle customContent__subtitle--qol">
        QOL changes 
    </h3>

    <ul className="customContent__list customContent__list--qol">
        <li className="customContent__list-item customContent__list-item--qol">No timer on Chorizite</li>
        <li className="customContent__list-item customContent__list-item--qol">20 hour aug gem</li>
        <li className="customContent__list-item customContent__list-item--qol">Only have to flag aug once</li>
        <li className="customContent__list-item customContent__list-item--qol">Unlimited resets at Asheron's Castle</li>
        <li className="customContent__list-item customContent__list-item--qol">No timer on coals</li>
        <li className="customContent__list-item customContent__list-item--qol">Tailoring prices cut to 5 MMDs</li>
        <li className="customContent__list-item customContent__list-item--qol">1s rare cooldown</li>
        <li className="customContent__list-item customContent__list-item--qol">Level 58, 2 Scints and PDI for new chars</li>
        <li className="customContent__list-item customContent__list-item--qol">Sellable massives</li>
    </ul>
    </div>
    <div className="customContent__content-box customContent__content-box--quests">
    <h3 className="customContent__subtitle customContent__subtitle--quests">
        Quests 
    </h3>

    <ul className="customContent__list customContent__list--quests">
        <li className="customContent__list-item customContent__list-item--quests">Black Pages of Salt and Ash quest</li>
        <li className="customContent__list-item customContent__list-item--quests">Viss flagging and Viss implemented</li>
        <li className="customContent__list-item customContent__list-item--quests">DI flagging Quest and DI implemented</li>
        <li className="customContent__list-item customContent__list-item--quests">Unlimited resets at Asheron's Castle</li>
        <li className="customContent__list-item customContent__list-item--quests">Custom Arcane Lore Augmentation gem </li>
        <li className="customContent__list-item customContent__list-item--quests">Shadow Slayer quest</li>

    </ul>
    </div>
    <div className="customContent__content-box customContent__content-box--vendors">
    <h3 className="customContent__subtitle customContent__subtitle--vendors">
        Vendors 
    </h3>

    <ul className="customContent__list customContent__list--vendors">
        <li className="customContent__list-item customContent__list-item--vendors">Dmitri - PKA - Coals, Aug Gems, Comps and more</li>
        <li className="customContent__list-item customContent__list-item--vendors">Daniel - PKA - MMDs for PK Trophies</li>
        <li className="customContent__list-item customContent__list-item--vendors">Dalomar - Holtburg - Tailoring Items</li>
        <li className="customContent__list-item customContent__list-item--vendors">Laurana - GW - Master Fletcher</li>

    </ul>
    {/* <img src={dalomarArmor} alt="Dalomar Armor" className="customContent__img customContent__img--dalomarArmor"/>
    <img src={dalomarClothing} alt="Dalomar Clothing" className="customContent__img customContent__img--dalomarClothing"/>
    <img src={dalomarDyes} alt="Dalomar Dyes" className="customContent__img customContent__img--dalomarDyes"/>
    <img src={dalomarMagic} alt="Dalomar Magic" className="customContent__img customContent__img--dalomarMagic"/>
    <img src={dalomarWeapons} alt="Dalomar Weapons" className="customContent__img customContent__img--dalomarWeapons"/> */}
    </div>
    </div>
  );
};

export default CustomContent;
