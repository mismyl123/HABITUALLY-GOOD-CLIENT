
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import DashboardContext from '../../contexts/DashboardContext'
import DashboardApiService from '../../services/dashboard-api-service'
import { Section } from '../../components/Utils/Utils'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
import UserProfileBrief from '../../components/UserProfileBrief/UserProfileBrief'
import HabitsList from '../../components/HabitsList/HabitsList'
import TokenService from '../../services/token-service'
import RewardsChest from '../../components/RewardsChest/RewardsChest'
import './DashboardPage.css'

export default class DashboardPage extends Component {
  static defaultProps = {
    match: { params: {} }
  }

  static contextType = DashboardContext

  componentDidMount() {
    this.context.clearError()
    const username = TokenService.getTokenPayload().sub

    DashboardApiService.getUserByUsername(username)
      .then(this.context.setUser)
      .then(() => {
        DashboardApiService.getUserHabits().then(this.context.setHabitsList)
        DashboardApiService.getUserRewards().then(this.context.setRewardsChest)
      })
      .catch(this.context.setError)
  }

  handleClickRemove = habits_id => {
    DashboardApiService.deleteHabits(habits_id)
      .then(() => {
        DashboardApiService.getUserHabits().then(this.context.setHabitsList)
      })
      .catch(this.context.setError)
  }

  handleClickComplete = (habits_id, reward, points_gained) => {
    try {
      DashboardApiService.updateUserXp(Number(points_gained)).then(
        this.context.setUser
      )

      DashboardApiService.deleteTask(habits_id).then(() => {
        DashboardApiService.getUserHabits().then(this.context.setHabitsList)
      })
      // .catch(this.context.setError)

      if(reward !== '') {
        DashboardApiService.postReward(reward).then(() => {
          DashboardApiService.getUserRewards().then(this.context.setRewardsChest)
        })
      }
      // .catch(this.context.setError)
    } catch (error) {
      this.context.setError(error)
    }
  }

  handleClickClaim = reward_id => {
    DashboardApiService.claimReward(reward_id)
      .then(() => {
        DashboardApiService.getUserRewards().then(this.context.setRewardsChest)
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
      <div className='Dashboard'>
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