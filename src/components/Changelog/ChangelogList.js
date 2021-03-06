import React from 'react';
import riptideGem from '../../img/RiptideGem.png'
import backpacks from '../../img/changelogImages/backpacks.png'
import shadowSlayer from '../../img/changelogImages/shadowSlayer.png'
import darkIsle from '../../img/changelogImages/darkIsle.png'
import ruschk from '../../img/changelogImages/ruschk.png'

import stipends from '../../img/changelogImages/43020.png'
import trinkets from '../../img/changelogImages/trinkets.png'
import stipendChangelog from '../../img/changelogImages/stipendChangelog.png'
import undeadChangelog from '../../img/changelogImages/undeadChangelog.png'
import candethChangelog from '../../img/changelogImages/candethChangelog.jpg'
import mmdChangelog from '../../img/changelogImages/mmdChangelog.jpg'


const ChangelogList = () => {
  return (
    <div className="changelogList">
      <div className="changelogList__item changelogList__item--left">
        <p className="changelogList__item__title changelogList__item__title--left">MMDeez Nuts</p>
        <p className="changelogList__item__date changelogList__item__date--right">5/17/20</p>

        <img
          src={mmdChangelog}
          alt="Changelog - MMDs"
          className="changelogList__item__img changelogList__item__img--left"
        />
        <div className="changelogList__item__card changelogList__item__card--right">
          <ul className="changelogList__item__text">
            <li className="changelogList__item__item">Funky vendor issue with new release fixed.</li>
            <li className="changelogList__item__item">DI mobs will now spawn correctly. The spawns will start off in groups of 5 normal mobs. Killing the normal mobs will trigger the Boss mob to spawn.</li>
            <li className="changelogList__item__item">Golems have finally made their way out to DI as well</li>
            <li className="changelogList__item__item">Curse of Ravens Fury ring range has been modified. It should hit closer targets now. *fingers crossed*</li>
            <li className="changelogList__item__item">Feeding Tubes and Forgotten Chasm mobs now drop epic loot</li>
            <li className="changelogList__item__item">Mosswart Agitator now drops Armband</li>
            <li className="changelogList__item__item">Egg Orchard, Path of the Blind, Forgotten Chasm, Matron Hive East, Feeding Tubes, Dark Design, and Creepy Canyons mobs now have a chance to drop 1 MMD note</li>
            <li className="changelogList__item__item">Sanamar Collector accepts all the ninja dungeon mob trophies as shareable XP</li>
            <li className="changelogList__item__item">All other world collectors accept the above trophies as shareable XP</li>
          </ul>
        </div>
      </div> 
      <div className="changelogList__item changelogList__item--right">
        <p className="changelogList__item__title changelogList__item__title--right">Total Recall</p>
        <p className="changelogList__item__date changelogList__item__date--left">5/15/20</p>

        <img
          src={candethChangelog}
          alt="Changelog - Recall Spells"
          className="changelogList__item__img changelogList__item__img--right"
        />
        <div className="changelogList__item__card changelogList__item__card--left">
          <ul className="changelogList__item__text">
            <li className="changelogList__item__item">GW Invaders (Recall Quest) in game, working as retail</li>
            <li className="changelogList__item__item">Fetish of the Dark Idols added to Dmitri for 30 trophies</li>
            <li className="changelogList__item__item">Candeth Keep Recall quest added</li>
            <li className="changelogList__item__item">Knorr armor added to loot table</li>
            <li className="changelogList__item__item">Olthoi Celdon now dying properly</li>
            <li className="changelogList__item__item">Recipes for Shadow, Seasoned Explorer, and Undead slayer bugged. Being worked on now</li>
            <li className="changelogList__item__item">Misc crashes fixed. Including, but not limited to:</li>
            <li className="changelogList__item__item">First tink on items</li>
            <li className="changelogList__item__item">Bobo (generator monster kills)</li>
            <li className="changelogList__item__item">Green Garnet Tinking</li>
          </ul>
        </div>
      </div> 
      <div className="changelogList__item changelogList__item--left">
        <p className="changelogList__item__title changelogList__item__title--left">Call Me Bruce Campbell Cuz I'm An...</p>
        <p className="changelogList__item__date changelogList__item__date--right">5/13/20</p>

        <img
          src={undeadChangelog}
          alt="Changelog - Undead Slayer"
          className="changelogList__item__img changelogList__item__img--left"
        />
        <div className="changelogList__item__card changelogList__item__card--right">
          <ul className="changelogList__item__text">
            <li className="changelogList__item__item">Undead Slayer now in game, working as retail</li>
            <li className="changelogList__item__item">Void wands in loot -- for realsies</li>
            <li className="changelogList__item__item">Void -> War Timer working -- for realsies</li>
            <li className="changelogList__item__item">Olthoi Armor added to loot</li>
            <li className="changelogList__item__item">Haebrean Armor added to loot</li>
          </ul>
        </div>
      </div>  
      <div className="changelogList__item changelogList__item--right">
        <p className="changelogList__item__title changelogList__item__title--right">Archers Are Hard To Please</p>
        <p className="changelogList__item__date changelogList__item__date--left">5/09/20</p>

        <img
          src={stipendChangelog}
          alt="Changelog - Stipend Timers"
          className="changelogList__item__img changelogList__item__img--right"
        />
        <div className="changelogList__item__card changelogList__item__card--left">
          <ul className="changelogList__item__text">
            <li className="changelogList__item__item">Greater Primastic Darts and Quarrels should now work properly</li>
            <li className="changelogList__item__item">Focus Stone added to Dmitri</li>
            <li className="changelogList__item__item">Purified Mouryou Nekode added to Dalomar</li>
            <li className="changelogList__item__item">Greater Deadly recipe fixes in Laurana</li>
            <li className="changelogList__item__item">Wooden Top added to Dalomar</li>
            <li className="changelogList__item__item">/fixbusy added back in</li>
            <li className="changelogList__item__item">Stipend Certificate prices dropped to 1</li>
            <li className="changelogList__item__item">Stipend Ring and Wall Certs combined</li>
            <li className="changelogList__item__item">Stipend timers cut in half</li>
            <li className="changelogList__item__item">The Stag of Bellenesse, The Dragon of Power, Karlun's Visage, Asheron's Jumpsuit, Empyrean Jumpsuit added to Dalomar</li>
            <li className="changelogList__item__item">Glyphs removed from Dmitri</li>
            <li className="changelogList__item__item">Gem of Knowledge increased to 10bill (1x) base</li>
          </ul>
        </div>
      </div>  
      <div className="changelogList__item changelogList__item--left">
        <p className="changelogList__item__title changelogList__item__title--left">Flagging Is For Nerds</p>
        <p className="changelogList__item__date changelogList__item__date--right">5/03/20</p>

        <img
          src={trinkets}
          alt="Changelog - Trinkets"
          className="changelogList__item__img changelogList__item__img--left"
        />
        <div className="changelogList__item__card changelogList__item__card--right">
          <ul className="changelogList__item__text">
            <li className="changelogList__item__item">Void to War timer, 3-5s in between schools</li>
            <li className="changelogList__item__item">Trinkets have been added to loot. Imbues for those trinkets soon to come. Collect the salvage!</li>
            <li className="changelogList__item__item">Aetheria quest added. Aetheria will soon drop in loot.</li>
            <li className="changelogList__item__item">You no longer have to flag for Aug gem. Flag check removed on the Aug Realm portal.</li>
            <li className="changelogList__item__item">Legendary Heartseeker now works correctly</li>
            <li className="changelogList__item__item">XP Modifier reduced to 2.0X.</li>
            <li className="changelogList__item__item">Void nerf turned down to 30% until Aetheria come out</li>
          </ul>
        </div>
      </div>    
      <div className="changelogList__item changelogList__item--right">
        <p className="changelogList__item__title changelogList__item__title--right">Stipends, Hero Tokens</p>
        <p className="changelogList__item__date changelogList__item__date--left">4/30/20</p>

        <img
          src={stipends}
          alt="Riptide Gem of Knowledge"
          className="changelogList__item__img changelogList__item__img--right"
        />
        <div className="changelogList__item__card changelogList__item__card--left">
          <ul className="changelogList__item__text">
            <li className="changelogList__item__item">Arcane augmentation vendor fixed</li>
            <li className="changelogList__item__item">Laurana fixes</li>
            <li className="changelogList__item__item">
            Hero tokens implemented
            </li>
            <li className="changelogList__item__item">
            Stipends are here
            </li>
            <li className="changelogList__item__item">
            Master Fletcher's portal fixed
            </li>
            <li className="changelogList__item__item">
            Virindi Mask vendors will now accept the masks from our Tailor
            </li>
            <li className="changelogList__item__item">
            Creatures on DI are no longer Bunnies
            </li>
            <li className="changelogList__item__item">
            Colored Eggs no longer drop.
            </li>
          </ul>
        </div>
      </div>
      <div className="changelogList__item changelogList__item--left">
        <p className="changelogList__item__title changelogList__item__title--left">New Augmentation and More</p>
        <p className="changelogList__item__date changelogList__item__date--right">4/24/20</p>

        <img
          src={riptideGem}
          alt="Riptide Gem of Knowledge"
          className="changelogList__item__img changelogList__item__img--left"
        />
        <div className="changelogList__item__card changelogList__item__card--right">
          <ul className="changelogList__item__text">
            <li className="changelogList__item__item">
              Garbled player names when a player loses their killing spree fixed
            </li>
            <li className="changelogList__item__item">
              GDLE Inventory tracker has begun progress. Progress will be slow,
              so don't expect much for a little while.
            </li>
            <li className="changelogList__item__item">
              Void delay in between casting war and void magic almost finished
            </li>
            <li className="changelogList__item__item">
              Asheron has been hard at work, and now has a new Augmentation Gem
              for you to acquire! Visit Asheron at his castle and turn in a
              Blank Augmentation Gem along with 1bill xp for your very own
              Riptide Gem of Knowledge! This gem will act in the same fashion as
              the Blackmoor's Favor and Asheron's Lesser Benediction gems. Using
              the gem will increase your arcane by 60 points for 24 hrs.
            </li>
            <li className="changelogList__item__item">
              Visit Hassha east of Yanshi to try out the Pages of Salt and Ash
              questline!
            </li>
            <li className="changelogList__item__item">
              Legendary chests have had a small overhaul, amount of items per
              pull has been increase and a 5% chance of having a lvl 8 scroll
              inside of it
            </li>
          </ul>
        </div>
      </div>
      <div className="changelogList__item changelogList__item--right">
        <p className="changelogList__item__title changelogList__item__title--right">Big Ass Packs, Son</p>
        <p className="changelogList__item__date changelogList__item__date--left">4/20/20</p>

        <img
          src={backpacks}
          alt="Riptide Gem of Knowledge"
          className="changelogList__item__img changelogList__item__img--right"
        />
        <div className="changelogList__item__card changelogList__item__card--left">
          <ul className="changelogList__item__text">
            
            <li className="changelogList__item__item">
            Killstreak gibberish on some player names fixed
            </li>
            <li className="changelogList__item__item">
            Killstreaks will persist on logout.
            </li>
            <li className="changelogList__item__item">
            Faran Robe and Utter Darkness robe prices fixed.
            </li>
            <li className="changelogList__item__item">
            Golden Gromnies moved to Dmitri.
            </li>
            <li className="changelogList__item__item">
            48 slot and 64 slot packs have been added to Dmitri.
            </li>
            <li className="changelogList__item__item">
            Various fixes to the Shadow Slayer quest
            </li>
          </ul>
        </div>
      </div>
      <div className="changelogList__item changelogList__item--left">
        <p className="changelogList__item__title changelogList__item__title--left">EggTide and Shadow Slayer</p>
        <p className="changelogList__item__date changelogList__item__date--right">4/18/20</p>

        <img
          src={shadowSlayer}
          alt="Shadow Slayer"
          className="changelogList__item__img changelogList__item__img--left"
        />
        <div className="changelogList__item__card changelogList__item__card--right">
          <ul className="changelogList__item__text">
            <li className="changelogList__item__item">
            DI mobs have been overcome with a sense of Easter</li>
            <li className="changelogList__item__item">
            Kill tracking (backend, you won't see any affect from this) implemented to set us up to deploy our ELO system.
            </li>
            <li className="changelogList__item__item">
            Kill streaks implemented. Streaks do NOT persist through sessions (yet), so when you log out, you will lose your streak.
            </li>
            <li className="changelogList__item__item">
            Shadow Slayer quest has come to Riptide</li>
            <li className="changelogList__item__item">
            Requested tailors added to Dalomar 
            </li>
          </ul>
        </div>
      </div>
      <div className="changelogList__item changelogList__item--right">
        <p className="changelogList__item__title changelogList__item__title--right">Tag, You're It</p>
        <p className="changelogList__item__date changelogList__item__date--left">4/07/20</p>

        <img
          src={ruschk}
          alt="Ruschk"
          className="changelogList__item__img changelogList__item__img--right"
        />
        <div className="changelogList__item__card changelogList__item__card--left">
          <ul className="changelogList__item__text">
            
            <li className="changelogList__item__item">
            </li>
            <li className="changelogList__item__item">
            PK tags happen regardless of evade or resist            </li>
            <li className="changelogList__item__item">
            Rares will now properly dispel upon getting PK tagged
            </li>
            <li className="changelogList__item__item">
            <a href = "https://asheron.fandom.com/wiki/Fetish_of_the_Dark_Idols">Fetish of the Dark Idols now IG</a> 
            </li>
            <li className="changelogList__item__item">
            Rare cooldown dropped to 1s between gems
            </li>
            <li className="changelogList__item__item">
            Rares will dispel upon getting PK tagged
            </li>
            <li className="changelogList__item__item">
            Ruschk increased in power
            </li>
          </ul>
        </div>
      </div>
      <div className="changelogList__item changelogList__item--left">
        <p className="changelogList__item__title changelogList__item__title--left">Dark Isle Baby!</p>
        <p className="changelogList__item__date changelogList__item__date--right">4/01/20</p>

        <img
          src={darkIsle}
          alt="Riptide Gem of Knowledge"
          className="changelogList__item__img changelogList__item__img--left"
        />
        <div className="changelogList__item__card changelogList__item__card--right">
          <ul className="changelogList__item__text">
            <li className="changelogList__item__item">
            Dark Isle release v1.0
            </li>
            <li className="changelogList__item__item">
            Legendaries drop on DI creatures. The creatures cast level 8's, so beware!
            </li>
            <li className="changelogList__item__item">
            Void damage will be reduced by 25%</li>
            <li className="changelogList__item__item">
            Sanamar collector should share EO/POTB/DD trophies in fellow now
            </li>
            <li className="changelogList__item__item">
            Essences can stack up to 100 now
            </li>
            <li className="changelogList__item__item">
            Vissidal portal will spawn on DI properly
            </li>
            <li className="changelogList__item__item">
            PK Trophy drop rate will be increased to 50%</li>
            <li className="changelogList__item__item">
            Dark Crystal Spire will no longer attack you. When the spire moved, it was bugging the DI flagging portal
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ChangelogList;
