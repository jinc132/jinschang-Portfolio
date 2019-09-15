import React, { Component } from 'react'; 
import { Link } from 'react-router-dom';
import '../css/about.css';
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
                        My name is Jin Chang, a recent graduate from <a href="https://artsci.washington.edu/" rel="noopener noreferrer" target="_blank">University of Washington College of Arts and Sciences</a>.
                        I received my bachelor's degree in <a href="https://geography.washington.edu/" rel="noopener noreferrer" target="_blank">Geography</a> and minored in <a href="https://ischool.uw.edu/programs/informatics" rel="noopener noreferrer" target="_blank">Informatics</a>.
                        During this period, I frequently spent my nights on coding, designing, debugging, drinking coffee, and with out much sleep. However, although it was a long and arduous journey I still survived and in turn gained invaluable skills. 
                        These experiences and obstacles each had a significant impact in shaping me into the person that I am today. 
                    </p>
                </div>
                <div className="bioList">
                    <div className="list">
                        <h1>You can usually find me: </h1>
                        <ul>
                            <li>
                                Colaborating on an interesting project
                            </li>
                            <li>
                                Reading coding blogs
                            </li>
                            <li>
                                Sketching out designs or pseudocode on the whiteboard
                            </li>
                            <li>
                                Creating random sketches on Figma
                            </li>
                        </ul>
                        <h1>How about Passions?</h1>
                        <p>
                            As for my current passions, I am interested in learning about developing microservices and RESTful APIs. Even though I 
                            have multiple different skills under my belt, I am not a expert. I am familiar and confident in my skills but, definitely not a expert since I 
                            still have so much to learn and explore. 
                        </p>
                    </div>
                    <div className="portrait">
                    </div>
                </div>
                <div className="contact">
                    <div className="skew"></div>
                    <div className="contactContainer">
                        <div className="message">
                            <div className="descContainer">
                                <h1>Contact Me</h1>
                                <h2>Got Questions? Drop me a line</h2>
                            </div>
                            <Link to={"/Contact"}>
                                <button>
                                    <i className="far fa-paper-plane"></i>
                                    <h2>Message Me</h2>
                                </button>
                            </Link>
                        </div>
                        <div className="otherContact">
                            <div className="emailContainer">
                                <div className="circle">
                                    <i className="far fa-envelope"></i>
                                </div>
                                <div className="email">
                                    <a href="mailto:Jinc132@gmail.com">
                                        <h2>Jinc132@gmail.com</h2>
                                    </a>
                                </div>
                            </div>
                            <div className="linkedinContainer">
                                <div className="circle">
                                    <i className="fab fa-linkedin-in"></i>
                                </div>
                                <div className="linkedin">
                                    <a href="https://www.linkedin.com/in/jin-s-chang/">
                                        <h2>Via Linkedin</h2>
                                    </a>
                                </div>
                            </div>
                            <div className="instagramContainer">
                                <div className="circle">
                                    <i className="fab fa-instagram"></i>
                                </div>
                                <div className="instagram">
                                    <a href="https://www.instagram.com/jc_muzer/">
                                        <h2>Via Instagram</h2>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;