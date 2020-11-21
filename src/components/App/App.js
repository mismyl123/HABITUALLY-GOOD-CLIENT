
import React from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import welcome from './components/WelcomePage'
import { FilmContextProvider } from './context/FilmContext'
import Home from './routes/Home'
import MovieDetail from './routes/MovieDetail'
import UpdatePage from './routes/UpdatePage'
import welcomePage from './routes/WelcomeRoute'



const App = () =>{
  return(
  <HabitsContextProvider>
  <div>
   <Router>
     <Switch>
     <Route exact path="/" component ={landing}/>
     <Route exact path="/habits/:id/update" component ={UpdatePage}/>
     <Route exact path="/habits/:id" component ={HabitDetail}/>
     <Route exact path="/landing" component ={Home}/>
     </Switch>
   </Router>
  </div>
  </HabitsContextProvider>
  )}


export default App;
