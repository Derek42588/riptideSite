import React from 'react';

import plusEv from '../img/pfps/plusPFP.png';
import charmin from '../img/pfps/CharminPFP.png';
import skippy from '../img/pfps/SkippyPFP.png';
import ricky from '../img/pfps/rickyPFP.png';
import shadowen from '../img/pfps/shadowenPFP.png';
import tindale from '../img/pfps/tindalePFP.png';
import winguyen from '../img/pfps/winguyenPFP.png';
import dark from '../img/pfps/darkPFP.png';
import bz from '../img/pfps/bzPFP.png';
import mmd from '../img/mmd.png';
import pkTrophy from '../img/pkTrophy.png';
import thrillWin from '../img/tournaments/thrillWinner.png';
import platformPeople from '../img/tournaments/platformPeople.png';
import platformWithText from '../img/tournaments/platformWithText.jpg';

import george from '../img/pfps/georgePFP.png';
import salami from '../img/pfps/salamiPFP.png';
import shameless from '../img/pfps/shamelessPFP.png';
import yeet from '../img/pfps/yeetPFP.png';
import spec from '../img/pfps/specPFP.png';
import bastards from '../img/pfps/bastardsPFP.png';
import mike from '../img/pfps/mikePFP.png';
import highGrav from '../img/pfps/yeetPFP.png';
import pat from '../img/pfps/patPFP.png';
import beatdown from '../img/pfps/beatdownPFP.png';


/*

the bastards *
charmin
coffee king *
darkmade *
beatdown *
high grav *
pat barcode *
*/

