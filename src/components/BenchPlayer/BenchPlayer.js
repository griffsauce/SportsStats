import React from 'react'

type Props = {

};
export class BenchPlayer extends React.Component {
  props: Props;

  render () {
    return (
      <li>
      #{this.props.player.number} {this.props.player.First} {this.props.player.Last} <br/>
      {this.props.player.Position}
      </li>
    )
  }
}

export default BenchPlayer
