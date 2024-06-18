import { createContext, useState } from "react";


export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {

    const [searchQuery, setSearchQuery] = useState('');


    const contextData = {
        searchQuery,
        setSearchQuery
    }

    return (
        <SearchContext.Provider value={contextData}>
            {children}
        </SearchContext.Provider>
    )
}