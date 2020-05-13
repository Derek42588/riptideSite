import React from 'react';
import bugsSide from '../../../img/wiki/articles/bugs/bugsSide.png'



const bugs = () => {
    return (
        <div className = "wiki__content-box__article wiki__content-box__article--bugs">
            <div className="wiki__content-box__article__title">Known Bugs</div>
            <img src={bugsSide} alt="Bugs" className="wiki__content-box__article__side-img"/>
            <div className="wiki__content-box__article__info">
            <ul className="wiki__content-box__article__info__list wiki__content-box__article__info__list--bugs">
                <li className="wiki__content-box__article__info__list__item wiki__content-box__article__info__list__item--bugs--1">Font of Joji use flag not working properly</li>
                <li className="wiki__content-box__article__info__list__item wiki__content-box__article__info__list__item--bugs--1">Corpse permit currently bugged/not working properly</li>
                <li className="wiki__content-box__article__info__list__item wiki__content-box__article__info__list__item--bugs--1">PK Logout Timer on PK tag currently bugged</li>
                <li className="wiki__content-box__article__info__list__item wiki__content-box__article__info__list__item--bugs--1">Shadow Slayer quest line currently broken**Fixed with 5/9/20 reset**</li>
                <li className="wiki__content-box__article__info__list__item wiki__content-box__article__info__list__item--bugs--2">Quest Timers currently off.  **Fixed with 5/9/20 reset**</li>
                <li className="wiki__content-box__article__info__list__item wiki__content-box__article__info__list__item--bugs--3">Tier 8 Axe max damage should be 74, but does not drop.  *GDLE bug*</li>
                <li className="wiki__content-box__article__info__list__item wiki__content-box__article__info__list__item--bugs--3">Void wands dropping with war weild reqs.  *GLDE bug*</li>
                <li className="wiki__content-box__article__info__list__item wiki__content-box__article__info__list__item--bugs--3">When giving an Aug Gem to Donatello Linante, if you have >8b unspent xp he will take 8b rather than 2b</li>
                <li className="wiki__content-box__article__info__list__item wiki__content-box__article__info__list__item--bugs--3">Aun Ralirea currently only respawns after server resets</li>
                <li className="wiki__content-box__article__info__list__item wiki__content-box__article__info__list__item--bugs--3">If you do not have 1b unspent when giving Asheron a blank aug gem, he will keep it</li>
                
            </ul>

</div>
    
    

        </div>
    )

}

export default bugs;
