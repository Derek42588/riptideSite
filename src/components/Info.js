import React from 'react';
import mobs from '../img/mobs.png';
import vendor from '../img/vendor.png';
import shadow from '../img/Teaser2.PNG';
import icons from '../img/sprite.svg';

const Info = () => {
  return (
    <main className="info">
     <h1 className="info__title">RIPTIDE</h1>

        <div className="card">
            <p className="card__subtitle">
                A PvP server that will mimic retail with quality of life deviations
            </p>
            {/* <img src={shadow} alt="Shadow Commander" className="info__img"/> */}
            <p className="card__blurb">
                Riptide is a private AC server focusing on PK above all. Constant
                updates, quality of life changes, regular events. Come join the fight!
            </p>
            <a href="https://discord.gg/fKR3m74" className="card__icon">
                <svg>
                    <use xlinkHref={`${icons}#icon-discord`} />
                </svg>
            </a>
      </div>
    </main>
  );
};

export default Info;
