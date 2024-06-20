import { createContext, useState } from "react";


export const ThemeContext = createContext();

const ThemeProvider = ({children}) => {

    const [theme, setTheme] = useState(false)

    const contextData = {
        setTheme,
        theme
    }
    
    return (
        <ThemeContext.Provider value={contextData}>
            {children}
        </ThemeContext.Provider>
    )
};

export default ThemeProvider;