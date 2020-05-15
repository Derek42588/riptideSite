import React from 'react';
import candethSide from '../../../img/wiki/articles/candethRecall/candethSide.jpg'



const CandethKeep = () => {
    return (
        <div className = "wiki__content-box__article wiki__content-box__article--candethKeep">
            <div className="wiki__content-box__article__title">Candeth Keep Recall Quest</div>
            <img src={candethSide} alt="Candeth Recall" className="wiki__content-box__article__side-img"/>
            <div className="wiki__content-box__article__info">
            <ul className="wiki__content-box__article__info__list wiki__content-box__article__info__list--candethKeep">
                <li className="wiki__content-box__article__info__list__item wiki__content-box__article__info__list__item--candethKeep--1">You only have to complete one kill task: Virindi Paradox</li>
                <li className="wiki__content-box__article__info__list__item wiki__content-box__article__info__list__item--candethKeep--2">Starts with: Guard Taziq at 74.3S, 19.1E</li>
                <li className="wiki__content-box__article__info__list__item wiki__content-box__article__info__list__item--candethKeep--3">Speak to him again after killing 75 Virindi Paradox</li>
                <li className="wiki__content-box__article__info__list__item wiki__content-box__article__info__list__item--candethKeep--3">Rewards: 46,000,000xp and Recall To The Keep spell</li>
                
            </ul>
    
</div>
    
    

        </div>
    )

}

export default CandethKeep;
