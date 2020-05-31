import React from 'react';
import { Link } from 'react-router-dom'
import { filter } from "ramda";

class Elo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
      eloList: []
    }
  }
  componentDidMount() {
    fetch("http://riptide.ac:3000/")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)
          this.setState({
            isLoaded: true,
            eloList: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  renderEloList(player, index) {
    return (
      <li key={`player-${index}`}>
        {player.rating} |
        <Link to={`/elo/${player.id}`}>
          {player.name}
        </Link>
        (Kills: {this.getFlopsByType(player, "kill").length} | Deaths: {this.getFlopsByType(player, "death").length})
      </li>
    )
  }
  getFlopsByType(player, type) {
    const matchPlayer = flop => type === flop.type
    return filter(matchPlayer, player.flops)    
  }
  render() {
    return (
      <div className="elo">
        <ul>
          {this.state.eloList.map(this.renderEloList.bind(this))}
        </ul>
      </div>
    )
  }
}

export default Elo;
