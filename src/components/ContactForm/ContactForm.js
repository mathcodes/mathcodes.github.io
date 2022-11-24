import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@mui/material/Container';

import {
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaYoutube,
  FaStackOverflow,
  FaCodepen,
  FaInstagram,
} from 'react-icons/fa';
import { SiReplit } from 'react-icons/si';
import { FiPhone, FiAtSign } from 'react-icons/fi';
import { HiOutlineLocationMarker } from 'react-icons/hi';

import { ThemeContext } from '../../contexts/ThemeContext';

import { socialsData } from '../../data/socialsData';
import { contactsData } from '../../data/contactsData';
import './ContactForm.css';

const theme = createTheme({
  status: {
    danger: '#a92ca2',
  },
  palette: {
    primary: {
      main: '#4faeba',
      darker: '#135d66',
    },
    neutral: {
      main: '#BFD9DD',
      contrastText: '#333',
    },
  },
});

const useStyles = makeStyles((t) => ({
  input: {
    border: `4px solid ${theme.primary80}`,
    backgroundColor: `${theme.secondary}`,
    color: `purple`,
    fontFamily: 'var(--primaryFont)',
    fontWeight: 500,
    transition: 'border 0.2s ease-in-out',
    '&:focus': {
      border: `4px solid ${theme.primary600}`,
      color: 'black',
    },
  },
  // message: {
  // 	border: `4px solid ${theme.primary80}`,
  // 	backgroundColor: `${theme.secondary}`,
  // 	color: `${theme.tertiary}`,
  // 	fontFamily: 'var(--primaryFont)',
  // 	fontWeight: 500,
  // 	transition: 'border 0.2s ease-in-out',
  // 	'&:focus': {
  // 		border: `4px solid ${theme.primary600}`,
  // 	},
  // },
  label: {
    backgroundColor: `${theme.secondary}`,
    color: `${theme.primary}`,
    fontFamily: 'var(--primaryFont)',
    fontWeight: 600,
    // fontSize: '0.9rem',
    padding: '0 5px',
    transform: 'translate(25px,50%)',
    display: 'inline-flex',
    '&:hover': {
      transform: 'scale(1.1)',
      color: '#000',
      backgroundColor: theme.tertiary,
    },
  },
  socialIcon: {
    width: '55px',
    height: '55px',
    borderRadius: '50%',
    border: `2px solid #4faeba`,
    fontSize: '45px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '5px',
    backgroundColor: 'none',
    color: theme.secondary,
    transition: '250ms ease-in-out',
    '&:hover': {

      color: '#000',
      backgroundColor: theme.tertiary,
    },
  },
  detailsIcon: {
    backgroundColor: '#667',
    color: '#4faeba',
    borderRadius: '50%',
    border: '2px solid #4faeba',
    width: '45px',
    height: '45px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '23px',
    transition: '250ms ease-in-out',
    flexShrink: 0,
    '&:hover': {
      transform: 'scale(1.1)',
      color: '#667',
      backgroundColor: '#4faeba',
    },
    typoImpo: {
      color: theme.secondary,
    }
  },

}));




function Copyright(props) {

  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link style={{ color: "#4faeba" }} href="https://mui.com/">
        jonchristie.net
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}



function ContactForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      name: data.get('name'),
      email: data.get('email'),
    });
  };
  const classes = useStyles();
  
  return (

    <ThemeProvider theme={theme}>
      <Container className='contactsHead' maxWidth="sm">
        <h1>Contact</h1>
      </Container>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
        >
          <div
            className='contacts'
            id='contacts'
            style={{ backgroundColor: theme.secondary }}
          >
            <CssBaseline />

            <Container maxWidth="sm">
              <Box sx={{ bgcolor: 'none', height: 'fitContent' }} />
              <div className='contacts--container'>


                <div className='contacts-body'>

                  <div className='contacts-details'>
                    <a
                      href={`mailto:${contactsData.email}`}
                      className='personal-details'
                    >
                      <div className={classes.detailsIcon}>
                        <FiAtSign />
                      </div>
                      <p>
                        {contactsData.email}
                      </p>
                    </a>

                    <a
                      href={`tel:${contactsData.phone}`}
                      className='personal-details'
                    >
                      <div className={classes.detailsIcon}>
                        <FiPhone />
                      </div>
                      <p>
                        {contactsData.phone}
                      </p>
                    </a>

                    <a
                      href={`https://www.google.com/maps/place/${contactsData.address}`}
                      className='personal-details'
                    >
                      <div className={classes.detailsIcon}>
                        <HiOutlineLocationMarker />
                      </div>
                      <p>
                        {contactsData.address}

                      </p>
                    </a>


                  </div>
                </div>
              </div>
            </ Container>
            <Container maxWidth="sm">
              <Box sx={{
                bgcolor: 'none',
                border: '2px solid #4faeba',
                height: 'fitContent',
                borderRadius: '20px',
                m: theme.spacing()
              }}
              >

                <div className='socialmedia-icons'>
                  {socialsData.github && (
                    <a
                      href={socialsData.github}
                      target='_blank'
                      rel='noreferrer'
                      className={classes.socialIcon}
                    >
                      <FaGithub aria-label='GitHub' className="localIcon" />
                    </a>
                  )}
                  {socialsData.twitter && (
                    <a
                      href={socialsData.twitter}
                      target='_blank'
                      rel='noreferrer'
                      className={classes.socialIcon}
                    >
                      <FaTwitter aria-label='Twitter' className="localIcon" />
                    </a>
                  )}

                  {socialsData.linkedIn && (
                    <a
                      href={socialsData.linkedIn}
                      target='_blank'
                      rel='noreferrer'
                      className={classes.socialIcon}
                    >
                      <FaLinkedinIn aria-label='LinkedIn' className="localIcon" />
                    </a>
                  )}

                  {socialsData.youtube && (
                    <a
                      href={socialsData.youtube}
                      target='_blank'
                      rel='noreferrer'
                      className={classes.socialIcon}
                    >
                      <FaYoutube aria-label='YouTube' className="localIcon" />
                    </a>
                  )}
                  {socialsData.stackOverflow && (
                    <a
                      href={socialsData.stackOverflow}
                      target='_blank'
                      rel='noreferrer'
                      className={classes.socialIcon}
                    >
                      <FaStackOverflow aria-label='Stack Overflow' className="localIcon" />
                    </a>
                  )}
                  {socialsData.codepen && (
                    <a
                      href={socialsData.codepen}
                      target='_blank'
                      rel='noreferrer'
                      className={classes.socialIcon}
                    >
                      <FaCodepen aria-label='CodePen' className="localIcon" />
                    </a>
                  )}
                  {socialsData.replit && (
                    <a
                      href={socialsData.replit}
                      target='_blank'
                      rel='noreferrer'
                      className={classes.socialIcon}
                    >
                      <SiReplit aria-label='replit' className="localIcon" />
                    </a>
                  )}
                </div>
              </Box>
            </Container>
            {/*  */}




            {/* NEXT SECTION */}
            {/* */}
            {/* <footer style={{color: theme.primary}} variant="body2" align="center">
					
					<a style={{color: theme.primary}} href="https://jonchristie.net/">
						jonchristie.net
					</a>{' ©'}{new Date().getFullYear()}
					
				</footer> */}
            {/* </div>  */}

          </div>

        </Grid>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: '#4faeba' }}>
              <ConnectWithoutContactIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField

                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox style={{ color: "#4faeba" }} value="monthlyEnrollment" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                className="submitBtn"
                style={{ background: "#4faeba" }}
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Copyright sx={{ mt: 2 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default ContactForm;