import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ThemeContextProvider from './contexts/ThemeContext'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const theme = localStorage.getItem('theme');


ReactDOM.render(
    <ThemeContextProvider>

      <App />
    </ThemeContextProvider>,
  document.getElementById('root')
);

reportWebVitals()