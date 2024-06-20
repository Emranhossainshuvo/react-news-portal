import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar/Navbar";
import Footer from "../components/Shared/Footer/Footer";

const Main = () => {
    return (
        <div className="font-all">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;