import React from 'react';
import darkIsleSide from '../../../img/diCustom.png'



const DarkIsle = () => {
    return (
        <div className = "wiki__content-box__article wiki__content-box__article--darkIsle">
            <div className="wiki__content-box__article__title">Dark Isle</div>
            <img src={darkIsleSide} alt="Dark Isle Side" className="wiki__content-box__article__side-img"/>
            <div className="wiki__content-box__article__info">
            <ul className="wiki__content-box__article__info__list wiki__content-box__article__info__list--darkIsle">
                <li className="wiki__content-box__article__info__list__item wiki__content-box__article__info__list__item--darkIsle--1">Dark Isle and Dark Isle Flagging added</li>
                <li className="wiki__content-box__article__info__list__item wiki__content-box__article__info__list__item--darkIsle--2">Mobs NOT as end of retail.</li>
                <li className="wiki__content-box__article__info__list__item wiki__content-box__article__info__list__item--darkIsle--2">Boss Trophies Stack to 100</li>
                <li className="wiki__content-box__article__info__list__item wiki__content-box__article__info__list__item--darkIsle--3">Cast Level 8 Wars and Vulns</li>
                <li className="wiki__content-box__article__info__list__item wiki__content-box__article__info__list__item--darkIsle--3">Drop Level 8 Spell Comps</li>
                <li className="wiki__content-box__article__info__list__item wiki__content-box__article__info__list__item--darkIsle--3">Drop Legendary Keys</li>
                <li className="wiki__content-box__article__info__list__item wiki__content-box__article__info__list__item--darkIsle--3">Drop Ancient Falacot Trinkets</li>
                <li className="wiki__content-box__article__info__list__item wiki__content-box__article__info__list__item--darkIsle--3"><a href="https://asheron.fandom.com/wiki/Dark_Isle">AC Wiki</a></li>
                
            </ul>
    
</div>
    
    

        </div>
    )

}

export default DarkIsle;
