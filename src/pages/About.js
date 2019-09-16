import React, { Component } from 'react'; 
import WordCloud from 'react-d3-cloud';
import '../css/about.css';
import '../css/home.css';
import picture from '../css/img/jinPicture.png';

const skillset = [
    { text: 'Java', value: 50000 },
    { text: 'HTML', value: 200 },
    { text: 'CSS', value: 50 },
    { text: 'JavaScript', value: 3400 },
    { text: 'ReactJS', value: 2300 },
    { text: 'NodeJS', value: 3400 },
    { text: 'R', value: 300 },
    { text: 'Python', value: 500 },
    { text: 'VueJS', value: 520 },
    { text: 'JUnit', value: 5042 },
    { text: 'TypeScript', value: 5340 },
    { text: 'Firebase', value: 5568 },
    { text: 'SQL', value: 3290 },
    { text: 'Tableau', value: 6320 },
    { text: 'Figma', value: 2040 },
    { text: 'Jupyter Notebook', value: 3920 },
    { text: 'QGIS', value: 482 },
    { text: 'ArcGIS', value: 554 },
    { text: 'Communication', value: 490 },
    { text: 'Trello', value: 1493 },
    { text: 'Project Management', value: 903 }
];

const fontSizeMapper = word => Math.log2(word.value) * 3.5;
const rotate = word => word.value % 60;

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
                    <div className="about-info">
                        <h2>Who is Jin?</h2>
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

                            During my downtime, I have would go hiking, read on my sofa, or a collaborate on fun side projects. I’m experienced in languages like: 
                        </p>
                        <WordCloud data={skillset} fontSizeMapper={fontSizeMapper} rotate={rotate}/>
                        <p>
                            I would like to apply my skills in a team based setting to create software products that make a big impact.
                        </p>
                    </div>
                </div>
                <div className='email-wrapper'>
                    <div className="email-container">
                        <a href="mailto:Jinc132@gmail.com">
                            Let's Talk
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