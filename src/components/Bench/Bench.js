import React from 'react'
import BenchPlayer from '../../components/BenchPlayer/BenchPlayer'
type Props = {

};
export class Bench extends React.Component {
  props: Props;

  render () {
    return (
      <ul>
      {this.props.team.map((player) => {
        return(
          <BenchPlayer
            player={player}
          />
        )
      })}
      </ul>
    )
  }
}

export default Bench
