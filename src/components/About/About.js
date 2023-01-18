import React, { useContext } from 'react';

import './About.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { aboutData } from '../../data/aboutData'


function About() {

    const { theme } = useContext(ThemeContext);
    return (
        <div className="about" id="about" style={{backgroundColor: theme.secondary}}>
            <div className="line-styling">
              <div className="style-circle" style={{backgroundColor: theme.secondary}}></div>
              <div className="style-circle" style={{backgroundColor: theme.secondary}}></div>
              <div className="style-line" style={{backgroundColor: theme.secondary}}></div>
            </div>
            <div className="about-body">
                <div className="about-description">
                    <h2 style={{color: 'darkolivegreen'}}>{aboutData.title}</h2>
                    <p style={{color:theme.tertiary80}}>{aboutData.description1}<br/><br/>{aboutData.description2}<br/><br/>{aboutData.description3}<br/><br/>{aboutData.description4}</p>
                </div>
                <div className="about-img">
                    <img 
                        src={aboutData.image}  
                        alt="" 
                    />
                </div>
            </div>
           
        </div>

    )
}

export default About
