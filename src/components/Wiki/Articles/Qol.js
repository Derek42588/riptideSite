import React from 'react';
import qolSideImg from '../../../img/asheronsCastle.PNG'



const Qol = () => {
    return (
        <div className = "wiki__content-box__article wiki__content-box__article--qol">
            <div className="wiki__content-box__article__title">Quality of Life Changes</div>
            <img src={qolSideImg} alt="Professor of Creature Magic" className="wiki__content-box__article__side-img"/>
            <div className="wiki__content-box__article__info">
            <ul className="wiki__content-box__article__info__list wiki__content-box__article__info__list--qol">
                <li className="wiki__content-box__article__info__list__item wiki__content-box__article__info__list__item--qol--1">No timer on Chorizite</li>
                <li className="wiki__content-box__article__info__list__item wiki__content-box__article__info__list__item--qol--2">
                20 hour aug gem</li>
                <li className="wiki__content-box__article__info__list__item wiki__content-box__article__info__list__item--qol--3">No need to flag for Bellas</li>
                <li className="wiki__content-box__article__info__list__item wiki__content-box__article__info__list__item--qol--4">No timer on coals</li>
                <li className="wiki__content-box__article__info__list__item wiki__content-box__article__info__list__item--qol--5">Tailoring prices cut to 5 MMDs</li>
                <li className="wiki__content-box__article__info__list__item wiki__content-box__article__info__list__item--qol--6">1s rare cooldown</li>
                <li className="wiki__content-box__article__info__list__item wiki__content-box__article__info__list__item--qol--7">Unlimited resets at Asheron's Castle</li>
                <li className="wiki__content-box__article__info__list__item wiki__content-box__article__info__list__item--qol--8">Level 58, 2 Scints and PDI for new chars</li>
                <li className="wiki__content-box__article__info__list__item wiki__content-box__article__info__list__item--qol--9">Sellable massives</li>
                
            </ul>
</div>
            

        </div>
    )

}

export default Qol;
