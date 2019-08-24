import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { NavLink, NavItem } from 'reactstrap';
import About from './pages/About';
import Home from './pages/Home';
import resume from './pages/jinresume.pdf';
import './css/App.css';

class App extends Component {
  handleSelected(url) {
    // reset all the menu items
    let elems = document.querySelectorAll("#navbar .nav-item .nav-link");
    for (let index = 0; index < elems.length; index++) {
      if (elems[index].innerHTML === url) {
        elems[index].classList.add('active');
      }
    }
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
      <div className="navi">
        <ul id="navbar">
          <div className="work">
            <NavItem onClick={this.handleSelected("Projects")}>
              <NavLink href="/Projects">Projects</NavLink>
            </NavItem>
            <NavItem onClick={this.handleSelected("Resume")}>
              <NavLink href={resume} target="_blank" >Resume</NavLink>
            </NavItem>
          </div>
          <div className="nav-brand">
            <NavLink className="brand" href="/">Jin Chang</NavLink>
          </div>
          <div className="personal">
            <NavItem onClick={this.handleSelected("About")}>
              <NavLink href="/About">About</NavLink>
            </NavItem>
            <NavItem onClick={this.handleSelected("Contact")}>
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
