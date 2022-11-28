import React from 'react';
import { useForm } from '@formspree/react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
 
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function ContactForm() {
  const [state, handleSubmit] = useForm("xaykzqea");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }

 
  return (
  <>
 
  <Box sx={{ flexGrow: 1 }}>
      <Grid>
      <form id="fs-frm" name="simple-contact-form" accept-charset="utf-8" action="https://formspree.io/f/xaykzqea" method="post">
    <fieldset id="fs-frm-inputs">
        <Grid item xs={6}>
          <Item>
            <label for="full-name">Full Name</label>
            <input type="text" name="name" id="full-name" placeholder="First and Last" required=""/></Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <label for="email-address">Email Address</label>
            <input type="email" name="_replyto" id="email-address" placeholder="email@domain.tld" required=""/>
          </Item>
        </Grid>
        <Grid item xs={12}>
          <Item>
            <label for="message">Message</label>
            <textarea rows="5" name="message" id="message" placeholder="Type text here..." required=""></textarea>
            <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission"/>
          </Item>
        </Grid>
        <button type="submit" disabled={state.submitting} href="./ThankYou">
        Submit
      </button>
      </fieldset> </form>
      </Grid>
    </Box>
 
      
      
       
    
 
 
  </>
  );
} 

export default ContactForm