import { Grid, Paper, Box, Typography } from '@material-ui/core';
// import icons frmo  mui
// import mui icon
import React, { useContext } from 'react';
import { ThemeContext } from '../../../contexts/ThemeContext';
import './PackageCards.css'

export const packages = [
  {
    key: 1,
    name: "Basic SEO",
    description: "Includes keyword research, on-page optimization, and monthly reporting on traffic and keyword rankings.",
    price: "$500/month",
    link: `<ReadMoreIcon />`
  },
  {
    key: 2,
    name: "Advanced SEO",
    description: "Includes everything in the Basic SEO p, plus link building and competitor analysis.",
    price: "$1000/month",
    link: `<ReadMoreIcon />`
  },
  {
    key: 3,
    name: "Social Media Marketing",
    description: "Includes social media account setup and management, content creation and scheduling, and monthly reporting on engagement and follower growth.",
    price: "$800/month",
    link: `<ReadMoreIcon />`
  },
  {
    key: 4,
    name: "Branding",
    description: "Includes a brand audit, brand strategy development, and visual identity design (logo, color scheme, typography, etc.).",
    price: "$2000/month",
    link: `<ReadMoreIcon />`

  },
  {
    key: 5,
    name: "Marketing",
    description: "Includes everything in the SEO, Social Media Marketing, and Branding packages, plus email marketing, paid advertising management, and market research.",
    price: "$3000/month",
    link: `<ReadMoreIcon />`

  }]

export const packages2 = [
  {
    key: 6,
    name: "Basic SEO Startup Suite",
    description: "One time setup with instruction as needed to get your keywords setup,  discuss and implement on-page optimization, and review a monthly report on traffic and keyword rankings so you can continue improving your SEO!!!",
    price: "$500 / site",
    link: `<ReadMoreIcon />`

  },
  {
    key: 7,
    name: "Advanced SEO Startup Suite",
    description: "Includes everything in the Basic SEO setup 3-5 backlinks, to get your stats our of the red. Specialized competitor analysis and market analysis. Complete with online support and a custom 1-, 3-, 6-, AND 12-month plan of action.",
    price: "$1000 / site",
    link: `<ReadMoreIcon alignItems="right" style={{ justifyContent: "right" }} />`

  },
  {
    key: 8,
    name: "Social Media Marketing Startup Suite",
    description: "Includes 1-6 social media account setup and management, content creation and scheduling, and monthly reporting on engagement and follower growth.",
    price: "$400 / account",
    link: `<ReadMoreIcon />`

  },
  {
    key: 9,
    name: "Branding Startup Suite",
    description: "Includes a brand audit, creative session with 1-2 expert digital marketers followed by brand strategy development and visual identity design (logo, color scheme, typography, etc.).",
    price: "$800 / brand",
    link: `<ReadMoreIcon />`
  },
  {
    key: 10,
    name: "Marketing Startup Suite",
    description: "Includes everything in Advanced SEO Startup suites, including a complete review and revision of all Social Media sites, establishing or optiomizing your brand, email marketing setup including automation and defualt messages, information and optional walkthrough to setup paid advertising management.",
    price: "$3000 / site",
    link: `<ReadMoreIcon />`

  }
];

function PackageCards() {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div className="services-header">
        <h1 style={{ color: theme.secondary70 }} className="items-center justify-center h-screen">Services</h1>
      </div>
      <Box>
        <Grid container spacing={{ xs: 1, sm: 2, md: 5, }} className="items-center justify-center h-screen" style={{ justifyContent: "center" }}>
          {packages.map((p) => (

            <Grid container style={{ textAlign: "center", padding: '5px', }} mt={15} elevation={6} rowSpacing={3} xs={12} sm={3} md={5} lg={2} className="items-center justify-content-center h-screen">
              <Paper className="service servicePaper">
                <Box className="service serviceBoxName" id={p.key} sx={{ mx: 'auto', py: 1, height: '8rem', fontSize: '2rem', background: "#d35400", zIndex: 20, boxShadow: '4px 4px 8px rgba(36, 3, 6, 1)' }} Grid xs={12}>
                  {p.name}
                </Box>
                <Box className="service serviceBoxDesc" sx={{ mx: 'auto', py: 1, fontSize: '1rem', fontWeight: 500 }} Grid xs={12}>
                  {p.description}
                </Box>
                <Box className="service serviceBox3" sx={{ mx: 'auto', py: 1, fontSize: '2rem', fontWeight: 500 }} Grid xs={12}>
                  <Box className="service serviceBox4">
                    {p.price}
                  </Box>
                </Box>
              </Paper>
            </Grid>

          ))}
        </Grid>
      </Box>
      <Box>
        <Grid container spacing={{ xs: 1, sm: 2, md: 5, }} className="items-center justify-center h-screen" style={{ justifyContent: "center" }}>
          {packages2.map((p) => (

            <Grid container style={{ textAlign: "center", padding: '5px', }} mt={15} elevation={6} rowSpacing={3} xs={12} sm={3} md={5} lg={2} className="items-center justify-content-center h-screen">
              <Paper className="service servicePaper">
                <Box className="service serviceBoxName" id={p.key} sx={{ mx: 'auto', py: 1, height: '8rem', fontSize: '2rem', background: "#db11a9", zIndex: 20, boxShadow: '4px 4px 8px rgba(36, 3, 6, 1)' }} Grid xs={12}>
                  {p.name}
                </Box>
                <Box className="service serviceBoxDesc" sx={{ mx: 'auto', py: 1, fontSize: '1rem', fontWeight: 500 }} Grid xs={12}>
                  {p.description}
                </Box>
                <Box className="service serviceBox3" sx={{ mx: 'auto', py: 1, fontSize: '2rem', fontWeight: 500 }} Grid xs={12}>
                  <Box className="service serviceBox4">
                    {p.price}
                  </Box>
                </Box>
              </Paper>
            </Grid>

          ))}
        </Grid>
      </Box>
    </>
  );
}

export default PackageCards;
