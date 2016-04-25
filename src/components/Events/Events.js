import React from 'react'
import eventItems from '../../components/eventItems/eventItems'
type Props = {

};
export class Events extends React.Component {
  props: Props;

  render () {
    console.log(this.props)
    return (
      <div>
      Events
      </div>
    )
  }
}

export default Events
