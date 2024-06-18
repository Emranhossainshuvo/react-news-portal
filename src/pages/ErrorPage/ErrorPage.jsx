import { Link } from "react-router-dom";
import "./error.css"

const ErrorPage = () => {


    return (
        <>
            <div className="grid h-screen px-4 bg-white place-content-center">
                <div className="text-center">
                    <img
                        className="md:max-w-[60vw]"
                        src="https://i.ibb.co/zZRCCxp/20824298-6342464.jpg"
                        alt=""
                    />


                    <Link to='/'>
                        <button className="btn text-[#1b2e35] font-bold text-1xl bg-[#aeedcf] hover:bg-[#c7f1dc] hover:shadow-lg mt-10">Home</button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default ErrorPage;