Show a code example of a full stack react app with typescript, tailwindcss, nextjs

import React from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import {
  ThemeProvider,
  CSSReset,
  ColorModeProvider,
  DarkMode,
  Flex,
  Box,
  Text,
  Heading
} from '@chakra-ui/core';
import { Global, css } from '@emotion/core';
import { AnimatePresence } from 'framer-motion';

// Tailwind CSS
import 'tailwindcss/dist/base.min.css';
import 'tailwindcss/dist/components.min.css';
import 'tailwindcss/dist/utilities.min.css';

// Custom Global Styles
const GlobalStyle = ({ children }) => {
  return (
    <>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
          }
          html,
          body {
            font-family: 'Roboto', sans-serif;
            margin: 0;
            padding: 0;
            background-color: #ffffff;
            color: #000000;
          }
        `}
      />
      {children}
    </>
  );
};

// App Component
const App = () => {
  // Router Hook
  const router = useRouter();

  // Redux Hook
  const user = useSelector((state) => state.user);

  return (
    <ThemeProvider>
      <CSSReset />
      <ColorModeProvider>
        <GlobalStyle>
          <AnimatePresence exitBeforeEnter>
            <Flex
              direction="column"
              justify="center"
              align="center"
              minH="100vh"
            >
              <Box p={5}>
                <Heading as="h1">Welcome {user.name}!</Heading>
                <Text>You're now on the {router.pathname} page.</Text>
              </Box>
            </Flex>
          </AnimatePresence>
        </GlobalStyle>
      </ColorModeProvider>
    </ThemeProvider>
  );
};

export default App;

// now implement auth0 for user login and store user credentials in mongodb db

import React, { useState } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import {
  ThemeProvider,
  CSSReset,
  ColorModeProvider,
  DarkMode,
  Flex,
  Box,
  Text,
  Heading,
} from "@chakra-ui/core";
import { Global, css } from "@emotion/core";
import { AnimatePresence } from "framer-motion";

// Auth0 integration
import { useAuth0 } from "@auth0/auth0-react";

// Tailwind CSS
import "tailwindcss/dist/base.min.css";
import "tailwindcss/dist/components.min.css";
import "tailwindcss/dist/utilities.min.css";

// Custom Global Styles
const GlobalStyle = ({ children }) => {
  return (
    <>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
          }
          html,
          body {
            font-family: "Roboto", sans-serif;
            margin: 0;
            padding: 0;
            background-color: #ffffff;
            color: #000000;
          }
        `}
      />
      {children}
    </>
  );
};

