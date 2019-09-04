import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import icebreaker from '../css/img/diveIn.png';
import span from '../css/img/SPAN.png';
import '../css/home.css';

class Home extends Component {
  render() {
    return (
      <div>
        <div className="intro">
          <h1>Hey! I'm Jin, an aspiring Software Engineer, passionate learner, and a major foodie based in Seattle, WA.</h1>
        </div>
        <div className="projects">
          <div className="row">
            <div className="proj">
              <Link className="item-link" href="https://github.com/jinc132/CeliacRecipes" style={{backgroundColor:'#87C0CD'}}>
                <figure className="item-image-wrapper">
                  <img id ="project-image" src={icebreaker} alt="icebreaker logo"></img>
                </figure>
              </Link>
              <div className="index-item-text-wrapper">
                <h2>Icebreaker Game Application</h2>
              </div>
            </div>
            <div className="proj">
              <Link className="item-link" href="https://github.com/jinc132/CeliacRecipes">
                <figure className="item-image-wrapper" style={{backgroundColor:'white'}}>
                  <img id ="project-image" src={span} alt="SPAN logo"></img>
                </figure>
              </Link>
              <div className="index-item-text-wrapper">
                <h2>Statewide Poverty Action Network</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;