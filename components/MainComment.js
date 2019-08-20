import React, { Component } from 'react'

export default class MainComment extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render() {
    const {comment, index} = this.props;
    return (
      <>
      <hr/>
      <p>{index + 1}: {comment}</p>
      </>
    )
  }
}
