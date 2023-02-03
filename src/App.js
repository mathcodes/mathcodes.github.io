import React from 'react';
import { createTheme } from '@mui/material/styles';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Main, ProjectPage, ThankYou, FormPage } from './pages';
import { BackToTop } from './components';
import ScrollToTop from './utils/ScrollToTop';
import * as dotenv from 'dotenv'
import './App.css'
// import { theme } from './theme/theme';
import { FormspreeProvider } from '@formspree/react';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';


dotenv.config()
const ColorModeContext = React.createContext({ toggleColorMode: () => { } });

export default function ToggleColorMode() {
  const [mode, setMode] = React.useState('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  let theme = React.useMemo(
    () =>
      createTheme({
        breakpoints: {
          values: {
            xs: 0,
            sm: 600,
            md: 1000,
            lg: 1200,
            xl: 1920
          }
        },
        components: {
          MuiButton: {
            defaultProps: {
              disableElevation: true
            },
            styleOverrides: {
              root: {
                textTransform: 'none'
              },
              sizeSmall: {
                padding: '6px 16px'
              },
              sizeMedium: {
                padding: '8px 20px'
              },
              sizeLarge: {
                padding: '11px 24px'
              },
              textSizeSmall: {
                padding: '7px 12px'
              },
              textSizeMedium: {
                padding: '9px 16px'
              },
              textSizeLarge: {
                padding: '12px 16px'
              }
            }
          },
          MuiButtonBase: {
            defaultProps: {
              disableRipple: true
            }
          },
          MuiCardContent: {
            styleOverrides: {
              root: {
                padding: '32px 24px',
                '&:last-child': {
                  paddingBottom: '32px'
                }
              }
            }
          },
          MuiCardHeader: {
            defaultProps: {
              titleTypographyProps: {
                variant: 'h6'
              },
              subheaderTypographyProps: {
                variant: 'body2'
              }
            },
            styleOverrides: {
              root: {
                padding: '32px 24px'
              }
            }
          },
          MuiCssBaseline: {
            styleOverrides: {
              '*': {
                boxSizing: 'border-box',
                margin: 0,
                padding: 0
              },
              html: {
                MozOsxFontSmoothing: 'grayscale',
                WebkitFontSmoothing: 'antialiased',
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100%',
                width: '100%'
              },
              body: {
                display: 'flex',
                flex: '1 1 auto',
                flexDirection: 'column',
                minHeight: '100%',
                width: '100%'
              },
              '#__next': {
                display: 'flex',
                flex: '1 1 auto',
                flexDirection: 'column',
                height: '100%',
                width: '100%'
              }
            }
          },
          MuiOutlinedInput: {
            styleOverrides: {
              notchedOutline: {
                borderColor: '#E6E8F0'
              }
            }
          },
          MuiTableHead: {
            // styleOverrides: {
            //   root: {
            //     backgroundColor: theme.palette.primary.main,
            //     '.MuiTableCell-root': {
            //       color: theme.palette.primary.main
            //     },
            //     borderBottom: 'none',
            //     '& .MuiTableCell-root': {
            //       borderBottom: 'none',
            //       fontSize: '12px',
            //       fontWeight: 600,
            //       lineHeight: 1,
            //       letterSpacing: 0.5,
            //       textTransform: 'uppercase'
            //     },
            //     '& .MuiTableCell-paddingCheckbox': {
            //       paddingTop: 4,
            //       paddingBottom: 4
            //     }
            //   }
            // }
          }
        },
        palette: {
          mode,
          primary: {
            main: '#14213d',
          },
          divider: '#E6E8F0',
          info: {
            main: '#2196F3',
            light: '#64B6F7',
            dark: '#0B79D0',
            contrastText: '#FFFFFF'
          },
          warning: {
            main: '#FFB020',
            light: '#FFBF4C',
            dark: '#B27B16',
            contrastText: '#FFFFFF'
          },
          error: {
            main: '#D14343',
            light: '#DA6868',
            dark: '#922E2E',
            contrastText: '#FFFFFF'
          },
          text: {
            main: '#4e6e5d',
            light: '#fff',
          },
        },
        shape: {
          borderRadius: 8
        },
        shadows: [
          'none',
          '0px 1px 1px rgba(100, 116, 139, 0.06), 0px 1px 2px rgba(100, 116, 139, 0.1)',
          '0px 1px 2px rgba(100, 116, 139, 0.12)',
          '0px 1px 4px rgba(100, 116, 139, 0.12)',
          '0px 1px 5px rgba(100, 116, 139, 0.12)',
          '0px 1px 6px rgba(100, 116, 139, 0.12)',
          '0px 2px 6px rgba(100, 116, 139, 0.12)',
          '0px 3px 6px rgba(100, 116, 139, 0.12)',
          '0px 2px 4px rgba(31, 41, 55, 0.06), 0px 4px 6px rgba(100, 116, 139, 0.12)',
          '0px 5px 12px rgba(100, 116, 139, 0.12)',
          '0px 5px 14px rgba(100, 116, 139, 0.12)',
          '0px 5px 15px rgba(100, 116, 139, 0.12)',
          '0px 6px 15px rgba(100, 116, 139, 0.12)',
          '0px 7px 15px rgba(100, 116, 139, 0.12)',
          '0px 8px 15px rgba(100, 116, 139, 0.12)',
          '0px 9px 15px rgba(100, 116, 139, 0.12)',
          '0px 10px 15px rgba(100, 116, 139, 0.12)',
          '0px 12px 22px -8px rgba(100, 116, 139, 0.25)',
          '0px 13px 22px -8px rgba(100, 116, 139, 0.25)',
          '0px 14px 24px -8px rgba(100, 116, 139, 0.25)',
          '0px 10px 10px rgba(31, 41, 55, 0.04), 0px 20px 25px rgba(31, 41, 55, 0.1)',
          '0px 25px 50px rgba(100, 116, 139, 0.25)',
          '0px 25px 50px rgba(100, 116, 139, 0.25)',
          '0px 25px 50px rgba(100, 116, 139, 0.25)',
          '0px 25px 50px rgba(100, 116, 139, 0.25)'
        ],
        typography: {
          button: {
            fontWeight: 600
          },
          fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
          body1: {
            fontSize: '1rem',
            fontWeight: 400,
            lineHeight: 1.5
          },
          body2: {
            fontSize: '0.875rem',
            fontWeight: 400,
            lineHeight: 1.57
          },
          subtitle1: {
            fontSize: '1rem',
            fontWeight: 500,
            lineHeight: 1.75
          },
          subtitle2: {
            fontSize: '0.875rem',
            fontWeight: 500,
            lineHeight: 1.57
          },
          overline: {
            fontSize: '0.75rem',
            fontWeight: 600,
            letterSpacing: '0.5px',
            lineHeight: 2.5,
            textTransform: 'uppercase'
          },
          caption: {
            fontSize: '0.75rem',
            fontWeight: 400,
            lineHeight: 1.66
          },
          h1: {
            fontWeight: 700,
            fontSize: '3.5rem',
            lineHeight: 1.375
          },
          h2: {
            fontWeight: 700,
            fontSize: '3rem',
            lineHeight: 1.375
          },
          h3: {
            fontWeight: 700,
            fontSize: '2.25rem',
            lineHeight: 1.375
          },
          h4: {
            fontWeight: 700,
            fontSize: '2rem',
            lineHeight: 1.375
          },
          h5: {
            fontWeight: 600,
            fontSize: '1.5rem',
            lineHeight: 1.375
          },
          h6: {
            fontWeight: 600,
            fontSize: '1.125rem',
            lineHeight: 1.375
          }
        },
      }
      ),
    [mode]
  );

  theme = createTheme(theme, {
    palette: {
      primary: {
        main: theme.palette.mode === 'dark' ? '#101935' : '#101935',
      },
      secondary: {
        main: theme.palette.mode === 'dark' ? '#222' : '#e5e5e5',
      },
      success: {
        main: '#a92ca2',
      },
      action: {
        active: theme.palette.mode === 'dark' ? '#a92ca2' : '#272822',
        background: theme.palette.mode === 'dark' ? '#272822' : '#a92ca2',
        hover: '#a92ca2',
        selected: '#a92ca2',
        disabledBackground: '#a92ca2',
        disabled: '#a92ca2'
      },
      text: {
        main: theme.palette.mode === 'dark' ? '#e5e5e5' : '#101935',
        light: '#fff',
      },
      background: {
        default: theme.palette.mode === 'dark' ? '#222' : '#e5e5e5',
        paper:  theme.palette.mode === 'dark' ? '#222' : '#e5e5e5',
      },
    }
  });


  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <App theme={theme} />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
export function App({ theme }) {
  const colorMode = React.useContext(ColorModeContext);

  console.log(theme.palette.mode)


  return (
    <>
      <div className="DLSwitch">
        <IconButton  sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
          {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
        </div>
      <FormspreeProvider project={process.env.YOUR_PROJECT_ID}>
        <Router>
          <ScrollToTop />

          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/projects" exact component={ProjectPage} />
            <Route path="/thankyou" exact component={ThankYou} />
            <Route path="/formpage" exact component={FormPage} />
            <Redirect to="/" />
          </Switch>
        </Router>
        <BackToTop theme={theme}/>
      </FormspreeProvider>
    </>
  );
}

;