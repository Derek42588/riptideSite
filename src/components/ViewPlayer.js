import React from 'react';
import { filter } from "ramda";

class ViewPlayer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
      player: null
    }
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    fetch(`http://riptide.ac:3000/byId/${id}`)
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)
          this.setState({
            isLoaded: true,
            player: result
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
  getFlopsByType(type) {
    const matchPlayer = flop => type === flop.type
    return filter(matchPlayer, this.state.player.flops)    
  }
  renderFlops(flop, index) {
    const name = flop.type === 'kill' ? flop.victimName : flop.killerName
    return (
      <tr key={`flop-${index}`}>
        <td className={flop.type}>
          {flop.type}
        </td>
        <td>
          {name}
        </td>
        <td>
          {flop.ratingDelta}
        </td>
      </tr>
    )
  }
  renderPlayer() {
    return (
      <div>
        <h1>{this.state.player.name}</h1>
        <strong>Rating:</strong> {this.state.player.rating} <br />
        <strong>Kills:</strong> {this.getFlopsByType('kill').length} <br />
        <strong>Deaths:</strong> {this.getFlopsByType('death').length} <br />
        <table>
          <thead>
            <tr>
              <th>Type</th>
              <th>Name</th>
              <th>ELO Delta</th>
            </tr>
          </thead>
          <tbody>
            {this.state.player.flops.reverse().map(this.renderFlops.bind(this))}
          </tbody>
        </table>
      </div>
    )    
  }

  render() {
    return (
      <div className="viewplayer">
        {this.state.player ? this.renderPlayer() : null}
      </div>
    )
  }
}

export default ViewPlayer;
