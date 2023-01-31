import { Grid, Paper, Box } from '@material-ui/core';
// import icons frmo  mui
// import mui icon
import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import './PackageCards.css'
import Button from '@material-ui/core/Button';

export const WebDesignPackages = [
  {
    key: 1,
    name: "Website Design and Development",
    description: "This service includes creating a visually appealing and user-friendly design for a website, as well as the development and coding of the site to ensure it functions properly.",
    price: "$50-500",
    link: "./formpage"
  },
  {
    key: 2,
    name: "E-commerce Solutions",
    description: "This service includes creating an online store for a business, complete with a shopping cart, payment gateway integration, and inventory management.",
    price: "$200+",
    link: "./formpage"
  },
  {
    key: 3,
    name: "Content Management Systems (CMS)",
    description: "This service includes setting up and customizing a CMS like WordPress, Joomla, or Drupal, as well as training clients on how to use and update the CMS.",
    price: "$200+",
    link: "./formpage"
  },
  {
    key: 4,
    name: "Search Engine Optimization (SEO)",
    description: "This service includes optimizing a website to rank higher in search engine results, as well as providing ongoing SEO services to improve a site's visibility and traffic.",
    price: "Varies",
    link: "./formpage"
  },
  {
    key: 5,
    name: "Web Hosting and Maintenance",
    description: "This service includes setting up and managing a website's hosting, as well as providing ongoing maintenance and updates to keep the site running smoothly.",
    price: "Varies",
    link: "./formpage"
  }
]

export const SuitePackages = [
  {
    key: 6,
    name: "Basic SEO",
    description: "Includes keyword research, on-page optimization, and monthly reporting on traffic and keyword rankings.",
    price: "$500/month",
    link: "./formpage"
  },
  {
    key: 7,
    name: "Advanced SEO",
    description: "Includes everything in the Basic SEO p, plus link building and competitor analysis.",
    price: "$1000/month",
    link: "./formpage"
  },
  {
    key: 8,
    name: "Social Media Marketing",
    description: "Includes social media account setup and management, content creation and scheduling, and monthly reporting on engagement and follower growth.",
    price: "$800/month",
    link: "./formpage"
  },
  {
    key: 9,
    name: "Branding",
    description: "Includes a brand audit, brand strategy development, and visual identity design (logo, color scheme, typography, etc.).",
    price: "$2000/month",
    link: `<ReadMoreIcon />`

  },
  {
    key: 10,
    name: "Marketing",
    description: "Includes everything in the SEO, Social Media Marketing, and Branding packages, plus email marketing, paid advertising management, and market research.",
    price: "$3000/month",
    link: `<ReadMoreIcon />`

  }]

export const MonthlyPackages = [
  {
    key: 11,
    name: "Basic SEO Startup Suite",
    description: "One time setup with instruction as needed to get your keywords setup,  discuss and implement on-page optimization, and review a monthly report on traffic and keyword rankings so you can continue improving your SEO!!!",
    price: "$500 / site",
    link: `<ReadMoreIcon />`

  },
  {
    key: 12,
    name: "Advanced SEO Startup Suite",
    description: "Includes everything in the Basic SEO setup 3-5 backlinks, to get your stats our of the red. Specialized competitor analysis and market analysis. Complete with online support and a custom 1-, 3-, 6-, AND 12-month plan of action.",
    price: "$1000 / site",
    link: `<ReadMoreIcon alignItems="right" style={{ justifyContent: "right" }} />`

  },
  {
    key: 12,
    name: "Marketing Startup Suite",
    description: "Includes everything in Advanced SEO Startup suites, including a complete review and revision of all Social Media sites, establishing or optiomizing your brand, email marketing setup including automation and defualt messages, information and optional walkthrough to setup paid advertising management.",
    price: "$3000 / site",
    link: `<ReadMoreIcon />`

  },
  {
    key: 14,
    name: "Branding Startup Suite",
    description: "Includes a brand audit, creative session with 1-2 expert digital marketers followed by brand strategy development and visual identity design (logo, color scheme, typography, etc.).",
    price: "$800 / brand",
    link: `<ReadMoreIcon />`
  },
  {
    key: 15,
    name: "Social Media Marketing Startup Suite",
    description: "Includes 1-6 social media account setup and management, content creation and scheduling, and monthly reporting on engagement and follower growth.",
    price: "$400 / account",
    link: `<ReadMoreIcon />`

  }
];

