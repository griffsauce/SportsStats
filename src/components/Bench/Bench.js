import React from 'react'
import BenchPlayer from '../../components/BenchPlayer/BenchPlayer'
type Props = {

};
export class Bench extends React.Component {
  props: Props;

  render () {
    let team= this.props.team
    return (
      <div className={this.props.which}>

      <h3>
      {team.name}: {team.mascot}<br/>
      <a href={team.site}>Team Website</a>
      </h3>
      <ul>
      {team.players.map((player) => {
        return(
          <BenchPlayer
            player={player}
          />
        )
      })}
      </ul>
      </div>
    )
  }
}

export default Bench
