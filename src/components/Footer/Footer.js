import React, { useContext } from 'react'
import './Footer.css'
import { ThemeContext } from '../../contexts/ThemeContext'
import { headerData } from '../../data/headerData'
import { Grid } from '@mui/material';
import {
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaYoutube,
  FaStackOverflow,
  FaCodepen,
} from 'react-icons/fa';
import { SiReplit } from 'react-icons/si';
import { FiPhone, FiAtSign } from 'react-icons/fi';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { socialsData } from '../../data/socialsData';
import { contactsData } from '../../data/contactsData';
const Footer = () => {

  const { theme } = useContext(ThemeContext)

  return (
    <div className="footer" style={{ backgroundColor: theme.secondary }}>
      <Grid style={{ display: "block" }}>
        <div className='contact-icons'>
          <div className='contacts-details'>
            <ul>
              <li>
                <a
                  href={`mailto:${contactsData.email}`}
                  className='personal-details'
                >
                  <div className='detailsIcon'>
                    <FiAtSign />
                  </div>
                  <p>
                    {contactsData.email}
                  </p>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${contactsData.phone}`}
                  className='personal-details'
                >
                  <div className='detailsIcon'>
                    <FiPhone />
                  </div>
                  <p>
                    {contactsData.phone}
                  </p>
                </a>
              </li>
              <li>
                <a
                  href={`https://www.google.com/maps/place/${contactsData.address}`}
                  className='personal-details'
                >
                  <div className='detailsIcon'>
                    <HiOutlineLocationMarker />
                  </div>
                  <p>
                    {contactsData.address}

                  </p>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className='socialmedia-icons'>
          {socialsData.github && (
            <a
              href={socialsData.github}
              target='_blank'
              rel='noreferrer'
              className='socialIcon'
            >
              <FaGithub aria-label='GitHub' className="localIcon" />
            </a>
          )}
          {socialsData.twitter && (
            <a
              href={socialsData.twitter}
              target='_blank'
              rel='noreferrer'
              className='socialIcon'
            >
              <FaTwitter aria-label='Twitter' className="localIcon" />
            </a>
          )}
          {socialsData.linkedIn && (
            <a
              href={socialsData.linkedIn}
              target='_blank'
              rel='noreferrer'
              className='socialIcon'
            >
              <FaLinkedinIn aria-label='LinkedIn' className="localIcon" />
            </a>
          )}
          {socialsData.youtube && (
            <a
              href={socialsData.youtube}
              target='_blank'
              rel='noreferrer'
              className='socialIcon'
            >
              <FaYoutube aria-label='YouTube' className="localIcon" />
            </a>
          )}
          {socialsData.stackOverflow && (
            <a
              href={socialsData.stackOverflow}
              target='_blank'
              rel='noreferrer'
              className='socialIcon'
            >
              <FaStackOverflow aria-label='Stack Overflow' className="localIcon" />
            </a>
          )}
          {socialsData.codepen && (
            <a
              href={socialsData.codepen}
              target='_blank'
              rel='noreferrer'
              className='socialIcon'
            >
              <FaCodepen aria-label='CodePen' className="localIcon" />
            </a>
          )}
          {socialsData.replit && (
            <a
              href={socialsData.replit}
              target='_blank'
              rel='noreferrer'
              className='socialIcon'
            >
              <SiReplit aria-label='replit' className="localIcon" />
            </a>
          )}
        </div>


      </Grid>
       
    </div>
  )
}

export default Footer;