// App Component
const App = () => {
  // Auth0 Hook
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

  // Router Hook
  const router = useRouter();

  // Redux Hook
  const storeUser = useSelector((state) => state.user);

  // State Hook
  const [userData, setUserData] = useState({});

  // Store user data in MongoDB
  const storeUserData = async (user) => {
    const token = await user.getIdToken();
    const response = await fetch(`${"https://api.spoonacular.com/recipes/complexSearch?apiKey=30f3274cbfe143059c9b4053147fba68&includeNutrition=true"}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data = await response.json();
    setUserData(data);
  };

  // Login Handler
  const handleLogin = async () => {
    try {
      await loginWithRedirect({
        redirect_uri: window.location.origin,
      });
      const user = await storeUserData(user);
      setUserData(user);
    } catch (error) {
      console.log(error);
    }
  };

  // Logout Handler
  const handleLogout = async () => {
    try {
      await logout({
        returnTo: window.location.origin,
      });
      setUserData({});
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ThemeProvider>
      <CSSReset />
      <ColorModeProvider>
        <GlobalStyle>
          <AnimatePresence exitBeforeEnter>
            <Flex
              direction="column"
              justify="center"
              align="center"
              minH="100vh"
            >
              <Box p={5}>
                {isAuthenticated ? (
                  <>
                    <Heading as="h1">Welcome {user.name}!</Heading>
                    <Text>You're now on the {router.pathname} page.</Text>
                    <button onClick={handleLogout}>Logout</button>
                  </>
                ) : (
                  <>
                    <Heading as="h1">Welcome {storeUser.name}!</Heading>
                    <Text>You're now on the {router.pathname} page.</Text>
                    <button onClick={handleLogin}>Login</button>
                  </>
                )}
              </Box>
            </Flex>
          </AnimatePresence>
        </GlobalStyle>
      </ColorModeProvider>
    </ThemeProvider>
  );
};

export default App;

// create a searchcomponent that allows logged in users to list some ingredients, then qurey the spoonacular api to get recipes that render on the ui

import React, { useState } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import {
  ThemeProvider,
  CSSReset,
  ColorModeProvider,
  DarkMode,
  Flex,
  Box,
  Text,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Button,
  Stack,
  AspectRatioBox,
  Image,
} from "@chakra-ui/core";
import { Global, css } from "@emotion/core";
import { AnimatePresence } from "framer-motion";

// Auth0 integration
import { useAuth0 } from "@auth0/auth0-react";

// Tailwind CSS
import "tailwindcss/dist/base.min.css";
import "tailwindcss/dist/components.min.css";
import "tailwindcss/dist/utilities.min.css";

// Spoonacular API
import { getRecipes } from "../api/spoonacular";

// Custom Global Styles
const GlobalStyle = ({ children }) => {
  return (
    <>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
          }
          html,
          body {
            font-family: "Roboto", sans-serif;
            margin: 0;
            padding: 0;
            background-color: #ffffff;
            color: #000000;
          }
        `}
      />
      {children}
    </>
  );
};

// App Component
const App = () => {
  // Auth0 Hook
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

  // Router Hook
  const router = useRouter();

  // Redux Hook
  const storeUser = useSelector((state) => state.user);

  // State Hook
  const [userData, setUserData] = useState({});
  const [input, setInput] = useState("");
  const [recipes, setRecipes] = useState(null);

  // Store user data in MongoDB
  const storeUserData = async (user) => {
    const token = await user.getIdToken();
    const response = await fetch(`${"<YOUR_API_ENPOINT_HERE>"}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data = await response.json();
    setUserData(data);
  };

  // Login Handler
  const handleLogin = async () => {
    try {
      await loginWithRedirect({
        redirect_uri: window.location.origin,
      });
      const user = await storeUserData(user);
      setUserData(user);
    } catch (error) {
      console.log(error);
    }
  };

  // Logout Handler
  const handleLogout = async () => {
    try {
      await logout({
        returnTo: window.location.origin,
      });
      setUserData({});
    } catch (error) {
      console.log(error);
    }
  };

  // Search Handler
  const handleSearch = async (e) => {
    e.preventDefault();
    const data = await getRecipes(input);
    setRecipes(data);
    setInput("");
  };

  return (
    <ThemeProvider>
      <CSSReset />
      <ColorModeProvider>
        <GlobalStyle>
          <AnimatePresence exitBeforeEnter>
            <Flex direction="column" justify="center" align="center" minH="100vh">
              <Box p={5}>
                {isAuthenticated ? (
                  <>
                    <Heading as="h1">Welcome {user.name}!</Heading>
                    <Text>You're now on the {router.pathname} page.</Text>
                    <form onSubmit={handleSearch}>
                      <InputGroup>
                        <InputLeftAddon>Ingredients</InputLeftAddon>
                        <Input
                          placeholder="Enter ingredients separated by comma"
                          onChange={(e) => setInput(e.target.value)}
                          value={input}
                        />
                        <InputRightAddon children={<Button type="submit">Search</Button>} />
                      </InputGroup>
                    </form>
                    {recipes && ( // If recipes exist, render them
                      <Stack spacing={3}>
                        {recipes.map((recipe) => (
                          <Box key={recipe.id} p={5} shadow="md" borderWidth="1px">
                            <Flex>
                              <AspectRatioBox ratio={1}>
                                <Image src={recipe.image} alt={recipe.title} />
                              </AspectRatioBox>
                              <Box p={5}>
                                <Heading as="h4" size="md">
                                  {recipe.title}
                                </Heading>
                                <Text>Ready in {recipe.readyInMinutes} minutes</Text>
                                <Text>Servings: {recipe.servings}</Text>
                              </Box>
                            </Flex>
                          </Box>
                        ))}
                      </Stack>
                    )}
                    <button onClick={handleLogout}>Logout</button>
                  </>
                ) : (
                  <>
                    <Heading as="h1">Welcome to Next.js + Auth0 + MongoDB!</Heading>
                    <Text>You're now on the {router.pathname} page.</Text>
                    <button onClick={handleLogin}>Login</button>
                  </>
                )}
              </Box>
            </Flex>
          </AnimatePresence>
        </GlobalStyle>
      </ColorModeProvider>
    </ThemeProvider>
  );
};



// now implement auth0 for user login and store user credentials in mongodb db

import React, { useState } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import {
  ThemeProvider,
  CSSReset,
  ColorModeProvider,
  DarkMode,
  Flex,
  Box,
  Text,
  Heading,
} from "@chakra-ui/core";
import { Global, css } from "@emotion/core";
import { AnimatePresence } from "framer-motion";

// Auth0 integration
import { useAuth0 } from "@auth0/auth0-react";

// Tailwind CSS
import "tailwindcss/dist/base.min.css";
import "tailwindcss/dist/components.min.css";
import "tailwindcss/dist/utilities.min.css";

// Custom Global Styles
const GlobalStyle = ({ children }) => {
  return (
    <>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
          }
          html,
          body {
            font-family: "Roboto", sans-serif;
            margin: 0;
            padding: 0;
            background-color: #ffffff;
            color: #000000;
          }
        `}
      />
      {children}
    </>
  );
};

