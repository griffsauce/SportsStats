import React from 'react'
import EventItems from '../../components/EventItems/EventItems'
type Props = {

};
export class Events extends React.Component {
  props: Props;

  render () {
    console.log(this.props)
    return (
      <ul>
      {this.props.game.events.map((item) => {
        return(
          <EventItems
          item={item}
          />
        )
      })}
      </ul>


    )
  }
}

export default Events
