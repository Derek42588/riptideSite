import React from 'react';
import { Link } from 'react-router-dom'


const Header = ({toggleShelf}) => {
  return (
    <header className="header">
          <ul className="nav">
            <li className="nav__item nav__item--mobile"  onClick={() => toggleShelf()} >
            <Link to = "#" className = "nav__link">
                Menu
              </Link>
            </li>
            <li className="nav__item nav__item--full">
            <Link to = "/elo" className = "nav__link">
                ELO
              </Link>
            </li>
            <li className="nav__item nav__item--full">
              <a href="https://discordapp.com/invite/fKR3m74" className="nav__link">
                Discord
              </a>
            </li>
            <li className="nav__item nav__item--full">
              <Link to = "/changelog" className = "nav__link">
                Changelog
              </Link>
            </li>
            <li className="nav__item nav__item--full">
            <Link to = "/wiki" className = "nav__link">
                Wiki
              </Link>
            </li>
          </ul> 
       </header>

    // </div>
  );
};

export default Header;
