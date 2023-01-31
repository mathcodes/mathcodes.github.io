import React  from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import { AiOutlineHome } from "react-icons/ai";
import './FormPage.css'
// import { theme } from '../../theme/theme';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { useForm, ValidationError } from "@formspree/react";
import { Container, Grid } from '@mui/material';
import Button from '@mui/material/Button';
import FormPageTY from './FormPageTY'
import { useTheme } from '@mui/material/styles';


function FormPage() {
  const [state, handleSubmit] = useForm("xaykzqea");
  // const [search, setSearch] = useState('')
  const theme = useTheme();

  const useStyles = makeStyles((t) => ({
    search: {
      color: theme.palette.primary.main,
      height: '2.75rem',
      outline: 'none',
      border: 'none',
      borderRadius: '20px',
      padding: '0.95rem 1rem',
      fontFamily: "'Noto Sans TC', sans-serif",
      fontWeight: 500,
      fontSize: '0.9rem',
      backgroundColor: theme.secondary,
       
      [t.breakpoints.down('xs')]: {
        width: '100%',
      },
    },
    searchArea: {
      color: theme.palette.primary.main,
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
    }, 
    home: {
      color: theme.palette.primary.main,
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
      
      <div className='formPage-header' style={{ color: '#fdd43c', fontFamily: 'system-ui' }}>
        <Link to="/">
          <AiOutlineHome className={classes.home} />
        </Link>
						<h2>Contact</h2>
					</div>
      <div>
        <h3 style={{ color: '#fdd43c', fontSize: '1.5rem', margin: '.5rem 0 0 .3rem', fontFamily: "'Noto Sans TC', sans-serif" }}>Fill out the form and I'll get back with you shortly! </h3>
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

                  <label style={{ width:"100%", color: '#fdd43c', fontSize: '1.2rem' }}>Select up to three services you are interested in:
                    <input style={{ width: '100%'}} list="services" name="Service" data-aos="fade-left"
                      data-aos-duration="1000"
                      className={classes.search} /></label>
                  <datalist id="services">
                    <option value="Website Design and Development" />
                    <option value="E-commerce Solutions" />
                    <option value="Content Management Systems (CMS)" />
                    <option value="Search Engine Optimization (SEO)" />
                    <option value="Web Hosting and Maintenance" />
                    <option value="Basic SEO Startup Suite" />
                    <option value="Advanced SEO Startup Suite" />
                    <option value="Marketing Startup Suite" />
                    <option value="Branding Startup Suite" />
                    <option value="Social Media Marketing Startup Suite" />
                    <option value="Basic SEO" />
                    <option value="Advanced SEO" />
                    <option value="Social Media Marketing(CMS)" />
                    <option value="Branding" />
                    <option value="Marketing" />
                  </datalist>
                </Item>
              </Grid>
              <Grid item xs={12}>
                <Item className="projectPage-search">

                  <label style={{ width:"100%", color: '#fdd43c', fontSize: '1.2rem' }}>
                    <input style={{ width: '100%'}} list="services" name="Service" data-aos="fade-left"
                      data-aos-duration="1000"
                      className={classes.search} /></label>
                  <datalist id="services">
                    <option value="Website Design and Development" />
                    <option value="E-commerce Solutions" />
                    <option value="Content Management Systems (CMS)" />
                    <option value="Search Engine Optimization (SEO)" />
                    <option value="Web Hosting and Maintenance" />
                    <option value="Basic SEO Startup Suite" />
                    <option value="Advanced SEO Startup Suite" />
                    <option value="Marketing Startup Suite" />
                    <option value="Branding Startup Suite" />
                    <option value="Social Media Marketing Startup Suite" />
                    <option value="Basic SEO" />
                    <option value="Advanced SEO" />
                    <option value="Social Media Marketing(CMS)" />
                    <option value="Branding" />
                    <option value="Marketing" />
                  </datalist>
                </Item>
              </Grid>
              <Grid item xs={12}>
                <Item className="projectPage-search">

                  <label style={{ width:"100%", color: '#fdd43c', fontSize: '1.2rem' }}>
                    <input style={{ width: '100%'}} w-full list="services" name="Service" data-aos="fade-left"
                      data-aos-duration="1000"
                      className={classes.search} /></label>
                  <datalist id="services">
                    <option value="Website Design and Development" />
                    <option value="E-commerce Solutions" />
                    <option value="Content Management Systems (CMS)" />
                    <option value="Search Engine Optimization (SEO)" />
                    <option value="Web Hosting and Maintenance" />
                    <option value="Basic SEO Startup Suite" />
                    <option value="Advanced SEO Startup Suite" />
                    <option value="Marketing Startup Suite" />
                    <option value="Branding Startup Suite" />
                    <option value="Social Media Marketing Startup Suite" />
                    <option value="Basic SEO" />
                    <option value="Advanced SEO" />
                    <option value="Social Media Marketing(CMS)" />
                    <option value="Branding" />
                    <option value="Marketing" />
                  </datalist>
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
                    style={{ background: '#fdd43c', color: 'black', fontSize: '1.5rem', margin: '.5rem 0 0 .3rem', fontFamily: "'Noto Sans TC', sans-serif" }}
                  >
                    Send
                    <i className="bx bx-chevron-right relative -right-2 text-3xl"></i>
                  </Button>
                </Item>
              </Grid>
            </Grid>
          </Container>
        </div>
      </form >
    </div >
  )
}

export default FormPage
