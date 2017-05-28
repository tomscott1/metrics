import React, { Component } from 'react'
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <i className="fa fa-line-chart"></i>
        &nbsp; Daily Metrics
        { this.props.children }
      </div>
    )
  }
}

export default App
