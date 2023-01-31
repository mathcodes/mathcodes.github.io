import React, { createContext, useState } from 'react'
import { themeData } from '../data/themeData'
export const ThemeContext = createContext()

function ThemeContextProvider(props) {
const [theme, setTheme] = useState(themeData.theme)
	const [drawerOpen, setDrawerOpen] = useState(false)
	
	const setHandleDrawer = () => {
		setDrawerOpen(!drawerOpen);
		setTheme(themeData.theme)
		console.log(theme)
	}

	const value = { theme, drawerOpen, setHandleDrawer }
	return (
		<ThemeContext.Provider value={value} theme={theme}>
			{props.children}
		</ThemeContext.Provider>
	)
}

export default ThemeContextProvider

