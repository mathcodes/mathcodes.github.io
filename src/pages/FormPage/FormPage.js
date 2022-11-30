import React from 'react';
// import { ThemeContext } from '../../contexts/ThemeContext';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { useForm, ValidationError } from "@formspree/react";
import { Container, Grid } from '@mui/material';
import ThanksBar from './ThanksBar';
import {headerData} from '../../data/headerData'
import Button from '@mui/material/Button';

function ContactForm() {
  const [state, handleSubmit] = useForm("xaykzqea");
  if (state.succeeded) {
    return ( 
    <>
    <h1>Thank you! I will get back to you shortly!</h1>
    <a href="../Main/Main" alt="button anchor tag jon christie"><button>HOME</button></a></>
    );
  }

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#232526' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const formStatus = state.succeeded ?
  <h1>Thank you! I will get back to you shortly!</h1> : <img alt="jon christie web developer resume job portfolio" style={{height:'10rem', width:'10rem'}} src={headerData.BG} />

 

  return (
    <>
      <ThanksBar view={formStatus}/>
      <form className="mx-auto w-full pt-10 sm:w-3/4" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row">
          <Container maxWidth="sm">
            <Grid container spacing={2}>
              <Grid item xs={6} md={8}>
                <Item>
                  <input
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    className="mr-3 w-full rounded border font-body text-black md:w-1/2 lg:mr-5"
                    placeholder="Name"
                    type="text"
                    id="name"
                    name="name"
                  />
                </Item>
              </Grid>
              <Grid item xs={6} md={4}>
                <Item>
                  <input
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    className="mt-6 w-full rounded border font-body text-black md:mt-0 md:ml-3 md:w-1/2 lg:ml-5"
                    placeholder="Email"
                    type="email"
                    id="email"
                    name="email"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />

                </Item>
              </Grid>
              <Grid item xs={12}>
                <Item>
                  <textarea
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    className="mt-6 w-full rounded border px-4 py-3 font-body text-black md:mt-8"
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
                <Item>
                  <button
                    data-aos="fade-down"
                    data-aos-duration="1000"
                    type="submit"
                    disabled={state.submitting}
                    className="mt-6 flex items-center justify-center rounded bg-primary px-8 py-3 font-header text-lg font-bold uppercase text-white hover:bg-grey-20"
                  >
                    Send
                    <i className="bx bx-chevron-right relative -right-2 text-3xl"></i>
                  </button>
                </Item>
              </Grid>
              <div className="formBtn">
						<h1 className="blink" style={{ fontSize: '3rem' }}>👉</h1>
						
							<Button
								style={{
									backgroundColor: '#232526',
									color: '#eaeaea',
									width: '18rem',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
								}} variant="contained">
									<a style={{ backgroundColor: 'none' }} href="./formpage">
								<h2>CONTACT ME</h2></a>
							</Button>
						
						<h1 className="blink2" style={{ fontSize: '3rem' }}>👈</h1>
					</div>

            </Grid>
          </Container>
        </div>
      </form>
    </>
  );
}

export default ContactForm;
