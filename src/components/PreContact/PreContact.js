import * as React from 'react';
import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import PsychologyIcon from '@mui/icons-material/Psychology';
import HandshakeIcon from '@mui/icons-material/Handshake';
import WorkIcon from '@mui/icons-material/Work';
import UpgradeIcon from '@mui/icons-material/Upgrade';
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
import './PreContact.css';

const theme = createTheme({
  status: {
    danger: ' #FFB908',
  },
  palette: {
    primary: {
      main: '#2d3334',
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
    h2: {
      fontSize: '112rem',
      fontWeight: 'bold',
      color: 'red',
    }
  },
});

const Item = styled(Paper)(({ theme }) => ({

  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#2d3334',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,

}
)); console.log(theme.palette.mode)

 

function PreContact() {
 

  return (
 
      <ThemeProvider theme={theme}>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
         
              mx: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Grid spacing={2}>
              <Grid item xs={12}>
                <Item sx={{color:'#FFB908', bgcolor: '#2d3334' }}><UpgradeIcon sx={{ p: '0.2rem', width: '3rem', height: '3rem', borderRadius: "50%", color:'#FFB908', bgcolor: '#2d3334' }} />
                  Looking to updgrade your website? </Item>
              </Grid>
            </Grid>

            <Grid spacing={2}>
              <Grid item xs={12}>
                <Item sx={{color:'#FFB908', bgcolor: '#2d3334' }}><PsychologyIcon sx={{ p: '0.2rem', width: '3rem', height: '3rem', borderRadius: "50%", color:'#FFB908', bgcolor: '#2d3334' }} />
                  Got an idea for an app or website that you'd like to see come to life?</Item>
              </Grid>
            </Grid>

            <Grid spacing={2}>
              <Grid item xs={12}>
              <Item sx={{color:'#FFB908', bgcolor: '#2d3334' }}><HandshakeIcon sx={{ p: '0.2rem', width: '3rem', height: '3rem', borderRadius: "50%", color:'#FFB908', bgcolor: '#2d3334' }} />
                  Interested in collaborating or forming a team to create something amazing?</Item>
              </Grid>
            </Grid>

            <Grid spacing={2}>
              <Grid item xs={12}>
              <Item maxwidth sx={{color:'#FFB908', bgcolor: '#2d3334' }}><WorkIcon sx={{ p: '0.4rem', width: '3rem', height: '3rem', borderRadius: "50%", color:'#FFB908', bgcolor: '#2d3334' }} />
                  Hiring web developers with my skillset?</Item>
              </Grid>
            </Grid> 
        
          </Box>
        </Grid>


  
      </ThemeProvider>
   );
}

export default PreContact;

