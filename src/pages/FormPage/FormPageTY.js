import React, { useContext, useState } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import { AiOutlineHome } from "react-icons/ai";
import './FormPage.css'
import { SingleProject } from '../../components';
import { ThemeContext } from '../../contexts/ThemeContext';
import { headerData } from '../../data/headerData'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { useForm, ValidationError } from "@formspree/react";
import { Container, Grid } from '@mui/material';
import ThanksBar from '../../components/ThanksBar/ThanksBar';
import Button from '@mui/material/Button';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'


function FormPageTY() {
  const [state, handleSubmit] = useForm("xaykzqea");
  // const [search, setSearch] = useState('')
  const { theme } = useContext(ThemeContext);

  const useStyles = makeStyles((t) => ({
    search: {
      color: theme.tertiary,
      width: '40%',
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
        width: '350px',
      },
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
        <ThanksBar />
        <h1>Thank you! I will get back to you shortly!</h1>

      </>
    );
  }

  return (
    <div className="formPage" style={{ backgroundColor: theme.secondary }}>
      <Helmet>
        <title>{headerData.name} | Thank You Form</title>
      </Helmet>
      <div className="formPage-header" style={{ backgroundColor: theme.primary }}>
        <Link to="/">
          <AiOutlineHome className={classes.home} />
        </Link>
        <h1 style={{ color: '#eaeaea' }}>Thank You!</h1>
      </div>

      <form className="mx-auto w-full pt-10 sm:w-3/4" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row">
          <Container maxWidth="sm">
            <Grid container spacing={1} mt={4}>
             <h2 style={{ color: '#eaeaea' }}>Thank you for getting in touch.</h2>            
            </Grid>
            <Grid container spacing={1} mt={4}>
             <Button
									style={{
										backgroundColor: theme.primary,
										color: theme.secondary70,
										width: '14rem',
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
									}} variant="contained">
									<a style={{ backgroundColor: 'none' }} href={headerData.CTA_MARKETING_FOR_OPEN_SOURCE}>
										<h2>FREE PDF</h2></a>
								</Button>
                </Grid>
            {/* <div className="divFormBtn">
               <ButtonComponent id="formButtonComponent" label="HOME" link="./" width="18rem" height="4rem"/>
             </div> */}
          </Container>
        </div>
      </form>
    </div>
  )
}

export default FormPageTY
