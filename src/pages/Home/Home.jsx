import { useContext } from "react";
import NewsCards from "./NewsCars/NewsCards";
import { SearchContext } from "../../Contexts/SearchContext/SearchContext";
import Banner from "./Banner/Banner";
import Navbar from "../../components/Shared/Navbar/Navbar";
// import { Banner } from "flowbite-react";

const Home = () => {

    const { searchQuery } = useContext(SearchContext);

    return (
        <>
            <div className="dark:bg-gradient-to-r dark:from-[#0f132a] dark:via-[#15365e] dark:to-[#18173b]">
                {/* <Navbar /> */}
                {!searchQuery &&
                    <Banner />
                }
            </div>
                <NewsCards />
        </>
    );
};

export default Home;