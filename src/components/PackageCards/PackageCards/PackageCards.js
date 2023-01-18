import { Grid, Paper, CardContent, Typography } from '@material-ui/core';
// import icons frmo  mui
// import mui icon
import ReadMoreIcon from '@mui/icons-material/ReadMore';

export const packages = [
  {
    key: 1,
    name: "Basic SEO",
    description: "Includes keyword research, on-page optimization, and monthly reporting on traffic and keyword rankings.",
    price: "$500/month",
    link: <ReadMoreIcon />
  },
  {
    key: 2,
    name: "Advanced SEO",
    description: "Includes everything in the Basic SEO p, plus link building and competitor analysis.",
    price: "$1000/month",
    link: <ReadMoreIcon />
  },
  {
    key: 3,
    name: "Social Media Marketing",
    description: "Includes social media account setup and management, content creation and scheduling, and monthly reporting on engagement and follower growth.",
    price: "$800/month",
    link: <ReadMoreIcon />
  },
  {
    key: 4,
    name: "Branding",
    description: "Includes a brand audit, brand strategy development, and visual identity design (logo, color scheme, typography, etc.).",
    price: "$2000/month",
    link: <ReadMoreIcon />

  },
  {
    key: 5,
    name: "Marketing",
    description: "Includes everything in the SEO, Social Media Marketing, and Branding packages, plus email marketing, paid advertising management, and market research.",
    price: "$3000/month",
    link: <ReadMoreIcon />

  },
  {
    key: 6, 
    name: "Basic SEO Startup Suite",
    description: "One time setup with instruction as needed to get your keywords setup,  discuss and implement on-page optimization, and review a monthly report on traffic and keyword rankings so you can continue improving your SEO!!!",
    price: "$500 / site",
    link: <ReadMoreIcon />

  },
  {
    key: 7,
    name: "Advanced SEO Startup Suite",
    description: "Includes everything in the Basic SEO setup 3-5 backlinks, to get your stats our of the red. Specialized competitor analysis and market analysis. Complete with online support and a custom 1-, 3-, 6-, AND 12-month plan of action.",
    price: "$1000 / site",
    link: <ReadMoreIcon alignItems="right" style={{ justifyContent: "right" }} />

  },
  {
    key: 8,
    name: "Social Media Marketing Startup Suite",
    description: "Includes 1-6 social media account setup and management, content creation and scheduling, and monthly reporting on engagement and follower growth.",
    price: "$400 / account",
    link: <ReadMoreIcon />

  },
  {
    key: 9,
    name: "Branding Startup Suite",
    description: "Includes a brand audit, creative session with 1-2 expert digital marketers followed by brand strategy development and visual identity design (logo, color scheme, typography, etc.).",
    price: "$800 / brand",
    link: <ReadMoreIcon />

  },
  {
    key: 10,
    name: "Marketing Startup Suite",
    description: "Includes everything in Advanced SEO Startup suites, including a complete review and revision of all Social Media sites, establishing or optiomizing your brand, email marketing setup including automation and defualt messages, information and optional walkthrough to setup paid advertising management.",
    price: "$3000 / site",
    link: <ReadMoreIcon />

  }
];

 function PackageCards() {
  return (
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      {packages.map((p) => (
        <Grid item xs={2} sm={4} md={4} id={p.key}>
          <Paper flex elevation={6}>
            <CardContent>
              <Typography variant="h5" component="h2">
                {p.name}
              </Typography>
              <Typography variant="body2" component="p">
                {p.description}
              </Typography>
              <Typography variant="body2" component="p">
                {p.price}
              </Typography>
              <Typography variant="body2" component="p" >
                {p.link}
              </Typography>
            </CardContent>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}

export default PackageCards;
