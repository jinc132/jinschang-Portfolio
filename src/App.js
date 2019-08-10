import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import './css/App.css';

class App extends Component {
  render() {
    const App = () => (
      <div>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/About' component={About}/>
        </Switch>
      </div>
    )
    return (
      <Switch>
        <App/>
      </Switch>
    );
  }
}

export default App;
