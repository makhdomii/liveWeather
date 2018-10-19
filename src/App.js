import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Weather from './pages/Weather'
import Search from './pages/Search'
import './styles/sassRoute.scss'

class App extends Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/search/:keyword' component={Search} />
          <Route path='/weather/:weoid' component={Weather} />
        </Switch>
      </Router>
    )
  }
}

export default App
