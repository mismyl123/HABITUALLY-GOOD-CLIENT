import React, { Component } from 'react'
import { Section } from '../../components/Utils/Utils';
import HabitsForm from '../../components/HabitsForm/HabitsForm';

export default class AddHabitsPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {}
    }
  }

  handleAddSuccess = () => {
    const { history } = this.props
    const destination = '/dash'
    history.push(destination)
  }

  render() {
    return (
      <Section className='AddHabitsPage'>
        <h2>Add New Habit</h2>
        <HabitsForm onAddSuccess={this.handleAddSuccess} />
      </Section>
    )
  }
}