function PackageCards() {
  const {theme} = useTheme();

  return (
    <>
      <div className="services-header">
        <h1 style={{ color: theme.secondary.main }} className="items-center justify-center h-screen">Services</h1>
      </div>
      <Box>
      <h3 style={{ color: theme.secondary }} className="items-center justify-center h-screen">Web Development</h3>
        <Grid container spacing={{ xs: 1, sm: 2, md: 5, }} className="items-center justify-center h-screen" style={{ justifyContent: "center" }}>
          {WebDesignPackages.map((p) => (

            <Grid container style={{ textAlign: "center", padding: '5px', }} mt={15} elevation={6} rowSpacing={3} xs={12} sm={3} md={5} lg={2} className="items-center justify-content-center h-screen">
              <Paper className="service servicePaper">
                <Box className="service serviceBoxName" id={p.key} sx={{ mx: 'auto', py: 1, height: '8rem', fontSize: '1.5rem', background: "#fdd43c", zIndex: 20, boxShadow: '4px 4px 8px rgba(36, 3, 6, 1)' }} Grid xs={12}>
                  {p.name}
                </Box>
                <Box className="service serviceBoxDesc" sx={{ my:2, mx: 'auto', py: 1, fontSize: '1rem',  height: '10vm', fontWeight: 500 }} Grid xs={12}>
                  {p.description}
                </Box>
                <Box className="service serviceBox3" sx={{my:5,  mx: 'auto', py: 5, fontSize: '1rem',  height: '2rem', fontWeight: 500 }} Grid xs={12}>
                  <Box className="service serviceBox4">
                    {/*   button that takes user to contact form */}
                    <Button onClick={() => window.location.href = p.link}   variant="contained" color="primary" style={{ background: "darkolivegreen", color: "#fff", fontWeight: 500, fontSize: '1rem', height: '3rem', width: '80%', boxShadow: '4px 4px 8px rgba(36, 3, 6, 1)' }}>Start Here!</Button>

                  </Box>
                </Box>
              </Paper>
            </Grid>

          ))}
        </Grid>
      </Box>
      <Box>
        <Grid container spacing={{ xs: 1, sm: 2, md: 5, }} className="items-center justify-center h-screen" style={{ justifyContent: "center" }}>
          {MonthlyPackages.map((p) => (

            <Grid container style={{ textAlign: "center", padding: '5px', }} mt={15} elevation={6} rowSpacing={3} xs={12} sm={3} md={5} lg={2} className="items-center justify-content-center h-screen">
              <Grid px={6} >
              <Paper className="service servicePaper">
                <Box className="service serviceBoxName" id={p.key} sx={{  py: 1, height: '8rem', fontSize: '1.5rem', background: "#fdd43c", zIndex: 20, boxShadow: '4px 4px 8px rgba(36, 3, 6, 1)' }} Grid xs={12}>
                  {p.name}
                </Box>
                <Box className="service serviceBoxDesc" sx={{ my:2,mx: 'auto', py: 1, fontSize: '1rem',  height: '10vm', fontWeight: 500 }} Grid xs={12}>
                  {p.description}
                </Box>
                <Box className="service serviceBox3" sx={{my:5,  mx: 'auto', py: 5, fontSize: '1rem',  height: '2rem', fontWeight: 500 }} Grid xs={12}>
                  <Box className="service serviceBox4">
                  <Button onClick={() => window.location.href = p.link} variant="contained" color="primary" style={{ background: "darkolivegreen", color: "#fff", fontWeight: 500, fontSize: '1rem', height: '2rem', width: '80%', boxShadow: '4px 4px 8px rgba(36, 3, 6, 1)' }}>Start Here!</Button>
                  </Box>
                </Box>
              </Paper>
              </Grid>
            </Grid>

          ))}
        </Grid>
      </Box>
      <Box>
        <Grid container spacing={{ xs: 1, sm: 2, md: 5, }} className="items-center justify-center h-screen" style={{ justifyContent: "center" }}>
          {SuitePackages.map((p) => (

            <Grid container style={{ textAlign: "center", padding: '5px', }} mt={15} elevation={6} rowSpacing={3} xs={12} sm={3} md={5} lg={2} className="items-center justify-content-center h-screen">
              <Paper className="service servicePaper">
                <Box className="service serviceBoxName" id={p.key} sx={{ mx: 'auto', py: 1, height: '8rem', fontSize: '1.5rem', background: "#fdd43c", zIndex: 20, boxShadow: '4px 4px 8px rgba(36, 3, 6, 1)' }} Grid xs={12}>
                  {p.name}
                </Box>
                <Box className="service serviceBoxDesc" sx={{ my:2,mx: 'auto', py: 1, fontSize: '1rem',  height: '12rem', fontWeight: 500 }} Grid xs={12}>
                  {p.description}
                </Box>
                <Box className="service serviceBox3" sx={{my:2, mx: 'auto', py: 1, fontSize: '2rem',  height: '3rem', fontWeight: 500 }} Grid xs={12}>
                  <Box className="service serviceBox4">
                  <Button onClick={() => window.location.href = p.link} variant="contained" color="primary" style={{ background: "darkolivegreen", color: "#fdd43c", fontWeight: 500, fontSize: '1rem', height: '2rem', width: '80%', boxShadow: '4px 4px 8px rgba(36, 3, 6, 1)' }}>Start Here!</Button>
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
