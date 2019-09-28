import React, { Component } from 'react';
import { Tooltip } from 'reactstrap';
import '../css/resume.css';
import '../css/home.css';
import resume from './resume_.pdf';

const projectsList = [
  {
    role: 'Front-End Developer',
    link: '',
    projectName: 'What\'s poppin',
    location: 'SWE Hackathon, Seattle, WA | April 2019 – Present',
    about: 'Creating a web application that displays popular amenities at specific timeframes.',
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
    about: 'Developed a web application that focuses on fostering stronger team relationships.',
    info: [
      'Oversaw the development of a new web application via ReactJS, Firebase, NodeJS, HTML, and CSS',
      'Implemented 2 different front-end features where the user can either join an existing game or create a new game',
      'Pushed app development two weeks ahead of schedule through unit, UI, and integration tests',
      'Conducted code reviews for each module'
    ]
  },
  {
    role: 'Software Developer',
    link: '',
    projectName: 'Computer-Aided Design MVC',
    location: 'University of Washington, Seattle, WA | May 2019',
    about: 'A simple Computer-Aided Design (CAD) program that someone could theoretically use to design the architecture of a block house or something of similar scale.',
    info: [
      'Developed a CAD program via TypeScript, NodeJS, and GIT',
      'Dynamically allow users to have different modes of interaction by implementing the MVC and Observer pattern',
      'Applied the SOLID principle to reduce cohesion and coupling'
    ]
  },
  {
    role: 'Software Developer',
    link: '',
    projectName: 'Search Engine',
    location: 'University of Washington, Seattle, WA | April 2018 – May 2018',
    about: 'Developed a simple search engine that allows users to look up stuff.',
    info: [
      'Created a dictionary data structure and its associating get, add, remove, and contains methods in Java',
      'Troubleshooted and addressed algorithmic issues with JUnit testing',
      'Modified the code to handle more than 100,000 cases under 7 seconds'
    ]
  }
]

class Resume extends Component {
  constructor (props) {
    super(props)
    this.toggle = this.toggle.bind(this)
    this.state = {
      tooltipOpen: ''
    }
  }

  toggle (val) {
    this.setState({
      tooltipOpen: val
    })
  }
  
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
          <div className='line2' id={'Tooltip-' + i} onMouseOver={() => this.toggle('toolTips-' + i)} onMouseLeave={() => this.toggle('')}>
            <a href={project.link} target='_blank' rel='noopener noreferrer'>{project.projectName}</a>, {project.location}
          </div>
        )
      } else {
        projectLink = (
          <div className='line2' id={'Tooltip-' + i} onMouseOver={() => this.toggle('toolTips-' + i)} onMouseLeave={() => this.toggle('')}>
            {project.projectName}, {project.location}
          </div>
        )
      }

      return (
        <div className='description-container' key={i}>
          <div className='line1'>{project.role}</div>
          {projectLink}
          <Tooltip placement='left' isOpen={this.state.tooltipOpen === 'toolTips-' + i} target={'Tooltip-' + i}>
            {project.about}
          </Tooltip>
          <ul>
            {roleDescription}
          </ul>
        </div>
      )
    }, this)

    return (
      <div>
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
              <li>AWS</li>
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
              <li>Heroku</li>
            </ul>
          </div>
          <div className='list'>
            <ul>
              <li>Powtoon</li>
              <li>Jupyter Notebook</li>
              <li>Responsive Layout and Design</li>
              <li>Tableau</li>
              <li>Selenium</li>
              <li>SQL</li>
              <li>Vue.js</li>
            </ul>
          </div>
        </div>
        <div className='container'>
          <h2>Experience</h2>
          <div className='description-container'>
            <div className='line1'>Front-End Developer</div>
            <div className='line2' id={'Tooltip-SPAN'} onMouseOver={() => this.toggle('Tooltip-SPAN')} onMouseLeave={() => this.toggle('')} >
              <a href='https://povertyaction.org/' rel='noopener noreferrer' target='_blank'>Statewide Poverty Action Network</a>, Seattle, WA | April 2019 – July 2019
            </div>
            <Tooltip placement='right' isOpen={this.state.tooltipOpen === 'Tooltip-SPAN'} target={'Tooltip-SPAN'}>
              Developed a web map application with two different modes of exploration - a tour and an interactive map.
              The web application helps users understand Statewide Poverty Action Network's mission and goals. 
            </Tooltip>
            <ul>
              <li>Developed a web map application using VueJS, NodeJS, HTML, and CSS</li>
              <li>Initiated and integrated the force load event into the splash page to load automatically in 30 seconds</li>
              <li>Created an automated web scraper via the Selenium library and parsed the data with Python scripts</li>
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
        <div className='end-container'>
          <div className='end-wrapper'>
            <a href={resume} target='_blank' rel='noopener noreferrer' download='jinchang_resume.pdf'>
              <button>Download Resume</button>
            </a>
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
      </div>
    )
  }
}

export default Resume
