import React, { Component } from 'react'
import { Section } from '../Utils/Utils'
import './LandingPageHero.css'
import DemoCredentials from '../DemoCredentials/DemoCredentials';

export default class LandingPageHero extends Component {
  render() {
    return (
      <Section className="LandingPageHero">
        <h1 className="LandingPageHero__textblock">
          <span className="LandingPageHero__title">Habitually Good</span>
          <span className="LandingPageHero__subtitle">
            <span className="green">Create New Habits.</span>
            {' '}
            <span className="green">Live Your Best Life!</span>
          </span>
          <span className="LandingPageHero__intro">
            It can take as little as 21 days to create a new habit!! Time to start your new life with Habitually Good!! This app encourages you to fulfill your goals by gaining points every time you create and finish your new habit. 
          </span>
          <DemoCredentials />
        </h1>
      </Section>
    )
  }
}