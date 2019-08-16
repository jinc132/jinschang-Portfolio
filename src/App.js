import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';
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

    return (
      <div>
        <Navbar color="dark" light expand="md">
          <NavbarBrand href="/"><img src={logo} alt="portfolio logo" style={{ width: '3em'}}/></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {menuItems.map(menuItem => 
                <NavItem> 
                  <NavLink href={'/' + menuItem}>{menuItem}</NavLink>
                </NavItem>
              )}
              <NavItem>
                <NavLink href={resume} target="_blank" >Resume</NavLink>
                </NavItem>
              </Nav>
          </Collapse>
        </Navbar>  
        <Switch>
          <App/>
        </Switch>
      </div>
    );
  }
}

export default App;
