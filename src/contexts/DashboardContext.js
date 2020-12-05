import React, { Component } from 'react'

const DashboardContext = React.createContext({
  habitsList: [],
  user: {},
  rewardsChest: [],
  error: null,
  setHabitsList: () => {},
  setUser: () => {},
  updateUserPoints: () => {},
  clearUser: () => {},
  setRewardsChest: () => {},
  setError: () => {},
  clearError: () => {},
})

export default DashboardContext

export class DashboardProvider extends Component {
  state = {
    habitsList: [],
    user: {},
    rewardsChest: [],
    error: null
  }

  setHabitsList = habitsList => {
    this.setState({ habitsList })
  }

  setUser = user => {
    this.setState({ user })
  }

  updateUser = user => {
    this.setState({ user })
  }
  
  clearUser = () => {
    this.setState({ user: {} })
  }

  setRewardsChest = rewardsChest => {
    this.setState({ rewardsChest })
  }
  
  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }
  
  render() {
    const value = {
      habitsList: this.state.habitsList,
      user: this.state.user,
      rewardsChest: this.state.rewardsChest,
      error: this.state.error,
      setHabitsList: this.setHabitsList,
      setUser: this.setUser,
      updateUserPoints: this.updateUserPoints,
      clearUser: this.clearUser,
      setRewardsChest: this.setRewardsChest,
      setError: this.setError,
      clearError: this.clearError,
    }

    return (
      <DashboardContext.Provider value={value}>
        {this.props.children}
      </DashboardContext.Provider>
    )
  }
}