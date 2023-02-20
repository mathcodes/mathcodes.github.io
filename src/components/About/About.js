import React  from 'react';
import './About.css';
import { aboutData } from '../../data/aboutData'
import { useTheme } from '@mui/material/styles';


function About() {
    const theme = useTheme();
    return (
        <div className="about" id="about" style={{backgroundColor: theme.palette.background.default}}>
            <div className="about-body">
                <div className="about-description">
                    <h2 style={{color: theme.palette.text.main}}>{aboutData.title}</h2>
                    <p style={{color:theme.palette.text.main}}>{aboutData.description1}<br/><br/>{aboutData.description2}<br/><br/>{aboutData.description3}<br/><br/>{aboutData.description4}</p>
                </div>
                <div className="about-img">

                </div>
            </div>

        </div>

    )
}

export default About
