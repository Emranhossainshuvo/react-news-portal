import { useContext } from "react";
import NewsCards from "./NewsCars/NewsCards";
import { SearchContext } from "../../Contexts/SearchContext/SearchContext";
import Banner from "./Banner/Banner";
import Navbar from "../../components/Shared/Navbar/Navbar";

const Home = () => {
    const { searchQuery } = useContext(SearchContext);

    return (
        <>
            <div className="relative">
                <div
                    style={{ backgroundImage: "url(https://i.ibb.co/VNKR1R5/2149501563.jpg)" }}
                    className="absolute inset-0 bg-fixed bg-cover bg-center z-0"
                >
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-10"></div>
                <div className="relative z-20">
                    {/* <Navbar /> */}
                    {!searchQuery && <Banner />}
                </div>
            </div>
            <NewsCards />
        </>
    );
};

export default Home;
