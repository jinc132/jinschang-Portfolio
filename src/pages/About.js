import React, { Component } from 'react'; 
import { Link } from 'react-router-dom';
import '../css/about.css';
import '../css/home.css';
import picture from '../css/img/jinPicture.png';
class About extends Component {
    render() {
        return (
            <div>
                <div className="greeting">
                    <h1>Nice to meet you!</h1>
                </div>
                <div className='personal-pic-wrapper'>
                    <img src={picture} alt='Jin'/>
                </div>
                <div className="jinBio">
                    <h1>Who is Jin?</h1>
                    <p>
                        I am recent graduate from <a href="https://artsci.washington.edu/" rel="noopener noreferrer" target="_blank">University of Washington College of Arts and Sciences</a>.
                        I received my bachelor's degree in <a href="https://geography.washington.edu/" rel="noopener noreferrer" target="_blank">Geographic Information Systems</a> and minored in <a href="https://ischool.uw.edu/programs/informatics" rel="noopener noreferrer" target="_blank">Informatics</a>.
                            
                    </p>
                </div>
                <div className='email-wrapper'>
                    <div className="email-container">
                        <a href="mailto:Jinc132@gmail.com">
                            <h4>Let's Talk</h4>
                        </a>
                    </div>
                </div>
                <div className="social-area">
                    <a href="https://github.com/jinc132" rel="noopener noreferrer" target="_blank">
                        <div className="circle">
                            <i className="fa fa-github" id="social-media"></i>
                        </div>
                    </a>
                    <a href="https://www.linkedin.com/in/jinschang" rel="noopener noreferrer" target="_blank">
                        <div className="circle">
                            <i className="fa fa-linkedin" id="social-media"></i>
                        </div>
                    </a>
                    <a href="https://www.instagram.com/jc_muzer/?hl=en" rel="noopener noreferrer" target="_blank">
                        <div className="circle">
                            <i className="fa fa-instagram" id="social-media"></i>
                        </div>
                    </a>
                </div>
            </div>
        );
    }
}

export default About;