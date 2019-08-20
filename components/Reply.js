import React, { Component } from 'react'

export default class Reply extends Component {
  render() {
    const { reply } = this.props;
    return (
      <div style={{marginLeft: '2em'}}>
        <p>Reply: {reply}</p>
      </div>
    )
  }
}
