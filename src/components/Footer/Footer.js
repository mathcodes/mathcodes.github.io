import React from 'react'
import './Footer.css'
import { useTheme } from '@mui/material/styles';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
// import { Item } from '@mui/material/Grid';
import {
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaYoutube,
  FaCodepen,
} from 'react-icons/fa';
import { SiReplit } from 'react-icons/si';
import { FiPhone, FiAtSign } from 'react-icons/fi';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { socialsData } from '../../data/socialsData';
import { contactsData } from '../../data/contactsData';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Footer = () => {
  const theme = useTheme();

  return (
    <div className="footer" style={{ color: theme.palette.text.main, backgroundColor: theme.palette.background.paper }}>
      <Grid style={{ display: "block" }}>
        <Grid container spacing={{ xs: 2, md: 3, lg:4 }} columns={{ xs: 4, sm: 8, md: 12 }}>

            <Grid item xs={2} sm={4} md={4}>
              <Item>
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
              </Item>
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <Item>
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
              </Item>
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <Item>
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
              </Item>
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <Item>xs=2</Item>
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <Item>xs=2</Item>
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <Item>xs=2</Item>
            </Grid>

        </Grid>
        <div className='contact-icons'>
          <div className='contacts-details'>
            <ul style={{ padding: 0 }}>
              <li>

              </li>
              <li>

              </li>
              <li>

              </li>
            </ul>
          </div>
        </div>

        <div className='socialmedia-icons'>
          {socialsData.github && (
            <a
              href={socialsData.github}
              target='_blank'
              rel="noopener noreferrer"
              className='socialIcon'

            >
              <FaGithub aria-label='GitHub' className="localIcon" />
            </a>
          )}
          {socialsData.twitter && (
            <a
              href={socialsData.twitter}
              target='_blank'
              rel="noopener noreferrer"
              className='socialIcon'
            >
              <FaTwitter aria-label='Twitter' className="localIcon" />
            </a>
          )}
          {socialsData.linkedIn && (
            <a
              href={socialsData.linkedIn}
              target='_blank'
              rel="noopener noreferrer"
              className='socialIcon'
            >
              <FaLinkedinIn aria-label='LinkedIn' className="localIcon" />
            </a>
          )}
          {socialsData.youtube && (
            <a
              href={socialsData.youtube}
              target='_blank'
              rel="noopener noreferrer"
              className='socialIcon'
            >
              <FaYoutube aria-label='YouTube' className="localIcon" />
            </a>
          )}
          {socialsData.codepen && (
            <a
              href={socialsData.codepen}
              target='_blank'
              rel="noopener noreferrer"
              className='socialIcon'
            >
              <FaCodepen aria-label='CodePen' className="localIcon" />
            </a>
          )}
          {socialsData.replit && (
            <a
              href={socialsData.replit}
              target='_blank'
              rel="noopener noreferrer"
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