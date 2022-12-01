import React, { Component } from 'react'

export default class StateExample extends Component {
    state={
        name:"react",
        age:2005
    }
  render() {
    return (
      <div>StateExample
        <p>{this.state.name}{this.state.age}</p>
      </div>
    )
  }
}
