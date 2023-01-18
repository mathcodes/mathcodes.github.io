import React from 'react'
import Button from '@mui/material/Button';

function ButtonComponent({label, link, width, height, style}) {
  return (
    <div className="formBtn">
      <Button
        style={{
          backgroundColor: 'darkolivegreen',
          color: '#222',
          width: width ? width : '18rem',          
          height: height ? height : '4rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }} variant="contained">
        <a style={{ backgroundColor: 'none' }} href={link}>
          <h2>{label}</h2></a>
      </Button>
    </div>
  )
}

export default ButtonComponent
