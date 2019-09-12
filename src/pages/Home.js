import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/home.css';

class Home extends Component {
  render() {
    return (
      <div>
        <div className="intro">
          <h1>Hey! I'm Jin, an aspiring Software Engineer, passionate learner, and a major foodie based in Seattle, WA.</h1>
        </div>
        <div className="projects">
          <div className="double-item-row">
            <Link className="item-link" href="https://github.com/jinc132/CeliacRecipes" style={{backgroundColor:'#87C0CD'}}>
              <div id="icebreaker" className="proj-image">
                <div className="hover-overlay">
                  <h2>Icebreaker</h2>
                </div>
              </div>
            </Link>
            <Link className="item-link" href="https://github.com/jinc132/CeliacRecipes" style={{backgroundColor:'#fff6f2'}}>
              <div id="span" className="proj-image">
                <div className="hover-overlay">
                  <h2>Statewide Poverty Action Network</h2>
                </div>
              </div>
            </Link>
          </div>
          <div className="single-item-row">
            <Link className="item-link" href="https://github.com/jinc132/CeliacRecipes" style={{backgroundColor:'white'}}>
                <div id="celiac" className="proj-image">
                  <div className="hover-overlay">
                    <h2>Celiac Recipes</h2>
                  </div>
                </div>
              </Link>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;