import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row } from 'reactstrap';
import icebreaker from '../css/img/diveIn.png';
import '../css/home.css';

class Home extends Component {
  render() {
    return (
      <div>
        <div className="intro">
          <h1>Hey! I'm Jin, an aspiring Software Engineer, passionate learner, and a major foodie based in Seattle, WA.</h1>
        </div>
        <div className="projects">
          <Row>
            <Col className="proj1">
              <Link href="https://github.com/jinc132/CeliacRecipes">
                <img id ="project-image" src={icebreaker} alt="icebreaker logo"></img>
              </Link>
              <div className="index-item-text-wrapper">
                <h2>Icebreaker Game Application</h2>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
export default Home;