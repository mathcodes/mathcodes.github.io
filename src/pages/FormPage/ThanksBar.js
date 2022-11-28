import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { headerData }  from '../../data/headerData';

 

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
  },
});

export default function ThanksBar() {
  return (
    <Stack spacing={2} sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={darkTheme}>
 
        <AppBar position="static" color="primary">
        <img alt="jon christie web developer resume job portfolio" style={{height:'10rem', width:'10rem'}} src={headerData.BG} className={darkTheme.palette} />

        </AppBar>
      </ThemeProvider>
    </Stack>
  );
}