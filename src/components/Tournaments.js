import React from 'react';

import plusEv from '../img/pfps/plusPFP.png';
import charmin from '../img/pfps/CharminPFP.png';
import skippy from '../img/pfps/SkippyPFP.png';
import skippyWin from '../img/skippyWin.png';
import doom from '../img/pfps/doomPFP.png';
import bbc from '../img/pfps/bbcPFP.png';
import fizzle from '../img/pfps/fizzlePFP.png';
import drunkFizzle from '../img/pfps/drunkfizzlePFP.png';
import joblow from '../img/pfps/joblowPFP.png';
import kingofengland from '../img/pfps/kingofenglandPFP.png';
import fozzy from '../img/pfps/yeetPFP.png';
import mkm from '../img/pfps/mkmPFP.png';
import mwb from '../img/pfps/mwbPFP.png';
import ohren from '../img/pfps/ohrenPFP.png';
import ricky from '../img/pfps/rickyPFP.png';
import shadowen from '../img/pfps/shadowenPFP.png';
import tindale from '../img/pfps/tindalePFP.png';
import winguyen from '../img/pfps/winguyenPFP.png';
import waerfleet from '../img/pfps/waerfleetPFP.png';
import mmd from '../img/mmd.png';
import dark from '../img/pfps/darkPFP.png';
import bz from '../img/pfps/bzPFP.png';
import twisted from '../img/pfps/twistedPFP.png';
import doesnttank from '../img/pfps/doesnttankPFP.png';
import pkTrophy from '../img/pkTrophy.png';

