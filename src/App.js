import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { NavLink, NavItem } from 'reactstrap';
import About from './pages/About';
import Home from './pages/Home';
import resume from './pages/jinresume.pdf';
import logo from './css/logo.png';
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

    let menu = (
      <div className="navi">
        <ul id="navbar">
          <div className="work">
            <NavItem>
              <NavLink href="/Projects">Projects</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href={resume} target="_blank" >Resume</NavLink>
            </NavItem>
          </div>
          <div className="nav-brand">
            <NavLink className="brand" href="/"><img src={logo} alt="portfolio logo"/></NavLink>
          </div>
          <div className="personal">
            <NavItem>
              <NavLink href="/About">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="mailto:Jinc132@gmail.com">Contact</NavLink>
            </NavItem>
          </div>
        </ul>
      </div>
    )
    return (
      <div>
        {menu}  
        <Switch>
          <App/>
        </Switch>
      </div>
    );
  }
}

export default App;
