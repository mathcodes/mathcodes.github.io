import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import PsychologyIcon from '@mui/icons-material/Psychology';
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
import { styled } from '@mui/material/styles';
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
    container: {
      height: '20rem',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
  },
});

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
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

  return (
    <Container>
      <Grid className='contactsHead' >
        <h1 className="contactHeader">Contact</h1>
      </Grid>
      <ThemeProvider theme={theme}>
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
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Item><ConnectWithoutContactIcon sx={{ p: '0.2rem', width: '2rem', height: '2rem', borderRadius: "50%", bgcolor: '#4faeba' }} />
                  Looking to updgrade your website? </Item>
              </Grid>
            </Grid>

            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Item><PsychologyIcon sx={{ p: '0.2rem', width: '2rem', height: '2rem', borderRadius: "50%", bgcolor: '#4faeba' }} />
                  Got an idea for an app or website that you'd like to see come to life?</Item>
              </Grid>
            </Grid>

            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Item><ConnectWithoutContactIcon sx={{ p: '0.2rem', width: '2rem', height: '2rem', borderRadius: "50%", bgcolor: '#4faeba' }} />
                  Interested in collaborating or forming a team to create something amazing?</Item>
              </Grid>
            </Grid>

            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Item><ConnectWithoutContactIcon sx={{ p: '0.2rem', width: '2rem', height: '2rem', borderRadius: "50%", bgcolor: '#4faeba' }} />Hiring web developers with my skillset?</Item>
              </Grid>
            </Grid>


            <h2>Want to learn more about open-source projects and start contributing or creating your own?</h2>

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


        <Grid container component="main" style={{ display: "block" }}>
          <CssBaseline />

          <div
            className='contacts'
            id='contacts'
            style={{ backgroundColor: theme.secondary }}
          >
            <CssBaseline />

            <Container>

              <Box sx={{
                bgcolor: 'none',
                border: '2px solid #4faeba',
                height: 'fitContent',
                borderRadius: '20px',
                m: theme.spacing()
              }}
              ><div className='contact-icons'>



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
              </Box>
            </Container>
          </div>
        </Grid>
      </ThemeProvider>
    </Container>
  );
}

export default ContactForm;