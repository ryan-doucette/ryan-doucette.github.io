import React, { Component } from 'react';

import mail_logo from './iconImgs/mail_logo.png';
import linkedIn_logo from './iconImgs/linkedIn_logo.png';
import github_logo from './iconImgs/github_logo.png';

import "./greeting.css";
import "./icons.css";
import "./textAnimations.css"


class TopScreen extends Component {
    render() {
        return (
            // container for text and icons on top screen
            <div style={{ height: '100vh', overflowX: 'hidden' }}>
                {/* welcome text */}
                <div className='textStyle textPos1 fade fadeDelay1'>Welcome to</div>
                <div className='textStyle textPos2 fade fadeDelay2'>my personal</div>
                <div className='textStyle textPos3 fade fadeDelay3'>website.</div>

                <div className="IconsContainer" >
                    <div className='MailContainer'>
                        <a href='mailto:doucette.ry@northeastern.edu'>
                            <div className='IconStyle grow' style={{ backgroundImage: `url(${mail_logo})`, position: 'relative', right: '90px' }}></div>
                        </a>
                    </div>
                    <div className='LIContainer' >
                        <a href="https://www.linkedin.com/in/ryan-doucette/" target="_blank" rel="noopener noreferrer">
                            <div className='IconStyle grow' style={{ backgroundImage: `url(${linkedIn_logo})`, position: 'relative', right: '45px' }}></div>
                        </a>
                    </div>
                    <div className='GHContainer grow'>
                        <a href='https://github.com/ryan-doucette' target="_blank" rel="noopener noreferrer">
                            <div className='IconStyle grow' style={{ backgroundImage: `url(${github_logo})` }}></div>
                        </a>
                    </div>
                </div>
                {/* shortcut links to other parts of webpage */}
                <div className='textStyle textPos4 effect-underline fade fadeDelay4' style={{ cursor: 'pointer' }}
                    onClick={() => { document.getElementById('About Me').scrollIntoView({ behavior: "smooth" }) }}>About Me</div>
                <div className='textStyle textPos5 effect-underline fade fadeDelay5' style={{ cursor: 'pointer' }}
                    onClick={() => { document.getElementById('Projects').scrollIntoView({ behavior: "smooth" }) }} >Projects</div>
                <div className='textStyle textPos6 effect-underline fade fadeDelay6' style={{ cursor: 'pointer' }}
                    onClick={() => { document.getElementById('Work').scrollIntoView({ behavior: "smooth" }) }}>Work</div>

            </div>
        );
    }
}

export default TopScreen;