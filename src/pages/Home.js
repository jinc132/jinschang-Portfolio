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
        <div className="projects" id="projects">
          <div className="double-item-row">
            <Link className="item-link" href="https://github.com/info442-sp19-undefined/hw7" style={{backgroundColor:'#87C0CD'}}>
              <div id="icebreaker" className="proj-image">
                <div className="hover-overlay">
                  <h2>Dive In!</h2>
                </div>
              </div>
            </Link>
            <Link className="item-link" href="https://poverty469.github.io/span-mapp/#/tour" style={{backgroundColor:'#fff6f2'}}>
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
          <div className="double-item-row">
            <Link className="item-link" href="https://github.com/jinc132/MovieApp" style={{backgroundColor:'#807A46'}}>
              <div id="movieApp" className="proj-image">
                <div className="hover-overlay">
                  <h2>Movie Rate</h2>
                </div>
              </div>
            </Link>
            <Link className="item-link" href="https://github.com/carmelitadeleon/GEOG458_Final" style={{backgroundColor:'#808080'}}>
              <div id="usexports" className="proj-image">
                <div className="hover-overlay">
                  <h2>U.S. Export Analysis</h2>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="social-area">
          <Link href="https://github.com/jinc132">
            <div className="circle">
              <i class="fa fa-github" id="social-media"></i>
            </div>
          </Link>
          <Link href="https://www.linkedin.com/in/jinschang">
            <div className="circle">
              <i class="fa fa-linkedin" id="social-media"></i>
            </div>
          </Link>
          <Link href="mailto:Jinc132@gmail.com">
            <div className="circle">
              <i class="fa fa-envelope" id="social-media"></i>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}
export default Home;