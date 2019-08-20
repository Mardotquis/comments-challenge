import React, { Component } from 'react'
import Reply from './Reply';

export default class MainComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentText: '',
      replies: [],
      replyToggle: false,
      likes: 0,
      dislikes: 0,
    }
  }

  submitCommentReply = (e) => {
    // updating the replies array in state with the new comment
    e.preventDefault();
    const { commentText } = this.state;
    const copyOfRepliesArray = [...this.state.replies]
    copyOfRepliesArray.push(commentText)
    this.setState({ replies: copyOfRepliesArray })
  }

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ commentText: value })
  }

  toggleForm = () => {
    // toggling the reply form
    this.setState({ replyToggle: !this.state.replyToggle })
  }

  incrementValue = (stateValue) => {
    // passing in a string that
    // will help me incriment the value in state by one
    this.setState({ [stateValue]: this.state[stateValue] + 1 })
  }

  render() {

    const { comment, index } = this.props;
    const { replyToggle, likes, dislikes } = this.state;
    const displayReplies = () => {
      // 0 is also a falsly value
      if (!this.state.replies.length) {
        return <p>No replies yet...</p>
      }
      const listOfComments = this.state.replies.map((comment) => {
        return <Reply reply={comment} />
      })
      return listOfComments
    }
    return (
      <div className="main-comment">
        <hr />
        <p className="main-comment__text">{index + 1}: {comment}</p>
        <div className="main-comment__info">
          <button onClick={() => this.incrementValue('likes')} className="counter">Likes: {likes}</button>
          <button onClick={() => this.incrementValue('dislikes')} className="counter"> Dislikes: {dislikes}</button>
        </div>
        <button onClick={this.toggleForm}>Reply?</button>
        {replyToggle ?
          <form action="" onSubmit={this.submitCommentReply}>
            <label htmlFor="comment">Reply a comment!</label>
            <input type="text" id="comment" onChange={this.handleChange} />
            <input type="submit" value="Reply" />
          </form>
          : null
        }
        {displayReplies()}
      </div>
    )
  }
}
