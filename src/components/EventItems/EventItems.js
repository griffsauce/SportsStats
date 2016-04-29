import React from 'react'

type Props = {

};
export class EventItems extends React.Component {
  props: Props;

  render () {
    let item=this.props.item
    return (
      <li>
      {item.type} <br/>Score: Home {item.score.home} - {item.score.away} Away
      </li>
    )
  }
}

export default EventItems
