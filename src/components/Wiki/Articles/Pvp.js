import React from 'react';
import pvpSide from '../../../img/wiki/articles/pvp/pvpSide.png'



const Pvp = () => {
    return (
        <div className = "wiki__content-box__article wiki__content-box__article--pvp">
            <div className="wiki__content-box__article__title">PvP Changes</div>
            <img src={pvpSide} alt="DI Fighting" className="wiki__content-box__article__side-img"/>
            <div className="wiki__content-box__article__info">
            <ul className="wiki__content-box__article__info__list wiki__content-box__article__info__list--pvp">
                <li className="wiki__content-box__article__info__list__item wiki__content-box__article__info__list__item--pvp--1">PK kills are all logged on the backend</li>
                <li className="wiki__content-box__article__info__list__item wiki__content-box__article__info__list__item--pvp--2">
                PK trophies on PK kills, used at the custom vendors</li>
                <li className="wiki__content-box__article__info__list__item wiki__content-box__article__info__list__item--pvp--3">Rares dispel upon getting tagged for PVP combat</li>
                <li className="wiki__content-box__article__info__list__item wiki__content-box__article__info__list__item--pvp--4">Kills are used to track ELO -- PvP Seasons in the works!</li>
                
            </ul>
            <ul className="wiki__content-box__article__info__list wiki__content-box__article__info__list--pvp-sublist">

            <li className="wiki__content-box__article__info__list__item wiki__content-box__article__info__list__item--pvp--5"><span className = "wiki__content-box__article__info__list__item__subtitle">Global Killstreak tracking</span></li>
                <li className="wiki__content-box__article__info__list__item wiki__content-box__article__info__list__item--pvp--6">Killing Spree (3 kills)</li>
                <li className="wiki__content-box__article__info__list__item wiki__content-box__article__info__list__item--pvp--7">Rampage (5 kills)</li>
                <li className="wiki__content-box__article__info__list__item wiki__content-box__article__info__list__item--pvp--8">Unstoppable (10 kills)</li>
                <li className="wiki__content-box__article__info__list__item wiki__content-box__article__info__list__item--pvp--9">Godlike (12 kills)</li>
                <li className="wiki__content-box__article__info__list__item wiki__content-box__article__info__list__item--pvp--10">Massacre (15 kills)</li>
            </ul>
                </div>

        </div>
    )

}

export default Pvp;
