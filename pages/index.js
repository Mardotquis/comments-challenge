import React, { Component } from 'react'
import MainComment from '../components/MainComment';
import '../App.css';

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainComments: [],
      commentText: ""
    }
  }

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({commentText: value})
  }

  submitNewComment = (e) => {
    // updating the mainComments array in state with the new value
    e.preventDefault();
    const { commentText } = this.state;
    const copyOfMainCommentsArray = [...this.state.mainComments]
    copyOfMainCommentsArray.push(commentText)
    this.setState({mainComments: copyOfMainCommentsArray})
  }

  deleteMainComment = (commentText) => {
    // passing in text because index may
    // change if an array element is removed before it
    let mainComments = [...this.state.mainComments]
    const commentToDeleteIndex = mainComments.indexOf(commentText)
    mainComments.splice(commentToDeleteIndex, 1)
    this.setState({mainComments})
  }


  render() {
    const displayMainComments = () => {
      // 0 is also a falsly value
      if (!this.state.mainComments.length) {
        return <p>No comments yet...</p>
      }
      const listOfComments =  this.state.mainComments.map((comment, index) => {
        return <MainComment comment={comment}
        // passing this down so that
        // I can also use it there and not repeat the code
        deleteMainComment={this.deleteMainComment}
        index={index}
        />
      })
      return listOfComments
    }
    return (
      <>
        <h1>Comment Challenge!</h1>
        <h2>Submit a comment!</h2>
        <form action="" onSubmit={this.submitNewComment}>
          <label htmlFor="comment">Submit a comment!</label>
          <input type="text" id="comment" onChange={this.handleChange}/>
          <input type="submit" value="Submit" />
        </form>
        <h2>Comments:</h2>
        {displayMainComments()}
      </>
    )
  }
}