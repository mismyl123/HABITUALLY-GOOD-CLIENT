
import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from '../Header/Header'
import './App.css'

import LandingPage from '../../routes/LandingPage/LandingPage'
import HabitsPage from '../../routes/HabitsPage/HabitsPage'
import LoginPage from '../../routes/LoginPage/LoginPage';
import RegistrationPage from '../../routes/RegistrationPage/RegistrationPage'
import PublicOnlyRoute from '../Utils/PublicOnlyRoute';
import PrivateRoute from '../Utils/PrivateRoute';
import NotFoundPage from '../../routes/NotFoundPage/NotFoundPage';
import AddHabitsPage from '../../routes/AddHabitsPage/AddHabitsPage';

export default class App extends Component {
  state = { hasError: false }

  static getDerivedStateFromError(error) {
    console.error(error)
    return { hasError: true }
  }

  render() {
    return (
      <div className="App">
        <header className="App__header">
          <Header />
        </header>
        <main className="App__main">
          {this.state.hasError && <p className='red'>There was an error! Oh no!</p>}
          <Switch>
            <Route exact path={'/'} component={LandingPage} />
            <PublicOnlyRoute path={'/login'} component={LoginPage} />
            <PublicOnlyRoute path={'/register'} component={RegistrationPage} />
            <PrivateRoute path={'/dash'} component={HabitsPage} />
            <PrivateRoute path={'/new-task'} component={AddHabitsPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </main>
      </div>
    )
  }
}