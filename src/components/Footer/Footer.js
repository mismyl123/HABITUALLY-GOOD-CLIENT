import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGitSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import './Footer.css'

export default class Footer extends Component {
  render() {
    return (
      <footer className="Footer">
        <h5 className="Footer__author">Created by Michelle LaLonde</h5>
        <div className="Footer__icons">
          <a className='link github-link' href='https://github.com/mismyl123'>
            <FontAwesomeIcon icon={faGitSquare} size="lg" />
          </a>
          <a className='link linkedin-link' href='https://www.linkedin.com/in/michelle-lalonde/'>
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </a>
        </div>
        <h6>Copyright 2020</h6>
        <h6>All Rights Reserved</h6>
      </footer>
    )
  }
}