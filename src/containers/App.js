import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Home from './Home'
import About from './About'

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Navigation />

          <div className="container">
            <div className="row">
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
            </div>
          </div>

          <Footer />
        </Fragment>
      </Router>
    )
  }
}

export default App
