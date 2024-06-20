import { useContext } from "react";
import NewsCards from "./NewsCars/NewsCards";
import { SearchContext } from "../../Contexts/SearchContext/SearchContext";
import { Banner } from "flowbite-react";

const Home = () => {

    const { searchQuery } = useContext(SearchContext);

    return (
        <>
            <Banner />
            <NewsCards />
        </>
    );
};

export default Home;