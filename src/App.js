import React, { Component } from 'react'
import './app.scss'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Weather from './pages/Weather'
import Search from './pages/Search'
import './styles/sassRoute.scss'

class App extends Component {
  constructor () {
    super()
    this.state = {
      loading: true
    }
    this.dataFromServer = []
  }
  componentDidMount () {
    // setTimeout(() => {
    this.setState({ loading: false })
    // }, 2000)
  }
  render () {
    if (this.state.loading) {
      return <div className='loading' />
    } else {
      return (
        <Router>
          <Switch>
            <Route
              exact
              path='/'
              render={props => <Home {...props} weather={this.dataFromServer} />}
            />
            <Route
              path='/search/:keyword'
              render={props => <Search {...props} />}
            />
            <Route
              path='/weather/:weoid'
              render={props => <Weather {...props} />}
            />
          </Switch>
        </Router>
      )
    }
  }
}

export default App
