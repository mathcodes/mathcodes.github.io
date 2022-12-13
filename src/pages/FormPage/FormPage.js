import React, { useContext } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import { AiOutlineHome } from "react-icons/ai";
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import './FormPage.css'
import { ThemeContext } from '../../contexts/ThemeContext';
import { headerData } from '../../data/headerData'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { useForm, ValidationError } from "@formspree/react";
import { Container, Grid } from '@mui/material';
import Button from '@mui/material/Button';
import FormPageTY from './FormPageTY'


function FormPage() {
  const [state, handleSubmit] = useForm("xaykzqea");
  // const [search, setSearch] = useState('')
  const { theme } = useContext(ThemeContext);

  const useStyles = makeStyles((t) => ({
    search: {
      color: theme.tertiary,
      width: '100%',
      height: '2.75rem',
      outline: 'none',
      border: 'none',
      borderRadius: '20px',
      padding: '0.95rem 1rem',
      fontFamily: "'Noto Sans TC', sans-serif",
      fontWeight: 500,
      fontSize: '0.9rem',
      backgroundColor: theme.secondary,
      boxShadow: theme.type === 'dark' ? 'inset 3px 3px 6px #eaeaea, inset -3px -3px 6px #00000060' : 'inset 3px 3px 6px #ffffffbd, inset -3px -3px 6px #00000030',
      "&::placeholder": {
        color: theme.tertiary80,
      },
      [t.breakpoints.down('sm')]: {
        width: '100%',
      },
    },
    searchArea : {
      color: theme.tertiary,
      width: '100%',
      height: '8.75rem',
      outline: 'none',
      border: 'none',
      borderRadius: '20px',
      padding: '0.95rem 1rem',
      fontFamily: "'Noto Sans TC', sans-serif",
      fontWeight: 500,
      fontSize: '0.9rem',
      backgroundColor: theme.secondary,
      boxShadow: theme.type === 'dark' ? 'inset 3px 3px 6px #eaeaea, inset -3px -3px 6px #00000060' : 'inset 3px 3px 6px #ffffffbd, inset -3px -3px 6px #00000030',
      "&::placeholder": {
        color: theme.tertiary80,
      },
      [t.breakpoints.down('sm')]: {
        width: '100%',
      },
    },    search2: {
      color: '#4faeba',
      width: '100%',
      height: '5.75rem',
      outline: 'none',
      border: 'none',
      padding: '0.95rem 1rem',
      fontFamily: "'Noto Sans TC', sans-serif",
      fontWeight: 500,
      fontSize: '1.9rem',
    },
    home: {
      color: theme.secondary,
      position: 'absolute',
      top: 25,
      left: 25,
      padding: '7px',
      borderRadius: '50%',
      boxSizing: 'content-box',
      fontSize: '2rem',
      cursor: 'pointer',
      boxShadow: theme.type === 'dark' ? '3px 3px 6px #ffffff40, -3px -3px 6px #00000050' : '3px 3px 6px #ffffff40, -3px -3px 6px #00000050',
      transition: 'all 0.3s ease-in-out',
      "&:hover":
      {
        color: theme.tertiary,
        transform: 'scale(1.1)',
      },
      [t.breakpoints.down('sm')]: {
        fontSize: '1.8rem',
      },
    },
  }));
  const classes = useStyles();
  if (state.succeeded) {
    return (
      <>
        <FormPageTY />
        {/* <h1>Thank you! I will get back to you shortly!</h1> */}

      </>
    );
  }

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <div className="formPage" style={{ backgroundColor: theme.secondary }}>
      <Helmet>
        <title>{headerData.name} | Contact Form</title>
      </Helmet>
      <div className="formPage-header" style={{ backgroundColor: theme.primary }}>
        <Link to="/">
          <AiOutlineHome className={classes.home} />
        </Link>
        <h1 style={{ color: '#eaeaea' }}>Contact Form</h1>
      </div>
      <div>
        <h3 style={{color:'#4faeba', fontSize:'1.5rem', margin:'.5rem 0 0 .3rem', fontFamily: "'Noto Sans TC', sans-serif"}}>Fill out the form and I'll get back with you shortly! </h3>
      </div>
      <form className="mx-auto w-full pt-10" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row">
          <Container maxWidth="sm">
            <Grid container spacing={2} mt={4}>
              <Grid item xs={6} md={6}>
                <Item className="projectPage-search">
                  <input
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    className={classes.search}
                    placeholder="Name"
                    type="text"
                    id="name"
                    name="name"
                  />
                </Item>
              </Grid>
              <Grid item xs={6} md={6}>
                <Item className="projectPage-search">
                  <input
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    className={classes.search}
                    placeholder="Email"
                    type="email"
                    id="email"
                    name="email"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />

                </Item>
              </Grid>
              <Grid item xs={12}>
                <Item className="projectPage-search">
                  <textarea
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    className={classes.searchArea}
                    placeholder="Message"
                    id="message"
                    cols="30"
                    rows="10"
                    name="message"
                  ></textarea>
                  <ValidationError prefix="Message" field="message" errors={state.errors} />

                </Item>
              </Grid>
              <Grid item xs={12}>
                <Item className="projectPage-search">
                  <Button
                    data-aos="fade-down"
                    data-aos-duration="1000"
                    type="submit"
                    disabled={state.submitting}
                    className={classes.search}
                    style={{background:'#4faeba', color:'black', fontSize:'1.5rem', margin:'.5rem 0 0 .3rem', fontFamily: "'Noto Sans TC', sans-serif"}}
                  >
                    Send
                    <i className="bx bx-chevron-right relative -right-2 text-3xl"></i>
                  </Button>
                </Item>
              </Grid>

            </Grid>

          </Container>
        </div>
      </form>
    </div>
  )
}

export default FormPage