// App Component
const App = () => {
  // Auth0 Hook
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

  // Router Hook
  const router = useRouter();

  // Redux Hook
  const storeUser = useSelector((state) => state.user);

  // State Hook
  const [userData, setUserData] = useState({});

  // Store user data in MongoDB
  const storeUserData = async (user) => {
    const token = await user.getIdToken();
    const response = await fetch(`${"<YOUR_API_ENPOINT_HERE>"}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data = await response.json();
    setUserData(data);
  };

  // Login Handler
  const handleLogin = async () => {
    try {
      await loginWithRedirect({
        redirect_uri: window.location.origin,
      });
      const user = await storeUserData(user);
      setUserData(user);
    } catch (error) {
      console.log(error);
    }
  };

  // Logout Handler
  const handleLogout = async () => {
    try {
      await logout({
        returnTo: window.location.origin,
      });
      setUserData({});
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ThemeProvider>
      <CSSReset />
      <ColorModeProvider>
        <GlobalStyle>
          <AnimatePresence exitBeforeEnter>
            <Flex
              direction="column"
              justify="center"
              align="center"
              minH="100vh"
            >
              <Box p={5}>
                {isAuthenticated ? (
                  <>
                    <Heading as="h1">Welcome {user.name}!</Heading>
                    <Text>You're now on the {router.pathname} page.</Text>
                    <button onClick={handleLogout}>Logout</button>
                  </>
                ) : (
                  <>
                    <Heading as="h1">Welcome {storeUser.name}!</Heading>
                    <Text>You're now on the {router.pathname} page.</Text>
                    <button onClick={handleLogin}>Login</button>
                  </>
                )}
              </Box>
            </Flex>
          </AnimatePresence>
        </GlobalStyle>
      </ColorModeProvider>
    </ThemeProvider>
  );
};


export default App;

                      create a searchcomponent that allows logged in users to list some ingredients, then qurey the spoonacular api to get recipes that render on the ui

import React, { useState } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import {
  ThemeProvider,
  CSSReset,
  ColorModeProvider,
  DarkMode,
  Flex,
  Box,
  Text,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Button,
  Stack,
  AspectRatioBox,
  Image,
} from "@chakra-ui/core";
import { Global, css } from "@emotion/core";
import { AnimatePresence } from "framer-motion";

// Auth0 integration
import { useAuth0 } from "@auth0/auth0-react";

// Tailwind CSS
import "tailwindcss/dist/base.min.css";
import "tailwindcss/dist/components.min.css";
import "tailwindcss/dist/utilities.min.css";

// Spoonacular API
import { getRecipes } from "../api/spoonacular";

// Custom Global Styles
const GlobalStyle = ({ children }) => {
  return (
    <>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
          }
          html,
          body {
            font-family: "Roboto", sans-serif;
            margin: 0;
            padding: 0;
            background-color: #ffffff;
            color: #000000;
          }
        `}
      />
      {children}
    </>
  );
};

