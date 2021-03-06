import React, { useState } from 'react';


import Professors from './Articles/Professors';
import Pvp from './Articles/Pvp';
import Qol from './Articles/Qol';
import Vendors from './Articles/Vendors';
import Quests from './Articles/Quests';
import RiptideGem from './Articles/RiptideGem';
import Infinite from './Articles/Infinite';
import CandethKeep from './Articles/CandethKeep';
import DarkIsle from './Articles/DarkIsle';
import Bugs from './Articles/Bugs';

import NotFound from './Articles/NotFound';

const Wiki = (props) => {

  

  const [view, setView] = useState(props.location.search.split('?').join('').split('_').join(' ').split('%20').join(' ')  );
  const [filter, setFilter] = useState(props.location.search.split('?').join('').split('_').join(' ').split('%20').join(' '))


  const stubs = [
    {
      key: 'Infinite Mana Stone',
      title: 'Infiite Mana Stone',
      summary:
        'Custom quest for an infinite mana stone',
      thumbnail: 'infiniteStub',
      outsideFlag: "false",  
      tags: 'quest quests infinite mana stone',
    },
    {

      key: 'Bugs',
      title: 'Dye Bug',
      summary:
        'Dyes are not changing the color of the dyed item icon or being used up',
      thumbnail: 'bugStub',
      outsideFlag: "false",  
      tags: 'bug bugs dyes',
    },
    {

      key: 'Bugs',
      title: 'Chalk Board Bug',
      summary:
        'Chalk Board is currently not working',
      thumbnail: 'bugStub',
      outsideFlag: "false",  
      tags: 'bug bugs chalk board',
    },
    {

      key: 'Bugs',
      title: 'Foc Stone Bug',
      summary:
        'For the first part of Focusing Stone, the Lesser Acolyte at the end (lowest tower) is just named Lich.  Otherwise works as retail',
      thumbnail: 'bugStub',
      outsideFlag: "false",  
      tags: 'bug bugs focusing stone',
    },  
    {

      key: 'Bugs',
      title: 'Recipes Bug',
      summary:
        'Recipes (undead slayer, shadow slayer, society armor and more) are causing issues.',
      thumbnail: 'bugStub',
      outsideFlag: "false",  
      tags: 'bug bugs focusing stone',
    },
    {
      key: 'Society Stamps',
      title: 'Society Stamps',
      summary:
        'For Society Stamps quest, the stamps are not in the chests at the end/as written on ACWiki, they are on the ground at start of the dungeon.  Otherwise work as retail',
      thumbnail: 'societyStub',
      outsideFlag: "true",  
      link: "https://asheron.fandom.com/wiki/Exploration_Society_Letters",
      tags: 'quest quests society stamps explorer',
    },
    {
      key: 'Tier 7',
      title: 'Tier 7 Changes',
      summary:
        'EO, POTB, FC, 120 Hive, FT, DD and CC mobs now drop MMDs and epic tier loot',
      thumbnail: 'qolStub',
      outsideFlag: "false",  
      tags: 'eo potb fc chasm forgotten egg orchard path blind hive feeding tubes dark desing creepy canyon cc mmd qol quality life',
    },
    {
      key: 'GW Recall',
      title: 'GW Recall Quest',
      summary:
        'Glenden Wood Recall Quest now in game.  Works as retail',
      thumbnail: 'gwRecallStub',
      outsideFlag: "true",  
      link: "https://asheron.fandom.com/wiki/Glenden_Wood_Invaders",
      tags: 'quest quests glenden wood gw recall',
    },
    {
      key: 'Candeth Recall',
      title: 'Candeth Keep Recall Quest',
      summary:
        'Candeth Keep Recall Quest now in game.  See changes to retail in full article',
      thumbnail: 'candethRecallStub',
      outsideFlag: "false",  
      tags: 'quest quests candeth keep recall',
    },
    {

      key: 'Bugs',
      title: 'Recipes Bug',
      summary:
        'Recipes for Shadow, Seasoned Explorer, and Undead slayer bugged.  Being worked on now.',
      thumbnail: 'bugStub',
      outsideFlag: "false",  
      tags: 'bug bugs font joji',
    },
    {
      key: 'Undead Slayer',
      title: 'Undead Slayer Quest',
      summary:
        'Undead Slayer quest now in game, working as retail',
      thumbnail: 'undeadSlayerStub',
      outsideFlag: "true",  
      link: "https://asheron.fandom.com/wiki/Lunnum%27s_Return",
      tags: 'quests quest undead slayer xikma skull',
    },
    {
      key: 'Bugs',
      title: 'Joji Bug',
      summary:
        'Font of Joji use flag not working properly',
      thumbnail: 'bugStub',
      outsideFlag: "false",  
      tags: 'bug bugs font joji',
    },
    {
      key: 'Bugs',
      title: 'Corpse Permit Bug',
      summary:
        'Corpse permit currently bugged/not working properly',
      thumbnail: 'bugStub',
      outsideFlag: "false",  
      tags: 'bug bugs corpse permit',
    },
  {
      key: 'Bugs',
      title: 'PK Timer Bug',
      summary:
        'PK Logout Timer on PK tag currently bugged',
      thumbnail: 'bugStub',
      outsideFlag: "false",  
      tags: 'bug bugs tag pk timer',
    },
    {
        key: 'Stipends',
        title: 'Stipend Changes',
        summary:
          'Stipend prices cut to 1, timer cut in half, Ring and Wall cert. combined, and XP cert. gives 5bill.  Otherwise works as retail',
        thumbnail: 'stipendStub',
        outsideFlag: "true",
        link: "https://asheron.fandom.com/wiki/Stipends",
        tags: 'stipend stipends',
      },
    {
        key: 'Bugs',
        title: 'Shadow Slayer Bug',
        summary:
          'Shadow Slayer quest line currently broken',
        thumbnail: 'bugStub',
        outsideFlag: "false",  
        tags: 'bug bugs shadow slayer',
      },
    {
        key: 'Bugs',
        title: 'Quest Timer Bug',
        summary:
          'Quest Timers currently off.  **Fixed with 5/9/20 reset**',
        thumbnail: 'bugStub',
        outsideFlag: "false",  
        tags: 'bug bugs quest timer',
      },
    {
        key: 'Bugs',
        title: 'Aun Ralirea Bug',
        summary:
          'Aun Ralirea currently only respawns after server resets.',
        thumbnail: 'bugStub',
        outsideFlag: "false",  
        tags: 'bug bugs ralirea skill credit aun',
      },
    {
      key: 'Riptide Gem',
      title: 'Riptide Gem of Knowledge',
      summary:
        'Custom augmentation that works like Blackmoor\'s Favor, but is +60 to Arcane Lore.  Overwrites creature buff.',
      thumbnail: 'rtgStub',
      outsideFlag: "false",  
      tags: 'quest gem knowledge riptide arcane lore asheron aug augmentation',
    },
    {
      key: 'BPOSA',
      title: 'Pages of Salt and Ash',
      summary:
        'Black Pages of Salt and Ash quest added.  Otherwise works as end of retail.',
      thumbnail: 'bposaStub',
      link: 'https://asheron.fandom.com/wiki/Pages_of_Salt_and_Ash',
      outsideFlag: "true",  
      tags: 'quest pages salt ash',
    },
    {
      key: 'Shadow Slayer Weapons',
      title: 'Shadow Slayer Weapons',
      summary:
        'Shadow Slayer weapons quest added as end of retail',
      thumbnail: 'shadowStub',
      outsideFlag: "true",  
      link: "https://asheron.fandom.com/wiki/Shadowfire_Stone_Quest",  
      tags: 'quest shadow slayer',
    },
    {
      key: 'Dark Isle',
      title: 'Dark Isle',
      summary:
        'Dark Isle added, but not exactly as retail.  See full article for changes',
      thumbnail: 'diStub',
      outsideFlag: "false",  
      tags: 'quest dark isle flag flagging',
    },
    {
      key: 'Legendary Chests',
      title: 'Legendary Chests',
      summary:
        'Legendary Chests drop level 8 Spell Scrolls.  Otherwise work as retail',
      thumbnail: 'legStub',
      outsideFlag: "true",
      link: "https://asheron.fandom.com/wiki/Legendary_Chest",
      tags: 'legendary level 8 scrolls spells comps quills glyphs inks',
    },
    {
        key: 'Viss',
        title: 'Vissidal',
        summary:
          'Vissidal Island added, mostly as retail.  Boss trophies stack to 100',
        thumbnail: 'vissStub',
        outsideFlag: "true",  
        link: "https://asheron.fandom.com/wiki/Vissidal",  
        tags: 'quest viss vissidal flag flagging',
      },
    {
      key: 'Asherons Castle',
      title: 'Skill Resets',
      summary:
        'Skill Resets at Asheron\'s Castle set to 20 hour timer.  Otherwise works as end of retial.',
      thumbnail: 'asheronStub',
      outsideFlag: "true",  
      link: "https://asheron.fandom.com/wiki/Attribute_and_Skill_Redistribution",  
      tags: 'quest asheron castle asherons reset',
    },
    {
      key: 'Vendors',
      title: 'Custom Vendors',
      summary:
        'Custom Vendors accepting the PK trophies that drop on death in PKA, Holtburg and GW for a multitude of useful items/tailoring armor and weapons.',
      thumbnail: 'vendorStub',
      outsideFlag: "false",  
      tags: 'trophy trophies dmitri dalomar daniel tailoring coals items vendor fletching master laurana holtburg pka arena quills glyphs inks',
    },
    {
      key: 'Quests',
      title: 'Added Quests',
      summary:
        'Quests added by RT\'s content team on top of the standard GDLE.  As a rule, prior to Aug. 2008 means the content would not be in game.  Includes: Shadow Slayer, Dark Isle Flagging, Pages of Salt and Ash Quest, Custom Arcane Augmentation',
      thumbnail: 'questStub',
      outsideFlag: "false",  
      tags: 'Slayer Shadow Dark Isle DI Flagging flag black pages salt ash arcane lore aug',
    },
    {
      key: 'QoL',
      title: 'QoL Changes',
      summary:
        'Bellas flagging | Chorizite, coal and aug timer drops | Unlimited skill resets | Sellable Massives | Tailoring price dropped | Starter goodies | And more ',
      thumbnail: 'qolStub',
      outsideFlag: "false",  
      tags: 'qol quality chorizite aug bellas resets castle asheron coals tailor tailoring rare rares scint scintillating scints massives death items',
    },
    {
      key: 'Professors',
      title: 'Spell Professors',
      summary:
        'Spell professors in Arwic have been changed to cost only 1 pyreal per level.  Select them and then choose in the chat box to "Tell to Professor of [x]" with a message of "Level X" to learn that level of spells in that class.',
      thumbnail: 'professorsStub',
      outsideFlag: "false",  
      tags: 'arwic professors spells research',
    },
    {
      key: 'Bugs',
      title: 'HP Aug Bug',
      summary:
        'When giving an Aug Gem to Donatello Linante, if you have >8b unspent xp he will take 8b rather than 2b',
      thumbnail: 'bugStub',
      outsideFlag: "false",  
      tags: 'bug bugs aug augmentation gem xp',
    },
    {
      key: 'Bugs',
      title: 'RT GoK Bug',
      summary:
        'If you do not have 1b unspent when giving Asheron a blank aug gem, he will keep it',
      thumbnail: 'bugStub',
      outsideFlag: "false",  
      tags: 'bug bugs asheron gem knowledge aug augmentation',
    },
    {
        key: 'Bugs',
        title: 'Axe Damage Bug',
        summary:
          'Tier 8 Axe max damage should be 74, but does not drop.  *GDLE bug*',
        thumbnail: 'bugStub',
        outsideFlag: "false",  
        tags: 'bug bugs axe',
      },
    {
        key: 'Bugs',
        title: 'Void Wand Bug',
        summary:
          'Void wands dropping with war weild reqs.  *GLDE bug*',
        thumbnail: 'bugStub',
        outsideFlag: "false",  
        tags: 'bug bugs void wands',
      },
    {
      key: 'PvP',
      title: 'PvP Changes',
      summary:
        'PK Trophies used at custom vendors now drop on kills.  All kills are logged in the back end.  Rares dispel on PK tag.  ELO/PvP System in the works',
      thumbnail: 'pvpStub',
      outsideFlag: "false",  
      tags: 'pvp rares trophy trophies elo tracker tracking spree killstreak',
    }
  ];

  const questStubs = [
    {
      key: 'Infinite Mana Stone',
      title: 'Infiite Mana Stone',
      summary:
        'Custom quest for an infinite mana stone',
      thumbnail: 'infiniteStub',
      outsideFlag: "false",  
      tags: 'quest quests infinite mana stone',
    },
    {
      key: 'GW Recall',
      title: 'GW Recall Quest',
      summary:
        'Glenden Wood Recall Quest now in game.  Works as retail',
      thumbnail: 'gwRecallStub',
      outsideFlag: "true",  
      link: "https://asheron.fandom.com/wiki/Glenden_Wood_Invaders",
      tags: 'quest quests glenden wood gw recall',
    },
    {
      key: 'Society Stamps',
      title: 'Society Stamps',
      summary:
        'For Society Stamps quest, the stamps are not in the chests at the end/as written on ACWiki, they are on the ground at start of the dungeon.  Otherwise work as retail',
      thumbnail: 'societyStub',
      outsideFlag: "true",  
      link: "https://asheron.fandom.com/wiki/Exploration_Society_Letters",
      tags: 'quest quests society stamps explorer',
    },
    {
      key: 'Candeth Recall',
      title: 'Candeth Keep Recall Quest',
      summary:
        'Candeth Keep Recall Quest now in game.  See changes to retail in full article',
      thumbnail: 'candethRecallStub',
      outsideFlag: "false",  
      tags: 'quest quests candeth keep gw recall',
    },
    {
      key: 'Undead Slayer',
      title: 'Undead Slayer Quest',
      summary:
        'Undead Slayer quest now in game, working as retail',
      thumbnail: 'undeadSlayerStub',
      outsideFlag: "true",  
      link: "https://asheron.fandom.com/wiki/Lunnum%27s_Return",
      tags: 'bug bugs font joji',
    },
      {
    key: 'Riptide Gem',
    title: 'Riptide Gem of Knowledge',
    summary:
      'Custom augmentation that works like Blackmoor\'s Favor, but is +60 to Arcane Lore.  Overwrites creature buff.',
    thumbnail: 'rtgStub',
    outsideFlag: "false",  
    tags: 'quest gem knowledge riptide arcane lore asheron aug augmentation',
  },
  {
    key: 'BPOSA',
    title: 'Pages of Salt and Ash',
    summary:
      'Black Pages of Salt and Ash quest added.  Otherwise works as end of retail.',
    thumbnail: 'bposaStub',
    link: 'https://asheron.fandom.com/wiki/Pages_of_Salt_and_Ash',
    outsideFlag: "true",  
    tags: 'quest pages salt ash',
  },
  {
    key: 'Shadow Slayer Weapons',
    title: 'Shadow Slayer Weapons',
    summary:
      'Shadow Slayer weapons quest added as end of retail',
    thumbnail: 'shadowStub',
    outsideFlag: "true",  
    link: "https://asheron.fandom.com/wiki/Shadowfire_Stone_Quest",  
    tags: 'quest shadow slayer',
  },
  {
    key: 'Dark Isle',
    title: 'Dark Isle',
    summary:
      'Dark Isle added, but not exactly as retail.  See full article for changes',
    thumbnail: 'diStub',
    outsideFlag: "false",  
    tags: 'quest dark isle flag flagging',
  },
  {
    key: 'Viss',
    title: 'Vissidal',
    summary:
      'Vissidal Island added, mostly as retail.  Boss trophies stack to 100',
    thumbnail: 'vissStub',
    outsideFlag: "true",  
    link: "https://asheron.fandom.com/wiki/Vissidal",  
    tags: 'quest viss vissidal flag flagging',
  },
  {
    key: 'Asherons Castle',
    title: 'Skill Resets',
    summary:
      'Skill Resets at Asheron\'s Castle set to 20 hour timer.  Otherwise works as end of retial.',
    thumbnail: 'asheronStub',
    outsideFlag: "true",  
    link: "https://asheron.fandom.com/wiki/Attribute_and_Skill_Redistribution",  
    tags: 'quest asheron castle asherons reset',
  },
      {
        key: 'Quests',
        title: 'Added Quests',
        summary:
          'Quests added by RT\'s content team on top of the standard GDLE.  As a rule, prior to Aug. 2008 means the content would not be in game.  Includes: Shadow Slayer, Dark Isle Flagging, Pages of Salt and Ash Quest, Custom Arcane Augmentation',
        thumbnail: 'questStub',
        outsideFlag: "false",  
        tags: 'Slayer Shadow Dark Isle DI Flagging flag black pages salt ash arcane lore aug',
      }
  ]

  const vendorsStubs = [
    {
        key: 'Vendors',
        title: 'Custom Vendors',
        summary:
          'Custom Vendors accepting the PK trophies that drop on death in PKA, Holtburg and GW for a multitude of useful items/tailoring armor and weapons.',
        thumbnail: 'vendorStub',
        outsideFlag: "false",  
        tags: 'trophy trophies dmitri dalomar daniel tailoring coals items vendor fletching master laurana holtburg pka arena quills glyphs inks',
      }
  ]
  const pvpStubs = [
    {
        key: 'PvP',
        title: 'PvP Changes',
        summary:
          'PK Trophies used at custom vendors now drop on kills.  All kills are logged in the back end.  Rares dispel on PK tag.  ELO/PvP System in the works',
        thumbnail: 'pvpStub',
        outsideFlag: "false",  
        tags: 'pvp rares trophy trophies elo tracker tracking spree killstreak',
      }
  ]
  const qolStubs = [
    {
        key: 'QoL',
        title: 'QoL Changes',
        summary:
          'Bellas flagging | Chorizite, coal and aug timer drops | Unlimited skill resets | Sellable Massives | Tailoring price dropped | Starter goodies | And more ',
        thumbnail: 'qolStub',
        outsideFlag: "false",  
        tags: 'qol quality chorizite aug bellas resets castle asheron coals tailor tailoring rare rares scint scintillating scints massives death items',
      },
      {
        key: 'QoL',
        title: 'Tier 7 Changes',
        summary:
          'EO, POTB, FC, 120 Hive, FT, DD and CC mobs now drop MMDs and epic tier loot',
        thumbnail: 'qolStub',
        outsideFlag: "false",  
        tags: 'eo potb fc chasm forgotten egg orchard path blind hive feeding tubes dark desing creepy canyon cc mmd qol quality life',
      }
  ]
  const bugsStubs = [
    {

      key: 'Bugs',
      title: 'Dye Bug',
      summary:
        'Dyes are not changing the color of the dyed item icon or being used up',
      thumbnail: 'bugStub',
      outsideFlag: "false",  
      tags: 'bug bugs dyes',
    },
    
    {

      key: 'Bugs',
      title: 'Chalk Board Bug',
      summary:
        'Chalk Board is currently not working',
      thumbnail: 'bugStub',
      outsideFlag: "false",  
      tags: 'bug bugs chalk board',
    },
    {

      key: 'Bugs',
      title: 'Foc Stone Bug',
      summary:
        'For the first part of Focusing Stone, the Lesser Acolyte at the end (lowest tower) is just named Lich.  Otherwise works as retail',
      thumbnail: 'bugStub',
      outsideFlag: "false",  
      tags: 'bug bugs focusing stone',
    },
    {
      
      key: 'Bugs',
      title: 'Recipes Bug',
      summary:
        'Recipes for Shadow, Seasoned Explorer, and Undead slayer bugged.  Being worked on now.',
      thumbnail: 'bugStub',
      outsideFlag: "false",  
      tags: 'bug bugs font joji',
    },
    {
      key: 'Bugs',
      title: 'Joji Bug',
      summary:
        'Font of Joji use flag not working properly',
      thumbnail: 'bugStub',
      outsideFlag: "false",  
      tags: 'bug bugs font joji',
    },
    {
        key: 'Bugs',
        title: 'Corpse Permit Bug',
        summary:
          'Corpse permit currently bugged/not working properly',
        thumbnail: 'bugStub',
        outsideFlag: "false",  
        tags: 'bug bugs corpse permit',
      },
    {
        key: 'Bugs',
        title: 'PK Timer Bug',
        summary:
          'PK Logout Timer on PK tag currently bugged',
        thumbnail: 'bugStub',
        outsideFlag: "false",  
        tags: 'bug bugs tag pk timer',
      },
    {
        key: 'Bugs',
        title: 'Shadow Slayer Bug',
        summary:
          'Shadow Slayer quest line currently broken',
        thumbnail: 'bugStub',
        outsideFlag: "false",  
        tags: 'bug bugs shadow slayer',
      },
    {
        key: 'Bugs',
        title: 'Quest Timer Bug',
        summary:
          'Quest Timers currently off.  **Fixed with 5/9/20 reset**',
        thumbnail: 'bugStub',
        outsideFlag: "false",  
        tags: 'bug bugs quest timer',
      },
      {
        key: 'Bugs',
        title: 'Aun Ralirea Bug',
        summary:
          'Aun Ralirea currently only respawns after server resets.',
        thumbnail: 'bugStub',
        outsideFlag: "false",  
        tags: 'bug bugs ralirea skill credit aun',
      },
    {
        key: 'Bugs',
        title: 'Axe Damage Bug',
        summary:
          'Tier 8 Axe max damage should be 74, but does not drop.  *GDLE bug*',
        thumbnail: 'bugStub',
        outsideFlag: "false",  
        tags: 'bug bugs axe',
      },
    {
        key: 'Bugs',
        title: 'Void Wand Bug',
        summary:
          'Void wands dropping with war weild reqs.  *GLDE bug*',
        thumbnail: 'bugStub',
        outsideFlag: "false",  
        tags: 'bug bugs void wands',
      },
      {
        key: 'Bugs',
        title: 'HP Aug Bug',
        summary:
          'When giving an Aug Gem to Donatello Linante, if you have >8b unspent xp he will take 8b rather than 2b',
        thumbnail: 'bugStub',
        outsideFlag: "false",  
        tags: 'bug bugs aug augmentation gem xp',
      },
      {
        key: 'Bugs',
        title: 'RT GoK Bug',
        summary:
          'If you do not have 1b unspent when giving Asheron a blank aug gem, he will keep it',
        thumbnail: 'bugStub',
        outsideFlag: "false",  
        tags: 'bug bugs asheron gem knowledge aug augmentation',
      },
  ]

  const lastFiveStubs = [];

  for (let i = 0; i < 5; i++) {
    lastFiveStubs.push(stubs[i]);
  }

  const lowercaseFilter = filter.toLowerCase();

  const filteredStubs = stubs.filter((stub) => {
    return Object.keys(stub).some((key) =>
      stub[key].toLowerCase().includes(lowercaseFilter)
    );
  });

  const handleSearchChange = (e) => {
    setFilter(e.target.value);
    setView(e.target.value);
  };


  const showMainBox = () => {

    if (view !== '' && filteredStubs.length === 0) {
        return (
            <div className="wiki__content-box">
                <NotFound />
            </div>
        )
    }

    else if (view === 'Professors') {
      return (
        <div className="wiki__content-box">
          <Professors />
        </div>
      );
    } else if (view === 'PvP') {
        return (
          <div className="wiki__content-box">
            <Pvp />
          </div>
        );
      }
      else if (view === 'Infinite Mana Stone') {
        return (
          <div className="wiki__content-box">
            <Infinite />
          </div>
        );
      }
      else if (view === 'QoL' || view === 'Tier 7') {
        return (
          <div className="wiki__content-box">
            <Qol />
          </div>
        );
      }
      else if (view === 'Bugs') {
        return (
          <div className="wiki__content-box">
            <Bugs />
          </div>
        );
      }
      else if (view === 'Riptide Gem') {
        return (
          <div className="wiki__content-box">
            <RiptideGem />
          </div>
        );
      }
      else if (view === 'Candeth Recall') {
        return (
          <div className="wiki__content-box">
            <CandethKeep />
          </div>
        );
      }
      else if (view === 'Dark Isle') {
        return (
          <div className="wiki__content-box">
            <DarkIsle />
          </div>
        );
      }
      else if (view === 'Quests') {
        return (
          <div className="wiki__content-box">
            <Quests />
          </div>
        );
      }
      else if (view === 'Vendors') {
        return (
          <div className="wiki__content-box">
            <Vendors />
          </div>
        );
      }
     else if (view === '') {
      return (
        <div className="wiki__content-box">
          {lastFiveStubs.map((stub) => (
            <div className="wiki__content-box__stub">
              <h1 className="wiki__content-box__stub__title">{stub.title}</h1>
              <p className="wiki__content-box__stub__summary">{stub.summary}</p>
              <img
                src={require(`../../img/wiki/thumbnails/${stub.thumbnail}.jpg`)}
                alt={stub.thumbnail}
                className="wiki__content-box__stub__img"
              />
              {stub.outsideFlag === "true"
              ? 
              <a href = {stub.link} className = "wiki__content-box__stub__button--link">
                 <button className="wiki__content-box__stub__button wiki__content-box__stub__button--link__button">AC Wiki</button>
                  </a>
              :
              <button
                onClick={() => setView(stub.key)}
                className="wiki__content-box__stub__button"
              >
                Full Article
              </button>
              }
            </div>
          ))}
        </div>
      );
    } 
    else if (view === 'questStubs'){
        return (
          <div className="wiki__content-box">
            {questStubs.map((stub) => (
              <div className="wiki__content-box__stub">
                <h1 className="wiki__content-box__stub__title">{stub.title}</h1>
                <p className="wiki__content-box__stub__summary">{stub.summary}</p>
                <img
                  src={require(`../../img/wiki/thumbnails/${stub.thumbnail}.jpg`)}
                  alt={stub.thumbnail}
                  className="wiki__content-box__stub__img"
                />
  
                {stub.outsideFlag === "true"
                ? 
                <a href = {stub.link} className = "wiki__content-box__stub__button--link">
                <button className="wiki__content-box__stub__button wiki__content-box__stub__button--link__button">AC Wiki</button>
                 </a>              :
                <button
                  onClick={() => setView(stub.key)}
                  className="wiki__content-box__stub__button"
                >
                  Full Article
                </button>
                }
              </div>
            ))}
          </div>
        );
      }
    else if (view === 'vendorsStubs'){
        return (
          <div className="wiki__content-box">
            {vendorsStubs.map((stub) => (
              <div className="wiki__content-box__stub">
                <h1 className="wiki__content-box__stub__title">{stub.title}</h1>
                <p className="wiki__content-box__stub__summary">{stub.summary}</p>
                <img
                  src={require(`../../img/wiki/thumbnails/${stub.thumbnail}.jpg`)}
                  alt={stub.thumbnail}
                  className="wiki__content-box__stub__img"
                />
  
                {stub.outsideFlag === "true"
                ? 
                <a href = {stub.link} className = "wiki__content-box__stub__button--link">
                <button className="wiki__content-box__stub__button wiki__content-box__stub__button--link__button">AC Wiki</button>
                 </a>              :
                <button
                  onClick={() => setView(stub.key)}
                  className="wiki__content-box__stub__button"
                >
                  Full Article
                </button>
                }
              </div>
            ))}
          </div>
        );
      }
    else if (view === 'pvpStubs'){
        return (
          <div className="wiki__content-box">
            {pvpStubs.map((stub) => (
              <div className="wiki__content-box__stub">
                <h1 className="wiki__content-box__stub__title">{stub.title}</h1>
                <p className="wiki__content-box__stub__summary">{stub.summary}</p>
                <img
                  src={require(`../../img/wiki/thumbnails/${stub.thumbnail}.jpg`)}
                  alt={stub.thumbnail}
                  className="wiki__content-box__stub__img"
                />
  
                {stub.outsideFlag === "true"
                ? 
                <a href = {stub.link} className = "wiki__content-box__stub__button--link">
                <button className="wiki__content-box__stub__button wiki__content-box__stub__button--link__button">AC Wiki</button>
                 </a>              :
                <button
                  onClick={() => setView(stub.key)}
                  className="wiki__content-box__stub__button"
                >
                  Full Article
                </button>
                }
              </div>
            ))}
          </div>
        );
      }
    else if (view === 'qolStubs'){
        return (
          <div className="wiki__content-box">
            {qolStubs.map((stub) => (
              <div className="wiki__content-box__stub">
                <h1 className="wiki__content-box__stub__title">{stub.title}</h1>
                <p className="wiki__content-box__stub__summary">{stub.summary}</p>
                <img
                  src={require(`../../img/wiki/thumbnails/${stub.thumbnail}.jpg`)}
                  alt={stub.thumbnail}
                  className="wiki__content-box__stub__img"
                />
  
                {stub.outsideFlag === "true"
                ? 
                <a href = {stub.link} className = "wiki__content-box__stub__button--link">
                <button className="wiki__content-box__stub__button wiki__content-box__stub__button--link__button">AC Wiki</button>
                 </a>              :
                <button
                  onClick={() => setView(stub.key)}
                  className="wiki__content-box__stub__button"
                >
                  Full Article
                </button>
                }
              </div>
            ))}
          </div>
        );
      }
    else if (view === 'bugsStubs'){
        return (
          <div className="wiki__content-box">
            {bugsStubs.map((stub) => (
              <div className="wiki__content-box__stub">
                <h1 className="wiki__content-box__stub__title">{stub.title}</h1>
                <p className="wiki__content-box__stub__summary">{stub.summary}</p>
                <img
                  src={require(`../../img/wiki/thumbnails/${stub.thumbnail}.jpg`)}
                  alt={stub.thumbnail}
                  className="wiki__content-box__stub__img"
                />
  
                {stub.outsideFlag === "true"
                ? 
                <a href = {stub.link} className = "wiki__content-box__stub__button--link">
                <button className="wiki__content-box__stub__button wiki__content-box__stub__button--link__button">AC Wiki</button>
                 </a>              :
                <button
                  onClick={() => setView(stub.key)}
                  className="wiki__content-box__stub__button"
                >
                  Full Article
                </button>
                }
              </div>
            ))}
          </div>
        );
      }
    
    else {
      return (
        <div className="wiki__content-box">
          {filteredStubs.map((stub) => (
            <div className="wiki__content-box__stub">
              <h1 className="wiki__content-box__stub__title">{stub.title}</h1>
              <p className="wiki__content-box__stub__summary">{stub.summary}</p>
              <img
                src={require(`../../img/wiki/thumbnails/${stub.thumbnail}.jpg`)}
                alt={stub.thumbnail}
                className="wiki__content-box__stub__img"
              />

              {stub.outsideFlag === "true"
              ? 
              <a href = {stub.link} className = "wiki__content-box__stub__button--link">
                <button className="wiki__content-box__stub__button wiki__content-box__stub__button--link__button">AC Wiki</button>
                 </a>              :
                <button
                  onClick={() => setView(stub.key)}
                  className="wiki__content-box__stub__button"
                >
                  Full Article
                </button>
              }
            </div>
          ))}
        </div>
      );
    }
  };

  return (
    <div className="wiki">
      <div className="wiki__side-bar">
        <div className="wiki__side-bar__item wiki__side-bar__item--1" onClick={() => setView('questStubs')}>
          Quests
        </div>
        <div className="wiki__side-bar__item wiki__side-bar__item--2" onClick={() => setView('pvpStubs')}>PvP</div>
        <div className="wiki__side-bar__item wiki__side-bar__item--3" onClick={() => setView('qolStubs')}>QoL</div>
        <div className="wiki__side-bar__item wiki__side-bar__item--4" onClick={() => setView('vendorsStubs')}>
          Vendors
        </div>
        <div className="wiki__side-bar__item wiki__side-bar__item--5" onClick={() => setView('bugsStubs')}>
          Bugs
        </div>
      </div>
      <div className="wiki__search-bar">
          <input className="wiki__search-bar__search"
            type="search"
            placeholder="Search"
            onChange={handleSearchChange}
          />
      </div>
      {showMainBox()}
    </div>
  );
};

export default Wiki;
