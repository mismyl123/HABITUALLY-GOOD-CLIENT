import React, { Component } from 'react'
import HabitsContext from '../../contexts/HabitsContext'
import HabitsApiService from '../../services/habits-api-service'
import { Input, Button, Required, Select } from '../Utils/Utils'

export default class HabitsForm extends Component {
  static contextType = HabitsContext

  static defaultProps = {
    onAddSuccess: () => {}
  }

  state = { error: null }

  handleSubmit = ev => {
    ev.preventDefault()

    const { habits_name, due_date, reward, xp } = ev.target

    DashboardApiService.postNewTask(
      habits_name.value,
      due_date.value,
      reward.value,
      Number(xp.value)
    )
      .then(() => {
        HabitsApiService.getUserHabits().then(this.context.setHabitsList)
      })
      .then(() => {
        this.props.onAddSuccess()
        habits_name.value = ''
        due_date.value = ''
        reward.value = ''
        xp.value = '10'
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
            aria-label="Enter Habits Name"
            name="habits_name"
            id="habits_name"
            placeholder="New Habit..."
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
            placeholder="Treat Yourself..."
          />
        </div>

        <div className="xp">
          <label htmlFor="xp">
            XP <Required />
          </label>
          <Select
            required
            aria-label="Choose appropriate xp value"
            name="xp"
            id="xp"
            children={<>
                <option value="10">10 XP</option>
                <option value="25">25 XP</option>
                <option value="50">50 XP</option>
                <option value="75">75 XP</option>
                <option value="100">100 XP</option>
              </>
            }
          />
        </div>

        <Button type="submit">Add Task</Button>
      </form>
    )
  }
}