const Tournament = () => {


  return (
    
    <div className="tournament">
      <h2 className="tournament__header">TOURNAMENTS</h2>

      <div className="tournament__title-card tournament__title-card--single-elim">
        <h2 className="tournament__title">May 2020 Single Elim</h2>
        <div className="tournament__prizes">
          <ul>
            <li className="tournament__prizes--prize">
              500
              <img
                src={mmd}
                alt="MMD note"
                className="tournament__prizes--icon"
              />
            </li>
            <li className="tournament__prizes--prize">
              100
              <img
                src={pkTrophy}
                alt="Pk Trophy"
                className="tournament__prizes--icon"
              />
            </li>
            <li className="tournament__prizes--prize">Custom Wand Tailor</li>

          </ul>
        </div>
      </div>
      <a href = "/tournaments" className = "past-tournaments-button">
            <button className="btn">Past Tournaments</button>
          </a>
          <img
          src={platformPeople}
          alt="Thrill Solo Shot"
          className="tournament__winner"
        />
          <img
          src={platformWithText}
          alt="Skippy Tourney Discord"
          className="tournament__winner"
        />
          <img
          src={thrillWin}
          alt="Skippy Tourney Discord"
          className="tournament__winner"
        />
      <div className="tournament__bracket">
    
        <h2 className="header-medium header-medium--red header-medium--championship">
          Championship
        </h2>
        <div className="tournament__matchup tournament__matchup--championship">
        
        <div className="tournament__player tournament__player--winner">
             <img src={plusEv} alt="Thrill Icon" className="tournament__player-icon"/>
             <div className="tournament__player-score tournament__player-score--winner">1</div>
            <div className="tournament__player-name">Thrill</div>
        </div>
        <div className="tournament__player tournament__player--loser">
             <img src={bastards} alt="bastards Icon" className="tournament__player-icon"/>
             <div className="tournament__player-score">0</div>

            <div className="tournament__player-name">The Bastards</div>
        </div>
    </div>
    <h2 className="header-medium header-medium--red header-medium--semifinals">semifinals</h2>

    <div className="tournament__matchup tournament__matchup--semis-1">
        
        <div className="tournament__player tournament__player--winner">
             <img src={bastards} alt="bastards Icon" className="tournament__player-icon"/>
             <div className="tournament__player-score tournament__player-score--winner">1</div>
            <div className="tournament__player-name">The Bastards</div>
        </div>
        <div className="tournament__player tournament__player--loser">
             <img src={spec} alt="Spec Icon" className="tournament__player-icon"/>
             <div className="tournament__player-score">0</div>

            <div className="tournament__player-name">Specdeek</div>
        </div>
    </div>
    <div className="tournament__matchup tournament__matchup--semis-2">
        
        <div className="tournament__player tournament__player--winner">
             <img src={plusEv} alt="Thrill Icon" className="tournament__player-icon"/>
             <div className="tournament__player-score tournament__player-score--winner">1</div>
            <div className="tournament__player-name">Thrill</div>
        </div>
        <div className="tournament__player tournament__player--loser">
             <img src={skippy} alt="Skippy Icon" className="tournament__player-icon"/>
             <div className="tournament__player-score">0</div>

            <div className="tournament__player-name">Skippy</div>
        </div>
    </div>
    <h2 className="header-medium header-medium--red header-medium--quarterfinals">quarterfinals</h2>

    <div className="tournament__matchup tournament__matchup--quarters-1">
        
        <div className="tournament__player tournament__player--winner">
             <img src={spec} alt="Specdeek Icon" className="tournament__player-icon"/>
             <div className="tournament__player-score tournament__player-score--winner">1</div>
            <div className="tournament__player-name">Specdeek</div>
        </div>
        <div className="tournament__player tournament__player--loser">
             <img src={salami} alt="Salami Icon" className="tournament__player-icon"/>
             <div className="tournament__player-score">0</div>

            <div className="tournament__player-name">Salami</div>
        </div>
    </div>
    <div className="tournament__matchup tournament__matchup--quarters-2">
        
        <div className="tournament__player tournament__player--winner">
             <img src={bastards} alt="Bastards Icon" className="tournament__player-icon"/>
             <div className="tournament__player-score tournament__player-score--winner">1</div>
            <div className="tournament__player-name">Bastards</div>
        </div>
        <div className="tournament__player tournament__player--loser">
             <img src={mike} alt="mike Icon" className="tournament__player-icon"/>
             <div className="tournament__player-score">0</div>

            <div className="tournament__player-name">Coffee King</div>
        </div>
    </div>
    <div className="tournament__matchup tournament__matchup--quarters-3">
        
        <div className="tournament__player tournament__player--winner">
             <img src={skippy} alt="Skippy Icon" className="tournament__player-icon"/>
             <div className="tournament__player-score tournament__player-score--winner">1</div>
            <div className="tournament__player-name">Skippy</div>
        </div>
        <div className="tournament__player tournament__player--loser">
             <img src={tindale} alt="tindale Icon" className="tournament__player-icon"/>
             <div className="tournament__player-score">0</div>

            <div className="tournament__player-name">Tindale</div>
        </div>
    </div>
    <div className="tournament__matchup tournament__matchup--quarters-4">
        
        <div className="tournament__player tournament__player--winner">
             <img src={plusEv} alt="Thrill Icon" className="tournament__player-icon"/>
             <div className="tournament__player-score tournament__player-score--winner">1</div>
            <div className="tournament__player-name">Thrill</div>
        </div>
        <div className="tournament__player tournament__player--loser">
             <img src={pat} alt="Pat Icon" className="tournament__player-icon"/>
             <div className="tournament__player-score">0</div>

            <div className="tournament__player-name">Pat</div>
        </div>
    </div>
        <h2 className="header-medium header-medium--red header-medium--round-2">
          round 2
        </h2>

        <div className="tournament__matchup tournament__matchup--round-2 tournament__matchup--round-2--1">
          <div className="tournament__player tournament__player--winner">
            <img
              src={salami}
              alt="Salami Icon"
              className="tournament__player-icon"
            />
            <div className="tournament__player-score tournament__player-score--winner">
              1
            </div>
            <div className="tournament__player-name">Salami</div>
          </div>
          <div className="tournament__player tournament__player--loser">
            <img
              src={ricky}
              alt="ricky Icon"
              className="tournament__player-icon"
            />
            <div className="tournament__player-score">0</div>

            <div className="tournament__player-name">Ricky</div>
          </div>
        </div>
        <div className="tournament__matchup tournament__matchup--round-2 tournament__matchup--round-2--2">
          <div className="tournament__player  tournament__player--winner">
            <img src={spec} alt="Spec Icon" className="tournament__player-icon" />
            <div className="tournament__player-score tournament__player-score--winner">
              1
            </div>
            <div className="tournament__player-name">Specdeek</div>
          </div>
          <div className="tournament__player tournament__player--loser">
            <img
              src={yeet}
              alt="Yeet Icon"
              className="tournament__player-icon"
            />
            <div className="tournament__player-score">0</div>

            <div className="tournament__player-name">Yeet Cannon</div>
          </div>
        </div>
        <div className="tournament__matchup tournament__matchup--round-2 tournament__matchup--round-2--3">
          <div className="tournament__player tournament__player--winner">
            <img
              src={mike}
              alt="mike Icon"
              className="tournament__player-icon"
            />
            <div className="tournament__player-score tournament__player-score--winner">
              1
            </div>
            <div className="tournament__player-name">Coffee King</div>
          </div>
          <div className="tournament__player tournament__player--loser">
            <img
              src={shadowen}
              alt="Shadowen Icon"
              className="tournament__player-icon"
            />
            <div className="tournament__player-score">0</div>

            <div className="tournament__player-name">Memphis Raines</div>
          </div>
        </div>
        <div className="tournament__matchup tournament__matchup--round-2 tournament__matchup--round-2--4">
          <div className="tournament__player tournament__player--winner">
            <img
              src={bastards}
              alt="The Bastards Icon"
              className="tournament__player-icon"
            />
            <div className="tournament__player-score tournament__player-score--winner">
              1
            </div>
            <div className="tournament__player-name">The Bastards</div>
          </div>
          <div className="tournament__player tournament__player--loser">
            <img src={charmin} alt="Charmin Icon" className="tournament__player-icon" />
            <div className="tournament__player-score">0</div>

            <div className="tournament__player-name">Charmin</div>
          </div>
        </div>
        <div className="tournament__matchup tournament__matchup--round-2 tournament__matchup--round-2--5">
          <div className="tournament__player tournament__player--winner">
            <img
              src={skippy}
              alt="Skippy Icon"
              className="tournament__player-icon"
            />
            <div className="tournament__player-score tournament__player-score--winner">
              1
            </div>
            <div className="tournament__player-name">
              <div className="column-name">Skippy</div>
            </div>
          </div>
          <div className="tournament__player tournament__player--loser">
            <img
              src={winguyen}
              alt="Win Icon"
              className="tournament__player-icon"
            />
            <div className="tournament__player-score">0</div>

            <div className="tournament__player-name">
              Winguyen
            </div>
          </div>
        </div>
        <div className="tournament__matchup tournament__matchup--round-2 tournament__matchup--round-2--6">
          <div className="tournament__player tournament__player--winner">
            <img
              src={tindale}
              alt="Tindale Icon"
              className="tournament__player-icon"
            />
            <div className="tournament__player-score tournament__player-score--winner">
              1
            </div>
            <div className="tournament__player-name">Tindale</div>
          </div>
          <div className="tournament__player tournament__player--loser">
            <img
              src={dark}
              alt="Darkmade Icon"
              className="tournament__player-icon"
            />
            <div className="tournament__player-score">0</div>

            <div className="tournament__player-name">Darkmade</div>
          </div>
        </div>
        <div className="tournament__matchup tournament__matchup--round-2 tournament__matchup--round-2--7">
          <div className="tournament__player tournament__player--winner">
            <img
              src={plusEv}
              alt="Plus Ev Icon"
              className="tournament__player-icon"
            />
            <div className="tournament__player-score tournament__player-score--winner">
              1
            </div>
            <div className="tournament__player-name">
              <div className="column-name">Thrill</div>
            </div>
          </div>
          <div className="tournament__player tournament__player--loser">
            <img
              src={beatdown}
              alt="Beatdown Icon"
              className="tournament__player-icon"
            />
            <div className="tournament__player-score">0</div>

            <div className="tournament__player-name">Beatdown</div>
          </div>
        </div>
        <div className="tournament__matchup tournament__matchup--round-2 tournament__matchup--round-2--8">
          <div className="tournament__player tournament__player--winner">
            <img
              src={pat}
              alt="Pat Icon"
              className="tournament__player-icon"
            />
            <div className="tournament__player-score tournament__player-score--winner">
              1
            </div>
            <div className="tournament__player-name">Pat</div>
          </div>
          <div className="tournament__player tournament__player--loser">
            <img
              src={highGrav}
              alt="High Grav Icon"
              className="tournament__player-icon"
            />
            <div className="tournament__player-score">0</div>

            <div className="tournament__player-name">
              <div>
                {/* className="column-name" */}
                {/* <span>Memphis</span><span>Raines</span> */}
                High Grav
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
              src={skippy}
              alt="Skippy Icon"
              className="tournament__player-icon"
            />
            <div className="tournament__player-score tournament__player-score--winner">
              1
            </div>
            <div className="tournament__player-name">Skippy</div>
          </div>
          <div className="tournament__player tournament__player--loser">
            <img
              src={shameless}
              alt="Plus Ev Icon"
              className="tournament__player-icon"
            />
            <div className="tournament__player-score">0</div>

            <div className="tournament__player-name">Shameless</div>
          </div>
        </div>
        <div className="tournament__matchup tournament__matchup--round-1 tournament__matchup--round-1--2">
          <div className="tournament__player tournament__player--winner">
            <img
              src={ricky}
              alt="Ricky Icon"
              className="tournament__player-icon"
            />
            <div className="tournament__player-score tournament__player-score--winner">
              1
            </div>
            <div className="tournament__player-name">Ricky</div>
          </div>
          <div className="tournament__player tournament__player--loser">
            <img
              src={george}
              alt="George Icon"
              className="tournament__player-icon"
            />
            <div className="tournament__player-score">0</div>

            <div className="tournament__player-name">Zero</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tournament;