const Tournaments = () => {
  return (
    <div>
          <div className="tournament">
      <h2 className="tournament__header">TOURNAMENTS</h2>

      <div className="tournament__title-card tournament__title-card--110">
        <h2 className="tournament__title">May 2020 110 Tournament</h2>
        <div className="tournament__prizes">
          <ul>
            <li className="tournament__prizes--prize">
              1k
              <img
                src={mmd}
                alt="MMD note"
                className="tournament__prizes--icon"
              />
            </li>
            <li className="tournament__prizes--prize">
              150
              <img
                src={pkTrophy}
                alt="Pk Trophy"
                className="tournament__prizes--icon"
              />
            </li>
            <li className="tournament__prizes--prize">Custom Wand Tailor</li>
            <li className="tournament__prizes--prize">
              Full Set of 8s
            </li>

          </ul>
        </div>
      </div>
      <div className="tournament__bracket">
        <h2 className="header-medium header-medium--red header-medium--championship">
          Championship
        </h2>
        <div className="tournament__matchup tournament__matchup--championship">
        
        <div className="tournament__player tournament__player--winner">
             <img src={winguyen} alt="Skippy Icon" className="tournament__player-icon"/>
             <div className="tournament__player-score tournament__player-score--winner">3</div>
            <div className="tournament__player-name">Winguyen</div>
        </div>
        <div className="tournament__player tournament__player--loser">
             <img src={doom} alt="Doom Icon" className="tournament__player-icon"/>
             <div className="tournament__player-score">2</div>

            <div className="tournament__player-name">Obi</div>
        </div>
    </div>
    <h2 className="header-medium header-medium--red header-medium--semifinals">semifinals</h2>

    <div className="tournament__matchup tournament__matchup--semis-1">
        
        <div className="tournament__player tournament__player--winner">
             <img src={winguyen} alt="Winguyen Icon" className="tournament__player-icon"/>
             <div className="tournament__player-score tournament__player-score--winner">2</div>
            <div className="tournament__player-name">Winguyen</div>
        </div>
        <div className="tournament__player tournament__player--loser">
             <img src={charmin} alt="Charmin Icon" className="tournament__player-icon"/>
             <div className="tournament__player-score">1</div>

            <div className="tournament__player-name">Charmin</div>
        </div>
    </div>
    <div className="tournament__matchup tournament__matchup--semis-2">
        
        <div className="tournament__player tournament__player--winner">
             <img src={doom} alt="Doom Icon" className="tournament__player-icon"/>
             <div className="tournament__player-score tournament__player-score--winner">2</div>
            <div className="tournament__player-name">Obi</div>
        </div>
        <div className="tournament__player tournament__player--loser">
             <img src={ricky} alt="Ricky Icon" className="tournament__player-icon"/>
             <div className="tournament__player-score">0</div>

            <div className="tournament__player-name">Barcode Billy</div>
        </div>
    </div>
    <h2 className="header-medium header-medium--red header-medium--quarterfinals">quarterfinals</h2>

    <div className="tournament__matchup tournament__matchup--quarters-1">
        
        <div className="tournament__player tournament__player--winner">
             <img src={charmin} alt="Charmin Icon" className="tournament__player-icon"/>
             <div className="tournament__player-score tournament__player-score--winner">2</div>
            <div className="tournament__player-name">Charmin</div>
        </div>
        <div className="tournament__player tournament__player--loser">
             <img src={mwb} alt="Mwb Icon" className="tournament__player-icon"/>
             <div className="tournament__player-score">0</div>

            <div className="tournament__player-name">Xiabalba</div>
        </div>
    </div>
    <div className="tournament__matchup tournament__matchup--quarters-2">
        
        <div className="tournament__player tournament__player--winner">
             <img src={winguyen} alt="Winguyen Icon" className="tournament__player-icon"/>
             <div className="tournament__player-score tournament__player-score--winner">2</div>
            <div className="tournament__player-name">Winguyen</div>
        </div>
        <div className="tournament__player tournament__player--loser">
             <img src={waerfleet} alt="Waer Icon" className="tournament__player-icon"/>
             <div className="tournament__player-score">0</div>

            <div className="tournament__player-name">Waerlock</div>
        </div>
    </div>
    <div className="tournament__matchup tournament__matchup--quarters-3">
        
        <div className="tournament__player tournament__player--winner">
             <img src={ricky} alt="Ricky Icon" className="tournament__player-icon"/>
             <div className="tournament__player-score tournament__player-score--winner">2</div>
            <div className="tournament__player-name">Barcode Billy</div>
        </div>
        <div className="tournament__player tournament__player--loser">
             <img src={dark} alt="Dark Icon" className="tournament__player-icon"/>
             <div className="tournament__player-score">1</div>

            <div className="tournament__player-name">Darkmade</div>
        </div>
    </div>
    <div className="tournament__matchup tournament__matchup--quarters-4">
        
        <div className="tournament__player tournament__player--winner">
             <img src={doom} alt="Doom Icon" className="tournament__player-icon"/>
             <div className="tournament__player-score tournament__player-score--winner">2</div>
            <div className="tournament__player-name">Obi</div>
        </div>
        <div className="tournament__player tournament__player--loser">
             <img src={skippy} alt="Skippy Icon" className="tournament__player-icon"/>
             <div className="tournament__player-score">1</div>

            <div className="tournament__player-name">Skippy</div>
        </div>
    </div>
        <h2 className="header-medium header-medium--red header-medium--round-2">
          round 2
        </h2>

        <div className="tournament__matchup tournament__matchup--round-2 tournament__matchup--round-2--1">
          <div className="tournament__player tournament__player--winner">
            <img
              src={charmin}
              alt="Charmin Icon"
              className="tournament__player-icon"
            />
            <div className="tournament__player-score tournament__player-score--winner">
              2
            </div>
            <div className="tournament__player-name">Charmin</div>
          </div>
          <div className="tournament__player tournament__player--loser">
            <img
              src={tindale}
              alt="Tindale Icon"
              className="tournament__player-icon"
            />
            <div className="tournament__player-score">1</div>

            <div className="tournament__player-name">Tindale</div>
          </div>
        </div>
        <div className="tournament__matchup tournament__matchup--round-2 tournament__matchup--round-2--2">
          <div className="tournament__player  tournament__player--winner">
            <img src={mwb} alt="MWB Icon" className="tournament__player-icon" />
            <div className="tournament__player-score tournament__player-score--winner">
              2
            </div>
            <div className="tournament__player-name">Xibalba</div>
          </div>
          <div className="tournament__player tournament__player--loser">
            <img
              src={shadowen}
              alt="Shadowen Icon"
              className="tournament__player-icon"
            />
            <div className="tournament__player-score">1</div>

            <div className="tournament__player-name">Memphis Raines</div>
          </div>
        </div>
        <div className="tournament__matchup tournament__matchup--round-2 tournament__matchup--round-2--3">
          <div className="tournament__player tournament__player--winner">
            <img
              src={waerfleet}
              alt="Waerlock Icon"
              className="tournament__player-icon"
            />
            <div className="tournament__player-score tournament__player-score--winner">
              2
            </div>
            <div className="tournament__player-name">Waerlock</div>
          </div>
          <div className="tournament__player tournament__player--loser">
            <img
              src={fizzle}
              alt="Fizzle Icon"
              className="tournament__player-icon"
            />
            <div className="tournament__player-score">0</div>

            <div className="tournament__player-name">Oofski</div>
          </div>
        </div>
        <div className="tournament__matchup tournament__matchup--round-2 tournament__matchup--round-2--4">
          <div className="tournament__player tournament__player--winner">
            <img
              src={winguyen}
              alt="Winguyen Icon"
              className="tournament__player-icon"
            />
            <div className="tournament__player-score tournament__player-score--winner">
              2
            </div>
            <div className="tournament__player-name">Winguyen</div>
          </div>
          <div className="tournament__player tournament__player--loser">
            <img src={bz} alt="BZ Icon" className="tournament__player-icon" />
            <div className="tournament__player-score">0</div>

            <div className="tournament__player-name">Ramsey</div>
          </div>
        </div>
        <div className="tournament__matchup tournament__matchup--round-2 tournament__matchup--round-2--5">
          <div className="tournament__player tournament__player--winner">
            <img
              src={dark}
              alt="Dark Icon"
              className="tournament__player-icon"
            />
            <div className="tournament__player-score tournament__player-score--winner">
              2
            </div>
            <div className="tournament__player-name">
              <div className="column-name">Darkmade</div>
            </div>
          </div>
          <div className="tournament__player tournament__player--loser">
            <img
              src={kingofengland}
              alt="KOE Icon"
              className="tournament__player-icon"
            />
            <div className="tournament__player-score">0</div>

            <div className="tournament__player-name">
              {' '}
              <span>The</span>
              <span>King</span>
              <span>Of</span>
              <span>England</span>
            </div>
          </div>
        </div>
        <div className="tournament__matchup tournament__matchup--round-2 tournament__matchup--round-2--6">
          <div className="tournament__player tournament__player--winner">
            <img
              src={ricky}
              alt="Ricky Icon"
              className="tournament__player-icon"
            />
            <div className="tournament__player-score tournament__player-score--winner">
              2
            </div>
            <div className="tournament__player-name">Barcode Billy</div>
          </div>
          <div className="tournament__player tournament__player--loser">
            <img
              src={joblow}
              alt="Jo-Blow Icon"
              className="tournament__player-icon"
            />
            <div className="tournament__player-score">0</div>

            <div className="tournament__player-name">jo-blow</div>
          </div>
        </div>
        <div className="tournament__matchup tournament__matchup--round-2 tournament__matchup--round-2--7">
          <div className="tournament__player tournament__player--winner">
            <img
              src={doom}
              alt="Doom Icon"
              className="tournament__player-icon"
            />
            <div className="tournament__player-score tournament__player-score--winner">
              2
            </div>
            <div className="tournament__player-name">
              <div className="column-name">Obi</div>
            </div>
          </div>
          <div className="tournament__player tournament__player--loser">
            <img
              src={twisted}
              alt="Twisted Icon"
              className="tournament__player-icon"
            />
            <div className="tournament__player-score">0</div>

            <div className="tournament__player-name">Twisted Heat</div>
          </div>
        </div>
        <div className="tournament__matchup tournament__matchup--round-2 tournament__matchup--round-2--8">
          <div className="tournament__player tournament__player--winner">
            <img
              src={skippy}
              alt="Skippy Icon"
              className="tournament__player-icon"
            />
            <div className="tournament__player-score tournament__player-score--winner">
              2
            </div>
            <div className="tournament__player-name">Skippy</div>
          </div>
          <div className="tournament__player tournament__player--loser">
            <img
              src={doesnttank}
              alt="Doesnt Tank Icon"
              className="tournament__player-icon"
            />
            <div className="tournament__player-score">0</div>

            <div className="tournament__player-name">
              <div>
                {/* className="column-name" */}
                {/* <span>Memphis</span><span>Raines</span> */}
                Daddy
              </div>
            </div>
          </div>
        </div>
        <h2 className="header-medium header-medium--red header-medium--round-1">
          Round 1
        </h2>

        <div className="tournament__matchup tournament__matchup--round-1 tournament__matchup--round-1--1">
          <div className="tournament__player tournament__player--winner">
            <img
              src={charmin}
              alt="Skippy Icon"
              className="tournament__player-icon"
            />
            <div className="tournament__player-score tournament__player-score--winner">
              2
            </div>
            <div className="tournament__player-name">Charmin</div>
          </div>
          <div className="tournament__player tournament__player--loser">
            <img
              src={plusEv}
              alt="Plus Ev Icon"
              className="tournament__player-icon"
            />
            <div className="tournament__player-score">1</div>

            <div className="tournament__player-name">Plus Ev</div>
          </div>
        </div>
        <div className="tournament__matchup tournament__matchup--round-1 tournament__matchup--round-1--2">
          <div className="tournament__player tournament__player--winner">
            <img
              src={dark}
              alt="Dark Icon"
              className="tournament__player-icon"
            />
            <div className="tournament__player-score tournament__player-score--winner">
              2
            </div>
            <div className="tournament__player-name">Darkmade</div>
          </div>
          <div className="tournament__player tournament__player--loser">
            <img
              src={fozzy}
              alt="Fozzy Icon"
              className="tournament__player-icon"
            />
            <div className="tournament__player-score">0</div>

            <div className="tournament__player-name">Fozzy</div>
          </div>
        </div>
      </div>
    </div>
      <div className="tournament">
        <h2 className="tournament__header">TOURNAMENTS</h2>

        <div className="tournament__title-card">
          <h2 className="tournament__title">April 2020 Tournament</h2>
          <div className="tournament__prizes">
            <ul>
              <li className="tournament__prizes--prize">
                1k
                <img
                  src={mmd}
                  alt="MMD note"
                  className="tournament__prizes--icon"
                />
              </li>
              <li className="tournament__prizes--prize">
                150
                <img
                  src={pkTrophy}
                  alt="Pk Trophy"
                  className="tournament__prizes--icon"
                />
              </li>
              <li className="tournament__prizes--prize">Wand Rename</li>
              <li className="tournament__prizes--prize">
                Legendary Str and Coord Ring
              </li>
              <li className="tournament__prizes--prize">
                Legendary Quick and End Ring
              </li>
              <li className="tournament__prizes--prize">
                Legendary Foc and Will Bracelet
              </li>
            </ul>
          </div>
        </div>
        <img
          src={skippyWin}
          alt="Skippy Tourney Discord"
          className="tournament__winner"
        />
        <div className="tournament__bracket">
          <h2 className="header-medium header-medium--red header-medium--championship">
            Championship
          </h2>
          <div className="tournament__matchup tournament__matchup--championship">
            <div className="tournament__player tournament__player--winner">
              <img
                src={skippy}
                alt="Skippy Icon"
                className="tournament__player-icon"
              />
              <div className="tournament__player-score tournament__player-score--winner">
                2
              </div>
              <div className="tournament__player-name">Skippy</div>
            </div>
            <div className="tournament__player tournament__player--loser">
              <img
                src={doom}
                alt="Doom Icon"
                className="tournament__player-icon"
              />
              <div className="tournament__player-score">0</div>

              <div className="tournament__player-name">Obi</div>
            </div>
          </div>
          <h2 className="header-medium header-medium--red header-medium--semifinals">
            semifinals
          </h2>

          <div className="tournament__matchup tournament__matchup--semis-1">
            <div className="tournament__player tournament__player--winner">
              <img
                src={skippy}
                alt="Skippy Icon"
                className="tournament__player-icon"
              />
              <div className="tournament__player-score tournament__player-score--winner">
                2
              </div>
              <div className="tournament__player-name">Skippy</div>
            </div>
            <div className="tournament__player tournament__player--loser">
              <img
                src={tindale}
                alt="Tindale Icon"
                className="tournament__player-icon"
              />
              <div className="tournament__player-score">0</div>

              <div className="tournament__player-name">Shoresey</div>
            </div>
          </div>
          <div className="tournament__matchup tournament__matchup--semis-2">
            <div className="tournament__player tournament__player--winner">
              <img
                src={doom}
                alt="Doom Icon"
                className="tournament__player-icon"
              />
              <div className="tournament__player-score tournament__player-score--winner">
                2
              </div>
              <div className="tournament__player-name">Obi</div>
            </div>
            <div className="tournament__player tournament__player--loser">
              <img
                src={fizzle}
                alt="Fizzle Icon"
                className="tournament__player-icon"
              />
              <div className="tournament__player-score">1</div>

              <div className="tournament__player-name">Oofski</div>
            </div>
          </div>
          <h2 className="header-medium header-medium--red header-medium--quarterfinals">
            quarterfinals
          </h2>

          <div className="tournament__matchup tournament__matchup--quarters-1">
            <div className="tournament__player tournament__player--winner">
              <img
                src={tindale}
                alt="Tindale Icon"
                className="tournament__player-icon"
              />
              <div className="tournament__player-score tournament__player-score--winner">
                1
              </div>
              <div className="tournament__player-name">Shoresy</div>
            </div>
            <div className="tournament__player tournament__player--loser">
              <img
                src={mwb}
                alt="Mwb Icon"
                className="tournament__player-icon"
              />
              <div className="tournament__player-score">0</div>

              <div className="tournament__player-name">Xiabalba</div>
            </div>
          </div>
          <div className="tournament__matchup tournament__matchup--quarters-2">
            <div className="tournament__player tournament__player--winner">
              <img
                src={skippy}
                alt="Skippy Icon"
                className="tournament__player-icon"
              />
              <div className="tournament__player-score tournament__player-score--winner">
                2
              </div>
              <div className="tournament__player-name">Skippy</div>
            </div>
            <div className="tournament__player tournament__player--loser">
              <img
                src={winguyen}
                alt="Winguyen Icon"
                className="tournament__player-icon"
              />
              <div className="tournament__player-score">0</div>

              <div className="tournament__player-name">Winguyen</div>
            </div>
          </div>
          <div className="tournament__matchup tournament__matchup--quarters-3">
            <div className="tournament__player tournament__player--winner">
              <img
                src={fizzle}
                alt="Fizzle Icon"
                className="tournament__player-icon"
              />
              <div className="tournament__player-score tournament__player-score--winner">
                1
              </div>
              <div className="tournament__player-name">Oofski</div>
            </div>
            <div className="tournament__player tournament__player--loser">
              <img
                src={kingofengland}
                alt="King Of England Icon"
                className="tournament__player-icon"
              />
              <div className="tournament__player-score">0</div>

              <div className="tournament__player-name">The King of England</div>
            </div>
          </div>
          <div className="tournament__matchup tournament__matchup--quarters-4">
            <div className="tournament__player tournament__player--winner">
              <img
                src={doom}
                alt="Doom Icon"
                className="tournament__player-icon"
              />
              <div className="tournament__player-score tournament__player-score--winner">
                2
              </div>
              <div className="tournament__player-name">Obi</div>
            </div>
            <div className="tournament__player tournament__player--loser">
              <img
                src={bbc}
                alt="bbc Icon"
                className="tournament__player-icon"
              />
              <div className="tournament__player-score">0</div>

              <div className="tournament__player-name">king kielbasa</div>
            </div>
          </div>
          <h2 className="header-medium header-medium--red header-medium--round-2">
            round 2
          </h2>

          <div className="tournament__matchup tournament__matchup--round-2 tournament__matchup--round-2--1">
            <div className="tournament__player tournament__player--winner">
              <img
                src={mwb}
                alt="Mwb Icon"
                className="tournament__player-icon"
              />
              <div className="tournament__player-score tournament__player-score--winner">
                2
              </div>
              <div className="tournament__player-name">Xiabalba</div>
            </div>
            <div className="tournament__player tournament__player--loser">
              <img
                src={charmin}
                alt="Charmin Icon"
                className="tournament__player-icon"
              />
              <div className="tournament__player-score">1</div>

              <div className="tournament__player-name">Charmin</div>
            </div>
          </div>
          <div className="tournament__matchup tournament__matchup--round-2 tournament__matchup--round-2--2">
            <div className="tournament__player  tournament__player--winner">
              <img
                src={tindale}
                alt="Tindale Icon"
                className="tournament__player-icon"
              />
              <div className="tournament__player-score tournament__player-score--winner">
                2
              </div>
              <div className="tournament__player-name">Shoresy</div>
            </div>
            <div className="tournament__player tournament__player--loser">
              <img
                src={ricky}
                alt="Ricky Icon"
                className="tournament__player-icon"
              />
              <div className="tournament__player-score">1</div>

              <div className="tournament__player-name">Barcode Billy</div>
            </div>
          </div>
          <div className="tournament__matchup tournament__matchup--round-2 tournament__matchup--round-2--3">
            <div className="tournament__player tournament__player--winner">
              <img
                src={winguyen}
                alt="Fizzle Icon"
                className="tournament__player-icon"
              />
              <div className="tournament__player-score tournament__player-score--winner">
                2
              </div>
              <div className="tournament__player-name">Winguyen</div>
            </div>
            <div className="tournament__player tournament__player--loser">
              <img
                src={drunkFizzle}
                alt="Drunkfizzle Icon"
                className="tournament__player-icon"
              />
              <div className="tournament__player-score">1</div>

              <div className="tournament__player-name">Drunkfizzle</div>
            </div>
          </div>
          <div className="tournament__matchup tournament__matchup--round-2 tournament__matchup--round-2--4">
            <div className="tournament__player tournament__player--winner">
              <img
                src={skippy}
                alt="Skippy Icon"
                className="tournament__player-icon"
              />
              <div className="tournament__player-score tournament__player-score--winner">
                2
              </div>
              <div className="tournament__player-name">Skippy</div>
            </div>
            <div className="tournament__player tournament__player--loser">
              <img
                src={ohren}
                alt="El Ohren Icon"
                className="tournament__player-icon"
              />
              <div className="tournament__player-score">0</div>

              <div className="tournament__player-name">El Ohren</div>
            </div>
          </div>
          <div className="tournament__matchup tournament__matchup--round-2 tournament__matchup--round-2--5">
            <div className="tournament__player tournament__player--winner">
              <img
                src={kingofengland}
                alt="King of England Icon"
                className="tournament__player-icon"
              />
              <div className="tournament__player-score tournament__player-score--winner">
                2
              </div>
              <div className="tournament__player-name">
                <div className="column-name">
                  <span>The</span>
                  <span>King</span>
                  <span>Of</span>
                  <span>England</span>
                </div>
              </div>
            </div>
            <div className="tournament__player tournament__player--loser">
              <img
                src={joblow}
                alt="Jo Blow Icon"
                className="tournament__player-icon"
              />
              <div className="tournament__player-score">0</div>

              <div className="tournament__player-name">jo-blow</div>
            </div>
          </div>
          <div className="tournament__matchup tournament__matchup--round-2 tournament__matchup--round-2--6">
            <div className="tournament__player tournament__player--winner">
              <img
                src={fizzle}
                alt="Skippy Icon"
                className="tournament__player-icon"
              />
              <div className="tournament__player-score tournament__player-score--winner">
                2
              </div>
              <div className="tournament__player-name">Oofski</div>
            </div>
            <div className="tournament__player tournament__player--loser">
              <img
                src={mkm}
                alt="Mkm Icon"
                className="tournament__player-icon"
              />
              <div className="tournament__player-score">1</div>

              <div className="tournament__player-name">Mid</div>
            </div>
          </div>
          <div className="tournament__matchup tournament__matchup--round-2 tournament__matchup--round-2--7">
            <div className="tournament__player tournament__player--winner">
              <img
                src={bbc}
                alt="BBC Icon"
                className="tournament__player-icon"
              />
              <div className="tournament__player-score tournament__player-score--winner">
                2
              </div>
              <div className="tournament__player-name">
                <div className="column-name">
                  <span>king</span>
                  <span>kielbasa</span>
                </div>
              </div>
            </div>
            <div className="tournament__player tournament__player--loser">
              <img
                src={waerfleet}
                alt="waerfleet Icon"
                className="tournament__player-icon"
              />
              <div className="tournament__player-score">0</div>

              <div className="tournament__player-name">Waerlock</div>
            </div>
          </div>
          <div className="tournament__matchup tournament__matchup--round-2 tournament__matchup--round-2--8">
            <div className="tournament__player tournament__player--winner">
              <img
                src={doom}
                alt="Doom Icon"
                className="tournament__player-icon"
              />
              <div className="tournament__player-score tournament__player-score--winner">
                2
              </div>
              <div className="tournament__player-name">Obi</div>
            </div>
            <div className="tournament__player tournament__player--loser">
              <img
                src={shadowen}
                alt="Shadowen Icon"
                className="tournament__player-icon"
              />
              <div className="tournament__player-score">0</div>

              <div className="tournament__player-name">
                <div>
                  {/* className="column-name" */}
                  {/* <span>Memphis</span><span>Raines</span> */}
                  Memphis Raines
                </div>
              </div>
            </div>
          </div>
          <h2 className="header-medium header-medium--red header-medium--round-1">
            Round 1
          </h2>

          <div className="tournament__matchup tournament__matchup--round-1">
            <div className="tournament__player tournament__player--winner">
              <img
                src={charmin}
                alt="Skippy Icon"
                className="tournament__player-icon"
              />
              <div className="tournament__player-score tournament__player-score--winner">
                2
              </div>
              <div className="tournament__player-name">Charmin</div>
            </div>
            <div className="tournament__player tournament__player--loser">
              <img
                src={plusEv}
                alt="Plus Ev Icon"
                className="tournament__player-icon"
              />
              <div className="tournament__player-score">1</div>

              <div className="tournament__player-name">Plus Ev</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tournaments;
