import React, { Component } from 'react'
import DashboardContext from '../../contexts/DashboardContext'
import DashboardApiService from '../../services/dashboard-api-service'
import { Input, Button, Required, Select } from '../Utils/Utils'

export default class HabitsForm extends Component {
  static contextType = DashboardContext

  static defaultProps = {
    onAddSuccess: () => {}
  }

  state = { error: null }

  handleSubmit = ev => {
    ev.preventDefault()

    const { habits_name, due_date, reward, points } = ev.target

    DashboardApiService.postNewHabits(
      habits_name.value,
      due_date.value,
      reward.value,
      Number(points.value)
    )
      .then(() => {
        DashboardApiService.getUserHabits().then(this.context.setHabitsList)
      })
      .then(() => {
        this.props.onAddSuccess()
        habits_name.value = ''
        due_date.value = ''
        reward.value = ''
        points.value = '10'
      })
      .catch(this.context.setError)
  }

  render() {
    const { error } = this.state

    return (
      <form className="AddHabitsForm" onSubmit={this.handleSubmit}>
        <div role="alert">{error && <p className="red">{error}</p>}</div>
        <div className="habits_name">
          <label htmlFor="habits_name">
            Habit Name <Required />
          </label>
          <Input
            required
            aria-label="Enter Habit Name"
            name="habits_name"
            id="habits_name"
            placeholder="Twenty Pushups a Day.."
          />
        </div>

        <div className="due_date">
          <label htmlFor="due_date">
            Due Date <Required />
          </label>
          <Input
            type="date"
            aria-label="Pick a due date"
            name="due_date"
            id="due_date"
          />
        </div>

        <div className="reward">
          <label htmlFor="reward">
            Reward
          </label>
          <Input
            aria-label="Specify a reward"
            name="reward"
            id="reward"
            placeholder="Eat Your Favorite Dessert..."
          />
        </div>

        <div className="points">
          <label htmlFor="points">
          points <Required />
          </label>
          <Select
            required
            aria-label="Choose appropriate points value"
            name="points"
            id="points"
            children={<>
                <option value="10">10 points</option>
                <option value="25">25 points</option>
                <option value="50">50 points</option>
                <option value="75">75 points</option>
                <option value="100">100 points</option>
              </>
            }
          />
        </div>

        <Button type="submit">Add Habit</Button>
      </form>
    )
  }
}