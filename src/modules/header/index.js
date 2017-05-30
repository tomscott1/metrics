import React from 'react'
import './styles/styles.css'

class Header extends React.Component {

  render() {
    return (
      <div className="header">
        <div className="title-logo-font">
          <i className="ion-arrow-graph-up-right"></i>
          &nbsp; Daily Metrics
          { this.props.children }
        </div>
      </div>
    )
  }
}

export default Header
