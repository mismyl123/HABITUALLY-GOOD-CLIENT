import React, { Component } from 'react'
import './DemoCredentials.css'

export default class DemoCredentials extends Component {
  render() {
    return (
      <div className="DemoCredentials">
        <h4>Demo Test of Habitually Good</h4>
        <h5 className="DemoCredentials__username-wrapper">
          <span className="demo_username_label">Username:</span>
          {' '}
          <span className="demo_username">demo</span>
        </h5>
        <h5 className="DemoCredentials__password-wrapper">
          <span className="demo_password_label">Password:</span>
          {' '}
          <span className="demo_password">password</span>
        </h5>
      </div>
    )
  }
}