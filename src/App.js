import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { NavLink, NavItem } from 'reactstrap';
import About from './pages/About';
import Home from './pages/Home';
import resume from './pages/jinresume.pdf';
import logo from './css/logo.png';
import './css/App.css';

const menuItems = [
  'Home',
  'About',
  'Projects'
];
class App extends Component {
  constructor(props) {
    super();
    this.state = {
      isOpen: false
    }
    this.toggle = this.toggle.bind(this);
  }
  
  toggle() {
    this.setState({ isOpen: !this.state.isOpen });
  }
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
      <label>
        <div className="nav-brand">
          <NavLink className="brand" href="/"><img src={logo} alt="portfolio logo"/></NavLink>
        </div>
        <input type="checkbox" />
        <span className="menu">
          <span className="hamburger" />
        </span>
        <ul>
          {menuItems.map(menuItem => 
            <NavItem>
              <NavLink href={'/' + menuItem}>
               {menuItem}
              </NavLink>
            </NavItem>
          )}
          <NavItem>
            <NavLink href={resume} target="_blank" >Resume</NavLink>
          </NavItem>
        </ul>
      </label>
      
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
