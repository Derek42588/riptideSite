import React from 'react';
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <header className="header">
          <ul className="nav">
            <li className="nav__item">
            <Link to = "/" className = "nav__link">
                Home
              </Link>
            </li>
            <li className="nav__item">
              <a href="https://discordapp.com/invite/fKR3m74" className="nav__link">
                Discord
              </a>
            </li>
            <li className="nav__item">
            <Link to = "/setup" className = "nav__link">
                Setup
              </Link>
            </li>
            <li className="nav__item">
              <Link to = "/changelog" className = "nav__link">
                Changelog
              </Link>
            </li>
            <li className="nav__item">
            <Link to = "/customcontent" className = "nav__link">
                Custom Content
              </Link>
            </li>
          </ul> 
       </header>

    // </div>
  );
};

export default Header;
