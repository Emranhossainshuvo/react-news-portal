import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Shared/Navbar/Navbar";
import Footer from "../components/Shared/Footer/Footer";

const Main = () => {

    const location = useLocation();

    const isAddNews = location.pathname === "/addNews"

    return (
        <div className="font-all">
            {!isAddNews && <Navbar />}
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;