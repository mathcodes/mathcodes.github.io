import React, { createContext, useState } from 'react'
import { themeData } from '../data/themeData'
import { createTheme } from '@mui/material';
export const ThemeContext = createContext()

function ThemeContextProvider(props) {
		const theme2 = createTheme({
		spacing: [0, 4, 8, 16, 32, 64],
	});
const [theme, setTheme] = useState(themeData.theme)
	const [drawerOpen, setDrawerOpen] = useState(false)
	
 
	const setHandleDrawer = () => {
		setDrawerOpen(!drawerOpen);
		setTheme(themeData.theme)
	}

	const value = { theme, theme2, drawerOpen, setHandleDrawer }
	return (
		<ThemeContext.Provider value={value}>
			{props.children}
		</ThemeContext.Provider>
	)
}

export default ThemeContextProvider