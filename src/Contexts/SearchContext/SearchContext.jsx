import { createContext } from "react";


export const SearchContext = createContext();

export const SearchProvider = ({children}) => {

    const [searchQuery, setSearchQuery] = useState('');


    const contextData = {

    }

    return (
        <SearchContext.Provider value={contextData}>

        </SearchContext.Provider>
    )
}