import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/home.css';

class Home extends Component {
  render() {
    return (
    <div className="intro">
      <h1>Hey!</h1>
      <p>I'm Jin, an aspiring Software Engineer, passionate learner, and major foodie based in Seattle, WA.</p>
    </div>
    );
  }
}
export default Home;