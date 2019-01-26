import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <header>
            <Link to="/">Home</Link>
            <Link to="/about-us">About</Link>
          </header>

          <main>
            <Route exact path="/" component={Home} />
            <Route exact path="/about-us" component={About} />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
