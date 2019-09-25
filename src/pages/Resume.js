import React, { Component } from 'react';
import '../css/resume.css';
import '../css/home.css';
import resume from './jinresume.pdf';
import pic from '../css/img/circlePic.png';

const projectsList = [
  {
    role: 'Front-End Developer',
    link: '',
    projectName: 'What\'s poppin',
    location: 'SWE Hackathon, Seattle, WA | April 2019 – Present',
    info: [
      'Designed and implemented a web interface to display live popular times from the Places API',
      'Engineered the user interface so that users can dynamically create a new account or login',
      'Collaborated and managed code using GIT and version control'
    ]
  },
  {
    role: 'Front-End Developer',
    link: 'https://github.com/info442-sp19-undefined/hw7',
    projectName: 'IceBreaker',
    location: 'University of Washington, Seattle, WA | April 2019 – July 2019',
    info: [
      'Designed and implemented a web interface to display live popular times from the Places API',
      'Engineered the user interface so that users can dynamically create a new account or login',
      'Collaborated and managed code using GIT and version control'
    ]
  },
  {
    role: 'Software Developer',
    link: '',
    projectName: 'CAD MVC',
    location: 'University of Washington, Seattle, WA | May 2019',
    info: [
      'Developed a textual and graphical view allowing two different modes of modeling in TypeScript',
      'Implemented MVC and Observer pattern into architecture '
    ]
  },
  {
    role: 'Software Developer',
    link: '',
    projectName: 'Search Engine',
    location: 'University of Washington, Seattle, WA | April 2018 – May 2018',
    info: [
      'Created a dictionary data structure and its associating get, add, remove, and contains methods in Java',
      'Troubleshooted and addressed algorithmic issues with JUnit testing',
      'Modified the code to handle more than 100,000 cases under 7 seconds'
    ]
  }
]
class Resume extends Component {
  render () {
    let renderProjects = projectsList.map(function (project, i) {
      // Render the role description of each project
      let roleDescription = project.info.map(function (element, k) {
        return (
          <li key={k}>{element}</li>
        )
      })

      // Check whether the link exists, if so then render the a tags with the link.
      let projectLink = null
      if (project.link !== '') {
        projectLink = (
          <div className='line2'>
            <a href={project.link}>{project.projectName}</a>, {project.location}
          </div>
        )
      } else {
        projectLink = (
          <div className='line2'>
            {project.projectName}, {project.location}
          </div>
        )
      }

      return (
        <div className='description-container' key={i}>
          <div className='line1'>{project.role}</div>
          {projectLink}
          <ul>
            {roleDescription}
          </ul>
        </div>
      )
    })

    return (
      <div>
        <h1 className='title'>Take a Closer Look</h1>
        <div className='background'>
          <div className='background-overlay'>
            <div className='intro-wrapper'>
              <div className='img-wrapper'>
                <img src={pic} alt='jin' />
              </div>
              <a href={resume} target="_blank" download>
                <button>Download Resume</button>
              </a>
            </div>
          </div>
        </div>
        <div className='container' id='resume-container'>
          <h2>Skillset</h2>
          <div className='list'>
            <ul>
              <li>Version Control (GIT)</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>React.js</li>
              <li>Node.js</li>
              <li>JavaScript</li>
            </ul>
          </div>
          <div className='list'>
            <ul>
              <li>Java</li>
              <li>Python</li>
              <li>R</li>
              <li>Junit</li>
              <li>TypeScript</li>
              <li>Firebase</li>
            </ul>
          </div>
          <div className='list'>
            <ul>
              <li>Powtoon</li>
              <li>Jupyter Notebook</li>
              <li>Responsive Layout and Design</li>
              <li>Tableau</li>
              <li>SQL (limited)</li>
              <li>Vue.js (limited)</li>
            </ul>
          </div>
        </div>
        <div className='container'>
          <h2>Experience</h2>
          <div className='description-container'>
            <div className='line1'>Front-End Developer</div>
            <div className='line2'>
              <a href='https://povertyaction.org/' rel='noopener noreferrer' target='_blank'>Statewide Poverty Action Network</a>, Seattle, WA | April 2019 – July 2019
            </div>
            <ul>
              <li>Developed a web map application using VueJS, NodeJS, HTML, and CSS</li>
              <li>Initiated and integrated the force load event into the splash page to load automatically in 30 seconds</li>
              <li>Developed an automated web scraper with Selenium and parsed the data with Python</li>
              <li>Tested and troubleshooted technical issues</li>
            </ul>
          </div>
        </div>
        <div className='container'>
          <h2>Projects</h2>
          {renderProjects}
        </div>
        <div className='container' id='education-container'>
          <h2>Education</h2>
          <div className='description-container'>
            <div className='line1'>B.A. Geographic Information Systems</div>
            <div>
              University of Washington, Seattle, WA | November 2016 – July 2019
            </div>
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
        <footer>2019 created via ReactJS by Jin Chang and Photo by Marc Mintel on Unsplash</footer>
      </div>
    )
  }
}

export default Resume
