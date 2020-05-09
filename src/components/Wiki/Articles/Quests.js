import React from 'react';
import questsSide from '../../../img/wiki/articles/quests/questsSide.jpg'



const Quests = () => {
    return (
        <div className = "wiki__content-box__article wiki__content-box__article--quests">
            <div className="wiki__content-box__article__title">Custom Quests</div>
            <img src={questsSide} alt="Professor of Creature Magic" className="wiki__content-box__article__side-img"/>
            <div className="wiki__content-box__article__info">
            <ul className="wiki__content-box__article__info__list wiki__content-box__article__info__list--quests">
                <li className="wiki__content-box__article__info__list__item wiki__content-box__article__info__list__item--quests--1">Black Pages of Salt and Ash quest
</li>
                <li className="wiki__content-box__article__info__list__item wiki__content-box__article__info__list__item--quests--2">
                Viss flagging and Viss implemented
</li>
                <li className="wiki__content-box__article__info__list__item wiki__content-box__article__info__list__item--quests--3">DI flagging Quest and DI implemented</li>
                <li className="wiki__content-box__article__info__list__item wiki__content-box__article__info__list__item--quests--4">Unlimited resets at Asheron's Castle</li>
                <li className="wiki__content-box__article__info__list__item wiki__content-box__article__info__list__item--quests--5">Tailoring prices cut to 5 MMDs</li>
                <li className="wiki__content-box__article__info__list__item wiki__content-box__article__info__list__item--quests--6">Custom Arcane Lore Augmentation gem</li>
                <li className="wiki__content-box__article__info__list__item wiki__content-box__article__info__list__item--quests--7">Shadow Slayer quest</li>
                
            </ul>

    
    
    
    
</div>
            

        </div>
    )

}

export default Quests;
