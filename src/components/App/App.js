import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from '../Header/Header'
import PrivateRoute from '../Utils/PrivateRoute'
import LandingPage from '../../routes/LandingPage/LandingPage'
import PublicOnlyRoute from '../Utils/PublicOnlyRoute'
import AddHabitsPage from '../../routes/AddHabitsPage/AddHabitsPage'
import DashboardPage from '../../routes/DashboardPage/DashboardPage'
import LoginPage from '../../routes/LoginPage/LoginPage'
import RegistrationPage from '../../routes/RegistrationPage/RegistrationPage'
import NotFoundPage from '../../routes/NotFoundPage/NotFoundPage'
import './App.css'

class App extends Component {
  state = { hasError: false }

  static getDerivedStateFromError(error) {
    console.error(error)
    return { hasError: true }
  }

  render() {
    return (
      <div className='App'>
        <header className='App__header'>
          <Header />
        </header>
        <main className='App__main'>
          {this.state.hasError && <p className='red'>There was an error! Oh no!</p>}
          <Switch>
            <Route
              exact
              path={'/'}
              component={LandingPage}
            />
            <PublicOnlyRoute
              path={'/login'}
              component={LoginPage}
            />
            <PublicOnlyRoute
              path={'/registration'}
              component={RegistrationPage}
            />
            <PrivateRoute
              path={'/dash'}
              component={DashboardPage}
            />
            <PrivateRoute 
              path={'/new-habits'} component={AddHabitsPage} />
            <Route
              component={NotFoundPage}
            />
          </Switch>
        </main>
      </div>
    )
  }
}

export default App