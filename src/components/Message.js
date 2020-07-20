import React, { Component } from 'react'


class Message extends Component {


  constructor(){
  super()
  this.state = {
    message: 'Login to your account'
  }
  }

  changeMsg(){
    this.setState({
      message : 'Congratulations you are logged in'
    })
  }

  render(){
  return (
    <div>
  <h1>{this.state.message} </h1>
  <button onClick = {() => this.changeMsg()} > Login</button>
  </div>
  )
  }

}

export default Message