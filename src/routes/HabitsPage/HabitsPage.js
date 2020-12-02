
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import HabitsContext from '../../contexts/DashboardContext'
import HabitsApiService from '../../services/dashboard-api-service'
import { Section } from '../../components/Utils/Utils'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
import UserProfileBrief from '../../components/UserProfileBrief/UserProfileBrief'
import HabitsList from '../../components/TaskList/TaskList'
import TokenService from '../../services/token-service'
import './HabitsPage.css'

export default class HabitsPage extends Component {
  static defaultProps = {
    match: { params: {} }
  }

  static contextType = HabitsContext

  componentDidMount() {
    this.context.clearError()
    const username = TokenService.getTokenPayload().sub

    HabitsApiService.getUserByUsername(username)
      .then(this.context.setUser)
      .then(() => {
        HabitsApiService.getUserTasks().then(this.context.setHabitsList)
        HabitsApiService.getUserRewards().then(this.context.setRewardsChest)
      })
      .catch(this.context.setError)
  }

  handleClickRemove = habits_id => {
    HabitsApiService.deleteHabits(habits_id)
      .then(() => {
        HabitsApiService.getUserTasks().then(this.context.setHabitsList)
      })
      .catch(this.context.setError)
  }

  handleClickComplete = (habits_id, reward, xp_gained) => {
    try {
      HabitsApiService.updateUserXp(Number(xp_gained)).then(
        this.context.setUser
      )

      HabitsApiService.deleteHabits(habits_id).then(() => {
        HabitsApiService.getUserHabitss().then(this.context.setHabitsList)
      })
      // .catch(this.context.setError)

      if(reward !== '') {
        HabitsApiService.postReward(reward).then(() => {
          HabitsApiService.getUserRewards().then(this.context.setRewardsChest)
        })
      }
      // .catch(this.context.setError)
    } catch (error) {
      this.context.setError(error)
    }
  }

  handleClickClaim = reward_id => {
    HabitsApiService.claimReward(reward_id)
      .then(() => {
        HabitsApiService.getUserRewards().then(this.context.setRewardsChest)
      })
      .catch(this.context.setError)
  }

  renderUserProfileBrief() {
    const { user, rewardsChest } = this.context

    return (
      <>
        <UserProfileBrief user={user} />
        <RewardsChest
          rewardsChest={rewardsChest}
          onClaim={this.handleClickClaim}
        />
      </>
    )
  }

  renderHabits() {
    const { habitsList = [] } = this.context

    return (
      <HabitsList
        habitsList={habitsList}
        onComplete={this.handleClickComplete}
        onRemove={this.handleClickRemove}
      />
    )
  }

  render() {
    const { error } = this.context

    return (
      <div className='Habits'>
        <div className='UserProfileBrief__with-add-habits'>
          <Section className="UserProfileBrief">
            {error ? (
              <p className="red">
                There was an error retrieving User, please try again
              </p>
            ) : (
              this.renderUserProfileBrief()
            )}
          </Section>
          <Section className="AddHabits">
            <Link to='/new-habits'>
              <h3 className="add-habits-link">
                Add New Habit
                {' '}
                <FontAwesomeIcon className='blue add-habits-icon' icon={faCaretRight} />
              </h3>
            </Link>
          </Section>
        </div>
        <Section className="HabitsList">
          {error ? (
            <p className="red">
              There was an error retrieving Habits, please try again
            </p>
          ) : (
            this.renderHabits()
          )}
        </Section>
      </div>
    )
  }
}