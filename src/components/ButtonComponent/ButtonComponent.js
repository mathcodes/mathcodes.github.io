import React from 'react'
import './ButtonComponent.css'
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';

function ButtonComponent({label, link, width, height, style}) {
  const theme = useTheme();
  return (
    <div className="formBtn">
      <Button
      href={link}
        style={{
          backgroundColor: theme.palette.text.main,
          color: theme.palette.background.default,
          width: width ? width : '18rem',          
          height: height ? height : '4rem',
          display: 'flex',
          alignItems: 'left',
          justifyContent: 'center',

        }} variant="contained">
        
          <h2>{label}</h2> 
      </Button>
    </div>
  )
}

export default ButtonComponent
