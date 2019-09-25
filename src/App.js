import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { NavLink, NavItem } from 'reactstrap';
import About from './pages/About';
import Home from './pages/Home'; 
import Resume from './pages/Resume';
import './css/App.css';

class App extends Component {
  render() {
    const App = () => (
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/Projects' component={Home} />
          <Route path='/Resume' component={Resume}/>
          <Route path='/About' component={About} />
        </Switch>
      </div>
    )
    
    let menu = (
      <div className='navi'>
        <ul id='navbar'>
          <div className='work'>
            <NavItem className={this.props.history.location.pathname === '/Projects' ? 'active' : ''}>
              <NavLink href='/Projects'>Projects</NavLink>
            </NavItem>
            <NavItem className={this.props.history.location.pathname === '/Resume' ? 'active' : ''}>
              <NavLink href='/Resume' >Resume</NavLink>
            </NavItem>
          </div>
          <div className='nav-brand'>
            <NavLink className='brand' href='/'>Jin Chang</NavLink>
          </div>
          <div className='personal'>
            <NavItem className={this.props.history.location.pathname === '/About' ? 'active' : ''}>
              <NavLink href='/About'>About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='mailto:Jinc132@gmail.com'>Contact</NavLink>
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

export default withRouter(App);
