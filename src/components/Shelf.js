import React from 'react';
import { Link } from 'react-router-dom'




const Shelf = ({ toggleShelf, shelfVisible }) => {
  return (
    <div className={'Shelf' + (shelfVisible ? ' shelfVisible' : '')}>
      <ul className="Shelf__list">
      <li className="Shelf__list__item">
          <Link to = "/" className = "Shelf__list__item__link" onClick = {() => toggleShelf()}>
                  Home
            </Link>
        </li>
      <li className="Shelf__list__item">
          <a href = "https://discordapp.com/invite/fKR3m74" className = "Shelf__list__item__link" onClick = {() => toggleShelf()}>
                  Discord
            </a>
        </li>
        <li className="Shelf__list__item">
          <Link to = "/setup" className = "Shelf__list__item__link" onClick = {() => toggleShelf()}>
                  Setup
            </Link>
        </li>
        <li className="Shelf__list__item">
          <Link to = "/changelog" className = "Shelf__list__item__link" onClick = {() => toggleShelf()}>
                  Changelog
            </Link>
        </li>
        <li className="Shelf__list__item">
          <Link to = "/wiki" className = "Shelf__list__item__link" onClick = {() => toggleShelf()}>
                  Wiki
            </Link>
        </li>
        <li className="Shelf__list__item">
          <Link to = "/utilities" className = "Shelf__list__item__link" onClick = {() => toggleShelf()}>
                  Utilities
            </Link>
        </li>
        <li className="Shelf__list__item">
          <Link to = "/tournaments" className = "Shelf__list__item__link" onClick = {() => toggleShelf()}>
                  Tournaments
            </Link>
        </li>
      </ul>
      {/* <ul className="Shelf__icons-list">
          <li className="Shelf__icons-list__item">1</li>
          <li className="Shelf__icons-list__item">1</li>
          <li className="Shelf__icons-list__item">1</li>
      </ul> */}
    </div>  
  );
};

export default Shelf;
