import React, { Component } from 'react'
import { Section } from '../Utils/Utils'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faAward, faUserGraduate } from '@fortawesome/free-solid-svg-icons'
import './LandingPageIntro.css'

export default class LandingPageIntro extends Component {
  render() {
    return (
      <Section className="LandingPageIntro">
        <div className="LandingPageIntro__add-wrapper">
          <div className="LandingPageIntro__add">
            <FontAwesomeIcon icon={faUserGraduate} size="5x" />
          </div>
          <h3 className="LandingPageIntro__add-subtext">
            Add habits to your dashboard and customize the rewards and points you
            can gain.
          </h3>
        </div>
        <div className="LandingPageIntro__level-up-wrapper">
          <div className="LandingPageIntro__level-up">
            <FontAwesomeIcon icon={faCheckSquare} size="4x" />
          </div>
          <h3 className="LandingPageIntro__level-up-subtext">
            Complete your scheduled habits and gain points and rewards.
          </h3>
        </div>
        <div className="LandingPageIntro__reward-wrapper">
          <div className="LandingPageIntro__reward">
            <FontAwesomeIcon icon={faAward} size="5x" />
          </div>
          <h3 className="LandingPageIntro__reward-subtext">
            Changing your life and finishing habits isn't always easy!!  To help encourage you, collect rewards when you finish what you started!!
          </h3>
        </div>
      </Section>
    )
  }
}