// App Component
const App = () => {
  // Auth0 Hook
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

  // Router Hook
  const router = useRouter();

  // Redux Hook
  const storeUser = useSelector((state) => state.user);

  // State Hook
  const [userData, setUserData] = useState({});
  const [input, setInput] = useState("");
  const [recipes, setRecipes] = useState(null);

  // Store user data in MongoDB
  const storeUserData = async (user) => {
    const token = await user.getIdToken();
    const response = await fetch(`${"<YOUR_API_ENPOINT_HERE>"}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data = await response.json();
    setUserData(data);
  };

  // Login Handler
  const handleLogin = async () => {
    try {
      await loginWithRedirect({
        redirect_uri: window.location.origin,
      });
      const user = await storeUserData(user);
      setUserData(user);
    } catch (error) {
      console.log(error);
    }
  };

  // Logout Handler
  const handleLogout = async () => {
    try {
      await logout({
        returnTo: window.location.origin,
      });
      setUserData({});
    } catch (error) {
      console.log(error);
    }
  };

  // Search Handler
  const handleSearch = async (e) => {
    e.preventDefault();
    const data = await getRecipes(input);
    setRecipes(data);
    setInput("");
  };

  return (
    <ThemeProvider>
      <CSSReset />
      <ColorModeProvider>
        <GlobalStyle>
          <AnimatePresence exitBeforeEnter>
            <Flex direction="column" justify="center" align="center" minH="100vh">
              <Box p={5}>
                {isAuthenticated ? (
                  <>
                    <Heading as="h1">Welcome {user.name}!</Heading>
                    <Text>You're now on the {router.pathname} page.</Text>
                    <form onSubmit={handleSearch}>
                      <InputGroup>
                        <InputLeftAddon>Ingredients</InputLeftAddon>
                        <Input
                          placeholder="Enter ingredients separated by comma"
                          onChange={(e) => setInput(e.target.value)}
                          value={input}
                        />
                        <InputRightAddon children={<Button type="submit">Search</Button>} />
                      </InputGroup>
                    </form>
                    <Stack spacing={4}>
                      {recipes?.map((recipe, index) => (
                        <AspectRatioBox maxW="sm" ratio={16 / 9}>
                          <Image
                            src={`https://spoonacular.com/recipeImages/${recipe.image}`}
                            alt={recipe.title}
                            fallbackSrc="https://via.placeholder.com/480x270"
                            objectFit="cover"
                            w="100%"
                          />
                        </AspectRatioBox>
                      ))}
                    </Stack>
                    <button onClick={handleLogout}>Logout</button>
                  </>
                ) : (
                  <>
                    <Heading as="h1">Welcome {storeUser.name}!</Heading>
                    <Text>You're now on the {router.pathname} page.</Text>
                    <button onClick={handleLogin}>Login</button>
                  </>
                )}
              </Box>
            </Flex>
          </AnimatePresence>
        </GlobalStyle>
      </ColorModeProvider>
    </ThemeProvider>
  );
};

export default App;