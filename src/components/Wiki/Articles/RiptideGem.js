import React from 'react';
import riptideGemSide from '../../../img/wiki/articles/riptideGem/riptideGemSide.png'



const RiptideGem = () => {
    return (
        <div className = "wiki__content-box__article wiki__content-box__article--riptideGem">
            <div className="wiki__content-box__article__title">Riptide Gem of Knowledge</div>
            <img src={riptideGemSide} alt="RT Gem Spell" className="wiki__content-box__article__side-img"/>
            <div className="wiki__content-box__article__info">
            <ul className="wiki__content-box__article__info__list wiki__content-box__article__info__list--riptideGem">
                <li className="wiki__content-box__article__info__list__item wiki__content-box__article__info__list__item--riptideGem--1">Give a Blank Augmentation Gem to Asheron at 21.1N, 69.3E</li>
                <li className="wiki__content-box__article__info__list__item wiki__content-box__article__info__list__item--riptideGem--2">Exp Cost: 1 Bill</li>
                <li className="wiki__content-box__article__info__list__item wiki__content-box__article__info__list__item--riptideGem--3">Empyrean Enlightenment: +60 Arcane Lore for 24 Hours</li>
                <li className="wiki__content-box__article__info__list__item wiki__content-box__article__info__list__item--riptideGem--3">*Known Bug* If you do not have 1 bill unspent, Asheron will keep your Aug Gem</li>
                
            </ul>
    
</div>
    
    

        </div>
    )

}

export default RiptideGem;
