import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../../services/token-service'
import DashboardContext from '../../contexts/DashboardContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHSquare } from '@fortawesome/free-solid-svg-icons'
import './Header.css'
import { faGofore } from '@fortawesome/free-brands-svg-icons';

export default class Header extends Component {
  static contextType = DashboardContext

  handleLogoutClick = () => {
    TokenService.clearAuthToken()
    this.context.clearUser()
  }

  renderLogoutLink() {
    return (
      <div className='Header__logged-in'>
        <Link
          to='/dash'>
          Dash
        </Link>
        <Link
          onClick={this.handleLogoutClick}
          to='/'>
          Logout
        </Link>
      </div>
    )
  }

  renderLoginLink() {
    return (
      <div className='Header__not-logged-in'>
        <Link
          to='/registration'>
          Register
        </Link>
        <Link
          to='/login'>
          Login
        </Link>
      </div>
    )
  }

  render() {
    return <>
        <nav className='Header'>
          <h1>
            <Link to='/'>
              <FontAwesomeIcon className='pink' icon={faHSquare} />
              <FontAwesomeIcon className='pink' icon={faGofore} />
              {' '}
              Habitually Good
            </Link>
          </h1>
          <span className='Header__tagline--wide'>Increase Your Productivity</span>
          {TokenService.hasAuthToken()
            ? this.renderLogoutLink()
            : this.renderLoginLink()
          }
        </nav>

        <span className='Header__tagline--narrow'>Increase Your Productivity</span>
      </>
  }
}