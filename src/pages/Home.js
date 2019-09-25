import React, { Component } from 'react';
import '../css/home.css';
class Home extends Component {
  render() {
    return (
      <div>
        <div className='intro'>
          <h1>Hey! I'm Jin, an aspiring Software Engineer, passionate learner, and a major foodie based in Seattle, WA.</h1>
        </div>
        <div className='projects' id='projects'>
          <div className='double-item-row'>
            <a className='item-link' href='https://github.com/info442-sp19-undefined/hw7' rel='noopener noreferrer' target='_blank' style={{backgroundColor:'#87C0CD'}}>
              <div id='icebreaker' className='proj-image'>
                <div className='hover-overlay'>
                  <h2>Dive In!</h2>
                </div>
              </div>
            </a>
            <a className='item-link' href='https://poverty469.github.io/span-mapp/#/tour' rel='noopener noreferrer' target='_blank' style={{backgroundColor:'#fff6f2'}}>
              <div id='span' className='proj-image'>
                <div className='hover-overlay'>
                  <h2>Statewide Poverty Action Network</h2>
                </div>
              </div>
            </a>
          </div>
          <div className='single-item-row'>
            <a className='item-link' href='https://github.com/jinc132/CeliacRecipes' rel='noopener noreferrer' target='_blank' style={{backgroundColor:'wheat'}}>
              <div id='celiac' className='proj-image'>
                <div className='hover-overlay'>
                  <h2>Celiac Recipes</h2>
                </div>
              </div>
            </a>
          </div>
          <div className='double-item-row'>
            <a className='item-link' href='https://github.com/jinc132/MovieApp' rel='noopener noreferrer' target='_blank' style={{backgroundColor:'rgb(226, 87, 87)'}}>
              <div id='movieApp' className='proj-image'>
                <div className='hover-overlay'>
                  <h2>Movie Rate</h2>
                </div>
              </div>
            </a>
            <a className='item-link' href='https://github.com/carmelitadeleon/GEOG458_Final' rel='noopener noreferrer' target='_blank' style={{backgroundColor:'rgb(139, 139, 137)'}}>
              <div id='usexports' className='proj-image'>
                <div className='hover-overlay'>
                  <h2>U.S. Export Analysis</h2>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className='social-area'>
          <a href='https://github.com/jinc132' rel='noopener noreferrer' target='_blank'>
            <div className='circle'>
              <i className='fa fa-github' id='social-media' />
            </div>
          </a>
          <a href='https://www.linkedin.com/in/jinschang' rel='noopener noreferrer' target='_blank'>
            <div className='circle'>
              <i className='fa fa-linkedin' id='social-media' />
            </div>
          </a>
          <a href='mailto:Jinc132@gmail.com' rel='noopener noreferrer' target='_blank'>
            <div className='circle'>
              <i className='fa fa-envelope' id='social-media' />
            </div>
          </a>
        </div>
      </div>
    );
  }
}
export default Home;