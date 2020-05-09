import React from 'react';
import professorsSideImg from '../../../img/wiki/articles/professors/professorArticle.jpg'

import professorsWalkthroughOne from '../../../img/wiki/articles/professors/professorsWalkthroughOne.PNG'
import professorsWalkthroughThree from '../../../img/wiki/articles/professors/professorsWalkthroughThree.PNG'
import professorsWalkthroughFour from '../../../img/wiki/articles/professors/professorsWalkthroughFour.PNG'


const Professors = () => {
    return (
        <div className = "wiki__content-box__article wiki__content-box__article--professors">
            <div className="wiki__content-box__article__title">Spell Professors</div>
            <img src={professorsSideImg} alt="Professor of Creature Magic" className="wiki__content-box__article__side-img"/>
            <div className="wiki__content-box__article__info">Spell professors in Arwic have been changed to cost only 1 pyreal per level.  Select them and then choose in the chat box to "Tell to Professor of [x]" with a message of "Level X" to learn that level of spells in that class.  Otherwise, they work just as they do in retail.</div>
            
            <img src={professorsWalkthroughOne} alt="Professor of Creature Magic" className="wiki__content-box__article--professors__img wiki__content-box__article--professors__img--1"/>
            <img src={professorsWalkthroughThree} alt="Professor of Creature Magic" className="wiki__content-box__article--professors__img wiki__content-box__article--professors__img--2"/>
            <img src={professorsWalkthroughFour} alt="Professor of Creature Magic" className="wiki__content-box__article--professors__img wiki__content-box__article--professors__img--3"/>

        </div>
    )

}

export default Professors;
