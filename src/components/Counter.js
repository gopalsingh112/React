import React, { Component } from 'react'


class Counter extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
     count : 0  
    }
  }

  // increment(){
  //   this.setState({
  //     count : this.state.count + 1
  //   })
  // }
  increment(){
    this.setState((prevs) => ({
      count : prevs.count +1
    }
    ))
  }

  decrement(){
    this.setState({
      count : this.state.count - 1
    })
  }

  reset(){
    this.setState({
      count : 0
    })
  }

  incremetFive(){
    this.increment()
    this.increment()
    this.increment()
    this.increment()
    this.increment()
  }

  render() {
    return (
      <div>
        <h1>Count - {this.state.count}</h1>
        <button onClick = {() => this.increment()}>Increment</button><br></br>
        <button onClick = { () => this.decrement()}>Decrement</button><br></br>
        <button onClick = {() => this.reset()}>Reset</button><br></br>
        <button onClick = {() => this.incremetFive() } >IncrementFive</button>
      </div>
    )
  }
}

export default Counter
