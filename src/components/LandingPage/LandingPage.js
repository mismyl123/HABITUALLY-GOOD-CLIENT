
import React, { Component } from 'react'
import { Section } from '../Utils/Utils'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faUserPlus, faGem } from '@fortawesome/free-solid-svg-icons'
import './LandingPage.css'

export default class LandingPage extends Component {
  render() {
    return (
      <Section className="LandingPage">
        <div className="LandingPage__add-wrapper">
          <div className="LandingPage__add">
            <FontAwesomeIcon icon={faEdit} size="7x" />
          </div>
          <h3 className="LandingPage__add-subtext">
            Add tasks to your BackBurner and customize the rewards and XP you
            can gain.
          </h3>
        </div>
        <div className="LandingPage__level-up-wrapper">
          <div className="LandingPage__level-up">
            <FontAwesomeIcon icon={faUserPlus} size="6x" />
          </div>
          <h3 className="LandingPage__level-up-subtext">
            Check off completed tasks and gain XP and loot rewards.
          </h3>
        </div>
        <div className="LandingPage__reward-wrapper">
          <div className="LandingPage__reward">
            <FontAwesomeIcon icon={faGem} size="7x" />
          </div>
          <h3 className="LandingPage__reward-subtext">
            Collect rewards into your own Rewards Chest. Loot your rewards and treat yourself for being productive.
          </h3>
        </div>
      </Section>
    )
  }
}