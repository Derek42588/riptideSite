import React from 'react';
import { Link } from 'react-router-dom';
import { filter } from 'ramda';
import pkTrophy from '../img/pkTrophy.png';
import lifestone from '../img/lifestone.png';
import crown from '../img/tourneyWinCrown.png';

class Elo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      eloList: [],
    };
  }
  componentDidMount() {
    fetch('http://riptide.ac:3000/')
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          this.setState({
            isLoaded: true,
            eloList: result,
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  renderEloList(player, index) {
//  if (
//       player.name === 'Thrill' ||
//       player.name === 'Skippy' ||
//       player.name === 'Winguyen'
//     ) {
//       return (
//         <li className="elo__list__item" key={`player-${index}`}>
//           <span className="elo__list__item__rank-box">
//             <span className="elo__list__item__rank-box__rank">
//               #{index + 1})
//             </span>{' '}
//             <span className="elo__list__item__rank-box__rating">
//               {player.rating}
//             </span>
//           </span>
//           <span className="elo__list__item__player-box">
//             <Link to={`/elo/${player.id}`}>{player.name}</Link>
//           </span>
//           <div className="elo__list__item__kill-box">
//             <img
//               src={pkTrophy}
//               alt="Pk Trophy"
//               className="elo__list__item__icon"
//             />
//             {this.getFlopsByType(player, 'kill').length}
//             <img
//               src={lifestone}
//               alt="Lifestone"
//               className="elo__list__item__icon"
//             />
//             {this.getFlopsByType(player, 'death').length}
//             <img src={crown} alt="Crown" className="elo__list__item__icon" />
//             1x
//           </div>
//         </li>
//       );
//     } else {
      return (
        <li className="elo__list__item" key={`player-${index}`}>
          <span className="elo__list__item__rank-box">
            <span className="elo__list__item__rank-box__rank">
              #{index + 1})
            </span>{' '}
            <span className="elo__list__item__rank-box__rating">
              {player.rating}
            </span>
          </span>
          <span className="elo__list__item__player-box">
            <Link to={`/elo/${player.id}`}>{player.name}</Link>
          </span>
          <div className="elo__list__item__kill-box">
            {/* <img
              src={pkTrophy}
              alt="Pk Trophy"
              className="elo__list__item__icon"
            /> */} <span>K</span>
            {this.getFlopsByType(player, 'kill').length}
            {/* <img
              src={lifestone}
              alt="Lifestone"
              className="elo__list__item__icon"
            /> */} <span>D</span>
            {this.getFlopsByType(player, 'death').length}
          </div>
        </li>
      );
    }
  // }
  getFlopsByType(player, type) {
    const matchPlayer = (flop) => type === flop.type;
    return filter(matchPlayer, player.flops);
  }
  render() {

    if (this.state.isLoaded){
    return (
      <div className="elo">
        <ul className="elo__list">
          {this.state.eloList.map(this.renderEloList.bind(this))}
        </ul>
      </div>
    )} else {
      return (
        <div className = "LoadingSpinner" />
      )
    }
  }
}

// const HAS_SHOWCASE = ['Uhtred', 'Fentanyl'];
// if (
//   index <= 4 &&
//   (player.name === 'Thrill' ||
//     player.name === 'Skippy' ||
//     player.name === 'Winguyen')
// ) {
//   let picString = 'missingPic.png';

//   if (HAS_SHOWCASE.includes(player.name)) {
//     picString = `${player.name}.PNG`;
//   }
//   return (
//     <li
//       className="elo__list__item elo__list__item--top5"
//       key={`player-${index}`}
//     >
//       <span className="elo__list__item__rank-box elo__list__item__rank-box--top5">
//         <span className="elo__list__item__rank-box__rank elo__list__item__rank-box__rank--top5">
//           #{index + 1}
//         </span>{' '}
//         <span className="elo__list__item__rank-box__rating elo__list__item__rank-box__rating--top5">
//           {player.rating}
//         </span>
//       </span>
//       <span className="elo__list__item__player-box elo__list__item__player-box--top5">
//         <Link to={`/elo/${player.id}`}>{player.name}</Link>
//       </span>
//       <figure className="elo__list__item__showcasePicture-box">
//         <img
//           src={require(`../img/elo/${picString}`)}
//           alt="Player Showcase"
//           className="elo__list__item__showcasePicture-box__image"
//         />
//       </figure>
//       <div className="elo__list__item__kill-box elo__list__item__kill-box--top5">
//         <img
//           src={pkTrophy}
//           alt="Pk Trophy"
//           className="elo__list__item__icon elo__list__item__icon--top5"
//         />
//         {this.getFlopsByType(player, 'kill').length}
//         <img
//           src={lifestone}
//           alt="Lifestone"
//           className="elo__list__item__icon elo__list__item__icon--top5"
//         />
//         {this.getFlopsByType(player, 'death').length}
//         <img src={crown} alt="Crown" className="elo__list__item__icon" />
//         1x
//       </div>
//     </li>
//   );
// } else if (index <= 4) {
//   let picString = 'missingPic.png';

//   if (HAS_SHOWCASE.includes(player.name)) {
//     picString = `${player.name}.PNG`;
//   }
//   return (
//     <li
//       className="elo__list__item elo__list__item--top5"
//       key={`player-${index}`}
//     >
//       <span className="elo__list__item__rank-box elo__list__item__rank-box--top5">
//         <span className="elo__list__item__rank-box__rank elo__list__item__rank-box__rank--top5">
//           #{index + 1}
//         </span>{' '}
//         <span className="elo__list__item__rank-box__rating elo__list__item__rank-box__rating--top5">
//           {player.rating}
//         </span>
//       </span>
//       <span className="elo__list__item__player-box elo__list__item__player-box--top5">
//         <Link to={`/elo/${player.id}`} className = "italics">{player.name}</Link>
//       </span>
//       <figure className="elo__list__item__showcasePicture-box">
//         <img
//           src={require(`../img/elo/${picString}`)}
//           alt="Player Showcase"
//           className="elo__list__item__showcasePicture-box__image"
//         />
//       </figure>
//       <div className="elo__list__item__kill-box elo__list__item__kill-box--top5">
//         <img
//           src={pkTrophy}
//           alt="Pk Trophy"
//           className="elo__list__item__icon elo__list__item__icon--top5"
//         />
//         {this.getFlopsByType(player, 'kill').length}
//         <img
//           src={lifestone}
//           alt="Lifestone"
//           className="elo__list__item__icon elo__list__item__icon--top5"
//         />
//         {this.getFlopsByType(player, 'death').length}
//       </div>
//     </li>
//   );
// }

export default Elo;
