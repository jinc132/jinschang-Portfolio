import React, { Component } from 'react';
import randomColor from 'randomcolor';
import TagCloud from 'react-tag-cloud';
import '../css/about.css';
import '../css/home.css';
import picture from '../css/img/jinPicture.png';


const skillset = [
    { text: 'HTML', value: 24 },
    { text: 'CSS', value: 24 },
    { text: 'JavaScript', value: 24 },
    { text: 'ReactJS', value: 36 },
    { text: 'NodeJS', value: 36 },
    { text: 'R', value: 24 },
    { text: 'Python', value: 18 },
    { text: 'VueJS', value: 5 },
    { text: 'JUnit', value: 15 },
    { text: 'TypeScript', value: 22 },
    { text: 'Firebase', value: 26 },
    { text: 'SQL', value: 5 },
    { text: 'Tableau', value: 22 },
    { text: 'Figma', value: 34 },
    { text: 'Jupyter Notebook', value: 35 },
    { text: 'QGIS', value: 10 },
    { text: 'ArcGIS', value: 15 },
    { text: 'Communication', value: 40 },
    { text: 'Trello', value: 9 },
    { text: 'Project Management', value: 26 },
    { text: 'Korean', value: 45 }
];
  
class About extends Component {
    componentDidMount() {
        setInterval(() => {
          this.forceUpdate();
        }, 3000);
    }
    render() {
        let skillTags = skillset.map(function(skill, i) {
            return(
              <div>{skill.text}</div>
            );
        });
        return (
            <div>
                <div className="greeting">
                    <h1>Nice to meet you!</h1>
                </div>
                <div className='personal-pic-wrapper'>
                    <img src={picture} alt='Jin'/>
                </div>
                <div className="jinBio">
                    <div className="about-info">
                        <h2>Who Am I?</h2>
                        <p>
                            I am a recent graduate from <a href="https://artsci.washington.edu/" rel="noopener noreferrer" target="_blank">University of Washington</a> with
                            a degree in <a href="https://geography.washington.edu/" rel="noopener noreferrer" target="_blank">Geographic Information Systems</a> and a
                            minor in <a href="https://ischool.uw.edu/programs/informatics" rel="noopener noreferrer" target="_blank">Informatics</a>.<br/><br/>
                            Originally, I started my academic career in the pharmaceutical field but, I was intrigued by the logic and collaborative environment that the 
                            computer science field promotes. I have always had a passion for collaborating, sharing ideas and learning new things. These were some of the
                            factors that motivated me to switch gears and pursue this field.<br /><br /> 
                            
                            Over the last few years, I’ve focused on building software projects that are both creative and help the community in new ways.
                            After college, I worked on developing an interactive web map application for Statewide Poverty Action Network, a nonprofit organization that advocates for
                            public policy.<br /><br /> 

                            During my downtime, I have would go hiking, read on my sofa, or a collaborate on fun side projects. I’m experienced in utilizing: 
                        </p>
                        <div className='app-outer'>
                            <div className='app-inner'>
                                <TagCloud 
                                    className='tag-cloud'
                                    style={{
                                        fontSize: 30,
                                        fontFamily: 'Josefin Slab, serif',
                                        color: () => randomColor(
                                            {hue: 'green'}
                                        )
                                    }}>
                                    <div
                                        style={{
                                            fontFamily: 'Staatliches, cursive',
                                            fontWeight: 'bold',
                                            fontSize: 40,
                                            color: 'orange'
                                        }}>Java</div>
                                    {skillTags}
                                </TagCloud>
                            </div>
                        </div>
                        <p>
                            I would like to apply my skills in a team based setting to create software products that make a big impact.
                        </p>
                    </div>
                </div>
                <div className='email-wrapper'>
                    <div className="email-container">
                        <a href="mailto:Jinc132@gmail.com">
                            Let's Talk!
                        </a>
                    </div>
                </div>
                <div className="social-area" id="about-social">
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